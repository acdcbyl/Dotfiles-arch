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

declare module 'gi://Nautilus?version=4.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Nautilus {
        /**
         * Nautilus-4.0
         */

        /**
         * Return values for asynchronous operations performed by the extension.
         * See nautilus_info_provider_update_file_info().
         */

        /**
         * Return values for asynchronous operations performed by the extension.
         * See nautilus_info_provider_update_file_info().
         */
        export namespace OperationResult {
            export const $gtype: GObject.GType<OperationResult>;
        }

        enum OperationResult {
            /**
             * the operation succeeded, and the extension
             *  is done with the request.
             */
            COMPLETE,
            /**
             * the operation failed.
             */
            FAILED,
            /**
             * the extension has begin an async operation.
             *  When this value is returned, the extension must set the handle parameter
             *  and call the callback closure when the operation is complete.
             */
            IN_PROGRESS,
        }
        function file_info_create(location: Gio.File): FileInfo;
        function file_info_create_for_uri(uri: string): FileInfo;
        function file_info_list_copy(files: FileInfo[]): FileInfo[];
        function file_info_list_free(files: FileInfo[]): void;
        function file_info_lookup(location: Gio.File): FileInfo | null;
        function file_info_lookup_for_uri(uri: string): FileInfo | null;
        function info_provider_update_complete_invoke(
            update_complete: GObject.Closure,
            provider: InfoProvider,
            handle: OperationHandle,
            result: OperationResult | null,
        ): void;
        module Column {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                attribute: string;
                attribute_q: number;
                attributeQ: number;
                default_sort_order: boolean;
                defaultSortOrder: boolean;
                description: string;
                label: string;
                name: string;
                visible: boolean;
                xalign: number;
            }
        }

        /**
         * List view column descriptor object.
         *
         * `NautilusColumn` is an object that describes a column in the file manager
         * list view. Extensions can provide `NautilusColumn` by registering a
         * [iface`ColumnProvider]` and returning them from
         * [method`ColumnProvider`.get_columns], which will be called by the main
         * application when creating a view.
         */
        class Column extends GObject.Object {
            static $gtype: GObject.GType<Column>;

            // Properties

            /**
             * The file attribute to be displayed in the column.
             */
            get attribute(): string;
            set attribute(val: string);
            get attribute_q(): number;
            get attributeQ(): number;
            /**
             * Actually meant to store the enum values of GtkSortType, but we don't want
             * extensions to depend on GTK. Also, this is for internal consumption only.
             */
            get default_sort_order(): boolean;
            set default_sort_order(val: boolean);
            /**
             * Actually meant to store the enum values of GtkSortType, but we don't want
             * extensions to depend on GTK. Also, this is for internal consumption only.
             */
            get defaultSortOrder(): boolean;
            set defaultSortOrder(val: boolean);
            /**
             * The user-visible description of the column.
             */
            get description(): string;
            set description(val: string);
            /**
             * The label to display in the column.
             */
            get label(): string;
            set label(val: string);
            /**
             * The identifier for the column.
             */
            get name(): string;
            /**
             * Whether to show the NautilusColumn in a ColumnChooser.
             * This is not meant to be used by extensions. The value may be changed
             * over the life of the NautilusColumn.
             */
            get visible(): boolean;
            set visible(val: boolean);
            /**
             * The x-alignment of the column.
             */
            get xalign(): number;
            set xalign(val: number);

            // Constructors

            constructor(properties?: Partial<Column.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string, attribute: string, label: string, description: string): Column;
        }

        module Menu {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Menu extends GObject.Object {
            static $gtype: GObject.GType<Menu>;

            // Constructors

            constructor(properties?: Partial<Menu.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Menu;

            // Methods

            append_item(item: MenuItem): void;
            get_items(): MenuItem[] | null;
        }

        module MenuItem {
            // Signal callback interfaces

            interface Activate {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                icon: string;
                label: string;
                menu: Menu;
                name: string;
                priority: boolean;
                sensitive: boolean;
                tip: string;
            }
        }

        class MenuItem extends GObject.Object {
            static $gtype: GObject.GType<MenuItem>;

            // Properties

            get icon(): string;
            set icon(val: string);
            get label(): string;
            set label(val: string);
            get menu(): Menu;
            set menu(val: Menu);
            get name(): string;
            get priority(): boolean;
            set priority(val: boolean);
            get sensitive(): boolean;
            set sensitive(val: boolean);
            get tip(): string;
            set tip(val: string);

            // Constructors

            constructor(properties?: Partial<MenuItem.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string, label: string, tip?: string | null, icon?: string | null): MenuItem;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'activate', callback: (_source: this) => void): number;
            connect_after(signal: 'activate', callback: (_source: this) => void): number;
            emit(signal: 'activate'): void;

            // Static methods

            static list_free(item_list: MenuItem[]): void;

            // Virtual methods

            /**
             * Emits #NautilusMenuItem::activate.
             */
            vfunc_activate(): void;

            // Methods

            /**
             * Emits #NautilusMenuItem::activate.
             */
            activate(): void;
            /**
             * Attaches a menu to the given #NautilusMenuItem.
             * @param menu pointer to a #NautilusMenu to attach to the button
             */
            set_submenu(menu: Menu): void;
        }

        module PropertiesItem {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                name: string;
                value: string;
            }
        }

        class PropertiesItem extends GObject.Object {
            static $gtype: GObject.GType<PropertiesItem>;

            // Properties

            get name(): string;
            get value(): string;

            // Constructors

            constructor(properties?: Partial<PropertiesItem.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string, value: string): PropertiesItem;

            // Methods

            get_name(): string;
            get_value(): string;
        }

        module PropertiesModel {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                model: Gio.ListModel;
                title: string;
            }
        }

        class PropertiesModel extends GObject.Object {
            static $gtype: GObject.GType<PropertiesModel>;

            // Properties

            get model(): Gio.ListModel;
            get title(): string;
            set title(val: string);

            // Constructors

            constructor(properties?: Partial<PropertiesModel.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](title: string, model: Gio.ListModel): PropertiesModel;

            // Methods

            get_model(): Gio.ListModel;
            get_title(): string;
            set_title(title: string): void;
        }

        type ColumnClass = typeof Column;
        type ColumnProviderInterface = typeof ColumnProvider;
        type FileInfoInterface = typeof FileInfo;
        type InfoProviderInterface = typeof InfoProvider;
        type MenuClass = typeof Menu;
        type MenuItemClass = typeof MenuItem;
        type MenuProviderInterface = typeof MenuProvider;
        /**
         * Handle for asynchronous interfaces. These are opaque handles that must
         * be unique within an extension object. These are returned by operations
         * that return #NAUTILUS_OPERATION_IN_PROGRESS.
         */
        abstract class OperationHandle {
            static $gtype: GObject.GType<OperationHandle>;

            // Constructors

            _init(...args: any[]): void;
        }

        type PropertiesItemClass = typeof PropertiesItem;
        type PropertiesModelClass = typeof PropertiesModel;
        type PropertiesModelProviderInterface = typeof PropertiesModelProvider;
        module ColumnProvider {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface ColumnProviderNamespace {
            $gtype: GObject.GType<ColumnProvider>;
            prototype: ColumnProvider;
        }
        interface ColumnProvider extends GObject.Object {
            // Methods

            get_columns(): Column[] | null;

            // Virtual methods

            /**
             * Returns a #GList of #NautilusColumn.
             *               See nautilus_column_provider_get_columns() for details.
             */
            vfunc_get_columns(): Column[] | null;
        }

        export const ColumnProvider: ColumnProviderNamespace & {
            new (): ColumnProvider; // This allows `obj instanceof ColumnProvider`
        };

        module FileInfo {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface FileInfoNamespace {
            $gtype: GObject.GType<FileInfo>;
            prototype: FileInfo;

            create(location: Gio.File): FileInfo;
            create_for_uri(uri: string): FileInfo;
            list_copy(files: FileInfo[]): FileInfo[];
            list_free(files: FileInfo[]): void;
            lookup(location: Gio.File): FileInfo | null;
            lookup_for_uri(uri: string): FileInfo | null;
        }
        interface FileInfo extends GObject.Object {
            // Methods

            add_emblem(emblem_name: string): void;
            add_string_attribute(attribute_name: string, value: string): void;
            can_write(): boolean;
            get_activation_uri(): string;
            get_file_type(): Gio.FileType;
            get_location(): Gio.File;
            get_mime_type(): string;
            get_mount(): Gio.Mount | null;
            get_name(): string;
            /**
             * It's not safe to call this recursively multiple times, as it works
             * only for files already cached by Nautilus.
             * @returns a #NautilusFileInfo for the parent of @file_info,                                      or %NULL if @file_info has no parent.
             */
            get_parent_info(): FileInfo | null;
            get_parent_location(): Gio.File | null;
            get_parent_uri(): string;
            get_string_attribute(attribute_name: string): string | null;
            get_uri(): string;
            get_uri_scheme(): string;
            invalidate_extension_info(): void;
            is_directory(): boolean;
            is_gone(): boolean;
            is_mime_type(mime_type: string): boolean;

            // Virtual methods

            /**
             * Adds an emblem to this file.
             *              See nautilus_file_info_add_emblem() for details.
             * @param emblem_name the name of an emblem
             */
            vfunc_add_emblem(emblem_name: string): void;
            /**
             * Sets the specified string file attribute value.
             *                        See nautilus_file_info_add_string_attribute() for details.
             * @param attribute_name the name of an attribute
             * @param value the name of an attribute
             */
            vfunc_add_string_attribute(attribute_name: string, value: string): void;
            /**
             * Returns whether the file is writable.
             *             See nautilus_file_info_can_write() for details.
             */
            vfunc_can_write(): boolean;
            /**
             * Returns the file activation URI as a string.
             *                      See nautilus_file_info_get_activation_uri() for details.
             */
            vfunc_get_activation_uri(): string;
            /**
             * Returns the file type.
             *                 See nautilus_file_info_get_file_type() for details.
             */
            vfunc_get_file_type(): Gio.FileType;
            /**
             * Returns the file location as a #GFile.
             *                See nautilus_file_info_get_location() for details.
             */
            vfunc_get_location(): Gio.File;
            /**
             * Returns the file mime type as a string.
             *                 See nautilus_file_info_get_mime_type() for details.
             */
            vfunc_get_mime_type(): string;
            /**
             * Returns the file mount as a #GMount.
             *             See nautilus_file_info_get_mount() for details.
             */
            vfunc_get_mount(): Gio.Mount | null;
            /**
             * Returns the file name as a string.
             *            See nautilus_file_info_get_name() for details.
             */
            vfunc_get_name(): string;
            /**
             * It's not safe to call this recursively multiple times, as it works
             * only for files already cached by Nautilus.
             */
            vfunc_get_parent_info(): FileInfo | null;
            /**
             * Returns the file parent location as a #GFile.
             *                       See nautilus_file_info_get_parent_location() for details.
             */
            vfunc_get_parent_location(): Gio.File | null;
            /**
             * Returns the file parent URI as a string.
             *                  See nautilus_file_info_get_parent_uri() for details.
             */
            vfunc_get_parent_uri(): string;
            /**
             * Returns the specified file attribute as a string.
             *                        See nautilus_file_info_get_string_attribute() for details.
             * @param attribute_name the name of an attribute
             */
            vfunc_get_string_attribute(attribute_name: string): string | null;
            /**
             * Returns the file URI as a string.
             *           See nautilus_file_info_get_uri() for details.
             */
            vfunc_get_uri(): string;
            /**
             * Returns the file URI scheme as a string.
             *                  See nautilus_file_info_get_uri_scheme() for details.
             */
            vfunc_get_uri_scheme(): string;
            /**
             * Invalidates information of the file provided by extensions.
             *                             See nautilus_file_info_invalidate_extension_info() for details.
             */
            vfunc_invalidate_extension_info(): void;
            /**
             * Returns whether the file is a directory.
             *                See nautilus_file_info_is_directory() for details.
             */
            vfunc_is_directory(): boolean;
            /**
             * Returns whether the file info is gone.
             *           See nautilus_file_info_is_gone() for details.
             */
            vfunc_is_gone(): boolean;
            /**
             * Returns whether the file is the given mime type.
             *                See nautilus_file_info_is_mime_type() for details.
             * @param mime_type a MIME type
             */
            vfunc_is_mime_type(mime_type: string): boolean;
        }

        export const FileInfo: FileInfoNamespace & {
            new (): FileInfo; // This allows `obj instanceof FileInfo`
        };

        module InfoProvider {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface InfoProviderNamespace {
            $gtype: GObject.GType<InfoProvider>;
            prototype: InfoProvider;

            update_complete_invoke(
                update_complete: GObject.Closure,
                provider: InfoProvider,
                handle: OperationHandle,
                result: OperationResult,
            ): void;
        }
        interface InfoProvider extends GObject.Object {
            // Methods

            cancel_update(handle: OperationHandle): void;
            update_file_info(
                file: FileInfo,
                update_complete: GObject.Closure,
            ): [OperationResult, OperationHandle | null];

            // Virtual methods

            /**
             * Cancels a previous call to nautilus_info_provider_update_file_info().
             *                 See nautilus_info_provider_cancel_update() for details.
             * @param handle the opaque #NautilusOperationHandle returned from a previous call to          nautilus_info_provider_update_file_info().
             */
            vfunc_cancel_update(handle: OperationHandle): void;
            /**
             * Returns a #NautilusOperationResult.
             *                    See nautilus_info_provider_update_file_info() for details.
             * @param file a #NautilusFileInfo
             * @param update_complete the closure to invoke at some later time when returning                   @NAUTILUS_OPERATION_IN_PROGRESS.
             */
            vfunc_update_file_info(
                file: FileInfo,
                update_complete: GObject.Closure,
            ): [OperationResult, OperationHandle | null];
        }

        export const InfoProvider: InfoProviderNamespace & {
            new (): InfoProvider; // This allows `obj instanceof InfoProvider`
        };

        module MenuProvider {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface MenuProviderNamespace {
            $gtype: GObject.GType<MenuProvider>;
            prototype: MenuProvider;
        }
        interface MenuProvider extends GObject.Object {
            // Methods

            /**
             * Emits #NautilusMenuProvider::items-updated.
             */
            emit_items_updated_signal(): void;
            get_background_items(current_folder: FileInfo): MenuItem[] | null;
            get_file_items(files: FileInfo[]): MenuItem[] | null;

            // Virtual methods

            /**
             * Returns a #GList of #NautilusMenuItem.
             *                        See nautilus_menu_provider_get_background_items() for details.
             * @param current_folder the folder for which background items are requested
             */
            vfunc_get_background_items(current_folder: FileInfo): MenuItem[] | null;
            /**
             * Returns a #GList of #NautilusMenuItem.
             *                  See nautilus_menu_provider_get_file_items() for details.
             * @param files a list of #NautilusFileInfo
             */
            vfunc_get_file_items(files: FileInfo[]): MenuItem[] | null;
        }

        export const MenuProvider: MenuProviderNamespace & {
            new (): MenuProvider; // This allows `obj instanceof MenuProvider`
        };

        module PropertiesModelProvider {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface PropertiesModelProviderNamespace {
            $gtype: GObject.GType<PropertiesModelProvider>;
            prototype: PropertiesModelProvider;
        }
        interface PropertiesModelProvider extends GObject.Object {
            // Methods

            /**
             * This function is called by the application when it wants properties models
             * from the extension.
             *
             * This function is called in the main thread before the Properties are shown,
             * so it should return quickly. The models can be populated and updated
             * asynchronously.
             * @param files a #GList of #NautilusFileInfo
             * @returns A #GList of allocated #NautilusPropertiesModel models.
             */
            get_models(files: FileInfo[]): PropertiesModel[] | null;

            // Virtual methods

            /**
             * This function is called by the application when it wants properties models
             * from the extension.
             *
             * This function is called in the main thread before the Properties are shown,
             * so it should return quickly. The models can be populated and updated
             * asynchronously.
             * @param files a #GList of #NautilusFileInfo
             */
            vfunc_get_models(files: FileInfo[]): PropertiesModel[] | null;
        }

        export const PropertiesModelProvider: PropertiesModelProviderNamespace & {
            new (): PropertiesModelProvider; // This allows `obj instanceof PropertiesModelProvider`
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

    export default Nautilus;
}

declare module 'gi://Nautilus' {
    import Nautilus40 from 'gi://Nautilus?version=4.0';
    export default Nautilus40;
}
// END
