import { GLib, GObject, property, readFile, register, writeFile } from "astal";
import { fetch, FetchOptions } from "../lib/fetch";
import MicrosoftOAuth2Service from "./MicrosoftOAuth2";
import { ensureDirectory } from "../lib/utils";

async function fetchWithToken(url: string, options?: FetchOptions = {}) {
  options["headers"] = {
    Authorization: `Bearer ${await MicrosoftOAuth2Service.getAccessToken()}`,
  };
  return await fetch(url, options);
}

export type List<T> = {
  value: T[];
};

export type TaskListsItem = {
  id: string;
  displayName: string;
};

export type Task = {
  id: string;
  title: string;
  status: "notStarted" | "completed";
  importance?: "normal" | "high" | "low";
  body?: {
    content: string;
  };
  completedDateTime?: string;
};

@register()
class MicrosoftTasksService extends GObject.Object {
  #endpoint = "https://graph.microsoft.com/v1.0";
  #savedDataPath = "";
  #todos: Task[] = [];
  #selectedListId: string | null = null;
  #availableTaskLists: TaskListsItem[] = [];
  #isLoading = true;

  @property()
  get todos() {
    return this.#todos;
  }

  @property(String)
  get selectedListId() {
    return this.#selectedListId || "";
  }

  set selectedListId(taskListId: string) {
    this.#selectedListId = taskListId;
    writeFile(
      this.#savedDataPath,
      JSON.stringify({
        selectedListId: this.#selectedListId,
      }),
    );
    this.updateTodos(true);
  }

  @property()
  get availableTaskLists() {
    return this.#availableTaskLists;
  }

  @property(Boolean)
  get isLoading() {
    return this.#isLoading;
  }

  async getTasksLists(): Promise<List<TaskListsItem>> {
    const res = await fetchWithToken(
      `${this.#endpoint}/me/todo/lists`,
    );
    const data = await res.json();
    return data;
  }

  async getTasks(listId: string): Promise<List<Task>> {
    const res = await fetchWithToken(
      `${this.#endpoint}/me/todo/lists/${listId}/tasks`,
      {
        params: {
          filter: 'status ne "completed"',
        },
      },
    );
    const data = await res.json();
    return data;
  }

  async createTask(title: string): Promise<Task> {
    const res = await fetchWithToken(
      `${this.#endpoint}/me/todo/lists/${this.#selectedListId}/tasks`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          status: "notStarted",
        }),
      },
    );
    const data = await res.json();
    this.updateTodos();
    return data;
  }

  async checkTask(task: Task): Promise<Task> {
    const res = await fetchWithToken(
      `${this.#endpoint}/me/todo/lists/${this.#selectedListId}/tasks/${task.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status:
            task.status == "completed"
              ? "notStarted"
              : "completed",
        }),
      },
    );
    const data = await res.json();
    this.updateTodos();
    return data;
  }

  constructor() {
    super();
    this.initializeData();
  }

  async updateTodos(notify: boolean = false) {
    if (notify) {
      this.#isLoading = true;
      this.notify("is-loading");
    }
    const tasks = await this.getTasks(this.#selectedListId!);
    this.#todos = tasks.value;
    this.notify("todos");
    if (notify) {
      this.#isLoading = false;
      this.notify("is-loading");
    }
  }

  private async initializeData() {
    ensureDirectory(`${GLib.get_user_state_dir()}/ags/user/`);
    this.#savedDataPath = `${GLib.get_user_state_dir()}/ags/user/todos.json`;

    try {
      const savedDataFile = readFile(this.#savedDataPath);
      const savedData = JSON.parse(savedDataFile);
      this.#selectedListId = savedData["selectedListId"];
    } catch { }

    try {
      const taskLists = await this.getTasksLists();
      this.#availableTaskLists = taskLists.value;
      this.notify("available-task-lists");

      if (this.#availableTaskLists.length > 0) {
        if (
          !this.#selectedListId ||
          !this.#availableTaskLists.find(
            (taskList) => taskList.id == this.#selectedListId,
          )
        ) {
          this.#selectedListId = this.#availableTaskLists[0].id;
        }
        this.notify("selected-list-id");
        const tasks = await this.getTasks(this.#selectedListId);
        this.#todos = tasks.value;
        this.notify("todos");
      }
      this.#isLoading = false;
      this.notify("is-loading");
    } catch (error) {
      console.error("Error initializing Microsoft Tasks data:", error);
    }
  }
}

const service = new MicrosoftTasksService();
export default service;
