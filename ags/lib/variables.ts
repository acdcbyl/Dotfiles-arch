import { Variable } from "astal";

type UpowerProps = {
	model: string;
	iconName: string;
	batteryPercentage: number;
};

export const spacing = 8;

export const scrimWindowNames = Variable<Array<string>>([]);
export const transparentScrimWindowNames = Variable<Array<string>>([]);

export const uptime = Variable<string>("").poll(
	60_000,
	"upower -i /org/freedesktop/UPower/devices/battery_BAT0",
	(line) => {
		const regex = /time to empty:\s+(\d+)[,.](\d+)\s+hours/;
		const match = line.match(regex);
		if (match) {
			const hours = parseInt(match[1], 10); // First number is hours
			const minutesFraction = parseInt(match[2], 10); // Second number is fractional part of hours

			const minutes = Math.round((minutesFraction / 10) * 60);
			const hhmmFormat = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
			return `Time to empty: ${hhmmFormat}`;
		}
		return "";
	},
);

export const cpu = Variable<string>("").poll(
	5000,
	"top -b -n 1",
	(out) => {
		const cpuUsage = out.split('\n')
			.find(line => line.includes('Cpu(s)'))
			?.split(/\s+/)[1]
			.replace(',', '.');

		if (cpuUsage === '0.0')
			return 0 + "%"
		return cpuUsage + "%"
	},
);

export const ramGB = Variable<string>("").poll(
	5000,
	"free --giga -h",
	(out) => {
		const ramGbSplit = out.split('\n');

		if (!ramGbSplit)
			return "error";

		const lineIncldes = ramGbSplit.find(line => line.includes('Mem:'));

		if (!lineIncldes)
			return "error";

		return lineIncldes.split(/\s+/)
			.splice(2, 1) + "B";
	},
);

export const disk = Variable<string>("").poll(
	600_000,
	"df -h /",
	(out) => {
		const lines = out.split('\n');
		if (lines.length >= 2)
			return lines[1].split(/\s+/)[4];
		return "error";
	});

export const upower = Variable<Array<UpowerProps>>([]).poll(
	5000,
	"upower -d",
	(out) => {
		// Split the string into lines for easy processing
		const lines = out.split('\n');

		let devices = [];
		let currentDevice = { model: '', iconName: '', batteryPercentage: 0, };

		// Loop through each line and process the device data
		lines.forEach(line => {
			line = line.trim(); // Remove leading/trailing whitespace

			// Check for new device block
			if (line.startsWith('Device:')) {
				// If there's already a device stored, push it to the list
				if (Object.keys(currentDevice).length > 0) {
					devices.push(currentDevice);
				}
				// Start processing a new device
				currentDevice = { iconName: '', batteryPercentage: 0, model: '' };
			}

			// Check for device model
			if (line.startsWith('model:')) {
				currentDevice.model = line.split(':')[1].trim();
			}

			// Check for device type and assign iconName
			if (line.includes('keyboard_')) {
				currentDevice.iconName = 'input-keyboard-symbolic';
			} else if (line.includes('mouse_')) {
				currentDevice.iconName = 'input-mouse-symbolic';
			} else if (line.includes('headset_')) {
				currentDevice.iconName = 'audio-headset-symbolic';
			}

			// Check for battery percentage
			if (line.startsWith('percentage:')) {
				const batteryPercentage = parseInt(line.split(':')[1].trim(), 10);
				if (batteryPercentage > 0) {
					currentDevice.batteryPercentage = batteryPercentage;
				}
			}
		});

		// Skip unwanted devices
		if (currentDevice.model != '') {
			devices.push(currentDevice);
		}

		return devices;
	});

export type Colors = {
	background: string;
	error: string;
	error_container: string;
	inverse_on_surface: string;
	inverse_primary: string;
	inverse_surface: string;
	on_background: string;
	on_error: string;
	on_error_container: string;
	on_primary: string;
	on_primary_container: string;
	on_primary_fixed: string;
	on_primary_fixed_variant: string;
	on_secondary: string;
	on_secondary_container: string;
	on_secondary_fixed: string;
	on_secondary_fixed_variant: string;
	on_surface: string;
	on_surface_variant: string;
	on_tertiary: string;
	on_tertiary_container: string;
	on_tertiary_fixed: string;
	on_tertiary_fixed_variant: string;
	outline: string;
	outline_variant: string;
	primary: string;
	primary_container: string;
	primary_fixed: string;
	primary_fixed_dim: string;
	scrim: string;
	secondary: string;
	secondary_container: string;
	secondary_fixed: string;
	secondary_fixed_dim: string;
	shadow: string;
	surface: string;
	surface_bright: string;
	surface_container: string;
	surface_container_high: string;
	surface_container_highest: string;
	surface_container_low: string;
	surface_container_lowest: string;
	surface_dim: string;
	surface_variant: string;
	tertiary: string;
	tertiary_container: string;
	tertiary_fixed: string;
	tertiary_fixed_dim: string;
};
