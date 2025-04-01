import { globalWeatherVar } from '../../../../../service/dash-weather';
import { getTemperature, getWeatherIcon } from '../../../../../service/dash-weather';
import { Gtk } from 'astal/gtk3';
import { bind } from 'astal';

const WeatherStatus = (): JSX.Element => {
    return (
        <box halign={Gtk.Align.CENTER}>
            <label
                className={bind(globalWeatherVar).as(
                    (weather) =>
                        `calendar-menu-weather today condition label ${getWeatherIcon(Math.ceil(weather.current.temp_f)).color}`,
                )}
                label={bind(globalWeatherVar).as((weather) => weather.current.condition.text)}
                truncate
                tooltipText={bind(globalWeatherVar).as((weather) => weather.current.condition.text)}
            />
        </box>
    );
};

const Temperature = (): JSX.Element => {
    const TemperatureLabel = (): JSX.Element => {
        return (
            <label
                className={'calendar-menu-weather today temp label'}
                label={bind(globalWeatherVar).as(weather => getTemperature(weather, 'metric'))}
            />
        );
    };

    const ThermometerIcon = (): JSX.Element => {
        return (
            <label
                className={bind(globalWeatherVar).as(
                    (weather) =>
                        `calendar-menu-weather today temp label icon txt-icon ${getWeatherIcon(Math.ceil(weather.current.temp_f)).color}`,
                )}
                label={bind(globalWeatherVar).as((weather) => getWeatherIcon(Math.ceil(weather.current.temp_f)).icon)}
            />
        );
    };

    return (
        <box
            className={'calendar-menu-weather today temp container'}
            valign={Gtk.Align.CENTER}
            vertical={false}
            hexpand
        >
            <box halign={Gtk.Align.CENTER} hexpand>
                <TemperatureLabel />
                <ThermometerIcon />
            </box>
        </box>
    );
};

export const TodayTemperature = (): JSX.Element => {
    return (
        <box halign={Gtk.Align.CENTER} valign={Gtk.Align.CENTER} vertical>
            <Temperature />
            <WeatherStatus />
        </box>
    );
};
