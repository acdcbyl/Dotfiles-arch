import { exec, execAsync, monitorFile, readFileAsync, Variable } from "astal";

const get = (args: string) => Number(exec(`brightnessctl ${args}`));

const screen = await execAsync(
	'bash -c "ls -w1 /sys/class/backlight | head -1"',
);

type BrightnessServiceType = {
	screen: number;
};

class BrightnessService {
	#screen = Variable(get("get") / get("max"));
	#screenMax = get("max");

	get(): BrightnessServiceType {
		return {
			screen: this.#screen.get(),
		};
	}

	get screen(): number {
		return this.#screen.get();
	}

	get screenMax(): number {
		return this.#screenMax;
	}

	set screen(percent: number) {
		if (percent < 0) percent = 0;

		if (percent > 1) percent = 1;

		execAsync(`brightnessctl set ${Math.floor(percent * 100)}% -q`).then(
			() => {
				this.#screen.set(percent);
			},
		);
	}

	subscribe(callback: (v: BrightnessServiceType) => void) {
		const unsubScreen = this.#screen.subscribe((value) => {
			callback({ screen: this.#screen.get() });
		});

		return () => {
			unsubScreen();
		};
	}

	constructor() {
		const screenPath = `/sys/class/backlight/${screen}/brightness`;

		monitorFile(screenPath, async (f) => {
			const v = await readFileAsync(f);
			this.#screen.set(Number(v) / this.#screenMax);
		});
	}
}

let service: BrightnessService | null = null;

if (screen) {
	service = new BrightnessService();
}

export default service;
