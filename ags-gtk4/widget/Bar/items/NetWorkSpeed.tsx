import networkSpeed from "../../../lib/networkspeed";
import PanelButton from "../PanelButton";

export default function NetworkSpeedPanelButton() {
  return (
    <PanelButton window="" cssClasses={["netspeed-bg"]}>
      <box cssClasses={["network-speed"]}>
        <label
          cssClasses={["label"]}
          label={networkSpeed((value) => {
            const downloadSpeed = value.download;
            const uploadSpeed = value.upload;
            const higherSpeed =
              downloadSpeed >= uploadSpeed ? downloadSpeed : uploadSpeed;

            const speed = (higherSpeed / 1000).toFixed(2);

            const symbol = downloadSpeed >= uploadSpeed ? "" : "";

            return `${speed} MB/s ${symbol}`;
          })}
        />
      </box>
    </PanelButton>
  );
}
