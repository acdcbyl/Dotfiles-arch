import { Gtk } from "astal/gtk4";
import { getRamUsage, getCpuUsage, getGpuUsage } from "../../lib/systeminfo";
import { bind, Variable, interval } from "astal";

export function Systeminfo() {
    const ramUsage = Variable(0);
    const cpuUsage = Variable(0);
    const gpuUsage = Variable(0);

    // 保存 interval 的 ID 用于清理
    let intervalId;

    // 初始化数据
    function updateUsage() {
        try {
            const cpu = getCpuUsage();
            const gpu = getGpuUsage();
            const ram = getRamUsage();
            cpuUsage.set(cpu);
            gpuUsage.set(gpu);
            ramUsage.set(ram);
        } catch (error) {
            console.error("Error updating usage:", error);
        }
    }

    // 立即更新一次
    updateUsage();

    // 每2秒更新一次，保存返回的 interval ID
    intervalId = interval(2000, updateUsage);

    return (
        <box
            setup={(self) => self.connect('destroy', () => {
                // 清理计时器
                if (intervalId) {
                    clearInterval(intervalId);
                    intervalId = null;
                }
            })}
            orientation={Gtk.Orientation.VERTICAL}
            cssClasses={["systeminfo"]}
            spacing={10}
            marginTop={10}
            marginBottom={10}
        >
            {/* CPU 使用率 */}
            <box orientation={Gtk.Orientation.VERTICAL} spacing={5}>
                <box spacing={8}>
                    <image iconName={"processor-symbolic"} />
                    <box hexpand />
                    <label
                        label={bind(cpuUsage).as(v => `CPU: ${v}%`)}
                        halign={Gtk.Align.START}
                        cssClasses={["labelSmallBold"]}
                    />
                </box>
                <levelbar
                    value={bind(cpuUsage).as(v => v / 100)}
                    minValue={0}
                    maxValue={1}
                    widthRequest={280}
                    heightRequest={20}
                />
            </box>

            {/* GPU 使用率 */}
            <box orientation={Gtk.Orientation.VERTICAL} spacing={5}>
                <box spacing={8}>
                    <image iconName={"nvidia-card-symbolic"} />
                    <box hexpand />
                    <label
                        label={bind(gpuUsage).as(v => `GPU: ${v}%`)}
                        halign={Gtk.Align.START}
                        cssClasses={["labelSmallBold"]}
                    />
                </box>
                <levelbar
                    value={bind(gpuUsage).as(v => v / 100)}
                    minValue={0}
                    maxValue={1}
                    widthRequest={280}
                    heightRequest={20}
                />
            </box>

            {/* RAM 使用率 */}
            <box orientation={Gtk.Orientation.VERTICAL} spacing={5}>
                <box spacing={8}>
                    <image iconName={"nvidia-ram-symbolic"} />
                    <box hexpand />
                    <label
                        label={bind(ramUsage).as(v => `RAM: ${v}%`)}
                        halign={Gtk.Align.START}
                        cssClasses={["labelSmallBold"]}
                    />
                </box>
                <levelbar
                    value={bind(ramUsage).as(v => v / 100)}
                    minValue={0}
                    maxValue={1}
                    widthRequest={280}
                    heightRequest={20}
                />
            </box>
        </box>
    );
}
