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

declare module 'gi://EBookContacts?version=1.2' {
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

    export namespace EBookContacts {
        /**
         * EBookContacts-1.2
         */

        /**
         * The type of change in an #EBookChange
         */

        /**
         * The type of change in an #EBookChange
         */
        export namespace BookChangeType {
            export const $gtype: GObject.GType<BookChangeType>;
        }

        enum BookChangeType {
            /**
             * A vCard was added
             */
            ADDED,
            /**
             * A vCard was deleted
             */
            DELETED,
            /**
             * A vCard was modified
             */
            MODIFIED,
        }
        /**
         * Error codes returned by #EBookClient APIs, if an #EClientError was not available.
         */
        class BookClientError extends GLib.Error {
            static $gtype: GObject.GType<BookClientError>;

            // Static fields

            /**
             * Requested book did not exist
             */
            static NO_SUCH_BOOK: number;
            /**
             * Contact referred to was not found
             */
            static CONTACT_NOT_FOUND: number;
            /**
             * Tried to add a contact which already exists
             */
            static CONTACT_ID_ALREADY_EXISTS: number;
            /**
             * Referred #ESource does not exist
             */
            static NO_SUCH_SOURCE: number;
            /**
             * Out of disk space
             */
            static NO_SPACE: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        /**
         * Specifies the start position to in the list of traversed contacts
         * in calls to e_book_client_cursor_step().
         *
         * When an #EBookClientCursor is created, the current position implied by %E_BOOK_CURSOR_ORIGIN_CURRENT
         * is the same as %E_BOOK_CURSOR_ORIGIN_BEGIN.
         */

        /**
         * Specifies the start position to in the list of traversed contacts
         * in calls to e_book_client_cursor_step().
         *
         * When an #EBookClientCursor is created, the current position implied by %E_BOOK_CURSOR_ORIGIN_CURRENT
         * is the same as %E_BOOK_CURSOR_ORIGIN_BEGIN.
         */
        export namespace BookCursorOrigin {
            export const $gtype: GObject.GType<BookCursorOrigin>;
        }

        enum BookCursorOrigin {
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
         * Specifies the sort order of an ordered query
         */

        /**
         * Specifies the sort order of an ordered query
         */
        export namespace BookCursorSortType {
            export const $gtype: GObject.GType<BookCursorSortType>;
        }

        enum BookCursorSortType {
            /**
             * Sort results in ascending order
             */
            ASCENDING,
            /**
             * Sort results in descending order
             */
            DESCENDING,
        }
        /**
         * The type of index defined by e_source_backend_summary_setup_set_indexed_fields()
         */

        /**
         * The type of index defined by e_source_backend_summary_setup_set_indexed_fields()
         */
        export namespace BookIndexType {
            export const $gtype: GObject.GType<BookIndexType>;
        }

        enum BookIndexType {
            /**
             * An index suitable for searching contacts with a prefix pattern
             */
            PREFIX,
            /**
             * An index suitable for searching contacts with a suffix pattern
             */
            SUFFIX,
            /**
             * An index suitable for searching contacts for phone numbers.
             * <note><para>Phone numbers must be convertible into FQTN according to E.164 to be
             * stored in this index. The number "+9999999" for instance won't be stored because
             * the country calling code "+999" currently is not assigned.</para></note>
             */
            PHONE,
            /**
             * Indicates that a given #EContactField should be usable as a sort key.
             */
            SORT_KEY,
        }
        /**
         * The kind of test a query created by e_book_query_field_test() shall perform.
         *
         * See also: e_phone_number_compare_strings().
         */

        /**
         * The kind of test a query created by e_book_query_field_test() shall perform.
         *
         * See also: e_phone_number_compare_strings().
         */
        export namespace BookQueryTest {
            export const $gtype: GObject.GType<BookQueryTest>;
        }

        enum BookQueryTest {
            /**
             * look for exact match of the supplied test value
             */
            IS,
            /**
             * check if a field contains the test value
             */
            CONTAINS,
            /**
             * check if a field starts with the test value
             */
            BEGINS_WITH,
            /**
             * check if a field ends with the test value
             */
            ENDS_WITH,
            /**
             * check if a field matches with a value tested
             * using e_phone_number_compare_strings(), the match must be of strenth %E_PHONE_NUMBER_MATCH_EXACT
             * for this query to return any matches.
             */
            EQUALS_PHONE_NUMBER,
            /**
             * check if a field matches with a value tested
             * using e_phone_number_compare_strings(), the match must be at least of strength %E_PHONE_NUMBER_MATCH_NATIONAL
             * for this query to return any matches.
             */
            EQUALS_NATIONAL_PHONE_NUMBER,
            /**
             * check if a field matches with a value tested
             * using e_phone_number_compare_strings(), the match must be at least of strength %E_PHONE_NUMBER_MATCH_SHORT
             * for this query to return any matches.
             */
            EQUALS_SHORT_PHONE_NUMBER,
            /**
             * A regular expression query against contact data normalized with e_util_utf8_normalize(),
             * the normalized data is lower case with any accents removed.
             */
            REGEX_NORMAL,
            /**
             * A regular expression query against raw contact data, this is usually slower than
             * a %E_BOOK_QUERY_REGEX_NORMAL as it implies that #EVCard(s) must be parsed in order to get the raw data
             * for comparison.
             */
            REGEX_RAW,
            /**
             * End marker for the #EBookQueryTest enumeration, not a valid query test.
             */
            LAST,
        }
        /**
         * Status messages used in notifications in the deprecated #EBookView class
         */

        /**
         * Status messages used in notifications in the deprecated #EBookView class
         */
        export namespace BookViewStatus {
            export const $gtype: GObject.GType<BookViewStatus>;
        }

        enum BookViewStatus {
            /**
             * Ok
             */
            STATUS_OK,
            /**
             * Time limit exceeded
             */
            STATUS_TIME_LIMIT_EXCEEDED,
            /**
             * Size limit exceeded
             */
            STATUS_SIZE_LIMIT_EXCEEDED,
            /**
             * Invalid search expression
             */
            ERROR_INVALID_QUERY,
            /**
             * Search expression refused
             */
            ERROR_QUERY_REFUSED,
            /**
             * Another error occurred
             */
            ERROR_OTHER_ERROR,
        }

        export namespace ContactField {
            export const $gtype: GObject.GType<ContactField>;
        }

        enum ContactField {
            UID,
            FILE_AS,
            BOOK_UID,
            FULL_NAME,
            GIVEN_NAME,
            FAMILY_NAME,
            NICKNAME,
            EMAIL_1,
            EMAIL_2,
            EMAIL_3,
            EMAIL_4,
            MAILER,
            ADDRESS_LABEL_HOME,
            ADDRESS_LABEL_WORK,
            ADDRESS_LABEL_OTHER,
            PHONE_ASSISTANT,
            PHONE_BUSINESS,
            PHONE_BUSINESS_2,
            PHONE_BUSINESS_FAX,
            PHONE_CALLBACK,
            PHONE_CAR,
            PHONE_COMPANY,
            PHONE_HOME,
            PHONE_HOME_2,
            PHONE_HOME_FAX,
            PHONE_ISDN,
            PHONE_MOBILE,
            PHONE_OTHER,
            PHONE_OTHER_FAX,
            PHONE_PAGER,
            PHONE_PRIMARY,
            PHONE_RADIO,
            PHONE_TELEX,
            PHONE_TTYTDD,
            ORG,
            ORG_UNIT,
            OFFICE,
            TITLE,
            ROLE,
            MANAGER,
            ASSISTANT,
            HOMEPAGE_URL,
            BLOG_URL,
            CATEGORIES,
            CALENDAR_URI,
            FREEBUSY_URL,
            ICS_CALENDAR,
            VIDEO_URL,
            SPOUSE,
            NOTE,
            IM_AIM_HOME_1,
            IM_AIM_HOME_2,
            IM_AIM_HOME_3,
            IM_AIM_WORK_1,
            IM_AIM_WORK_2,
            IM_AIM_WORK_3,
            IM_GROUPWISE_HOME_1,
            IM_GROUPWISE_HOME_2,
            IM_GROUPWISE_HOME_3,
            IM_GROUPWISE_WORK_1,
            IM_GROUPWISE_WORK_2,
            IM_GROUPWISE_WORK_3,
            IM_JABBER_HOME_1,
            IM_JABBER_HOME_2,
            IM_JABBER_HOME_3,
            IM_JABBER_WORK_1,
            IM_JABBER_WORK_2,
            IM_JABBER_WORK_3,
            IM_YAHOO_HOME_1,
            IM_YAHOO_HOME_2,
            IM_YAHOO_HOME_3,
            IM_YAHOO_WORK_1,
            IM_YAHOO_WORK_2,
            IM_YAHOO_WORK_3,
            IM_MSN_HOME_1,
            IM_MSN_HOME_2,
            IM_MSN_HOME_3,
            IM_MSN_WORK_1,
            IM_MSN_WORK_2,
            IM_MSN_WORK_3,
            IM_ICQ_HOME_1,
            IM_ICQ_HOME_2,
            IM_ICQ_HOME_3,
            IM_ICQ_WORK_1,
            IM_ICQ_WORK_2,
            IM_ICQ_WORK_3,
            REV,
            NAME_OR_ORG,
            ADDRESS,
            ADDRESS_HOME,
            ADDRESS_WORK,
            ADDRESS_OTHER,
            CATEGORY_LIST,
            PHOTO,
            LOGO,
            NAME,
            EMAIL,
            IM_AIM,
            IM_GROUPWISE,
            IM_JABBER,
            IM_YAHOO,
            IM_MSN,
            IM_ICQ,
            WANTS_HTML,
            IS_LIST,
            LIST_SHOW_ADDRESSES,
            BIRTH_DATE,
            ANNIVERSARY,
            X509_CERT,
            PGP_CERT,
            IM_GADUGADU_HOME_1,
            IM_GADUGADU_HOME_2,
            IM_GADUGADU_HOME_3,
            IM_GADUGADU_WORK_1,
            IM_GADUGADU_WORK_2,
            IM_GADUGADU_WORK_3,
            IM_GADUGADU,
            GEO,
            TEL,
            IM_SKYPE_HOME_1,
            IM_SKYPE_HOME_2,
            IM_SKYPE_HOME_3,
            IM_SKYPE_WORK_1,
            IM_SKYPE_WORK_2,
            IM_SKYPE_WORK_3,
            IM_SKYPE,
            SIP,
            IM_GOOGLE_TALK_HOME_1,
            IM_GOOGLE_TALK_HOME_2,
            IM_GOOGLE_TALK_HOME_3,
            IM_GOOGLE_TALK_WORK_1,
            IM_GOOGLE_TALK_WORK_2,
            IM_GOOGLE_TALK_WORK_3,
            IM_GOOGLE_TALK,
            IM_TWITTER,
            IM_MATRIX_HOME_1,
            IM_MATRIX_HOME_2,
            IM_MATRIX_HOME_3,
            IM_MATRIX_WORK_1,
            IM_MATRIX_WORK_2,
            IM_MATRIX_WORK_3,
            IM_MATRIX,
            FIELD_LAST,
            FIELD_FIRST,
            LAST_SIMPLE_STRING,
            FIRST_PHONE_ID,
            LAST_PHONE_ID,
            FIRST_EMAIL_ID,
            LAST_EMAIL_ID,
            FIRST_ADDRESS_ID,
            LAST_ADDRESS_ID,
            FIRST_LABEL_ID,
            LAST_LABEL_ID,
        }

        export namespace ContactPhotoType {
            export const $gtype: GObject.GType<ContactPhotoType>;
        }

        enum ContactPhotoType {
            INLINED,
            URI,
        }
        /**
         * The origin of a parsed EPhoneNumber's country calling code.
         */

        /**
         * The origin of a parsed EPhoneNumber's country calling code.
         */
        export namespace PhoneNumberCountrySource {
            export const $gtype: GObject.GType<PhoneNumberCountrySource>;
        }

        enum PhoneNumberCountrySource {
            /**
             * the EPhoneNumber was build from a fully qualified telephone number
             *   that contained a valid country calling code
             */
            FQTN,
            /**
             * the parsed phone number started with the current locale's international
             *   call prefix, followed by a valid country calling code
             */
            IDD,
            /**
             * the parsed phone didn't start with a (recognizable) country calling code,
             *   the code was chosen by checking the current locale settings
             */
            DEFAULT,
        }
        /**
         * Numeric description of a phone number related error.
         */
        class PhoneNumberError extends GLib.Error {
            static $gtype: GObject.GType<PhoneNumberError>;

