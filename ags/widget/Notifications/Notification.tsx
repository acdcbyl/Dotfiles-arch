import { Gtk, Widget } from "astal/gtk3";
import { type EventBox } from "astal/gtk3/widget";
import { timeout, GLib, idle } from "astal";
import Notifd from "gi://AstalNotifd";
import { Astal } from "astal/gtk3"; // 添加 Astal 导入
import icons from "../../lib/icons";

const transitionDuration = 300;

const time = (time: number, format = "%H:%M") =>
	GLib.DateTime.new_from_unix_local(time).format(format);

// 添加检查图标和文件是否存在的辅助函数
const isIcon = (icon: string) => !!Astal.Icon.lookup_icon(icon);
const fileExists = (path: string) => GLib.file_test(path, GLib.FileTest.EXISTS);

type NotificationIconProps = {
	notification: Notifd.Notification;
};

const NotificationIcon = ({ notification }: NotificationIconProps) => {
	var { appName, appIcon, image, desktopEntry } = notification;

	// 检查图像并确保文件存在
	if (image && fileExists(image)) {
		// if (image.includes("file://")) image = image.replace("file://", "");

		return (
			<box
				valign={Gtk.Align.START}
				hexpand={false}
				className="notification__icon"
				css={`
                background-image: url("file://${image}");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                min-width: 60px;
                min-height: 60px;
            `}
			/>
		);
	}

	// 检查图像是否为图标
	if (image && isIcon(image)) {
		return (
			<box
				valign={Gtk.Align.START}
				hexpand={false}
				className="notification__icon"
				css={`
                background-image: url("file://${image}");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                min-width: 60px;
                min-height: 60px;
            `}
			/>
		);
	}

	// 检查应用图标或桌面入口
	if (appIcon || desktopEntry) {
		return (
			<box
				valign={Gtk.Align.START}
				hexpand={false}
				className="notification__icon"
				css={`
                background-image: url("file://${appIcon || desktopEntry}");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                min-width: 60px;
                min-height: 60px;
            `}
			/>
		);
	}

	// 使用默认图标
	let icon = icons.fallback.notification;

	return new Widget.Box({
		valign: Gtk.Align.START,
		hexpand: false,
		className: "notification__icon",
		child: new Widget.Icon({
			icon,
			iconSize: 40,
			// iconSize: 60,
			halign: Gtk.Align.CENTER,
			valign: Gtk.Align.CENTER,
			hexpand: true,
		}),
	});
};

type NotificationsProps = {
	setup(self: EventBox): void;
	onHoverLost(self: EventBox): void;
	notification: Notifd.Notification;
};

export default function Notification(props: NotificationsProps) {
	const { notification, onHoverLost, setup } = props;

	const Content = () => (
		<box hexpand={true} className="content">
			<NotificationIcon notification={notification} />
			<box hexpand={true} vexpand={true} vertical={true}>
				<box
					className="notification__header"
					vexpand={true}
					valign={Gtk.Align.CENTER}
				>
					<box hexpand={true} spacing={6}>
						<label
							className="notification__title"
							maxWidthChars={14}
							wrap={true}
							justify={Gtk.Justification.LEFT}
							truncate={true}
							useMarkup={true}
							label={notification.summary.trim()}
						/>
						<label className="notification__dot" label={"•"} />
						{notification.appName != "" && (
							<label
								className="notification__app-name"
								justify={Gtk.Justification.LEFT}
								truncate={true}
								wrap={true}
								maxWidthChars={8}
								useMarkup={true}
								label={notification.appName.trim()} // 修复这里使用 appName 而不是 app_name
							/>
						)}
						{notification.appName != "" && (
							<label className="notification__dot" label={"•"} />
						)}
						<label
							className="notification__time"
							label={time(notification.time)?.toString()}
						/>
					</box>
				</box>
				<revealer
					visible={notification.body != ""}
					reveal_child={notification.body != ""}
				>
					<label
						className="notification__description"
						hexpand={true}
						useMarkup={true}
						xalign={0}
						lines={3}
						justify={Gtk.Justification.LEFT}
						truncate={true}
						maxWidthChars={24}
						wrap={true}
						label={notification.body.trim().toString()}
					/>
				</revealer>
			</box>
			<button
				vexpand={true}
				valign={Gtk.Align.START}
				className="notification__close-button"
				onClicked={() => {
					notification.dismiss();
				}}
			>
				<icon icon="window-close-symbolic" />
			</button>
		</box>
	);

	const ActionsBox = () =>
		notification.get_actions() && (
			<box className="notification__actions">
				{notification.get_actions().map((action) => (
					<button
						className="notification__action"
						on_clicked={() => notification.invoke(action.id)}
						hexpand={true}
					>
						<label label={action.label} />
					</button>
				))}
			</box>
		);

	const Eventbox = () => (
		<eventbox vexpand={false} on_hover_lost={onHoverLost} setup={setup}>
			<box vertical={true}>
				<Content />
				<ActionsBox />
			</box>
		</eventbox>
	);

	const box = new Widget.Revealer({
		transitionType: Gtk.RevealerTransitionType.SLIDE_DOWN,
		transitionDuration: 300,
		setup: (self) => {
			idle(() => {
				self.revealChild = true;
			});
		},
		child: (
			<box
				valign={Gtk.Align.START}
				className={`notification ${notification.urgency}`}
			>
				<Eventbox />
			</box>
		),
	});

	let isClosing = false;

	return Object.assign(box, {
		close(remove: () => void) {
			if (isClosing) return;
			isClosing = true;
			box.revealChild = false;
			timeout(transitionDuration, () => {
				remove();
			});
		},
	});
}
