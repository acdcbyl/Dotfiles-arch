import { App } from "astal/gtk4"
import { GLib } from "astal";
import style from "./style/main.scss";
import windows from "./windows";
import { monitorColorsChange } from "./lib/utils"
import { handleMessage } from "./lib/message";
const DATA = GLib.build_filenamev([GLib.get_home_dir(), ".config", "ags"]);
App.start({
    icons: `${DATA}/icons`,
    css: style,
    main() {
        windows.map((win) => App.get_monitors().map(win));
        monitorColorsChange();
    },
    requestHandler(request, res) {
        handleMessage(request, res);
    },
})
