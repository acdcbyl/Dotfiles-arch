/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://ICalGLib?version=3.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';

    export namespace ICalGLib {
        /**
         * ICalGLib-3.0
         */

        export namespace ComponentKind {
            export const $gtype: GObject.GType<ComponentKind>;
        }

        enum ComponentKind {
            NO_COMPONENT,
            ANY_COMPONENT,
            XROOT_COMPONENT,
            XATTACH_COMPONENT,
            VEVENT_COMPONENT,
            VTODO_COMPONENT,
            VJOURNAL_COMPONENT,
            VCALENDAR_COMPONENT,
            VAGENDA_COMPONENT,
            VFREEBUSY_COMPONENT,
            VALARM_COMPONENT,
            XAUDIOALARM_COMPONENT,
            XDISPLAYALARM_COMPONENT,
            XEMAILALARM_COMPONENT,
            XPROCEDUREALARM_COMPONENT,
            VTIMEZONE_COMPONENT,
            XSTANDARD_COMPONENT,
            XDAYLIGHT_COMPONENT,
            X_COMPONENT,
            VSCHEDULE_COMPONENT,
            VQUERY_COMPONENT,
            VREPLY_COMPONENT,
            VCAR_COMPONENT,
            VCOMMAND_COMPONENT,
            XLICINVALID_COMPONENT,
            XLICMIMEPART_COMPONENT,
            VAVAILABILITY_COMPONENT,
            XAVAILABLE_COMPONENT,
            VPOLL_COMPONENT,
            VVOTER_COMPONENT,
            XVOTE_COMPONENT,
        }

        export namespace ErrorEnum {
            export const $gtype: GObject.GType<ErrorEnum>;
        }

        enum ErrorEnum {
            NO_ERROR,
            BADARG_ERROR,
            NEWFAILED_ERROR,
            ALLOCATION_ERROR,
            MALFORMEDDATA_ERROR,
            PARSE_ERROR,
            INTERNAL_ERROR,
            FILE_ERROR,
            USAGE_ERROR,
            UNIMPLEMENTED_ERROR,
            UNKNOWN_ERROR,
        }

        export namespace ErrorState {
            export const $gtype: GObject.GType<ErrorState>;
        }

        enum ErrorState {
            FATAL,
            NONFATAL,
            DEFAULT,
            UNKNOWN,
        }

        export namespace ParameterAction {
            export const $gtype: GObject.GType<ParameterAction>;
        }

        enum ParameterAction {
            X,
            ASK,
            ABORT,
            NONE,
        }

        export namespace ParameterCutype {
            export const $gtype: GObject.GType<ParameterCutype>;
        }

        enum ParameterCutype {
            X,
            INDIVIDUAL,
            GROUP,
            RESOURCE,
            ROOM,
            UNKNOWN,
            NONE,
        }

        export namespace ParameterDisplay {
            export const $gtype: GObject.GType<ParameterDisplay>;
        }

        enum ParameterDisplay {
            X,
            BADGE,
            GRAPHIC,
            FULLSIZE,
            THUMBNAIL,
            NONE,
        }

        export namespace ParameterEnable {
            export const $gtype: GObject.GType<ParameterEnable>;
        }

        enum ParameterEnable {
            X,
            TRUE,
            FALSE,
            NONE,
        }

        export namespace ParameterEncoding {
            export const $gtype: GObject.GType<ParameterEncoding>;
        }

        enum ParameterEncoding {
            X,
            '8BIT',
            BASE64,
            NONE,
        }

        export namespace ParameterFbtype {
            export const $gtype: GObject.GType<ParameterFbtype>;
        }

        enum ParameterFbtype {
            X,
            FREE,
            BUSY,
            BUSYUNAVAILABLE,
            BUSYTENTATIVE,
            NONE,
        }

        export namespace ParameterFeature {
            export const $gtype: GObject.GType<ParameterFeature>;
        }

        enum ParameterFeature {
            X,
            AUDIO,
            CHAT,
            FEED,
            MODERATOR,
            PHONE,
            SCREEN,
            VIDEO,
            NONE,
        }

        export namespace ParameterKind {
            export const $gtype: GObject.GType<ParameterKind>;
        }

        enum ParameterKind {
            ANY_PARAMETER,
            ACTIONPARAM_PARAMETER,
            ALTREP_PARAMETER,
            CHARSET_PARAMETER,
            CN_PARAMETER,
            CUTYPE_PARAMETER,
            DELEGATEDFROM_PARAMETER,
            DELEGATEDTO_PARAMETER,
            DIR_PARAMETER,
            DISPLAY_PARAMETER,
            EMAIL_PARAMETER,
            ENABLE_PARAMETER,
            ENCODING_PARAMETER,
            FBTYPE_PARAMETER,
            FEATURE_PARAMETER,
            FILENAME_PARAMETER,
            FMTTYPE_PARAMETER,
            IANA_PARAMETER,
            ID_PARAMETER,
            LABEL_PARAMETER,
            LANGUAGE_PARAMETER,
            LATENCY_PARAMETER,
            LOCAL_PARAMETER,
            LOCALIZE_PARAMETER,
            MANAGEDID_PARAMETER,
            MEMBER_PARAMETER,
            MODIFIED_PARAMETER,
            OPTIONS_PARAMETER,
            PARTSTAT_PARAMETER,
            PATCHACTION_PARAMETER,
            PUBLICCOMMENT_PARAMETER,
            RANGE_PARAMETER,
            REASON_PARAMETER,
            RELATED_PARAMETER,
            RELTYPE_PARAMETER,
            REQUIRED_PARAMETER,
            RESPONSE_PARAMETER,
            ROLE_PARAMETER,
            RSVP_PARAMETER,
            SCHEDULEAGENT_PARAMETER,
            SCHEDULEFORCESEND_PARAMETER,
            SCHEDULESTATUS_PARAMETER,
            SENTBY_PARAMETER,
            SIZE_PARAMETER,
            STAYINFORMED_PARAMETER,
            SUBSTATE_PARAMETER,
            TZID_PARAMETER,
            VALUE_PARAMETER,
            X_PARAMETER,
            XLICCOMPARETYPE_PARAMETER,
            XLICERRORTYPE_PARAMETER,
            NO_PARAMETER,
        }

        export namespace ParameterLocal {
            export const $gtype: GObject.GType<ParameterLocal>;
        }

        enum ParameterLocal {
            X,
            TRUE,
            FALSE,
            NONE,
        }

        export namespace ParameterPartstat {
            export const $gtype: GObject.GType<ParameterPartstat>;
        }

        enum ParameterPartstat {
            X,
            NEEDSACTION,
            ACCEPTED,
            DECLINED,
            TENTATIVE,
            DELEGATED,
            COMPLETED,
            INPROCESS,
            FAILED,
            NONE,
        }

        export namespace ParameterPatchaction {
            export const $gtype: GObject.GType<ParameterPatchaction>;
        }

        enum ParameterPatchaction {
            X,
            CREATE,
            BYNAME,
            BYVALUE,
            BYPARAM,
            NONE,
        }

        export namespace ParameterRange {
            export const $gtype: GObject.GType<ParameterRange>;
        }

        enum ParameterRange {
            X,
            THISANDPRIOR,
            THISANDFUTURE,
            NONE,
        }

        export namespace ParameterRelated {
            export const $gtype: GObject.GType<ParameterRelated>;
        }

        enum ParameterRelated {
            X,
            START,
            END,
            NONE,
        }

        export namespace ParameterReltype {
            export const $gtype: GObject.GType<ParameterReltype>;
        }

        enum ParameterReltype {
            X,
            PARENT,
            CHILD,
            SIBLING,
            POLL,
            NONE,
        }

        export namespace ParameterRequired {
            export const $gtype: GObject.GType<ParameterRequired>;
        }

        enum ParameterRequired {
            X,
            TRUE,
            FALSE,
            NONE,
        }

        export namespace ParameterRole {
            export const $gtype: GObject.GType<ParameterRole>;
        }

        enum ParameterRole {
            X,
            CHAIR,
            REQPARTICIPANT,
            OPTPARTICIPANT,
            NONPARTICIPANT,
            NONE,
        }

        export namespace ParameterRsvp {
            export const $gtype: GObject.GType<ParameterRsvp>;
        }

        enum ParameterRsvp {
            X,
            TRUE,
            FALSE,
            NONE,
        }

        export namespace ParameterScheduleagent {
            export const $gtype: GObject.GType<ParameterScheduleagent>;
        }

        enum ParameterScheduleagent {
            X,
            SERVER,
            CLIENT,
            NONE,
        }

        export namespace ParameterScheduleforcesend {
            export const $gtype: GObject.GType<ParameterScheduleforcesend>;
        }

        enum ParameterScheduleforcesend {
            X,
            REQUEST,
            REPLY,
            NONE,
        }

        export namespace ParameterStayinformed {
            export const $gtype: GObject.GType<ParameterStayinformed>;
        }

        enum ParameterStayinformed {
            X,
            TRUE,
            FALSE,
            NONE,
        }

        export namespace ParameterSubstate {
            export const $gtype: GObject.GType<ParameterSubstate>;
        }

        enum ParameterSubstate {
            X,
            OK,
            ERROR,
            SUSPENDED,
            NONE,
        }

        export namespace ParameterValue {
            export const $gtype: GObject.GType<ParameterValue>;
        }

        enum ParameterValue {
            X,
            BINARY,
            BOOLEAN,
            DATE,
            DURATION,
            FLOAT,
            INTEGER,
            PERIOD,
            RECUR,
            TEXT,
            URI,
            ERROR,
            DATETIME,
            UTCOFFSET,
            CALADDRESS,
            NONE,
        }

        export namespace ParameterXliccomparetype {
            export const $gtype: GObject.GType<ParameterXliccomparetype>;
        }

        enum ParameterXliccomparetype {
            X,
            EQUAL,
            NOTEQUAL,
            LESS,
            GREATER,
            LESSEQUAL,
            GREATEREQUAL,
            REGEX,
            ISNULL,
            ISNOTNULL,
            NONE,
        }

        export namespace ParameterXlicerrortype {
            export const $gtype: GObject.GType<ParameterXlicerrortype>;
        }

        enum ParameterXlicerrortype {
            X,
            COMPONENTPARSEERROR,
            PROPERTYPARSEERROR,
            PARAMETERNAMEPARSEERROR,
            PARAMETERVALUEPARSEERROR,
            VALUEPARSEERROR,
            INVALIDITIP,
            UNKNOWNVCALPROPERROR,
            MIMEPARSEERROR,
            VCALPROPPARSEERROR,
            NONE,
        }

        export namespace ParserState {
            export const $gtype: GObject.GType<ParserState>;
        }

        enum ParserState {
            ERROR,
            SUCCESS,
            BEGIN_COMP,
            END_COMP,
            IN_PROGRESS,
        }

        export namespace PropertyAction {
            export const $gtype: GObject.GType<PropertyAction>;
        }

        enum PropertyAction {
            X,
            AUDIO,
            DISPLAY,
            EMAIL,
            PROCEDURE,
            NONE,
        }

        export namespace PropertyBusytype {
            export const $gtype: GObject.GType<PropertyBusytype>;
        }

        enum PropertyBusytype {
            X,
            BUSY,
            BUSYUNAVAILABLE,
            BUSYTENTATIVE,
            NONE,
        }

        export namespace PropertyCarlevel {
            export const $gtype: GObject.GType<PropertyCarlevel>;
        }

        enum PropertyCarlevel {
            X,
            CARNONE,
            CARMIN,
            CARFULL1,
            NONE,
        }

        export namespace PropertyCmd {
            export const $gtype: GObject.GType<PropertyCmd>;
        }

        enum PropertyCmd {
            X,
            ABORT,
            CONTINUE,
            CREATE,
            DELETE,
            GENERATEUID,
            GETCAPABILITY,
            IDENTIFY,
            MODIFY,
            MOVE,
            REPLY,
            SEARCH,
            SETLOCALE,
            NONE,
        }

        export namespace PropertyKind {
            export const $gtype: GObject.GType<PropertyKind>;
        }

        enum PropertyKind {
            ANY_PROPERTY,
            ACCEPTRESPONSE_PROPERTY,
            ACKNOWLEDGED_PROPERTY,
            ACTION_PROPERTY,
            ALLOWCONFLICT_PROPERTY,
            ATTACH_PROPERTY,
            ATTENDEE_PROPERTY,
            BUSYTYPE_PROPERTY,
            CALID_PROPERTY,
            CALMASTER_PROPERTY,
            CALSCALE_PROPERTY,
            CAPVERSION_PROPERTY,
            CARLEVEL_PROPERTY,
            CARID_PROPERTY,
            CATEGORIES_PROPERTY,
            CLASS_PROPERTY,
            CMD_PROPERTY,
            COLOR_PROPERTY,
            COMMENT_PROPERTY,
            COMPLETED_PROPERTY,
            COMPONENTS_PROPERTY,
            CONTACT_PROPERTY,
            CREATED_PROPERTY,
            CSID_PROPERTY,
            DATEMAX_PROPERTY,
            DATEMIN_PROPERTY,
            DECREED_PROPERTY,
            DEFAULTCHARSET_PROPERTY,
            DEFAULTLOCALE_PROPERTY,
            DEFAULTTZID_PROPERTY,
            DEFAULTVCARS_PROPERTY,
            DENY_PROPERTY,
            DESCRIPTION_PROPERTY,
            DTEND_PROPERTY,
            DTSTAMP_PROPERTY,
            DTSTART_PROPERTY,
            DUE_PROPERTY,
            DURATION_PROPERTY,
            ESTIMATEDDURATION_PROPERTY,
            EXDATE_PROPERTY,
            EXPAND_PROPERTY,
            EXRULE_PROPERTY,
            FREEBUSY_PROPERTY,
            GEO_PROPERTY,
            GRANT_PROPERTY,
            ITIPVERSION_PROPERTY,
            LASTMODIFIED_PROPERTY,
            LOCATION_PROPERTY,
            MAXCOMPONENTSIZE_PROPERTY,
            MAXDATE_PROPERTY,
            MAXRESULTS_PROPERTY,
            MAXRESULTSSIZE_PROPERTY,
            METHOD_PROPERTY,
            MINDATE_PROPERTY,
            MULTIPART_PROPERTY,
            NAME_PROPERTY,
            ORGANIZER_PROPERTY,
            OWNER_PROPERTY,
            PERCENTCOMPLETE_PROPERTY,
            PERMISSION_PROPERTY,
            POLLCOMPLETION_PROPERTY,
            POLLITEMID_PROPERTY,
            POLLMODE_PROPERTY,
            POLLPROPERTIES_PROPERTY,
            POLLWINNER_PROPERTY,
            PRIORITY_PROPERTY,
            PRODID_PROPERTY,
            QUERY_PROPERTY,
            QUERYLEVEL_PROPERTY,
            QUERYID_PROPERTY,
            QUERYNAME_PROPERTY,
            RDATE_PROPERTY,
            RECURACCEPTED_PROPERTY,
            RECUREXPAND_PROPERTY,
            RECURLIMIT_PROPERTY,
            RECURRENCEID_PROPERTY,
            RELATEDTO_PROPERTY,
            RELCALID_PROPERTY,
            REPEAT_PROPERTY,
            REPLYURL_PROPERTY,
            REQUESTSTATUS_PROPERTY,
            RESOURCES_PROPERTY,
            RESPONSE_PROPERTY,
            RESTRICTION_PROPERTY,
            RRULE_PROPERTY,
            SCOPE_PROPERTY,
            SEQUENCE_PROPERTY,
            STATUS_PROPERTY,
            STORESEXPANDED_PROPERTY,
            SUMMARY_PROPERTY,
            TARGET_PROPERTY,
            TASKMODE_PROPERTY,
            TRANSP_PROPERTY,
            TRIGGER_PROPERTY,
            TZID_PROPERTY,
            TZIDALIASOF_PROPERTY,
            TZNAME_PROPERTY,
            TZOFFSETFROM_PROPERTY,
            TZOFFSETTO_PROPERTY,
            TZUNTIL_PROPERTY,
            TZURL_PROPERTY,
            UID_PROPERTY,
            URL_PROPERTY,
            VERSION_PROPERTY,
            VOTER_PROPERTY,
            X_PROPERTY,
            XLICCLASS_PROPERTY,
            XLICCLUSTERCOUNT_PROPERTY,
            XLICERROR_PROPERTY,
            XLICMIMECHARSET_PROPERTY,
            XLICMIMECID_PROPERTY,
            XLICMIMECONTENTTYPE_PROPERTY,
            XLICMIMEENCODING_PROPERTY,
            XLICMIMEFILENAME_PROPERTY,
            XLICMIMEOPTINFO_PROPERTY,
            NO_PROPERTY,
        }

        export namespace PropertyMethod {
            export const $gtype: GObject.GType<PropertyMethod>;
        }

        enum PropertyMethod {
            X,
            PUBLISH,
            REQUEST,
            REPLY,
            ADD,
            CANCEL,
            REFRESH,
            COUNTER,
            DECLINECOUNTER,
            CREATE,
            READ,
            RESPONSE,
            MOVE,
            MODIFY,
            GENERATEUID,
            DELETE,
            NONE,
        }

        export namespace PropertyPollcompletion {
            export const $gtype: GObject.GType<PropertyPollcompletion>;
        }

        enum PropertyPollcompletion {
            X,
            SERVER,
            SERVERSUBMIT,
            SERVERCHOICE,
            CLIENT,
            NONE,
        }

        export namespace PropertyPollmode {
            export const $gtype: GObject.GType<PropertyPollmode>;
        }

        enum PropertyPollmode {
            X,
            BASIC,
            NONE,
        }

        export namespace PropertyQuerylevel {
            export const $gtype: GObject.GType<PropertyQuerylevel>;
        }

        enum PropertyQuerylevel {
            X,
            CALQL1,
            CALQLNONE,
            NONE,
        }

        export namespace PropertyStatus {
            export const $gtype: GObject.GType<PropertyStatus>;
        }

        enum PropertyStatus {
            X,
            TENTATIVE,
            CONFIRMED,
            COMPLETED,
            NEEDSACTION,
            CANCELLED,
            INPROCESS,
            DRAFT,
            FINAL,
            SUBMITTED,
            PENDING,
            FAILED,
            DELETED,
            NONE,
        }

        export namespace PropertyTaskmode {
            export const $gtype: GObject.GType<PropertyTaskmode>;
        }

        enum PropertyTaskmode {
            X,
            AUTOMATICCOMPLETION,
            AUTOMATICFAILURE,
            AUTOMATICSTATUS,
            NONE,
        }

        export namespace PropertyTransp {
            export const $gtype: GObject.GType<PropertyTransp>;
        }

        enum PropertyTransp {
            X,
            OPAQUE,
            OPAQUENOCONFLICT,
            TRANSPARENT,
            TRANSPARENTNOCONFLICT,
            NONE,
        }

        export namespace PropertyXlicclass {
            export const $gtype: GObject.GType<PropertyXlicclass>;
        }

        enum PropertyXlicclass {
            X,
            PUBLISHNEW,
            PUBLISHUPDATE,
            PUBLISHFREEBUSY,
            REQUESTNEW,
            REQUESTUPDATE,
            REQUESTRESCHEDULE,
            REQUESTDELEGATE,
            REQUESTNEWORGANIZER,
            REQUESTFORWARD,
            REQUESTSTATUS,
            REQUESTFREEBUSY,
            REPLYACCEPT,
            REPLYDECLINE,
            REPLYDELEGATE,
            REPLYCRASHERACCEPT,
            REPLYCRASHERDECLINE,
            ADDINSTANCE,
            CANCELEVENT,
            CANCELINSTANCE,
            CANCELALL,
            REFRESH,
            COUNTER,
            DECLINECOUNTER,
            MALFORMED,
            OBSOLETE,
            MISSEQUENCED,
            UNKNOWN,
            NONE,
        }

        export namespace Property_Class {
            export const $gtype: GObject.GType<Property_Class>;
        }

        enum Property_Class {
            X,
            PUBLIC,
            PRIVATE,
            CONFIDENTIAL,
            NONE,
        }

        export namespace RecurrenceArrayMaxValues {
            export const $gtype: GObject.GType<RecurrenceArrayMaxValues>;
        }

        enum RecurrenceArrayMaxValues {
            RECURRENCE_ARRAY_MAX,
        }

        export namespace RecurrenceArraySizes {
            export const $gtype: GObject.GType<RecurrenceArraySizes>;
        }

        enum RecurrenceArraySizes {
            SECOND_SIZE,
            MINUTE_SIZE,
            HOUR_SIZE,
            MONTH_SIZE,
            MONTHDAY_SIZE,
            WEEKNO_SIZE,
            YEARDAY_SIZE,
            SETPOS_SIZE,
            DAY_SIZE,
        }

        export namespace RecurrenceFrequency {
            export const $gtype: GObject.GType<RecurrenceFrequency>;
        }

        enum RecurrenceFrequency {
            SECONDLY_RECURRENCE,
            MINUTELY_RECURRENCE,
            HOURLY_RECURRENCE,
            DAILY_RECURRENCE,
            WEEKLY_RECURRENCE,
            MONTHLY_RECURRENCE,
            YEARLY_RECURRENCE,
            NO_RECURRENCE,
        }

        export namespace RecurrenceSkip {
            export const $gtype: GObject.GType<RecurrenceSkip>;
        }

        enum RecurrenceSkip {
            BACKWARD,
            FORWARD,
            OMIT,
            UNDEFINED,
        }

        export namespace RecurrenceWeekday {
            export const $gtype: GObject.GType<RecurrenceWeekday>;
        }

        enum RecurrenceWeekday {
            NO_WEEKDAY,
            SUNDAY_WEEKDAY,
            MONDAY_WEEKDAY,
            TUESDAY_WEEKDAY,
            WEDNESDAY_WEEKDAY,
            THURSDAY_WEEKDAY,
            FRIDAY_WEEKDAY,
            SATURDAY_WEEKDAY,
        }

        export namespace RequestStatus {
            export const $gtype: GObject.GType<RequestStatus>;
        }

        enum RequestStatus {
            UNKNOWN_STATUS,
            '2_0_SUCCESS_STATUS',
            '2_1_FALLBACK_STATUS',
            '2_2_IGPROP_STATUS',
            '2_3_IGPARAM_STATUS',
            '2_4_IGXPROP_STATUS',
            '2_5_IGXPARAM_STATUS',
            '2_6_IGCOMP_STATUS',
            '2_7_FORWARD_STATUS',
            '2_8_ONEEVENT_STATUS',
            '2_9_TRUNC_STATUS',
            '2_10_ONETODO_STATUS',
            '2_11_TRUNCRRULE_STATUS',
            '3_0_INVPROPNAME_STATUS',
            '3_1_INVPROPVAL_STATUS',
            '3_2_INVPARAM_STATUS',
            '3_3_INVPARAMVAL_STATUS',
            '3_4_INVCOMP_STATUS',
            '3_5_INVTIME_STATUS',
            '3_6_INVRULE_STATUS',
            '3_7_INVCU_STATUS',
            '3_8_NOAUTH_STATUS',
            '3_9_BADVERSION_STATUS',
            '3_10_TOOBIG_STATUS',
            '3_11_MISSREQCOMP_STATUS',
            '3_12_UNKCOMP_STATUS',
            '3_13_BADCOMP_STATUS',
            '3_14_NOCAP_STATUS',
            '3_15_INVCOMMAND',
            '4_0_BUSY_STATUS',
            '4_1_STORE_ACCESS_DENIED',
            '4_2_STORE_FAILED',
            '4_3_STORE_NOT_FOUND',
            '5_0_MAYBE_STATUS',
            '5_1_UNAVAIL_STATUS',
            '5_2_NOSERVICE_STATUS',
            '5_3_NOSCHED_STATUS',
            '6_1_CONTAINER_NOT_FOUND',
            '9_0_UNRECOGNIZED_COMMAND',
        }

        export namespace RestrictionKind {
            export const $gtype: GObject.GType<RestrictionKind>;
        }

        enum RestrictionKind {
            NONE,
            ZERO,
            ONE,
            ZEROPLUS,
            ONEPLUS,
            ZEROORONE,
            ONEEXCLUSIVE,
            ONEMUTUAL,
            UNKNOWN,
        }

        export namespace Unknowntokenhandling {
            export const $gtype: GObject.GType<Unknowntokenhandling>;
        }

        enum Unknowntokenhandling {
            ASSUME_IANA_TOKEN,
            DISCARD_TOKEN,
            TREAT_AS_ERROR,
        }

        export namespace ValueKind {
            export const $gtype: GObject.GType<ValueKind>;
        }

        enum ValueKind {
            ANY_VALUE,
            ACTION_VALUE,
            ATTACH_VALUE,
            BINARY_VALUE,
            BOOLEAN_VALUE,
            BUSYTYPE_VALUE,
            CALADDRESS_VALUE,
            CARLEVEL_VALUE,
            CLASS_VALUE,
            CMD_VALUE,
            DATE_VALUE,
            DATETIME_VALUE,
            DATETIMEDATE_VALUE,
            DATETIMEPERIOD_VALUE,
            DURATION_VALUE,
            FLOAT_VALUE,
            GEO_VALUE,
            INTEGER_VALUE,
            METHOD_VALUE,
            PERIOD_VALUE,
            POLLCOMPLETION_VALUE,
            POLLMODE_VALUE,
            QUERY_VALUE,
            QUERYLEVEL_VALUE,
            RECUR_VALUE,
            REQUESTSTATUS_VALUE,
            STATUS_VALUE,
            STRING_VALUE,
            TASKMODE_VALUE,
            TEXT_VALUE,
            TRANSP_VALUE,
            TRIGGER_VALUE,
            URI_VALUE,
            UTCOFFSET_VALUE,
            X_VALUE,
            XLICCLASS_VALUE,
            NO_VALUE,
        }
        function bt(): void;
        /**
         * Returns the error stored in the library. If no error, return I_CAL_NO_ERROR.
         * @returns Return the error happened
         */
        function errno_return(): ErrorEnum;
        function error_clear_errno(): void;
        /**
         * Shout out the errors to the compiler.
         */
        function error_crash_here(): void;
        /**
         * Gets the state of an error.
         * @param error The error to be checked
         * @returns The state of the @error
         */
        function error_get_error_state(error: ErrorEnum | null): ErrorState;
        /**
         * Gets the #ICalErrorEnum in the string representation. This method called the icalerrorno_return to get
         * the current error.
         * @returns The string representation of the current error
         */
        function error_perror(): string;
        /**
         * Restores the error to specified state.
         * @param error The error to be restored
         * @param es The error state to be restored
         */
        function error_restore(error: string, es: ErrorState | null): void;
        /**
         * Sets the errno.
         * @param x The error to be set
         */
        function error_set_errno(x: ErrorEnum | null): void;
        /**
         * Sets the state to the corresponding error in the library.
         * @param error The error enum
         * @param state The error state
         */
        function error_set_error_state(error: ErrorEnum | null, state: ErrorState | null): void;
        function error_stop_here(): void;
        /**
         * Translates the #ICalErrorEnum to the string representation.
         * @param e The #ICalErrorEnum to be translated
         * @returns The string representation of @e
         */
        function error_strerror(e: ErrorEnum | null): string;
        /**
         * Suppresses the error.
         * @param error The error to be suppressed
         * @returns The error state suppressed
         */
        function error_supress(error: string): ErrorState;
        /**
         * Gets the setting of #ICalUnknowntokenhandling.
         * @returns The setting of #ICalUnknowntokenhandling
         */
        function get_unknown_token_handling_setting(): Unknowntokenhandling;
        /**
         * Adds an existing buffer to the buffer ring.
         * @param buf The existing buffer to be added into the ical
         */
        function memory_add_tmp_buffer(buf?: any | null): void;
        /**
         * Append the character to the buffer. Only use them on normally allocated memory, or on buffers created
         * from icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer. If icalmemory_append_string
         * has to resize a buffer on the ring, the ring will loose track of it an you will have memory problems.
         * @param buf The buffer to be appended. It should not be the memory in ical.
         * @param pos The position at which the new string to be appended
         * @param ch The character to be allocated
         */
        function memory_append_char(buf: number[], pos: number[], ch: number): [number[], number[]];
        /**
         * Appends the string to the buffer. Only use them on normally allocated memory, or on buffers created from
         * icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer. If icalmemory_append_string
         * has to resize a buffer on the ring, the ring will loose track of it an you will have memory problems.
         * @param buf The buffer to be appended. It should not be the memory in ical.
         * @param pos The position at which the new string to be appended
         * @param str The string to be allocated
         */
        function memory_append_string(buf: number[], pos: number[], str: string): [number[], number[]];
        /**
         * Frees the buffer.
         * @param buf The buffer to be freed
         */
        function memory_free_buffer(buf?: any | null): void;
        /**
         * Creates a new buffer with target size. The caller should deallocate it when necessary.
         * @param size The size of the new buffer to be created
         * @returns The newly created buffer with the target size.
         */
        function memory_new_buffer(size: number): any | null;
        /**
         * Resizes the buffer to the target size.
         * @param buf The buffer needs to be resized
         * @param size The target size the buffer to be resized to
         * @returns The buffer after being resized.
         */
        function memory_resize_buffer(buf: any | null, size: number): any | null;
        /**
         * A wrapper around strdup. Partly to trap calls to strdup, partly because in -ansi, gcc on Red Hat claims
         * that strdup is undeclared.
         * @param s The string to be cloned
         * @returns The cloned string.
         */
        function memory_strdup(s: string): string;
        /**
         * Creates a buffer with target size.
         * @param size The size of the buffer to be created
         * @returns The newly created buffer
         */
        function memory_tmp_buffer(size: number): any | null;
        /**
         * Like strdup, but the buffer is on the ring.
         * @param str The string to be copied
         * @returns The new copy of the @str.
         */
        function memory_tmp_copy(str: string): string;
        /**
         * Parses data to #ICalComponent using the given function.
         * @param func The parsing function
         * @returns The parsed #ICalComponent
         */
        function mime_parse(func: MimeParseFunc): Component;
        /**
         * Fills an array with the 'count' number of occurrences generated by the rrule. Note that the times are
         * returned in UTC, but the times are calculated in local time. YOu will have to convert the results back
         * into local time before using them.
         * @param rule The rule of the recurrence
         * @param start The start seconds past the POSIX epoch
         * @param count The number of elements to be filled up in the @array
         * @returns If successful, return the array. NULL if failed.
         */
        function recur_expand_recurrence(rule: string, start: never, count: number): number[];
        /**
         * Returns the code for a request status.
         * @param stat The #ICalRequestStatus to be queried
         * @returns The code for a request status
         */
        function request_status_code(stat: RequestStatus | null): string;
        /**
         * Returns the descriptive text for a request status.
         * @param stat The #ICalRequestStatus to be translated
         * @returns The description of the @stat
         */
        function request_status_desc(stat: RequestStatus | null): string;
        /**
         * Returns a request status for major/minor status numbers.
         * @param major The major number
         * @param minor The minor number
         * @returns The corresponding #ICalRequestStatus
         */
        function request_status_from_num(major: number, minor: number): RequestStatus;
        /**
         * Returns the major number for a request status.
         * @param stat The #ICalRequestStatus to be queried
         * @returns The major number for a request status
         */
        function request_status_major(stat: RequestStatus | null): number;
        /**
         * Returns the minor number for a request status.
         * @param stat The #ICalRequestStatus to be queried
         * @returns The minor number for a request status
         */
        function request_status_minor(stat: RequestStatus | null): number;
        /**
         * Checks whether the #ICalComponent is valid.
         * @param comp The component to be checked
         * @returns Whether the @comp is valid.
         */
        function restriction_check(comp: Component): number;
        /**
         * Compares the kind of restriction and the count to determine whether it is valid.
         * @param restr The restriction kind
         * @param count The number of restrictions
         * @returns Whether it is valid or not. -1 indicates invalid or more analysis. 1 indicates pass and 0 or 2+ indicates fail.
         */
        function restriction_compare(restr: RestrictionKind | null, count: number): number;
        /**
         * Sets #ICalUnknowntokenhandling.
         * @param newSetting A #ICalUnknowntokenhandling
         */
        function set_unknown_token_handling_setting(newSetting: Unknowntokenhandling | null): void;
        interface ComponentForeachRecurrenceFunc {
            (comp: Component, span: TimeSpan): void;
        }
        interface ComponentForeachTZIDFunc {
            (param: Parameter): void;
        }
        interface MimeParseFunc {
            (bytes: number[]): string;
        }
        interface ParserLineGenFunc {
            (bytes: number[]): string;
        }
        module Array {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalArray instance.
         */
        class Array extends Object {
            static $gtype: GObject.GType<Array>;

            // Constructors

            constructor(properties?: Partial<Array.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Creates a deep copy of #ICalArray with the same properties as the `array`.
             * @returns The newly cloned #ICalArray with the same value as the @array
             */
            copy(): Array;
            /**
             * Removes the element at the `position` from the array.
             * @param position The position in which the element will be removed from the array
             */
            remove_element_at(position: number): void;
            /**
             * Gets the size of the array.
             * @returns The size of current array.
             */
            size(): number;
        }

        module Attach {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalAttach instance.
         */
        class Attach extends Object {
            static $gtype: GObject.GType<Attach>;

            // Constructors

            constructor(properties?: Partial<Attach.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_bytes(bytes: GLib.Bytes | Uint8Array): Attach;

            static new_from_data(data: string, free_fn?: GLib.Func | null): Attach;

            static new_from_url(url: string): Attach;

            // Methods

            /**
             * Gets the data, if the #ICalAttach is built from the data.
             * @returns The data component of the @attach. %NULL if it is built from url or there is an error.
             */
            get_data(): string | null;
            // Conflicted with GObject.Object.get_data
            get_data(...args: never[]): any;
            /**
             * Checks whether the #ICalAttach is built from url.
             * @returns Whether the @attach is built from url
             */
            get_is_url(): boolean;
            /**
             * Gets the url, if the #ICalAttach is built from the url.
             * @returns The url component of the @attach. %NULL if it is built from data or there is an error.
             */
            get_url(): string | null;
        }

        module CompIter {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalCompIter instance.
         */
        class CompIter extends Object {
            static $gtype: GObject.GType<CompIter>;

            // Constructors

            constructor(properties?: Partial<CompIter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the current #ICalComponent pointed by #ICalCompIter.
             * @returns A #ICalComponent
             */
            deref(): Component;
            /**
             * Gets the next #ICalComponent pointed by #ICalCompIter.
             * @returns A #ICalCompIter
             */
            next(): Component;
            /**
             * Gets the prior #ICalComponent pointed by #ICalCompIter.
             * @returns A #ICalCompIter
             */
            prior(): Component;
        }

        module Component {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalComponent instance.
         */
        class Component extends Object {
            static $gtype: GObject.GType<Component>;

            // Constructors

            constructor(properties?: Partial<Component.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](kind: ComponentKind): Component;

            static new_from_string(str: string): Component;

            static new_vagenda(): Component;

            static new_valarm(): Component;

            static new_vavailability(): Component;

            static new_vcalendar(): Component;

            static new_vevent(): Component;

            static new_vfreebusy(): Component;

            static new_vjournal(): Component;

            static new_vpoll(): Component;

            static new_vquery(): Component;

            static new_vtimezone(): Component;

            static new_vtodo(): Component;

            static new_vvoter(): Component;

            static new_x(x_name: string): Component;

            static new_xavailable(): Component;

            static new_xdaylight(): Component;

            static new_xstandard(): Component;

            static new_xvote(): Component;

            // Static methods

            /**
             * Converts a string to a #ICalComponentKind.
             * @param string A string
             */
            static kind_from_string(string: string): ComponentKind;
            /**
             * Checks if a #ICalComponentKind is valid.
             * @param kind A #ICalComponentKind
             */
            static kind_is_valid(kind: ComponentKind): boolean;
            /**
             * Converts a #ICalComponentKind to a string.
             * @param kind A #ICalComponentKind
             */
            static kind_to_string(kind: ComponentKind): string;

            // Methods

            /**
             * Adds a #ICalComponent into another #ICalComponent as a child component.
             * @param child A child #ICalComponent
             */
            add_component(child: Component): void;
            /**
             * Adds an #ICalProperty into #ICalComponent.
             * @param property An #ICalProperty
             */
            add_property(property: Property): void;
            /**
             * Converts a #ICalComponent to a string.
             * @returns The string representation of #ICalComponent.
             */
            as_ical_string(): string;
            /**
             * Gets the #ICalCompIter pointing to the first child #ICalComponent.
             * @param kind A #ICalComponentKind
             * @returns A #ICalCompIter
             */
            begin_component(kind: ComponentKind | null): CompIter;
            /**
             * Checks the number of restrictions in #ICalComponent.
             * @returns The number of restrictions in @comp
             */
            check_restrictions(): number;
            /**
             * Deeply clone a #ICalComponent.
             * @returns The newly deeply cloned #ICalComponent.
             */
            clone(): Component;
            /**
             * Converts some X-LIC-ERROR properties into RETURN-STATUS properties.
             */
            convert_errors(): void;
            /**
             * Counts the child #ICalComponent with the target kind in the parent one.
             * @param kind The target #ICalComponentKind
             * @returns The count of child #ICalComponent in the parent one.
             */
            count_components(kind: ComponentKind | null): number;
            /**
             * Counts the number of errors in #ICalComponent.
             * @returns The count of errors.
             */
            count_errors(): number;
            /**
             * Counts the number of #ICalProperty in #ICalComponent.
             * @param kind A #ICalPropertyKind
             * @returns The number of #ICalProperty.
             */
            count_properties(kind: PropertyKind | null): number;
            /**
             * Gets the #ICalCompIter pointing to the end child #ICalComponent.
             * @param kind A #ICalComponentKind
             * @returns A #ICalCompIter
             */
            end_component(kind: ComponentKind | null): CompIter;
            /**
             * Cycles through all recurrences of an event. This function will call the specified callback function for
             * once for the base value of DTSTART, and foreach recurring date/time value. It will filter out events
             * that are specified as an EXDATE or an EXRULE.
             * @param start Ignore timespans before this
             * @param end Ignore timespans after this
             * @param callback Function called for each timespan within the range
             */
            foreach_recurrence(start: Time, end: Time, callback: ComponentForeachRecurrenceFunc): void;
            /**
             * Applies the same manipulation on every tzid in #ICalComponent.
             * @param callback The callback function
             */
            foreach_tzid(callback: ComponentForeachTZIDFunc): void;
            /**
             * Gets the comment of the #ICalComponent.
             * @returns The comment of @comp.
             */
            get_comment(): string;
            /**
             * Gets the current #ICalComponent in #ICalComponent.
             * @returns The current #ICalComponent.
             */
            get_current_component(): Component;
            /**
             * Gets the current #ICalProperty in #ICalComponent.
             * @returns The current #ICalProperty.
             */
            get_current_property(): Property;
            /**
             * Gets the description of the #ICalComponent.
             * @returns The description of @comp.
             */
            get_description(): string;
            /**
             * Gets the dtend of the #ICalComponent.
             * @returns A #ICalTime.
             */
            get_dtend(): Time;
            /**
             * Gets the dtstamp of the #ICalComponent.
             * @returns A #ICalTime.
             */
            get_dtstamp(): Time;
            /**
             * Gets the dtstart of the #ICalComponent.
             * @returns A #ICalTime.
             */
            get_dtstart(): Time;
            /**
             * Gets the due of the #ICalComponent.
             * @returns A #ICalTime.
             */
            get_due(): Time;
            /**
             * Gets the duration of the #ICalComponent.
             * @returns An #ICalDuration.
             */
            get_duration(): Duration;
            /**
             * Gets the first #ICalComponent with specific kind in #ICalComponent.
             * @param kind A #ICalComponentKind
             * @returns The first #ICalComponent.
             */
            get_first_component(kind: ComponentKind | null): Component | null;
            /**
             * Gets the first #ICalProperty with specific kind in #ICalComponent.
             * @param kind A #ICalPropertyKind
             * @returns The first #ICalProperty.
             */
            get_first_property(kind: PropertyKind | null): Property | null;
            /**
             * For VCOMPONENT: Returns a reference to the first VEVENT, VTODO or VJOURNAL.
             * @returns A reference to the first VEVENT, VTODO or VJOURNAL
             */
            get_first_real_component(): Component;
            /**
             * Returns the first VEVENT, VTODO or VJOURNAL sub-component of cop, or comp if it is one of those types.
             * @returns The first VEVENT, VTODO or VJOURNAL sub-component.
             */
            get_inner(): Component | null;
            /**
             * Gets the location of the #ICalComponent.
             * @returns The location of @comp.
             */
            get_location(): string;
            /**
             * Gets the method of the #ICalComponent.
             * @returns A #ICalPropertyMethod.
             */
            get_method(): PropertyMethod;
            /**
             * Gets the next #ICalComponent with specific kind in #ICalComponent.
             * @param kind A #ICalComponentKind
             * @returns The next #ICalComponent.
             */
            get_next_component(kind: ComponentKind | null): Component | null;
            /**
             * Gets the next #ICalProperty with specific kind in #ICalComponent.
             * @param kind A #ICalPropertyKind
             * @returns The next #ICalProperty.
             */
            get_next_property(kind: PropertyKind | null): Property | null;
            /**
             * Gets the parent component of the `component`.
             * @returns The parent #ICalComponent of the @component.
             */
            get_parent(): Component | null;
            /**
             * Gets the recurrenceid of the #ICalComponent.
             * @returns A #ICalTime.
             */
            get_recurrenceid(): Time;
            /**
             * Gets the relcalid of the #ICalComponent.
             * @returns The relcalid of @comp.
             */
            get_relcalid(): string;
            /**
             * Gets the sequence of the #ICalComponent.
             * @returns The sequence of @comp.
             */
            get_sequence(): number;
            /**
             * For VEVENT, VTODO, VJOURNAL and VTIMEZONE: reports the start and end times of an event in UTC.
             * @returns A #ICalTimeSpan.
             */
            get_span(): TimeSpan;
            /**
             * Gets the status of the #ICalComponent.
             * @returns A #ICalPropertyStatus.
             */
            get_status(): PropertyStatus;
            /**
             * Gets the summary of the #ICalComponent.
             * @returns The summary of @comp.
             */
            get_summary(): string;
            /**
             * Returns the icaltimezone in the component corresponding to the TZID, or NULL if it can't be found.
             * @param tzid A string representing timezone
             * @returns A #ICalTimezone.
             */
            get_timezone(tzid: string): Timezone | null;
            /**
             * Gets the uid of the #ICalComponent.
             * @returns The uid of @comp.
             */
            get_uid(): string;
            /**
             * Checks whether #ICalComponent is valid.
             * @returns 1 if yes, 0 if not.
             */
            is_valid(): boolean;
            /**
             * Gets the type of #ICalComponent.
             * @returns A #ICalComponentKind.
             */
            isa(): ComponentKind;
            /**
             * Checks whether the native part of #ICalComponent is icalcomponent.
             * @returns 1 if yes, 0 if not.
             */
            isa_component(): number;
            /**
             * Takes 2 VCALENDAR components and merges the second one into the first, resolving any problems with conflicting
             * TZIDs. comp_to_merge will no longer exist after calling this function.
             * @param comp_to_merge A #ICalComponent. After merged it will not exist any more.
             */
            merge_component(comp_to_merge: Component): void;
            /**
             * Removes a child #ICalComponent from another #ICalComponent.
             * @param child A child #ICalComponent
             */
            remove_component(child: Component): void;
            /**
             * Removes #ICalProperty from #ICalComponent. Caution: The compare is based on address. So you must use
             * the original #ICalProperty as the target.
             * @param property A #ICalProperty
             */
            remove_property(property: Property): void;
            /**
             * Sets the comment of the #ICalComponent.
             * @param v A string representing comment
             */
            set_comment(v: string): void;
            /**
             * Sets the description of the #ICalComponent.
             * @param v A string representing description
             */
            set_description(v: string): void;
            /**
             * Sets the dtend of the #ICalComponent.
             * @param v A #ICalTime
             */
            set_dtend(v: Time): void;
            /**
             * Sets the dtstamp of the #ICalComponent.
             * @param v A #ICalTime
             */
            set_dtstamp(v: Time): void;
            /**
             * Sets the dtstart of the #ICalComponent.
             * @param v A #ICalTime
             */
            set_dtstart(v: Time): void;
            /**
             * Sets the due of the #ICalComponent.
             * @param v A #ICalTime
             */
            set_due(v: Time): void;
            /**
             * Sets the duration of the #ICalComponent.
             * @param v A #ICalDuration
             */
            set_duration(v: Duration): void;
            /**
             * Sets the location of the #ICalComponent.
             * @param v A string representing location
             */
            set_location(v: string): void;
            /**
             * Sets the method of the #ICalComponent.
             * @param method A #ICalPropertyMethod
             */
            set_method(method: PropertyMethod | null): void;
            /**
             * Sets the `parent` #ICalComponent of the specified `component`.
             * @param parent An #ICalComponent, a new parent
             */
            set_parent(parent?: Component | null): void;
            /**
             * Sets the recurrenceid of the #ICalComponent.
             * @param v A #ICalTime
             */
            set_recurrenceid(v: Time): void;
            /**
             * Sets the relcalid of the #ICalComponent.
             * @param v A string representing relcalid
             */
            set_relcalid(v: string): void;
            /**
             * Sets the sequence of the #ICalComponent.
             * @param v The sequence number
             */
            set_sequence(v: number): void;
            /**
             * Sets the status of the #ICalComponent.
             * @param status A #ICalPropertyStatus
             */
            set_status(status: PropertyStatus | null): void;
            /**
             * Sets the summary of the #ICalComponent.
             * @param v A string representing summary
             */
            set_summary(v: string): void;
            /**
             * Sets the uid of the #ICalComponent.
             * @param v A string representing uid
             */
            set_uid(v: string): void;
            /**
             * Removes all X-LIC-ERROR properties.
             */
            strip_errors(): void;
        }

        module Datetimeperiod {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalDatetimeperiod instance.
         */
        class Datetimeperiod extends Object {
            static $gtype: GObject.GType<Datetimeperiod>;

            // Constructors

            constructor(properties?: Partial<Datetimeperiod.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Datetimeperiod;

            // Methods

            /**
             * Gets the period attribute of #ICalDatetimeperiod.
             * @returns The period attribute of @dtp.
             */
            get_period(): Period;
            /**
             * Gets the time attribute of #ICalDatetimeperiod.
             * @returns The time attribute of @dtp.
             */
            get_time(): Time;
            /**
             * Sets the period attribute of #ICalDatetimeperiod.
             * @param period The period attribute of @dtp
             */
            set_period(period: Period): void;
            /**
             * Sets the time attribute of #ICalDatetimeperiod.
             * @param time The time attribute of @dtp
             */
            set_time(time: Time): void;
        }

        module Duration {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalDuration instance.
         */
        class Duration extends Object {
            static $gtype: GObject.GType<Duration>;

            // Constructors

            constructor(properties?: Partial<Duration.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_bad_duration(): Duration;

            static new_from_int(t: number): Duration;

            static new_from_string(str: string): Duration;

            static new_null_duration(): Duration;

            // Methods

            /**
             * Converts the #ICalDuration to the representation in string.
             * @returns The duration in string
             */
            as_ical_string(): string;
            /**
             * Converts the #ICalDuration to the representation in second.
             * @returns The duration in second
             */
            as_int(): number;
            /**
             * Gets the days of #ICalDuration.
             * @returns The days.
             */
            get_days(): number;
            /**
             * Gets the hours of #ICalDuration.
             * @returns The hours.
             */
            get_hours(): number;
            /**
             * Gets the minutes of #ICalDuration.
             * @returns The minutes.
             */
            get_minutes(): number;
            /**
             * Gets the seconds of #ICalDuration.
             * @returns The seconds.
             */
            get_seconds(): number;
            /**
             * Gets the weeks of #ICalDuration.
             * @returns The weeks.
             */
            get_weeks(): number;
            /**
             * Checks whether the #ICalDuration is the bad_duration.
             * @returns 1 if @duration is the bad_duration, 0 if not.
             */
            is_bad_duration(): boolean;
            /**
             * Gets the is_neg of #ICalDuration.
             * @returns The is_neg.
             */
            is_neg(): boolean;
            /**
             * Checks whether the #ICalDuration is the null_duration.
             * @returns 1 if @duration is the null_duration, 0 if not.
             */
            is_null_duration(): boolean;
            /**
             * Sets the days of #ICalDuration.
             * @param days The days
             */
            set_days(days: number): void;
            /**
             * Sets the hours of #ICalDuration.
             * @param hours The hours
             */
            set_hours(hours: number): void;
            /**
             * Sets the is_neg of #ICalDuration.
             * @param is_neg The is_neg
             */
            set_is_neg(is_neg: boolean): void;
            /**
             * Sets the minutes of #ICalDuration.
             * @param minutes The minutes
             */
            set_minutes(minutes: number): void;
            /**
             * Sets the seconds of #ICalDuration.
             * @param seconds The seconds
             */
            set_seconds(seconds: number): void;
            /**
             * Sets the weeks of #ICalDuration.
             * @param weeks The weeks
             */
            set_weeks(weeks: number): void;
        }

        module Geo {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalGeo instance.
         */
        class Geo extends Object {
            static $gtype: GObject.GType<Geo>;

            // Constructors

            constructor(properties?: Partial<Geo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](lat: number, lon: number): Geo;

            // Methods

            /**
             * Creates a new #ICalGeo, copy of `geo`.
             * @returns The newly created #ICalGeo, copy of @geo.
             */
            clone(): Geo;
            /**
             * Gets the latitude of #ICalGeo.
             * @returns The latitude.
             */
            get_lat(): number;
            /**
             * Gets the longitude of #ICalGeo.
             * @returns The longitude.
             */
            get_lon(): number;
            /**
             * Sets the latitude of #ICalGeo.
             * @param lat The latitude
             */
            set_lat(lat: number): void;
            /**
             * Sets the longitude of #ICalGeo.
             * @param lon The longitude
             */
            set_lon(lon: number): void;
        }

        module Object {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                always_destroy: boolean;
                alwaysDestroy: boolean;
                is_global_memory: boolean;
                isGlobalMemory: boolean;
                native: any;
                native_destroy_func: any;
                nativeDestroyFunc: any;
                owner: GObject.Object;
            }
        }

        /**
         * This is an ICalObject instance struct.
         */
        abstract class Object extends GObject.Object {
            static $gtype: GObject.GType<Object>;

            // Properties

            /**
             * Whether free the native libical structure on #ICalObject's finalize even
             * if the object has set an owner.
             */
            get always_destroy(): boolean;
            set always_destroy(val: boolean);
            /**
             * Whether free the native libical structure on #ICalObject's finalize even
             * if the object has set an owner.
             */
            get alwaysDestroy(): boolean;
            set alwaysDestroy(val: boolean);
            /**
             * Whether the native libical structure is from a global shared memory.
             * If TRUE, then it is not freed on #ICalObject's finalize.
             */
            get is_global_memory(): boolean;
            /**
             * Whether the native libical structure is from a global shared memory.
             * If TRUE, then it is not freed on #ICalObject's finalize.
             */
            get isGlobalMemory(): boolean;
            /**
             * The native libical structure for this ICalObject.
             */
            get native(): any;
            /**
             * GDestroyNotify function to use to destroy the native libical pointer.
             */
            get native_destroy_func(): any;
            set native_destroy_func(val: any);
            /**
             * GDestroyNotify function to use to destroy the native libical pointer.
             */
            get nativeDestroyFunc(): any;
            set nativeDestroyFunc(val: any);
            /**
             * Owner of the native libical structure. If set, then it is
             * responsible for a free of the native libical structure.
             */
            get owner(): GObject.Object;
            set owner(val: GObject.Object);

            // Constructors

            constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Frees all global objects. Any references to them are invalidated
             * by this call, unless they had been g_object_ref()-ed manually.
             */
            static free_global_objects(): void;

            // Methods

            /**
             * Adds a `depender` into the list of objects which should not be destroyed before
             * this `iobject`. It's usually used for cases where the `iobject` uses native libical
             * structure from the `depender`. The `depender` is referenced. It's illegal to try
             * to add one `depender` multiple times.
             * @param depender a #GObject depender
             */
            add_depender(depender: GObject.Object): void;
            /**
             * Obtain the `ICalObject:`:always-destroy property value.
             * @returns Whether the native libical structure is freed even when an owner is set.
             */
            get_always_destroy(): boolean;
            /**
             * Obtains whether the native libical structure is a global shared memory,
             * thus should not be destroyed. This can be set only during construction time.
             * @returns Whether the native libical structure is a global shared memory.
             */
            get_is_global_memory(): boolean;
            /**
             * Obtain current owner of the native libical structure. The returned pointer,
             * if not NULL, is referenced for thread safety. Unref it with g_object_unref
             * when done with it.
             * @returns Current owner of the libical    native structure. Returns %NULL when there is no owner.
             */
            ref_owner<T = GObject.Object>(): T;
            /**
             * Removes a `depender` from the list of objects which should not be destroyed before
             * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
             * to remove the `depender` which is not in the internal list.
             * @param depender a #GObject depender
             */
            remove_depender(depender: GObject.Object): void;
            /**
             * Unref and remove the owner.
             */
            remove_owner(): void;
            /**
             * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
             * libical structure is always freed, even when an owner of the `iobject` is set.
             * @param value value to set
             */
            set_always_destroy(value: boolean): void;
            /**
             * Sets a function to be used to destroy the native libical structure.
             */
            set_native_destroy_func(): void;
            /**
             * Sets an owner of the native libical structure, that is an object responsible
             * for a destroy of the native libical structure.
             * @param owner Owner of the native libical structure
             */
            set_owner(owner: GObject.Object): void;
            /**
             * Obtain native libical structure pointer associated with this `iobject` and sets the one
             * at `iobject` to NULL, thus it's invalid since now on.
             * @returns Native libical structure pointer associated with this @iobject.
             */
            steal_native(): any | null;
        }

        module Parameter {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalParameter instance.
         */
        class Parameter extends Object {
            static $gtype: GObject.GType<Parameter>;

            // Constructors

            constructor(properties?: Partial<Parameter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](v: ParameterKind): Parameter;

            static new_actionparam(v: ParameterAction): Parameter;

            static new_altrep(v: string): Parameter;

            static new_charset(v: string): Parameter;

            static new_cn(v: string): Parameter;

            static new_cutype(v: ParameterCutype): Parameter;

            static new_delegatedfrom(v: string): Parameter;

            static new_delegatedto(v: string): Parameter;

            static new_dir(v: string): Parameter;

            static new_display(value: ParameterDisplay): Parameter;

            static new_email(value: string): Parameter;

            static new_enable(v: ParameterEnable): Parameter;

            static new_encoding(v: ParameterEncoding): Parameter;

            static new_fbtype(v: ParameterFbtype): Parameter;

            static new_feature(value: ParameterFeature): Parameter;

            static new_filename(v: string): Parameter;

            static new_fmttype(v: string): Parameter;

            static new_from_string(value: string): Parameter;

            static new_from_value_string(kind: ParameterKind, value: string): Parameter;

            static new_iana(v: string): Parameter;

            static new_id(v: string): Parameter;

            static new_label(value: string): Parameter;

            static new_language(v: string): Parameter;

            static new_latency(v: string): Parameter;

            static new_local(v: ParameterLocal): Parameter;

            static new_localize(v: string): Parameter;

            static new_managedid(v: string): Parameter;

            static new_member(v: string): Parameter;

            static new_modified(v: string): Parameter;

            static new_options(v: string): Parameter;

            static new_partstat(v: ParameterPartstat): Parameter;

            static new_patchaction(value: ParameterPatchaction): Parameter;

            static new_publiccomment(v: string): Parameter;

            static new_range(v: ParameterRange): Parameter;

            static new_reason(v: string): Parameter;

            static new_related(v: ParameterRelated): Parameter;

            static new_reltype(v: ParameterReltype): Parameter;

            static new_required(v: ParameterRequired): Parameter;

            static new_response(v: number): Parameter;

            static new_role(v: ParameterRole): Parameter;

            static new_rsvp(v: ParameterRsvp): Parameter;

            static new_scheduleagent(v: ParameterScheduleagent): Parameter;

            static new_scheduleforcesend(v: ParameterScheduleforcesend): Parameter;

            static new_schedulestatus(v: string): Parameter;

            static new_sentby(v: string): Parameter;

            static new_size(v: string): Parameter;

            static new_stayinformed(v: ParameterStayinformed): Parameter;

            static new_substate(v: ParameterSubstate): Parameter;

            static new_tzid(v: string): Parameter;

            static new_value(v: ParameterValue): Parameter;

            static new_x(v: string): Parameter;

            static new_xliccomparetype(v: ParameterXliccomparetype): Parameter;

            static new_xlicerrortype(v: ParameterXlicerrortype): Parameter;

            // Static methods

            /**
             * Converts a string to the #ICalParameterKind.
             * @param string The string representation of the #ICalParameter
             */
            static kind_from_string(string: string): ParameterKind;
            /**
             * Checks whether #ICalParameterKind is valid.
             * @param kind The #ICalPropertyKind
             */
            static kind_is_valid(kind: ParameterKind): boolean;
            /**
             * Converts the #ICalParameter to the string representation.
             * @param kind The #ICalParameterKind to be converted
             */
            static kind_to_string(kind: ParameterKind): string;
            /**
             * Converts the #ICalParameterValue to #ICalValueKind.
             * @param value A #ICalParameterValue
             */
            static value_to_value_kind(value: ParameterValue): ValueKind;

            // Methods

            /**
             * Converts an #ICalParameter to the string representation.
             * @returns The string representation of the @parameter.
             */
            as_ical_string(): string;
            /**
             * Deep clone a #ICalParameter.
             * @returns The newly created #ICalParameter with the same properties as the @p.
             */
            clone(): Parameter;
            get_actionparam(): ParameterAction;
            get_altrep(): string | null;
            get_charset(): string | null;
            get_cn(): string | null;
            get_cutype(): ParameterCutype | null;
            get_delegatedfrom(): string | null;
            get_delegatedto(): string | null;
            get_dir(): string | null;
            get_display(): ParameterDisplay;
            get_email(): string | null;
            get_enable(): ParameterEnable;
            get_encoding(): ParameterEncoding;
            get_fbtype(): ParameterFbtype;
            get_feature(): ParameterFeature;
            get_filename(): string | null;
            get_fmttype(): string | null;
            get_iana(): string | null;
            /**
             * Gets the iana_name property of the native part of the #ICalParameter.
             * @returns The property of the @value
             */
            get_iana_name(): string | null;
            /**
             * Gets the iana_value property of the native part of the #ICalParameter.
             * @returns The property of the @value
             */
            get_iana_value(): string | null;
            get_id(): string | null;
            get_label(): string | null;
            get_language(): string | null;
            get_latency(): string | null;
            get_local(): ParameterLocal;
            get_localize(): string | null;
            get_managedid(): string | null;
            get_member(): string | null;
            get_modified(): string | null;
            get_options(): string | null;
            /**
             * Gets the parent #ICalProperty of the specified #ICalParameter.
             * @returns The parent #ICalProperty
             */
            get_parent(): Property | null;
            get_partstat(): ParameterPartstat;
            get_patchaction(): ParameterPatchaction;
            get_publiccomment(): string | null;
            get_range(): ParameterRange;
            get_reason(): string | null;
            get_related(): ParameterRelated;
            get_reltype(): ParameterReltype;
            get_required(): ParameterRequired;
            get_response(): number;
            get_role(): ParameterRole;
            get_rsvp(): ParameterRsvp;
            get_scheduleagent(): ParameterScheduleagent;
            get_scheduleforcesend(): ParameterScheduleforcesend;
            get_schedulestatus(): string | null;
            get_sentby(): string | null;
            get_size(): string | null;
            get_stayinformed(): ParameterStayinformed;
            get_substate(): ParameterSubstate;
            get_tzid(): string | null;
            get_value(): ParameterValue;
            get_x(): string | null;
            get_xliccomparetype(): ParameterXliccomparetype;
            get_xlicerrortype(): ParameterXlicerrortype;
            /**
             * Gets the xname property of the native part of the #ICalParameter.
             * @returns The property of the @value
             */
            get_xname(): string | null;
            /**
             * Gets the xvalue property of the native part of the #ICalParameter.
             * @returns The property of the @value
             */
            get_xvalue(): string | null;
            /**
             * Checks whether native parts of two #ICalParameters have the same name.
             * @param param2 The #ICalParameter to be checked
             * @returns 1 if the parameters have the same name, 0 or not.
             */
            has_same_name(param2: Parameter): number;
            /**
             * Checks the type of a #ICalParameter.
             * @returns The type of the @parameter.
             */
            isa(): ParameterKind;
            /**
             * Checks whether the native part of the #ICalParameter is of type icalparameter.
             * @returns 1 if the native part is of type icalparameter, 0 if not.
             */
            isa_parameter(): number;
            set_actionparam(v: ParameterAction | null): void;
            set_altrep(v: string): void;
            set_charset(v: string): void;
            set_cn(v: string): void;
            set_cutype(v: ParameterCutype | null): void;
            set_delegatedfrom(v: string): void;
            set_delegatedto(v: string): void;
            set_dir(v: string): void;
            set_display(value: ParameterDisplay | null): void;
            set_email(value: string): void;
            set_enable(v: ParameterEnable | null): void;
            set_encoding(v: ParameterEncoding | null): void;
            set_fbtype(v: ParameterFbtype | null): void;
            set_feature(value: ParameterFeature | null): void;
            set_filename(v: string): void;
            set_fmttype(v: string): void;
            set_iana(v: string): void;
            /**
             * Sets the iana_name property of the native part of the #ICalParameter.
             * @param v The name to be set into the @param
             */
            set_iana_name(v: string): void;
            /**
             * Sets the iana_value property of the native part of the #ICalParameter.
             * @param v The value to be set into the @param
             */
            set_iana_value(v: string): void;
            set_id(v: string): void;
            set_label(value: string): void;
            set_language(v: string): void;
            set_latency(v: string): void;
            set_local(v: ParameterLocal | null): void;
            set_localize(v: string): void;
            set_managedid(v: string): void;
            set_member(v: string): void;
            set_modified(v: string): void;
            set_options(v: string): void;
            /**
             * Sets the parent #ICalProperty of an #ICalParameter.
             * @param property The parent #ICalProperty
             */
            set_parent(property?: Property | null): void;
            set_partstat(v: ParameterPartstat | null): void;
            set_patchaction(value: ParameterPatchaction | null): void;
            set_publiccomment(v: string): void;
            set_range(v: ParameterRange | null): void;
            set_reason(v: string): void;
            set_related(v: ParameterRelated | null): void;
            set_reltype(v: ParameterReltype | null): void;
            set_required(v: ParameterRequired | null): void;
            set_response(v: number): void;
            set_role(v: ParameterRole | null): void;
            set_rsvp(v: ParameterRsvp | null): void;
            set_scheduleagent(v: ParameterScheduleagent | null): void;
            set_scheduleforcesend(v: ParameterScheduleforcesend | null): void;
            set_schedulestatus(v: string): void;
            set_sentby(v: string): void;
            set_size(v: string): void;
            set_stayinformed(v: ParameterStayinformed | null): void;
            set_substate(v: ParameterSubstate | null): void;
            set_tzid(v: string): void;
            set_value(v: ParameterValue | null): void;
            set_x(v: string): void;
            set_xliccomparetype(v: ParameterXliccomparetype | null): void;
            set_xlicerrortype(v: ParameterXlicerrortype | null): void;
            /**
             * Sets the xname property of the native part of the #ICalParameter.
             * @param v The name to be set into the @param
             */
            set_xname(v: string): void;
            /**
             * Sets the xvalue property of the native part of the #ICalParameter.
             * @param v The value to be set into the @param
             */
            set_xvalue(v: string): void;
        }

        module Parser {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalParser instance.
         */
        class Parser extends Object {
            static $gtype: GObject.GType<Parser>;

            // Constructors

            constructor(properties?: Partial<Parser.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Parser;

            // Static methods

            /**
             * Parses the string into a #ICalComponent.
             * @param str The string to be parsed
             */
            static parse_string(str: string): Component;

            // Methods

            /**
             * Add a line at one time into the #ICalParser until the parsing is complete and #ICalComponent will be
             * returned.
             * @param str A line of string representation of the #ICalComponent
             * @returns The complete #ICalComponent.
             */
            add_line(str?: string | null): Component | null;
            /**
             * We won't get a clean exit if some components did not have an "END" tag. Clear off any component that
             * may be left in the list.
             * @returns The root #ICalComponent in @parser.
             */
            clean(): Component | null;
            /**
             * Frees a #ICalParser.
             */
            free(): void;
            /**
             * Given a line generator function, returns a single iCal content line.
             * @param func A line generator function
             * @returns A single iCal content line.
             */
            get_line(func: ParserLineGenFunc): string;
            /**
             * Gets the state of the target parser.
             * @returns The parser state stored in the #ICalParser.
             */
            get_state(): ParserState;
            /**
             * icalparser_parse takes a string that holds the text ( in RFC 2445 format ) and returns a pointer to an
             * #ICalComponent. The caller owns the memory. `func` is a pointer to a function that returns one content
             * line per invocation.
             * @param func The function used to parse
             * @returns The component output by the parser.
             */
            parse(func: ParserLineGenFunc): Component;
        }

        module Period {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalPeriod instance.
         */
        class Period extends Object {
            static $gtype: GObject.GType<Period>;

            // Constructors

            constructor(properties?: Partial<Period.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_string(str: string): Period;

            static new_null_period(): Period;

            // Methods

            /**
             * Translates #ICalPeriod to string.
             * @returns The string representation of #ICalPeriod.
             */
            as_ical_string(): string;
            /**
             * Gets the duration from an #ICalPeriod.
             * @returns The duration of @period.
             */
            get_duration(): Duration;
            /**
             * Gets the end time from an #ICalPeriod.
             * @returns The end of @period.
             */
            get_end(): Time;
            /**
             * Gets the start time from an #ICalPeriod.
             * @returns The start of @period.
             */
            get_start(): Time;
            /**
             * Checks the #ICalPeriod is null_period.
             * @returns 1 if yes, 0 if not.
             */
            is_null_period(): boolean;
            /**
             * Checks the #ICalPeriod is valid_period.
             * @returns 1 if yes, 0 if not.
             */
            is_valid_period(): boolean;
            /**
             * Sets the duration of an #ICalPeriod.
             * @param duration The duration of @period
             */
            set_duration(duration: Duration): void;
            /**
             * Sets the end time of an #ICalPeriod.
             * @param end The end of @period
             */
            set_end(end: Time): void;
            /**
             * Sets the start time of an #ICalPeriod.
             * @param start The start of @period
             */
            set_start(start: Time): void;
        }

        module Property {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalProperty instance.
         */
        class Property extends Object {
            static $gtype: GObject.GType<Property>;

            // Constructors

            constructor(properties?: Partial<Property.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](kind: PropertyKind): Property;

            static new_acceptresponse(v: string): Property;

            static new_acknowledged(v: Time): Property;

            static new_action(v: PropertyAction): Property;

            static new_allowconflict(v: string): Property;

            static new_attach(v: Attach): Property;

            static new_attendee(v: string): Property;

            static new_busytype(v: PropertyBusytype): Property;

            static new_calid(v: string): Property;

            static new_calmaster(v: string): Property;

            static new_calscale(v: string): Property;

            static new_capversion(v: string): Property;

            static new_carid(v: string): Property;

            static new_carlevel(v: PropertyCarlevel): Property;

            static new_categories(v: string): Property;

            static new_class(v: Property_Class): Property;

            static new_cmd(v: PropertyCmd): Property;

            static new_color(v: string): Property;

            static new_comment(v: string): Property;

            static new_completed(v: Time): Property;

            static new_components(v: string): Property;

            static new_contact(v: string): Property;

            static new_created(v: Time): Property;

            static new_csid(v: string): Property;

            static new_datemax(v: Time): Property;

            static new_datemin(v: Time): Property;

            static new_decreed(v: string): Property;

            static new_defaultcharset(v: string): Property;

            static new_defaultlocale(v: string): Property;

            static new_defaulttzid(v: string): Property;

            static new_defaultvcars(v: string): Property;

            static new_deny(v: string): Property;

            static new_description(v: string): Property;

            static new_dtend(v: Time): Property;

            static new_dtstamp(v: Time): Property;

            static new_dtstart(v: Time): Property;

            static new_due(v: Time): Property;

            static new_duration(v: Duration): Property;

            static new_estimatedduration(v: Duration): Property;

            static new_exdate(v: Time): Property;

            static new_expand(v: number): Property;

            static new_exrule(v: Recurrence): Property;

            static new_freebusy(v: Period): Property;

            static new_from_string(str: string): Property;

            static new_geo(v: Geo): Property;

            static new_grant(v: string): Property;

            static new_itipversion(v: string): Property;

            static new_lastmodified(v: Time): Property;

            static new_location(v: string): Property;

            static new_maxcomponentsize(v: number): Property;

            static new_maxdate(v: Time): Property;

            static new_maxresults(v: number): Property;

            static new_maxresultssize(v: number): Property;

            static new_method(v: PropertyMethod): Property;

            static new_mindate(v: Time): Property;

            static new_multipart(v: string): Property;

            static new_name(v: string): Property;

            static new_organizer(v: string): Property;

            static new_owner(v: string): Property;

            static new_percentcomplete(v: number): Property;

            static new_permission(v: string): Property;

            static new_pollcompletion(v: PropertyPollcompletion): Property;

            static new_pollitemid(v: number): Property;

            static new_pollmode(v: PropertyPollmode): Property;

            static new_pollproperties(v: string): Property;

            static new_pollwinner(v: number): Property;

            static new_priority(v: number): Property;

            static new_prodid(v: string): Property;

            static new_query(v: string): Property;

            static new_queryid(v: string): Property;

            static new_querylevel(v: PropertyQuerylevel): Property;

            static new_queryname(v: string): Property;

            static new_rdate(v: Datetimeperiod): Property;

            static new_recuraccepted(v: string): Property;

            static new_recurexpand(v: string): Property;

            static new_recurlimit(v: string): Property;

            static new_recurrenceid(v: Time): Property;

            static new_relatedto(v: string): Property;

            static new_relcalid(v: string): Property;

            static new_repeat(v: number): Property;

            static new_replyurl(v: string): Property;

            static new_requeststatus(v: Reqstat): Property;

            static new_resources(v: string): Property;

            static new_response(v: number): Property;

            static new_restriction(v: string): Property;

            static new_rrule(v: Recurrence): Property;

            static new_scope(v: string): Property;

            static new_sequence(v: number): Property;

            static new_status(v: PropertyStatus): Property;

            static new_storesexpanded(v: string): Property;

            static new_summary(v: string): Property;

            static new_target(v: string): Property;

            static new_taskmode(v: PropertyTaskmode): Property;

            static new_transp(v: PropertyTransp): Property;

            static new_trigger(v: Trigger): Property;

            static new_tzid(v: string): Property;

            static new_tzidaliasof(v: string): Property;

            static new_tzname(v: string): Property;

            static new_tzoffsetfrom(v: number): Property;

            static new_tzoffsetto(v: number): Property;

            static new_tzuntil(v: Time): Property;

            static new_tzurl(v: string): Property;

            static new_uid(v: string): Property;

            static new_url(v: string): Property;

            static new_version(v: string): Property;

            static new_voter(v: string): Property;

            static new_x(v: string): Property;

            static new_xlicclass(v: PropertyXlicclass): Property;

            static new_xlicclustercount(v: string): Property;

            static new_xlicerror(v: string): Property;

            static new_xlicmimecharset(v: string): Property;

            static new_xlicmimecid(v: string): Property;

            static new_xlicmimecontenttype(v: string): Property;

            static new_xlicmimeencoding(v: string): Property;

            static new_xlicmimefilename(v: string): Property;

            static new_xlicmimeoptinfo(v: string): Property;

            // Static methods

            /**
             * Converts the enum to string.
             * @param e The enum to be converted
             */
            static enum_to_string(e: number): string;
            /**
             * Converts a integer and string into an enum.
             * @param kind The kind
             * @param str A string
             */
            static kind_and_string_to_enum(kind: number, str: string): number;
            /**
             * Converts the string to #ICalPropertyKind.
             * @param string A string representing #ICalPropertyKind
             */
            static kind_from_string(string: string): PropertyKind;
            /**
             * Checks whether the enum belongs to the #ICalPropertyKind.
             * @param kind A #ICalPropertyKind
             * @param e The enum to be checked
             */
            static kind_has_property(kind: PropertyKind, e: number): number;
            /**
             * Checks whether #ICalPropertyKind is valid.
             * @param kind The #ICalPropertyKind
             */
            static kind_is_valid(kind: PropertyKind): boolean;
            /**
             * Converts the #ICalPropertyKind to a string.
             * @param kind A #ICalPropertyKind
             */
            static kind_to_string(kind: PropertyKind): string;
            /**
             * Converts the #ICalPropertyKind to #ICalValueKind.
             * @param kind A #ICalPropertyKind
             */
            static kind_to_value_kind(kind: PropertyKind): ValueKind;
            /**
             * Converts the string to #ICalPropertyKind.
             * @param str A string
             */
            static method_from_string(str: string): PropertyMethod;
            /**
             * Converts the #ICalPropertyMethod to string.
             * @param method The #ICalPropertyMethod
             */
            static method_to_string(method: PropertyMethod): string;
            /**
             * Decides if this recurrence is acceptable. This function decides if a specific recurrence value is excluded
             * by EXRULE or EXDATE properties.
             * @param comp A #ICalComponent
             * @param dtstart The base dtstart value for this component
             * @param recurtime The time to test against
             */
            static recurrence_is_excluded(comp: Component, dtstart: Time, recurtime: Time): boolean;
            /**
             * Converts the string to #ICalPropertyKind.
             * @param str A string
             */
            static status_from_string(str: string): PropertyStatus;
            /**
             * Converts the #ICalPropertyStatus to string.
             * @param method The #ICalPropertyStatus
             */
            static status_to_string(method: PropertyStatus): string;

            // Methods

            /**
             * Adds a #ICalParameter into the #ICalProperty. It behaves like set the copy of the #ICalParameter. Upon
             * completion the native part of #ICalParameter will be set to NULL.
             * @param parameter The parameter to be added into @prop
             */
            add_parameter(parameter: Parameter): void;
            /**
             * Converts a #ICalProperty to a string representation.
             * @returns The string representation of @prop.
             */
            as_ical_string(): string;
            /**
             * Deeply clone a #ICalProperty.
             * @returns The newly created #ICalProperty deeply cloned from @prop.
             */
            clone(): Property;
            /**
             * Counts the parameters in the #ICalProperty.
             * @returns The count of the parameters in the #ICalProperty.
             */
            count_parameters(): number;
            /**
             * Gets the acceptresponse of #ICalProperty.
             * @returns Get the acceptresponse of #ICalProperty.
             */
            get_acceptresponse(): string;
            /**
             * Gets the acknowledged time of #ICalProperty.
             * @returns Get the acknowledged time of #ICalProperty.
             */
            get_acknowledged(): Time;
            /**
             * Gets the action of #ICalProperty.
             * @returns Get the action of #ICalProperty.
             */
            get_action(): PropertyAction;
            /**
             * Gets the allowconflict of #ICalProperty.
             * @returns Get the allowconflict of #ICalProperty.
             */
            get_allowconflict(): string;
            /**
             * Gets the attach of #ICalProperty.
             * @returns Get the attach of #ICalProperty.
             */
            get_attach(): Attach;
            /**
             * Gets the attendee of #ICalProperty.
             * @returns Get the attendee of #ICalProperty.
             */
            get_attendee(): string;
            /**
             * Gets the busytype of #ICalProperty.
             * @returns Get the busytype of #ICalProperty.
             */
            get_busytype(): PropertyBusytype;
            /**
             * Gets the calid of #ICalProperty.
             * @returns Get the calid of #ICalProperty.
             */
            get_calid(): string;
            /**
             * Gets the calmaster of #ICalProperty.
             * @returns Get the calmaster of #ICalProperty.
             */
            get_calmaster(): string;
            /**
             * Gets the calscale of #ICalProperty.
             * @returns Get the calscale of #ICalProperty.
             */
            get_calscale(): string;
            /**
             * Gets the capversion of #ICalProperty.
             * @returns Get the capversion of #ICalProperty.
             */
            get_capversion(): string;
            /**
             * Gets the carid of #ICalProperty.
             * @returns Get the carid of #ICalProperty.
             */
            get_carid(): string;
            /**
             * Gets the carlevel of #ICalProperty.
             * @returns Get the carlevel of #ICalProperty.
             */
            get_carlevel(): PropertyCarlevel;
            /**
             * Gets the categories of #ICalProperty.
             * @returns Get the categories of #ICalProperty.
             */
            get_categories(): string;
            /**
             * Gets the class of #ICalProperty.
             * @returns Get the class of #ICalProperty.
             */
            get_class(): Property_Class;
            /**
             * Gets the cmd of #ICalProperty.
             * @returns Get the cmd of #ICalProperty.
             */
            get_cmd(): PropertyCmd;
            /**
             * Gets the color property of the `prop`.
             * @returns Get the color property.
             */
            get_color(): string;
            /**
             * Gets the comment of #ICalProperty.
             * @returns Get the comment of #ICalProperty.
             */
            get_comment(): string;
            /**
             * Gets the completed time of #ICalProperty.
             * @returns Get the completed time of #ICalProperty.
             */
            get_completed(): Time;
            /**
             * Gets the components of #ICalProperty.
             * @returns Get the components of #ICalProperty.
             */
            get_components(): string;
            /**
             * Gets the contact of #ICalProperty.
             * @returns Get the contact of #ICalProperty.
             */
            get_contact(): string;
            /**
             * Gets the created time of #ICalProperty.
             * @returns Get the created time of #ICalProperty.
             */
            get_created(): Time;
            /**
             * Gets the csid of #ICalProperty.
             * @returns Get the csid of #ICalProperty.
             */
            get_csid(): string;
            /**
             * Gets the datemax time of #ICalProperty.
             * @returns Get the datemax time of #ICalProperty.
             */
            get_datemax(): Time;
            /**
             * Gets the datemin time of #ICalProperty.
             * @returns Get the datemin time of #ICalProperty.
             */
            get_datemin(): Time;
            /**
             * If the property is a DATE-TIME with a TZID parameter and a corresponding VTIMEZONE is present in the
             * component, the returned component will already be in the correct timezone; otherwise the caller is responsible
             * for converting it.
             *
             * The `comp` can be NULL, in which case the parent of the `prop` is used to find
             * the corresponding time zone.
             * @param comp An #ICalComponent
             * @returns Get a DATE or DATE-TIME property as an #ICalTime.
             */
            get_datetime_with_component(comp?: Component | null): Time;
            /**
             * Gets the decreed of #ICalProperty.
             * @returns Get the decreed of #ICalProperty.
             */
            get_decreed(): string;
            /**
             * Gets the defaultcharset of #ICalProperty.
             * @returns Get the defaultcharset of #ICalProperty.
             */
            get_defaultcharset(): string;
            /**
             * Gets the defaultlocale of #ICalProperty.
             * @returns Get the defaultlocale of #ICalProperty.
             */
            get_defaultlocale(): string;
            /**
             * Gets the defaulttzid of #ICalProperty.
             * @returns Get the defaulttzid of #ICalProperty.
             */
            get_defaulttzid(): string;
            /**
             * Gets the defaultvcars of #ICalProperty.
             * @returns Get the defaultvcars of #ICalProperty.
             */
            get_defaultvcars(): string;
            /**
             * Gets the deny of #ICalProperty.
             * @returns Get the deny of #ICalProperty.
             */
            get_deny(): string;
            /**
             * Gets the description of #ICalProperty.
             * @returns Get the description of #ICalProperty.
             */
            get_description(): string;
            /**
             * Gets the dtend time of #ICalProperty.
             * @returns Get the dtend time of #ICalProperty.
             */
            get_dtend(): Time;
            /**
             * Gets the dtstamp time of #ICalProperty.
             * @returns Get the dtstamp time of #ICalProperty.
             */
            get_dtstamp(): Time;
            /**
             * Gets the dtstart time of #ICalProperty.
             * @returns Get the dtstart time of #ICalProperty.
             */
            get_dtstart(): Time;
            /**
             * Gets the due time of #ICalProperty.
             * @returns Get the due time of #ICalProperty.
             */
            get_due(): Time;
            /**
             * Gets the duration of #ICalProperty.
             * @returns Get the duration of #ICalProperty.
             */
            get_duration(): Duration;
            /**
             * Gets the estimatedduration of #ICalProperty.
             * @returns Get the estimatedduration of #ICalProperty.
             */
            get_estimatedduration(): Duration;
            /**
             * Gets the exdate time of #ICalProperty.
             * @returns Get the exdate time of #ICalProperty.
             */
            get_exdate(): Time;
            /**
             * Gets the expand of #ICalProperty.
             * @returns Get the expand of #ICalProperty.
             */
            get_expand(): number;
            /**
             * Gets the exrule recurrence type of #ICalProperty.
             * @returns Get the exrule recurrence type of #ICalProperty.
             */
            get_exrule(): Recurrence;
            /**
             * Gets the first #ICalParameter from the parent #ICalProperty.
             * @param kind The target kind of #ICalParameter to be retrieved
             * @returns The first #ICalParameter of @prop.
             */
            get_first_parameter(kind: ParameterKind | null): Parameter;
            /**
             * Gets the freebusy period type of #ICalProperty.
             * @returns Get the freebusy period type of #ICalProperty.
             */
            get_freebusy(): Period;
            /**
             * Gets the geo type of #ICalProperty.
             * @returns Get the geo type of #ICalProperty.
             */
            get_geo(): Geo;
            /**
             * Gets the grant of #ICalProperty.
             * @returns Get the grant of #ICalProperty.
             */
            get_grant(): string;
            /**
             * Gets the itipversion of #ICalProperty.
             * @returns Get the itipversion of #ICalProperty.
             */
            get_itipversion(): string;
            /**
             * Gets the lastmodified time of #ICalProperty.
             * @returns Get the lastmodified time of #ICalProperty.
             */
            get_lastmodified(): Time;
            /**
             * Gets the location of #ICalProperty.
             * @returns Get the location of #ICalProperty.
             */
            get_location(): string;
            /**
             * Gets the maxcomponentsize of #ICalProperty.
             * @returns Get the maxcomponentsize of #ICalProperty.
             */
            get_maxcomponentsize(): number;
            /**
             * Gets the maxdate time of #ICalProperty.
             * @returns Get the maxdate time of #ICalProperty.
             */
            get_maxdate(): Time;
            /**
             * Gets the maxresults of #ICalProperty.
             * @returns Get the maxresults of #ICalProperty.
             */
            get_maxresults(): number;
            /**
             * Gets the maxresultssize of #ICalProperty.
             * @returns Get the maxresultssize of #ICalProperty.
             */
            get_maxresultssize(): number;
            /**
             * Gets the method of #ICalProperty.
             * @returns Get the method of #ICalProperty.
             */
            get_method(): PropertyMethod;
            /**
             * Gets the mindate time of #ICalProperty.
             * @returns Get the mindate time of #ICalProperty.
             */
            get_mindate(): Time;
            /**
             * Gets the multipart of #ICalProperty.
             * @returns Get the multipart of #ICalProperty.
             */
            get_multipart(): string;
            /**
             * Gets the name of #ICalProperty.
             * @returns Get the name of #ICalProperty.
             */
            get_name(): string;
            /**
             * Gets the next #ICalParameter from the parent #ICalProperty.
             * @param kind The target kind of #ICalParameter to be retrieved
             * @returns The next #ICalParameter of @prop.
             */
            get_next_parameter(kind: ParameterKind | null): Parameter;
            /**
             * Gets the organizer of #ICalProperty.
             * @returns Get the organizer of #ICalProperty.
             */
            get_organizer(): string;
            /**
             * Gets the owner of #ICalProperty.
             * @returns Get the owner of #ICalProperty.
             */
            get_owner(): string;
            /**
             * Gets the string representation of the target parameter in the #ICalProperty.
             * @param name The name of the target parameter
             * @returns The string representation of the parameter.
             */
            get_parameter_as_string(name: string): string;
            /**
             * Gets the parent component of the property. Use with caution. When icalproperty is deallocated, it won't
             * deallocate its parent. However the #ICalComponent object created using this method will be deallocated
             * (if no reference in other places). So You need to make sure there is another reference except the one
             * in #ICalProperty.
             * @returns The parent #ICalComponent of #ICalProperty.
             */
            get_parent(): Component | null;
            /**
             * Gets the percentcomplete of #ICalProperty.
             * @returns Get the percentcomplete of #ICalProperty.
             */
            get_percentcomplete(): number;
            /**
             * Gets the permission of #ICalProperty.
             * @returns Get the permission of #ICalProperty.
             */
            get_permission(): string;
            /**
             * Gets the pollcompletion of #ICalProperty.
             * @returns Get the pollcompletion of #ICalProperty.
             */
            get_pollcompletion(): PropertyPollcompletion;
            /**
             * Gets the pollitemid of #ICalProperty.
             * @returns Get the pollitemid of #ICalProperty.
             */
            get_pollitemid(): number;
            /**
             * Gets the pollmode of #ICalProperty.
             * @returns Get the pollmode of #ICalProperty.
             */
            get_pollmode(): PropertyPollmode;
            /**
             * Gets the pollproperties of #ICalProperty.
             * @returns Get the pollproperties of #ICalProperty.
             */
            get_pollproperties(): string;
            /**
             * Gets the pollwinner of #ICalProperty.
             * @returns Get the pollwinner of #ICalProperty.
             */
            get_pollwinner(): number;
            /**
             * Gets the priority of #ICalProperty.
             * @returns Get the priority of #ICalProperty.
             */
            get_priority(): number;
            /**
             * Gets the prodid of #ICalProperty.
             * @returns Get the prodid of #ICalProperty.
             */
            get_prodid(): string;
            /**
             * Gets the property name of #ICalProperty.
             * @returns Property name of #ICalProperty.
             */
            get_property_name(): string;
            /**
             * Gets the query of #ICalProperty.
             * @returns Get the query of #ICalProperty.
             */
            get_query(): string;
            /**
             * Gets the queryid of #ICalProperty.
             * @returns Get the queryid of #ICalProperty.
             */
            get_queryid(): string;
            /**
             * Gets the querylevel of #ICalProperty.
             * @returns Get the querylevel of #ICalProperty.
             */
            get_querylevel(): PropertyQuerylevel;
            /**
             * Gets the queryname of #ICalProperty.
             * @returns Get the queryname of #ICalProperty.
             */
            get_queryname(): string;
            /**
             * Gets the rdate  of #ICalProperty.
             * @returns Get the rdate  of #ICalProperty.
             */
            get_rdate(): Datetimeperiod;
            /**
             * Gets the recuraccepted of #ICalProperty.
             * @returns Get the recuraccepted of #ICalProperty.
             */
            get_recuraccepted(): string;
            /**
             * Gets the recurexpand of #ICalProperty.
             * @returns Get the recurexpand of #ICalProperty.
             */
            get_recurexpand(): string;
            /**
             * Gets the recurlimit of #ICalProperty.
             * @returns Get the recurlimit of #ICalProperty.
             */
            get_recurlimit(): string;
            /**
             * Gets the recurrenceid time of #ICalProperty.
             * @returns Get the recurrenceid time of #ICalProperty.
             */
            get_recurrenceid(): Time;
            /**
             * Gets the relatedto of #ICalProperty.
             * @returns Get the relatedto of #ICalProperty.
             */
            get_relatedto(): string;
            /**
             * Gets the relcalid of #ICalProperty.
             * @returns Get the relcalid of #ICalProperty.
             */
            get_relcalid(): string;
            /**
             * Gets the repeat of #ICalProperty.
             * @returns Get the repeat of #ICalProperty.
             */
            get_repeat(): number;
            /**
             * Gets the replyurl of #ICalProperty.
             * @returns Get the replyurl of #ICalProperty.
             */
            get_replyurl(): string;
            /**
             * Gets the requeststatus of #ICalProperty.
             * @returns Get the requeststatus of #ICalProperty.
             */
            get_requeststatus(): Reqstat;
            /**
             * Gets the resources of #ICalProperty.
             * @returns Get the resources of #ICalProperty.
             */
            get_resources(): string;
            /**
             * Gets the response of #ICalProperty.
             * @returns Get the response of #ICalProperty.
             */
            get_response(): number;
            /**
             * Gets the restriction of #ICalProperty.
             * @returns Get the restriction of #ICalProperty.
             */
            get_restriction(): string;
            /**
             * Gets the rrule recurrence type of #ICalProperty.
             * @returns Get the rrule recurrence type of #ICalProperty.
             */
            get_rrule(): Recurrence;
            /**
             * Gets the scope of #ICalProperty.
             * @returns Get the scope of #ICalProperty.
             */
            get_scope(): string;
            /**
             * Gets the sequence of #ICalProperty.
             * @returns Get the sequence of #ICalProperty.
             */
            get_sequence(): number;
            /**
             * Gets the status of #ICalProperty.
             * @returns Get the status of #ICalProperty.
             */
            get_status(): PropertyStatus;
            /**
             * Gets the storesexpanded of #ICalProperty.
             * @returns Get the storesexpanded of #ICalProperty.
             */
            get_storesexpanded(): string;
            /**
             * Gets the summary of #ICalProperty.
             * @returns Get the summary of #ICalProperty.
             */
            get_summary(): string;
            /**
             * Gets the target of #ICalProperty.
             * @returns Get the target of #ICalProperty.
             */
            get_target(): string;
            /**
             * Gets the taskmode of #ICalProperty.
             * @returns Get the taskmode of #ICalProperty.
             */
            get_taskmode(): PropertyTaskmode;
            /**
             * Gets the transp of #ICalProperty.
             * @returns Get the transp of #ICalProperty.
             */
            get_transp(): PropertyTransp;
            /**
             * Gets the trigger period type of #ICalProperty.
             * @returns Get the trigger period type of #ICalProperty.
             */
            get_trigger(): Trigger;
            /**
             * Gets the tzid of #ICalProperty.
             * @returns Get the tzid of #ICalProperty.
             */
            get_tzid(): string;
            /**
             * Gets the tzidaliasof of #ICalProperty.
             * @returns Get the tzidaliasof of #ICalProperty.
             */
            get_tzidaliasof(): string;
            /**
             * Gets the tzname of #ICalProperty.
             * @returns Get the tzname of #ICalProperty.
             */
            get_tzname(): string;
            /**
             * Gets the tzoffsetfrom of #ICalProperty.
             * @returns Get the tzoffsetfrom of #ICalProperty.
             */
            get_tzoffsetfrom(): number;
            /**
             * Gets the tzoffsetto of #ICalProperty.
             * @returns Get the tzoffsetto of #ICalProperty.
             */
            get_tzoffsetto(): number;
            /**
             * Gets the tzuntil time of #ICalProperty.
             * @returns Get the tzuntil time of #ICalProperty.
             */
            get_tzuntil(): Time;
            /**
             * Gets the tzurl of #ICalProperty.
             * @returns Get the tzurl of #ICalProperty.
             */
            get_tzurl(): string;
            /**
             * Gets the uid of #ICalProperty.
             * @returns Get the uid of #ICalProperty.
             */
            get_uid(): string;
            /**
             * Gets the url of #ICalProperty.
             * @returns Get the url of #ICalProperty.
             */
            get_url(): string;
            /**
             * Gets the #ICalValue of #ICalProperty.
             * @returns The #ICalValue of @prop.
             */
            get_value(): Value;
            /**
             * Gets the string representation of the value in #ICalProperty.
             * @returns The string representation of the value of the #ICalProperty.
             */
            get_value_as_string(): string;
            /**
             * Gets the version of #ICalProperty.
             * @returns Get the version of #ICalProperty.
             */
            get_version(): string;
            /**
             * Gets the voter of #ICalProperty.
             * @returns Get the voter of #ICalProperty.
             */
            get_voter(): string;
            /**
             * Gets the x of #ICalProperty.
             * @returns Get the x of #ICalProperty.
             */
            get_x(): string;
            /**
             * Gets the name of x property.
             * @returns The name of x property.
             */
            get_x_name(): string | null;
            /**
             * Gets the xlicclass of #ICalProperty.
             * @returns Get the xlicclass of #ICalProperty.
             */
            get_xlicclass(): PropertyXlicclass;
            /**
             * Gets the xlicclustercount of #ICalProperty.
             * @returns Get the xlicclustercount of #ICalProperty.
             */
            get_xlicclustercount(): string;
            /**
             * Gets the xlicerror of #ICalProperty.
             * @returns Get the xlicerror of #ICalProperty.
             */
            get_xlicerror(): string;
            /**
             * Gets the xlicmimecharset of #ICalProperty.
             * @returns Get the xlicmimecharset of #ICalProperty.
             */
            get_xlicmimecharset(): string;
            /**
             * Gets the xlicmimecid of #ICalProperty.
             * @returns Get the xlicmimecid of #ICalProperty.
             */
            get_xlicmimecid(): string;
            /**
             * Gets the xlicmimecontenttype of #ICalProperty.
             * @returns Get the xlicmimecontenttype of #ICalProperty.
             */
            get_xlicmimecontenttype(): string;
            /**
             * Gets the xlicmimeencoding of #ICalProperty.
             * @returns Get the xlicmimeencoding of #ICalProperty.
             */
            get_xlicmimeencoding(): string;
            /**
             * Gets the xlicmimefilename of #ICalProperty.
             * @returns Get the xlicmimefilename of #ICalProperty.
             */
            get_xlicmimefilename(): string;
            /**
             * Gets the xlicmimeoptinfo of #ICalProperty.
             * @returns Get the xlicmimeoptinfo of #ICalProperty.
             */
            get_xlicmimeoptinfo(): string;
            /**
             * Gets the kind of #ICalProperty.
             * @returns The type of #ICalProperty.
             */
            isa(): PropertyKind;
            /**
             * Checks whether the native part of #ICalProperty is of the type icalproperty.
             * @returns 1 if the native part of @property is of the type icalproperty, 0 if not.
             */
            isa_property(): number;
            /**
             * Removes the target kind of the parameters in the #ICalProperty.
             * @param kind The #ICalParameterKind to be removed
             */
            remove_parameter_by_kind(kind: ParameterKind | null): void;
            /**
             * Removes parameter in the #ICalProperty by name.
             * @param name The name of the parameter to be removed
             */
            remove_parameter_by_name(name: string): void;
            /**
             * Removes the parameter in the #ICalProperty by ref.
             * @param param The #ICalParameter to be removed
             */
            remove_parameter_by_ref(param: Parameter): void;
            /**
             * Sets the acceptresponse for the #ICalProperty.
             * @param v The acceptresponse
             */
            set_acceptresponse(v: string): void;
            /**
             * Sets the acknowledged time for the #ICalProperty.
             * @param v The acknowledgement time
             */
            set_acknowledged(v: Time): void;
            /**
             * Sets the action for the #ICalProperty.
             * @param v The action
             */
            set_action(v: PropertyAction | null): void;
            /**
             * Sets the allowconflict for the #ICalProperty.
             * @param v The allowconflict
             */
            set_allowconflict(v: string): void;
            /**
             * Sets the attach for the #ICalProperty.
             * @param v The attach
             */
            set_attach(v: Attach): void;
            /**
             * Sets the attendee for the #ICalProperty.
             * @param v The attendee
             */
            set_attendee(v: string): void;
            /**
             * Sets the busytype for the #ICalProperty.
             * @param v The busytype
             */
            set_busytype(v: PropertyBusytype | null): void;
            /**
             * Sets the calid for the #ICalProperty.
             * @param v The calid
             */
            set_calid(v: string): void;
            /**
             * Sets the calmaster for the #ICalProperty.
             * @param v The calmaster
             */
            set_calmaster(v: string): void;
            /**
             * Sets the calscale for the #ICalProperty.
             * @param v The calscale
             */
            set_calscale(v: string): void;
            /**
             * Sets the capversion for the #ICalProperty.
             * @param v The capversion
             */
            set_capversion(v: string): void;
            /**
             * Sets the carid for the #ICalProperty.
             * @param v The carid
             */
            set_carid(v: string): void;
            /**
             * Sets the carlevel for the #ICalProperty.
             * @param v The carlevel
             */
            set_carlevel(v: PropertyCarlevel | null): void;
            /**
             * Sets the categories for the #ICalProperty.
             * @param v The categories
             */
            set_categories(v: string): void;
            /**
             * Sets the class for the #ICalProperty.
             * @param v The class
             */
            set_class(v: Property_Class | null): void;
            /**
             * Sets the cmd for the #ICalProperty.
             * @param v The cmd
             */
            set_cmd(v: PropertyCmd | null): void;
            /**
             * Sets the color for the `prop`.
             * @param v The color
             */
            set_color(v: string): void;
            /**
             * Sets the comment for the #ICalProperty.
             * @param v The comment
             */
            set_comment(v: string): void;
            /**
             * Sets the completed time for the #ICalProperty.
             * @param v The completed time
             */
            set_completed(v: Time): void;
            /**
             * Sets the components for the #ICalProperty.
             * @param v The components
             */
            set_components(v: string): void;
            /**
             * Sets the contact for the #ICalProperty.
             * @param v The contact
             */
            set_contact(v: string): void;
            /**
             * Sets the created time for the #ICalProperty.
             * @param v The created time
             */
            set_created(v: Time): void;
            /**
             * Sets the csid for the #ICalProperty.
             * @param v The csid
             */
            set_csid(v: string): void;
            /**
             * Sets the datemax time for the #ICalProperty.
             * @param v The datemax time
             */
            set_datemax(v: Time): void;
            /**
             * Sets the datemin time for the #ICalProperty.
             * @param v The datemin time
             */
            set_datemin(v: Time): void;
            /**
             * Sets the decreed for the #ICalProperty.
             * @param v The decreed
             */
            set_decreed(v: string): void;
            /**
             * Sets the defaultcharset for the #ICalProperty.
             * @param v The defaultcharset
             */
            set_defaultcharset(v: string): void;
            /**
             * Sets the defaultlocale for the #ICalProperty.
             * @param v The defaultlocale
             */
            set_defaultlocale(v: string): void;
            /**
             * Sets the defaulttzid for the #ICalProperty.
             * @param v The defaulttzid
             */
            set_defaulttzid(v: string): void;
            /**
             * Sets the defaultvcars for the #ICalProperty.
             * @param v The defaultvcars
             */
            set_defaultvcars(v: string): void;
            /**
             * Sets the deny for the #ICalProperty.
             * @param v The deny
             */
            set_deny(v: string): void;
            /**
             * Sets the description for the #ICalProperty.
             * @param v The description
             */
            set_description(v: string): void;
            /**
             * Sets the dtend time for the #ICalProperty.
             * @param v The dtend time
             */
            set_dtend(v: Time): void;
            /**
             * Sets the dtstamp time for the #ICalProperty.
             * @param v The dtstamp time
             */
            set_dtstamp(v: Time): void;
            /**
             * Sets the dtstart time for the #ICalProperty.
             * @param v The dtstart time
             */
            set_dtstart(v: Time): void;
            /**
             * Sets the due time for the #ICalProperty.
             * @param v The due time
             */
            set_due(v: Time): void;
            /**
             * Sets the duration for the #ICalProperty.
             * @param v The duration
             */
            set_duration(v: Duration): void;
            /**
             * Sets the estimatedduration for the #ICalProperty.
             * @param v The estimatedduration
             */
            set_estimatedduration(v: Duration): void;
            /**
             * Sets the exdate time for the #ICalProperty.
             * @param v The exdate time
             */
            set_exdate(v: Time): void;
            /**
             * Sets the expand for the #ICalProperty.
             * @param v The expand
             */
            set_expand(v: number): void;
            /**
             * Sets the exrule time for the #ICalProperty.
             * @param v The exrule recurrence type
             */
            set_exrule(v: Recurrence): void;
            /**
             * Sets the freebusy time for the #ICalProperty.
             * @param v The freebusy period type
             */
            set_freebusy(v: Period): void;
            /**
             * Sets the geo for the #ICalProperty.
             * @param v The geo type
             */
            set_geo(v: Geo): void;
            /**
             * Sets the grant for the #ICalProperty.
             * @param v The grant
             */
            set_grant(v: string): void;
            /**
             * Sets the itipversion for the #ICalProperty.
             * @param v The itipversion
             */
            set_itipversion(v: string): void;
            /**
             * Sets the lastmodified time for the #ICalProperty.
             * @param v The lastmodified time
             */
            set_lastmodified(v: Time): void;
            /**
             * Sets the location for the #ICalProperty.
             * @param v The location
             */
            set_location(v: string): void;
            /**
             * Sets the maxcomponentsize for the #ICalProperty.
             * @param v The maxcomponentsize
             */
            set_maxcomponentsize(v: number): void;
            /**
             * Sets the maxdate time for the #ICalProperty.
             * @param v The maxdate time
             */
            set_maxdate(v: Time): void;
            /**
             * Sets the maxresults for the #ICalProperty.
             * @param v The maxresults
             */
            set_maxresults(v: number): void;
            /**
             * Sets the maxresultssize for the #ICalProperty.
             * @param v The maxresultssize
             */
            set_maxresultssize(v: number): void;
            /**
             * Sets the method for the #ICalProperty.
             * @param v The method
             */
            set_method(v: PropertyMethod | null): void;
            /**
             * Sets the mindate time for the #ICalProperty.
             * @param v The mindate time
             */
            set_mindate(v: Time): void;
            /**
             * Sets the multipart for the #ICalProperty.
             * @param v The multipart
             */
            set_multipart(v: string): void;
            /**
             * Sets the name for the #ICalProperty.
             * @param v The name
             */
            set_name(v: string): void;
            /**
             * Sets the organizer for the #ICalProperty.
             * @param v The organizer
             */
            set_organizer(v: string): void;
            /**
             * Sets the owner for the #ICalProperty.
             * @param v The owner
             */
            set_owner(v: string): void;
            // Conflicted with ICalGLib.Object.set_owner
            set_owner(...args: never[]): any;
            /**
             * Sets a #ICalParameter into the #ICalProperty. It behaves like set the copy of the #ICalParameter. Upon
             * completion the native part of #ICalParameter will be set to NULL.
             * @param parameter The parameter to be set into @prop
             */
            set_parameter(parameter: Parameter): void;
            /**
             * Sets the #ICalProperty with the parameter defined by the name and value.
             * @param name The name of the parameter
             * @param value The value of the parameter
             */
            set_parameter_from_string(name: string, value: string): void;
            /**
             * Sets the parent #ICalComponent of the specified #ICalProperty.
             * @param component An #ICalComponent
             */
            set_parent(component?: Component | null): void;
            /**
             * Sets the percentcomplete for the #ICalProperty.
             * @param v The percentcomplete
             */
            set_percentcomplete(v: number): void;
            /**
             * Sets the permission for the #ICalProperty.
             * @param v The permission
             */
            set_permission(v: string): void;
            /**
             * Sets the pollcompletion for the #ICalProperty.
             * @param v The pollcompletion
             */
            set_pollcompletion(v: PropertyPollcompletion | null): void;
            /**
             * Sets the pollitemid for the #ICalProperty.
             * @param v The pollitemid
             */
            set_pollitemid(v: number): void;
            /**
             * Sets the pollmode for the #ICalProperty.
             * @param v The pollmode
             */
            set_pollmode(v: PropertyPollmode | null): void;
            /**
             * Sets the pollproperties for the #ICalProperty.
             * @param v The pollproperties
             */
            set_pollproperties(v: string): void;
            /**
             * Sets the pollwinner for the #ICalProperty.
             * @param v The pollwinner
             */
            set_pollwinner(v: number): void;
            /**
             * Sets the priority for the #ICalProperty.
             * @param v The priority
             */
            set_priority(v: number): void;
            /**
             * Sets the prodid for the #ICalProperty.
             * @param v The prodid
             */
            set_prodid(v: string): void;
            /**
             * Sets the query for the #ICalProperty.
             * @param v The query
             */
            set_query(v: string): void;
            /**
             * Sets the queryid for the #ICalProperty.
             * @param v The queryid
             */
            set_queryid(v: string): void;
            /**
             * Sets the querylevel for the #ICalProperty.
             * @param v The querylevel
             */
            set_querylevel(v: PropertyQuerylevel | null): void;
            /**
             * Sets the queryname for the #ICalProperty.
             * @param v The queryname
             */
            set_queryname(v: string): void;
            /**
             * Sets the rdate for the #ICalProperty.
             * @param v The rdate
             */
            set_rdate(v: Datetimeperiod): void;
            /**
             * Sets the recuraccepted for the #ICalProperty.
             * @param v The recuraccepted
             */
            set_recuraccepted(v: string): void;
            /**
             * Sets the recurexpand for the #ICalProperty.
             * @param v The recurexpand
             */
            set_recurexpand(v: string): void;
            /**
             * Sets the recurlimit for the #ICalProperty.
             * @param v The recurlimit
             */
            set_recurlimit(v: string): void;
            /**
             * Sets the recurrenceid time for the #ICalProperty.
             * @param v The recurrenceid time
             */
            set_recurrenceid(v: Time): void;
            /**
             * Sets the relatedto for the #ICalProperty.
             * @param v The relatedto
             */
            set_relatedto(v: string): void;
            /**
             * Sets the relcalid for the #ICalProperty.
             * @param v The relcalid
             */
            set_relcalid(v: string): void;
            /**
             * Sets the repeat for the #ICalProperty.
             * @param v The repeat
             */
            set_repeat(v: number): void;
            /**
             * Sets the replyurl for the #ICalProperty.
             * @param v The replyurl
             */
            set_replyurl(v: string): void;
            /**
             * Sets the requeststatus for the #ICalProperty.
             * @param v The requeststatus
             */
            set_requeststatus(v: Reqstat): void;
            /**
             * Sets the resources for the #ICalProperty.
             * @param v The resources
             */
            set_resources(v: string): void;
            /**
             * Sets the response for the #ICalProperty.
             * @param v The response
             */
            set_response(v: number): void;
            /**
             * Sets the restriction for the #ICalProperty.
             * @param v The restriction
             */
            set_restriction(v: string): void;
            /**
             * Sets the rrule for the #ICalProperty.
             * @param v The rrule recurrence type
             */
            set_rrule(v: Recurrence): void;
            /**
             * Sets the scope for the #ICalProperty.
             * @param v The scope
             */
            set_scope(v: string): void;
            /**
             * Sets the sequence for the #ICalProperty.
             * @param v The sequence
             */
            set_sequence(v: number): void;
            /**
             * Sets the status for the #ICalProperty.
             * @param v The status
             */
            set_status(v: PropertyStatus | null): void;
            /**
             * Sets the storesexpanded for the #ICalProperty.
             * @param v The storesexpanded
             */
            set_storesexpanded(v: string): void;
            /**
             * Sets the summary for the #ICalProperty.
             * @param v The summary
             */
            set_summary(v: string): void;
            /**
             * Sets the target for the #ICalProperty.
             * @param v The target
             */
            set_target(v: string): void;
            /**
             * Sets the taskmode for the #ICalProperty.
             * @param v The taskmode
             */
            set_taskmode(v: PropertyTaskmode | null): void;
            /**
             * Sets the transp for the #ICalProperty.
             * @param v The transp
             */
            set_transp(v: PropertyTransp | null): void;
            /**
             * Sets the trigger time for the #ICalProperty.
             * @param v The trigger period type
             */
            set_trigger(v: Trigger): void;
            /**
             * Sets the tzid for the #ICalProperty.
             * @param v The tzid
             */
            set_tzid(v: string): void;
            /**
             * Sets the tzidaliasof for the #ICalProperty.
             * @param v The tzidaliasof
             */
            set_tzidaliasof(v: string): void;
            /**
             * Sets the tzname for the #ICalProperty.
             * @param v The tzname
             */
            set_tzname(v: string): void;
            /**
             * Sets the tzoffsetfrom for the #ICalProperty.
             * @param v The tzoffsetfrom
             */
            set_tzoffsetfrom(v: number): void;
            /**
             * Sets the tzoffsetto for the #ICalProperty.
             * @param v The tzoffsetto
             */
            set_tzoffsetto(v: number): void;
            /**
             * Sets the tzuntil time for the #ICalProperty.
             * @param v The acknowledgement time
             */
            set_tzuntil(v: Time): void;
            /**
             * Sets the tzurl for the #ICalProperty.
             * @param v The tzurl
             */
            set_tzurl(v: string): void;
            /**
             * Sets the uid for the #ICalProperty.
             * @param v The uid
             */
            set_uid(v: string): void;
            /**
             * Sets the url for the #ICalProperty.
             * @param v The url
             */
            set_url(v: string): void;
            /**
             * Sets the #ICalProperty with the #ICalValue.
             * @param value The #ICalValue will be set as the property of @prop
             */
            set_value(value: Value): void;
            /**
             * Sets the #ICalProperty with the #ICalValue constructed from string.
             * @param value The value used to construct the #ICalValue
             * @param kind The kind used to construct the #ICalValue
             */
            set_value_from_string(value: string, kind: string): void;
            /**
             * Sets the version for the #ICalProperty.
             * @param v The version
             */
            set_version(v: string): void;
            /**
             * Sets the voter for the #ICalProperty.
             * @param v The voter
             */
            set_voter(v: string): void;
            /**
             * Sets the x for the #ICalProperty.
             * @param v The x
             */
            set_x(v: string): void;
            /**
             * Sets the name of x property for the #ICalProperty.
             * @param name The name string
             */
            set_x_name(name: string): void;
            /**
             * Sets the xlicclass for the #ICalProperty.
             * @param v The xlicclass
             */
            set_xlicclass(v: PropertyXlicclass | null): void;
            /**
             * Sets the xlicclustercount for the #ICalProperty.
             * @param v The xlicclustercount
             */
            set_xlicclustercount(v: string): void;
            /**
             * Sets the xlicerror for the #ICalProperty.
             * @param v The xlicerror
             */
            set_xlicerror(v: string): void;
            /**
             * Sets the xlicmimecharset for the #ICalProperty.
             * @param v The xlicmimecharset
             */
            set_xlicmimecharset(v: string): void;
            /**
             * Sets the xlicmimecid for the #ICalProperty.
             * @param v The xlicmimecid
             */
            set_xlicmimecid(v: string): void;
            /**
             * Sets the xlicmimecontenttype for the #ICalProperty.
             * @param v The xlicmimecontenttype
             */
            set_xlicmimecontenttype(v: string): void;
            /**
             * Sets the xlicmimeencoding for the #ICalProperty.
             * @param v The xlicmimeencoding
             */
            set_xlicmimeencoding(v: string): void;
            /**
             * Sets the xlicmimefilename for the #ICalProperty.
             * @param v The xlicmimefilename
             */
            set_xlicmimefilename(v: string): void;
            /**
             * Sets the xlicmimeoptinfo for the #ICalProperty.
             * @param v The xlicmimeoptinfo
             */
            set_xlicmimeoptinfo(v: string): void;
        }

        module RecurIterator {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalRecurIterator instance.
         */
        class RecurIterator extends Object {
            static $gtype: GObject.GType<RecurIterator>;

            // Constructors

            constructor(properties?: Partial<RecurIterator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](rule: Recurrence, dtstart: Time): RecurIterator;

            // Methods

            /**
             * Gets the next occurrence from an iterator.
             * @returns The next occurrence according to this recurrence rule.
             */
            next(): Time;
            /**
             * Sets the date-time at which the iterator will start, where 'start' is a value between DTSTART and UNTIL.
             * Note:
             * CAN NOT be used with RRULEs that contain COUNT.
             * @param start The date-time to move the iterator to
             * @returns 1 if succeeded, 0 if failed, like when the recurrence type is unsupported.
             */
            set_start(start: Time): number;
        }

        module Recurrence {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalRecurrence instance.
         */
        class Recurrence extends Object {
            static $gtype: GObject.GType<Recurrence>;

            // Constructors

            constructor(properties?: Partial<Recurrence.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Recurrence;

            static new_from_string(str: string): Recurrence;

            // Static methods

            /**
             * Decodes a day to a weekday in a week.
             * @param day The encoded day which represents the day of the week and Nth day of the week
             */
            static day_day_of_week(day: number): RecurrenceWeekday;
            /**
             * Decodes a day to a position of the weekday.
             * @param day The encoded day which represents the day of the week and Nth day of the week
             */
            static day_position(day: number): number;
            /**
             * Converts a string representation to an enum representation for the frequency.
             * @param str The string representation of the frequency
             */
            static frequency_from_string(str: string): RecurrenceFrequency;
            /**
             * Converts a enum representation to a string representation for the frequency.
             * @param kind The frequency enum
             */
            static frequency_to_string(kind: RecurrenceFrequency): string;
            /**
             * Decodes a month and check whether it is a leap month.
             * @param month The month to be decoded
             */
            static month_is_leap(month: number): boolean;
            static month_month(month: number): number;
            /**
             * Checks whether rscale is supported.
             */
            static rscale_is_supported(): boolean;
            /**
             * Gets an array of calendars supporting rscale (currently always return NULL).
             */
            static rscale_supported_calendars(): Array;
            /**
             * Converts a string representation to an enum representation for the skip.
             * @param str The string representation of the skip
             */
            static skip_from_string(str: string): RecurrenceSkip;
            /**
             * Converts a enum representation to a string representation for the skip.
             * @param kind The frequency enum
             */
            static skip_to_string(kind: RecurrenceSkip): string;
            /**
             * Converts a string representation to an enum representation for the weekday.
             * @param str The string representation of the weekday
             */
            static weekday_from_string(str: string): RecurrenceWeekday;
            /**
             * Converts a enum representation to a string representation for the weekday.
             * @param kind The frequency enum
             */
            static weekday_to_string(kind: RecurrenceWeekday): string;

            // Methods

            /**
             * Resets an #ICalRecurrence.
             */
            clear(): void;
            /**
             * Gets the by_day value at index `index`. The index should be less than %I_CAL_BY_DAY_SIZE.
             * @param index The index in by_day of #ICalRecurrence, less than %I_CAL_BY_DAY_SIZE
             * @returns The by_day of #ICalRecurrence at index @index.
             */
            get_by_day(index: number): number;
            /**
             * Gets the by_day array from #ICalRecurrence. The array size is I_CAL_BY_DAY_SIZE.
             * @returns The by_day of #ICalRecurrence.
             */
            get_by_day_array(): number[];
            /**
             * Gets the by_hour value at index `index`. The index should be less than %I_CAL_BY_HOUR_SIZE.
             * @param index The index in by_hour of #ICalRecurrence, less than %I_CAL_BY_HOUR_SIZE
             * @returns The by_hour of #ICalRecurrence at index @index.
             */
            get_by_hour(index: number): number;
            /**
             * Gets the by_hour array from #ICalRecurrence. The array size is I_CAL_BY_HOUR_SIZE.
             * @returns The by_hour of #ICalRecurrence.
             */
            get_by_hour_array(): number[];
            /**
             * Gets the by_minute value at index `index`. The index should be less than %I_CAL_BY_MINUTE_SIZE.
             * @param index The index in by_minute of #ICalRecurrence, less than %I_CAL_BY_MINUTE_SIZE
             * @returns The by_minute of #ICalRecurrence at index @index.
             */
            get_by_minute(index: number): number;
            /**
             * Gets the by_minute array from #ICalRecurrence. The array size is I_CAL_BY_MINUTE_SIZE.
             * @returns The by_minute of #ICalRecurrence.
             */
            get_by_minute_array(): number[];
            /**
             * Gets the by_month value at index `index`. The index should be less than %I_CAL_BY_MONTH_SIZE.
             * @param index The index in by_month of #ICalRecurrence, less than %I_CAL_BY_MONTH_SIZE
             * @returns The by_month of #ICalRecurrence at index @index.
             */
            get_by_month(index: number): number;
            /**
             * Gets the by_month array from #ICalRecurrence. The array size is I_CAL_BY_MONTH_SIZE.
             * @returns The by_month of #ICalRecurrence.
             */
            get_by_month_array(): number[];
            /**
             * Gets the by_month_day value at index `index`. The index should be less than %I_CAL_BY_MONTHDAY_SIZE.
             * @param index The index in by_month_day of #ICalRecurrence, less than %I_CAL_BY_MONTHDAY_SIZE
             * @returns The by_month_day of #ICalRecurrence at index @index.
             */
            get_by_month_day(index: number): number;
            /**
             * Gets the by_month_day array from #ICalRecurrence. The array size is I_CAL_BY_MONTHDAY_SIZE.
             * @returns The by_month_day of #ICalRecurrence.
             */
            get_by_month_day_array(): number[];
            /**
             * Gets the by_second value at index `index`. The index should be less than %I_CAL_BY_SECOND_SIZE.
             * @param index The index in by_second of #ICalRecurrence, less than %I_CAL_BY_SECOND_SIZE
             * @returns The by_second of #ICalRecurrence at index @index.
             */
            get_by_second(index: number): number;
            /**
             * Gets the by_second array from #ICalRecurrence. The array size if I_CAL_BY_SECOND_SIZE.
             * @returns The by_second of #ICalRecurrence.
             */
            get_by_second_array(): number[];
            /**
             * Gets the by_set_pos value at index `index`. The index should be less than %I_CAL_BY_SETPOS_SIZE.
             * @param index The index in by_set_pos of #ICalRecurrence, less than %I_CAL_BY_SETPOS_SIZE
             * @returns The by_week_no of #ICalRecurrence at index @index.
             */
            get_by_set_pos(index: number): number;
            /**
             * Gets the by_set_pos array from #ICalRecurrence. The array size is I_CAL_BY_SETPOS_SIZE.
             * @returns The by_set_pos of #ICalRecurrence.
             */
            get_by_set_pos_array(): number[];
            /**
             * Gets the by_week_no value at index `index`. The index should be less than %I_CAL_BY_WEEKNO_SIZE.
             * @param index The index in by_week_no of #ICalRecurrence, less than %I_CAL_BY_WEEKNO_SIZE
             * @returns The by_week_no of #ICalRecurrence at index @index.
             */
            get_by_week_no(index: number): number;
            /**
             * Gets the by_week_no array from #ICalRecurrence. The array size is I_CAL_BY_WEEKNO_SIZE.
             * @returns The by_week_no of #ICalRecurrence.
             */
            get_by_week_no_array(): number[];
            /**
             * Gets the by_year_day value at index `index`. The index should be less than %I_CAL_BY_YEARDAY_SIZE.
             * @param index The index in by_year_day of #ICalRecurrence, less than %I_CAL_BY_YEARDAY_SIZE
             * @returns The by_year_day of #ICalRecurrence at index @index.
             */
            get_by_year_day(index: number): number;
            /**
             * Gets the by_year_day array from #ICalRecurrence. The array size is I_CAL_BY_YEARDAY_SIZE.
             * @returns The by_year_day of #ICalRecurrence.
             */
            get_by_year_day_array(): number[];
            /**
             * Gets the count from #ICalRecurrence.
             * @returns The count of #ICalRecurrence.
             */
            get_count(): number;
            /**
             * Gets the freq from #ICalRecurrence.
             * @returns The freq of #ICalRecurrence.
             */
            get_freq(): RecurrenceFrequency;
            /**
             * Gets the interval from #ICalRecurrence.
             * @returns The interval of #ICalRecurrence.
             */
            get_interval(): number;
            /**
             * Gets the until from #ICalRecurrence.
             * @returns The until of #ICalRecurrence.
             */
            get_until(): Time;
            /**
             * Gets the week_start from #ICalRecurrence.
             * @returns The week_start of #ICalRecurrence.
             */
            get_week_start(): RecurrenceWeekday;
            /**
             * Sets the by_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_DAY_SIZE.
             * @param index The index in by_day of #ICalRecurrence
             * @param value The value to be set into by_day of #ICalRecurrence
             */
            set_by_day(index: number, value: number): void;
            /**
             * Sets the by_day array in `recur` at once. The array size can be less than I_CAL_BY_DAY_SIZE. Shorter arrays
             * are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
             * @param values The array of values
             */
            set_by_day_array(values: number[]): void;
            /**
             * Sets the by_hour array from #ICalRecurrence at the given index. The array size is I_CAL_BY_HOUR_SIZE.
             * @param index The index in by_hour of #ICalRecurrence
             * @param value The value to be set into by_hour of #ICalRecurrence
             */
            set_by_hour(index: number, value: number): void;
            /**
             * Sets the by_hour array in `recur` at once. The array size can be less than I_CAL_BY_HOUR_SIZE. Shorter
             * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
             * @param values The array of values
             */
            set_by_hour_array(values: number[]): void;
            /**
             * Sets the by_minute array from #ICalRecurrence at the given index. The array size is I_CAL_BY_MINUTE_SIZE.
             * @param index The index in by_minute of #ICalRecurrence
             * @param value The value to be set into by_minute of #ICalRecurrence
             */
            set_by_minute(index: number, value: number): void;
            /**
             * Sets the by_minute array in `recur` at once. The array size can be less than I_CAL_BY_MINUTE_SIZE. Shorter
             * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
             * @param values The array of values
             */
            set_by_minute_array(values: number[]): void;
            /**
             * Sets the by_month array from #ICalRecurrence at the given index. The array size is I_CAL_BY_MONTH_SIZE.
             * @param index The index in by_month of #ICalRecurrence
             * @param value The value to be set into by_month of #ICalRecurrence
             */
            set_by_month(index: number, value: number): void;
            /**
             * Sets the by_month array in `recur` at once. The array size can be less than I_CAL_BY_MONTH_SIZE. Shorter
             * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
             * @param values The array of values
             */
            set_by_month_array(values: number[]): void;
            /**
             * Sets the by_month_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_MONTHDAY_SIZE.
             * @param index The index in by_month_day of #ICalRecurrence
             * @param value The value to be set into by_month_day of #ICalRecurrence
             */
            set_by_month_day(index: number, value: number): void;
            /**
             * Sets the by_month_day array in `recur` at once. The array size can be less than I_CAL_BY_MONTHDAY_SIZE.
             * Shorter arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
             * @param values The array of values
             */
            set_by_month_day_array(values: number[]): void;
            /**
             * Sets the by_second array from #ICalRecurrence at the given index. The array size is I_CAL_BY_SECOND_SIZE.
             * @param index The index in by_second of #ICalRecurrence, less than I_CAL_BY_SECOND_SIZE
             * @param value The value to be set into by_second of #ICalRecurrence
             */
            set_by_second(index: number, value: number): void;
            /**
             * Sets the by_second array in `recur` at once. The array size can be less than I_CAL_BY_SECOND_SIZE. Shorter
             * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
             * @param values The array of values
             */
            set_by_second_array(values: number[]): void;
            /**
             * Sets the by_set_pos array from #ICalRecurrence at the given index. The array size is I_CAL_BY_SETPOS_SIZE.
             * @param index The index in by_set_pos of #ICalRecurrence
             * @param value The value to be set into by_set_pos of #ICalRecurrence
             */
            set_by_set_pos(index: number, value: number): void;
            /**
             * Sets the by_set_pos array in `recur` at once. The array size can be less than I_CAL_BY_SETPOS_SIZE. Shorter
             * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
             * @param values The array of values
             */
            set_by_set_pos_array(values: number[]): void;
            /**
             * Sets the by_week_no array from #ICalRecurrence at the given index. The array size is I_CAL_BY_WEEKNO_SIZE.
             * @param index The index in by_week_no of #ICalRecurrence
             * @param value The value to be set into by_week_no of #ICalRecurrence
             */
            set_by_week_no(index: number, value: number): void;
            /**
             * Sets the by_week_no array in `recur` at once. The array size can be less than I_CAL_BY_WEEKNO_SIZE. Shorter
             * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
             * @param values The array of values
             */
            set_by_week_no_array(values: number[]): void;
            /**
             * Sets the by_year_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_YEARDAY_SIZE.
             * @param index The index in by_year_day of #ICalRecurrence
             * @param value The value to be set into by_year_day of #ICalRecurrence
             */
            set_by_year_day(index: number, value: number): void;
            /**
             * Sets the by_year_day array in `recur` at once. The array size can be less than I_CAL_BY_YEARDAY_SIZE.
             * Shorter arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
             * @param values The array of values
             */
            set_by_year_day_array(values: number[]): void;
            /**
             * Sets the count from #ICalRecurrence.
             * @param count The count of #ICalRecurrence
             */
            set_count(count: number): void;
            /**
             * Sets the freq from #ICalRecurrence.
             * @param freq The freq of #ICalRecurrence
             */
            set_freq(freq: RecurrenceFrequency | null): void;
            /**
             * Sets the interval from #ICalRecurrence.
             * @param interval The interval of #ICalRecurrence
             */
            set_interval(interval: number): void;
            /**
             * Sets the until from #ICalRecurrence.
             * @param until The until of #ICalRecurrence
             */
            set_until(until: Time): void;
            /**
             * Sets the week_start from #ICalRecurrence.
             * @param week_start The week_start of #ICalRecurrence
             */
            set_week_start(week_start: RecurrenceWeekday | null): void;
            /**
             * Converts a #ICalRecurrence to a string.
             * @returns The string representation of @recur.
             */
            to_string(): string;
        }

        module Reqstat {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalReqstat instance.
         */
        class Reqstat extends Object {
            static $gtype: GObject.GType<Reqstat>;

            // Constructors

            constructor(properties?: Partial<Reqstat.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_string(str: string): Reqstat;

            // Methods

            /**
             * Gets the code of #ICalReqstat.
             * @returns The code of @reqstat.
             */
            get_code(): RequestStatus;
            /**
             * Gets the debug of #ICalReqstat.
             * @returns The debug of @reqstat.
             */
            get_debug(): string;
            /**
             * Gets the desc of #ICalReqstat.
             * @returns The desc of @reqstat.
             */
            get_desc(): string;
            /**
             * Sets the code of #ICalReqstat.
             * @param code The code of @reqstat
             */
            set_code(code: RequestStatus | null): void;
            /**
             * Converts #ICalReqstat to a string representation.
             * @returns A string.
             */
            to_string(): string;
        }

        module Time {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalTime instance.
         */
        class Time extends Object {
            static $gtype: GObject.GType<Time>;

            // Constructors

            constructor(properties?: Partial<Time.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Time;

            static new_current_with_zone(zone?: Timezone | null): Time;

            static new_from_day_of_year(day: number, year: number): Time;

            static new_from_string(str: string): Time;

            static new_from_timet_with_zone(v: never, is_date: number, zone?: Timezone | null): Time;

            static new_null_date(): Time;

            static new_null_time(): Time;

            static new_today(): Time;

            // Static methods

            /**
             * Gets the number of days in the target month in the target year.
             * @param month The target month
             * @param year The target year
             */
            static days_in_month(month: number, year: number): number;
            /**
             * Returns the number of days in this year.
             * @param year The target year
             */
            static days_in_year(year: number): number;
            /**
             * Checks whether a year is a leap year.
             * @param year The target year
             */
            static days_is_leap_year(year: number): boolean;
            /**
             * Applies a list of timezone changes on the array of components until the end year.
             * @param comp The #ICalComponent
             * @param end_year The end year
             * @param changes The changes to be applies
             */
            static timezone_expand_vtimezone(comp: Component, end_year: number, changes: Array): void;

            // Methods

            /**
             * Adds a time duration on the time.
             * @param d A #ICalDuration as the difference
             * @returns The #ICalTime results. The native object is the same. But since it is a bare object, so it won't cause segmentation.
             */
            add(d: Duration): Time;
            /**
             * Adds or subtracts a number of days, hours, minutes and seconds from `tt`.
             * @param days Difference of days adjusted
             * @param hours Difference of hours adjusted
             * @param minutes Difference of minutes adjusted
             * @param seconds Difference of seconds adjusted
             */
            adjust(days: number, hours: number, minutes: number, seconds: number): void;
            /**
             * Returns a string representation of the time, in RFC2445 format.
             * @returns The string representation
             */
            as_ical_string(): string;
            /**
             * Returns the time as seconds past the UNIX epoch.
             * @returns The time as seconds past the UNIX epoch
             */
            as_timet(): never;
            /**
             * Returns the time as seconds past the UNIX epoch, using timezones.
             * @param zone The timezone
             * @returns The time as seconds past the UNIX epoch
             */
            as_timet_with_zone(zone?: Timezone | null): never;
            /**
             * Creates a new #ICalTime, copy of `timetype`.
             * @returns The newly created #ICalTime, copy of @timetype.
             */
            clone(): Time;
            /**
             * i_cal_time_compare returns an integer indicating the result of the comparison, as follow:
             * @param b The #ICalTime to be compared
             * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
             */
            compare(b: Time): number;
            /**
             * Like i_cal_time_compare(), but only use the date parts.
             * @param b The #ICalTime to be compared
             * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
             */
            compare_date_only(b: Time): number;
            /**
             * Like i_cal_time_compare_tz(), but only use the date parts; accepts timezone.
             * @param b The #ICalTime to be compared
             * @param zone The target timezone
             * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
             */
            compare_date_only_tz(b: Time, zone?: Timezone | null): number;
            /**
             * Convert time from one timezone to another.
             * @param from_zone From timezone
             * @param to_zone To timezone
             */
            convert_timezone(from_zone?: Timezone | null, to_zone?: Timezone | null): void;
            /**
             * Converts `tt` to `zone` and return new #ICalTime object.
             * @param zone The target timezone
             * @returns The converted #ICalTime
             */
            convert_to_zone(zone?: Timezone | null): Time;
            /**
             * Converts `tt` to `zone` and store the result into `tt`.
             * @param zone The target timezone
             */
            convert_to_zone_inplace(zone?: Timezone | null): void;
            /**
             * Returns the day of the week of the given time. Sunday is 1.
             * @returns The day of the week of the given time. Sunday is 1.
             */
            day_of_week(): number;
            /**
             * Returns the day of the year of the given time.
             * @returns The day of the year of the given time
             */
            day_of_year(): number;
            /**
             * Gets the year/month/date parts of the `timetype` in one call.
             */
            get_date(): [number, number, number];
            /**
             * Gets the day of #ICalTime.
             * @returns The day.
             */
            get_day(): number;
            /**
             * Gets the hour of #ICalTime.
             * @returns The hour.
             */
            get_hour(): number;
            /**
             * Gets the minute of #ICalTime.
             * @returns The minute.
             */
            get_minute(): number;
            /**
             * Gets the month of #ICalTime.
             * @returns The month.
             */
            get_month(): number;
            /**
             * Gets the second of #ICalTime.
             * @returns The second.
             */
            get_second(): number;
            /**
             * Gets the hour/minute/second parts of the `timetype` in one call.
             */
            get_time(): [number, number, number];
            /**
             * Returns the timezone, the #ICalTimezone object is cached and can be either unreferenced once the last
             * instance is used or can be kept until i_cal_object_free_global_objects() is called (usually at the very
             * end of the program).
             * @returns The timezone information
             */
            get_timezone(): Timezone;
            /**
             * Returns the tzid, or NULL for a floating time.
             * @returns The tzid of #ICalTime, or NULL if floating type
             */
            get_tzid(): string | null;
            /**
             * Gets the year of #ICalTime.
             * @returns The year.
             */
            get_year(): number;
            /**
             * Returns true if time is of DATE type, false if DATE-TIME.
             * @returns True if time is of DATE type, false if DATE-TIME.
             */
            is_date(): boolean;
            /**
             * Gets the is_daylight of #ICalTime.
             * @returns The is_daylight.
             */
            is_daylight(): boolean;
            /**
             * Returns true if the time is null.
             * @returns Whether @tt is null_time. 1 if yes, 0 if not.
             */
            is_null_time(): boolean;
            /**
             * Returns true if time is relative to UTC zone.
             * @returns True if time is relative to UTC zone.
             */
            is_utc(): boolean;
            /**
             * Returns true if the time is null.
             * @returns Whether @tt is null_time. 1 if yes, 0 if not.
             */
            is_valid_time(): boolean;
            /**
             * Normalizes the icaltime, so that all fields are within the normal range.
             * @returns The #ICalTime normalized
             */
            normalize(): Time;
            /**
             * Normalizes the `tt,` so that all fields are within the normal range.
             */
            normalize_inplace(): void;
            /**
             * Sets the year/month/date parts of the `timetype` in one call. This doesn't verify validity of the given
             * date.
             * @param year The 'year' part of the date
             * @param month The 'month' part of the date
             * @param day The 'day' part of the date
             */
            set_date(year: number, month: number, day: number): void;
            /**
             * Sets the day of #ICalTime.
             * @param day The day
             */
            set_day(day: number): void;
            /**
             * Sets the hour of #ICalTime.
             * @param hour The hour
             */
            set_hour(hour: number): void;
            /**
             * Sets the is_date of #ICalTime.
             * @param is_date The is_date
             */
            set_is_date(is_date: boolean): void;
            /**
             * Sets the is_daylight of #ICalTime.
             * @param is_daylight The is_daylight
             */
            set_is_daylight(is_daylight: boolean): void;
            /**
             * Sets the minute of #ICalTime.
             * @param minute The minute
             */
            set_minute(minute: number): void;
            /**
             * Sets the month of #ICalTime.
             * @param month The month
             */
            set_month(month: number): void;
            /**
             * Sets the second of #ICalTime.
             * @param second The second
             */
            set_second(second: number): void;
            /**
             * Sets the hour/minute/second parts of the `timetype` in one call. This doesn't verify validity of the given
             * time.
             * @param hour The 'hour' part of the time
             * @param minute The 'minute' part of the time
             * @param second The 'second' part of the time
             */
            set_time(hour: number, minute: number, second: number): void;
            /**
             * Sets the timezone of the `tt`.
             * @param zone The timezone
             */
            set_timezone(zone?: Timezone | null): void;
            /**
             * Sets the year of #ICalTime.
             * @param year The year
             */
            set_year(year: number): void;
            /**
             * Returns the day of the year for the first day of the week that the given time is within.
             * @param fdow The first day of the week
             * @returns The day of the year for the Sunday of the week that the given time is within.
             */
            start_doy_week(fdow: number): number;
            /**
             * Gets the duration between two time.
             * @param t2 The subtracting #ICalTime
             * @returns The #ICalDuration between two #ICalTime.
             */
            subtract(t2: Time): Duration;
            /**
             * Returns the week number for the week the given time is within.
             * @returns The week number for the week the given time is within.
             */
            week_number(): number;
        }

        module TimeSpan {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalTimeSpan instance.
         */
        class TimeSpan extends Object {
            static $gtype: GObject.GType<TimeSpan>;

            // Constructors

            constructor(properties?: Partial<TimeSpan.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](dtstart: Time, dtend: Time, is_busy: number): TimeSpan;

            static new_timet(start: never, end: never, is_busy: boolean): TimeSpan;

            // Methods

            /**
             * Creates a new #ICalTimeSpan, clone of `src`. Free it with g_object_unref(), when no longer needed.
             * @returns The newly created #ICalTimeSpan, clone of @src.
             */
            clone(): TimeSpan;
            /**
             * Checks whether one #ICalTimeSpan is contained in another #ICalTimeSpan.
             * @param container The target container of #ICalTimeSpan
             * @returns Whether one #ICalTimeSpan is contained in another #ICalTimeSpan.
             */
            contains(container: TimeSpan): number;
            /**
             * Gets the end of #ICalTimeSpan.
             * @returns The end.
             */
            get_end(): never;
            /**
             * Gets the is_busy of #ICalTimeSpan.
             * @returns The is_busy.
             */
            get_is_busy(): boolean;
            /**
             * Gets the start of #ICalTimeSpan.
             * @returns The start.
             */
            get_start(): never;
            /**
             * Checks whether two spans overlap.
             * @param s2 The second #ICalTimeSpan
             * @returns Whether these two span are overlapped.
             */
            overlaps(s2: TimeSpan): number;
            /**
             * Sets the end of #ICalTimeSpan.
             * @param end The end
             */
            set_end(end: never): void;
            /**
             * Sets the is_busy of #ICalTimeSpan.
             * @param is_busy The is_busy
             */
            set_is_busy(is_busy: boolean): void;
            /**
             * Sets the start of #ICalTimeSpan.
             * @param start The start
             */
            set_start(start: never): void;
        }

        module Timezone {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalTimezone instance.
         */
        class Timezone extends Object {
            static $gtype: GObject.GType<Timezone>;

            // Constructors

            constructor(properties?: Partial<Timezone.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static array_new(): Timezone;

            static ['new'](): Timezone;

            // Static methods

            /**
             * Populate the array of timezones with a component.
             *
             * `note` The `timezones` assumes ownership of the
             * `child,` thus make sure you pass an unowned #ICalComponent.
             * @param timezones The timezones to be populated
             * @param child The component to be appended to @timezones
             */
            static array_append_from_vtimezone(timezones: Array, child: Component): void;
            /**
             * Gets the #ICalTimezone at specified position in array.
             * @param timezones The array to be visited
             * @param index The index
             */
            static array_element_at(timezones: Array, index: number): Timezone;
            /**
             * Frees any builtin timezone information.
             */
            static free_builtin_timezones(): void;
            /**
             * Frees memory dedicated to the zonefile directory.
             */
            static free_zone_directory(): void;
            /**
             * Returns a single builtin timezone, given its Olson city name.
             * @param location The location representing the timezone
             */
            static get_builtin_timezone(location?: string | null): Timezone | null;
            /**
             * Returns a single builtin timezone, given its offset.
             * @param offset The offset used to get the #ICalTimezone
             * @param tzname The reference #ICalTimezone name
             */
            static get_builtin_timezone_from_offset(offset: number, tzname?: string | null): Timezone;
            /**
             * Returns a single builtin timezone, given its TZID.
             * @param tzid The tzid name
             */
            static get_builtin_timezone_from_tzid(tzid?: string | null): Timezone;
            /**
             * Returns a list of builtin timezones.
             */
            static get_builtin_timezones(): Array;
            /**
             * Gets whether to use builtin timezones files.
             */
            static get_builtin_tzdata(): boolean;
            /**
             * Gets the location of the vtimezone in component.
             * @param component The #ICalComponent to be queried
             */
            static get_location_from_vtimezone(component: Component): string;
            /**
             * Gets the name of the vtimezone in component.
             * @param component The #ICalComponent to be queried
             */
            static get_tznames_from_vtimezone(component: Component): string;
            /**
             * Returns the UTC timezone.
             */
            static get_utc_timezone(): Timezone;
            /**
             * Gets the directory to look for the zonefiles.
             */
            static get_zone_directory(): string;
            /**
             * Frees memory dedicated to the zonefile directory.
             */
            static release_zone_tab(): void;
            /**
             * Sets whether to use builtin timezones files.
             * @param set Whether to use builtin timezones files
             */
            static set_builtin_tzdata(set: boolean): void;
            /**
             * Sets the prefix to be used for tzid's generated from system tzdata. Must be globally unique (such as
             * a domain name owned by the developer of the calling application), and begin and end with forward slashes.
             * Do not change or de-allocate the string buffer after calling this.
             * @param new_prefix The #ICalTimezone to be set
             */
            static set_tzid_prefix(new_prefix: string): void;
            /**
             * Sets the directory to look for the zonefiles.
             * @param path The path to look for the zonefiles
             */
            static set_zone_directory(path: string): void;

            // Methods

            /**
             * The clone method for #ICalTimezone.
             * @returns The newly created #ICalTimezone with the same values as @zone
             */
            copy(): Timezone;
            /**
             * Outputs a list of timezone changes for the given timezone to the given file, up to the maximum year given.
             * @param max_year Max year
             * @param fp The file handle
             * @returns 1 if success.
             */
            dump_changes(max_year: number, fp?: any | null): number;
            /**
             * Returns the VTIMEZONE component of a timezone.
             * @returns The VTIMEZONE component of the @zone.
             */
            get_component(): Component;
            /**
             * Gets the display name of the `zone`.
             * @returns The display name of @zone
             */
            get_display_name(): string;
            /**
             * Returns the latitude of a builtin timezone.
             * @returns The latitude of the #ICalTimezone
             */
            get_latitude(): number;
            /**
             * Returns the city name of a timezone, or %NULL, when none is set or when `zone` is also %NULL.
             * @returns The location of the #ICalTimezone, or %NULL
             */
            get_location(): string | null;
            /**
             * Returns the longitude of a builtin timezone.
             * @returns The longitude of the #ICalTimezone.
             */
            get_longitude(): number;
            /**
             * Returns the TZID of a timezone, or %NULL, when none is set or when `zone` is also %NULL.
             * @returns The timezone id, or %NULL
             */
            get_tzid(): string | null;
            /**
             * Returns the TZNAME properties used in the latest STANDARD and DAYLIGHT components. If they are the same
             * it will return just one, e.g. "LMT". If they are different it will format them like "EST/EDT". Note that
             * this may also return NULL.
             * @returns The timezone name
             */
            get_tznames(): string | null;
            /**
             * Calculates the UTC offset of a given local time in the given timezone.  It is the number of seconds to
             * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
             * @param tt The local time
             * @returns UTC offset of the @zone
             */
            get_utc_offset(tt: Time | null): [number, number];
            /**
             * Calculates the UTC offset of a given UTC time in the given timezone.  It is the number of seconds to
             * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
             * @param tt The local time
             * @returns UTC offset of the @zone
             */
            get_utc_offset_of_utc_time(tt: Time): [number, number];
            /**
             * Sets the VTIMEZONE component of #ICalTimezone, initializing the tzid, location and tzname fields. It
             * returns 1 on success or 0 on failure, i.e. no TZID was found.
             *
             * `note` The `zone` assumes ownership
             * of the `comp,` thus make sure you pass an unowned #ICalComponent.
             * @param comp The VTIMEZONE component of an #ICalTimezone, initializing the tzid, location and tzname fields
             * @returns Whether the action is successful. 1 for success, 0 for failure.
             */
            set_component(comp: Component): number;
        }

        module Trigger {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalTrigger instance.
         */
        class Trigger extends Object {
            static $gtype: GObject.GType<Trigger>;

            // Constructors

            constructor(properties?: Partial<Trigger.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_int(reltime: number): Trigger;

            static new_from_string(str: string): Trigger;

            // Methods

            /**
             * Gets the duration from #ICalTrigger.
             * @returns The duration of #ICalTrigger.
             */
            get_duration(): Duration;
            /**
             * Gets the time from #ICalTrigger.
             * @returns The time of #ICalTrigger.
             */
            get_time(): Time;
            /**
             * Checks if a #ICalTrigger is a bad trigger.
             * @returns 1 if yes, 0 if not.
             */
            is_bad_trigger(): boolean;
            /**
             * Checks if a #ICalTrigger is a null trigger.
             * @returns 1 if yes, 0 if not.
             */
            is_null_trigger(): boolean;
            /**
             * Sets the duration from #ICalTrigger.
             * @param duration The duration of #ICalTrigger
             */
            set_duration(duration: Duration): void;
            /**
             * Sets the time from #ICalTrigger.
             * @param time The time of #ICalTrigger
             */
            set_time(time: Time): void;
        }

        module Value {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * This is the ICalValue instance.
         */
        class Value extends Object {
            static $gtype: GObject.GType<Value>;

            // Constructors

            constructor(properties?: Partial<Value.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](kind: ValueKind): Value;

            static new_action(v: PropertyAction): Value;

            static new_attach(v: Attach): Value;

            static new_binary(v: string): Value;

            static new_boolean(v: number): Value;

            static new_busytype(v: PropertyBusytype): Value;

            static new_caladdress(v: string): Value;

            static new_carlevel(v: PropertyCarlevel): Value;

            static new_class(v: Property_Class): Value;

            static new_cmd(v: PropertyCmd): Value;

            static new_date(v: Time): Value;

            static new_datetime(v: Time): Value;

            static new_datetimedate(v: Time): Value;

            static new_datetimeperiod(v: Datetimeperiod): Value;

            static new_duration(v: Duration): Value;

            static new_float(v: number): Value;

            static new_from_string(kind: ValueKind, str: string): Value;

            static new_geo(v: Geo): Value;

            static new_integer(v: number): Value;

            static new_method(v: PropertyMethod): Value;

            static new_period(v: Period): Value;

            static new_pollcompletion(v: PropertyPollcompletion): Value;

            static new_pollmode(v: PropertyPollmode): Value;

            static new_query(v: string): Value;

            static new_querylevel(v: PropertyQuerylevel): Value;

            static new_recur(v: Recurrence): Value;

            static new_requeststatus(v: Reqstat): Value;

            static new_status(v: PropertyStatus): Value;

            static new_string(v: string): Value;

            static new_taskmode(v: PropertyTaskmode): Value;

            static new_text(v: string): Value;

            static new_transp(v: PropertyTransp): Value;

            static new_trigger(v: Trigger): Value;

            static new_uri(v: string): Value;

            static new_utcoffset(v: number): Value;

            static new_x(v: string): Value;

            static new_xlicclass(v: PropertyXlicclass): Value;

            // Static methods

            /**
             * Extracts the original character string encoded by the above function.
             * @param szText A string
             */
            static decode_ical_string(szText: string): string | null;
            /**
             * Encodes a character string in ical format, escape certain characters, etc.
             * @param szText A string
             */
            static encode_ical_string(szText: string): string | null;
            /**
             * Converts a string to #ICalValueKind.
             * @param str A string
             */
            static kind_from_string(str: string): ValueKind;
            /**
             * Checks whether the #ICalValueKind is valid.
             * @param kind The #ICalValueKind to be checked
             */
            static kind_is_valid(kind: ValueKind): boolean;
            /**
             * Converts a #ICalValueKind to a #ICalPropertyKind.
             * @param kind A #ICalValueKind
             */
            static kind_to_property_kind(kind: ValueKind): PropertyKind;
            /**
             * Converts the #ICalValueKind to a string.
             * @param kind A #ICalValueKind
             */
            static kind_to_string(kind: ValueKind): string;

            // Methods

            /**
             * Converts the #ICalValue to a string.
             * @returns The string representation.
             */
            as_ical_string(): string;
            /**
             * Deeply clone a #ICalValue.
             * @returns The newly created #ICalValue with the same property as @value.
             */
            clone(): Value;
            /**
             * Compares two #ICalValue.
             * @param b A #ICalValue
             * @returns The compare result.
             */
            compare(b: Value): ParameterXliccomparetype;
            /**
             * Gets the action of #ICalValue.
             * @returns The action within #ICalValue
             */
            get_action(): PropertyAction;
            /**
             * Gets the attach of #ICalValue.
             * @returns The attach within #ICalValue
             */
            get_attach(): Attach | null;
            /**
             * Gets the binary of #ICalValue.
             * @returns The binary within #ICalValue
             */
            get_binary(): string | null;
            /**
             * Gets the boolean of #ICalValue.
             * @returns The boolean within #ICalValue
             */
            get_boolean(): number;
            /**
             * Gets the busytype of #ICalValue.
             * @returns The busytype within #ICalValue
             */
            get_busytype(): PropertyBusytype;
            /**
             * Gets the caladdress of #ICalValue.
             * @returns The caladdress within #ICalValue
             */
            get_caladdress(): string | null;
            /**
             * Gets the carlevel of #ICalValue.
             * @returns The carlevel within #ICalValue
             */
            get_carlevel(): PropertyCarlevel;
            /**
             * Gets the class of #ICalValue.
             * @returns The class within #ICalValue
             */
            get_class(): Property_Class;
            /**
             * Gets the cmd of #ICalValue.
             * @returns The cmd within #ICalValue
             */
            get_cmd(): PropertyCmd;
            /**
             * Gets the date of #ICalValue.
             * @returns The date within #ICalValue
             */
            get_date(): Time | null;
            /**
             * Gets the datetime of #ICalValue.
             * @returns The datetime within #ICalValue
             */
            get_datetime(): Time | null;
            /**
             * Gets the datetimedate (DATE-TIME or DATE) of #ICalValue.
             * @returns The datetimedate within #ICalValue
             */
            get_datetimedate(): Time | null;
            /**
             * Gets the datetimeperiod of #ICalValue.
             * @returns The datetimeperiod within #ICalValue
             */
            get_datetimeperiod(): Datetimeperiod | null;
            /**
             * Gets the duration of #ICalValue.
             * @returns The duration within #ICalValue
             */
            get_duration(): Duration | null;
            /**
             * Gets the float of #ICalValue.
             * @returns The float within #ICalValue
             */
            get_float(): number;
            /**
             * Gets the geo of #ICalValue.
             * @returns The geo within #ICalValue
             */
            get_geo(): Geo | null;
            /**
             * Gets the integer of #ICalValue.
             * @returns The integer within #ICalValue
             */
            get_integer(): number;
            /**
             * Gets the method of #ICalValue.
             * @returns The method within #ICalValue
             */
            get_method(): PropertyMethod;
            /**
             * Gets the parent #ICalProperty of the specified #ICalValue.
             * @returns The parent #ICalProperty
             */
            get_parent(): Property | null;
            /**
             * Gets the period of #ICalValue.
             * @returns The period within #ICalValue
             */
            get_period(): Period | null;
            /**
             * Gets the pollcompletion of #ICalValue.
             * @returns The pollcompletion within #ICalValue
             */
            get_pollcompletion(): PropertyPollcompletion;
            /**
             * Gets the pollmode of #ICalValue.
             * @returns The pollmode within #ICalValue
             */
            get_pollmode(): PropertyPollmode;
            /**
             * Gets the query of #ICalValue.
             * @returns The query within #ICalValue
             */
            get_query(): string | null;
            /**
             * Gets the querylevel of #ICalValue.
             * @returns The querylevel within #ICalValue
             */
            get_querylevel(): PropertyQuerylevel;
            /**
             * Gets the recur of #ICalValue.
             * @returns The recur within #ICalValue
             */
            get_recur(): Recurrence | null;
            /**
             * Gets the requeststatus of #ICalValue.
             * @returns The requeststatus within #ICalValue
             */
            get_requeststatus(): Reqstat | null;
            /**
             * Gets the status of #ICalValue.
             * @returns The status within #ICalValue
             */
            get_status(): PropertyStatus;
            /**
             * Gets the string of #ICalValue.
             * @returns The string within #ICalValue
             */
            get_string(): string | null;
            /**
             * Gets the taskmode of #ICalValue.
             * @returns The taskmode within #ICalValue
             */
            get_taskmode(): PropertyTaskmode;
            /**
             * Gets the text of #ICalValue.
             * @returns The text within #ICalValue
             */
            get_text(): string | null;
            /**
             * Gets the transp of #ICalValue.
             * @returns The transp within #ICalValue
             */
            get_transp(): PropertyTransp;
            /**
             * Gets the trigger of #ICalValue.
             * @returns The trigger within #ICalValue
             */
            get_trigger(): Trigger | null;
            /**
             * Gets the uri of #ICalValue.
             * @returns The uri within #ICalValue
             */
            get_uri(): string | null;
            /**
             * Gets the utcoffset of #ICalValue.
             * @returns The utcoffset within #ICalValue
             */
            get_utcoffset(): number;
            /**
             * Gets the x of #ICalValue.
             * @returns The x within #ICalValue
             */
            get_x(): string | null;
            /**
             * Gets the xlicclass of #ICalValue.
             * @returns The xlicclass within #ICalValue
             */
            get_xlicclass(): PropertyXlicclass;
            /**
             * Checks if #ICalValue is valid.
             * @returns 1 if valid, 0 if not.
             */
            is_valid(): boolean;
            /**
             * Gets the kind of #ICalValue.
             * @returns The kind of @value.
             */
            isa(): ValueKind;
            /**
             * Checks whether the native part of #ICalValue is an icalvalue.
             * @returns 1 if yes, 0 if not.
             */
            isa_value(): number;
            /**
             * Resets the kind of #ICalValue.
             */
            reset_kind(): void;
            /**
             * Sets the action in the #ICalValue.
             * @param v The action value
             */
            set_action(v: PropertyAction | null): void;
            /**
             * Sets the attach in the #ICalValue.
             * @param v The attach value
             */
            set_attach(v: Attach): void;
            /**
             * Sets the binary in the #ICalValue.
             * @param v The binary value
             */
            set_binary(v: string): void;
            /**
             * Sets the boolean in the #ICalValue.
             * @param v The boolean value
             */
            set_boolean(v: number): void;
            /**
             * Sets the busytype in the #ICalValue.
             * @param v The busytype value
             */
            set_busytype(v: PropertyBusytype | null): void;
            /**
             * Sets the caladdress in the #ICalValue.
             * @param v The caladdress value
             */
            set_caladdress(v: string): void;
            /**
             * Sets the carlevel in the #ICalValue.
             * @param v The carlevel value
             */
            set_carlevel(v: PropertyCarlevel | null): void;
            /**
             * Sets the class in the #ICalValue.
             * @param v The class value
             */
            set_class(v: Property_Class | null): void;
            /**
             * Sets the cmd in the #ICalValue.
             * @param v The cmd value
             */
            set_cmd(v: PropertyCmd | null): void;
            /**
             * Sets the date in the #ICalValue.
             * @param v The date value
             */
            set_date(v: Time): void;
            /**
             * Sets the datetime in the #ICalValue.
             * @param v The datetime value
             */
            set_datetime(v: Time): void;
            /**
             * Sets the datetimedate (DATE-TIME or DATE) in the #ICalValue.
             * @param v The datetimedate (DATE-TIME or DATE) value
             */
            set_datetimedate(v: Time): void;
            /**
             * Sets the datetimeperiod in the #ICalValue.
             * @param v The datetimeperiod value
             */
            set_datetimeperiod(v: Datetimeperiod): void;
            /**
             * Sets the duration in the #ICalValue.
             * @param v The duration value
             */
            set_duration(v: Duration): void;
            /**
             * Sets the float in the #ICalValue.
             * @param v The float value
             */
            set_float(v: number): void;
            /**
             * Sets the geo in the #ICalValue.
             * @param v The geo value
             */
            set_geo(v: Geo): void;
            /**
             * Sets the integer in the #ICalValue.
             * @param v The integer value
             */
            set_integer(v: number): void;
            /**
             * Sets the method in the #ICalValue.
             * @param v The method value
             */
            set_method(v: PropertyMethod | null): void;
            /**
             * Sets the parent property of a value.
             * @param property The parent #ICalProperty
             */
            set_parent(property?: Property | null): void;
            /**
             * Sets the period in the #ICalValue.
             * @param v The period value
             */
            set_period(v: Period): void;
            /**
             * Sets the pollcompletion in the #ICalValue.
             * @param v The pollcompletion value
             */
            set_pollcompletion(v: PropertyPollcompletion | null): void;
            /**
             * Sets the pollmode in the #ICalValue.
             * @param v The pollmode value
             */
            set_pollmode(v: PropertyPollmode | null): void;
            /**
             * Sets the query in the #ICalValue.
             * @param v The query value
             */
            set_query(v: string): void;
            /**
             * Sets the querylevel in the #ICalValue.
             * @param v The querylevel value
             */
            set_querylevel(v: PropertyQuerylevel | null): void;
            /**
             * Sets the recur in the #ICalValue.
             * @param v The recur value
             */
            set_recur(v: Recurrence): void;
            /**
             * Sets the requeststatus in the #ICalValue.
             * @param v The requeststatus value
             */
            set_requeststatus(v: Reqstat): void;
            /**
             * Sets the status in the #ICalValue.
             * @param v The status value
             */
            set_status(v: PropertyStatus | null): void;
            /**
             * Sets the string in the #ICalValue.
             * @param v The string value
             */
            set_string(v: string): void;
            /**
             * Sets the taskmode in the #ICalValue.
             * @param v The taskmode value
             */
            set_taskmode(v: PropertyTaskmode | null): void;
            /**
             * Sets the text in the #ICalValue.
             * @param v The text value
             */
            set_text(v: string): void;
            /**
             * Sets the transp in the #ICalValue.
             * @param v The transp value
             */
            set_transp(v: PropertyTransp | null): void;
            /**
             * Sets the trigger in the #ICalValue.
             * @param v The trigger value
             */
            set_trigger(v: Trigger): void;
            /**
             * Sets the uri in the #ICalValue.
             * @param v The uri value
             */
            set_uri(v: string): void;
            /**
             * Sets the utcoffset in the #ICalValue.
             * @param v The utcoffset value
             */
            set_utcoffset(v: number): void;
            /**
             * Sets the x in the #ICalValue.
             * @param v The x value
             */
            set_x(v: string): void;
            /**
             * Sets the xlicclass in the #ICalValue.
             * @param v The xlicclass value
             */
            set_xlicclass(v: PropertyXlicclass | null): void;
        }

        type ArrayClass = typeof Array;
        type AttachClass = typeof Attach;
        type CompIterClass = typeof CompIter;
        type ComponentClass = typeof Component;
        type DatetimeperiodClass = typeof Datetimeperiod;
        type DurationClass = typeof Duration;
        type GeoClass = typeof Geo;
        type ObjectClass = typeof Object;
        abstract class ObjectPrivate {
            static $gtype: GObject.GType<ObjectPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ParameterClass = typeof Parameter;
        type ParserClass = typeof Parser;
        type PeriodClass = typeof Period;
        type PropertyClass = typeof Property;
        type RecurIteratorClass = typeof RecurIterator;
        type RecurrenceClass = typeof Recurrence;
        type ReqstatClass = typeof Reqstat;
        type TimeClass = typeof Time;
        type TimeSpanClass = typeof TimeSpan;
        type TimezoneClass = typeof Timezone;
        type TriggerClass = typeof Trigger;
        type ValueClass = typeof Value;
        abstract class _Array {
            static $gtype: GObject.GType<_Array>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Attach {
            static $gtype: GObject.GType<_Attach>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _CompIter {
            static $gtype: GObject.GType<_CompIter>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Component {
            static $gtype: GObject.GType<_Component>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Datetimeperiod {
            static $gtype: GObject.GType<_Datetimeperiod>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Duration {
            static $gtype: GObject.GType<_Duration>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Geo {
            static $gtype: GObject.GType<_Geo>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Parameter {
            static $gtype: GObject.GType<_Parameter>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Parser {
            static $gtype: GObject.GType<_Parser>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Period {
            static $gtype: GObject.GType<_Period>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Property {
            static $gtype: GObject.GType<_Property>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _RecurIterator {
            static $gtype: GObject.GType<_RecurIterator>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Recurrence {
            static $gtype: GObject.GType<_Recurrence>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Reqstat {
            static $gtype: GObject.GType<_Reqstat>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Time {
            static $gtype: GObject.GType<_Time>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _TimeSpan {
            static $gtype: GObject.GType<_TimeSpan>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Timezone {
            static $gtype: GObject.GType<_Timezone>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Trigger {
            static $gtype: GObject.GType<_Trigger>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _Value {
            static $gtype: GObject.GType<_Value>;

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

    export default ICalGLib;
}

declare module 'gi://ICalGLib' {
    import ICalGLib30 from 'gi://ICalGLib?version=3.0';
    export default ICalGLib30;
}
// END
