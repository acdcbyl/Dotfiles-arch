import { readFile, readFileAsync, writeFile } from "astal";
import { Variable } from "astal";
import { GLib, Gio } from "astal";
import { monitorFile } from "astal";
import { cacheDir, ensureDirectory } from "./utils";

function getNestedValue(obj: object, keyPath: string) {
  const keys = keyPath.split(".");
  let current = obj;

  for (let key of keys) {
    if (current && current.hasOwnProperty(key)) {
      current = current[key];
    } else {
      return undefined;
    }
  }

  return current;
}

function setNestedValue<T>(obj: object, keyPath: string, value: T) {
  const keys = keyPath.split(".");
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    if (!current[key]) {
      current[key] = {};
    }

    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
}

export class Opt<T = unknown> extends Variable<T> {
  constructor(initial: T, { cached = false }: { cached?: boolean }) {
    super(initial);
    this.initial = initial;
    this.cached = cached;
  }

  initial: T;
  id = "";
  cached = false;

  init(configFile: string) {
    const dir = this.cached ? `${cacheDir}/options.json` : configFile;

    if (GLib.file_test(dir, GLib.FileTest.EXISTS)) {
      let config: object;
      try {
        config = JSON.parse(readFile(dir));
      } catch {
        config = {};
      }
      const configV = this.cached
        ? config[this.id]
        : getNestedValue(config, this.id);
      if (configV !== undefined) {
        this.set(configV);
      }
    }

    if (this.cached) {
      this.subscribe((value) => {
        readFileAsync(`${cacheDir}/options.json`)
          .then((content) => {
            const cache = JSON.parse(content);
            cache[this.id] = value;
            writeFile(
              `${cacheDir}/options.json`,
              JSON.stringify(cache, null, 2),
            );
          })
          .catch(() => "");
      });
    }
  }
}

export const opt = <T>(initial: T, opts = {}) => new Opt(initial, opts);

function getOptions(object: object, path = ""): Opt[] {
  return Object.keys(object).flatMap((key) => {
    const obj = object[key];
    const id = path ? path + "." + key : key;

    if (obj instanceof Opt) {
      obj.id = id;
      return obj;
    }

    if (typeof obj === "object") return getOptions(obj, id);

    return [];
  });
}

function transformObject(obj: object, initial?: boolean) {
  if (obj instanceof Opt) {
    if (obj.cached) {
      return;
    } else {
      if (initial) {
        return obj.initial;
      } else {
        return obj.get();
      }
    }
  }

  if (typeof obj !== "object") return;

  const newObj = {};

  Object.keys(obj).forEach((key) => {
    newObj[key] = transformObject(obj[key], initial);
  });

  const length = Object.keys(JSON.parse(JSON.stringify(newObj))).length;

  return length > 0 ? newObj : undefined;
}

function deepMerge(target: object, source: object) {
  if (typeof target !== "object" || target === null) {
    return source;
  }

  if (typeof source !== "object" || source === null) {
    return source;
  }

  const result = Array.isArray(target) ? [] : { ...target };

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (Array.isArray(source[key])) {
        result[key] = [...source[key]];
      } else if (typeof source[key] === "object" && source[key] !== null) {
        result[key] = deepMerge(target[key], source[key]);
      } else {
        result[key] = source[key];
      }
    }
  }

  return result;
}

export function mkOptions<T extends object>(configFile: string, object: T) {
  for (const opt of getOptions(object)) {
    opt.init(configFile);
  }

  ensureDirectory(configFile.split("/").slice(0, -1).join("/"));
  const defaultConfig = transformObject(object, true);
  const configVar = Variable(transformObject(object));

  if (GLib.file_test(configFile, GLib.FileTest.EXISTS)) {
    let configData: object;
    try {
      configData = JSON.parse(readFile(configFile) || "{}");
    } catch {
      configData = {};
    }
    configVar.set(deepMerge(configVar.get(), configData));
  }

  function updateConfig(oldConfig: object, newConfig: object, path = "") {
    for (const key in newConfig) {
      const fullPath = path ? `${path}.${key}` : key;
      if (
        typeof newConfig[key] === "object" &&
        !Array.isArray(newConfig[key])
      ) {
        updateConfig(oldConfig[key], newConfig[key], fullPath);
      } else if (
        JSON.stringify(oldConfig[key]) != JSON.stringify(newConfig[key])
      ) {
        const conf = getOptions(object).find((c) => c.id == fullPath);
        console.log(`${fullPath} updated`);
        if (conf) {
          const newC = configVar.get();
          setNestedValue(newC, fullPath, newConfig[key]);
          configVar.set(newC);
          conf.set(newConfig[key]);
        }
      }
    }
  }

  monitorFile(configFile, (_, event) => {
    if (event == Gio.FileMonitorEvent.ATTRIBUTE_CHANGED) {
      let cache: object;
      try {
        cache = JSON.parse(readFile(configFile) || "{}");
      } catch {
        cache = {};
      }
      updateConfig(configVar.get(), deepMerge(defaultConfig, cache));
    }
  });

  return Object.assign(object, {
    configFile,
    handler(deps: string[], callback: () => void) {
      for (const opt of getOptions(object)) {
        if (deps.some((i) => opt.id.startsWith(i))) opt.subscribe(callback);
      }
    },
  });
}
