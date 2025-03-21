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

declare module 'gi://FcitxG?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace FcitxG {
        /**
         * FcitxG-1.0
         */

        module Client {
            // Signal callback interfaces

            interface CommitString {
                (string: string): void;
            }

            interface Connected {
                (): void;
            }

            interface CurrentIm {
                (name: string, unique_name: string, lang_code: string): void;
            }

            interface DeleteSurroundingText {
                (cursor: number, len: number): void;
            }

            interface ForwardKey {
                (keyval: number, state: number, type: number): void;
            }

            interface NotifyFocusOut {
                (): void;
            }

            interface UpdateClientSideUi {
                (
                    preedit: PreeditItem[],
                    preedit_cursor: number,
                    aux_up: PreeditItem[],
                    aux_down: PreeditItem[],
                    candidate_list: CandidateItem[],
                    candidate_cursor: number,
                    candidate_layout_hint: number,
                    has_prev: boolean,
                    has_next: boolean,
                ): void;
            }

            interface UpdateFormattedPreedit {
                (preedit: PreeditItem[], cursor: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                watcher: Watcher;
            }
        }

        /**
         * A #FcitxGClient allow to create a input context via DBus
         */
        class Client extends GObject.Object {
            static $gtype: GObject.GType<Client>;

            // Properties

            set watcher(val: Watcher);

            // Constructors

            constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Client;

            static new_with_watcher(watcher: Watcher): Client;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'commit-string', callback: (_source: this, string: string) => void): number;
            connect_after(signal: 'commit-string', callback: (_source: this, string: string) => void): number;
            emit(signal: 'commit-string', string: string): void;
            connect(signal: 'connected', callback: (_source: this) => void): number;
            connect_after(signal: 'connected', callback: (_source: this) => void): number;
            emit(signal: 'connected'): void;
            connect(
                signal: 'current-im',
                callback: (_source: this, name: string, unique_name: string, lang_code: string) => void,
            ): number;
            connect_after(
                signal: 'current-im',
                callback: (_source: this, name: string, unique_name: string, lang_code: string) => void,
            ): number;
            emit(signal: 'current-im', name: string, unique_name: string, lang_code: string): void;
            connect(
                signal: 'delete-surrounding-text',
                callback: (_source: this, cursor: number, len: number) => void,
            ): number;
            connect_after(
                signal: 'delete-surrounding-text',
                callback: (_source: this, cursor: number, len: number) => void,
            ): number;
            emit(signal: 'delete-surrounding-text', cursor: number, len: number): void;
            connect(
                signal: 'forward-key',
                callback: (_source: this, keyval: number, state: number, type: number) => void,
            ): number;
            connect_after(
                signal: 'forward-key',
                callback: (_source: this, keyval: number, state: number, type: number) => void,
            ): number;
            emit(signal: 'forward-key', keyval: number, state: number, type: number): void;
            connect(signal: 'notify-focus-out', callback: (_source: this) => void): number;
            connect_after(signal: 'notify-focus-out', callback: (_source: this) => void): number;
            emit(signal: 'notify-focus-out'): void;
            connect(
                signal: 'update-client-side-ui',
                callback: (
                    _source: this,
                    preedit: PreeditItem[],
                    preedit_cursor: number,
                    aux_up: PreeditItem[],
                    aux_down: PreeditItem[],
                    candidate_list: CandidateItem[],
                    candidate_cursor: number,
                    candidate_layout_hint: number,
                    has_prev: boolean,
                    has_next: boolean,
                ) => void,
            ): number;
            connect_after(
                signal: 'update-client-side-ui',
                callback: (
                    _source: this,
                    preedit: PreeditItem[],
                    preedit_cursor: number,
                    aux_up: PreeditItem[],
                    aux_down: PreeditItem[],
                    candidate_list: CandidateItem[],
                    candidate_cursor: number,
                    candidate_layout_hint: number,
                    has_prev: boolean,
                    has_next: boolean,
                ) => void,
            ): number;
            emit(
                signal: 'update-client-side-ui',
                preedit: PreeditItem[],
                preedit_cursor: number,
                aux_up: PreeditItem[],
                aux_down: PreeditItem[],
                candidate_list: CandidateItem[],
                candidate_cursor: number,
                candidate_layout_hint: number,
                has_prev: boolean,
                has_next: boolean,
            ): void;
            connect(
                signal: 'update-formatted-preedit',
                callback: (_source: this, preedit: PreeditItem[], cursor: number) => void,
            ): number;
            connect_after(
                signal: 'update-formatted-preedit',
                callback: (_source: this, preedit: PreeditItem[], cursor: number) => void,
            ): number;
            emit(signal: 'update-formatted-preedit', preedit: PreeditItem[], cursor: number): void;

            // Methods

            /**
             * tell fcitx current client has focus
             */
            focus_in(): void;
            /**
             * tell fcitx current client has lost focus
             */
            focus_out(): void;
            get_uuid(): number;
            /**
             * Check #FcitxGClient is valid to communicate with Fcitx
             * @returns #FcitxGClient is valid or not
             */
            is_valid(): boolean;
            next_page(): void;
            prev_page(): void;
            /**
             * use this function with #fcitx_g_client_process_key_finish
             * @param keyval key value
             * @param keycode hardware key code
             * @param state key state
             * @param isRelease event type is key release
             * @param t timestamp
             * @param timeout_msec timeout in millisecond
             * @param cancellable cancellable
             */
            process_key(
                keyval: number,
                keycode: number,
                state: number,
                isRelease: boolean,
                t: number,
                timeout_msec: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * use this function with #fcitx_g_client_process_key_finish
             * @param keyval key value
             * @param keycode hardware key code
             * @param state key state
             * @param isRelease event type is key release
             * @param t timestamp
             * @param timeout_msec timeout in millisecond
             * @param cancellable cancellable
             * @param callback callback
             */
            process_key(
                keyval: number,
                keycode: number,
                state: number,
                isRelease: boolean,
                t: number,
                timeout_msec: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * use this function with #fcitx_g_client_process_key_finish
             * @param keyval key value
             * @param keycode hardware key code
             * @param state key state
             * @param isRelease event type is key release
             * @param t timestamp
             * @param timeout_msec timeout in millisecond
             * @param cancellable cancellable
             * @param callback callback
             */
            process_key(
                keyval: number,
                keycode: number,
                state: number,
                isRelease: boolean,
                t: number,
                timeout_msec: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * use this function with #fcitx_g_client_process_key_async
             * @param res result
             * @returns process key result
             */
            process_key_finish(res: Gio.AsyncResult): boolean;
            /**
             * send a key event to fcitx synchronizely
             * @param keyval key value
             * @param keycode hardware key code
             * @param state key state
             * @param isRelease is key release
             * @param t timestamp
             * @returns the key is processed or not
             */
            process_key_sync(keyval: number, keycode: number, state: number, isRelease: boolean, t: number): boolean;
            /**
             * tell fcitx current client is reset from client side
             */
            reset(): void;
            /**
             * tell fcitx current client to select candidate.
             * @param index Candidate index
             */
            select_candidate(index: number): void;
            /**
             * set client capability of input context.
             * @param flags capability
             */
            set_capability(flags: number): void;
            /**
             * tell fcitx current client's cursor geometry info
             * @param x x of cursor
             * @param y y of cursor
             * @param w width of cursor
             * @param h height of cursor
             */
            set_cursor_rect(x: number, y: number, w: number, h: number): void;
            /**
             * tell fcitx current client's cursor geometry info
             * @param x x of cursor
             * @param y y of cursor
             * @param w width of cursor
             * @param h height of cursor
             * @param scale scale factor of surface
             */
            set_cursor_rect_with_scale_factor(x: number, y: number, w: number, h: number, scale: number): void;
            /**
             * Set the display name
             * @param display display name
             */
            set_display(display: string): void;
            /**
             * Set the program name
             * @param program program name
             */
            set_program(program: string): void;
            set_surrounding_text(text: string | null, cursor: number, anchor: number): void;
            /**
             * Set whether use ProcessKeyEventBatch if supports, default is true.
             * @param batch whether use ProcessKeyEventBatch
             */
            set_use_batch_process_key_event(batch: boolean): void;
        }

        module Watcher {
            // Signal callback interfaces

            interface AvailabilityChanged {
                (available: boolean): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * A FcitxGWatcher allow to create a input context via DBus
         */
        class Watcher extends GObject.Object {
            static $gtype: GObject.GType<Watcher>;

            // Constructors

            constructor(properties?: Partial<Watcher.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Watcher;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'availability-changed', callback: (_source: this, available: boolean) => void): number;
            connect_after(
                signal: 'availability-changed',
                callback: (_source: this, available: boolean) => void,
            ): number;
            emit(signal: 'availability-changed', available: boolean): void;

            // Methods

            /**
             * self: A #FcitxGWatcher
             * Return the current #GDBusConnection
             * @returns #GDBusConnection for current connection
             */
            get_connection(): Gio.DBusConnection;
            get_service_name(): string;
            is_service_available(): boolean;
            /**
             * self: A #FcitxGWatcher
             * watch: to monitor the portal service or not.
             * @param watch
             */
            set_watch_portal(watch: boolean): void;
            /**
             * Unwatch for the fcitx serivce, should only be called after
             * calling fcitx_g_watcher_watch.
             */
            unwatch(): void;
            /**
             * Watch for the fcitx serivce.
             */
            watch(): void;
        }

        class CandidateItem {
            static $gtype: GObject.GType<CandidateItem>;

            // Fields

            label: string;
            candidate: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    candidate: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        type ClientClass = typeof Client;
        abstract class ClientPrivate {
            static $gtype: GObject.GType<ClientPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class PreeditItem {
            static $gtype: GObject.GType<PreeditItem>;

            // Fields

            string: string;
            type: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    string: string;
                    type: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        type WatcherClass = typeof Watcher;
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

    export default FcitxG;
}

declare module 'gi://FcitxG' {
    import FcitxG10 from 'gi://FcitxG?version=1.0';
    export default FcitxG10;
}
// END
