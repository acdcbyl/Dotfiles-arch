import { bind } from "astal";
import { App, Gtk, Gdk } from "astal/gtk3";
import Hyprland from "gi://AstalHyprland";
import BarButton from "../BarButton";
import { range } from "../../../lib/utils";
import BarItem from "../BarItem";

export default () => {
	const hypr = Hyprland.get_default();
	const ws: number = 10;

	const focusWorkspace = (workspaceId: number) =>
		hypr.dispatch("workspace", workspaceId.toString());

	// 提取 focusedWorkspace 的绑定
	const focusedWorkspaceBinding = bind(hypr, "focusedWorkspace");

	return (
		<BarItem>
			<box spacing={8}>
				{range(ws).map((i) => {
					return (
						<button
							valign={Gtk.Align.CENTER}
							className={focusedWorkspaceBinding.as(
								(fw) => {
									return i === fw.id
										? "bar__workspaces-indicator active"
										: "bar__workspaces-indicator";
								},
							)}
							onClicked={() => focusWorkspace(i)}
						/>
					);
				})}
			</box>
		</BarItem>
	);
};
