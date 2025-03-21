import icons from "../../lib/icons";
import { controlCenterPage } from "./index";
import { App, Gtk, Gdk, Widget } from "astal/gtk3";
import { bind, execAsync, timeout, Variable, GLib, Binding } from "astal";

type PageProps = {
	label: string;
	child?: JSX.Element;
	scanning?: Binding<boolean>;
	refresh?: () => void;
};

export default ({ label, child, scanning, refresh = undefined }: PageProps) => {
	return (
		<box
			name={label.toLowerCase()}
			className={`control-center__page ${label.toLowerCase()}`}
			vertical={true}
		>
			<centerbox className="control-center__page_header" spacing={12}>
				<button
					hexpand={false}
					halign={Gtk.Align.START}
					className="control-center__page_header_button"
					onClicked={() => controlCenterPage.set("main")}
				>
					<icon icon={icons.ui.arrow.left} />
				</button>
				<label
					className="control-center__page_header_title"
					halign={Gtk.Align.CENTER}
					hexpand={true}
					label={label}
				/>
				{refresh ? (
					<button
						halign={Gtk.Align.END}
						hexpand={false}
						className="control-center__page_header_button"
						onClicked={refresh}
					>
						<icon hexpand={false} icon={icons.ui.refresh} />
					</button>
				) : (
					<box />
				)}
			</centerbox>
			<scrollable vexpand={true} className="control-center__page_content">
				{child}
			</scrollable>
		</box>
	);
};
