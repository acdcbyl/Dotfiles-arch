import { globalWeatherVar } from '../../../../../../service/dash-weather';
import { getNextEpoch } from '../helpers';
import { bind, Variable } from 'astal';

// 固定使用摄氏度作为温度单位，改为常量
const UNIT_TYPE = 'metric'; // 'metric' 使用摄氏度，'imperial' 使用华氏度

export const HourlyTemp = ({ hoursFromNow }: HourlyTempProps): JSX.Element => {
    const weatherBinding = Variable.derive([bind(globalWeatherVar)], (weather) => {
        if (!Object.keys(weather).length) {
            return '-';
        }

        const nextEpoch = getNextEpoch(weather, hoursFromNow);
        const weatherAtEpoch = weather.forecast.forecastday[0].hour.find((h) => h.time_epoch === nextEpoch);

        // if (UNIT_TYPE === 'imperial') {
        //     return `${weatherAtEpoch ? Math.ceil(weatherAtEpoch.temp_f) : '-'}° F`;
        // }
        return `${weatherAtEpoch ? Math.ceil(weatherAtEpoch.temp_c) : '-'}°C`;
    });

    return (
        <label
            className={'hourly-weather-temp'}
            label={weatherBinding()}
            onDestroy={() => {
                weatherBinding.drop();
            }}
        />
    );
};

interface HourlyTempProps {
    hoursFromNow: number;
}
