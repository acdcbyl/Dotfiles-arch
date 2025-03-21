/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AstalNotifd?version=0.1' {
    // Module dependencies
    import type GLib from 'gi://GLib?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';

    export namespace AstalNotifd {
        /**
         * AstalNotifd-0.1
         */

        export namespace ClosedReason {
            export const $gtype: GObject.GType<ClosedReason>;
        }

        enum ClosedReason {
            EXPIRED,
            DISMISSED_BY_USER,
            CLOSED,
            UNDEFINED,
        }

        export namespace Urgency {
            export const $gtype: GObject.GType<Urgency>;
        }

        enum Urgency {
            LOW,
            NORMAL,
            CRITICAL,
        }
        const MAJOR_VERSION: number;
        const MINOR_VERSION: number;
        const MICRO_VERSION: number;
        const VERSION: string;
        function get_default(): Notifd;
        module Notifd {
            // Signal callback interfaces

            interface Notified {
                (id: number, replaced: boolean): void;
            }

            interface Resolved {
                (id: number, reason: ClosedReason): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                ignore_timeout: boolean;
                ignoreTimeout: boolean;
                dont_disturb: boolean;
                dontDisturb: boolean;
                notifications: Notification[];
            }
        }

        /**
         * The Notification daemon.
         * This class queues up to become the next daemon, while acting as a proxy in the meantime.
         */
        class Notifd extends GObject.Object {
            static $gtype: GObject.GType<Notifd>;

            // Properties

            /**
             * Ignore the timeout specified by incoming notifications.
             * By default notifications can specify a timeout in milliseconds after which the daemon will resolve them even without user input.
             */
            get ignore_timeout(): boolean;
            set ignore_timeout(val: boolean);
            /**
             * Ignore the timeout specified by incoming notifications.
             * By default notifications can specify a timeout in milliseconds after which the daemon will resolve them even without user input.
             */
            get ignoreTimeout(): boolean;
            set ignoreTimeout(val: boolean);
            /**
             * Indicate to frontends to not show popups to the user.
             * This property does not have any effect on its own, its merely a value to use between the daemon process and proxies for frontends to use.
             */
            get dont_disturb(): boolean;
            set dont_disturb(val: boolean);
            /**
             * Indicate to frontends to not show popups to the user.
             * This property does not have any effect on its own, its merely a value to use between the daemon process and proxies for frontends to use.
             */
            get dontDisturb(): boolean;
            set dontDisturb(val: boolean);
            /**
             * List of currently unresolved notifications.
             */
            get notifications(): Notification[];

            // Constructors

            constructor(properties?: Partial<Notifd.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Notifd;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'notified', callback: (_source: this, id: number, replaced: boolean) => void): number;
            connect_after(signal: 'notified', callback: (_source: this, id: number, replaced: boolean) => void): number;
            emit(signal: 'notified', id: number, replaced: boolean): void;
            connect(signal: 'resolved', callback: (_source: this, id: number, reason: ClosedReason) => void): number;
            connect_after(
                signal: 'resolved',
                callback: (_source: this, id: number, reason: ClosedReason) => void,
            ): number;
            emit(signal: 'resolved', id: number, reason: ClosedReason): void;

            // Static methods

            /**
             * Get the singleton instance
             */
            static get_default(): Notifd;

            // Methods

            /**
             * Gets the [class`AstalNotifd`.Notification] with id or null if there is no such Notification.
             * @param id
             */
            get_notification(id: number): Notification;
            get_ignore_timeout(): boolean;
            set_ignore_timeout(value: boolean): void;
            get_dont_disturb(): boolean;
            set_dont_disturb(value: boolean): void;
            get_notifications(): Notification[];
        }

        module Notification {
            // Signal callback interfaces

            interface Resolved {
                (reason: ClosedReason): void;
            }

            interface Invoked {
                (action_id: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                time: number;
                app_name: string;
                appName: string;
                app_icon: string;
                appIcon: string;
                summary: string;
                body: string;
                id: number;
                expire_timeout: number;
                expireTimeout: number;
                actions: Action[];
                image: string;
                action_icons: boolean;
                actionIcons: boolean;
                category: string;
                desktop_entry: string;
                desktopEntry: string;
                resident: boolean;
                sound_file: string;
                soundFile: string;
                sound_name: string;
                soundName: string;
                suppress_sound: boolean;
                suppressSound: boolean;
                transient: boolean;
                x: number;
                y: number;
                urgency: Urgency;
            }
        }

        /**
         * Class representing a notification.
         */
        class Notification extends GObject.Object {
            static $gtype: GObject.GType<Notification>;

            // Properties

            /**
             * Unix time of when the notification was sent.
             */
            get time(): number;
            set time(val: number);
            /**
             * Name of the sending application.
             */
            get app_name(): string;
            set app_name(val: string);
            /**
             * Name of the sending application.
             */
            get appName(): string;
            set appName(val: string);
            /**
             * Icon name of the sending application.
             */
            get app_icon(): string;
            set app_icon(val: string);
            /**
             * Icon name of the sending application.
             */
            get appIcon(): string;
            set appIcon(val: string);
            /**
             * Single line overview of the notification.
             */
            get summary(): string;
            set summary(val: string);
            /**
             * Multi-line body of text, where each line is a paragraph. May contain markup.
             */
            get body(): string;
            set body(val: string);
            /**
             * Id of the notification.
             */
            get id(): number;
            set id(val: number);
            /**
             * Time in milliseconds after the notification expires.
             */
            get expire_timeout(): number;
            set expire_timeout(val: number);
            /**
             * Time in milliseconds after the notification expires.
             */
            get expireTimeout(): number;
            set expireTimeout(val: number);
            /**
             * List of [struct`AstalNotifd`.Action] of the notification.
             * Can be invoked by calling [method`AstalNotifd`.Notification.invoke] with the action's id.
             */
            get actions(): Action[];
            /**
             * Path of an image
             */
            get image(): string;
            /**
             * Indicates whether [struct`AstalNotifd`.Action] identifier should be interpreted as a named icon.
             */
            get action_icons(): boolean;
            /**
             * Indicates whether [struct`AstalNotifd`.Action] identifier should be interpreted as a named icon.
             */
            get actionIcons(): boolean;
            /**
             * [](https://specifications.freedesktop.org/notification-spec/latest/categories.html)
             */
            get category(): string;
            /**
             * Specifies the name of the desktop filename representing the calling program.
             */
            get desktop_entry(): string;
            /**
             * Specifies the name of the desktop filename representing the calling program.
             */
            get desktopEntry(): string;
            /**
             * Indicates whether notification is kept after action invocation.
             */
            get resident(): boolean;
            /**
             * The path to a sound file to play when the notification pops up.
             */
            get sound_file(): string;
            /**
             * The path to a sound file to play when the notification pops up.
             */
            get soundFile(): string;
            /**
             * A themeable named sound from to play when the notification pops up
             */
            get sound_name(): string;
            /**
             * A themeable named sound from to play when the notification pops up
             */
            get soundName(): string;
            /**
             * Indicates to suppress playing any sounds.
             */
            get suppress_sound(): boolean;
            /**
             * Indicates to suppress playing any sounds.
             */
            get suppressSound(): boolean;
            /**
             * Indicates that the notification should be excluded from persistency.
             */
            get transient(): boolean;
            /**
             * Specifies the X location on the screen that the notification should point to. The "y" hint must also be specified.
             */
            get x(): number;
            /**
             * Specifies the Y location on the screen that the notification should point to. The "x" hint must also be specified.
             */
            get y(): number;
            /**
             * [enum`AstalNotifd`.Urgency] level of the notification.
             */
            get urgency(): Urgency;

            // Constructors

            constructor(properties?: Partial<Notification.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'resolved', callback: (_source: this, reason: ClosedReason) => void): number;
            connect_after(signal: 'resolved', callback: (_source: this, reason: ClosedReason) => void): number;
            emit(signal: 'resolved', reason: ClosedReason): void;
            connect(signal: 'invoked', callback: (_source: this, action_id: string) => void): number;
            connect_after(signal: 'invoked', callback: (_source: this, action_id: string) => void): number;
            emit(signal: 'invoked', action_id: string): void;

            // Methods

            get_hint(hint: string): GLib.Variant | null;
            get_str_hint(hint: string): string;
            get_bool_hint(hint: string): boolean;
            get_int_hint(hint: string): number;
            get_byte_hint(hint: string): number;
            /**
             * Resolve this notification with [enum`AstalNotifd`.ClosedReason.DISMISSED_BY_USER].
             */
            dismiss(): void;
            /**
             * Invoke an [struct`AstalNotifd`.Action] of this notification.
             * Note that this method just notifies the client that this action was invoked by the user. If for example this notification persists through the
             * lifetime of the sending program this action will have no effect.
             * @param action_id
             */
            invoke(action_id: string): void;
            get_time(): number;
            get_app_name(): string;
            get_app_icon(): string;
            get_summary(): string;
            get_body(): string;
            get_id(): number;
            get_expire_timeout(): number;
            get_actions(): Action[];
            get_image(): string;
            get_action_icons(): boolean;
            get_category(): string;
            get_desktop_entry(): string;
            get_resident(): boolean;
            get_sound_file(): string;
            get_sound_name(): string;
            get_suppress_sound(): boolean;
            get_transient(): boolean;
            get_x(): number;
            get_y(): number;
            get_urgency(): Urgency;
        }

        type NotifdClass = typeof Notifd;
        abstract class NotifdPrivate {
            static $gtype: GObject.GType<NotifdPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type NotificationClass = typeof Notification;
        abstract class NotificationPrivate {
            static $gtype: GObject.GType<NotificationPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Action {
            static $gtype: GObject.GType<Action>;

            // Fields

            id: string;
            label: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    id: string;
                    label: string;
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

    export default AstalNotifd;
}

declare module 'gi://AstalNotifd' {
    import AstalNotifd01 from 'gi://AstalNotifd?version=0.1';
    export default AstalNotifd01;
}
// END
