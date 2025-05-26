import { GLib, timeout } from "astal";
import PopupWindow from "../../common/PopupWindow";
import GdkPixbuf from "gi://GdkPixbuf";
import { App, Astal, Gtk, hook } from "astal/gtk4";
import { Gio } from "astal";
import AstalHyprland from "gi://AstalHyprland?version=0.1";
import options from "../../option";
import { bash, ensureDirectory, sh } from "../../lib/utils";
// import { sendBatch } from "../../utils/hyprland";

const hyprland = AstalHyprland.get_default();

export const sendBatch = (batch: string[]) => {
  const cmd = batch
    .filter((x) => !!x)
    .map((x) => `keyword ${x}`)
    .join("; ");

  hyprland.message(`[[BATCH]]/${cmd}`);
};
const { wallpaper } = options;
const { mode } = options.theme;
const cachePath = `${GLib.get_user_cache_dir()}/aiser-astal/wallpapers`;
const imageFormats = [".jpeg", ".jpg", ".webp", ".png"];

function getWallpaperList(path: string) {
  const dir = Gio.file_new_for_path(path);
  const fileEnum = dir.enumerate_children(
    "standard::name",
    Gio.FileQueryInfoFlags.NONE,
    null,
  );

  const files: string[] = [];
  let i = fileEnum.next_file(null);
  while (i) {
    let fileName = i.get_name();
    if (imageFormats.some((fmt) => fileName.endsWith(fmt))) {
      files.push(fileName);
    }
    i = fileEnum.next_file(null);
  }
  return files;
}

function cacheImage(
  inputPath: string,
  cachePath: string,
  newWidth: number,
  customName?: string,
  fastest?: boolean,
) {
  const baseName = GLib.path_get_basename(inputPath);
  const extension = baseName.split(".").pop()!.toLowerCase();
  const outputFileName = customName ? `${customName}.${extension}` : baseName;
  const outputPath = `${cachePath}/${outputFileName}`;

  try {
    let pixbuf = GdkPixbuf.Pixbuf.new_from_file(inputPath);

    const aspectRatio = pixbuf.get_width() / pixbuf.get_height();
    const scaledHeight = Math.round(newWidth / aspectRatio);

    const scaledPixbuf = pixbuf.scale_simple(
      newWidth,
      scaledHeight,
      fastest ? GdkPixbuf.InterpType.NEAREST : GdkPixbuf.InterpType.BILINEAR,
    );

    const outputFormat = extension === "png" ? "png" : "jpeg";
    scaledPixbuf?.savev(outputPath, outputFormat, [], []);

    return outputPath;
  } catch {
    const black_pixbuf = GdkPixbuf.Pixbuf.new(
      GdkPixbuf.Colorspace.RGB,
      true,
      8,
      newWidth,
      (newWidth * 9) / 16,
    );
    black_pixbuf.fill(0x0);
    black_pixbuf.savev(outputPath, "jpeg", [], []);
    return outputPath;
  }
}

