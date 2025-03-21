import { bind } from "astal";
import { App, Gtk, Gdk } from "astal/gtk3";
import { spacing } from "../../../lib/variables";
import { weather } from "../../../service/Weather";
import { BarButtonStyle } from "../BarButton";
import BarItem, { BarItemStyle } from "../BarItem";

export default () => {
	const wthr = bind(weather);

	const weatherData = {
		icon: "",
		temp: "",
	};

	const weatherIcon = wthr.as((w) => {
		if (w) {
			weatherData.icon = WEATHER_SYMBOL[w.current.condition.text];
		}
		return weatherData.icon;
	});

	const weatherTemp = wthr.as((w) => {
		if (w) {
			weatherData.temp = `${Math.round(w.current.temp_c)}°`;
		}
		return weatherData.temp;
	});

	return (
		<revealer
			transitionType={Gtk.RevealerTransitionType.CROSSFADE}
			transitionDuration={300}
			revealChild={wthr.as(Boolean)}
		>
			<BarItem>
				<box spacing={spacing}>
					<label label={weatherIcon} />
					<label label={weatherTemp} />
				</box>
			</BarItem>
		</revealer>
	);
};

const WEATHER_SYMBOL: {
	[key: string]: string;
} = {
	default: "✨",
	Sunny: "🌞",
	Clear: "🌙",
	"Partly cloudy": "⛅",
	Cloudy: "☁️",
	Overcast: "🌥",
	Mist: "🌫",
	"Patchy rain possible": "🌦",
	"Patchy rain nearby": "🌦",
	"Patchy snow possible": "🌨",
	"Patchy sleet possible": "🌧",
	"Patchy freezing drizzle possible": "🌧❄️",
	"Thundery outbreaks possible": "🌩",
	"Blowing snow": "❄️💨",
	Blizzard: "🌨💨",
	Fog: "🌫",
	"Freezing fog": "🌫❄️",
	"Patchy light drizzle": "🌦",
	"Light drizzle": "🌦",
	"Freezing drizzle": "🌧❄️",
	"Heavy freezing drizzle": "🌧❄️",
	"Patchy light rain": "🌦",
	"Light rain": "🌧",
	"Moderate rain at times": "🌧",
	"Moderate rain": "🌧",
	"Heavy rain at times": "🌧🌩",
	"Heavy rain": "🌧🌩",
	"Light freezing rain": "🌧❄️",
	"Moderate or heavy freezing rain": "🌧❄️",
	"Light sleet": "🌨",
	"Moderate or heavy sleet": "🌨",
	"Patchy light snow": "❄️",
	"Light snow": "❄️",
	"Patchy moderate snow": "❄️",
	"Moderate snow": "❄️",
	"Patchy heavy snow": "❄️🌨",
	"Heavy snow": "❄️🌨",
	"Ice pellets": "🧊",
	"Light rain shower": "🌦",
	"Moderate or heavy rain shower": "🌧",
	"Torrential rain shower": "🌧🌩",
	"Light sleet showers": "🌨",
	"Moderate or heavy sleet showers": "🌨",
	"Light snow showers": "🌨",
	"Moderate or heavy snow showers": "❄️🌨",
	"Light showers of ice pellets": "🧊",
	"Moderate or heavy showers of ice pellets": "🧊",
	"Patchy light rain with thunder": "⛈",
	"Moderate or heavy rain with thunder": "⛈",
	"Patchy light snow with thunder": "🌩❄️",
	"Moderate or heavy snow with thunder": "🌩❄️",
};
