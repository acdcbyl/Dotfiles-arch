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

declare module 'gi://AstalWp?version=0.1' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace AstalWp {
        /**
         * AstalWp-0.1
         */

        export namespace DeviceType {
            export const $gtype: GObject.GType<DeviceType>;
        }

        enum DeviceType {
            AUDIO,
            VIDEO,
        }

        export namespace MediaClass {
            export const $gtype: GObject.GType<MediaClass>;
        }

        enum MediaClass {
            AUDIO_MICROPHONE,
            AUDIO_SPEAKER,
            AUDIO_RECORDER,
            AUDIO_STREAM,
            VIDEO_SOURCE,
            VIDEO_SINK,
            VIDEO_RECORDER,
            VIDEO_STREAM,
        }

        export namespace Scale {
            export const $gtype: GObject.GType<Scale>;
        }

        enum Scale {
            LINEAR,
            CUBIC,
        }
        const MAJOR_VERSION: number;
        const MICRO_VERSION: number;
        const MINOR_VERSION: number;
        const VERSION: string;
        /**
         * gets the default wireplumber object.
         * @returns gets the default wireplumber object.
         */
        function get_default(): Wp | null;
        module Audio {
            // Signal callback interfaces

            interface DeviceAdded {
                (object: Device): void;
            }

            interface DeviceRemoved {
                (object: Device): void;
            }

            interface MicrophoneAdded {
                (object: Endpoint): void;
            }

            interface MicrophoneRemoved {
                (object: Endpoint): void;
            }

            interface RecorderAdded {
                (object: Endpoint): void;
            }

            interface RecorderRemoved {
                (object: Endpoint): void;
            }

            interface SpeakerAdded {
                (object: Endpoint): void;
            }

            interface SpeakerRemoved {
                (object: Endpoint): void;
            }

            interface StreamAdded {
                (object: Endpoint): void;
            }

            interface StreamRemoved {
                (object: Endpoint): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                default_microphone: Endpoint;
                defaultMicrophone: Endpoint;
                default_speaker: Endpoint;
                defaultSpeaker: Endpoint;
                devices: Device[];
                microphones: Endpoint[];
                recorders: Endpoint[];
                speakers: Endpoint[];
                streams: Endpoint[];
            }
        }

        /**
         * is instanciated by [class`AstalWp`.Wp]. An instance of class can only be received there.
         *
         *  This is a convinience class and acts as a filter for [class`AstalWp`.Wp] to filter for audio
         * endpoints and devices.
         */
        class Audio extends GObject.Object {
            static $gtype: GObject.GType<Audio>;

            // Properties

            /**
             * The AstalWndpoint object representing the default speaker
             */
            get default_microphone(): Endpoint;
            /**
             * The AstalWndpoint object representing the default speaker
             */
            get defaultMicrophone(): Endpoint;
            /**
             * The AstalWndpoint object representing the default speaker
             */
            get default_speaker(): Endpoint;
            /**
             * The AstalWndpoint object representing the default speaker
             */
            get defaultSpeaker(): Endpoint;
            /**
             * A list of AstalWpEndpoint objects
             */
            get devices(): Device[];
            /**
             * A list of AstalWpEndpoint objects
             */
            get microphones(): Endpoint[];
            /**
             * A list of AstalWpEndpoint objects
             */
            get recorders(): Endpoint[];
            /**
             * A list of AstalWpEndpoint objects
             */
            get speakers(): Endpoint[];
            /**
             * A list of AstalWpEndpoint objects
             */
            get streams(): Endpoint[];

            // Constructors

