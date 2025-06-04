import { Variable, interval } from "astal";
import Gio from "gi://Gio?version=2.0";
import GLib from "gi://GLib?version=2.0";
import Soup from "gi://Soup?version=3.0";
import { currentLocation } from "./location";

Gio._promisify(Soup.Session.prototype, "send_and_read_async", "send_and_read_finish");

interface WeatherUnits {
  temperature: string;
  apparent_temperature: string;
  wind_speed: string;
}

interface TimedWeatherInfo {
  temperature: number;
  apparent_temperature: number;
  weather_code: number;
  wind_speed: number;
  is_day: boolean;
  units: WeatherUnits;
}

interface WeatherData {
  current: TimedWeatherInfo;
  in_6h: TimedWeatherInfo & { timestamp: number };
  min_temperature: number;
  max_temperature: number;
  temperature_range_unit: string;
}

export const weatherData = Variable<WeatherData | null>(null);
let lastWeatherUpdate: number = GLib.get_real_time();
function updateWeatherData() {
  const location = currentLocation.get();
  if (!location) {
    weatherData.set(null);
    return;
  }
  console.log(`updating weather with ${location.latitude} ${location.longitude}`);

  const params = {
    latitude: location.latitude,
    longitude: location.longitude,
    current: ["temperature_2m", "apparent_temperature", "is_day", "weather_code", "wind_speed_10m"],
    hourly: ["temperature_2m", "apparent_temperature", "is_day", "weather_code", "wind_speed_10m"],
    wind_speed_unit: "ms",
    timezone: "auto",
    timeformat: "unixtime",
    forecast_days: 2,
  };

  const paramString = Object.entries(params)
    .map(([key, value]) => {
      let valueString: string;
      if (typeof value == "string") {
        valueString = value;
      } else if (typeof value == "number") {
        valueString = value.toString();
      } else if (Array.isArray(value)) {
        valueString = value.join(",");
      } else {
        throw new Error("Unhandled parameter value");
      }

      return `${key}=${valueString}`;
    })
    .join("&");

  const uri = GLib.uri_build(
    GLib.UriFlags.NONE,
    "https",
    null,
    "api.open-meteo.com",
    -1,
    "/v1/forecast",
    paramString,
    null
  );

  const session = new Soup.Session();
  const message = Soup.Message.new_from_uri("GET", uri);
  session
    .send_and_read_async(message, GLib.PRIORITY_DEFAULT, null)
    .then((data) => {
      const dataString = new TextDecoder().decode(data.toArray());
      const rawObject = JSON.parse(dataString);

      const hourlyTempsToday = (rawObject.hourly.temperature_2m as number[]).slice(0, 24);
      const currentUnixTime = GLib.get_real_time() / 1_000_000;
      // 6h30m to round better
      const timeInSixHours = currentUnixTime + 6.5 * 60 * 60;
      let closestTimeIndex: number = 0;
      let closestTimeDifference: number = Infinity;
      for (let i = 0; i < rawObject.hourly.time.length; i++) {
        const timeDiff = Math.abs(rawObject.hourly.time[i] - timeInSixHours);
        if (timeDiff < closestTimeDifference) {
          closestTimeDifference = timeDiff;
          closestTimeIndex = i;
        }
      }

      weatherData.set({
        current: {
          temperature: rawObject.current.temperature_2m,
          apparent_temperature: rawObject.current.apparent_temperature,
          weather_code: rawObject.current.weather_code,
          wind_speed: rawObject.current.wind_speed_10m,
          is_day: Boolean(rawObject.current.is_day),
          units: {
            temperature: rawObject.current_units.temperature_2m,
            apparent_temperature: rawObject.current_units.apparent_temperature,
            wind_speed: rawObject.current_units.wind_speed_10m,
          },
        },
        in_6h: {
          temperature: rawObject.hourly.temperature_2m[closestTimeIndex],
          apparent_temperature: rawObject.hourly.apparent_temperature[closestTimeIndex],
          weather_code: rawObject.hourly.weather_code[closestTimeIndex],
          wind_speed: rawObject.hourly.wind_speed_10m[closestTimeIndex],
          is_day: rawObject.hourly.is_day[closestTimeIndex],
          units: {
            temperature: rawObject.hourly_units.temperature_2m,
            apparent_temperature: rawObject.hourly_units.apparent_temperature,
            wind_speed: rawObject.hourly_units.wind_speed_10m,
          },
          timestamp: rawObject.hourly.time[closestTimeIndex],
        },
        min_temperature: Math.min(...hourlyTempsToday),
        max_temperature: Math.max(...hourlyTempsToday),
        temperature_range_unit: rawObject.hourly_units.temperature_2m,
      });
      console.log(weatherData.get());
      // update this only if successful so that it retries in 5 minutes
      lastWeatherUpdate = GLib.get_real_time();
    })
    .catch((reason) => console.log("Couldn't get weather info:", reason));
}

currentLocation.subscribe(() => updateWeatherData());

interval(300 * 1000, () => {
  if (GLib.get_real_time() - lastWeatherUpdate > 59.5 * 60 * 1_000_000) {
    updateWeatherData();
  }
});
