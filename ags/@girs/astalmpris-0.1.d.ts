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

declare module 'gi://AstalMpris?version=0.1' {
    // Module dependencies
    import type GLib from 'gi://GLib?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';

    export namespace AstalMpris {
        /**
         * AstalMpris-0.1
         */

        export namespace PlaybackStatus {
            export const $gtype: GObject.GType<PlaybackStatus>;
        }

        enum PlaybackStatus {
            PLAYING,
            PAUSED,
            STOPPED,
        }

        export namespace Loop {
            export const $gtype: GObject.GType<Loop>;
        }

        enum Loop {
            UNSUPPORTED,
            /**
             * The playback will stop when there are no more tracks to play.
             */
            NONE,
            /**
             * The current track will start again from the begining once it has finished playing.
             */
            TRACK,
            /**
             * The playback loops through a list of tracks.
             */
            PLAYLIST,
        }

        export namespace Shuffle {
            export const $gtype: GObject.GType<Shuffle>;
        }

        enum Shuffle {
            UNSUPPORTED,
            /**
             * Playback is progressing through a playlist in some other order.
             */
            ON,
            /**
             * Playback is progressing linearly through a playlist.
             */
            OFF,
        }
        const MAJOR_VERSION: number;
        const MINOR_VERSION: number;
        const MICRO_VERSION: number;
        const VERSION: string;
        /**
         * Gets the default singleton Mpris instance.
         */
        function get_default(): Mpris;
        module Mpris {
            // Signal callback interfaces

            interface PlayerAdded {
                (player: Player): void;
            }

            interface PlayerClosed {
                (player: Player): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                players: Player[];
            }
        }

        /**
         * Object that monitors dbus for players to appear and disappear.
         */
        class Mpris extends GObject.Object {
            static $gtype: GObject.GType<Mpris>;

            // Properties

            /**
             * List of currently available players.
             */
            get players(): Player[];

            // Constructors

            constructor(properties?: Partial<Mpris.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Mpris;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'player-added', callback: (_source: this, player: Player) => void): number;
            connect_after(signal: 'player-added', callback: (_source: this, player: Player) => void): number;
            emit(signal: 'player-added', player: Player): void;
            connect(signal: 'player-closed', callback: (_source: this, player: Player) => void): number;
            connect_after(signal: 'player-closed', callback: (_source: this, player: Player) => void): number;
            emit(signal: 'player-closed', player: Player): void;

            // Static methods

            /**
             * Gets the default singleton Mpris instance.
             */
            static get_default(): Mpris;

            // Methods

            get_players(): Player[];
        }

        module Player {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                bus_name: string;
                busName: string;
                available: boolean;
                can_quit: boolean;
                canQuit: boolean;
                fullscreen: boolean;
                can_set_fullscreen: boolean;
                canSetFullscreen: boolean;
                can_raise: boolean;
                canRaise: boolean;
                identity: string;
                entry: string;
                supported_uri_schemes: string[];
                supportedUriSchemes: string[];
                supported_mime_types: string[];
                supportedMimeTypes: string[];
                loop_status: Loop;
                loopStatus: Loop;
                rate: number;
                shuffle_status: Shuffle;
                shuffleStatus: Shuffle;
                volume: number;
                position: number;
                playback_status: PlaybackStatus;
                playbackStatus: PlaybackStatus;
                minimum_rate: number;
                minimumRate: number;
                maximum_rate: number;
                maximumRate: number;
                can_go_next: boolean;
                canGoNext: boolean;
                can_go_previous: boolean;
                canGoPrevious: boolean;
                can_play: boolean;
                canPlay: boolean;
                can_pause: boolean;
                canPause: boolean;
                can_seek: boolean;
                canSeek: boolean;
                can_control: boolean;
                canControl: boolean;
                metadata: GLib.HashTable<string, GLib.Variant>;
                trackid: string;
                length: number;
                art_url: string;
                artUrl: string;
                album: string;
                album_artist: string;
                albumArtist: string;
                artist: string;
                lyrics: string;
                title: string;
                composer: string;
                comments: string;
                cover_art: string;
                coverArt: string;
            }
        }

        /**
         * Object which tracks players through their mpris dbus interface. The most simple way is to use [class`AstalMpris`.Mpris] which tracks
         * every player, but [class`AstalMpris`.Player] can be constructed for a dedicated players too.
         */
        class Player extends GObject.Object {
            static $gtype: GObject.GType<Player>;

