import { Variable } from "astal";

const interval = 1000;
let lastTotalDownBytes = 0;
let lastTotalUpBytes = 0;

const networkSpeed = Variable({
  download: 0,
  upload: 0,
}).poll(interval, ["cat", "/proc/net/dev"], (content, _) => {
  const lines = content.split("\n");

  // Caculate the sum of all interfaces' traffic line by line.
  let totalDownBytes = 0;
  let totalUpBytes = 0;

  for (let i = 0; i < lines.length; ++i) {
    const fields = lines[i].trim().split(/\W+/);
    if (fields.length <= 2) {
      continue;
    }

    // Skip virtual interfaces.
    const interfce = fields[0];
    const currentInterfaceDownBytes = Number.parseInt(fields[1]);
    const currentInterfaceUpBytes = Number.parseInt(fields[9]);
    if (
      interfce === "lo" ||
      // Created by python-based bandwidth manager "traffictoll".
      interfce.match(/^ifb[0-9]+/) ||
      // Created by lxd container manager.
      interfce.match(/^lxdbr[0-9]+/) ||
      interfce.match(/^virbr[0-9]+/) ||
      interfce.match(/^br[0-9]+/) ||
      interfce.match(/^vnet[0-9]+/) ||
      interfce.match(/^tun[0-9]+/) ||
      interfce.match(/^tap[0-9]+/) ||
      isNaN(currentInterfaceDownBytes) ||
      isNaN(currentInterfaceUpBytes)
    ) {
      continue;
    }

    totalDownBytes += currentInterfaceDownBytes;
    totalUpBytes += currentInterfaceUpBytes;
  }

  if (lastTotalDownBytes === 0) {
    lastTotalDownBytes = totalDownBytes;
  }
  if (lastTotalUpBytes === 0) {
    lastTotalUpBytes = totalUpBytes;
  }
  const downloadSpeed = (totalDownBytes - lastTotalDownBytes) / interval;
  const uploadSpeed = (totalUpBytes - lastTotalUpBytes) / interval;

  lastTotalDownBytes = totalDownBytes;
  lastTotalUpBytes = totalUpBytes;

  return {
    download: downloadSpeed,
    upload: uploadSpeed,
  };
});

export default networkSpeed;
