import networkSpeed from "../../../lib/networkspeed";
import BarButton from "../BarButton";

export default function NetworkSpeedButton() {
  return (
    <BarButton >
      <box cssName="networkspeed">
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
    </BarButton>
  );
}
