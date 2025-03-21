/// <reference path="./soup-3.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gtk-3.0.d.ts" />
/// <reference path="./xlib-2.0.d.ts" />
/// <reference path="./gdk-3.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />
/// <reference path="./atk-1.0.d.ts" />
/// <reference path="./edataserver-1.2.d.ts" />
/// <reference path="./libxml2-2.0.d.ts" />
/// <reference path="./json-1.0.d.ts" />
/// <reference path="./camel-1.2.d.ts" />
/// <reference path="./ecal-2.0.d.ts" />
/// <reference path="./icalglib-3.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://EDataServerUI?version=1.2' {
    // Module dependencies
    import type Soup from 'gi://Soup?version=3.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type Gtk from 'gi://Gtk?version=3.0';
    import type xlib from 'gi://xlib?version=2.0';
    import type Gdk from 'gi://Gdk?version=3.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
    import type Atk from 'gi://Atk?version=1.0';
    import type EDataServer from 'gi://EDataServer?version=1.2';
    import type libxml2 from 'gi://libxml2?version=2.0';
    import type Json from 'gi://Json?version=1.0';
    import type Camel from 'gi://Camel?version=1.2';
    import type ECal from 'gi://ECal?version=2.0';
    import type ICalGLib from 'gi://ICalGLib?version=3.0';

    export namespace EDataServerUI {
        /**
         * EDataServerUI-1.2
         */

        function buffer_tagger_connect(textview: Gtk.TextView): void;
        function buffer_tagger_disconnect(textview: Gtk.TextView): void;
        function buffer_tagger_update_tags(textview: Gtk.TextView): void;
        /**
         * Converts `flags` into a localized text description of the set bits, one
         * bit description per line. If no bit is set, then an empty string is
         * returned.
         * @param flags a #GTlsCertificateFlags to describe
         * @returns A newly allocated string with text description  of @flags. Free the returned pointer with g_free() when no longer needed.
         */
        function trust_prompt_describe_certificate_errors(flags: Gio.TlsCertificateFlags | null): string;
        /**
         * Similar to e_trust_prompt_run_modal(), except it also manages all the necessary things
         * around the `source<`!-- -->'s SSL/TLS trust properties when it also contains %E_SOURCE_EXTENSION_WEBDAV,
         * thus the SSL/TLS trust on the WebDAV `source` is properly updated based on the user's choice.
         * The call is finished with e_trust_prompt_run_for_source_finish(),
         * which also returns the user's choice. The finish happens in the `callback`.
         * This is necessary, because the `source` can be also saved.
         *
         * The function fails, if the `source` doesn't contain the %E_SOURCE_EXTENSION_AUTHENTICATION.
         *
         * Note: The dialog is not shown when the stored certificate trust in the WebDAV `source`
         *    matches the `certificate_pem` and the stored result is #E_TRUST_PROMPT_RESPONSE_REJECT.
         * @param parent A #GtkWindow to use as a parent for the trust prompt dialog
         * @param source an #ESource, with %E_SOURCE_EXTENSION_AUTHENTICATION
         * @param certificate_pem a PEM-encoded certificate for which to show the trust prompt
         * @param certificate_errors errors of the @certificate_pem
         * @param error_text an optional error text to show in the dialog; can be %NULL
         * @param allow_source_save whether can also save any @source changes
         * @param cancellable a #GCancellable, or %NULL
         */
        function trust_prompt_run_for_source(
            parent: Gtk.Window,
            source: EDataServer.Source,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags | null,
            error_text: string | null,
            allow_source_save: boolean,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Similar to e_trust_prompt_run_modal(), except it also manages all the necessary things
         * around the `source<`!-- -->'s SSL/TLS trust properties when it also contains %E_SOURCE_EXTENSION_WEBDAV,
         * thus the SSL/TLS trust on the WebDAV `source` is properly updated based on the user's choice.
         * The call is finished with e_trust_prompt_run_for_source_finish(),
         * which also returns the user's choice. The finish happens in the `callback`.
         * This is necessary, because the `source` can be also saved.
         *
         * The function fails, if the `source` doesn't contain the %E_SOURCE_EXTENSION_AUTHENTICATION.
         *
         * Note: The dialog is not shown when the stored certificate trust in the WebDAV `source`
         *    matches the `certificate_pem` and the stored result is #E_TRUST_PROMPT_RESPONSE_REJECT.
         * @param parent A #GtkWindow to use as a parent for the trust prompt dialog
         * @param source an #ESource, with %E_SOURCE_EXTENSION_AUTHENTICATION
         * @param certificate_pem a PEM-encoded certificate for which to show the trust prompt
         * @param certificate_errors errors of the @certificate_pem
         * @param error_text an optional error text to show in the dialog; can be %NULL
         * @param allow_source_save whether can also save any @source changes
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a callback to call, when the prompt (an @source save) is done
         */
        function trust_prompt_run_for_source(
            parent: Gtk.Window,
            source: EDataServer.Source,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags | null,
            error_text: string | null,
            allow_source_save: boolean,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Gtk.Window> | null,
        ): void;
        /**
         * Similar to e_trust_prompt_run_modal(), except it also manages all the necessary things
         * around the `source<`!-- -->'s SSL/TLS trust properties when it also contains %E_SOURCE_EXTENSION_WEBDAV,
         * thus the SSL/TLS trust on the WebDAV `source` is properly updated based on the user's choice.
         * The call is finished with e_trust_prompt_run_for_source_finish(),
         * which also returns the user's choice. The finish happens in the `callback`.
         * This is necessary, because the `source` can be also saved.
         *
         * The function fails, if the `source` doesn't contain the %E_SOURCE_EXTENSION_AUTHENTICATION.
         *
         * Note: The dialog is not shown when the stored certificate trust in the WebDAV `source`
         *    matches the `certificate_pem` and the stored result is #E_TRUST_PROMPT_RESPONSE_REJECT.
         * @param parent A #GtkWindow to use as a parent for the trust prompt dialog
         * @param source an #ESource, with %E_SOURCE_EXTENSION_AUTHENTICATION
         * @param certificate_pem a PEM-encoded certificate for which to show the trust prompt
         * @param certificate_errors errors of the @certificate_pem
         * @param error_text an optional error text to show in the dialog; can be %NULL
         * @param allow_source_save whether can also save any @source changes
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a callback to call, when the prompt (an @source save) is done
         */
        function trust_prompt_run_for_source(
            parent: Gtk.Window,
            source: EDataServer.Source,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags | null,
            error_text: string | null,
            allow_source_save: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gtk.Window> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes the operation started with e_trust_prompt_run_for_source().
         * The `response` will contain a code of the user's choice.
         * The #E_TRUST_PROMPT_RESPONSE_UNKNOWN is used, when the user cancelled the trust
         * prompt dialog and no changes are made with the `source`.
         *
         * If an error occurs, the function sets `error` and returns %FALSE.
         * @param source an #ESource which was used with e_trust_prompt_run_for_source()
         * @param result a #GAsyncResult
         * @param response an output argument, user's response to the trust prompt
         * @returns %TRUE on success, %FALSE on error
         */
        function trust_prompt_run_for_source_finish(
            source: EDataServer.Source,
            result: Gio.AsyncResult,
            response: EDataServer.TrustPromptResponse | null,
        ): boolean;
        /**
         * Runs modal (doesn't return until the dialog is closed) a trust prompt dialog,
         * it is a prompt whether a user wants to accept or reject the `certificate_pem`
         * for the `host` due to the `certificate_errors` errors.
         *
         * The pair `source_extension` and `source_display_name` influences the trust prompt message.
         * If both are set, then the message also contains which source failed to connect according
         * to these two arguments.
         *
         * The dialog can contain a custom error text, passed in as `error_text`.
         * The error might be a detailed error string returned by the server. If set,
         * it is prefixed with "Detailed error:" string.
         * @param parent A #GtkWindow to use as a parent for the trust prompt dialog
         * @param source_extension an #ESource extension, to identify a kind of the source; or %NULL
         * @param source_display_name an #ESource display name, to identify what prompts; or %NULL
         * @param host a host name to which the certificate belongs
         * @param certificate_pem a PEM-encoded certificate for which to show the trust prompt
         * @param certificate_errors errors of the @certificate_pem
         * @param error_text an optional error text to show in the dialog; can be %NULL
         * @returns A code of the user's choice. The #E_TRUST_PROMPT_RESPONSE_UNKNOWN    is returned, when the user cancelled the trust prompt dialog.
         */
        function trust_prompt_run_modal(
            parent: Gtk.Window,
            source_extension: string | null,
            source_display_name: string | null,
            host: string,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags | null,
            error_text?: string | null,
        ): EDataServer.TrustPromptResponse;
        interface CredentialsPrompterLoopPromptFunc {
            (
                prompter: CredentialsPrompter,
                source: EDataServer.Source,
                credentials: EDataServer.NamedParameters,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
        }
        /**
         * An #ECredentialsPrompter prompt flags, influencing behaviour
         * of the e_credentials_prompter_prompt().
         */

        /**
         * An #ECredentialsPrompter prompt flags, influencing behaviour
         * of the e_credentials_prompter_prompt().
         */
        export namespace CredentialsPrompterPromptFlags {
            export const $gtype: GObject.GType<CredentialsPrompterPromptFlags>;
        }

        enum CredentialsPrompterPromptFlags {
            /**
             * No flag is set.
             */
            NONE,
            /**
             * If set, any source changes during the credentials prompts, like
             *   the "remember-password" or user name changes, will be automatically
             *   stored in the source (written on the disk).
             */
            ALLOW_SOURCE_SAVE,
            /**
             * If set, the stored credentials will be returned first. If there are no
             *   credentials saved, then the user will be asked. Any credentials
             *   reprompt should not have set this flag.
             */
            ALLOW_STORED_CREDENTIALS,
        }
        module CellRendererColor {
            // Constructor properties interface

            interface ConstructorProps extends Gtk.CellRenderer.ConstructorProps {
                rgba: Gdk.RGBA;
            }
        }

        class CellRendererColor extends Gtk.CellRenderer {
            static $gtype: GObject.GType<CellRendererColor>;

            // Properties

            get rgba(): Gdk.RGBA;
            set rgba(val: Gdk.RGBA);

            // Constructors

            constructor(properties?: Partial<CellRendererColor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): CellRendererColor;
        }

        module CertificateWidget {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.ScrolledWindow.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {}
        }

        class CertificateWidget extends Gtk.ScrolledWindow implements Atk.ImplementorIface, Gtk.Buildable {
            static $gtype: GObject.GType<CertificateWidget>;

            // Constructors

            constructor(properties?: Partial<CertificateWidget.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): CertificateWidget;

            // Methods

            /**
             * Updates the content of the `self` with the certificate information
             * described by the `der_data` of the length `der_data_len` in the DER
             * format.
             *
             * The content of the `self` is cleared when the `der_data` is %NULL.
             * @param der_data certificate data in DER format, or %NULL
             * @param der_data_len length of the @der_data
             */
            set_der(der_data: any | null, der_data_len: number): void;
            /**
             * Updates the content of the `self` with the certificate information
             * described by the `pem_data` in the PEM format.
             *
             * The content of the `self` is cleared when the `pem_data` is %NULL.
             * @param pem_data certificate data in PEM format, or %NULL
             */
            set_pem(pem_data?: string | null): void;

            // Inherited methods
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

        module CredentialsPrompter {
            // Signal callback interfaces

            interface GetDialogParent {
                (): Gtk.Window | null;
            }

            interface GetDialogParentFull {
                (auth_source?: EDataServer.Source | null): Gtk.Window | null;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    EDataServer.Extensible.ConstructorProps {
                auto_prompt: boolean;
                autoPrompt: boolean;
                provider: EDataServer.SourceCredentialsProvider;
                registry: EDataServer.SourceRegistry;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class CredentialsPrompter extends GObject.Object implements EDataServer.Extensible {
            static $gtype: GObject.GType<CredentialsPrompter>;

            // Properties

            /**
             * Whether the #ECredentialsPrompter can response to credential
             * requests automatically.
             */
            get auto_prompt(): boolean;
            set auto_prompt(val: boolean);
            /**
             * Whether the #ECredentialsPrompter can response to credential
             * requests automatically.
             */
            get autoPrompt(): boolean;
            set autoPrompt(val: boolean);
            /**
             * The #ESourceCredentialsProvider object, which the prompter uses.
             */
            get provider(): EDataServer.SourceCredentialsProvider;
            /**
             * The #ESourceRegistry object, to whose credential requests the prompter listens.
             */
            get registry(): EDataServer.SourceRegistry;

            // Constructors

            constructor(properties?: Partial<CredentialsPrompter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](registry: EDataServer.SourceRegistry): CredentialsPrompter;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'get-dialog-parent', callback: (_source: this) => Gtk.Window | null): number;
            connect_after(signal: 'get-dialog-parent', callback: (_source: this) => Gtk.Window | null): number;
            emit(signal: 'get-dialog-parent'): void;
            connect(
                signal: 'get-dialog-parent-full',
                callback: (_source: this, auth_source: EDataServer.Source | null) => Gtk.Window | null,
            ): number;
            connect_after(
                signal: 'get-dialog-parent-full',
                callback: (_source: this, auth_source: EDataServer.Source | null) => Gtk.Window | null,
            ): number;
            emit(signal: 'get-dialog-parent-full', auth_source?: EDataServer.Source | null): void;

            // Virtual methods

            /**
             * Returns a #GtkWindow, which should be used as a dialog parent. This is determined
             * by an ECredentialsPrompter::get-dialog-parent signal emission. If there is no callback
             * registered or the current callbacks don't have any suitable window, then there's
             * chosen the last active window from the default GApplication, if any available.
             */
            vfunc_get_dialog_parent(): Gtk.Window | null;

            // Methods

            /**
             * Returns, whether can respond to credential prompts automatically.
             * Default value is %TRUE.
             *
             * This property does not influence direct calls of e_credentials_prompter_prompt().
             * @returns Whether can respond to credential prompts automatically.
             */
            get_auto_prompt(): boolean;
            /**
             * Returns whether the auto-prompt is disabled for the given `source`.
             * All sources can be auto-prompted by default. This is a complementary
             * value for the ECredentialsPrompter::auto-prompt property.
             *
             * This value does not influence direct calls of e_credentials_prompter_prompt().
             * @param source an #ESource
             * @returns Whether the auto-prompt is disabled for the given @source
             */
            get_auto_prompt_disabled_for(source: EDataServer.Source): boolean;
            /**
             * Returns a #GtkWindow, which should be used as a dialog parent. This is determined
             * by an ECredentialsPrompter::get-dialog-parent signal emission. If there is no callback
             * registered or the current callbacks don't have any suitable window, then there's
             * chosen the last active window from the default GApplication, if any available.
             * @returns a #GtkWindow, to be used as a dialog parent,    or %NULL.
             */
            get_dialog_parent(): Gtk.Window | null;
            /**
             * Returns a #GtkWindow, which should be used as a dialog parent for the `auth_source`.
             *
             * This is determined by an ECredentialsPrompter::get-dialog-parent-full signal emission
             * and an ECredentialsPrompter::get-dialog-parent when the first doesn't return anything.
             * If there is no callback registered or the current callbacks don't have any suitable
             * window, then there's chosen the last active window from the default GApplication,
             * if any available.
             * @param auth_source an #ESource
             * @returns a #GtkWindow, to be used as a dialog parent,    or %NULL.
             */
            get_dialog_parent_full(auth_source?: EDataServer.Source | null): Gtk.Window | null;
            /**
             * Returns an #ESourceCredentialsProvider, which the `prompter` uses.
             * @returns an #ESourceCredentialsProvider, which the @prompter uses.
             */
            get_provider(): EDataServer.SourceCredentialsProvider;
            /**
             * Returns an #ESourceRegistry, to which the `prompter` listens.
             * @returns an #ESourceRegistry, to which the @prompter listens.
             */
            get_registry(): EDataServer.SourceRegistry;
            /**
             * Runs a credentials prompt loop for `source,` as long as the `func` doesn't
             * indicate that the provided credentials can be used to successfully
             * authenticate against `source<`!-- -->'s server, or that the `func`
             * returns %FALSE. The loop is also teminated when a used cancels
             * the credentials prompt or the `cancellable` is cancelled, though
             * not sooner than the credentials prompt dialog is closed.
             *
             * Note: The function doesn't return until the loop is terminated, either
             *    successfully or unsuccessfully. The function can be called from any
             *    thread, though a dedicated thread is preferred.
             * @param source an #ESource to be prompted credentials for
             * @param flags a bit-or of #ECredentialsPrompterPromptFlags initial flags
             * @param func an #ECredentialsPrompterLoopPromptFunc user function to call to check provided credentials
             * @param cancellable an optional #GCancellable, or %NULL
             * @returns %TRUE, when the credentials were provided successfully and they   can be used to authenticate the @source; %FALSE otherwise.
             */
            loop_prompt_sync(
                source: EDataServer.Source,
                flags: CredentialsPrompterPromptFlags | null,
                func: CredentialsPrompterLoopPromptFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Process all enabled sources with connection state #E_SOURCE_CONNECTION_STATUS_AWAITING_CREDENTIALS,
             * like if they just asked for its credentials for the first time.
             */
            process_awaiting_credentials(): void;
            /**
             * Continues a credential prompt for `source`. Returns, whether anything will be done.
             * The %FALSE either means that the `source<`!-- -->'s connection status is not
             * the %E_SOURCE_CONNECTION_STATUS_AWAITING_CREDENTIALS or it is disabled.
             * @param source an #ESource
             * @returns Whether continues with the credentials prompt.
             */
            process_source(source: EDataServer.Source): boolean;
            /**
             * Asks the `prompter` to prompt for credentials, which are returned
             * to the caller through `callback,` when available.The `flags` are ignored,
             * when the `callback` is %NULL; the credentials are passed to the `source`
             * with e_source_invoke_authenticate() directly, in this case.
             * Call e_credentials_prompter_prompt_finish() in `callback` to get to
             * the provided credentials.
             * @param source an #ESource, which prompt the credentials for
             * @param error_text Additional error text to show to a user, or %NULL
             * @param flags a bit-or of #ECredentialsPrompterPromptFlags
             */
            prompt(
                source: EDataServer.Source,
                error_text: string | null,
                flags: CredentialsPrompterPromptFlags | null,
            ): Promise<[EDataServer.Source | null, EDataServer.NamedParameters | null]>;
            /**
             * Asks the `prompter` to prompt for credentials, which are returned
             * to the caller through `callback,` when available.The `flags` are ignored,
             * when the `callback` is %NULL; the credentials are passed to the `source`
             * with e_source_invoke_authenticate() directly, in this case.
             * Call e_credentials_prompter_prompt_finish() in `callback` to get to
             * the provided credentials.
             * @param source an #ESource, which prompt the credentials for
             * @param error_text Additional error text to show to a user, or %NULL
             * @param flags a bit-or of #ECredentialsPrompterPromptFlags
             * @param callback a callback to call when the credentials are ready, or %NULL
             */
            prompt(
                source: EDataServer.Source,
                error_text: string | null,
                flags: CredentialsPrompterPromptFlags | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asks the `prompter` to prompt for credentials, which are returned
             * to the caller through `callback,` when available.The `flags` are ignored,
             * when the `callback` is %NULL; the credentials are passed to the `source`
             * with e_source_invoke_authenticate() directly, in this case.
             * Call e_credentials_prompter_prompt_finish() in `callback` to get to
             * the provided credentials.
             * @param source an #ESource, which prompt the credentials for
             * @param error_text Additional error text to show to a user, or %NULL
             * @param flags a bit-or of #ECredentialsPrompterPromptFlags
             * @param callback a callback to call when the credentials are ready, or %NULL
             */
            prompt(
                source: EDataServer.Source,
                error_text: string | null,
                flags: CredentialsPrompterPromptFlags | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[EDataServer.Source | null, EDataServer.NamedParameters | null]> | void;
            /**
             * Finishes a credentials prompt previously started with e_credentials_prompter_prompt().
             * The `out_source` will have set a referenced #ESource, for which the prompt
             * was started. Unref it, when  no longer needed. Similarly the `out_credentials`
             * will have set a newly allocated #ENamedParameters structure with provided credentials,
             * which should be freed with e_named_credentials_free() when no longer needed.
             * Both output arguments will be set to %NULL on error and %FALSE will be returned.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE otherwise.
             */
            prompt_finish(
                result: Gio.AsyncResult,
            ): [boolean, EDataServer.Source | null, EDataServer.NamedParameters | null];
            /**
             * Registers a prompter implementation for a given authentication method. If there is
             * registered a prompter for the same `authentication_method,` then the function does
             * nothing, otherwise it adds its own reference on the `prompter_impl,` and uses it
             * for that authentication method. One `prompter_impl` can be registered for multiple
             * authentication methods.
             *
             * A special value %NULL can be used for the `authentication_method,` which means
             * a default credentials prompter, that is to be used when there is no prompter
             * registered for the exact authentication method.
             * @param authentication_method an authentication method to registr @prompter_impl for; or %NULL
             * @param prompter_impl an #ECredentialsPrompterImpl
             * @returns %TRUE on success, %FALSE on failure or when there was another prompter implementation registered for the given authentication method.
             */
            register_impl(authentication_method: string | null, prompter_impl: CredentialsPrompterImpl): boolean;
            /**
             * Sets whether can respond to credential prompts automatically. That means that
             * whenever any ESource will ask for credentials, it'll try to provide them.
             *
             * Use e_credentials_prompter_set_auto_prompt_disabled_for() to influence
             * auto-prompt per an #ESource.
             *
             * This property does not influence direct calls of e_credentials_prompter_prompt().
             * @param auto_prompt new value of the auto-prompt property
             */
            set_auto_prompt(auto_prompt: boolean): void;
            /**
             * Sets whether the auto-prompt should be disabled for the given `source`.
             * All sources can be auto-prompted by default. This is a complementary
             * value for the ECredentialsPrompter::auto-prompt property.
             *
             * This value does not influence direct calls of e_credentials_prompter_prompt().
             * @param source an #ESource
             * @param is_disabled whether the auto-prompt should be disabled for this @source
             */
            set_auto_prompt_disabled_for(source: EDataServer.Source, is_disabled: boolean): void;
            /**
             * Unregisters previously registered `prompter_impl` for the given `autnetication_method` with
             * e_credentials_prompter_register_impl(). Function does nothing, if no such authentication
             * method is registered or if it has set a different prompter implementation.
             * @param authentication_method an authentication method to registr @prompter_impl for; or %NULL
             * @param prompter_impl an #ECredentialsPrompterImpl
             */
            unregister_impl(authentication_method: string | null, prompter_impl: CredentialsPrompterImpl): void;

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
            list_extensions(extension_type: GObject.GType): EDataServer.Extension[];
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

        module CredentialsPrompterImpl {
            // Signal callback interfaces

            interface PromptFinished {
                (prompt_id?: any | null, credentials?: EDataServer.NamedParameters | null): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends EDataServer.Extension.ConstructorProps {}
        }

        /**
         * Credentials prompter implementation base structure. The descendants
         * implement ECredentialsPrompterImpl::prompt(), which is used to
         * prompt for credentials. The descendants are automatically registered
         * into an #ECredentialsPrompter.
         */
        abstract class CredentialsPrompterImpl extends EDataServer.Extension {
            static $gtype: GObject.GType<CredentialsPrompterImpl>;

            // Constructors

            constructor(properties?: Partial<CredentialsPrompterImpl.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'prompt-finished',
                callback: (
                    _source: this,
                    prompt_id: any | null,
                    credentials: EDataServer.NamedParameters | null,
                ) => void,
            ): number;
            connect_after(
                signal: 'prompt-finished',
                callback: (
                    _source: this,
                    prompt_id: any | null,
                    credentials: EDataServer.NamedParameters | null,
                ) => void,
            ): number;
            emit(
                signal: 'prompt-finished',
                prompt_id?: any | null,
                credentials?: EDataServer.NamedParameters | null,
            ): void;

            // Virtual methods

            /**
             * Asks the `prompt_impl` to cancel current prompt, which should have ID `prompt_id`.
             * @param prompt_id a prompt ID to cancel
             */
            vfunc_cancel_prompt(prompt_id?: any | null): void;
            vfunc_process_prompt(
                prompt_id: any | null,
                auth_source: EDataServer.Source,
                cred_source: EDataServer.Source,
                error_text: string,
                credentials: EDataServer.NamedParameters,
            ): void;
            vfunc_prompt_finished(prompt_id: any | null, credentials: EDataServer.NamedParameters): void;

            // Methods

            /**
             * Asks the `prompt_impl` to cancel current prompt, which should have ID `prompt_id`.
             * @param prompt_id a prompt ID to cancel
             */
            cancel_prompt(prompt_id?: any | null): void;
            /**
             * Returns an #ECredentialsPrompter with which the `prompter_impl` is associated.
             * @returns an #ECredentialsPrompter
             */
            get_credentials_prompter(): any | null;
            /**
             * Runs a credentials prompt for the `prompter_impl`. The actual prompter implementation
             * receives the prompt through ECredentialsPrompterImplClass::process_prompt(), where the given
             * `prompt_id` is used for an identification. The prompt is left 'active' as long as it is
             * not finished with a call of e_credentials_prompter_impl_prompt_finish(). This should be
             * called even for cancelled prompts. The prompt can be cancelled before it's processed,
             * using the e_credentials_prompter_impl_cancel_prompt().
             *
             * The `auth_source` can be the same as `cred_source,` in case the credentials
             * are stored only for that particular source. If the sources share credentials,
             * which can be a case when the `auth_source` is part of a collection, then
             * the `cred_stource` can be that collection source.
             * @param prompt_id a prompt ID to be passed to e_credentials_prompter_impl_prompt_finish()
             * @param auth_source an #ESource, to prompt the credentials for (the source which asked for credentials)
             * @param cred_source a parent #ESource, from which credentials were taken, or should be stored to
             * @param error_text an optional error text from the previous credentials prompt; can be %NULL
             * @param credentials credentials, as saved in keyring; can be empty, but not %NULL
             */
            prompt(
                prompt_id: any | null,
                auth_source: EDataServer.Source,
                cred_source: EDataServer.Source,
                error_text: string | null,
                credentials: EDataServer.NamedParameters,
            ): void;
            /**
             * The actual credentials prompt implementation finishes a previously started
             * credentials prompt `prompt_id` with ECredentialsPrompterImplClass::process_prompt()
             * by a call to this function. This function should be called regardless the prompt
             * was or was not cancelled with e_credentials_prompter_impl_cancel_prompt().
             * Once the prompt is finished another queued is started, if any pending exists.
             * Use %NULL `credentials` for cancelled prompts, otherwise the credentials are used
             * for authentication of the associated #ESource.
             * @param prompt_id a prompt ID
             * @param credentials credentials to use; can be %NULL for cancelled prompts
             */
            prompt_finish(prompt_id?: any | null, credentials?: EDataServer.NamedParameters | null): void;
        }

        module CredentialsPrompterImplOAuth2 {
            // Constructor properties interface

            interface ConstructorProps extends CredentialsPrompterImpl.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class CredentialsPrompterImplOAuth2 extends CredentialsPrompterImpl {
            static $gtype: GObject.GType<CredentialsPrompterImplOAuth2>;

            // Constructors

            constructor(properties?: Partial<CredentialsPrompterImplOAuth2.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): CredentialsPrompterImplOAuth2;
        }

        module CredentialsPrompterImplPassword {
            // Constructor properties interface

            interface ConstructorProps extends CredentialsPrompterImpl.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class CredentialsPrompterImplPassword extends CredentialsPrompterImpl {
            static $gtype: GObject.GType<CredentialsPrompterImplPassword>;

            // Constructors

            constructor(properties?: Partial<CredentialsPrompterImplPassword.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): CredentialsPrompterImplPassword;
        }

        module RemindersWidget {
            // Signal callback interfaces

            interface Activated {
                (object: ECal.ReminderData): boolean;
            }

            interface Changed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Grid.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    EDataServer.Extensible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.Orientable.ConstructorProps {
                empty: boolean;
                watcher: ECal.ReminderWatcher;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using
         * the functions below.
         */
        class RemindersWidget
            extends Gtk.Grid
            implements Atk.ImplementorIface, EDataServer.Extensible, Gtk.Buildable, Gtk.Orientable
        {
            static $gtype: GObject.GType<RemindersWidget>;

            // Properties

            get empty(): boolean;
            get watcher(): ECal.ReminderWatcher;

            // Constructors

            constructor(properties?: Partial<RemindersWidget.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](watcher: ECal.ReminderWatcher): RemindersWidget;
            // Conflicted with Gtk.Grid.new

            static ['new'](...args: never[]): any;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'activated', callback: (_source: this, object: ECal.ReminderData) => boolean): number;
            connect_after(signal: 'activated', callback: (_source: this, object: ECal.ReminderData) => boolean): number;
            emit(signal: 'activated', object: ECal.ReminderData): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;

            // Virtual methods

            vfunc_activated(rd: ECal.ReminderData): boolean;
            vfunc_changed(): void;

            // Methods

            get_paned(): Gtk.Paned;
            get_settings(): Gio.Settings;
            // Conflicted with Gtk.Widget.get_settings
            get_settings(...args: never[]): any;
            get_tree_view(): Gtk.TreeView;
            get_watcher(): ECal.ReminderWatcher;
            is_empty(): boolean;
            /**
             * Shows a warning in the GUI with the `error` message, optionally prefixed
             * with `prefix`. When `error` is %NULL, an "Unknown error" message is shown
             * instead.
             * @param prefix an optional prefix to show before the error message, or %NULL for none
             * @param error a #GError to show the message from in the UI, or %NULL for unknown error
             */
            report_error(prefix?: string | null, error?: GLib.Error | null): void;

            // Inherited properties
            /**
             * The orientation of the orientable.
             */
            get orientation(): Gtk.Orientation;
            set orientation(val: Gtk.Orientation);

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
            list_extensions(extension_type: GObject.GType): EDataServer.Extension[];
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
             * Retrieves the orientation of the `orientable`.
             * @returns the orientation of the @orientable.
             */
            get_orientation(): Gtk.Orientation;
            /**
             * Sets the orientation of the `orientable`.
             * @param orientation the orientable’s new orientation.
             */
            set_orientation(orientation: Gtk.Orientation | null): void;
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

        module WebDAVDiscoverContent {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Grid.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.Orientable.ConstructorProps {}
        }

        class WebDAVDiscoverContent extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
            static $gtype: GObject.GType<WebDAVDiscoverContent>;

            // Constructors

            constructor(properties?: Partial<WebDAVDiscoverContent.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                credentials_prompter: CredentialsPrompter,
                source: EDataServer.Source | null,
                base_url: string | null,
                supports_filter: number,
            ): WebDAVDiscoverContent;
            // Conflicted with Gtk.Grid.new

            static ['new'](...args: never[]): any;

            // Methods

            /**
             * Returns currently set base URL for the `content`. This is used to overwrite the one
             * set on the #ESource from the creation time. The URL can be either a full URL, a path
             * or even a %NULL.
             * @returns currently set base URL for the @content.
             */
            get_base_url(): string;
            get_multiselect(): boolean;
            /**
             * Returns information about selected source at index `index`. The function can be called
             * multiple times, with the index starting at zero and as long as it doesn't return %FALSE.
             * If the `content` doesn't have allowed multiselection, then the only valid `index` is 0.
             *
             * All the `out_href,` `out_display_name` and `out_color` are newly allocated strings, which should
             * be freed with g_free(), when no longer needed.
             * @param index an index of the selected source; counts from 0
             * @returns %TRUE, when a selected source of index @index exists, %FALSE otherwise.
             */
            get_selected(index: number): [boolean, string, number, string, string, number];
            /**
             * Returns inner #GtkTreeViewSelection. This is meant to be able to connect
             * to its "changed" signal and update other parts of the parent widgets accordingly.
             * @returns inner #GtkTreeViewSelection
             */
            get_tree_selection(): Gtk.TreeSelection;
            /**
             * Get currently selected user address in the `content,` if the server returned any.
             * This value has meaning only with calendar sources.
             * @returns currently selected user address. The   returned string is newly allocated and should be freed with g_free() when   no longer needed. If there are none addresses provided by the server, or   no calendar sources were found, then %NULL is returned instead.
             */
            get_user_address(): string | null;
            /**
             * Asynchronously starts refresh of the `content`. This means to access the server
             * and search it for available sources. The `content` shows a feedback and a Cancel
             * button during the operation.
             *
             * The `display_name` is used only if the `content` wasn't created with an #ESource and
             * it's shown in the password prompts, if there are required any.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_webdav_discover_content_refresh_finish() to get the result of the operation.
             * @param display_name optional display name to use for scratch sources
             * @param cancellable optional #GCancellable object, or %NULL
             */
            refresh(display_name?: string | null, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously starts refresh of the `content`. This means to access the server
             * and search it for available sources. The `content` shows a feedback and a Cancel
             * button during the operation.
             *
             * The `display_name` is used only if the `content` wasn't created with an #ESource and
             * it's shown in the password prompts, if there are required any.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_webdav_discover_content_refresh_finish() to get the result of the operation.
             * @param display_name optional display name to use for scratch sources
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            refresh(
                display_name: string | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously starts refresh of the `content`. This means to access the server
             * and search it for available sources. The `content` shows a feedback and a Cancel
             * button during the operation.
             *
             * The `display_name` is used only if the `content` wasn't created with an #ESource and
             * it's shown in the password prompts, if there are required any.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_webdav_discover_content_refresh_finish() to get the result of the operation.
             * @param display_name optional display name to use for scratch sources
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            refresh(
                display_name?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_webdav_discover_content_refresh(). If an
             * error occurred, the function will set `error` and return %FALSE. There is
             * available e_webdav_discover_content_show_error() for convenience, which
             * shows the error within `content` and takes care of it when refreshing
             * the content.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            refresh_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sets base URL for the `content`. This is used to overwrite the one set on
             * the #ESource from the creation time. The URL can be either a full URL, a path
             * or even a %NULL.
             * @param base_url a base URL
             */
            set_base_url(base_url: string): void;
            /**
             * Sets whether the WebDAV discovery content allows multiselect.
             * @param multiselect whether multiselect is allowed
             */
            set_multiselect(multiselect: boolean): void;
            /**
             * Shows the `error` within `content,` unless it's a #G_IO_ERROR_CANCELLED, or %NULL,
             * which are safely ignored. The advantage of this function is that the error
             * message is removed when the refresh operation is started.
             * @param error a #GError to show in the UI, or %NULL
             */
            show_error(error: GLib.Error): void;

            // Inherited properties
            /**
             * The orientation of the orientable.
             */
            get orientation(): Gtk.Orientation;
            set orientation(val: Gtk.Orientation);

            // Inherited methods
            /**
             * Retrieves the orientation of the `orientable`.
             * @returns the orientation of the @orientable.
             */
            get_orientation(): Gtk.Orientation;
            /**
             * Sets the orientation of the `orientable`.
             * @param orientation the orientable’s new orientation.
             */
            set_orientation(orientation: Gtk.Orientation | null): void;
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

        module WebDAVDiscoverDialog {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Dialog.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {}
        }

        class WebDAVDiscoverDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
            static $gtype: GObject.GType<WebDAVDiscoverDialog>;

            // Constructors

            constructor(properties?: Partial<WebDAVDiscoverDialog.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                parent: Gtk.Window,
                title: string,
                credentials_prompter: CredentialsPrompter,
                source: EDataServer.Source,
                base_url: string | null,
                supports_filter: number,
            ): WebDAVDiscoverDialog;
            // Conflicted with Gtk.Dialog.new

            static ['new'](...args: never[]): any;

            // Methods

            /**
             * Returns inner WebDAV discovery content, which can be further manipulated.
             * @returns inner WebDAV discovery content
             */
            get_content(): WebDAVDiscoverContent;
            /**
             * Invokes refresh of the inner content of the WebDAV discovery dialog.
             */
            refresh(): void;

            // Inherited methods
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

        type CellRendererColorClass = typeof CellRendererColor;
        abstract class CellRendererColorPrivate {
            static $gtype: GObject.GType<CellRendererColorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CertificateWidgetClass = typeof CertificateWidget;
        abstract class CertificateWidgetPrivate {
            static $gtype: GObject.GType<CertificateWidgetPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CredentialsPrompterClass = typeof CredentialsPrompter;
        type CredentialsPrompterImplClass = typeof CredentialsPrompterImpl;
        type CredentialsPrompterImplOAuth2Class = typeof CredentialsPrompterImplOAuth2;
        abstract class CredentialsPrompterImplOAuth2Private {
            static $gtype: GObject.GType<CredentialsPrompterImplOAuth2Private>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CredentialsPrompterImplPasswordClass = typeof CredentialsPrompterImplPassword;
        abstract class CredentialsPrompterImplPasswordPrivate {
            static $gtype: GObject.GType<CredentialsPrompterImplPasswordPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class CredentialsPrompterImplPrivate {
            static $gtype: GObject.GType<CredentialsPrompterImplPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class CredentialsPrompterPrivate {
            static $gtype: GObject.GType<CredentialsPrompterPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RemindersWidgetClass = typeof RemindersWidget;
        abstract class RemindersWidgetPrivate {
            static $gtype: GObject.GType<RemindersWidgetPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type WebDAVDiscoverContentClass = typeof WebDAVDiscoverContent;
        type WebDAVDiscoverDialogClass = typeof WebDAVDiscoverDialog;
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

    export default EDataServerUI;
}

declare module 'gi://EDataServerUI' {
    import EDataServerUI12 from 'gi://EDataServerUI?version=1.2';
    export default EDataServerUI12;
}
// END
