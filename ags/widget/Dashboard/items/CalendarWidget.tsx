import { Gtk } from 'astal/gtk3';
import Calendar from './Calendar';

export const CalendarWidget = (): JSX.Element => {
  return (
    <box className={'calendar-menu-item-container calendar'} halign={Gtk.Align.FILL} valign={Gtk.Align.FILL} expand>
      <box className={'calendar-container-box'}>
        <Calendar
          className={'calendar-menu-widget'}
          halign={Gtk.Align.FILL}
          valign={Gtk.Align.CENTER}
          showDetails={true}
          expand
          showDayNames
          showHeading
        />
      </box>
    </box>
  );
};
