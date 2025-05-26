import { App } from "astal/gtk4";
import { execWrappedWpCommand } from "../widget/Osd/Listener-wireplumber";
import { setOSD } from "../widget/Osd/Osd";

export function handleMessage(request: string, respond: (res: any) => void) {
  if (request.startsWith("wpctl")) {
    execWrappedWpCommand(request);
    console.log(request);
    respond("ok");
  } else {
    console.log(request);
    respond("invalid message");
  }
}