            // Properties

            /**
             * Full dbus namae of this player.
             */
            get bus_name(): string;
            set bus_name(val: string);
            /**
             * Full dbus namae of this player.
             */
            get busName(): string;
            set busName(val: string);
            /**
             * Indicates if [property`AstalMpris`.Player:bus_name] is available on dbus.
             */
            get available(): boolean;
            set available(val: boolean);
            /**
             * Indicates if [method`AstalMpris`.Player.quit] has any effect.
             */
            get can_quit(): boolean;
            set can_quit(val: boolean);
            /**
             * Indicates if [method`AstalMpris`.Player.quit] has any effect.
             */
            get canQuit(): boolean;
            set canQuit(val: boolean);
            /**
             * Indicates if the player is occupying the fullscreen. This is typically used for videos. Use [method`AstalMpris`.Player.toggle_fullscreen]
             * to toggle fullscreen state.
             */
            get fullscreen(): boolean;
            set fullscreen(val: boolean);
            /**
             * Indicates if [method`AstalMpris`.Player.toggle_fullscreen] has any effect.
             */
            get can_set_fullscreen(): boolean;
            set can_set_fullscreen(val: boolean);
            /**
             * Indicates if [method`AstalMpris`.Player.toggle_fullscreen] has any effect.
             */
            get canSetFullscreen(): boolean;
            set canSetFullscreen(val: boolean);
            /**
             * Indicates if [method`AstalMpris`.Player.raise] has any effect.
             */
            get can_raise(): boolean;
            set can_raise(val: boolean);
            /**
             * Indicates if [method`AstalMpris`.Player.raise] has any effect.
             */
            get canRaise(): boolean;
            set canRaise(val: boolean);
            /**
             * A human friendly name to identify the player.
             */
            get identity(): string;
            set identity(val: string);
            /**
             * The base name of a .desktop file
             */
            get entry(): string;
            set entry(val: string);
            /**
             * The URI schemes supported by the media player.
             * This can be viewed as protocols supported by the player in almost all cases. Almost every media player will include support for the "file
             * " scheme. Other common schemes are "http" and "rtsp".
             */
            get supported_uri_schemes(): string[];
            set supported_uri_schemes(val: string[]);
            /**
             * The URI schemes supported by the media player.
             * This can be viewed as protocols supported by the player in almost all cases. Almost every media player will include support for the "file
             * " scheme. Other common schemes are "http" and "rtsp".
             */
            get supportedUriSchemes(): string[];
            set supportedUriSchemes(val: string[]);
            /**
             * The mime-types supported by the player.
             */
            get supported_mime_types(): string[];
            set supported_mime_types(val: string[]);
            /**
             * The mime-types supported by the player.
             */
            get supportedMimeTypes(): string[];
            set supportedMimeTypes(val: string[]);
            /**
             * The current loop/repeat status.
             */
            get loop_status(): Loop;
            set loop_status(val: Loop);
            /**
             * The current loop/repeat status.
             */
            get loopStatus(): Loop;
            set loopStatus(val: Loop);
            /**
             * The current playback rate.
             */
            get rate(): number;
            set rate(val: number);
            /**
             * The current shuffle status.
             */
            get shuffle_status(): Shuffle;
            set shuffle_status(val: Shuffle);
            /**
             * The current shuffle status.
             */
            get shuffleStatus(): Shuffle;
            set shuffleStatus(val: Shuffle);
            /**
             * The current volume level between 0 and 1.
             */
            get volume(): number;
            set volume(val: number);
            /**
             * The current position of the track in seconds. To get a progress percentage simply divide this with [property`AstalMpris`.Player:length].
             */
            get position(): number;
            set position(val: number);
            /**
             * The current playback status.
             */
            get playback_status(): PlaybackStatus;
            set playback_status(val: PlaybackStatus);
            /**
             * The current playback status.
             */
            get playbackStatus(): PlaybackStatus;
            set playbackStatus(val: PlaybackStatus);
            /**
             * The minimum value which the [property`AstalMpris`.Player:rate] can take.
             */
            get minimum_rate(): number;
            set minimum_rate(val: number);
            /**
             * The minimum value which the [property`AstalMpris`.Player:rate] can take.
             */
            get minimumRate(): number;
            set minimumRate(val: number);
            /**
             * The maximum value which the [property`AstalMpris`.Player:rate] can take.
             */
            get maximum_rate(): number;
            set maximum_rate(val: number);
            /**
             * The maximum value which the [property`AstalMpris`.Player:rate] can take.
             */
            get maximumRate(): number;
            set maximumRate(val: number);
            /**
             * Indicates if invoking [method`AstalMpris`.Player.next] has effect.
             */
            get can_go_next(): boolean;
            set can_go_next(val: boolean);
            /**
             * Indicates if invoking [method`AstalMpris`.Player.next] has effect.
             */
            get canGoNext(): boolean;
            set canGoNext(val: boolean);
            /**
             * Indicates if invoking [method`AstalMpris`.Player.previous] has effect.
             */
            get can_go_previous(): boolean;
            set can_go_previous(val: boolean);
            /**
             * Indicates if invoking [method`AstalMpris`.Player.previous] has effect.
             */
            get canGoPrevious(): boolean;
            set canGoPrevious(val: boolean);
            /**
             * Indicates if invoking [method`AstalMpris`.Player.play] has effect.
             */
            get can_play(): boolean;
            set can_play(val: boolean);
            /**
             * Indicates if invoking [method`AstalMpris`.Player.play] has effect.
             */
            get canPlay(): boolean;
            set canPlay(val: boolean);
            /**
             * Indicates if invoking [method`AstalMpris`.Player.pause] has effect.
             */
            get can_pause(): boolean;
            set can_pause(val: boolean);
            /**
             * Indicates if invoking [method`AstalMpris`.Player.pause] has effect.
             */
            get canPause(): boolean;
            set canPause(val: boolean);
            /**
             * Indicates if setting [property`AstalMpris`.Player:position] has effect.
             */
            get can_seek(): boolean;
            set can_seek(val: boolean);
            /**
             * Indicates if setting [property`AstalMpris`.Player:position] has effect.
             */
            get canSeek(): boolean;
            set canSeek(val: boolean);
            /**
             * Indicates if the player can be controlled with methods such as [method`AstalMpris`.Player.play_pause].
             */
            get can_control(): boolean;
            set can_control(val: boolean);
            /**
             * Indicates if the player can be controlled with methods such as [method`AstalMpris`.Player.play_pause].
             */
            get canControl(): boolean;
            set canControl(val: boolean);
            /**
             * Metadata hashtable of this player. In languages that cannot introspect this use [method`AstalMpris`.Player.get_meta].
             */
            get metadata(): GLib.HashTable<string, GLib.Variant>;
            set metadata(val: GLib.HashTable<string, GLib.Variant>);
            /**
             * Currently playing track's id.
             */
            get trackid(): string;
            set trackid(val: string);
            /**
             * Length of the currently playing track in seconds.
             */
            get length(): number;
            set length(val: number);
            /**
             * The location of an image representing the track or album. You should always prefer to use [property`AstalMpris`.Player:cover_art].
             */
            get art_url(): string;
            set art_url(val: string);
            /**
             * The location of an image representing the track or album. You should always prefer to use [property`AstalMpris`.Player:cover_art].
             */
            get artUrl(): string;
            set artUrl(val: string);
            /**
             * Title of the currently playing album.
             */
            get album(): string;
            set album(val: string);
            /**
             * Artists of the currently playing album.
             */
            get album_artist(): string;
            set album_artist(val: string);
            /**
             * Artists of the currently playing album.
             */
            get albumArtist(): string;
            set albumArtist(val: string);
            /**
             * Artists of the currently playing track.
             */
            get artist(): string;
            set artist(val: string);
            /**
             * Lyrics of the currently playing track.
             */
            get lyrics(): string;
            set lyrics(val: string);
            /**
             * Title of the currently playing track.
             */
            get title(): string;
            set title(val: string);
            /**
             * Composers of the currently playing track.
             */
            get composer(): string;
            set composer(val: string);
            /**
             * Comments of the currently playing track.
             */
            get comments(): string;
            set comments(val: string);
            /**
             * Path of the cached [property`AstalMpris`.Player:art_url].
             */
            get cover_art(): string;
            set cover_art(val: string);
            /**
             * Path of the cached [property`AstalMpris`.Player:art_url].
             */
            get coverArt(): string;
            set coverArt(val: string);

