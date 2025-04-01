import { bind, GLib, Variable } from 'astal';
import { Gtk } from 'astal/gtk3';
import { systemTime } from '../../../../service/Time';

// 创建一个每秒更新的 period 变量 (AM/PM)
const period = Variable('').poll(1000, (): string => GLib.DateTime.new_now_local().format('%p') || '');

export const StandardTime = (): JSX.Element => {
  // 固定显示时间和时段，包含秒数
  return (
    <box>
      <box>
        {/* 时间部分，固定为12小时制并显示秒数 */}
        <box halign={Gtk.Align.CENTER}>
          <label
            className={'clock-content-time'}
            label={bind(systemTime).as((time) => {
              return time?.format('%H:%M:%S') || '';
            })}
          />
        </box>

        {/* 显示 AM/PM */}
        <box halign={Gtk.Align.CENTER}>
          <label className={'clock-content-period'} valign={Gtk.Align.END} label={bind(period)} />
        </box>
      </box>
    </box>
  );
};
