import { App } from "astal/gtk4"
import style from "./style/main.scss";
import windows from "./windows";
import { monitorColorsChange } from "./lib/utils"

App.start({
    css: style,
    main() {
        windows.map((win) => App.get_monitors().map(win));
        monitorColorsChange();
    },
})
