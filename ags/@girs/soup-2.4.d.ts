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

declare module 'gi://Soup?version=2.4' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Soup {
        /**
         * Soup-2.4
         */

        /**
         * The supported address families.
         */

        /**
         * The supported address families.
         */
        export namespace AddressFamily {
            export const $gtype: GObject.GType<AddressFamily>;
        }

        enum AddressFamily {
            /**
             * an invalid %SoupAddress
             */
            INVALID,
            /**
             * an IPv4 address
             */
            IPV4,
            /**
             * an IPv6 address
             */
            IPV6,
        }

        export namespace CacheResponse {
            export const $gtype: GObject.GType<CacheResponse>;
        }

        enum CacheResponse {
            FRESH,
            NEEDS_VALIDATION,
            STALE,
        }
        /**
         * The type of cache; this affects what kinds of responses will be
         * saved.
         */

        /**
         * The type of cache; this affects what kinds of responses will be
         * saved.
         */
        export namespace CacheType {
            export const $gtype: GObject.GType<CacheType>;
        }

        enum CacheType {
            /**
             * a single-user cache
             */
            SINGLE_USER,
            /**
             * a shared cache
             */
            SHARED,
        }

        export namespace ConnectionState {
            export const $gtype: GObject.GType<ConnectionState>;
        }

        enum ConnectionState {
            NEW,
            CONNECTING,
            IDLE,
            IN_USE,
            REMOTE_DISCONNECTED,
            DISCONNECTED,
        }
        /**
         * The policy for accepting or rejecting cookies returned in
         * responses.
         */

        /**
         * The policy for accepting or rejecting cookies returned in
         * responses.
         */
        export namespace CookieJarAcceptPolicy {
            export const $gtype: GObject.GType<CookieJarAcceptPolicy>;
        }

        enum CookieJarAcceptPolicy {
            /**
             * accept all cookies unconditionally.
             */
            ALWAYS,
            /**
             * reject all cookies unconditionally.
             */
            NEVER,
            /**
             * accept all cookies set by
             * the main document loaded in the application using libsoup. An
             * example of the most common case, web browsers, would be: If
             * http://www.example.com is the page loaded, accept all cookies set
             * by example.com, but if a resource from http://www.third-party.com
             * is loaded from that page reject any cookie that it could try to
             * set. For libsoup to be able to tell apart first party cookies from
             * the rest, the application must call soup_message_set_first_party()
             * on each outgoing #SoupMessage, setting the #SoupURI of the main
             * document. If no first party is set in a message when this policy is
             * in effect, cookies will be assumed to be third party by default.
             */
            NO_THIRD_PARTY,
            /**
             * accept all cookies
             * set by the main document loaded in the application using libsoup, and
             * from domains that have previously set at least one cookie when loaded
             * as the main document. An example of the most common case, web browsers,
             * would be: if http://www.example.com is the page loaded, accept all
             * cookies set by example.com, but if a resource from http://www.third-party.com
             * is loaded from that page, reject any cookie that it could try to
             * set unless it already has a cookie in the cookie jar. For libsoup to
             * be able to tell apart first party cookies from the rest, the
             * application must call soup_message_set_first_party() on each outgoing
             * #SoupMessage, setting the #SoupURI of the main document. If no first
             * party is set in a message when this policy is in effect, cookies will
             * be assumed to be third party by default. Since 2.72.
             */
            GRANDFATHERED_THIRD_PARTY,
        }
        /**
         * Date formats that soup_date_to_string() can use.
         *
         * `SOUP_DATE_HTTP` and `SOUP_DATE_COOKIE` always coerce the time to
         * UTC. `SOUP_DATE_ISO8`601_XMLRPC uses the time as given, ignoring the
         * offset completely. `SOUP_DATE_RFC2`822 and the other ISO 8601
         * variants use the local time, appending the offset information if
         * available.
         *
         * This enum may be extended with more values in future releases.
         */

        /**
         * Date formats that soup_date_to_string() can use.
         *
         * `SOUP_DATE_HTTP` and `SOUP_DATE_COOKIE` always coerce the time to
         * UTC. `SOUP_DATE_ISO8`601_XMLRPC uses the time as given, ignoring the
         * offset completely. `SOUP_DATE_RFC2`822 and the other ISO 8601
         * variants use the local time, appending the offset information if
         * available.
         *
         * This enum may be extended with more values in future releases.
         */
        export namespace DateFormat {
            export const $gtype: GObject.GType<DateFormat>;
        }

        enum DateFormat {
            /**
             * RFC 1123 format, used by the HTTP "Date" header. Eg
             * "Sun, 06 Nov 1994 08:49:37 GMT"
             */
            HTTP,
            /**
             * The format for the "Expires" timestamp in the
             * Netscape cookie specification. Eg, "Sun, 06-Nov-1994 08:49:37 GMT".
             */
            COOKIE,
            /**
             * RFC 2822 format, eg "Sun, 6 Nov 1994 09:49:37 -0100"
             */
            RFC2822,
            /**
             * ISO 8601 date/time with no optional
             * punctuation. Eg, "19941106T094937-0100".
             */
            ISO8601_COMPACT,
            /**
             * ISO 8601 date/time with all optional
             * punctuation. Eg, "1994-11-06T09:49:37-01:00".
             */
            ISO8601_FULL,
            /**
             * An alias for `SOUP_DATE_ISO8`601_FULL.
             */
            ISO8601,
            /**
             * ISO 8601 date/time as used by XML-RPC.
             * Eg, "19941106T09:49:37".
             */
            ISO8601_XMLRPC,
        }
        /**
         * How a message body is encoded for transport
         */

        /**
         * How a message body is encoded for transport
         */
        export namespace Encoding {
            export const $gtype: GObject.GType<Encoding>;
        }

        enum Encoding {
            /**
             * unknown / error
             */
            UNRECOGNIZED,
            /**
             * no body is present (which is not the same as a
             * 0-length body, and only occurs in certain places)
             */
            NONE,
            /**
             * Content-Length encoding
             */
            CONTENT_LENGTH,
            /**
             * Response body ends when the connection is closed
             */
            EOF,
            /**
             * chunked encoding (currently only supported
             * for response)
             */
            CHUNKED,
            /**
             * multipart/byteranges (Reserved for future
             * use: NOT CURRENTLY IMPLEMENTED)
             */
            BYTERANGES,
        }
        /**
         * Indicates the HTTP protocol version being used.
         */

        /**
         * Indicates the HTTP protocol version being used.
         */
        export namespace HTTPVersion {
            export const $gtype: GObject.GType<HTTPVersion>;
        }

        enum HTTPVersion {
            /**
             * HTTP 1.0 (RFC 1945)
             */
            HTTP_1_0,
            /**
             * HTTP 1.1 (RFC 2616)
             */
            HTTP_1_1,
        }

        export namespace KnownStatusCode {
            export const $gtype: GObject.GType<KnownStatusCode>;
        }

        enum KnownStatusCode {
            NONE,
            CANCELLED,
            CANT_RESOLVE,
            CANT_RESOLVE_PROXY,
            CANT_CONNECT,
            CANT_CONNECT_PROXY,
            SSL_FAILED,
            IO_ERROR,
            MALFORMED,
            TRY_AGAIN,
            TOO_MANY_REDIRECTS,
            TLS_FAILED,
            CONTINUE,
            SWITCHING_PROTOCOLS,
            PROCESSING,
            OK,
            CREATED,
            ACCEPTED,
            NON_AUTHORITATIVE,
            NO_CONTENT,
            RESET_CONTENT,
            PARTIAL_CONTENT,
            MULTI_STATUS,
            MULTIPLE_CHOICES,
            MOVED_PERMANENTLY,
            FOUND,
            MOVED_TEMPORARILY,
            SEE_OTHER,
            NOT_MODIFIED,
            USE_PROXY,
            NOT_APPEARING_IN_THIS_PROTOCOL,
            TEMPORARY_REDIRECT,
            BAD_REQUEST,
            UNAUTHORIZED,
            PAYMENT_REQUIRED,
            FORBIDDEN,
            NOT_FOUND,
            METHOD_NOT_ALLOWED,
            NOT_ACCEPTABLE,
            PROXY_AUTHENTICATION_REQUIRED,
            PROXY_UNAUTHORIZED,
            REQUEST_TIMEOUT,
            CONFLICT,
            GONE,
            LENGTH_REQUIRED,
            PRECONDITION_FAILED,
            REQUEST_ENTITY_TOO_LARGE,
            REQUEST_URI_TOO_LONG,
            UNSUPPORTED_MEDIA_TYPE,
            REQUESTED_RANGE_NOT_SATISFIABLE,
            INVALID_RANGE,
            EXPECTATION_FAILED,
            UNPROCESSABLE_ENTITY,
            LOCKED,
            FAILED_DEPENDENCY,
            INTERNAL_SERVER_ERROR,
            NOT_IMPLEMENTED,
            BAD_GATEWAY,
            SERVICE_UNAVAILABLE,
            GATEWAY_TIMEOUT,
            HTTP_VERSION_NOT_SUPPORTED,
            INSUFFICIENT_STORAGE,
            NOT_EXTENDED,
        }
        /**
         * Describes the level of logging output to provide.
         */

        /**
         * Describes the level of logging output to provide.
         */
        export namespace LoggerLogLevel {
            export const $gtype: GObject.GType<LoggerLogLevel>;
        }

        enum LoggerLogLevel {
            /**
             * No logging
             */
            NONE,
            /**
             * Log the Request-Line or Status-Line and
             * the Soup-Debug pseudo-headers
             */
            MINIMAL,
            /**
             * Log the full request/response headers
             */
            HEADERS,
            /**
             * Log the full headers and request/response
             * bodies.
             */
            BODY,
        }
        /**
         * Describes how #SoupBuffer should use the data passed in by the
         * caller.
         *
         * See also soup_buffer_new_with_owner(), which allows to you create a
         * buffer containing data which is owned by another object.
         */

        /**
         * Describes how #SoupBuffer should use the data passed in by the
         * caller.
         *
         * See also soup_buffer_new_with_owner(), which allows to you create a
         * buffer containing data which is owned by another object.
         */
        export namespace MemoryUse {
            export const $gtype: GObject.GType<MemoryUse>;
        }

        enum MemoryUse {
            /**
             * The memory is statically allocated and
             * constant; libsoup can use the passed-in buffer directly and not
             * need to worry about it being modified or freed.
             */
            STATIC,
            /**
             * The caller has allocated the memory for the
             * #SoupBuffer's use; libsoup will assume ownership of it and free it
             * (with g_free()) when it is done with it.
             */
            TAKE,
            /**
             * The passed-in data belongs to the caller; the
             * #SoupBuffer will copy it into new memory, leaving the caller free
             * to reuse the original memory.
             */
            COPY,
            /**
             * The passed-in data belongs to the caller,
             * but will remain valid for the lifetime of the #SoupBuffer. The
             * difference between this and `SOUP_MEMORY_STATIC` is that if you copy
             * a `SOUP_MEMORY_TEMPORARY` buffer, it will make a copy of the memory
             * as well, rather than reusing the original memory.
             */
            TEMPORARY,
        }
        /**
         * Value passed to soup_message_headers_new() to set certain default
         * behaviors.
         */

        /**
         * Value passed to soup_message_headers_new() to set certain default
         * behaviors.
         */
        export namespace MessageHeadersType {
            export const $gtype: GObject.GType<MessageHeadersType>;
        }

        enum MessageHeadersType {
            /**
             * request headers
             */
            REQUEST,
            /**
             * response headers
             */
            RESPONSE,
            /**
             * multipart body part headers
             */
            MULTIPART,
        }
        /**
         * Priorities that can be set on a #SoupMessage to instruct the
         * message queue to process it before any other message with lower
         * priority.
         */

        /**
         * Priorities that can be set on a #SoupMessage to instruct the
         * message queue to process it before any other message with lower
         * priority.
         */
        export namespace MessagePriority {
            export const $gtype: GObject.GType<MessagePriority>;
        }

        enum MessagePriority {
            /**
             * The lowest priority, the messages
             *   with this priority will be the last ones to be attended.
             */
            VERY_LOW,
            /**
             * Use this for low priority messages, a
             *   #SoupMessage with the default priority will be processed first.
             */
            LOW,
            /**
             * The default priotity, this is the
             *   priority assigned to the #SoupMessage by default.
             */
            NORMAL,
            /**
             * High priority, a #SoupMessage with
             *   this priority will be processed before the ones with the default
             *   priority.
             */
            HIGH,
            /**
             * The highest priority, use this
             *   for very urgent #SoupMessage as they will be the first ones to be
             *   attended.
             */
            VERY_HIGH,
        }
        /**
         * A #SoupRequest error.
         */
        class RequestError extends GLib.Error {
            static $gtype: GObject.GType<RequestError>;

            // Static fields

            /**
             * the URI could not be parsed
             */
            static BAD_URI: number;
            /**
             * the URI scheme is not
             *   supported by this #SoupSession
             */
            static UNSUPPORTED_URI_SCHEME: number;
            /**
             * the server's response could not
             *   be parsed
             */
            static PARSING: number;
            /**
             * the server's response was in an
             *   unsupported format
             */
            static ENCODING: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        class RequesterError extends GLib.Error {
            static $gtype: GObject.GType<RequesterError>;

            // Static fields

            static BAD_URI: number;
            static UNSUPPORTED_URI_SCHEME: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        export namespace SameSitePolicy {
            export const $gtype: GObject.GType<SameSitePolicy>;
        }

        enum SameSitePolicy {
            /**
             * The cookie is exposed with both cross-site and same-site requests
             */
            NONE,
            /**
             * The cookie is withheld on cross-site requests but exposed on cross-site navigations
             */
            LAX,
            /**
             * The cookie is only exposed for same-site requests
             */
            STRICT,
        }
        /**
         * Return value from the #SoupSocket IO methods.
         */

        /**
         * Return value from the #SoupSocket IO methods.
         */
        export namespace SocketIOStatus {
            export const $gtype: GObject.GType<SocketIOStatus>;
        }

        enum SocketIOStatus {
            /**
             * Success
             */
            OK,
            /**
             * Cannot read/write any more at this time
             */
            WOULD_BLOCK,
            /**
             * End of file
             */
            EOF,
            /**
             * Other error
             */
            ERROR,
        }
        /**
         * These represent the known HTTP status code values, plus various
         * network and internal errors.
         *
         * Note that no libsoup functions take or return this type directly;
         * any function that works with status codes will accept unrecognized
         * status codes as well.
         *
         * Prior to 2.44 this type was called
         * <literal>SoupKnownStatusCode</literal>, but the individual values
         * have always had the names they have now.
         */

        /**
         * These represent the known HTTP status code values, plus various
         * network and internal errors.
         *
         * Note that no libsoup functions take or return this type directly;
         * any function that works with status codes will accept unrecognized
         * status codes as well.
         *
         * Prior to 2.44 this type was called
         * <literal>SoupKnownStatusCode</literal>, but the individual values
         * have always had the names they have now.
         */
        export namespace Status {
            export const $gtype: GObject.GType<Status>;
        }

        enum Status {
            /**
             * No status available. (Eg, the message has not
             * been sent yet)
             */
            NONE,
            /**
             * Message was cancelled locally
             */
            CANCELLED,
            /**
             * Unable to resolve destination host name
             */
            CANT_RESOLVE,
            /**
             * Unable to resolve proxy host name
             */
            CANT_RESOLVE_PROXY,
            /**
             * Unable to connect to remote host
             */
            CANT_CONNECT,
            /**
             * Unable to connect to proxy
             */
            CANT_CONNECT_PROXY,
            /**
             * SSL/TLS negotiation failed
             */
            SSL_FAILED,
            /**
             * A network error occurred, or the other end
             * closed the connection unexpectedly
             */
            IO_ERROR,
            /**
             * Malformed data (usually a programmer error)
             */
            MALFORMED,
            /**
             * Used internally
             */
            TRY_AGAIN,
            /**
             * There were too many redirections
             */
            TOO_MANY_REDIRECTS,
            /**
             * Used internally
             */
            TLS_FAILED,
            /**
             * 100 Continue (HTTP)
             */
            CONTINUE,
            /**
             * 101 Switching Protocols (HTTP)
             */
            SWITCHING_PROTOCOLS,
            /**
             * 102 Processing (WebDAV)
             */
            PROCESSING,
            /**
             * 200 Success (HTTP). Also used by many lower-level
             * soup routines to indicate success.
             */
            OK,
            /**
             * 201 Created (HTTP)
             */
            CREATED,
            /**
             * 202 Accepted (HTTP)
             */
            ACCEPTED,
            /**
             * 203 Non-Authoritative Information
             * (HTTP)
             */
            NON_AUTHORITATIVE,
            /**
             * 204 No Content (HTTP)
             */
            NO_CONTENT,
            /**
             * 205 Reset Content (HTTP)
             */
            RESET_CONTENT,
            /**
             * 206 Partial Content (HTTP)
             */
            PARTIAL_CONTENT,
            /**
             * 207 Multi-Status (WebDAV)
             */
            MULTI_STATUS,
            /**
             * 300 Multiple Choices (HTTP)
             */
            MULTIPLE_CHOICES,
            /**
             * 301 Moved Permanently (HTTP)
             */
            MOVED_PERMANENTLY,
            /**
             * 302 Found (HTTP)
             */
            FOUND,
            /**
             * 302 Moved Temporarily (old name,
             * RFC 2068)
             */
            MOVED_TEMPORARILY,
            /**
             * 303 See Other (HTTP)
             */
            SEE_OTHER,
            /**
             * 304 Not Modified (HTTP)
             */
            NOT_MODIFIED,
            /**
             * 305 Use Proxy (HTTP)
             */
            USE_PROXY,
            /**
             * 306 [Unused] (HTTP)
             */
            NOT_APPEARING_IN_THIS_PROTOCOL,
            /**
             * 307 Temporary Redirect (HTTP)
             */
            TEMPORARY_REDIRECT,
            PERMANENT_REDIRECT,
            /**
             * 400 Bad Request (HTTP)
             */
            BAD_REQUEST,
            /**
             * 401 Unauthorized (HTTP)
             */
            UNAUTHORIZED,
            /**
             * 402 Payment Required (HTTP)
             */
            PAYMENT_REQUIRED,
            /**
             * 403 Forbidden (HTTP)
             */
            FORBIDDEN,
            /**
             * 404 Not Found (HTTP)
             */
            NOT_FOUND,
            /**
             * 405 Method Not Allowed (HTTP)
             */
            METHOD_NOT_ALLOWED,
            /**
             * 406 Not Acceptable (HTTP)
             */
            NOT_ACCEPTABLE,
            /**
             * 407 Proxy Authentication
             * Required (HTTP)
             */
            PROXY_AUTHENTICATION_REQUIRED,
            /**
             * shorter alias for
             * %SOUP_STATUS_PROXY_AUTHENTICATION_REQUIRED
             */
            PROXY_UNAUTHORIZED,
            /**
             * 408 Request Timeout (HTTP)
             */
            REQUEST_TIMEOUT,
            /**
             * 409 Conflict (HTTP)
             */
            CONFLICT,
            /**
             * 410 Gone (HTTP)
             */
            GONE,
            /**
             * 411 Length Required (HTTP)
             */
            LENGTH_REQUIRED,
            /**
             * 412 Precondition Failed (HTTP)
             */
            PRECONDITION_FAILED,
            /**
             * 413 Request Entity Too Large
             * (HTTP)
             */
            REQUEST_ENTITY_TOO_LARGE,
            /**
             * 414 Request-URI Too Long (HTTP)
             */
            REQUEST_URI_TOO_LONG,
            /**
             * 415 Unsupported Media Type
             * (HTTP)
             */
            UNSUPPORTED_MEDIA_TYPE,
            /**
             * 416 Requested Range
             * Not Satisfiable (HTTP)
             */
            REQUESTED_RANGE_NOT_SATISFIABLE,
            /**
             * shorter alias for
             * %SOUP_STATUS_REQUESTED_RANGE_NOT_SATISFIABLE
             */
            INVALID_RANGE,
            /**
             * 417 Expectation Failed (HTTP)
             */
            EXPECTATION_FAILED,
            /**
             * 422 Unprocessable Entity
             * (WebDAV)
             */
            UNPROCESSABLE_ENTITY,
            /**
             * 423 Locked (WebDAV)
             */
            LOCKED,
            /**
             * 424 Failed Dependency (WebDAV)
             */
            FAILED_DEPENDENCY,
            /**
             * 500 Internal Server Error
             * (HTTP)
             */
            INTERNAL_SERVER_ERROR,
            /**
             * 501 Not Implemented (HTTP)
             */
            NOT_IMPLEMENTED,
            /**
             * 502 Bad Gateway (HTTP)
             */
            BAD_GATEWAY,
            /**
             * 503 Service Unavailable (HTTP)
             */
            SERVICE_UNAVAILABLE,
            /**
             * 504 Gateway Timeout (HTTP)
             */
            GATEWAY_TIMEOUT,
            /**
             * 505 HTTP Version Not
             * Supported (HTTP)
             */
            HTTP_VERSION_NOT_SUPPORTED,
            /**
             * 507 Insufficient Storage
             * (WebDAV)
             */
            INSUFFICIENT_STORAGE,
            /**
             * 510 Not Extended (RFC 2774)
             */
            NOT_EXTENDED,
        }
        /**
         * Error codes for %SOUP_TLD_ERROR.
         */
        class TLDError extends GLib.Error {
            static $gtype: GObject.GType<TLDError>;

            // Static fields

            /**
             * A hostname was syntactically
             *   invalid.
             */
            static INVALID_HOSTNAME: number;
            /**
             * The passed-in "hostname" was
             *   actually an IP address (and thus has no base domain or
             *   public suffix).
             */
            static IS_IP_ADDRESS: number;
            /**
             * The passed-in hostname
             *   did not have enough components. Eg, calling
             *   soup_tld_get_base_domain() on <literal>"co.uk"</literal>.
             */
            static NOT_ENOUGH_DOMAINS: number;
            /**
             * The passed-in hostname has
             *   no recognized public suffix.
             */
            static NO_BASE_DOMAIN: number;
            static NO_PSL_DATA: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Pre-defined close codes that can be passed to
         * soup_websocket_connection_close() or received from
         * soup_websocket_connection_get_close_code(). (However, other codes
         * are also allowed.)
         */

        /**
         * Pre-defined close codes that can be passed to
         * soup_websocket_connection_close() or received from
         * soup_websocket_connection_get_close_code(). (However, other codes
         * are also allowed.)
         */
        export namespace WebsocketCloseCode {
            export const $gtype: GObject.GType<WebsocketCloseCode>;
        }

        enum WebsocketCloseCode {
            /**
             * a normal, non-error close
             */
            NORMAL,
            /**
             * the client/server is going away
             */
            GOING_AWAY,
            /**
             * a protocol error occurred
             */
            PROTOCOL_ERROR,
            /**
             * the endpoint received data
             *   of a type that it does not support.
             */
            UNSUPPORTED_DATA,
            /**
             * reserved value indicating that
             *   no close code was present; must not be sent.
             */
            NO_STATUS,
            /**
             * reserved value indicating that
             *   the connection was closed abnormally; must not be sent.
             */
            ABNORMAL,
            /**
             * the endpoint received data that
             *   was invalid (eg, non-UTF-8 data in a text message).
             */
            BAD_DATA,
            /**
             * generic error code
             *   indicating some sort of policy violation.
             */
            POLICY_VIOLATION,
            /**
             * the endpoint received a message
             *   that is too big to process.
             */
            TOO_BIG,
            /**
             * the client is closing the
             *   connection because the server failed to negotiate a required
             *   extension.
             */
            NO_EXTENSION,
            /**
             * the server is closing the
             *   connection because it was unable to fulfill the request.
             */
            SERVER_ERROR,
            /**
             * reserved value indicating that
             *   the TLS handshake failed; must not be sent.
             */
            TLS_HANDSHAKE,
        }
        /**
         * The type of a #SoupWebsocketConnection.
         */

        /**
         * The type of a #SoupWebsocketConnection.
         */
        export namespace WebsocketConnectionType {
            export const $gtype: GObject.GType<WebsocketConnectionType>;
        }

        enum WebsocketConnectionType {
            /**
             * unknown/invalid connection
             */
            UNKNOWN,
            /**
             * a client-side connection
             */
            CLIENT,
            /**
             * a server-side connection
             */
            SERVER,
        }
        /**
         * The type of data contained in a #SoupWebsocketConnection::message
         * signal.
         */

        /**
         * The type of data contained in a #SoupWebsocketConnection::message
         * signal.
         */
        export namespace WebsocketDataType {
            export const $gtype: GObject.GType<WebsocketDataType>;
        }

        enum WebsocketDataType {
            /**
             * UTF-8 text
             */
            TEXT,
            /**
             * binary data
             */
            BINARY,
        }
        /**
         * WebSocket-related errors.
         */

        /**
         * WebSocket-related errors.
         */
        export namespace WebsocketError {
            export const $gtype: GObject.GType<WebsocketError>;
        }

        enum WebsocketError {
            /**
             * a generic error
             */
            FAILED,
            /**
             * attempted to handshake with a
             *   server that does not appear to understand WebSockets.
             */
            NOT_WEBSOCKET,
            /**
             * the WebSocket handshake failed
             *   because some detail was invalid (eg, incorrect accept key).
             */
            BAD_HANDSHAKE,
            /**
             * the WebSocket handshake failed
             *   because the "Origin" header was not an allowed value.
             */
            BAD_ORIGIN,
        }
        /**
         * The state of the WebSocket connection.
         */

        /**
         * The state of the WebSocket connection.
         */
        export namespace WebsocketState {
            export const $gtype: GObject.GType<WebsocketState>;
        }

        enum WebsocketState {
            /**
             * the connection is ready to send messages
             */
            OPEN,
            /**
             * the connection is in the process of
             *   closing down; messages may be received, but not sent
             */
            CLOSING,
            /**
             * the connection is completely closed down
             */
            CLOSED,
        }
        class XMLRPCError extends GLib.Error {
            static $gtype: GObject.GType<XMLRPCError>;

            // Static fields

            static ARGUMENTS: number;
            static RETVAL: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Pre-defined XML-RPC fault codes from <ulink
         * url="http://xmlrpc-epi.sourceforge.net/specs/rfc.fault_codes.php">http://xmlrpc-epi.sourceforge.net/specs/rfc.fault_codes.php</ulink>.
         * These are an extension, not part of the XML-RPC spec; you can't
         * assume servers will use them.
         */

        /**
         * Pre-defined XML-RPC fault codes from <ulink
         * url="http://xmlrpc-epi.sourceforge.net/specs/rfc.fault_codes.php">http://xmlrpc-epi.sourceforge.net/specs/rfc.fault_codes.php</ulink>.
         * These are an extension, not part of the XML-RPC spec; you can't
         * assume servers will use them.
         */
        export namespace XMLRPCFault {
            export const $gtype: GObject.GType<XMLRPCFault>;
        }

        enum XMLRPCFault {
            /**
             * request was not
             *   well-formed
             */
            PARSE_ERROR_NOT_WELL_FORMED,
            /**
             * request was in
             *   an unsupported encoding
             */
            PARSE_ERROR_UNSUPPORTED_ENCODING,
            /**
             * request contained an invalid character
             */
            PARSE_ERROR_INVALID_CHARACTER_FOR_ENCODING,
            /**
             * request was not
             *   valid XML-RPC
             */
            SERVER_ERROR_INVALID_XML_RPC,
            /**
             * method
             *   not found
             */
            SERVER_ERROR_REQUESTED_METHOD_NOT_FOUND,
            /**
             * invalid
             *   parameters
             */
            SERVER_ERROR_INVALID_METHOD_PARAMETERS,
            /**
             * internal
             *   error
             */
            SERVER_ERROR_INTERNAL_XML_RPC_ERROR,
            /**
             * start of reserved range for
             *   application error codes
             */
            APPLICATION_ERROR,
            /**
             * start of reserved range for
             *   system error codes
             */
            SYSTEM_ERROR,
            /**
             * start of reserved range for
             *   transport error codes
             */
            TRANSPORT_ERROR,
        }
        /**
         * This can be passed to any #SoupAddress method that expects a port,
         * to indicate that you don't care what port is used.
         */
        const ADDRESS_ANY_PORT: number;
        /**
         * Alias for the #SoupAddress:family property. (The
         * #SoupAddressFamily for this address.)
         */
        const ADDRESS_FAMILY: string;
        /**
         * Alias for the #SoupAddress:name property. (The hostname for
         * this address.)
         */
        const ADDRESS_NAME: string;
        /**
         * An alias for the #SoupAddress:physical property. (The
         * stringified IP address for this address.)
         */
        const ADDRESS_PHYSICAL: string;
        /**
         * An alias for the #SoupAddress:port property. (The port for
         * this address.)
         */
        const ADDRESS_PORT: string;
        /**
         * Alias for the #SoupAddress:protocol property. (The URI scheme
         * used with this address.)
         */
        const ADDRESS_PROTOCOL: string;
        /**
         * An alias for the #SoupAddress:sockaddr property. (A pointer
         * to the struct sockaddr for this address.)
         */
        const ADDRESS_SOCKADDR: string;
        /**
         * Alias for the #SoupAuthDomain:add-path property. (Shortcut
         * for calling soup_auth_domain_add_path().)
         */
        const AUTH_DOMAIN_ADD_PATH: string;
        /**
         * Alias for the #SoupAuthDomainBasic:auth-callback property.
         * (The #SoupAuthDomainBasicAuthCallback.)
         */
        const AUTH_DOMAIN_BASIC_AUTH_CALLBACK: string;
        /**
         * Alias for the #SoupAuthDomainBasic:auth-data property.
         * (The data to pass to the #SoupAuthDomainBasicAuthCallback.)
         */
        const AUTH_DOMAIN_BASIC_AUTH_DATA: string;
        /**
         * Alias for the #SoupAuthDomainDigest:auth-callback property.
         * (The #SoupAuthDomainDigestAuthCallback.)
         */
        const AUTH_DOMAIN_DIGEST_AUTH_CALLBACK: string;
        /**
         * Alias for the #SoupAuthDomainDigest:auth-callback property.
         * (The #SoupAuthDomainDigestAuthCallback.)
         */
        const AUTH_DOMAIN_DIGEST_AUTH_DATA: string;
        /**
         * Alias for the #SoupAuthDomain:filter property. (The
         * #SoupAuthDomainFilter for the domain.)
         */
        const AUTH_DOMAIN_FILTER: string;
        /**
         * Alias for the #SoupAuthDomain:filter-data property. (Data
         * to pass to the #SoupAuthDomainFilter.)
         */
        const AUTH_DOMAIN_FILTER_DATA: string;
        /**
         * Alias for the #SoupAuthDomain:generic-auth-callback property.
         * (The #SoupAuthDomainGenericAuthCallback.)
         */
        const AUTH_DOMAIN_GENERIC_AUTH_CALLBACK: string;
        /**
         * Alias for the #SoupAuthDomain:generic-auth-data property.
         * (The data to pass to the #SoupAuthDomainGenericAuthCallback.)
         */
        const AUTH_DOMAIN_GENERIC_AUTH_DATA: string;
        /**
         * Alias for the #SoupAuthDomain:proxy property. (Whether or
         * not this is a proxy auth domain.)
         */
        const AUTH_DOMAIN_PROXY: string;
        /**
         * Alias for the #SoupAuthDomain:realm property. (The realm of
         * this auth domain.)
         */
        const AUTH_DOMAIN_REALM: string;
        /**
         * Alias for the #SoupAuthDomain:remove-path property.
         * (Shortcut for calling soup_auth_domain_remove_path().)
         */
        const AUTH_DOMAIN_REMOVE_PATH: string;
        /**
         * An alias for the #SoupAuth:host property. (The
         * host being authenticated to.)
         */
        const AUTH_HOST: string;
        /**
         * An alias for the #SoupAuth:is-authenticated property.
         * (Whether or not the auth has been authenticated.)
         */
        const AUTH_IS_AUTHENTICATED: string;
        /**
         * An alias for the #SoupAuth:is-for-proxy property. (Whether
         * or not the auth is for a proxy server.)
         */
        const AUTH_IS_FOR_PROXY: string;
        /**
         * An alias for the #SoupAuth:realm property. (The
         * authentication realm.)
         */
        const AUTH_REALM: string;
        /**
         * An alias for the #SoupAuth:scheme-name property. (The
         * authentication scheme name.)
         */
        const AUTH_SCHEME_NAME: string;
        const CHAR_HTTP_CTL: number;
        const CHAR_HTTP_SEPARATOR: number;
        const CHAR_URI_GEN_DELIMS: number;
        const CHAR_URI_PERCENT_ENCODED: number;
        const CHAR_URI_SUB_DELIMS: number;
        /**
         * Alias for the #SoupCookieJar:accept-policy property.
         */
        const COOKIE_JAR_ACCEPT_POLICY: string;
        /**
         * Alias for the #SoupCookieJarDB:filename property. (The
         * cookie-storage filename.)
         */
        const COOKIE_JAR_DB_FILENAME: string;
        /**
         * Alias for the #SoupCookieJar:read-only property. (Whether
         * or not the cookie jar is read-only.)
         */
        const COOKIE_JAR_READ_ONLY: string;
        /**
         * Alias for the #SoupCookieJarText:filename property. (The
         * cookie-storage filename.)
         */
        const COOKIE_JAR_TEXT_FILENAME: string;
        /**
         * A constant corresponding to 1 day, for use with soup_cookie_new()
         * and soup_cookie_set_max_age().
         */
        const COOKIE_MAX_AGE_ONE_DAY: number;
        /**
         * A constant corresponding to 1 hour, for use with soup_cookie_new()
         * and soup_cookie_set_max_age().
         */
        const COOKIE_MAX_AGE_ONE_HOUR: number;
        /**
         * A constant corresponding to 1 week, for use with soup_cookie_new()
         * and soup_cookie_set_max_age().
         */
        const COOKIE_MAX_AGE_ONE_WEEK: number;
        /**
         * A constant corresponding to 1 year, for use with soup_cookie_new()
         * and soup_cookie_set_max_age().
         */
        const COOKIE_MAX_AGE_ONE_YEAR: number;
        /**
         * A macro containing the value
         * <literal>"multipart/form-data"</literal>; the MIME type used for
         * posting form data that contains files to be uploaded.
         */
        const FORM_MIME_TYPE_MULTIPART: string;
        /**
         * A macro containing the value
         * <literal>"application/x-www-form-urlencoded"</literal>; the default
         * MIME type for POSTing HTML form data.
         */
        const FORM_MIME_TYPE_URLENCODED: string;
        const HSTS_ENFORCER_DB_FILENAME: string;
        const HSTS_POLICY_MAX_AGE_PAST: number;
        /**
         * Alias for the #SoupLogger:level property, qv.
         */
        const LOGGER_LEVEL: string;
        /**
         * Alias for the #SoupLogger:max-body-size property, qv.
         */
        const LOGGER_MAX_BODY_SIZE: string;
        /**
         * Like soup_get_major_version(), but from the headers used at
         * application compile time, rather than from the library linked
         * against at application run time.
         */
        const MAJOR_VERSION: number;
        /**
         * Alias for the #SoupMessage:first-party property. (The
         * #SoupURI loaded in the application when the message was
         * queued.)
         */
        const MESSAGE_FIRST_PARTY: string;
        /**
         * Alias for the #SoupMessage:flags property. (The message's
         * #SoupMessageFlags.)
         */
        const MESSAGE_FLAGS: string;
        /**
         * Alias for the #SoupMessage:http-version property. (The
         * message's #SoupHTTPVersion.)
         */
        const MESSAGE_HTTP_VERSION: string;
        const MESSAGE_IS_TOP_LEVEL_NAVIGATION: string;
        /**
         * Alias for the #SoupMessage:method property. (The message's
         * HTTP method.)
         */
        const MESSAGE_METHOD: string;
        /**
         * Sets the priority of the #SoupMessage. See
         * soup_message_set_priority() for further details.
         */
        const MESSAGE_PRIORITY: string;
        /**
         * Alias for the #SoupMessage:reason-phrase property. (The
         * message's HTTP response reason phrase.)
         */
        const MESSAGE_REASON_PHRASE: string;
        /**
         * Alias for the #SoupMessage:request-body property. (The
         * message's HTTP request body.)
         */
        const MESSAGE_REQUEST_BODY: string;
        /**
         * Alias for the #SoupMessage:request-body-data property. (The
         * message's HTTP request body, as a #GBytes.)
         */
        const MESSAGE_REQUEST_BODY_DATA: string;
        /**
         * Alias for the #SoupMessage:request-headers property. (The
         * message's HTTP request headers.)
         */
        const MESSAGE_REQUEST_HEADERS: string;
        /**
         * Alias for the #SoupMessage:response-body property. (The
         * message's HTTP response body.)
         */
        const MESSAGE_RESPONSE_BODY: string;
        /**
         * Alias for the #SoupMessage:response-body-data property. (The
         * message's HTTP response body, as a #GBytes.)
         */
        const MESSAGE_RESPONSE_BODY_DATA: string;
        /**
         * Alias for the #SoupMessage:response-headers property. (The
         * message's HTTP response headers.)
         */
        const MESSAGE_RESPONSE_HEADERS: string;
        /**
         * Alias for the #SoupMessage:server-side property. (%TRUE if
         * the message was created by #SoupServer.)
         */
        const MESSAGE_SERVER_SIDE: string;
        const MESSAGE_SITE_FOR_COOKIES: string;
        /**
         * Alias for the #SoupMessage:status-code property. (The
         * message's HTTP response status code.)
         */
        const MESSAGE_STATUS_CODE: string;
        /**
         * Alias for the #SoupMessage:tls-certificate property. (The
         * TLS certificate associated with the message, if any.)
         */
        const MESSAGE_TLS_CERTIFICATE: string;
        /**
         * Alias for the #SoupMessage:tls-errors property. (The
         * verification errors on #SoupMessage:tls-certificate.)
         */
        const MESSAGE_TLS_ERRORS: string;
        /**
         * Alias for the #SoupMessage:uri property. (The message's
         * #SoupURI.)
         */
        const MESSAGE_URI: string;
        /**
         * Like soup_get_micro_version(), but from the headers used at
         * application compile time, rather than from the library linked
         * against at application run time.
         */
        const MICRO_VERSION: number;
        /**
         * Like soup_get_minor_version(), but from the headers used at
         * application compile time, rather than from the library linked
         * against at application run time.
         */
        const MINOR_VERSION: number;
        /**
         * Alias for the #SoupRequest:session property, qv.
         */
        const REQUEST_SESSION: string;
        /**
         * Alias for the #SoupRequest:uri property, qv.
         */
        const REQUEST_URI: string;
        /**
         * Alias for the deprecated #SoupServer:async-context
         * property, qv.
         */
        const SERVER_ASYNC_CONTEXT: string;
        /**
         * Alias for the #SoupServer:https-aliases property, qv.
         */
        const SERVER_HTTPS_ALIASES: string;
        /**
         * Alias for the #SoupServer:http-aliases property, qv.
         */
        const SERVER_HTTP_ALIASES: string;
        /**
         * Alias for the #SoupServer:interface property, qv.
         */
        const SERVER_INTERFACE: string;
        /**
         * Alias for the deprecated #SoupServer:port property, qv.
         */
        const SERVER_PORT: string;
        /**
         * Alias for the #SoupServer:raw-paths property. (If %TRUE,
         * percent-encoding in the Request-URI path will not be
         * automatically decoded.)
         */
        const SERVER_RAW_PATHS: string;
        /**
         * Alias for the #SoupServer:server-header property, qv.
         */
        const SERVER_SERVER_HEADER: string;
        /**
         * Alias for the #SoupServer:ssl-cert-file property, qv.
         */
        const SERVER_SSL_CERT_FILE: string;
        /**
         * Alias for the #SoupServer:ssl-key-file property, qv.
         */
        const SERVER_SSL_KEY_FILE: string;
        /**
         * Alias for the #SoupServer:tls-certificate property, qv.
         */
        const SERVER_TLS_CERTIFICATE: string;
        /**
         * Alias for the #SoupSession:accept-language property, qv.
         */
        const SESSION_ACCEPT_LANGUAGE: string;
        /**
         * Alias for the #SoupSession:accept-language-auto property, qv.
         */
        const SESSION_ACCEPT_LANGUAGE_AUTO: string;
        /**
         * Alias for the #SoupSession:async-context property, qv.
         */
        const SESSION_ASYNC_CONTEXT: string;
        /**
         * Alias for the #SoupSession:https-aliases property, qv.
         */
        const SESSION_HTTPS_ALIASES: string;
        /**
         * Alias for the #SoupSession:http-aliases property, qv.
         */
        const SESSION_HTTP_ALIASES: string;
        /**
         * Alias for the #SoupSession:idle-timeout property, qv.
         */
        const SESSION_IDLE_TIMEOUT: string;
        /**
         * Alias for the #SoupSession:local-address property, qv.
         */
        const SESSION_LOCAL_ADDRESS: string;
        /**
         * Alias for the #SoupSession:max-conns property, qv.
         */
        const SESSION_MAX_CONNS: string;
        /**
         * Alias for the #SoupSession:max-conns-per-host property, qv.
         */
        const SESSION_MAX_CONNS_PER_HOST: string;
        /**
         * Alias for the #SoupSession:proxy-resolver property, qv.
         */
        const SESSION_PROXY_RESOLVER: string;
        /**
         * Alias for the #SoupSession:proxy-uri property, qv.
         */
        const SESSION_PROXY_URI: string;
        /**
         * Alias for the #SoupSession:ssl-ca-file property, qv.
         */
        const SESSION_SSL_CA_FILE: string;
        /**
         * Alias for the #SoupSession:ssl-strict property, qv.
         */
        const SESSION_SSL_STRICT: string;
        /**
         * Alias for the #SoupSession:ssl-use-system-ca-file property,
         * qv.
         */
        const SESSION_SSL_USE_SYSTEM_CA_FILE: string;
        /**
         * Alias for the #SoupSession:timeout property, qv.
         */
        const SESSION_TIMEOUT: string;
        /**
         * Alias for the #SoupSession:tls-database property, qv.
         */
        const SESSION_TLS_DATABASE: string;
        /**
         * Alias for the #SoupSession:tls-interaction property, qv.
         */
        const SESSION_TLS_INTERACTION: string;
        /**
         * Alias for the #SoupSession:user-agent property, qv.
         */
        const SESSION_USER_AGENT: string;
        /**
         * Alias for the #SoupSession:use-ntlm property, qv.
         */
        const SESSION_USE_NTLM: string;
        /**
         * Alias for the #SoupSession:use-thread-context property, qv.
         */
        const SESSION_USE_THREAD_CONTEXT: string;
        /**
         * Alias for the #SoupSocket:async-context property. (The
         * socket's #GMainContext.)
         */
        const SOCKET_ASYNC_CONTEXT: string;
        /**
         * Alias for the #SoupSocket:non-blocking property. (Whether
         * or not the socket uses non-blocking I/O.)
         */
        const SOCKET_FLAG_NONBLOCKING: string;
        /**
         * Alias for the #SoupSocket:is-server property, qv.
         */
        const SOCKET_IS_SERVER: string;
        /**
         * Alias for the #SoupSocket:local-address property. (Address
         * of local end of socket.)
         */
        const SOCKET_LOCAL_ADDRESS: string;
        /**
         * Alias for the #SoupSocket:remote-address property. (Address
         * of remote end of socket.)
         */
        const SOCKET_REMOTE_ADDRESS: string;
        /**
         * Alias for the #SoupSocket:ssl-creds property.
         * (SSL credential information.)
         */
        const SOCKET_SSL_CREDENTIALS: string;
        /**
         * Alias for the #SoupSocket:ssl-fallback property.
         */
        const SOCKET_SSL_FALLBACK: string;
        /**
         * Alias for the #SoupSocket:ssl-strict property.
         */
        const SOCKET_SSL_STRICT: string;
        /**
         * Alias for the #SoupSocket:timeout property. (The timeout
         * in seconds for blocking socket I/O operations.)
         */
        const SOCKET_TIMEOUT: string;
        /**
         * Alias for the #SoupSocket:tls-certificate
         * property. Note that this property's value is only useful
         * if the socket is for a TLS connection, and only reliable
         * after some data has been transferred to or from it.
         */
        const SOCKET_TLS_CERTIFICATE: string;
        /**
         * Alias for the #SoupSocket:tls-errors
         * property. Note that this property's value is only useful
         * if the socket is for a TLS connection, and only reliable
         * after some data has been transferred to or from it.
         */
        const SOCKET_TLS_ERRORS: string;
        /**
         * Alias for the #SoupSocket:trusted-certificate
         * property.
         */
        const SOCKET_TRUSTED_CERTIFICATE: string;
        /**
         * Alias for the #SoupSocket:use-thread-context property. (Use
         * g_main_context_get_thread_default())
         */
        const SOCKET_USE_THREAD_CONTEXT: string;
        /**
         * A macro that should be defined by the user prior to including
         * libsoup.h. The definition should be one of the predefined libsoup
         * version macros: %SOUP_VERSION_2_24, %SOUP_VERSION_2_26, ...
         *
         * This macro defines the earliest version of libsoup that the package
         * is required to be able to compile against.
         *
         * If the compiler is configured to warn about the use of deprecated
         * functions, then using functions that were deprecated in version
         * %SOUP_VERSION_MIN_REQUIRED or earlier will cause warnings (but
         * using functions deprecated in later releases will not).
         */
        const VERSION_MIN_REQUIRED: number;
        /**
         * Like SOUP_CHECK_VERSION, but the check for soup_check_version is
         * at runtime instead of compile time. This is useful for compiling
         * against older versions of libsoup, but using features from newer
         * versions.
         * @param major the major version to check
         * @param minor the minor version to check
         * @param micro the micro version to check
         * @returns %TRUE if the version of the libsoup currently loaded is the same as or newer than the passed-in version.
         */
        function check_version(major: number, minor: number, micro: number): boolean;
        /**
         * Parses `header` and returns a #SoupCookie. (If `header` contains
         * multiple cookies, only the first one will be parsed.)
         *
         * If `header` does not have "path" or "domain" attributes, they will
         * be defaulted from `origin`. If `origin` is %NULL, path will default
         * to "/", but domain will be left as %NULL. Note that this is not a
         * valid state for a #SoupCookie, and you will need to fill in some
         * appropriate string for the domain if you want to actually make use
         * of the cookie.
         * @param header a cookie string (eg, the value of a Set-Cookie header)
         * @param origin origin of the cookie, or %NULL
         * @returns a new #SoupCookie, or %NULL if it could not be parsed, or contained an illegal "domain" attribute for a cookie originating from @origin.
         */
        function cookie_parse(header: string, origin: URI): Cookie | null;
        /**
         * Parses `msg'`s Cookie request header and returns a #GSList of
         * #SoupCookie<!-- -->s. As the "Cookie" header, unlike "Set-Cookie",
         * only contains cookie names and values, none of the other
         * #SoupCookie fields will be filled in. (Thus, you can't generally
         * pass a cookie returned from this method directly to
         * soup_cookies_to_response().)
         * @param msg a #SoupMessage containing a "Cookie" request header
         * @returns a #GSList of #SoupCookie<!-- -->s, which can be freed with soup_cookies_free().
         */
        function cookies_from_request(msg: Message): Cookie[];
        /**
         * Parses `msg'`s Set-Cookie response headers and returns a #GSList of
         * #SoupCookie<!-- -->s. Cookies that do not specify "path" or
         * "domain" attributes will have their values defaulted from `msg`.
         * @param msg a #SoupMessage containing a "Set-Cookie" response header
         * @returns a #GSList of #SoupCookie<!-- -->s, which can be freed with soup_cookies_free().
         */
        function cookies_from_response(msg: Message): Cookie[];
        /**
         * Serializes a #GSList of #SoupCookie into a string suitable for
         * setting as the value of the "Cookie" header.
         * @param cookies a #GSList of #SoupCookie
         * @returns the serialization of @cookies
         */
        function cookies_to_cookie_header(cookies: Cookie[]): string;
        /**
         * Adds the name and value of each cookie in `cookies` to `msg'`s
         * "Cookie" request. (If `msg` already has a "Cookie" request header,
         * these cookies will be appended to the cookies already present. Be
         * careful that you do not append the same cookies twice, eg, when
         * requeuing a message.)
         * @param cookies a #GSList of #SoupCookie
         * @param msg a #SoupMessage
         */
        function cookies_to_request(cookies: Cookie[], msg: Message): void;
        /**
         * Appends a "Set-Cookie" response header to `msg` for each cookie in
         * `cookies`. (This is in addition to any other "Set-Cookie" headers
         * `msg` may already have.)
         * @param cookies a #GSList of #SoupCookie
         * @param msg a #SoupMessage
         */
        function cookies_to_response(cookies: Cookie[], msg: Message): void;
        /**
         * Decodes `form,` which is an urlencoded dataset as defined in the
         * HTML 4.01 spec.
         * @param encoded_form data of type "application/x-www-form-urlencoded"
         * @returns a hash table containing the name/value pairs from @encoded_form, which you can free with g_hash_table_destroy().
         */
        function form_decode(encoded_form: string): GLib.HashTable<string, string>;
        /**
         * Decodes the "multipart/form-data" request in `msg;` this is a
         * convenience method for the case when you have a single file upload
         * control in a form. (Or when you don't have any file upload
         * controls, but are still using "multipart/form-data" anyway.) Pass
         * the name of the file upload control in `file_control_name,` and
         * soup_form_decode_multipart() will extract the uploaded file data
         * into `filename,` `content_type,` and `file`. All of the other form
         * control data will be returned (as strings, as with
         * soup_form_decode()) in the returned #GHashTable.
         *
         * You may pass %NULL for `filename,` `content_type` and/or `file` if you do not
         * care about those fields. soup_form_decode_multipart() may also
         * return %NULL in those fields if the client did not provide that
         * information. You must free the returned filename and content-type
         * with g_free(), and the returned file data with soup_buffer_free().
         *
         * If you have a form with more than one file upload control, you will
         * need to decode it manually, using soup_multipart_new_from_message()
         * and soup_multipart_get_part().
         * @param msg a #SoupMessage containing a "multipart/form-data" request body
         * @param file_control_name the name of the HTML file upload control, or %NULL
         * @returns a hash table containing the name/value pairs (other than @file_control_name) from @msg, which you can free with g_hash_table_destroy(). On error, it will return %NULL.
         */
        function form_decode_multipart(
            msg: Message,
            file_control_name: string | null,
        ): [GLib.HashTable<string, string> | null, string, string, Buffer | null];
        /**
         * Encodes `form_data_set` into a value of type
         * "application/x-www-form-urlencoded", as defined in the HTML 4.01
         * spec. Unlike soup_form_encode_hash(), this preserves the ordering
         * of the form elements, which may be required in some situations.
         * @param form_data_set a datalist containing name/value pairs
         * @returns the encoded form
         */
        function form_encode_datalist(form_data_set: GLib.Data): string;
        /**
         * Encodes `form_data_set` into a value of type
         * "application/x-www-form-urlencoded", as defined in the HTML 4.01
         * spec.
         *
         * Note that the HTML spec states that "The control names/values are
         * listed in the order they appear in the document." Since this method
         * takes a hash table, it cannot enforce that; if you care about the
         * ordering of the form fields, use soup_form_encode_datalist().
         * @param form_data_set a hash table containing name/value pairs (as strings)
         * @returns the encoded form
         */
        function form_encode_hash(form_data_set: { [key: string]: any } | GLib.HashTable<string, string>): string;
        /**
         * Creates a new %SoupMessage and sets it up to send `form_data_set` to
         * `uri` via `method,` as with soup_form_request_new().
         * @param method the HTTP method, either "GET" or "POST"
         * @param uri the URI to send the form data to
         * @param form_data_set the data to send to @uri
         * @returns the new %SoupMessage
         */
        function form_request_new_from_datalist(method: string, uri: string, form_data_set: GLib.Data): Message;
        /**
         * Creates a new %SoupMessage and sets it up to send `form_data_set` to
         * `uri` via `method,` as with soup_form_request_new().
         * @param method the HTTP method, either "GET" or "POST"
         * @param uri the URI to send the form data to
         * @param form_data_set the data to send to @uri
         * @returns the new %SoupMessage
         */
        function form_request_new_from_hash(
            method: string,
            uri: string,
            form_data_set: { [key: string]: any } | GLib.HashTable<string, string>,
        ): Message;
        /**
         * Creates a new %SoupMessage and sets it up to send `multipart` to
         * `uri` via POST.
         *
         * To send a <literal>"multipart/form-data"</literal> POST, first
         * create a #SoupMultipart, using %SOUP_FORM_MIME_TYPE_MULTIPART as
         * the MIME type. Then use soup_multipart_append_form_string() and
         * soup_multipart_append_form_file() to add the value of each form
         * control to the multipart. (These are just convenience methods, and
         * you can use soup_multipart_append_part() if you need greater
         * control over the part headers.) Finally, call
         * soup_form_request_new_from_multipart() to serialize the multipart
         * structure and create a #SoupMessage.
         * @param uri the URI to send the form data to
         * @param multipart a "multipart/form-data" #SoupMultipart
         * @returns the new %SoupMessage
         */
        function form_request_new_from_multipart(uri: string, multipart: Multipart): Message;
        /**
         * Returns the major version number of the libsoup library.
         * (e.g. in libsoup version 2.42.0 this is 2.)
         *
         * This function is in the library, so it represents the libsoup library
         * your code is running against. Contrast with the #SOUP_MAJOR_VERSION
         * macro, which represents the major version of the libsoup headers you
         * have included when compiling your code.
         * @returns the major version number of the libsoup library
         */
        function get_major_version(): number;
        /**
         * Returns the micro version number of the libsoup library.
         * (e.g. in libsoup version 2.42.0 this is 0.)
         *
         * This function is in the library, so it represents the libsoup library
         * your code is running against. Contrast with the #SOUP_MICRO_VERSION
         * macro, which represents the micro version of the libsoup headers you
         * have included when compiling your code.
         * @returns the micro version number of the libsoup library
         */
        function get_micro_version(): number;
        /**
         * Returns the minor version number of the libsoup library.
         * (e.g. in libsoup version 2.42.0 this is 42.)
         *
         * This function is in the library, so it represents the libsoup library
         * your code is running against. Contrast with the #SOUP_MINOR_VERSION
         * macro, which represents the minor version of the libsoup headers you
         * have included when compiling your code.
         * @returns the minor version number of the libsoup library
         */
        function get_minor_version(): number;
        function get_resource(): Gio.Resource;
        /**
         * Parses `header` to see if it contains the token `token` (matched
         * case-insensitively). Note that this can't be used with lists
         * that have qvalues.
         * @param header An HTTP header suitable for parsing with soup_header_parse_list()
         * @param token a token
         * @returns whether or not @header contains @token
         */
        function header_contains(header: string, token: string): boolean;
        /**
         * Frees `param_list`.
         * @param param_list a #GHashTable returned from soup_header_parse_param_list() or soup_header_parse_semi_param_list()
         */
        function header_free_param_list(param_list: { [key: string]: any } | GLib.HashTable<string, string>): void;
        /**
         * Appends something like <literal>`name=``value<`/literal> to `string,`
         * taking care to quote `value` if needed, and if so, to escape any
         * quotes or backslashes in `value`.
         *
         * Alternatively, if `value` is a non-ASCII UTF-8 string, it will be
         * appended using RFC5987 syntax. Although in theory this is supposed
         * to work anywhere in HTTP that uses this style of parameter, in
         * reality, it can only be used portably with the Content-Disposition
         * "filename" parameter.
         *
         * If `value` is %NULL, this will just append `name` to `string`.
         * @param string a #GString being used to construct an HTTP header value
         * @param name a parameter name
         * @param value a parameter value, or %NULL
         */
        function header_g_string_append_param(string: GLib.String, name: string, value: string): void;
        /**
         * Appends something like <literal>`name=`"`value"`</literal> to
         * `string,` taking care to escape any quotes or backslashes in `value`.
         *
         * If `value` is (non-ASCII) UTF-8, this will instead use RFC 5987
         * encoding, just like soup_header_g_string_append_param().
         * @param string a #GString being used to construct an HTTP header value
         * @param name a parameter name
         * @param value a parameter value
         */
        function header_g_string_append_param_quoted(string: GLib.String, name: string, value: string): void;
        /**
         * Parses a header whose content is described by RFC2616 as
         * "#something", where "something" does not itself contain commas,
         * except as part of quoted-strings.
         * @param header a header value
         * @returns a #GSList of list elements, as allocated strings
         */
        function header_parse_list(header: string): string[];
        /**
         * Parses a header which is a comma-delimited list of something like:
         * <literal>token [ "=" ( token | quoted-string ) ]</literal>.
         *
         * Tokens that don't have an associated value will still be added to
         * the resulting hash table, but with a %NULL value.
         *
         * This also handles RFC5987 encoding (which in HTTP is mostly used
         * for giving UTF8-encoded filenames in the Content-Disposition
         * header).
         * @param header a header value
         * @returns a #GHashTable of list elements, which can be freed with soup_header_free_param_list().
         */
        function header_parse_param_list(header: string): GLib.HashTable<string, string>;
        /**
         * A strict version of soup_header_parse_param_list()
         * that bails out if there are duplicate parameters.
         * Note that this function will treat RFC5987-encoded
         * parameters as duplicated if an ASCII version is also
         * present. For header fields that might contain
         * RFC5987-encoded parameters, use
         * soup_header_parse_param_list() instead.
         * @param header a header value
         * @returns a #GHashTable of list elements, which can be freed with soup_header_free_param_list() or %NULL if there are duplicate elements.
         */
        function header_parse_param_list_strict(header: string): GLib.HashTable<string, string> | null;
        /**
         * Parses a header whose content is a list of items with optional
         * "qvalue"s (eg, Accept, Accept-Charset, Accept-Encoding,
         * Accept-Language, TE).
         *
         * If `unacceptable` is not %NULL, then on return, it will contain the
         * items with qvalue 0. Either way, those items will be removed from
         * the main list.
         * @param header a header value
         * @returns a #GSList of acceptable values (as allocated strings), highest-qvalue first.
         */
        function header_parse_quality_list(header: string): [string[], string[] | null];
        /**
         * Parses a header which is a semicolon-delimited list of something
         * like: <literal>token [ "=" ( token | quoted-string ) ]</literal>.
         *
         * Tokens that don't have an associated value will still be added to
         * the resulting hash table, but with a %NULL value.
         *
         * This also handles RFC5987 encoding (which in HTTP is mostly used
         * for giving UTF8-encoded filenames in the Content-Disposition
         * header).
         * @param header a header value
         * @returns a #GHashTable of list elements, which can be freed with soup_header_free_param_list().
         */
        function header_parse_semi_param_list(header: string): GLib.HashTable<string, string>;
        /**
         * A strict version of soup_header_parse_semi_param_list()
         * that bails out if there are duplicate parameters.
         * Note that this function will treat RFC5987-encoded
         * parameters as duplicated if an ASCII version is also
         * present. For header fields that might contain
         * RFC5987-encoded parameters, use
         * soup_header_parse_semi_param_list() instead.
         * @param header a header value
         * @returns a #GHashTable of list elements, which can be freed with soup_header_free_param_list() or %NULL if there are duplicate elements.
         */
        function header_parse_semi_param_list_strict(header: string): GLib.HashTable<string, string> | null;
        /**
         * Parses the headers of an HTTP request or response in `str` and
         * stores the results in `dest`. Beware that `dest` may be modified even
         * on failure.
         *
         * This is a low-level method; normally you would use
         * soup_headers_parse_request() or soup_headers_parse_response().
         * @param str the header string (including the Request-Line or Status-Line,   but not the trailing blank line)
         * @param len length of @str
         * @param dest #SoupMessageHeaders to store the header values in
         * @returns success or failure
         */
        function headers_parse(str: string, len: number, dest: MessageHeaders): boolean;
        /**
         * Parses the headers of an HTTP request in `str` and stores the
         * results in `req_method,` `req_path,` `ver,` and `req_headers`.
         *
         * Beware that `req_headers` may be modified even on failure.
         * @param str the headers (up to, but not including, the trailing blank line)
         * @param len length of @str
         * @param req_headers #SoupMessageHeaders to store the header values in
         * @returns %SOUP_STATUS_OK if the headers could be parsed, or an HTTP error to be returned to the client if they could not be.
         */
        function headers_parse_request(
            str: string,
            len: number,
            req_headers: MessageHeaders,
        ): [number, string, string, HTTPVersion | null];
        /**
         * Parses the headers of an HTTP response in `str` and stores the
         * results in `ver,` `status_code,` `reason_phrase,` and `headers`.
         *
         * Beware that `headers` may be modified even on failure.
         * @param str the headers (up to, but not including, the trailing blank line)
         * @param len length of @str
         * @param headers #SoupMessageHeaders to store the header values in
         * @returns success or failure.
         */
        function headers_parse_response(
            str: string,
            len: number,
            headers: MessageHeaders,
        ): [boolean, HTTPVersion | null, number, string];
        /**
         * Parses the HTTP Status-Line string in `status_line` into `ver,`
         * `status_code,` and `reason_phrase`. `status_line` must be terminated by
         * either "\0" or "\r\n".
         * @param status_line an HTTP Status-Line
         * @returns %TRUE if @status_line was parsed successfully.
         */
        function headers_parse_status_line(status_line: string): [boolean, HTTPVersion | null, number, string];
        function http_error_quark(): GLib.Quark;
        /**
         * Initializes `iter` for iterating `hdrs`.
         * @param hdrs a %SoupMessageHeaders
         */
        function message_headers_iter_init(hdrs: MessageHeaders): MessageHeadersIter;
        function request_error_quark(): GLib.Quark;
        function requester_error_quark(): GLib.Quark;
        /**
         * Looks up the stock HTTP description of `status_code`. This is used
         * by soup_message_set_status() to get the correct text to go with a
         * given status code.
         *
         * <emphasis>There is no reason for you to ever use this
         * function.</emphasis> If you wanted the textual description for the
         * #SoupMessage:status_code of a given #SoupMessage, you should just
         * look at the message's #SoupMessage:reason_phrase. However, you
         * should only do that for use in debugging messages; HTTP reason
         * phrases are not localized, and are not generally very descriptive
         * anyway, and so they should never be presented to the user directly.
         * Instead, you should create you own error messages based on the
         * status code, and on what you were trying to do.
         * @param status_code an HTTP status code
         * @returns the (terse, English) description of @status_code
         */
        function status_get_phrase(status_code: number): string;
        /**
         * Turns %SOUP_STATUS_CANT_RESOLVE into
         * %SOUP_STATUS_CANT_RESOLVE_PROXY and %SOUP_STATUS_CANT_CONNECT into
         * %SOUP_STATUS_CANT_CONNECT_PROXY. Other status codes are passed
         * through unchanged.
         * @param status_code a status code
         * @returns the "proxified" equivalent of @status_code.
         */
        function status_proxify(status_code: number): number;
        /**
         * Compares `v1` and `v2` in a case-insensitive manner
         * @param v1 an ASCII string
         * @param v2 another ASCII string
         * @returns %TRUE if they are equal (modulo case)
         */
        function str_case_equal(v1?: any | null, v2?: any | null): boolean;
        /**
         * Hashes `key` in a case-insensitive manner.
         * @param key ASCII string to hash
         * @returns the hash code.
         */
        function str_case_hash(key?: any | null): number;
        /**
         * Looks whether the `domain` passed as argument is a public domain
         * suffix (.org, .com, .co.uk, etc) or not.
         *
         * Prior to libsoup 2.46, this function required that `domain` be in
         * UTF-8 if it was an IDN. From 2.46 on, the name can be in either
         * UTF-8 or ASCII format.
         * @param domain a domain name
         * @returns %TRUE if it is a public domain, %FALSE otherwise.
         */
        function tld_domain_is_public_suffix(domain: string): boolean;
        function tld_error_quark(): GLib.Quark;
        /**
         * Finds the base domain for a given `hostname`. The base domain is
         * composed by the top level domain (such as .org, .com, .co.uk, etc)
         * plus the second level domain, for example for myhost.mydomain.com
         * it will return mydomain.com.
         *
         * Note that %NULL will be returned for private URLs (those not ending
         * with any well known TLD) because choosing a base domain for them
         * would be totally arbitrary.
         *
         * Prior to libsoup 2.46, this function required that `hostname` be in
         * UTF-8 if it was an IDN. From 2.46 on, the name can be in either
         * UTF-8 or ASCII format (and the return value will be in the same
         * format).
         * @param hostname a hostname
         * @returns a pointer to the start of the base domain in @hostname. If an error occurs, %NULL will be returned and @error set.
         */
        function tld_get_base_domain(hostname: string): string;
        /**
         * Fully %<!-- -->-decodes `part`.
         *
         * In the past, this would return %NULL if `part` contained invalid
         * percent-encoding, but now it just ignores the problem (as
         * soup_uri_new() already did).
         * @param part a URI part
         * @returns the decoded URI part.
         */
        function uri_decode(part: string): string;
        /**
         * This %<!-- -->-encodes the given URI part and returns the escaped
         * version in allocated memory, which the caller must free when it is
         * done.
         * @param part a URI part
         * @param escape_extra additional reserved characters to escape (or %NULL)
         * @returns the encoded URI part
         */
        function uri_encode(part: string, escape_extra?: string | null): string;
        /**
         * %<!-- -->-decodes any "unreserved" characters (or characters in
         * `unescape_extra)` in `part,` and %<!-- -->-encodes any non-ASCII
         * characters, spaces, and non-printing characters in `part`.
         *
         * "Unreserved" characters are those that are not allowed to be used
         * for punctuation according to the URI spec. For example, letters are
         * unreserved, so soup_uri_normalize() will turn
         * <literal>http://example.com/foo/b%<!-- -->61r</literal> into
         * <literal>http://example.com/foo/bar</literal>, which is guaranteed
         * to mean the same thing. However, "/" is "reserved", so
         * <literal>http://example.com/foo%<!-- -->2Fbar</literal> would not
         * be changed, because it might mean something different to the
         * server.
         *
         * In the past, this would return %NULL if `part` contained invalid
         * percent-encoding, but now it just ignores the problem (as
         * soup_uri_new() already did).
         * @param part a URI part
         * @param unescape_extra reserved characters to unescape (or %NULL)
         * @returns the normalized URI part
         */
        function uri_normalize(part: string, unescape_extra?: string | null): string;
        /**
         * Creates a new %GValueArray. (This is just a wrapper around
         * g_value_array_new(), for naming consistency purposes.)
         * @returns a new %GValueArray
         */
        function value_array_new(): GObject.ValueArray;
        /**
         * Inserts `value` into `hash`. (Unlike with g_hash_table_insert(), both
         * the key and the value are copied).
         * @param hash a value hash
         * @param key the key
         * @param value a value
         */
        function value_hash_insert_value(
            hash: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
            key: string,
            value: GObject.Value | any,
        ): void;
        /**
         * Creates a #GHashTable whose keys are strings and whose values
         * are #GValue.
         * @returns a new empty #GHashTable
         */
        function value_hash_new(): GLib.HashTable<string, GObject.Value>;
        /**
         * Adds the necessary headers to `msg` to request a WebSocket
         * handshake. The message body and non-WebSocket-related headers are
         * not modified.
         *
         * Use soup_websocket_client_prepare_handshake_with_extensions() if you
         * want to include "Sec-WebSocket-Extensions" header in the request.
         *
         * This is a low-level function; if you use
         * soup_session_websocket_connect_async() to create a WebSocket
         * connection, it will call this for you.
         * @param msg a #SoupMessage
         * @param origin the "Origin" header to set
         * @param protocols list of   protocols to offer
         */
        function websocket_client_prepare_handshake(
            msg: Message,
            origin?: string | null,
            protocols?: string[] | null,
        ): void;
        /**
         * Adds the necessary headers to `msg` to request a WebSocket
         * handshake including supported WebSocket extensions.
         * The message body and non-WebSocket-related headers are
         * not modified.
         *
         * This is a low-level function; if you use
         * soup_session_websocket_connect_async() to create a WebSocket
         * connection, it will call this for you.
         * @param msg a #SoupMessage
         * @param origin the "Origin" header to set
         * @param protocols list of   protocols to offer
         * @param supported_extensions list   of supported extension types
         */
        function websocket_client_prepare_handshake_with_extensions(
            msg: Message,
            origin?: string | null,
            protocols?: string[] | null,
            supported_extensions?: GObject.TypeClass[] | null,
        ): void;
        /**
         * Looks at the response status code and headers in `msg` and
         * determines if they contain a valid WebSocket handshake response
         * (given the handshake request in `msg'`s request headers).
         *
         * If the response contains the "Sec-WebSocket-Extensions" header,
         * the handshake will be considered invalid. You need to use
         * soup_websocket_client_verify_handshake_with_extensions() to handle
         * responses with extensions.
         *
         * This is a low-level function; if you use
         * soup_session_websocket_connect_async() to create a WebSocket
         * connection, it will call this for you.
         * @param msg #SoupMessage containing both client and server sides of a   WebSocket handshake
         * @returns %TRUE if @msg contains a completed valid WebSocket   handshake, %FALSE and an error if not.
         */
        function websocket_client_verify_handshake(msg: Message): boolean;
        /**
         * Looks at the response status code and headers in `msg` and
         * determines if they contain a valid WebSocket handshake response
         * (given the handshake request in `msg'`s request headers).
         *
         * If `supported_extensions` is non-%NULL, extensions included in the
         * response "Sec-WebSocket-Extensions" are verified too. Accepted
         * extensions are returned in `accepted_extensions` parameter if non-%NULL.
         *
         * This is a low-level function; if you use
         * soup_session_websocket_connect_async() to create a WebSocket
         * connection, it will call this for you.
         * @param msg #SoupMessage containing both client and server sides of a   WebSocket handshake
         * @param supported_extensions list   of supported extension types
         * @returns %TRUE if @msg contains a completed valid WebSocket   handshake, %FALSE and an error if not.
         */
        function websocket_client_verify_handshake_with_extensions(
            msg: Message,
            supported_extensions?: GObject.TypeClass[] | null,
        ): [boolean, WebsocketExtension[] | null];
        function websocket_error_get_quark(): GLib.Quark;
        /**
         * Examines the method and request headers in `msg` and determines
         * whether `msg` contains a valid handshake request.
         *
         * If `origin` is non-%NULL, then only requests containing a matching
         * "Origin" header will be accepted. If `protocols` is non-%NULL, then
         * only requests containing a compatible "Sec-WebSocket-Protocols"
         * header will be accepted.
         *
         * Requests containing "Sec-WebSocket-Extensions" header will be
         * accepted even if the header is not valid. To check a request
         * with extensions you need to use
         * soup_websocket_server_check_handshake_with_extensions() and provide
         * the list of supported extension types.
         *
         * Normally soup_websocket_server_process_handshake() will take care
         * of this for you, and if you use soup_server_add_websocket_handler()
         * to handle accepting WebSocket connections, it will call that for
         * you. However, this function may be useful if you need to perform
         * more complicated validation; eg, accepting multiple different Origins,
         * or handling different protocols depending on the path.
         * @param msg #SoupMessage containing the client side of a WebSocket handshake
         * @param origin expected Origin header
         * @param protocols allowed WebSocket   protocols.
         * @returns %TRUE if @msg contained a valid WebSocket handshake,   %FALSE and an error if not.
         */
        function websocket_server_check_handshake(
            msg: Message,
            origin?: string | null,
            protocols?: string[] | null,
        ): boolean;
        /**
         * Examines the method and request headers in `msg` and determines
         * whether `msg` contains a valid handshake request.
         *
         * If `origin` is non-%NULL, then only requests containing a matching
         * "Origin" header will be accepted. If `protocols` is non-%NULL, then
         * only requests containing a compatible "Sec-WebSocket-Protocols"
         * header will be accepted. If `supported_extensions` is non-%NULL, then
         * only requests containing valid supported extensions in
         * "Sec-WebSocket-Extensions" header will be accepted.
         *
         * Normally soup_websocket_server_process_handshake_with_extensioins()
         * will take care of this for you, and if you use
         * soup_server_add_websocket_handler() to handle accepting WebSocket
         * connections, it will call that for you. However, this function may
         * be useful if you need to perform more complicated validation; eg,
         * accepting multiple different Origins, or handling different protocols
         * depending on the path.
         * @param msg #SoupMessage containing the client side of a WebSocket handshake
         * @param origin expected Origin header
         * @param protocols allowed WebSocket   protocols.
         * @param supported_extensions list   of supported extension types
         * @returns %TRUE if @msg contained a valid WebSocket handshake,   %FALSE and an error if not.
         */
        function websocket_server_check_handshake_with_extensions(
            msg: Message,
            origin?: string | null,
            protocols?: string[] | null,
            supported_extensions?: GObject.TypeClass[] | null,
        ): boolean;
        /**
         * Examines the method and request headers in `msg` and (assuming `msg`
         * contains a valid handshake request), fills in the handshake
         * response.
         *
         * If `expected_origin` is non-%NULL, then only requests containing a matching
         * "Origin" header will be accepted. If `protocols` is non-%NULL, then
         * only requests containing a compatible "Sec-WebSocket-Protocols"
         * header will be accepted.
         *
         * Requests containing "Sec-WebSocket-Extensions" header will be
         * accepted even if the header is not valid. To process a request
         * with extensions you need to use
         * soup_websocket_server_process_handshake_with_extensions() and provide
         * the list of supported extension types.
         *
         * This is a low-level function; if you use
         * soup_server_add_websocket_handler() to handle accepting WebSocket
         * connections, it will call this for you.
         * @param msg #SoupMessage containing the client side of a WebSocket handshake
         * @param expected_origin expected Origin header
         * @param protocols allowed WebSocket   protocols.
         * @returns %TRUE if @msg contained a valid WebSocket handshake   request and was updated to contain a handshake response. %FALSE if not.
         */
        function websocket_server_process_handshake(
            msg: Message,
            expected_origin?: string | null,
            protocols?: string[] | null,
        ): boolean;
        /**
         * Examines the method and request headers in `msg` and (assuming `msg`
         * contains a valid handshake request), fills in the handshake
         * response.
         *
         * If `expected_origin` is non-%NULL, then only requests containing a matching
         * "Origin" header will be accepted. If `protocols` is non-%NULL, then
         * only requests containing a compatible "Sec-WebSocket-Protocols"
         * header will be accepted. If `supported_extensions` is non-%NULL, then
         * only requests containing valid supported extensions in
         * "Sec-WebSocket-Extensions" header will be accepted. The accepted extensions
         * will be returned in `accepted_extensions` parameter if non-%NULL.
         *
         * This is a low-level function; if you use
         * soup_server_add_websocket_handler() to handle accepting WebSocket
         * connections, it will call this for you.
         * @param msg #SoupMessage containing the client side of a WebSocket handshake
         * @param expected_origin expected Origin header
         * @param protocols allowed WebSocket   protocols.
         * @param supported_extensions list   of supported extension types
         * @returns %TRUE if @msg contained a valid WebSocket handshake   request and was updated to contain a handshake response. %FALSE if not.
         */
        function websocket_server_process_handshake_with_extensions(
            msg: Message,
            expected_origin?: string | null,
            protocols?: string[] | null,
            supported_extensions?: GObject.TypeClass[] | null,
        ): [boolean, WebsocketExtension[] | null];
        /**
         * This creates an XML-RPC methodCall and returns it as a string.
         * This is the low-level method that soup_xmlrpc_request_new() is
         * built on.
         *
         * `params` is an array of #GValue representing the parameters to
         * `method`. (It is *not* a #GValueArray, although if you have a
         * #GValueArray, you can just pass its <literal>values</literal>f and
         * <literal>n_values</literal> fields.)
         *
         * The correspondence between glib types and XML-RPC types is:
         *
         *   int: #int (%G_TYPE_INT)
         *   boolean: #gboolean (%G_TYPE_BOOLEAN)
         *   string: #char* (%G_TYPE_STRING)
         *   double: #double (%G_TYPE_DOUBLE)
         *   datetime.iso8601: #SoupDate (%SOUP_TYPE_DATE)
         *   base64: #GByteArray (%SOUP_TYPE_BYTE_ARRAY)
         *   struct: #GHashTable (%G_TYPE_HASH_TABLE)
         *   array: #GValueArray (%G_TYPE_VALUE_ARRAY)
         *
         * For structs, use a #GHashTable that maps strings to #GValue;
         * soup_value_hash_new() and related methods can help with this.
         * @param method_name the name of the XML-RPC method
         * @param params arguments to @method
         * @returns the text of the methodCall, or %NULL on error
         */
        function xmlrpc_build_method_call(method_name: string, params: (GObject.Value | any)[]): string | null;
        /**
         * This creates a (successful) XML-RPC methodResponse and returns it
         * as a string. To create a fault response, use
         * soup_xmlrpc_build_fault().
         *
         * The glib type to XML-RPC type mapping is as with
         * soup_xmlrpc_build_method_call(), qv.
         * @param value the return value
         * @returns the text of the methodResponse, or %NULL on error
         */
        function xmlrpc_build_method_response(value: GObject.Value | any): string | null;
        /**
         * This creates an XML-RPC methodCall and returns it as a string.
         * This is the low-level method that soup_xmlrpc_message_new() is
         * built on.
         *
         * `params` is a #GVariant tuple representing the method parameters.
         *
         * Serialization details:
         *  - "a{s*}" and "{s*}" are serialized as &lt;struct&gt;
         *  - "ay" is serialized as &lt;base64&gt;
         *  - Other arrays and tuples are serialized as &lt;array&gt;
         *  - booleans are serialized as &lt;boolean&gt;
         *  - byte, int16, uint16 and int32 are serialized as &lt;int&gt;
         *  - uint32 and int64 are serialized as the nonstandard &lt;i8&gt; type
         *  - doubles are serialized as &lt;double&gt;
         *  - Strings are serialized as &lt;string&gt;
         *  - Variants (i.e. "v" type) are unwrapped and their child is serialized.
         *  - #GVariants created by soup_xmlrpc_variant_new_datetime() are serialized as
         *    &lt;dateTime.iso8601&gt;
         *  - Other types are not supported and will return %NULL and set `error`.
         *    This notably includes: object-paths, signatures, uint64, handles, maybes
         *    and dictionaries with non-string keys.
         *
         * If `params` is floating, it is consumed.
         * @param method_name the name of the XML-RPC method
         * @param params a #GVariant tuple
         * @returns the text of the methodCall, or %NULL on error.
         */
        function xmlrpc_build_request(method_name: string, params: GLib.Variant): string;
        /**
         * This creates a (successful) XML-RPC methodResponse and returns it
         * as a string. To create a fault response, use soup_xmlrpc_build_fault(). This
         * is the low-level method that soup_xmlrpc_message_set_response() is built on.
         *
         * See soup_xmlrpc_build_request() for serialization details, but note
         * that since a method can only have a single return value, `value`
         * should not be a tuple here (unless the return value is an array).
         *
         * If `value` is floating, it is consumed.
         * @param value the return value
         * @returns the text of the methodResponse, or %NULL on error.
         */
        function xmlrpc_build_response(value: GLib.Variant): string;
        function xmlrpc_error_quark(): GLib.Quark;
        function xmlrpc_fault_quark(): GLib.Quark;
        /**
         * Creates an XML-RPC methodCall and returns a #SoupMessage, ready
         * to send, for that method call.
         *
         * See soup_xmlrpc_build_request() for serialization details.
         *
         * If `params` is floating, it is consumed.
         * @param uri URI of the XML-RPC service
         * @param method_name the name of the XML-RPC method to invoke at @uri
         * @param params a #GVariant tuple
         * @returns a #SoupMessage encoding the   indicated XML-RPC request, or %NULL on error.
         */
        function xmlrpc_message_new(uri: string, method_name: string, params: GLib.Variant): Message;
        /**
         * Sets the status code and response body of `msg` to indicate a
         * successful XML-RPC call, with a return value given by `value`. To set a
         * fault response, use soup_xmlrpc_message_set_fault().
         *
         * See soup_xmlrpc_build_request() for serialization details.
         *
         * If `value` is floating, it is consumed.
         * @param msg an XML-RPC request
         * @param value a #GVariant
         * @returns %TRUE on success, %FALSE otherwise.
         */
        function xmlrpc_message_set_response(msg: Message, value: GLib.Variant): boolean;
        /**
         * Parses `method_call` to get the name and parameters, and returns the
         * parameter values in a #GValueArray; see also
         * soup_xmlrpc_extract_method_call(), which is more convenient if you
         * know in advance what the types of the parameters will be.
         * @param method_call the XML-RPC methodCall string
         * @param length the length of @method_call, or -1 if it is NUL-terminated
         * @returns success or failure.
         */
        function xmlrpc_parse_method_call(method_call: string, length: number): [boolean, string, GObject.ValueArray];
        /**
         * Parses `method_response` and returns the return value in `value`. If
         * `method_response` is a fault, `value` will be unchanged, and `error`
         * will be set to an error of type %SOUP_XMLRPC_FAULT, with the error
         * #code containing the fault code, and the error #message containing
         * the fault string. (If `method_response` cannot be parsed at all,
         * soup_xmlrpc_parse_method_response() will return %FALSE, but `error`
         * will be unset.)
         * @param method_response the XML-RPC methodResponse string
         * @param length the length of @method_response, or -1 if it is NUL-terminated
         * @returns %TRUE if a return value was parsed, %FALSE if the response could not be parsed, or contained a fault.
         */
        function xmlrpc_parse_method_response(method_response: string, length: number): [boolean, unknown];
        /**
         * Parses `method_call` and return the method name. Method parameters can be
         * parsed later using soup_xmlrpc_params_parse().
         * @param method_call the XML-RPC methodCall string
         * @param length the length of @method_call, or -1 if it is NUL-terminated
         * @returns method's name, or %NULL on error.
         */
        function xmlrpc_parse_request(method_call: string, length: number): [string, XMLRPCParams];
        /**
         * Parses `method_response` and returns the return value. If
         * `method_response` is a fault, %NULL is returned, and `error`
         * will be set to an error in the %SOUP_XMLRPC_FAULT domain, with the error
         * code containing the fault code, and the error message containing
         * the fault string. If `method_response` cannot be parsed, %NULL is returned,
         * and `error` will be set to an error in the %SOUP_XMLRPC_ERROR domain.
         *
         * See soup_xmlrpc_params_parse() for deserialization details.
         * @param method_response the XML-RPC methodResponse string
         * @param length the length of @method_response, or -1 if it is NUL-terminated
         * @param signature A valid #GVariant type string, or %NULL
         * @returns a new (non-floating) #GVariant, or %NULL
         */
        function xmlrpc_parse_response(
            method_response: string,
            length: number,
            signature?: string | null,
        ): GLib.Variant;
        /**
         * Get the #SoupDate from special #GVariant created by
         * soup_xmlrpc_variant_new_datetime() or by parsing a &lt;dateTime.iso8601&gt;
         * node. See soup_xmlrpc_params_parse().
         *
         * If `variant` does not contain a datetime it will return an error but it is not
         * considered a programmer error because it generally means parameters received
         * are not in the expected type.
         * @param variant a #GVariant
         * @returns a new #SoupDate, or %NULL on error.
         */
        function xmlrpc_variant_get_datetime(variant: GLib.Variant): Date;
        /**
         * Construct a special #GVariant used to serialize a &lt;dateTime.iso8601&gt;
         * node. See soup_xmlrpc_build_request().
         *
         * The actual type of the returned #GVariant is unspecified and "v" or "*"
         * should be used in variant format strings. For example:
         * <informalexample><programlisting>
         * args = g_variant_new ("(v)", soup_xmlrpc_variant_new_datetime (date));
         * </programlisting></informalexample>
         * @param date a #SoupDate
         * @returns a floating #GVariant.
         */
        function xmlrpc_variant_new_datetime(date: Date): GLib.Variant;
        interface AddressCallback {
            (addr: Address, status: number): void;
        }
        interface AuthDomainBasicAuthCallback {
            (domain: AuthDomainBasic, msg: Message, username: string, password: string): boolean;
        }
        interface AuthDomainDigestAuthCallback {
            (domain: AuthDomainDigest, msg: Message, username: string): string | null;
        }
        interface AuthDomainFilter {
            (domain: AuthDomain, msg: Message): boolean;
        }
        interface AuthDomainGenericAuthCallback {
            (domain: AuthDomain, msg: Message, username: string): boolean;
        }
        interface ChunkAllocator {
            (msg: Message, max_len: number): Buffer | null;
        }
        interface LoggerFilter {
            (logger: Logger, msg: Message): LoggerLogLevel;
        }
        interface LoggerPrinter {
            (logger: Logger, level: LoggerLogLevel, direction: number, data: string): void;
        }
        interface MessageHeadersForeachFunc {
            (name: string, value: string): void;
        }
        interface PasswordManagerCallback {
            (password_manager: PasswordManager, msg: Message, auth: Auth, retrying: boolean): void;
        }
        interface ProxyResolverCallback {
            (proxy_resolver: ProxyResolver, msg: Message, arg: number, addr: Address): void;
        }
        interface ProxyURIResolverCallback {
            (resolver: ProxyURIResolver, status: number, proxy_uri: URI): void;
        }
        interface ServerCallback {
            (
                server: Server,
                msg: Message,
                path: string,
                query: GLib.HashTable<string, string> | null,
                client: ClientContext,
            ): void;
        }
        interface ServerWebsocketCallback {
            (server: Server, connection: WebsocketConnection, path: string, client: ClientContext): void;
        }
        interface SessionCallback {
            (session: Session, msg: Message): void;
        }
        interface SessionConnectProgressCallback {
            (session: Session, event: Gio.SocketClientEvent, connection: Gio.IOStream): void;
        }
        interface SocketCallback {
            (sock: Socket, status: number): void;
        }
        type ByteArray = object | null;

        export namespace Cacheability {
            export const $gtype: GObject.GType<Cacheability>;
        }

        enum Cacheability {
            CACHEABLE,
            UNCACHEABLE,
            INVALIDATES,
            VALIDATES,
        }
        /**
         * Represents the parsed value of the "Expect" header.
         */

        /**
         * Represents the parsed value of the "Expect" header.
         */
        export namespace Expectation {
            export const $gtype: GObject.GType<Expectation>;
        }

        enum Expectation {
            /**
             * any unrecognized expectation
             */
            UNRECOGNIZED,
            /**
             * "100-continue"
             */
            CONTINUE,
        }
        /**
         * Various flags that can be set on a #SoupMessage to alter its
         * behavior.
         */

        /**
         * Various flags that can be set on a #SoupMessage to alter its
         * behavior.
         */
        export namespace MessageFlags {
            export const $gtype: GObject.GType<MessageFlags>;
        }

        enum MessageFlags {
            /**
             * The session should not follow redirect
             *   (3xx) responses received by this message.
             */
            NO_REDIRECT,
            /**
             * The caller will rebuild the request
             *   body if the message is restarted; see
             *   soup_message_body_set_accumulate() for more details.
             */
            CAN_REBUILD,
            /**
             * Deprecated: equivalent to calling
             *   soup_message_body_set_accumulate() on the incoming message body
             *   (ie, #SoupMessage:response_body for a client-side request),
             *   passing %FALSE.
             */
            OVERWRITE_CHUNKS,
            /**
             * Set by #SoupContentDecoder to
             *   indicate that it has removed the Content-Encoding on a message (and
             *   so headers such as Content-Length may no longer accurately describe
             *   the body).
             */
            CONTENT_DECODED,
            /**
             * if set after an https response
             *   has been received, indicates that the server's SSL certificate is
             *   trusted according to the session's CA.
             */
            CERTIFICATE_TRUSTED,
            /**
             * Requests that the message should be
             *   sent on a newly-created connection, not reusing an existing
             *   persistent connection. Note that messages with non-idempotent
             *   #SoupMessage:method<!-- -->s behave this way by default, unless
             *   #SOUP_MESSAGE_IDEMPOTENT is set.
             */
            NEW_CONNECTION,
            /**
             * The message is considered idempotent,
             *   regardless its #SoupMessage:method, and allows reuse of existing
             *   idle connections, instead of always requiring a new one, unless
             *   #SOUP_MESSAGE_NEW_CONNECTION is set.
             */
            IDEMPOTENT,
            /**
             * Request that a new connection is
             *   created for the message if there aren't idle connections available
             *   and it's not possible to create new connections due to any of the
             *   connection limits has been reached. If a dedicated connection is
             *   eventually created for this message, it will be dropped when the
             *   message finishes. Since 2.50
             */
            IGNORE_CONNECTION_LIMITS,
            /**
             * The #SoupAuthManager should not use
             *   the credentials cache for this message, neither to use cached credentials
             *   to automatically authenticate this message nor to cache the credentials
             *   after the message is successfully authenticated. This applies to both server
             *   and proxy authentication. Note that #SoupSession::authenticate signal will
             *   be emitted, if you want to disable authentication for a message use
             *   soup_message_disable_feature() passing #SOUP_TYPE_AUTH_MANAGER instead. Since 2.58
             */
            DO_NOT_USE_AUTH_CACHE,
        }
        /**
         * Options to pass to soup_server_listen(), etc.
         *
         * %SOUP_SERVER_LISTEN_IPV4_ONLY and %SOUP_SERVER_LISTEN_IPV6_ONLY
         * only make sense with soup_server_listen_all() and
         * soup_server_listen_local(), not plain soup_server_listen() (which
         * simply listens on whatever kind of socket you give it). And you
         * cannot specify both of them in a single call.
         */

        /**
         * Options to pass to soup_server_listen(), etc.
         *
         * %SOUP_SERVER_LISTEN_IPV4_ONLY and %SOUP_SERVER_LISTEN_IPV6_ONLY
         * only make sense with soup_server_listen_all() and
         * soup_server_listen_local(), not plain soup_server_listen() (which
         * simply listens on whatever kind of socket you give it). And you
         * cannot specify both of them in a single call.
         */
        export namespace ServerListenOptions {
            export const $gtype: GObject.GType<ServerListenOptions>;
        }

        enum ServerListenOptions {
            /**
             * Listen for https connections rather
             *   than plain http.
             */
            HTTPS,
            /**
             * Only listen on IPv4 interfaces.
             */
            IPV4_ONLY,
            /**
             * Only listen on IPv6 interfaces.
             */
            IPV6_ONLY,
        }
        module Address {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.SocketConnectable.ConstructorProps {
                family: AddressFamily;
                name: string;
                physical: string;
                port: number;
                protocol: string;
                sockaddr: any;
            }
        }

        class Address extends GObject.Object implements Gio.SocketConnectable {
            static $gtype: GObject.GType<Address>;

            // Properties

            get family(): AddressFamily;
            get name(): string;
            get physical(): string;
            get port(): number;
            get protocol(): string;
            get sockaddr(): any;

            // Constructors

            constructor(properties?: Partial<Address.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string, port: number): Address;

            static new_any(family: AddressFamily, port: number): Address;

            static new_from_sockaddr(sa: any | null, len: number): Address;

            // Methods

            /**
             * Tests if `addr1` and `addr2` have the same IP address. This method
             * can be used with soup_address_hash_by_ip() to create a
             * #GHashTable that hashes on IP address.
             *
             * This would be used to distinguish hosts in situations where
             * different virtual hosts on the same IP address should be considered
             * the same. Eg, if "www.example.com" and "www.example.net" have the
             * same IP address, then a single connection can be used to talk
             * to either of them.
             *
             * See also soup_address_equal_by_name(), which compares by name
             * rather than by IP address.
             * @param addr2 another #SoupAddress with a resolved   IP address
             * @returns whether or not @addr1 and @addr2 have the same IP address.
             */
            equal_by_ip(addr2: Address): boolean;
            /**
             * Tests if `addr1` and `addr2` have the same "name". This method can be
             * used with soup_address_hash_by_name() to create a #GHashTable that
             * hashes on address "names".
             *
             * Comparing by name normally means comparing the addresses by their
             * hostnames. But if the address was originally created using an IP
             * address literal, then it will be compared by that instead.
             *
             * In particular, if "www.example.com" has the IP address 10.0.0.1,
             * and `addr1` was created with the name "www.example.com" and `addr2`
             * was created with the name "10.0.0.1", then they will compare as
             * unequal for purposes of soup_address_equal_by_name().
             *
             * This would be used to distinguish hosts in situations where
             * different virtual hosts on the same IP address should be considered
             * different. Eg, for purposes of HTTP authentication or cookies, two
             * hosts with the same IP address but different names are considered
             * to be different hosts.
             *
             * See also soup_address_equal_by_ip(), which compares by IP address
             * rather than by name.
             * @param addr2 another #SoupAddress with a resolved   name
             * @returns whether or not @addr1 and @addr2 have the same name
             */
            equal_by_name(addr2: Address): boolean;
            /**
             * Creates a new #GSocketAddress corresponding to `addr` (which is assumed
             * to only have one socket address associated with it).
             * @returns a new #GSocketAddress
             */
            get_gsockaddr(): Gio.SocketAddress;
            /**
             * Returns the hostname associated with `addr`.
             *
             * This method is not thread-safe; if you call it while `addr` is being
             * resolved in another thread, it may return garbage. You can use
             * soup_address_is_resolved() to safely test whether or not an address
             * is resolved before fetching its name or address.
             * @returns the hostname, or %NULL if it is not known.
             */
            get_name(): string | null;
            /**
             * Returns the physical address associated with `addr` as a string.
             * (Eg, "127.0.0.1"). If the address is not yet known, returns %NULL.
             *
             * This method is not thread-safe; if you call it while `addr` is being
             * resolved in another thread, it may return garbage. You can use
             * soup_address_is_resolved() to safely test whether or not an address
             * is resolved before fetching its name or address.
             * @returns the physical address, or %NULL
             */
            get_physical(): string | null;
            /**
             * Returns the port associated with `addr`.
             * @returns the port
             */
            get_port(): number;
            /**
             * Returns the sockaddr associated with `addr,` with its length in
             * *`len`. If the sockaddr is not yet known, returns %NULL.
             *
             * This method is not thread-safe; if you call it while `addr` is being
             * resolved in another thread, it may return garbage. You can use
             * soup_address_is_resolved() to safely test whether or not an address
             * is resolved before fetching its name or address.
             * @returns the sockaddr, or %NULL
             */
            get_sockaddr(): [any | null, number];
            /**
             * A hash function (for #GHashTable) that corresponds to
             * soup_address_equal_by_ip(), qv
             * @returns the IP-based hash value for @addr.
             */
            hash_by_ip(): number;
            /**
             * A hash function (for #GHashTable) that corresponds to
             * soup_address_equal_by_name(), qv
             * @returns the named-based hash value for @addr.
             */
            hash_by_name(): number;
            /**
             * Tests if `addr` has already been resolved. Unlike the other
             * #SoupAddress "get" methods, this is safe to call when `addr` might
             * be being resolved in another thread.
             * @returns %TRUE if @addr has been resolved.
             */
            is_resolved(): boolean;
            /**
             * Asynchronously resolves the missing half of `addr` (its IP address
             * if it was created with soup_address_new(), or its hostname if it
             * was created with soup_address_new_from_sockaddr() or
             * soup_address_new_any().)
             *
             * If `cancellable` is non-%NULL, it can be used to cancel the
             * resolution. `callback` will still be invoked in this case, with a
             * status of %SOUP_STATUS_CANCELLED.
             *
             * It is safe to call this more than once on a given address, from the
             * same thread, with the same `async_context` (and doing so will not
             * result in redundant DNS queries being made). But it is not safe to
             * call from multiple threads, or with different `async_contexts,` or
             * mixed with calls to soup_address_resolve_sync().
             * @param async_context the #GMainContext to call @callback from
             * @param cancellable a #GCancellable object, or %NULL
             * @param callback callback to call with the result
             */
            resolve_async(
                async_context: GLib.MainContext | null,
                cancellable: Gio.Cancellable | null,
                callback: AddressCallback,
            ): void;
            /**
             * Synchronously resolves the missing half of `addr,` as with
             * soup_address_resolve_async().
             *
             * If `cancellable` is non-%NULL, it can be used to cancel the
             * resolution. soup_address_resolve_sync() will then return a status
             * of %SOUP_STATUS_CANCELLED.
             *
             * It is safe to call this more than once, even from different
             * threads, but it is not safe to mix calls to
             * soup_address_resolve_sync() with calls to
             * soup_address_resolve_async() on the same address.
             * @param cancellable a #GCancellable object, or %NULL
             * @returns %SOUP_STATUS_OK, %SOUP_STATUS_CANT_RESOLVE, or %SOUP_STATUS_CANCELLED.
             */
            resolve_sync(cancellable?: Gio.Cancellable | null): number;

            // Inherited methods
            /**
             * Creates a #GSocketAddressEnumerator for `connectable`.
             * @returns a new #GSocketAddressEnumerator.
             */
            enumerate(): Gio.SocketAddressEnumerator;
            /**
             * Creates a #GSocketAddressEnumerator for `connectable` that will
             * return a #GProxyAddress for each of its addresses that you must connect
             * to via a proxy.
             *
             * If `connectable` does not implement
             * g_socket_connectable_proxy_enumerate(), this will fall back to
             * calling g_socket_connectable_enumerate().
             * @returns a new #GSocketAddressEnumerator.
             */
            proxy_enumerate(): Gio.SocketAddressEnumerator;
            /**
             * Format a #GSocketConnectable as a string. This is a human-readable format for
             * use in debugging output, and is not a stable serialization format. It is not
             * suitable for use in user interfaces as it exposes too much information for a
             * user.
             *
             * If the #GSocketConnectable implementation does not support string formatting,
             * the implementation’s type name will be returned as a fallback.
             * @returns the formatted string
             */
            to_string(): string;
            /**
             * Creates a #GSocketAddressEnumerator for `connectable`.
             */
            vfunc_enumerate(): Gio.SocketAddressEnumerator;
            /**
             * Creates a #GSocketAddressEnumerator for `connectable` that will
             * return a #GProxyAddress for each of its addresses that you must connect
             * to via a proxy.
             *
             * If `connectable` does not implement
             * g_socket_connectable_proxy_enumerate(), this will fall back to
             * calling g_socket_connectable_enumerate().
             */
            vfunc_proxy_enumerate(): Gio.SocketAddressEnumerator;
            /**
             * Format a #GSocketConnectable as a string. This is a human-readable format for
             * use in debugging output, and is not a stable serialization format. It is not
             * suitable for use in user interfaces as it exposes too much information for a
             * user.
             *
             * If the #GSocketConnectable implementation does not support string formatting,
             * the implementation’s type name will be returned as a fallback.
             */
            vfunc_to_string(): string;
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

        module Auth {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                host: string;
                is_authenticated: boolean;
                isAuthenticated: boolean;
                is_for_proxy: boolean;
                isForProxy: boolean;
                realm: string;
                scheme_name: string;
                schemeName: string;
            }
        }

        /**
         * The abstract base class for handling authentication. Specific HTTP
         * Authentication mechanisms are implemented by its subclasses, but
         * applications never need to be aware of the specific subclasses
         * being used.
         */
        abstract class Auth extends GObject.Object {
            static $gtype: GObject.GType<Auth>;

            // Properties

            get host(): string;
            set host(val: string);
            get is_authenticated(): boolean;
            get isAuthenticated(): boolean;
            get is_for_proxy(): boolean;
            set is_for_proxy(val: boolean);
            get isForProxy(): boolean;
            set isForProxy(val: boolean);
            get realm(): string;
            set realm(val: string);
            get scheme_name(): string;
            get schemeName(): string;

            // Constructors

            constructor(properties?: Partial<Auth.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](type: GObject.GType, msg: Message, auth_header: string): Auth;

            // Virtual methods

            /**
             * Call this on an auth to authenticate it; normally this will cause
             * the auth's message to be requeued with the new authentication info.
             * @param username the username provided by the user or client
             * @param password the password provided by the user or client
             */
            vfunc_authenticate(username: string, password: string): void;
            /**
             * Tests if `auth` is able to authenticate by providing credentials to the
             * soup_auth_authenticate().
             */
            vfunc_can_authenticate(): boolean;
            /**
             * Generates an appropriate "Authorization" header for `msg`. (The
             * session will only call this if soup_auth_is_authenticated()
             * returned %TRUE.)
             * @param msg the #SoupMessage to be authorized
             */
            vfunc_get_authorization(msg: Message): string;
            /**
             * Returns a list of paths on the server which `auth` extends over.
             * (All subdirectories of these paths are also assumed to be part
             * of `auth'`s protection space, unless otherwise discovered not to
             * be.)
             * @param source_uri the URI of the request that @auth was generated in response to.
             */
            vfunc_get_protection_space(source_uri: URI): string[];
            /**
             * Tests if `auth` has been given a username and password
             */
            vfunc_is_authenticated(): boolean;
            /**
             * Tests if `auth` is ready to make a request for `msg` with. For most
             * auths, this is equivalent to soup_auth_is_authenticated(), but for
             * some auth types (eg, NTLM), the auth may be sendable (eg, as an
             * authentication request) even before it is authenticated.
             * @param msg a #SoupMessage
             */
            vfunc_is_ready(msg: Message): boolean;
            /**
             * Updates `auth` with the information from `msg` and `auth_header,`
             * possibly un-authenticating it. As with soup_auth_new(), this is
             * normally only used by #SoupSession.
             * @param msg the #SoupMessage @auth is being updated for
             * @param auth_header the WWW-Authenticate/Proxy-Authenticate header
             */
            vfunc_update(msg: Message, auth_header: { [key: string]: any } | GLib.HashTable<any, any>): boolean;

            // Methods

            /**
             * Call this on an auth to authenticate it; normally this will cause
             * the auth's message to be requeued with the new authentication info.
             * @param username the username provided by the user or client
             * @param password the password provided by the user or client
             */
            authenticate(username: string, password: string): void;
            /**
             * Tests if `auth` is able to authenticate by providing credentials to the
             * soup_auth_authenticate().
             * @returns %TRUE if @auth is able to accept credentials.
             */
            can_authenticate(): boolean;
            /**
             * Generates an appropriate "Authorization" header for `msg`. (The
             * session will only call this if soup_auth_is_authenticated()
             * returned %TRUE.)
             * @param msg the #SoupMessage to be authorized
             * @returns the "Authorization" header, which must be freed.
             */
            get_authorization(msg: Message): string;
            /**
             * Returns the host that `auth` is associated with.
             * @returns the hostname
             */
            get_host(): string;
            /**
             * Gets an opaque identifier for `auth,` for use as a hash key or the
             * like. #SoupAuth objects from the same server with the same
             * identifier refer to the same authentication domain (eg, the URLs
             * associated with them take the same usernames and passwords).
             * @returns the identifier
             */
            get_info(): string;
            /**
             * Returns a list of paths on the server which `auth` extends over.
             * (All subdirectories of these paths are also assumed to be part
             * of `auth'`s protection space, unless otherwise discovered not to
             * be.)
             * @param source_uri the URI of the request that @auth was generated in response to.
             * @returns the list of paths, which can be freed with soup_auth_free_protection_space().
             */
            get_protection_space(source_uri: URI): string[];
            /**
             * Returns `auth'`s realm. This is an identifier that distinguishes
             * separate authentication spaces on a given server, and may be some
             * string that is meaningful to the user. (Although it is probably not
             * localized.)
             * @returns the realm name
             */
            get_realm(): string;
            get_saved_password(user: string): string;
            get_saved_users(): string[];
            /**
             * Returns `auth'`s scheme name. (Eg, "Basic", "Digest", or "NTLM")
             * @returns the scheme name
             */
            get_scheme_name(): string;
            has_saved_password(username: string, password: string): void;
            /**
             * Tests if `auth` is ready to make a request for `msg` with. For most
             * auths, this is equivalent to soup_auth_is_authenticated(), but for
             * some auth types (eg, NTLM), the auth may be sendable (eg, as an
             * authentication request) even before it is authenticated.
             * @param msg a #SoupMessage
             * @returns %TRUE if @auth is ready to make a request with.
             */
            is_ready(msg: Message): boolean;
            save_password(username: string, password: string): void;
            /**
             * Updates `auth` with the information from `msg` and `auth_header,`
             * possibly un-authenticating it. As with soup_auth_new(), this is
             * normally only used by #SoupSession.
             * @param msg the #SoupMessage @auth is being updated for
             * @param auth_header the WWW-Authenticate/Proxy-Authenticate header
             * @returns %TRUE if @auth is still a valid (but potentially unauthenticated) #SoupAuth. %FALSE if something about @auth_params could not be parsed or incorporated into @auth at all.
             */
            update(msg: Message, auth_header: string): boolean;
        }

        module AuthBasic {
            // Constructor properties interface

            interface ConstructorProps extends Auth.ConstructorProps {}
        }

        class AuthBasic extends Auth {
            static $gtype: GObject.GType<AuthBasic>;

            // Constructors

            constructor(properties?: Partial<AuthBasic.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module AuthDigest {
            // Constructor properties interface

            interface ConstructorProps extends Auth.ConstructorProps {}
        }

        class AuthDigest extends Auth {
            static $gtype: GObject.GType<AuthDigest>;

            // Constructors

            constructor(properties?: Partial<AuthDigest.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module AuthDomain {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                add_path: string;
                addPath: string;
                filter: AuthDomainFilter;
                filter_data: any;
                filterData: any;
                generic_auth_callback: AuthDomainGenericAuthCallback;
                genericAuthCallback: AuthDomainGenericAuthCallback;
                generic_auth_data: any;
                genericAuthData: any;
                proxy: boolean;
                realm: string;
                remove_path: string;
                removePath: string;
            }
        }

        abstract class AuthDomain extends GObject.Object {
            static $gtype: GObject.GType<AuthDomain>;

            // Properties

            set add_path(val: string);
            set addPath(val: string);
            /**
             * The #SoupAuthDomainFilter for the domain
             */
            get filter(): AuthDomainFilter;
            set filter(val: AuthDomainFilter);
            get filter_data(): any;
            set filter_data(val: any);
            get filterData(): any;
            set filterData(val: any);
            /**
             * The #SoupAuthDomainGenericAuthCallback for the domain
             */
            get generic_auth_callback(): AuthDomainGenericAuthCallback;
            set generic_auth_callback(val: AuthDomainGenericAuthCallback);
            /**
             * The #SoupAuthDomainGenericAuthCallback for the domain
             */
            get genericAuthCallback(): AuthDomainGenericAuthCallback;
            set genericAuthCallback(val: AuthDomainGenericAuthCallback);
            get generic_auth_data(): any;
            set generic_auth_data(val: any);
            get genericAuthData(): any;
            set genericAuthData(val: any);
            get proxy(): boolean;
            get realm(): string;
            set remove_path(val: string);
            set removePath(val: string);

            // Constructors

            constructor(properties?: Partial<AuthDomain.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            vfunc_accepts(msg: Message, header: string): string;
            /**
             * Adds a "WWW-Authenticate" or "Proxy-Authenticate" header to `msg,`
             * requesting that the client authenticate, and sets `msg'`s status
             * accordingly.
             *
             * This is used by #SoupServer internally and is probably of no use to
             * anyone else.
             * @param msg a #SoupMessage
             */
            vfunc_challenge(msg: Message): string;
            /**
             * Checks if `msg` authenticates to `domain` via `username` and
             * `password`. This would normally be called from a
             * #SoupAuthDomainGenericAuthCallback.
             * @param msg a #SoupMessage
             * @param username a username
             * @param password a password
             */
            vfunc_check_password(msg: Message, username: string, password: string): boolean;

            // Methods

            /**
             * Checks if `msg` contains appropriate authorization for `domain` to
             * accept it. Mirroring soup_auth_domain_covers(), this does not check
             * whether or not `domain` <emphasis>cares</emphasis> if `msg` is
             * authorized.
             *
             * This is used by #SoupServer internally and is probably of no use to
             * anyone else.
             * @param msg a #SoupMessage
             * @returns the username that @msg has authenticated as, if in fact it has authenticated. %NULL otherwise.
             */
            accepts(msg: Message): string | null;
            /**
             * Adds a "WWW-Authenticate" or "Proxy-Authenticate" header to `msg,`
             * requesting that the client authenticate, and sets `msg'`s status
             * accordingly.
             *
             * This is used by #SoupServer internally and is probably of no use to
             * anyone else.
             * @param msg a #SoupMessage
             */
            challenge(msg: Message): void;
            /**
             * Checks if `msg` authenticates to `domain` via `username` and
             * `password`. This would normally be called from a
             * #SoupAuthDomainGenericAuthCallback.
             * @param msg a #SoupMessage
             * @param username a username
             * @param password a password
             * @returns whether or not the message is authenticated
             */
            check_password(msg: Message, username: string, password: string): boolean;
            /**
             * Checks if `domain` requires `msg` to be authenticated (according to
             * its paths and filter function). This does not actually look at
             * whether `msg` <emphasis>is</emphasis> authenticated, merely whether
             * or not it needs to be.
             *
             * This is used by #SoupServer internally and is probably of no use to
             * anyone else.
             * @param msg a #SoupMessage
             * @returns %TRUE if @domain requires @msg to be authenticated
             */
            covers(msg: Message): boolean;
            /**
             * Gets the realm name associated with `domain`
             * @returns @domain's realm
             */
            get_realm(): string;
            /**
             * Adds `filter` as an authentication filter to `domain`. The filter
             * gets a chance to bypass authentication for certain requests that
             * would otherwise require it. Eg, it might check the message's path
             * in some way that is too complicated to do via the other methods, or
             * it might check the message's method, and allow GETs but not PUTs.
             *
             * The filter function returns %TRUE if the request should still
             * require authentication, or %FALSE if authentication is unnecessary
             * for this request.
             *
             * To help prevent security holes, your filter should return %TRUE by
             * default, and only return %FALSE under specifically-tested
             * circumstances, rather than the other way around. Eg, in the example
             * above, where you want to authenticate PUTs but not GETs, you should
             * check if the method is GET and return %FALSE in that case, and then
             * return %TRUE for all other methods (rather than returning %TRUE for
             * PUT and %FALSE for all other methods). This way if it turned out
             * (now or later) that some paths supported additional methods besides
             * GET and PUT, those methods would default to being NOT allowed for
             * unauthenticated users.
             *
             * You can also set the filter by setting the %SOUP_AUTH_DOMAIN_FILTER
             * and %SOUP_AUTH_DOMAIN_FILTER_DATA properties, which can also be
             * used to set the filter at construct time.
             * @param filter the auth filter for @domain
             */
            set_filter(filter: AuthDomainFilter): void;
            /**
             * Sets `auth_callback` as an authentication-handling callback for
             * `domain`. Whenever a request comes in to `domain` which cannot be
             * authenticated via a domain-specific auth callback (eg,
             * #SoupAuthDomainDigestAuthCallback), the generic auth callback
             * will be invoked. See #SoupAuthDomainGenericAuthCallback for information
             * on what the callback should do.
             * @param auth_callback the auth callback
             */
            set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void;
            try_generic_auth_callback(msg: Message, username: string): boolean;
        }

        module AuthDomainBasic {
            // Constructor properties interface

            interface ConstructorProps extends AuthDomain.ConstructorProps {
                auth_callback: AuthDomainBasicAuthCallback;
                authCallback: AuthDomainBasicAuthCallback;
                auth_data: any;
                authData: any;
            }
        }

        class AuthDomainBasic extends AuthDomain {
            static $gtype: GObject.GType<AuthDomainBasic>;

            // Properties

            /**
             * The #SoupAuthDomainBasicAuthCallback
             */
            get auth_callback(): AuthDomainBasicAuthCallback;
            set auth_callback(val: AuthDomainBasicAuthCallback);
            /**
             * The #SoupAuthDomainBasicAuthCallback
             */
            get authCallback(): AuthDomainBasicAuthCallback;
            set authCallback(val: AuthDomainBasicAuthCallback);
            /**
             * The data to pass to the #SoupAuthDomainBasicAuthCallback
             */
            get auth_data(): any;
            set auth_data(val: any);
            /**
             * The data to pass to the #SoupAuthDomainBasicAuthCallback
             */
            get authData(): any;
            set authData(val: any);

            // Constructors

            constructor(properties?: Partial<AuthDomainBasic.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Sets the callback that `domain` will use to authenticate incoming
             * requests. For each request containing authorization, `domain` will
             * invoke the callback, and then either accept or reject the request
             * based on `callback'`s return value.
             *
             * You can also set the auth callback by setting the
             * %SOUP_AUTH_DOMAIN_BASIC_AUTH_CALLBACK and
             * %SOUP_AUTH_DOMAIN_BASIC_AUTH_DATA properties, which can also be
             * used to set the callback at construct time.
             * @param callback the callback
             */
            set_auth_callback(callback: AuthDomainBasicAuthCallback): void;
        }

        module AuthDomainDigest {
            // Constructor properties interface

            interface ConstructorProps extends AuthDomain.ConstructorProps {
                auth_callback: AuthDomainDigestAuthCallback;
                authCallback: AuthDomainDigestAuthCallback;
                auth_data: any;
                authData: any;
            }
        }

        class AuthDomainDigest extends AuthDomain {
            static $gtype: GObject.GType<AuthDomainDigest>;

            // Properties

            /**
             * The #SoupAuthDomainDigestAuthCallback
             */
            get auth_callback(): AuthDomainDigestAuthCallback;
            set auth_callback(val: AuthDomainDigestAuthCallback);
            /**
             * The #SoupAuthDomainDigestAuthCallback
             */
            get authCallback(): AuthDomainDigestAuthCallback;
            set authCallback(val: AuthDomainDigestAuthCallback);
            /**
             * The data to pass to the #SoupAuthDomainDigestAuthCallback
             */
            get auth_data(): any;
            set auth_data(val: any);
            /**
             * The data to pass to the #SoupAuthDomainDigestAuthCallback
             */
            get authData(): any;
            set authData(val: any);

            // Constructors

            constructor(properties?: Partial<AuthDomainDigest.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Encodes the username/realm/password triplet for Digest
             * authentication. (That is, it returns a stringified MD5 hash of
             * `username,` `realm,` and `password` concatenated together). This is
             * the form that is needed as the return value of
             * #SoupAuthDomainDigest's auth handler.
             *
             * For security reasons, you should store the encoded hash, rather
             * than storing the cleartext password itself and calling this method
             * only when you need to verify it. This way, if your server is
             * compromised, the attackers will not gain access to cleartext
             * passwords which might also be usable at other sites. (Note also
             * that the encoded password returned by this method is identical to
             * the encoded password stored in an Apache .htdigest file.)
             * @param username a username
             * @param realm an auth realm name
             * @param password the password for @username in @realm
             */
            static encode_password(username: string, realm: string, password: string): string;

            // Methods

            /**
             * Sets the callback that `domain` will use to authenticate incoming
             * requests. For each request containing authorization, `domain` will
             * invoke the callback, and then either accept or reject the request
             * based on `callback'`s return value.
             *
             * You can also set the auth callback by setting the
             * %SOUP_AUTH_DOMAIN_DIGEST_AUTH_CALLBACK and
             * %SOUP_AUTH_DOMAIN_DIGEST_AUTH_DATA properties, which can also be
             * used to set the callback at construct time.
             * @param callback the callback
             */
            set_auth_callback(callback: AuthDomainDigestAuthCallback): void;
        }

        module AuthManager {
            // Signal callback interfaces

            interface Authenticate {
                (msg: Message, auth: Auth, retrying: boolean): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {}
        }

        class AuthManager extends GObject.Object implements SessionFeature {
            static $gtype: GObject.GType<AuthManager>;

            // Constructors

            constructor(properties?: Partial<AuthManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'authenticate',
                callback: (_source: this, msg: Message, auth: Auth, retrying: boolean) => void,
            ): number;
            connect_after(
                signal: 'authenticate',
                callback: (_source: this, msg: Message, auth: Auth, retrying: boolean) => void,
            ): number;
            emit(signal: 'authenticate', msg: Message, auth: Auth, retrying: boolean): void;

            // Virtual methods

            vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void;

            // Methods

            /**
             * Clear all credentials cached by `manager`
             */
            clear_cached_credentials(): void;
            /**
             * Records that `auth` is to be used under `uri,` as though a
             * WWW-Authenticate header had been received at that URI. This can be
             * used to "preload" `manager'`s auth cache, to avoid an extra HTTP
             * round trip in the case where you know ahead of time that a 401
             * response will be returned.
             *
             * This is only useful for authentication types where the initial
             * Authorization header does not depend on any additional information
             * from the server. (Eg, Basic or NTLM, but not Digest.)
             * @param uri the #SoupURI under which @auth is to be used
             * @param auth the #SoupAuth to use
             */
            use_auth(uri: URI, auth: Auth): void;

            // Inherited methods
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            attach(session: Session): void;
            detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
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

        module AuthNTLM {
            // Constructor properties interface

            interface ConstructorProps extends Auth.ConstructorProps {}
        }

        class AuthNTLM extends Auth {
            static $gtype: GObject.GType<AuthNTLM>;

            // Constructors

            constructor(properties?: Partial<AuthNTLM.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module AuthNegotiate {
            // Constructor properties interface

            interface ConstructorProps extends Auth.ConstructorProps {}
        }

        class AuthNegotiate extends Auth {
            static $gtype: GObject.GType<AuthNegotiate>;

            // Constructors

            constructor(properties?: Partial<AuthNegotiate.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Indicates whether libsoup was built with GSSAPI support. If this is
             * %FALSE, %SOUP_TYPE_AUTH_NEGOTIATE will still be defined and can
             * still be added to a #SoupSession, but libsoup will never attempt to
             * actually use this auth type.
             */
            static supported(): boolean;
        }

        module Cache {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {
                cache_dir: string;
                cacheDir: string;
                cache_type: CacheType;
                cacheType: CacheType;
            }
        }

        class Cache extends GObject.Object implements SessionFeature {
            static $gtype: GObject.GType<Cache>;

            // Properties

            get cache_dir(): string;
            get cacheDir(): string;
            get cache_type(): CacheType;
            get cacheType(): CacheType;

            // Constructors

            constructor(properties?: Partial<Cache.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](cache_dir: string | null, cache_type: CacheType): Cache;

            // Virtual methods

            vfunc_get_cacheability(msg: Message): Cacheability;

            // Methods

            /**
             * Will remove all entries in the `cache` plus all the cache files.
             */
            clear(): void;
            /**
             * Synchronously writes the cache index out to disk. Contrast with
             * soup_cache_flush(), which writes pending cache
             * <emphasis>entries</emphasis> to disk.
             *
             * You must call this before exiting if you want your cache data to
             * persist between sessions.
             */
            dump(): void;
            /**
             * This function will force all pending writes in the `cache` to be
             * committed to disk. For doing so it will iterate the #GMainContext
             * associated with `cache'`s session as long as needed.
             *
             * Contrast with soup_cache_dump(), which writes out the cache index
             * file.
             */
            flush(): void;
            /**
             * Gets the maximum size of the cache.
             * @returns the maximum size of the cache, in bytes.
             */
            get_max_size(): number;
            /**
             * Loads the contents of `cache'`s index into memory.
             */
            load(): void;
            /**
             * Sets the maximum size of the cache.
             * @param max_size the maximum size of the cache, in bytes
             */
            set_max_size(max_size: number): void;

            // Inherited methods
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            attach(session: Session): void;
            detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
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

        module ContentDecoder {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {}
        }

        class ContentDecoder extends GObject.Object implements SessionFeature {
            static $gtype: GObject.GType<ContentDecoder>;

            // Constructors

            constructor(properties?: Partial<ContentDecoder.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Inherited methods
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            attach(session: Session): void;
            detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
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

        module ContentSniffer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {}
        }

        class ContentSniffer extends GObject.Object implements SessionFeature {
            static $gtype: GObject.GType<ContentSniffer>;

            // Constructors

            constructor(properties?: Partial<ContentSniffer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ContentSniffer;

            // Virtual methods

            /**
             * Gets the number of bytes `sniffer` needs in order to properly sniff
             * a buffer.
             */
            vfunc_get_buffer_size(): number;
            /**
             * Sniffs `buffer` to determine its Content-Type. The result may also
             * be influenced by the Content-Type declared in `msg'`s response
             * headers.
             * @param msg the message to sniff
             * @param buffer a buffer containing the start of @msg's response body
             */
            vfunc_sniff(msg: Message, buffer: Buffer): [string, GLib.HashTable<string, string> | null];

            // Methods

            /**
             * Gets the number of bytes `sniffer` needs in order to properly sniff
             * a buffer.
             * @returns the number of bytes to sniff
             */
            get_buffer_size(): number;
            /**
             * Sniffs `buffer` to determine its Content-Type. The result may also
             * be influenced by the Content-Type declared in `msg'`s response
             * headers.
             * @param msg the message to sniff
             * @param buffer a buffer containing the start of @msg's response body
             * @returns the sniffed Content-Type of @buffer; this will never be %NULL,   but may be "application/octet-stream".
             */
            sniff(msg: Message, buffer: Buffer): [string, GLib.HashTable<string, string> | null];

            // Inherited methods
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            attach(session: Session): void;
            detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
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

        module CookieJar {
            // Signal callback interfaces

            interface Changed {
                (old_cookie: Cookie, new_cookie: Cookie): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {
                accept_policy: CookieJarAcceptPolicy;
                acceptPolicy: CookieJarAcceptPolicy;
                read_only: boolean;
                readOnly: boolean;
            }
        }

        class CookieJar extends GObject.Object implements SessionFeature {
            static $gtype: GObject.GType<CookieJar>;

            // Properties

            /**
             * The policy the jar should follow to accept or reject cookies
             */
            get accept_policy(): CookieJarAcceptPolicy;
            set accept_policy(val: CookieJarAcceptPolicy);
            /**
             * The policy the jar should follow to accept or reject cookies
             */
            get acceptPolicy(): CookieJarAcceptPolicy;
            set acceptPolicy(val: CookieJarAcceptPolicy);
            get read_only(): boolean;
            get readOnly(): boolean;

            // Constructors

            constructor(properties?: Partial<CookieJar.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): CookieJar;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'changed',
                callback: (_source: this, old_cookie: Cookie, new_cookie: Cookie) => void,
            ): number;
            connect_after(
                signal: 'changed',
                callback: (_source: this, old_cookie: Cookie, new_cookie: Cookie) => void,
            ): number;
            emit(signal: 'changed', old_cookie: Cookie, new_cookie: Cookie): void;

            // Virtual methods

            vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void;
            /**
             * Gets whether `jar` stores cookies persistenly.
             */
            vfunc_is_persistent(): boolean;
            /**
             * This function exists for backward compatibility, but does not do
             * anything any more; cookie jars are saved automatically when they
             * are changed.
             */
            vfunc_save(): void;

            // Methods

            /**
             * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
             * an existing cookie or adding a valid new cookie ('valid' means
             * that the cookie's expire date is not in the past).
             *
             * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
             * @param cookie a #SoupCookie
             */
            add_cookie(cookie: Cookie): void;
            /**
             * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
             * an existing cookie or adding a valid new cookie ('valid' means
             * that the cookie's expire date is not in the past).
             *
             * `first_party` will be used to reject cookies coming from third party
             * resources in case such a security policy is set in the `jar`.
             *
             * `uri` will be used to reject setting or overwriting secure cookies
             * from insecure origins. %NULL is treated as secure.
             *
             * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
             * @param cookie a #SoupCookie
             * @param uri the URI setting the cookie
             * @param first_party the URI for the main document
             */
            add_cookie_full(cookie: Cookie, uri?: URI | null, first_party?: URI | null): void;
            /**
             * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
             * an existing cookie or adding a valid new cookie ('valid' means
             * that the cookie's expire date is not in the past).
             *
             * `first_party` will be used to reject cookies coming from third party
             * resources in case such a security policy is set in the `jar`.
             *
             * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
             *
             * For secure cookies to work properly you may want to use
             * soup_cookie_jar_add_cookie_full().
             * @param first_party the URI for the main document
             * @param cookie a #SoupCookie
             */
            add_cookie_with_first_party(first_party: URI, cookie: Cookie): void;
            /**
             * Constructs a #GSList with every cookie inside the `jar`.
             * The cookies in the list are a copy of the original, so
             * you have to free them when you are done with them.
             * @returns a #GSList with all the cookies in the @jar.
             */
            all_cookies(): Cookie[];
            /**
             * Deletes `cookie` from `jar,` emitting the 'changed' signal.
             * @param cookie a #SoupCookie
             */
            delete_cookie(cookie: Cookie): void;
            /**
             * Gets `jar'`s #SoupCookieJarAcceptPolicy
             * @returns the #SoupCookieJarAcceptPolicy set in the @jar
             */
            get_accept_policy(): CookieJarAcceptPolicy;
            /**
             * Retrieves the list of cookies that would be sent with a request to `uri`
             * as a #GSList of #SoupCookie objects.
             *
             * If `for_http` is %TRUE, the return value will include cookies marked
             * "HttpOnly" (that is, cookies that the server wishes to keep hidden
             * from client-side scripting operations such as the JavaScript
             * document.cookies property). Since #SoupCookieJar sets the Cookie
             * header itself when making the actual HTTP request, you should
             * almost certainly be setting `for_http` to %FALSE if you are calling
             * this.
             * @param uri a #SoupURI
             * @param for_http whether or not the return value is being passed directly to an HTTP operation
             * @returns a #GSList with the cookies in the @jar that would be sent with a request to @uri.
             */
            get_cookie_list(uri: URI, for_http: boolean): Cookie[];
            /**
             * This is an extended version of soup_cookie_jar_get_cookie_list() that
             * provides more information required to use SameSite cookies. See the
             * [SameSite cookies spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
             * for more detailed information.
             * @param uri a #SoupURI
             * @param top_level a #SoupURI for the top level document
             * @param site_for_cookies a #SoupURI indicating the origin to get cookies for
             * @param for_http whether or not the return value is being passed directly to an HTTP operation
             * @param is_safe_method if the HTTP method is safe, as defined by RFC 7231, ignored when @for_http is %FALSE
             * @param is_top_level_navigation whether or not the HTTP request is part of top level navigation
             * @returns a #GSList with the cookies in the @jar that would be sent with a request to @uri.
             */
            get_cookie_list_with_same_site_info(
                uri: URI,
                top_level: URI | null,
                site_for_cookies: URI | null,
                for_http: boolean,
                is_safe_method: boolean,
                is_top_level_navigation: boolean,
            ): Cookie[];
            /**
             * Retrieves (in Cookie-header form) the list of cookies that would
             * be sent with a request to `uri`.
             *
             * If `for_http` is %TRUE, the return value will include cookies marked
             * "HttpOnly" (that is, cookies that the server wishes to keep hidden
             * from client-side scripting operations such as the JavaScript
             * document.cookies property). Since #SoupCookieJar sets the Cookie
             * header itself when making the actual HTTP request, you should
             * almost certainly be setting `for_http` to %FALSE if you are calling
             * this.
             * @param uri a #SoupURI
             * @param for_http whether or not the return value is being passed directly to an HTTP operation
             * @returns the cookies, in string form, or %NULL if there are no cookies for @uri.
             */
            get_cookies(uri: URI, for_http: boolean): string | null;
            /**
             * Gets whether `jar` stores cookies persistenly.
             * @returns %TRUE if @jar storage is persistent or %FALSE otherwise.
             */
            is_persistent(): boolean;
            /**
             * This function exists for backward compatibility, but does not do
             * anything any more; cookie jars are saved automatically when they
             * are changed.
             */
            save(): void;
            /**
             * Sets `policy` as the cookie acceptance policy for `jar`.
             * @param policy a #SoupCookieJarAcceptPolicy
             */
            set_accept_policy(policy: CookieJarAcceptPolicy | null): void;
            /**
             * Adds `cookie` to `jar,` exactly as though it had appeared in a
             * Set-Cookie header returned from a request to `uri`.
             *
             * Keep in mind that if the #SoupCookieJarAcceptPolicy set is either
             * %SOUP_COOKIE_JAR_ACCEPT_NO_THIRD_PARTY or
             * %SOUP_COOKIE_JAR_ACCEPT_GRANDFATHERED_THIRD_PARTY you'll need to use
             * soup_cookie_jar_set_cookie_with_first_party(), otherwise the jar
             * will have no way of knowing if the cookie is being set by a third
             * party or not.
             * @param uri the URI setting the cookie
             * @param cookie the stringified cookie to set
             */
            set_cookie(uri: URI, cookie: string): void;
            /**
             * Adds `cookie` to `jar,` exactly as though it had appeared in a
             * Set-Cookie header returned from a request to `uri`. `first_party`
             * will be used to reject cookies coming from third party resources in
             * case such a security policy is set in the `jar`.
             * @param uri the URI setting the cookie
             * @param first_party the URI for the main document
             * @param cookie the stringified cookie to set
             */
            set_cookie_with_first_party(uri: URI, first_party: URI, cookie: string): void;

            // Inherited methods
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            attach(session: Session): void;
            detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
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

        module CookieJarDB {
            // Constructor properties interface

            interface ConstructorProps extends CookieJar.ConstructorProps, SessionFeature.ConstructorProps {
                filename: string;
            }
        }

        class CookieJarDB extends CookieJar implements SessionFeature {
            static $gtype: GObject.GType<CookieJarDB>;

            // Properties

            get filename(): string;

            // Constructors

            constructor(properties?: Partial<CookieJarDB.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](filename: string, read_only: boolean): CookieJarDB;
            // Conflicted with Soup.CookieJar.new

            static ['new'](...args: never[]): any;

            // Inherited methods
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            attach(session: Session): void;
            detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
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

        module CookieJarText {
            // Constructor properties interface

            interface ConstructorProps extends CookieJar.ConstructorProps, SessionFeature.ConstructorProps {
                filename: string;
            }
        }

        class CookieJarText extends CookieJar implements SessionFeature {
            static $gtype: GObject.GType<CookieJarText>;

            // Properties

            get filename(): string;

            // Constructors

            constructor(properties?: Partial<CookieJarText.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](filename: string, read_only: boolean): CookieJarText;
            // Conflicted with Soup.CookieJar.new

            static ['new'](...args: never[]): any;

            // Inherited methods
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            attach(session: Session): void;
            detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
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

        module HSTSEnforcer {
            // Signal callback interfaces

            interface Changed {
                (old_policy: HSTSPolicy, new_policy: HSTSPolicy): void;
            }

            interface HstsEnforced {
                (message: Message): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {}
        }

        class HSTSEnforcer extends GObject.Object implements SessionFeature {
            static $gtype: GObject.GType<HSTSEnforcer>;

            // Constructors

            constructor(properties?: Partial<HSTSEnforcer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): HSTSEnforcer;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'changed',
                callback: (_source: this, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void,
            ): number;
            connect_after(
                signal: 'changed',
                callback: (_source: this, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void,
            ): number;
            emit(signal: 'changed', old_policy: HSTSPolicy, new_policy: HSTSPolicy): void;
            connect(signal: 'hsts-enforced', callback: (_source: this, message: Message) => void): number;
            connect_after(signal: 'hsts-enforced', callback: (_source: this, message: Message) => void): number;
            emit(signal: 'hsts-enforced', message: Message): void;

            // Virtual methods

            vfunc_changed(old_policy: HSTSPolicy, new_policy: HSTSPolicy): void;
            /**
             * Gets whether `hsts_enforcer` has a currently valid policy for `domain`.
             * @param domain a domain.
             */
            vfunc_has_valid_policy(domain: string): boolean;
            vfunc_hsts_enforced(message: Message): void;
            /**
             * Gets whether `hsts_enforcer` stores policies persistenly.
             */
            vfunc_is_persistent(): boolean;

            // Methods

            /**
             * Gets a list of domains for which there are policies in `enforcer`.
             * @param session_policies whether to include session policies
             * @returns a newly allocated list of domains. Use g_list_free_full() and g_free() to free the list.
             */
            get_domains(session_policies: boolean): string[];
            /**
             * Gets a list with the policies in `enforcer`.
             * @param session_policies whether to include session policies
             * @returns a newly allocated list of policies. Use g_list_free_full() and soup_hsts_policy_free() to free the list.
             */
            get_policies(session_policies: boolean): HSTSPolicy[];
            /**
             * Gets whether `hsts_enforcer` has a currently valid policy for `domain`.
             * @param domain a domain.
             * @returns %TRUE if access to @domain should happen over HTTPS, false otherwise.
             */
            has_valid_policy(domain: string): boolean;
            /**
             * Gets whether `hsts_enforcer` stores policies persistenly.
             * @returns %TRUE if @hsts_enforcer storage is persistent or %FALSE otherwise.
             */
            is_persistent(): boolean;
            /**
             * Sets `policy` to `hsts_enforcer`. If `policy` is expired, any
             * existing HSTS policy for its host will be removed instead. If a
             * policy existed for this host, it will be replaced. Otherwise, the
             * new policy will be inserted. If the policy is a session policy, that
             * is, one created with soup_hsts_policy_new_session_policy(), the policy
             * will not expire and will be enforced during the lifetime of
             * `hsts_enforcer'`s #SoupSession.
             * @param policy the policy of the HSTS host
             */
            set_policy(policy: HSTSPolicy): void;
            /**
             * Sets a session policy for `domain`. A session policy is a policy
             * that is permanent to the lifetime of `hsts_enforcer'`s #SoupSession
             * and doesn't expire.
             * @param domain policy domain or hostname
             * @param include_subdomains %TRUE if the policy applies on sub domains
             */
            set_session_policy(domain: string, include_subdomains: boolean): void;

            // Inherited methods
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            attach(session: Session): void;
            detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
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

        module HSTSEnforcerDB {
            // Constructor properties interface

            interface ConstructorProps extends HSTSEnforcer.ConstructorProps, SessionFeature.ConstructorProps {
                filename: string;
            }
        }

        class HSTSEnforcerDB extends HSTSEnforcer implements SessionFeature {
            static $gtype: GObject.GType<HSTSEnforcerDB>;

            // Properties

            /**
             * The filename of the SQLite database where HSTS policies are stored.
             */
            get filename(): string;

            // Constructors

            constructor(properties?: Partial<HSTSEnforcerDB.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](filename: string): HSTSEnforcerDB;
            // Conflicted with Soup.HSTSEnforcer.new

            static ['new'](...args: never[]): any;

            // Inherited methods
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            attach(session: Session): void;
            detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
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

        module Logger {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {
                level: LoggerLogLevel;
                max_body_size: number;
                maxBodySize: number;
            }
        }

        class Logger extends GObject.Object implements SessionFeature {
            static $gtype: GObject.GType<Logger>;

            // Properties

            /**
             * The level of logging output
             */
            get level(): LoggerLogLevel;
            set level(val: LoggerLogLevel);
            /**
             * If #SoupLogger:level is %SOUP_LOGGER_LOG_BODY, this gives
             * the maximum number of bytes of the body that will be logged.
             * (-1 means "no limit".)
             */
            get max_body_size(): number;
            set max_body_size(val: number);
            /**
             * If #SoupLogger:level is %SOUP_LOGGER_LOG_BODY, this gives
             * the maximum number of bytes of the body that will be logged.
             * (-1 means "no limit".)
             */
            get maxBodySize(): number;
            set maxBodySize(val: number);

            // Constructors

            constructor(properties?: Partial<Logger.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](level: LoggerLogLevel, max_body_size: number): Logger;

            // Methods

            /**
             * Sets `logger` to watch `session` and print debug information for
             * its messages.
             *
             * (The session will take a reference on `logger,` which will be
             * removed when you call soup_logger_detach(), or when the session is
             * destroyed.)
             * @param session a #SoupSession
             */
            attach(session: Session): void;
            /**
             * Stops `logger` from watching `session`.
             * @param session a #SoupSession
             */
            detach(session: Session): void;
            /**
             * Sets up an alternate log printing routine, if you don't want
             * the log to go to <literal>stdout</literal>.
             * @param printer the callback for printing logging output
             */
            set_printer(printer: LoggerPrinter): void;
            /**
             * Sets up a filter to determine the log level for a given request.
             * For each HTTP request `logger` will invoke `request_filter` to
             * determine how much (if any) of that request to log. (If you do not
             * set a request filter, `logger` will just always log requests at the
             * level passed to soup_logger_new().)
             * @param request_filter the callback for request debugging
             */
            set_request_filter(request_filter: LoggerFilter): void;
            /**
             * Sets up a filter to determine the log level for a given response.
             * For each HTTP response `logger` will invoke `response_filter` to
             * determine how much (if any) of that response to log. (If you do not
             * set a response filter, `logger` will just always log responses at
             * the level passed to soup_logger_new().)
             * @param response_filter the callback for response debugging
             */
            set_response_filter(response_filter: LoggerFilter): void;

            // Inherited methods
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
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

        module Message {
            // Signal callback interfaces

            interface ContentSniffed {
                (type: string, params: { [key: string]: any } | GLib.HashTable<string, string>): void;
            }

            interface Finished {
                (): void;
            }

            interface GotBody {
                (): void;
            }

            interface GotChunk {
                (chunk: Buffer): void;
            }

            interface GotHeaders {
                (): void;
            }

            interface GotInformational {
                (): void;
            }

            interface NetworkEvent {
                (event: Gio.SocketClientEvent, connection: Gio.IOStream): void;
            }

            interface Restarted {
                (): void;
            }

            interface Starting {
                (): void;
            }

            interface WroteBody {
                (): void;
            }

            interface WroteBodyData {
                (chunk: Buffer): void;
            }

            interface WroteChunk {
                (): void;
            }

            interface WroteHeaders {
                (): void;
            }

            interface WroteInformational {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                first_party: URI;
                firstParty: URI;
                flags: MessageFlags;
                http_version: HTTPVersion;
                httpVersion: HTTPVersion;
                is_top_level_navigation: boolean;
                isTopLevelNavigation: boolean;
                method: string;
                priority: MessagePriority;
                reason_phrase: string;
                reasonPhrase: string;
                request_body: MessageBody;
                requestBody: MessageBody;
                request_body_data: GLib.Bytes;
                requestBodyData: GLib.Bytes;
                request_headers: MessageHeaders;
                requestHeaders: MessageHeaders;
                response_body: MessageBody;
                responseBody: MessageBody;
                response_body_data: GLib.Bytes;
                responseBodyData: GLib.Bytes;
                response_headers: MessageHeaders;
                responseHeaders: MessageHeaders;
                server_side: boolean;
                serverSide: boolean;
                site_for_cookies: URI;
                siteForCookies: URI;
                status_code: number;
                statusCode: number;
                tls_certificate: Gio.TlsCertificate;
                tlsCertificate: Gio.TlsCertificate;
                tls_errors: Gio.TlsCertificateFlags;
                tlsErrors: Gio.TlsCertificateFlags;
                uri: URI;
            }
        }

        /**
         * Represents an HTTP message being sent or received.
         *
         * `status_code` will normally be a #SoupStatus value, eg,
         * %SOUP_STATUS_OK, though of course it might actually be an unknown
         * status code. `reason_phrase` is the actual text returned from the
         * server, which may or may not correspond to the "standard"
         * description of `status_code`. At any rate, it is almost certainly
         * not localized, and not very descriptive even if it is in the user's
         * language; you should not use `reason_phrase` in user-visible
         * messages. Rather, you should look at `status_code,` and determine an
         * end-user-appropriate message based on that and on what you were
         * trying to do.
         *
         * As described in the #SoupMessageBody documentation, the
         * `request_body` and `response_body` <literal>data</literal> fields
         * will not necessarily be filled in at all times. When the body
         * fields are filled in, they will be terminated with a '\0' byte
         * (which is not included in the <literal>length</literal>), so you
         * can use them as ordinary C strings (assuming that you know that the
         * body doesn't have any other '\0' bytes).
         *
         * For a client-side #SoupMessage, `request_body'`s
         * <literal>data</literal> is usually filled in right before libsoup
         * writes the request to the network, but you should not count on
         * this; use soup_message_body_flatten() if you want to ensure that
         * <literal>data</literal> is filled in. If you are not using
         * #SoupRequest to read the response, then `response_body'`s
         * <literal>data</literal> will be filled in before
         * #SoupMessage::finished is emitted. (If you are using #SoupRequest,
         * then the message body is not accumulated by default, so
         * `response_body'`s <literal>data</literal> will always be %NULL.)
         *
         * For a server-side #SoupMessage, `request_body'`s %data will be
         * filled in before #SoupMessage::got_body is emitted.
         *
         * To prevent the %data field from being filled in at all (eg, if you
         * are handling the data from a #SoupMessage::got_chunk, and so don't
         * need to see it all at the end), call
         * soup_message_body_set_accumulate() on `response_body` or
         * `request_body` as appropriate, passing %FALSE.
         */
        class Message extends GObject.Object {
            static $gtype: GObject.GType<Message>;

            // Properties

            /**
             * The #SoupURI loaded in the application when the message was
             * queued.
             */
            get first_party(): URI;
            set first_party(val: URI);
            /**
             * The #SoupURI loaded in the application when the message was
             * queued.
             */
            get firstParty(): URI;
            set firstParty(val: URI);
            get flags(): MessageFlags;
            set flags(val: MessageFlags);
            get http_version(): HTTPVersion;
            set http_version(val: HTTPVersion);
            get httpVersion(): HTTPVersion;
            set httpVersion(val: HTTPVersion);
            /**
             * Set when the message is navigating between top level domains.
             */
            get is_top_level_navigation(): boolean;
            set is_top_level_navigation(val: boolean);
            /**
             * Set when the message is navigating between top level domains.
             */
            get isTopLevelNavigation(): boolean;
            set isTopLevelNavigation(val: boolean);
            get method(): string;
            set method(val: string);
            get priority(): MessagePriority;
            set priority(val: MessagePriority);
            get reason_phrase(): string;
            set reason_phrase(val: string);
            get reasonPhrase(): string;
            set reasonPhrase(val: string);
            get request_body(): MessageBody;
            get requestBody(): MessageBody;
            /**
             * The message's HTTP request body, as a #GBytes.
             */
            get request_body_data(): GLib.Bytes;
            /**
             * The message's HTTP request body, as a #GBytes.
             */
            get requestBodyData(): GLib.Bytes;
            get request_headers(): MessageHeaders;
            get requestHeaders(): MessageHeaders;
            get response_body(): MessageBody;
            get responseBody(): MessageBody;
            /**
             * The message's HTTP response body, as a #GBytes.
             */
            get response_body_data(): GLib.Bytes;
            /**
             * The message's HTTP response body, as a #GBytes.
             */
            get responseBodyData(): GLib.Bytes;
            get response_headers(): MessageHeaders;
            get responseHeaders(): MessageHeaders;
            get server_side(): boolean;
            get serverSide(): boolean;
            get site_for_cookies(): URI;
            set site_for_cookies(val: URI);
            get siteForCookies(): URI;
            set siteForCookies(val: URI);
            get status_code(): number;
            set status_code(val: number);
            get statusCode(): number;
            set statusCode(val: number);
            /**
             * The #GTlsCertificate associated with the message
             */
            get tls_certificate(): Gio.TlsCertificate;
            set tls_certificate(val: Gio.TlsCertificate);
            /**
             * The #GTlsCertificate associated with the message
             */
            get tlsCertificate(): Gio.TlsCertificate;
            set tlsCertificate(val: Gio.TlsCertificate);
            /**
             * The verification errors on #SoupMessage:tls-certificate
             */
            get tls_errors(): Gio.TlsCertificateFlags;
            set tls_errors(val: Gio.TlsCertificateFlags);
            /**
             * The verification errors on #SoupMessage:tls-certificate
             */
            get tlsErrors(): Gio.TlsCertificateFlags;
            set tlsErrors(val: Gio.TlsCertificateFlags);
            get uri(): URI;
            set uri(val: URI);

            // Constructors

            constructor(properties?: Partial<Message.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](method: string, uri_string: string): Message;

            static new_from_uri(method: string, uri: URI): Message;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'content-sniffed',
                callback: (_source: this, type: string, params: GLib.HashTable<string, string>) => void,
            ): number;
            connect_after(
                signal: 'content-sniffed',
                callback: (_source: this, type: string, params: GLib.HashTable<string, string>) => void,
            ): number;
            emit(
                signal: 'content-sniffed',
                type: string,
                params: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            connect(signal: 'finished', callback: (_source: this) => void): number;
            connect_after(signal: 'finished', callback: (_source: this) => void): number;
            emit(signal: 'finished'): void;
            connect(signal: 'got-body', callback: (_source: this) => void): number;
            connect_after(signal: 'got-body', callback: (_source: this) => void): number;
            emit(signal: 'got-body'): void;
            connect(signal: 'got-chunk', callback: (_source: this, chunk: Buffer) => void): number;
            connect_after(signal: 'got-chunk', callback: (_source: this, chunk: Buffer) => void): number;
            emit(signal: 'got-chunk', chunk: Buffer): void;
            connect(signal: 'got-headers', callback: (_source: this) => void): number;
            connect_after(signal: 'got-headers', callback: (_source: this) => void): number;
            emit(signal: 'got-headers'): void;
            connect(signal: 'got-informational', callback: (_source: this) => void): number;
            connect_after(signal: 'got-informational', callback: (_source: this) => void): number;
            emit(signal: 'got-informational'): void;
            connect(
                signal: 'network-event',
                callback: (_source: this, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void,
            ): number;
            connect_after(
                signal: 'network-event',
                callback: (_source: this, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void,
            ): number;
            emit(signal: 'network-event', event: Gio.SocketClientEvent, connection: Gio.IOStream): void;
            connect(signal: 'restarted', callback: (_source: this) => void): number;
            connect_after(signal: 'restarted', callback: (_source: this) => void): number;
            emit(signal: 'restarted'): void;
            connect(signal: 'starting', callback: (_source: this) => void): number;
            connect_after(signal: 'starting', callback: (_source: this) => void): number;
            emit(signal: 'starting'): void;
            connect(signal: 'wrote-body', callback: (_source: this) => void): number;
            connect_after(signal: 'wrote-body', callback: (_source: this) => void): number;
            emit(signal: 'wrote-body'): void;
            connect(signal: 'wrote-body-data', callback: (_source: this, chunk: Buffer) => void): number;
            connect_after(signal: 'wrote-body-data', callback: (_source: this, chunk: Buffer) => void): number;
            emit(signal: 'wrote-body-data', chunk: Buffer): void;
            connect(signal: 'wrote-chunk', callback: (_source: this) => void): number;
            connect_after(signal: 'wrote-chunk', callback: (_source: this) => void): number;
            emit(signal: 'wrote-chunk'): void;
            connect(signal: 'wrote-headers', callback: (_source: this) => void): number;
            connect_after(signal: 'wrote-headers', callback: (_source: this) => void): number;
            emit(signal: 'wrote-headers'): void;
            connect(signal: 'wrote-informational', callback: (_source: this) => void): number;
            connect_after(signal: 'wrote-informational', callback: (_source: this) => void): number;
            emit(signal: 'wrote-informational'): void;

            // Virtual methods

            vfunc_finished(): void;
            vfunc_got_body(): void;
            vfunc_got_chunk(chunk: Buffer): void;
            vfunc_got_headers(): void;
            vfunc_got_informational(): void;
            vfunc_restarted(): void;
            vfunc_starting(): void;
            vfunc_wrote_body(): void;
            vfunc_wrote_chunk(): void;
            vfunc_wrote_headers(): void;
            vfunc_wrote_informational(): void;

            // Methods

            content_sniffed(content_type: string, params: { [key: string]: any } | GLib.HashTable<any, any>): void;
            /**
             * This disables the actions of #SoupSessionFeature<!-- -->s with the
             * given `feature_type` (or a subclass of that type) on `msg,` so that
             * `msg` is processed as though the feature(s) hadn't been added to the
             * session. Eg, passing #SOUP_TYPE_CONTENT_SNIFFER for `feature_type`
             * will disable Content-Type sniffing on the message.
             *
             * You must call this before queueing `msg` on a session; calling it on
             * a message that has already been queued is undefined. In particular,
             * you cannot call this on a message that is being requeued after a
             * redirect or authentication.
             * @param feature_type the #GType of a #SoupSessionFeature
             */
            disable_feature(feature_type: GObject.GType): void;
            finished(): void;
            /**
             * Gets the address `msg'`s URI points to. After first setting the
             * URI on a message, this will be unresolved, although the message's
             * session will resolve it before sending the message.
             * @returns the address @msg's URI points to
             */
            get_address(): Address;
            /**
             * Gets `msg'`s first-party #SoupURI
             * @returns the @msg's first party #SoupURI
             */
            get_first_party(): URI;
            /**
             * Gets the flags on `msg`
             * @returns the flags
             */
            get_flags(): MessageFlags;
            /**
             * Gets the HTTP version of `msg`. This is the minimum of the
             * version from the request and the version from the response.
             * @returns the HTTP version
             */
            get_http_version(): HTTPVersion;
            /**
             * If `msg` is using https (or attempted to use https but got
             * %SOUP_STATUS_SSL_FAILED), this retrieves the #GTlsCertificate
             * associated with its connection, and the #GTlsCertificateFlags
             * showing what problems, if any, have been found with that
             * certificate.
             *
             * <note><para>This is only meaningful with messages processed by a #SoupSession and is
             * not useful for messages received by a #SoupServer</para></note>
             * @returns %TRUE if @msg used/attempted https, %FALSE if not
             */
            get_https_status(): [boolean, Gio.TlsCertificate, Gio.TlsCertificateFlags];
            get_is_top_level_navigation(): boolean;
            /**
             * Retrieves the #SoupMessagePriority. If not set this value defaults
             * to #SOUP_MESSAGE_PRIORITY_NORMAL.
             * @returns the priority of the message.
             */
            get_priority(): MessagePriority;
            /**
             * Gets `msg'`s site for cookies #SoupURI
             * @returns the @msg's site for cookies #SoupURI
             */
            get_site_for_cookies(): URI;
            /**
             * If `msg` is associated with a #SoupRequest, this returns that
             * request. Otherwise it returns %NULL.
             * @returns @msg's associated #SoupRequest
             */
            get_soup_request(): Request;
            /**
             * Gets `msg'`s URI
             * @returns the URI @msg is targeted for.
             */
            get_uri(): URI;
            got_body(): void;
            got_chunk(chunk: Buffer): void;
            got_headers(): void;
            got_informational(): void;
            /**
             * Get whether #SoupSessionFeature<!-- -->s of the given `feature_type`
             * (or a subclass of that type) are disabled on `msg`.
             * See soup_message_disable_feature().
             * @param feature_type the #GType of a #SoupSessionFeature
             * @returns %TRUE if feature is disabled, or %FALSE otherwise.
             */
            is_feature_disabled(feature_type: GObject.GType): boolean;
            /**
             * Determines whether or not `msg'`s connection can be kept alive for
             * further requests after processing `msg,` based on the HTTP version,
             * Connection header, etc.
             * @returns %TRUE or %FALSE.
             */
            is_keepalive(): boolean;
            restarted(): void;
            /**
             * Sets an alternate chunk-allocation function to use when reading
             * `msg'`s body when using the traditional (ie,
             * non-#SoupRequest<!-- -->-based) API. Every time data is available
             * to read, libsoup will call `allocator,` which should return a
             * #SoupBuffer. (See #SoupChunkAllocator for additional details.)
             * Libsoup will then read data from the network into that buffer, and
             * update the buffer's <literal>length</literal> to indicate how much
             * data it read.
             *
             * Generally, a custom chunk allocator would be used in conjunction
             * with soup_message_body_set_accumulate() %FALSE and
             * #SoupMessage::got_chunk, as part of a strategy to avoid unnecessary
             * copying of data. However, you cannot assume that every call to the
             * allocator will be followed by a call to your
             * #SoupMessage::got_chunk handler; if an I/O error occurs, then the
             * buffer will be unreffed without ever having been used. If your
             * buffer-allocation strategy requires special cleanup, use
             * soup_buffer_new_with_owner() rather than doing the cleanup from the
             * #SoupMessage::got_chunk handler.
             *
             * The other thing to remember when using non-accumulating message
             * bodies is that the buffer passed to the #SoupMessage::got_chunk
             * handler will be unreffed after the handler returns, just as it
             * would be in the non-custom-allocated case. If you want to hand the
             * chunk data off to some other part of your program to use later,
             * you'll need to ref the #SoupBuffer (or its owner, in the
             * soup_buffer_new_with_owner() case) to ensure that the data remains
             * valid.
             * @param allocator the chunk allocator callback
             */
            set_chunk_allocator(allocator: ChunkAllocator): void;
            /**
             * Sets `first_party` as the main document #SoupURI for `msg`. For
             * details of when and how this is used refer to the documentation for
             * #SoupCookieJarAcceptPolicy.
             * @param first_party the #SoupURI for the @msg's first party
             */
            set_first_party(first_party: URI): void;
            /**
             * Sets the specified flags on `msg`.
             * @param flags a set of #SoupMessageFlags values
             */
            set_flags(flags: MessageFlags | null): void;
            /**
             * Sets the HTTP version on `msg`. The default version is
             * %SOUP_HTTP_1_1. Setting it to %SOUP_HTTP_1_0 will prevent certain
             * functionality from being used.
             * @param version the HTTP version
             */
            set_http_version(version: HTTPVersion | null): void;
            /**
             * See the [same-site spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
             * for more information.
             * @param is_top_level_navigation if %TRUE indicate the current request is a top-level navigation
             */
            set_is_top_level_navigation(is_top_level_navigation: boolean): void;
            /**
             * Sets the priority of a message. Note that this won't have any
             * effect unless used before the message is added to the session's
             * message processing queue.
             *
             * The message will be placed just before any other previously added
             * message with lower priority (messages with the same priority are
             * processed on a FIFO basis).
             *
             * Setting priorities does not currently work with #SoupSessionSync
             * (or with synchronous messages on a plain #SoupSession) because in
             * the synchronous/blocking case, priority ends up being determined
             * semi-randomly by thread scheduling.
             * @param priority the #SoupMessagePriority
             */
            set_priority(priority: MessagePriority | null): void;
            /**
             * Sets `msg'`s status_code to `status_code` and adds a Location header
             * pointing to `redirect_uri`. Use this from a #SoupServer when you
             * want to redirect the client to another URI.
             *
             * `redirect_uri` can be a relative URI, in which case it is
             * interpreted relative to `msg'`s current URI. In particular, if
             * `redirect_uri` is just a path, it will replace the path
             * <emphasis>and query</emphasis> of `msg'`s URI.
             * @param status_code a 3xx status code
             * @param redirect_uri the URI to redirect @msg to
             */
            set_redirect(status_code: number, redirect_uri: string): void;
            /**
             * Convenience function to set the request body of a #SoupMessage. If
             * `content_type` is %NULL, the request body must be empty as well.
             * @param content_type MIME Content-Type of the body
             * @param req_use a #SoupMemoryUse describing how to handle @req_body
             * @param req_body a data buffer containing the body of the message request.
             */
            set_request(content_type: string | null, req_use: MemoryUse | null, req_body?: Uint8Array | null): void;
            /**
             * Convenience function to set the response body of a #SoupMessage. If
             * `content_type` is %NULL, the response body must be empty as well.
             * @param content_type MIME Content-Type of the body
             * @param resp_use a #SoupMemoryUse describing how to handle @resp_body
             * @param resp_body a data buffer containing the body of the message response.
             */
            set_response(content_type: string | null, resp_use: MemoryUse | null, resp_body?: Uint8Array | null): void;
            /**
             * Sets `site_for_cookies` as the policy URL for same-site cookies for `msg`.
             *
             * It is either the URL of the top-level document or %NULL depending on whether the registrable
             * domain of this document's URL matches the registrable domain of its parent's/opener's
             * URL. For the top-level document it is set to the document's URL.
             *
             * See the [same-site spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
             * for more information.
             * @param site_for_cookies the #SoupURI for the @msg's site for cookies
             */
            set_site_for_cookies(site_for_cookies?: URI | null): void;
            /**
             * Sets `msg'`s status code to `status_code`. If `status_code` is a
             * known value, it will also set `msg'`s reason_phrase.
             * @param status_code an HTTP status code
             */
            set_status(status_code: number): void;
            /**
             * Sets `msg'`s status code and reason phrase.
             * @param status_code an HTTP status code
             * @param reason_phrase a description of the status
             */
            set_status_full(status_code: number, reason_phrase: string): void;
            /**
             * Sets `msg'`s URI to `uri`. If `msg` has already been sent and you want
             * to re-send it with the new URI, you need to call
             * soup_session_requeue_message().
             * @param uri the new #SoupURI
             */
            set_uri(uri: URI): void;
            starting(): void;
            wrote_body(): void;
            wrote_body_data(chunk: Buffer): void;
            wrote_chunk(): void;
            wrote_headers(): void;
            wrote_informational(): void;
        }

        module MultipartInputStream {
            // Constructor properties interface

            interface ConstructorProps
                extends Gio.FilterInputStream.ConstructorProps,
                    Gio.PollableInputStream.ConstructorProps {
                message: Message;
            }
        }

        class MultipartInputStream extends Gio.FilterInputStream implements Gio.PollableInputStream {
            static $gtype: GObject.GType<MultipartInputStream>;

            // Properties

            get message(): Message;

            // Constructors

            constructor(properties?: Partial<MultipartInputStream.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](msg: Message, base_stream: Gio.InputStream): MultipartInputStream;

            // Methods

            /**
             * Obtains the headers for the part currently being processed. Note
             * that the #SoupMessageHeaders that are returned are owned by the
             * #SoupMultipartInputStream and will be replaced when a call is made
             * to soup_multipart_input_stream_next_part() or its async
             * counterpart, so if keeping the headers is required, a copy must be
             * made.
             *
             * Note that if a part had no headers at all an empty #SoupMessageHeaders
             * will be returned.
             * @returns a #SoupMessageHeaders containing the headers for the part currently being processed or %NULL if the headers failed to parse.
             */
            get_headers(): MessageHeaders | null;
            /**
             * Obtains an input stream for the next part. When dealing with a
             * multipart response the input stream needs to be wrapped in a
             * #SoupMultipartInputStream and this function or its async
             * counterpart need to be called to obtain the first part for
             * reading.
             *
             * After calling this function,
             * soup_multipart_input_stream_get_headers() can be used to obtain the
             * headers for the first part. A read of 0 bytes indicates the end of
             * the part; a new call to this function should be done at that point,
             * to obtain the next part.
             * @param cancellable a #GCancellable
             * @returns a new #GInputStream, or %NULL if there are no more parts
             */
            next_part(cancellable?: Gio.Cancellable | null): Gio.InputStream | null;
            /**
             * Obtains a #GInputStream for the next request. See
             * soup_multipart_input_stream_next_part() for details on the
             * workflow.
             * @param io_priority the I/O priority for the request.
             * @param cancellable a #GCancellable.
             */
            next_part_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<Gio.InputStream | null>;
            /**
             * Obtains a #GInputStream for the next request. See
             * soup_multipart_input_stream_next_part() for details on the
             * workflow.
             * @param io_priority the I/O priority for the request.
             * @param cancellable a #GCancellable.
             * @param callback callback to call when request is satisfied.
             */
            next_part_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Obtains a #GInputStream for the next request. See
             * soup_multipart_input_stream_next_part() for details on the
             * workflow.
             * @param io_priority the I/O priority for the request.
             * @param cancellable a #GCancellable.
             * @param callback callback to call when request is satisfied.
             */
            next_part_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.InputStream | null> | void;
            /**
             * Finishes an asynchronous request for the next part.
             * @param result a #GAsyncResult.
             * @returns a newly created #GInputStream for reading the next part or %NULL if there are no more parts.
             */
            next_part_finish(result: Gio.AsyncResult): Gio.InputStream | null;

            // Inherited methods
            /**
             * Checks if `stream` is actually pollable. Some classes may implement
             * #GPollableInputStream but have only certain instances of that class
             * be pollable. If this method returns %FALSE, then the behavior of
             * other #GPollableInputStream methods is undefined.
             *
             * For any given stream, the value returned by this method is constant;
             * a stream cannot switch from pollable to non-pollable or vice versa.
             * @returns %TRUE if @stream is pollable, %FALSE if not.
             */
            can_poll(): boolean;
            /**
             * Creates a #GSource that triggers when `stream` can be read, or
             * `cancellable` is triggered or an error occurs. The callback on the
             * source is of the #GPollableSourceFunc type.
             *
             * As with g_pollable_input_stream_is_readable(), it is possible that
             * the stream may not actually be readable even after the source
             * triggers, so you should use g_pollable_input_stream_read_nonblocking()
             * rather than g_input_stream_read() from the callback.
             *
             * The behaviour of this method is undefined if
             * g_pollable_input_stream_can_poll() returns %FALSE for `stream`.
             * @param cancellable a #GCancellable, or %NULL
             * @returns a new #GSource
             */
            create_source(cancellable?: Gio.Cancellable | null): GLib.Source;
            /**
             * Checks if `stream` can be read.
             *
             * Note that some stream types may not be able to implement this 100%
             * reliably, and it is possible that a call to g_input_stream_read()
             * after this returns %TRUE would still block. To guarantee
             * non-blocking behavior, you should always use
             * g_pollable_input_stream_read_nonblocking(), which will return a
             * %G_IO_ERROR_WOULD_BLOCK error rather than blocking.
             *
             * The behaviour of this method is undefined if
             * g_pollable_input_stream_can_poll() returns %FALSE for `stream`.
             * @returns %TRUE if @stream is readable, %FALSE if not. If an error   has occurred on @stream, this will result in   g_pollable_input_stream_is_readable() returning %TRUE, and the   next attempt to read will return the error.
             */
            is_readable(): boolean;
            /**
             * Attempts to read up to `count` bytes from `stream` into `buffer,` as
             * with g_input_stream_read(). If `stream` is not currently readable,
             * this will immediately return %G_IO_ERROR_WOULD_BLOCK, and you can
             * use g_pollable_input_stream_create_source() to create a #GSource
             * that will be triggered when `stream` is readable.
             *
             * Note that since this method never blocks, you cannot actually
             * use `cancellable` to cancel it. However, it will return an error
             * if `cancellable` has already been cancelled when you call, which
             * may happen if you call this method after a source triggers due
             * to having been cancelled.
             *
             * The behaviour of this method is undefined if
             * g_pollable_input_stream_can_poll() returns %FALSE for `stream`.
             * @param cancellable a #GCancellable, or %NULL
             * @returns the number of bytes read, or -1 on error (including   %G_IO_ERROR_WOULD_BLOCK).
             */
            read_nonblocking(cancellable?: Gio.Cancellable | null): [number, Uint8Array];
            /**
             * Checks if `stream` is actually pollable. Some classes may implement
             * #GPollableInputStream but have only certain instances of that class
             * be pollable. If this method returns %FALSE, then the behavior of
             * other #GPollableInputStream methods is undefined.
             *
             * For any given stream, the value returned by this method is constant;
             * a stream cannot switch from pollable to non-pollable or vice versa.
             */
            vfunc_can_poll(): boolean;
            /**
             * Creates a #GSource that triggers when `stream` can be read, or
             * `cancellable` is triggered or an error occurs. The callback on the
             * source is of the #GPollableSourceFunc type.
             *
             * As with g_pollable_input_stream_is_readable(), it is possible that
             * the stream may not actually be readable even after the source
             * triggers, so you should use g_pollable_input_stream_read_nonblocking()
             * rather than g_input_stream_read() from the callback.
             *
             * The behaviour of this method is undefined if
             * g_pollable_input_stream_can_poll() returns %FALSE for `stream`.
             * @param cancellable a #GCancellable, or %NULL
             */
            vfunc_create_source(cancellable?: Gio.Cancellable | null): GLib.Source;
            /**
             * Checks if `stream` can be read.
             *
             * Note that some stream types may not be able to implement this 100%
             * reliably, and it is possible that a call to g_input_stream_read()
             * after this returns %TRUE would still block. To guarantee
             * non-blocking behavior, you should always use
             * g_pollable_input_stream_read_nonblocking(), which will return a
             * %G_IO_ERROR_WOULD_BLOCK error rather than blocking.
             *
             * The behaviour of this method is undefined if
             * g_pollable_input_stream_can_poll() returns %FALSE for `stream`.
             */
            vfunc_is_readable(): boolean;
            /**
             * Attempts to read up to `count` bytes from `stream` into `buffer,` as
             * with g_input_stream_read(). If `stream` is not currently readable,
             * this will immediately return %G_IO_ERROR_WOULD_BLOCK, and you can
             * use g_pollable_input_stream_create_source() to create a #GSource
             * that will be triggered when `stream` is readable.
             *
             * Note that since this method never blocks, you cannot actually
             * use `cancellable` to cancel it. However, it will return an error
             * if `cancellable` has already been cancelled when you call, which
             * may happen if you call this method after a source triggers due
             * to having been cancelled.
             *
             * The behaviour of this method is undefined if
             * g_pollable_input_stream_can_poll() returns %FALSE for `stream`.
             */
            vfunc_read_nonblocking(): [number, Uint8Array | null];
            /**
             * Clears the pending flag on `stream`.
             */
            clear_pending(): void;
            /**
             * Closes the stream, releasing resources related to it.
             *
             * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
             * Closing a stream multiple times will not return an error.
             *
             * Streams will be automatically closed when the last reference
             * is dropped, but you might want to call this function to make sure
             * resources are released as early as possible.
             *
             * Some streams might keep the backing store of the stream (e.g. a file descriptor)
             * open after the stream is closed. See the documentation for the individual
             * stream for details.
             *
             * On failure the first error that happened will be reported, but the close
             * operation will finish as much as possible. A stream that failed to
             * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
             * is important to check and report the error to the user.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
             * Cancelling a close will still leave the stream closed, but some streams
             * can use a faster close that doesn't block to e.g. check errors.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE on success, %FALSE on failure
             */
            close(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Requests an asynchronous closes of the stream, releasing resources related to it.
             * When the operation is finished `callback` will be called.
             * You can then call g_input_stream_close_finish() to get the result of the
             * operation.
             *
             * For behaviour details see g_input_stream_close().
             *
             * The asynchronous methods have a default fallback that uses threads to implement
             * asynchronicity, so they are optional for inheriting classes. However, if you
             * override one you must override all.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional cancellable object
             */
            close_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Requests an asynchronous closes of the stream, releasing resources related to it.
             * When the operation is finished `callback` will be called.
             * You can then call g_input_stream_close_finish() to get the result of the
             * operation.
             *
             * For behaviour details see g_input_stream_close().
             *
             * The asynchronous methods have a default fallback that uses threads to implement
             * asynchronicity, so they are optional for inheriting classes. However, if you
             * override one you must override all.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional cancellable object
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            close_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Requests an asynchronous closes of the stream, releasing resources related to it.
             * When the operation is finished `callback` will be called.
             * You can then call g_input_stream_close_finish() to get the result of the
             * operation.
             *
             * For behaviour details see g_input_stream_close().
             *
             * The asynchronous methods have a default fallback that uses threads to implement
             * asynchronicity, so they are optional for inheriting classes. However, if you
             * override one you must override all.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional cancellable object
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            close_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes closing a stream asynchronously, started from g_input_stream_close_async().
             * @param result a #GAsyncResult.
             * @returns %TRUE if the stream was closed successfully.
             */
            close_finish(result: Gio.AsyncResult): boolean;
            /**
             * Checks if an input stream has pending actions.
             * @returns %TRUE if @stream has pending actions.
             */
            has_pending(): boolean;
            /**
             * Checks if an input stream is closed.
             * @returns %TRUE if the stream is closed.
             */
            is_closed(): boolean;
            /**
             * Tries to read `count` bytes from the stream into the buffer starting at
             * `buffer`. Will block during this read.
             *
             * If count is zero returns zero and does nothing. A value of `count`
             * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes read into the buffer is returned.
             * It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file. Zero is returned on end of file
             * (or if `count` is zero),  but never otherwise.
             *
             * The returned `buffer` is not a nul-terminated string, it can contain nul bytes
             * at any position, and this function doesn't nul-terminate the `buffer`.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             *
             * On error -1 is returned and `error` is set accordingly.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns Number of bytes read, or -1 on error, or 0 on end of file.
             */
            read(cancellable?: Gio.Cancellable | null): [number, Uint8Array];
            /**
             * Tries to read `count` bytes from the stream into the buffer starting at
             * `buffer`. Will block during this read.
             *
             * This function is similar to g_input_stream_read(), except it tries to
             * read as many bytes as requested, only stopping on an error or end of stream.
             *
             * On a successful read of `count` bytes, or if we reached the end of the
             * stream,  %TRUE is returned, and `bytes_read` is set to the number of bytes
             * read into `buffer`.
             *
             * If there is an error during the operation %FALSE is returned and `error`
             * is set to indicate the error status.
             *
             * As a special exception to the normal conventions for functions that
             * use #GError, if this function returns %FALSE (and sets `error)` then
             * `bytes_read` will be set to the number of bytes that were successfully
             * read before the error was encountered.  This functionality is only
             * available from C.  If you need it from another language then you must
             * write your own loop around g_input_stream_read().
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE on success, %FALSE if there was an error
             */
            read_all(cancellable?: Gio.Cancellable | null): [boolean, Uint8Array, number];
            /**
             * Request an asynchronous read of `count` bytes from the stream into the
             * buffer starting at `buffer`.
             *
             * This is the asynchronous equivalent of g_input_stream_read_all().
             *
             * Call g_input_stream_read_all_finish() to collect the result.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore
             */
            read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null): [Promise<number>, Uint8Array];
            /**
             * Request an asynchronous read of `count` bytes from the stream into the
             * buffer starting at `buffer`.
             *
             * This is the asynchronous equivalent of g_input_stream_read_all().
             *
             * Call g_input_stream_read_all_finish() to collect the result.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            read_all_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): Uint8Array;
            /**
             * Request an asynchronous read of `count` bytes from the stream into the
             * buffer starting at `buffer`.
             *
             * This is the asynchronous equivalent of g_input_stream_read_all().
             *
             * Call g_input_stream_read_all_finish() to collect the result.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            read_all_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): [Promise<number> | void, Uint8Array];
            /**
             * Finishes an asynchronous stream read operation started with
             * g_input_stream_read_all_async().
             *
             * As a special exception to the normal conventions for functions that
             * use #GError, if this function returns %FALSE (and sets `error)` then
             * `bytes_read` will be set to the number of bytes that were successfully
             * read before the error was encountered.  This functionality is only
             * available from C.  If you need it from another language then you must
             * write your own loop around g_input_stream_read_async().
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE if there was an error
             */
            read_all_finish(result: Gio.AsyncResult): [boolean, number];
            /**
             * Request an asynchronous read of `count` bytes from the stream into the buffer
             * starting at `buffer`. When the operation is finished `callback` will be called.
             * You can then call g_input_stream_read_finish() to get the result of the
             * operation.
             *
             * During an async request no other sync and async calls are allowed on `stream,` and will
             * result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes read into the buffer will be passed to the
             * callback. It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file, but generally we try to read
             * as many bytes as requested. Zero is returned on end of file
             * (or if `count` is zero),  but never otherwise.
             *
             * Any outstanding i/o request with higher priority (lower numerical value) will
             * be executed before an outstanding request with lower priority. Default
             * priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads to implement
             * asynchronicity, so they are optional for inheriting classes. However, if you
             * override one you must override all.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            read_async(io_priority: number, cancellable?: Gio.Cancellable | null): [Promise<number>, Uint8Array];
            /**
             * Request an asynchronous read of `count` bytes from the stream into the buffer
             * starting at `buffer`. When the operation is finished `callback` will be called.
             * You can then call g_input_stream_read_finish() to get the result of the
             * operation.
             *
             * During an async request no other sync and async calls are allowed on `stream,` and will
             * result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes read into the buffer will be passed to the
             * callback. It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file, but generally we try to read
             * as many bytes as requested. Zero is returned on end of file
             * (or if `count` is zero),  but never otherwise.
             *
             * Any outstanding i/o request with higher priority (lower numerical value) will
             * be executed before an outstanding request with lower priority. Default
             * priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads to implement
             * asynchronicity, so they are optional for inheriting classes. However, if you
             * override one you must override all.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            read_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): Uint8Array;
            /**
             * Request an asynchronous read of `count` bytes from the stream into the buffer
             * starting at `buffer`. When the operation is finished `callback` will be called.
             * You can then call g_input_stream_read_finish() to get the result of the
             * operation.
             *
             * During an async request no other sync and async calls are allowed on `stream,` and will
             * result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes read into the buffer will be passed to the
             * callback. It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file, but generally we try to read
             * as many bytes as requested. Zero is returned on end of file
             * (or if `count` is zero),  but never otherwise.
             *
             * Any outstanding i/o request with higher priority (lower numerical value) will
             * be executed before an outstanding request with lower priority. Default
             * priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads to implement
             * asynchronicity, so they are optional for inheriting classes. However, if you
             * override one you must override all.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            read_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): [Promise<number> | void, Uint8Array];
            /**
             * Like g_input_stream_read(), this tries to read `count` bytes from
             * the stream in a blocking fashion. However, rather than reading into
             * a user-supplied buffer, this will create a new #GBytes containing
             * the data that was read. This may be easier to use from language
             * bindings.
             *
             * If count is zero, returns a zero-length #GBytes and does nothing. A
             * value of `count` larger than %G_MAXSSIZE will cause a
             * %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, a new #GBytes is returned. It is not an error if the
             * size of this object is not the same as the requested size, as it
             * can happen e.g. near the end of a file. A zero-length #GBytes is
             * returned on end of file (or if `count` is zero), but never
             * otherwise.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             *
             * On error %NULL is returned and `error` is set accordingly.
             * @param count maximum number of bytes that will be read from the stream. Common values include 4096 and 8192.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns a new #GBytes, or %NULL on error
             */
            read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes;
            /**
             * Request an asynchronous read of `count` bytes from the stream into a
             * new #GBytes. When the operation is finished `callback` will be
             * called. You can then call g_input_stream_read_bytes_finish() to get the
             * result of the operation.
             *
             * During an async request no other sync and async calls are allowed
             * on `stream,` and will result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a
             * %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the new #GBytes will be passed to the callback. It is
             * not an error if this is smaller than the requested size, as it can
             * happen e.g. near the end of a file, but generally we try to read as
             * many bytes as requested. Zero is returned on end of file (or if
             * `count` is zero), but never otherwise.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             * @param count the number of bytes that will be read from the stream
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            read_bytes_async(
                count: number,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<GLib.Bytes>;
            /**
             * Request an asynchronous read of `count` bytes from the stream into a
             * new #GBytes. When the operation is finished `callback` will be
             * called. You can then call g_input_stream_read_bytes_finish() to get the
             * result of the operation.
             *
             * During an async request no other sync and async calls are allowed
             * on `stream,` and will result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a
             * %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the new #GBytes will be passed to the callback. It is
             * not an error if this is smaller than the requested size, as it can
             * happen e.g. near the end of a file, but generally we try to read as
             * many bytes as requested. Zero is returned on end of file (or if
             * `count` is zero), but never otherwise.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             * @param count the number of bytes that will be read from the stream
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            read_bytes_async(
                count: number,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Request an asynchronous read of `count` bytes from the stream into a
             * new #GBytes. When the operation is finished `callback` will be
             * called. You can then call g_input_stream_read_bytes_finish() to get the
             * result of the operation.
             *
             * During an async request no other sync and async calls are allowed
             * on `stream,` and will result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a
             * %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the new #GBytes will be passed to the callback. It is
             * not an error if this is smaller than the requested size, as it can
             * happen e.g. near the end of a file, but generally we try to read as
             * many bytes as requested. Zero is returned on end of file (or if
             * `count` is zero), but never otherwise.
             *
             * Any outstanding I/O request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is %G_PRIORITY_DEFAULT.
             * @param count the number of bytes that will be read from the stream
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            read_bytes_async(
                count: number,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<GLib.Bytes> | void;
            /**
             * Finishes an asynchronous stream read-into-#GBytes operation.
             * @param result a #GAsyncResult.
             * @returns the newly-allocated #GBytes, or %NULL on error
             */
            read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes;
            /**
             * Finishes an asynchronous stream read operation.
             * @param result a #GAsyncResult.
             * @returns number of bytes read in, or -1 on error, or 0 on end of file.
             */
            read_finish(result: Gio.AsyncResult): number;
            /**
             * Sets `stream` to have actions pending. If the pending flag is
             * already set or `stream` is closed, it will return %FALSE and set
             * `error`.
             * @returns %TRUE if pending was previously unset and is now set.
             */
            set_pending(): boolean;
            /**
             * Tries to skip `count` bytes from the stream. Will block during the operation.
             *
             * This is identical to g_input_stream_read(), from a behaviour standpoint,
             * but the bytes that are skipped are not returned to the user. Some
             * streams have an implementation that is more efficient than reading the data.
             *
             * This function is optional for inherited classes, as the default implementation
             * emulates it using read.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             * @param count the number of bytes that will be skipped from the stream
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns Number of bytes skipped, or -1 on error
             */
            skip(count: number, cancellable?: Gio.Cancellable | null): number;
            /**
             * Request an asynchronous skip of `count` bytes from the stream.
             * When the operation is finished `callback` will be called.
             * You can then call g_input_stream_skip_finish() to get the result
             * of the operation.
             *
             * During an async request no other sync and async calls are allowed,
             * and will result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes skipped will be passed to the callback.
             * It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file, but generally we try to skip
             * as many bytes as requested. Zero is returned on end of file
             * (or if `count` is zero), but never otherwise.
             *
             * Any outstanding i/o request with higher priority (lower numerical value)
             * will be executed before an outstanding request with lower priority.
             * Default priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads to
             * implement asynchronicity, so they are optional for inheriting classes.
             * However, if you override one, you must override all.
             * @param count the number of bytes that will be skipped from the stream
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null): Promise<number>;
            /**
             * Request an asynchronous skip of `count` bytes from the stream.
             * When the operation is finished `callback` will be called.
             * You can then call g_input_stream_skip_finish() to get the result
             * of the operation.
             *
             * During an async request no other sync and async calls are allowed,
             * and will result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes skipped will be passed to the callback.
             * It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file, but generally we try to skip
             * as many bytes as requested. Zero is returned on end of file
             * (or if `count` is zero), but never otherwise.
             *
             * Any outstanding i/o request with higher priority (lower numerical value)
             * will be executed before an outstanding request with lower priority.
             * Default priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads to
             * implement asynchronicity, so they are optional for inheriting classes.
             * However, if you override one, you must override all.
             * @param count the number of bytes that will be skipped from the stream
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            skip_async(
                count: number,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Request an asynchronous skip of `count` bytes from the stream.
             * When the operation is finished `callback` will be called.
             * You can then call g_input_stream_skip_finish() to get the result
             * of the operation.
             *
             * During an async request no other sync and async calls are allowed,
             * and will result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes skipped will be passed to the callback.
             * It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file, but generally we try to skip
             * as many bytes as requested. Zero is returned on end of file
             * (or if `count` is zero), but never otherwise.
             *
             * Any outstanding i/o request with higher priority (lower numerical value)
             * will be executed before an outstanding request with lower priority.
             * Default priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads to
             * implement asynchronicity, so they are optional for inheriting classes.
             * However, if you override one, you must override all.
             * @param count the number of bytes that will be skipped from the stream
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            skip_async(
                count: number,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<number> | void;
            /**
             * Finishes a stream skip operation.
             * @param result a #GAsyncResult.
             * @returns the size of the bytes skipped, or `-1` on error.
             */
            skip_finish(result: Gio.AsyncResult): number;
            /**
             * Requests an asynchronous closes of the stream, releasing resources related to it.
             * When the operation is finished `callback` will be called.
             * You can then call g_input_stream_close_finish() to get the result of the
             * operation.
             *
             * For behaviour details see g_input_stream_close().
             *
             * The asynchronous methods have a default fallback that uses threads to implement
             * asynchronicity, so they are optional for inheriting classes. However, if you
             * override one you must override all.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional cancellable object
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_close_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes closing a stream asynchronously, started from g_input_stream_close_async().
             * @param result a #GAsyncResult.
             */
            vfunc_close_finish(result: Gio.AsyncResult): boolean;
            vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Request an asynchronous read of `count` bytes from the stream into the buffer
             * starting at `buffer`. When the operation is finished `callback` will be called.
             * You can then call g_input_stream_read_finish() to get the result of the
             * operation.
             *
             * During an async request no other sync and async calls are allowed on `stream,` and will
             * result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes read into the buffer will be passed to the
             * callback. It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file, but generally we try to read
             * as many bytes as requested. Zero is returned on end of file
             * (or if `count` is zero),  but never otherwise.
             *
             * Any outstanding i/o request with higher priority (lower numerical value) will
             * be executed before an outstanding request with lower priority. Default
             * priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads to implement
             * asynchronicity, so they are optional for inheriting classes. However, if you
             * override one you must override all.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_read_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Uint8Array | null;
            /**
             * Finishes an asynchronous stream read operation.
             * @param result a #GAsyncResult.
             */
            vfunc_read_finish(result: Gio.AsyncResult): number;
            vfunc_read_fn(buffer: any | null, count: number, cancellable?: Gio.Cancellable | null): number;
            /**
             * Tries to skip `count` bytes from the stream. Will block during the operation.
             *
             * This is identical to g_input_stream_read(), from a behaviour standpoint,
             * but the bytes that are skipped are not returned to the user. Some
             * streams have an implementation that is more efficient than reading the data.
             *
             * This function is optional for inherited classes, as the default implementation
             * emulates it using read.
             *
             * If `cancellable` is not %NULL, then the operation can be cancelled by
             * triggering the cancellable object from another thread. If the operation
             * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
             * operation was partially finished when the operation was cancelled the
             * partial result will be returned, without an error.
             * @param count the number of bytes that will be skipped from the stream
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number;
            /**
             * Request an asynchronous skip of `count` bytes from the stream.
             * When the operation is finished `callback` will be called.
             * You can then call g_input_stream_skip_finish() to get the result
             * of the operation.
             *
             * During an async request no other sync and async calls are allowed,
             * and will result in %G_IO_ERROR_PENDING errors.
             *
             * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
             *
             * On success, the number of bytes skipped will be passed to the callback.
             * It is not an error if this is not the same as the requested size, as it
             * can happen e.g. near the end of a file, but generally we try to skip
             * as many bytes as requested. Zero is returned on end of file
             * (or if `count` is zero), but never otherwise.
             *
             * Any outstanding i/o request with higher priority (lower numerical value)
             * will be executed before an outstanding request with lower priority.
             * Default priority is %G_PRIORITY_DEFAULT.
             *
             * The asynchronous methods have a default fallback that uses threads to
             * implement asynchronicity, so they are optional for inheriting classes.
             * However, if you override one, you must override all.
             * @param count the number of bytes that will be skipped from the stream
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the request
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
             */
            vfunc_skip_async(
                count: number,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a stream skip operation.
             * @param result a #GAsyncResult.
             */
            vfunc_skip_finish(result: Gio.AsyncResult): number;
            /**
             * Creates an asynchronous iterator for a Gio.InputStream that reads the stream in chunks.
             *
             * Each iteration will return a GLib.Bytes object containing at most `count` bytes (default 4096). The iterator will end when the stream is exhausted.
             *
             * Example:
             * ```js
             * import Gio from "gi://Gio";
             *
             * const textDecoder = new TextDecoder("utf-8");
             *
             * const file = Gio.File.new_for_path("/etc/os-release");
             * const inputStream = file.read(null);
             *
             * for await (const bytes of inputStream.createAsyncIterator(4)) {
             *   log(textDecoder.decode(bytes.toArray()));
             * }
             * ```
             *
             * `returns` An async iterator yielding GLib.Bytes objects
             * @param count Maximum number of bytes to read per chunk (default: 4096)
             * @param priority I/O priority of the request (default: GLib.PRIORITY_DEFAULT)
             */
            createAsyncIterator(count?: number, priority?: number): AsyncIterableIterator<GLib.Bytes>;
            /**
             * Creates a synchronous iterator for a Gio.InputStream that reads the stream in chunks.
             *
             * Each iteration will return a GLib.Bytes object containing at most `count` bytes (default 4096). The iterator will end when the stream is exhausted.
             *
             * Example:
             * ```js
             * import Gio from "gi://Gio";
             *
             * const textDecoder = new TextDecoder("utf-8");
             *
             * const file = Gio.File.new_for_path("/etc/os-release");
             * const inputStream = file.read(null);
             *
             * for (const bytes of inputStream.createSyncIterator(4)) {
             *   log(textDecoder.decode(bytes.toArray()));
             * }
             * ```
             *
             * `returns` An iterable yielding GLib.Bytes objects
             * @param count Maximum number of bytes to read per chunk (default: 4096)
             * @param priority I/O priority of the request (default: GLib.PRIORITY_DEFAULT)
             */
            createSyncIterator(count?: number, priority?: number): IterableIterator<GLib.Bytes>;
        }

        module ProxyResolverDefault {
            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    ProxyURIResolver.ConstructorProps,
                    SessionFeature.ConstructorProps {
                gproxy_resolver: Gio.ProxyResolver;
                gproxyResolver: Gio.ProxyResolver;
            }
        }

        class ProxyResolverDefault extends GObject.Object implements ProxyURIResolver, SessionFeature {
            static $gtype: GObject.GType<ProxyResolverDefault>;

            // Properties

            set gproxy_resolver(val: Gio.ProxyResolver);
            set gproxyResolver(val: Gio.ProxyResolver);

            // Constructors

            constructor(properties?: Partial<ProxyResolverDefault.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Inherited methods
            /**
             * Asynchronously determines a proxy URI to use for `msg` and calls
             * `callback`.
             * @param uri the #SoupURI you want a proxy for
             * @param async_context the #GMainContext to invoke @callback in
             * @param cancellable a #GCancellable, or %NULL
             * @param callback callback to invoke with the proxy address
             */
            get_proxy_uri_async(
                uri: URI,
                async_context: GLib.MainContext | null,
                cancellable: Gio.Cancellable | null,
                callback: ProxyURIResolverCallback,
            ): void;
            /**
             * Synchronously determines a proxy URI to use for `uri`. If `uri`
             * should be sent via proxy, *`proxy_uri` will be set to the URI of the
             * proxy, else it will be set to %NULL.
             * @param uri the #SoupURI you want a proxy for
             * @param cancellable a #GCancellable, or %NULL
             * @returns %SOUP_STATUS_OK if successful, or a transport-level error.
             */
            get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [number, URI];
            /**
             * Asynchronously determines a proxy URI to use for `msg` and calls
             * `callback`.
             * @param uri the #SoupURI you want a proxy for
             * @param async_context the #GMainContext to invoke @callback in
             * @param cancellable a #GCancellable, or %NULL
             * @param callback callback to invoke with the proxy address
             */
            vfunc_get_proxy_uri_async(
                uri: URI,
                async_context: GLib.MainContext | null,
                cancellable: Gio.Cancellable | null,
                callback: ProxyURIResolverCallback,
            ): void;
            /**
             * Synchronously determines a proxy URI to use for `uri`. If `uri`
             * should be sent via proxy, *`proxy_uri` will be set to the URI of the
             * proxy, else it will be set to %NULL.
             * @param uri the #SoupURI you want a proxy for
             * @param cancellable a #GCancellable, or %NULL
             */
            vfunc_get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [number, URI];
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            attach(session: Session): void;
            detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
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

        module Request {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                session: Session;
                uri: URI;
            }
        }

        /**
         * A request to retrieve a particular URI.
         */
        class Request extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<Request>;

            // Properties

            /**
             * The request's #SoupSession.
             */
            get session(): Session;
            /**
             * The request URI.
             */
            get uri(): URI;

            // Constructors

            constructor(properties?: Partial<Request.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            vfunc_check_uri(uri: URI): boolean;
            /**
             * Gets the length of the data represented by `request`. For most
             * request types, this will not be known until after you call
             * soup_request_send() or soup_request_send_finish().
             */
            vfunc_get_content_length(): number;
            /**
             * Gets the type of the data represented by `request`. For most request
             * types, this will not be known until after you call
             * soup_request_send() or soup_request_send_finish().
             *
             * As in the HTTP Content-Type header, this may include parameters
             * after the MIME type.
             */
            vfunc_get_content_type(): string | null;
            /**
             * Synchronously requests the URI pointed to by `request,` and returns
             * a #GInputStream that can be used to read its contents.
             *
             * Note that you cannot use this method with #SoupRequests attached to
             * a #SoupSessionAsync.
             * @param cancellable a #GCancellable or %NULL
             */
            vfunc_send(cancellable?: Gio.Cancellable | null): Gio.InputStream;
            /**
             * Begins an asynchronously request for the URI pointed to by
             * `request`.
             *
             * Note that you cannot use this method with #SoupRequests attached to
             * a #SoupSessionSync.
             * @param cancellable a #GCancellable or %NULL
             * @param callback a #GAsyncReadyCallback
             */
            vfunc_send_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Gets the result of a soup_request_send_async().
             * @param result the #GAsyncResult
             */
            vfunc_send_finish(result: Gio.AsyncResult): Gio.InputStream;

            // Methods

            /**
             * Gets the length of the data represented by `request`. For most
             * request types, this will not be known until after you call
             * soup_request_send() or soup_request_send_finish().
             * @returns the length of the data represented by @request,   or -1 if not known.
             */
            get_content_length(): number;
            /**
             * Gets the type of the data represented by `request`. For most request
             * types, this will not be known until after you call
             * soup_request_send() or soup_request_send_finish().
             *
             * As in the HTTP Content-Type header, this may include parameters
             * after the MIME type.
             * @returns the type of the data represented by   @request, or %NULL if not known.
             */
            get_content_type(): string | null;
            /**
             * Gets `request'`s #SoupSession
             * @returns @request's #SoupSession
             */
            get_session(): Session;
            /**
             * Gets `request'`s URI
             * @returns @request's URI
             */
            get_uri(): URI;
            /**
             * Synchronously requests the URI pointed to by `request,` and returns
             * a #GInputStream that can be used to read its contents.
             *
             * Note that you cannot use this method with #SoupRequests attached to
             * a #SoupSessionAsync.
             * @param cancellable a #GCancellable or %NULL
             * @returns a #GInputStream that can be used to   read from the URI pointed to by @request.
             */
            send(cancellable?: Gio.Cancellable | null): Gio.InputStream;
            /**
             * Begins an asynchronously request for the URI pointed to by
             * `request`.
             *
             * Note that you cannot use this method with #SoupRequests attached to
             * a #SoupSessionSync.
             * @param cancellable a #GCancellable or %NULL
             */
            send_async(cancellable?: Gio.Cancellable | null): Promise<Gio.InputStream>;
            /**
             * Begins an asynchronously request for the URI pointed to by
             * `request`.
             *
             * Note that you cannot use this method with #SoupRequests attached to
             * a #SoupSessionSync.
             * @param cancellable a #GCancellable or %NULL
             * @param callback a #GAsyncReadyCallback
             */
            send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Begins an asynchronously request for the URI pointed to by
             * `request`.
             *
             * Note that you cannot use this method with #SoupRequests attached to
             * a #SoupSessionSync.
             * @param cancellable a #GCancellable or %NULL
             * @param callback a #GAsyncReadyCallback
             */
            send_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.InputStream> | void;
            /**
             * Gets the result of a soup_request_send_async().
             * @param result the #GAsyncResult
             * @returns a #GInputStream that can be used to   read from the URI pointed to by @request.
             */
            send_finish(result: Gio.AsyncResult): Gio.InputStream;

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

        module RequestData {
            // Constructor properties interface

            interface ConstructorProps extends Request.ConstructorProps, Gio.Initable.ConstructorProps {}
        }

        class RequestData extends Request implements Gio.Initable {
            static $gtype: GObject.GType<RequestData>;

            // Constructors

            constructor(properties?: Partial<RequestData.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

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

        module RequestFile {
            // Constructor properties interface

            interface ConstructorProps extends Request.ConstructorProps, Gio.Initable.ConstructorProps {}
        }

        class RequestFile extends Request implements Gio.Initable {
            static $gtype: GObject.GType<RequestFile>;

            // Constructors

            constructor(properties?: Partial<RequestFile.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets a #GFile corresponding to `file'`s URI
             * @returns a #GFile corresponding to @file
             */
            get_file(): Gio.File;

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

        module RequestHTTP {
            // Constructor properties interface

            interface ConstructorProps extends Request.ConstructorProps, Gio.Initable.ConstructorProps {}
        }

        class RequestHTTP extends Request implements Gio.Initable {
            static $gtype: GObject.GType<RequestHTTP>;

            // Constructors

            constructor(properties?: Partial<RequestHTTP.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets a new reference to the #SoupMessage associated to this SoupRequest
             * @returns a new reference to the #SoupMessage
             */
            get_message(): Message;

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

        module Requester {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {}
        }

        class Requester extends GObject.Object implements SessionFeature {
            static $gtype: GObject.GType<Requester>;

            // Constructors

            constructor(properties?: Partial<Requester.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Requester;

            // Methods

            request(uri_string: string): Request;
            request_uri(uri: URI): Request;

            // Inherited methods
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            attach(session: Session): void;
            detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
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

        module Server {
            // Signal callback interfaces

            interface RequestAborted {
                (message: Message, client: ClientContext): void;
            }

            interface RequestFinished {
                (message: Message, client: ClientContext): void;
            }

            interface RequestRead {
                (message: Message, client: ClientContext): void;
            }

            interface RequestStarted {
                (message: Message, client: ClientContext): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                async_context: any;
                asyncContext: any;
                http_aliases: string[];
                httpAliases: string[];
                https_aliases: string[];
                httpsAliases: string[];
                interface: Address;
                port: number;
                raw_paths: boolean;
                rawPaths: boolean;
                server_header: string;
                serverHeader: string;
                ssl_cert_file: string;
                sslCertFile: string;
                ssl_key_file: string;
                sslKeyFile: string;
                tls_certificate: Gio.TlsCertificate;
                tlsCertificate: Gio.TlsCertificate;
            }
        }

        class Server extends GObject.Object {
            static $gtype: GObject.GType<Server>;

            // Properties

            /**
             * The server's #GMainContext, if you are using the old API.
             * Servers created using soup_server_listen() will listen on
             * the #GMainContext that was the thread-default context at
             * the time soup_server_listen() was called.
             */
            get async_context(): any;
            /**
             * The server's #GMainContext, if you are using the old API.
             * Servers created using soup_server_listen() will listen on
             * the #GMainContext that was the thread-default context at
             * the time soup_server_listen() was called.
             */
            get asyncContext(): any;
            /**
             * A %NULL-terminated array of URI schemes that should be
             * considered to be aliases for "http". Eg, if this included
             * <literal>"dav"</literal>, than a URI of
             * <literal>dav://example.com/path</literal> would be treated
             * identically to <literal>http://example.com/path</literal>.
             * In particular, this is needed in cases where a client
             * sends requests with absolute URIs, where those URIs do
             * not use "http:".
             *
             * The default value is an array containing the single element
             * <literal>"*"</literal>, a special value which means that
             * any scheme except "https" is considered to be an alias for
             * "http".
             *
             * See also #SoupServer:https-aliases.
             */
            get http_aliases(): string[];
            set http_aliases(val: string[]);
            /**
             * A %NULL-terminated array of URI schemes that should be
             * considered to be aliases for "http". Eg, if this included
             * <literal>"dav"</literal>, than a URI of
             * <literal>dav://example.com/path</literal> would be treated
             * identically to <literal>http://example.com/path</literal>.
             * In particular, this is needed in cases where a client
             * sends requests with absolute URIs, where those URIs do
             * not use "http:".
             *
             * The default value is an array containing the single element
             * <literal>"*"</literal>, a special value which means that
             * any scheme except "https" is considered to be an alias for
             * "http".
             *
             * See also #SoupServer:https-aliases.
             */
            get httpAliases(): string[];
            set httpAliases(val: string[]);
            /**
             * A comma-delimited list of URI schemes that should be
             * considered to be aliases for "https". See
             * #SoupServer:http-aliases for more information.
             *
             * The default value is %NULL, meaning that no URI schemes
             * are considered aliases for "https".
             */
            get https_aliases(): string[];
            set https_aliases(val: string[]);
            /**
             * A comma-delimited list of URI schemes that should be
             * considered to be aliases for "https". See
             * #SoupServer:http-aliases for more information.
             *
             * The default value is %NULL, meaning that no URI schemes
             * are considered aliases for "https".
             */
            get httpsAliases(): string[];
            set httpsAliases(val: string[]);
            /**
             * The address of the network interface the server is
             * listening on, if you are using the old #SoupServer API.
             * (This will not be set if you use soup_server_listen(),
             * etc.)
             */
            get interface(): Address;
            /**
             * The port the server is listening on, if you are using the
             * old #SoupServer API. (This will not be set if you use
             * soup_server_listen(), etc.)
             */
            get port(): number;
            get raw_paths(): boolean;
            get rawPaths(): boolean;
            /**
             * If non-%NULL, the value to use for the "Server" header on
             * #SoupMessage<!-- -->s processed by this server.
             *
             * The Server header is the server equivalent of the
             * User-Agent header, and provides information about the
             * server and its components. It contains a list of one or
             * more product tokens, separated by whitespace, with the most
             * significant product token coming first. The tokens must be
             * brief, ASCII, and mostly alphanumeric (although "-", "_",
             * and "." are also allowed), and may optionally include a "/"
             * followed by a version string. You may also put comments,
             * enclosed in parentheses, between or after the tokens.
             *
             * Some HTTP server implementations intentionally do not use
             * version numbers in their Server header, so that
             * installations running older versions of the server don't
             * end up advertising their vulnerability to specific security
             * holes.
             *
             * As with #SoupSession:user_agent, if you set a
             * #SoupServer:server_header property that has trailing whitespace,
             * #SoupServer will append its own product token (eg,
             * "<literal>libsoup/2.3.2</literal>") to the end of the
             * header for you.
             */
            get server_header(): string;
            set server_header(val: string);
            /**
             * If non-%NULL, the value to use for the "Server" header on
             * #SoupMessage<!-- -->s processed by this server.
             *
             * The Server header is the server equivalent of the
             * User-Agent header, and provides information about the
             * server and its components. It contains a list of one or
             * more product tokens, separated by whitespace, with the most
             * significant product token coming first. The tokens must be
             * brief, ASCII, and mostly alphanumeric (although "-", "_",
             * and "." are also allowed), and may optionally include a "/"
             * followed by a version string. You may also put comments,
             * enclosed in parentheses, between or after the tokens.
             *
             * Some HTTP server implementations intentionally do not use
             * version numbers in their Server header, so that
             * installations running older versions of the server don't
             * end up advertising their vulnerability to specific security
             * holes.
             *
             * As with #SoupSession:user_agent, if you set a
             * #SoupServer:server_header property that has trailing whitespace,
             * #SoupServer will append its own product token (eg,
             * "<literal>libsoup/2.3.2</literal>") to the end of the
             * header for you.
             */
            get serverHeader(): string;
            set serverHeader(val: string);
            /**
             * Path to a file containing a PEM-encoded certificate.
             *
             * If you set this property and #SoupServer:ssl-key-file at
             * construct time, then soup_server_new() will try to read the
             * files; if it cannot, it will return %NULL, with no explicit
             * indication of what went wrong (and logging a warning with
             * newer versions of glib, since returning %NULL from a
             * constructor is illegal).
             */
            get ssl_cert_file(): string;
            /**
             * Path to a file containing a PEM-encoded certificate.
             *
             * If you set this property and #SoupServer:ssl-key-file at
             * construct time, then soup_server_new() will try to read the
             * files; if it cannot, it will return %NULL, with no explicit
             * indication of what went wrong (and logging a warning with
             * newer versions of glib, since returning %NULL from a
             * constructor is illegal).
             */
            get sslCertFile(): string;
            /**
             * Path to a file containing a PEM-encoded private key. See
             * #SoupServer:ssl-cert-file for more information about how this
             * is used.
             */
            get ssl_key_file(): string;
            /**
             * Path to a file containing a PEM-encoded private key. See
             * #SoupServer:ssl-cert-file for more information about how this
             * is used.
             */
            get sslKeyFile(): string;
            /**
             * A #GTlsCertificate that has a #GTlsCertificate:private-key
             * set. If this is set, then the server will be able to speak
             * https in addition to (or instead of) plain http.
             *
             * Alternatively, you can call soup_server_set_ssl_cert_file()
             * to have #SoupServer read in a a certificate from a file.
             */
            get tls_certificate(): Gio.TlsCertificate;
            /**
             * A #GTlsCertificate that has a #GTlsCertificate:private-key
             * set. If this is set, then the server will be able to speak
             * https in addition to (or instead of) plain http.
             *
             * Alternatively, you can call soup_server_set_ssl_cert_file()
             * to have #SoupServer read in a a certificate from a file.
             */
            get tlsCertificate(): Gio.TlsCertificate;

            // Constructors

            constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'request-aborted',
                callback: (_source: this, message: Message, client: ClientContext) => void,
            ): number;
            connect_after(
                signal: 'request-aborted',
                callback: (_source: this, message: Message, client: ClientContext) => void,
            ): number;
            emit(signal: 'request-aborted', message: Message, client: ClientContext): void;
            connect(
                signal: 'request-finished',
                callback: (_source: this, message: Message, client: ClientContext) => void,
            ): number;
            connect_after(
                signal: 'request-finished',
                callback: (_source: this, message: Message, client: ClientContext) => void,
            ): number;
            emit(signal: 'request-finished', message: Message, client: ClientContext): void;
            connect(
                signal: 'request-read',
                callback: (_source: this, message: Message, client: ClientContext) => void,
            ): number;
            connect_after(
                signal: 'request-read',
                callback: (_source: this, message: Message, client: ClientContext) => void,
            ): number;
            emit(signal: 'request-read', message: Message, client: ClientContext): void;
            connect(
                signal: 'request-started',
                callback: (_source: this, message: Message, client: ClientContext) => void,
            ): number;
            connect_after(
                signal: 'request-started',
                callback: (_source: this, message: Message, client: ClientContext) => void,
            ): number;
            emit(signal: 'request-started', message: Message, client: ClientContext): void;

            // Virtual methods

            vfunc_request_aborted(msg: Message, client: ClientContext): void;
            vfunc_request_finished(msg: Message, client: ClientContext): void;
            vfunc_request_read(msg: Message, client: ClientContext): void;
            vfunc_request_started(msg: Message, client: ClientContext): void;

            // Methods

            /**
             * Add a new client stream to the `server`.
             * @param stream a #GIOStream
             * @param local_addr the local #GSocketAddress associated with the @stream
             * @param remote_addr the remote #GSocketAddress associated with the @stream
             * @returns %TRUE on success, %FALSE if the stream could not be accepted or any other error occurred (in which case @error will be set).
             */
            accept_iostream(
                stream: Gio.IOStream,
                local_addr?: Gio.SocketAddress | null,
                remote_addr?: Gio.SocketAddress | null,
            ): boolean;
            /**
             * Adds an authentication domain to `server`. Each auth domain will
             * have the chance to require authentication for each request that
             * comes in; normally auth domains will require authentication for
             * requests on certain paths that they have been set up to watch, or
             * that meet other criteria set by the caller. If an auth domain
             * determines that a request requires authentication (and the request
             * doesn't contain authentication), `server` will automatically reject
             * the request with an appropriate status (401 Unauthorized or 407
             * Proxy Authentication Required). If the request used the
             * "100-continue" Expectation, `server` will reject it before the
             * request body is sent.
             * @param auth_domain a #SoupAuthDomain
             */
            add_auth_domain(auth_domain: AuthDomain): void;
            /**
             * Adds an "early" handler to `server` for requests under `path`. Note
             * that "normal" and "early" handlers are matched up together, so if
             * you add a normal handler for "/foo" and an early handler for
             * "/foo/bar", then a request to "/foo/bar" (or any path below it)
             * will run only the early handler. (But if you add both handlers at
             * the same path, then both will get run.)
             *
             * For requests under `path` (that have not already been assigned a
             * status code by a #SoupAuthDomain or a signal handler), `callback`
             * will be invoked after receiving the request headers, but before
             * receiving the request body; the message's #SoupMessage:method and
             * #SoupMessage:request-headers fields will be filled in.
             *
             * Early handlers are generally used for processing requests with
             * request bodies in a streaming fashion. If you determine that the
             * request will contain a message body, normally you would call
             * soup_message_body_set_accumulate() on the message's
             * #SoupMessage:request-body to turn off request-body accumulation,
             * and connect to the message's #SoupMessage::got-chunk signal to
             * process each chunk as it comes in.
             *
             * To complete the message processing after the full message body has
             * been read, you can either also connect to #SoupMessage::got-body,
             * or else you can register a non-early handler for `path` as well. As
             * long as you have not set the #SoupMessage:status-code by the time
             * #SoupMessage::got-body is emitted, the non-early handler will be
             * run as well.
             * @param path the toplevel path for the handler
             * @param callback callback to invoke for requests under @path
             */
            add_early_handler(path: string | null, callback: ServerCallback): void;
            /**
             * Adds a handler to `server` for requests under `path`. If `path` is
             * %NULL or "/", then this will be the default handler for all
             * requests that don't have a more specific handler. (Note though that
             * if you want to handle requests to the special "*" URI, you must
             * explicitly register a handler for "*"; the default handler will not
             * be used for that case.)
             *
             * For requests under `path` (that have not already been assigned a
             * status code by a #SoupAuthDomain, an early #SoupServerHandler, or a
             * signal handler), `callback` will be invoked after receiving the
             * request body; the message's #SoupMessage:method,
             * #SoupMessage:request-headers, and #SoupMessage:request-body fields
             * will be filled in.
             *
             * After determining what to do with the request, the callback must at
             * a minimum call soup_message_set_status() (or
             * soup_message_set_status_full()) on the message to set the response
             * status code. Additionally, it may set response headers and/or fill
             * in the response body.
             *
             * If the callback cannot fully fill in the response before returning
             * (eg, if it needs to wait for information from a database, or
             * another network server), it should call soup_server_pause_message()
             * to tell `server` to not send the response right away. When the
             * response is ready, call soup_server_unpause_message() to cause it
             * to be sent.
             *
             * To send the response body a bit at a time using "chunked" encoding,
             * first call soup_message_headers_set_encoding() to set
             * %SOUP_ENCODING_CHUNKED on the #SoupMessage:response-headers. Then call
             * soup_message_body_append() (or soup_message_body_append_buffer())
             * to append each chunk as it becomes ready, and
             * soup_server_unpause_message() to make sure it's running. (The
             * server will automatically pause the message if it is using chunked
             * encoding but no more chunks are available.) When you are done, call
             * soup_message_body_complete() to indicate that no more chunks are
             * coming.
             * @param path the toplevel path for the handler
             * @param callback callback to invoke for requests under @path
             */
            add_handler(path: string | null, callback: ServerCallback): void;
            /**
             * Adds a WebSocket handler to `server` for requests under `path`. (If
             * `path` is %NULL or "/", then this will be the default handler for
             * all requests that don't have a more specific handler.)
             *
             * When a path has a WebSocket handler registered, `server` will check
             * incoming requests for WebSocket handshakes after all other handlers
             * have run (unless some earlier handler has already set a status code
             * on the message), and update the request's status, response headers,
             * and response body accordingly.
             *
             * If `origin` is non-%NULL, then only requests containing a matching
             * "Origin" header will be accepted. If `protocols` is non-%NULL, then
             * only requests containing a compatible "Sec-WebSocket-Protocols"
             * header will be accepted. More complicated requirements can be
             * handled by adding a normal handler to `path,` and having it perform
             * whatever checks are needed (possibly calling
             * soup_server_check_websocket_handshake() one or more times), and
             * setting a failure status code if the handshake should be rejected.
             * @param path the toplevel path for the handler
             * @param origin the origin of the connection
             * @param protocols the protocols   supported by this handler
             * @param callback callback to invoke for successful WebSocket requests under @path
             */
            add_websocket_handler(
                path: string | null,
                origin: string | null,
                protocols: string[] | null,
                callback: ServerWebsocketCallback,
            ): void;
            /**
             * Closes and frees `server'`s listening sockets. If you are using the
             * old #SoupServer APIs, this also includes the effect of
             * soup_server_quit().
             *
             * Note that if there are currently requests in progress on `server,`
             * that they will continue to be processed if `server'`s #GMainContext
             * is still running.
             *
             * You can call soup_server_listen(), etc, after calling this function
             * if you want to start listening again.
             */
            disconnect(): void;
            /**
             * Gets `server'`s async_context, if you are using the old API. (With
             * the new API, the server runs in the thread's thread-default
             * #GMainContext, regardless of what this method returns.)
             *
             * This does not add a ref to the context, so you will need to ref it
             * yourself if you want it to outlive its server.
             * @returns @server's #GMainContext, which may be %NULL
             */
            get_async_context(): GLib.MainContext | null;
            /**
             * Gets `server'`s listening socket, if you are using the old API.
             *
             * You should treat this socket as read-only; writing to it or
             * modifiying it may cause `server` to malfunction.
             * @returns the listening socket.
             */
            get_listener(): Socket;
            /**
             * Gets `server'`s list of listening sockets.
             *
             * You should treat these sockets as read-only; writing to or
             * modifiying any of these sockets may cause `server` to malfunction.
             *
             * (Beware that in contrast to the old soup_server_get_listener(), this
             * function returns #GSockets, not #SoupSockets.)
             * @returns a list of listening sockets.
             */
            get_listeners(): Gio.Socket[];
            /**
             * Gets the TCP port that `server` is listening on, if you are using
             * the old API.
             * @returns the port @server is listening on.
             */
            get_port(): number;
            /**
             * Gets a list of URIs corresponding to the interfaces `server` is
             * listening on. These will contain IP addresses, not hostnames, and
             * will also indicate whether the given listener is http or https.
             *
             * Note that if you used soup_server_listen_all(), the returned URIs
             * will use the addresses <literal>0.0.0.0</literal> and
             * <literal>::</literal>, rather than actually returning separate URIs
             * for each interface on the system.
             * @returns a list of #SoupURIs, which you must free when you are done with it.
             */
            get_uris(): URI[];
            /**
             * Checks whether `server` is capable of https.
             *
             * In order for a server to run https, you must call
             * soup_server_set_ssl_cert_file(), or set the
             * #SoupServer:tls-certificate property, to provide it with a
             * certificate to use.
             *
             * If you are using the deprecated single-listener APIs, then a return
             * value of %TRUE indicates that the #SoupServer serves https
             * exclusively. If you are using soup_server_listen(), etc, then a
             * %TRUE return value merely indicates that the server is
             * <emphasis>able</emphasis> to do https, regardless of whether it
             * actually currently is or not. Use soup_server_get_uris() to see if
             * it currently has any https listeners.
             * @returns %TRUE if @server is configured to serve https.
             */
            is_https(): boolean;
            /**
             * This attempts to set up `server` to listen for connections on
             * `address`.
             *
             * If `options` includes %SOUP_SERVER_LISTEN_HTTPS, and `server` has
             * been configured for TLS, then `server` will listen for https
             * connections on this port. Otherwise it will listen for plain http.
             *
             * You may call this method (along with the other "listen" methods)
             * any number of times on a server, if you want to listen on multiple
             * ports, or set up both http and https service.
             *
             * After calling this method, `server` will begin accepting and
             * processing connections as soon as the appropriate #GMainContext is
             * run.
             *
             * Note that #SoupServer never makes use of dual IPv4/IPv6 sockets; if
             * `address` is an IPv6 address, it will only accept IPv6 connections.
             * You must configure IPv4 listening separately.
             * @param address the address of the interface to listen on
             * @param options listening options for this server
             * @returns %TRUE on success, %FALSE if @address could not be bound or any other error occurred (in which case @error will be set).
             */
            listen(address: Gio.SocketAddress, options: ServerListenOptions | null): boolean;
            /**
             * This attempts to set up `server` to listen for connections on all
             * interfaces on the system. (That is, it listens on the addresses
             * <literal>0.0.0.0</literal> and/or <literal>::</literal>, depending
             * on whether `options` includes %SOUP_SERVER_LISTEN_IPV4_ONLY,
             * %SOUP_SERVER_LISTEN_IPV6_ONLY, or neither.) If `port` is specified,
             * `server` will listen on that port. If it is 0, `server` will find an
             * unused port to listen on. (In that case, you can use
             * soup_server_get_uris() to find out what port it ended up choosing.)
             *
             * See soup_server_listen() for more details.
             * @param port the port to listen on, or 0
             * @param options listening options for this server
             * @returns %TRUE on success, %FALSE if @port could not be bound or any other error occurred (in which case @error will be set).
             */
            listen_all(port: number, options: ServerListenOptions | null): boolean;
            /**
             * This attempts to set up `server` to listen for connections on
             * `fd`.
             *
             * See soup_server_listen() for more details.
             *
             * Note that `server` will close `fd` when you free it or call
             * soup_server_disconnect().
             * @param fd the file descriptor of a listening socket
             * @param options listening options for this server
             * @returns %TRUE on success, %FALSE if an error occurred (in which case @error will be set).
             */
            listen_fd(fd: number, options: ServerListenOptions | null): boolean;
            /**
             * This attempts to set up `server` to listen for connections on
             * "localhost" (that is, <literal>127.0.0.1</literal> and/or
             * <literal>::1</literal>, depending on whether `options` includes
             * %SOUP_SERVER_LISTEN_IPV4_ONLY, %SOUP_SERVER_LISTEN_IPV6_ONLY, or
             * neither). If `port` is specified, `server` will listen on that port.
             * If it is 0, `server` will find an unused port to listen on. (In that
             * case, you can use soup_server_get_uris() to find out what port it
             * ended up choosing.)
             *
             * See soup_server_listen() for more details.
             * @param port the port to listen on, or 0
             * @param options listening options for this server
             * @returns %TRUE on success, %FALSE if @port could not be bound or any other error occurred (in which case @error will be set).
             */
            listen_local(port: number, options: ServerListenOptions | null): boolean;
            /**
             * This attempts to set up `server` to listen for connections on
             * `socket`.
             *
             * See soup_server_listen() for more details.
             * @param socket a listening #GSocket
             * @param options listening options for this server
             * @returns %TRUE on success, %FALSE if an error occurred (in which case @error will be set).
             */
            listen_socket(socket: Gio.Socket, options: ServerListenOptions | null): boolean;
            /**
             * Pauses I/O on `msg`. This can be used when you need to return from
             * the server handler without having the full response ready yet. Use
             * soup_server_unpause_message() to resume I/O.
             *
             * This must only be called on #SoupMessages which were created by the
             * #SoupServer and are currently doing I/O, such as those passed into a
             * #SoupServerCallback or emitted in a #SoupServer::request-read signal.
             * @param msg a #SoupMessage associated with @server.
             */
            pause_message(msg: Message): void;
            /**
             * Stops processing for `server,` if you are using the old API. Call
             * this to clean up after soup_server_run_async(), or to terminate a
             * call to soup_server_run().
             *
             * Note that messages currently in progress will continue to be
             * handled, if the main loop associated with the server is resumed or
             * kept running.
             *
             * `server` is still in a working state after this call; you can start
             * and stop a server as many times as you want.
             */
            quit(): void;
            /**
             * Removes `auth_domain` from `server`.
             * @param auth_domain a #SoupAuthDomain
             */
            remove_auth_domain(auth_domain: AuthDomain): void;
            /**
             * Removes all handlers (early and normal) registered at `path`.
             * @param path the toplevel path for the handler
             */
            remove_handler(path: string): void;
            /**
             * Starts `server,` if you are using the old API, causing it to listen
             * for and process incoming connections. Unlike
             * soup_server_run_async(), this creates a #GMainLoop and runs it, and
             * it will not return until someone calls soup_server_quit() to stop
             * the server.
             */
            run(): void;
            /**
             * Starts `server,` if you are using the old API, causing it to listen
             * for and process incoming connections.
             *
             * The server runs in `server'`s #GMainContext. It will not actually
             * perform any processing unless the appropriate main loop is running.
             * In the simple case where you did not set the server's
             * %SOUP_SERVER_ASYNC_CONTEXT property, this means the server will run
             * whenever the glib main loop is running.
             */
            run_async(): void;
            /**
             * Sets `server` up to do https, using the SSL/TLS certificate
             * specified by `ssl_cert_file` and `ssl_key_file` (which may point to
             * the same file).
             *
             * Alternatively, you can set the #SoupServer:tls-certificate property
             * at construction time, if you already have a #GTlsCertificate.
             * @param ssl_cert_file path to a file containing a PEM-encoded SSL/TLS   certificate.
             * @param ssl_key_file path to a file containing a PEM-encoded private key.
             * @returns success or failure.
             */
            set_ssl_cert_file(ssl_cert_file: string, ssl_key_file: string): boolean;
            /**
             * Resumes I/O on `msg`. Use this to resume after calling
             * soup_server_pause_message(), or after adding a new chunk to a
             * chunked response.
             *
             * I/O won't actually resume until you return to the main loop.
             *
             * This must only be called on #SoupMessages which were created by the
             * #SoupServer and are currently doing I/O, such as those passed into a
             * #SoupServerCallback or emitted in a #SoupServer::request-read signal.
             * @param msg a #SoupMessage associated with @server.
             */
            unpause_message(msg: Message): void;
        }

        module Session {
            // Signal callback interfaces

            interface Authenticate {
                (msg: Message, auth: Auth, retrying: boolean): void;
            }

            interface ConnectionCreated {
                (connection: GObject.Object): void;
            }

            interface RequestQueued {
                (msg: Message): void;
            }

            interface RequestStarted {
                (msg: Message, socket: Socket): void;
            }

            interface RequestUnqueued {
                (msg: Message): void;
            }

            interface Tunneling {
                (connection: GObject.Object): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                accept_language: string;
                acceptLanguage: string;
                accept_language_auto: boolean;
                acceptLanguageAuto: boolean;
                async_context: any;
                asyncContext: any;
                http_aliases: string[];
                httpAliases: string[];
                https_aliases: string[];
                httpsAliases: string[];
                idle_timeout: number;
                idleTimeout: number;
                local_address: Address;
                localAddress: Address;
                max_conns: number;
                maxConns: number;
                max_conns_per_host: number;
                maxConnsPerHost: number;
                proxy_resolver: Gio.ProxyResolver;
                proxyResolver: Gio.ProxyResolver;
                proxy_uri: URI;
                proxyUri: URI;
                ssl_ca_file: string;
                sslCaFile: string;
                ssl_strict: boolean;
                sslStrict: boolean;
                ssl_use_system_ca_file: boolean;
                sslUseSystemCaFile: boolean;
                timeout: number;
                tls_database: Gio.TlsDatabase;
                tlsDatabase: Gio.TlsDatabase;
                tls_interaction: Gio.TlsInteraction;
                tlsInteraction: Gio.TlsInteraction;
                use_ntlm: boolean;
                useNtlm: boolean;
                use_thread_context: boolean;
                useThreadContext: boolean;
                user_agent: string;
                userAgent: string;
            }
        }

        class Session extends GObject.Object {
            static $gtype: GObject.GType<Session>;

            // Properties

            /**
             * If non-%NULL, the value to use for the "Accept-Language" header
             * on #SoupMessage<!-- -->s sent from this session.
             *
             * Setting this will disable
             * #SoupSession:accept-language-auto.
             */
            get accept_language(): string;
            set accept_language(val: string);
            /**
             * If non-%NULL, the value to use for the "Accept-Language" header
             * on #SoupMessage<!-- -->s sent from this session.
             *
             * Setting this will disable
             * #SoupSession:accept-language-auto.
             */
            get acceptLanguage(): string;
            set acceptLanguage(val: string);
            /**
             * If %TRUE, #SoupSession will automatically set the string
             * for the "Accept-Language" header on every #SoupMessage
             * sent, based on the return value of g_get_language_names().
             *
             * Setting this will override any previous value of
             * #SoupSession:accept-language.
             */
            get accept_language_auto(): boolean;
            set accept_language_auto(val: boolean);
            /**
             * If %TRUE, #SoupSession will automatically set the string
             * for the "Accept-Language" header on every #SoupMessage
             * sent, based on the return value of g_get_language_names().
             *
             * Setting this will override any previous value of
             * #SoupSession:accept-language.
             */
            get acceptLanguageAuto(): boolean;
            set acceptLanguageAuto(val: boolean);
            /**
             * The #GMainContext that miscellaneous session-related
             * asynchronous callbacks are invoked on. (Eg, setting
             * #SoupSession:idle-timeout will add a timeout source on this
             * context.)
             *
             * For a plain #SoupSession, this property is always set to
             * the #GMainContext that is the thread-default at the time
             * the session was created, and cannot be overridden. For the
             * deprecated #SoupSession subclasses, the default value is
             * %NULL, meaning to use the global default #GMainContext.
             *
             * If #SoupSession:use-thread-context is %FALSE, this context
             * will also be used for asynchronous HTTP I/O.
             */
            get async_context(): any;
            /**
             * The #GMainContext that miscellaneous session-related
             * asynchronous callbacks are invoked on. (Eg, setting
             * #SoupSession:idle-timeout will add a timeout source on this
             * context.)
             *
             * For a plain #SoupSession, this property is always set to
             * the #GMainContext that is the thread-default at the time
             * the session was created, and cannot be overridden. For the
             * deprecated #SoupSession subclasses, the default value is
             * %NULL, meaning to use the global default #GMainContext.
             *
             * If #SoupSession:use-thread-context is %FALSE, this context
             * will also be used for asynchronous HTTP I/O.
             */
            get asyncContext(): any;
            /**
             * A %NULL-terminated array of URI schemes that should be
             * considered to be aliases for "http". Eg, if this included
             * <literal>"dav"</literal>, than a URI of
             * <literal>dav://example.com/path</literal> would be treated
             * identically to <literal>http://example.com/path</literal>.
             *
             * In a plain #SoupSession, the default value is %NULL,
             * meaning that only "http" is recognized as meaning "http".
             * In #SoupSessionAsync and #SoupSessionSync, for backward
             * compatibility, the default value is an array containing the
             * single element <literal>"*"</literal>, a special value
             * which means that any scheme except "https" is considered to
             * be an alias for "http".
             *
             * See also #SoupSession:https-aliases.
             */
            get http_aliases(): string[];
            set http_aliases(val: string[]);
            /**
             * A %NULL-terminated array of URI schemes that should be
             * considered to be aliases for "http". Eg, if this included
             * <literal>"dav"</literal>, than a URI of
             * <literal>dav://example.com/path</literal> would be treated
             * identically to <literal>http://example.com/path</literal>.
             *
             * In a plain #SoupSession, the default value is %NULL,
             * meaning that only "http" is recognized as meaning "http".
             * In #SoupSessionAsync and #SoupSessionSync, for backward
             * compatibility, the default value is an array containing the
             * single element <literal>"*"</literal>, a special value
             * which means that any scheme except "https" is considered to
             * be an alias for "http".
             *
             * See also #SoupSession:https-aliases.
             */
            get httpAliases(): string[];
            set httpAliases(val: string[]);
            /**
             * A comma-delimited list of URI schemes that should be
             * considered to be aliases for "https". See
             * #SoupSession:http-aliases for more information.
             *
             * The default value is %NULL, meaning that no URI schemes
             * are considered aliases for "https".
             */
            get https_aliases(): string[];
            set https_aliases(val: string[]);
            /**
             * A comma-delimited list of URI schemes that should be
             * considered to be aliases for "https". See
             * #SoupSession:http-aliases for more information.
             *
             * The default value is %NULL, meaning that no URI schemes
             * are considered aliases for "https".
             */
            get httpsAliases(): string[];
            set httpsAliases(val: string[]);
            /**
             * Connection lifetime (in seconds) when idle. Any connection
             * left idle longer than this will be closed.
             *
             * Although you can change this property at any time, it will
             * only affect newly-created connections, not currently-open
             * ones. You can call soup_session_abort() after setting this
             * if you want to ensure that all future connections will have
             * this timeout value.
             *
             * Note that the default value of 60 seconds only applies to
             * plain #SoupSessions. If you are using #SoupSessionAsync or
             * #SoupSessionSync, the default value is 0 (meaning idle
             * connections will never time out).
             */
            get idle_timeout(): number;
            set idle_timeout(val: number);
            /**
             * Connection lifetime (in seconds) when idle. Any connection
             * left idle longer than this will be closed.
             *
             * Although you can change this property at any time, it will
             * only affect newly-created connections, not currently-open
             * ones. You can call soup_session_abort() after setting this
             * if you want to ensure that all future connections will have
             * this timeout value.
             *
             * Note that the default value of 60 seconds only applies to
             * plain #SoupSessions. If you are using #SoupSessionAsync or
             * #SoupSessionSync, the default value is 0 (meaning idle
             * connections will never time out).
             */
            get idleTimeout(): number;
            set idleTimeout(val: number);
            /**
             * Sets the #SoupAddress to use for the client side of
             * the connection.
             *
             * Use this property if you want for instance to bind the
             * local socket to a specific IP address.
             */
            get local_address(): Address;
            /**
             * Sets the #SoupAddress to use for the client side of
             * the connection.
             *
             * Use this property if you want for instance to bind the
             * local socket to a specific IP address.
             */
            get localAddress(): Address;
            get max_conns(): number;
            set max_conns(val: number);
            get maxConns(): number;
            set maxConns(val: number);
            get max_conns_per_host(): number;
            set max_conns_per_host(val: number);
            get maxConnsPerHost(): number;
            set maxConnsPerHost(val: number);
            /**
             * A #GProxyResolver to use with this session. Setting this
             * will clear the #SoupSession:proxy-uri property, and remove
             * any <type>SoupProxyURIResolver</type> features that have
             * been added to the session.
             *
             * By default, in a plain #SoupSession, this is set to the
             * default #GProxyResolver, but you can set it to %NULL if you
             * don't want to use proxies, or set it to your own
             * #GProxyResolver if you want to control what proxies get
             * used.
             */
            get proxy_resolver(): Gio.ProxyResolver;
            set proxy_resolver(val: Gio.ProxyResolver);
            /**
             * A #GProxyResolver to use with this session. Setting this
             * will clear the #SoupSession:proxy-uri property, and remove
             * any <type>SoupProxyURIResolver</type> features that have
             * been added to the session.
             *
             * By default, in a plain #SoupSession, this is set to the
             * default #GProxyResolver, but you can set it to %NULL if you
             * don't want to use proxies, or set it to your own
             * #GProxyResolver if you want to control what proxies get
             * used.
             */
            get proxyResolver(): Gio.ProxyResolver;
            set proxyResolver(val: Gio.ProxyResolver);
            /**
             * A proxy to use for all http and https requests in this
             * session. Setting this will clear the
             * #SoupSession:proxy-resolver property, and remove any
             * <type>SoupProxyURIResolver</type> features that have been
             * added to the session. Setting this property will also
             * cancel all currently pending messages.
             *
             * Note that #SoupSession will normally handle looking up the
             * user's proxy settings for you; you should only use
             * #SoupSession:proxy-uri if you need to override the user's
             * normal proxy settings.
             *
             * Also note that this proxy will be used for
             * <emphasis>all</emphasis> requests; even requests to
             * <literal>localhost</literal>. If you need more control over
             * proxies, you can create a #GSimpleProxyResolver and set the
             * #SoupSession:proxy-resolver property.
             */
            get proxy_uri(): URI;
            set proxy_uri(val: URI);
            /**
             * A proxy to use for all http and https requests in this
             * session. Setting this will clear the
             * #SoupSession:proxy-resolver property, and remove any
             * <type>SoupProxyURIResolver</type> features that have been
             * added to the session. Setting this property will also
             * cancel all currently pending messages.
             *
             * Note that #SoupSession will normally handle looking up the
             * user's proxy settings for you; you should only use
             * #SoupSession:proxy-uri if you need to override the user's
             * normal proxy settings.
             *
             * Also note that this proxy will be used for
             * <emphasis>all</emphasis> requests; even requests to
             * <literal>localhost</literal>. If you need more control over
             * proxies, you can create a #GSimpleProxyResolver and set the
             * #SoupSession:proxy-resolver property.
             */
            get proxyUri(): URI;
            set proxyUri(val: URI);
            /**
             * File containing SSL CA certificates.
             *
             * If the specified file does not exist or cannot be read,
             * then libsoup will print a warning, and then behave as
             * though it had read in a empty CA file, meaning that all SSL
             * certificates will be considered invalid.
             */
            get ssl_ca_file(): string;
            set ssl_ca_file(val: string);
            /**
             * File containing SSL CA certificates.
             *
             * If the specified file does not exist or cannot be read,
             * then libsoup will print a warning, and then behave as
             * though it had read in a empty CA file, meaning that all SSL
             * certificates will be considered invalid.
             */
            get sslCaFile(): string;
            set sslCaFile(val: string);
            /**
             * Normally, if #SoupSession:tls-database is set (including if
             * it was set via #SoupSession:ssl-use-system-ca-file or
             * #SoupSession:ssl-ca-file), then libsoup will reject any
             * certificate that is invalid (ie, expired) or that is not
             * signed by one of the given CA certificates, and the
             * #SoupMessage will fail with the status
             * %SOUP_STATUS_SSL_FAILED.
             *
             * If you set #SoupSession:ssl-strict to %FALSE, then all
             * certificates will be accepted, and you will need to call
             * soup_message_get_https_status() to distinguish valid from
             * invalid certificates. (This can be used, eg, if you want to
             * accept invalid certificates after giving some sort of
             * warning.)
             *
             * For a plain #SoupSession, if the session has no CA file or
             * TLS database, and this property is %TRUE, then all
             * certificates will be rejected. However, beware that the
             * deprecated #SoupSession subclasses (#SoupSessionAsync and
             * #SoupSessionSync) have the opposite behavior: if there is
             * no CA file or TLS database, then all certificates are always
             * accepted, and this property has no effect.
             */
            get ssl_strict(): boolean;
            set ssl_strict(val: boolean);
            /**
             * Normally, if #SoupSession:tls-database is set (including if
             * it was set via #SoupSession:ssl-use-system-ca-file or
             * #SoupSession:ssl-ca-file), then libsoup will reject any
             * certificate that is invalid (ie, expired) or that is not
             * signed by one of the given CA certificates, and the
             * #SoupMessage will fail with the status
             * %SOUP_STATUS_SSL_FAILED.
             *
             * If you set #SoupSession:ssl-strict to %FALSE, then all
             * certificates will be accepted, and you will need to call
             * soup_message_get_https_status() to distinguish valid from
             * invalid certificates. (This can be used, eg, if you want to
             * accept invalid certificates after giving some sort of
             * warning.)
             *
             * For a plain #SoupSession, if the session has no CA file or
             * TLS database, and this property is %TRUE, then all
             * certificates will be rejected. However, beware that the
             * deprecated #SoupSession subclasses (#SoupSessionAsync and
             * #SoupSessionSync) have the opposite behavior: if there is
             * no CA file or TLS database, then all certificates are always
             * accepted, and this property has no effect.
             */
            get sslStrict(): boolean;
            set sslStrict(val: boolean);
            /**
             * Setting this to %TRUE is equivalent to setting
             * #SoupSession:tls-database to the default system CA database.
             * (and likewise, setting #SoupSession:tls-database to the
             * default database by hand will cause this property to
             * become %TRUE).
             *
             * Setting this to %FALSE (when it was previously %TRUE) will
             * clear the #SoupSession:tls-database field.
             *
             * See #SoupSession:ssl-strict for more information on how
             * https certificate validation is handled.
             *
             * If you are using #SoupSessionAsync or
             * #SoupSessionSync, on libsoup older than 2.74.0, the default value
             * is %FALSE, for backward compatibility.
             */
            get ssl_use_system_ca_file(): boolean;
            set ssl_use_system_ca_file(val: boolean);
            /**
             * Setting this to %TRUE is equivalent to setting
             * #SoupSession:tls-database to the default system CA database.
             * (and likewise, setting #SoupSession:tls-database to the
             * default database by hand will cause this property to
             * become %TRUE).
             *
             * Setting this to %FALSE (when it was previously %TRUE) will
             * clear the #SoupSession:tls-database field.
             *
             * See #SoupSession:ssl-strict for more information on how
             * https certificate validation is handled.
             *
             * If you are using #SoupSessionAsync or
             * #SoupSessionSync, on libsoup older than 2.74.0, the default value
             * is %FALSE, for backward compatibility.
             */
            get sslUseSystemCaFile(): boolean;
            set sslUseSystemCaFile(val: boolean);
            /**
             * The timeout (in seconds) for socket I/O operations
             * (including connecting to a server, and waiting for a reply
             * to an HTTP request).
             *
             * Although you can change this property at any time, it will
             * only affect newly-created connections, not currently-open
             * ones. You can call soup_session_abort() after setting this
             * if you want to ensure that all future connections will have
             * this timeout value.
             *
             * Note that the default value of 60 seconds only applies to
             * plain #SoupSessions. If you are using #SoupSessionAsync or
             * #SoupSessionSync, the default value is 0 (meaning socket I/O
             * will not time out).
             *
             * Not to be confused with #SoupSession:idle-timeout (which is
             * the length of time that idle persistent connections will be
             * kept open).
             */
            get timeout(): number;
            set timeout(val: number);
            /**
             * Sets the #GTlsDatabase to use for validating SSL/TLS
             * certificates.
             *
             * Note that setting the #SoupSession:ssl-ca-file or
             * #SoupSession:ssl-use-system-ca-file property will cause
             * this property to be set to a #GTlsDatabase corresponding to
             * the indicated file or system default.
             *
             * See #SoupSession:ssl-strict for more information on how
             * https certificate validation is handled.
             *
             * If you are using a plain #SoupSession then
             * #SoupSession:ssl-use-system-ca-file will be %TRUE by
             * default, and so this property will be a copy of the system
             * CA database. If you are using #SoupSessionAsync or
             * #SoupSessionSync, on libsoup older than 2.74.0, this property
             * will be %NULL by default.
             */
            get tls_database(): Gio.TlsDatabase;
            set tls_database(val: Gio.TlsDatabase);
            /**
             * Sets the #GTlsDatabase to use for validating SSL/TLS
             * certificates.
             *
             * Note that setting the #SoupSession:ssl-ca-file or
             * #SoupSession:ssl-use-system-ca-file property will cause
             * this property to be set to a #GTlsDatabase corresponding to
             * the indicated file or system default.
             *
             * See #SoupSession:ssl-strict for more information on how
             * https certificate validation is handled.
             *
             * If you are using a plain #SoupSession then
             * #SoupSession:ssl-use-system-ca-file will be %TRUE by
             * default, and so this property will be a copy of the system
             * CA database. If you are using #SoupSessionAsync or
             * #SoupSessionSync, on libsoup older than 2.74.0, this property
             * will be %NULL by default.
             */
            get tlsDatabase(): Gio.TlsDatabase;
            set tlsDatabase(val: Gio.TlsDatabase);
            /**
             * A #GTlsInteraction object that will be passed on to any
             * #GTlsConnections created by the session. (This can be used to
             * provide client-side certificates, for example.)
             */
            get tls_interaction(): Gio.TlsInteraction;
            set tls_interaction(val: Gio.TlsInteraction);
            /**
             * A #GTlsInteraction object that will be passed on to any
             * #GTlsConnections created by the session. (This can be used to
             * provide client-side certificates, for example.)
             */
            get tlsInteraction(): Gio.TlsInteraction;
            set tlsInteraction(val: Gio.TlsInteraction);
            /**
             * Whether or not to use NTLM authentication.
             */
            get use_ntlm(): boolean;
            set use_ntlm(val: boolean);
            /**
             * Whether or not to use NTLM authentication.
             */
            get useNtlm(): boolean;
            set useNtlm(val: boolean);
            /**
             * If %TRUE (which it always is on a plain #SoupSession),
             * asynchronous HTTP requests in this session will run in
             * whatever the thread-default #GMainContext is at the time
             * they are started, rather than always occurring in
             * #SoupSession:async-context.
             */
            get use_thread_context(): boolean;
            set use_thread_context(val: boolean);
            /**
             * If %TRUE (which it always is on a plain #SoupSession),
             * asynchronous HTTP requests in this session will run in
             * whatever the thread-default #GMainContext is at the time
             * they are started, rather than always occurring in
             * #SoupSession:async-context.
             */
            get useThreadContext(): boolean;
            set useThreadContext(val: boolean);
            /**
             * If non-%NULL, the value to use for the "User-Agent" header
             * on #SoupMessage<!-- -->s sent from this session.
             *
             * RFC 2616 says: "The User-Agent request-header field
             * contains information about the user agent originating the
             * request. This is for statistical purposes, the tracing of
             * protocol violations, and automated recognition of user
             * agents for the sake of tailoring responses to avoid
             * particular user agent limitations. User agents SHOULD
             * include this field with requests."
             *
             * The User-Agent header contains a list of one or more
             * product tokens, separated by whitespace, with the most
             * significant product token coming first. The tokens must be
             * brief, ASCII, and mostly alphanumeric (although "-", "_",
             * and "." are also allowed), and may optionally include a "/"
             * followed by a version string. You may also put comments,
             * enclosed in parentheses, between or after the tokens.
             *
             * If you set a #SoupSession:user_agent property that has trailing
             * whitespace, #SoupSession will append its own product token
             * (eg, "<literal>libsoup/2.3.2</literal>") to the end of the
             * header for you.
             */
            get user_agent(): string;
            set user_agent(val: string);
            /**
             * If non-%NULL, the value to use for the "User-Agent" header
             * on #SoupMessage<!-- -->s sent from this session.
             *
             * RFC 2616 says: "The User-Agent request-header field
             * contains information about the user agent originating the
             * request. This is for statistical purposes, the tracing of
             * protocol violations, and automated recognition of user
             * agents for the sake of tailoring responses to avoid
             * particular user agent limitations. User agents SHOULD
             * include this field with requests."
             *
             * The User-Agent header contains a list of one or more
             * product tokens, separated by whitespace, with the most
             * significant product token coming first. The tokens must be
             * brief, ASCII, and mostly alphanumeric (although "-", "_",
             * and "." are also allowed), and may optionally include a "/"
             * followed by a version string. You may also put comments,
             * enclosed in parentheses, between or after the tokens.
             *
             * If you set a #SoupSession:user_agent property that has trailing
             * whitespace, #SoupSession will append its own product token
             * (eg, "<literal>libsoup/2.3.2</literal>") to the end of the
             * header for you.
             */
            get userAgent(): string;
            set userAgent(val: string);

            // Constructors

            constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Session;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'authenticate',
                callback: (_source: this, msg: Message, auth: Auth, retrying: boolean) => void,
            ): number;
            connect_after(
                signal: 'authenticate',
                callback: (_source: this, msg: Message, auth: Auth, retrying: boolean) => void,
            ): number;
            emit(signal: 'authenticate', msg: Message, auth: Auth, retrying: boolean): void;
            connect(
                signal: 'connection-created',
                callback: (_source: this, connection: GObject.Object) => void,
            ): number;
            connect_after(
                signal: 'connection-created',
                callback: (_source: this, connection: GObject.Object) => void,
            ): number;
            emit(signal: 'connection-created', connection: GObject.Object): void;
            connect(signal: 'request-queued', callback: (_source: this, msg: Message) => void): number;
            connect_after(signal: 'request-queued', callback: (_source: this, msg: Message) => void): number;
            emit(signal: 'request-queued', msg: Message): void;
            connect(signal: 'request-started', callback: (_source: this, msg: Message, socket: Socket) => void): number;
            connect_after(
                signal: 'request-started',
                callback: (_source: this, msg: Message, socket: Socket) => void,
            ): number;
            emit(signal: 'request-started', msg: Message, socket: Socket): void;
            connect(signal: 'request-unqueued', callback: (_source: this, msg: Message) => void): number;
            connect_after(signal: 'request-unqueued', callback: (_source: this, msg: Message) => void): number;
            emit(signal: 'request-unqueued', msg: Message): void;
            connect(signal: 'tunneling', callback: (_source: this, connection: GObject.Object) => void): number;
            connect_after(signal: 'tunneling', callback: (_source: this, connection: GObject.Object) => void): number;
            emit(signal: 'tunneling', connection: GObject.Object): void;

            // Virtual methods

            vfunc_auth_required(msg: Message, auth: Auth, retrying: boolean): void;
            vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void;
            /**
             * Causes `session` to immediately finish processing `msg` (regardless
             * of its current state) with a final status_code of `status_code`. You
             * may call this at any time after handing `msg` off to `session;` if
             * `session` has started sending the request but has not yet received
             * the complete response, then it will close the request's connection.
             * Note that with requests that have side effects (eg,
             * <literal>POST</literal>, <literal>PUT</literal>,
             * <literal>DELETE</literal>) it is possible that you might cancel the
             * request after the server acts on it, but before it returns a
             * response, leaving the remote resource in an unknown state.
             *
             * If the message is cancelled while its response body is being read,
             * then the response body in `msg` will be left partially-filled-in.
             * The response headers, on the other hand, will always be either
             * empty or complete.
             *
             * Beware that with the deprecated #SoupSessionAsync, messages queued
             * with soup_session_queue_message() will have their callbacks invoked
             * before soup_session_cancel_message() returns. The plain
             * #SoupSession does not have this behavior; cancelling an
             * asynchronous message will merely queue its callback to be run after
             * returning to the main loop.
             * @param msg the message to cancel
             * @param status_code status code to set on @msg (generally %SOUP_STATUS_CANCELLED)
             */
            vfunc_cancel_message(msg: Message, status_code: number): void;
            vfunc_flush_queue(): void;
            vfunc_kick(): void;
            /**
             * Queues the message `msg` for asynchronously sending the request and
             * receiving a response in the current thread-default #GMainContext.
             * If `msg` has been processed before, any resources related to the
             * time it was last sent are freed.
             *
             * Upon message completion, the callback specified in `callback` will
             * be invoked. If after returning from this callback the message has not
             * been requeued, `msg` will be unreffed.
             *
             * (The behavior above applies to a plain #SoupSession; if you are
             * using #SoupSessionAsync or #SoupSessionSync, then the #GMainContext
             * that is used depends on the settings of #SoupSession:async-context
             * and #SoupSession:use-thread-context, and for #SoupSessionSync, the
             * message will actually be sent and processed in another thread, with
             * only the final callback occurring in the indicated #GMainContext.)
             *
             * Contrast this method with soup_session_send_async(), which also
             * asynchronously sends a message, but returns before reading the
             * response body, and allows you to read the response via a
             * #GInputStream.
             * @param msg the message to queue
             * @param callback a #SoupSessionCallback which will be called after the message completes or when an unrecoverable error occurs.
             */
            vfunc_queue_message(msg: Message, callback?: SessionCallback | null): void;
            vfunc_request_started(msg: Message, socket: Socket): void;
            /**
             * This causes `msg` to be placed back on the queue to be attempted
             * again.
             * @param msg the message to requeue
             */
            vfunc_requeue_message(msg: Message): void;
            /**
             * Synchronously send `msg`. This call will not return until the
             * transfer is finished successfully or there is an unrecoverable
             * error.
             *
             * Unlike with soup_session_queue_message(), `msg` is not freed upon
             * return.
             *
             * (Note that if you call this method on a #SoupSessionAsync, it will
             * still use asynchronous I/O internally, running the glib main loop
             * to process the message, which may also cause other events to be
             * processed.)
             *
             * Contrast this method with soup_session_send(), which also
             * synchronously sends a message, but returns before reading the
             * response body, and allows you to read the response via a
             * #GInputStream.
             * @param msg the message to send
             */
            vfunc_send_message(msg: Message): number;

            // Methods

            /**
             * Cancels all pending requests in `session` and closes all idle
             * persistent connections.
             *
             * The message cancellation has the same semantics as with
             * soup_session_cancel_message(); asynchronous requests on a
             * #SoupSessionAsync will have their callback called before
             * soup_session_abort() returns. Requests on a plain #SoupSession will
             * not.
             */
            abort(): void;
            /**
             * Causes `session` to immediately finish processing `msg` (regardless
             * of its current state) with a final status_code of `status_code`. You
             * may call this at any time after handing `msg` off to `session;` if
             * `session` has started sending the request but has not yet received
             * the complete response, then it will close the request's connection.
             * Note that with requests that have side effects (eg,
             * <literal>POST</literal>, <literal>PUT</literal>,
             * <literal>DELETE</literal>) it is possible that you might cancel the
             * request after the server acts on it, but before it returns a
             * response, leaving the remote resource in an unknown state.
             *
             * If the message is cancelled while its response body is being read,
             * then the response body in `msg` will be left partially-filled-in.
             * The response headers, on the other hand, will always be either
             * empty or complete.
             *
             * Beware that with the deprecated #SoupSessionAsync, messages queued
             * with soup_session_queue_message() will have their callbacks invoked
             * before soup_session_cancel_message() returns. The plain
             * #SoupSession does not have this behavior; cancelling an
             * asynchronous message will merely queue its callback to be run after
             * returning to the main loop.
             * @param msg the message to cancel
             * @param status_code status code to set on @msg (generally %SOUP_STATUS_CANCELLED)
             */
            cancel_message(msg: Message, status_code: number): void;
            /**
             * Start a connection to `uri`. The operation can be monitored by providing a `progress_callback`
             * and finishes when the connection is done or an error ocurred.
             *
             * Call soup_session_connect_finish() to get the #GIOStream to communicate with the server.
             * @param uri a #SoupURI to connect to
             * @param cancellable a #GCancellable
             * @param progress_callback a #SoupSessionConnectProgressCallback which will be called for every network event that occurs during the connection.
             */
            connect_async(
                uri: URI,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: SessionConnectProgressCallback | null,
            ): Promise<Gio.IOStream>;
            /**
             * Start a connection to `uri`. The operation can be monitored by providing a `progress_callback`
             * and finishes when the connection is done or an error ocurred.
             *
             * Call soup_session_connect_finish() to get the #GIOStream to communicate with the server.
             * @param uri a #SoupURI to connect to
             * @param cancellable a #GCancellable
             * @param progress_callback a #SoupSessionConnectProgressCallback which will be called for every network event that occurs during the connection.
             * @param callback the callback to invoke when the operation finishes
             */
            connect_async(
                uri: URI,
                cancellable: Gio.Cancellable | null,
                progress_callback: SessionConnectProgressCallback | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Start a connection to `uri`. The operation can be monitored by providing a `progress_callback`
             * and finishes when the connection is done or an error ocurred.
             *
             * Call soup_session_connect_finish() to get the #GIOStream to communicate with the server.
             * @param uri a #SoupURI to connect to
             * @param cancellable a #GCancellable
             * @param progress_callback a #SoupSessionConnectProgressCallback which will be called for every network event that occurs during the connection.
             * @param callback the callback to invoke when the operation finishes
             */
            connect_async(
                uri: URI,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: SessionConnectProgressCallback | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.IOStream> | void;
            /**
             * Gets the #GIOStream created for the connection to communicate with the server.
             * @param result the #GAsyncResult passed to your callback
             * @returns a new #GIOStream, or %NULL on error.
             */
            connect_finish(result: Gio.AsyncResult): Gio.IOStream;
            /**
             * Gets `session'`s #SoupSession:async-context. This does not add a ref
             * to the context, so you will need to ref it yourself if you want it
             * to outlive its session.
             *
             * For a modern #SoupSession, this will always just return the
             * thread-default #GMainContext, and so is not especially useful.
             * @returns @session's #GMainContext, which may be %NULL
             */
            get_async_context(): GLib.MainContext | null;
            /**
             * Gets the first feature in `session` of type `feature_type`. For
             * features where there may be more than one feature of a given type,
             * use soup_session_get_features().
             * @param feature_type the #GType of the feature to get
             * @returns a #SoupSessionFeature, or %NULL. The feature is owned by @session.
             */
            get_feature(feature_type: GObject.GType): SessionFeature | null;
            /**
             * Gets the first feature in `session` of type `feature_type,` provided
             * that it is not disabled for `msg`. As with
             * soup_session_get_feature(), this should only be used for features
             * where `feature_type` is only expected to match a single feature. In
             * particular, if there are two matching features, and the first is
             * disabled on `msg,` and the second is not, then this will return
             * %NULL, not the second feature.
             * @param feature_type the #GType of the feature to get
             * @param msg a #SoupMessage
             * @returns a #SoupSessionFeature, or %NULL. The feature is owned by @session.
             */
            get_feature_for_message(feature_type: GObject.GType, msg: Message): SessionFeature | null;
            /**
             * Generates a list of `session'`s features of type `feature_type`. (If
             * you want to see all features, you can pass %SOUP_TYPE_SESSION_FEATURE
             * for `feature_type`.)
             * @param feature_type the #GType of the class of features to get
             * @returns a list of features. You must free the list, but not its contents
             */
            get_features(feature_type: GObject.GType): SessionFeature[];
            /**
             * Tests if `session` has at a feature of type `feature_type` (which can
             * be the type of either a #SoupSessionFeature, or else a subtype of
             * some class managed by another feature, such as #SoupAuth or
             * #SoupRequest).
             * @param feature_type the #GType of the class of features to check for
             * @returns %TRUE or %FALSE
             */
            has_feature(feature_type: GObject.GType): boolean;
            /**
             * Pauses HTTP I/O on `msg`. Call soup_session_unpause_message() to
             * resume I/O.
             *
             * This may only be called for asynchronous messages (those sent on a
             * #SoupSessionAsync or using soup_session_queue_message()).
             * @param msg a #SoupMessage currently running on @session
             */
            pause_message(msg: Message): void;
            /**
             * Tells `session` that an URI from the given `hostname` may be requested
             * shortly, and so the session can try to prepare by resolving the
             * domain name in advance, in order to work more quickly once the URI
             * is actually requested.
             *
             * If `cancellable` is non-%NULL, it can be used to cancel the
             * resolution. `callback` will still be invoked in this case, with a
             * status of %SOUP_STATUS_CANCELLED.
             * @param hostname a hostname to be resolved
             * @param cancellable a #GCancellable object, or %NULL
             * @param callback callback to call with the     result, or %NULL
             */
            prefetch_dns(
                hostname: string,
                cancellable?: Gio.Cancellable | null,
                callback?: AddressCallback | null,
            ): void;
            /**
             * Tells `session` that `uri` may be requested shortly, and so the
             * session can try to prepare (resolving the domain name, obtaining
             * proxy address, etc.) in order to work more quickly once the URI is
             * actually requested.
             * @param uri a #SoupURI which may be required
             */
            prepare_for_uri(uri: URI): void;
            /**
             * Queues the message `msg` for asynchronously sending the request and
             * receiving a response in the current thread-default #GMainContext.
             * If `msg` has been processed before, any resources related to the
             * time it was last sent are freed.
             *
             * Upon message completion, the callback specified in `callback` will
             * be invoked. If after returning from this callback the message has not
             * been requeued, `msg` will be unreffed.
             *
             * (The behavior above applies to a plain #SoupSession; if you are
             * using #SoupSessionAsync or #SoupSessionSync, then the #GMainContext
             * that is used depends on the settings of #SoupSession:async-context
             * and #SoupSession:use-thread-context, and for #SoupSessionSync, the
             * message will actually be sent and processed in another thread, with
             * only the final callback occurring in the indicated #GMainContext.)
             *
             * Contrast this method with soup_session_send_async(), which also
             * asynchronously sends a message, but returns before reading the
             * response body, and allows you to read the response via a
             * #GInputStream.
             * @param msg the message to queue
             * @param callback a #SoupSessionCallback which will be called after the message completes or when an unrecoverable error occurs.
             */
            queue_message(msg: Message, callback?: SessionCallback | null): void;
            /**
             * Updates `msg'`s URI according to its status code and "Location"
             * header, and requeues it on `session`. Use this when you have set
             * %SOUP_MESSAGE_NO_REDIRECT on a message, but have decided to allow a
             * particular redirection to occur, or if you want to allow a
             * redirection that #SoupSession will not perform automatically (eg,
             * redirecting a non-safe method such as DELETE).
             *
             * If `msg'`s status code indicates that it should be retried as a GET
             * request, then `msg` will be modified accordingly.
             *
             * If `msg` has already been redirected too many times, this will
             * cause it to fail with %SOUP_STATUS_TOO_MANY_REDIRECTS.
             * @param msg a #SoupMessage that has received a 3xx response
             * @returns %TRUE if a redirection was applied, %FALSE if not (eg, because there was no Location header, or it could not be parsed).
             */
            redirect_message(msg: Message): boolean;
            /**
             * Removes `feature'`s functionality from `session`.
             * @param feature a feature that has previously been added to @session
             */
            remove_feature(feature: SessionFeature): void;
            /**
             * Creates a #SoupRequest for retrieving `uri_string`.
             * @param uri_string a URI, in string form
             * @returns a new #SoupRequest, or   %NULL on error.
             */
            request(uri_string: string): Request;
            /**
             * Creates a #SoupRequest for retrieving `uri_string,` which must be an
             * "http" or "https" URI (or another protocol listed in `session'`s
             * #SoupSession:http-aliases or #SoupSession:https-aliases).
             * @param method an HTTP method
             * @param uri_string a URI, in string form
             * @returns a new #SoupRequestHTTP, or   %NULL on error.
             */
            request_http(method: string, uri_string: string): RequestHTTP;
            /**
             * Creates a #SoupRequest for retrieving `uri,` which must be an
             * "http" or "https" URI (or another protocol listed in `session'`s
             * #SoupSession:http-aliases or #SoupSession:https-aliases).
             * @param method an HTTP method
             * @param uri a #SoupURI representing the URI to retrieve
             * @returns a new #SoupRequestHTTP, or   %NULL on error.
             */
            request_http_uri(method: string, uri: URI): RequestHTTP;
            /**
             * Creates a #SoupRequest for retrieving `uri`.
             * @param uri a #SoupURI representing the URI to retrieve
             * @returns a new #SoupRequest, or   %NULL on error.
             */
            request_uri(uri: URI): Request;
            /**
             * This causes `msg` to be placed back on the queue to be attempted
             * again.
             * @param msg the message to requeue
             */
            requeue_message(msg: Message): void;
            /**
             * Synchronously sends `msg` and waits for the beginning of a response.
             * On success, a #GInputStream will be returned which you can use to
             * read the response body. ("Success" here means only that an HTTP
             * response was received and understood; it does not necessarily mean
             * that a 2xx class status code was received.)
             *
             * If non-%NULL, `cancellable` can be used to cancel the request;
             * soup_session_send() will return a %G_IO_ERROR_CANCELLED error. Note
             * that with requests that have side effects (eg,
             * <literal>POST</literal>, <literal>PUT</literal>,
             * <literal>DELETE</literal>) it is possible that you might cancel the
             * request after the server acts on it, but before it returns a
             * response, leaving the remote resource in an unknown state.
             *
             * If `msg` is requeued due to a redirect or authentication, the
             * initial (3xx/401/407) response body will be suppressed, and
             * soup_session_send() will only return once a final response has been
             * received.
             *
             * Contrast this method with soup_session_send_message(), which also
             * synchronously sends a #SoupMessage, but doesn't return until the
             * response has been completely read.
             *
             * (Note that this method cannot be called on the deprecated
             * #SoupSessionAsync subclass.)
             * @param msg a #SoupMessage
             * @param cancellable a #GCancellable
             * @returns a #GInputStream for reading the   response body, or %NULL on error.
             */
            send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream;
            /**
             * Asynchronously sends `msg` and waits for the beginning of a
             * response. When `callback` is called, then either `msg` has been sent,
             * and its response headers received, or else an error has occurred.
             * Call soup_session_send_finish() to get a #GInputStream for reading
             * the response body.
             *
             * See soup_session_send() for more details on the general semantics.
             *
             * Contrast this method with soup_session_queue_message(), which also
             * asynchronously sends a #SoupMessage, but doesn't invoke its
             * callback until the response has been completely read.
             *
             * (Note that this method cannot be called on the deprecated
             * #SoupSessionSync subclass, and can only be called on
             * #SoupSessionAsync if you have set the
             * #SoupSession:use-thread-context property.)
             * @param msg a #SoupMessage
             * @param cancellable a #GCancellable
             */
            send_async(msg: Message, cancellable?: Gio.Cancellable | null): Promise<Gio.InputStream>;
            /**
             * Asynchronously sends `msg` and waits for the beginning of a
             * response. When `callback` is called, then either `msg` has been sent,
             * and its response headers received, or else an error has occurred.
             * Call soup_session_send_finish() to get a #GInputStream for reading
             * the response body.
             *
             * See soup_session_send() for more details on the general semantics.
             *
             * Contrast this method with soup_session_queue_message(), which also
             * asynchronously sends a #SoupMessage, but doesn't invoke its
             * callback until the response has been completely read.
             *
             * (Note that this method cannot be called on the deprecated
             * #SoupSessionSync subclass, and can only be called on
             * #SoupSessionAsync if you have set the
             * #SoupSession:use-thread-context property.)
             * @param msg a #SoupMessage
             * @param cancellable a #GCancellable
             * @param callback the callback to invoke
             */
            send_async(
                msg: Message,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously sends `msg` and waits for the beginning of a
             * response. When `callback` is called, then either `msg` has been sent,
             * and its response headers received, or else an error has occurred.
             * Call soup_session_send_finish() to get a #GInputStream for reading
             * the response body.
             *
             * See soup_session_send() for more details on the general semantics.
             *
             * Contrast this method with soup_session_queue_message(), which also
             * asynchronously sends a #SoupMessage, but doesn't invoke its
             * callback until the response has been completely read.
             *
             * (Note that this method cannot be called on the deprecated
             * #SoupSessionSync subclass, and can only be called on
             * #SoupSessionAsync if you have set the
             * #SoupSession:use-thread-context property.)
             * @param msg a #SoupMessage
             * @param cancellable a #GCancellable
             * @param callback the callback to invoke
             */
            send_async(
                msg: Message,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.InputStream> | void;
            /**
             * Gets the response to a soup_session_send_async() call and (if
             * successful), returns a #GInputStream that can be used to read the
             * response body.
             * @param result the #GAsyncResult passed to your callback
             * @returns a #GInputStream for reading the   response body, or %NULL on error.
             */
            send_finish(result: Gio.AsyncResult): Gio.InputStream;
            /**
             * Synchronously send `msg`. This call will not return until the
             * transfer is finished successfully or there is an unrecoverable
             * error.
             *
             * Unlike with soup_session_queue_message(), `msg` is not freed upon
             * return.
             *
             * (Note that if you call this method on a #SoupSessionAsync, it will
             * still use asynchronous I/O internally, running the glib main loop
             * to process the message, which may also cause other events to be
             * processed.)
             *
             * Contrast this method with soup_session_send(), which also
             * synchronously sends a message, but returns before reading the
             * response body, and allows you to read the response via a
             * #GInputStream.
             * @param msg the message to send
             * @returns the HTTP status code of the response
             */
            send_message(msg: Message): number;
            /**
             * "Steals" the HTTP connection associated with `msg` from `session`.
             * This happens immediately, regardless of the current state of the
             * connection, and `msg'`s callback will not be called. You can steal
             * the connection from a #SoupMessage signal handler if you need to
             * wait for part or all of the response to be received first.
             *
             * Calling this function may cause `msg` to be freed if you are not
             * holding any other reference to it.
             * @param msg the message whose connection is to be stolen
             * @returns the #GIOStream formerly associated   with @msg (or %NULL if @msg was no longer associated with a   connection). No guarantees are made about what kind of #GIOStream   is returned.
             */
            steal_connection(msg: Message): Gio.IOStream;
            /**
             * Resumes HTTP I/O on `msg`. Use this to resume after calling
             * soup_session_pause_message().
             *
             * If `msg` is being sent via blocking I/O, this will resume reading or
             * writing immediately. If `msg` is using non-blocking I/O, then
             * reading or writing won't resume until you return to the main loop.
             *
             * This may only be called for asynchronous messages (those sent on a
             * #SoupSessionAsync or using soup_session_queue_message()).
             * @param msg a #SoupMessage currently running on @session
             */
            unpause_message(msg: Message): void;
            /**
             * Asynchronously creates a #SoupWebsocketConnection to communicate
             * with a remote server.
             *
             * All necessary WebSocket-related headers will be added to `msg,` and
             * it will then be sent and asynchronously processed normally
             * (including handling of redirection and HTTP authentication).
             *
             * If the server returns "101 Switching Protocols", then `msg'`s status
             * code and response headers will be updated, and then the WebSocket
             * handshake will be completed. On success,
             * soup_session_websocket_connect_finish() will return a new
             * #SoupWebsocketConnection. On failure it will return a #GError.
             *
             * If the server returns a status other than "101 Switching
             * Protocols", then `msg` will contain the complete response headers
             * and body from the server's response, and
             * soup_session_websocket_connect_finish() will return
             * %SOUP_WEBSOCKET_ERROR_NOT_WEBSOCKET.
             * @param msg #SoupMessage indicating the WebSocket server to connect to
             * @param origin origin of the connection
             * @param protocols a   %NULL-terminated array of protocols supported
             * @param cancellable a #GCancellable
             */
            websocket_connect_async(
                msg: Message,
                origin?: string | null,
                protocols?: string[] | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<WebsocketConnection>;
            /**
             * Asynchronously creates a #SoupWebsocketConnection to communicate
             * with a remote server.
             *
             * All necessary WebSocket-related headers will be added to `msg,` and
             * it will then be sent and asynchronously processed normally
             * (including handling of redirection and HTTP authentication).
             *
             * If the server returns "101 Switching Protocols", then `msg'`s status
             * code and response headers will be updated, and then the WebSocket
             * handshake will be completed. On success,
             * soup_session_websocket_connect_finish() will return a new
             * #SoupWebsocketConnection. On failure it will return a #GError.
             *
             * If the server returns a status other than "101 Switching
             * Protocols", then `msg` will contain the complete response headers
             * and body from the server's response, and
             * soup_session_websocket_connect_finish() will return
             * %SOUP_WEBSOCKET_ERROR_NOT_WEBSOCKET.
             * @param msg #SoupMessage indicating the WebSocket server to connect to
             * @param origin origin of the connection
             * @param protocols a   %NULL-terminated array of protocols supported
             * @param cancellable a #GCancellable
             * @param callback the callback to invoke
             */
            websocket_connect_async(
                msg: Message,
                origin: string | null,
                protocols: string[] | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously creates a #SoupWebsocketConnection to communicate
             * with a remote server.
             *
             * All necessary WebSocket-related headers will be added to `msg,` and
             * it will then be sent and asynchronously processed normally
             * (including handling of redirection and HTTP authentication).
             *
             * If the server returns "101 Switching Protocols", then `msg'`s status
             * code and response headers will be updated, and then the WebSocket
             * handshake will be completed. On success,
             * soup_session_websocket_connect_finish() will return a new
             * #SoupWebsocketConnection. On failure it will return a #GError.
             *
             * If the server returns a status other than "101 Switching
             * Protocols", then `msg` will contain the complete response headers
             * and body from the server's response, and
             * soup_session_websocket_connect_finish() will return
             * %SOUP_WEBSOCKET_ERROR_NOT_WEBSOCKET.
             * @param msg #SoupMessage indicating the WebSocket server to connect to
             * @param origin origin of the connection
             * @param protocols a   %NULL-terminated array of protocols supported
             * @param cancellable a #GCancellable
             * @param callback the callback to invoke
             */
            websocket_connect_async(
                msg: Message,
                origin?: string | null,
                protocols?: string[] | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<WebsocketConnection> | void;
            /**
             * Gets the #SoupWebsocketConnection response to a
             * soup_session_websocket_connect_async() call and (if successful),
             * returns a #SoupWebsocketConnection that can be used to communicate
             * with the server.
             * @param result the #GAsyncResult passed to your callback
             * @returns a new #SoupWebsocketConnection, or   %NULL on error.
             */
            websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection;
            /**
             * Checks if `msg` contains a response that would cause `session` to
             * redirect it to a new URL (ignoring `msg'`s %SOUP_MESSAGE_NO_REDIRECT
             * flag, and the number of times it has already been redirected).
             * @param msg a #SoupMessage that has response headers
             * @returns whether @msg would be redirected
             */
            would_redirect(msg: Message): boolean;
        }

        module SessionAsync {
            // Constructor properties interface

            interface ConstructorProps extends Session.ConstructorProps {}
        }

        class SessionAsync extends Session {
            static $gtype: GObject.GType<SessionAsync>;

            // Constructors

            constructor(properties?: Partial<SessionAsync.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): SessionAsync;
        }

        module SessionSync {
            // Constructor properties interface

            interface ConstructorProps extends Session.ConstructorProps {}
        }

        class SessionSync extends Session {
            static $gtype: GObject.GType<SessionSync>;

            // Constructors

            constructor(properties?: Partial<SessionSync.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): SessionSync;
        }

        module Socket {
            // Signal callback interfaces

            interface Disconnected {
                (): void;
            }

            interface Event {
                (event: Gio.SocketClientEvent, connection: Gio.IOStream): void;
            }

            interface NewConnection {
                (_new: Socket): void;
            }

            interface Readable {
                (): void;
            }

            interface Writable {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                async_context: any;
                asyncContext: any;
                fd: number;
                gsocket: Gio.Socket;
                iostream: Gio.IOStream;
                ipv6_only: boolean;
                ipv6Only: boolean;
                is_server: boolean;
                isServer: boolean;
                local_address: Address;
                localAddress: Address;
                non_blocking: boolean;
                nonBlocking: boolean;
                remote_address: Address;
                remoteAddress: Address;
                ssl_creds: any;
                sslCreds: any;
                ssl_fallback: boolean;
                sslFallback: boolean;
                ssl_strict: boolean;
                sslStrict: boolean;
                timeout: number;
                tls_certificate: Gio.TlsCertificate;
                tlsCertificate: Gio.TlsCertificate;
                tls_errors: Gio.TlsCertificateFlags;
                tlsErrors: Gio.TlsCertificateFlags;
                trusted_certificate: boolean;
                trustedCertificate: boolean;
                use_thread_context: boolean;
                useThreadContext: boolean;
            }
        }

        class Socket extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<Socket>;

            // Properties

            get async_context(): any;
            get asyncContext(): any;
            get fd(): number;
            set gsocket(val: Gio.Socket);
            set iostream(val: Gio.IOStream);
            get ipv6_only(): boolean;
            set ipv6_only(val: boolean);
            get ipv6Only(): boolean;
            set ipv6Only(val: boolean);
            /**
             * Whether or not the socket is a server socket.
             *
             * Note that for "ordinary" #SoupSockets this will be set for
             * both listening sockets and the sockets emitted by
             * #SoupSocket::new-connection, but for sockets created by
             * setting #SoupSocket:fd, it will only be set for listening
             * sockets.
             */
            get is_server(): boolean;
            /**
             * Whether or not the socket is a server socket.
             *
             * Note that for "ordinary" #SoupSockets this will be set for
             * both listening sockets and the sockets emitted by
             * #SoupSocket::new-connection, but for sockets created by
             * setting #SoupSocket:fd, it will only be set for listening
             * sockets.
             */
            get isServer(): boolean;
            get local_address(): Address;
            get localAddress(): Address;
            /**
             * Whether or not the socket uses non-blocking I/O.
             *
             * #SoupSocket's I/O methods are designed around the idea of
             * using a single codepath for both synchronous and
             * asynchronous I/O. If you want to read off a #SoupSocket,
             * the "correct" way to do it is to call soup_socket_read() or
             * soup_socket_read_until() repeatedly until you have read
             * everything you want. If it returns %SOUP_SOCKET_WOULD_BLOCK
             * at any point, stop reading and wait for it to emit the
             * #SoupSocket::readable signal. Then go back to the
             * reading-as-much-as-you-can loop. Likewise, for writing to a
             * #SoupSocket, you should call soup_socket_write() either
             * until you have written everything, or it returns
             * %SOUP_SOCKET_WOULD_BLOCK (in which case you wait for
             * #SoupSocket::writable and then go back into the loop).
             *
             * Code written this way will work correctly with both
             * blocking and non-blocking sockets; blocking sockets will
             * simply never return %SOUP_SOCKET_WOULD_BLOCK, and so the
             * code that handles that case just won't get used for them.
             */
            get non_blocking(): boolean;
            set non_blocking(val: boolean);
            /**
             * Whether or not the socket uses non-blocking I/O.
             *
             * #SoupSocket's I/O methods are designed around the idea of
             * using a single codepath for both synchronous and
             * asynchronous I/O. If you want to read off a #SoupSocket,
             * the "correct" way to do it is to call soup_socket_read() or
             * soup_socket_read_until() repeatedly until you have read
             * everything you want. If it returns %SOUP_SOCKET_WOULD_BLOCK
             * at any point, stop reading and wait for it to emit the
             * #SoupSocket::readable signal. Then go back to the
             * reading-as-much-as-you-can loop. Likewise, for writing to a
             * #SoupSocket, you should call soup_socket_write() either
             * until you have written everything, or it returns
             * %SOUP_SOCKET_WOULD_BLOCK (in which case you wait for
             * #SoupSocket::writable and then go back into the loop).
             *
             * Code written this way will work correctly with both
             * blocking and non-blocking sockets; blocking sockets will
             * simply never return %SOUP_SOCKET_WOULD_BLOCK, and so the
             * code that handles that case just won't get used for them.
             */
            get nonBlocking(): boolean;
            set nonBlocking(val: boolean);
            get remote_address(): Address;
            get remoteAddress(): Address;
            get ssl_creds(): any;
            set ssl_creds(val: any);
            get sslCreds(): any;
            set sslCreds(val: any);
            get ssl_fallback(): boolean;
            get sslFallback(): boolean;
            get ssl_strict(): boolean;
            get sslStrict(): boolean;
            get timeout(): number;
            set timeout(val: number);
            get tls_certificate(): Gio.TlsCertificate;
            get tlsCertificate(): Gio.TlsCertificate;
            get tls_errors(): Gio.TlsCertificateFlags;
            get tlsErrors(): Gio.TlsCertificateFlags;
            get trusted_certificate(): boolean;
            get trustedCertificate(): boolean;
            /**
             * Use g_main_context_get_thread_default().
             */
            get use_thread_context(): boolean;
            /**
             * Use g_main_context_get_thread_default().
             */
            get useThreadContext(): boolean;

            // Constructors

            constructor(properties?: Partial<Socket.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'disconnected', callback: (_source: this) => void): number;
            connect_after(signal: 'disconnected', callback: (_source: this) => void): number;
            emit(signal: 'disconnected'): void;
            connect(
                signal: 'event',
                callback: (_source: this, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void,
            ): number;
            connect_after(
                signal: 'event',
                callback: (_source: this, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void,
            ): number;
            emit(signal: 'event', event: Gio.SocketClientEvent, connection: Gio.IOStream): void;
            connect(signal: 'new-connection', callback: (_source: this, _new: Socket) => void): number;
            connect_after(signal: 'new-connection', callback: (_source: this, _new: Socket) => void): number;
            emit(signal: 'new-connection', _new: Socket): void;
            connect(signal: 'readable', callback: (_source: this) => void): number;
            connect_after(signal: 'readable', callback: (_source: this) => void): number;
            emit(signal: 'readable'): void;
            connect(signal: 'writable', callback: (_source: this) => void): number;
            connect_after(signal: 'writable', callback: (_source: this) => void): number;
            emit(signal: 'writable'): void;

            // Virtual methods

            vfunc_disconnected(): void;
            vfunc_new_connection(new_sock: Socket): void;
            vfunc_readable(): void;
            vfunc_writable(): void;

            // Methods

            /**
             * Begins asynchronously connecting to `sock'`s remote address. The
             * socket will call `callback` when it succeeds or fails (but not
             * before returning from this function).
             *
             * If `cancellable` is non-%NULL, it can be used to cancel the
             * connection. `callback` will still be invoked in this case, with a
             * status of %SOUP_STATUS_CANCELLED.
             * @param cancellable a #GCancellable, or %NULL
             * @param callback callback to call after connecting
             */
            connect_async(cancellable: Gio.Cancellable | null, callback: SocketCallback): void;
            /**
             * Attempt to synchronously connect `sock` to its remote address.
             *
             * If `cancellable` is non-%NULL, it can be used to cancel the
             * connection, in which case soup_socket_connect_sync() will return
             * %SOUP_STATUS_CANCELLED.
             * @param cancellable a #GCancellable, or %NULL
             * @returns a success or failure code.
             */
            connect_sync(cancellable?: Gio.Cancellable | null): number;
            /**
             * Disconnects `sock`. Any further read or write attempts on it will
             * fail.
             */
            disconnect(): void;
            /**
             * Gets `sock'`s underlying file descriptor.
             *
             * Note that fiddling with the file descriptor may break the
             * #SoupSocket.
             * @returns @sock's file descriptor.
             */
            get_fd(): number;
            /**
             * Returns the #SoupAddress corresponding to the local end of `sock`.
             *
             * Calling this method on an unconnected socket is considered to be
             * an error, and produces undefined results.
             * @returns the #SoupAddress
             */
            get_local_address(): Address;
            /**
             * Returns the #SoupAddress corresponding to the remote end of `sock`.
             *
             * Calling this method on an unconnected socket is considered to be
             * an error, and produces undefined results.
             * @returns the #SoupAddress
             */
            get_remote_address(): Address;
            /**
             * Tests if `sock` is connected to another host
             * @returns %TRUE or %FALSE.
             */
            is_connected(): boolean;
            /**
             * Tests if `sock` is doing (or has attempted to do) SSL.
             * @returns %TRUE if @sock has SSL credentials set
             */
            is_ssl(): boolean;
            /**
             * Makes `sock` start listening on its local address. When connections
             * come in, `sock` will emit #SoupSocket::new_connection.
             * @returns whether or not @sock is now listening.
             */
            listen(): boolean;
            /**
             * Attempts to read up to `len` bytes from `sock` into `buffer`. If some
             * data is successfully read, soup_socket_read() will return
             * %SOUP_SOCKET_OK, and *`nread` will contain the number of bytes
             * actually read (which may be less than `len)`.
             *
             * If `sock` is non-blocking, and no data is available, the return
             * value will be %SOUP_SOCKET_WOULD_BLOCK. In this case, the caller
             * can connect to the #SoupSocket::readable signal to know when there
             * is more data to read. (NB: You MUST read all available data off the
             * socket first. #SoupSocket::readable is only emitted after
             * soup_socket_read() returns %SOUP_SOCKET_WOULD_BLOCK, and it is only
             * emitted once. See the documentation for #SoupSocket:non-blocking.)
             * @param buffer buffer to read   into
             * @param cancellable a #GCancellable, or %NULL
             * @returns a #SoupSocketIOStatus, as described above (or %SOUP_SOCKET_EOF if the socket is no longer connected, or %SOUP_SOCKET_ERROR on any other error, in which case @error will also be set).
             */
            read(buffer: Uint8Array | string, cancellable?: Gio.Cancellable | null): [SocketIOStatus, number];
            /**
             * Like soup_socket_read(), but reads no further than the first
             * occurrence of `boundary`. (If the boundary is found, it will be
             * included in the returned data, and *`got_boundary` will be set to
             * %TRUE.) Any data after the boundary will returned in future reads.
             *
             * soup_socket_read_until() will almost always return fewer than `len`
             * bytes: if the boundary is found, then it will only return the bytes
             * up until the end of the boundary, and if the boundary is not found,
             * then it will leave the last <literal>(boundary_len - 1)</literal>
             * bytes in its internal buffer, in case they form the start of the
             * boundary string. Thus, `len` normally needs to be at least 1 byte
             * longer than `boundary_len` if you want to make any progress at all.
             * @param buffer buffer to read   into
             * @param boundary boundary to read until
             * @param boundary_len length of @boundary in bytes
             * @param cancellable a #GCancellable, or %NULL
             * @returns as for soup_socket_read()
             */
            read_until(
                buffer: Uint8Array | string,
                boundary: any | null,
                boundary_len: number,
                cancellable?: Gio.Cancellable | null,
            ): [SocketIOStatus, number, boolean];
            /**
             * Starts using SSL on `socket,` expecting to find a host named
             * `ssl_host`.
             * @param ssl_host hostname of the SSL server
             * @param cancellable a #GCancellable
             * @returns success or failure
             */
            start_proxy_ssl(ssl_host: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Starts using SSL on `socket`.
             * @param cancellable a #GCancellable
             * @returns success or failure
             */
            start_ssl(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Attempts to write `len` bytes from `buffer` to `sock`. If some data is
             * successfully written, the return status will be %SOUP_SOCKET_OK,
             * and *`nwrote` will contain the number of bytes actually written
             * (which may be less than `len)`.
             *
             * If `sock` is non-blocking, and no data could be written right away,
             * the return value will be %SOUP_SOCKET_WOULD_BLOCK. In this case,
             * the caller can connect to the #SoupSocket::writable signal to know
             * when more data can be written. (NB: #SoupSocket::writable is only
             * emitted after soup_socket_write() returns %SOUP_SOCKET_WOULD_BLOCK,
             * and it is only emitted once. See the documentation for
             * #SoupSocket:non-blocking.)
             * @param buffer data to write
             * @param cancellable a #GCancellable, or %NULL
             * @returns a #SoupSocketIOStatus, as described above (or %SOUP_SOCKET_EOF or %SOUP_SOCKET_ERROR. @error will be set if the return value is %SOUP_SOCKET_ERROR.)
             */
            write(buffer: Uint8Array | string, cancellable?: Gio.Cancellable | null): [SocketIOStatus, number];

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
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module WebsocketConnection {
            // Signal callback interfaces

            interface Closed {
                (): void;
            }

            interface Closing {
                (): void;
            }

            interface Error {
                (error: GLib.Error): void;
            }

            interface Message {
                (type: number, message: GLib.Bytes | Uint8Array): void;
            }

            interface Pong {
                (message: GLib.Bytes | Uint8Array): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                connection_type: WebsocketConnectionType;
                connectionType: WebsocketConnectionType;
                extensions: any;
                io_stream: Gio.IOStream;
                ioStream: Gio.IOStream;
                keepalive_interval: number;
                keepaliveInterval: number;
                max_incoming_payload_size: number;
                maxIncomingPayloadSize: number;
                origin: string;
                protocol: string;
                state: WebsocketState;
                uri: URI;
            }
        }

        /**
         * A class representing a WebSocket connection.
         */
        class WebsocketConnection extends GObject.Object {
            static $gtype: GObject.GType<WebsocketConnection>;

            // Properties

            /**
             * The type of connection (client/server).
             */
            get connection_type(): WebsocketConnectionType;
            /**
             * The type of connection (client/server).
             */
            get connectionType(): WebsocketConnectionType;
            /**
             * List of #SoupWebsocketExtension objects that are active in the connection.
             */
            get extensions(): any;
            /**
             * The underlying IO stream the WebSocket is communicating
             * over.
             *
             * The input and output streams must be pollable streams.
             */
            get io_stream(): Gio.IOStream;
            /**
             * The underlying IO stream the WebSocket is communicating
             * over.
             *
             * The input and output streams must be pollable streams.
             */
            get ioStream(): Gio.IOStream;
            /**
             * Interval in seconds on when to send a ping message which will
             * serve as a keepalive message. If set to 0 the keepalive message is
             * disabled.
             */
            get keepalive_interval(): number;
            set keepalive_interval(val: number);
            /**
             * Interval in seconds on when to send a ping message which will
             * serve as a keepalive message. If set to 0 the keepalive message is
             * disabled.
             */
            get keepaliveInterval(): number;
            set keepaliveInterval(val: number);
            /**
             * The maximum payload size for incoming packets the protocol expects
             * or 0 to not limit it.
             */
            get max_incoming_payload_size(): number;
            set max_incoming_payload_size(val: number);
            /**
             * The maximum payload size for incoming packets the protocol expects
             * or 0 to not limit it.
             */
            get maxIncomingPayloadSize(): number;
            set maxIncomingPayloadSize(val: number);
            /**
             * The client's Origin.
             */
            get origin(): string;
            /**
             * The chosen protocol, or %NULL if a protocol was not agreed
             * upon.
             */
            get protocol(): string;
            /**
             * The current state of the WebSocket.
             */
            get state(): WebsocketState;
            /**
             * The URI of the WebSocket.
             *
             * For servers this represents the address of the WebSocket,
             * and for clients it is the address connected to.
             */
            get uri(): URI;

            // Constructors

            constructor(properties?: Partial<WebsocketConnection.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                stream: Gio.IOStream,
                uri: URI,
                type: WebsocketConnectionType,
                origin?: string | null,
                protocol?: string | null,
            ): WebsocketConnection;

            static new_with_extensions(
                stream: Gio.IOStream,
                uri: URI,
                type: WebsocketConnectionType,
                origin: string | null,
                protocol: string | null,
                extensions: WebsocketExtension[],
            ): WebsocketConnection;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'closed', callback: (_source: this) => void): number;
            connect_after(signal: 'closed', callback: (_source: this) => void): number;
            emit(signal: 'closed'): void;
            connect(signal: 'closing', callback: (_source: this) => void): number;
            connect_after(signal: 'closing', callback: (_source: this) => void): number;
            emit(signal: 'closing'): void;
            connect(signal: 'error', callback: (_source: this, error: GLib.Error) => void): number;
            connect_after(signal: 'error', callback: (_source: this, error: GLib.Error) => void): number;
            emit(signal: 'error', error: GLib.Error): void;
            connect(signal: 'message', callback: (_source: this, type: number, message: GLib.Bytes) => void): number;
            connect_after(
                signal: 'message',
                callback: (_source: this, type: number, message: GLib.Bytes) => void,
            ): number;
            emit(signal: 'message', type: number, message: GLib.Bytes | Uint8Array): void;
            connect(signal: 'pong', callback: (_source: this, message: GLib.Bytes) => void): number;
            connect_after(signal: 'pong', callback: (_source: this, message: GLib.Bytes) => void): number;
            emit(signal: 'pong', message: GLib.Bytes | Uint8Array): void;

            // Virtual methods

            vfunc_closed(): void;
            vfunc_closing(): void;
            vfunc_error(error: GLib.Error): void;
            vfunc_message(type: WebsocketDataType, message: GLib.Bytes | Uint8Array): void;
            vfunc_pong(message: GLib.Bytes | Uint8Array): void;

            // Methods

            /**
             * Close the connection in an orderly fashion.
             *
             * Note that until the #SoupWebsocketConnection::closed signal fires, the connection
             * is not yet completely closed. The close message is not even sent until the
             * main loop runs.
             *
             * The `code` and `data` are sent to the peer along with the close request.
             * If `code` is %SOUP_WEBSOCKET_CLOSE_NO_STATUS a close message with no body
             * (without code and data) is sent.
             * Note that the `data` must be UTF-8 valid.
             * @param code close code
             * @param data close data
             */
            close(code: number, data?: string | null): void;
            /**
             * Get the close code received from the WebSocket peer.
             *
             * This only becomes valid once the WebSocket is in the
             * %SOUP_WEBSOCKET_STATE_CLOSED state. The value will often be in the
             * #SoupWebsocketCloseCode enumeration, but may also be an application
             * defined close code.
             * @returns the close code or zero.
             */
            get_close_code(): number;
            /**
             * Get the close data received from the WebSocket peer.
             *
             * This only becomes valid once the WebSocket is in the
             * %SOUP_WEBSOCKET_STATE_CLOSED state. The data may be freed once
             * the main loop is run, so copy it if you need to keep it around.
             * @returns the close data or %NULL
             */
            get_close_data(): string;
            /**
             * Get the connection type (client/server) of the connection.
             * @returns the connection type
             */
            get_connection_type(): WebsocketConnectionType;
            /**
             * Get the extensions chosen via negotiation with the peer.
             * @returns a #GList of #SoupWebsocketExtension objects
             */
            get_extensions(): WebsocketExtension[];
            /**
             * Get the I/O stream the WebSocket is communicating over.
             * @returns the WebSocket's I/O stream.
             */
            get_io_stream(): Gio.IOStream;
            /**
             * Gets the keepalive interval in seconds or 0 if disabled.
             * @returns the keepalive interval.
             */
            get_keepalive_interval(): number;
            /**
             * Gets the maximum payload size allowed for incoming packets.
             * @returns the maximum payload size.
             */
            get_max_incoming_payload_size(): number;
            /**
             * Get the origin of the WebSocket.
             * @returns the origin, or %NULL
             */
            get_origin(): string | null;
            /**
             * Get the protocol chosen via negotiation with the peer.
             * @returns the chosen protocol, or %NULL
             */
            get_protocol(): string | null;
            /**
             * Get the current state of the WebSocket.
             * @returns the state
             */
            get_state(): WebsocketState;
            /**
             * Get the URI of the WebSocket.
             *
             * For servers this represents the address of the WebSocket, and
             * for clients it is the address connected to.
             * @returns the URI
             */
            get_uri(): URI;
            /**
             * Send a binary message to the peer. If `length` is 0, `data` may be %NULL.
             *
             * The message is queued to be sent and will be sent when the main loop
             * is run.
             * @param data the message contents
             */
            send_binary(data?: Uint8Array | null): void;
            /**
             * Send a message of the given `type` to the peer. Note that this method,
             * allows to send text messages containing %NULL characters.
             *
             * The message is queued to be sent and will be sent when the main loop
             * is run.
             * @param type the type of message contents
             * @param message the message data as #GBytes
             */
            send_message(type: WebsocketDataType | null, message: GLib.Bytes | Uint8Array): void;
            /**
             * Send a %NULL-terminated text (UTF-8) message to the peer. If you need
             * to send text messages containing %NULL characters use
             * soup_websocket_connection_send_message() instead.
             *
             * The message is queued to be sent and will be sent when the main loop
             * is run.
             * @param text the message contents
             */
            send_text(text: string): void;
            /**
             * Sets the interval in seconds on when to send a ping message which will serve
             * as a keepalive message. If set to 0 the keepalive message is disabled.
             * @param interval the interval to send a ping message or 0 to disable it
             */
            set_keepalive_interval(interval: number): void;
            /**
             * Sets the maximum payload size allowed for incoming packets. It
             * does not limit the outgoing packet size.
             * @param max_incoming_payload_size the maximum payload size
             */
            set_max_incoming_payload_size(max_incoming_payload_size: number): void;
        }

        module WebsocketExtension {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        abstract class WebsocketExtension extends GObject.Object {
            static $gtype: GObject.GType<WebsocketExtension>;

            // Constructors

            constructor(properties?: Partial<WebsocketExtension.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Configures `extension` with the given `params`
             * @param connection_type either %SOUP_WEBSOCKET_CONNECTION_CLIENT or %SOUP_WEBSOCKET_CONNECTION_SERVER
             * @param params the parameters, or %NULL
             */
            vfunc_configure(
                connection_type: WebsocketConnectionType,
                params?: GLib.HashTable<any, any> | null,
            ): boolean;
            /**
             * Get the parameters strings to be included in the request header. If the extension
             * doesn't include any parameter in the request, this function returns %NULL.
             */
            vfunc_get_request_params(): string | null;
            /**
             * Get the parameters strings to be included in the response header. If the extension
             * doesn't include any parameter in the response, this function returns %NULL.
             */
            vfunc_get_response_params(): string | null;
            /**
             * Process a message after it's received. If the payload isn't changed the given
             * `payload` is just returned, otherwise g_bytes_unref() is called on the given
             * `payload` and a new #GBytes is returned with the new data.
             *
             * Extensions using reserved bits of the header will reset them in `header`.
             * @param header the message header
             * @param payload the payload data
             */
            vfunc_process_incoming_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];
            /**
             * Process a message before it's sent. If the payload isn't changed the given
             * `payload` is just returned, otherwise g_bytes_unref() is called on the given
             * `payload` and a new #GBytes is returned with the new data.
             *
             * Extensions using reserved bits of the header will change them in `header`.
             * @param header the message header
             * @param payload the payload data
             */
            vfunc_process_outgoing_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];

            // Methods

            /**
             * Configures `extension` with the given `params`
             * @param connection_type either %SOUP_WEBSOCKET_CONNECTION_CLIENT or %SOUP_WEBSOCKET_CONNECTION_SERVER
             * @param params the parameters, or %NULL
             * @returns %TRUE if extension could be configured with the given parameters, or %FALSE otherwise
             */
            configure(
                connection_type: WebsocketConnectionType | null,
                params?: GLib.HashTable<any, any> | null,
            ): boolean;
            /**
             * Get the parameters strings to be included in the request header. If the extension
             * doesn't include any parameter in the request, this function returns %NULL.
             * @returns a new allocated string with the parameters
             */
            get_request_params(): string | null;
            /**
             * Get the parameters strings to be included in the response header. If the extension
             * doesn't include any parameter in the response, this function returns %NULL.
             * @returns a new allocated string with the parameters
             */
            get_response_params(): string | null;
            /**
             * Process a message after it's received. If the payload isn't changed the given
             * `payload` is just returned, otherwise g_bytes_unref() is called on the given
             * `payload` and a new #GBytes is returned with the new data.
             *
             * Extensions using reserved bits of the header will reset them in `header`.
             * @param header the message header
             * @param payload the payload data
             * @returns the message payload data, or %NULL in case of error
             */
            process_incoming_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];
            /**
             * Process a message before it's sent. If the payload isn't changed the given
             * `payload` is just returned, otherwise g_bytes_unref() is called on the given
             * `payload` and a new #GBytes is returned with the new data.
             *
             * Extensions using reserved bits of the header will change them in `header`.
             * @param header the message header
             * @param payload the payload data
             * @returns the message payload data, or %NULL in case of error
             */
            process_outgoing_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];
        }

        module WebsocketExtensionDeflate {
            // Constructor properties interface

            interface ConstructorProps extends WebsocketExtension.ConstructorProps {}
        }

        class WebsocketExtensionDeflate extends WebsocketExtension {
            static $gtype: GObject.GType<WebsocketExtensionDeflate>;

            // Constructors

            constructor(properties?: Partial<WebsocketExtensionDeflate.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module WebsocketExtensionManager {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {}
        }

        class WebsocketExtensionManager extends GObject.Object implements SessionFeature {
            static $gtype: GObject.GType<WebsocketExtensionManager>;

            // Constructors

            constructor(properties?: Partial<WebsocketExtensionManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Inherited methods
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            attach(session: Session): void;
            detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;
            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
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

        type AddressClass = typeof Address;
        type AuthClass = typeof Auth;
        type AuthDomainBasicClass = typeof AuthDomainBasic;
        type AuthDomainClass = typeof AuthDomain;
        type AuthDomainDigestClass = typeof AuthDomainDigest;
        type AuthManagerClass = typeof AuthManager;
        abstract class AuthManagerPrivate {
            static $gtype: GObject.GType<AuthManagerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A data buffer, generally used to represent a chunk of a
         * #SoupMessageBody.
         *
         * `data` is a #char because that's generally convenient; in some
         * situations you may need to cast it to #guchar or another type.
         */
        class Buffer {
            static $gtype: GObject.GType<Buffer>;

            // Fields

            data: any;
            length: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    data: any;
                    length: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](use: MemoryUse, data: Uint8Array | string): Buffer;

            static ['new'](data: Uint8Array | string): Buffer;

            static new_with_owner(
                data: Uint8Array | string,
                owner?: any | null,
                owner_dnotify?: GLib.DestroyNotify | null,
            ): Buffer;

            // Methods

            /**
             * Makes a copy of `buffer`. In reality, #SoupBuffer is a refcounted
             * type, and calling soup_buffer_copy() will normally just increment
             * the refcount on `buffer` and return it. However, if `buffer` was
             * created with #SOUP_MEMORY_TEMPORARY memory, then soup_buffer_copy()
             * will actually return a copy of it, so that the data in the copy
             * will remain valid after the temporary buffer is freed.
             * @returns the new (or newly-reffed) buffer
             */
            copy(): Buffer;
            /**
             * Frees `buffer`. (In reality, as described in the documentation for
             * soup_buffer_copy(), this is actually an "unref" operation, and may
             * or may not actually free `buffer`.)
             */
            free(): void;
            /**
             * Creates a #GBytes pointing to the same memory as `buffer`. The
             * #GBytes will hold a reference on `buffer` to ensure that it is not
             * freed while the #GBytes is still valid.
             * @returns a new #GBytes which has the same content as the #SoupBuffer.
             */
            get_as_bytes(): GLib.Bytes;
            /**
             * This function exists for use by language bindings, because it's not
             * currently possible to get the right effect by annotating the fields
             * of #SoupBuffer.
             */
            get_data(): Uint8Array;
            /**
             * Gets the "owner" object for a buffer created with
             * soup_buffer_new_with_owner().
             * @returns the owner pointer
             */
            get_owner(): any | null;
            /**
             * Creates a new #SoupBuffer containing `length` bytes "copied" from
             * `parent` starting at `offset`. (Normally this will not actually copy
             * any data, but will instead simply reference the same data as
             * `parent` does.)
             * @param offset offset within @parent to start at
             * @param length number of bytes to copy from @parent
             * @returns the new #SoupBuffer.
             */
            new_subbuffer(offset: number, length: number): Buffer;
        }

        type CacheClass = typeof Cache;
        abstract class CachePrivate {
            static $gtype: GObject.GType<CachePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A #SoupClientContext provides additional information about the
         * client making a particular request. In particular, you can use
         * soup_client_context_get_auth_domain() and
         * soup_client_context_get_auth_user() to determine if HTTP
         * authentication was used successfully.
         *
         * soup_client_context_get_remote_address() and/or
         * soup_client_context_get_host() can be used to get information for
         * logging or debugging purposes. soup_client_context_get_gsocket() may
         * also be of use in some situations (eg, tracking when multiple
         * requests are made on the same connection).
         */
        class ClientContext {
            static $gtype: GObject.GType<ClientContext>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Retrieves the #SoupAddress associated with the remote end
             * of a connection.
             * @returns the #SoupAddress associated with the remote end of a connection, it may be %NULL if you used soup_server_accept_iostream().
             */
            get_address(): Address | null;
            /**
             * Checks whether the request associated with `client` has been
             * authenticated, and if so returns the #SoupAuthDomain that
             * authenticated it.
             * @returns a #SoupAuthDomain, or %NULL if the request was not authenticated.
             */
            get_auth_domain(): AuthDomain | null;
            /**
             * Checks whether the request associated with `client` has been
             * authenticated, and if so returns the username that the client
             * authenticated as.
             * @returns the authenticated-as user, or %NULL if the request was not authenticated.
             */
            get_auth_user(): string | null;
            /**
             * Retrieves the #GSocket that `client` is associated with.
             *
             * If you are using this method to observe when multiple requests are
             * made on the same persistent HTTP connection (eg, as the ntlm-test
             * test program does), you will need to pay attention to socket
             * destruction as well (eg, by using weak references), so that you do
             * not get fooled when the allocator reuses the memory address of a
             * previously-destroyed socket to represent a new socket.
             * @returns the #GSocket that @client is associated with, %NULL if you used soup_server_accept_iostream().
             */
            get_gsocket(): Gio.Socket | null;
            /**
             * Retrieves the IP address associated with the remote end of a
             * connection.
             * @returns the IP address associated with the remote end of a connection, it may be %NULL if you used soup_server_accept_iostream().
             */
            get_host(): string | null;
            /**
             * Retrieves the #GSocketAddress associated with the local end
             * of a connection.
             * @returns the #GSocketAddress associated with the local end of a connection, it may be %NULL if you used soup_server_accept_iostream().
             */
            get_local_address(): Gio.SocketAddress | null;
            /**
             * Retrieves the #GSocketAddress associated with the remote end
             * of a connection.
             * @returns the #GSocketAddress associated with the remote end of a connection, it may be %NULL if you used soup_server_accept_iostream().
             */
            get_remote_address(): Gio.SocketAddress | null;
            /**
             * Retrieves the #SoupSocket that `client` is associated with.
             *
             * If you are using this method to observe when multiple requests are
             * made on the same persistent HTTP connection (eg, as the ntlm-test
             * test program does), you will need to pay attention to socket
             * destruction as well (either by using weak references, or by
             * connecting to the #SoupSocket::disconnected signal), so that you do
             * not get fooled when the allocator reuses the memory address of a
             * previously-destroyed socket to represent a new socket.
             * @returns the #SoupSocket that @client is associated with.
             */
            get_socket(): Socket;
            /**
             * "Steals" the HTTP connection associated with `client` from its
             * #SoupServer. This happens immediately, regardless of the current
             * state of the connection; if the response to the current
             * #SoupMessage has not yet finished being sent, then it will be
             * discarded; you can steal the connection from a
             * #SoupMessage:wrote-informational or #SoupMessage:wrote-body signal
             * handler if you need to wait for part or all of the response to be
             * sent.
             *
             * Note that when calling this function from C, `client` will most
             * likely be freed as a side effect.
             * @returns the #GIOStream formerly associated   with @client (or %NULL if @client was no longer associated with a   connection). No guarantees are made about what kind of #GIOStream   is returned.
             */
            steal_connection(): Gio.IOStream;
        }

        abstract class Connection {
            static $gtype: GObject.GType<Connection>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ContentDecoderClass = typeof ContentDecoder;
        abstract class ContentDecoderPrivate {
            static $gtype: GObject.GType<ContentDecoderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ContentSnifferClass = typeof ContentSniffer;
        abstract class ContentSnifferPrivate {
            static $gtype: GObject.GType<ContentSnifferPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * An HTTP cookie.
         *
         * `name` and `value` will be set for all cookies. If the cookie is
         * generated from a string that appears to have no name, then `name`
         * will be the empty string.
         *
         * `domain` and `path` give the host or domain, and path within that
         * host/domain, to restrict this cookie to. If `domain` starts with
         * ".", that indicates a domain (which matches the string after the
         * ".", or any hostname that has `domain` as a suffix). Otherwise, it
         * is a hostname and must match exactly.
         *
         * `expires` will be non-%NULL if the cookie uses either the original
         * "expires" attribute, or the newer "max-age" attribute. If `expires`
         * is %NULL, it indicates that neither "expires" nor "max-age" was
         * specified, and the cookie expires at the end of the session.
         *
         * If `http_only` is set, the cookie should not be exposed to untrusted
         * code (eg, javascript), so as to minimize the danger posed by
         * cross-site scripting attacks.
         */
        class Cookie {
            static $gtype: GObject.GType<Cookie>;

            // Fields

            name: string;
            value: string;
            domain: string;
            path: string;
            expires: Date;
            secure: boolean;
            http_only: boolean;

            // Constructors

            constructor(
                properties?: Partial<{
                    name: string;
                    value: string;
                    domain: string;
                    path: string;
                    secure: boolean;
                    http_only: boolean;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](name: string, value: string, domain: string, path: string, max_age: number): Cookie;

            // Static methods

            /**
             * Parses `header` and returns a #SoupCookie. (If `header` contains
             * multiple cookies, only the first one will be parsed.)
             *
             * If `header` does not have "path" or "domain" attributes, they will
             * be defaulted from `origin`. If `origin` is %NULL, path will default
             * to "/", but domain will be left as %NULL. Note that this is not a
             * valid state for a #SoupCookie, and you will need to fill in some
             * appropriate string for the domain if you want to actually make use
             * of the cookie.
             * @param header a cookie string (eg, the value of a Set-Cookie header)
             * @param origin origin of the cookie, or %NULL
             */
            static parse(header: string, origin: URI): Cookie | null;

            // Methods

            /**
             * Tests if `cookie` should be sent to `uri`.
             *
             * (At the moment, this does not check that `cookie'`s domain matches
             * `uri,` because it assumes that the caller has already done that.
             * But don't rely on that; it may change in the future.)
             * @param uri a #SoupURI
             * @returns %TRUE if @cookie should be sent to @uri, %FALSE if not
             */
            applies_to_uri(uri: URI): boolean;
            /**
             * Copies `cookie`.
             * @returns a copy of @cookie
             */
            copy(): Cookie;
            /**
             * Checks if the `cookie'`s domain and `host` match in the sense that
             * `cookie` should be sent when making a request to `host,` or that
             * `cookie` should be accepted when receiving a response from `host`.
             * @param host a URI
             * @returns %TRUE if the domains match, %FALSE otherwise
             */
            domain_matches(host: string): boolean;
            /**
             * Tests if `cookie1` and `cookie2` are equal.
             *
             * Note that currently, this does not check that the cookie domains
             * match. This may change in the future.
             * @param cookie2 a #SoupCookie
             * @returns whether the cookies are equal.
             */
            equal(cookie2: Cookie): boolean;
            /**
             * Frees `cookie`
             */
            free(): void;
            /**
             * Gets `cookie'`s domain
             * @returns @cookie's domain
             */
            get_domain(): string;
            /**
             * Gets `cookie'`s expiration time.
             * @returns @cookie's expiration time, which is owned by @cookie and should not be modified or freed.
             */
            get_expires(): Date | null;
            /**
             * Gets `cookie'`s HttpOnly attribute
             * @returns @cookie's HttpOnly attribute
             */
            get_http_only(): boolean;
            /**
             * Gets `cookie'`s name
             * @returns @cookie's name
             */
            get_name(): string;
            /**
             * Gets `cookie'`s path
             * @returns @cookie's path
             */
            get_path(): string;
            get_same_site_policy(): SameSitePolicy;
            /**
             * Gets `cookie'`s secure attribute
             * @returns @cookie's secure attribute
             */
            get_secure(): boolean;
            /**
             * Gets `cookie'`s value
             * @returns @cookie's value
             */
            get_value(): string;
            /**
             * Sets `cookie'`s domain to `domain`
             * @param domain the new domain
             */
            set_domain(domain: string): void;
            /**
             * Sets `cookie'`s expiration time to `expires`. If `expires` is %NULL,
             * `cookie` will be a session cookie and will expire at the end of the
             * client's session.
             *
             * (This sets the same property as soup_cookie_set_max_age().)
             * @param expires the new expiration time, or %NULL
             */
            set_expires(expires: Date): void;
            /**
             * Sets `cookie'`s HttpOnly attribute to `http_only`. If %TRUE, `cookie`
             * will be marked as "http only", meaning it should not be exposed to
             * web page scripts or other untrusted code.
             * @param http_only the new value for the HttpOnly attribute
             */
            set_http_only(http_only: boolean): void;
            /**
             * Sets `cookie'`s max age to `max_age`. If `max_age` is -1, the cookie
             * is a session cookie, and will expire at the end of the client's
             * session. Otherwise, it is the number of seconds until the cookie
             * expires. You can use the constants %SOUP_COOKIE_MAX_AGE_ONE_HOUR,
             * %SOUP_COOKIE_MAX_AGE_ONE_DAY, %SOUP_COOKIE_MAX_AGE_ONE_WEEK and
             * %SOUP_COOKIE_MAX_AGE_ONE_YEAR (or multiples thereof) to calculate
             * this value. (A value of 0 indicates that the cookie should be
             * considered already-expired.)
             *
             * (This sets the same property as soup_cookie_set_expires().)
             * @param max_age the new max age
             */
            set_max_age(max_age: number): void;
            /**
             * Sets `cookie'`s name to `name`
             * @param name the new name
             */
            set_name(name: string): void;
            /**
             * Sets `cookie'`s path to `path`
             * @param path the new path
             */
            set_path(path: string): void;
            /**
             * When used in conjunction with soup_cookie_jar_get_cookie_list_with_same_site_info() this
             * sets the policy of when this cookie should be exposed.
             * @param policy a #SoupSameSitePolicy
             */
            set_same_site_policy(policy: SameSitePolicy | null): void;
            /**
             * Sets `cookie'`s secure attribute to `secure`. If %TRUE, `cookie` will
             * only be transmitted from the client to the server over secure
             * (https) connections.
             * @param secure the new value for the secure attribute
             */
            set_secure(secure: boolean): void;
            /**
             * Sets `cookie'`s value to `value`
             * @param value the new value
             */
            set_value(value: string): void;
            /**
             * Serializes `cookie` in the format used by the Cookie header (ie, for
             * returning a cookie from a #SoupSession to a server).
             * @returns the header
             */
            to_cookie_header(): string;
            /**
             * Serializes `cookie` in the format used by the Set-Cookie header
             * (ie, for sending a cookie from a #SoupServer to a client).
             * @returns the header
             */
            to_set_cookie_header(): string;
        }

        type CookieJarClass = typeof CookieJar;
        type CookieJarDBClass = typeof CookieJarDB;
        type CookieJarTextClass = typeof CookieJarText;
        /**
         * A date and time. The date is assumed to be in the (proleptic)
         * Gregorian calendar. The time is in UTC if `utc` is %TRUE. Otherwise,
         * the time is a local time, and `offset` gives the offset from UTC in
         * minutes (such that adding `offset` to the time would give the
         * correct UTC time). If `utc` is %FALSE and `offset` is 0, then the
         * %SoupDate represents a "floating" time with no associated timezone
         * information.
         */
        class Date {
            static $gtype: GObject.GType<Date>;

            // Fields

            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            second: number;
            utc: boolean;
            offset: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    year: number;
                    month: number;
                    day: number;
                    hour: number;
                    minute: number;
                    second: number;
                    utc: boolean;
                    offset: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](
                year: number,
                month: number,
                day: number,
                hour: number,
                minute: number,
                second: number,
            ): Date;

            static new_from_now(offset_seconds: number): Date;

            static new_from_string(date_string: string): Date;

            static new_from_time_t(when: number): Date;

            // Methods

            /**
             * Copies `date`.
             */
            copy(): Date;
            /**
             * Frees `date`.
             */
            free(): void;
            /**
             * Gets `date'`s day.
             * @returns @date's day
             */
            get_day(): number;
            /**
             * Gets `date'`s hour.
             * @returns @date's hour
             */
            get_hour(): number;
            /**
             * Gets `date'`s minute.
             * @returns @date's minute
             */
            get_minute(): number;
            /**
             * Gets `date'`s month.
             * @returns @date's month
             */
            get_month(): number;
            /**
             * Gets `date'`s offset from UTC.
             * @returns @date's offset from UTC. If soup_date_get_utc() returns %FALSE but soup_date_get_offset() returns 0, that means the date is a "floating" time with no associated offset information.
             */
            get_offset(): number;
            /**
             * Gets `date'`s second.
             * @returns @date's second
             */
            get_second(): number;
            /**
             * Gets `date'`s UTC flag
             * @returns %TRUE if @date is UTC.
             */
            get_utc(): number;
            /**
             * Gets `date'`s year.
             * @returns @date's year
             */
            get_year(): number;
            /**
             * Determines if `date` is in the past.
             * @returns %TRUE if @date is in the past
             */
            is_past(): boolean;
            /**
             * Converts `date` to a string in the format described by `format`.
             * @param format the format to generate the date in
             * @returns @date as a string
             */
            to_string(format: DateFormat | null): string;
            /**
             * Converts `date` to a <type>time_t</type>, assumming it to be in
             * UTC.
             *
             * If `date` is not representable as a <type>time_t</type>, it will be
             * clamped into range. (In particular, some HTTP cookies have
             * expiration dates after "Y2.038k" (2038-01-19T03:14:07Z).)
             * @returns @date as a <type>time_t</type>
             */
            to_time_t(): number;
            /**
             * Converts `date` to a #GTimeVal.
             */
            to_timeval(): GLib.TimeVal;
        }

        type HSTSEnforcerClass = typeof HSTSEnforcer;
        type HSTSEnforcerDBClass = typeof HSTSEnforcerDB;
        abstract class HSTSEnforcerDBPrivate {
            static $gtype: GObject.GType<HSTSEnforcerDBPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class HSTSEnforcerPrivate {
            static $gtype: GObject.GType<HSTSEnforcerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * An HTTP Strict Transport Security policy.
         *
         * `domain` represents the host that this policy applies to. The domain
         * must be IDNA-canonicalized. soup_hsts_policy_new() and related methods
         * will do this for you.
         *
         * `max_age` contains the 'max-age' value from the Strict Transport
         * Security header and indicates the time to live of this policy,
         * in seconds.
         *
         * `expires` will be non-%NULL if the policy has been set by the host and
         * hence has an expiry time. If `expires` is %NULL, it indicates that the
         * policy is a permanent session policy set by the user agent.
         *
         * If `include_subdomains` is %TRUE, the Strict Transport Security policy
         * must also be enforced on subdomains of `domain`.
         */
        class HSTSPolicy {
            static $gtype: GObject.GType<HSTSPolicy>;

            // Fields

            domain: string;
            max_age: number;
            expires: Date;
            include_subdomains: boolean;

            // Constructors

            constructor(
                properties?: Partial<{
                    domain: string;
                    max_age: number;
                    include_subdomains: boolean;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](domain: string, max_age: number, include_subdomains: boolean): HSTSPolicy;

            static new_from_response(msg: Message): HSTSPolicy;

            static new_full(domain: string, max_age: number, expires: Date, include_subdomains: boolean): HSTSPolicy;

            static new_session_policy(domain: string, include_subdomains: boolean): HSTSPolicy;

            // Methods

            /**
             * Copies `policy`.
             * @returns a copy of @policy
             */
            copy(): HSTSPolicy;
            /**
             * Tests if `policy1` and `policy2` are equal.
             * @param policy2 a #SoupHSTSPolicy
             * @returns whether the policies are equal.
             */
            equal(policy2: HSTSPolicy): boolean;
            /**
             * Frees `policy`.
             */
            free(): void;
            /**
             * Gets `policy'`s domain.
             * @returns @policy's domain.
             */
            get_domain(): string;
            /**
             * Gets whether `policy` include its subdomains.
             * @returns %TRUE if @policy includes subdomains, %FALSE otherwise.
             */
            includes_subdomains(): boolean;
            /**
             * Gets whether `policy` is expired. Permanent policies never
             * expire.
             * @returns %TRUE if @policy is expired, %FALSE otherwise.
             */
            is_expired(): boolean;
            /**
             * Gets whether `policy` is a non-permanent, non-expirable session policy.
             * see soup_hsts_policy_new_session_policy() for details.
             * @returns %TRUE if @policy is permanent, %FALSE otherwise
             */
            is_session_policy(): boolean;
        }

        type LoggerClass = typeof Logger;
        /**
         * A #SoupMessage request or response body.
         *
         * Note that while `length` always reflects the full length of the
         * message body, `data` is normally %NULL, and will only be filled in
         * after soup_message_body_flatten() is called. For client-side
         * messages, this automatically happens for the response body after it
         * has been fully read, unless you set the
         * %SOUP_MESSAGE_OVERWRITE_CHUNKS flags. Likewise, for server-side
         * messages, the request body is automatically filled in after being
         * read.
         *
         * As an added bonus, when `data` is filled in, it is always terminated
         * with a '\0' byte (which is not reflected in `length)`.
         */
        class MessageBody {
            static $gtype: GObject.GType<MessageBody>;

            // Fields

            data: string;
            length: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    data: string;
                    length: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): MessageBody;

            // Methods

            /**
             * Appends `length` bytes from `data` to `body` according to `use`.
             * @param use how to use @data
             * @param data data to append
             */
            append(use: MemoryUse | null, data: Uint8Array | string): void;
            /**
             * Appends the data from `buffer` to `body`. (#SoupMessageBody uses
             * #SoupBuffers internally, so this is normally a constant-time
             * operation that doesn't actually require copying the data in
             * `buffer`.)
             * @param buffer a #SoupBuffer
             */
            append_buffer(buffer: Buffer): void;
            /**
             * Appends `length` bytes from `data` to `body`.
             *
             * This function is exactly equivalent to soup_message_body_append()
             * with %SOUP_MEMORY_TAKE as second argument; it exists mainly for
             * convenience and simplifying language bindings.
             * @param data data to append
             */
            append(data: Uint8Array | string): void;
            /**
             * Tags `body` as being complete; Call this when using chunked encoding
             * after you have appended the last chunk.
             */
            complete(): void;
            /**
             * Fills in `body'`s data field with a buffer containing all of the
             * data in `body` (plus an additional '\0' byte not counted by `body'`s
             * length field).
             * @returns a #SoupBuffer containing the same data as @body. (You must free this buffer if you do not want it.)
             */
            flatten(): Buffer;
            /**
             * Frees `body`. You will not normally need to use this, as
             * #SoupMessage frees its associated message bodies automatically.
             */
            free(): void;
            /**
             * Gets the accumulate flag on `body;` see
             * soup_message_body_set_accumulate() for details.
             * @returns the accumulate flag for @body.
             */
            get_accumulate(): boolean;
            /**
             * Gets a #SoupBuffer containing data from `body` starting at `offset`.
             * The size of the returned chunk is unspecified. You can iterate
             * through the entire body by first calling
             * soup_message_body_get_chunk() with an offset of 0, and then on each
             * successive call, increment the offset by the length of the
             * previously-returned chunk.
             *
             * If `offset` is greater than or equal to the total length of `body,`
             * then the return value depends on whether or not
             * soup_message_body_complete() has been called or not; if it has,
             * then soup_message_body_get_chunk() will return a 0-length chunk
             * (indicating the end of `body)`. If it has not, then
             * soup_message_body_get_chunk() will return %NULL (indicating that
             * `body` may still potentially have more data, but that data is not
             * currently available).
             * @param offset an offset
             * @returns a #SoupBuffer, or %NULL.
             */
            get_chunk(offset: number): Buffer | null;
            /**
             * Handles the #SoupMessageBody part of receiving a chunk of data from
             * the network. Normally this means appending `chunk` to `body,` exactly
             * as with soup_message_body_append_buffer(), but if you have set
             * `body'`s accumulate flag to %FALSE, then that will not happen.
             *
             * This is a low-level method which you should not normally need to
             * use.
             * @param chunk a #SoupBuffer received from the network
             */
            got_chunk(chunk: Buffer): void;
            /**
             * Sets or clears the accumulate flag on `body`. (The default value is
             * %TRUE.) If set to %FALSE, `body'`s %data field will not be filled in
             * after the body is fully sent/received, and the chunks that make up
             * `body` may be discarded when they are no longer needed.
             *
             * In particular, if you set this flag to %FALSE on an "incoming"
             * message body (that is, the #SoupMessage:response_body of a
             * client-side message, or #SoupMessage:request_body of a server-side
             * message), this will cause each chunk of the body to be discarded
             * after its corresponding #SoupMessage::got_chunk signal is emitted.
             * (This is equivalent to setting the deprecated
             * %SOUP_MESSAGE_OVERWRITE_CHUNKS flag on the message.)
             *
             * If you set this flag to %FALSE on the #SoupMessage:response_body of
             * a server-side message, it will cause each chunk of the body to be
             * discarded after its corresponding #SoupMessage::wrote_chunk signal
             * is emitted.
             *
             * If you set the flag to %FALSE on the #SoupMessage:request_body of a
             * client-side message, it will block the accumulation of chunks into
             * `body'`s %data field, but it will not normally cause the chunks to
             * be discarded after being written like in the server-side
             * #SoupMessage:response_body case, because the request body needs to
             * be kept around in case the request needs to be sent a second time
             * due to redirection or authentication. However, if you set the
             * %SOUP_MESSAGE_CAN_REBUILD flag on the message, then the chunks will
             * be discarded, and you will be responsible for recreating the
             * request body after the #SoupMessage::restarted signal is emitted.
             * @param accumulate whether or not to accumulate body chunks in @body
             */
            set_accumulate(accumulate: boolean): void;
            /**
             * Deletes all of the data in `body`.
             */
            truncate(): void;
            /**
             * Handles the #SoupMessageBody part of writing a chunk of data to the
             * network. Normally this is a no-op, but if you have set `body'`s
             * accumulate flag to %FALSE, then this will cause `chunk` to be
             * discarded to free up memory.
             *
             * This is a low-level method which you should not need to use, and
             * there are further restrictions on its proper use which are not
             * documented here.
             * @param chunk a #SoupBuffer returned from soup_message_body_get_chunk()
             */
            wrote_chunk(chunk: Buffer): void;
        }

        type MessageClass = typeof Message;
        /**
         * The HTTP message headers associated with a request or response.
         */
        class MessageHeaders {
            static $gtype: GObject.GType<MessageHeaders>;

            // Constructors

            constructor(type: MessageHeadersType);
            _init(...args: any[]): void;

            static ['new'](type: MessageHeadersType): MessageHeaders;

            // Methods

            /**
             * Appends a new header with name `name` and value `value` to `hdrs`. (If
             * there is an existing header with name `name,` then this creates a
             * second one, which is only allowed for list-valued headers; see also
             * soup_message_headers_replace().)
             *
             * The caller is expected to make sure that `name` and `value` are
             * syntactically correct.
             * @param name the header name to add
             * @param value the new value of @name
             */
            append(name: string, value: string): void;
            /**
             * Removes all the headers listed in the Connection header.
             */
            clean_connection_headers(): void;
            /**
             * Clears `hdrs`.
             */
            clear(): void;
            /**
             * Calls `func` once for each header value in `hdrs`.
             *
             * Beware that unlike soup_message_headers_get(), this processes the
             * headers in exactly the way they were added, rather than
             * concatenating multiple same-named headers into a single value.
             * (This is intentional; it ensures that if you call
             * soup_message_headers_append() multiple times with the same name,
             * then the I/O code will output multiple copies of the header when
             * sending the message to the remote implementation, which may be
             * required for interoperability in some cases.)
             *
             * You may not modify the headers from `func`.
             * @param func callback function to run for each header
             */
            foreach(func: MessageHeadersForeachFunc): void;
            /**
             * Frees `hdrs`.
             */
            free(): void;
            /**
             * Frees the array of ranges returned from soup_message_headers_get_ranges().
             * @param ranges an array of #SoupRange
             */
            free_ranges(ranges: Range): void;
            /**
             * Gets the value of header `name` in `hdrs`.
             *
             * This method was supposed to work correctly for both single-valued
             * and list-valued headers, but because some HTTP clients/servers
             * mistakenly send multiple copies of headers that are supposed to be
             * single-valued, it sometimes returns incorrect results. To fix this,
             * the methods soup_message_headers_get_one() and
             * soup_message_headers_get_list() were introduced, so callers can
             * explicitly state which behavior they are expecting.
             * @param name header name
             * @returns as with soup_message_headers_get_list().
             */
            get(name: string): string | null;
            /**
             * Looks up the "Content-Disposition" header in `hdrs,` parses it, and
             * returns its value in *`disposition` and *`params`. `params` can be
             * %NULL if you are only interested in the disposition-type.
             *
             * In HTTP, the most common use of this header is to set a
             * disposition-type of "attachment", to suggest to the browser that a
             * response should be saved to disk rather than displayed in the
             * browser. If `params` contains a "filename" parameter, this is a
             * suggestion of a filename to use. (If the parameter value in the
             * header contains an absolute or relative path, libsoup will truncate
             * it down to just the final path component, so you do not need to
             * test this yourself.)
             *
             * Content-Disposition is also used in "multipart/form-data", however
             * this is handled automatically by #SoupMultipart and the associated
             * form methods.
             * @returns %TRUE if @hdrs contains a "Content-Disposition" header, %FALSE if not (in which case *@disposition and *@params will be unchanged).
             */
            get_content_disposition(): [boolean, string, GLib.HashTable<string, string>];
            /**
             * Gets the message body length that `hdrs` declare. This will only
             * be non-0 if soup_message_headers_get_encoding() returns
             * %SOUP_ENCODING_CONTENT_LENGTH.
             * @returns the message body length declared by @hdrs.
             */
            get_content_length(): number;
            /**
             * Parses `hdrs'`s Content-Range header and returns it in `start,`
             * `end,` and `total_length`. If the total length field in the header
             * was specified as "*", then `total_length` will be set to -1.
             * @returns %TRUE if @hdrs contained a "Content-Range" header containing a byte range which could be parsed, %FALSE otherwise.
             */
            get_content_range(): [boolean, number, number, number];
            /**
             * Looks up the "Content-Type" header in `hdrs,` parses it, and returns
             * its value in *`content_type` and *`params`. `params` can be %NULL if you
             * are only interested in the content type itself.
             * @returns a string with the value of the "Content-Type" header or %NULL if @hdrs does not contain that header or it cannot be parsed (in which case *@params will be unchanged).
             */
            get_content_type(): [string | null, GLib.HashTable<string, string> | null];
            /**
             * Gets the message body encoding that `hdrs` declare. This may not
             * always correspond to the encoding used on the wire; eg, a HEAD
             * response may declare a Content-Length or Transfer-Encoding, but
             * it will never actually include a body.
             * @returns the encoding declared by @hdrs.
             */
            get_encoding(): Encoding;
            /**
             * Gets the expectations declared by `hdrs'`s "Expect" header.
             * Currently this will either be %SOUP_EXPECTATION_CONTINUE or
             * %SOUP_EXPECTATION_UNRECOGNIZED.
             * @returns the contents of @hdrs's "Expect" header
             */
            get_expectations(): Expectation;
            /**
             * Gets the type of headers.
             * @returns the header's type.
             */
            get_headers_type(): MessageHeadersType;
            /**
             * Gets the value of header `name` in `hdrs`. Use this for headers whose
             * values are comma-delimited lists, and which are therefore allowed
             * to appear multiple times in the headers. For non-list-valued
             * headers, use soup_message_headers_get_one().
             *
             * If `name` appears multiple times in `hdrs,`
             * soup_message_headers_get_list() will concatenate all of the values
             * together, separated by commas. This is sometimes awkward to parse
             * (eg, WWW-Authenticate, Set-Cookie), but you have to be able to deal
             * with it anyway, because the HTTP spec explicitly states that this
             * transformation is allowed, and so an upstream proxy could do the
             * same thing.
             * @param name header name
             * @returns the header's value or %NULL if not found.
             */
            get_list(name: string): string | null;
            /**
             * Gets the value of header `name` in `hdrs`. Use this for headers whose
             * values are <emphasis>not</emphasis> comma-delimited lists, and
             * which therefore can only appear at most once in the headers. For
             * list-valued headers, use soup_message_headers_get_list().
             *
             * If `hdrs` does erroneously contain multiple copies of the header, it
             * is not defined which one will be returned. (Ideally, it will return
             * whichever one makes libsoup most compatible with other HTTP
             * implementations.)
             * @param name header name
             * @returns the header's value or %NULL if not found.
             */
            get_one(name: string): string | null;
            /**
             * Parses `hdrs'`s Range header and returns an array of the requested
             * byte ranges. The returned array must be freed with
             * soup_message_headers_free_ranges().
             *
             * If `total_length` is non-0, its value will be used to adjust the
             * returned ranges to have explicit start and end values, and the
             * returned ranges will be sorted and non-overlapping. If
             * `total_length` is 0, then some ranges may have an end value of -1,
             * as described under #SoupRange, and some of the ranges may be
             * redundant.
             *
             * Beware that even if given a `total_length,` this function does not
             * check that the ranges are satisfiable.
             *
             * <note><para>
             * #SoupServer has built-in handling for range requests. If your
             * server handler returns a %SOUP_STATUS_OK response containing the
             * complete response body (rather than pausing the message and
             * returning some of the response body later), and there is a Range
             * header in the request, then libsoup will automatically convert the
             * response to a %SOUP_STATUS_PARTIAL_CONTENT response containing only
             * the range(s) requested by the client.
             *
             * The only time you need to process the Range header yourself is if
             * either you need to stream the response body rather than returning
             * it all at once, or you do not already have the complete response
             * body available, and only want to generate the parts that were
             * actually requested by the client.
             * </para></note>
             * @param total_length the total_length of the response body
             * @returns %TRUE if @hdrs contained a syntactically-valid "Range" header, %FALSE otherwise (in which case @range and @length will not be set).
             */
            get_ranges(total_length: number): [boolean, Range[]];
            /**
             * Checks whether the list-valued header `name` is present in `hdrs,`
             * and contains a case-insensitive match for `token`.
             *
             * (If `name` is present in `hdrs,` then this is equivalent to calling
             * soup_header_contains() on its value.)
             * @param name header name
             * @param token token to look for
             * @returns %TRUE if the header is present and contains @token,   %FALSE otherwise.
             */
            header_contains(name: string, token: string): boolean;
            /**
             * Checks whether the header `name` is present in `hdrs` and is
             * (case-insensitively) equal to `value`.
             * @param name header name
             * @param value expected value
             * @returns %TRUE if the header is present and its value is   @value, %FALSE otherwise.
             */
            header_equals(name: string, value: string): boolean;
            /**
             * Removes `name` from `hdrs`. If there are multiple values for `name,`
             * they are all removed.
             * @param name the header name to remove
             */
            remove(name: string): void;
            /**
             * Replaces the value of the header `name` in `hdrs` with `value`. (See
             * also soup_message_headers_append().)
             *
             * The caller is expected to make sure that `name` and `value` are
             * syntactically correct.
             * @param name the header name to replace
             * @param value the new value of @name
             */
            replace(name: string, value: string): void;
            /**
             * Sets the "Content-Disposition" header in `hdrs` to `disposition,`
             * optionally with additional parameters specified in `params`.
             *
             * See soup_message_headers_get_content_disposition() for a discussion
             * of how Content-Disposition is used in HTTP.
             * @param disposition the disposition-type
             * @param params additional parameters, or %NULL
             */
            set_content_disposition(disposition: string, params?: GLib.HashTable<string, string> | null): void;
            /**
             * Sets the message body length that `hdrs` will declare, and sets
             * `hdrs'`s encoding to %SOUP_ENCODING_CONTENT_LENGTH.
             *
             * You do not normally need to call this; if `hdrs` is set to use
             * Content-Length encoding, libsoup will automatically set its
             * Content-Length header for you immediately before sending the
             * headers. One situation in which this method is useful is when
             * generating the response to a HEAD request; Calling
             * soup_message_headers_set_content_length() allows you to put the
             * correct content length into the response without needing to waste
             * memory by filling in a response body which won't actually be sent.
             * @param content_length the message body length
             */
            set_content_length(content_length: number): void;
            /**
             * Sets `hdrs'`s Content-Range header according to the given values.
             * (Note that `total_length` is the total length of the entire resource
             * that this is a range of, not simply `end` - `start` + 1.)
             *
             * <note><para>
             * #SoupServer has built-in handling for range requests, and you do
             * not normally need to call this function youself. See
             * soup_message_headers_get_ranges() for more details.
             * </para></note>
             * @param start the start of the range
             * @param end the end of the range
             * @param total_length the total length of the resource, or -1 if unknown
             */
            set_content_range(start: number, end: number, total_length: number): void;
            /**
             * Sets the "Content-Type" header in `hdrs` to `content_type,`
             * optionally with additional parameters specified in `params`.
             * @param content_type the MIME type
             * @param params additional parameters, or %NULL
             */
            set_content_type(content_type: string, params?: GLib.HashTable<string, string> | null): void;
            /**
             * Sets the message body encoding that `hdrs` will declare. In particular,
             * you should use this if you are going to send a request or response in
             * chunked encoding.
             * @param encoding a #SoupEncoding
             */
            set_encoding(encoding: Encoding | null): void;
            /**
             * Sets `hdrs'`s "Expect" header according to `expectations`.
             *
             * Currently %SOUP_EXPECTATION_CONTINUE is the only known expectation
             * value. You should set this value on a request if you are sending a
             * large message body (eg, via POST or PUT), and want to give the
             * server a chance to reject the request after seeing just the headers
             * (eg, because it will require authentication before allowing you to
             * post, or because you're POSTing to a URL that doesn't exist). This
             * saves you from having to transmit the large request body when the
             * server is just going to ignore it anyway.
             * @param expectations the expectations to set
             */
            set_expectations(expectations: Expectation | null): void;
            /**
             * Sets `hdrs'`s Range header to request the indicated range.
             * `start` and `end` are interpreted as in a #SoupRange.
             *
             * If you need to request multiple ranges, use
             * soup_message_headers_set_ranges().
             * @param start the start of the range to request
             * @param end the end of the range to request
             */
            set_range(start: number, end: number): void;
            /**
             * Sets `hdrs'`s Range header to request the indicated ranges. (If you
             * only want to request a single range, you can use
             * soup_message_headers_set_range().)
             * @param ranges an array of #SoupRange
             * @param length the length of @range
             */
            set_ranges(ranges: Range, length: number): void;
        }

        /**
         * An opaque type used to iterate over a %SoupMessageHeaders
         * structure.
         *
         * After intializing the iterator with
         * soup_message_headers_iter_init(), call
         * soup_message_headers_iter_next() to fetch data from it.
         *
         * You may not modify the headers while iterating over them.
         */
        class MessageHeadersIter {
            static $gtype: GObject.GType<MessageHeadersIter>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            // Static methods

            /**
             * Initializes `iter` for iterating `hdrs`.
             * @param hdrs a %SoupMessageHeaders
             */
            static init(hdrs: MessageHeaders): MessageHeadersIter;

            // Methods

            /**
             * Yields the next name/value pair in the %SoupMessageHeaders being
             * iterated by `iter`. If `iter` has already yielded the last header,
             * then soup_message_headers_iter_next() will return %FALSE and `name`
             * and `value` will be unchanged.
             * @returns %TRUE if another name and value were returned, %FALSE if the end of the headers has been reached.
             */
            next(): [boolean, string, string];
        }

        abstract class MessageQueue {
            static $gtype: GObject.GType<MessageQueue>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class MessageQueueItem {
            static $gtype: GObject.GType<MessageQueueItem>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Represents a multipart HTTP message body, parsed according to the
         * syntax of RFC 2046. Of particular interest to HTTP are
         * <literal>multipart/byte-ranges</literal> and
         * <literal>multipart/form-data</literal>.
         *
         * Although the headers of a #SoupMultipart body part will contain the
         * full headers from that body part, libsoup does not interpret them
         * according to MIME rules. For example, each body part is assumed to
         * have "binary" Content-Transfer-Encoding, even if its headers
         * explicitly state otherwise. In other words, don't try to use
         * #SoupMultipart for handling real MIME multiparts.
         */
        class Multipart {
            static $gtype: GObject.GType<Multipart>;

            // Constructors

            constructor(mime_type: string);
            _init(...args: any[]): void;

            static ['new'](mime_type: string): Multipart;

            static new_from_message(headers: MessageHeaders, body: MessageBody): Multipart;

            // Methods

            /**
             * Adds a new MIME part containing `body` to `multipart,` using
             * "Content-Disposition: form-data", as per the HTML forms
             * specification. See soup_form_request_new_from_multipart() for more
             * details.
             * @param control_name the name of the control associated with this file
             * @param filename the name of the file, or %NULL if not known
             * @param content_type the MIME type of the file, or %NULL if not known
             * @param body the file data
             */
            append_form_file(control_name: string, filename: string, content_type: string, body: Buffer): void;
            /**
             * Adds a new MIME part containing `data` to `multipart,` using
             * "Content-Disposition: form-data", as per the HTML forms
             * specification. See soup_form_request_new_from_multipart() for more
             * details.
             * @param control_name the name of the control associated with @data
             * @param data the body data
             */
            append_form_string(control_name: string, data: string): void;
            /**
             * Adds a new MIME part to `multipart` with the given headers and body.
             * (The multipart will make its own copies of `headers` and `body,` so
             * you should free your copies if you are not using them for anything
             * else.)
             * @param headers the MIME part headers
             * @param body the MIME part body
             */
            append_part(headers: MessageHeaders, body: Buffer): void;
            /**
             * Frees `multipart`
             */
            free(): void;
            /**
             * Gets the number of body parts in `multipart`
             * @returns the number of body parts in @multipart
             */
            get_length(): number;
            /**
             * Gets the indicated body part from `multipart`.
             * @param part the part number to get (counting from 0)
             * @returns %TRUE on success, %FALSE if @part is out of range (in which case @headers and @body won't be set)
             */
            get_part(part: number): [boolean, MessageHeaders, Buffer];
            /**
             * Serializes `multipart` to `dest_headers` and `dest_body`.
             * @param dest_headers the headers of the HTTP message to serialize @multipart to
             * @param dest_body the body of the HTTP message to serialize @multipart to
             */
            to_message(dest_headers: MessageHeaders, dest_body: MessageBody): void;
        }

        type MultipartInputStreamClass = typeof MultipartInputStream;
        abstract class MultipartInputStreamPrivate {
            static $gtype: GObject.GType<MultipartInputStreamPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type PasswordManagerInterface = typeof PasswordManager;
        type ProxyResolverDefaultClass = typeof ProxyResolverDefault;
        type ProxyResolverInterface = typeof ProxyResolver;
        type ProxyURIResolverInterface = typeof ProxyURIResolver;
        /**
         * Represents a byte range as used in the Range header.
         *
         * If `end` is non-negative, then `start` and `end` represent the bounds
         * of of the range, counting from 0. (Eg, the first 500 bytes would be
         * represented as `start` = 0 and `end` = 499.)
         *
         * If `end` is -1 and `start` is non-negative, then this represents a
         * range starting at `start` and ending with the last byte of the
         * requested resource body. (Eg, all but the first 500 bytes would be
         * `start` = 500, and `end` = -1.)
         *
         * If `end` is -1 and `start` is negative, then it represents a "suffix
         * range", referring to the last -`start` bytes of the resource body.
         * (Eg, the last 500 bytes would be `start` = -500 and `end` = -1.)
         */
        class Range {
            static $gtype: GObject.GType<Range>;

            // Fields

            start: number;
            end: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    start: number;
                    end: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        type RequestClass = typeof Request;
        type RequestDataClass = typeof RequestData;
        abstract class RequestDataPrivate {
            static $gtype: GObject.GType<RequestDataPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RequestFileClass = typeof RequestFile;
        abstract class RequestFilePrivate {
            static $gtype: GObject.GType<RequestFilePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RequestHTTPClass = typeof RequestHTTP;
        abstract class RequestHTTPPrivate {
            static $gtype: GObject.GType<RequestHTTPPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class RequestPrivate {
            static $gtype: GObject.GType<RequestPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RequesterClass = typeof Requester;
        abstract class RequesterPrivate {
            static $gtype: GObject.GType<RequesterPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ServerClass = typeof Server;
        type SessionAsyncClass = typeof SessionAsync;
        type SessionClass = typeof Session;
        type SessionFeatureInterface = typeof SessionFeature;
        type SessionSyncClass = typeof SessionSync;
        type SocketClass = typeof Socket;
        /**
         * A #SoupURI represents a (parsed) URI. #SoupURI supports RFC 3986
         * (URI Generic Syntax), and can parse any valid URI. However, libsoup
         * only uses "http" and "https" URIs internally; You can use
         * SOUP_URI_VALID_FOR_HTTP() to test if a #SoupURI is a valid HTTP
         * URI.
         *
         * `scheme` will always be set in any URI. It is an interned string and
         * is always all lowercase. (If you parse a URI with a non-lowercase
         * scheme, it will be converted to lowercase.) The macros
         * %SOUP_URI_SCHEME_HTTP and %SOUP_URI_SCHEME_HTTPS provide the
         * interned values for "http" and "https" and can be compared against
         * URI `scheme` values.
         *
         * `user` and `password` are parsed as defined in the older URI specs
         * (ie, separated by a colon; RFC 3986 only talks about a single
         * "userinfo" field). Note that `password` is not included in the
         * output of soup_uri_to_string(). libsoup does not normally use these
         * fields; authentication is handled via #SoupSession signals.
         *
         * `host` contains the hostname, and `port` the port specified in the
         * URI. If the URI doesn't contain a hostname, `host` will be %NULL,
         * and if it doesn't specify a port, `port` may be 0. However, for
         * "http" and "https" URIs, `host` is guaranteed to be non-%NULL
         * (trying to parse an http URI with no `host` will return %NULL), and
         * `port` will always be non-0 (because libsoup knows the default value
         * to use when it is not specified in the URI).
         *
         * `path` is always non-%NULL. For http/https URIs, `path` will never be
         * an empty string either; if the input URI has no path, the parsed
         * #SoupURI will have a `path` of "/".
         *
         * `query` and `fragment` are optional for all URI types.
         * soup_form_decode() may be useful for parsing `query`.
         *
         * Note that `path,` `query,` and `fragment` may contain
         * %<!-- -->-encoded characters. soup_uri_new() calls
         * soup_uri_normalize() on them, but not soup_uri_decode(). This is
         * necessary to ensure that soup_uri_to_string() will generate a URI
         * that has exactly the same meaning as the original. (In theory,
         * #SoupURI should leave `user,` `password,` and `host` partially-encoded
         * as well, but this would be more annoying than useful.)
         */
        class URI {
            static $gtype: GObject.GType<URI>;

            // Fields

            scheme: string;
            user: string;
            password: string;
            host: string;
            port: number;
            path: string;
            query: string;
            fragment: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    scheme: string;
                    user: string;
                    password: string;
                    host: string;
                    port: number;
                    path: string;
                    query: string;
                    fragment: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](uri_string?: string | null): URI;

            static new_with_base(base: URI, uri_string: string): URI;

            // Static methods

            /**
             * Fully %<!-- -->-decodes `part`.
             *
             * In the past, this would return %NULL if `part` contained invalid
             * percent-encoding, but now it just ignores the problem (as
             * soup_uri_new() already did).
             * @param part a URI part
             */
            static decode(part: string): string;
            /**
             * This %<!-- -->-encodes the given URI part and returns the escaped
             * version in allocated memory, which the caller must free when it is
             * done.
             * @param part a URI part
             * @param escape_extra additional reserved characters to escape (or %NULL)
             */
            static encode(part: string, escape_extra?: string | null): string;
            /**
             * %<!-- -->-decodes any "unreserved" characters (or characters in
             * `unescape_extra)` in `part,` and %<!-- -->-encodes any non-ASCII
             * characters, spaces, and non-printing characters in `part`.
             *
             * "Unreserved" characters are those that are not allowed to be used
             * for punctuation according to the URI spec. For example, letters are
             * unreserved, so soup_uri_normalize() will turn
             * <literal>http://example.com/foo/b%<!-- -->61r</literal> into
             * <literal>http://example.com/foo/bar</literal>, which is guaranteed
             * to mean the same thing. However, "/" is "reserved", so
             * <literal>http://example.com/foo%<!-- -->2Fbar</literal> would not
             * be changed, because it might mean something different to the
             * server.
             *
             * In the past, this would return %NULL if `part` contained invalid
             * percent-encoding, but now it just ignores the problem (as
             * soup_uri_new() already did).
             * @param part a URI part
             * @param unescape_extra reserved characters to unescape (or %NULL)
             */
            static normalize(part: string, unescape_extra?: string | null): string;

            // Methods

            /**
             * Copies `uri`
             * @returns a copy of @uri, which must be freed with soup_uri_free()
             */
            copy(): URI;
            /**
             * Makes a copy of `uri,` considering only the protocol, host, and port
             * @returns the new #SoupURI
             */
            copy_host(): URI;
            /**
             * Tests whether or not `uri1` and `uri2` are equal in all parts
             * @param uri2 another #SoupURI
             * @returns %TRUE or %FALSE
             */
            equal(uri2: URI): boolean;
            /**
             * Frees `uri`.
             */
            free(): void;
            /**
             * Gets `uri'`s fragment.
             * @returns @uri's fragment.
             */
            get_fragment(): string;
            /**
             * Gets `uri'`s host.
             * @returns @uri's host.
             */
            get_host(): string;
            /**
             * Gets `uri'`s password.
             * @returns @uri's password.
             */
            get_password(): string;
            /**
             * Gets `uri'`s path.
             * @returns @uri's path.
             */
            get_path(): string;
            /**
             * Gets `uri'`s port.
             * @returns @uri's port.
             */
            get_port(): number;
            /**
             * Gets `uri'`s query.
             * @returns @uri's query.
             */
            get_query(): string;
            /**
             * Gets `uri'`s scheme.
             * @returns @uri's scheme.
             */
            get_scheme(): string;
            /**
             * Gets `uri'`s user.
             * @returns @uri's user.
             */
            get_user(): string;
            /**
             * Compares `v1` and `v2`, considering only the scheme, host, and port.
             * @param v2 a #SoupURI with a non-%NULL @host member
             * @returns whether or not the URIs are equal in scheme, host, and port.
             */
            host_equal(v2: URI): boolean;
            /**
             * Hashes `key,` considering only the scheme, host, and port.
             * @returns a hash
             */
            host_hash(): number;
            /**
             * Sets `uri'`s fragment to `fragment`.
             * @param fragment the fragment
             */
            set_fragment(fragment?: string | null): void;
            /**
             * Sets `uri'`s host to `host`.
             *
             * If `host` is an IPv6 IP address, it should not include the brackets
             * required by the URI syntax; they will be added automatically when
             * converting `uri` to a string.
             *
             * http and https URIs should not have a %NULL `host`.
             * @param host the hostname or IP address, or %NULL
             */
            set_host(host?: string | null): void;
            /**
             * Sets `uri'`s password to `password`.
             * @param password the password, or %NULL
             */
            set_password(password?: string | null): void;
            /**
             * Sets `uri'`s path to `path`.
             * @param path the non-%NULL path
             */
            set_path(path: string): void;
            /**
             * Sets `uri'`s port to `port`. If `port` is 0, `uri` will not have an
             * explicitly-specified port.
             * @param port the port, or 0
             */
            set_port(port: number): void;
            /**
             * Sets `uri'`s query to `query`.
             * @param query the query
             */
            set_query(query?: string | null): void;
            /**
             * Sets `uri'`s query to the result of encoding `form` according to the
             * HTML form rules. See soup_form_encode_hash() for more information.
             * @param form a #GHashTable containing HTML form information
             */
            set_query_from_form(form: { [key: string]: any } | GLib.HashTable<string, string>): void;
            /**
             * Sets `uri'`s scheme to `scheme`. This will also set `uri'`s port to
             * the default port for `scheme,` if known.
             * @param scheme the URI scheme
             */
            set_scheme(scheme: string): void;
            /**
             * Sets `uri'`s user to `user`.
             * @param user the username, or %NULL
             */
            set_user(user?: string | null): void;
            /**
             * Returns a string representing `uri`.
             *
             * If `just_path_and_query` is %TRUE, this concatenates the path and query
             * together. That is, it constructs the string that would be needed in
             * the Request-Line of an HTTP request for `uri`.
             *
             * Note that the output will never contain a password, even if `uri`
             * does.
             * @param just_path_and_query if %TRUE, output just the path and query portions
             * @returns a string representing @uri, which the caller must free.
             */
            to_string(just_path_and_query: boolean): string;
            /**
             * Tests if `uri` uses the default port for its scheme. (Eg, 80 for
             * http.) (This only works for http, https and ftp; libsoup does not know
             * the default ports of other protocols.)
             * @returns %TRUE or %FALSE
             */
            uses_default_port(): boolean;
        }

        type WebsocketConnectionClass = typeof WebsocketConnection;
        abstract class WebsocketConnectionPrivate {
            static $gtype: GObject.GType<WebsocketConnectionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type WebsocketExtensionClass = typeof WebsocketExtension;
        type WebsocketExtensionDeflateClass = typeof WebsocketExtensionDeflate;
        type WebsocketExtensionManagerClass = typeof WebsocketExtensionManager;
        /**
         * Opaque structure containing XML-RPC methodCall parameter values.
         * Can be parsed using soup_xmlrpc_params_parse() and freed with
         * soup_xmlrpc_params_free().
         */
        abstract class XMLRPCParams {
            static $gtype: GObject.GType<XMLRPCParams>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Free a #SoupXMLRPCParams returned by soup_xmlrpc_parse_request().
             */
            free(): void;
            /**
             * Parse method parameters returned by soup_xmlrpc_parse_request().
             *
             * Deserialization details:
             *  - If `signature` is provided, &lt;int&gt; and &lt;i4&gt; can be deserialized
             *    to byte, int16, uint16, int32, uint32, int64 or uint64. Otherwise
             *    it will be deserialized to int32. If the value is out of range
             *    for the target type it will return an error.
             *  - &lt;struct&gt; will be deserialized to "a{sv}". `signature` could define
             *    another value type (e.g. "a{ss}").
             *  - &lt;array&gt; will be deserialized to "av". `signature` could define
             *    another element type (e.g. "as") or could be a tuple (e.g. "(ss)").
             *  - &lt;base64&gt; will be deserialized to "ay".
             *  - &lt;string&gt; will be deserialized to "s".
             *  - &lt;dateTime.iso8601&gt; will be deserialized to an unspecified variant
             *    type. If `signature` is provided it must have the generic "v" type, which
             *    means there is no guarantee that it's actually a datetime that has been
             *    received. soup_xmlrpc_variant_get_datetime() must be used to parse and
             *    type check this special variant.
             *  - `signature` must not have maybes, otherwise an error is returned.
             *  - Dictionaries must have string keys, otherwise an error is returned.
             * @param signature A valid #GVariant type string, or %NULL
             * @returns a new (non-floating) #GVariant, or %NULL
             */
            parse(signature?: string | null): GLib.Variant;
        }

        module PasswordManager {
            // Constructor properties interface

            interface ConstructorProps extends SessionFeature.ConstructorProps {}
        }

        export interface PasswordManagerNamespace {
            $gtype: GObject.GType<PasswordManager>;
            prototype: PasswordManager;
        }
        interface PasswordManager extends SessionFeature {
            // Methods

            get_passwords_async(
                msg: Message,
                auth: Auth,
                retrying: boolean,
                async_context: GLib.MainContext,
                cancellable: Gio.Cancellable | null,
                callback: PasswordManagerCallback,
            ): void;
            get_passwords_sync(msg: Message, auth: Auth, cancellable?: Gio.Cancellable | null): void;

            // Virtual methods

            vfunc_get_passwords_async(
                msg: Message,
                auth: Auth,
                retrying: boolean,
                async_context: GLib.MainContext,
                cancellable: Gio.Cancellable | null,
                callback: PasswordManagerCallback,
            ): void;
            vfunc_get_passwords_sync(msg: Message, auth: Auth, cancellable?: Gio.Cancellable | null): void;
        }

        export const PasswordManager: PasswordManagerNamespace & {
            new (): PasswordManager; // This allows `obj instanceof PasswordManager`
        };

        module ProxyResolver {
            // Constructor properties interface

            interface ConstructorProps extends SessionFeature.ConstructorProps {}
        }

        export interface ProxyResolverNamespace {
            $gtype: GObject.GType<ProxyResolver>;
            prototype: ProxyResolver;
        }
        interface ProxyResolver extends SessionFeature {
            // Methods

            get_proxy_async(
                msg: Message,
                async_context: GLib.MainContext,
                cancellable: Gio.Cancellable | null,
                callback: ProxyResolverCallback,
            ): void;
            get_proxy_sync(msg: Message, cancellable: Gio.Cancellable | null): [number, Address];

            // Virtual methods

            vfunc_get_proxy_async(
                msg: Message,
                async_context: GLib.MainContext,
                cancellable: Gio.Cancellable | null,
                callback: ProxyResolverCallback,
            ): void;
            vfunc_get_proxy_sync(msg: Message, cancellable: Gio.Cancellable | null): [number, Address];
        }

        export const ProxyResolver: ProxyResolverNamespace & {
            new (): ProxyResolver; // This allows `obj instanceof ProxyResolver`
        };

        module ProxyURIResolver {
            // Constructor properties interface

            interface ConstructorProps extends SessionFeature.ConstructorProps {}
        }

        export interface ProxyURIResolverNamespace {
            $gtype: GObject.GType<ProxyURIResolver>;
            prototype: ProxyURIResolver;
        }
        interface ProxyURIResolver extends SessionFeature {
            // Methods

            /**
             * Asynchronously determines a proxy URI to use for `msg` and calls
             * `callback`.
             * @param uri the #SoupURI you want a proxy for
             * @param async_context the #GMainContext to invoke @callback in
             * @param cancellable a #GCancellable, or %NULL
             * @param callback callback to invoke with the proxy address
             */
            get_proxy_uri_async(
                uri: URI,
                async_context: GLib.MainContext | null,
                cancellable: Gio.Cancellable | null,
                callback: ProxyURIResolverCallback,
            ): void;
            /**
             * Synchronously determines a proxy URI to use for `uri`. If `uri`
             * should be sent via proxy, *`proxy_uri` will be set to the URI of the
             * proxy, else it will be set to %NULL.
             * @param uri the #SoupURI you want a proxy for
             * @param cancellable a #GCancellable, or %NULL
             * @returns %SOUP_STATUS_OK if successful, or a transport-level error.
             */
            get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [number, URI];

            // Virtual methods

            /**
             * Asynchronously determines a proxy URI to use for `msg` and calls
             * `callback`.
             * @param uri the #SoupURI you want a proxy for
             * @param async_context the #GMainContext to invoke @callback in
             * @param cancellable a #GCancellable, or %NULL
             * @param callback callback to invoke with the proxy address
             */
            vfunc_get_proxy_uri_async(
                uri: URI,
                async_context: GLib.MainContext | null,
                cancellable: Gio.Cancellable | null,
                callback: ProxyURIResolverCallback,
            ): void;
            /**
             * Synchronously determines a proxy URI to use for `uri`. If `uri`
             * should be sent via proxy, *`proxy_uri` will be set to the URI of the
             * proxy, else it will be set to %NULL.
             * @param uri the #SoupURI you want a proxy for
             * @param cancellable a #GCancellable, or %NULL
             */
            vfunc_get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [number, URI];
        }

        export const ProxyURIResolver: ProxyURIResolverNamespace & {
            new (): ProxyURIResolver; // This allows `obj instanceof ProxyURIResolver`
        };

        module SessionFeature {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface SessionFeatureNamespace {
            $gtype: GObject.GType<SessionFeature>;
            prototype: SessionFeature;
        }
        interface SessionFeature extends GObject.Object {
            // Methods

            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature accepted @type as a subfeature.
             */
            add_feature(type: GObject.GType): boolean;
            attach(session: Session): void;
            detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @feature has a subfeature of type @type
             */
            has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             * @returns %TRUE if @type was removed from @feature
             */
            remove_feature(type: GObject.GType): boolean;

            // Virtual methods

            /**
             * Adds a "sub-feature" of type `type` to the base feature `feature`.
             * This is used for features that can be extended with multiple
             * different types. Eg, the authentication manager can be extended
             * with subtypes of #SoupAuth.
             * @param type the #GType of a "sub-feature"
             */
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            /**
             * Tests if `feature` has a "sub-feature" of type `type`. See
             * soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_has_feature(type: GObject.GType): boolean;
            /**
             * Removes the "sub-feature" of type `type` from the base feature
             * `feature`. See soup_session_feature_add_feature().
             * @param type the #GType of a "sub-feature"
             */
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
        }

        export const SessionFeature: SessionFeatureNamespace & {
            new (): SessionFeature; // This allows `obj instanceof SessionFeature`
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

    export default Soup;
}

declare module 'gi://Soup' {
    import Soup24 from 'gi://Soup?version=2.4';
    export default Soup24;
}
// END
