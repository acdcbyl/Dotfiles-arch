import { execAsync } from "astal";
import AstalWp from "gi://AstalWp?version=0.1";
import { setOSD } from "./Osd";

function getWpEndpoint(id: string) {
    const wp = AstalWp.get_default();
    let device: AstalWp.Endpoint | null = null;
    if (id == "@DEFAULT_AUDIO_SINK@") {
        device = wp?.get_default_speaker() ?? null;
    } else if (id == "@DEFAULT_AUDIO_SOURCE@") {
        device = wp?.get_default_microphone() ?? null;
    } else {
        // numeric ID
        device = wp?.get_endpoint(Number(id)) ?? null;
    }

    if (!device) {
        throw new Error("Couldn't get wireplumber device for displaying OSD");
    }
    return device;
}

export function execWrappedWpCommand(command: string) {
    if (command.startsWith("wpctl set-volume")) {
        const match = command.match(
            /^wpctl set-volume (@DEFAULT_AUDIO_SINK@|@DEFAULT_AUDIO_SOURCE@|[0-9]+) (0|[1-9][0-9]*(?:\.[0-9]+)?)(%?)([+-]?)$/
        );
        if (!match) {
            console.error("Couldn't parse wpctl set-volume command: " + command);
            return;
        }

        const [_full, deviceId, adjustmentString, percent, operator] = match;
        const device = getWpEndpoint(deviceId);

        let volume = device.volume;
        let adjustment = Number(adjustmentString);
        if (percent) {
            adjustment /= 100;
        }
        if (operator == "+") {
            volume += adjustment;
        } else if (operator == "-") {
            volume -= adjustment;
        } else {
            volume = adjustment;
        }
        volume = Math.min(Math.max(0, volume), 1.5);
        // round to the nearest percent
        volume = Math.round(volume * 100) / 100;

        device.set_volume(volume);
        if (Math.abs(volume - device.volume) < 0.001) {
            setOSD(device.volumeIcon, device.volume);
        } else {
            const id = device.connect("notify::volume", (device: AstalWp.Endpoint) => {
                device.disconnect(id);
                setOSD(device.volumeIcon, device.volume);
            });
        }
    } else if (command.startsWith("wpctl set-mute")) {
        const match = command.match(
            /^wpctl set-mute (@DEFAULT_AUDIO_SINK@|@DEFAULT_AUDIO_SOURCE@|[0-9]+) (1|0|toggle)$/
        );
        if (!match) {
            console.error("Couldn't parse wpctl set-mute command: " + command);
            return;
        }
        const [_full, deviceId, mode] = match;
        const device = getWpEndpoint(deviceId);
        let mute = device.mute;
        if (mode == "1") {
            mute = true;
        } else if (mode == "0") {
            mute = false;
        } else if (mode == "toggle") {
            mute = !mute;
        }

        device.set_mute(mute);
        if (mute == device.mute) {
            setOSD(device.volumeIcon, device.volume);
        } else {
            const id = device.connect("notify::mute", (device: AstalWp.Endpoint) => {
                device.disconnect(id);
                setOSD(device.volumeIcon, device.volume);
            });
        }
    } else {
        console.error("Unsupported wpctl command: " + command);
    }
}