            // Static fields

            /**
             * the library was built without phone
             * number support
             */
            static NOT_IMPLEMENTED: number;
            /**
             * the phone number parser reported a yet
             * unknown error code.
             */
            static UNKNOWN: number;
            /**
             * the supplied text is not a phone number.
             */
            static NOT_A_NUMBER: number;
            /**
             * the supplied phone number has an
             * invalid country calling code.
             */
            static INVALID_COUNTRY_CODE: number;
            /**
             * the remaining text after the
             * country calling code is to short for a phone number.
             */
            static TOO_SHORT_AFTER_IDD: number;
            /**
             * the text is too short for a phone number.
             */
            static TOO_SHORT: number;
            /**
             * the text is too long for a phone number.
             */
            static TOO_LONG: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        /**
         * The supported formatting rules for phone numbers.
         */

        /**
         * The supported formatting rules for phone numbers.
         */
        export namespace PhoneNumberFormat {
            export const $gtype: GObject.GType<PhoneNumberFormat>;
        }

        enum PhoneNumberFormat {
            /**
             * format according E.164: "+493055667788".
             */
            E164,
            /**
             * a formatted phone number always
             * starting with the country calling code: "+49 30 55667788".
             */
            INTERNATIONAL,
            /**
             * a formatted phone number in national
             * scope, that is without country calling code: "(030) 55667788".
             */
            NATIONAL,
            /**
             * a tel: URL according to RFC 3966:
             * "tel:+49-30-55667788".
             */
            RFC3966,
        }
        /**
         * The strength of a phone number match.
         *
         * <example>
         * <title>Some examples of phone number matches</title>
         * <para>
         * Let's consider the phone number "+1-221-5423789", then comparing with
         * "+1.221.542.3789" we have get E_PHONE_NUMBER_MATCH_EXACT because country
         * code, region code and local number are matching. Comparing with "2215423789"
         * will result in E_PHONE_NUMBER_MATCH_NATIONAL because the country calling code
         * is missing, but the national portion is matching. Finally comparing with
         * "5423789" gives E_PHONE_NUMBER_MATCH_SHORT. For more detail have a look at
         * the following table:
         *
         * <informaltable border="1" align="center">
         *  <colgroup>
         *   <col width="20%" />
         *   <col width="20%" />
         *   <col width="20%" />
         *   <col width="20%" />
         *   <col width="20%" />
         *  </colgroup>
         *  <tbody>
         *   <tr>
         *    <th></th>
         *    <th align="center">+1-617-5423789</th>
         *    <th align="center">+1-221-5423789</th>
         *    <th align="center">221-5423789</th>
         *    <th align="center">5423789</th>
         *   </tr><tr>
         *    <th align="right">+1-617-5423789</th>
         *    <td align="center">exact</td>
         *    <td align="center">none</td>
         *    <td align="center">none</td>
         *    <td align="center">short</td>
         *   </tr><tr>
         *    <th align="right">+1-221-5423789</th>
         *    <td align="center">none</td>
         *    <td align="center">exact</td>
         *    <td align="center">national</td>
         *    <td align="center">short</td>
         *   </tr><tr>
         *    <th align="right">221-5423789</th>
         *    <td align="center">none</td>
         *    <td align="center">national</td>
         *    <td align="center">national</td>
         *    <td align="center">short</td>
         *   </tr><tr>
         *    <th align="right">5423789</th>
         *    <td align="center">short</td>
         *    <td align="center">short</td>
         *    <td align="center">short</td>
         *    <td align="center">short</td>
         *   </tr>
         *  </tbody>
         * </informaltable>
         * </para>
         * </example>
         */

        /**
         * The strength of a phone number match.
         *
         * <example>
         * <title>Some examples of phone number matches</title>
         * <para>
         * Let's consider the phone number "+1-221-5423789", then comparing with
         * "+1.221.542.3789" we have get E_PHONE_NUMBER_MATCH_EXACT because country
         * code, region code and local number are matching. Comparing with "2215423789"
         * will result in E_PHONE_NUMBER_MATCH_NATIONAL because the country calling code
         * is missing, but the national portion is matching. Finally comparing with
         * "5423789" gives E_PHONE_NUMBER_MATCH_SHORT. For more detail have a look at
         * the following table:
         *
         * <informaltable border="1" align="center">
         *  <colgroup>
         *   <col width="20%" />
         *   <col width="20%" />
         *   <col width="20%" />
         *   <col width="20%" />
         *   <col width="20%" />
         *  </colgroup>
         *  <tbody>
         *   <tr>
         *    <th></th>
         *    <th align="center">+1-617-5423789</th>
         *    <th align="center">+1-221-5423789</th>
         *    <th align="center">221-5423789</th>
         *    <th align="center">5423789</th>
         *   </tr><tr>
         *    <th align="right">+1-617-5423789</th>
         *    <td align="center">exact</td>
         *    <td align="center">none</td>
         *    <td align="center">none</td>
         *    <td align="center">short</td>
         *   </tr><tr>
         *    <th align="right">+1-221-5423789</th>
         *    <td align="center">none</td>
         *    <td align="center">exact</td>
         *    <td align="center">national</td>
         *    <td align="center">short</td>
         *   </tr><tr>
         *    <th align="right">221-5423789</th>
         *    <td align="center">none</td>
         *    <td align="center">national</td>
         *    <td align="center">national</td>
         *    <td align="center">short</td>
         *   </tr><tr>
         *    <th align="right">5423789</th>
         *    <td align="center">short</td>
         *    <td align="center">short</td>
         *    <td align="center">short</td>
         *    <td align="center">short</td>
         *   </tr>
         *  </tbody>
         * </informaltable>
         * </para>
         * </example>
         */
        export namespace PhoneNumberMatch {
            export const $gtype: GObject.GType<PhoneNumberMatch>;
        }

        enum PhoneNumberMatch {
            /**
             * The phone numbers did not match.
             */
            NONE,
            /**
             * The phone numbers matched exactly. Two phone number strings are an exact match
             * if the country code, national phone number, presence of a leading zero for Italian numbers and any
             * extension present are the same.
             */
            EXACT,
            /**
             * The national phone number matched. Two phone number strings match at
             * this strength if either or both has no region specified, and the national phone number
             * and extensions are the same.
             */
            NATIONAL,
            /**
             * The weakest sort of match. Two phone numbers match at
             * this strength if either or both has no region specified, or the region specified is the same, and one national
             * phone number could be a shorter version of the other number. This includes the case where one has an extension specified,
             * and the other does not.
             */
            SHORT,
        }
        class VCardFormat {
            static $gtype: GObject.GType<VCardFormat>;

            // Static fields

