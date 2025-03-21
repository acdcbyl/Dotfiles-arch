import AstalWp from "gi://AstalWp?version=0.1";
import BarItem from "../BarItem";
import { bind } from "astal";

export default () => {
	const wp = AstalWp.get_default()!;

	return (
		<BarItem>
			{bind(wp.video, "streams").as((stream) => (
				<label label={"REC"} />
			))}
		</BarItem>
	);
};
