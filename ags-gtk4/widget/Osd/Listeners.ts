import { startBrightness } from "./Listener-brightness";
import { startVolume } from "./Listener-volume";

export function startOSDListeners() {
    startBrightness();
}
