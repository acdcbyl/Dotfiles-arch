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

declare module 'gi://Playerctl?version=2.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';

    export namespace Playerctl {
        /**
         * Playerctl-2.0
         */

        /**
         * Loop status enumeration for a #PlayerctlPlayer
         */

        /**
         * Loop status enumeration for a #PlayerctlPlayer
         */
        export namespace LoopStatus {
            export const $gtype: GObject.GType<LoopStatus>;
        }

        enum LoopStatus {
            /**
             * The playback will stop when there are no more tracks to play.
             */
            NONE,
            /**
             * The current track will start again from the beginning once it has
             * finished playing.
             */
            TRACK,
            /**
             * The playback loops through a list of tracks.
             */
            PLAYLIST,
        }
        /**
         * Playback status enumeration for a #PlayerctlPlayer
         */

        /**
         * Playback status enumeration for a #PlayerctlPlayer
         */
        export namespace PlaybackStatus {
            export const $gtype: GObject.GType<PlaybackStatus>;
        }

        enum PlaybackStatus {
            /**
             * A track is currently playing.
             */
            PLAYING,
            /**
             * A track is currently paused.
             */
            PAUSED,
            /**
             * There is no track currently playing.
             */
            STOPPED,
        }
        /**
         * The source of the name used to control the player.
         */

        /**
         * The source of the name used to control the player.
         */
        export namespace Source {
            export const $gtype: GObject.GType<Source>;
        }

        enum Source {
            /**
             * Only for unitialized players. Source will be chosen automatically.
             */
            NONE,
            /**
             * The player is on the DBus session bus.
             */
            DBUS_SESSION,
            /**
             * The player is on the DBus system bus.
             */
            DBUS_SYSTEM,
        }
        /**
         * Lists all the players that can be controlled by Playerctl.
         * @returns A list of player names.
         */
        function list_players(): PlayerName[];
        module Player {
            // Signal callback interfaces

            interface Exit {
                (): void;
            }

            interface LoopStatus {
                (loop_status: LoopStatus): void;
            }

            interface Metadata {
                (metadata: GLib.Variant): void;
            }

            interface Pause {
                (): void;
            }

            interface Play {
                (): void;
            }

            interface PlaybackStatus {
                (playback_status: PlaybackStatus): void;
            }

            interface Seeked {
                (position: number): void;
            }

            interface Shuffle {
                (shuffle_status: boolean): void;
            }

            interface Stop {
                (): void;
            }

            interface Volume {
                (volume: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                can_control: boolean;
                canControl: boolean;
                can_go_next: boolean;
                canGoNext: boolean;
                can_go_previous: boolean;
                canGoPrevious: boolean;
                can_pause: boolean;
                canPause: boolean;
                can_play: boolean;
                canPlay: boolean;
                can_seek: boolean;
                canSeek: boolean;
                loop_status: LoopStatus;
                loopStatus: LoopStatus;
                metadata: GLib.Variant;
                playback_status: PlaybackStatus;
                playbackStatus: PlaybackStatus;
                player_instance: string;
                playerInstance: string;
                player_name: string;
                playerName: string;
                position: number;
                shuffle: boolean;
                source: Source;
                status: string;
                volume: number;
            }
        }

        class Player extends GObject.Object {
            static $gtype: GObject.GType<Player>;

            // Properties

            get can_control(): boolean;
            get canControl(): boolean;
            get can_go_next(): boolean;
            get canGoNext(): boolean;
            get can_go_previous(): boolean;
            get canGoPrevious(): boolean;
            get can_pause(): boolean;
            get canPause(): boolean;
            get can_play(): boolean;
            get canPlay(): boolean;
            get can_seek(): boolean;
            get canSeek(): boolean;
            get loop_status(): LoopStatus;
            get loopStatus(): LoopStatus;
            get metadata(): GLib.Variant;
            get playback_status(): PlaybackStatus;
            get playbackStatus(): PlaybackStatus;
            get player_instance(): string;
            get playerInstance(): string;
            get player_name(): string;
            get playerName(): string;
            get position(): number;
            get shuffle(): boolean;
            get source(): Source;
            /**
             * The playback status of the player as a string
             */
            get status(): string;
            get volume(): number;
            set volume(val: number);

            // Constructors

            constructor(properties?: Partial<Player.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](player_name?: string | null): Player;

            static new_for_source(player_name: string | null, source: Source): Player;

            static new_from_name(player_name: PlayerName): Player;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'exit', callback: (_source: this) => void): number;
            connect_after(signal: 'exit', callback: (_source: this) => void): number;
            emit(signal: 'exit'): void;
            connect(signal: 'loop-status', callback: (_source: this, loop_status: LoopStatus) => void): number;
            connect_after(signal: 'loop-status', callback: (_source: this, loop_status: LoopStatus) => void): number;
            emit(signal: 'loop-status', loop_status: LoopStatus): void;
            connect(signal: 'metadata', callback: (_source: this, metadata: GLib.Variant) => void): number;
            connect_after(signal: 'metadata', callback: (_source: this, metadata: GLib.Variant) => void): number;
            emit(signal: 'metadata', metadata: GLib.Variant): void;
            connect(signal: 'pause', callback: (_source: this) => void): number;
            connect_after(signal: 'pause', callback: (_source: this) => void): number;
            emit(signal: 'pause'): void;
            connect(signal: 'play', callback: (_source: this) => void): number;
            connect_after(signal: 'play', callback: (_source: this) => void): number;
            emit(signal: 'play'): void;
            connect(
                signal: 'playback-status',
                callback: (_source: this, playback_status: PlaybackStatus) => void,
            ): number;
            connect_after(
                signal: 'playback-status',
                callback: (_source: this, playback_status: PlaybackStatus) => void,
            ): number;
            emit(signal: 'playback-status', playback_status: PlaybackStatus): void;
            connect(signal: 'seeked', callback: (_source: this, position: number) => void): number;
            connect_after(signal: 'seeked', callback: (_source: this, position: number) => void): number;
            emit(signal: 'seeked', position: number): void;
            connect(signal: 'shuffle', callback: (_source: this, shuffle_status: boolean) => void): number;
            connect_after(signal: 'shuffle', callback: (_source: this, shuffle_status: boolean) => void): number;
            emit(signal: 'shuffle', shuffle_status: boolean): void;
            connect(signal: 'stop', callback: (_source: this) => void): number;
            connect_after(signal: 'stop', callback: (_source: this) => void): number;
            emit(signal: 'stop'): void;
            connect(signal: 'volume', callback: (_source: this, volume: number) => void): number;
            connect_after(signal: 'volume', callback: (_source: this, volume: number) => void): number;
            emit(signal: 'volume', volume: number): void;

            // Methods

            /**
             * Gets the album from the metadata of the current track, or NULL if
             * no track is playing.
             * @returns The album from the metadata of the current track
             */
            get_album(): string;
            /**
             * Gets the artist from the metadata of the current track, or NULL if no
             * track is playing.
             * @returns The artist from the metadata of the current track
             */
            get_artist(): string;
            /**
             * Gets the position of the current track in microseconds ignoring the property
             * cache.
             */
            get_position(): number;
            /**
             * Gets the title from the metadata of the current track, or NULL if
             * no track is playing.
             * @returns The title from the metadata of the current track
             */
            get_title(): string;
            /**
             * Command the player to go to the next track
             */
            next(): void;
            /**
             * A convenience function for bindings to subscribe to an event with a callback
             * @param event the event to subscribe to
             * @param callback the callback to run on the event
             */
            on(event: string, callback: GObject.Closure): void;
            /**
             * Command the player to open given URI
             * @param uri the URI to open, either a file name or an external URL
             */
            open(uri: string): void;
            /**
             * Command the player to pause
             */
            pause(): void;
            /**
             * Command the player to play
             */
            play(): void;
            /**
             * Command the player to play if it is paused or pause if it is playing
             */
            play_pause(): void;
            /**
             * Command the player to go to the previous track
             */
            previous(): void;
            /**
             * Gets the given property from the metadata of the current track. If property
             * is null, prints all the metadata properties. Returns NULL if no track is
             * playing.
             * @param property the property from the metadata to print
             * @returns The artist from the metadata of the current track
             */
            print_metadata_prop(property?: string | null): string;
            /**
             * Command the player to seek forward by offset given in microseconds.
             * @param offset the offset to seek forward to in microseconds
             */
            seek(offset: number): void;
            /**
             * Set the loop status of the player. Can be set to either None, Track, or Playlist.
             * @param status the requested #PlayerctlLoopStatus to set the player to
             */
            set_loop_status(status: LoopStatus | null): void;
            /**
             * Sets the absolute position of the current track to the given position in microseconds.
             * @param position The absolute position in the track to set as the position
             */
            set_position(position: number): void;
            /**
             * Request to set the shuffle state of the player, either on or off.
             * @param shuffle whether to enable shuffle
             */
            set_shuffle(shuffle: boolean): void;
            /**
             * Sets the volume level for the player from 0.0 for no volume to 1.0 for
             * maximum volume. Passing negative numbers should set the volume to 0.0.
             * @param volume the volume level from 0.0 to 1.0
             */
            set_volume(volume: number): void;
            /**
             * Command the player to stop
             */
            stop(): void;
        }

        module PlayerManager {
            // Signal callback interfaces

            interface NameAppeared {
                (name: PlayerName): void;
            }

            interface NameVanished {
                (name: PlayerName): void;
            }

            interface PlayerAppeared {
                (player: Player): void;
            }

            interface PlayerVanished {
                (player: Player): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                player_names: PlayerName[];
                playerNames: PlayerName[];
                players: Player[];
            }
        }

        class PlayerManager extends GObject.Object {
            static $gtype: GObject.GType<PlayerManager>;

            // Properties

            /**
             * A list of fully qualified player names that are currently available to control.
             */
            get player_names(): PlayerName[];
            /**
             * A list of fully qualified player names that are currently available to control.
             */
            get playerNames(): PlayerName[];
            /**
             * A list of players that are currently connected and managed by this class.
             */
            get players(): Player[];

            // Constructors

            constructor(properties?: Partial<PlayerManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): PlayerManager;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'name-appeared', callback: (_source: this, name: PlayerName) => void): number;
            connect_after(signal: 'name-appeared', callback: (_source: this, name: PlayerName) => void): number;
            emit(signal: 'name-appeared', name: PlayerName): void;
            connect(signal: 'name-vanished', callback: (_source: this, name: PlayerName) => void): number;
            connect_after(signal: 'name-vanished', callback: (_source: this, name: PlayerName) => void): number;
            emit(signal: 'name-vanished', name: PlayerName): void;
            connect(signal: 'player-appeared', callback: (_source: this, player: Player) => void): number;
            connect_after(signal: 'player-appeared', callback: (_source: this, player: Player) => void): number;
            emit(signal: 'player-appeared', player: Player): void;
            connect(signal: 'player-vanished', callback: (_source: this, player: Player) => void): number;
            connect_after(signal: 'player-vanished', callback: (_source: this, player: Player) => void): number;
            emit(signal: 'player-vanished', player: Player): void;

            // Methods

            /**
             * Add the given player to the list of managed players. Takes a reference to
             * the player (so you can unref it after you call this function). The player
             * will automatically be unreffed and removed from the list of
             * #PlayerctlPlayerManager:players when
             * it disconnects and the #PlayerctlPlayerManager::player-vanished signal will
             * be emitted on the manager.
             * @param player A #PlayerctlPlayer to manage
             */
            manage_player(player: Player): void;
            /**
             * Moves the player to the top of the list of #PlayerctlPlayerManager:players. If this manager has a
             * sort function set with playerctl_player_manager_set_sort_func(), the list of
             * players will be sorted afterward, but will be on top of equal players in the
             * sorted order.
             * @param player A #PlayerctlPlayer in the list of #PlayerctlPlayerManager:players
             */
            move_player_to_top(player: Player): void;
            /**
             * Keeps the #PlayerctlPlayerManager:players list of this manager in sorted order which is useful
             * for using this list as a priority queue.
             * @param sort_func The compare function to be used to sort the #PlayerctlPlayerManager:players.
             * @param notify A function to notify when the sort function will no longer be used.
             */
            set_sort_func(sort_func: GLib.CompareDataFunc, notify?: GLib.DestroyNotify | null): void;
        }

        type PlayerClass = typeof Player;
        type PlayerManagerClass = typeof PlayerManager;
        abstract class PlayerManagerPrivate {
            static $gtype: GObject.GType<PlayerManagerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Event container for when names of players appear or disapear as the
         * controllable media player applications open and close.
         */
        class PlayerName {
            static $gtype: GObject.GType<PlayerName>;

            // Fields

            name: string;
            instance: string;
            source: Source;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Creates a dynamically allocated name name container as a copy of
             * `name`.
             * @returns a newly-allocated copy of @name
             */
            copy(): PlayerName;
            /**
             * Frees `name`. If `name` is %NULL, it simply returns.
             */
            free(): void;
        }

        abstract class PlayerPrivate {
            static $gtype: GObject.GType<PlayerPrivate>;

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

    export default Playerctl;
}

declare module 'gi://Playerctl' {
    import Playerctl20 from 'gi://Playerctl?version=2.0';
    export default Playerctl20;
}
// END