            constructor(properties?: Partial<Audio.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](wp: Wp): Audio;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'device-added', callback: (_source: this, object: Device) => void): number;
            connect_after(signal: 'device-added', callback: (_source: this, object: Device) => void): number;
            emit(signal: 'device-added', object: Device): void;
            connect(signal: 'device-removed', callback: (_source: this, object: Device) => void): number;
            connect_after(signal: 'device-removed', callback: (_source: this, object: Device) => void): number;
            emit(signal: 'device-removed', object: Device): void;
            connect(signal: 'microphone-added', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'microphone-added', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'microphone-added', object: Endpoint): void;
            connect(signal: 'microphone-removed', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'microphone-removed', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'microphone-removed', object: Endpoint): void;
            connect(signal: 'recorder-added', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'recorder-added', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'recorder-added', object: Endpoint): void;
            connect(signal: 'recorder-removed', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'recorder-removed', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'recorder-removed', object: Endpoint): void;
            connect(signal: 'speaker-added', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'speaker-added', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'speaker-added', object: Endpoint): void;
            connect(signal: 'speaker-removed', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'speaker-removed', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'speaker-removed', object: Endpoint): void;
            connect(signal: 'stream-added', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'stream-added', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'stream-added', object: Endpoint): void;
            connect(signal: 'stream-removed', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'stream-removed', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'stream-removed', object: Endpoint): void;

            // Methods

