import Gio from "gi://Gio?version=2.0";
import { GLib, interval, Variable, AstalIO } from "astal";

// Define a PlaybackStatus enum for the player's playback status.
export enum PlaybackStatus {
  Playing = "Playing",
  Paused = "Paused",
  Stopped = "Stopped"
}

export enum ShuffleStatus {
  Enabled = "Enabled",
  Disabled = "Disabled",
  Unsupported = "Unsupported"
}

export enum LoopStatus {
  None = "None",
  Track = "Track",
  Playlist = "Playlist",
  Unsupported = "Unsupported"
}

// -------------------------------------------------------
// Player class: represents a single MPRIS media player
// -------------------------------------------------------
export class Player {
  busName: string;
  proxy: Gio.DBusProxy | null;

  playbackStatus: Variable<PlaybackStatus | null> = Variable(null);
  position: Variable<number> = Variable(0);
  trackLength: Variable<number> = Variable(0);
  title: Variable<string | null> = Variable(null);
  artist: Variable<string | null> = Variable(null);
  coverArt: Variable<string | null> = Variable(null);
  shuffleStatus: Variable<ShuffleStatus | null> = Variable(null);
  canGoPrevious: Variable<boolean> = Variable(false);
  canGoNext: Variable<boolean> = Variable(false);
  loopStatus: Variable<LoopStatus | null> = Variable(null);
  canControl: Variable<boolean> = Variable(false);

  positionInterval: AstalIO.Time | null;

  constructor(busName: string) {
    this.busName = busName;
    this.proxy = null;
    this.positionInterval = null;

    this._initProxy();
    this._setupPositionInterval()
  }

  public destroy() {
    this.positionInterval?.cancel()
  }

  private _setupPositionInterval() {
    this.positionInterval = interval(1000, () => {
      if (this.proxy) {
        // Create a variant with the parameters (interface, property)
        let parameters = new GLib.Variant("(ss)", ["org.mpris.MediaPlayer2.Player", "Position"]);
        this.proxy.call(
          "org.freedesktop.DBus.Properties.Get",
          parameters,
          Gio.DBusCallFlags.NONE,
          -1,
          null,
          (proxy, res) => {
            try {
              let result = proxy?.call_finish(res);
              // The result is a variant tuple; extract the first element.
              // @ts-ignore
              let posVariant = result.deep_unpack()[0];
              let pos = posVariant.deep_unpack() as number / 1000000;
              this.position.set(pos);
            } catch (e) {
              log("Failed to update position: " + e);
            }
          }
        );
      }
    })
  }

  private _initProxy(): void {
    try {
      // Create a synchronous proxy for the media player's "Player" interface.
      this.proxy = Gio.DBusProxy.new_sync(
        Gio.DBus.session,
        Gio.DBusProxyFlags.NONE,
        null, // GDBusInterfaceInfo (not needed)
        this.busName,
        "/org/mpris/MediaPlayer2",
        "org.mpris.MediaPlayer2.Player",
        null // GCancellable
      );
    } catch (e) {
      print(`Error creating proxy for ${this.busName}`);
      print(e);
      return;
    }

    // Connect to property-changed signal.
    this.proxy.connect("g-properties-changed", (proxy: Gio.DBusProxy, changed: GLib.Variant, invalidated: GLib.Variant) => {
      this._onPropertiesChanged(changed, invalidated);
    });

    // Initialize our properties from the current state.
    this._updateAllProperties();
  }

