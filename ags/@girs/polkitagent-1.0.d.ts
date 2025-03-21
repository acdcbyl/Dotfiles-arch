/// <reference path="./polkit-1.0.d.ts" />
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

declare module 'gi://PolkitAgent?version=1.0' {
    // Module dependencies
    import type Polkit from 'gi://Polkit?version=1.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace PolkitAgent {
        /**
         * PolkitAgent-1.0
         */

        /**
         * (deprecated)
         * @param listener A #PolkitAgentListener.
         * @param subject The subject to become an authentication agent for, typically a #PolkitUnixSession object.
         * @param object_path The D-Bus object path to use for the authentication agent or %NULL for the default object path.
         */
        function register_listener(listener: Listener, subject: Polkit.Subject, object_path: string): boolean;
        /**
         * Flags used in polkit_agent_listener_register().
         */

        /**
         * Flags used in polkit_agent_listener_register().
         */
        export namespace RegisterFlags {
            export const $gtype: GObject.GType<RegisterFlags>;
        }

        enum RegisterFlags {
            /**
             * No flags are set.
             */
            NONE,
            /**
             * Run the listener in a dedicated thread.
             */
            RUN_IN_THREAD,
        }
        module Listener {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * #PolkitAgentListener is an abstract base class used for implementing authentication
         * agents. To implement an authentication agent, simply subclass #PolkitAgentListener and
         * implement the `initiate_authentication` and `initiate_authentication_finish` methods.
         *
         * Typically authentication agents use #PolkitAgentSession to
         * authenticate users (via passwords) and communicate back the
         * authentication result to the PolicyKit daemon.
         *
         * To register a #PolkitAgentListener with the PolicyKit daemon, use
         * polkit_agent_listener_register() or
         * polkit_agent_listener_register_with_options().
         */
        abstract class Listener extends GObject.Object {
            static $gtype: GObject.GType<Listener>;

            // Constructors

