/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AstalIO?version=0.1' {
    // Module dependencies
    import type GLib from 'gi://GLib?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace AstalIO {
        /**
         * AstalIO-0.1
         */

        class AppError extends GLib.Error {
            static $gtype: GObject.GType<AppError>;

            // Static fields

            static NAME_OCCUPIED: number;
            static TAKEOVER_FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        const MAJOR_VERSION: number;
        const MINOR_VERSION: number;
        const MICRO_VERSION: number;
        const VERSION: string;
        /**
         * Starts a [class`Gio`.SocketService] and binds `XDG_RUNTIME_DIR/astal/<instance_name>.sock`. This socket is then used by the astal
         * cli. Not meant for public usage, but for [method`AstalIO`.Application.acquire_socket].
         * @param app
         */
        function acquire_socket(app: Application): [Gio.SocketService, string];
        /**
         * Get a list of running Astal.Application instances. It is the equivalent of `astal --list`.
         */
        function get_instances(): string[];
        /**
         * Quit an an Astal instances. It is the equivalent of `astal --quit -i instance`.
         * @param instance
         */
        function quit_instance(instance: string): void;
        /**
         * Open the Gtk debug tool of an an Astal instances. It is the equivalent of `astal --inspector -i instance`.
         * @param instance
         */
        function open_inspector(instance: string): void;
        /**
         * Toggle a Window of an Astal instances. It is the equivalent of `astal -i instance --toggle window`.
         * @param instance
         * @param window
         */
        function toggle_window_by_name(instance: string, window: string): void;
        /**
         * Send a message to an Astal instances. It is the equivalent of `astal -i instance content of the message`.
         * @param instance
         * @param msg
         */
        function send_message(instance: string, msg: string): string;
        /**
         * Read the socket of an Astal.Application instance.
         * @param conn
         */
        function read_sock(conn: Gio.SocketConnection): Promise<string>;
        /**
         * Read the socket of an Astal.Application instance.
         * @param conn
         * @param _callback_
         */
        function read_sock(
            conn: Gio.SocketConnection,
            _callback_: Gio.AsyncReadyCallback<Gio.SocketConnection> | null,
        ): void;
        /**
         * Read the socket of an Astal.Application instance.
         * @param conn
         * @param _callback_
         */
        function read_sock(
            conn: Gio.SocketConnection,
            _callback_?: Gio.AsyncReadyCallback<Gio.SocketConnection> | null,
        ): Promise<string> | void;
        function read_sock_finish(_res_: Gio.AsyncResult): string;
        /**
         * Write the socket of an Astal.Application instance.
         * @param conn
         * @param response
         */
        function write_sock(conn: Gio.SocketConnection, response: string): Promise<void>;
        /**
         * Write the socket of an Astal.Application instance.
         * @param conn
         * @param response
         * @param _callback_
         */
        function write_sock(
            conn: Gio.SocketConnection,
            response: string,
            _callback_: Gio.AsyncReadyCallback<Gio.SocketConnection> | null,
        ): void;
        /**
         * Write the socket of an Astal.Application instance.
         * @param conn
         * @param response
         * @param _callback_
         */
        function write_sock(
            conn: Gio.SocketConnection,
            response: string,
            _callback_?: Gio.AsyncReadyCallback<Gio.SocketConnection> | null,
        ): Promise<void> | void;
        function write_sock_finish(_res_: Gio.AsyncResult): void;
        /**
         * Read the contents of a file synchronously.
         * @param path
         */
        function read_file(path: string): string;
        /**
         * Read the contents of a file asynchronously.
         * @param path
         */
        function read_file_async(path: string): Promise<string>;
        /**
         * Read the contents of a file asynchronously.
         * @param path
         * @param _callback_
         */
        function read_file_async(path: string, _callback_: Gio.AsyncReadyCallback<string> | null): void;
        /**
         * Read the contents of a file asynchronously.
         * @param path
         * @param _callback_
         */
        function read_file_async(
            path: string,
            _callback_?: Gio.AsyncReadyCallback<string> | null,
        ): Promise<string> | void;
        function read_file_finish(_res_: Gio.AsyncResult): string;
        /**
         * Write content to a file synchronously.
         * @param path
         * @param content
         */
        function write_file(path: string, content: string): void;
        /**
         * Write content to a file asynchronously.
         * @param path
         * @param content
         */
        function write_file_async(path: string, content: string): Promise<void>;
        /**
         * Write content to a file asynchronously.
         * @param path
         * @param content
         * @param _callback_
         */
        function write_file_async(
            path: string,
            content: string,
            _callback_: Gio.AsyncReadyCallback<string> | null,
        ): void;
        /**
         * Write content to a file asynchronously.
         * @param path
         * @param content
         * @param _callback_
         */
        function write_file_async(
            path: string,
            content: string,
            _callback_?: Gio.AsyncReadyCallback<string> | null,
        ): Promise<void> | void;
        function write_file_finish(_res_: Gio.AsyncResult): void;
        /**
         * Monitor a file for changes. If the path is a directory, monitor it recursively. The callback will be called passed two parameters: the path of
         * the file that changed and an [enum`Gio`.FileMonitorEvent] indicating the reason.
         * @param path
         * @param callback
         */
        function monitor_file(path: string, callback: GObject.Closure): Gio.FileMonitor | null;
        module Process {
            // Signal callback interfaces

            interface Stdout {
                (out: string): void;
            }

            interface Stderr {
                (err: string): void;
            }

            interface Exit {
                (code: number, terminated: boolean): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                argv: string[];
            }
        }

        /**
         * `Process` provides shortcuts for [class`Gio`.Subprocess] with sane defaults.
         */
        class Process extends GObject.Object {
            static $gtype: GObject.GType<Process>;

            // Properties

            get argv(): string[];

            // Constructors

            constructor(properties?: Partial<Process.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](cmd: string[]): Process;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'stdout', callback: (_source: this, out: string) => void): number;
            connect_after(signal: 'stdout', callback: (_source: this, out: string) => void): number;
            emit(signal: 'stdout', out: string): void;
            connect(signal: 'stderr', callback: (_source: this, err: string) => void): number;
            connect_after(signal: 'stderr', callback: (_source: this, err: string) => void): number;
            emit(signal: 'stderr', err: string): void;
            connect(signal: 'exit', callback: (_source: this, code: number, terminated: boolean) => void): number;
            connect_after(signal: 'exit', callback: (_source: this, code: number, terminated: boolean) => void): number;
            emit(signal: 'exit', code: number, terminated: boolean): void;

            // Static methods

            /**
             * Start a new subprocess with the given command.
             * The first element of the vector is executed with the remaining elements as the argument list.
             * @param cmd
             */
            static subprocessv(cmd: string[]): Process;
            /**
             * Start a new subprocess with the given command which is parsed using [func`GLib`.shell_parse_argv].
             * @param cmd
             */
            static subprocess(cmd: string): Process;
            /**
             * Execute a command synchronously. The first element of the vector is executed with the remaining elements as the argument list.
             * @param cmd
             */
            static execv(cmd: string[]): string;
            /**
             * Execute a command synchronously. The command is parsed using [func`GLib`.shell_parse_argv].
             * @param cmd
             */
            static exec(cmd: string): string;
            /**
             * Execute a command asynchronously. The first element of the vector is executed with the remaining elements as the argument list.
             * @param cmd
             * @param _callback_
             */
            static exec_asyncv(cmd: string[], _callback_?: Gio.AsyncReadyCallback<Process> | null): void;
            static exec_asyncv_finish(_res_: Gio.AsyncResult): string;
            /**
             * Execute a command asynchronously. The command is parsed using [func`GLib`.shell_parse_argv].
             * @param cmd
             * @param _callback_
             */
            static exec_async(cmd: string, _callback_?: Gio.AsyncReadyCallback<Process> | null): void;
            static exec_finish(_res_: Gio.AsyncResult): string;

            // Methods

            /**
             * Force quit the subprocess.
             */
            kill(): void;
            /**
             * Send a signal to the subprocess.
             * @param signal_num Signal number to be sent
             */
            signal(signal_num: number): void;
            /**
             * Write a line to the subprocess' stdin synchronously. hat is the issue
             * @param _in String to be written to stdin
             */
            write(_in: string): void;
            /**
             * Write a line to the subprocess' stdin asynchronously.
             * @param _in String to be written to stdin
             */
            write_async(_in: string): Promise<void>;
            /**
             * Write a line to the subprocess' stdin asynchronously.
             * @param _in String to be written to stdin
             * @param _callback_
             */
            write_async(_in: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Write a line to the subprocess' stdin asynchronously.
             * @param _in String to be written to stdin
             * @param _callback_
             */
            write_async(_in: string, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
            write_finish(_res_: Gio.AsyncResult): void;
            get_argv(): string[];
        }

        module Time {
            // Signal callback interfaces

            interface Now {
                (): void;
            }

            interface Cancelled {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * `Time` provides shortcuts for GLib timeout functions.
         */
        class Time extends GObject.Object {
            static $gtype: GObject.GType<Time>;

            // Constructors

            constructor(properties?: Partial<Time.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static interval_prio(interval: number, prio: number, fn?: GObject.Closure | null): Time;

            static timeout_prio(timeout: number, prio: number, fn?: GObject.Closure | null): Time;

            static idle_prio(prio: number, fn?: GObject.Closure | null): Time;

            static ['new'](): Time;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'now', callback: (_source: this) => void): number;
            connect_after(signal: 'now', callback: (_source: this) => void): number;
            emit(signal: 'now'): void;
            connect(signal: 'cancelled', callback: (_source: this) => void): number;
            connect_after(signal: 'cancelled', callback: (_source: this) => void): number;
            emit(signal: 'cancelled'): void;

            // Static methods

            /**
             * Start an interval timer. Ticks immediately then every `interval` milliseconds.
             * @param interval Tick every milliseconds.
             * @param fn Optional callback.
             */
            static interval(interval: number, fn?: GObject.Closure | null): Time;
            /**
             * Start a timeout timer which ticks after `timeout` milliseconds.
             * @param timeout Tick after milliseconds.
             * @param fn Optional callback.
             */
            static timeout(timeout: number, fn?: GObject.Closure | null): Time;
            /**
             * Start a timer which will tick when there are no higher priority tasks pending.
             * @param fn Optional callback.
             */
            static idle(fn?: GObject.Closure | null): Time;

            // Methods

            /**
             * Cancel timer and emit [signal`AstalIO`.Time::cancelled]
             */
            cancel(): void;
        }

        module VariableBase {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            interface Dropped {
                (): void;
            }

            interface Error {
                (err: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class VariableBase extends GObject.Object {
            static $gtype: GObject.GType<VariableBase>;

            // Constructors

            constructor(properties?: Partial<VariableBase.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): VariableBase;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;
            connect(signal: 'dropped', callback: (_source: this) => void): number;
            connect_after(signal: 'dropped', callback: (_source: this) => void): number;
            emit(signal: 'dropped'): void;
            connect(signal: 'error', callback: (_source: this, err: string) => void): number;
            connect_after(signal: 'error', callback: (_source: this, err: string) => void): number;
            emit(signal: 'error', err: string): void;

            // Methods

            emit_changed(): void;
            emit_dropped(): void;
            emit_error(err: string): void;
        }

        module Variable {
            // Constructor properties interface

            interface ConstructorProps extends VariableBase.ConstructorProps {
                value: GObject.Value;
            }
        }

        class Variable extends VariableBase {
            static $gtype: GObject.GType<Variable>;

            // Properties

            get value(): GObject.Value;
            set value(val: GObject.Value);

            // Constructors

            constructor(properties?: Partial<Variable.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](init: GObject.Value | any): Variable;
            // Conflicted with AstalIO.VariableBase.new

            static ['new'](...args: never[]): any;

            // Methods

            poll(interval: number, exec: string, transform?: GObject.Closure | null): Variable;
            pollv(interval: number, execv: string[], transform?: GObject.Closure | null): Variable;
            pollfn(interval: number, fn: GObject.Closure): Variable;
            watch(exec: string, transform?: GObject.Closure | null): Variable;
            watchv(execv: string[], transform?: GObject.Closure | null): Variable;
            start_poll(): void;
            start_watch(): void;
            stop_poll(): void;
            stop_watch(): void;
            is_polling(): boolean;
            is_watching(): boolean;
            get_value(): unknown;
            set_value(value: GObject.Value | any): void;
        }

        type ProcessClass = typeof Process;
        abstract class ProcessPrivate {
            static $gtype: GObject.GType<ProcessPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TimeClass = typeof Time;
        abstract class TimePrivate {
            static $gtype: GObject.GType<TimePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VariableBaseClass = typeof VariableBase;
        abstract class VariableBasePrivate {
            static $gtype: GObject.GType<VariableBasePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type VariableClass = typeof Variable;
        abstract class VariablePrivate {
            static $gtype: GObject.GType<VariablePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ApplicationIface = typeof Application;
        module Application {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                instance_name: string;
                instanceName: string;
            }
        }

        export interface ApplicationNamespace {
            $gtype: GObject.GType<Application>;
            prototype: Application;
        }
        interface Application extends GObject.Object {
            // Properties

            get instance_name(): string;
            set instance_name(val: string);
            get instanceName(): string;
            set instanceName(val: string);

            // Methods

            quit(): void;
            inspector(): void;
            toggle_window(window: string): void;
            acquire_socket(): void;
            request(msg: string, conn: Gio.SocketConnection): void;
            get_instance_name(): string;
            set_instance_name(value: string): void;

            // Virtual methods

            vfunc_quit(): void;
            vfunc_inspector(): void;
            vfunc_toggle_window(window: string): void;
            vfunc_acquire_socket(): void;
            vfunc_request(msg: string, conn: Gio.SocketConnection): void;
            vfunc_get_instance_name(): string;
            vfunc_set_instance_name(value: string): void;
        }

        export const Application: ApplicationNamespace & {
            new (): Application; // This allows `obj instanceof Application`
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

    export default AstalIO;
}

declare module 'gi://AstalIO' {
    import AstalIO01 from 'gi://AstalIO?version=0.1';
    export default AstalIO01;
}
// END