            // Constructors

            constructor(properties?: Partial<Player.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string): Player;

            // Methods

            /**
             * Brings the player's user interface to the front using any appropriate mechanism available.
             * The media player may be unable to control how its user interface is displayed, or it may not have a graphical user interface at all. In this
             * case, the [property`AstalMpris`.Player:can_raise] is `false` and this method does nothing.
             */
            raise(): void;
            /**
             * Causes the media player to stop running.
             * The media player may refuse to allow clients to shut it down. In this case, the [property`AstalMpris`.Player:can_quit] property is false
             * and this method does nothing.
             */
            quit(): void;
            /**
             * Toggle [property`AstalMpris`.Player:fullscreen] state.
             */
            toggle_fullscreen(): void;
            /**
             * Skips to the next track in the tracklist. If there is no next track (and endless playback and track repeat are both off), stop
             * playback. If [property`AstalMpris`.Player:can_go_next] is `false` this method has no effect.
             */
            next(): void;
            /**
             * Skips to the previous track in the tracklist. If there is no previous track (and endless playback and track repeat are both off),
             * stop playback. If [property`AstalMpris`.Player:can_go_previous] is `false` this method has no effect.
             */
            previous(): void;
            /**
             * Pauses playback. If playback is already paused, this has no effect. If [property`AstalMpris`.Player:can_pause] is `false` this method has
             * no effect.
             */
            pause(): void;
            /**
             * Pauses playback. If playback is already paused, resumes playback. If playback is stopped, starts playback.
             */
            play_pause(): void;
            /**
             * Stops playback. If playback is already stopped, this has no effect. If [property`AstalMpris`.Player:can_control] is `false` this method
             * has no effect.
             */
            stop(): void;
            /**
             * Starts or resumes playback. If already playing, this has no effect. If paused, playback resumes from the current position. If [property@
             * AstalMpris.Player:can_play] is `false` this method has no effect.
             */
            play(): void;
            /**
             * uri scheme should be an element of [property`AstalMpris`.Player:supported_uri_schemes] and the mime-type should match one of the elements
             * of [property`AstalMpris`.Player:supported_mime_types].
             * @param uri Uri of the track to load.
             */
            open_uri(uri: string): void;
            /**
             * Change [property`AstalMpris`.Player:loop_status] from none to track, from track to playlist, from playlist to none.
             */
            loop(): void;
            /**
             * Toggle [property`AstalMpris`.Player:shuffle_status].
             */
            shuffle(): void;
            /**
             * Lookup a key from [property`AstalMpris`.Player:metadata]. This method is useful for languages that fail to introspect hashtables.
             * @param key
             */
            get_meta(key: string): GLib.Variant | null;
            get_bus_name(): string;
            get_available(): boolean;
            get_can_quit(): boolean;
            get_fullscreen(): boolean;
            get_can_set_fullscreen(): boolean;
            get_can_raise(): boolean;
            get_identity(): string;
            get_entry(): string;
            get_supported_uri_schemes(): string[];
            get_supported_mime_types(): string[];
            get_loop_status(): Loop;
            set_loop_status(value: Loop | null): void;
            get_rate(): number;
            set_rate(value: number): void;
            get_shuffle_status(): Shuffle;
            set_shuffle_status(value: Shuffle | null): void;
            get_volume(): number;
            set_volume(value: number): void;
            get_position(): number;
            set_position(value: number): void;
            get_playback_status(): PlaybackStatus;
            get_minimum_rate(): number;
            get_maximum_rate(): number;
            get_can_go_next(): boolean;
            get_can_go_previous(): boolean;
            get_can_play(): boolean;
            get_can_pause(): boolean;
            get_can_seek(): boolean;
            get_can_control(): boolean;
            get_metadata(): GLib.HashTable<string, GLib.Variant>;
            get_trackid(): string;
            get_length(): number;
            get_art_url(): string;
            get_album(): string;
            get_album_artist(): string;
            get_artist(): string;
            get_lyrics(): string;
            get_title(): string;
            get_composer(): string;
            get_comments(): string;
            get_cover_art(): string;
        }

        type MprisClass = typeof Mpris;
        abstract class MprisPrivate {
            static $gtype: GObject.GType<MprisPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type PlayerClass = typeof Player;
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

    export default AstalMpris;
}

declare module 'gi://AstalMpris' {
    import AstalMpris01 from 'gi://AstalMpris?version=0.1';
    export default AstalMpris01;
}
// END