  private _updateAllProperties(): void {
    // Update title, artist, and coverArt from the "Metadata" property.
    const metaVariant = this.proxy!.get_cached_property("Metadata");
    if (metaVariant) {
      try {
        let meta: any = metaVariant.deep_unpack();
        if (meta["xesam:title"]) {
          this.title.set(meta["xesam:title"].deep_unpack());
        } else {
          this.title.set(null)
        }
        if (meta["xesam:artist"]) {
          // xesam:artist is usually an array of strings.
          if (Array.isArray(meta["xesam:artist"].deep_unpack())) {
            this.artist.set(meta["xesam:artist"].deep_unpack().join(", "));
          } else {
            this.artist.set(meta["xesam:artist"].deep_unpack());
          }
        } else {
          this.artist.set(null);
        }
        // Extract track length from metadata.
        if (meta["mpris:length"]) {
          let lengthNumber = meta["mpris:length"].deep_unpack() as number / 1000000;
          this.trackLength.set(lengthNumber);
        } else {
          this.trackLength.set(0);
        }

        // Extract cover art from metadata
        this._extractCoverArt(meta);
      } catch (e) {
        log("Could not unpack metadata: " + e);
        this.title.set(null);
        this.artist.set(null);
        this.trackLength.set(0);
        this.coverArt.set(null);
      }
    } else {
      this.title.set(null);
      this.artist.set(null);
      this.trackLength.set(0);
      this.coverArt.set(null);
    }

    // Update playbackStatus.
    const pbVar = this.proxy!.get_cached_property("PlaybackStatus");
    if (pbVar) {
      try {
        let pbStr = pbVar.deep_unpack() as string;
        this.playbackStatus.set(pbStr as PlaybackStatus);
      } catch (e) {
        this.playbackStatus.set(null);
      }
    } else {
      this.playbackStatus.set(null);
    }

    // Update position.
    const posVar = this.proxy!.get_cached_property("Position");
    if (posVar) {
      try {
        let posNumber = posVar.deep_unpack() as number / 1000000;
        this.position.set(posNumber);
      } catch (e) {
        this.position.set(0);
      }
    } else {
      this.position.set(0);
    }

    // Shuffle.
    const shuffleVar = this.proxy!.get_cached_property("Shuffle");
    if (shuffleVar) {
      try {
        let shuffleBool = shuffleVar.deep_unpack() as boolean;
        this.shuffleStatus.set(shuffleBool ? ShuffleStatus.Enabled : ShuffleStatus.Disabled);
      } catch (e) {
        this.shuffleStatus.set(ShuffleStatus.Unsupported);
      }
    } else {
      this.shuffleStatus.set(ShuffleStatus.Unsupported);
    }

    // CanGoPrevious.
    const canGoPrevVar = this.proxy!.get_cached_property("CanGoPrevious");
    if (canGoPrevVar) {
      try {
        let canGoPrev = canGoPrevVar.deep_unpack() as boolean;
        this.canGoPrevious.set(canGoPrev);
      } catch (e) {
        this.canGoPrevious.set(false);
      }
    } else {
      this.canGoPrevious.set(false);
    }

    // CanGoNext.
    const canGoNextVar = this.proxy!.get_cached_property("CanGoNext");
    if (canGoNextVar) {
      try {
        let canGoNext = canGoNextVar.deep_unpack() as boolean;
        this.canGoNext.set(canGoNext);
      } catch (e) {
        this.canGoNext.set(false);
      }
    } else {
      this.canGoNext.set(false);
    }

    // LoopStatus.
    const loopVar = this.proxy!.get_cached_property("LoopStatus");
    if (loopVar) {
      try {
        let loopStr = loopVar.deep_unpack() as string;
        this.loopStatus.set(loopStr as LoopStatus);
      } catch (e) {
        this.loopStatus.set(LoopStatus.Unsupported);
      }
    } else {
      this.loopStatus.set(LoopStatus.Unsupported);
    }

    // CanControl.
    const canControlVar = this.proxy!.get_cached_property("CanControl");
    if (canControlVar) {
      try {
        let canControl = canControlVar.deep_unpack() as boolean;
        this.canControl.set(canControl);
      } catch (e) {
        this.canControl.set(false);
      }
    } else {
      this.canControl.set(false);
    }

    this._notifyPropertiesUpdated();
  }

  private _extractCoverArt(meta: any): void {
    // Try to find cover art in the metadata
    // Several possible locations in order of preference
    if (meta["mpris:artUrl"]) {
      try {
        let artUrl = meta["mpris:artUrl"].deep_unpack();
        // Convert URI to local file path if needed
        if (artUrl.startsWith("file://")) {
          this.coverArt.set(artUrl);
        } else {
          // Keep the original URL for remote images
          this.coverArt.set(artUrl);
        }
        return;
      } catch (e) {
        log("Could not unpack art URL: " + e);
      }
    }

    // Try alternative fields that some players might use
    const alternativeFields = [
      "xesam:artUrl",
      "xesam:image",
      "xesam:album-art"
    ];

    for (const field of alternativeFields) {
      if (meta[field]) {
        try {
          let artData = meta[field].deep_unpack();
          if (typeof artData === "string") {
            this.coverArt.set(artData);
            return;
          }
        } catch (e) {
          log(`Could not unpack art from ${field}: ${e}`);
        }
      }
    }

    // If we get here, no cover art was found
    this.coverArt.set(null);
  }

