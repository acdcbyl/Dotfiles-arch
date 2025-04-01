import { getTemperature, globalWeatherVar } from '../../../../../service/dash-weather';
import { getRainChance, getWindConditions } from '../../../../../service/dash-weather';
import { Gtk } from 'astal/gtk3';
import { bind, Variable } from 'astal';
import { UnitType } from '../../../../../lib/types/weather'

const unit = Variable<UnitType>('metric');
export const TodayStats = (): JSX.Element => {

    const temperatureBinding = Variable.derive([bind(globalWeatherVar), bind(unit)], getWindConditions);
    return (
        <box
            className={'calendar-menu-weather today stats container'}
            halign={Gtk.Align.END}
            valign={Gtk.Align.CENTER}
            vertical
        >
            <box className={'weather wind'}>
                <label className={'weather wind icon txt-icon'} label={''} />
                <label className={'weather wind label'} label={temperatureBinding()} />
            </box>
            <box className={'weather precip'}>
                <label className={'weather precip icon txt-icon'} label={''} />
                <label className={'weather precip label'} label={bind(globalWeatherVar).as(getRainChance)} />
            </box>
        </box>
    );
};