            static '21': number;
            static '30': number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Provides comma-separated list of all known categories used by
         * the contacts stored in the book backend.
         */
        const BOOK_BACKEND_PROPERTY_CATEGORIES: string;
        /**
         * Provides comma-separated list of required fields by the book backend.
         * All of these attributes should be set, otherwise the backend will reject
         * saving the contact.
         *
         * The e_contact_field_id() can be used to transform the field name
         * into an #EContactField.
         */
        const BOOK_BACKEND_PROPERTY_REQUIRED_FIELDS: string;
        /**
         * The current overall revision string, this can be used as
         * a quick check to see if data has changed at all since the
         * last time the addressbook revision was observed.
         */
        const BOOK_BACKEND_PROPERTY_REVISION: string;
        /**
         * Provides comma-separated list of supported fields by the book backend.
         * Attributes other than those listed here can be discarded. This can be
         * used to enable/show only supported elements in GUI.
         *
         * The e_contact_field_id() can be used to transform the field name
         * into an #EContactField.
         */
        const BOOK_BACKEND_PROPERTY_SUPPORTED_FIELDS: string;
        const EVC_ADR: string;
        const EVC_BDAY: string;
        const EVC_CALURI: string;
        const EVC_CATEGORIES: string;
        const EVC_CL_UID: string;
        const EVC_CONTACT_LIST: string;
        const EVC_EMAIL: string;
        const EVC_ENCODING: string;
        const EVC_FBURL: string;
        const EVC_FN: string;
        const EVC_GEO: string;
        const EVC_ICSCALENDAR: string;
        const EVC_KEY: string;
        const EVC_LABEL: string;
        const EVC_LOGO: string;
        const EVC_MAILER: string;
        const EVC_N: string;
        const EVC_NICKNAME: string;
        const EVC_NOTE: string;
        const EVC_ORG: string;
        const EVC_PARENT_CL: string;
        const EVC_PHOTO: string;
        const EVC_PRODID: string;
        const EVC_QUOTEDPRINTABLE: string;
        const EVC_REV: string;
        const EVC_ROLE: string;
        const EVC_TEL: string;
        const EVC_TITLE: string;
        const EVC_TYPE: string;
        const EVC_UID: string;
        const EVC_URL: string;
        const EVC_VALUE: string;
        const EVC_VERSION: string;
        const EVC_X_AIM: string;
        const EVC_X_ANNIVERSARY: string;
        const EVC_X_ASSISTANT: string;
        const EVC_X_BIRTHDAY: string;
        const EVC_X_BLOG_URL: string;
        const EVC_X_BOOK_UID: string;
        const EVC_X_CALLBACK: string;
        const EVC_X_COMPANY: string;
        const EVC_X_DEST_CONTACT_UID: string;
        const EVC_X_DEST_EMAIL: string;
        const EVC_X_DEST_EMAIL_NUM: string;
        const EVC_X_DEST_HTML_MAIL: string;
        const EVC_X_DEST_NAME: string;
        const EVC_X_DEST_SOURCE_UID: string;
        const EVC_X_E164: string;
        const EVC_X_FILE_AS: string;
        const EVC_X_GADUGADU: string;
        const EVC_X_GOOGLE_TALK: string;
        const EVC_X_GROUPWISE: string;
        const EVC_X_ICQ: string;
        const EVC_X_JABBER: string;
        const EVC_X_LIST: string;
        const EVC_X_LIST_NAME: string;
        const EVC_X_LIST_SHOW_ADDRESSES: string;
        const EVC_X_MANAGER: string;
        const EVC_X_MATRIX: string;
        const EVC_X_MSN: string;
        const EVC_X_RADIO: string;
        const EVC_X_SIP: string;
        const EVC_X_SKYPE: string;
        const EVC_X_SPOUSE: string;
        const EVC_X_TELEX: string;
        const EVC_X_TTYTDD: string;
        /**
         * Twitter name(s).
         */
        const EVC_X_TWITTER: string;
        const EVC_X_VIDEO_URL: string;
        const EVC_X_WANTS_HTML: string;
        const EVC_X_YAHOO: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceBackendSummarySetup.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_BACKEND_SUMMARY_SETUP: string;
        /**
         * FIXME: Document me!
         */
        const VCARD_21_VALID_PARAMETERS: string;
        /**
         * FIXME: Document me!
         */
        const VCARD_21_VALID_PROPERTIES: string;
        /**
         * Parses a string representing a mailing address into a
         * structure of type #EAddressWestern.
         * @param in_address a string representing a mailing address
         * @returns A new #EAddressWestern structure, or %NULL if    the parsing failed or when the @in_address was %NULL.
         */
        function address_western_parse(in_address?: string | null): AddressWestern | null;
        function book_client_error_create(code: BookClientError | null, custom_msg?: string | null): GLib.Error;
        function book_client_error_quark(): GLib.Quark;
        /**
         * Get localized human readable description of the given error code.
         * @param code an #EBookClientError code
         * @returns Localized human readable description of the given error code
         */
        function book_client_error_to_string(code: BookClientError | null): string;
        /**
         * Returns whether the `self` considers contacts stored in the ascending order.
         * @param self an #EBookIndicesUpdater
         * @returns %TRUE, when considers contacts sorted in ascending order,    %FALSE when in the descending order.
         */
        function book_indices_get_ascending_sort(self: BookIndicesUpdater): boolean;
        /**
         * Sets whether the contacts are sorted in an ascending order; if not,
         * then they are sorted in the descending order. That influences what
         * indexes the indices have set.
         * @param self an #EBookIndicesUpdater
         * @param ascending_sort the value to set
         */
        function book_indices_set_ascending_sort(self: BookIndicesUpdater, ascending_sort: boolean): void;
        /**
         * Create a new #EBookQuery which is the logical AND of the queries in #qs.
         * @param nqs the number of queries to AND
         * @param qs pointer to an array of #EBookQuery items
         * @param unref if %TRUE, the new query takes ownership of the existing queries
         * @returns A new #EBookQuery
         */
        function book_query_and(nqs: number, qs: BookQuery, unref: boolean): BookQuery;
        /**
         * Creates a new #EBookQuery which tests if any field contains `value`.
         * @param value a value
         * @returns the new #EBookQuery
         */
        function book_query_any_field_contains(value: string): BookQuery;
        /**
         * Creates a new #EBookQuery which tests if the field `field` exists.
         * @param field an #EContactField
         * @returns the new #EBookQuery
         */
        function book_query_field_exists(field: ContactField | null): BookQuery;
        /**
         * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
         * @param field an #EContactField to test
         * @param test the test to apply
         * @param value the value to test for
         * @returns the new #EBookQuery
         */
        function book_query_field_test(
            field: ContactField | null,
            test: BookQueryTest | null,
            value: string,
        ): BookQuery;
        /**
         * Parse `query_string` and return a new #EBookQuery representing it.
         * @param query_string the query
         * @returns the new #EBookQuery.
         */
        function book_query_from_string(query_string: string): BookQuery;
        /**
         * Creates a new #EBookQuery which is the logical OR of the queries in #qs.
         * @param nqs the number of queries to OR
         * @param qs pointer to an array of #EBookQuery items
         * @param unref if %TRUE, the new query takes ownership of the existing queries
         * @returns A new #EBookQuery
         */
        function book_query_or(nqs: number, qs: BookQuery, unref: boolean): BookQuery;
        /**
         * Creates a new #EBookQuery which tests if the field `field` exists. `field`
         * should be a vCard field name, such as #EVC_FN or #EVC_X_MSN.
         * @param field a field name
         * @returns the new #EBookQuery
         */
        function book_query_vcard_field_exists(field: string): BookQuery;
        /**
         * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
         * @param field a EVCard field name to test
         * @param test the test to apply
         * @param value the value to test for
         * @returns the new #EBookQuery
         */
        function book_query_vcard_field_test(field: string, test: BookQueryTest | null, value: string): BookQuery;
        /**
         * Encodes the #EConflictResolution into the bit-or of #EBookOperationFlags.
         * The returned value can be bit-or-ed with other #EBookOperationFlags values.
         * @param conflict_resolution an #EConflictResolution
         * @returns a bit-or of #EBookOperationFlags, corresponding to the @conflict_resolution
         */
        function book_util_conflict_resolution_to_operation_flags(
            conflict_resolution: EDataServer.ConflictResolution | null,
        ): number;
        /**
         * Compares list of categories on the `old_contact` with the list of categories
         * on the `new_contact` and fills `out_added` categories and `out_removed` categories
         * accordingly, as if the `old_contact` is replaced with the `new_contact`. When either
         * of the contacts is %NULL, it's considered as having no categories set.
         * Rather than returning empty #GHashTable, the return argument is set to %NULL
         * when there are no added/removed categories.
         *
         * The key of the hash table is the category string, the value is an integer (1).
         * There is used the hash table only for speed.
         *
         * The returned #GHashTable-s should be freed with g_hash_table_unref(),
         * when no longer needed.
         * @param old_contact an old #EContact, or %NULL
         * @param new_contact a new #EContact, or %NULL
         */
        function book_util_diff_categories(
            old_contact: Contact | null,
            new_contact: Contact | null,
        ): [GLib.HashTable<string, number>, GLib.HashTable<string, number>];
        /**
         * Parses the `email_address` and calls `func` for each found address.
         * The first parameter of the `func` is the name, the second parameter
         * of the `func` is the email, the third parameters of the `func` is
         * the `user_data`. The `func` returns %TRUE, to continue processing.
         * @param email_address one or more email addresses as string
         * @param func a function to call for each email @user_data (closure func): user data passed to @func
         */
        function book_util_foreach_address(email_address: string, func: GLib.HRFunc): void;
        /**
         * Decodes the #EConflictResolution from the bit-or of #EBookOperationFlags.
         * @param flags bit-or of #EBookOperationFlags
         * @returns an #EConflictResolution as stored in the @flags
         */
        function book_util_operation_flags_to_conflict_resolution(flags: number): EDataServer.ConflictResolution;
        /**
         * Copies a list of allocated strings, specifically
         * for the #EContactAttrList boxed type used for multi valued
         * contact fields.
         * @param list A #GList of strings
         * @returns A copy of @list
         */
        function contact_attr_list_copy(list: string[]): string[];
        /**
         * Frees a list of allocated strings, specifically
         * for the #EContactAttrList boxed type used for multi valued
         * contact fields.
         * @param list A #GList of strings
         */
        function contact_attr_list_free(list: string[]): void;
        /**
         * Creates a new #EContactDate based on `str`.
         * @param str a date string in the format YYYY-MM-DD or YYYYMMDD
         * @returns A new #EContactDate struct.
         */
        function contact_date_from_string(str: string): ContactDate;
        /**
         * Creates a new #EContactName based on the parsed `name_str`.
         * @param name_str a string representing a contact's full name
         * @returns A new #EContactName struct.
         */
        function contact_name_from_string(name_str: string): ContactName;
        /**
         * Parses `full_name` and returns an #ENameWestern struct filled with
         * the component parts of the name.
         * @param full_name A string containing a western name.
         * @returns A new #ENameWestern struct.
         */
        function name_western_parse(full_name: string): NameWestern;
        /**
         * Compares two phone numbers.
         * @param first_number the first EPhoneNumber to compare
         * @param second_number the second EPhoneNumber to compare
         * @returns The quality of matching for the two phone numbers.
         */
        function phone_number_compare_strings(first_number: string, second_number: string): PhoneNumberMatch;
        /**
         * Compares two phone numbers within the context of `region_code`.
         * @param first_number the first EPhoneNumber to compare
         * @param second_number the second EPhoneNumber to compare
         * @param region_code a two-letter country code, or %NULL
         * @returns The quality of matching for the two phone numbers.
         */
        function phone_number_compare_strings_with_region(
            first_number: string,
            second_number: string,
            region_code?: string | null,
        ): PhoneNumberMatch;
        function phone_number_error_quark(): GLib.Quark;
        /**
         * Parses the string passed in `phone_number`. Note that no validation is
         * performed whether the recognized phone number is valid for a particular
         * region.
         *
         * The two-letter country code passed in `region_code` only is used if the
         * `phone_number` is not written in international format. The application's
         * default region as returned by e_phone_number_get_default_region() is used
         * if `region_code` is %NULL.
         *
         * If the number is guaranteed to start with a '+' followed by the country
         * calling code, then "ZZ" can be passed for `region_code`.
         * @param phone_number the phone number to parse
         * @param region_code a two-letter country code, or %NULL
         * @returns a new #EPhoneNumber instance on success, or %NULL on error. Call e_phone_number_free() to release this instance.
         */
        function phone_number_from_string(phone_number: string, region_code?: string | null): PhoneNumber;
        /**
         * Retrieves the preferred country calling code for `region_code,`
         * e.g. 358 for "fi" or 1 for "en_US`UTF-8`".
         *
         * If %NULL is passed for `region_code` the default region as returned by
         * e_phone_number_get_default_region() is used.
         * @param region_code a two-letter country code, a locale name, or %NULL
         * @returns a valid country calling code, or zero if an unknown region code was passed.
         */
        function phone_number_get_country_code_for_region(region_code?: string | null): number;
        /**
         * Retrieves the current two-letter country code that's used by default for
         * parsing phone numbers in e_phone_number_from_string(). It can be useful
         * to store this number before parsing a bigger number of phone numbers.
         *
         * The result of this functions depends on the current setup of the
         * %LC_ADDRESS category: If that category provides a reasonable value
         * for %_NL_ADDRESS_COUNTRY_AB2 this value is returned. Otherwise the
         * locale name configured for %LC_ADDRESS is parsed.
         * @returns a newly allocated string containing the current locale's two-letter code for phone number parsing.
         */
        function phone_number_get_default_region(): string;
        /**
         * Checks if phone number support is available. It is recommended to call this
         * function before using any of the phone-utils functions to ensure that the
         * required functionality is available, and to pick alternative mechanisms if
         * needed.
         * @returns %TRUE if phone number support is available.
         */
        function phone_number_is_supported(): boolean;
        type ContactAttrList = object | null;
        /**
         * Flags that control the behaviour of an #EBookClientView.
         */

        /**
         * Flags that control the behaviour of an #EBookClientView.
         */
        export namespace BookClientViewFlags {
            export const $gtype: GObject.GType<BookClientViewFlags>;
        }

        enum BookClientViewFlags {
            /**
             * Symbolic value for no flags
             */
            NONE,
            /**
             * If this flag is set then all contacts matching the view's query will
             *   be sent as notifications when starting the view, otherwise only future
             *   changes will be reported.  The default for an #EBookClientView is %TRUE.
             */
            NOTIFY_INITIAL,
            /**
             * Rather than receiving contact changes one-by-one, be notified only
             *   by "content-changed" signal and query contacts by ranges. See
             *   e_book_client_view_set_sort_fields_sync() for more information.
             *   The default is %FALSE. Since: 3.50
             */
            MANUAL_QUERY,
        }
        /**
         * Defines the behaviour of e_book_client_cursor_step().
         */

        /**
         * Defines the behaviour of e_book_client_cursor_step().
         */
        export namespace BookCursorStepFlags {
            export const $gtype: GObject.GType<BookCursorStepFlags>;
        }

        enum BookCursorStepFlags {
            /**
             * The cursor position should be modified while stepping
             */
            MOVE,
            /**
             * Traversed contacts should be listed and returned while stepping.
             */
            FETCH,
        }
        /**
         * Book operation flags, to specify behavior in certain situations. The conflict
         * resolution mode flags cannot be combined together, where the `E_BOOK_OPERATION_FLAG_CONFLICT_KEEP_LOCAL`
         * is the default behavior (and it is used when no other conflict resolution flag is set).
         * The flags can be ignored when the operation or the backend don't support it.
         */

        /**
         * Book operation flags, to specify behavior in certain situations. The conflict
         * resolution mode flags cannot be combined together, where the `E_BOOK_OPERATION_FLAG_CONFLICT_KEEP_LOCAL`
         * is the default behavior (and it is used when no other conflict resolution flag is set).
         * The flags can be ignored when the operation or the backend don't support it.
         */
        export namespace BookOperationFlags {
            export const $gtype: GObject.GType<BookOperationFlags>;
        }

        enum BookOperationFlags {
            /**
             * no operation flags defined
             */
            NONE,
            /**
             * conflict resolution mode, to fail and do not
             *    do any changes, when a conflict is detected
             */
            CONFLICT_FAIL,
            /**
             * conflict resolution mode, to use newer
             *    of the local and the server side data, when a conflict is detected
             */
            CONFLICT_USE_NEWER,
            /**
             * conflict resolution mode, to use
             *    the server data (and local changed), when a conflict is detected
             */
            CONFLICT_KEEP_SERVER,
            /**
             * conflict resolution mode, to use
             *    local data (and always overwrite server data), when a conflict is detected
             */
            CONFLICT_KEEP_LOCAL,
            /**
             * conflict resolution mode, to create
             *    a copy of the data, when a conflict is detected
             */
            CONFLICT_WRITE_COPY,
        }
        module BookIndicesUpdater {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * An abstract object to handle EBookIndices changes.
         */
        abstract class BookIndicesUpdater extends GObject.Object {
            static $gtype: GObject.GType<BookIndicesUpdater>;

            // Constructors

            constructor(properties?: Partial<BookIndicesUpdater.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Notifies the `self` that a new contact with UID `uid` had been added
             * to the set and it occupies the `indices_index` index in the indices.
             * In case the `uid` had been added previously its index is modified
             * instead.
             *
             * This function can be used only after initial call to e_book_indices_updater_take_indices().
             * @param uid a UID of a contact
             * @param indices_index index to the indices array the contact belongs to
             * @returns whether the indices changed
             */
            add(uid: string, indices_index: number): boolean;
            /**
             * Sets the initial indices to be updated by the `self`. If %NULL,
             * then unsets them.
             * @returns current indices, or %NULL, when none had been set yet
             */
            get_indices(): BookIndices | null;
            /**
             * Notifies the `self` that an existing contact with UID `uid` had been removed
             * from the set. Calling the function with `uid` unknown to the `self` does nothing
             * and returns %FALSE.
             *
             * This function can be used only after initial call to e_book_indices_updater_take_indices().
             * @param uid a UID of a removed contact
             * @returns whether the indices changed
             */
            remove(uid: string): boolean;
            /**
             * Sets the initial indices to be updated by the `self`. If %NULL,
             * then unsets them. The function always discards data previously
             * gathered about the involved contacts, regardless whether
             * the indices changed or not.
             *
             * The function assumes ownership of the `indices`.
             * @param indices an #EBookIndices, or %NULL
             * @returns whether the indices changed
             */
            take_indices(indices?: BookIndices | null): boolean;
        }