            constructor(properties?: Partial<Listener.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Unregisters `listener`.
             * @param registration_handle A handle obtained from polkit_agent_listener_register().
             */
            static unregister(registration_handle?: any | null): void;

            // Virtual methods

            /**
             * Called on a registered authentication agent (see
             * polkit_agent_listener_register()) when the user owning the session
             * needs to prove he is one of the identities listed in `identities`.
             *
             * When the user is done authenticating (for example by dismissing an
             * authentication dialog or by successfully entering a password or
             * otherwise proving the user is one of the identities in
             * `identities)`, `callback` will be invoked. The caller then calls
             * polkit_agent_listener_initiate_authentication_finish() to get the
             * result.
             *
             * #PolkitAgentListener derived subclasses imlementing this method
             * <emphasis>MUST</emphasis> not ignore `cancellable;` callers of this
             * function can and will use it. Additionally, `callback` must be
             * invoked in the <link
             * linkend="g-main-context-push-thread-default">thread-default main
             * loop</link> of the thread that this method is called from.
             * @param action_id The action to authenticate for.
             * @param message The message to present to the user.
             * @param icon_name A themed icon name representing the action or %NULL.
             * @param details Details describing the action.
             * @param cookie The cookie for the authentication request.
             * @param identities A list of #PolkitIdentity objects that the user can choose to authenticate as.
             * @param cancellable A #GCancellable.
             * @param callback Function to call when the user is done authenticating.
             */
            vfunc_initiate_authentication(
                action_id: string,
                message: string,
                icon_name: string,
                details: Polkit.Details,
                cookie: string,
                identities: Polkit.Identity[],
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an authentication request from the PolicyKit daemon, see
             * polkit_agent_listener_initiate_authentication() for details.
             * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to polkit_agent_listener_initiate_authentication().
             */
            vfunc_initiate_authentication_finish(res: Gio.AsyncResult): boolean;

            // Methods

            /**
             * Called on a registered authentication agent (see
             * polkit_agent_listener_register()) when the user owning the session
             * needs to prove he is one of the identities listed in `identities`.
             *
             * When the user is done authenticating (for example by dismissing an
             * authentication dialog or by successfully entering a password or
             * otherwise proving the user is one of the identities in
             * `identities)`, `callback` will be invoked. The caller then calls
             * polkit_agent_listener_initiate_authentication_finish() to get the
             * result.
             *
             * #PolkitAgentListener derived subclasses imlementing this method
             * <emphasis>MUST</emphasis> not ignore `cancellable;` callers of this
             * function can and will use it. Additionally, `callback` must be
             * invoked in the <link
             * linkend="g-main-context-push-thread-default">thread-default main
             * loop</link> of the thread that this method is called from.
             * @param action_id The action to authenticate for.
             * @param message The message to present to the user.
             * @param icon_name A themed icon name representing the action or %NULL.
             * @param details Details describing the action.
             * @param cookie The cookie for the authentication request.
             * @param identities A list of #PolkitIdentity objects that the user can choose to authenticate as.
             * @param cancellable A #GCancellable.
             */
            initiate_authentication(
                action_id: string,
                message: string,
                icon_name: string,
                details: Polkit.Details,
                cookie: string,
                identities: Polkit.Identity[],
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Called on a registered authentication agent (see
             * polkit_agent_listener_register()) when the user owning the session
             * needs to prove he is one of the identities listed in `identities`.
             *
             * When the user is done authenticating (for example by dismissing an
             * authentication dialog or by successfully entering a password or
             * otherwise proving the user is one of the identities in
             * `identities)`, `callback` will be invoked. The caller then calls
             * polkit_agent_listener_initiate_authentication_finish() to get the
             * result.
             *
             * #PolkitAgentListener derived subclasses imlementing this method
             * <emphasis>MUST</emphasis> not ignore `cancellable;` callers of this
             * function can and will use it. Additionally, `callback` must be
             * invoked in the <link
             * linkend="g-main-context-push-thread-default">thread-default main
             * loop</link> of the thread that this method is called from.
             * @param action_id The action to authenticate for.
             * @param message The message to present to the user.
             * @param icon_name A themed icon name representing the action or %NULL.
             * @param details Details describing the action.
             * @param cookie The cookie for the authentication request.
             * @param identities A list of #PolkitIdentity objects that the user can choose to authenticate as.
             * @param cancellable A #GCancellable.
             * @param callback Function to call when the user is done authenticating.
             */
            initiate_authentication(
                action_id: string,
                message: string,
                icon_name: string,
                details: Polkit.Details,
                cookie: string,
                identities: Polkit.Identity[],
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Called on a registered authentication agent (see
             * polkit_agent_listener_register()) when the user owning the session
             * needs to prove he is one of the identities listed in `identities`.
             *
             * When the user is done authenticating (for example by dismissing an
             * authentication dialog or by successfully entering a password or
             * otherwise proving the user is one of the identities in
             * `identities)`, `callback` will be invoked. The caller then calls
             * polkit_agent_listener_initiate_authentication_finish() to get the
             * result.
             *
             * #PolkitAgentListener derived subclasses imlementing this method
             * <emphasis>MUST</emphasis> not ignore `cancellable;` callers of this
             * function can and will use it. Additionally, `callback` must be
             * invoked in the <link
             * linkend="g-main-context-push-thread-default">thread-default main
             * loop</link> of the thread that this method is called from.
             * @param action_id The action to authenticate for.
             * @param message The message to present to the user.
             * @param icon_name A themed icon name representing the action or %NULL.
             * @param details Details describing the action.
             * @param cookie The cookie for the authentication request.
             * @param identities A list of #PolkitIdentity objects that the user can choose to authenticate as.
             * @param cancellable A #GCancellable.
             * @param callback Function to call when the user is done authenticating.
             */
            initiate_authentication(
                action_id: string,
                message: string,
                icon_name: string,
                details: Polkit.Details,
                cookie: string,
                identities: Polkit.Identity[],
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes an authentication request from the PolicyKit daemon, see
             * polkit_agent_listener_initiate_authentication() for details.
             * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to polkit_agent_listener_initiate_authentication().
             * @returns %TRUE if @error is set.
             */
            initiate_authentication_finish(res: Gio.AsyncResult): boolean;
            /**
             * Registers `listener` with the PolicyKit daemon as an authentication
             * agent for `subject`. This is implemented by registering a D-Bus
             * object at `object_path` on the unique name assigned by the system
             * message bus.
             *
             * Whenever the PolicyKit daemon needs to authenticate a processes
             * that is related to `subject,` the methods
             * polkit_agent_listener_initiate_authentication() and
             * polkit_agent_listener_initiate_authentication_finish() will be
             * invoked on `listener`.
             *
             * Note that registration of an authentication agent can fail; for
             * example another authentication agent may already be registered for
             * `subject`.
             *
             * Note that the calling thread is blocked until a reply is received.
             * @param flags A set of flags from the #PolkitAgentRegisterFlags enumeration.
             * @param subject The subject to become an authentication agent for, typically a #PolkitUnixSession object.
             * @param object_path The D-Bus object path to use for the authentication agent or %NULL for the default object path.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %NULL if @error is set, otherwise a registration handle that can be used with polkit_agent_listener_unregister().
             */
            register(
                flags: RegisterFlags | null,
                subject: Polkit.Subject,
                object_path: string,
                cancellable?: Gio.Cancellable | null,
            ): any | null;
            /**
             * Like polkit_agent_listener_register() but takes options to influence registration. See the
             * <link linkend="eggdbus-method-org.freedesktop.PolicyKit1.Authority.RegisterAuthenticationAgentWithOptions">RegisterAuthenticationAgentWithOptions()</link> D-Bus method for details.
             * @param flags A set of flags from the #PolkitAgentRegisterFlags enumeration.
             * @param subject The subject to become an authentication agent for, typically a #PolkitUnixSession object.
             * @param object_path The D-Bus object path to use for the authentication agent or %NULL for the default object path.
             * @param options A #GVariant with options or %NULL.
             * @param cancellable A #GCancellable or %NULL.
             * @returns %NULL if @error is set, otherwise a registration handle that can be used with polkit_agent_listener_unregister().
             */
            register_with_options(
                flags: RegisterFlags | null,
                subject: Polkit.Subject,
                object_path: string,
                options?: GLib.Variant | null,
                cancellable?: Gio.Cancellable | null,
            ): any | null;
        }

        module Session {
            // Signal callback interfaces

            interface Completed {
                (gained_authorization: boolean): void;
            }

            interface Request {
                (request: string, echo_on: boolean): void;
            }

            interface ShowError {
                (text: string): void;
            }

            interface ShowInfo {
                (text: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                cookie: string;
                identity: Polkit.Identity;
            }
        }

        /**
         * The #PolkitAgentSession class is an abstraction used for interacting with the
         * native authentication system (for example PAM) for obtaining authorizations.
         * This class is typically used together with instances that are derived from
         * the #PolkitAgentListener abstract base class.
         *
         * To perform the actual authentication, #PolkitAgentSession uses a trusted suid helper.
         * The authentication conversation is done through a pipe. This is transparent; the user
         * only need to handle the
         * #PolkitAgentSession::request,
         * #PolkitAgentSession::show-info,
         * #PolkitAgentSession::show-error and
         * #PolkitAgentSession::completed
         * signals and invoke polkit_agent_session_response() in response to requests.
         *
         * If the user successfully authenticates, the authentication helper will invoke
         * a method on the PolicyKit daemon (see polkit_authority_authentication_agent_response_sync())
         * with the given `cookie`. Upon receiving a positive response from the PolicyKit daemon (via
         * the authentication helper), the #PolkitAgentSession::completed signal will be emitted
         * with the `gained_authorization` paramter set to %TRUE.
         *
         * If the user is unable to authenticate, the #PolkitAgentSession::completed signal will
         * be emitted with the `gained_authorization` paramter set to %FALSE.
         */
        class Session extends GObject.Object {
            static $gtype: GObject.GType<Session>;

            // Properties

            /**
             * The cookie obtained from the PolicyKit daemon
             */
            get cookie(): string;
            /**
             * The identity to authenticate.
             */
            get identity(): Polkit.Identity;

            // Constructors

            constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](identity: Polkit.Identity, cookie: string): Session;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'completed', callback: (_source: this, gained_authorization: boolean) => void): number;
            connect_after(
                signal: 'completed',
                callback: (_source: this, gained_authorization: boolean) => void,
            ): number;
            emit(signal: 'completed', gained_authorization: boolean): void;
            connect(signal: 'request', callback: (_source: this, request: string, echo_on: boolean) => void): number;
            connect_after(
                signal: 'request',
                callback: (_source: this, request: string, echo_on: boolean) => void,
            ): number;
            emit(signal: 'request', request: string, echo_on: boolean): void;
            connect(signal: 'show-error', callback: (_source: this, text: string) => void): number;
            connect_after(signal: 'show-error', callback: (_source: this, text: string) => void): number;
            emit(signal: 'show-error', text: string): void;
            connect(signal: 'show-info', callback: (_source: this, text: string) => void): number;
            connect_after(signal: 'show-info', callback: (_source: this, text: string) => void): number;
            emit(signal: 'show-info', text: string): void;

            // Methods

            /**
             * Cancels an authentication session. This will make `session` emit the #PolkitAgentSession::completed
             * signal.
             */
            cancel(): void;
            /**
             * Initiates the authentication session. Before calling this method,
             * make sure to connect to the various signals. The signals will be
             * emitted in the <link
             * linkend="g-main-context-push-thread-default">thread-default main
             * loop</link> that this method is invoked from.
             *
             * Use polkit_agent_session_cancel() to cancel the session.
             */
            initiate(): void;
            /**
             * Function for providing response to requests received
             * via the #PolkitAgentSession::request signal.
             * @param response Response from the user, typically a password.
             */
            response(response: string): void;
        }

        module TextListener {
            // Signal callback interfaces

            interface TtyAttrsChanged {
                (object: boolean): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Listener.ConstructorProps, Gio.Initable.ConstructorProps {
                delay: number;
                use_alternate_buffer: boolean;
                useAlternateBuffer: boolean;
                use_color: boolean;
                useColor: boolean;
            }
        }

        /**
         * #PolkitAgentTextListener is an #PolkitAgentListener implementation
         * that interacts with the user using a textual interface.
         */
        class TextListener extends Listener implements Gio.Initable {
            static $gtype: GObject.GType<TextListener>;

            // Properties

            get delay(): number;
            get use_alternate_buffer(): boolean;
            get useAlternateBuffer(): boolean;
            get use_color(): boolean;
            get useColor(): boolean;

            // Constructors

            constructor(properties?: Partial<TextListener.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](cancellable?: Gio.Cancellable | null): TextListener;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'tty-attrs-changed', callback: (_source: this, object: boolean) => void): number;
            connect_after(signal: 'tty-attrs-changed', callback: (_source: this, object: boolean) => void): number;
            emit(signal: 'tty-attrs-changed', object: boolean): void;

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

        type ListenerClass = typeof Listener;
        type SessionClass = typeof Session;
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

    export default PolkitAgent;
}

declare module 'gi://PolkitAgent' {
    import PolkitAgent10 from 'gi://PolkitAgent?version=1.0';
    export default PolkitAgent10;
}
// END
