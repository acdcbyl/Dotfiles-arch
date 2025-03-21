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

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://ECal?version=2.0' {
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

    export namespace ECal {
        /**
         * ECal-2.0
         */

        export namespace ClientError {
            export const $gtype: GObject.GType<ClientError>;
        }

        enum ClientError {
            /**
             * No such calendar
             */
            NO_SUCH_CALENDAR,
            /**
             * Object not found
             */
            OBJECT_NOT_FOUND,
            /**
             * Invalid object
             */
            INVALID_OBJECT,
            /**
             * Unknown user
             */
            UNKNOWN_USER,
            /**
             * Object ID already exists
             */
            OBJECT_ID_ALREADY_EXISTS,
            /**
             * Invalid range
             */
            INVALID_RANGE,
        }
        /**
         * Indicates the type of calendar
         */

        /**
         * Indicates the type of calendar
         */
        export namespace ClientSourceType {
            export const $gtype: GObject.GType<ClientSourceType>;
        }

        enum ClientSourceType {
            /**
             * Events calander
             */
            EVENTS,
            /**
             * Task list calendar
             */
            TASKS,
            /**
             * Memo list calendar
             */
            MEMOS,
        }
        /**
         * Alarm types
         */

        /**
         * Alarm types
         */
        export namespace ComponentAlarmAction {
            export const $gtype: GObject.GType<ComponentAlarmAction>;
        }

        enum ComponentAlarmAction {
            /**
             * None
             */
            NONE,
            /**
             * Audio
             */
            AUDIO,
            /**
             * Display message
             */
            DISPLAY,
            /**
             * Email
             */
            EMAIL,
            /**
             * Procedure
             */
            PROCEDURE,
            /**
             * Unknown
             */
            UNKNOWN,
        }

        export namespace ComponentAlarmTriggerKind {
            export const $gtype: GObject.GType<ComponentAlarmTriggerKind>;
        }

        enum ComponentAlarmTriggerKind {
            NONE,
            RELATIVE_START,
            RELATIVE_END,
            ABSOLUTE,
        }
        /**
         * CLASSIFICATION property
         */

        /**
         * CLASSIFICATION property
         */
        export namespace ComponentClassification {
            export const $gtype: GObject.GType<ComponentClassification>;
        }

        enum ComponentClassification {
            /**
             * None
             */
            NONE,
            /**
             * Public
             */
            PUBLIC,
            /**
             * Private
             */
            PRIVATE,
            /**
             * Confidential
             */
            CONFIDENTIAL,
            /**
             * Unknown
             */
            UNKNOWN,
        }
        /**
         * Way in which a period of time is specified
         */

        /**
         * Way in which a period of time is specified
         */
        export namespace ComponentPeriodKind {
            export const $gtype: GObject.GType<ComponentPeriodKind>;
        }

        enum ComponentPeriodKind {
            /**
             * Date and time
             */
            DATETIME,
            /**
             * Duration
             */
            DURATION,
        }
        /**
         * The kind of range
         */

        /**
         * The kind of range
         */
        export namespace ComponentRangeKind {
            export const $gtype: GObject.GType<ComponentRangeKind>;
        }

        enum ComponentRangeKind {
            /**
             * Single
             */
            SINGLE,
            /**
             * This and prior
             */
            THISPRIOR,
            /**
             * This and future
             */
            THISFUTURE,
        }
        /**
         * Time transparency
         */

        /**
         * Time transparency
         */
        export namespace ComponentTransparency {
            export const $gtype: GObject.GType<ComponentTransparency>;
        }

        enum ComponentTransparency {
            /**
             * None
             */
            NONE,
            /**
             * Transparent
             */
            TRANSPARENT,
            /**
             * Opaque
             */
            OPAQUE,
            /**
             * Unknown
             */
            UNKNOWN,
        }
        /**
         * Types of calendar components to be stored by a ECalComponent, as per RFC 2445.
         * We don't put the alarm component type here since we store alarms as separate
         * structures inside the other "real" components.
         */

        /**
         * Types of calendar components to be stored by a ECalComponent, as per RFC 2445.
         * We don't put the alarm component type here since we store alarms as separate
         * structures inside the other "real" components.
         */
        export namespace ComponentVType {
            export const $gtype: GObject.GType<ComponentVType>;
        }

        enum ComponentVType {
            /**
             * Unknown or unsupported component type
             */
            NO_TYPE,
            /**
             * vEvent type
             */
            EVENT,
            /**
             * vTodo type
             */
            TODO,
            /**
             * vJournal type
             */
            JOURNAL,
            /**
             * vFreeBusy type
             */
            FREEBUSY,
            /**
             * vTimezone type
             */
            TIMEZONE,
        }
        /**
         * Declares interval units.
         */

        /**
         * Declares interval units.
         */
        export namespace IntervalUnits {
            export const $gtype: GObject.GType<IntervalUnits>;
        }

        enum IntervalUnits {
            /**
             * No unit is set
             */
            NONE,
            /**
             * interval is in minutes
             */
            MINUTES,
            /**
             * interval is in hours
             */
            HOURS,
            /**
             * interval is in days
             */
            DAYS,
        }
        /**
         * An email address preferred for e-mail reminders by the calendar.
         */
        const BACKEND_PROPERTY_ALARM_EMAIL_ADDRESS: string;
        /**
         * An email address associated with the calendar.
         */
        const BACKEND_PROPERTY_CAL_EMAIL_ADDRESS: string;
        /**
         * A default object for the calendar. Calendars use VEVENT, memo lists VJOURNAL
         * and task lists VTODO, which can have prefilled values by the backend.
         */
        const BACKEND_PROPERTY_DEFAULT_OBJECT: string;
        /**
         * The current overall revision string, this can be used as
         * a quick check to see if data has changed at all since the
         * last time the calendar revision was observed.
         */
        const BACKEND_PROPERTY_REVISION: string;
        /**
         * Extension property for alarm components so that we can reference them by UID.
         */
        const EVOLUTION_ALARM_UID_PROPERTY: string;
        /**
         * The X parameter name being used to store the enddate in RRULE and EXRULE properties.
         */
        const EVOLUTION_ENDDATE_PARAMETER: string;
        const LIBICAL_GLIB_UNSTABLE_API: number;
        /**
         * Flag indicating that the backend supports alarm description
         */
        const STATIC_CAPABILITY_ALARM_DESCRIPTION: string;
        /**
         * Let the client know that it should store All Day event times as time
         * with a time zone, rather than as a date.
         */
        const STATIC_CAPABILITY_ALL_DAY_EVENT_AS_TIME: string;
        /**
         * Flag indicating that the backend supports bulk additions.
         */
        const STATIC_CAPABILITY_BULK_ADDS: string;
        /**
         * Flag indicating that the backend supports bulk modifications.
         */
        const STATIC_CAPABILITY_BULK_MODIFIES: string;
        /**
         * Flag indicating that the backend supports bulk removals.
         */
        const STATIC_CAPABILITY_BULK_REMOVES: string;
        /**
         * When the capability is set, the client supports storing color
         * for individual components.
         */
        const STATIC_CAPABILITY_COMPONENT_COLOR: string;
        const STATIC_CAPABILITY_CREATE_MESSAGES: string;
        const STATIC_CAPABILITY_DELEGATE_SUPPORTED: string;
        const STATIC_CAPABILITY_DELEGATE_TO_MANY: string;
        const STATIC_CAPABILITY_HAS_UNACCEPTED_MEETING: string;
        /**
         * Set, when the backend supports %E_CAL_STATIC_CAPABILITY_SAVE_SCHEDULES and
         * it can suppress iTip message on component removal. The capability should
         * be ignored when the %E_CAL_STATIC_CAPABILITY_SAVE_SCHEDULES is not present.
         *
         * The backend checks %E_CAL_OPERATION_FLAG_DISABLE_ITIP_MESSAGE flag when these
         * capabilities are present and sends or does not send iTip message accordingly.
         */
        const STATIC_CAPABILITY_ITIP_SUPPRESS_ON_REMOVE_SUPPORTED: string;
        /**
         * Flag indicating that the backend does not support alarm after start the event
         */
        const STATIC_CAPABILITY_NO_ALARM_AFTER_START: string;
        const STATIC_CAPABILITY_NO_ALARM_REPEAT: string;
        const STATIC_CAPABILITY_NO_AUDIO_ALARMS: string;
        const STATIC_CAPABILITY_NO_CONV_TO_ASSIGN_TASK: string;
        const STATIC_CAPABILITY_NO_CONV_TO_RECUR: string;
        const STATIC_CAPABILITY_NO_DISPLAY_ALARMS: string;
        const STATIC_CAPABILITY_NO_EMAIL_ALARMS: string;
        const STATIC_CAPABILITY_NO_GEN_OPTIONS: string;
        const STATIC_CAPABILITY_NO_MEMO_START_DATE: string;
        const STATIC_CAPABILITY_NO_ORGANIZER: string;
        const STATIC_CAPABILITY_NO_PROCEDURE_ALARMS: string;
        const STATIC_CAPABILITY_NO_TASK_ASSIGNMENT: string;
        const STATIC_CAPABILITY_NO_THISANDFUTURE: string;
        const STATIC_CAPABILITY_NO_THISANDPRIOR: string;
        const STATIC_CAPABILITY_NO_TRANSPARENCY: string;
        const STATIC_CAPABILITY_ONE_ALARM_ONLY: string;
        const STATIC_CAPABILITY_ORGANIZER_MUST_ACCEPT: string;
        const STATIC_CAPABILITY_ORGANIZER_MUST_ATTEND: string;
        const STATIC_CAPABILITY_ORGANIZER_NOT_EMAIL_ADDRESS: string;
        const STATIC_CAPABILITY_RECURRENCES_NO_MASTER: string;
        const STATIC_CAPABILITY_REFRESH_SUPPORTED: string;
        const STATIC_CAPABILITY_REMOVE_ALARMS: string;
        /**
         * FIXME: Document me.
         */
        const STATIC_CAPABILITY_REMOVE_ONLY_THIS: string;
        const STATIC_CAPABILITY_REQ_SEND_OPTIONS: string;
        /**
         * Set, when the backend supports retract. That's a way to ask for a meeting
         * deletion with a comment, which is stored in a component as the COMMENT property.
         */
        const STATIC_CAPABILITY_RETRACT_SUPPORTED: string;
        const STATIC_CAPABILITY_SAVE_SCHEDULES: string;
        /**
         * When the capability is set, the backend handles only simple memos,
         * which means it stores only memo description. The summary can be changed
         * by the backend, if needed.
         */
        const STATIC_CAPABILITY_SIMPLE_MEMO: string;
        /**
         * Similar to the %E_CAL_STATIC_CAPABILITY_SIMPLE_MEMO, except the backend stores
         * the description and the summary separately.
         */
        const STATIC_CAPABILITY_SIMPLE_MEMO_WITH_SUMMARY: string;
        /**
         * When the capability is set, the client can store and provide recurring
         * tasks, otherwise it cannot.
         */
        const STATIC_CAPABILITY_TASK_CAN_RECUR: string;
        /**
         * Let the client know that the Task Start date, Due date and Completed date
         * can be entered only as dates. When the capability is not set, then these
         * can be date and time.
         */
        const STATIC_CAPABILITY_TASK_DATE_ONLY: string;
        /**
         * Set, when the backend supports ESTIMATED-DURATION property for tasks.
         */
        const STATIC_CAPABILITY_TASK_ESTIMATED_DURATION: string;
        /**
         * When the capability is set, the backend handles task recurrence
         * completion on its own. This does not imply E_CAL_STATIC_CAPABILITY_TASK_CAN_RECUR.
         */
        const STATIC_CAPABILITY_TASK_HANDLE_RECUR: string;
        /**
         * When the capability is set, the client cannot store reminders
         * on tasks, otherwise it can.
         */
        const STATIC_CAPABILITY_TASK_NO_ALARM: string;
        /**
         * Creates an ISO 8601 UTC representation from a time value.
         * @param t A time value.
         * @returns String with the ISO 8601 representation of the UTC time.
         */
        function isodate_from_time_t(t: never): string;
        /**
         * Matches `tzid` against the system timezone definitions
         * and returns the matching TZID, or %NULL if none found
         * @param tzid a timezone ID
         * @returns The matching TZID, or %NULL if none found or for UTC
         */
        function match_tzid(tzid: string): string | null;
        /**
         * Describes some simple types of recurrences in a human-readable and localized way.
         * The `flags` influence the output format and what to do when the `icalcomp`
         * contains more complicated recurrence, some which the function cannot describe.
         *
         * The `week_start_day` is used for weekly recurrences, to start the list of selected
         * days at that day.
         *
         * Uses e_time_format_date_and_time() to format the date/time value in the string.
         * Call e_cal_recur_describe_recurrence_ex() with a custom formatting function.
         *
         * Free the returned string with g_free(), when no longer needed.
         * @param icalcomp an #ICalComponent
         * @param week_start_day a day when the week starts
         * @param flags bit-or of #ECalRecurDescribeRecurrenceFlags
         * @returns a newly allocated string, which    describes the recurrence of the @icalcomp, or #NULL, when the @icalcomp    doesn't recur or the recurrence is too complicated to describe, also    according to given @flags.
         */
        function recur_describe_recurrence(
            icalcomp: ICalGLib.Component,
            week_start_day: GLib.DateWeekday | null,
            flags: number,
        ): string | null;
        /**
         * Describes some simple types of recurrences in a human-readable and localized way.
         * The `flags` influence the output format and what to do when the `icalcomp`
         * contains more complicated recurrence, some which the function cannot describe.
         *
         * The `week_start_day` is used for weekly recurrences, to start the list of selected
         * days at that day.
         *
         * If `datetime_fmt_func` is %NULL, the e_time_format_date_and_time() is used
         * to format data/time value.
         *
         * Free the returned string with g_free(), when no longer needed.
         * @param icalcomp an #ICalComponent
         * @param week_start_day a day when the week starts
         * @param flags bit-or of #ECalRecurDescribeRecurrenceFlags
         * @param datetime_fmt_func formatting function for date/time value
         * @returns a newly allocated string, which    describes the recurrence of the @icalcomp, or #NULL, when the @icalcomp    doesn't recur or the recurrence is too complicated to describe, also    according to given @flags.
         */
        function recur_describe_recurrence_ex(
            icalcomp: ICalGLib.Component,
            week_start_day: GLib.DateWeekday | null,
            flags: number,
            datetime_fmt_func?: RecurFormatDateTimeFunc | null,
        ): string | null;
        /**
         * This recalculates the end dates for recurrence & exception rules which use
         * the COUNT property. If `refresh` is %TRUE it will recalculate all enddates
         * for rules which use COUNT. If `refresh` is %FALSE, it will only calculate
         * the enddate if it hasn't already been set. It returns %TRUE if the component
         * was changed, i.e. if the component should be saved at some point.
         * We store the enddate in the %E_CAL_EVOLUTION_ENDDATE_PARAMETER parameter of the RRULE
         * or EXRULE.
         * @param comp an #ECalComponent
         * @param refresh %TRUE to recalculate all end dates
         * @param tz_cb function to call to resolve timezones
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE if the component was changed, %FALSE otherwise
         */
        function recur_ensure_end_dates(
            comp: Component,
            refresh: boolean,
            tz_cb: RecurResolveTimezoneCb,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Calls the given callback function for each occurrence of the event that
         * intersects the range between the given `start` and `end` times (the end time is
         * not included). Note that the occurrences may start before the given start
         * time.
         *
         * If the callback routine returns FALSE the occurrence generation stops.
         *
         * The start and end times are required valid times, start before end time.
         *
         * The `get_tz_callback` is used to resolve references to timezones. It is passed
         * a TZID and should return the ICalTimezone * corresponding to that TZID. We need to
         * do this as we access timezones in different ways on the client & server.
         *
         * The default_timezone argument is used for DTSTART or DTEND properties that
         * are DATE values or do not have a TZID (i.e. floating times).
         * @param icalcomp an #ICalComponent
         * @param interval_start an interval start, for which generate instances
         * @param interval_end an interval end, for which generate instances
         * @param callback a callback to be called for each instance
         * @param get_tz_callback a callback to call when resolving timezone
         * @param default_timezone a default #ICalTimezone
         * @param cancellable a #GCancellable; can be %NULL
         * @returns %TRUE if successful (when all instances had been returned), %FALSE otherwise.
         */
        function recur_generate_instances_sync(
            icalcomp: ICalGLib.Component,
            interval_start: ICalGLib.Time,
            interval_end: ICalGLib.Time,
            callback: RecurInstanceCb,
            get_tz_callback: RecurResolveTimezoneCb,
            default_timezone: ICalGLib.Timezone,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        function recur_get_localized_nth(nth: number): string;
        function recur_obtain_enddate(
            ir: ICalGLib.Recurrence,
            prop: ICalGLib.Property,
            zone: ICalGLib.Timezone,
            convert_end_date: boolean,
        ): never;
        /**
         * Fetches the system timezone location string.
         *
         * Note: Since 3.4 the returned timezone location is either NULL or
         * an equivalent within known libical timezones.
         *
         * The returned string should be freed with g_free().
         * @returns system timezone location string, or %NULL on an error.
         */
        function system_timezone_get_location(): string | null;
        /**
         * Adds a day onto the time, using local time.
         * Note that if clocks go forward due to daylight savings time, there are
         * some non-existent local times, so the hour may be changed to make it a
         * valid time. This also means that it may not be wise to keep calling
         * time_add_day() to step through a certain period - if the hour gets changed
         * to make it valid time, any further calls to time_add_day() will also return
         * this hour, which may not be what you want.
         * @param time A time_t value.
         * @param days Number of days to add.
         * @returns a time_t value containing @time plus the days added.
         */
        function time_add_day(time: never, days: number): never;
        /**
         * Adds or subtracts a number of days to/from the given time_t value, using
         * the given timezone.
         * NOTE: this function is only here to make the transition to the timezone
         * functions easier. New code should use ICalTime values and
         * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
         * @param time A time_t value.
         * @param days Number of days to add.
         * @param zone Timezone to use.
         * @returns a time_t value containing @time plus the days added.
         */
        function time_add_day_with_zone(time: never, days: number, zone: ICalGLib.Timezone): never;
        /**
         * Adds or subtracts a number of months to/from the given time_t value, using
         * the given timezone.
         *
         * If the day would be off the end of the month (e.g. adding 1 month to
         * 30th January, would lead to an invalid day, 30th February), it moves it
         * down to the last day in the month, e.g. 28th Feb (or 29th in a leap year.)
         *
         * NOTE: this function is only here to make the transition to the timezone
         * functions easier. New code should use ICalTime values and
         * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
         * @param time A time_t value.
         * @param months Number of months to add.
         * @param zone Timezone to use.
         * @returns a time_t value containing @time plus the months added.
         */
        function time_add_month_with_zone(time: never, months: number, zone: ICalGLib.Timezone): never;
        /**
         * Adds the given number of weeks to a time value.
         * @param time A time_t value.
         * @param weeks Number of weeks to add.
         * @returns a time_t value containing @time plus the weeks added.
         */
        function time_add_week(time: never, weeks: number): never;
        /**
         * Adds or subtracts a number of weeks to/from the given time_t value, using
         * the given timezone.
         * NOTE: this function is only here to make the transition to the timezone
         * functions easier. New code should use ICalTime values and
         * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
         * @param time A time_t value.
         * @param weeks Number of weeks to add.
         * @param zone Timezone to use.
         * @returns a time_t value containing @time plus the weeks added.
         */
        function time_add_week_with_zone(time: never, weeks: number, zone: ICalGLib.Timezone): never;
        /**
         * Returns the start of the day, according to the local time.
         * @param t A time_t value.
         * @returns the time corresponding to the beginning of the day.
         */
        function time_day_begin(t: never): never;
        /**
         * Returns the start of the day containing the given time_t, using the given
         * timezone.
         * NOTE: this function is only here to make the transition to the timezone
         * functions easier. New code should use ICalTime values and
         * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
         * @param time A time_t value.
         * @param zone Timezone to use.
         * @returns the beginning of the day.
         */
        function time_day_begin_with_zone(time: never, zone: ICalGLib.Timezone): never;
        /**
         * Returns the end of the day, according to the local time.
         * @param t A time_t value.
         * @returns the time corresponding to the end of the day.
         */
        function time_day_end(t: never): never;
        /**
         * Returns the end of the day containing the given time_t, using the given
         * timezone. (The end of the day is the start of the next day.)
         * NOTE: this function is only here to make the transition to the timezone
         * functions easier. New code should use ICalTime values and
         * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
         * @param time A time_t value.
         * @param zone Timezone to use.
         * @returns the end of the day.
         */
        function time_day_end_with_zone(time: never, zone: ICalGLib.Timezone): never;
        /**
         * Returns the day of the week for the specified date, 0 (Sun) to 6 (Sat).
         * For the days that were removed on the Gregorian reformation, it returns
         * Thursday. Year is the normal year, e.g. 2001. Month is 0 to 11.
         * @param day The day.
         * @param month The month.
         * @param year The year.
         * @returns the day of the week for the given date.
         */
        function time_day_of_week(day: number, month: number, year: number): number;
        /**
         * Returns the 1-based day number within the year of the specified date.
         * Year is the normal year, e.g. 2001. Month is 0 to 11.
         * @param day The day.
         * @param month The month.
         * @param year The year.
         * @returns the day of the year.
         */
        function time_day_of_year(day: number, month: number, year: number): number;
        /**
         * Returns the number of days in the month. Year is the normal year, e.g. 2001.
         * Month is 0 (Jan) to 11 (Dec).
         * @param year The year.
         * @param month The month.
         * @returns number of days in the given month/year.
         */
        function time_days_in_month(year: number, month: number): number;
        /**
         * Converts an ISO 8601 UTC time string into a time_t value.
         * @param str Date/time value in ISO 8601 format.
         * @returns Time_t corresponding to the specified ISO string. Note that we only allow UTC times at present.
         */
        function time_from_isodate(str: string): never;
        /**
         * Returns whether the specified year is a leap year. Year is the normal year,
         * e.g. 2001.
         * @param year The year.
         * @returns TRUE if the year is leap, FALSE if not.
         */
        function time_is_leap_year(year: number): boolean;
        /**
         * Returns the number of leap years since year 1 up to (but not including) the
         * specified year. Year is the normal year, e.g. 2001.
         * @param year The year.
         * @returns number of leap years.
         */
        function time_leap_years_up_to(year: number): number;
        /**
         * Returns the start of the month containing the given time_t, using the given
         * timezone.
         * NOTE: this function is only here to make the transition to the timezone
         * functions easier. New code should use ICalTime values and
         * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
         * @param time A time_t value.
         * @param zone Timezone to use.
         * @returns the beginning of the month.
         */
        function time_month_begin_with_zone(time: never, zone: ICalGLib.Timezone): never;
        /**
         * Converts a time_t value to a #GDate structure using the specified timezone.
         * This is analogous to g_date_set_time() but takes the timezone into account.
         * @param date Destination #GDate value.
         * @param time A time value.
         * @param zone Desired timezone for destination @date, or %NULL if    the UTC timezone is desired.
         */
        function time_to_gdate_with_zone(date: GLib.Date, time: never, zone?: ICalGLib.Timezone | null): void;
        /**
         * Returns the start of the week containing the given time_t, using the given
         * timezone. week_start_day should use the same values as mktime(),
         * i.e. 0 (Sun) to 6 (Sat).
         * NOTE: this function is only here to make the transition to the timezone
         * functions easier. New code should use ICalTime values and
         * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
         * @param time A time_t value.
         * @param week_start_day Day to use as the starting of the week.
         * @param zone Timezone to use.
         * @returns the beginning of the week.
         */
        function time_week_begin_with_zone(time: never, week_start_day: number, zone: ICalGLib.Timezone): never;
        /**
         * Returns the start of the year containing the given time_t, using the given
         * timezone.
         * NOTE: this function is only here to make the transition to the timezone
         * functions easier. New code should use ICalTime values and
         * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
         * @param time A time_t value.
         * @param zone Timezone to use.
         * @returns the beginning of the year.
         */
        function time_year_begin_with_zone(time: never, zone: ICalGLib.Timezone): never;
        /**
         * Adds VTIMEZONE components to a VCALENDAR for all tzid's
         * in the given `icalcomp`.
         * @param vcal_comp A VCALENDAR component.
         * @param icalcomp An iCalendar component, of any type.
         */
        function util_add_timezones_from_component(vcal_comp: ICalGLib.Component, icalcomp: ICalGLib.Component): void;
        /**
         * Modifies the `vtimezone` to include only subcomponents influencing
         * the passed-in time interval between `from` and `to`.
         * @param vtimezone a VTIMEZONE component to modify
         * @param from an #ICalTime for the minimum time
         * @param to until which time to clamp, or %NULL for infinity
         */
        function util_clamp_vtimezone(
            vtimezone: ICalGLib.Component,
            from: ICalGLib.Time,
            to?: ICalGLib.Time | null,
        ): ICalGLib.Component;
        /**
         * Similar to e_cal_util_clamp_vtimezone(), only reads the clamp
         * times from the `component`.
         * @param vtimezone a VTIMEZONE component to modify
         * @param component an #ICalComponent to read the times from
         */
        function util_clamp_vtimezone_by_component(
            vtimezone: ICalGLib.Component,
            component: ICalGLib.Component,
        ): ICalGLib.Component;
        /**
         * Searches for an X property named `x_name` within X properties
         * of `icalcomp` and returns its value as a newly allocated string.
         * Free it with g_free(), when no longer needed.
         * @param icalcomp an #ICalComponent
         * @param x_name name of the X property
         * @returns Newly allocated value of the first @x_name    X property in @icalcomp, or %NULL, if not found.
         */
        function util_component_dup_x_property(icalcomp: ICalGLib.Component, x_name: string): string | null;
        /**
         * Searches properties of kind `prop_kind` in the `icalcomp` and returns
         * one, which is usable for the `locale`. When `locale` is %NULL,
         * the current locale is assumed. If no such property for the locale
         * exists either the one with no language parameter or the first
         * found is returned.
         *
         * Free the returned non-NULL #ICalProperty with g_object_unref(),
         * when no longer needed.
         * @param icalcomp an #ICalComponent
         * @param prop_kind an #ICalPropertyKind to traverse
         * @param locale a locale identifier, or %NULL
         * @returns a property of kind @prop_kind for the @locale,    %NULL if no such property is set on the @comp.
         */
        function util_component_find_property_for_locale(
            icalcomp: ICalGLib.Component,
            prop_kind: ICalGLib.PropertyKind | null,
            locale?: string | null,
        ): ICalGLib.Property | null;
        /**
         * Searches properties of kind `prop_kind` in the `icalcomp,` which can
         * be filtered by the `func,` and returns one, which is usable for the `locale`.
         * When `locale` is %NULL, the current locale is assumed. If no such property
         * for the locale exists either the one with no language parameter or the first
         * found is returned.
         *
         * The `func` is called before checking of the applicability for the `locale`.
         * When the `func` is %NULL, all the properties of the `prop_kind` are considered.
         *
         * Free the returned non-NULL #ICalProperty with g_object_unref(),
         * when no longer needed.
         * @param icalcomp an #ICalComponent
         * @param prop_kind an #ICalPropertyKind to traverse
         * @param locale a locale identifier, or %NULL
         * @param func an #ECalUtilFilterPropertyFunc, to determine whether a property can be considered
         * @returns a property of kind @prop_kind for the @locale,    %NULL if no such property is set on the @comp.
         */
        function util_component_find_property_for_locale_filtered(
            icalcomp: ICalGLib.Component,
            prop_kind: ICalGLib.PropertyKind | null,
            locale?: string | null,
            func?: UtilFilterPropertyFunc | null,
        ): ICalGLib.Property | null;
        /**
         * Searches for an X property named `x_name` within X properties
         * of `icalcomp` and returns it. Free the non-NULL object
         * with g_object_unref(), when no longer needed.
         * @param icalcomp an #ICalComponent
         * @param x_name name of the X property
         * @returns the first X ICalProperty named    @x_name, or %NULL, when none found.
         */
        function util_component_find_x_property(icalcomp: ICalGLib.Component, x_name: string): ICalGLib.Property | null;
        function util_component_get_recurid_as_string(icalcomp: ICalGLib.Component): string | null;
        /**
         * Checks whether an #ICalComponent has any alarm.
         * @param icalcomp An #ICalComponent.
         * @returns TRUE if it has alarms, FALSE otherwise.
         */
        function util_component_has_alarms(icalcomp: ICalGLib.Component): boolean;
        /**
         * Checks if an #ICalComponent has any attendees.
         * @param icalcomp An #ICalComponent.
         * @returns TRUE if there are attendees, FALSE if not.
         */
        function util_component_has_attendee(icalcomp: ICalGLib.Component): boolean;
        /**
         * Checks whether an #ICalComponent has an organizer.
         * @param icalcomp An #ICalComponent.
         * @returns TRUE if there is an organizer, FALSE if not.
         */
        function util_component_has_organizer(icalcomp: ICalGLib.Component): boolean;
        /**
         * Returns, whether the `icalcomp` has a property of `prop_kind`. To check
         * for a specific X property use e_cal_util_component_has_x_property().
         * @param icalcomp an #ICalComponent
         * @param prop_kind a property kind to look for, as an %ICalPropertyKind
         * @returns whether the @icalcomp has a property of @prop_kind
         */
        function util_component_has_property(
            icalcomp: ICalGLib.Component,
            prop_kind: ICalGLib.PropertyKind | null,
        ): boolean;
        /**
         * Checks if an #ICalComponent has recurrence dates.
         * @param icalcomp An #ICalComponent.
         * @returns TRUE if there are recurrence dates, FALSE if not.
         */
        function util_component_has_rdates(icalcomp: ICalGLib.Component): boolean;
        /**
         * Checks if an #ICalComponent has recurrence dates or rules.
         * @param icalcomp An #ICalComponent.
         * @returns TRUE if there are recurrence dates/rules, FALSE if not.
         */
        function util_component_has_recurrences(icalcomp: ICalGLib.Component): boolean;
        /**
         * Checks if an #ICalComponent has recurrence rules.
         * @param icalcomp An #ICalComponent.
         * @returns TRUE if there are recurrence rules, FALSE if not.
         */
        function util_component_has_rrules(icalcomp: ICalGLib.Component): boolean;
        /**
         * Returns, whether the `icalcomp` contains X property named `x_name`. To check
         * for standard property use e_cal_util_component_has_property().
         * @param icalcomp an #ICalComponent
         * @param x_name name of the X property
         * @returns whether the @icalcomp contains X property named @x_name
         */
        function util_component_has_x_property(icalcomp: ICalGLib.Component, x_name: string): boolean;
        /**
         * Checks whether an #ICalComponent is an instance of a recurring appointment.
         * @param icalcomp An #ICalComponent.
         * @returns TRUE if it is an instance, FALSE if not.
         */
        function util_component_is_instance(icalcomp: ICalGLib.Component): boolean;
        /**
         * Removes all or only the first property of kind `kind` in `icalcomp`.
         * @param icalcomp an #ICalComponent
         * @param kind the kind of the property to remove
         * @param all %TRUE to remove all, or %FALSE to remove only the first property of the @kind
         * @returns How many properties had been removed.
         */
        function util_component_remove_property_by_kind(
            icalcomp: ICalGLib.Component,
            kind: ICalGLib.PropertyKind | null,
            all: boolean,
        ): number;
        /**
         * Removes the first X property named `x_name` in `icalcomp`.
         * @param icalcomp an #ICalComponent
         * @param x_name name of the X property
         * @returns %TRUE, when any such had been found and removed, %FALSE otherwise.
         */
        function util_component_remove_x_property(icalcomp: ICalGLib.Component, x_name: string): boolean;
        /**
         * Sets a value of the first X property named `x_name` in `icalcomp,`
         * if any such already exists, or adds a new property with this name
         * and value. As a special case, if `value` is %NULL, then removes
         * the first X property named `x_name` from `icalcomp` instead.
         * @param icalcomp an #ICalComponent
         * @param x_name name of the X property
         * @param value a value to set, or %NULL
         */
        function util_component_set_x_property(
            icalcomp: ICalGLib.Component,
            x_name: string,
            value?: string | null,
        ): void;
        /**
         * Encodes the #EConflictResolution into the bit-or of #ECalOperationFlags.
         * The returned value can be bit-or-ed with other #ECalOperationFlags values.
         * @param conflict_resolution an #EConflictResolution
         * @returns a bit-or of #ECalOperationFlags, corresponding to the @conflict_resolution
         */
        function util_conflict_resolution_to_operation_flags(
            conflict_resolution: EDataServer.ConflictResolution | null,
        ): number;
        /**
         * This checks that `rid` indicates a valid recurrence of `icalcomp,` and
         * if so, generates a copy of `icalcomp` containing a RECURRENCE-ID of `rid`.
         *
         * Free the returned non-NULL component with g_object_unref(), when
         * no longer needed.
         * @param icalcomp A recurring #ICalComponent
         * @param rid The RECURRENCE-ID to construct a component for
         * @returns the instance as a new #ICalComponent, or %NULL.
         */
        function util_construct_instance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time): ICalGLib.Component | null;
        /**
         * Copies the `zone` together with its inner component and
         * returns it as a new #ICalTimezone object. Free it with
         * g_object_unref(), when no longer needed.
         * @param zone an ICalTimezone
         * @returns a copy of the @zone
         */
        function util_copy_timezone(zone: ICalGLib.Timezone): ICalGLib.Timezone;
        /**
         * Compares list of categories on the `old_comp` with the list of categories
         * on the `new_comp` and fills `out_added` categories and `out_removed` categories
         * accordingly, as if the `old_comp` is replaced with the `new_comp`. When either
         * of the components is %NULL, it's considered as having no categories set.
         * Rather than returning empty #GHashTable, the return argument is set to %NULL
         * when there are no added/removed categories.
         *
         * The key of the hash table is the category string, the value is an integer (1).
         * There is used the hash table only for speed.
         *
         * The returned #GHashTable-s should be freed with g_hash_table_unref(),
         * when no longer needed.
         * @param old_comp an old #ICalComponent, or %NULL
         * @param new_comp a new #ICalComponent, or %NULL
         */
        function util_diff_categories(
            old_comp: ICalGLib.Component | null,
            new_comp: ICalGLib.Component | null,
        ): [GLib.HashTable<string, number>, GLib.HashTable<string, number>];
        /**
         * Compares two email addresses and returns whether they are equal.
         * Each address can contain a "mailto:" prefix. The two addresses
         * match only if they are non-NULL and non-empty. The address itself
         * is compared case insensitively.
         * @param email1 the first email
         * @param email2 the second email
         * @returns %TRUE, when the @email1 equals to @email2
         */
        function util_email_addresses_equal(email1?: string | null, email2?: string | null): boolean;
        /**
         * Calls `func` for each category stored in the `comp`.
         * @param comp an #ICalComponent
         * @param func an #ECalUtilForeachCategoryFunc callback to call for each category
         */
        function util_foreach_category(comp: ICalGLib.Component, func: UtilForeachCategoryFunc): void;
        /**
         * Generates alarm instances for a calendar component. Returns the instances
         * structure, or %NULL if no alarm instances occurred in the specified time
         * range. Free the returned structure with e_cal_component_alarms_free(),
         * when no longer needed.
         *
         * See e_cal_util_generate_alarms_for_uid_sync()
         * @param comp The #ECalComponent to generate alarms from
         * @param start Start time
         * @param end End time
         * @param omit Alarm types to omit
         * @param resolve_tzid Callback for resolving timezones
         * @param default_timezone The timezone used to resolve DATE and floating DATE-TIME values.
         * @returns a list of all the alarms found    for the given component in the given time range.
         */
        function util_generate_alarms_for_comp(
            comp: Component,
            start: never,
            end: never,
            omit: ComponentAlarmAction | null,
            resolve_tzid: RecurResolveTimezoneCb,
            default_timezone: ICalGLib.Timezone,
        ): ComponentAlarms | null;
        /**
         * Iterates through all the components in the `comps` list and generates alarm
         * instances for them; putting them in the `comp_alarms` list. Free the `comp_alarms`
         * with g_slist_free_full (comp_alarms, e_cal_component_alarms_free);, when
         * no longer neeed.
         *
         * See e_cal_util_generate_alarms_for_uid_sync()
         * @param comps List of #ECalComponent<!-- -->s
         * @param start Start time
         * @param end End time
         * @param omit Alarm types to omit
         * @param resolve_tzid Callback for resolving timezones
         * @param default_timezone The timezone used to resolve DATE and floating DATE-TIME values.
         * @returns the number of elements it added to the list
         */
        function util_generate_alarms_for_list(
            comps: Component[],
            start: never,
            end: never,
            omit: ComponentAlarmAction | null,
            resolve_tzid: RecurResolveTimezoneCb,
            default_timezone: ICalGLib.Timezone,
        ): [number, ComponentAlarms[]];
        /**
         * Generates alarm instances for a calendar component with UID `uid,`
         * which is stored within the `client`. In contrast to e_cal_util_generate_alarms_for_comp(),
         * this function handles detached instances of recurring events properly.
         *
         * The `def_reminder_before_start_seconds,` if not negative, causes addition of an alarm,
         * which will trigger a "display" alarm these seconds before start of the event.
         *
         * Returns the instances structure, or %NULL if no alarm instances occurred in the specified
         * time range. Free the returned structure with e_cal_component_alarms_free(),
         * when no longer needed.
         * @param client an #ECalClient
         * @param uid a component UID to generate alarms for
         * @param start start time
         * @param end end time
         * @param omit alarm types to omit
         * @param resolve_tzid Callback for resolving timezones
         * @param default_timezone The timezone used to resolve DATE and floating DATE-TIME values
         * @param def_reminder_before_start_seconds add default reminder before start in seconds, when not negative value
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns a list of all the alarms found    for the given component in the given time range.
         */
        function util_generate_alarms_for_uid_sync(
            client: any | null,
            uid: string,
            start: never,
            end: never,
            omit: ComponentAlarmAction | null,
            resolve_tzid: RecurResolveTimezoneCb,
            default_timezone: ICalGLib.Timezone,
            def_reminder_before_start_seconds: number,
            cancellable?: Gio.Cancellable | null,
        ): ComponentAlarms | null;
        /**
         * Returns an attendee email, without the "mailto:" prefix, if
         * the `attendee` has it set. The email can be read from an "EMAIL"
         * parameter, if present.
         * @param attendee an ECalComponentAttendee
         * @returns email of the @attendee, or %NULL
         */
        function util_get_attendee_email(attendee?: ComponentAttendee | null): string | null;
        /**
         * Find out when the component starts and stops, being careful about
         * recurrences.
         * @param comp an #ECalComponent
         * @param tz_cb The #ECalRecurResolveTimezoneCb to call
         * @param default_timezone The default timezone
         * @param kind the type of component, indicated with an #ICalComponentKind
         */
        function util_get_component_occur_times(
            comp: Component,
            tz_cb: RecurResolveTimezoneCb,
            default_timezone: ICalGLib.Timezone,
            kind: ICalGLib.ComponentKind | null,
        ): [never, never];
        /**
         * Returns the real name and email address of the default mail identity,
         * if available.  If no default mail identity is available, `out_name` and
         * `out_address` are set to %NULL and the function returns %FALSE.
         * @param registry an #ESourceRegistry
         * @returns %TRUE if @out_name and/or @out_address were set
         */
        function util_get_default_name_and_address(registry: EDataServer.SourceRegistry): [boolean, string, string];
        /**
         * Returns an organizer email, without the "mailto:" prefix, if
         * the `organizer` has it set. The email can be read from an "EMAIL"
         * parameter, if present.
         * @param organizer an #ECalComponentOrganizer
         * @returns email of the @organizer, or %NULL
         */
        function util_get_organizer_email(organizer?: ComponentOrganizer | null): string | null;
        /**
         * Returns an `prop` email, without the "mailto:" prefix, if
         * the `prop` has it set. The email can be read from an "EMAIL"
         * parameter, if present. Otherwise the `prop` can be only of
         * type %I_CAL_ORGANIZER_PROPERTY or %I_CAL_ATTENDEE_PROPERTY.
         *
         * See also: e_cal_util_get_organizer_email(), e_cal_util_get_attendee_email()
         * @param prop an #ICalProperty
         * @returns email of the @prop, or %NULL
         */
        function util_get_property_email(prop: ICalGLib.Property): string | null;
        /**
         * Fetches system timezone ICalTimezone object.
         *
         * The returned pointer is part of the built-in timezones and should not be freed.
         * @returns The ICalTimezone object of the system timezone, or %NULL on an error.
         */
        function util_get_system_timezone(): ICalGLib.Timezone | null;
        /**
         * Fetches system timezone localtion string.
         * @returns system timezone location string, %NULL on an error.
         */
        function util_get_system_timezone_location(): string | null;
        /**
         * Checks whether the `comp` has any alarms in the given time interval.
         * @param comp an #ECalComponent to check alarms for
         * @param start start time
         * @param end end time
         * @param omit alarm types to omit
         * @param resolve_tzid Callback for resolving timezones
         * @param default_timezone The timezone used to resolve DATE and floating DATE-TIME values.
         * @returns %TRUE, when the #comp has any alarms in the given time interval
         */
        function util_has_alarms_in_range(
            comp: Component,
            start: never,
            end: never,
            omit: ComponentAlarmAction | null,
            resolve_tzid: RecurResolveTimezoneCb,
            default_timezone: ICalGLib.Timezone,
        ): boolean;
        /**
         * Converts an #ICalTime into a GLibc's struct tm.
         * @param itt An #ICalTime
         * @returns The converted time as a struct tm. All fields will be    set properly except for tm.tm_yday.
         */
        function util_icaltime_to_tm(itt: ICalGLib.Time): any | null;
        /**
         * Converts a time value from one timezone to another, and returns a struct tm
         * representation of the time.
         * @param itt A time value.
         * @param from_zone Source timezone.
         * @param to_zone Destination timezone.
         * @returns The converted time as a struct tm. All fields will be    set properly except for tm.tm_yday.
         */
        function util_icaltime_to_tm_with_zone(
            itt: ICalGLib.Time,
            from_zone: ICalGLib.Timezone,
            to_zone: ICalGLib.Timezone,
        ): any | null;
        /**
         * Initializes properties of a recurring `vtodo,` like normalizing
         * the Due date and eventually the Start date. The function does
         * nothing when the `vtodo` is not recurring.
         *
         * The function doesn't change LAST-MODIFIED neither the SEQUENCE
         * property, it's up to the caller to do it.
         *
         * Note the `cal_client,` `cancellable` and `error` is used only
         * for timezone resolution. The function doesn't store the `vtodo`
         * to the `cal_client,` it only updates the `vtodo` component.
         * @param vtodo a VTODO component
         * @param cal_client an #ECalClient to which the @vtodo belongs
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        function util_init_recur_task_sync(
            vtodo: ICalGLib.Component,
            cal_client: Client,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Changes all URL attachments which point to a local file in `component`
         * to inline attachments, aka adds the file content into the `component`.
         * It also populates FILENAME parameter on the attachment.
         * @param component an #ICalComponent to work with
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        function util_inline_local_attachments_sync(
            component: ICalGLib.Component,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Returns whether the given `rid` is the first instance of
         * the recurrence defined in the `comp`.
         * @param comp an #ECalComponent instance
         * @param rid a recurrence ID
         * @param tz_cb The #ECalRecurResolveTimezoneCb to call
         * @returns Whether the @rid identifies the first instance of @comp.
         */
        function util_is_first_instance(comp: Component, rid: ICalGLib.Time, tz_cb: RecurResolveTimezoneCb): boolean;
        /**
         * Marks the `vtodo` as complete with eventual update of other
         * properties. This is useful also for recurring tasks, for which
         * it moves the `vtodo` into the next occurrence according to
         * the recurrence rule.
         *
         * When the `vtodo` is marked as completed, then the existing COMPLETED
         * date-time is preserved if exists, otherwise it's set either to `completed_time,`
         * or to the current time, when the `completed_time` is (time_t) -1.
         *
         * The function doesn't change LAST-MODIFIED neither the SEQUENCE
         * property, it's up to the caller to do it.
         *
         * Note the `cal_client,` `cancellable` and `error` is used only
         * for timezone resolution. The function doesn't store the `vtodo`
         * to the `cal_client,` it only updates the `vtodo` component.
         * @param vtodo a VTODO component
         * @param completed_time completed time to set, or (time_t) -1 to use current time
         * @param cal_client an #ECalClient to which the @vtodo belongs
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        function util_mark_task_complete_sync(
            vtodo: ICalGLib.Component,
            completed_time: never,
            cal_client: Client,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Creates a new #ICalComponent of the specified kind. Free it
         * with g_object_unref(), when no longer needed.
         * @param kind Kind of the component to create, as #ICalComponentKind.
         * @returns the newly created component.
         */
        function util_new_component(kind: ICalGLib.ComponentKind | null): ICalGLib.Component;
        /**
         * Creates a new VCALENDAR component. Free it with g_object_unref(),
         * when no longer needed.
         * @returns the newly created top level component.
         */
        function util_new_top_level(): ICalGLib.Component;
        /**
         * Makes sure the `ttuntil` value matches the value type with
         * the DTSTART value, as required by RFC 5545 section 3.3.10.
         * Uses `tz_cb` with `tz_cb_data` to resolve time zones when needed.
         * @param icalcomp An #ICalComponent
         * @param ttuntil An UNTIL value to validate
         * @param tz_cb The #ECalRecurResolveTimezoneCb to call
         */
        function util_normalize_rrule_until_value(
            icalcomp: ICalGLib.Component,
            ttuntil: ICalGLib.Time,
            tz_cb: RecurResolveTimezoneCb,
        ): void;
        /**
         * Decodes the #EConflictResolution from the bit-or of #ECalOperationFlags.
         * @param flags bit-or of #ECalOperationFlags
         * @returns an #EConflictResolution as stored in the @flags
         */
        function util_operation_flags_to_conflict_resolution(flags: number): EDataServer.ConflictResolution;
        /**
         * Parses the given file, and, if it contains a valid iCalendar object,
         * parse it and return a new #ICalComponent.
         *
         * Free the returned non-NULL component with g_object_unref(), when no longer needed.
         * @param filename Name of the file to be parsed.
         * @returns a newly created #ICalComponent, or %NULL,    if the file doesn't contain a valid iCalendar object.
         */
        function util_parse_ics_file(filename: string): ICalGLib.Component | null;
        /**
         * Parses an iCalendar string and returns a new #ICalComponent representing
         * that string. Note that this function deals with multiple VCALENDAR's in the
         * string, something that Mozilla used to do and which libical does not
         * support.
         *
         * Free the returned non-NULL component with g_object_unref(), when no longer needed.
         * @param string iCalendar string to be parsed.
         * @returns a newly created #ICalComponent, or %NULL,    if the string isn't a valid iCalendar string.
         */
        function util_parse_ics_string(string: string): ICalGLib.Component | null;
        /**
         * Converts a translated priority string to an iCalendar priority value.
         * @param string A string representing the PRIORITY value.
         * @returns the priority (0-9) or -1 if the priority string is not valid.
         */
        function util_priority_from_string(string: string): number;
        /**
         * Converts an iCalendar PRIORITY value to a translated string. Any unknown
         * priority value (i.e. not 0-9) will be returned as "" (undefined).
         * @param priority Priority value.
         * @returns a string representing the PRIORITY value. This value is a constant, so it should never be freed.
         */
        function util_priority_to_string(priority: number): string;
        /**
         * Returns, whether the `prop` has a parameter of `param_kind`.
         * @param prop an #ICalProperty
         * @param param_kind a parameter kind to look for, as an %ICalParameterKind
         * @returns whether the @prop has a parameter of @prop_kind
         */
        function util_property_has_parameter(
            prop: ICalGLib.Property,
            param_kind: ICalGLib.ParameterKind | null,
        ): boolean;
        /**
         * Removes one or more instances from `icalcomp` according to `rid` and `mod`.
         * @param icalcomp A (recurring) #ICalComponent
         * @param rid The base RECURRENCE-ID to remove
         * @param mod How to interpret @rid
         */
        function util_remove_instances(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType | null): void;
        /**
         * Removes one or more instances from `icalcomp` according to `rid` and `mod`.
         * Uses `tz_cb` with `tz_cb_data` to resolve time zones when needed.
         * @param icalcomp A (recurring) #ICalComponent
         * @param rid The base RECURRENCE-ID to remove
         * @param mod How to interpret @rid
         * @param tz_cb The #ECalRecurResolveTimezoneCb to call
         */
        function util_remove_instances_ex(
            icalcomp: ICalGLib.Component,
            rid: ICalGLib.Time,
            mod: ObjModType | null,
            tz_cb: RecurResolveTimezoneCb,
        ): void;
        /**
         * Converts time, in seconds, into a string representation readable by humans
         * and localized into the current locale. This can be used to convert event
         * duration to string or similar use cases.
         *
         * Free the returned string with g_free(), when no longer needed.
         * @param seconds actual time, in seconds
         * @returns a newly allocated string with localized description    of the given time in seconds.
         */
        function util_seconds_to_string(seconds: number): string;
        /**
         * Sets the ACKNOWLEDGED property on the `component'`s alarm with UID `auid`
         * to the time `when` (in UTC), or to the current time, when the `when` is 0.
         * @param component an #ECalComponent
         * @param auid an alarm UID to modify
         * @param when a time, in UTC, when to set the acknowledged property, or 0 for the current time
         * @returns Whether succeeded.
         */
        function util_set_alarm_acknowledged(component: Component, auid: string, when: number): boolean;
        /**
         * Splits a recurring `icalcomp` into two at time `rid`. The returned #ICalComponent
         * is modified `icalcomp` which contains recurrences beginning at `rid,` inclusive.
         * The instance identified by `rid` should exist. The `master_dtstart` can be
         * a null time, then it is read from the `icalcomp`.
         *
         * Use e_cal_util_remove_instances_ex() with E_CAL_OBJ_MOD_THIS_AND_FUTURE mode
         * on the `icalcomp` to remove the overlapping interval from it, if needed.
         *
         * Free the returned non-NULL component with g_object_unref(), when
         * done with it.
         * @param icalcomp A (recurring) #ICalComponent
         * @param rid The base RECURRENCE-ID to remove
         * @param master_dtstart The DTSTART of the master object
         * @returns the split @icalcomp, or %NULL.
         */
        function util_split_at_instance(
            icalcomp: ICalGLib.Component,
            rid: ICalGLib.Time,
            master_dtstart?: ICalGLib.Time | null,
        ): ICalGLib.Component | null;
        /**
         * Splits a recurring `icalcomp` into two at time `rid`. The returned #ICalComponent
         * is modified `icalcomp` which contains recurrences beginning at `rid,` inclusive.
         * The instance identified by `rid` should exist. The `master_dtstart` can be
         * a null time, then it is read from the `icalcomp`.
         *
         * Uses `tz_cb` with `tz_cb_data` to resolve time zones when needed.
         *
         * Use e_cal_util_remove_instances_ex() with E_CAL_OBJ_MOD_THIS_AND_FUTURE mode
         * on the `icalcomp` to remove the overlapping interval from it, if needed.
         *
         * Free the returned non-NULL component with g_object_unref(), when
         * done with it.
         * @param icalcomp A (recurring) #ICalComponent
         * @param rid The base RECURRENCE-ID to remove
         * @param master_dtstart The DTSTART of the master object
         * @param tz_cb The #ECalRecurResolveTimezoneCb to call
         * @returns the split @icalcomp, or %NULL.
         */
        function util_split_at_instance_ex(
            icalcomp: ICalGLib.Component,
            rid: ICalGLib.Time,
            master_dtstart: ICalGLib.Time | null,
            tz_cb: RecurResolveTimezoneCb,
        ): ICalGLib.Component | null;
        /**
         * Strips "mailto:" prefix from the `address,` if present. The returned
         * pointer is either the `address` or a shifted position within the `address`.
         * @param address an address with or without "mailto:" prefix
         * @returns the @address without the "mailto:" prefix
         */
        function util_strip_mailto(address?: string | null): string;
        /**
         * Converts a struct tm into an #ICalTime. Free the returned object
         * with g_object_unref(), when no longer needed.
         * @param tm A struct tm.
         * @param is_date Whether the given time is a date only or not.
         * @returns The converted time as an #ICalTime.
         */
        function util_tm_to_icaltime(tm: any | null, is_date: boolean): ICalGLib.Time;
        interface ComponentParameterBagFilterFunc {
            (parameter: ICalGLib.Parameter): boolean;
        }
        interface ComponentPropertyBagFilterFunc {
            (property: ICalGLib.Property): boolean;
        }
        interface RecurFormatDateTimeFunc {
            (itt: ICalGLib.Time, buffer: string, buffer_size: number): void;
        }
        interface RecurInstanceCb {
            (
                icomp: ICalGLib.Component,
                instance_start: ICalGLib.Time,
                instance_end: ICalGLib.Time,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
        }
        interface RecurResolveTimezoneCb {
            (tzid: string, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null;
        }
        interface UtilFilterPropertyFunc {
            (prop: ICalGLib.Property): boolean;
        }
        interface UtilForeachCategoryFunc {
            (comp: ICalGLib.Component, inout_category: string): boolean;
        }
        /**
         * Flags that control the behaviour of an #ECalClientView.
         */

        /**
         * Flags that control the behaviour of an #ECalClientView.
         */
        export namespace ClientViewFlags {
            export const $gtype: GObject.GType<ClientViewFlags>;
        }

        enum ClientViewFlags {
            /**
             * Symbolic value for no flags
             */
            NONE,
            /**
             * If this flag is set then all objects matching the view's query will
             *   be sent as notifications when starting the view, otherwise only future
             *   changes will be reported.  The default for an #ECalClientView is %TRUE.
             */
            NOTIFY_INITIAL,
        }
        /**
         * Indicates the type of modification made to a calendar
         */

        /**
         * Indicates the type of modification made to a calendar
         */
        export namespace ObjModType {
            export const $gtype: GObject.GType<ObjModType>;
        }

        enum ObjModType {
            /**
             * Modify this component
             */
            THIS,
            /**
             * Modify this component and all prior occurrances
             */
            THIS_AND_PRIOR,
            /**
             * Modify this component and all future occurrances
             */
            THIS_AND_FUTURE,
            /**
             * Modify all occurrances of this component
             */
            ALL,
            /**
             * Modify only this component
             */
            ONLY_THIS,
        }
        /**
         * Calendar operation flags, to specify behavior in certain situations. The conflict
         * resolution mode flags cannot be combined together, where the `E_CAL_OPERATION_FLAG_CONFLICT_KEEP_LOCAL`
         * is the default behavior (and it is used when no other conflict resolution flag is set).
         * The flags can be ignored when the operation or the backend don't support it.
         */

        /**
         * Calendar operation flags, to specify behavior in certain situations. The conflict
         * resolution mode flags cannot be combined together, where the `E_CAL_OPERATION_FLAG_CONFLICT_KEEP_LOCAL`
         * is the default behavior (and it is used when no other conflict resolution flag is set).
         * The flags can be ignored when the operation or the backend don't support it.
         */
        export namespace OperationFlags {
            export const $gtype: GObject.GType<OperationFlags>;
        }

        enum OperationFlags {
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
            /**
             * request to disable send of an iTip
             *    message by the server; this works only for servers which support iTip handling
             */
            DISABLE_ITIP_MESSAGE,
        }
        /**
         * Influences behaviour of e_cal_recur_describe_recurrence().
         */

        /**
         * Influences behaviour of e_cal_recur_describe_recurrence().
         */
        export namespace RecurDescribeRecurrenceFlags {
            export const $gtype: GObject.GType<RecurDescribeRecurrenceFlags>;
        }

        enum RecurDescribeRecurrenceFlags {
            /**
             * no extra flags, either returns %NULL or the recurrence description,
             *    something like "Every 2 weeks..."
             */
            NONE,
            /**
             * either returns %NULL or the recurrence description prefixed
             *    with text like "The meeting recurs", forming something like "The meeting recurs every 2 weeks..."
             */
            PREFIXED,
            /**
             * returns %NULL only if the component doesn't recur,
             *    otherwise returns either the recurrence description or at least text like "The meeting recurs"
             */
            FALLBACK,
        }
        /**
         * Flags modifying behaviour of e_reminder_watcher_describe_data().
         */

        /**
         * Flags modifying behaviour of e_reminder_watcher_describe_data().
         */
        export namespace ReminderWatcherDescribeFlags {
            export const $gtype: GObject.GType<ReminderWatcherDescribeFlags>;
        }

        enum ReminderWatcherDescribeFlags {
            /**
             * None flags
             */
            NONE,
            /**
             * Returned description will contain
             *    also markup. Without it it'll be a plain text.
             */
            MARKUP,
        }
        module Client {
            // Signal callback interfaces

            interface FreeBusyData {
                (free_busy_ecalcomps: Component[]): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends EDataServer.Client.ConstructorProps,
                    TimezoneCache.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.Initable.ConstructorProps {
                default_timezone: ICalGLib.Timezone;
                defaultTimezone: ICalGLib.Timezone;
                source_type: ClientSourceType;
                sourceType: ClientSourceType;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class Client extends EDataServer.Client implements TimezoneCache, Gio.AsyncInitable<Client>, Gio.Initable {
            static $gtype: GObject.GType<Client>;

            // Properties

            get default_timezone(): ICalGLib.Timezone;
            set default_timezone(val: ICalGLib.Timezone);
            get defaultTimezone(): ICalGLib.Timezone;
            set defaultTimezone(val: ICalGLib.Timezone);
            get source_type(): ClientSourceType;
            get sourceType(): ClientSourceType;

            // Constructors

            constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect_after(
                signal: 'free-busy-data',
                callback: (_source: this, free_busy_ecalcomps: Component[]) => void,
            ): number;
            emit(signal: 'free-busy-data', free_busy_ecalcomps: Component[]): void;

            // Static methods

            /**
             * This function cleans up VEVENT, VJOURNAL, VTODO and VTIMEZONE
             * items which are to be imported into Evolution.
             *
             * Using VTIMEZONE definitions is problematic because they cannot be
             * updated properly when timezone definitions change. They are also
             * incomplete (for compatibility reason only one set of rules for
             * summer saving changes can be included, even if different rules
             * apply in different years). This function looks for matches of the
             * used TZIDs against system timezones and replaces such TZIDs with
             * the corresponding system timezone. This works for TZIDs containing
             * a location (found via a fuzzy string search) and for Outlook TZIDs
             * (via a hard-coded lookup table).
             *
             * Some programs generate broken meeting invitations with TZID, but
             * without including the corresponding VTIMEZONE. Importing such
             * invitations unchanged causes problems later on (meeting displayed
             * incorrectly, e_cal_component_get_as_string() fails). The situation
             * where this occurred in the past (found by a SyncEvolution user) is
             * now handled via the location based mapping.
             *
             * If this mapping fails, this function also deals with VTIMEZONE
             * conflicts: such conflicts occur when the calendar already contains
             * an old VTIMEZONE definition with the same TZID, but different
             * summer saving rules. Replacing the VTIMEZONE potentially breaks
             * displaying of old events, whereas not replacing it breaks the new
             * events (the behavior in Evolution <= 2.22.1).
             *
             * The way this problem is resolved by renaming the new VTIMEZONE
             * definition until the TZID is unique. A running count is appended to
             * the TZID. All items referencing the renamed TZID are adapted
             * accordingly.
             * @param vcalendar a VCALENDAR containing a list of    VTIMEZONE and arbitrary other components, in    arbitrary order: these other components are    modified by this call
             * @param icalcomps a list of #ICalComponent    instances which also have to be patched; may be %NULL
             * @param tzlookup a callback function which is called to retrieve    a calendar's VTIMEZONE definition; the returned    definition is *not* freed by e_cal_client_check_timezones()    NULL indicates that no such timezone exists    or an error occurred
             * @param cancellable a #GCancellable to use in @tzlookup function
             */
            static check_timezones_sync(
                vcalendar: ICalGLib.Component,
                icalcomps: ICalGLib.Component[] | null,
                tzlookup: RecurResolveTimezoneCb,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously creates a new #ECalClient for `source` and `source_type`.
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
             * Unlike with e_cal_client_new(), there is no need to call e_client_open()
             * after obtaining the #ECalClient.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_client_connect_finish() to get the result of the operation.
             * @param source an #ESource
             * @param source_type source tpe of the calendar
             * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request            is satisfied
             */
            static connect(
                source: EDataServer.Source,
                source_type: ClientSourceType,
                wait_for_connected_seconds: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Client> | null,
            ): void;
            static connect(...args: never[]): any;
            /**
             * Finishes the operation started with e_cal_client_connect().  If an
             * error occurs in connecting to the D-Bus service, the function sets
             * `error` and returns %NULL.
             *
             * For error handling convenience, any error message returned by this
             * function will have a descriptive prefix that includes the display
             * name of the #ESource passed to e_cal_client_connect().
             * @param result a #GAsyncResult
             */
            static connect_finish(result: Gio.AsyncResult): EDataServer.Client | null;
            /**
             * Creates a new #ECalClient for `source` and `source_type`.  If an error
             * occurs, the function will set `error` and return %FALSE.
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
             * Unlike with e_cal_client_new(), there is no need to call
             * e_client_open_sync() after obtaining the #ECalClient.
             *
             * For error handling convenience, any error message returned by this
             * function will have a descriptive prefix that includes the display
             * name of `source`.
             * @param source an #ESource
             * @param source_type source type of the calendar
             * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
             * @param cancellable optional #GCancellable object, or %NULL
             */
            static connect_sync(
                source: EDataServer.Source,
                source_type: ClientSourceType,
                wait_for_connected_seconds: number,
                cancellable?: Gio.Cancellable | null,
            ): EDataServer.Client | null;
            static error_create(code: ClientError, custom_msg?: string | null): GLib.Error;
            // Conflicted with EDataServer.Client.error_create
            static error_create(...args: never[]): any;
            static error_quark(): GLib.Quark;
            /**
             * Get localized human readable description of the given error code.
             * @param code an #ECalClientError error code
             */
            static error_to_string(code: ClientError): string;
            // Conflicted with EDataServer.Client.error_to_string
            static error_to_string(...args: never[]): any;
            /**
             * An implementation of the #ECalRecurResolveTimezoneCb callback which clients
             * can use. Calls e_cal_client_get_timezone_sync().
             *
             * The returned timezone object, if not %NULL, is owned by the `ecalclient`.
             * @param tzid ID of the timezone to lookup
             * @param ecalclient a valid #ECalClient pointer
             * @param cancellable an optional #GCancellable to use, or %NULL
             */
            static tzlookup_cb(
                tzid: string,
                ecalclient: Client,
                cancellable?: Gio.Cancellable | null,
            ): ICalGLib.Timezone | null;
            /**
             * An implementation of the #ECalRecurResolveTimezoneCb callback which
             * backends can use. Searches for the timezone in an %ICalComponent
             * associated with the `lookup_data` %ECalClientTzlookupICalCompData.
             *
             * The returned timezone object is owned by the `lookup_data`.
             * @param tzid ID of the timezone to lookup
             * @param lookup_data an #ECalClientTzlookupICalCompData    strcture, created with e_cal_client_tzlookup_icalcomp_data_new()
             * @param cancellable an optional #GCancellable to use, or %NULL
             */
            static tzlookup_icalcomp_cb(
                tzid: string,
                lookup_data: ClientTzlookupICalCompData,
                cancellable?: Gio.Cancellable | null,
            ): ICalGLib.Timezone | null;

            // Methods

            /**
             * Add a VTIMEZONE object to the given calendar client.
             * The call is finished by e_cal_client_add_timezone_finish() from
             * the `callback`.
             * @param zone The timezone to add
             * @param cancellable a #GCancellable; can be %NULL
             */
            add_timezone(zone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Add a VTIMEZONE object to the given calendar client.
             * The call is finished by e_cal_client_add_timezone_finish() from
             * the `callback`.
             * @param zone The timezone to add
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            add_timezone(
                zone: ICalGLib.Timezone,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Add a VTIMEZONE object to the given calendar client.
             * The call is finished by e_cal_client_add_timezone_finish() from
             * the `callback`.
             * @param zone The timezone to add
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            add_timezone(
                zone: ICalGLib.Timezone,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            // Conflicted with ECal.TimezoneCache.add_timezone
            add_timezone(...args: never[]): any;
            /**
             * Finishes previous call of e_cal_client_add_timezone().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            add_timezone_finish(result: Gio.AsyncResult): boolean;
            /**
             * Add a VTIMEZONE object to the given calendar client.
             * @param zone The timezone to add
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            add_timezone_sync(zone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Checks if a calendar supports only one alarm per component.
             * @returns TRUE if the calendar allows only one alarm, FALSE otherwise.
             */
            check_one_alarm_only(): boolean;
            /**
             * Checks whether a calendar requires organizer to accept their attendance to
             * meetings.
             * @returns TRUE if the calendar requires organizers to accept, FALSE otherwise.
             */
            check_organizer_must_accept(): boolean;
            /**
             * Checks if a calendar forces organizers of meetings to be also attendees.
             * @returns TRUE if the calendar forces organizers to attend meetings, FALSE otherwise.
             */
            check_organizer_must_attend(): boolean;
            /**
             * Checks if the calendar has a master object for recurrences.
             * @returns TRUE if the calendar has a master object for recurrences, FALSE otherwise.
             */
            check_recurrences_no_master(): boolean;
            /**
             * Checks whether the calendar saves schedules.
             * @returns TRUE if it saves schedules, FALSE otherwise.
             */
            check_save_schedules(): boolean;
            /**
             * Requests the calendar backend to create the object specified by the `icalcomp`
             * argument. Some backends would assign a specific UID to the newly created object,
             * but this function does not modify the original `icalcomp` if its UID changes.
             * The call is finished by e_cal_client_create_object_finish() from
             * the `callback`.
             * @param icalcomp The component to create
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            create_object(
                icalcomp: ICalGLib.Component,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<string>;
            /**
             * Requests the calendar backend to create the object specified by the `icalcomp`
             * argument. Some backends would assign a specific UID to the newly created object,
             * but this function does not modify the original `icalcomp` if its UID changes.
             * The call is finished by e_cal_client_create_object_finish() from
             * the `callback`.
             * @param icalcomp The component to create
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            create_object(
                icalcomp: ICalGLib.Component,
                opflags: OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Requests the calendar backend to create the object specified by the `icalcomp`
             * argument. Some backends would assign a specific UID to the newly created object,
             * but this function does not modify the original `icalcomp` if its UID changes.
             * The call is finished by e_cal_client_create_object_finish() from
             * the `callback`.
             * @param icalcomp The component to create
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            create_object(
                icalcomp: ICalGLib.Component,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string> | void;
            /**
             * Finishes previous call of e_cal_client_create_object() and
             * sets `out_uid` to newly assigned UID for the created object.
             * This `out_uid` should be freed with g_free().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            create_object_finish(result: Gio.AsyncResult): [boolean, string];
            /**
             * Requests the calendar backend to create the object specified by the
             * `icalcomp` argument. Some backends would assign a specific UID to the newly
             * created object, in those cases that UID would be returned in the `out_uid`
             * argument. This function does not modify the original `icalcomp` if its UID
             * changes.  Returned `out_uid` should be freed with g_free().
             * @param icalcomp The component to create
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            create_object_sync(
                icalcomp: ICalGLib.Component,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string];
            /**
             * Requests the calendar backend to create the objects specified by the `icalcomps`
             * argument. Some backends would assign a specific UID to the newly created object,
             * but this function does not modify the original `icalcomps` if their UID changes.
             * The call is finished by e_cal_client_create_objects_finish() from
             * the `callback`.
             * @param icalcomps The components to create
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            create_objects(
                icalcomps: ICalGLib.Component[],
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<string[] | null>;
            /**
             * Requests the calendar backend to create the objects specified by the `icalcomps`
             * argument. Some backends would assign a specific UID to the newly created object,
             * but this function does not modify the original `icalcomps` if their UID changes.
             * The call is finished by e_cal_client_create_objects_finish() from
             * the `callback`.
             * @param icalcomps The components to create
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            create_objects(
                icalcomps: ICalGLib.Component[],
                opflags: OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Requests the calendar backend to create the objects specified by the `icalcomps`
             * argument. Some backends would assign a specific UID to the newly created object,
             * but this function does not modify the original `icalcomps` if their UID changes.
             * The call is finished by e_cal_client_create_objects_finish() from
             * the `callback`.
             * @param icalcomps The components to create
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            create_objects(
                icalcomps: ICalGLib.Component[],
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string[] | null> | void;
            /**
             * Finishes previous call of e_cal_client_create_objects() and
             * sets `out_uids` to newly assigned UIDs for the created objects.
             * This `out_uids` should be freed with e_client_util_free_string_slist().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            create_objects_finish(result: Gio.AsyncResult): [boolean, string[] | null];
            /**
             * Requests the calendar backend to create the objects specified by the
             * `icalcomps` argument. Some backends would assign a specific UID to the
             * newly created objects, in those cases these UIDs would be returned in
             * the `out_uids` argument. This function does not modify the original
             * `icalcomps` if their UID changes.  Returned `out_uids` should be freed
             * with e_client_util_free_string_slist().
             * @param icalcomps The components to create
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            create_objects_sync(
                icalcomps: ICalGLib.Component[],
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string[] | null];
            /**
             * Discards alarm `auid` from a given component identified by `uid` and `rid`.
             * The call is finished by e_cal_client_discard_alarm_finish() from
             * the `callback`.
             * @param uid Unique identifier for a calendar component
             * @param rid Recurrence identifier
             * @param auid Alarm identifier to discard
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            discard_alarm(
                uid: string,
                rid: string | null,
                auid: string,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Discards alarm `auid` from a given component identified by `uid` and `rid`.
             * The call is finished by e_cal_client_discard_alarm_finish() from
             * the `callback`.
             * @param uid Unique identifier for a calendar component
             * @param rid Recurrence identifier
             * @param auid Alarm identifier to discard
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            discard_alarm(
                uid: string,
                rid: string | null,
                auid: string,
                opflags: OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Discards alarm `auid` from a given component identified by `uid` and `rid`.
             * The call is finished by e_cal_client_discard_alarm_finish() from
             * the `callback`.
             * @param uid Unique identifier for a calendar component
             * @param rid Recurrence identifier
             * @param auid Alarm identifier to discard
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            discard_alarm(
                uid: string,
                rid: string | null,
                auid: string,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_cal_client_discard_alarm().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            discard_alarm_finish(result: Gio.AsyncResult): boolean;
            /**
             * Discards alarm `auid` from a given component identified by `uid` and `rid`.
             * @param uid Unique identifier for a calendar component
             * @param rid Recurrence identifier
             * @param auid Alarm identifier to discard
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            discard_alarm_sync(
                uid: string,
                rid: string | null,
                auid: string,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Does a combination of e_cal_client_get_object_list() and
             * e_cal_recur_generate_instances_sync(). Unlike
             * e_cal_client_generate_instances_sync(), this returns immediately and the
             * `cb` callback is called asynchronously.
             *
             * The callback function should do a g_object_ref() of the calendar component
             * it gets passed if it intends to keep it around, since it will be unref'ed
             * as soon as the callback returns.
             * @param start Start time for query.
             * @param end End time for query.
             * @param cancellable a #GCancellable; can be %NULL
             * @param cb Callback for each generated instance.
             */
            generate_instances(
                start: never,
                end: never,
                cancellable: Gio.Cancellable | null,
                cb: RecurInstanceCb,
            ): void;
            /**
             * Does a combination of e_cal_client_get_object_list() and
             * e_cal_recur_generate_instances_sync(), like
             * e_cal_client_generate_instances(), but for a single object. Unlike
             * e_cal_client_generate_instances_for_object_sync(), this returns immediately
             * and the `cb` callback is called asynchronously.
             *
             * The callback function should do a g_object_ref() of the calendar component
             * it gets passed if it intends to keep it around, since it will be unref'ed
             * as soon as the callback returns.
             * @param icalcomp Object to generate instances from.
             * @param start Start time for query.
             * @param end End time for query.
             * @param cancellable a #GCancellable; can be %NULL
             * @param cb Callback for each generated instance.
             */
            generate_instances_for_object(
                icalcomp: ICalGLib.Component,
                start: never,
                end: never,
                cancellable: Gio.Cancellable | null,
                cb: RecurInstanceCb,
            ): void;
            /**
             * Does a combination of e_cal_client_get_object_list() and
             * e_cal_recur_generate_instances_sync(), like
             * e_cal_client_generate_instances_sync(), but for a single object.
             *
             * The callback function should do a g_object_ref() of the calendar component
             * it gets passed if it intends to keep it around, since it will be unref'ed
             * as soon as the callback returns.
             * @param icalcomp Object to generate instances from
             * @param start Start time for query
             * @param end End time for query
             * @param cancellable a #GCancellable; can be %NULL
             * @param cb Callback for each generated instance
             */
            generate_instances_for_object_sync(
                icalcomp: ICalGLib.Component,
                start: never,
                end: never,
                cancellable: Gio.Cancellable | null,
                cb: RecurInstanceCb,
            ): void;
            /**
             * Does a combination of e_cal_client_get_object_list() and
             * e_cal_recur_generate_instances_sync(), like
             * e_cal_client_generate_instances_sync(), but for a single object.
             *
             * The callback function should do a g_object_ref() of the calendar component
             * it gets passed if it intends to keep it around, since it will be unref'ed
             * as soon as the callback returns.
             * @param uid A component UID to generate instances for
             * @param start Start time for query
             * @param end End time for query
             * @param cancellable a #GCancellable; can be %NULL
             * @param cb Callback for each generated instance
             */
            generate_instances_for_uid_sync(
                uid: string,
                start: never,
                end: never,
                cancellable: Gio.Cancellable | null,
                cb: RecurInstanceCb,
            ): void;
            /**
             * Does a combination of e_cal_client_get_object_list() and
             * e_cal_recur_generate_instances_sync().
             *
             * The callback function should do a g_object_ref() of the calendar component
             * it gets passed if it intends to keep it around, since it will be unreffed
             * as soon as the callback returns.
             * @param start Start time for query
             * @param end End time for query
             * @param cancellable a #GCancellable; can be %NULL
             * @param cb Callback for each generated instance
             */
            generate_instances_sync(
                start: never,
                end: never,
                cancellable: Gio.Cancellable | null,
                cb: RecurInstanceCb,
            ): void;
            /**
             * Queries a calendar for a specified component's object attachment uris.
             * The call is finished by e_cal_client_get_attachment_uris_finish() from
             * the `callback`.
             * @param uid Unique identifier for a calendar component
             * @param rid Recurrence identifier
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_attachment_uris(
                uid: string,
                rid?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<string[]>;
            /**
             * Queries a calendar for a specified component's object attachment uris.
             * The call is finished by e_cal_client_get_attachment_uris_finish() from
             * the `callback`.
             * @param uid Unique identifier for a calendar component
             * @param rid Recurrence identifier
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_attachment_uris(
                uid: string,
                rid: string | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Queries a calendar for a specified component's object attachment uris.
             * The call is finished by e_cal_client_get_attachment_uris_finish() from
             * the `callback`.
             * @param uid Unique identifier for a calendar component
             * @param rid Recurrence identifier
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_attachment_uris(
                uid: string,
                rid?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string[]> | void;
            /**
             * Finishes previous call of e_cal_client_get_attachment_uris() and
             * sets `out_attachment_uris` to uris for component's attachments.
             * The list should be freed with e_client_util_free_string_slist().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_attachment_uris_finish(result: Gio.AsyncResult): [boolean, string[]];
            /**
             * Queries a calendar for a specified component's object attachment URIs.
             * The list should be freed with e_client_util_free_string_slist().
             * @param uid Unique identifier for a calendar component
             * @param rid Recurrence identifier
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_attachment_uris_sync(
                uid: string,
                rid: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string[]];
            /**
             * Gets a calendar component as an iCalendar string, with a toplevel
             * VCALENDAR component and all VTIMEZONEs needed for the component.
             * @param icalcomp A calendar component object.
             * @returns the component as a complete iCalendar string, or NULL on failure. The string should be freed with g_free().
             */
            get_component_as_string(icalcomp: ICalGLib.Component): string | null;
            /**
             * Retrives an #ICalComponent from the backend that contains the default
             * values for properties needed. The call is finished
             * by e_cal_client_get_default_object_finish() from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_default_object(cancellable?: Gio.Cancellable | null): Promise<ICalGLib.Component>;
            /**
             * Retrives an #ICalComponent from the backend that contains the default
             * values for properties needed. The call is finished
             * by e_cal_client_get_default_object_finish() from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_default_object(
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Retrives an #ICalComponent from the backend that contains the default
             * values for properties needed. The call is finished
             * by e_cal_client_get_default_object_finish() from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_default_object(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<ICalGLib.Component> | void;
            /**
             * Finishes previous call of e_cal_client_get_default_object() and
             * sets `out_icalcomp` to an #ICalComponent from the backend that contains
             * the default values for properties needed. This `out_icalcomp` should be
             * freed with g_object_unref(), when no longer needed.
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_default_object_finish(result: Gio.AsyncResult): [boolean, ICalGLib.Component];
            /**
             * Retrives an #ICalComponent from the backend that contains the default
             * values for properties needed. This `out_icalcomp` should be freed with
             * g_object_unref(), when no longer needed.
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_default_object_sync(cancellable?: Gio.Cancellable | null): [boolean, ICalGLib.Component];
            /**
             * Returns the default timezone previously set with
             * e_cal_client_set_default_timezone().  The returned pointer is owned by
             * the `client` and should not be freed.
             * @returns an #ICalTimezone
             */
            get_default_timezone(): ICalGLib.Timezone;
            /**
             * Begins retrieval of free/busy information from the calendar server
             * as a list of #ECalComponent-s. Connect to "free-busy-data" signal
             * to receive chunks of free/busy components.
             * The call is finished by e_cal_client_get_free_busy_finish() from
             * the `callback`.
             * @param start Start time for query
             * @param end End time for query
             * @param users List of users to retrieve free/busy information for
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_free_busy(
                start: never,
                end: never,
                users: string[],
                cancellable?: Gio.Cancellable | null,
            ): Promise<Component[]>;
            /**
             * Begins retrieval of free/busy information from the calendar server
             * as a list of #ECalComponent-s. Connect to "free-busy-data" signal
             * to receive chunks of free/busy components.
             * The call is finished by e_cal_client_get_free_busy_finish() from
             * the `callback`.
             * @param start Start time for query
             * @param end End time for query
             * @param users List of users to retrieve free/busy information for
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_free_busy(
                start: never,
                end: never,
                users: string[],
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Begins retrieval of free/busy information from the calendar server
             * as a list of #ECalComponent-s. Connect to "free-busy-data" signal
             * to receive chunks of free/busy components.
             * The call is finished by e_cal_client_get_free_busy_finish() from
             * the `callback`.
             * @param start Start time for query
             * @param end End time for query
             * @param users List of users to retrieve free/busy information for
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_free_busy(
                start: never,
                end: never,
                users: string[],
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Component[]> | void;
            /**
             * Finishes previous call of e_cal_client_get_free_busy().
             * The `out_freebusy` contains all VFREEBUSY #ECalComponent-s, which could be also
             * received by "free-busy-data" signal. The client is responsible to do a merge of
             * the components between this complete list and those received through the signal.
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_free_busy_finish(result: Gio.AsyncResult): [boolean, Component[]];
            /**
             * Gets free/busy information from the calendar server.
             * The `out_freebusy` contains all VFREEBUSY #ECalComponent-s, which could be also
             * received by "free-busy-data" signal. The client is responsible to do a merge of
             * the components between this complete list and those received through the signal.
             * @param start Start time for query
             * @param end End time for query
             * @param users List of users to retrieve free/busy information for
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_free_busy_sync(
                start: never,
                end: never,
                users: string[],
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Component[]];
            /**
             * Queries the URL where the calendar attachments are
             * serialized in the local filesystem. This enable clients
             * to operate with the reference to attachments rather than the data itself
             * unless it specifically uses the attachments for open/sending
             * operations.
             * @returns The URL where the attachments are serialized in the local filesystem.
             */
            get_local_attachment_store(): string;
            /**
             * Queries a calendar for a calendar component object based on its unique
             * identifier. The call is finished by e_cal_client_get_object_finish()
             * from the `callback`.
             *
             * Use e_cal_client_get_objects_for_uid() to get list of all
             * objects for the given uid, which includes master object and
             * all detached instances.
             * @param uid Unique identifier for a calendar component.
             * @param rid Recurrence identifier.
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_object(
                uid: string,
                rid?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<ICalGLib.Component>;
            /**
             * Queries a calendar for a calendar component object based on its unique
             * identifier. The call is finished by e_cal_client_get_object_finish()
             * from the `callback`.
             *
             * Use e_cal_client_get_objects_for_uid() to get list of all
             * objects for the given uid, which includes master object and
             * all detached instances.
             * @param uid Unique identifier for a calendar component.
             * @param rid Recurrence identifier.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_object(
                uid: string,
                rid: string | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Queries a calendar for a calendar component object based on its unique
             * identifier. The call is finished by e_cal_client_get_object_finish()
             * from the `callback`.
             *
             * Use e_cal_client_get_objects_for_uid() to get list of all
             * objects for the given uid, which includes master object and
             * all detached instances.
             * @param uid Unique identifier for a calendar component.
             * @param rid Recurrence identifier.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_object(
                uid: string,
                rid?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<ICalGLib.Component> | void;
            /**
             * Finishes previous call of e_cal_client_get_object() and
             * sets `out_icalcomp` to queried component. This function always returns
             * master object for a case of `rid` being NULL or an empty string.
             * This component should be freed with g_object_unref(), when no longer needed.
             *
             * Use e_cal_client_get_objects_for_uid() to get list of all
             * objects for the given uid, which includes master object and
             * all detached instances.
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_object_finish(result: Gio.AsyncResult): [boolean, ICalGLib.Component];
            /**
             * Gets a list of objects from the calendar that match the query specified
             * by the `sexp` argument, returning matching objects as a list of #ICalComponent-s.
             * The call is finished by e_cal_client_get_object_list_finish() from
             * the `callback`.
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_object_list(sexp: string, cancellable?: Gio.Cancellable | null): Promise<ICalGLib.Component[]>;
            /**
             * Gets a list of objects from the calendar that match the query specified
             * by the `sexp` argument, returning matching objects as a list of #ICalComponent-s.
             * The call is finished by e_cal_client_get_object_list_finish() from
             * the `callback`.
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_object_list(
                sexp: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Gets a list of objects from the calendar that match the query specified
             * by the `sexp` argument, returning matching objects as a list of #ICalComponent-s.
             * The call is finished by e_cal_client_get_object_list_finish() from
             * the `callback`.
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_object_list(
                sexp: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<ICalGLib.Component[]> | void;
            /**
             * Gets a list of objects from the calendar that match the query specified
             * by the `sexp` argument, returning matching objects as a list of #ECalComponent-s.
             * The call is finished by e_cal_client_get_object_list_as_comps_finish() from
             * the `callback`.
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_object_list_as_comps(sexp: string, cancellable?: Gio.Cancellable | null): Promise<Component[]>;
            /**
             * Gets a list of objects from the calendar that match the query specified
             * by the `sexp` argument, returning matching objects as a list of #ECalComponent-s.
             * The call is finished by e_cal_client_get_object_list_as_comps_finish() from
             * the `callback`.
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_object_list_as_comps(
                sexp: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Gets a list of objects from the calendar that match the query specified
             * by the `sexp` argument, returning matching objects as a list of #ECalComponent-s.
             * The call is finished by e_cal_client_get_object_list_as_comps_finish() from
             * the `callback`.
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_object_list_as_comps(
                sexp: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Component[]> | void;
            /**
             * Finishes previous call of e_cal_client_get_object_list_as_comps() and
             * sets `out_ecalcomps` to a matching list of #ECalComponent-s.
             * This list should be freed with e_client_util_free_object_slist().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_object_list_as_comps_finish(result: Gio.AsyncResult): [boolean, Component[]];
            /**
             * Gets a list of objects from the calendar that match the query specified
             * by the `sexp` argument. The objects will be returned in the `out_ecalcomps`
             * argument, which is a list of #ECalComponent.
             * This list should be freed with e_client_util_free_object_slist().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_object_list_as_comps_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, Component[]];
            /**
             * Finishes previous call of e_cal_client_get_object_list() and
             * sets `out_icalcomps` to a matching list of #ICalComponent-s.
             * This list should be freed with e_client_util_free_object_slist().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_object_list_finish(result: Gio.AsyncResult): [boolean, ICalGLib.Component[]];
            /**
             * Gets a list of objects from the calendar that match the query specified
             * by the `sexp` argument. The objects will be returned in the `out_icalcomps`
             * argument, which is a list of #ICalComponent.
             * This list should be freed with e_client_util_free_object_slist().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_object_list_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, ICalGLib.Component[]];
            /**
             * Queries a calendar for a calendar component object based
             * on its unique identifier. This function always returns
             * master object for a case of `rid` being NULL or an empty string.
             * This component should be freed with g_object_unref(),
             * when no longer needed.
             *
             * Use e_cal_client_get_objects_for_uid_sync() to get list of all
             * objects for the given uid, which includes master object and
             * all detached instances.
             * @param uid Unique identifier for a calendar component.
             * @param rid Recurrence identifier.
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_object_sync(
                uid: string,
                rid: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, ICalGLib.Component];
            /**
             * Queries a calendar for all calendar components with the given unique
             * ID. This will return any recurring event and all its detached recurrences.
             * For non-recurring events, it will just return the object with that ID.
             * The call is finished by e_cal_client_get_objects_for_uid_finish() from
             * the `callback`.
             * @param uid Unique identifier for a calendar component
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_objects_for_uid(uid: string, cancellable?: Gio.Cancellable | null): Promise<Component[]>;
            /**
             * Queries a calendar for all calendar components with the given unique
             * ID. This will return any recurring event and all its detached recurrences.
             * For non-recurring events, it will just return the object with that ID.
             * The call is finished by e_cal_client_get_objects_for_uid_finish() from
             * the `callback`.
             * @param uid Unique identifier for a calendar component
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_objects_for_uid(
                uid: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Queries a calendar for all calendar components with the given unique
             * ID. This will return any recurring event and all its detached recurrences.
             * For non-recurring events, it will just return the object with that ID.
             * The call is finished by e_cal_client_get_objects_for_uid_finish() from
             * the `callback`.
             * @param uid Unique identifier for a calendar component
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_objects_for_uid(
                uid: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Component[]> | void;
            /**
             * Finishes previous call of e_cal_client_get_objects_for_uid() and
             * sets `out_ecalcomps` to a list of #ECalComponent<!-- -->s corresponding to
             * found components for a given uid of the same type as this client.
             * This list should be freed with e_client_util_free_object_slist().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_objects_for_uid_finish(result: Gio.AsyncResult): [boolean, Component[]];
            /**
             * Queries a calendar for all calendar components with the given unique
             * ID. This will return any recurring event and all its detached recurrences.
             * For non-recurring events, it will just return the object with that ID.
             * This list should be freed with e_client_util_free_object_slist().
             * @param uid Unique identifier for a calendar component
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_objects_for_uid_sync(uid: string, cancellable?: Gio.Cancellable | null): [boolean, Component[]];
            /**
             * Gets the source type of the calendar client.
             * @returns an #ECalClientSourceType value corresponding to the source type of the calendar client.
             */
            get_source_type(): ClientSourceType;
            /**
             * Retrieves a timezone object from the calendar backend.
             * The call is finished by e_cal_client_get_timezone_finish() from
             * the `callback`.
             * @param tzid ID of the timezone to retrieve
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_timezone(tzid: string, cancellable?: Gio.Cancellable | null): Promise<ICalGLib.Timezone>;
            /**
             * Retrieves a timezone object from the calendar backend.
             * The call is finished by e_cal_client_get_timezone_finish() from
             * the `callback`.
             * @param tzid ID of the timezone to retrieve
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_timezone(
                tzid: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Retrieves a timezone object from the calendar backend.
             * The call is finished by e_cal_client_get_timezone_finish() from
             * the `callback`.
             * @param tzid ID of the timezone to retrieve
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_timezone(
                tzid: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<ICalGLib.Timezone> | void;
            // Conflicted with ECal.TimezoneCache.get_timezone
            get_timezone(...args: never[]): any;
            /**
             * Finishes previous call of e_cal_client_get_timezone() and
             * sets `out_zone` to a retrieved timezone object from the calendar backend.
             * This object is owned by the `client,` thus do not free it.
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_timezone_finish(result: Gio.AsyncResult): [boolean, ICalGLib.Timezone];
            /**
             * Retrieves a timezone object from the calendar backend.
             * This object is owned by the `client,` thus do not free it.
             * @param tzid ID of the timezone to retrieve
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_timezone_sync(tzid: string, cancellable?: Gio.Cancellable | null): [boolean, ICalGLib.Timezone];
            /**
             * Query `client` with `sexp,` creating an #ECalClientView.
             * The call is finished by e_cal_client_get_view_finish()
             * from the `callback`.
             * @param sexp an S-expression representing the query.
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_view(sexp: string, cancellable?: Gio.Cancellable | null): Promise<ClientView>;
            /**
             * Query `client` with `sexp,` creating an #ECalClientView.
             * The call is finished by e_cal_client_get_view_finish()
             * from the `callback`.
             * @param sexp an S-expression representing the query.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_view(
                sexp: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Query `client` with `sexp,` creating an #ECalClientView.
             * The call is finished by e_cal_client_get_view_finish()
             * from the `callback`.
             * @param sexp an S-expression representing the query.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_view(
                sexp: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<ClientView> | void;
            /**
             * Finishes previous call of e_cal_client_get_view().
             * If successful, then the `out_view` is set to newly allocated #ECalClientView,
             * which should be freed with g_object_unref().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_view_finish(result: Gio.AsyncResult): [boolean, ClientView];
            /**
             * Query `client` with `sexp,` creating an #ECalClientView.
             * If successful, then the `out_view` is set to newly allocated #ECalClientView,
             * which should be freed with g_object_unref().
             * @param sexp an S-expression representing the query.
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_view_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, ClientView];
            /**
             * Requests the calendar backend to modify an existing object. If the object
             * does not exist on the calendar, an error will be returned.
             *
             * For recurrent appointments, the `mod` argument specifies what to modify,
             * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
             * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
             * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
             *
             * The call is finished by e_cal_client_modify_object_finish() from
             * the `callback`.
             * @param icalcomp Component to modify
             * @param mod Type of modification
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            modify_object(
                icalcomp: ICalGLib.Component,
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Requests the calendar backend to modify an existing object. If the object
             * does not exist on the calendar, an error will be returned.
             *
             * For recurrent appointments, the `mod` argument specifies what to modify,
             * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
             * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
             * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
             *
             * The call is finished by e_cal_client_modify_object_finish() from
             * the `callback`.
             * @param icalcomp Component to modify
             * @param mod Type of modification
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            modify_object(
                icalcomp: ICalGLib.Component,
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Requests the calendar backend to modify an existing object. If the object
             * does not exist on the calendar, an error will be returned.
             *
             * For recurrent appointments, the `mod` argument specifies what to modify,
             * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
             * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
             * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
             *
             * The call is finished by e_cal_client_modify_object_finish() from
             * the `callback`.
             * @param icalcomp Component to modify
             * @param mod Type of modification
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            modify_object(
                icalcomp: ICalGLib.Component,
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_cal_client_modify_object().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            modify_object_finish(result: Gio.AsyncResult): boolean;
            /**
             * Requests the calendar backend to modify an existing object. If the object
             * does not exist on the calendar, an error will be returned.
             *
             * For recurrent appointments, the `mod` argument specifies what to modify,
             * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
             * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
             * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
             * @param icalcomp Component to modify
             * @param mod Type of modification
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            modify_object_sync(
                icalcomp: ICalGLib.Component,
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Requests the calendar backend to modify existing objects. If an object
             * does not exist on the calendar, an error will be returned.
             *
             * For recurrent appointments, the `mod` argument specifies what to modify,
             * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
             * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
             * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
             *
             * The call is finished by e_cal_client_modify_objects_finish() from
             * the `callback`.
             * @param icalcomps Components to modify
             * @param mod Type of modification
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            modify_objects(
                icalcomps: ICalGLib.Component[],
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Requests the calendar backend to modify existing objects. If an object
             * does not exist on the calendar, an error will be returned.
             *
             * For recurrent appointments, the `mod` argument specifies what to modify,
             * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
             * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
             * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
             *
             * The call is finished by e_cal_client_modify_objects_finish() from
             * the `callback`.
             * @param icalcomps Components to modify
             * @param mod Type of modification
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            modify_objects(
                icalcomps: ICalGLib.Component[],
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Requests the calendar backend to modify existing objects. If an object
             * does not exist on the calendar, an error will be returned.
             *
             * For recurrent appointments, the `mod` argument specifies what to modify,
             * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
             * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
             * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
             *
             * The call is finished by e_cal_client_modify_objects_finish() from
             * the `callback`.
             * @param icalcomps Components to modify
             * @param mod Type of modification
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            modify_objects(
                icalcomps: ICalGLib.Component[],
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_cal_client_modify_objects().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            modify_objects_finish(result: Gio.AsyncResult): boolean;
            /**
             * Requests the calendar backend to modify existing objects. If an object
             * does not exist on the calendar, an error will be returned.
             *
             * For recurrent appointments, the `mod` argument specifies what to modify,
             * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
             * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
             * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
             * @param icalcomps Components to modify
             * @param mod Type of modification
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            modify_objects_sync(
                icalcomps: ICalGLib.Component[],
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Makes the backend receive the set of iCalendar objects specified in the
             * `icalcomp` argument. This is used for iTIP confirmation/cancellation
             * messages for scheduled meetings.
             *
             * The call is finished by e_cal_client_receive_objects_finish() from
             * the `callback`.
             * @param icalcomp An #ICalComponent
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            receive_objects(
                icalcomp: ICalGLib.Component,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Makes the backend receive the set of iCalendar objects specified in the
             * `icalcomp` argument. This is used for iTIP confirmation/cancellation
             * messages for scheduled meetings.
             *
             * The call is finished by e_cal_client_receive_objects_finish() from
             * the `callback`.
             * @param icalcomp An #ICalComponent
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            receive_objects(
                icalcomp: ICalGLib.Component,
                opflags: OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Makes the backend receive the set of iCalendar objects specified in the
             * `icalcomp` argument. This is used for iTIP confirmation/cancellation
             * messages for scheduled meetings.
             *
             * The call is finished by e_cal_client_receive_objects_finish() from
             * the `callback`.
             * @param icalcomp An #ICalComponent
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            receive_objects(
                icalcomp: ICalGLib.Component,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_cal_client_receive_objects().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            receive_objects_finish(result: Gio.AsyncResult): boolean;
            /**
             * Makes the backend receive the set of iCalendar objects specified in the
             * `icalcomp` argument. This is used for iTIP confirmation/cancellation
             * messages for scheduled meetings.
             * @param icalcomp An #ICalComponent
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            receive_objects_sync(
                icalcomp: ICalGLib.Component,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * This function allows the removal of instances of a recurrent
             * appointment. By using a combination of the `uid,` `rid` and `mod`
             * arguments, you can remove specific instances. If what you want
             * is to remove all instances, use %NULL `rid` and #E_CAL_OBJ_MOD_ALL
             * for the `mod`.
             *
             * The call is finished by e_cal_client_remove_object_finish() from
             * the `callback`.
             * @param uid UID of the object to remove
             * @param rid Recurrence ID of the specific recurrence to remove
             * @param mod Type of the removal
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            remove_object(
                uid: string,
                rid: string | null,
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * This function allows the removal of instances of a recurrent
             * appointment. By using a combination of the `uid,` `rid` and `mod`
             * arguments, you can remove specific instances. If what you want
             * is to remove all instances, use %NULL `rid` and #E_CAL_OBJ_MOD_ALL
             * for the `mod`.
             *
             * The call is finished by e_cal_client_remove_object_finish() from
             * the `callback`.
             * @param uid UID of the object to remove
             * @param rid Recurrence ID of the specific recurrence to remove
             * @param mod Type of the removal
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            remove_object(
                uid: string,
                rid: string | null,
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * This function allows the removal of instances of a recurrent
             * appointment. By using a combination of the `uid,` `rid` and `mod`
             * arguments, you can remove specific instances. If what you want
             * is to remove all instances, use %NULL `rid` and #E_CAL_OBJ_MOD_ALL
             * for the `mod`.
             *
             * The call is finished by e_cal_client_remove_object_finish() from
             * the `callback`.
             * @param uid UID of the object to remove
             * @param rid Recurrence ID of the specific recurrence to remove
             * @param mod Type of the removal
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            remove_object(
                uid: string,
                rid: string | null,
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_cal_client_remove_object().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            remove_object_finish(result: Gio.AsyncResult): boolean;
            /**
             * This function allows the removal of instances of a recurrent
             * appointment. By using a combination of the `uid,` `rid` and `mod`
             * arguments, you can remove specific instances. If what you want
             * is to remove all instances, use %NULL `rid` and #E_CAL_OBJ_MOD_ALL
             * for the `mod`.
             * @param uid UID of the object to remove
             * @param rid Recurrence ID of the specific recurrence to remove
             * @param mod Type of the removal
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            remove_object_sync(
                uid: string,
                rid: string | null,
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * This function allows the removal of instances of recurrent appointments.
             * #ECalComponentId objects can identify specific instances (if rid is not
             * %NULL).  If what you want is to remove all instances, use a %NULL rid in
             * the #ECalComponentId and #E_CAL_OBJ_MOD_ALL for the `mod`.
             *
             * The call is finished by e_cal_client_remove_objects_finish() from
             * the `callback`.
             * @param ids A list of #ECalComponentId objects identifying the objects to remove
             * @param mod Type of the removal
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            remove_objects(
                ids: ComponentId[],
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * This function allows the removal of instances of recurrent appointments.
             * #ECalComponentId objects can identify specific instances (if rid is not
             * %NULL).  If what you want is to remove all instances, use a %NULL rid in
             * the #ECalComponentId and #E_CAL_OBJ_MOD_ALL for the `mod`.
             *
             * The call is finished by e_cal_client_remove_objects_finish() from
             * the `callback`.
             * @param ids A list of #ECalComponentId objects identifying the objects to remove
             * @param mod Type of the removal
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            remove_objects(
                ids: ComponentId[],
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * This function allows the removal of instances of recurrent appointments.
             * #ECalComponentId objects can identify specific instances (if rid is not
             * %NULL).  If what you want is to remove all instances, use a %NULL rid in
             * the #ECalComponentId and #E_CAL_OBJ_MOD_ALL for the `mod`.
             *
             * The call is finished by e_cal_client_remove_objects_finish() from
             * the `callback`.
             * @param ids A list of #ECalComponentId objects identifying the objects to remove
             * @param mod Type of the removal
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            remove_objects(
                ids: ComponentId[],
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_cal_client_remove_objects().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            remove_objects_finish(result: Gio.AsyncResult): boolean;
            /**
             * This function allows the removal of instances of recurrent
             * appointments. #ECalComponentId objects can identify specific instances
             * (if rid is not %NULL).  If what you want is to remove all instances, use
             * a %NULL rid in the #ECalComponentId and #E_CAL_OBJ_MOD_ALL for the `mod`.
             * @param ids a list of #ECalComponentId objects       identifying the objects to remove
             * @param mod Type of the removal
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            remove_objects_sync(
                ids: ComponentId[],
                mod: ObjModType | null,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Requests a calendar backend to send meeting information stored in `icalcomp`.
             * The backend can modify this component and request a send to particular users.
             * The call is finished by e_cal_client_send_objects_finish() from
             * the `callback`.
             * @param icalcomp An #ICalComponent to be sent
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            send_objects(
                icalcomp: ICalGLib.Component,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<[string[], ICalGLib.Component]>;
            /**
             * Requests a calendar backend to send meeting information stored in `icalcomp`.
             * The backend can modify this component and request a send to particular users.
             * The call is finished by e_cal_client_send_objects_finish() from
             * the `callback`.
             * @param icalcomp An #ICalComponent to be sent
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            send_objects(
                icalcomp: ICalGLib.Component,
                opflags: OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Requests a calendar backend to send meeting information stored in `icalcomp`.
             * The backend can modify this component and request a send to particular users.
             * The call is finished by e_cal_client_send_objects_finish() from
             * the `callback`.
             * @param icalcomp An #ICalComponent to be sent
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            send_objects(
                icalcomp: ICalGLib.Component,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[string[], ICalGLib.Component]> | void;
            /**
             * Finishes previous call of e_cal_client_send_objects() and
             * populates `out_users` with a list of users to send `out_modified_icalcomp` to.
             *
             * The `out_users` list should be freed with e_client_util_free_string_slist()
             * and the `out_modified_icalcomp` should be freed with g_object_unref().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            send_objects_finish(result: Gio.AsyncResult): [boolean, string[], ICalGLib.Component];
            /**
             * Requests a calendar backend to send meeting information stored in `icalcomp`.
             * The backend can modify this component and request a send to users in the
             * `out_users` list.
             *
             * The `out_users` list should be freed with e_client_util_free_string_slist()
             * and the `out_modified_icalcomp` should be freed with g_object_unref().
             * @param icalcomp An #ICalComponent to be sent
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            send_objects_sync(
                icalcomp: ICalGLib.Component,
                opflags: OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string[], ICalGLib.Component];
            /**
             * Sets the default timezone to use to resolve DATE and floating DATE-TIME
             * values. This will typically be from the user's timezone setting. Call this
             * before using any other object fetching functions.
             * @param zone A timezone object.
             */
            set_default_timezone(zone: ICalGLib.Timezone): void;

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
            new_finish(res: Gio.AsyncResult): Client;
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

        module ClientView {
            // Signal callback interfaces

            interface Complete {
                (object: GLib.Error): void;
            }

            interface ObjectsAdded {
                (objects: ICalGLib.Component[]): void;
            }

            interface ObjectsModified {
                (objects: ICalGLib.Component[]): void;
            }

            interface ObjectsRemoved {
                (uids: ComponentId[]): void;
            }

            interface Progress {
                (object: number, p0: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                client: Client;
                connection: Gio.DBusConnection;
                object_path: string;
                objectPath: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class ClientView extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<ClientView>;

            // Properties

            /**
             * The ECalClient for the view
             */
            get client(): Client;
            /**
             * The GDBusConnection used to create the D-Bus proxy
             */
            get connection(): Gio.DBusConnection;
            /**
             * The object path used to create the D-Bus proxy
             */
            get object_path(): string;
            /**
             * The object path used to create the D-Bus proxy
             */
            get objectPath(): string;

            // Constructors

            constructor(properties?: Partial<ClientView.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'complete', callback: (_source: this, object: GLib.Error) => void): number;
            connect_after(signal: 'complete', callback: (_source: this, object: GLib.Error) => void): number;
            emit(signal: 'complete', object: GLib.Error): void;
            connect(signal: 'objects-added', callback: (_source: this, objects: ICalGLib.Component[]) => void): number;
            connect_after(
                signal: 'objects-added',
                callback: (_source: this, objects: ICalGLib.Component[]) => void,
            ): number;
            emit(signal: 'objects-added', objects: ICalGLib.Component[]): void;
            connect(
                signal: 'objects-modified',
                callback: (_source: this, objects: ICalGLib.Component[]) => void,
            ): number;
            connect_after(
                signal: 'objects-modified',
                callback: (_source: this, objects: ICalGLib.Component[]) => void,
            ): number;
            emit(signal: 'objects-modified', objects: ICalGLib.Component[]): void;
            connect(signal: 'objects-removed', callback: (_source: this, uids: ComponentId[]) => void): number;
            connect_after(signal: 'objects-removed', callback: (_source: this, uids: ComponentId[]) => void): number;
            emit(signal: 'objects-removed', uids: ComponentId[]): void;
            connect(signal: 'progress', callback: (_source: this, object: number, p0: string) => void): number;
            connect_after(signal: 'progress', callback: (_source: this, object: number, p0: string) => void): number;
            emit(signal: 'progress', object: number, p0: string): void;

            // Virtual methods

            /**
             * A signal emitted when the backend finished initial view population
             * @param error
             */
            vfunc_complete(error: GLib.Error): void;
            /**
             * A signal emitted when the backend notifies about the progress
             * @param percent
             * @param message
             */
            vfunc_progress(percent: number, message: string): void;

            // Methods

            /**
             * Returns the #GDBusConnection used to create the D-Bus proxy.
             * @returns the #GDBusConnection
             */
            get_connection(): Gio.DBusConnection;
            /**
             * Returns the object path used to create the D-Bus proxy.
             * @returns the object path
             */
            get_object_path(): string;
            /**
             * Retunrs: Whether view is running. Not running views are ignoring
             * all events sent from the server.
             */
            is_running(): boolean;
            /**
             * Returns the #ECalClientView:client associated with `client_view`.
             *
             * The returned #ECalClient is referenced for thread-safety.  Unreference
             * the #ECalClient with g_object_unref() when finished with it.
             * @returns an #ECalClient
             */
            ref_client(): Client;
            /**
             * Client can instruct server to which fields it is interested in only, thus
             * the server can return less data over the wire. The server can still return
             * complete objects, this is just a hint to it that the listed fields will
             * be used only. The UID/RID fields are returned always. Initial views has no
             * fields of interest and using %NULL for `fields_of_interest` will unset any
             * previous changes.
             *
             * Some backends can use summary information of its cache to create artifical
             * objects, which will omit stored object parsing. If this cannot be done then
             * it will simply return object as is stored in the cache.
             * @param fields_of_interest List of field names                      in which the client is interested, or %NULL to reset                      the fields of interest
             */
            set_fields_of_interest(fields_of_interest?: string[] | null): void;
            /**
             * Sets the `flags` which control the behaviour of `client_view`.
             * @param flags the #ECalClientViewFlags for @client_view
             */
            set_flags(flags: ClientViewFlags | null): void;
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

        module Component {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Component extends GObject.Object {
            static $gtype: GObject.GType<Component>;

            // Constructors

            constructor(properties?: Partial<Component.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Component;

            static new_from_icalcomponent(icalcomp: ICalGLib.Component): Component;

            static new_from_string(calobj: string): Component;

            static new_vtype(vtype: ComponentVType): Component;

            // Methods

            /**
             * Aborts the sequence change needed in the given calendar component,
             * which means it will not require a sequence commit (via
             * e_cal_component_commit_sequence()) even if the changes done require a
             * sequence increment.
             */
            abort_sequence(): void;
            /**
             * Adds an alarm subcomponent to a calendar component.  You should have created
             * the `alarm` by using e_cal_component_alarm_new(); it is invalid to use an
             * #ECalComponentAlarm structure that came from e_cal_component_get_alarm().  After
             * adding the alarm, the `alarm` structure is no longer valid because the
             * internal structures may change and you should get rid of it by using
             * e_cal_component_alarm_free().
             * @param alarm an alarm, as an #ECalComponentAlarm
             */
            add_alarm(alarm: ComponentAlarm): void;
            /**
             * Creates a new calendar component object by copying the information from
             * another one.
             * @returns A newly-created calendar component with the same values as the original one.
             */
            clone(): Component;
            /**
             * Increments the sequence number property in a calendar component object if it
             * needs it.  This needs to be done when any of a number of properties listed in
             * RFC 2445 change values, such as the start and end dates of a component.
             *
             * This function must be called before calling e_cal_component_get_as_string() to
             * ensure that the component is fully consistent.
             */
            commit_sequence(): void;
            /**
             * Returns a comment for the given `locale`. When `locale` is %NULL,
             * the current locale is assumed. If no such comment for the locale
             * exists either a comment with no language parameter or the first
             * found is returned.
             *
             * Free the returned non-NULL #ECalComponentText with e_cal_component_text_free(),
             * when no longer needed.
             * @param locale a locale identifier, or %NULL
             * @returns comment for the @locale, %NULL    if no comment is set on the @comp.
             */
            dup_comment_for_locale(locale?: string | null): ComponentText | null;
            /**
             * Returns a description for the given `locale`. When `locale` is %NULL,
             * the current locale is assumed. If no such description for the locale
             * exists either a description with no language parameter or the first
             * found is returned.
             *
             * Free the returned non-NULL #ECalComponentText with e_cal_component_text_free(),
             * when no longer needed.
             * @param locale a locale identifier, or %NULL
             * @returns description for the @locale, %NULL    if no description is set on the @comp.
             */
            dup_description_for_locale(locale?: string | null): ComponentText | null;
            /**
             * Queries the summary of a calendar component object. There can be one summary
             * property per locale. Free the returned #GSList with
             * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
             * @returns the summary    properties and their parameters, as a #GSList of #ECalComponentText structures.
             */
            dup_summaries(): ComponentText[] | null;
            /**
             * Returns a summary for the given `locale`. When `locale` is %NULL,
             * the current locale is assumed. If no such summary for the locale
             * exists either a summary with no language parameter or the first
             * found is returned.
             *
             * Free the returned non-NULL #ECalComponentText with e_cal_component_text_free(),
             * when no longer needed.
             * @param locale a locale identifier, or %NULL
             * @returns summary for the @locale, %NULL    if no summary is set on the @comp.
             */
            dup_summary_for_locale(locale?: string | null): ComponentText | null;
            /**
             * Queries a particular alarm subcomponent of a calendar component.
             * Free the returned pointer with e_cal_component_alarm_free(),
             * when no longer needed.
             * @param auid Unique identifier for the sought alarm subcomponent.
             * @returns the alarm subcomponent that corresponds    to the specified @auid, or %NULL if no alarm exists with that UID
             */
            get_alarm(auid: string): ComponentAlarm | null;
            /**
             * Builds a list of the unique identifiers of the alarm subcomponents inside a
             * calendar component. Free the returned #GSList with
             * g_slist_free_full (slist, g_free);, when no longer needed.
             * @returns a #GSList of unique    identifiers for alarms.
             */
            get_alarm_uids(): string[] | null;
            /**
             * Queries all alarm subcomponents of a calendar component.
             * Free the returned #GSList with g_slist_free_full (slist, e_cal_component_alarm_free);,
             * when no longer needed.
             * @returns the alarm subcomponents    as a #GSList of #ECalComponentAlarm, or %NULL, if no alarm exists
             */
            get_all_alarms(): ComponentAlarm[] | null;
            /**
             * Gets the iCalendar string representation of a calendar component.  You should
             * call e_cal_component_commit_sequence() before this function to ensure that the
             * component's sequence number is consistent with the state of the object.
             * @returns String representation of the calendar component according to RFC 2445.
             */
            get_as_string(): string;
            /**
             * Queries the attachment properties as #ICalAttach objects of the calendar
             * component object. Changes on these objects are directly affecting the component.
             * Free the returned #GSList with g_slist_free_full (slist, g_object_unref);,
             * when no longer needed.
             * @returns a #GSList of    attachments, as #ICalAttach objects
             */
            get_attachments(): ICalGLib.Attach[] | null;
            /**
             * Queries the attendee properties of the calendar component object.
             * Free the returned #GSList with g_slist_free_full (slist, e_cal_component_attendee_free);,
             * when no longer needed.
             * @returns the attendees, as a #GSList of an #ECalComponentAttendee, or %NULL,    when none are set
             */
            get_attendees(): ComponentAttendee[] | null;
            /**
             * Queries the categories of the given calendar component. The categories
             * are returned in the `categories` argument, which, on success, will contain
             * a comma-separated list of all categories set in the component.
             * Free the returned string with g_free(), when no longer needed.
             * @returns the categories as string, or %NULL    if none are set
             */
            get_categories(): string | null;
            /**
             * Queries the list of categories of a calendar component object. Each element
             * in the returned categ_list is a string with the corresponding category.
             * Free the returned #GSList with g_slist_free_full (categories, g_free); , when
             * no longer needed.
             * @returns the #GSList of strings, where each    string is a category, or %NULL, when no category is set.
             */
            get_categories_list(): string[] | null;
            /**
             * Queries the classification of a calendar component object.  If the
             * classification property is not set on this component, this function returns
             * #E_CAL_COMPONENT_CLASS_NONE.
             *
             * Retuurns: a classification of the `comp,` as an #ECalComponentClassification
             */
            get_classification(): ComponentClassification;
            /**
             * Queries the comments of a calendar component object.  The comment property can
             * appear several times inside a calendar component, and so a list of
             * #ECalComponentText is returned. Free the returned #GSList with
             * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
             * @returns the comment properties    and their parameters, as a list of #ECalComponentText structures; or %NULL, when    the component doesn't contain any.
             */
            get_comments(): ComponentText[] | null;
            /**
             * Queries the date at which a calendar compoment object was completed.
             * Free the returned non-NULL pointer with g_object_unref(), when
             * no longer needed.
             * @returns the completion date, as an #ICalTime, or %NULL, when none is set
             */
            get_completed(): ICalGLib.Time | null;
            /**
             * Queries the contact of a calendar component object.  The contact property can
             * appear several times inside a calendar component, and so a list of
             * #ECalComponentText is returned. Free the returned #GSList with
             * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
             * @returns the contact properties and    their parameters, as a #GSList of #ECalComponentText structures.
             */
            get_contacts(): ComponentText[];
            /**
             * Queries the date in which a calendar component object was created in the
             * calendar store. Free the returned non-NULL pointer with g_object_unref(), when
             * no longer needed.
             * @returns the creation date, as an #ICalTime, or %NULL, when none is set
             */
            get_created(): ICalGLib.Time | null;
            /**
             * Queries the description of a calendar component object.  Journal components
             * may have more than one description, and as such this function returns a list
             * of #ECalComponentText structures.  All other types of components can have at
             * most one description for a single language. Free the returned #GSList with
             * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
             * @returns the description    properties and their parameters, as a #GSList of #ECalComponentText structures.
             */
            get_descriptions(): ComponentText[] | null;
            /**
             * Queries the date/time end of a calendar component object. In case there's no DTEND,
             * but only DTSTART and DURATION, then the end is computed from the later two.
             * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
             * when no longer needed.
             * @returns the date/time end, as an #ECalComponentDateTime
             */
            get_dtend(): ComponentDateTime | null;
            /**
             * Queries the date/timestamp property of a calendar component object, which is
             * the last time at which the object was modified by a calendar user agent.
             *
             * Free a non-NULL returned object with g_object_unref(),
             * when no longer needed.
             * @returns A value for the date/timestamp, or %NULL, when none found.
             */
            get_dtstamp(): ICalGLib.Time | null;
            /**
             * Queries the date/time start of a calendar component object.
             * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
             * when no longer needed.
             * @returns the date/time start, as an #ECalComponentDateTime
             */
            get_dtstart(): ComponentDateTime | null;
            /**
             * Queries the due date/time of a calendar component object. In case there's no DUE,
             * but only DTSTART and DURATION, then the due is computed from the later two.
             * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
             * when no longer needed.
             * @returns the due date/time, as an #ECalComponentDateTime
             */
            get_due(): ComponentDateTime | null;
            /**
             * Queries the list of exception date properties in a calendar component object.
             * Free the returned #GSList with g_slist_free_full (exdates, e_cal_component_datetime_free);,
             * when no longer needed.
             * @returns the list of exception dates, as a #GSList of #ECalComponentDateTime
             */
            get_exdates(): ComponentDateTime[] | null;
            /**
             * Queries the list of exception rule properties of a calendar component object.
             * Free the list with g_slist_free_full (slist, g_object_unref);, when
             * no longer needed.
             * @returns a list of exception    rule properties
             */
            get_exrule_properties(): ICalGLib.Property[] | null;
            /**
             * Queries the list of exception rule properties of a calendar component
             * object. Free the returned list with g_slist_free_full (slist, g_object_unref);,
             * when no longer needed.
             * @returns a #GSList    of exception rules as #ICalRecurrence structures, or %NULL, when none exist.
             */
            get_exrules(): ICalGLib.Recurrence[] | null;
            /**
             * Gets the geographic position property of a calendar component object.
             * Free the returned non-NULL object with g_object_unref(), when
             * no longer needed.
             * @returns the geographic position as #ICalGeo,    or %NULL, when none set.
             */
            get_geo(): ICalGLib.Geo | null;
            /**
             * Queries the #icalcomponent structure that a calendar component object is
             * wrapping.
             * @returns An #ICalComponent structure, or %NULL    if the @comp has no #ICalComponent set to it.
             */
            get_icalcomponent(): ICalGLib.Component | null;
            /**
             * Get the ID of the component as an #ECalComponentId. The return value should
             * be freed with e_cal_component_id_free(), when no longer needed.
             * @returns the id of the component
             */
            get_id(): ComponentId;
            /**
             * Queries the time at which a calendar component object was last modified in
             * the calendar store. Free the returned non-NULL pointer with g_object_unref(),
             * when no longer needed.
             * @returns the last modified time, as an #ICalTime, or %NULL, when none is set
             */
            get_last_modified(): ICalGLib.Time | null;
            /**
             * Queries the location property of a calendar component object.
             * @returns the locatio, or %NULL, if none is set
             */
            get_location(): string | null;
            /**
             * Queries the organizer property of a calendar component object.
             * Free the returned structure with e_cal_component_organizer_free(),
             * when no longer needed.
             * @returns an #ECalComponentOrganizer structure    destribing the organizer, or %NULL, when none exists.
             */
            get_organizer(): ComponentOrganizer | null;
            /**
             * Queries the percent-complete property of a calendar component object.
             * @returns the percent-complete property value, or -1 if not found
             */
            get_percent_complete(): number;
            /**
             * Queries the priority property of a calendar component object.
             * @returns the priority property value, or -1, if not found
             */
            get_priority(): number;
            /**
             * Queries the list of recurrence date properties in a calendar component
             * object. Free the returned #GSList with g_slist_free_full (slist, e_cal_component_period_free);,
             * when no longer needed.
             * @returns the list    of recurrence dates, as a #GSList of #ECalComponentPeriod structures.
             */
            get_rdates(): ComponentPeriod[] | null;
            /**
             * Queries the recurrence id property of a calendar component object.
             * Free the returned #ECalComponentRange with e_cal_component_range_free(),
             * whe no longer needed.
             * @returns the recurrence id property, as an #ECalComponentRange
             */
            get_recurid(): ComponentRange | null;
            /**
             * Gets the recurrence ID property as a string.
             * @returns the recurrence ID as a string.
             */
            get_recurid_as_string(): string;
            /**
             * Queries a list of recurrence rule properties of a calendar component object.
             * Free the list with g_slist_free_full (slist, g_object_unref);, when
             * no longer needed.
             * @returns a list of recurrence    rule properties
             */
            get_rrule_properties(): ICalGLib.Property[] | null;
            /**
             * Queries the list of recurrence rule properties of a calendar component
             * object. Free the returned list with g_slist_free_full (slist, g_object_unref);,
             * when no longer needed.
             * @returns a #GSList    of recurrence rules as #ICalRecurrence structures, or %NULL, when none exist.
             */
            get_rrules(): ICalGLib.Recurrence[] | null;
            /**
             * Queries the sequence number of a calendar component object.
             * @returns the sequence number, or -1 if not found
             */
            get_sequence(): number;
            /**
             * Queries the status property of a calendar component object.
             * @returns the status value; or %I_CAL_STATUS_NONE, if the component   has no status property
             */
            get_status(): ICalGLib.PropertyStatus;
            /**
             * Queries the summary of a calendar component object. It returns the first
             * found summary property of the component. To get a summary suitable for a specific
             * locale use e_cal_component_dup_summary_for_locale().
             *
             * Free the returned pointer withe_cal_component_text_free(),
             * when no longer needed.
             * @returns the summary, as an #ECalComponentText,    or %NULL, when none is set
             */
            get_summary(): ComponentText | null;
            /**
             * Queries the time transparency of a calendar component object.
             * @returns the time transparency, as an #ECalComponentTransparency;    value #E_CAL_COMPONENT_TRANSP_NONE is returned when none is set
             */
            get_transparency(): ComponentTransparency;
            /**
             * Queries the unique identifier of a calendar component object.
             * @returns the UID string
             */
            get_uid(): string;
            /**
             * Queries the uniform resource locator property of a calendar component object.
             * Free the returned URL with g_free(), when no longer needed.
             * @returns the URL, or %NULL, when none is set
             */
            get_url(): string | null;
            /**
             * Queries the type of a calendar component object.
             * @returns The type of the component, as defined by RFC 2445.
             */
            get_vtype(): ComponentVType;
            /**
             * Checks whether the component has any alarms.
             * @returns TRUE if the component has any alarms.
             */
            has_alarms(): boolean;
            /**
             * Queries the component to see if it has attachments.
             * @returns TRUE if there are attachments, FALSE otherwise.
             */
            has_attachments(): boolean;
            /**
             * Queries a calendar component object for the existence of attendees.
             * @returns TRUE if there are attendees, FALSE if not.
             */
            has_attendees(): boolean;
            /**
             * Queries whether a calendar component object has any exception dates
             * or exception rules.
             * @returns TRUE if the component has exceptions, FALSE otherwise.
             */
            has_exceptions(): boolean;
            /**
             * Queries whether a calendar component object has any exception dates defined
             * for it.
             * @returns TRUE if the component has exception dates, FALSE otherwise.
             */
            has_exdates(): boolean;
            /**
             * Queries whether a calendar component object has any exception rules defined
             * for it.
             * @returns TRUE if the component has exception rules, FALSE otherwise.
             */
            has_exrules(): boolean;
            /**
             * Check whether a calendar component object has an organizer or not.
             * @returns TRUE if there is an organizer, FALSE otherwise.
             */
            has_organizer(): boolean;
            /**
             * Queries whether a calendar component object has any recurrence dates defined
             * for it.
             * @returns TRUE if the component has recurrence dates, FALSE otherwise.
             */
            has_rdates(): boolean;
            /**
             * Queries whether a calendar component object has any recurrence dates or
             * recurrence rules.
             * @returns TRUE if the component has recurrences, FALSE otherwise.
             */
            has_recurrences(): boolean;
            /**
             * Queries whether a calendar component object has any recurrence rules defined
             * for it.
             * @returns TRUE if the component has recurrence rules, FALSE otherwise.
             */
            has_rrules(): boolean;
            /**
             * Checks whether the given calendar component object has simple recurrence
             * rules or more complicated ones.
             * @returns TRUE if it has a simple recurrence rule, FALSE otherwise.
             */
            has_simple_recurrence(): boolean;
            /**
             * Checks whether a calendar component object is an instance of a recurring
             * event.
             * @returns TRUE if it is an instance, FALSE if not.
             */
            is_instance(): boolean;
            /**
             * Removes an alarm subcomponent from a calendar component.  If the alarm that
             * corresponds to the specified `auid` had been fetched with
             * e_cal_component_get_alarm(), then those alarm structures will be invalid; you
             * should get rid of them with e_cal_component_alarm_free() before using this
             * function.
             * @param auid UID of the alarm to remove.
             */
            remove_alarm(auid: string): void;
            /**
             * Remove all alarms from the calendar component
             */
            remove_all_alarms(): void;
            /**
             * Sets the attachments of the calendar component object.
             * @param attachments a #GSList of an #ICalAttach,    or %NULL to remove any existing
             */
            set_attachments(attachments?: ICalGLib.Attach[] | null): void;
            /**
             * Sets the attendees of a calendar component object
             * @param attendee_list Values for attendee    properties, or %NULL to unset
             */
            set_attendees(attendee_list?: ComponentAttendee[] | null): void;
            /**
             * Sets the list of categories for a calendar component.
             * @param categories Comma-separated list of categories.
             */
            set_categories(categories: string): void;
            /**
             * Sets the list of categories of a calendar component object.
             * @param categ_list List of strings, one for each category.
             */
            set_categories_list(categ_list: string[]): void;
            /**
             * Sets the classification property of a calendar component object.  To unset
             * the property, specify E_CAL_COMPONENT_CLASS_NONE for `classif`.
             * @param classif Classification to use.
             */
            set_classification(classif: ComponentClassification | null): void;
            /**
             * Sets the comments of a calendar component object.  The comment property can
             * appear several times inside a calendar component, and so a list of
             * #ECalComponentText structures is used.
             * @param text_list List of #ECalComponentText structures.
             */
            set_comments(text_list: ComponentText[]): void;
            /**
             * Sets the date at which a calendar component object was completed.
             * @param tt Value for the completion date.
             */
            set_completed(tt?: ICalGLib.Time | null): void;
            /**
             * Sets the contact of a calendar component object.  The contact property can
             * appear several times inside a calendar component, and so a list of
             * #ECalComponentText structures is used.
             * @param text_list List of #ECalComponentText structures.
             */
            set_contacts(text_list: ComponentText[]): void;
            /**
             * Sets the date in which a calendar component object is created in the calendar
             * store.  This should only be used inside a calendar store application, i.e.
             * not by calendar user agents.
             * @param tt Value for the creation date.
             */
            set_created(tt?: ICalGLib.Time | null): void;
            /**
             * Sets the description of a calendar component object.  Journal components may
             * have more than one description, and as such this function takes in a list of
             * #ECalComponentText structures.  All other types of components can have
             * at most one description.
             * @param text_list List of #ECalComponentText structures.
             */
            set_descriptions(text_list: ComponentText[]): void;
            /**
             * Sets the date/time end property of a calendar component object.
             * @param dt End date/time, or %NULL, to remove the property.
             */
            set_dtend(dt?: ComponentDateTime | null): void;
            /**
             * Sets the date/timestamp of a calendar component object.  This should be
             * called whenever a calendar user agent makes a change to a component's
             * properties.
             * @param tt Date/timestamp value.
             */
            set_dtstamp(tt: ICalGLib.Time): void;
            /**
             * Sets the date/time start property of a calendar component object.
             * @param dt Start date/time, or %NULL, to remove the property.
             */
            set_dtstart(dt?: ComponentDateTime | null): void;
            /**
             * Sets the due date/time property of a calendar component object.
             * @param dt End date/time, or %NULL, to remove the property.
             */
            set_due(dt?: ComponentDateTime | null): void;
            /**
             * Sets the list of exception dates in a calendar component object.
             * @param exdate_list List of #ECalComponentDateTime structures.
             */
            set_exdates(exdate_list?: ComponentDateTime[] | null): void;
            /**
             * Sets the list of exception rules in a calendar component object.
             * @param recur_list a #GSList    of #ICalRecurrence structures, or %NULL.
             */
            set_exrules(recur_list?: ICalGLib.Recurrence[] | null): void;
            /**
             * Sets the geographic position property on a calendar component object.
             * @param geo Value for the geographic position property, or %NULL to unset.
             */
            set_geo(geo?: ICalGLib.Geo | null): void;
            /**
             * Sets the contents of a calendar component object from an #ICalComponent.
             * If the `comp` already had an #ICalComponent set into it, it will
             * be freed automatically.
             *
             * Supported component types are VEVENT, VTODO, VJOURNAL, VFREEBUSY, and VTIMEZONE.
             * @param icalcomp An #ICalComponent.
             * @returns %TRUE on success, %FALSE if @icalcomp is an unsupported component type.
             */
            set_icalcomponent(icalcomp?: ICalGLib.Component | null): boolean;
            /**
             * Sets the time at which a calendar component object was last stored in the
             * calendar store.  This should not be called by plain calendar user agents.
             * @param tt Value for the last time modified.
             */
            set_last_modified(tt?: ICalGLib.Time | null): void;
            /**
             * Sets the location property of a calendar component object.
             * @param location Location value. Use %NULL or empty string, to unset the property.
             */
            set_location(location?: string | null): void;
            /**
             * Clears any existing component data from a calendar component object and
             * creates a new #ICalComponent of the specified type for it.  The only property
             * that will be set in the new component will be its unique identifier.
             * @param type Type of calendar component to create.
             */
            set_new_vtype(type: ComponentVType | null): void;
            /**
             * Sets the organizer of a calendar component object
             * @param organizer Value for the organizer property, as an #ECalComponentOrganizer
             */
            set_organizer(organizer?: ComponentOrganizer | null): void;
            /**
             * Sets percent complete. The `percent` can be between 0 and 100, inclusive.
             * A special value -1 can be used to remove the percent complete property.
             * @param percent a percent to set, or -1 to remove the property
             */
            set_percent_complete(percent: number): void;
            /**
             * Sets the priority property of a calendar component object.
             * The `priority` can be between 0 and 9, inclusive.
             * A special value -1 can be used to remove the priority property.
             * @param priority Value for the priority property.
             */
            set_priority(priority: number): void;
            /**
             * Sets the list of recurrence dates in a calendar component object.
             * @param rdate_list List of    #ECalComponentPeriod structures, or %NULL to set none
             */
            set_rdates(rdate_list?: ComponentPeriod[] | null): void;
            /**
             * Sets the recurrence id property of a calendar component object.
             * @param recur_id Value for the recurrence id property, or %NULL, to remove the property.
             */
            set_recurid(recur_id?: ComponentRange | null): void;
            /**
             * Sets the list of recurrence rules in a calendar component object.
             * @param recur_list List of #ICalRecurrence structures, or %NULL.
             */
            set_rrules(recur_list?: ICalGLib.Recurrence[] | null): void;
            /**
             * Sets the sequence number of a calendar component object.
             * A special value -1 can be used to remove the sequence number property.
             *
             * Normally this function should not be called, since the sequence number
             * is incremented automatically at the proper times.
             * @param sequence a sequence number to set, or -1 to remove the property
             */
            set_sequence(sequence: number): void;
            /**
             * Sets the status property of a calendar component object.
             * @param status Status value, as an #ICalPropertyStatus. Use %I_CAL_STATUS_NONE, to unset the property
             */
            set_status(status: ICalGLib.PropertyStatus | null): void;
            /**
             * Sets the summary of a calendar component object. The summaries can have each
             * different language, otherwise it's not allowed to have more than one summary property.
             *
             * This does not update any alarm subcomponent description.
             * @param text_list List of #ECalComponentText structures.
             */
            set_summaries(text_list: ComponentText[]): void;
            /**
             * Sets the summary of a calendar component object.
             *
             * This also updates any alarm subcomponent descriptions, if needed.
             * @param summary Summary property and its parameters.
             */
            set_summary(summary: ComponentText): void;
            /**
             * Sets the time transparency of a calendar component object.
             * Use %E_CAL_COMPONENT_TRANSP_NONE to unset the property.
             * @param transp Time transparency value.
             */
            set_transparency(transp: ComponentTransparency | null): void;
            /**
             * Sets the unique identifier string of a calendar component object.
             * @param uid Unique identifier.
             */
            set_uid(uid: string): void;
            /**
             * Sets the uniform resource locator property of a calendar component object.
             * A %NULL or an empty string removes the property.
             * @param url URL value.
             */
            set_url(url?: string | null): void;
            /**
             * Strips all error messages from the calendar component. Those error messages are
             * added to the iCalendar string representation whenever an invalid is used for
             * one of its fields.
             */
            strip_errors(): void;
        }

        module ReminderWatcher {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            interface FormatTime {
                (rd: ReminderData, itt: ICalGLib.Time, inout_buffer: any, buffer_size: number): void;
            }

            interface Triggered {
                (reminders: ReminderData[], snoozed: boolean): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                default_zone: ICalGLib.Timezone;
                defaultZone: ICalGLib.Timezone;
                registry: EDataServer.SourceRegistry;
                timers_enabled: boolean;
                timersEnabled: boolean;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class ReminderWatcher extends GObject.Object {
            static $gtype: GObject.GType<ReminderWatcher>;

            // Properties

            /**
             * An #ICalTimezone to be used as the default time zone.
             */
            get default_zone(): ICalGLib.Timezone;
            set default_zone(val: ICalGLib.Timezone);
            /**
             * An #ICalTimezone to be used as the default time zone.
             */
            get defaultZone(): ICalGLib.Timezone;
            set defaultZone(val: ICalGLib.Timezone);
            /**
             * The #ESourceRegistry which manages #ESource instances.
             */
            get registry(): EDataServer.SourceRegistry;
            /**
             * Whether timers are enabled for the #EReminderWatcher. See
             * e_reminder_watcher_set_timers_enabled() for more information
             * what it means.
             *
             * Default: %TRUE
             */
            get timers_enabled(): boolean;
            set timers_enabled(val: boolean);
            /**
             * Whether timers are enabled for the #EReminderWatcher. See
             * e_reminder_watcher_set_timers_enabled() for more information
             * what it means.
             *
             * Default: %TRUE
             */
            get timersEnabled(): boolean;
            set timersEnabled(val: boolean);

            // Constructors

            constructor(properties?: Partial<ReminderWatcher.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](registry: EDataServer.SourceRegistry): ReminderWatcher;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;
            connect(
                signal: 'format-time',
                callback: (
                    _source: this,
                    rd: ReminderData,
                    itt: ICalGLib.Time,
                    inout_buffer: any,
                    buffer_size: number,
                ) => void,
            ): number;
            connect_after(
                signal: 'format-time',
                callback: (
                    _source: this,
                    rd: ReminderData,
                    itt: ICalGLib.Time,
                    inout_buffer: any,
                    buffer_size: number,
                ) => void,
            ): number;
            emit(
                signal: 'format-time',
                rd: ReminderData,
                itt: ICalGLib.Time,
                inout_buffer: any,
                buffer_size: number,
            ): void;
            connect(
                signal: 'triggered',
                callback: (_source: this, reminders: ReminderData[], snoozed: boolean) => void,
            ): number;
            connect_after(
                signal: 'triggered',
                callback: (_source: this, reminders: ReminderData[], snoozed: boolean) => void,
            ): number;
            emit(signal: 'triggered', reminders: ReminderData[], snoozed: boolean): void;

            // Virtual methods

            vfunc_cal_client_connect(
                source: EDataServer.Source,
                source_type: ClientSourceType,
                wait_for_connected_seconds: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            vfunc_changed(): void;
            vfunc_format_time(rd: ReminderData, itt: ICalGLib.Time, inout_buffer: string, buffer_size: number): void;
            vfunc_schedule_timer(at_time: number): void;

            // Methods

            /**
             * Returns a new string with a text description of the `rd`. The text format
             * can be influenced with `flags`.
             *
             * Free the returned string with g_free(), when no longer needed.
             * @param rd an #EReminderData
             * @param flags bit-or of #EReminderWatcherDescribeFlags
             * @returns a new string with a text description of the @rd.
             */
            describe_data(rd: ReminderData, flags: number): string;
            /**
             * Asynchronously dismiss single reminder in the past or snoozed reminders.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call e_reminder_watcher_dismiss_finish() to get the result of
             * the operation.
             * @param rd an #EReminderData to dismiss
             * @param cancellable optional #GCancellable object, or %NULL
             */
            dismiss(rd: ReminderData, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously dismiss single reminder in the past or snoozed reminders.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call e_reminder_watcher_dismiss_finish() to get the result of
             * the operation.
             * @param rd an #EReminderData to dismiss
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            dismiss(
                rd: ReminderData,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously dismiss single reminder in the past or snoozed reminders.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call e_reminder_watcher_dismiss_finish() to get the result of
             * the operation.
             * @param rd an #EReminderData to dismiss
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            dismiss(
                rd: ReminderData,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Asynchronously dismiss all past reminders.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call e_reminder_watcher_dismiss_all_finish() to get the result
             * of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            dismiss_all(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously dismiss all past reminders.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call e_reminder_watcher_dismiss_all_finish() to get the result
             * of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            dismiss_all(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronously dismiss all past reminders.
             *
             * When the operation is finished, `callback` will be called. You can
             * then call e_reminder_watcher_dismiss_all_finish() to get the result
             * of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            dismiss_all(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_reminder_watcher_dismiss_all().
             * @param result a #GAsyncResult
             * @returns whether succeeded
             */
            dismiss_all_finish(result: Gio.AsyncResult): boolean;
            /**
             * Synchronously dismiss all past reminders. The operation stops after
             * the first error is encountered, which can be before all the past
             * reminders are dismissed.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded.
             */
            dismiss_all_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Finishes the operation started with e_reminder_watcher_dismiss().
             * @param result a #GAsyncResult
             * @returns whether succeeded
             */
            dismiss_finish(result: Gio.AsyncResult): boolean;
            /**
             * Synchronously dismiss single reminder in the past or snoozed reminders.
             * @param rd an #EReminderData to dismiss
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            dismiss_sync(rd: ReminderData, cancellable?: Gio.Cancellable | null): boolean;
            dup_default_zone(): ICalGLib.Timezone;
            /**
             * Gathers a #GSList of all past reminders which had not been removed after
             * EReminderWatcher::triggered signal. Such reminders are remembered
             * across sessions, until they are dismissed by e_reminder_watcher_dismiss()
             * or its synchronous variant. These reminders can be also snoozed
             * with e_reminder_watcher_snooze(), which removes them from the past
             * reminders into the list of snoozed reminders, see e_reminder_watcher_dup_snoozed().
             *
             * Free the returned #GSList with
             * g_slist_free_full (reminders, e_reminder_data_free);
             * when no longer needed.
             * @returns a newly    allocated #GSList of the past reminders, or %NULL, when there are none
             */
            dup_past(): ReminderData[] | null;
            /**
             * Gathers a #GSList of currently snoozed reminder with e_reminder_watcher_snooze().
             * The snoozed reminders are remembered across sessions and they are re-triggered
             * when their snooze time elapses, which can move them back to the list of past reminders.
             *
             * Free the returned #GSList with
             * g_slist_free_full (reminders, e_reminder_data_free);
             * when no longer needed.
             * @returns a newly    allocated #GSList of the snoozed reminders, or %NULL, when there are none
             */
            dup_snoozed(): ReminderData[] | null;
            get_registry(): EDataServer.SourceRegistry;
            get_timers_enabled(): boolean;
            ref_opened_client(source_uid: string): Client | null;
            /**
             * Sets the default zone for the `watcher`. This is used when calculating
             * trigger times for floating component times. When the `zone` is %NULL,
             * then sets a UTC time zone.
             * @param zone an #ICalTimezone
             */
            set_default_zone(zone?: ICalGLib.Timezone | null): void;
            /**
             * The `watcher` can be used both for scheduling the timers for the reminders
             * and respond to them through the "triggered" signal, or only to listen for
             * changes on the past reminders. The default is to have timers enabled, thus
             * to response to scheduled reminders. Disabling the timers also means there
             * will be less resources needed by the `watcher`.
             * @param enabled a value to set
             */
            set_timers_enabled(enabled: boolean): void;
            /**
             * Snoozes `rd` until `until,` which is an absolute time when the `rd`
             * should be retriggered. This moves the `rd` from the list of past
             * reminders into the list of snoozed reminders and invokes the "changed"
             * signal.
             *
             * The `until` can be a special value 0, to set the time as the event start,
             * if it's in the future. The function does nothing when the event time
             * is in the past.
             * @param rd an #EReminderData identifying the reminder
             * @param until time_t as gint64, when the @rd should be retriggered
             */
            snooze(rd: ReminderData, until: number): void;
            /**
             * Notifies the #watcher that the timer previously scheduled
             * with EReminderWatcherClass::schedule_timer elapsed. This can
             * be used by the descendants which override the default implementation
             * of EReminderWatcherClass::schedule_timer. There is always scheduled
             * only one timer and once it's elapsed it should be also removed,
             * the same when the EReminderWatcherClass::schedule_timer is called
             * and the previously scheduled timer was not elapsed yet, the previous
             * should be removed first, aka every call to EReminderWatcherClass::schedule_timer
             * replaces any previously scheduled timer.
             */
            timer_elapsed(): void;
        }

        type ClientClass = typeof Client;
        abstract class ClientPrivate {
            static $gtype: GObject.GType<ClientPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Contains data used as lookup_data of e_cal_client_tzlookup_icalcomp_cb().
         */
        class ClientTzlookupICalCompData {
            static $gtype: GObject.GType<ClientTzlookupICalCompData>;

            // Constructors

            constructor(icomp: ICalGLib.Component);
            _init(...args: any[]): void;

            static ['new'](icomp: ICalGLib.Component): ClientTzlookupICalCompData;

            // Methods

            /**
             * Copies given #ECalClientTzlookupICalCompData structure.
             * When the `lookup_data` is %NULL, simply returns %NULL as well.
             * @returns copy of the @lookup_data. Free the returned structure    with e_cal_client_tzlookup_icalcomp_data_free(), when no longer needed.
             */
            copy(): ClientTzlookupICalCompData | null;
            /**
             * Frees previously allocated #ECalClientTzlookupICalCompData structure
             * with e_cal_client_tzlookup_icalcomp_data_new() or e_cal_client_tzlookup_icalcomp_data_copy().
             * The function does nothing when `lookup_data` is %NULL.
             */
            free(): void;
            get_icalcomponent(): ICalGLib.Component;
        }

        type ClientViewClass = typeof ClientView;
        abstract class ClientViewPrivate {
            static $gtype: GObject.GType<ClientViewPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Opaque structure, which represents alarm subcomponents.
         * Use the functions below to work with it.
         */
        class ComponentAlarm {
            static $gtype: GObject.GType<ComponentAlarm>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): ComponentAlarm;

            static new_from_component(component: ICalGLib.Component): ComponentAlarm;

            // Methods

            /**
             * Returns a newly allocated copy of `alarm,` which should be freed with
             * e_cal_component_alarm_free(), when no longer needed.
             * @returns a newly allocated copy of @alarm
             */
            copy(): ComponentAlarm;
            /**
             * Fills `component` with data from `alarm`. The `component` should
             * be of %I_CAL_VALARM_COMPONENT kind - the function does nothing,
             * if it's not. In case the `alarm` doesn't have set 'uid', a new
             * is assigned.
             * @param component an #ICalComponent of %I_CAL_VALARM_COMPONENT kind
             */
            fill_component(component: ICalGLib.Component): void;
            /**
             * Get the last time the alarm had been acknowledged, that is, when its
             * reminder had been triggered.
             * The returned #ICalTime is owned by `alarm` and should not be modified,
             * neither its content.
             * @returns the @alarm acknowledged time,    or %NULL, when none is set
             */
            get_acknowledged(): ICalGLib.Time | null;
            /**
             * Get the `alarm` action, as an #ECalComponentAlarmAction.
             * @returns the @alarm action, or %E_CAL_COMPONENT_ALARM_NONE, when none is set
             */
            get_action(): ComponentAlarmAction;
            /**
             * Creates a VALARM #ICalComponent filled with data from the `alarm`.
             * In case the `alarm` doesn't have set 'uid', a new is assigned.
             * Free the returned component with g_object_unref(), when no longer
             * needed.
             * @returns a newly created #ICalComponent    of %I_CAL_VALARM_COMPONENT kind
             */
            get_as_component(): ICalGLib.Component;
            /**
             * Get the list of attachments, as #ICalAttach.
             * The returned #GSList is owned by `alarm` and should not be modified,
             * neither its content.
             * @returns the @alarm attachments,    as a #GSList of an #ICalAttach, or %NULL, when none is set
             */
            get_attachments(): ICalGLib.Attach[] | null;
            /**
             * Get the list of attendees, as #ECalComponentAttendee.
             * The returned #GSList is owned by `alarm` and should not be modified,
             * neither its content.
             * @returns the @alarm attendees,    as a #GSList of an #ECalComponentAttendee, or %NULL when, none are set
             */
            get_attendees(): ComponentAttendee[] | null;
            /**
             * Get the `alarm` description, as an #ECalComponentText.
             * @returns the @alarm description, or %NULL, when none is set
             */
            get_description(): ComponentText | null;
            get_property_bag(): ComponentPropertyBag;
            /**
             * Get the `alarm` repeat information, as an ECalComponentAlarmRepeat.
             * @returns the @alarm repeat information,    or %NULL, when none is set
             */
            get_repeat(): ComponentAlarmRepeat | null;
            /**
             * Get the `alarm` summary, as an #ECalComponentText.
             * @returns the @alarm summary, or %NULL, when none is set
             */
            get_summary(): ComponentText | null;
            /**
             * Get the `alarm` trigger, as an #ECalComponentAlarmTrigger.
             * @returns the @alarm trigger, or %NULL when, none is set
             */
            get_trigger(): ComponentAlarmTrigger | null;
            /**
             * Get the `alarm` UID.
             * @returns the @alarm UID, or %NULL, when none is set
             */
            get_uid(): string | null;
            has_attachments(): boolean;
            has_attendees(): boolean;
            /**
             * Set the acknowledged time of the `alarm`. Use %NULL to unset it.
             * @param when an #ICalTime when the @alarm    had been acknowledged, or %NULL to unset
             */
            set_acknowledged(when?: ICalGLib.Time | null): void;
            /**
             * Set the `alarm` action, as an #ECalComponentAlarmAction.
             * @param action an #ECalComponentAlarmAction
             */
            set_action(action: ComponentAlarmAction | null): void;
            /**
             * Set the list of attachments, as a #GSList of an #ICalAttach.
             * @param attachments a #GSList    of an #ICalAttach objects to set as attachments, or %NULL to unset
             */
            set_attachments(attachments?: ICalGLib.Attach[] | null): void;
            /**
             * Set the list of attendees, as a #GSList of an #ECalComponentAttendee.
             * @param attendees a #GSList    of an #ECalComponentAttendee objects to set as attendees, or %NULL to unset
             */
            set_attendees(attendees?: ComponentAttendee[] | null): void;
            /**
             * Set the `alarm` description, as an #ECalComponentText.
             * @param description a description to set, or %NULL to unset
             */
            set_description(description?: ComponentText | null): void;
            /**
             * Fill the `alarm` structure with the information from
             * the `component,` which should be of %I_CAL_VALARM_COMPONENT kind.
             * @param component an #ICalComponent
             */
            set_from_component(component: ICalGLib.Component): void;
            /**
             * Set the `alarm` repeat information, as an #ECalComponentAlarmRepeat.
             * @param repeat a repeat information to set, or %NULL to unset
             */
            set_repeat(repeat?: ComponentAlarmRepeat | null): void;
            /**
             * Set the `alarm` summary, as an #ECalComponentText.
             * @param summary a summary to set, or %NULL to unset
             */
            set_summary(summary?: ComponentText | null): void;
            /**
             * Set the `alarm` trigger, as an #ECalComponentAlarmTrigger.
             * @param trigger a trigger to set, or %NULL to unset
             */
            set_trigger(trigger?: ComponentAlarmTrigger | null): void;
            /**
             * Set the `alarm` UID, or generates a new UID, if `uid` is %NULL or an empty string.
             * @param uid a UID to set, or %NULL or empty string to generate new
             */
            set_uid(uid?: string | null): void;
            /**
             * Set the acknowledged time of the `alarm`. Use %NULL to unset it.
             * The function assumes ownership of the `when`.
             * @param when an #ICalTime when the @alarm    had been acknowledged, or %NULL to unset
             */
            take_acknowledged(when?: ICalGLib.Time | null): void;
        }

        /**
         * Opaque structure, which represents an alarm occurrence, i.e. a instance instance.
         * Use the functions below to work with it.
         */
        class ComponentAlarmInstance {
            static $gtype: GObject.GType<ComponentAlarmInstance>;

            // Constructors

            constructor(uid: string, instance_time: never, occur_start: never, occur_end: never);
            _init(...args: any[]): void;

            static ['new'](
                uid: string,
                instance_time: never,
                occur_start: never,
                occur_end: never,
            ): ComponentAlarmInstance;

            // Methods

            /**
             * Returns a newly allocated copy of `instance,` which should be freed with
             * e_cal_component_alarm_instance_free(), when no longer needed.
             * @returns a newly allocated copy of @instance
             */
            copy(): ComponentAlarmInstance;
            get_component(): any | null;
            get_occur_end(): never;
            get_occur_start(): never;
            get_rid(): string | null;
            get_time(): never;
            get_uid(): string;
            /**
             * Sets `component` as the component associated with the `instance`.
             * It can be %NULL to unset it.
             * @param component an #ECalComponent or %NULL
             */
            set_component(component?: any | null): void;
            /**
             * Set the actual event occurrence end to which this `instance` corresponds.
             * @param occur_end event occurence end to set
             */
            set_occur_end(occur_end: never): void;
            /**
             * Set the actual event occurrence start to which this `instance` corresponds.
             * @param occur_start event occurence start to set
             */
            set_occur_start(occur_start: never): void;
            /**
             * Set the Recurrence ID of the component this `instance` was generated for.
             * @param rid recurrence UID to set, or %NULL
             */
            set_rid(rid?: string | null): void;
            /**
             * Set the instance time, i.e. "5 minutes before the appointment".
             * @param instance_time instance time to set
             */
            set_time(instance_time: never): void;
            /**
             * Set the alarm UID.
             * @param uid alarm UID to set
             */
            set_uid(uid: string): void;
        }

        /**
         * A structure holding whether and how an alarm repeats.
         * Use the functions below to work with it.
         */
        class ComponentAlarmRepeat {
            static $gtype: GObject.GType<ComponentAlarmRepeat>;

            // Constructors

            constructor(repetitions: number, interval: ICalGLib.Duration);
            _init(...args: any[]): void;

            static ['new'](repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat;

            static new_seconds(repetitions: number, interval_seconds: number): ComponentAlarmRepeat;

            // Methods

            copy(): ComponentAlarmRepeat;
            /**
             * Returns the interval between repetitions of the `repeat,` as an #ICalDuration
             * object. This object is owned by `repeat` and should not be freed. It's valid until
             * the `repeat` is not freed or its interval changed with either e_cal_component_alarm_repeat_set_interval()
             * or e_cal_component_alarm_repeat_set_interval_seconds().
             * @returns the interval between repetitions of the @repeat
             */
            get_interval(): ICalGLib.Duration;
            /**
             * Returns the interval between repetitions of the `repeat` in seconds.
             * @returns the interval between repetitions of the @repeat
             */
            get_interval_seconds(): number;
            get_repetitions(): number;
            /**
             * Set the `interval` between repetitions of the `repeat`.
             * @param interval interval between repetitions, as an #ICalDuration
             */
            set_interval(interval: ICalGLib.Duration): void;
            /**
             * Set the `interval_seconds` between repetitions of the `repeat`.
             * @param interval_seconds interval between repetitions, in seconds
             */
            set_interval_seconds(interval_seconds: number): void;
            /**
             * Set the `repetitions` count of the `repeat`.
             * @param repetitions number of repetitions, zero for none
             */
            set_repetitions(repetitions: number): void;
        }

        /**
         * Opaque structure, which represents when an alarm is supposed to be triggered.
         * Use the functions below to work with it.
         */
        class ComponentAlarmTrigger {
            static $gtype: GObject.GType<ComponentAlarmTrigger>;

            // Constructors

            constructor(absolute_time: ICalGLib.Time);
            _init(...args: any[]): void;

            static new_absolute(absolute_time: ICalGLib.Time): ComponentAlarmTrigger;

            static new_from_property(property: ICalGLib.Property): ComponentAlarmTrigger;

            static new_relative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): ComponentAlarmTrigger;

            // Methods

            /**
             * Returns a newly allocated copy of `trigger,` which should be freed with
             * e_cal_component_alarm_trigger_free(), when no longer needed.
             * @returns a newly allocated copy of @trigger
             */
            copy(): ComponentAlarmTrigger;
            /**
             * Fill `property` with information from `trigger`. The `property`
             * should be of kind %I_CAL_TRIGGER_PROPERTY.
             * @param property an #ICalProperty
             */
            fill_property(property: ICalGLib.Property): ICalGLib.Property;
            /**
             * Returns the `trigger` absolute time for an absolute trigger, or %NULL, when
             * the `trigger` is a relative trigger. The object is owned by `trigger` and it's
             * valid until the `trigger` is freed or its absolute time changed.
             * @returns the @trigger absolute time, as an #ICalTime, or %NULL
             */
            get_absolute_time(): ICalGLib.Time | null;
            /**
             * Converts information stored in `trigger` into an #ICalProperty
             * of %I_CAL_TRIGGER_PROPERTY kind. The caller is responsible to free
             * the returned object with g_object_unref(), when no longer needed.
             * @returns a newly created #ICalProperty, containing    information from the @trigger.
             */
            get_as_property(): ICalGLib.Property;
            /**
             * Returns the `trigger` duration for a relative `trigger,` or %NULL, when
             * the `trigger` is an absolute trigger.
             * @returns the @trigger duration, as an #ICalDuration, or %NULL
             */
            get_duration(): ICalGLib.Duration | null;
            get_kind(): ComponentAlarmTriggerKind;
            get_parameter_bag(): ComponentParameterBag;
            /**
             * Set the `trigegr` with the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE kind and
             * the `absolute_time` as the time of the trigger. The `absolute_time`
             * should be date/time (not date) in UTC.
             *
             * To set a relative trigger use e_cal_component_alarm_trigger_set_relative().
             * @param absolute_time the absolute time when to trigger the alarm, as an #ICalTime
             */
            set_absolute(absolute_time: ICalGLib.Time): void;
            /**
             * Sets the `trigger` absolute time for an absolute trigger. The `absolute_time`
             * should be date/time (not date) in UTC.
             *
             * The function does nothing, when the `trigger` is a relative trigger.
             * @param absolute_time absolute time for an absolute trigger, as an #ICalTime
             */
            set_absolute_time(absolute_time: ICalGLib.Time): void;
            /**
             * Sets the `trigger` duration for a relative trigger. The function does nothing, when
             * the `trigger` is an absolute trigger. The object is owned by `trigger` and it's
             * valid until the `trigger` is freed or its relative duration changed.
             * @param duration duration for a relative trigger, as an #ICalDuration
             */
            set_duration(duration: ICalGLib.Duration): void;
            /**
             * Fill the `trigger` structure with the information from
             * the `property,` which should be of %I_CAL_TRIGGER_PROPERTY kind.
             * @param property an #ICalProperty
             */
            set_from_property(property: ICalGLib.Property): void;
            /**
             * Set the `trigger` kind to `kind`. This works only for other than
             * the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE. To change the kind
             * from absolute to relative, or vice versa, use either
             * e_cal_component_alarm_trigger_set_relative() or
             * e_cal_component_alarm_trigger_set_absolute().
             * @param kind the kind to set, one of #ECalComponentAlarmTriggerKind
             */
            set_kind(kind: ComponentAlarmTriggerKind | null): void;
            /**
             * Set the `trigegr` with the given `kind` and `duration`. The `kind` can be any but
             * the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE.
             * To set an absolute trigger use e_cal_component_alarm_trigger_set_absolute().
             * @param kind an #ECalComponentAlarmTriggerKind, any but the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE
             * @param duration the duration relative to @kind, as an #ICalDuration
             */
            set_relative(kind: ComponentAlarmTriggerKind | null, duration: ICalGLib.Duration): void;
        }

        /**
         * Opaque structure, which represents alarm trigger instances for a particular component.
         * Use the functions below to work with it.
         */
        class ComponentAlarms {
            static $gtype: GObject.GType<ComponentAlarms>;

            // Constructors

            constructor(comp?: Component | null);
            _init(...args: any[]): void;

            static ['new'](comp?: Component | null): ComponentAlarms;

            // Methods

            /**
             * Add a copy of `instance` into the list of instances. It is added
             * in no particular order.
             * @param instance an #ECalComponentAlarmInstance
             */
            add_instance(instance: ComponentAlarmInstance): void;
            /**
             * Returns a newly allocated copy of `alarms,` which should be freed with
             * e_cal_component_alarms_free(), when no longer needed.
             * @returns a newly allocated copy of @alarms
             */
            copy(): ComponentAlarms;
            /**
             * The returned component is valid until the `alarms` is freed.
             * @returns an #ECalComponent associated with the @alarms structure, or %NULL
             */
            get_component(): Component | null;
            /**
             * The returned #GSList is owned by `alarms` and should not be modified.
             * It's valid until the `alarms` is freed or the list of instances is not
             * modified by other functions. The items are of type #ECalComponentAlarmInstance.
             * @returns instances    of the @alarms structure; can be %NULL, when none had been added yet
             */
            get_instances(): ComponentAlarmInstance[] | null;
            /**
             * Remove the `instance` from the list of instances. If found, the `instance`
             * is also freed.
             * @param instance an #ECalComponentAlarmInstance
             * @returns whether the @instance had been found and freed
             */
            remove_instance(instance: ComponentAlarmInstance): boolean;
            /**
             * Modifies the list of instances to copy of the given `instances`.
             * @param instances #ECalComponentAlarmInstance objects to set
             */
            set_instances(instances?: ComponentAlarmInstance[] | null): void;
            /**
             * Add the `instance` into the list of instances and assume ownership of it.
             * It is added in no particular order.
             * @param instance an #ECalComponentAlarmInstance
             */
            take_instance(instance: ComponentAlarmInstance): void;
            /**
             * Replaces the list of instances with the given `instances` and
             * assumes ownership of it. Neither the #GSList, nor its items, should
             * contain the same structures.
             * @param instances #ECalComponentAlarmInstance objects to take
             */
            take_instances(instances?: ComponentAlarmInstance[] | null): void;
        }

        /**
         * Describes an attendee. Use the functions below to work with it.
         */
        class ComponentAttendee {
            static $gtype: GObject.GType<ComponentAttendee>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): ComponentAttendee;

            static new_from_property(property: ICalGLib.Property): ComponentAttendee;

            static new_full(
                value: string | null,
                member: string | null,
                cutype: ICalGLib.ParameterCutype,
                role: ICalGLib.ParameterRole,
                partstat: ICalGLib.ParameterPartstat,
                rsvp: boolean,
                delegatedfrom?: string | null,
                delegatedto?: string | null,
                sentby?: string | null,
                cn?: string | null,
                language?: string | null,
            ): ComponentAttendee;

            // Methods

            /**
             * Returns a newly allocated copy of `attendee,` which should be freed with
             * e_cal_component_attendee_free(), when no longer needed.
             * @returns a newly allocated copy of @attendee
             */
            copy(): ComponentAttendee;
            /**
             * Fill `property` with information from `attendee`. The `property`
             * should be of kind %I_CAL_ATTENDEE_PROPERTY.
             * @param property an #ICalProperty
             */
            fill_property(property: ICalGLib.Property): ICalGLib.Property;
            /**
             * Converts information stored in `attendee` into an #ICalProperty
             * of %I_CAL_ATTENDEE_PROPERTY kind. The caller is responsible to free
             * the returned object with g_object_unref(), when no longer needed.
             * @returns a newly created #ICalProperty, containing    information from the @attendee.
             */
            get_as_property(): ICalGLib.Property;
            get_cn(): string | null;
            get_cutype(): ICalGLib.ParameterCutype;
            get_delegatedfrom(): string | null;
            get_delegatedto(): string | null;
            get_language(): string | null;
            get_member(): string | null;
            get_parameter_bag(): ComponentParameterBag;
            get_partstat(): ICalGLib.ParameterPartstat;
            get_role(): ICalGLib.ParameterRole;
            get_rsvp(): boolean;
            get_sentby(): string | null;
            get_value(): string | null;
            /**
             * Set the `attendee` common name (cn) parameter. The %NULL
             * and empty strings are treated as unset the value.
             * @param cn the value to set
             */
            set_cn(cn?: string | null): void;
            /**
             * Set the `attendee` type, as an #ICalParameterCutype.
             * @param cutype the value to set, as an #ICalParameterCutype
             */
            set_cutype(cutype: ICalGLib.ParameterCutype | null): void;
            /**
             * Set the `attendee` delegatedfrom parameter. The %NULL
             * and empty strings are treated as unset the value.
             * @param delegatedfrom the value to set
             */
            set_delegatedfrom(delegatedfrom?: string | null): void;
            /**
             * Set the `attendee` delegatedto parameter. The %NULL
             * and empty strings are treated as unset the value.
             * @param delegatedto the value to set
             */
            set_delegatedto(delegatedto?: string | null): void;
            /**
             * Fill the `attendee` structure with the information from
             * the `property,` which should be of %I_CAL_ATTENDEE_PROPERTY kind.
             * @param property an #ICalProperty
             */
            set_from_property(property: ICalGLib.Property): void;
            /**
             * Set the `attendee` language parameter. The %NULL
             * and empty strings are treated as unset the value.
             * @param language the value to set
             */
            set_language(language?: string | null): void;
            /**
             * Set the `attendee` member parameter. The %NULL
             * and empty strings are treated as unset the value.
             * @param member the value to set
             */
            set_member(member?: string | null): void;
            /**
             * Set the `attendee` status, as an #ICalParameterPartstat.
             * @param partstat the value to set, as an #ICalParameterPartstat
             */
            set_partstat(partstat: ICalGLib.ParameterPartstat | null): void;
            /**
             * Set the `attendee` role, as an #ICalParameterRole.
             * @param role the value to set, as an #ICalParameterRole
             */
            set_role(role: ICalGLib.ParameterRole | null): void;
            /**
             * Set the `attendee` RSVP.
             * @param rsvp the value to set
             */
            set_rsvp(rsvp: boolean): void;
            /**
             * Set the `attendee` sentby parameter. The %NULL
             * and empty strings are treated as unset the value.
             * @param sentby the value to set
             */
            set_sentby(sentby?: string | null): void;
            /**
             * Set the `attendee` URI, usually of "mailto:email" form. The %NULL
             * and empty strings are treated as unset the value.
             * @param value the value to set
             */
            set_value(value?: string | null): void;
        }

        type ComponentClass = typeof Component;
        /**
         * An opaque structure containing an #ICalTime describing
         * the date/time value and also its TZID parameter. Use the functions
         * below to work with it.
         */
        class ComponentDateTime {
            static $gtype: GObject.GType<ComponentDateTime>;

            // Constructors

            constructor(value: ICalGLib.Time, tzid?: string | null);
            _init(...args: any[]): void;

            static ['new'](value: ICalGLib.Time, tzid?: string | null): ComponentDateTime;

            static new_take(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime;

            // Methods

            /**
             * Creates a new copy of `dt`. The returned structure should be freed
             * with e_cal_component_datetime_free() when no longer needed.
             * @returns a new #ECalComponentDateTime, copy of @dt
             */
            copy(): ComponentDateTime;
            /**
             * Returns the TZID stored with the `dt`. The string is owned by `dt` and
             * it's valid until the `dt` is freed or its TZID overwritten. It never
             * returns an empty string, it returns either set TZID parameter value
             * or %NULL, when none is set.
             * @returns a TZID of @dt, or %NULL
             */
            get_tzid(): string | null;
            /**
             * Returns the value stored with the `dt`. The object is owned by `dt` and
             * it's valid until the `dt` is freed or its value overwritten.
             * @returns a value of @dt, as an #ICalTime
             */
            get_value(): ICalGLib.Time;
            /**
             * Sets both `value` and `tzid` in one call. Use e_cal_component_datetime_set_value()
             * and e_cal_component_datetime_set_tzid() to set them separately.
             * @param value an #ICalTime as a value
             * @param tzid timezone ID for the @value, or %NULL
             */
            set(value: ICalGLib.Time, tzid?: string | null): void;
            /**
             * Sets the `tzid` of the `dt`. Any previously set TZID is freed.
             * An empty string or a %NULL as `tzid` is treated as none TZID.
             * @param tzid the TZID to set, or %NULL
             */
            set_tzid(tzid?: string | null): void;
            /**
             * Sets the `value` of the `dt`. Any previously set value is freed.
             * @param value the value to set, as an #ICalTime
             */
            set_value(value: ICalGLib.Time): void;
            /**
             * Sets the `tzid` of the `dt` and assumes ownership of `tzid`. Any previously
             * set TZID is freed. An empty string or a %NULL as `tzid` is treated as none TZID.
             * @param tzid the TZID to take, or %NULL
             */
            take_tzid(tzid?: string | null): void;
            /**
             * Sets the `value` of the `dt` and assumes ownership of the `value`.
             * Any previously set value is freed.
             * @param value the value to take, as an #ICalTime
             */
            take_value(value: ICalGLib.Time): void;
        }

        /**
         * An opaque structure containing UID of a component and
         * its recurrence ID (which can be %NULL). Use the functions
         * below to work with it.
         */
        class ComponentId {
            static $gtype: GObject.GType<ComponentId>;

            // Constructors

            constructor(uid: string, rid?: string | null);
            _init(...args: any[]): void;

            static ['new'](uid: string, rid?: string | null): ComponentId;

            static new_take(uid: string, rid?: string | null): ComponentId;

            // Methods

            /**
             * Returns a newly allocated copy of `id,` which should be freed with
             * e_cal_component_id_free().
             * @returns a newly allocated copy of @id
             */
            copy(): ComponentId;
            /**
             * Compares two #ECalComponentId structs for equality.
             * @param id2 the second #ECalComponentId
             * @returns %TRUE if @id1 and @id2 are equal
             */
            equal(id2: ComponentId): boolean;
            get_rid(): string | null;
            get_uid(): string;
            /**
             * Generates a hash value for `id`.
             * @returns a hash value for @id
             */
            hash(): number;
            /**
             * Sets the RECURRENCE-ID part of the `id`. The `rid` can be %NULL
             * or an empty string, where both are treated as %NULL, which
             * means the `id` has not RECURRENCE-ID.
             * @param rid the RECURRENCE-ID to set
             */
            set_rid(rid?: string | null): void;
            /**
             * Sets the UID part of the `id`.
             * @param uid the UID to set
             */
            set_uid(uid: string): void;
        }

        /**
         * Describes an organizer. Use the functions below to work with it.
         */
        class ComponentOrganizer {
            static $gtype: GObject.GType<ComponentOrganizer>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): ComponentOrganizer;

            static new_from_property(property: ICalGLib.Property): ComponentOrganizer;

            static new_full(
                value?: string | null,
                sentby?: string | null,
                cn?: string | null,
                language?: string | null,
            ): ComponentOrganizer;

            // Methods

            /**
             * Returns a newly allocated copy of `organizer,` which should be freed with
             * e_cal_component_organizer_free(), when no longer needed.
             * @returns a newly allocated copy of @organizer
             */
            copy(): ComponentOrganizer;
            /**
             * Fill `property` with information from `organizer`. The `property`
             * should be of kind %I_CAL_ORGANIZER_PROPERTY.
             * @param property an #ICalProperty
             */
            fill_property(property: ICalGLib.Property): ICalGLib.Property;
            /**
             * Converts information stored in `organizer` into an #ICalProperty
             * of %I_CAL_ORGANIZER_PROPERTY kind. The caller is responsible to free
             * the returned object with g_object_unref(), when no longer needed.
             * @returns a newly created #ICalProperty, containing    information from the @organizer.
             */
            get_as_property(): ICalGLib.Property;
            get_cn(): string | null;
            get_language(): string | null;
            get_parameter_bag(): ComponentParameterBag;
            get_sentby(): string | null;
            get_value(): string | null;
            /**
             * Set the `organizer` common name (cn) parameter. The %NULL
             * and empty strings are treated as unset the value.
             * @param cn the value to set
             */
            set_cn(cn?: string | null): void;
            /**
             * Fill the `organizer` structure with the information from
             * the `property,` which should be of %I_CAL_ORGANIZER_PROPERTY kind.
             * @param property an #ICalProperty
             */
            set_from_property(property: ICalGLib.Property): void;
            /**
             * Set the `organizer` language parameter. The %NULL
             * and empty strings are treated as unset the value.
             * @param language the value to set
             */
            set_language(language?: string | null): void;
            /**
             * Set the `organizer` sentby parameter. The %NULL
             * and empty strings are treated as unset the value.
             * @param sentby the value to set
             */
            set_sentby(sentby?: string | null): void;
            /**
             * Set the `organizer` URI, usually of "mailto:email" form. The %NULL
             * and empty strings are treated as unset the value.
             * @param value the value to set
             */
            set_value(value?: string | null): void;
        }

        /**
         * Opaque structure, which represents a bad (list) of #ICalParameter objects.
         * Use the functions below to work with it.
         */
        class ComponentParameterBag {
            static $gtype: GObject.GType<ComponentParameterBag>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): ComponentParameterBag;

            static new_from_property(
                property: ICalGLib.Property,
                func?: ComponentParameterBagFilterFunc | null,
            ): ComponentParameterBag;

            // Methods

            /**
             * Adds a copy of the `param` into the `bag`.
             * @param param an #ICalParameter
             */
            add(param: ICalGLib.Parameter): void;
            /**
             * Assigns content of the `src_bag` into the `bag`.
             * @param src_bag a source #ECalComponentParameterBag
             */
            assign(src_bag: ComponentParameterBag): void;
            /**
             * Removes all parameters from the `bag,` thus it doesn't contain any
             * parameter after this function returns.
             */
            clear(): void;
            /**
             * Returns a newly allocated copy of `bag,` which should be freed with
             * e_cal_component_parameter_bag_free(), when no longer needed.
             * @returns a newly allocated copy of @bag
             */
            copy(): ComponentParameterBag;
            /**
             * Adds all the stored parameters in the `bag` to the `property`.
             * The function replaces any existing parameter with the new value,
             * if any such exists. Otherwise the parameter is added.
             * @param property an #ICalProperty
             */
            fill_property(property: ICalGLib.Property): void;
            /**
             * Returns the #ICalParameter at the given `index`. If the `index` is
             * out of bounds (not lower than e_cal_component_parameter_bag_get_count()),
             * then %NULL is returned.
             *
             * The returned parameter is owned by the `bag` and should not be freed
             * by the caller.
             * @param index an index of the parameter to get
             * @returns the #ICalParameter at the given @index,    or %NULL on error
             */
            get(index: number): ICalGLib.Parameter | null;
            get_count(): number;
            get_first_by_kind(kind: ICalGLib.ParameterKind | null): number;
            /**
             * Removes the #ICalParameter at the given `index`. If the `index` is
             * out of bounds (not lower than e_cal_component_parameter_bag_get_count()),
             * then the function does nothing.
             * @param index an index of the parameter to remove
             */
            remove(index: number): void;
            /**
             * Removes the first or all (depending on the `all)` parameters of the given `kind`.
             * @param kind an #ICalParameterKind to remove
             * @param all %TRUE to remove all parameters of the @kind, or %FALSE to only the first
             * @returns how many parameters had been removed
             */
            remove_by_kind(kind: ICalGLib.ParameterKind | null, all: boolean): number;
            /**
             * Fills the `bag` with parameters from the `property,` for which the `func`
             * returned %TRUE. When the `func` is %NULL, all the parameters are included.
             * The `bag` content is cleared before any parameter is added.
             * @param property an #ICalProperty containing the parameters to fill the @bag with
             * @param func an optional %ECalComponentParameterBagFilterFunc callback
             */
            set_from_property(property: ICalGLib.Property, func?: ComponentParameterBagFilterFunc | null): void;
            /**
             * Adds the `param` into the `bag` and assumes ownership of the `param`.
             * @param param an #ICalParameter
             */
            take(param: ICalGLib.Parameter): void;
        }

        /**
         * Period of time, can have explicit start/end times or start/duration instead.
         * Use the functions below to work with it.
         */
        class ComponentPeriod {
            static $gtype: GObject.GType<ComponentPeriod>;

            // Constructors

            constructor(start: ICalGLib.Time, end?: ICalGLib.Time | null);
            _init(...args: any[]): void;

            static new_datetime(start: ICalGLib.Time, end?: ICalGLib.Time | null): ComponentPeriod;

            static new_duration(start: ICalGLib.Time, duration: ICalGLib.Duration): ComponentPeriod;

            // Methods

            copy(): ComponentPeriod;
            /**
             * Returns the duration of the `period`. This can be called only on `period`
             * objects of kind %E_CAL_COMPONENT_PERIOD_DURATION.
             * The returned #ICalDuration object is owned by `period` and should not
             * be freed. It's valid until the `period` is freed or its duration changed.
             * @returns the duration of the period, as an #ICalDuration
             */
            get_duration(): ICalGLib.Duration;
            /**
             * Returns the end of the `period`. This can be called only on `period`
             * objects of kind %E_CAL_COMPONENT_PERIOD_DATETIME. The end time can
             * be a null-time, in which case the `period` corresponds to a single
             * date/date-time value, not to a period.
             *
             * The returned #ICalTime object is owned by `period` and should not
             * be freed. It's valid until the `period` is freed or its end time changed.
             * @returns the end of the period, as an #ICalTime
             */
            get_end(): ICalGLib.Time | null;
            /**
             * Returns kind of the `period,` one of #ECalComponentPeriodKind. Depending
             * on it either e_cal_component_period_get_end()/e_cal_component_period_set_end()
             * or e_cal_component_period_get_duration()/e_cal_component_period_set_duration()
             * can be used. The kind of an existing `period` canbe changed with
             * e_cal_component_period_set_datetime_full() and e_cal_component_period_set_duration_full().
             * @returns kind of the period, one of #ECalComponentPeriodKind
             */
            get_kind(): ComponentPeriodKind;
            /**
             * Returns the start of the `period`. The returned #ICalTime object
             * is owned by `period` and should not be freed. It's valid until the `period`
             * is freed or its start time changed.
             * @returns the start of the @period, as an #ICalTime
             */
            get_start(): ICalGLib.Time;
            /**
             * Set the kind of `period` to be %E_CAL_COMPONENT_PERIOD_DATETIME
             * and fills the content with `start` and `end`.
             * @param start an #ICalTime, the start of the @period
             * @param end an #ICalTime, the end of the @period
             */
            set_datetime_full(start: ICalGLib.Time, end?: ICalGLib.Time | null): void;
            /**
             * Set the duration of the `period`. This can be called only on `period`
             * objects of kind %E_CAL_COMPONENT_PERIOD_DURATION.
             * @param duration an #ICalDuration, the duration of the @period
             */
            set_duration(duration: ICalGLib.Duration): void;
            /**
             * Set the kind of `period` to be %E_CAL_COMPONENT_PERIOD_DURATION
             * and fills the content with `start` and `duration`.
             * @param start an #ICalTime, the start of the @period
             * @param duration an #ICalDuration, the duration of the @period
             */
            set_duration_full(start: ICalGLib.Time, duration: ICalGLib.Duration): void;
            /**
             * Set the end of the `period`. This can be called only on `period`
             * objects of kind %E_CAL_COMPONENT_PERIOD_DATETIME.
             * @param end an #ICalTime, the end of the @period
             */
            set_end(end?: ICalGLib.Time | null): void;
            /**
             * Set the `start` of the `period`. This can be called on any kind of the `period`.
             * @param start an #ICalTime, the start of the @period
             */
            set_start(start: ICalGLib.Time): void;
        }

        abstract class ComponentPrivate {
            static $gtype: GObject.GType<ComponentPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Opaque structure, which represents a bad (list) of #ICalProperty objects.
         * Use the functions below to work with it.
         */
        class ComponentPropertyBag {
            static $gtype: GObject.GType<ComponentPropertyBag>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): ComponentPropertyBag;

            static new_from_component(
                component: ICalGLib.Component,
                func?: ComponentPropertyBagFilterFunc | null,
            ): ComponentPropertyBag;

            // Methods

            /**
             * Adds a copy of the `prop` into the `bag`.
             * @param prop an #ICalProperty
             */
            add(prop: ICalGLib.Property): void;
            /**
             * Assigns content of the `src_bag` into the `bag`.
             * @param src_bag a source #ECalComponentPropertyBag
             */
            assign(src_bag: ComponentPropertyBag): void;
            /**
             * Removes all properties from the `bag,` thus it doesn't contain any
             * property after this function returns.
             */
            clear(): void;
            /**
             * Returns a newly allocated copy of `bag,` which should be freed with
             * e_cal_component_property_bag_free(), when no longer needed.
             * @returns a newly allocated copy of @bag
             */
            copy(): ComponentPropertyBag;
            /**
             * Adds all the stored properties in the `bag` to the `component`.
             * The function doesn't verify whether the `component` contains
             * the same property already.
             * @param component an #ICalComponent
             */
            fill_component(component: ICalGLib.Component): void;
            /**
             * Returns the #ICalProperty at the given `index`. If the `index` is
             * out of bounds (not lower than e_cal_component_property_bag_get_count()),
             * then %NULL is returned.
             *
             * The returned property is owned by the `bag` and should not be freed
             * by the caller.
             * @param index an index of the property to get
             * @returns the #ICalProperty at the given @index,    or %NULL on error
             */
            get(index: number): ICalGLib.Property | null;
            get_count(): number;
            get_first_by_kind(kind: ICalGLib.PropertyKind | null): number;
            /**
             * Removes the #ICalProperty at the given `index`. If the `index` is
             * out of bounds (not lower than e_cal_component_property_bag_get_count()),
             * then the function does nothing.
             * @param index an index of the property to remove
             */
            remove(index: number): void;
            /**
             * Removes the first or all (depending on the `all)` properties of the given `kind`.
             * @param kind an #ICalPropertyKind to remove
             * @param all %TRUE to remove all properties of the @kind, or %FALSE to only the first
             * @returns how many properties had been removed
             */
            remove_by_kind(kind: ICalGLib.PropertyKind | null, all: boolean): number;
            /**
             * Fills the `bag` with properties from the `component,` for which the `func`
             * returned %TRUE. When the `func` is %NULL, all the properties are included.
             * The `bag` content is cleared before any property is added.
             * @param component an #ICalComponent containing the properties to fill the @bag with
             * @param func an optional %ECalComponentPropertyBagFilterFunc callback
             */
            set_from_component(component: ICalGLib.Component, func?: ComponentPropertyBagFilterFunc | null): void;
            /**
             * Adds the `prop` into the `bag` and assumes ownership of the `prop`.
             * @param prop an #ICalProperty
             */
            take(prop: ICalGLib.Property): void;
        }

        /**
         * Describes a range. Use the functions below to work with it.
         */
        class ComponentRange {
            static $gtype: GObject.GType<ComponentRange>;

            // Constructors

            constructor(kind: ComponentRangeKind, datetime: ComponentDateTime);
            _init(...args: any[]): void;

            static ['new'](kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange;

            // Methods

            copy(): ComponentRange;
            /**
             * Returns the date/time of the `range`. The returned #ECalComponentDateTime
             * is owned by `range` and should not be freed. It's valid until the `range`
             * is freed or its date/time changed.
             * @returns the date/time of the @range, as an #ECalComponentDateTime
             */
            get_datetime(): ComponentDateTime;
            get_kind(): ComponentRangeKind;
            /**
             * Set the date/time part of the `range`.
             * @param datetime an #ECalComponentDateTime
             */
            set_datetime(datetime: ComponentDateTime): void;
            /**
             * Set the `kind` of the `range`.
             * @param kind an #ECalComponentRangeKind
             */
            set_kind(kind: ComponentRangeKind | null): void;
        }

        /**
         * Contains description string and an alternate representation URI
         * for text properties. Use the functions below to work with it.
         */
        class ComponentText {
            static $gtype: GObject.GType<ComponentText>;

            // Constructors

            constructor(value?: string | null, altrep?: string | null);
            _init(...args: any[]): void;

            static ['new'](value?: string | null, altrep?: string | null): ComponentText;

            static new_from_property(property: ICalGLib.Property): ComponentText;

            // Methods

            copy(): ComponentText;
            /**
             * Fills the `property` with the content of the `text`.
             * @param property an #ICalProperty
             */
            fill_property(property: ICalGLib.Property): void;
            get_altrep(): string;
            get_language(): string;
            get_value(): string;
            /**
             * Set the `altrep` as the alternate representation URI of the `text`.
             * @param altrep alternate representation URI to set
             */
            set_altrep(altrep?: string | null): void;
            /**
             * Fill the `text` structure with the information from the `property`.
             * The `property` should hold a text value.
             * @param property an #ICalProperty
             */
            set_from_property(property: ICalGLib.Property): void;
            /**
             * Set the `language` as the language of the `text`. The language tag
             * is defined in RFC 5646. For example `en-US`, not `en_US`.
             * @param language language of the @text
             */
            set_language(language?: string | null): void;
            /**
             * Set the `value` as the description string of the `text`.
             * @param value description string to set
             */
            set_value(value?: string | null): void;
        }

        /**
         * Contains data related to single reminder occurrence.
         */
        class ReminderData {
            static $gtype: GObject.GType<ReminderData>;

            // Constructors

            constructor(source_uid: string, component: Component, instance: ComponentAlarmInstance);
            _init(...args: any[]): void;

            static ['new'](source_uid: string, component: Component, instance: ComponentAlarmInstance): ReminderData;

            // Methods

            /**
             * Copies given #EReminderData structure. When the `rd` is %NULL, simply returns %NULL as well.
             * @returns copy of @rd. Free the returned    structure with e_reminder_data_free() when no longer needed.
             */
            copy(): ReminderData | null;
            /**
             * Frees previously allocated #EReminderData structure with e_reminder_data_new()
             * or e_reminder_data_copy(). The function does nothing when `rd` is %NULL.
             */
            free(): void;
            get_component(): Component;
            get_instance(): ComponentAlarmInstance;
            get_source_uid(): string;
            /**
             * Set an #ECalComponent `component` as associated with this `rd`.
             * The `rd` creates a copy of the `component`.
             * @param component an #ECalComponent
             */
            set_component(component: Component): void;
            /**
             * Set an #ECalComponentAlarmInstance `instance` as associated with this `rd`.
             * The `rd` creates a copy of the `instance`.
             * @param instance an #ECalComponentAlarmInstance
             */
            set_instance(instance: ComponentAlarmInstance): void;
            /**
             * Set an #ESource UID for `rd`.
             * @param source_uid an #ESource UID
             */
            set_source_uid(source_uid: string): void;
        }

        type ReminderWatcherClass = typeof ReminderWatcher;
        abstract class ReminderWatcherPrivate {
            static $gtype: GObject.GType<ReminderWatcherPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TimezoneCacheInterface = typeof TimezoneCache;
        module TimezoneCache {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface TimezoneCacheNamespace {
            $gtype: GObject.GType<TimezoneCache>;
            prototype: TimezoneCache;
        }
        interface TimezoneCache extends GObject.Object {
            // Methods

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
            /**
             * Obtains an #ICalTimezone by its TZID string.  If no match is found,
             * the function returns %NULL.  The returned #ICalTimezone is owned by
             * the `cache` and should not be modified or freed.
             * @param tzid the TZID of a timezone
             * @returns an #ICalTimezone, or %NULL
             */
            get_timezone(tzid: string): ICalGLib.Timezone | null;
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

            // Virtual methods

            vfunc_timezone_added(zone: ICalGLib.Timezone): void;
            vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void;
        }

        export const TimezoneCache: TimezoneCacheNamespace & {
            new (): TimezoneCache; // This allows `obj instanceof TimezoneCache`
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

    export default ECal;
}

declare module 'gi://ECal' {
    import ECal20 from 'gi://ECal?version=2.0';
    export default ECal20;
}
// END
