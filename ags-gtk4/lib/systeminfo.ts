import { Variable, interval } from "astal";
import Gio from "gi://Gio?version=2.0";
import GLib from "gi://GLib?version=2.0";

interface SystemUsage {
  cpu: number; // 0-100
  gpu: number; // 0-100
  ram: number;
}

export const systemUsage = Variable<SystemUsage>({
  cpu: 0,
  gpu: 0,
  ram: 0,
});

// CPU 使用率获取
let lastCpuTimes: { idle: number; total: number } | null = null;

function getCpuUsage(): number {
  try {
    const statFile = Gio.File.new_for_path("/proc/stat");
    const [success, contents] = statFile.load_contents(null);

    if (!success) return 0;

    const statData = new TextDecoder().decode(contents);
    const cpuLine = statData.split('\n')[0];
    const cpuValues = cpuLine.split(/\s+/).slice(1).map(Number);

    // CPU时间：user, nice, system, idle, iowait, irq, softirq, steal
    const idle = cpuValues[3] + cpuValues[4]; // idle + iowait
    const total = cpuValues.reduce((sum, val) => sum + val, 0);

    if (lastCpuTimes) {
      const idleDiff = idle - lastCpuTimes.idle;
      const totalDiff = total - lastCpuTimes.total;

      if (totalDiff > 0) {
        const usage = Math.round(((totalDiff - idleDiff) / totalDiff) * 100);
        lastCpuTimes = { idle, total };
        return Math.max(0, Math.min(100, usage));
      }
    }

    lastCpuTimes = { idle, total };
    return 0;
  } catch (error) {
    console.error("Error getting CPU usage:", error);
    return 0;
  }
}

// GPU 使用率获取 (支持 NVIDIA 和 AMD)
function getGpuUsage(): number {
  try {
    // 首先尝试 NVIDIA GPU
    const nvidiaResult = GLib.spawn_command_line_sync("nvidia-smi --query-gpu=utilization.gpu --format=csv,noheader,nounits");
    if (nvidiaResult[0] && nvidiaResult[1]) {
      const output = new TextDecoder().decode(nvidiaResult[1]).trim();
      const usage = parseInt(output);
      if (!isNaN(usage)) {
        return Math.max(0, Math.min(100, usage));
      }
    }
  } catch (error) {
    // NVIDIA 命令失败，尝试 AMD
  }

  try {
    // 尝试 AMD GPU (通过 radeontop 或者 /sys/class/drm)
    const drmFiles = [
      "/sys/class/drm/card0/device/gpu_busy_percent",
      "/sys/class/drm/card1/device/gpu_busy_percent"
    ];

    for (const filePath of drmFiles) {
      const file = Gio.File.new_for_path(filePath);
      if (file.query_exists(null)) {
        const [success, contents] = file.load_contents(null);
        if (success) {
          const usage = parseInt(new TextDecoder().decode(contents).trim());
          if (!isNaN(usage)) {
            return Math.max(0, Math.min(100, usage));
          }
        }
      }
    }
  } catch (error) {
    // AMD 方法也失败
  }

  try {
    // 尝试通用方法：通过 /sys/class/drm/card*/device/gpu_busy_percent
    const result = GLib.spawn_command_line_sync("cat /sys/class/drm/card*/device/gpu_busy_percent 2>/dev/null | head -1");
    if (result[0] && result[1]) {
      const output = new TextDecoder().decode(result[1]).trim();
      const usage = parseInt(output);
      if (!isNaN(usage)) {
        return Math.max(0, Math.min(100, usage));
      }
    }
  } catch (error) {
    console.error("Error getting GPU usage:", error);
  }

  return 0; // 如果所有方法都失败，返回 0
}

// RAM 使用率获取
function getRamUsage(): number {
  try {
    const meminfoFile = Gio.File.new_for_path("/proc/meminfo");
    const [success, contents] = meminfoFile.load_contents(null);

    if (!success) {
      return 0;
    }

    const meminfoData = new TextDecoder().decode(contents);
    const lines = meminfoData.split('\n');

    let memTotal = 0;
    let memFree = 0;
    let memBuffers = 0;
    let memCached = 0;
    let memSReclaimable = 0;

    for (const line of lines) {
      const [key, value] = line.split(':');
      if (!key || !value) continue;

      const valueKB = parseInt(value.trim().split(' ')[0]);

      switch (key) {
        case 'MemTotal':
          memTotal = valueKB;
          break;
        case 'MemFree':
          memFree = valueKB;
          break;
        case 'Buffers':
          memBuffers = valueKB;
          break;
        case 'Cached':
          memCached = valueKB;
          break;
        case 'SReclaimable':
          memSReclaimable = valueKB;
          break;
      }
    }

    // 计算实际使用的内存（排除缓存和缓冲区）
    const memUsed = memTotal - memFree - memBuffers - memCached - memSReclaimable;

    const totalGB = memTotal / (1024 * 1024); // KB to GB
    const usedGB = memUsed / (1024 * 1024);   // KB to GB
    const percentage = Math.round((memUsed / memTotal) * 100);

    return Math.round(usedGB * 100) / 100
    // total: Math.round(totalGB * 100) / 100,
    // percentage: Math.max(0, Math.min(100, percentage))

  } catch (error) {
    console.error("Error getting RAM usage:", error);
    return 0;
  }
}


// 导出方法
export { getCpuUsage, getGpuUsage, getRamUsage };