function wallpaperPicker() {
  ensureDirectory(cachePath);

  return (
    <PopupWindow
      name={"wallpaperpicker"}
      // layer={Astal.Layer.BOTTOM}
      visible
      marginTop={25}
      marginLeft={10}
      marginRight={10}
      setup={(self) => {
        sendBatch([
          `layerrule animation slide ${options.bar.position.get()}, ${self.namespace}`,
          `layerrule blur, ${self.namespace}`,
          `layerrule ignorealpha 0.3, ${self.namespace}`,
        ]);

        hook(self, App, "window-toggled", (_, win) => {
          if (win.name == "wallpaperpicker" && !win.visible) {
            self.set_child(null);
            self.destroy();
          }
        });
      }}
      layout={options.bar.position().get()}
    >
      <box
        vertical
        vexpand={false}
        cssClasses={["wallpaperpicker-container"]}
        setup={(self) => {
          hook(self, App, "window-toggled", (_, win) => {
            if (win.name == "wallpaperpicker" && !win.visible) {
              self.set_children([]);
            }
          });
        }}
      >
        <box
          spacing={6}
          setup={(self) => {
            hook(self, App, "window-toggled", (_, win) => {
              if (win.name == "wallpaperpicker" && !win.visible) {
                self.set_children([]);
              }
            });
          }}
        >
          <label
            useMarkup={true}
            label={"<b> Wallpaper</b>"}
            hexpand
            xalign={0}
          />
          {/* <image */}
          {/*   iconName={"preferences-desktop-wallpaper-symbolic"} */}
          {/*   hexpand */}
          {/*   halign={Gtk.Align.START} */}
          {/* /> */}
          <label cssClasses={["directory"]} label={wallpaper.folder()} />
          <button
            tooltipText={"Clear cache"}
            onClicked={() => {
              if (GLib.file_test(cachePath, GLib.FileTest.IS_DIR)) {
                bash(`rm -r ${cachePath}`);
              }
            }}
            iconName="user-trash-full-symbolic"
          />
          <button
            tooltipText={"Change folder"}
            onClicked={() => {
              App.get_window("wallpaperpicker")?.hide();
              const folderChooser = new Gtk.FileDialog({
                title: "Choose Folder",
                initialFolder: Gio.file_new_for_path(wallpaper.folder.get()),
              });

              folderChooser.select_folder(null, null, (_, res) => {
                try {
                  const result = folderChooser.select_folder_finish(res);
                  if (result != null && result.get_path() != null) {
                    wallpaper.folder.set(result.get_path()!);
                    wallpaperPicker();
                  }
                } catch (e) {
                  if (`${e}`.toLowerCase().includes("dismissed")) {
                    wallpaperPicker();
                  } else {
                    console.error(`${e}`);
                  }
                }
              });
            }}
            iconName={"folder-symbolic"}
          />
        </box>
        <Gtk.Separator />
        <Gtk.ScrolledWindow>
          <box
            spacing={6}
            vexpand
            setup={(self) => {
              function populateBox(box: Astal.Box, path: string) {
                timeout(100, () => {
                  const wallpaperList = getWallpaperList(path);
                  const mode_now = mode.get();
                  const wallpapersToCache = wallpaperList.filter(
                    (image) =>
                      !GLib.file_test(
                        `${cachePath}/${image}`,
                        GLib.FileTest.EXISTS,
                      ),
                  );

                  wallpapersToCache.forEach((image) => {
                    cacheImage(`${path}/${image}`, cachePath, 200);
                  });

                  box.set_children(
                    wallpaperList.map((w) => (
                      <button
                        tooltipText={w}
                        onClicked={() => {
                          sh([
                            "sh",
                            `${GLib.get_user_config_dir()}/ags/scripts/changecolor.sh`,
                            `${path}/${w}`,
                            `${mode_now}`
                          ]).then(() => {
                            const current = cacheImage(
                              `${path}/${w}`,
                              cachePath,
                              450,
                              `${w.split(".").shift()}_current`,
                            );
                            // GLib.remove(wallpaper.current.get());
                            wallpaper.current.set(current);
                          });
                        }}
                      >
                        <Gtk.Picture
                          cssClasses={["image"]}
                          overflow={Gtk.Overflow.HIDDEN}
                          contentFit={Gtk.ContentFit.COVER}
                          widthRequest={200}
                          file={Gio.file_new_for_path(`${cachePath}/${w}`)}
                        />
                      </button>
                    )),
                  );
                });
              }

              populateBox(self, wallpaper.folder.get());
              hook(self, App, "window-toggled", (_, win) => {
                if (win.name == "wallpaperpicker" && !win.visible) {
                  self.set_children([]);
                }
              });
            }}
          >
            <label
              label={"Caching wallpapers..."}
              hexpand
              halign={Gtk.Align.CENTER}
            />
            ,
          </box>
        </Gtk.ScrolledWindow>
      </box>
    </PopupWindow>
  );
}

export function toggleWallpaperPicker() {
  const windowExist = App.get_windows().some(
    ({ name }) => name == "wallpaperpicker",
  );
  if (!windowExist) {
    wallpaperPicker();
  } else {
    const window = App.get_window("wallpaperpicker");
    window!.hide();
  }
}
