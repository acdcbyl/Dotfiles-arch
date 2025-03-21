import { bind, GObject, idle, timeout, Variable } from "astal";
import { Gdk, Gtk, Widget } from "astal/gtk3";
import icons from "../../../lib/icons";
import GoogleTasksService, {
	Task,
	TaskListsItem,
} from "../../../service/GoogleTasks";
import { ComboBox, Spinner, Ref } from "../../../common/Types";
import Pango from "gi://Pango?version=1.0";
import { Subscribable } from "astal/binding";

const TARGET = [Gtk.TargetEntry.new("text/plain", Gtk.TargetFlags.SAME_APP, 0)];

const TodoItem = ({ todo }: { todo: Task }) => {
	const status = Variable(todo.status);
	const revealer: Ref<Widget.Revealer> = {};

	return (
		<revealer
			transitionDuration={300}
			transitionType={Gtk.RevealerTransitionType.SLIDE_UP}
			setup={(self) => {
				idle(() => {
					self.revealChild = true;
				});
				revealer.ref = self;
				self.drag_source_set(
					Gdk.ModifierType.BUTTON1_MASK,
					TARGET,
					Gdk.DragAction.COPY,
				);
				self.connect("drag-begin", (_source, context) => {
					self.revealChild = false;
				});
			}}
		>
			<box spacing={24} hexpand={true} className="todo">
				<button
					onClick={() => {
						status.set("completed");
						timeout(50, () => {
							if (revealer.ref) revealer.ref.revealChild = false;
						});
						GoogleTasksService.checkTask(todo);
					}}
				>
					<icon
						className="todo__check"
						icon={bind(status).as((s) =>
							s == "completed"
								? icons.todo.checkedAlt
								: icons.todo.unchecked,
						)}
						pixelSize={24}
					/>
				</button>

				<label
					hexpand={true}
					halign={Gtk.Align.START}
					label={todo.title}
					wrap
					wrapMode={Pango.WrapMode.CHAR}
				/>
			</box>
		</revealer>
	);
};

class TodosMap implements Subscribable {
	taskService = GoogleTasksService;

	private map: Map<string, Gtk.Widget> = new Map();
	private var: Variable<Array<Gtk.Widget>> = Variable([]);

	private notify() {
		this.var.set(
			[...this.map.values()].toSorted((a, b) => a.position - b.position),
		);
	}

	constructor() {
		GoogleTasksService.connect("notify::todos", async () => {
			this.updateMap(GoogleTasksService.todos);
		});
	}

	private updateMap(tasks: Task[]) {
		const newTasksIds = new Set(tasks.map((task) => task.id));

		for (const task of tasks) {
			const existingTask = this.map.get(task.id);
			if (!existingTask)
				this.map.set(
					task.id,
					Object.assign(TodoItem({ todo: task }), {
						position: parseInt(task.position),
					}),
				);
			else existingTask.position = task.position;
		}

		for (const id of this.map.keys()) {
			if (!newTasksIds.has(id)) {
				this.map.delete(id);
			}
		}

		this.notify();
	}

	get() {
		return this.var.get();
	}

	subscribe(callback: (list: Array<Gtk.Widget>) => void) {
		return this.var.subscribe(callback);
	}
}

export default () => {
	const todos = new TodosMap();
	const newTodoText = Variable<string>("");

	return (
		<box vertical className={"todos block"}>
			<ComboBox
				className={"todos__combobox"}
				hexpand={true}
				setup={(self) => {
					const model = new Gtk.ListStore();
					let renderer = new Gtk.CellRendererText();
					self.pack_start(renderer, true);
					self.add_attribute(renderer, "text", 1);
					GoogleTasksService.connect(
						"notify::available-task-lists",
						() => {
							model.set_column_types([
								GObject.TYPE_STRING,
								GObject.TYPE_STRING,
							]);
							GoogleTasksService.availableTaskLists.forEach(
								(list: TaskListsItem) => {
									model.set(
										model.append(),
										[0, 1],
										[list.id, list.title],
									);
								},
							);
							self.set_model(model);
						},
					);
					GoogleTasksService.connect(
						"notify::selected-list-id",
						() => {
							let selectedId = GoogleTasksService.selectedListId;
							let [success, iter] = model.get_iter_first();

							while (success) {
								let id = model.get_value(iter, 0);
								if (id === selectedId) {
									self.set_active_iter(iter);
									break;
								}
								success = model.iter_next(iter);
							}
						},
					);
					self.connect("changed", function (entry) {
						let [success, iter] = self.get_active_iter();
						if (!success) return;
						let selectedListId = model.get_value(iter, 0); // get value
						GoogleTasksService.selectedListId =
							selectedListId as string;
					});
				}}
			/>
			<stack
				transitionType={Gtk.StackTransitionType.CROSSFADE}
				transitionDuration={200}
				setup={(self) => {
					GoogleTasksService.isLoading
						? (self.shown = "loading")
						: (self.shown = "todos");
					self.hook(GoogleTasksService, "notify::is-loading", () => {
						GoogleTasksService.isLoading
							? (self.shown = "loading")
							: (self.shown = "todos");
					});
				}}
			>
				<box name="todos" vertical>
					<box className={"todos__input_box"} spacing={24}>
						<icon icon={icons.todo.checkedAlt} />
						<entry
							hexpand
							className={"todos__input"}
							placeholderText={"New todo..."}
							onChanged={({ text }) => newTodoText.set(text)}
							onActivate={(self) => {
								GoogleTasksService.createTask(
									newTodoText.get(),
								);
								self.text = "";
							}}
						/>
					</box>
					<scrollable className={"todos__scrollable"} name={"todos"}>
						<box
							vertical
							className={"todos__container"}
							setup={(self) => {
								self.drag_dest_set(
									Gtk.DestDefaults.ALL,
									TARGET,
									Gdk.DragAction.COPY,
								);
								self.connect(
									"drag-data-received",
									(_w, _c, _x, _y, data) => {
										console.log("drag-data-received");
									},
								);
							}}
						>
							{bind(todos)}
						</box>
					</scrollable>
				</box>
				<box hexpand vexpand halign={Gtk.Align.CENTER} name="loading">
					<Spinner
						halign={Gtk.Align.CENTER}
						widthRequest={32}
						setup={(self) => self.start()}
					/>
				</box>
			</stack>
		</box>
	);
};