        module Contact {
            // Constructor properties interface

            interface ConstructorProps extends VCard.ConstructorProps {
                Rev: string;
                address: ContactAttrList;
                address_home: ContactAddress;
                addressHome: ContactAddress;
                address_label_home: string;
                addressLabelHome: string;
                address_label_other: string;
                addressLabelOther: string;
                address_label_work: string;
                addressLabelWork: string;
                address_other: ContactAddress;
                addressOther: ContactAddress;
                address_work: ContactAddress;
                addressWork: ContactAddress;
                anniversary: ContactDate;
                assistant: string;
                assistant_phone: string;
                assistantPhone: string;
                birth_date: ContactDate;
                birthDate: ContactDate;
                blog_url: string;
                blogUrl: string;
                book_uid: string;
                bookUid: string;
                business_fax: string;
                businessFax: string;
                business_phone: string;
                businessPhone: string;
                business_phone_2: string;
                businessPhone2: string;
                callback_phone: string;
                callbackPhone: string;
                caluri: string;
                car_phone: string;
                carPhone: string;
                categories: string;
                category_list: any;
                categoryList: any;
                company_phone: string;
                companyPhone: string;
                email: ContactAttrList;
                email_1: string;
                email1: string;
                email_2: string;
                email2: string;
                email_3: string;
                email3: string;
                email_4: string;
                email4: string;
                family_name: string;
                familyName: string;
                fburl: string;
                file_as: string;
                fileAs: string;
                full_name: string;
                fullName: string;
                geo: ContactGeo;
                given_name: string;
                givenName: string;
                home_fax: string;
                homeFax: string;
                home_phone: string;
                homePhone: string;
                home_phone_2: string;
                homePhone2: string;
                homepage_url: string;
                homepageUrl: string;
                icscalendar: string;
                id: string;
                im_aim: ContactAttrList;
                imAim: ContactAttrList;
                im_aim_home_1: string;
                imAimHome1: string;
                im_aim_home_2: string;
                imAimHome2: string;
                im_aim_home_3: string;
                imAimHome3: string;
                im_aim_work_1: string;
                imAimWork1: string;
                im_aim_work_2: string;
                imAimWork2: string;
                im_aim_work_3: string;
                imAimWork3: string;
                im_gadugadu: ContactAttrList;
                imGadugadu: ContactAttrList;
                im_gadugadu_home_1: string;
                imGadugaduHome1: string;
                im_gadugadu_home_2: string;
                imGadugaduHome2: string;
                im_gadugadu_home_3: string;
                imGadugaduHome3: string;
                im_gadugadu_work_1: string;
                imGadugaduWork1: string;
                im_gadugadu_work_2: string;
                imGadugaduWork2: string;
                im_gadugadu_work_3: string;
                imGadugaduWork3: string;
                im_google_talk: ContactAttrList;
                imGoogleTalk: ContactAttrList;
                im_google_talk_home_1: string;
                imGoogleTalkHome1: string;
                im_google_talk_home_2: string;
                imGoogleTalkHome2: string;
                im_google_talk_home_3: string;
                imGoogleTalkHome3: string;
                im_google_talk_work_1: string;
                imGoogleTalkWork1: string;
                im_google_talk_work_2: string;
                imGoogleTalkWork2: string;
                im_google_talk_work_3: string;
                imGoogleTalkWork3: string;
                im_groupwise: ContactAttrList;
                imGroupwise: ContactAttrList;
                im_groupwise_home_1: string;
                imGroupwiseHome1: string;
                im_groupwise_home_2: string;
                imGroupwiseHome2: string;
                im_groupwise_home_3: string;
                imGroupwiseHome3: string;
                im_groupwise_work_1: string;
                imGroupwiseWork1: string;
                im_groupwise_work_2: string;
                imGroupwiseWork2: string;
                im_groupwise_work_3: string;
                imGroupwiseWork3: string;
                im_icq: ContactAttrList;
                imIcq: ContactAttrList;
                im_icq_home_1: string;
                imIcqHome1: string;
                im_icq_home_2: string;
                imIcqHome2: string;
                im_icq_home_3: string;
                imIcqHome3: string;
                im_icq_work_1: string;
                imIcqWork1: string;
                im_icq_work_2: string;
                imIcqWork2: string;
                im_icq_work_3: string;
                imIcqWork3: string;
                im_jabber: ContactAttrList;
                imJabber: ContactAttrList;
                im_jabber_home_1: string;
                imJabberHome1: string;
                im_jabber_home_2: string;
                imJabberHome2: string;
                im_jabber_home_3: string;
                imJabberHome3: string;
                im_jabber_work_1: string;
                imJabberWork1: string;
                im_jabber_work_2: string;
                imJabberWork2: string;
                im_jabber_work_3: string;
                imJabberWork3: string;
                im_matrix: ContactAttrList;
                imMatrix: ContactAttrList;
                im_matrix_home_1: string;
                imMatrixHome1: string;
                im_matrix_home_2: string;
                imMatrixHome2: string;
                im_matrix_home_3: string;
                imMatrixHome3: string;
                im_matrix_work_1: string;
                imMatrixWork1: string;
                im_matrix_work_2: string;
                imMatrixWork2: string;
                im_matrix_work_3: string;
                imMatrixWork3: string;
                im_msn: ContactAttrList;
                imMsn: ContactAttrList;
                im_msn_home_1: string;
                imMsnHome1: string;
                im_msn_home_2: string;
                imMsnHome2: string;
                im_msn_home_3: string;
                imMsnHome3: string;
                im_msn_work_1: string;
                imMsnWork1: string;
                im_msn_work_2: string;
                imMsnWork2: string;
                im_msn_work_3: string;
                imMsnWork3: string;
                im_skype: ContactAttrList;
                imSkype: ContactAttrList;
                im_skype_home_1: string;
                imSkypeHome1: string;
                im_skype_home_2: string;
                imSkypeHome2: string;
                im_skype_home_3: string;
                imSkypeHome3: string;
                im_skype_work_1: string;
                imSkypeWork1: string;
                im_skype_work_2: string;
                imSkypeWork2: string;
                im_skype_work_3: string;
                imSkypeWork3: string;
                im_twitter: ContactAttrList;
                imTwitter: ContactAttrList;
                im_yahoo: ContactAttrList;
                imYahoo: ContactAttrList;
                im_yahoo_home_1: string;
                imYahooHome1: string;
                im_yahoo_home_2: string;
                imYahooHome2: string;
                im_yahoo_home_3: string;
                imYahooHome3: string;
                im_yahoo_work_1: string;
                imYahooWork1: string;
                im_yahoo_work_2: string;
                imYahooWork2: string;
                im_yahoo_work_3: string;
                imYahooWork3: string;
                isdn_phone: string;
                isdnPhone: string;
                list: boolean;
                list_show_addresses: boolean;
                listShowAddresses: boolean;
                logo: ContactPhoto;
                mailer: string;
                manager: string;
                mobile_phone: string;
                mobilePhone: string;
                name: ContactName;
                name_or_org: string;
                nameOrOrg: string;
                nickname: string;
                note: string;
                office: string;
                org: string;
                org_unit: string;
                orgUnit: string;
                other_fax: string;
                otherFax: string;
                other_phone: string;
                otherPhone: string;
                pager: string;
                pgpCert: ContactCert;
                phone: ContactAttrList;
                photo: ContactPhoto;
                primary_phone: string;
                primaryPhone: string;
                radio: string;
                role: string;
                sip: ContactAttrList;
                spouse: string;
                telex: string;
                title: string;
                tty: string;
                video_url: string;
                videoUrl: string;
                wants_html: boolean;
                wantsHtml: boolean;
                x509Cert: ContactCert;
            }
        }

        class Contact extends VCard {
            static $gtype: GObject.GType<Contact>;

            // Properties

