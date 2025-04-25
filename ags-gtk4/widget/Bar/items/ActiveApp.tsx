import Hyprland from "gi://AstalHyprland";
import { Gtk, Gdk } from "astal/gtk4";
import { bind, Binding } from "astal";
import BarButton from "../BarButton";
// import icons, { substitutions } from "../../../lib/icons";
// import { lookUpIcon } from "../../../lib/utils";
import Pango from "gi://Pango?version=1.0";

// 帮助函数：查找图标
function lookUpIcon(iconName: string): string {
  const display = Gdk.Display.get_default();
  if (!display) {
    console.error("No display found");
    return "application-x-executable";
  }

  const iconTheme = Gtk.IconTheme.get_for_display(display);

  // 尝试多种可能的图标名称格式
  const possibleNames = [
    iconName.toLowerCase(),                    // 全小写
    iconName.toLowerCase().replace(/\s/g, '-'), // 替换空格为横线
    iconName.toLowerCase().replace(/\s/g, ''),  // 移除空格
  ];

  for (const name of possibleNames) {
    if (iconTheme.has_icon(name)) {
      return name;
    }

    // 尝试常见的图标命名方式
    const variants = [
      `com.${name}`,
      `org.${name}`,
      `${name}.desktop`,
      `application-x-${name}`,
    ];

    for (const variant of variants) {
      if (iconTheme.has_icon(variant)) {
        return variant;
      }
    }
  }

  // 如果找不到图标，返回一个默认图标
  return "application-x-executable";
}

// 图标组件
const AppIcon = ({
  iconName,
  size = 16
}: {
  iconName: Binding<string>,
  size?: number
}) => {
  return (
    <image
      iconName={iconName.as(name => lookUpIcon(name))}
      pixelSize={size}
    />
  );
};
export default () => {
  const hypr = Hyprland.get_default();
  const focused = bind(hypr, "focusedClient");

  return (
    <revealer
      transitionType={Gtk.RevealerTransitionType.CROSSFADE}
      transitionDuration={300}
      revealChild={focused.as(Boolean)}
    >
      <BarButton cssName="bar__active-app">
        <box spacing={8}>
          {focused.as(client => {
            if (!client) return null;

            // 提取 client 的绑定
            const clientClassBinding = bind(client, "class");
            const clientTitleBinding = bind(client, "title");

            return (
              <>
                {/* <icon */}
                {/*   icon={clientClassBinding.as(cls => */}
                {/*     substitutions.icons[cls] */}
                {/*     || (lookUpIcon(cls) ? cls : icons.fallback.executable) */}
                {/*   )} */}
                {/* /> */}
                <AppIcon
                  iconName={clientClassBinding}
                  size={16}
                />
                <label
                  label={clientTitleBinding.as(String)}
                  // truncate={true}
                  ellipsize={Pango.EllipsizeMode.END}
                  maxWidthChars={24}
                />
              </>
            );
          })}
        </box>
      </BarButton>
    </revealer>
  );
};
