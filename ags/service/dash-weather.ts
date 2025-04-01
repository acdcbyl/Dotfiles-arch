import { UnitType, Weather, WeatherIconTitle, WeatherIcon } from '../lib/types/weather.js';
import { DEFAULT_WEATHER } from '../lib/types/default/weather.js';
import { weatherIcons } from '../lib/weather.js';
import { AstalIO, execAsync, interval, Variable } from 'astal';

const WEATHER_API_KEY = '91b2ef5fcb9b4ef9b3770235252402';
const WEATHER_LOCATION = 'Chifeng';
const UPDATE_INTERVAL = 900000; // 15分钟更新一次

export const globalWeatherVar = Variable<Weather>(DEFAULT_WEATHER);

let weatherIntervalInstance: null | AstalIO.Time = null;

const weatherIntervalFn = (): void => {
  if (weatherIntervalInstance !== null) {
    weatherIntervalInstance.cancel();
  }

  weatherIntervalInstance = interval(UPDATE_INTERVAL, () => {
    execAsync(
      `curl "https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${WEATHER_LOCATION}&days=1&aqi=no&alerts=no"`,
    )
      .then((res) => {
        try {
          if (typeof res !== 'string') {
            return globalWeatherVar.set(DEFAULT_WEATHER);
          }

          const parsedWeather = JSON.parse(res);

          if (Object.keys(parsedWeather).includes('error')) {
            return globalWeatherVar.set(DEFAULT_WEATHER);
          }

          return globalWeatherVar.set(parsedWeather);
        } catch (error) {
          globalWeatherVar.set(DEFAULT_WEATHER);
          console.warn(`Failed to parse weather data: ${error}`);
        }
      })
      .catch((err) => {
        console.error(`Failed to fetch weather: ${err}`);
        globalWeatherVar.set(DEFAULT_WEATHER);
      });
  });
};

// 启动天气更新
weatherIntervalFn();

export const getTemperature = (weatherData: Weather, unitType: UnitType): string => {
  if (unitType === 'imperial') {
    return `${Math.ceil(weatherData.current.temp_f)}°F`;
  } else {
    return `${Math.ceil(weatherData.current.temp_c)}°C`;
  }
};

export const getWeatherIcon = (fahrenheit: number): Record<string, string> => {
  const icons = {
    100: '',
    75: '',
    50: '',
    25: '',
    0: '',
  } as const;
  const colors = {
    100: 'weather-color red',
    75: 'weather-color orange',
    50: 'weather-color lavender',
    25: 'weather-color blue',
    0: 'weather-color sky',
  } as const;

  type IconKeys = keyof typeof icons;

  const threshold: IconKeys =
    fahrenheit < 0 ? 0 : ([100, 75, 50, 25, 0] as IconKeys[]).find((threshold) => threshold <= fahrenheit) || 0;

  const icon = icons[threshold || 50];
  const color = colors[threshold || 50];

  return {
    icon,
    color,
  };
};

export const getWindConditions = (weatherData: Weather, unitType: UnitType): string => {
  if (unitType === 'imperial') {
    return `${Math.floor(weatherData.current.wind_mph)} mph`;
  }
  return `${Math.floor(weatherData.current.wind_kph)} kph`;
};

export const getRainChance = (weatherData: Weather): string =>
  `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`;

export const isValidWeatherIconTitle = (title: string): title is WeatherIconTitle => {
  return title in weatherIcons;
};

export const getWeatherStatusTextIcon = (weatherData: Weather): WeatherIcon => {
  let iconQuery = weatherData.current.condition.text.trim().toLowerCase().replaceAll(' ', '_');

  if (!weatherData.current.is_day && iconQuery === 'partly_cloudy') {
    iconQuery = 'partly_cloudy_night';
  }

  if (isValidWeatherIconTitle(iconQuery)) {
    return weatherIcons[iconQuery];
  } else {
    console.warn(`Unknown weather icon title: ${iconQuery}`);
    return weatherIcons['warning'];
  }
};

export const convertCelsiusToFahrenheit = (celsiusValue: number): number => {
  return (celsiusValue * 9) / 5 + 32;
};

globalThis['globalWeatherVar'] = globalWeatherVar;