            get Rev(): string;
            set Rev(val: string);
            get address(): ContactAttrList;
            set address(val: ContactAttrList);
            get address_home(): ContactAddress;
            set address_home(val: ContactAddress);
            get addressHome(): ContactAddress;
            set addressHome(val: ContactAddress);
            get address_label_home(): string;
            set address_label_home(val: string);
            get addressLabelHome(): string;
            set addressLabelHome(val: string);
            get address_label_other(): string;
            set address_label_other(val: string);
            get addressLabelOther(): string;
            set addressLabelOther(val: string);
            get address_label_work(): string;
            set address_label_work(val: string);
            get addressLabelWork(): string;
            set addressLabelWork(val: string);
            get address_other(): ContactAddress;
            set address_other(val: ContactAddress);
            get addressOther(): ContactAddress;
            set addressOther(val: ContactAddress);
            get address_work(): ContactAddress;
            set address_work(val: ContactAddress);
            get addressWork(): ContactAddress;
            set addressWork(val: ContactAddress);
            get anniversary(): ContactDate;
            set anniversary(val: ContactDate);
            get assistant(): string;
            set assistant(val: string);
            get assistant_phone(): string;
            set assistant_phone(val: string);
            get assistantPhone(): string;
            set assistantPhone(val: string);
            get birth_date(): ContactDate;
            set birth_date(val: ContactDate);
            get birthDate(): ContactDate;
            set birthDate(val: ContactDate);
            get blog_url(): string;
            set blog_url(val: string);
            get blogUrl(): string;
            set blogUrl(val: string);
            get book_uid(): string;
            set book_uid(val: string);
            get bookUid(): string;
            set bookUid(val: string);
            get business_fax(): string;
            set business_fax(val: string);
            get businessFax(): string;
            set businessFax(val: string);
            get business_phone(): string;
            set business_phone(val: string);
            get businessPhone(): string;
            set businessPhone(val: string);
            get business_phone_2(): string;
            set business_phone_2(val: string);
            get businessPhone2(): string;
            set businessPhone2(val: string);
            get callback_phone(): string;
            set callback_phone(val: string);
            get callbackPhone(): string;
            set callbackPhone(val: string);
            get caluri(): string;
            set caluri(val: string);
            get car_phone(): string;
            set car_phone(val: string);
            get carPhone(): string;
            set carPhone(val: string);
            get categories(): string;
            set categories(val: string);
            get category_list(): any;
            set category_list(val: any);
            get categoryList(): any;
            set categoryList(val: any);
            get company_phone(): string;
            set company_phone(val: string);
            get companyPhone(): string;
            set companyPhone(val: string);
            get email(): ContactAttrList;
            set email(val: ContactAttrList);
            get email_1(): string;
            set email_1(val: string);
            get email1(): string;
            set email1(val: string);
            get email_2(): string;
            set email_2(val: string);
            get email2(): string;
            set email2(val: string);
            get email_3(): string;
            set email_3(val: string);
            get email3(): string;
            set email3(val: string);
            get email_4(): string;
            set email_4(val: string);
            get email4(): string;
            set email4(val: string);
            get family_name(): string;
            set family_name(val: string);
            get familyName(): string;
            set familyName(val: string);
            get fburl(): string;
            set fburl(val: string);
            get file_as(): string;
            set file_as(val: string);
            get fileAs(): string;
            set fileAs(val: string);
            get full_name(): string;
            set full_name(val: string);
            get fullName(): string;
            set fullName(val: string);
            get geo(): ContactGeo;
            set geo(val: ContactGeo);
            get given_name(): string;
            set given_name(val: string);
            get givenName(): string;
            set givenName(val: string);
            get home_fax(): string;
            set home_fax(val: string);
            get homeFax(): string;
            set homeFax(val: string);
            get home_phone(): string;
            set home_phone(val: string);
            get homePhone(): string;
            set homePhone(val: string);
            get home_phone_2(): string;
            set home_phone_2(val: string);
            get homePhone2(): string;
            set homePhone2(val: string);
            get homepage_url(): string;
            set homepage_url(val: string);
            get homepageUrl(): string;
            set homepageUrl(val: string);
            get icscalendar(): string;
            set icscalendar(val: string);
            get id(): string;
            set id(val: string);
            get im_aim(): ContactAttrList;
            set im_aim(val: ContactAttrList);
            get imAim(): ContactAttrList;
            set imAim(val: ContactAttrList);
            get im_aim_home_1(): string;
            set im_aim_home_1(val: string);
            get imAimHome1(): string;
            set imAimHome1(val: string);
            get im_aim_home_2(): string;
            set im_aim_home_2(val: string);
            get imAimHome2(): string;
            set imAimHome2(val: string);
            get im_aim_home_3(): string;
            set im_aim_home_3(val: string);
            get imAimHome3(): string;
            set imAimHome3(val: string);
            get im_aim_work_1(): string;
            set im_aim_work_1(val: string);
            get imAimWork1(): string;
            set imAimWork1(val: string);
            get im_aim_work_2(): string;
            set im_aim_work_2(val: string);
            get imAimWork2(): string;
            set imAimWork2(val: string);
            get im_aim_work_3(): string;
            set im_aim_work_3(val: string);
            get imAimWork3(): string;
            set imAimWork3(val: string);
            get im_gadugadu(): ContactAttrList;
            set im_gadugadu(val: ContactAttrList);
            get imGadugadu(): ContactAttrList;
            set imGadugadu(val: ContactAttrList);
            get im_gadugadu_home_1(): string;
            set im_gadugadu_home_1(val: string);
            get imGadugaduHome1(): string;
            set imGadugaduHome1(val: string);
            get im_gadugadu_home_2(): string;
            set im_gadugadu_home_2(val: string);
            get imGadugaduHome2(): string;
            set imGadugaduHome2(val: string);
            get im_gadugadu_home_3(): string;
            set im_gadugadu_home_3(val: string);
            get imGadugaduHome3(): string;
            set imGadugaduHome3(val: string);
            get im_gadugadu_work_1(): string;
            set im_gadugadu_work_1(val: string);
            get imGadugaduWork1(): string;
            set imGadugaduWork1(val: string);
            get im_gadugadu_work_2(): string;
            set im_gadugadu_work_2(val: string);
            get imGadugaduWork2(): string;
            set imGadugaduWork2(val: string);
            get im_gadugadu_work_3(): string;
            set im_gadugadu_work_3(val: string);
            get imGadugaduWork3(): string;
            set imGadugaduWork3(val: string);
            get im_google_talk(): ContactAttrList;
            set im_google_talk(val: ContactAttrList);
            get imGoogleTalk(): ContactAttrList;
            set imGoogleTalk(val: ContactAttrList);
            get im_google_talk_home_1(): string;
            set im_google_talk_home_1(val: string);
            get imGoogleTalkHome1(): string;
            set imGoogleTalkHome1(val: string);
            get im_google_talk_home_2(): string;
            set im_google_talk_home_2(val: string);
            get imGoogleTalkHome2(): string;
            set imGoogleTalkHome2(val: string);
            get im_google_talk_home_3(): string;
            set im_google_talk_home_3(val: string);
            get imGoogleTalkHome3(): string;
            set imGoogleTalkHome3(val: string);
            get im_google_talk_work_1(): string;
            set im_google_talk_work_1(val: string);
            get imGoogleTalkWork1(): string;
            set imGoogleTalkWork1(val: string);
            get im_google_talk_work_2(): string;
            set im_google_talk_work_2(val: string);
            get imGoogleTalkWork2(): string;
            set imGoogleTalkWork2(val: string);
            get im_google_talk_work_3(): string;
            set im_google_talk_work_3(val: string);
            get imGoogleTalkWork3(): string;
            set imGoogleTalkWork3(val: string);
            get im_groupwise(): ContactAttrList;
            set im_groupwise(val: ContactAttrList);
            get imGroupwise(): ContactAttrList;
            set imGroupwise(val: ContactAttrList);
            get im_groupwise_home_1(): string;
            set im_groupwise_home_1(val: string);
            get imGroupwiseHome1(): string;
            set imGroupwiseHome1(val: string);
            get im_groupwise_home_2(): string;
            set im_groupwise_home_2(val: string);
            get imGroupwiseHome2(): string;
            set imGroupwiseHome2(val: string);
            get im_groupwise_home_3(): string;
            set im_groupwise_home_3(val: string);
            get imGroupwiseHome3(): string;
            set imGroupwiseHome3(val: string);
            get im_groupwise_work_1(): string;
            set im_groupwise_work_1(val: string);
            get imGroupwiseWork1(): string;
            set imGroupwiseWork1(val: string);
            get im_groupwise_work_2(): string;
            set im_groupwise_work_2(val: string);
            get imGroupwiseWork2(): string;
            set imGroupwiseWork2(val: string);
            get im_groupwise_work_3(): string;
            set im_groupwise_work_3(val: string);
            get imGroupwiseWork3(): string;
            set imGroupwiseWork3(val: string);
            get im_icq(): ContactAttrList;
            set im_icq(val: ContactAttrList);
            get imIcq(): ContactAttrList;
            set imIcq(val: ContactAttrList);
            get im_icq_home_1(): string;
            set im_icq_home_1(val: string);
            get imIcqHome1(): string;
            set imIcqHome1(val: string);
            get im_icq_home_2(): string;
            set im_icq_home_2(val: string);
            get imIcqHome2(): string;
            set imIcqHome2(val: string);
            get im_icq_home_3(): string;
            set im_icq_home_3(val: string);
            get imIcqHome3(): string;
            set imIcqHome3(val: string);
            get im_icq_work_1(): string;
            set im_icq_work_1(val: string);
            get imIcqWork1(): string;
            set imIcqWork1(val: string);
            get im_icq_work_2(): string;
            set im_icq_work_2(val: string);
            get imIcqWork2(): string;
            set imIcqWork2(val: string);
            get im_icq_work_3(): string;
            set im_icq_work_3(val: string);
            get imIcqWork3(): string;
            set imIcqWork3(val: string);
            get im_jabber(): ContactAttrList;
            set im_jabber(val: ContactAttrList);
            get imJabber(): ContactAttrList;
            set imJabber(val: ContactAttrList);
            get im_jabber_home_1(): string;
            set im_jabber_home_1(val: string);
            get imJabberHome1(): string;
            set imJabberHome1(val: string);
            get im_jabber_home_2(): string;
            set im_jabber_home_2(val: string);
            get imJabberHome2(): string;
            set imJabberHome2(val: string);
            get im_jabber_home_3(): string;
            set im_jabber_home_3(val: string);
            get imJabberHome3(): string;
            set imJabberHome3(val: string);
            get im_jabber_work_1(): string;
            set im_jabber_work_1(val: string);
            get imJabberWork1(): string;
            set imJabberWork1(val: string);
            get im_jabber_work_2(): string;
            set im_jabber_work_2(val: string);
            get imJabberWork2(): string;
            set imJabberWork2(val: string);
            get im_jabber_work_3(): string;
            set im_jabber_work_3(val: string);
            get imJabberWork3(): string;
            set imJabberWork3(val: string);
            get im_matrix(): ContactAttrList;
            set im_matrix(val: ContactAttrList);
            get imMatrix(): ContactAttrList;
            set imMatrix(val: ContactAttrList);
            get im_matrix_home_1(): string;
            set im_matrix_home_1(val: string);
            get imMatrixHome1(): string;
            set imMatrixHome1(val: string);
            get im_matrix_home_2(): string;
            set im_matrix_home_2(val: string);
            get imMatrixHome2(): string;
            set imMatrixHome2(val: string);
            get im_matrix_home_3(): string;
            set im_matrix_home_3(val: string);
            get imMatrixHome3(): string;
            set imMatrixHome3(val: string);
            get im_matrix_work_1(): string;
            set im_matrix_work_1(val: string);
            get imMatrixWork1(): string;
            set imMatrixWork1(val: string);
            get im_matrix_work_2(): string;
            set im_matrix_work_2(val: string);
            get imMatrixWork2(): string;
            set imMatrixWork2(val: string);
            get im_matrix_work_3(): string;
            set im_matrix_work_3(val: string);
            get imMatrixWork3(): string;
            set imMatrixWork3(val: string);
            get im_msn(): ContactAttrList;
            set im_msn(val: ContactAttrList);
            get imMsn(): ContactAttrList;
            set imMsn(val: ContactAttrList);
            get im_msn_home_1(): string;
            set im_msn_home_1(val: string);
            get imMsnHome1(): string;
            set imMsnHome1(val: string);
            get im_msn_home_2(): string;
            set im_msn_home_2(val: string);
            get imMsnHome2(): string;
            set imMsnHome2(val: string);
            get im_msn_home_3(): string;
            set im_msn_home_3(val: string);
            get imMsnHome3(): string;
            set imMsnHome3(val: string);
            get im_msn_work_1(): string;
            set im_msn_work_1(val: string);
            get imMsnWork1(): string;
            set imMsnWork1(val: string);
            get im_msn_work_2(): string;
            set im_msn_work_2(val: string);
            get imMsnWork2(): string;
            set imMsnWork2(val: string);
            get im_msn_work_3(): string;
            set im_msn_work_3(val: string);
            get imMsnWork3(): string;
            set imMsnWork3(val: string);
            get im_skype(): ContactAttrList;
            set im_skype(val: ContactAttrList);
            get imSkype(): ContactAttrList;
            set imSkype(val: ContactAttrList);
            get im_skype_home_1(): string;
            set im_skype_home_1(val: string);
            get imSkypeHome1(): string;
            set imSkypeHome1(val: string);
            get im_skype_home_2(): string;
            set im_skype_home_2(val: string);
            get imSkypeHome2(): string;
            set imSkypeHome2(val: string);
            get im_skype_home_3(): string;
            set im_skype_home_3(val: string);
            get imSkypeHome3(): string;
            set imSkypeHome3(val: string);
            get im_skype_work_1(): string;
            set im_skype_work_1(val: string);
            get imSkypeWork1(): string;
            set imSkypeWork1(val: string);
            get im_skype_work_2(): string;
            set im_skype_work_2(val: string);
            get imSkypeWork2(): string;
            set imSkypeWork2(val: string);
            get im_skype_work_3(): string;
            set im_skype_work_3(val: string);
            get imSkypeWork3(): string;
            set imSkypeWork3(val: string);
            get im_twitter(): ContactAttrList;
            set im_twitter(val: ContactAttrList);
            get imTwitter(): ContactAttrList;
            set imTwitter(val: ContactAttrList);
            get im_yahoo(): ContactAttrList;
            set im_yahoo(val: ContactAttrList);
            get imYahoo(): ContactAttrList;
            set imYahoo(val: ContactAttrList);
            get im_yahoo_home_1(): string;
            set im_yahoo_home_1(val: string);
            get imYahooHome1(): string;
            set imYahooHome1(val: string);
            get im_yahoo_home_2(): string;
            set im_yahoo_home_2(val: string);
            get imYahooHome2(): string;
            set imYahooHome2(val: string);
            get im_yahoo_home_3(): string;
            set im_yahoo_home_3(val: string);
            get imYahooHome3(): string;
            set imYahooHome3(val: string);
            get im_yahoo_work_1(): string;
            set im_yahoo_work_1(val: string);
            get imYahooWork1(): string;
            set imYahooWork1(val: string);
            get im_yahoo_work_2(): string;
            set im_yahoo_work_2(val: string);
            get imYahooWork2(): string;
            set imYahooWork2(val: string);
            get im_yahoo_work_3(): string;
            set im_yahoo_work_3(val: string);
            get imYahooWork3(): string;
            set imYahooWork3(val: string);
            get isdn_phone(): string;
            set isdn_phone(val: string);
            get isdnPhone(): string;
            set isdnPhone(val: string);
            get list(): boolean;
            set list(val: boolean);
            get list_show_addresses(): boolean;
            set list_show_addresses(val: boolean);
            get listShowAddresses(): boolean;
            set listShowAddresses(val: boolean);
            get logo(): ContactPhoto;
            set logo(val: ContactPhoto);
            get mailer(): string;
            set mailer(val: string);
            get manager(): string;
            set manager(val: string);
            get mobile_phone(): string;
            set mobile_phone(val: string);
            get mobilePhone(): string;
            set mobilePhone(val: string);
            get name(): ContactName;
            set name(val: ContactName);
            get name_or_org(): string;
            get nameOrOrg(): string;
            get nickname(): string;
            set nickname(val: string);
            get note(): string;
            set note(val: string);
            get office(): string;
            set office(val: string);
            get org(): string;
            set org(val: string);
            get org_unit(): string;
            set org_unit(val: string);
            get orgUnit(): string;
            set orgUnit(val: string);
            get other_fax(): string;
            set other_fax(val: string);
            get otherFax(): string;
            set otherFax(val: string);
            get other_phone(): string;
            set other_phone(val: string);
            get otherPhone(): string;
            set otherPhone(val: string);
            get pager(): string;
            set pager(val: string);
            get pgpCert(): ContactCert;
            set pgpCert(val: ContactCert);
            get phone(): ContactAttrList;
            set phone(val: ContactAttrList);
            get photo(): ContactPhoto;
            set photo(val: ContactPhoto);
            get primary_phone(): string;
            set primary_phone(val: string);
            get primaryPhone(): string;
            set primaryPhone(val: string);
            get radio(): string;
            set radio(val: string);
            get role(): string;
            set role(val: string);
            get sip(): ContactAttrList;
            set sip(val: ContactAttrList);
            get spouse(): string;
            set spouse(val: string);
            get telex(): string;
            set telex(val: string);
            get title(): string;
            set title(val: string);
            get tty(): string;
            set tty(val: string);
            get video_url(): string;
            set video_url(val: string);
            get videoUrl(): string;
            set videoUrl(val: string);
            get wants_html(): boolean;
            set wants_html(val: boolean);
            get wantsHtml(): boolean;
            set wantsHtml(val: boolean);
            get x509Cert(): ContactCert;
            set x509Cert(val: ContactCert);

