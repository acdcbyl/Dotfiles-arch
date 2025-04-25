import { Astal, Gtk } from "astal/gtk4";
import type { GLib } from "gi://GLib?version=2.0";

function OnScreenDisplay({ icon, value }: { icon: string; value: number | string }) {
    return (
        <box vertical={true} cssClasses={["osd", "osd-box"]} spacing={8}>
            <image iconName={icon} cssClasses={["osd-icon"]} pixelSize={128} />
            {typeof value == "number" ? (
                <>
                    <levelbar
                        value={Math.max(0, Math.min(value, 1))}
                        cssClasses={value > 1 ? ["osd-bar", "overfilled"] : ["osd-bar"]}
                        setup={(self) => {
                            self.remove_offset_value(Gtk.LEVEL_BAR_OFFSET_LOW);
                            self.remove_offset_value(Gtk.LEVEL_BAR_OFFSET_HIGH);
                            self.remove_offset_value(Gtk.LEVEL_BAR_OFFSET_FULL);
                        }}
                    />
                    <label label={`${Math.round(value * 100)}%`} />
                </>
            ) : (
                <label label={value} />
            )}
        </box>
    ) as Gtk.Window;
}

let timeoutSource: GLib.Source | null = null;
let osdWindow: Gtk.Window | null = null;
export function setOSD(icon: string, value: number | string) {
    if (!osdWindow) {
        osdWindow = new Astal.Window({ cssClasses: ["osd-window"] });
    }

    osdWindow.set_child(OnScreenDisplay({ icon, value }));
    osdWindow.present();

    if (timeoutSource) {
        clearTimeout(timeoutSource);
    }
    timeoutSource = setTimeout(() => {
        timeoutSource = null;
        osdWindow?.hide();
    }, 3000);
}
