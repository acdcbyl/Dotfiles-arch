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

declare module 'gi://AstalAuth?version=0.1' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace AstalAuth {
        /**
         * AstalAuth-0.1
         */

        const MAJOR_VERSION: number;
        const MICRO_VERSION: number;
        const MINOR_VERSION: number;
        const VERSION: string;
        module Pam {
            // Signal callback interfaces

            interface AuthError {
                (msg: string): void;
            }

            interface AuthInfo {
                (msg: string): void;
            }

            interface AuthPromptHidden {
                (msg: string): void;
            }

            interface AuthPromptVisible {
                (msg: string): void;
            }

            interface Fail {
                (msg: string): void;
            }

            interface Success {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                service: string;
                username: string;
            }
        }

        /**
         * For simple authentication using only a password, using the [func`AstalAuth`.Pam.authenticate]
         * method is recommended. Look at the simple examples for how to use it.
         *
         * There is also a way to get access to the pam conversation, to allow for a more complex
         * authentication process, like using multiple factor authentication. Generally it can be used like
         * this:
         *
         * 1. create the Pam object.
         * 2. set username and service if so required. It has sane defaults, so in most cases you can skip
         * this.
         * 3. connect to the signals.
         *    After an `auth-*` signal is emitted, it has to be responded with exactly one
         * [method`AstalAuth`.Pam.supply_secret] call. The secret is a string containing the user input. For
         * [auth-info][signal`AstalAuth`.Pam::auth-info:] and [auth-error][signal`AstalAuth`.Pam::auth-error:]
         * it should be `NULL`. Not connecting those signals, is equivalent to calling
         * [method`AstalAuth`.Pam.supply_secret] with `NULL` immediately after the signal is emitted.
         * 4. start authentication process using [method`AstalAuth`.Pam.start_authenticate].
         * 5. it is possible to reuse the same Pam object for multiple sequential authentication attempts.
         * Just call [method`AstalAuth`.Pam.start_authenticate] again after the `success` or `fail` signal
         * was emitted.
         */
        class Pam extends GObject.Object {
            static $gtype: GObject.GType<Pam>;

            // Properties

            /**
             * The pam service used for authentication.
             * Changing the value of this property has no affect on an already started authentication
             * process.
             *
             * Defaults to the astal-auth pam service.
             */
            get service(): string;
            set service(val: string);
            /**
             * The username used for authentication.
             * Changing the value of this property has no affect on an already started authentication
             * process.
             *
             * Defaults to the user that owns this process.
             */
            get username(): string;
            set username(val: string);

            // Constructors

            constructor(properties?: Partial<Pam.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'auth-error', callback: (_source: this, msg: string) => void): number;
            connect_after(signal: 'auth-error', callback: (_source: this, msg: string) => void): number;
            emit(signal: 'auth-error', msg: string): void;
            connect(signal: 'auth-info', callback: (_source: this, msg: string) => void): number;
            connect_after(signal: 'auth-info', callback: (_source: this, msg: string) => void): number;
            emit(signal: 'auth-info', msg: string): void;
            connect(signal: 'auth-prompt-hidden', callback: (_source: this, msg: string) => void): number;
            connect_after(signal: 'auth-prompt-hidden', callback: (_source: this, msg: string) => void): number;
            emit(signal: 'auth-prompt-hidden', msg: string): void;
            connect(signal: 'auth-prompt-visible', callback: (_source: this, msg: string) => void): number;
            connect_after(signal: 'auth-prompt-visible', callback: (_source: this, msg: string) => void): number;
            emit(signal: 'auth-prompt-visible', msg: string): void;
            connect(signal: 'fail', callback: (_source: this, msg: string) => void): number;
            connect_after(signal: 'fail', callback: (_source: this, msg: string) => void): number;
            emit(signal: 'fail', msg: string): void;
            connect(signal: 'success', callback: (_source: this) => void): number;
            connect_after(signal: 'success', callback: (_source: this) => void): number;
            emit(signal: 'success'): void;

            // Static methods

            /**
             * Requests authentication of the provided password using the PAM (Pluggable Authentication Modules)
             * system.
             * @param password the password to be authenticated
             * @param result_callback a GAsyncReadyCallback   to call when the request is satisfied
             */
            static authenticate(password: string, result_callback?: Gio.AsyncReadyCallback<Pam> | null): boolean;
            static authenticate_finish(res: Gio.AsyncResult): number;

            // Methods

            /**
             * Fetches the service from AsalAuthPam object.
             * @returns the service of the AsalAuthPam object. This string is owned by the object and must not be modified or freed.
             */
            get_service(): string;
            /**
             * Fetches the username from AsalAuthPam object.
             * @returns the username of the AsalAuthPam object. This string is owned by the object and must not be modified or freed.
             */
            get_username(): string;
            /**
             * Sets the service to be used for authentication. This must be set to
             * before calling start_authenticate.
             * Changing it afterwards has no effect on the authentication process.
             *
             * Defaults to `astal-auth`.
             * @param service the pam service used for authentication
             */
            set_service(service: string): void;
            /**
             * Sets the username to be used for authentication. This must be set to
             * before calling start_authenticate.
             * Changing it afterwards has no effect on the authentication process.
             *
             * Defaults to the owner of the process.
             * @param username the new username
             */
            set_username(username: string): void;
            /**
             * starts a new authentication process using the PAM (Pluggable Authentication Modules) system.
             * Note that this will cancel an already running authentication process
             * associated with this AstalAuthPam object.
             */
            start_authenticate(): boolean;
            /**
             * provides pam with a secret. This method must be called exactly once after a
             * auth-* signal is emitted.
             * @param secret the secret to be provided to pam. Can be NULL.
             */
            supply_secret(secret?: string | null): void;
        }

        type PamClass = typeof Pam;
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

    export default AstalAuth;
}

declare module 'gi://AstalAuth' {
    import AstalAuth01 from 'gi://AstalAuth?version=0.1';
    export default AstalAuth01;
}
// END
