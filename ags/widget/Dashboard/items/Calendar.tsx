import { Gtk, astalify, ConstructProps } from 'astal/gtk3';
import { GObject } from 'astal';

class Calendar extends astalify(Gtk.Calendar) {
  static {
    GObject.registerClass(this);
  }

  constructor(props: ConstructProps<Calendar, Gtk.Calendar.ConstructorProps>) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    super(props as any);
  }
}

export default Calendar;
