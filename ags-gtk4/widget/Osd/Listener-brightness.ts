import { monitorFile, readFileAsync } from "astal/file";
import GLib from "gi://GLib?version=2.0";
import { setOSD } from "./Osd";

const BACKLIGHT_BASE_DIR = "/sys/class/backlight";

// TODO: Also do the keyboard.
// This might a tad trickier because there are many LEDs available.

export function startBrightness() {
    const dir = GLib.Dir.open(BACKLIGHT_BASE_DIR, 0);
    const backlightDirName = dir.read_name();
    if (!backlightDirName) {
        console.log("no backlight, skipping");
        return;
    }
    const backlightCurrentPath = BACKLIGHT_BASE_DIR + "/" + backlightDirName + "/" + "brightness";
    const backlightMaxPath = BACKLIGHT_BASE_DIR + "/" + backlightDirName + "/" + "max_brightness";
    monitorFile(backlightCurrentPath, async (file) => {
        const [currentString, maxString] = await Promise.all([
            readFileAsync(backlightCurrentPath),
            readFileAsync(backlightMaxPath),
        ]);
        const value = parseInt(currentString) / parseInt(maxString);
        setOSD("display-brightness-symbolic", value);
    });
}
