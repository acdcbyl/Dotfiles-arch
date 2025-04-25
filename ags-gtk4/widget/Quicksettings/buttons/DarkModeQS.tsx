import options from "../../../option";
import QSButton from "../QSButton";

export default function DarkModeQS() {
  const { mode } = options.theme;
  return (
    <QSButton
      connection={[mode, null, (v) => v === "dark"]}
      iconName={"lighttable-symbolic"}
      label={"Dark Mode"}
    // onClicked={() => {
    //   mode.set(mode.get() === "light" ? "dark" : "light");
    // }}
    />
  );
}