            // Constructors

            constructor(properties?: Partial<Contact.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Contact;

            static new_from_vcard(vcard: string): Contact;

            static new_from_vcard_with_uid(vcard: string, uid: string): Contact;

            // Static methods

            /**
             * Gets the #EContactField corresponding to the `field_name`.
             * @param field_name a string representing a contact field
             */
            static field_id(field_name: string): ContactField;
            /**
             * Gets the #EContactField corresponding to the `vcard_field`.
             * @param vcard_field a string representing a vCard field
             */
            static field_id_from_vcard(vcard_field: string): ContactField;
            /**
             * Returns whether the `field_id` is of a string type,
             * thus it can be used with e_contact_get_const().
             * @param field_id an #EContactField
             */
            static field_is_string(field_id: ContactField): boolean;
            /**
             * Gets the string representation of `field_id`.
             * @param field_id an #EContactField
             */
            static field_name(field_id: ContactField): string;
            /**
             * Gets the #GType used for this contact field, this indicates
             * what kind of value can be passed to e_contact_set().
             * @param field_id an #EContactField
             */
            static field_type(field_id: ContactField): GObject.GType;
            /**
             * Gets a human-readable, translated string representation
             * of `field_id`.
             * @param field_id an #EContactField
             */
            static pretty_name(field_id: ContactField): string;
            /**
             * Gets the vcard attribute corresponding to `field_id,` as a string.
             * @param field_id an #EContactField
             */
            static vcard_attribute(field_id: ContactField): string;

            // Methods

            /**
             * Creates a copy of `contact`.
             * @returns A new #EContact identical to @contact.
             */
            duplicate(): Contact;
            /**
             * Gets the value of `contact'`s field specified by `field_id`.
             * @param field_id an #EContactField
             * @returns Depends on the field's type, owned by the caller. This may be %NULL if the field isn't set.
             */
            get(field_id: ContactField | null): any | null;
            /**
             * Gets a list of the vcard attributes for `contact'`s `field_id`.
             * @param field_id an #EContactField
             * @returns A #GList of pointers to #EVCardAttribute, owned by the caller.
             */
            get_attributes(field_id: ContactField | null): VCardAttribute[];
            // Conflicted with EBookContacts.VCard.get_attributes
            get_attributes(...args: never[]): any;
            /**
             * Gets a list of the vcard attributes for `contact'`s `field_ids`.
             * @param field_ids an array of #EContactField
             * @returns A #GList of pointers to #EVCardAttribute, owned by the caller.
             */
            get_attributes_set(field_ids: ContactField[] | null): VCardAttribute[];
            /**
             * Gets the value of `contact'`s field specified by `field_id,` caching
             * the result so it can be freed later. Use e_contact_field_is_string()
             * to check whether the field can be used here.
             * @param field_id an #EContactField
             * @returns Depends on the field's type, owned by the #EContact.
             */
            get_const(field_id: ContactField | null): any | null;
            /**
             * Tries to modify any #EContactPhoto fields which are
             * stored on the local file system as type %E_CONTACT_PHOTO_TYPE_URI
             * to be inlined and stored as %E_CONTACT_PHOTO_TYPE_INLINED instead.
             * @returns %TRUE if there were no errors, upon error %FALSE is returned    and @error is set.
             */
            inline_local_photos(): boolean;
            /**
             * Sets the value of `contact'`s field specified by `field_id` to `value`.
             * @param field_id an #EContactField
             * @param value a value whose type depends on the @field_id
             */
            set(field_id: ContactField | null, value?: any | null): void;
            // Conflicted with GObject.Object.set
            set(...args: never[]): any;
            /**
             * Sets the vcard attributes for `contact'`s `field_id`.
             * Attributes are added to the contact in the same order as they are in `attributes`.
             * @param field_id an #EContactField
             * @param attributes a #GList of pointers to #EVCardAttribute
             */
            set_attributes(field_id: ContactField | null, attributes: VCardAttribute[]): void;
        }

        module SourceBackendSummarySetup {
            // Constructor properties interface

            interface ConstructorProps extends EDataServer.SourceExtension.ConstructorProps {
                indexed_fields: string;
                indexedFields: string;
                summary_fields: string;
                summaryFields: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceBackendSummarySetup extends EDataServer.SourceExtension {
            static $gtype: GObject.GType<SourceBackendSummarySetup>;

            // Properties

            get indexed_fields(): string;
            set indexed_fields(val: string);
            get indexedFields(): string;
            set indexedFields(val: string);
            get summary_fields(): string;
            set summary_fields(val: string);
            get summaryFields(): string;
            set summaryFields(val: string);

            // Constructors

            constructor(properties?: Partial<SourceBackendSummarySetup.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Fetches the #EContactFields configured to be indexed, with thier respective #EBookIndexTypes.
             * @returns The array of indexed #EContactFields.
             */
            get_indexed_fields(): [ContactField, BookIndexType, number];
            /**
             * Fetches the #EContactFields which are configured to be a part of the summary.
             *
             * <note><para>If there are no configured summary fields, the default configuration is assumed</para></note>
             * @returns An array of #EContactFields @n_fields long, should be freed with g_free() when done.
             */
            get_summary_fields(): [ContactField, number];
            /**
             * Defines indexes for quick reference for the given given #EContactFields in the addressbook.
             *
             * The same #EContactField may be specified multiple times to create multiple indexes
             * with different characteristics. If an #E_BOOK_INDEX_PREFIX index is created it will
             * be used for #E_BOOK_QUERY_BEGINS_WITH queries. An #E_BOOK_INDEX_SUFFIX index
             * will be constructed efficiently for suffix matching and will be used for
             * #E_BOOK_QUERY_ENDS_WITH queries. Similar an #E_BOOK_INDEX_PHONE index will optimize
             * #E_BOOK_QUERY_EQUALS_PHONE_NUMBER searches.
             *
             * <note><para>The specified indexed fields must also be a part of the summary, any indexed fields
             * specified that are not already a part of the summary will be ignored.</para></note>
             * @param fields The array of #EContactFields to set indexes for
             * @param types The array of #EBookIndexTypes defining what types of indexes to create
             * @param n_fields The number elements in the passed @fields, @rule_types and @rules arrays.
             */
            set_indexed_fieldsv(fields: ContactField | null, types: BookIndexType | null, n_fields: number): void;
            /**
             * Sets the summary fields configured for the given addressbook.
             *
             * The fields %E_CONTACT_UID and %E_CONTACT_REV are not optional,
             * they will be stored in the summary regardless of the configured summary.
             *
             * An empty summary configuration is assumed to be the default summary
             * configuration.
             *
             * <note><para>Only #EContactFields with the type #G_TYPE_STRING or #G_TYPE_BOOLEAN
             * are currently supported as summary fields.</para></note>
             * @param fields The array of #EContactFields to set as summary fields
             * @param n_fields The number of #EContactFields in @fields
             */
            set_summary_fieldsv(fields: ContactField | null, n_fields: number): void;
        }

        module VCard {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class VCard extends GObject.Object {
            static $gtype: GObject.GType<VCard>;

            // Constructors

            constructor(properties?: Partial<VCard.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): VCard;

            static new_from_string(str: string): VCard;

            // Static methods

            /**
             * Escapes a string according to RFC2426, section 5.
             * @param s the string to escape
             */
            static escape_string(s: string): string;
            /**
             * Unescapes a string according to RFC2426, section 5.
             * @param s the string to unescape
             */
            static unescape_string(s: string): string;

            // Methods

            /**
             * Prepends `attr` to `evc`. This takes ownership of `attr`.
             * @param attr an #EVCardAttribute to add
             */
            add_attribute(attr: VCardAttribute): void;
            /**
             * Prepends `attr` to `evcard,` setting it to `value`. This takes ownership of
             * `attr`.
             *
             * This is a convenience wrapper around e_vcard_attribute_add_value() and
             * e_vcard_add_attribute().
             * @param attr an #EVCardAttribute to add
             * @param value a value to assign to the attribute
             */
            add_attribute_with_value(attr: VCardAttribute, value: string): void;
            /**
             * Appends `attr` to `evc` to the end of a list of attributes. This takes
             * ownership of `attr`.
             * @param attr an #EVCardAttribute to append
             */
            append_attribute(attr: VCardAttribute): void;
            /**
             * Appends `attr` to `evcard,` setting it to `value`. This takes ownership of
             * `attr`.
             *
             * This is a convenience wrapper around e_vcard_attribute_add_value() and
             * e_vcard_append_attribute().
             * @param attr an #EVCardAttribute to append
             * @param value a value to assign to the attribute
             */
            append_attribute_with_value(attr: VCardAttribute, value: string): void;
            /**
             * Constructs the existing #EVCard, `evc,` setting its vCard data to `str`.
             *
             * This modifies `evc`.
             * @param str a vCard string
             */
            construct(str: string): void;
            /**
             * Similar to e_vcard_construct_with_uid(), but can also
             * be used with an `str` that is not %NULL terminated.
             * @param str a vCard string
             * @param len length of @str, or -1 if @str is %NULL terminated
             * @param uid a unique ID string
             */
            construct_full(str: string, len: number, uid?: string | null): void;
            /**
             * Constructs the existing #EVCard, `evc,` setting its vCard data to `str,` and
             * adding a new UID attribute with the value given in `uid` (if `uid` is
             * non-%NULL).
             *
             * This modifies `evc`.
             * @param str a vCard string
             * @param uid a unique ID string
             */
            construct_with_uid(str: string, uid?: string | null): void;
            /**
             * Prints a dump of `evc'`s structure to stdout. Used for
             * debugging.
             */
            dump_structure(): void;
            /**
             * Get the attribute `name` from `evc`.  The #EVCardAttribute is owned by
             * `evcard` and should not be freed. If the attribute does not exist, %NULL is
             * returned.
             *
             * <note><para>This will only return the <emphasis>first</emphasis> attribute
             * with the given `name`. To get other attributes of that name (for example,
             * other <code>TEL</code> attributes if a contact has multiple telephone
             * numbers), use e_vcard_get_attributes() and iterate over the list searching
             * for matching attributes.</para>
             * <para>This method iterates over all attributes in the #EVCard, so should not
             * be called often. If extracting a large number of attributes from a vCard, it
             * is more efficient to iterate once over the list returned by
             * e_vcard_get_attributes().</para></note>
             * @param name the name of the attribute to get
             * @returns An #EVCardAttribute if found, or %NULL.
             */
            get_attribute(name: string): VCardAttribute | null;
            /**
             * Similar to e_vcard_get_attribute() but this method will not attempt to
             * parse the vCard if it is not already parsed.
             * @param name the name of the attribute to get
             * @returns An #EVCardAttribute if found, or %NULL.
             */
            get_attribute_if_parsed(name: string): VCardAttribute | null;
            /**
             * Gets the list of all attributes from `evcard`. The list and its
             * contents are owned by `evcard,` and must not be freed.
             * @returns A list of attributes of type #EVCardAttribute.
             */
            get_attributes(): VCardAttribute[];
            /**
             * Check if the `evc` has been parsed already, as #EVCard implements lazy parsing
             * of its vCard data. Used for debugging.
             * @returns %TRUE if @evc has been parsed, %FALSE otherwise.
             */
            is_parsed(): boolean;
            /**
             * Removes `attr` from `evc` and frees it. This takes ownership of `attr`.
             * @param attr an #EVCardAttribute to remove
             */
            remove_attribute(attr: VCardAttribute): void;
            /**
             * Removes all the attributes with group name and attribute name equal to the
             * passed in values. If `attr_group` is %NULL or an empty string,
             * it removes all the attributes with passed in name irrespective of
             * their group names.
             * @param attr_group group name of attributes to be removed
             * @param attr_name name of the arributes to be removed
             */
            remove_attributes(attr_group: string | null, attr_name: string): void;
            /**
             * Exports `evc` to a string representation, specified
             * by the `format` argument.
             * @param format the format to export to
             * @returns A newly allocated string representing the vcard.
             */
            to_string(format: VCardFormat | null): string;
            util_dup_x_attribute(x_name: string): string | null;
            /**
             * Sets an "X-" attribute `x_name` to value `value` in `vcard,` or
             * removes it from `vcard,` when `value` is %NULL.
             * @param x_name the attribute name, which starts with "X-"
             * @param value the value to set, or %NULL to unset
             */
            util_set_x_attribute(x_name: string, value?: string | null): void;
        }

        /**
         * Western address structure.
         */
        class AddressWestern {
            static $gtype: GObject.GType<AddressWestern>;

            // Fields

            po_box: string;
            extended: string;
            street: string;
            locality: string;
            region: string;
            postal_code: string;
            country: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    po_box: string;
                    extended: string;
                    street: string;
                    locality: string;
                    region: string;
                    postal_code: string;
                    country: string;
                }>,
            );
            _init(...args: any[]): void;

            // Static methods

            /**
             * Parses a string representing a mailing address into a
             * structure of type #EAddressWestern.
             * @param in_address a string representing a mailing address
             */
            static parse(in_address?: string | null): AddressWestern | null;

            // Methods

            /**
             * Creates a copy of `eaw`.
             * @returns A new #EAddressWestern struct identical to @eaw.
             */
            copy(): AddressWestern;
            /**
             * Frees `eaw` and its contents.
             */
            free(): void;
        }