  private _onPropertiesChanged(changed: GLib.Variant, invalidated: GLib.Variant): void {
    let dict: any = changed.deep_unpack();

    if ("Metadata" in dict) {
      let metaVariant = dict["Metadata"];
      try {
        let meta: any = metaVariant.deep_unpack();
        if (meta["xesam:title"]) {
          this.title.set(meta["xesam:title"].deep_unpack());
        } else {
          this.title.set(null)
        }
        if (meta["xesam:artist"]) {
          if (Array.isArray(meta["xesam:artist"].deep_unpack())) {
            this.artist.set(meta["xesam:artist"].deep_unpack().join(", "));
          } else {
            this.artist.set(meta["xesam:artist"].deep_unpack());
          }
        } else {
          this.artist.set(null);
        }
        // Extract track length from metadata.
        if (meta["mpris:length"]) {
          let lengthNumber = meta["mpris:length"].deep_unpack() as number / 1000000;
          this.trackLength.set(lengthNumber);
        } else {
          this.trackLength.set(0);
        }

        // Extract cover art from metadata when it changes
        this._extractCoverArt(meta);
      } catch (e) {
        log("Could not unpack metadata in onPropertiesChanged: " + e);
        this.title.set(null);
        this.artist.set(null);
        this.trackLength.set(0);
        this.coverArt.set(null);
      }
    }
    if ("PlaybackStatus" in dict) {
      try {
        let pbStr = dict["PlaybackStatus"].deep_unpack() as string;
        this.playbackStatus.set(pbStr as PlaybackStatus);
      } catch (e) {
        this.playbackStatus.set(null);
      }
    }
    if ("Position" in dict) {
      try {
        let posNumber = dict["Position"].deep_unpack() as number;
        this.position.set(posNumber);
      } catch (e) {
        this.position.set(0);
      }
    }
    if ("Shuffle" in dict) {
      try {
        let shuffleBool = dict["Shuffle"].deep_unpack() as boolean;
        this.shuffleStatus.set(shuffleBool ? ShuffleStatus.Enabled : ShuffleStatus.Disabled);
      } catch (e) {
        this.shuffleStatus.set(ShuffleStatus.Unsupported);
      }
    }
    if ("CanGoPrevious" in dict) {
      try {
        let canGoPrev = dict["CanGoPrevious"].deep_unpack() as boolean;
        this.canGoPrevious.set(canGoPrev);
      } catch (e) {
        this.canGoPrevious.set(false);
      }
    }
    if ("CanGoNext" in dict) {
      try {
        let canGoNext = dict["CanGoNext"].deep_unpack() as boolean;
        this.canGoNext.set(canGoNext);
      } catch (e) {
        this.canGoNext.set(false);
      }
    }
    if ("LoopStatus" in dict) {
      try {
        let loopStr = dict["LoopStatus"].deep_unpack() as string;
        this.loopStatus.set(loopStr as LoopStatus);
      } catch (e) {
        this.loopStatus.set(LoopStatus.Unsupported);
      }
    }

    if ("CanControl" in dict) {
      try {
        let canControl = dict["CanControl"].deep_unpack() as boolean;
        this.canControl.set(canControl);
      } catch (e) {
        this.canControl.set(false);
      }
    }

    this._notifyPropertiesUpdated();
  }

  private _notifyPropertiesUpdated(): void {
    // uncomment to enable logs

    // log(`Player (${this.busName}) updated:`);
    // log(`  PlaybackStatus: ${this.playbackStatus.get()}`);
    // log(`  Position: ${this.position.get()}`);
    // log(`  Track Length: ${this.trackLength.get()}`);
    // log(`  Title: ${this.title.get()}`);
    // log(`  Artist: ${this.artist.get()}`);
    // log(`  Cover Art: ${this.coverArt.get()}`);
    // log(`  Shuffle: ${this.shuffleStatus.get()}`);
    // log(`  CanGoPrevious: ${this.canGoPrevious.get()}`);
    // log(`  CanGoNext: ${this.canGoNext.get()}`);
    // log(`  LoopStatus: ${this.loopStatus.get()}`);
    // log(`  CanControl: ${this.canControl.get()}`);
  }

