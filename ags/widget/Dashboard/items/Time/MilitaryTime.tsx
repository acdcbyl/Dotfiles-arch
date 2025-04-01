import { bind, Variable } from 'astal';
import { Gtk } from 'astal/gtk3';
import { systemTime } from '../../../../service/Time';

export const MilitaryTime = (): JSX.Element => {
  // 直接使用 systemTime 来显示时间，固定格式为 24 小时制并显示秒数
  return (
    <box>
      <box halign={Gtk.Align.CENTER}>
        <label
          className={'clock-content-time'}
          label={bind(systemTime).as((time) => {
            return time?.format('%H:%M:%S') || '';
          })}
        />
      </box>
    </box>
  );
};