        /**
         * This is a part of the deprecated #EBook API.
         */
        class BookChange {
            static $gtype: GObject.GType<BookChange>;

            // Fields

            change_type: BookChangeType;
            contact: Contact;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * This is a structure describing sort settings in the view.
         * See e_book_client_view_set_sort_fields_sync() for more information.
         */
        class BookClientViewSortFields {
            static $gtype: GObject.GType<BookClientViewSortFields>;

            // Fields

            field: ContactField;
            sort_type: BookCursorSortType;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * This is a structure describing indices of the contacts in the view.
         * See e_book_client_view_dup_indices() for more information.
         */
        class BookIndices {
            static $gtype: GObject.GType<BookIndices>;

            // Fields

            chr: string;
            index: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    chr: string;
                    index: number;
                }>,
            );
            _init(...args: any[]): void;

            // Static methods

            /**
             * Returns whether the `self` considers contacts stored in the ascending order.
             * @param self an #EBookIndicesUpdater
             */
            static get_ascending_sort(self: BookIndicesUpdater): boolean;
            /**
             * Sets whether the contacts are sorted in an ascending order; if not,
             * then they are sorted in the descending order. That influences what
             * indexes the indices have set.
             * @param self an #EBookIndicesUpdater
             * @param ascending_sort the value to set
             */
            static set_ascending_sort(self: BookIndicesUpdater, ascending_sort: boolean): void;
        }

        type BookIndicesUpdaterClass = typeof BookIndicesUpdater;
        abstract class BookIndicesUpdaterPrivate {
            static $gtype: GObject.GType<BookIndicesUpdaterPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class BookQuery {
            static $gtype: GObject.GType<BookQuery>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Create a new #EBookQuery which is the logical AND of the queries in #qs.
             * @param nqs the number of queries to AND
             * @param qs pointer to an array of #EBookQuery items
             * @param unref if %TRUE, the new query takes ownership of the existing queries
             */
            static and(nqs: number, qs: BookQuery, unref: boolean): BookQuery;
            /**
             * Creates a new #EBookQuery which tests if any field contains `value`.
             * @param value a value
             */
            static any_field_contains(value: string): BookQuery;
            /**
             * Creates a new #EBookQuery which tests if the field `field` exists.
             * @param field an #EContactField
             */
            static field_exists(field: ContactField): BookQuery;
            /**
             * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
             * @param field an #EContactField to test
             * @param test the test to apply
             * @param value the value to test for
             */
            static field_test(field: ContactField, test: BookQueryTest, value: string): BookQuery;
            /**
             * Parse `query_string` and return a new #EBookQuery representing it.
             * @param query_string the query
             */
            static from_string(query_string: string): BookQuery;
            /**
             * Creates a new #EBookQuery which is the logical OR of the queries in #qs.
             * @param nqs the number of queries to OR
             * @param qs pointer to an array of #EBookQuery items
             * @param unref if %TRUE, the new query takes ownership of the existing queries
             */
            static or(nqs: number, qs: BookQuery, unref: boolean): BookQuery;
            /**
             * Creates a new #EBookQuery which tests if the field `field` exists. `field`
             * should be a vCard field name, such as #EVC_FN or #EVC_X_MSN.
             * @param field a field name
             */
            static vcard_field_exists(field: string): BookQuery;
            /**
             * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
             * @param field a EVCard field name to test
             * @param test the test to apply
             * @param value the value to test for
             */
            static vcard_field_test(field: string, test: BookQueryTest, value: string): BookQuery;

            // Methods

            /**
             * Creates a copy of `q`.
             * @returns A new #EBookQuery identical to @q.
             */
            copy(): BookQuery;
            /**
             * Creates a new #EBookQuery which is the opposite of #q.
             * @param unref if %TRUE, the new query takes ownership of the existing queries
             * @returns the new #EBookQuery
             */
            not(unref: boolean): BookQuery;
            /**
             * Increment the reference count on `q`.
             * @returns @q
             */
            ref(): BookQuery;
            /**
             * Return the string representation of `q`.
             * @returns The string form of the query. This string should be freed when finished with.
             */
            to_string(): string;
            /**
             * Decrement the reference count on `q`. When the reference count reaches 0, `q`
             * will be freed and any child queries will have e_book_query_unref() called.
             */
            unref(): void;
        }

        class ContactAddress {
            static $gtype: GObject.GType<ContactAddress>;

            // Fields

            address_format: string;
            po: string;
            ext: string;
            street: string;
            locality: string;
            region: string;
            code: string;
            country: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    address_format: string;
                    po: string;
                    ext: string;
                    street: string;
                    locality: string;
                    region: string;
                    code: string;
                    country: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): ContactAddress;

            // Methods

            /**
             * Frees the `address` struct and its contents.
             */
            free(): void;
        }

        class ContactCert {
            static $gtype: GObject.GType<ContactCert>;

            // Fields

            length: number;
            data: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    length: number;
                    data: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): ContactCert;

            // Methods

            /**
             * Frees the `cert` struct and its contents.
             */
            free(): void;
        }

        type ContactClass = typeof Contact;
        class ContactDate {
            static $gtype: GObject.GType<ContactDate>;

            // Fields

            year: number;
            month: number;
            day: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    year: number;
                    month: number;
                    day: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): ContactDate;

            // Static methods

            /**
             * Creates a new #EContactDate based on `str`.
             * @param str a date string in the format YYYY-MM-DD or YYYYMMDD
             */
            static from_string(str: string): ContactDate;

            // Methods

            /**
             * Checks if `dt1` and `dt2` are the same date.
             * @param dt2 an #EContactDate
             * @returns %TRUE if @dt1 and @dt2 are equal, %FALSE otherwise.
             */
            equal(dt2: ContactDate): boolean;
            /**
             * Frees the `date` struct and its contents.
             */
            free(): void;
            /**
             * Generates a date string in the format YYYY-MM-DD based
             * on the values of `dt`.
             * @returns A date string, owned by the caller.
             */
            to_string(): string;
        }

        class ContactGeo {
            static $gtype: GObject.GType<ContactGeo>;

            // Fields

            latitude: number;
            longitude: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    latitude: number;
                    longitude: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): ContactGeo;

            // Methods

            /**
             * Frees the `geo` struct and its contents.
             */
            free(): void;
        }

        class ContactName {
            static $gtype: GObject.GType<ContactName>;

            // Fields

            family: string;
            given: string;
            additional: string;
            prefixes: string;
            suffixes: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    family: string;
                    given: string;
                    additional: string;
                    prefixes: string;
                    suffixes: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): ContactName;

            // Static methods

            /**
             * Creates a new #EContactName based on the parsed `name_str`.
             * @param name_str a string representing a contact's full name
             */
            static from_string(name_str: string): ContactName;

            // Methods

            /**
             * Creates a copy of `n`.
             * @returns A new #EContactName identical to @n.
             */
            copy(): ContactName;
            /**
             * Frees `name` and its contents.
             */
            free(): void;
            /**
             * Generates a string representation of `name`.
             * @returns The string representation of @name.
             */
            to_string(): string;
        }

        class ContactPhoto {
            static $gtype: GObject.GType<ContactPhoto>;

            // Fields

            type: ContactPhotoType;

            // Constructors

            constructor(
                properties?: Partial<{
                    type: ContactPhotoType;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): ContactPhoto;

            // Methods

            /**
             * Creates a copy of `photo`.
             * @returns A new #EContactPhoto struct identical to @photo.
             */
            copy(): ContactPhoto;
            /**
             * Frees the `photo` struct and its contents.
             */
            free(): void;
            /**
             * Gets the `photo'`s data.
             * @returns the inlined image in the #EContactPhoto, or %NULL if it has not been set.
             */
            get_inlined(): Uint8Array | null;
            /**
             * Gets the `photo'`s mime type.
             * @returns the MIME type of the image, or %NULL if it has not been set.
             */
            get_mime_type(): string | null;
            /**
             * Gets the `photo'`s URI.
             * @returns the URI of the image, or %NULL if it has not been set
             */
            get_uri(): string | null;
            /**
             * Sets the `photo'`s inlined data.
             * @param data the inlined image data
             */
            set_inlined(data: Uint8Array | string): void;
            /**
             * Sets the `photo'`s mime type.
             * @param mime_type the mime type
             */
            set_mime_type(mime_type: string): void;
            /**
             * Sets the `photo'`s URI.
             * @param uri the @photo's URI
             */
            set_uri(uri: string): void;
        }

        abstract class ContactPrivate {
            static $gtype: GObject.GType<ContactPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class NameWestern {
            static $gtype: GObject.GType<NameWestern>;

            // Fields

            prefix: string;
            first: string;
            middle: string;
            nick: string;
            last: string;
            suffix: string;
            full: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    prefix: string;
                    first: string;
                    middle: string;
                    nick: string;
                    last: string;
                    suffix: string;
                    full: string;
                }>,
            );
            _init(...args: any[]): void;

            // Static methods

            /**
             * Parses `full_name` and returns an #ENameWestern struct filled with
             * the component parts of the name.
             * @param full_name A string containing a western name.
             */
            static parse(full_name: string): NameWestern;

            // Methods

            /**
             * Creates a copy of `w`.
             * @returns A new #ENameWestern struct identical to @w.
             */
            copy(): NameWestern;
            /**
             * Frees the `w` struct and its contents.
             */
            free(): void;
        }