  public setShuffleStatus(status: ShuffleStatus): void {
    if (!this.proxy) {
      print(`No proxy available for ${this.busName}`);
      return;
    }

    // Determine the boolean value based on the enum.
    let boolValue: boolean;
    switch (status) {
      case ShuffleStatus.Enabled:
        boolValue = true;
        break;
      case ShuffleStatus.Disabled:
        boolValue = false;
        break;
      case ShuffleStatus.Unsupported:
        print("Shuffle is unsupported; not setting property.");
        return;
    }

    // Create a GLib.Variant for the boolean.
    let valueVariant = new GLib.Variant("b", boolValue);

    // Create parameters for the DBus method call.
    // The tuple contains: interface name, property name, and the value.
    let parameters = new GLib.Variant("(ssv)", ["org.mpris.MediaPlayer2.Player", "Shuffle", valueVariant]);

    // Call the "Set" method on org.freedesktop.DBus.Properties to update the property.
    this.proxy.call(
      "org.freedesktop.DBus.Properties.Set",
      parameters,
      Gio.DBusCallFlags.NONE,
      -1,
      null,
      (proxy, res) => {
        try {
          proxy?.call_finish(res);
          // Optionally update the local reactive variable.
          this.shuffleStatus.set(status);
          print(`Shuffle status set to ${status}`);
        } catch (e) {
          print("Error setting shuffle status: " + e);
        }
      }
    );
  }

  public setLoopStatus(status: LoopStatus): void {
    if (!this.proxy) {
      print(`No proxy available for ${this.busName}`);
      return;
    }

    // Create a GLib.Variant for the new loop status. LoopStatus is a string.
    let valueVariant = new GLib.Variant("s", status);

    // Prepare the DBus parameters as a tuple: (interface, property, value)
    let parameters = new GLib.Variant("(ssv)", ["org.mpris.MediaPlayer2.Player", "LoopStatus", valueVariant]);

    // Call the DBus method to set the property.
    this.proxy.call(
      "org.freedesktop.DBus.Properties.Set",
      parameters,
      Gio.DBusCallFlags.NONE,
      -1,
      null,
      (proxy, res) => {
        try {
          proxy?.call_finish(res);
          // Update the local reactive variable if the call succeeds.
          this.loopStatus.set(status);
          print(`Loop status set to ${status}`);
        } catch (e) {
          print("Error setting loop status: " + e);
        }
      }
    );
  }

  public nextTrack(): void {
    if (!this.proxy) {
      print(`No proxy available for ${this.busName}`);
      return;
    }
    // Call the Next method with no parameters.
    this.proxy.call(
      "Next",
      new GLib.Variant("()", []),
      Gio.DBusCallFlags.NONE,
      -1,
      null,
      (proxy, res) => {
        try {
          proxy?.call_finish(res);
          print("Switched to next track");
        } catch (e) {
          print("Error switching to next track: " + e);
        }
      }
    );
  }

  public previousTrack(): void {
    if (!this.proxy) {
      print(`No proxy available for ${this.busName}`);
      return;
    }
    // Call the Previous method with no parameters.
    this.proxy.call(
      "Previous",
      new GLib.Variant("()", []),
      Gio.DBusCallFlags.NONE,
      -1,
      null,
      (proxy, res) => {
        try {
          proxy?.call_finish(res);
          print("Switched to previous track");
        } catch (e) {
          print("Error switching to previous track: " + e);
        }
      }
    );
  }

  public playPause(): void {
    if (!this.proxy) {
      print(`No proxy available for ${this.busName}`);
      return;
    }
    // Call the PlayPause method with no parameters.
    this.proxy.call(
      "PlayPause",
      new GLib.Variant("()", []),
      Gio.DBusCallFlags.NONE,
      -1,
      null,
      (proxy, res) => {
        try {
          proxy?.call_finish(res);
          print("Toggled play/pause");
        } catch (e) {
          print("Error toggling play/pause: " + e);
        }
      }
    );
    this.playbackStatus.set(this.playbackStatus.get() === PlaybackStatus.Playing ? PlaybackStatus.Paused : PlaybackStatus.Playing)
  }

