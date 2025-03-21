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

declare module 'gi://Dbusmenu?version=0.4' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';

    export namespace Dbusmenu {
        /**
         * Dbusmenu-0.4
         */

        /**
         * Tracks how the menus should be presented to the user.
         */

        /**
         * Tracks how the menus should be presented to the user.
         */
        export namespace Status {
            export const $gtype: GObject.GType<Status>;
        }

        enum Status {
            /**
             * Everything is normal
             */
            NORMAL,
            /**
             * The menus should be shown at a higher priority
             */
            NOTICE,
        }
        /**
         * The direction of text that the strings that this server
         * 	will be sending strings as.
         */

        /**
         * The direction of text that the strings that this server
         * 	will be sending strings as.
         */
        export namespace TextDirection {
            export const $gtype: GObject.GType<TextDirection>;
        }

        enum TextDirection {
            /**
             * Unspecified text direction
             */
            NONE,
            /**
             * Left-to-right text direction
             */
            LTR,
            /**
             * Right-to-left text direction
             */
            RTL,
        }
        /**
         * String to access property #DbusmenuClient:dbus-name
         */
        const CLIENT_PROP_DBUS_NAME: string;
        /**
         * String to access property #DbusmenuClient:dbus-object
         */
        const CLIENT_PROP_DBUS_OBJECT: string;
        /**
         * String to access property #DbusmenuClient:group-events
         */
        const CLIENT_PROP_GROUP_EVENTS: string;
        /**
         * String to access property #DbusmenuClient:status
         */
        const CLIENT_PROP_STATUS: string;
        /**
         * String to access property #DbusmenuClient:text-direction
         */
        const CLIENT_PROP_TEXT_DIRECTION: string;
        /**
         * String to attach to signal #DbusmenuClient::event-result
         */
        const CLIENT_SIGNAL_EVENT_RESULT: string;
        /**
         * String to attach to signal #DbusmenuClient::icon-theme-dirs-changed
         */
        const CLIENT_SIGNAL_ICON_THEME_DIRS_CHANGED: string;
        /**
         * String to attach to signal #DbusmenuClient::item-activate
         */
        const CLIENT_SIGNAL_ITEM_ACTIVATE: string;
        /**
         * String to attach to signal #DbusmenuClient::layout-updated
         */
        const CLIENT_SIGNAL_LAYOUT_UPDATED: string;
        /**
         * String to attach to signal #DbusmenuClient::new-menuitem
         */
        const CLIENT_SIGNAL_NEW_MENUITEM: string;
        /**
         * String to attach to signal #DbusmenuClient::root-changed
         */
        const CLIENT_SIGNAL_ROOT_CHANGED: string;
        /**
         * Used to set the 'type' property on a menu item to create
         * a standard menu item.
         */
        const CLIENT_TYPES_DEFAULT: string;
        /**
         * Used to set the 'type' property on a menu item to create
         * an image menu item.  Deprecated as standard menu items now
         * support images as well.
         */
        const CLIENT_TYPES_IMAGE: string;
        /**
         * Used to set the 'type' property on a menu item to create
         * a separator menu item.
         */
        const CLIENT_TYPES_SEPARATOR: string;
        /**
         * Used in #DBUSMENU_MENUITEM_PROP_CHILD_DISPLAY to have the
         * subitems displayed as a submenu.
         */
        const MENUITEM_CHILD_DISPLAY_SUBMENU: string;
        /**
         * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
         * item displayed in a way that conveys it's giving an alert
         * to the user.
         */
        const MENUITEM_DISPOSITION_ALERT: string;
        /**
         * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
         * item displayed in a way that conveys it's giving additional
         * information to the user.
         */
        const MENUITEM_DISPOSITION_INFORMATIVE: string;
        /**
         * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
         * item displayed in the normal manner.  Default value.
         */
        const MENUITEM_DISPOSITION_NORMAL: string;
        /**
         * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
         * item displayed in a way that conveys it's giving a warning
         * to the user.
         */
        const MENUITEM_DISPOSITION_WARNING: string;
        /**
         * String for the event identifier when a menu item is clicked
         * on by the user.
         */
        const MENUITEM_EVENT_ACTIVATED: string;
        /**
         * String for the event identifier when a menu is closed and
         * displayed to the user.  Only valid for items that contain
         * submenus.
         */
        const MENUITEM_EVENT_CLOSED: string;
        /**
         * String for the event identifier when a menu is opened and
         * displayed to the user.  Only valid for items that contain
         * submenus.
         */
        const MENUITEM_EVENT_OPENED: string;
        /**
         * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
         * toggle item is undecided.
         */
        const MENUITEM_ICON_NAME_BLANK: string;
        /**
         * #DbusmenuMenuitem property used to provide a textual description of any
         * information that the icon may convey. The contents of this property are
         * passed through to assistive technologies such as the Orca screen reader.
         * The contents of this property will not be visible in the menu item. If
         * this property is set, Orca will use this property instead of the label
         * property.
         */
        const MENUITEM_PROP_ACCESSIBLE_DESC: string;
        /**
         * #DbusmenuMenuitem property that tells how the children of this menuitem
         * should be displayed.  Most likely this will be unset or of the value
         * #DBUSMENU_MENUITEM_CHILD_DISPLAY_SUBMENU.  Type: #G_VARIANT_TYPE_STRING
         */
        const MENUITEM_PROP_CHILD_DISPLAY: string;
        /**
         * #DbusmenuMenuitem property to tell what type of information that the
         * menu item is displaying to the user.  Type: #G_VARIANT_TYPE_STRING
         */
        const MENUITEM_PROP_DISPOSITION: string;
        /**
         * #DbusmenuMenuitem property used to represent whether the menuitem
         * is clickable or not.  Type: #G_VARIANT_TYPE_BOOLEAN.
         */
        const MENUITEM_PROP_ENABLED: string;
        /**
         * #DbusmenuMenuitem property that is the raw data of a custom icon
         * used in the application.  Type: #G_VARIANT_TYPE_VARIANT
         *
         * It is recommended that this is not set directly but instead the
         * libdbusmenu-gtk library is used with the function dbusmenu_menuitem_property_set_image()
         */
        const MENUITEM_PROP_ICON_DATA: string;
        /**
         * #DbusmenuMenuitem property that is the name of the icon under the
         * Freedesktop.org icon naming spec.  Type: #G_VARIANT_TYPE_STRING
         */
        const MENUITEM_PROP_ICON_NAME: string;
        /**
         * #DbusmenuMenuitem property used for the text on the menu item.
         */
        const MENUITEM_PROP_LABEL: string;
        /**
         * #DbusmenuMenuitem property that is the entries that represent a shortcut
         * to activate the menuitem.  It is an array of arrays of strings.
         *
         * It is recommended that this is not set directly but instead the
         * libdbusmenu-gtk library is used with the function dbusmenu_menuitem_property_set_shortcut()
         */
        const MENUITEM_PROP_SHORTCUT: string;
        /**
         * #DbusmenuMenuitem property that says what state a toggle entry should
         * be shown as the menu.  Should be either #DBUSMENU_MENUITEM_TOGGLE_STATE_UNCHECKED
         * #DBUSMENU_MENUITEM_TOGGLE_STATE_CHECKED or #DBUSMENU_MENUITEM_TOGGLE_STATUE_UNKNOWN.
         */
        const MENUITEM_PROP_TOGGLE_STATE: string;
        /**
         * #DbusmenuMenuitem property that says what type of toggle entry should
         * be shown in the menu.  Should be either #DBUSMENU_MENUITEM_TOGGLE_CHECK
         * or #DBUSMENU_MENUITEM_TOGGLE_RADIO.  Type: #G_VARIANT_TYPE_STRING
         */
        const MENUITEM_PROP_TOGGLE_TYPE: string;
        /**
         * #DbusmenuMenuitem property used to represent what type of menuitem
         * this object represents.  Type: #G_VARIANT_TYPE_STRING.
         */
        const MENUITEM_PROP_TYPE: string;
        /**
         * #DbusmenuMenuitem property used to represent whether the menuitem
         * should be shown or not.  Type: #G_VARIANT_TYPE_BOOLEAN.
         */
        const MENUITEM_PROP_VISIBLE: string;
        /**
         * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
         * alternate key.
         */
        const MENUITEM_SHORTCUT_ALT: string;
        /**
         * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
         * control key.
         */
        const MENUITEM_SHORTCUT_CONTROL: string;
        /**
         * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
         * shift key.
         */
        const MENUITEM_SHORTCUT_SHIFT: string;
        /**
         * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
         * super key.
         */
        const MENUITEM_SHORTCUT_SUPER: string;
        /**
         * String to attach to signal #DbusmenuServer::about-to-show
         */
        const MENUITEM_SIGNAL_ABOUT_TO_SHOW: string;
        /**
         * String to attach to signal #DbusmenuServer::child-added
         */
        const MENUITEM_SIGNAL_CHILD_ADDED: string;
        /**
         * String to attach to signal #DbusmenuServer::child-moved
         */
        const MENUITEM_SIGNAL_CHILD_MOVED: string;
        /**
         * String to attach to signal #DbusmenuServer::child-removed
         */
        const MENUITEM_SIGNAL_CHILD_REMOVED: string;
        /**
         * String to attach to signal #DbusmenuServer::event
         */
        const MENUITEM_SIGNAL_EVENT: string;
        /**
         * String to attach to signal #DbusmenuServer::item-activated
         */
        const MENUITEM_SIGNAL_ITEM_ACTIVATED: string;
        /**
         * String to attach to signal #DbusmenuServer::property-changed
         */
        const MENUITEM_SIGNAL_PROPERTY_CHANGED: string;
        /**
         * String to attach to signal #DbusmenuServer::realized
         */
        const MENUITEM_SIGNAL_REALIZED: string;
        /**
         * String to attach to signal #DbusmenuServer::show-to-user
         */
        const MENUITEM_SIGNAL_SHOW_TO_USER: string;
        /**
         * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_TYPE to be a standard
         * check mark item.
         */
        const MENUITEM_TOGGLE_CHECK: string;
        /**
         * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_TYPE to be a standard
         * radio item.
         */
        const MENUITEM_TOGGLE_RADIO: string;
        /**
         * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
         * toggle item is filled.
         */
        const MENUITEM_TOGGLE_STATE_CHECKED: number;
        /**
         * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
         * toggle item is empty.
         */
        const MENUITEM_TOGGLE_STATE_UNCHECKED: number;
        /**
         * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
         * toggle item is undecided.
         */
        const MENUITEM_TOGGLE_STATE_UNKNOWN: number;
        /**
         * String to access property #DbusmenuServer:dbus-object
         */
        const SERVER_PROP_DBUS_OBJECT: string;
        /**
         * String to access property #DbusmenuServer:root-node
         */
        const SERVER_PROP_ROOT_NODE: string;
        /**
         * String to access property #DbusmenuServer:status
         */
        const SERVER_PROP_STATUS: string;
        /**
         * String to access property #DbusmenuServer:text-direction
         */
        const SERVER_PROP_TEXT_DIRECTION: string;
        /**
         * String to access property #DbusmenuServer:version
         */
        const SERVER_PROP_VERSION: string;
        /**
         * String to attach to signal #DbusmenuServer::item-property-updated
         */
        const SERVER_SIGNAL_ID_PROP_UPDATE: string;
        /**
         * String to attach to signal #DbusmenuServer::item-updated
         */
        const SERVER_SIGNAL_ID_UPDATE: string;
        /**
         * String to attach to signal #DbusmenuServer::item-activation-requested
         */
        const SERVER_SIGNAL_ITEM_ACTIVATION: string;
        /**
         * String to attach to signal #DbusmenuServer::layout-updated
         */
        const SERVER_SIGNAL_LAYOUT_UPDATED: string;
        interface ClientTypeHandler {
            (newitem: Menuitem, parent: Menuitem, client: Client): boolean;
        }
        interface menuitem_about_to_show_cb {
            (mi: Menuitem): void;
        }
        interface menuitem_buildvariant_slot_t {
            (mi: Menuitem, properties?: string | null): GLib.Variant;
        }
        module Client {
            // Signal callback interfaces

            interface EventResult {
                (object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: any | null): void;
            }

            interface IconThemeDirsChanged {
                (arg1?: any | null): void;
            }

            interface ItemActivate {
                (arg1: GObject.Object, arg2: number): void;
            }

            interface LayoutUpdated {
                (): void;
            }

            interface NewMenuitem {
                (arg1: GObject.Object): void;
            }

            interface RootChanged {
                (arg1: GObject.Object): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                dbus_name: string;
                dbusName: string;
                dbus_object: string;
                dbusObject: string;
                group_events: boolean;
                groupEvents: boolean;
            }
        }

        /**
         * The client for a #DbusmenuServer creating a shared
         * 	object set of #DbusmenuMenuitem objects.
         */
        class Client extends GObject.Object {
            static $gtype: GObject.GType<Client>;

            // Properties

            get dbus_name(): string;
            get dbusName(): string;
            get dbus_object(): string;
            get dbusObject(): string;
            get group_events(): boolean;
            set group_events(val: boolean);
            get groupEvents(): boolean;
            set groupEvents(val: boolean);

            // Constructors

            constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string, object: string): Client;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'event-result',
                callback: (
                    _source: this,
                    object: GObject.Object,
                    p0: string,
                    p1: GLib.Variant,
                    p2: number,
                    p3: any | null,
                ) => void,
            ): number;
            connect_after(
                signal: 'event-result',
                callback: (
                    _source: this,
                    object: GObject.Object,
                    p0: string,
                    p1: GLib.Variant,
                    p2: number,
                    p3: any | null,
                ) => void,
            ): number;
            emit(
                signal: 'event-result',
                object: GObject.Object,
                p0: string,
                p1: GLib.Variant,
                p2: number,
                p3?: any | null,
            ): void;
            connect(signal: 'icon-theme-dirs-changed', callback: (_source: this, arg1: any | null) => void): number;
            connect_after(
                signal: 'icon-theme-dirs-changed',
                callback: (_source: this, arg1: any | null) => void,
            ): number;
            emit(signal: 'icon-theme-dirs-changed', arg1?: any | null): void;
            connect(
                signal: 'item-activate',
                callback: (_source: this, arg1: GObject.Object, arg2: number) => void,
            ): number;
            connect_after(
                signal: 'item-activate',
                callback: (_source: this, arg1: GObject.Object, arg2: number) => void,
            ): number;
            emit(signal: 'item-activate', arg1: GObject.Object, arg2: number): void;
            connect(signal: 'layout-updated', callback: (_source: this) => void): number;
            connect_after(signal: 'layout-updated', callback: (_source: this) => void): number;
            emit(signal: 'layout-updated'): void;
            connect(signal: 'new-menuitem', callback: (_source: this, arg1: GObject.Object) => void): number;
            connect_after(signal: 'new-menuitem', callback: (_source: this, arg1: GObject.Object) => void): number;
            emit(signal: 'new-menuitem', arg1: GObject.Object): void;
            connect(signal: 'root-changed', callback: (_source: this, arg1: GObject.Object) => void): number;
            connect_after(signal: 'root-changed', callback: (_source: this, arg1: GObject.Object) => void): number;
            emit(signal: 'root-changed', arg1: GObject.Object): void;

            // Methods

            /**
             * This function connects into the type handling of the #DbusmenuClient.
             * Every new menuitem that comes in immediately gets asked for its
             * properties.  When we get those properties we check the 'type'
             * property and look to see if it matches a handler that is known
             * by the client.  If so, the `newfunc` function is executed on that
             * #DbusmenuMenuitem.  If not, then the DbusmenuClient::new-menuitem
             * signal is sent.
             *
             * In the future the known types will be sent to the server so that it
             * can make choices about the menu item types availble.
             * @param type A text string that will be matched with the 'type'     property on incoming menu items
             * @param newfunc The function that will be executed with those new     items when they come in.
             * @returns If registering the new type was successful.
             */
            add_type_handler(type: string, newfunc: ClientTypeHandler): boolean;
            /**
             * This function connects into the type handling of the #DbusmenuClient.
             * Every new menuitem that comes in immediately gets asked for its
             * properties.  When we get those properties we check the 'type'
             * property and look to see if it matches a handler that is known
             * by the client.  If so, the `newfunc` function is executed on that
             * #DbusmenuMenuitem.  If not, then the DbusmenuClient::new-menuitem
             * signal is sent.
             *
             * In the future the known types will be sent to the server so that it
             * can make choices about the menu item types availble.
             * @param type A text string that will be matched with the 'type'     property on incoming menu items
             * @param newfunc The function that will be executed with those new     items when they come in.
             * @returns If registering the new type was successful.
             */
            add_type_handler_full(type: string, newfunc: ClientTypeHandler): boolean;
            /**
             * Gets the stored and exported icon paths from the client.
             * @returns A NULL-terminated list of icon paths with   memory managed by the client.  Duplicate if you want   to keep them.
             */
            get_icon_paths(): string[];
            /**
             * Grabs the root node for the specified client `client`.  This
             * function may block.  It will block if there is currently a
             * call to update the layout, it will block on that layout
             * updated and then return the newly updated layout.  Chances
             * are that this update is in the queue for the mainloop as
             * it would have been requested some time ago, but in theory
             * it could block longer.
             * @returns A #DbusmenuMenuitem representing the root of 	menu on the server.  If there is no server or there is 	an error receiving its layout it'll return #NULL.
             */
            get_root(): Menuitem;
            /**
             * Gets the recommended current status that the server
             * 	is exporting for the menus.  In situtations where the
             * 	value is #DBUSMENU_STATUS_NOTICE it is recommended that
             * 	the client show the menus to the user an a more noticible
             * 	way.
             *
             * 	Return value: Status being exported.
             */
            get_status(): Status;
            /**
             * Gets the text direction that the server is exporting.  If
             * 	the server is not exporting a direction then the value
             * 	#DBUSMENU_TEXT_DIRECTION_NONE will be returned.
             *
             * 	Return value: Text direction being exported.
             */
            get_text_direction(): TextDirection;
        }

        module Menuitem {
            // Signal callback interfaces

            interface AboutToShow {
                (): boolean;
            }

            interface ChildAdded {
                (arg1: GObject.Object, arg2: number): void;
            }

            interface ChildMoved {
                (arg1: GObject.Object, arg2: number, arg3: number): void;
            }

            interface ChildRemoved {
                (arg1: GObject.Object): void;
            }

            interface Event {
                (arg1: string, arg2: GLib.Variant, arg3: number): boolean;
            }

            interface ItemActivated {
                (arg1: number): void;
            }

            interface PropertyChanged {
                (arg1: string, arg2: GLib.Variant): void;
            }

            interface Realized {
                (): void;
            }

            interface ShowToUser {
                (arg1: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                id: number;
            }
        }

        /**
         * This is the #GObject based object that represents a menu
         * item.  It gets created the same on both the client and
         * the server side and libdbusmenu-glib does the work of making
         * this object model appear on both sides of DBus.  Simple
         * really, though through updates and people coming on and off
         * the bus it can lead to lots of fun complex scenarios.
         */
        class Menuitem extends GObject.Object {
            static $gtype: GObject.GType<Menuitem>;

            // Properties

            get id(): number;

            // Constructors

            constructor(properties?: Partial<Menuitem.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Menuitem;

            static new_with_id(id: number): Menuitem;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'about-to-show', callback: (_source: this) => boolean): number;
            connect_after(signal: 'about-to-show', callback: (_source: this) => boolean): number;
            emit(signal: 'about-to-show'): void;
            connect(
                signal: 'child-added',
                callback: (_source: this, arg1: GObject.Object, arg2: number) => void,
            ): number;
            connect_after(
                signal: 'child-added',
                callback: (_source: this, arg1: GObject.Object, arg2: number) => void,
            ): number;
            emit(signal: 'child-added', arg1: GObject.Object, arg2: number): void;
            connect(
                signal: 'child-moved',
                callback: (_source: this, arg1: GObject.Object, arg2: number, arg3: number) => void,
            ): number;
            connect_after(
                signal: 'child-moved',
                callback: (_source: this, arg1: GObject.Object, arg2: number, arg3: number) => void,
            ): number;
            emit(signal: 'child-moved', arg1: GObject.Object, arg2: number, arg3: number): void;
            connect(signal: 'child-removed', callback: (_source: this, arg1: GObject.Object) => void): number;
            connect_after(signal: 'child-removed', callback: (_source: this, arg1: GObject.Object) => void): number;
            emit(signal: 'child-removed', arg1: GObject.Object): void;
            connect(
                signal: 'event',
                callback: (_source: this, arg1: string, arg2: GLib.Variant, arg3: number) => boolean,
            ): number;
            connect_after(
                signal: 'event',
                callback: (_source: this, arg1: string, arg2: GLib.Variant, arg3: number) => boolean,
            ): number;
            emit(signal: 'event', arg1: string, arg2: GLib.Variant, arg3: number): void;
            connect(signal: 'item-activated', callback: (_source: this, arg1: number) => void): number;
            connect_after(signal: 'item-activated', callback: (_source: this, arg1: number) => void): number;
            emit(signal: 'item-activated', arg1: number): void;
            connect(
                signal: 'property-changed',
                callback: (_source: this, arg1: string, arg2: GLib.Variant) => void,
            ): number;
            connect_after(
                signal: 'property-changed',
                callback: (_source: this, arg1: string, arg2: GLib.Variant) => void,
            ): number;
            emit(signal: 'property-changed', arg1: string, arg2: GLib.Variant): void;
            connect(signal: 'realized', callback: (_source: this) => void): number;
            connect_after(signal: 'realized', callback: (_source: this) => void): number;
            emit(signal: 'realized'): void;
            connect(signal: 'show-to-user', callback: (_source: this, arg1: number) => void): number;
            connect_after(signal: 'show-to-user', callback: (_source: this, arg1: number) => void): number;
            emit(signal: 'show-to-user', arg1: number): void;

            // Virtual methods

            vfunc_child_added(position: number): void;
            vfunc_child_moved(newpos: number, oldpos: number): void;
            vfunc_child_removed(): void;
            /**
             * This function is called to create an event.  It is likely
             * to be overrided by subclasses.  The default menu item
             * will respond to the activate signal and do:
             *
             * Emits the #DbusmenuMenuitem::item-activate signal on this
             * menu item.  Called by server objects when they get the
             * appropriate DBus signals from the client.
             *
             * If you subclass this function you should really think
             * about calling the parent function unless you have a good
             * reason not to.
             * @param name The name of the signal
             * @param variant A value that could be set for the event
             * @param timestamp The timestamp of when the event happened
             */
            vfunc_handle_event(name: string, variant: GLib.Variant, timestamp: number): void;
            vfunc_show_to_user(timestamp: number, cb_data?: any | null): void;

            // Methods

            /**
             * Puts `child` in the list of children for `mi` at the location
             * specified in `position`.  If there is not enough entires available
             * then `child` will be placed at the end of the list.
             * @param child The #DbusmenuMenuitem to make a child of @mi.
             * @param position Where in @mi object's list of chidren @child should be placed.
             * @returns Whether @child was added successfully.
             */
            child_add_position(child: Menuitem, position: number): boolean;
            /**
             * This function adds `child` to the list of children on `mi` at
             * the end of that list.
             * @param child The #DbusmenMenuitem that will be a child
             * @returns Whether the child has been added successfully.
             */
            child_append(child: Menuitem): boolean;
            /**
             * This function removes `child` from the children list of `mi`.  It does
             * not call #g_object_unref on `child`.
             * @param child The child #DbusmenuMenuitem that you want to no longer     be a child of @mi.
             * @returns If we were able to delete @child.
             */
            child_delete(child: Menuitem): boolean;
            /**
             * Search the children of `mi` to find one with the ID of `id`.
             * If it doesn't exist then we return #NULL.
             * @param id The ID of the child that we're looking for.
             * @returns The menu item with the ID @id or #NULL if it    can't be found.
             */
            child_find(id: number): Menuitem;
            /**
             * This function adds `child` to the list of children on `mi` at
             * the beginning of that list.
             * @param child The #DbusmenMenuitem that will be a child
             * @returns Whether the child has been added successfully.
             */
            child_prepend(child: Menuitem): boolean;
            /**
             * This function moves a child on the list of children.  It is
             * for a child that is already in the list, but simply needs a
             * new location.
             * @param child The #DbusmenuMenuitem that is a child needing to be moved
             * @param position The position in the list to place it in
             * @returns Whether the move was successful.
             */
            child_reorder(child: Menuitem, position: number): boolean;
            /**
             * This function searchs the whole tree of children that
             * are attached to `mi`.  This could be quite a few nodes, all
             * the way down the tree.  It is a depth first search.
             * @param id ID of the #DbusmenuMenuitem to search for
             * @returns The #DbusmenuMenuitem with the ID of @id 	or #NULL if there isn't such a menu item in the tree 	represented by @mi.
             */
            find_id(id: number): Menuitem;
            /**
             * This calls the function `func` on this menu item and all
             * of the children of this item.  And their children.  And
             * their children.  And... you get the point.  It will get
             * called on the whole tree.
             * @param func Function to call on every node in the tree
             * @param data User data to pass to the function
             */
            foreach(func?: any | null, data?: any | null): void;
            /**
             * Returns simply the list of children that this menu item
             * has.  The list is valid until another child related function
             * is called, where it might be changed.
             * @returns A #GList of pointers to #DbusmenuMenuitem objects.
             */
            get_children(): Menuitem[];
            /**
             * Gets the unique ID for `mi`.
             * @returns The ID of the @mi.
             */
            get_id(): number;
            /**
             * This function looks up the parent of `mi`
             * @returns The parent of this menu item
             */
            get_parent(): Menuitem;
            /**
             * This function returns the position of the menu item `mi`
             * in the children of `parent`.  It will return zero if the
             * menu item can't be found.
             * @param parent The #DbusmenuMenuitem who's children contain @mi
             * @returns The position of @mi in the children of @parent.
             */
            get_position(parent: Menuitem): number;
            /**
             * This function is very similar to #dbusmenu_menuitem_get_position
             * except that it only counts in the children that have been realized.
             * @param parent The #DbusmenuMenuitem who's children contain @mi
             * @returns The position of @mi in the realized children of @parent.
             */
            get_position_realized(parent: Menuitem): number;
            /**
             * This function returns the internal value of whether this is a
             * root node or not.
             * @returns #TRUE if this is a root node
             */
            get_root(): boolean;
            /**
             * This function is called to create an event.  It is likely
             * to be overrided by subclasses.  The default menu item
             * will respond to the activate signal and do:
             *
             * Emits the #DbusmenuMenuitem::item-activate signal on this
             * menu item.  Called by server objects when they get the
             * appropriate DBus signals from the client.
             *
             * If you subclass this function you should really think
             * about calling the parent function unless you have a good
             * reason not to.
             * @param name The name of the signal
             * @param variant A value that could be set for the event
             * @param timestamp The timestamp of when the event happened
             */
            handle_event(name: string, variant: GLib.Variant, timestamp: number): void;
            /**
             * This function takes the properties of a #DbusmenuMenuitem
             * and puts them into a #GHashTable that is referenced by the
             * key of a string and has the value of a string.  The hash
             * table may not have any entries if there aren't any or there
             * is an error in processing.  It is the caller's responsibility
             * to destroy the created #GHashTable.
             * @returns A brand new #GHashTable that contains all of    theroperties that are on this #DbusmenuMenuitem @mi.
             */
            properties_copy(): GLib.HashTable<any, any>;
            /**
             * This functiong gets a list of the names of all the properties
             * that are set on this menu item.  This data on the list is owned
             * by the menuitem but the list is not and should be freed using
             * g_list_free() when the calling function is done with it.
             * @returns A list of strings or NULL if there are none.
             */
            properties_list(): string[];
            /**
             * Checkes to see if a particular property exists on `mi` and
             * returns #TRUE if so.
             * @param property The property to look for.
             * @returns A boolean checking to see if the property is available
             */
            property_exist(property: string): boolean;
            /**
             * Look up a property on `mi` and return the value of it if
             * it exits.  #NULL will be returned if the property doesn't
             * exist.
             * @param property The property to grab.
             * @returns A string with the value of the property 	that shouldn't be free'd.  Or #NULL if the property 	is not set or is not a string.
             */
            property_get(property: string): string;
            /**
             * Look up a property on `mi` and return the value of it if
             * it exits.  Returns #FALSE if the property doesn't exist.
             * @param property The property to grab.
             * @returns The value of the property or #FALSE.
             */
            property_get_bool(property: string): boolean;
            /**
             * Look up a property on `mi` and return the value of it if
             * it exits.  #NULL will be returned if the property doesn't
             * exist.
             * @param property The property to grab.
             * @returns A byte array with the 	value of the property that shouldn't be free'd.  Or #NULL if the property 	is not set or is not a byte array.
             */
            property_get_byte_array(property: string): Uint8Array;
            /**
             * Look up a property on `mi` and return the value of it if
             * it exits.  Returns zero if the property doesn't exist.
             * @param property The property to grab.
             * @returns The value of the property or zero.
             */
            property_get_int(property: string): number;
            /**
             * Look up a property on `mi` and return the value of it if
             * it exits.  #NULL will be returned if the property doesn't
             * exist.
             * @param property The property to grab.
             * @returns A GVariant for the property.
             */
            property_get_variant(property: string): GLib.Variant;
            /**
             * Removes a property from the menuitem.
             * @param property The property to look for.
             */
            property_remove(property: string): void;
            /**
             * Takes the pair of `property` and `value` and places them as a
             * property on `mi`.  If a property already exists by that name,
             * then the value is set to the new value.  If not, the property
             * is added.  If the value is changed or the property was previously
             * unset then the signal #DbusmenuMenuitem::prop-changed will be
             * emitted by this function.
             * @param property Name of the property to set.
             * @param value The value of the property.
             * @returns A boolean representing if the property value was set.
             */
            property_set(property: string, value: string): boolean;
            /**
             * Takes a boolean `value` and sets it on `property` as a
             * property on `mi`.  If a property already exists by that name,
             * then the value is set to the new value.  If not, the property
             * is added.  If the value is changed or the property was previously
             * unset then the signal #DbusmenuMenuitem::prop-changed will be
             * emitted by this function.
             * @param property Name of the property to set.
             * @param value The value of the property.
             * @returns A boolean representing if the property value was set.
             */
            property_set_bool(property: string, value: boolean): boolean;
            /**
             * Takes a byte array `value` and sets it on `property` as a
             * property on `mi`.  If a property already exists by that name,
             * then the value is set to the new value.  If not, the property
             * is added.  If the value is changed or the property was previously
             * unset then the signal #DbusmenuMenuitem::prop-changed will be
             * emitted by this function.
             * @param property Name of the property to set.
             * @param value The byte array.
             * @param nelements The number of elements in the byte array.
             * @returns A boolean representing if the property value was set.
             */
            property_set_byte_array(property: string, value: number, nelements: number): boolean;
            /**
             * Takes a boolean `value` and sets it on `property` as a
             * property on `mi`.  If a property already exists by that name,
             * then the value is set to the new value.  If not, the property
             * is added.  If the value is changed or the property was previously
             * unset then the signal #DbusmenuMenuitem::prop-changed will be
             * emitted by this function.
             * @param property Name of the property to set.
             * @param value The value of the property.
             * @returns A boolean representing if the property value was set.
             */
            property_set_int(property: string, value: number): boolean;
            /**
             * Takes the pair of `property` and `value` and places them as a
             * property on `mi`.  If a property already exists by that name,
             * then the value is set to the new value.  If not, the property
             * is added.  If the value is changed or the property was previously
             * unset then the signal #DbusmenuMenuitem::prop-changed will be
             * emitted by this function.
             * @param property Name of the property to set.
             * @param value The value of the property.
             * @returns A boolean representing if the property value was set.
             */
            property_set_variant(property: string, value: GLib.Variant): boolean;
            /**
             * This function is used to send the even that the submenu
             * of this item is about to be shown.  Callers to this event
             * should delay showing the menu until their callback is
             * called if possible.
             * @param cb Callback to call when the call has returned.
             * @param cb_data Data to pass to the callback.
             */
            send_about_to_show(cb?: any | null, cb_data?: any | null): void;
            /**
             * Sets the parent of `mi` to `parent`. If `mi` already
             * has a parent, then this call will fail. The parent will
             * be set automatically when using the usual methods to add a
             * child menuitem, so this function should not normally be
             * called directly
             * @param parent The new parent #DbusmenuMenuitem
             * @returns Whether the parent was set successfully
             */
            set_parent(parent: Menuitem): boolean;
            /**
             * This function sets the internal value of whether this is a
             * root node or not.
             * @param root Whether @mi is a root node or not
             */
            set_root(root: boolean): void;
            /**
             * Signals that this menu item should be shown to the user.  If this is
             * server side the server will then take it and send it over the
             * bus.
             * @param timestamp The time that the user requested it to be shown
             */
            show_to_user(timestamp: number): void;
            /**
             * While the name sounds devious that's exactly what this function
             * does.  It takes the list of children from the `mi` and clears the
             * internal list.  The calling function is now in charge of the ref's
             * on the children it has taken.  A lot of responsibility involved
             * in taking children.
             * @returns A #GList of pointers to #DbusmenuMenuitem objects.
             */
            take_children(): Menuitem[];
            /**
             * Unparents the menu item `mi`. If `mi` doesn't have a
             * parent, then this call will fail. The menuitem will
             * be unparented automatically when using the usual methods
             * to delete a child menuitem, so this function should not
             * normally be called directly
             * @returns Whether the menu item was unparented successfully
             */
            unparent(): boolean;
        }

        module MenuitemProxy {
            // Constructor properties interface

            interface ConstructorProps extends Menuitem.ConstructorProps {
                menu_item: Menuitem;
                menuItem: Menuitem;
            }
        }

        /**
         * Public instance data for a #DbusmenuMenuitemProxy.
         */
        class MenuitemProxy extends Menuitem {
            static $gtype: GObject.GType<MenuitemProxy>;

            // Properties

            get menu_item(): Menuitem;
            get menuItem(): Menuitem;

            // Constructors

            constructor(properties?: Partial<MenuitemProxy.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](mi: Menuitem): MenuitemProxy;
            // Conflicted with Dbusmenu.Menuitem.new

            static ['new'](...args: never[]): any;

            // Methods

            /**
             * Accesses the private variable of which #DbusmenuMenuitem
             * we are doing the proxying for.
             * @returns A #DbusmenuMenuitem object or a #NULL if we 	don't have one or there is an error.
             */
            get_wrapped(): Menuitem;
        }

        module Server {
            // Signal callback interfaces

            interface ItemActivationRequested {
                (arg1: number, arg2: number): void;
            }

            interface ItemPropertyUpdated {
                (object: number, p0: string, p1: GLib.Variant): void;
            }

            interface ItemUpdated {
                (object: number): void;
            }

            interface LayoutUpdated {
                (arg1: number, arg2: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                dbus_object: string;
                dbusObject: string;
                root_node: Menuitem;
                rootNode: Menuitem;
                version: number;
            }
        }

        /**
         * A server which represents a sharing of a set of
         * 	#DbusmenuMenuitems across DBus to a #DbusmenuClient.
         */
        class Server extends GObject.Object {
            static $gtype: GObject.GType<Server>;

            // Properties

            get dbus_object(): string;
            get dbusObject(): string;
            get root_node(): Menuitem;
            set root_node(val: Menuitem);
            get rootNode(): Menuitem;
            set rootNode(val: Menuitem);
            get version(): number;

            // Constructors

            constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](object: string): Server;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'item-activation-requested',
                callback: (_source: this, arg1: number, arg2: number) => void,
            ): number;
            connect_after(
                signal: 'item-activation-requested',
                callback: (_source: this, arg1: number, arg2: number) => void,
            ): number;
            emit(signal: 'item-activation-requested', arg1: number, arg2: number): void;
            connect(
                signal: 'item-property-updated',
                callback: (_source: this, object: number, p0: string, p1: GLib.Variant) => void,
            ): number;
            connect_after(
                signal: 'item-property-updated',
                callback: (_source: this, object: number, p0: string, p1: GLib.Variant) => void,
            ): number;
            emit(signal: 'item-property-updated', object: number, p0: string, p1: GLib.Variant): void;
            connect(signal: 'item-updated', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'item-updated', callback: (_source: this, object: number) => void): number;
            emit(signal: 'item-updated', object: number): void;
            connect(signal: 'layout-updated', callback: (_source: this, arg1: number, arg2: number) => void): number;
            connect_after(
                signal: 'layout-updated',
                callback: (_source: this, arg1: number, arg2: number) => void,
            ): number;
            emit(signal: 'layout-updated', arg1: number, arg2: number): void;

            // Methods

            /**
             * Gets the stored and exported icon paths from the server.
             * @returns A NULL-terminated list of icon paths with   memory managed by the server.  Duplicate if you want   to keep them.
             */
            get_icon_paths(): string[];
            /**
             * Gets the current statust hat the server is sending out over
             * 	DBus.
             *
             * 	Return value: The current status the server is sending
             */
            get_status(): Status;
            /**
             * Returns the value of the text direction that is being exported
             * 	over DBus for this server.  It should relate to the direction
             * 	of the labels and other text fields that are being exported by
             * 	this server.
             *
             * 	Return value: Text direction exported for this server.
             */
            get_text_direction(): TextDirection;
            /**
             * Sets the icon paths for the server.  This will replace previously
             * 	set icon theme paths.
             * @param icon_paths
             */
            set_icon_paths(icon_paths: string[]): void;
            /**
             * This function contains all of the #GValue wrapping
             * 	required to set the property #DbusmenuServer:root-node
             * 	on the server `self`.
             * @param root The new root #DbusmenuMenuitem tree
             */
            set_root(root: Menuitem): void;
            /**
             * Changes the status of the server.
             * @param status Status value to set on the server
             */
            set_status(status: Status | null): void;
            /**
             * Sets the text direction that should be exported over DBus for
             * 	this server.  If the value is set to #DBUSMENU_TEXT_DIRECTION_NONE
             * 	the default detection will be used for setting the value and
             * 	exported over DBus.
             * @param dir Direction of the text
             */
            set_text_direction(dir: TextDirection | null): void;
        }

        type ClientClass = typeof Client;
        abstract class ClientPrivate {
            static $gtype: GObject.GType<ClientPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type MenuitemClass = typeof Menuitem;
        /**
         * These are the little secrets that we don't want getting
         * 	out of data that we have.  They can still be gotten using
         * 	accessor functions, but are protected appropriately.
         */
        abstract class MenuitemPrivate {
            static $gtype: GObject.GType<MenuitemPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type MenuitemProxyClass = typeof MenuitemProxy;
        abstract class MenuitemProxyPrivate {
            static $gtype: GObject.GType<MenuitemProxyPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ServerClass = typeof Server;
        abstract class ServerPrivate {
            static $gtype: GObject.GType<ServerPrivate>;

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

    export default Dbusmenu;
}

declare module 'gi://Dbusmenu' {
    import Dbusmenu04 from 'gi://Dbusmenu?version=0.4';
    export default Dbusmenu04;
}
// END