        /**
         * This opaque type describes a parsed phone number. It can be copied using
         * e_phone_number_copy(). To release it call e_phone_number_free().
         */
        abstract class PhoneNumber {
            static $gtype: GObject.GType<PhoneNumber>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Compares two phone numbers.
             * @param first_number the first EPhoneNumber to compare
             * @param second_number the second EPhoneNumber to compare
             */
            static compare_strings(first_number: string, second_number: string): PhoneNumberMatch;
            /**
             * Compares two phone numbers within the context of `region_code`.
             * @param first_number the first EPhoneNumber to compare
             * @param second_number the second EPhoneNumber to compare
             * @param region_code a two-letter country code, or %NULL
             */
            static compare_strings_with_region(
                first_number: string,
                second_number: string,
                region_code?: string | null,
            ): PhoneNumberMatch;
            static error_quark(): GLib.Quark;
            /**
             * Parses the string passed in `phone_number`. Note that no validation is
             * performed whether the recognized phone number is valid for a particular
             * region.
             *
             * The two-letter country code passed in `region_code` only is used if the
             * `phone_number` is not written in international format. The application's
             * default region as returned by e_phone_number_get_default_region() is used
             * if `region_code` is %NULL.
             *
             * If the number is guaranteed to start with a '+' followed by the country
             * calling code, then "ZZ" can be passed for `region_code`.
             * @param phone_number the phone number to parse
             * @param region_code a two-letter country code, or %NULL
             */
            static from_string(phone_number: string, region_code?: string | null): PhoneNumber;
            /**
             * Retrieves the preferred country calling code for `region_code,`
             * e.g. 358 for "fi" or 1 for "en_US`UTF-8`".
             *
             * If %NULL is passed for `region_code` the default region as returned by
             * e_phone_number_get_default_region() is used.
             * @param region_code a two-letter country code, a locale name, or %NULL
             */
            static get_country_code_for_region(region_code?: string | null): number;
            /**
             * Retrieves the current two-letter country code that's used by default for
             * parsing phone numbers in e_phone_number_from_string(). It can be useful
             * to store this number before parsing a bigger number of phone numbers.
             *
             * The result of this functions depends on the current setup of the
             * %LC_ADDRESS category: If that category provides a reasonable value
             * for %_NL_ADDRESS_COUNTRY_AB2 this value is returned. Otherwise the
             * locale name configured for %LC_ADDRESS is parsed.
             */
            static get_default_region(): string;
            /**
             * Checks if phone number support is available. It is recommended to call this
             * function before using any of the phone-utils functions to ensure that the
             * required functionality is available, and to pick alternative mechanisms if
             * needed.
             */
            static is_supported(): boolean;

            // Methods

            /**
             * Compares two phone numbers.
             * @param second_number the second EPhoneNumber to compare
             * @returns The quality of matching for the two phone numbers.
             */
            compare(second_number: PhoneNumber): PhoneNumberMatch;
            /**
             * Makes a copy of `phone_number`.
             * @returns A newly allocated EPhoneNumber instance. Call e_phone_number_free() to release this instance.
             */
            copy(): PhoneNumber;
            /**
             * Released the memory occupied by `phone_number`.
             */
            free(): void;
            /**
             * Queries the `phone_number'`s country calling code and optionally stores the country
             * calling code's origin in `source`. For instance when parsing "+1-617-5423789" this
             * function would return one and assing E_PHONE_NUMBER_COUNTRY_FROM_FQTN to `source`.
             * @param source an optional location for storing the phone number's origin, or %NULL
             * @returns A valid country calling code, or zero if no code is known.
             */
            get_country_code(source?: (PhoneNumberCountrySource | null) | null): number;
            /**
             * Queries the national portion of `phone_number` without any call-out
             * prefixes. For instance when parsing "+1-617-5423789" this function would
             * return the string "6175423789".
             * @returns The national portion of @phone_number.
             */
            get_national_number(): string;
            /**
             * Describes the `phone_number` according to the rules applying to `format`.
             * @param format the phone number format to apply
             * @returns A formatted string for @phone_number.
             */
            to_string(format: PhoneNumberFormat | null): string;
        }

        type SourceBackendSummarySetupClass = typeof SourceBackendSummarySetup;
        abstract class SourceBackendSummarySetupPrivate {
            static $gtype: GObject.GType<SourceBackendSummarySetupPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class VCardAttribute {
            static $gtype: GObject.GType<VCardAttribute>;

            // Constructors

            constructor(attr_group: string | null, attr_name: string);
            _init(...args: any[]): void;

            static ['new'](attr_group: string | null, attr_name: string): VCardAttribute;

            // Methods

            /**
             * Prepends `param` to `attr'`s list of parameters. This takes ownership of
             * `param` (and all its values).
             *
             * Duplicate parameters have their values merged, so that all parameter names
             * in `attr` are unique. Values are also merged so that uniqueness is preserved.
             * @param param an #EVCardAttributeParam to add
             */
            add_param(param: VCardAttributeParam): void;
            /**
             * Appends `value` to `param,` then prepends `param` to `attr`. This takes ownership
             * of `param,` but not of `value`.
             *
             * This is a convenience method for e_vcard_attribute_param_add_value() and
             * e_vcard_attribute_add_param().
             * @param param an #EVCardAttributeParam
             * @param value a string value
             */
            add_param_with_value(param: VCardAttributeParam, value: string): void;
            /**
             * Appends `value` to `attr'`s list of values.
             * @param value a string value
             */
            add_value(value: string): void;
            /**
             * Encodes `value` according to the encoding used for `attr,` and appends it to
             * `attr'`s list of values.
             *
             * This should only be used if the #EVCardAttribute has a non-raw encoding (i.e.
             * if it’s encoded in base-64 or quoted-printable encoding).
             * @param value an encoded value
             * @param len the length of the encoded value, in bytes
             */
            add_value_decoded(value: string, len: number): void;
            /**
             * Makes a copy of `attr`.
             * @returns A new #EVCardAttribute identical to @attr.
             */
            copy(): VCardAttribute;
            /**
             * Frees an attribute, its values and its parameters.
             */
            free(): void;
            /**
             * Gets the group name of `attr`.
             * @returns The attribute's group name, or %NULL.
             */
            get_group(): string | null;
            /**
             * Gets the name of `attr`.
             * @returns The attribute's name.
             */
            get_name(): string;
            /**
             * Gets the list of values for the paramater `name` from `attr`. The list and its
             * contents are owned by `attr,` and must not be freed. If no parameter with the
             * given `name` exists, %NULL is returned.
             * @param name a parameter name
             * @returns A list of string elements representing the parameter's values, or %NULL.
             */
            get_param(name: string): string[] | null;
            /**
             * Gets the list of parameters (of type #EVCardAttributeParam) from `attr`. The
             * list and its contents are owned by `attr,` and must not be freed.
             * @returns A list of elements of type #EVCardAttributeParam.
             */
            get_params(): VCardAttributeParam[];
            /**
             * Gets the value of a single-valued #EVCardAttribute, `attr`.
             *
             * For example, for a <code>FN</code> (full name) attribute, this will
             * return the contact’s full name as a single string.
             *
             * This will print a warning if called on an #EVCardAttribute which is not
             * single-valued (i.e. for which e_vcard_attribute_is_single_valued() returns
             * %FALSE). Use e_vcard_attribute_get_values() in such cases instead.
             * @returns A newly allocated string representing the value, or %NULL if the attribute has no value.
             */
            get_value(): string | null;
            /**
             * Gets the value of a single-valued #EVCardAttribute, `attr,` decoding
             * it if necessary according to the encoding given in the vCard’s
             * <code>ENCODING</code> attribute.
             *
             * This will print a warning if called on an #EVCardAttribute which is not
             * single-valued (i.e. for which e_vcard_attribute_is_single_valued() returns
             * %FALSE). Use e_vcard_attribute_get_values_decoded() in such cases instead.
             * @returns A newly allocated #GString representing the value, or %NULL if the attribute has no value.
             */
            get_value_decoded(): GLib.String | null;
            /**
             * Gets the ordered list of values from `attr`. The list and its
             * contents are owned by `attr,` and must not be freed.
             *
             * For example, for an <code>ADR</code> (postal address) attribute, this will
             * return the components of the postal address.
             *
             * This may be called on a single-valued attribute (i.e. one for which
             * e_vcard_attribute_is_single_valued() returns %TRUE) and will return a
             * one-element list in that case. Alternatively, use
             * e_vcard_attribute_get_value() in such cases.
             * @returns A list of string values. They will all be non-%NULL, but may be empty strings. The list itself may be empty.
             */
            get_values(): string[];
            /**
             * Gets the ordered list of values from `attr,` decoding them if
             * necessary according to the encoding given in the vCard’s
             * <code>ENCODING</code> attribute. The list and its contents are owned by
             * `attr,` and must not be freed.
             *
             * This may be called on a single-valued attribute (i.e. one for which
             * e_vcard_attribute_is_single_valued() returns %TRUE) and will return a
             * one-element list in that case. Alternatively, use
             * e_vcard_attribute_get_value_decoded() in such cases.
             * @returns A list of values of type #GString.
             */
            get_values_decoded(): GLib.String[];
            /**
             * Checks if `attr` has an #EVCardAttributeParam with name %EVC_TYPE and `typestr`
             * as one of its values.
             *
             * For example, for the vCard attribute:
             *
             * ```
             * TEL;TYPE=WORK,VOICE:(111) 555-1212
             * ```
             *
             * the following holds true:
             *
             * ```
             * g_assert_true (e_vcard_attribute_has_type (attr, "WORK") == TRUE);
             * g_assert_true (e_vcard_attribute_has_type (attr, "voice") == TRUE);
             * g_assert_true (e_vcard_attribute_has_type (attr, "HOME") == FALSE);
             * ```
             *
             *
             * Comparisons against `typestr` are case-insensitive.
             * @param typestr a string representing the type
             * @returns %TRUE if such a parameter exists, %FALSE otherwise.
             */
            has_type(typestr: string): boolean;
            /**
             * Checks if `attr` has a single value.
             * @returns %TRUE if the attribute has exactly one value, %FALSE otherwise.
             */
            is_single_valued(): boolean;
            /**
             * Removes and frees parameter `param_name` from the attribute `attr`. Parameter
             * names are guaranteed to be unique, so `attr` is guaranteed to have no
             * parameters named `param_name` after this function returns.
             * @param param_name a parameter name
             */
            remove_param(param_name: string): void;
            /**
             * Removes the value `s` from the parameter `param_name` on the attribute `attr`.
             * If `s` was the only value for parameter `param_name,` that parameter is removed
             * entirely from `attr` and freed.
             * @param param_name a parameter name
             * @param s a value
             */
            remove_param_value(param_name: string, s: string): void;
            /**
             * Removes and frees all parameters from `attr`.
             *
             * This also resets the #EVCardAttribute's encoding back to raw.
             */
            remove_params(): void;
            /**
             * Removes value `s` from the value list in `attr`. The value `s` is not freed.
             * @param s a value to remove
             */
            remove_value(s: string): void;
            /**
             * Removes and frees all values from `attr`.
             */
            remove_values(): void;
        }

        class VCardAttributeParam {
            static $gtype: GObject.GType<VCardAttributeParam>;

            // Constructors

            constructor(name: string);
            _init(...args: any[]): void;

            static ['new'](name: string): VCardAttributeParam;

            // Methods

            /**
             * Appends `value` to `param'`s list of values.
             * @param value a string value to add
             */
            add_value(value: string): void;
            /**
             * Makes a copy of `param` and all its values.
             * @returns a new #EVCardAttributeParam identical to @param.
             */
            copy(): VCardAttributeParam;
            /**
             * Frees `param` and its values.
             */
            free(): void;
            /**
             * Gets the name of `param`.
             *
             * For example, for the only parameter of the vCard attribute:
             *
             * ```
             * TEL;TYPE=WORK,VOICE:(111) 555-1212
             * ```
             *
             * this would return <code>TYPE</code> (which is string-equivalent to
             * %EVC_TYPE).
             * @returns The name of the parameter.
             */
            get_name(): string;
            /**
             * Gets the list of values from `param`. The list and its
             * contents are owned by `param,` and must not be freed.
             *
             * For example, for the <code>TYPE</code> parameter of the vCard attribute:
             *
             * ```
             * TEL;TYPE=WORK,VOICE:(111) 555-1212
             * ```
             *
             * this would return the list <code>WORK</code>, <code>VOICE</code>.
             * @returns A list of string elements representing the parameter's values.
             */
            get_values(): string[];
            /**
             * Removes and frees all values from `param`.
             */
            remove_values(): void;
        }

        type VCardClass = typeof VCard;
        abstract class VCardPrivate {
            static $gtype: GObject.GType<VCardPrivate>;

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

    export default EBookContacts;
}

declare module 'gi://EBookContacts' {
    import EBookContacts12 from 'gi://EBookContacts?version=1.2';
    export default EBookContacts12;
}
// END
