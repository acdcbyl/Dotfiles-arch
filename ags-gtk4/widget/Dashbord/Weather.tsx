import { bind } from "astal";
import { Gtk } from "astal/gtk4";
import GLib from "gi://GLib?version=2.0";
import { weatherData } from "../../lib/weather";

const nbsp = "\u202f";
const endash = "\u2013";

function formatUnixTimestamp(timestamp: number) {
  return GLib.DateTime.new_from_unix_utc(timestamp).format("%R");
}

function createIcon(weatherCode: number, isDay: boolean, props: Partial<Gtk.Image.ConstructorProps>) {
  let iconName: string;
  const nightSuffix = isDay ? "" : "-night";
  // TODO: Try making fully custom icons here.
  // There's a lot of overlap over the codes here,
  // and coloring them would be a lot easier.
  switch (weatherCode) {
    case 0:
      iconName = "clear" + nightSuffix;
      break;
    case 1:
    case 2:
      iconName = "few-clouds" + nightSuffix;
      break;
    case 3:
      iconName = "overcast";
      break;
    case 45:
    case 48:
      iconName = "fog";
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      iconName = "showers";
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      iconName = "snow";
      break;
    case 95:
    case 96:
    case 99:
      iconName = "storm";
      break;
    default:
      throw new Error("Unhandled weather code " + weatherCode);
  }
  return (
    <image
      {...props}
      iconName={`weather-${iconName}-symbolic`}
      cssClasses={[...(props.cssClasses ?? []), iconName, isDay ? "day" : "night"]}
    />
  );
}

export function WeatherIconDebug() {
  const wrapper = new Gtk.FlowBox({ cssClasses: ["weather"] });
  for (const code of [0, 1, 3, 45, 51, 71, 95]) {
    wrapper.append(createIcon(code, true, { cssClasses: ["main-icon"], pixelSize: 32 }));
    wrapper.append(createIcon(code, false, { cssClasses: ["main-icon"], pixelSize: 32 }));
  }
  return wrapper;
}

export function WeatherPanel() {
  return (
    <box spacing={8} cssClasses={["weather"]}>
      {bind(weatherData).as((data) =>
        data ? (
          <>
            {createIcon(data.current.weather_code, data.current.is_day, {
              pixelSize: 30,
              cssClasses: ["main-icon"],
              vexpand: false,
              valign: Gtk.Align.CENTER,
            })}
            <box vertical={true}>
              <box spacing={8}>
                <label
                  label={`${data.current.temperature}${nbsp}${data.current.units.temperature}`}
                  cssClasses={["temperature-main"]}
                  valign={Gtk.Align.BASELINE}
                />
                <label
                  label={`${Math.floor(data.min_temperature)}${endash}${Math.ceil(
                    data.max_temperature
                  )}${nbsp}${data.temperature_range_unit}`}
                  cssClasses={["temperature-range"]}
                  valign={Gtk.Align.BASELINE}
                />
              </box>

              <label
                label={`feels like <b>${Math.round(data.current.apparent_temperature)}${nbsp}${data.current.units.apparent_temperature
                  }</b>`}
                useMarkup={true}
                halign={Gtk.Align.START}
              />

              {/* <box spacing={4}> */}
              {/*   <image iconName="weather-windy-symbolic" /> */}
              {/*   <label label={`${data.current.wind_speed}${nbsp}${data.current.units.wind_speed}`} /> */}
              {/* </box> */}

              <box spacing={8}>
                <label
                  label={`${formatUnixTimestamp(data.in_6h.timestamp)}:`}
                  cssClasses={["timestamp"]}
                />
                <box spacing={4}>
                  {createIcon(data.in_6h.weather_code, data.in_6h.is_day, {})}
                  <label
                    label={`${Math.round(data.in_6h.temperature)}${nbsp}${data.in_6h.units.temperature
                      } (${Math.round(data.in_6h.apparent_temperature)}${nbsp}${data.in_6h.units.apparent_temperature
                      })`}
                  />
                </box>
                <box spacing={4}>
                  <image iconName="weather-windy-symbolic" />
                  <label label={`${data.in_6h.wind_speed}${nbsp}${data.in_6h.units.wind_speed}`} />
                </box>
              </box>
            </box>
          </>
        ) : (
          <label label="Weather unavailable" halign={Gtk.Align.CENTER} />
        )
      )}
    </box>
  );
}
