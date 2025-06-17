import Applauncher from "./widget/AppLauncher/Applauncher";
import Bar from "./widget/Bar/Bar";
// import DesktopClock from "./widgets/clock/DesktopClock.jsx";
import Dashboard from "./widget/Dashbord/Dashboard";
// import Dock from "./widgets/dock/Dock.jsx";
import NotificationPopup from "./widget/Notifactions/NotificationPopup.jsx";
import NotificationPopups from "./widget/Notifactions/NotificationPopups";
// import NotificationWindow from "./widget/Notifactions/NotificationWindow.jsx";
import ScreenCorners from "./widget/ScreenCorners/ScreenCorners";
import PowerMenu from "./widget/Powermenu/PowerMenu.jsx";
import VerificationWindow from "./widget/Powermenu/VerificationWindow.jsx";
import QSWindow from "./widget/Quicksettings/QSWindow.jsx";
// import { startOSDListeners } from "./widget/Osd/Listeners";
import OSD from "./widget/Osd/Osd";

export default [
  Bar,
  Applauncher,
  // NotificationWindow,
  NotificationPopups,
  Dashboard,
  QSWindow,
  PowerMenu,
  VerificationWindow,
  ScreenCorners,
  OSD,
];