  public setPosition(newPosition: number): void {
    if (!this.proxy) {
      print(`No proxy available for ${this.busName}`);
      return;
    }

    // Retrieve the Metadata property from the proxy.
    const metaVariant = this.proxy.get_cached_property("Metadata");
    if (!metaVariant) {
      print("No metadata available; cannot update track position.");
      return;
    }

    // Unpack the metadata to extract the track id.
    let meta: any;
    try {
      meta = metaVariant.deep_unpack();
    } catch (e) {
      print("Error unpacking metadata: " + e);
      return;
    }

    // Ensure the metadata contains the track id.
    if (!meta["mpris:trackid"]) {
      print("No track id available in metadata.");
      return;
    }

    let trackId: string;
    try {
      // mpris:trackid is itself a variant; extract the plain string.
      trackId = meta["mpris:trackid"].deep_unpack();
    } catch (e) {
      print("Error unpacking track id: " + e);
      return;
    }

    // Create a tuple variant for the parameters.
    // The signature "(ox)" indicates a tuple with an object path ("o") and an int64 ("x").
    let parameters = new GLib.Variant("(ox)", [trackId, newPosition * 1000000]);

    // Call the "SetPosition" method on the MPRIS interface.
    this.proxy.call(
      "SetPosition",
      parameters,
      Gio.DBusCallFlags.NONE,
      -1,
      null,
      (proxy, res) => {
        try {
          proxy?.call_finish(res);
          print(`Position updated to ${newPosition} (seconds)`);
        } catch (e) {
          print("Error setting position: " + e);
        }
      }
    );

    this.position.set(newPosition)
  }
}

// -------------------------------------------------------
// Mpris class: keeps track of all active Player objects
// -------------------------------------------------------
export class Mpris {
  players: Variable<Player[]> = Variable([]);

  constructor() {
    // Watch for NameOwnerChanged signals so we detect players appearing/disappearing.
    this._watchNameOwnerChanges();

    // Load any players already active.
    this._loadExistingPlayers();
  }

  private _loadExistingPlayers(): void {
    Gio.DBus.session.call(
      "org.freedesktop.DBus",
      "/org/freedesktop/DBus",
      "org.freedesktop.DBus",
      "ListNames",
      null,
      null,
      Gio.DBusCallFlags.NONE,
      -1,
      null,
      (connection, res, data) => {
        try {
          let result: GLib.Variant = Gio.DBus.session.call_finish(res);
          // The ListNames call returns an array of names.
          // @ts-ignore
          let names: string[] = result.deep_unpack()[0]
          for (let name of names) {
            if (name.startsWith("org.mpris.MediaPlayer2")) {
              this._addPlayer(name);
            }
          }
        } catch (e) {
          print(e);
        }
      }
    );
  }

  private _watchNameOwnerChanges(): void {
    Gio.DBus.session.signal_subscribe(
      null,  // sender: null means any sender
      "org.freedesktop.DBus",
      "NameOwnerChanged",
      "/org/freedesktop/DBus",
      null,  // no filtering by specific name
      Gio.DBusSignalFlags.NONE,
      (conn, senderName, objectPath, interfaceName, signalName, parameters) => {
        // The signal parameters are [name, old_owner, new_owner].
        // @ts-ignore
        let [name, oldOwner, newOwner] = parameters.deep_unpack();
        if (!name.startsWith("org.mpris.MediaPlayer2")) return;

        if (newOwner !== "") {
          // A new player appeared.
          this._addPlayer(name);
        } else {
          // A player has disappeared.
          this._removePlayer(name);
        }
      }
    );
  }

  private _addPlayer(busName: string): void {
    if (!this.players.get().find((player) => player.busName === busName)) {
      log("Adding player: " + busName);
      try {
        let player = new Player(busName);
        this.players.set(this.players.get().concat(player))
      } catch (e) {
        print("Failed to add player: " + busName);
        print(e)
      }
    }
  }

  private _removePlayer(busName: string): void {
    log("Removing player: " + busName)
    this.players.get().find((player) => player.busName === busName)?.destroy()
    this.players.set(this.players.get().filter((player) => player.busName !== busName))
  }
}