            /**
             * gets the default microphone object
             */
            get_default_microphone(): Endpoint | null;
            /**
             * gets the default speaker object
             */
            get_default_speaker(): Endpoint | null;
            /**
             * gets the device with the given id
             * @param id the id of the device
             */
            get_device(id: number): Device | null;
            /**
             * a GList containing the devices
             */
            get_devices(): Device[] | null;
            /**
             * the endpoint with the given id
             * @param id the id of the endpoint
             */
            get_endpoint(id: number): Endpoint | null;
            /**
             * gets the microphone with the given id
             * @param id the id of the endpoint
             */
            get_microphone(id: number): Endpoint | null;
            /**
             * a GList containing the microphones
             */
            get_microphones(): Endpoint[] | null;
            /**
             * gets the recorder with the given id
             * @param id the id of the endpoint
             */
            get_recorder(id: number): Endpoint | null;
            /**
             * a GList containing the recorders
             */
            get_recorders(): Endpoint[] | null;
            /**
             * gets the speaker with the given id
             * @param id the id of the endpoint
             */
            get_speaker(id: number): Endpoint | null;
            /**
             * a GList containing the speakers
             */
            get_speakers(): Endpoint[] | null;
            /**
             * gets the stream with the given id
             * @param id the id of the endpoint
             */
            get_stream(id: number): Endpoint | null;
            /**
             * a GList containing the streams
             */
            get_streams(): Endpoint[] | null;
        }

        module Device {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                active_profile_id: number;
                activeProfileId: number;
                description: string;
                device_type: DeviceType;
                deviceType: DeviceType;
                icon: string;
                id: number;
                profiles: Profile[];
            }
        }

        class Device extends GObject.Object {
            static $gtype: GObject.GType<Device>;

            // Properties

            /**
             * The id of the currently active profile.
             */
            get active_profile_id(): number;
            set active_profile_id(val: number);
            /**
             * The id of the currently active profile.
             */
            get activeProfileId(): number;
            set activeProfileId(val: number);
            /**
             * The description of this device.
             */
            get description(): string;
            /**
             * The type of this device
             */
            get device_type(): DeviceType;
            /**
             * The type of this device
             */
            get deviceType(): DeviceType;
            /**
             * The icon name for this device.
             */
            get icon(): string;
            /**
             * The id of this device.
             */
            get id(): number;
            /**
             * A list of available profiles
             */
            get profiles(): Profile[];

            // Constructors

            constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * gets the currently active profile of this device
             */
            get_active_profile(): number;
            /**
             * gets the description of this device
             */
            get_description(): string;
            /**
             * gets the type of this device
             */
            get_device_type(): DeviceType;
            /**
             * gets the icon of this device
             */
            get_icon(): string;
            /**
             * gets the id of this device
             */
            get_id(): number;
            /**
             * gets the profile with the given id
             * @param id the id of the profile
             */
            get_profile(id: number): Profile | null;
            /**
             * gets a GList containing the profiles
             */
            get_profiles(): Profile[] | null;
            /**
             * sets the profile for this device
             * @param profile_id the id of the profile
             */
            set_active_profile(profile_id: number): void;
        }

        module Endpoint {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                description: string;
                icon: string;
                id: number;
                is_default: boolean;
                isDefault: boolean;
                lock_channels: boolean;
                lockChannels: boolean;
                media_class: MediaClass;
                mediaClass: MediaClass;
                mute: boolean;
                name: string;
                volume: number;
                volume_icon: string;
                volumeIcon: string;
            }
        }

        class Endpoint extends GObject.Object {
            static $gtype: GObject.GType<Endpoint>;

            // Properties

            /**
             * The description of this endpoint
             */
            get description(): string;
            /**
             * The icon of this endpoint. Note that endpoints do not have icons associated with them in
             * pipewire, so the icon of the associated device is used instead.
             */
            get icon(): string;
            /**
             * The pipewire id of this endpoint.
             */
            get id(): number;
            /**
             * Whether this endpoint is the default one used for this media-class. Note that setting this
             * property to false has no effect.
             */
            get is_default(): boolean;
            set is_default(val: boolean);
            /**
             * Whether this endpoint is the default one used for this media-class. Note that setting this
             * property to false has no effect.
             */
            get isDefault(): boolean;
            set isDefault(val: boolean);
            /**
             * Whether to lock the channels together or not.
             */
            get lock_channels(): boolean;
            set lock_channels(val: boolean);
            /**
             * Whether to lock the channels together or not.
             */
            get lockChannels(): boolean;
            set lockChannels(val: boolean);
            /**
             * The media class of this endpoint
             */
            get media_class(): MediaClass;
            /**
             * The media class of this endpoint
             */
            get mediaClass(): MediaClass;
            /**
             * The mute state of this endpoint
             */
            get mute(): boolean;
            set mute(val: boolean);
            /**
             * The name of this endpoint
             */
            get name(): string;
            /**
             * The volume of this endpoint
             */
            get volume(): number;
            set volume(val: number);
            /**
             * The volume icon of this endpoint
             */
            get volume_icon(): string;
            /**
             * The volume icon of this endpoint
             */
            get volumeIcon(): string;

            // Constructors

            constructor(properties?: Partial<Endpoint.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * gets the description of this endpoint
             */
            get_description(): string;
            /**
             * gets the icon for this endpoint
             */
            get_icon(): string;
            /**
             * gets the id of the endpoint.
             */
            get_id(): number;
            get_is_default(): boolean;
            get_lock_channels(): boolean;
            /**
             * gets the media class of the endpoint.
             */
            get_media_class(): MediaClass;
            /**
             * gets the mute status of the endpoint.
             */
            get_mute(): boolean;
            /**
             * gets the name of this endpoint
             */
            get_name(): string;
            /**
             * gets the volume
             */
            get_volume(): number;
            get_volume_icon(): string;
            set_is_default(is_default: boolean): void;
            set_lock_channels(lock_channels: boolean): void;
            /**
             * Sets the mute status for the endpoint.
             * @param mute A boolean indicating whether to mute the endpoint.
             */
            set_mute(mute: boolean): void;
            /**
             * Sets the volume level for this endpoint. The volume is clamped to be between
             * 0 and 1.5.
             * @param volume The new volume level to set.
             */
            set_volume(volume: number): void;
        }

        module Profile {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                description: string;
                index: number;
            }
        }

        class Profile extends GObject.Object {
            static $gtype: GObject.GType<Profile>;

            // Properties

            get description(): string;
            get index(): number;

            // Constructors

            constructor(properties?: Partial<Profile.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_description(): string;
            get_index(): number;
        }

        module Video {
            // Signal callback interfaces

            interface DeviceAdded {
                (object: Device): void;
            }

            interface DeviceRemoved {
                (object: Device): void;
            }

            interface RecorderAdded {
                (object: Endpoint): void;
            }

            interface RecorderRemoved {
                (object: Endpoint): void;
            }

            interface SinkAdded {
                (object: Endpoint): void;
            }

            interface SinkRemoved {
                (object: Endpoint): void;
            }

            interface SourceAdded {
                (object: Endpoint): void;
            }

            interface SourceRemoved {
                (object: Endpoint): void;
            }

            interface StreamAdded {
                (object: Endpoint): void;
            }

            interface StreamRemoved {
                (object: Endpoint): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                devices: Endpoint[];
                recorders: any;
                sinks: Endpoint[];
                sources: Endpoint[];
                streams: Endpoint[];
            }
        }

        /**
         * is instanciated by [class`AstalWp`.Wp]. An instance of class can only be received there.
         *
         *  This is a convinience class and acts as a filter for [class`AstalWp`.Wp] to filter for video
         * endpoints and devices.
         */
        class Video extends GObject.Object {
            static $gtype: GObject.GType<Video>;

            // Properties

            /**
             * A list of AstalWpEndpoint objects
             */
            get devices(): Endpoint[];
            get recorders(): any;
            /**
             * A list of AstalWpEndpoint objects
             */
            get sinks(): Endpoint[];
            /**
             * A list of AstalWpEndpoint objects
             */
            get sources(): Endpoint[];
            /**
             * A list of AstalWpEndpoint objects
             */
            get streams(): Endpoint[];

            // Constructors

            constructor(properties?: Partial<Video.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](wp: Wp): Video;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'device-added', callback: (_source: this, object: Device) => void): number;
            connect_after(signal: 'device-added', callback: (_source: this, object: Device) => void): number;
            emit(signal: 'device-added', object: Device): void;
            connect(signal: 'device-removed', callback: (_source: this, object: Device) => void): number;
            connect_after(signal: 'device-removed', callback: (_source: this, object: Device) => void): number;
            emit(signal: 'device-removed', object: Device): void;
            connect(signal: 'recorder-added', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'recorder-added', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'recorder-added', object: Endpoint): void;
            connect(signal: 'recorder-removed', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'recorder-removed', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'recorder-removed', object: Endpoint): void;
            connect(signal: 'sink-added', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'sink-added', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'sink-added', object: Endpoint): void;
            connect(signal: 'sink-removed', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'sink-removed', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'sink-removed', object: Endpoint): void;
            connect(signal: 'source-added', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'source-added', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'source-added', object: Endpoint): void;
            connect(signal: 'source-removed', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'source-removed', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'source-removed', object: Endpoint): void;
            connect(signal: 'stream-added', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'stream-added', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'stream-added', object: Endpoint): void;
            connect(signal: 'stream-removed', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'stream-removed', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'stream-removed', object: Endpoint): void;

            // Methods

            /**
             * the device with the given id
             * @param id the id of the device
             * @returns the device with the given id
             */
            get_device(id: number): Device | null;
            /**
             * a list containing the devices
             * @returns a GList containing the devices
             */
            get_devices(): Device[] | null;
            /**
             * the recorder with the given id
             * @param id the id of the endpoint
             * @returns the recorder with the given id
             */
            get_recorder(id: number): Endpoint | null;
            /**
             * a list containing the video recorders
             * @returns a GList containing the video recorders
             */
            get_recorders(): Endpoint[] | null;
            /**
             * the sink with the given id
             * @param id the id of the endpoint
             * @returns the sink with the given id
             */
            get_sink(id: number): Endpoint | null;
            /**
             * a list containing the video sinks
             * @returns a GList containing the video sinks
             */
            get_sinks(): Endpoint[] | null;
            /**
             * the source with the given id
             * @param id the id of the endpoint
             * @returns the source with the given id
             */
            get_source(id: number): Endpoint | null;
            /**
             * a list containing the video sources
             * @returns a GList containing the video sources
             */
            get_sources(): Endpoint[] | null;
            /**
             * the stream with the given id
             * @param id the id of the endpoint
             * @returns the stream with the given id
             */
            get_stream(id: number): Endpoint | null;
            /**
             * a list containing the video streams
             * @returns a GList containing the video streams
             */
            get_streams(): Endpoint[] | null;
        }

        module Wp {
            // Signal callback interfaces

            interface DeviceAdded {
                (object: Device): void;
            }

            interface DeviceRemoved {
                (object: Device): void;
            }

            interface EndpointAdded {
                (object: Endpoint): void;
            }

            interface EndpointRemoved {
                (object: Endpoint): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                audio: Audio;
                default_microphone: Endpoint;
                defaultMicrophone: Endpoint;
                default_speaker: Endpoint;
                defaultSpeaker: Endpoint;
                devices: Device[];
                endpoints: Endpoint[];
                scale: Scale;
                video: Video;
            }
        }

        /**
         * manages the connection to wireplumber. Usually you don't want to use this class directly, but use
         * the [class`AstalWp`.Audio] or [class`AstalWp`.Video] instead.
         */
        class Wp extends GObject.Object {
            static $gtype: GObject.GType<Wp>;

            // Properties

            get audio(): Audio;
            /**
             * The [class`AstalWp`.Endpoint] representing the default speaker
             */
            get default_microphone(): Endpoint;
            /**
             * The [class`AstalWp`.Endpoint] representing the default speaker
             */
            get defaultMicrophone(): Endpoint;
            /**
             * The [class`AstalWp`.Endpoint] representing the default speaker
             */
            get default_speaker(): Endpoint;
            /**
             * The [class`AstalWp`.Endpoint] representing the default speaker
             */
            get defaultSpeaker(): Endpoint;
            /**
             * A list of [class`AstalWp`.Device] objects
             */
            get devices(): Device[];
            /**
             * A list of [class`AstalWp`.Endpoint] objects
             */
            get endpoints(): Endpoint[];
            /**
             * The scale used for the volume
             */
            get scale(): Scale;
            set scale(val: Scale);
            get video(): Video;

            // Constructors

            constructor(properties?: Partial<Wp.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'device-added', callback: (_source: this, object: Device) => void): number;
            connect_after(signal: 'device-added', callback: (_source: this, object: Device) => void): number;
            emit(signal: 'device-added', object: Device): void;
            connect(signal: 'device-removed', callback: (_source: this, object: Device) => void): number;
            connect_after(signal: 'device-removed', callback: (_source: this, object: Device) => void): number;
            emit(signal: 'device-removed', object: Device): void;
            connect(signal: 'endpoint-added', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'endpoint-added', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'endpoint-added', object: Endpoint): void;
            connect(signal: 'endpoint-removed', callback: (_source: this, object: Endpoint) => void): number;
            connect_after(signal: 'endpoint-removed', callback: (_source: this, object: Endpoint) => void): number;
            emit(signal: 'endpoint-removed', object: Endpoint): void;

            // Static methods

            /**
             * gets the default wireplumber object.
             */
            static get_default(): Wp | null;

            // Methods

            /**
             * gets the [class`AstalWp`.Audio] object
             * @returns gets the audio object
             */
            get_audio(): Audio | null;
            /**
             * gets the default microphone object
             * @returns gets the default microphone object
             */
            get_default_microphone(): Endpoint | null;
            /**
             * gets the default speaker object
             * @returns gets the default speaker object
             */
            get_default_speaker(): Endpoint | null;
            /**
             * the device with the given id
             * @param id the id of the device
             * @returns the device with the given id
             */
            get_device(id: number): Device | null;
            /**
             * the GList containing the devices
             * @returns a GList containing the devices
             */
            get_devices(): Device[] | null;
            /**
             * the endpoint with the given id
             * @param id the id of the endpoint
             * @returns the endpoint with the given id
             */
            get_endpoint(id: number): Endpoint | null;
            /**
             * a GList containing all endpoints
             * @returns a GList containing the endpoints
             */
            get_endpoints(): Endpoint[] | null;
            get_scale(): Scale;
            /**
             * gets the video object
             * @returns gets the video object
             */
            get_video(): Video | null;
            set_scale(scale: Scale | null): void;
        }

        type AudioClass = typeof Audio;
        type DeviceClass = typeof Device;
        type EndpointClass = typeof Endpoint;
        type ProfileClass = typeof Profile;
        type VideoClass = typeof Video;
        type WpClass = typeof Wp;
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

    export default AstalWp;
}

declare module 'gi://AstalWp' {
    import AstalWp01 from 'gi://AstalWp?version=0.1';
    export default AstalWp01;
}
// END
