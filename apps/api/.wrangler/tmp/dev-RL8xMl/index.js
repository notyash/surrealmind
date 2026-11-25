var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedAsync(name) {
  const fn = /* @__PURE__ */ notImplemented(name);
  fn.__promisify__ = () => /* @__PURE__ */ notImplemented(name + ".__promisify__");
  fn.native = fn;
  return fn;
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "../../node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedAsync, "notImplementedAsync");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// ../../node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance2;
var init_performance = __esm({
  "../../node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type2) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type2) {
        return this._entries.filter((e) => e.name === name && (!type2 || e.entryType === type2));
      }
      getEntriesByType(type2) {
        return this._entries.filter((e) => e.entryType === type2);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type2, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type2, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance2 = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// ../../node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "../../node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// ../../node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "../../node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    if (!("__unenv__" in performance2)) {
      const proto = Performance.prototype;
      for (const key of Object.getOwnPropertyNames(proto)) {
        if (key !== "constructor" && !(key in performance2)) {
          const desc = Object.getOwnPropertyDescriptor(proto, key);
          if (desc) {
            Object.defineProperty(performance2, key, desc);
          }
        }
      }
    }
    globalThis.performance = performance2;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// ../../node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "../../node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// ../../node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "../../node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// ../../node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "../../node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// ../../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "../../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// ../../node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "../../node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// ../../node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "../../node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// ../../node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "../../node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// ../../node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "../../node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// ../../node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "../../node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// ../../node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "../../node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type2, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type2 ? `${type2}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// ../../node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, unenvProcess, exit, features, platform, _channel, _debugEnd, _debugProcess, _disconnect, _events, _eventsCount, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _handleQueue, _kill, _linkedBinding, _maxListeners, _pendingMessage, _preload_modules, _rawDebug, _send, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, assert2, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, disconnect, dlopen, domain, emit, emitWarning, env, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, hrtime3, initgroups, kill, listenerCount, listeners, loadEnvFile, mainModule, memoryUsage, moduleLoadList, nextTick, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "../../node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      _channel,
      _debugEnd,
      _debugProcess,
      _disconnect,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _handleQueue,
      _kill,
      _linkedBinding,
      _maxListeners,
      _pendingMessage,
      _preload_modules,
      _rawDebug,
      _send,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert2,
      availableMemory,
      binding,
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      disconnect,
      dlopen,
      domain,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime: hrtime3,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      mainModule,
      memoryUsage,
      moduleLoadList,
      nextTick,
      off,
      on,
      once,
      openStdin,
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// ../../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "../../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// ../../node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../../node_modules/unenv/dist/runtime/node/internal/fs/promises.mjs
var access, copyFile, cp, open, opendir, rename, truncate, rm, rmdir, mkdir, readdir, readlink, symlink, lstat, stat, link, unlink, chmod, lchmod, lchown, chown, utimes, lutimes, realpath, mkdtemp, writeFile, appendFile, readFile, watch, statfs, glob;
var init_promises = __esm({
  "../../node_modules/unenv/dist/runtime/node/internal/fs/promises.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    access = /* @__PURE__ */ notImplemented("fs.access");
    copyFile = /* @__PURE__ */ notImplemented("fs.copyFile");
    cp = /* @__PURE__ */ notImplemented("fs.cp");
    open = /* @__PURE__ */ notImplemented("fs.open");
    opendir = /* @__PURE__ */ notImplemented("fs.opendir");
    rename = /* @__PURE__ */ notImplemented("fs.rename");
    truncate = /* @__PURE__ */ notImplemented("fs.truncate");
    rm = /* @__PURE__ */ notImplemented("fs.rm");
    rmdir = /* @__PURE__ */ notImplemented("fs.rmdir");
    mkdir = /* @__PURE__ */ notImplemented("fs.mkdir");
    readdir = /* @__PURE__ */ notImplemented("fs.readdir");
    readlink = /* @__PURE__ */ notImplemented("fs.readlink");
    symlink = /* @__PURE__ */ notImplemented("fs.symlink");
    lstat = /* @__PURE__ */ notImplemented("fs.lstat");
    stat = /* @__PURE__ */ notImplemented("fs.stat");
    link = /* @__PURE__ */ notImplemented("fs.link");
    unlink = /* @__PURE__ */ notImplemented("fs.unlink");
    chmod = /* @__PURE__ */ notImplemented("fs.chmod");
    lchmod = /* @__PURE__ */ notImplemented("fs.lchmod");
    lchown = /* @__PURE__ */ notImplemented("fs.lchown");
    chown = /* @__PURE__ */ notImplemented("fs.chown");
    utimes = /* @__PURE__ */ notImplemented("fs.utimes");
    lutimes = /* @__PURE__ */ notImplemented("fs.lutimes");
    realpath = /* @__PURE__ */ notImplemented("fs.realpath");
    mkdtemp = /* @__PURE__ */ notImplemented("fs.mkdtemp");
    writeFile = /* @__PURE__ */ notImplemented("fs.writeFile");
    appendFile = /* @__PURE__ */ notImplemented("fs.appendFile");
    readFile = /* @__PURE__ */ notImplemented("fs.readFile");
    watch = /* @__PURE__ */ notImplemented("fs.watch");
    statfs = /* @__PURE__ */ notImplemented("fs.statfs");
    glob = /* @__PURE__ */ notImplemented("fs.glob");
  }
});

// ../../node_modules/unenv/dist/runtime/node/internal/fs/constants.mjs
var constants_exports = {};
__export(constants_exports, {
  COPYFILE_EXCL: () => COPYFILE_EXCL,
  COPYFILE_FICLONE: () => COPYFILE_FICLONE,
  COPYFILE_FICLONE_FORCE: () => COPYFILE_FICLONE_FORCE,
  EXTENSIONLESS_FORMAT_JAVASCRIPT: () => EXTENSIONLESS_FORMAT_JAVASCRIPT,
  EXTENSIONLESS_FORMAT_WASM: () => EXTENSIONLESS_FORMAT_WASM,
  F_OK: () => F_OK,
  O_APPEND: () => O_APPEND,
  O_CREAT: () => O_CREAT,
  O_DIRECT: () => O_DIRECT,
  O_DIRECTORY: () => O_DIRECTORY,
  O_DSYNC: () => O_DSYNC,
  O_EXCL: () => O_EXCL,
  O_NOATIME: () => O_NOATIME,
  O_NOCTTY: () => O_NOCTTY,
  O_NOFOLLOW: () => O_NOFOLLOW,
  O_NONBLOCK: () => O_NONBLOCK,
  O_RDONLY: () => O_RDONLY,
  O_RDWR: () => O_RDWR,
  O_SYNC: () => O_SYNC,
  O_TRUNC: () => O_TRUNC,
  O_WRONLY: () => O_WRONLY,
  R_OK: () => R_OK,
  S_IFBLK: () => S_IFBLK,
  S_IFCHR: () => S_IFCHR,
  S_IFDIR: () => S_IFDIR,
  S_IFIFO: () => S_IFIFO,
  S_IFLNK: () => S_IFLNK,
  S_IFMT: () => S_IFMT,
  S_IFREG: () => S_IFREG,
  S_IFSOCK: () => S_IFSOCK,
  S_IRGRP: () => S_IRGRP,
  S_IROTH: () => S_IROTH,
  S_IRUSR: () => S_IRUSR,
  S_IRWXG: () => S_IRWXG,
  S_IRWXO: () => S_IRWXO,
  S_IRWXU: () => S_IRWXU,
  S_IWGRP: () => S_IWGRP,
  S_IWOTH: () => S_IWOTH,
  S_IWUSR: () => S_IWUSR,
  S_IXGRP: () => S_IXGRP,
  S_IXOTH: () => S_IXOTH,
  S_IXUSR: () => S_IXUSR,
  UV_DIRENT_BLOCK: () => UV_DIRENT_BLOCK,
  UV_DIRENT_CHAR: () => UV_DIRENT_CHAR,
  UV_DIRENT_DIR: () => UV_DIRENT_DIR,
  UV_DIRENT_FIFO: () => UV_DIRENT_FIFO,
  UV_DIRENT_FILE: () => UV_DIRENT_FILE,
  UV_DIRENT_LINK: () => UV_DIRENT_LINK,
  UV_DIRENT_SOCKET: () => UV_DIRENT_SOCKET,
  UV_DIRENT_UNKNOWN: () => UV_DIRENT_UNKNOWN,
  UV_FS_COPYFILE_EXCL: () => UV_FS_COPYFILE_EXCL,
  UV_FS_COPYFILE_FICLONE: () => UV_FS_COPYFILE_FICLONE,
  UV_FS_COPYFILE_FICLONE_FORCE: () => UV_FS_COPYFILE_FICLONE_FORCE,
  UV_FS_O_FILEMAP: () => UV_FS_O_FILEMAP,
  UV_FS_SYMLINK_DIR: () => UV_FS_SYMLINK_DIR,
  UV_FS_SYMLINK_JUNCTION: () => UV_FS_SYMLINK_JUNCTION,
  W_OK: () => W_OK,
  X_OK: () => X_OK
});
var UV_FS_SYMLINK_DIR, UV_FS_SYMLINK_JUNCTION, O_RDONLY, O_WRONLY, O_RDWR, UV_DIRENT_UNKNOWN, UV_DIRENT_FILE, UV_DIRENT_DIR, UV_DIRENT_LINK, UV_DIRENT_FIFO, UV_DIRENT_SOCKET, UV_DIRENT_CHAR, UV_DIRENT_BLOCK, EXTENSIONLESS_FORMAT_JAVASCRIPT, EXTENSIONLESS_FORMAT_WASM, S_IFMT, S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFIFO, S_IFLNK, S_IFSOCK, O_CREAT, O_EXCL, UV_FS_O_FILEMAP, O_NOCTTY, O_TRUNC, O_APPEND, O_DIRECTORY, O_NOATIME, O_NOFOLLOW, O_SYNC, O_DSYNC, O_DIRECT, O_NONBLOCK, S_IRWXU, S_IRUSR, S_IWUSR, S_IXUSR, S_IRWXG, S_IRGRP, S_IWGRP, S_IXGRP, S_IRWXO, S_IROTH, S_IWOTH, S_IXOTH, F_OK, R_OK, W_OK, X_OK, UV_FS_COPYFILE_EXCL, COPYFILE_EXCL, UV_FS_COPYFILE_FICLONE, COPYFILE_FICLONE, UV_FS_COPYFILE_FICLONE_FORCE, COPYFILE_FICLONE_FORCE;
var init_constants = __esm({
  "../../node_modules/unenv/dist/runtime/node/internal/fs/constants.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    UV_FS_SYMLINK_DIR = 1;
    UV_FS_SYMLINK_JUNCTION = 2;
    O_RDONLY = 0;
    O_WRONLY = 1;
    O_RDWR = 2;
    UV_DIRENT_UNKNOWN = 0;
    UV_DIRENT_FILE = 1;
    UV_DIRENT_DIR = 2;
    UV_DIRENT_LINK = 3;
    UV_DIRENT_FIFO = 4;
    UV_DIRENT_SOCKET = 5;
    UV_DIRENT_CHAR = 6;
    UV_DIRENT_BLOCK = 7;
    EXTENSIONLESS_FORMAT_JAVASCRIPT = 0;
    EXTENSIONLESS_FORMAT_WASM = 1;
    S_IFMT = 61440;
    S_IFREG = 32768;
    S_IFDIR = 16384;
    S_IFCHR = 8192;
    S_IFBLK = 24576;
    S_IFIFO = 4096;
    S_IFLNK = 40960;
    S_IFSOCK = 49152;
    O_CREAT = 64;
    O_EXCL = 128;
    UV_FS_O_FILEMAP = 0;
    O_NOCTTY = 256;
    O_TRUNC = 512;
    O_APPEND = 1024;
    O_DIRECTORY = 65536;
    O_NOATIME = 262144;
    O_NOFOLLOW = 131072;
    O_SYNC = 1052672;
    O_DSYNC = 4096;
    O_DIRECT = 16384;
    O_NONBLOCK = 2048;
    S_IRWXU = 448;
    S_IRUSR = 256;
    S_IWUSR = 128;
    S_IXUSR = 64;
    S_IRWXG = 56;
    S_IRGRP = 32;
    S_IWGRP = 16;
    S_IXGRP = 8;
    S_IRWXO = 7;
    S_IROTH = 4;
    S_IWOTH = 2;
    S_IXOTH = 1;
    F_OK = 0;
    R_OK = 4;
    W_OK = 2;
    X_OK = 1;
    UV_FS_COPYFILE_EXCL = 1;
    COPYFILE_EXCL = 1;
    UV_FS_COPYFILE_FICLONE = 2;
    COPYFILE_FICLONE = 2;
    UV_FS_COPYFILE_FICLONE_FORCE = 4;
    COPYFILE_FICLONE_FORCE = 4;
  }
});

// ../../node_modules/unenv/dist/runtime/node/fs/promises.mjs
var promises_default;
var init_promises2 = __esm({
  "../../node_modules/unenv/dist/runtime/node/fs/promises.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_promises();
    init_constants();
    init_promises();
    promises_default = {
      constants: constants_exports,
      access,
      appendFile,
      chmod,
      chown,
      copyFile,
      cp,
      glob,
      lchmod,
      lchown,
      link,
      lstat,
      lutimes,
      mkdir,
      mkdtemp,
      open,
      opendir,
      readFile,
      readdir,
      readlink,
      realpath,
      rename,
      rm,
      rmdir,
      stat,
      statfs,
      symlink,
      truncate,
      unlink,
      utimes,
      watch,
      writeFile
    };
  }
});

// ../../node_modules/unenv/dist/runtime/node/internal/fs/classes.mjs
var Dir, Dirent, Stats, ReadStream2, WriteStream2, FileReadStream, FileWriteStream;
var init_classes = __esm({
  "../../node_modules/unenv/dist/runtime/node/internal/fs/classes.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    Dir = /* @__PURE__ */ notImplementedClass("fs.Dir");
    Dirent = /* @__PURE__ */ notImplementedClass("fs.Dirent");
    Stats = /* @__PURE__ */ notImplementedClass("fs.Stats");
    ReadStream2 = /* @__PURE__ */ notImplementedClass("fs.ReadStream");
    WriteStream2 = /* @__PURE__ */ notImplementedClass("fs.WriteStream");
    FileReadStream = ReadStream2;
    FileWriteStream = WriteStream2;
  }
});

// ../../node_modules/unenv/dist/runtime/node/internal/fs/fs.mjs
function callbackify(fn) {
  const fnc = /* @__PURE__ */ __name(function(...args) {
    const cb = args.pop();
    fn().catch((error3) => cb(error3)).then((val) => cb(void 0, val));
  }, "fnc");
  fnc.__promisify__ = fn;
  fnc.native = fnc;
  return fnc;
}
var access2, appendFile2, chown2, chmod2, copyFile2, cp2, lchown2, lchmod2, link2, lstat2, lutimes2, mkdir2, mkdtemp2, realpath2, open2, opendir2, readdir2, readFile2, readlink2, rename2, rm2, rmdir2, stat2, symlink2, truncate2, unlink2, utimes2, writeFile2, statfs2, close, createReadStream, createWriteStream, exists, fchown, fchmod, fdatasync, fstat, fsync, ftruncate, futimes, lstatSync, read, readv, realpathSync, statSync, unwatchFile, watch2, watchFile, write, writev, _toUnixTimestamp, openAsBlob, glob2, appendFileSync, accessSync, chownSync, chmodSync, closeSync, copyFileSync, cpSync, existsSync, fchownSync, fchmodSync, fdatasyncSync, fstatSync, fsyncSync, ftruncateSync, futimesSync, lchownSync, lchmodSync, linkSync, lutimesSync, mkdirSync, mkdtempSync, openSync, opendirSync, readdirSync, readSync, readvSync, readFileSync, readlinkSync, renameSync, rmSync, rmdirSync, symlinkSync, truncateSync, unlinkSync, utimesSync, writeFileSync, writeSync, writevSync, statfsSync, globSync;
var init_fs = __esm({
  "../../node_modules/unenv/dist/runtime/node/internal/fs/fs.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    init_promises();
    __name(callbackify, "callbackify");
    access2 = callbackify(access);
    appendFile2 = callbackify(appendFile);
    chown2 = callbackify(chown);
    chmod2 = callbackify(chmod);
    copyFile2 = callbackify(copyFile);
    cp2 = callbackify(cp);
    lchown2 = callbackify(lchown);
    lchmod2 = callbackify(lchmod);
    link2 = callbackify(link);
    lstat2 = callbackify(lstat);
    lutimes2 = callbackify(lutimes);
    mkdir2 = callbackify(mkdir);
    mkdtemp2 = callbackify(mkdtemp);
    realpath2 = callbackify(realpath);
    open2 = callbackify(open);
    opendir2 = callbackify(opendir);
    readdir2 = callbackify(readdir);
    readFile2 = callbackify(readFile);
    readlink2 = callbackify(readlink);
    rename2 = callbackify(rename);
    rm2 = callbackify(rm);
    rmdir2 = callbackify(rmdir);
    stat2 = callbackify(stat);
    symlink2 = callbackify(symlink);
    truncate2 = callbackify(truncate);
    unlink2 = callbackify(unlink);
    utimes2 = callbackify(utimes);
    writeFile2 = callbackify(writeFile);
    statfs2 = callbackify(statfs);
    close = /* @__PURE__ */ notImplementedAsync("fs.close");
    createReadStream = /* @__PURE__ */ notImplementedAsync("fs.createReadStream");
    createWriteStream = /* @__PURE__ */ notImplementedAsync("fs.createWriteStream");
    exists = /* @__PURE__ */ notImplementedAsync("fs.exists");
    fchown = /* @__PURE__ */ notImplementedAsync("fs.fchown");
    fchmod = /* @__PURE__ */ notImplementedAsync("fs.fchmod");
    fdatasync = /* @__PURE__ */ notImplementedAsync("fs.fdatasync");
    fstat = /* @__PURE__ */ notImplementedAsync("fs.fstat");
    fsync = /* @__PURE__ */ notImplementedAsync("fs.fsync");
    ftruncate = /* @__PURE__ */ notImplementedAsync("fs.ftruncate");
    futimes = /* @__PURE__ */ notImplementedAsync("fs.futimes");
    lstatSync = /* @__PURE__ */ notImplementedAsync("fs.lstatSync");
    read = /* @__PURE__ */ notImplementedAsync("fs.read");
    readv = /* @__PURE__ */ notImplementedAsync("fs.readv");
    realpathSync = /* @__PURE__ */ notImplementedAsync("fs.realpathSync");
    statSync = /* @__PURE__ */ notImplementedAsync("fs.statSync");
    unwatchFile = /* @__PURE__ */ notImplementedAsync("fs.unwatchFile");
    watch2 = /* @__PURE__ */ notImplementedAsync("fs.watch");
    watchFile = /* @__PURE__ */ notImplementedAsync("fs.watchFile");
    write = /* @__PURE__ */ notImplementedAsync("fs.write");
    writev = /* @__PURE__ */ notImplementedAsync("fs.writev");
    _toUnixTimestamp = /* @__PURE__ */ notImplementedAsync("fs._toUnixTimestamp");
    openAsBlob = /* @__PURE__ */ notImplementedAsync("fs.openAsBlob");
    glob2 = /* @__PURE__ */ notImplementedAsync("fs.glob");
    appendFileSync = /* @__PURE__ */ notImplemented("fs.appendFileSync");
    accessSync = /* @__PURE__ */ notImplemented("fs.accessSync");
    chownSync = /* @__PURE__ */ notImplemented("fs.chownSync");
    chmodSync = /* @__PURE__ */ notImplemented("fs.chmodSync");
    closeSync = /* @__PURE__ */ notImplemented("fs.closeSync");
    copyFileSync = /* @__PURE__ */ notImplemented("fs.copyFileSync");
    cpSync = /* @__PURE__ */ notImplemented("fs.cpSync");
    existsSync = /* @__PURE__ */ __name(() => false, "existsSync");
    fchownSync = /* @__PURE__ */ notImplemented("fs.fchownSync");
    fchmodSync = /* @__PURE__ */ notImplemented("fs.fchmodSync");
    fdatasyncSync = /* @__PURE__ */ notImplemented("fs.fdatasyncSync");
    fstatSync = /* @__PURE__ */ notImplemented("fs.fstatSync");
    fsyncSync = /* @__PURE__ */ notImplemented("fs.fsyncSync");
    ftruncateSync = /* @__PURE__ */ notImplemented("fs.ftruncateSync");
    futimesSync = /* @__PURE__ */ notImplemented("fs.futimesSync");
    lchownSync = /* @__PURE__ */ notImplemented("fs.lchownSync");
    lchmodSync = /* @__PURE__ */ notImplemented("fs.lchmodSync");
    linkSync = /* @__PURE__ */ notImplemented("fs.linkSync");
    lutimesSync = /* @__PURE__ */ notImplemented("fs.lutimesSync");
    mkdirSync = /* @__PURE__ */ notImplemented("fs.mkdirSync");
    mkdtempSync = /* @__PURE__ */ notImplemented("fs.mkdtempSync");
    openSync = /* @__PURE__ */ notImplemented("fs.openSync");
    opendirSync = /* @__PURE__ */ notImplemented("fs.opendirSync");
    readdirSync = /* @__PURE__ */ notImplemented("fs.readdirSync");
    readSync = /* @__PURE__ */ notImplemented("fs.readSync");
    readvSync = /* @__PURE__ */ notImplemented("fs.readvSync");
    readFileSync = /* @__PURE__ */ notImplemented("fs.readFileSync");
    readlinkSync = /* @__PURE__ */ notImplemented("fs.readlinkSync");
    renameSync = /* @__PURE__ */ notImplemented("fs.renameSync");
    rmSync = /* @__PURE__ */ notImplemented("fs.rmSync");
    rmdirSync = /* @__PURE__ */ notImplemented("fs.rmdirSync");
    symlinkSync = /* @__PURE__ */ notImplemented("fs.symlinkSync");
    truncateSync = /* @__PURE__ */ notImplemented("fs.truncateSync");
    unlinkSync = /* @__PURE__ */ notImplemented("fs.unlinkSync");
    utimesSync = /* @__PURE__ */ notImplemented("fs.utimesSync");
    writeFileSync = /* @__PURE__ */ notImplemented("fs.writeFileSync");
    writeSync = /* @__PURE__ */ notImplemented("fs.writeSync");
    writevSync = /* @__PURE__ */ notImplemented("fs.writevSync");
    statfsSync = /* @__PURE__ */ notImplemented("fs.statfsSync");
    globSync = /* @__PURE__ */ notImplemented("fs.globSync");
  }
});

// ../../node_modules/unenv/dist/runtime/node/fs.mjs
var fs_default;
var init_fs2 = __esm({
  "../../node_modules/unenv/dist/runtime/node/fs.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_promises2();
    init_classes();
    init_fs();
    init_constants();
    init_constants();
    init_fs();
    init_classes();
    fs_default = {
      F_OK,
      R_OK,
      W_OK,
      X_OK,
      constants: constants_exports,
      promises: promises_default,
      Dir,
      Dirent,
      FileReadStream,
      FileWriteStream,
      ReadStream: ReadStream2,
      Stats,
      WriteStream: WriteStream2,
      _toUnixTimestamp,
      access: access2,
      accessSync,
      appendFile: appendFile2,
      appendFileSync,
      chmod: chmod2,
      chmodSync,
      chown: chown2,
      chownSync,
      close,
      closeSync,
      copyFile: copyFile2,
      copyFileSync,
      cp: cp2,
      cpSync,
      createReadStream,
      createWriteStream,
      exists,
      existsSync,
      fchmod,
      fchmodSync,
      fchown,
      fchownSync,
      fdatasync,
      fdatasyncSync,
      fstat,
      fstatSync,
      fsync,
      fsyncSync,
      ftruncate,
      ftruncateSync,
      futimes,
      futimesSync,
      glob: glob2,
      lchmod: lchmod2,
      globSync,
      lchmodSync,
      lchown: lchown2,
      lchownSync,
      link: link2,
      linkSync,
      lstat: lstat2,
      lstatSync,
      lutimes: lutimes2,
      lutimesSync,
      mkdir: mkdir2,
      mkdirSync,
      mkdtemp: mkdtemp2,
      mkdtempSync,
      open: open2,
      openAsBlob,
      openSync,
      opendir: opendir2,
      opendirSync,
      read,
      readFile: readFile2,
      readFileSync,
      readSync,
      readdir: readdir2,
      readdirSync,
      readlink: readlink2,
      readlinkSync,
      readv,
      readvSync,
      realpath: realpath2,
      realpathSync,
      rename: rename2,
      renameSync,
      rm: rm2,
      rmSync,
      rmdir: rmdir2,
      rmdirSync,
      stat: stat2,
      statSync,
      statfs: statfs2,
      statfsSync,
      symlink: symlink2,
      symlinkSync,
      truncate: truncate2,
      truncateSync,
      unlink: unlink2,
      unlinkSync,
      unwatchFile,
      utimes: utimes2,
      utimesSync,
      watch: watch2,
      watchFile,
      write,
      writeFile: writeFile2,
      writeFileSync,
      writeSync,
      writev,
      writevSync
    };
  }
});

// node-built-in-modules:fs
var require_fs = __commonJS({
  "node-built-in-modules:fs"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_fs2();
    module.exports = fs_default;
  }
});

// node-built-in-modules:path
import libDefault from "path";
var require_path = __commonJS({
  "node-built-in-modules:path"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault;
  }
});

// ../../node_modules/unenv/dist/runtime/node/internal/os/constants.mjs
var UV_UDP_REUSEADDR, dlopen2, errno, signals, priority;
var init_constants2 = __esm({
  "../../node_modules/unenv/dist/runtime/node/internal/os/constants.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    UV_UDP_REUSEADDR = 4;
    dlopen2 = {
      RTLD_LAZY: 1,
      RTLD_NOW: 2,
      RTLD_GLOBAL: 256,
      RTLD_LOCAL: 0,
      RTLD_DEEPBIND: 8
    };
    errno = {
      E2BIG: 7,
      EACCES: 13,
      EADDRINUSE: 98,
      EADDRNOTAVAIL: 99,
      EAFNOSUPPORT: 97,
      EAGAIN: 11,
      EALREADY: 114,
      EBADF: 9,
      EBADMSG: 74,
      EBUSY: 16,
      ECANCELED: 125,
      ECHILD: 10,
      ECONNABORTED: 103,
      ECONNREFUSED: 111,
      ECONNRESET: 104,
      EDEADLK: 35,
      EDESTADDRREQ: 89,
      EDOM: 33,
      EDQUOT: 122,
      EEXIST: 17,
      EFAULT: 14,
      EFBIG: 27,
      EHOSTUNREACH: 113,
      EIDRM: 43,
      EILSEQ: 84,
      EINPROGRESS: 115,
      EINTR: 4,
      EINVAL: 22,
      EIO: 5,
      EISCONN: 106,
      EISDIR: 21,
      ELOOP: 40,
      EMFILE: 24,
      EMLINK: 31,
      EMSGSIZE: 90,
      EMULTIHOP: 72,
      ENAMETOOLONG: 36,
      ENETDOWN: 100,
      ENETRESET: 102,
      ENETUNREACH: 101,
      ENFILE: 23,
      ENOBUFS: 105,
      ENODATA: 61,
      ENODEV: 19,
      ENOENT: 2,
      ENOEXEC: 8,
      ENOLCK: 37,
      ENOLINK: 67,
      ENOMEM: 12,
      ENOMSG: 42,
      ENOPROTOOPT: 92,
      ENOSPC: 28,
      ENOSR: 63,
      ENOSTR: 60,
      ENOSYS: 38,
      ENOTCONN: 107,
      ENOTDIR: 20,
      ENOTEMPTY: 39,
      ENOTSOCK: 88,
      ENOTSUP: 95,
      ENOTTY: 25,
      ENXIO: 6,
      EOPNOTSUPP: 95,
      EOVERFLOW: 75,
      EPERM: 1,
      EPIPE: 32,
      EPROTO: 71,
      EPROTONOSUPPORT: 93,
      EPROTOTYPE: 91,
      ERANGE: 34,
      EROFS: 30,
      ESPIPE: 29,
      ESRCH: 3,
      ESTALE: 116,
      ETIME: 62,
      ETIMEDOUT: 110,
      ETXTBSY: 26,
      EWOULDBLOCK: 11,
      EXDEV: 18
    };
    signals = {
      SIGHUP: 1,
      SIGINT: 2,
      SIGQUIT: 3,
      SIGILL: 4,
      SIGTRAP: 5,
      SIGABRT: 6,
      SIGIOT: 6,
      SIGBUS: 7,
      SIGFPE: 8,
      SIGKILL: 9,
      SIGUSR1: 10,
      SIGSEGV: 11,
      SIGUSR2: 12,
      SIGPIPE: 13,
      SIGALRM: 14,
      SIGTERM: 15,
      SIGCHLD: 17,
      SIGSTKFLT: 16,
      SIGCONT: 18,
      SIGSTOP: 19,
      SIGTSTP: 20,
      SIGTTIN: 21,
      SIGTTOU: 22,
      SIGURG: 23,
      SIGXCPU: 24,
      SIGXFSZ: 25,
      SIGVTALRM: 26,
      SIGPROF: 27,
      SIGWINCH: 28,
      SIGIO: 29,
      SIGPOLL: 29,
      SIGPWR: 30,
      SIGSYS: 31
    };
    priority = {
      PRIORITY_LOW: 19,
      PRIORITY_BELOW_NORMAL: 10,
      PRIORITY_NORMAL: 0,
      PRIORITY_ABOVE_NORMAL: -7,
      PRIORITY_HIGH: -14,
      PRIORITY_HIGHEST: -20
    };
  }
});

// ../../node_modules/unenv/dist/runtime/node/os.mjs
var constants, NUM_CPUS, availableParallelism, arch2, machine, endianness, cpus, getPriority, setPriority, homedir, tmpdir, devNull, freemem, totalmem, loadavg, uptime2, hostname, networkInterfaces, platform2, type, release3, version2, userInfo, EOL, os_default;
var init_os = __esm({
  "../../node_modules/unenv/dist/runtime/node/os.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    init_constants2();
    constants = {
      UV_UDP_REUSEADDR,
      dlopen: dlopen2,
      errno,
      signals,
      priority
    };
    NUM_CPUS = 8;
    availableParallelism = /* @__PURE__ */ __name(() => NUM_CPUS, "availableParallelism");
    arch2 = /* @__PURE__ */ __name(() => "", "arch");
    machine = /* @__PURE__ */ __name(() => "", "machine");
    endianness = /* @__PURE__ */ __name(() => "LE", "endianness");
    cpus = /* @__PURE__ */ __name(() => {
      const info3 = {
        model: "",
        speed: 0,
        times: {
          user: 0,
          nice: 0,
          sys: 0,
          idle: 0,
          irq: 0
        }
      };
      return Array.from({ length: NUM_CPUS }, () => info3);
    }, "cpus");
    getPriority = /* @__PURE__ */ __name(() => 0, "getPriority");
    setPriority = /* @__PURE__ */ notImplemented("os.setPriority");
    homedir = /* @__PURE__ */ __name(() => "/", "homedir");
    tmpdir = /* @__PURE__ */ __name(() => "/tmp", "tmpdir");
    devNull = "/dev/null";
    freemem = /* @__PURE__ */ __name(() => 0, "freemem");
    totalmem = /* @__PURE__ */ __name(() => 0, "totalmem");
    loadavg = /* @__PURE__ */ __name(() => [
      0,
      0,
      0
    ], "loadavg");
    uptime2 = /* @__PURE__ */ __name(() => 0, "uptime");
    hostname = /* @__PURE__ */ __name(() => "", "hostname");
    networkInterfaces = /* @__PURE__ */ __name(() => {
      return { lo0: [
        {
          address: "127.0.0.1",
          netmask: "255.0.0.0",
          family: "IPv4",
          mac: "00:00:00:00:00:00",
          internal: true,
          cidr: "127.0.0.1/8"
        },
        {
          address: "::1",
          netmask: "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
          family: "IPv6",
          mac: "00:00:00:00:00:00",
          internal: true,
          cidr: "::1/128",
          scopeid: 0
        },
        {
          address: "fe80::1",
          netmask: "ffff:ffff:ffff:ffff::",
          family: "IPv6",
          mac: "00:00:00:00:00:00",
          internal: true,
          cidr: "fe80::1/64",
          scopeid: 1
        }
      ] };
    }, "networkInterfaces");
    platform2 = /* @__PURE__ */ __name(() => "linux", "platform");
    type = /* @__PURE__ */ __name(() => "Linux", "type");
    release3 = /* @__PURE__ */ __name(() => "", "release");
    version2 = /* @__PURE__ */ __name(() => "", "version");
    userInfo = /* @__PURE__ */ __name((opts) => {
      const encode3 = /* @__PURE__ */ __name((str) => {
        if (opts?.encoding) {
          const buff = Buffer.from(str);
          return opts.encoding === "buffer" ? buff : buff.toString(opts.encoding);
        }
        return str;
      }, "encode");
      return {
        gid: 1e3,
        uid: 1e3,
        homedir: encode3("/"),
        shell: encode3("/bin/sh"),
        username: encode3("root")
      };
    }, "userInfo");
    EOL = "\n";
    os_default = {
      arch: arch2,
      availableParallelism,
      constants,
      cpus,
      EOL,
      endianness,
      devNull,
      freemem,
      getPriority,
      homedir,
      hostname,
      loadavg,
      machine,
      networkInterfaces,
      platform: platform2,
      release: release3,
      setPriority,
      tmpdir,
      totalmem,
      type,
      uptime: uptime2,
      userInfo,
      version: version2
    };
  }
});

// node-built-in-modules:os
var require_os = __commonJS({
  "node-built-in-modules:os"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_os();
    module.exports = os_default;
  }
});

// node-built-in-modules:url
import libDefault2 from "url";
var require_url = __commonJS({
  "node-built-in-modules:url"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault2;
  }
});

// ../../node_modules/dotenv/dist/index.cjs
var require_dist = __commonJS({
  "../../node_modules/dotenv/dist/index.cjs"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var j = /* @__PURE__ */ __name((e, n) => () => {
      try {
        return n || e((n = { exports: {} }).exports, n), n.exports;
      } catch (t) {
        throw n = 0, t;
      }
    }, "j");
    var R = j((Z, N) => {
      function T2(e) {
        return typeof e == "string" ? !["false", "0", "no", "off", ""].includes(e.toLowerCase()) : !!e;
      }
      __name(T2, "T");
      function U(e = process.env) {
        let n = {};
        for (let t of ["ENCODING", "PATH", "QUIET", "DEBUG", "OVERRIDE", "FAST"]) {
          let r = e[`DOTENV_${t}`] != null ? e[`DOTENV_${t}`] : e[`DOTENV_CONFIG_${t}`];
          r != null && (n[t.toLowerCase()] = t === "ENCODING" || t === "PATH" ? r : T2(r));
        }
        return n;
      }
      __name(U, "U");
      N.exports = { parseBoolean: T2, optionsFromEnv: U };
    });
    var P = j((ee, b) => {
      var F = require_fs(), _ = require_path(), B = require_os(), { URL: L, fileURLToPath: Q } = require_url(), { parseBoolean: $, optionsFromEnv: I } = R(), G = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg, y = new Uint8Array(256);
      for (let e = 48; e <= 57; e++) y[e] = 1;
      for (let e = 65; e <= 90; e++) y[e] = 1;
      for (let e = 97; e <= 122; e++) y[e] = 1;
      y[45] = 1;
      y[46] = 1;
      y[95] = 1;
      function H(e) {
        let n = {}, t = e.toString();
        t = t.replace(/\r\n?/mg, `
`);
        let r;
        for (; (r = G.exec(t)) != null; ) {
          let o = r[1], i = r[2] || "";
          i = i.trim();
          let c = i[0];
          i = i.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), c === '"' && (i = i.replace(/\\n/g, `
`), i = i.replace(/\\r/g, "\r")), n[o] = i;
        }
        return n;
      }
      __name(H, "H");
      function g(e) {
        return e <= 32 ? e === 32 || e >= 9 && e <= 13 : e >= 160 && (e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279);
      }
      __name(g, "g");
      function O(e) {
        return e === 10 || e === 8232 || e === 8233;
      }
      __name(O, "O");
      function V(e) {
        let n = {}, t = typeof e == "string" ? e : e.toString();
        t.indexOf("\r") !== -1 && (t = t.replace(/\r\n?/g, `
`));
        let r = t.length, o = 0;
        for (; o < r; ) {
          let i = t.charCodeAt(o);
          for (; o < r && g(i); ) o++, i = t.charCodeAt(o);
          if (o >= r) break;
          if (i === 35) {
            for (; o < r && !O(t.charCodeAt(o)); ) o++;
            continue;
          }
          let c = -1;
          if (i === 101 && o + 6 < r && t.charCodeAt(o + 1) === 120 && t.charCodeAt(o + 2) === 112 && t.charCodeAt(o + 3) === 111 && t.charCodeAt(o + 4) === 114 && t.charCodeAt(o + 5) === 116) {
            let u = t.charCodeAt(o + 6);
            if (g(u)) {
              let s = o + 7;
              for (; s < r && g(t.charCodeAt(s)); ) s++;
              y[t.charCodeAt(s)] && (c = o + 6, o = s);
            } else i = t.charCodeAt(o);
          }
          let E = o, p = 0;
          for (; o < r && (p = t.charCodeAt(o), y[p]); ) o++;
          if (o === E) {
            for (; o < r && !O(t.charCodeAt(o)); ) o++;
            continue;
          }
          let k = t.slice(E, o), D = o;
          if (o >= r && (p = 0), g(p)) do
            o++, p = o < r ? t.charCodeAt(o) : 0;
          while (g(p));
          if (p === 61) o++;
          else if (p === 58 && o === D && o + 1 < r && g(t.charCodeAt(o + 1))) o += 2;
          else {
            for (o = c === -1 ? D : c; o < r && !O(t.charCodeAt(o)); ) o++;
            continue;
          }
          let d = o, l = o;
          for (; l < r && g(t.charCodeAt(l)); ) l++;
          let C = t.charCodeAt(l), a, q = false;
          if (C === 39 || C === 34 || C === 96) {
            let u = t[l], s = t.indexOf(u, l + 1), f3 = -1, h = -1;
            for (; s !== -1; ) {
              let x = t.charCodeAt(s - 1) === 92, w = s + 1;
              for (; w < r && !O(t.charCodeAt(w)) && g(t.charCodeAt(w)); ) w++;
              if ((w === r || O(t.charCodeAt(w)) || t.charCodeAt(w) === 35) && (f3 = s, h = w), !x) break;
              s = t.indexOf(u, s + 1);
            }
            if (f3 !== -1) {
              if (a = t.slice(l + 1, f3), o = h, t.charCodeAt(o) === 35) for (; o < r && !O(t.charCodeAt(o)); ) o++;
              q = true;
            }
          }
          if (!q) {
            let u = t.indexOf(`
`, d);
            u === -1 && (u = r);
            let s;
            if (r < 4096) s = t.indexOf("#", d), (s === -1 || s > u) && (s = u);
            else for (s = d; s < u && t.charCodeAt(s) !== 35; ) s++;
            let f3 = d, h = s;
            for (; f3 < h && g(t.charCodeAt(f3)); ) f3++;
            for (; h > f3 && g(t.charCodeAt(h - 1)); ) h--;
            let x = t.charCodeAt(f3);
            if (a = t.slice(f3, h), a.includes("\u2028") || a.includes("\u2029") ? a = a.replace(/^(['"`])([\s\S]*)\1$/mg, "$2") : h - f3 >= 2 && (x === 39 || x === 34 || x === 96) && t.charCodeAt(h - 1) === x && (a = t.slice(f3 + 1, h - 1)), o = s, s < u) for (; o < r && !O(t.charCodeAt(o)); ) o++;
          }
          C === 34 && (q || l < o) && a.indexOf("\\") !== -1 && (a = a.replace(/\\n/g, `
`).replace(/\\r/g, "\r")), n[k] = a;
        }
        return n;
      }
      __name(V, "V");
      function J(e, n) {
        return n && $(n.fast) ? V(e) : H(e);
      }
      __name(J, "J");
      function v(e) {
        console.log(`\u2506 ${e}`);
      }
      __name(v, "v");
      function W(e) {
        console.error(`\u25C7 ${e}`);
      }
      __name(W, "W");
      function S(e) {
        return e[0] === "~" ? _.join(B.homedir(), e.slice(1)) : e;
      }
      __name(S, "S");
      function K(e = {}) {
        let n = { ...e };
        for (let t of Object.keys(n)) n[t] === void 0 && delete n[t];
        return { ...I(), ...n };
      }
      __name(K, "K");
      function M(e) {
        e = K(e);
        let n = _.resolve(process.cwd(), ".env"), t = "utf8", r = process.env;
        e && e.processEnv != null && (r = e.processEnv);
        let o = $(e && e.debug);
        e && e.encoding ? t = e.encoding : o && v("no encoding is specified (UTF-8 is used by default)");
        let i = [n];
        if (e && e.path) if (!Array.isArray(e.path)) i = [S(e.path)];
        else {
          i = [];
          for (let d of e.path) i.push(S(d));
        }
        let c, E = {}, p = { fast: e.fast };
        for (let d of i) try {
          let l = A.parse(F.readFileSync(d, { encoding: t }), p);
          A.populate(E, l, e);
        } catch (l) {
          o && v(`failed to load ${d} ${l.message}`), c = l;
        }
        let k = A.populate(r, E, e), D = $(Object.prototype.hasOwnProperty.call(e, "quiet") ? e.quiet : I(r).quiet);
        if (o || !D) {
          let d = Object.keys(k).length, l = [];
          for (let C of i) try {
            let a = _.relative(process.cwd(), C instanceof L ? Q(C) : C);
            l.push(a);
          } catch (a) {
            o && v(`failed to load ${C} ${a.message}`), c = a;
          }
          W(`injected env (${d}) from ${l.join(",")}`);
        }
        return c ? { parsed: E, error: c } : { parsed: E };
      }
      __name(M, "M");
      function Y(e) {
        return A.configDotenv(e);
      }
      __name(Y, "Y");
      function z(e, n, t = {}) {
        let r = $(t && t.debug), o = $(t && t.override), i = {};
        if (e === null || typeof e != "object" || n === null || typeof n != "object") {
          let c = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
          throw c.code = "OBJECT_REQUIRED", c;
        }
        for (let c of Object.keys(n)) Object.prototype.hasOwnProperty.call(e, c) ? (o === true && (e[c] = n[c], i[c] = n[c]), r && v(o === true ? `"${c}" is already defined and WAS overwritten` : `"${c}" is already defined and was NOT overwritten`)) : (e[c] = n[c], i[c] = n[c]);
        return i;
      }
      __name(z, "z");
      var A = { configDotenv: M, config: Y, parse: J, populate: z };
      b.exports.configDotenv = A.configDotenv;
      b.exports.config = A.config;
      b.exports.parse = A.parse;
      b.exports.populate = A.populate;
      b.exports = A;
    });
    var m = P();
    module.exports = m;
    module.exports.config = m.config;
    module.exports.configDotenv = m.configDotenv;
    module.exports.parse = m.parse;
    module.exports.populate = m.populate;
  }
});

// .wrangler/tmp/bundle-xhTeSL/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-xhTeSL/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/hono/dist/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/hono/dist/context.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/hono/dist/request.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/hono/dist/http-exception.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HTTPException = class extends Error {
  static {
    __name(this, "HTTPException");
  }
  res;
  status;
  /**
  * Creates an instance of `HTTPException`.
  * @param status - HTTP status code for the exception. Defaults to 500.
  * @param options - Additional options for the exception.
  */
  constructor(status = 500, options) {
    super(options?.message, { cause: options?.cause });
    this.res = options?.res;
    this.status = status;
  }
  /**
  * Returns the response object associated with the exception.
  * If a response object is not provided, a new response is created with the error message and status code.
  * @returns The response object.
  */
  getResponse() {
    if (this.res) return new Response(this.res.body, {
      status: this.status,
      headers: this.res.headers
    });
    return new Response(this.message, { status: this.status });
  }
};

// ../../node_modules/hono/dist/request/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

// ../../node_modules/hono/dist/utils/body.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/hono/dist/utils/buffer.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/hono/dist/utils/crypto.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/hono/dist/utils/buffer.js
var bufferToFormData = /* @__PURE__ */ __name((arrayBuffer, contentType) => {
  return new Response(arrayBuffer, { headers: { "Content-Type": contentType.replace(/^[^;]+/, (mediaType2) => mediaType2.toLowerCase()) } }).formData();
}, "bufferToFormData");

// ../../node_modules/hono/dist/utils/body.js
var MAX_NESTED_OBJECTS = 1e4;
var isRawRequest = /* @__PURE__ */ __name((request) => "headers" in request, "isRawRequest");
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const mediaType2 = (isRawRequest(request) ? request.headers : request.raw.headers).get("Content-Type")?.split(";")[0].trim().toLowerCase();
  if (mediaType2 === "multipart/form-data" || mediaType2 === "application/x-www-form-urlencoded") return parseFormData(request, {
    all,
    dot
  });
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  if (!isRawRequest(request) && request.bodyCache.formData) return convertFormDataToBodyData(await request.bodyCache.formData, options);
  const headers = isRawRequest(request) ? request.headers : request.raw.headers;
  const arrayBuffer = await request.arrayBuffer();
  const formDataPromise = bufferToFormData(arrayBuffer, headers.get("Content-Type") || "");
  if (!isRawRequest(request)) request.bodyCache.formData = formDataPromise;
  const formData = await formDataPromise;
  if (formData) return convertFormDataToBodyData(formData, options);
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  const nestingState = { count: 0 };
  formData.forEach((value, key) => {
    if (!(options.all || key.endsWith("[]"))) form[key] = value;
    else handleParsingAllValues(form, key, value);
  });
  if (options.dot) Object.entries(form).forEach(([key, value]) => {
    if (key.includes(".")) {
      handleParsingNestedValues(form, key, value, nestingState);
      delete form[key];
    }
  });
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) form[key].push(value);
    else form[key] = [form[key], value];
  } else if (!key.endsWith("[]")) form[key] = value;
  else form[key] = [value];
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value, state) => {
  if (/(?:^|\.)(?:__proto__|constructor\.prototype)\./.test(key)) return;
  let nestedForm = form;
  const keys = key.split(".", 34);
  if (keys.length > 33) throwNestingLimitExceeded();
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) nestedForm[key2] = value;
    else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        if (state.count++ >= MAX_NESTED_OBJECTS) throwNestingLimitExceeded();
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");
var throwNestingLimitExceeded = /* @__PURE__ */ __name(() => {
  throw new Error("Nesting limit exceeded");
}, "throwNestingLimitExceeded");

// ../../node_modules/hono/dist/utils/url.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") paths.shift();
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath2) => {
  const { groups, path } = extractGroupsFromPath(routePath2);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match2, index) => {
    const mark = `@${index}`;
    groups.push([mark, match2]);
    return mark;
  });
  return {
    groups,
    path
  };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) if (paths[j].includes(mark)) {
      paths[j] = paths[j].replace(mark, groups[i][1]);
      break;
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label, next) => {
  if (label === "*") return "*";
  const match2 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match2) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match2[2]) patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [
        cacheKey,
        match2[1],
        new RegExp(`^${match2[2]}(?=/${next})`)
      ] : [
        label,
        match2[1],
        new RegExp(`^${match2[2]}$`)
      ];
      else patternCache[cacheKey] = [
        label,
        match2[1],
        true
      ];
    }
    return patternCache[cacheKey];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match2) => {
      try {
        return decoder(match2);
      } catch {
        return match2;
      }
    });
  }
}, "tryDecode");
var decodeURIWithPreservedPercent = /* @__PURE__ */ __name((value) => decodeURI(value.includes("%25") ? value.replace(/%25/g, "%2525") : value), "decodeURIWithPreservedPercent");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", url.indexOf(":") + 4);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const hashIndex = url.indexOf("#", i);
      const end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex);
      const path = url.slice(start, end);
      const decoded = tryDecode(path, decodeURIWithPreservedPercent);
      if (/%(?![0-9A-Fa-f]{2})/.test(path)) {
        const rewritten = new URL("http://localhost");
        rewritten.pathname = decoded.replace(/[\\\t\n\r]/g, encodeURIComponent);
        if (tryDecode(rewritten.pathname, decodeURIWithPreservedPercent) !== decoded) return tryDecode(path.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"), decodeURIWithPreservedPercent);
      }
      return decoded;
    } else if (charCode === 63 || charCode === 35) break;
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((base, sub, ...rest) => {
  if (rest.length) sub = mergePath(sub, ...rest);
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) return null;
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) basePath += "/" + segment;
    else if (/\:/.test(segment)) {
      if (segment.charCodeAt(segment.length - 1) === 63) {
        if (results.length === 0 && basePath === "") results.push("/");
        else results.push(basePath);
        const optionalSegment = segment.slice(0, -1);
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else basePath += "/" + segment;
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => str.indexOf("%") !== -1 ? tryDecode(str, decodeURIComponent_) : str, "tryDecodeURIComponent");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (value.indexOf("+") !== -1) value = value.replace(/\+/g, " ");
  return tryDecodeURIComponent(value);
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  const hashIndex = url.indexOf("#", 8);
  if (hashIndex !== -1) url = url.slice(0, hashIndex);
  let encoded;
  if (!multiple && key && !/[%+&=]/.test(key)) {
    const queryIndex = url.indexOf("?", 8);
    let keyIndex2 = queryIndex;
    if (keyIndex2 === -1) return;
    if (!url.startsWith(key, keyIndex2 + 1)) keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61 || trailingKeyCode === 38 || isNaN(trailingKeyCode)) {
        if (keyIndex2 > queryIndex && /(?:^|&)[^=&]*[%+]/.test(url.slice(queryIndex + 1, keyIndex2))) break;
        if (trailingKeyCode === 61) {
          const valueIndex = keyIndex2 + key.length + 2;
          const endIndex = url.indexOf("&", valueIndex);
          return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
        }
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) return;
  }
  const results = /* @__PURE__ */ Object.create(null);
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) valueIndex = -1;
    let name = url.slice(keyIndex + 1, valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex);
    if (encoded) name = _decodeURI(name);
    keyIndex = nextKeyIndex;
    if (name === "") continue;
    let value;
    if (valueIndex === -1) value = "";
    else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) value = _decodeURI(value);
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) results[name] = [];
      results[name].push(value);
    } else results[name] ??= value;
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// ../../node_modules/hono/dist/request.js
var HonoRequest = class {
  static {
    __name(this, "HonoRequest");
  }
  /**
  * `.raw` can get the raw Request object.
  *
  * @see {@link https://hono.dev/docs/api/request#raw}
  *
  * @example
  * ```ts
  * // For Cloudflare Workers
  * app.post('/', async (c) => {
  *   const metadata = c.req.raw.cf?.hostMetadata?
  *   ...
  * })
  * ```
  */
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  /**
  * `.path` can get the pathname of the request.
  *
  * @see {@link https://hono.dev/docs/api/request#path}
  *
  * @example
  * ```ts
  * app.get('/about/me', (c) => {
  *   const pathname = c.req.path // `/about/me`
  * })
  * ```
  */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex]?.[1][key];
    const param = this.#getParamValue(paramKey);
    return param && tryDecodeURIComponent(param);
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex]?.[1] ?? {});
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value !== void 0) decoded[key] = tryDecodeURIComponent(value);
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) return this.raw.headers.get(name) ?? void 0;
    const headerData = /* @__PURE__ */ Object.create(null);
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return parseBody(this, options);
  }
  #cachedBody = /* @__PURE__ */ __name((key) => {
    const { bodyCache, raw: raw3 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) return cachedBody;
    for (const anyCachedKey in bodyCache) return bodyCache[anyCachedKey].then((body) => {
      if (anyCachedKey === "json") body = JSON.stringify(body);
      const contentType = anyCachedKey === "formData" ? void 0 : raw3.headers.get("content-type");
      return new Response(body, { headers: contentType ? { "Content-Type": contentType } : void 0 })[key]();
    });
    return bodyCache[key] = raw3[key]();
  }, "#cachedBody");
  /**
  * `.json()` can parse Request body of type `application/json`
  *
  * @see {@link https://hono.dev/docs/api/request#json}
  *
  * @example
  * ```ts
  * app.post('/entry', async (c) => {
  *   const body = await c.req.json()
  * })
  * ```
  */
  json() {
    return this.#cachedBody("text").then((text2) => JSON.parse(text2));
  }
  /**
  * `.text()` can parse Request body of type `text/plain`
  *
  * @see {@link https://hono.dev/docs/api/request#text}
  *
  * @example
  * ```ts
  * app.post('/entry', async (c) => {
  *   const body = await c.req.text()
  * })
  * ```
  */
  text() {
    return this.#cachedBody("text");
  }
  /**
  * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
  *
  * @see {@link https://hono.dev/docs/api/request#arraybuffer}
  *
  * @example
  * ```ts
  * app.post('/entry', async (c) => {
  *   const body = await c.req.arrayBuffer()
  * })
  * ```
  */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
  * `.bytes()` parses the request body as a `Uint8Array`.
  *
  * @see {@link https://hono.dev/docs/api/request#bytes}
  *
  * @example
  * ```ts
  * app.post('/entry', async (c) => {
  *   const body = await c.req.bytes()
  * })
  * ```
  */
  bytes() {
    return this.#cachedBody("arrayBuffer").then((buffer) => new Uint8Array(buffer));
  }
  /**
  * Parses the request body as a `Blob`.
  * @example
  * ```ts
  * app.post('/entry', async (c) => {
  *   const body = await c.req.blob();
  * });
  * ```
  * @see https://hono.dev/docs/api/request#blob
  */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
  * Parses the request body as `FormData`.
  * @example
  * ```ts
  * app.post('/entry', async (c) => {
  *   const body = await c.req.formData();
  * });
  * ```
  * @see https://hono.dev/docs/api/request#formdata
  */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
  * Adds validated data to the request.
  *
  * @param target - The target of the validation.
  * @param data - The validated data to add.
  */
  addValidatedData(target, data) {
    (this.#validatedData ??= {})[target] = data;
  }
  valid(target) {
    return this.#validatedData?.[target];
  }
  /**
  * `.url` can get the request url strings.
  *
  * @see {@link https://hono.dev/docs/api/request#url}
  *
  * @example
  * ```ts
  * app.get('/about/me', (c) => {
  *   const url = c.req.url // `http://localhost:8787/about/me`
  *   ...
  * })
  * ```
  */
  get url() {
    return this.raw.url;
  }
  /**
  * `.method` can get the method name of the request.
  *
  * @see {@link https://hono.dev/docs/api/request#method}
  *
  * @example
  * ```ts
  * app.get('/about/me', (c) => {
  *   const method = c.req.method // `GET`
  * })
  * ```
  */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
  * `.matchedRoutes` can return a matched route in the handler
  *
  * @deprecated
  *
  * Use matchedRoutes helper defined in "hono/route" instead.
  *
  * @see {@link https://hono.dev/docs/api/request#matchedroutes}
  *
  * @example
  * ```ts
  * app.use('*', async function logger(c, next) {
  *   await next()
  *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
  *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
  *     console.log(
  *       method,
  *       ' ',
  *       path,
  *       ' '.repeat(Math.max(10 - path.length, 0)),
  *       name,
  *       i === c.req.routeIndex ? '<- respond from here' : ''
  *     )
  *   })
  * })
  * ```
  */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  /**
  * `.routePath` can retrieve the path registered within the handler
  *
  * @deprecated
  *
  * Use routePath helper defined in "hono/route" instead.
  *
  * @see {@link https://hono.dev/docs/api/request#routepath}
  *
  * @example
  * ```ts
  * app.get('/posts/:id', (c) => {
  *   return c.json({ path: c.req.routePath })
  * })
  * ```
  */
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// ../../node_modules/hono/dist/utils/html.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context2, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) str = str.toString();
    if (str instanceof Promise) str = await str;
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) return Promise.resolve(str);
  if (buffer) buffer[0] += str;
  else buffer = [str];
  const resStr = Promise.all(callbacks.map((c) => c({
    phase,
    buffer,
    context: context2
  }))).then((res) => Promise.all(res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context2, buffer))).then(() => buffer[0]));
  if (preserveCallbacks) return raw(await resStr, callbacks);
  else return resStr;
}, "resolveCallback");

// ../../node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = /* @__PURE__ */ __name((contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
}, "setDefaultContentType");
var createResponseInstance = /* @__PURE__ */ __name((body, init) => new Response(body, init), "createResponseInstance");
var Context = class {
  static {
    __name(this, "Context");
  }
  #rawRequest;
  #req;
  /**
  * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
  *
  * @see {@link https://hono.dev/docs/api/context#env}
  *
  * @example
  * ```ts
  * // Environment object for Cloudflare Workers
  * app.get('*', async c => {
  *   const counter = c.env.COUNTER
  * })
  * ```
  */
  env = {};
  #var;
  finalized = false;
  /**
  * `.error` can get the error object from the middleware if the Handler throws an error.
  *
  * @see {@link https://hono.dev/docs/api/context#error}
  *
  * @example
  * ```ts
  * app.use('*', async (c, next) => {
  *   await next()
  *   if (c.error) {
  *     // do something...
  *   }
  * })
  * ```
  */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
  * Creates an instance of the Context class.
  *
  * @param req - The Request object.
  * @param options - Optional configuration options for the context.
  */
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  /**
  * `.req` is the instance of {@link HonoRequest}.
  */
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  /**
  * @see {@link https://hono.dev/docs/api/context#event}
  * The FetchEvent associated with the current request.
  *
  * @throws Will throw an error if the context does not have a FetchEvent.
  */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) return this.#executionCtx;
    else throw Error("This context has no FetchEvent");
  }
  /**
  * @see {@link https://hono.dev/docs/api/context#executionctx}
  * The ExecutionContext associated with the current request.
  *
  * @throws Will throw an error if the context does not have an ExecutionContext.
  */
  get executionCtx() {
    if (this.#executionCtx) return this.#executionCtx;
    else throw Error("This context has no ExecutionContext");
  }
  /**
  * @see {@link https://hono.dev/docs/api/context#res}
  * The Response object for the current request.
  */
  get res() {
    return this.#res ||= createResponseInstance(null, { headers: this.#preparedHeaders ??= new Headers() });
  }
  /**
  * Sets the Response object for the current request.
  *
  * @param _res - The Response object to set.
  */
  set res(_res) {
    if (this.#res && _res) {
      _res = createResponseInstance(_res.body, _res);
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "content-type") continue;
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) _res.headers.append("set-cookie", cookie);
        } else _res.headers.set(k, v);
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  /**
  * `.render()` can create a response within a layout.
  *
  * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
  *
  * @example
  * ```ts
  * app.get('/', (c) => {
  *   return c.render('Hello!')
  * })
  * ```
  */
  render = /* @__PURE__ */ __name((...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  }, "render");
  /**
  * Sets the layout for the response.
  *
  * @param layout - The layout to set.
  * @returns The layout function.
  */
  setLayout = /* @__PURE__ */ __name((layout) => this.#layout = layout, "setLayout");
  /**
  * Gets the current layout for the response.
  *
  * @returns The current layout function.
  */
  getLayout = /* @__PURE__ */ __name(() => this.#layout, "getLayout");
  /**
  * `.setRenderer()` can set the layout in the custom middleware.
  *
  * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
  *
  * @example
  * ```tsx
  * app.use('*', async (c, next) => {
  *   c.setRenderer((content) => {
  *     return c.html(
  *       <html>
  *         <body>
  *           <p>{content}</p>
  *         </body>
  *       </html>
  *     )
  *   })
  *   await next()
  * })
  * ```
  */
  setRenderer = /* @__PURE__ */ __name((renderer) => {
    this.#renderer = renderer;
  }, "setRenderer");
  /**
  * `.header()` can set headers.
  *
  * @see {@link https://hono.dev/docs/api/context#header}
  *
  * @example
  * ```ts
  * app.get('/welcome', (c) => {
  *   // Set headers
  *   c.header('X-Message', 'Hello!')
  *   c.header('Content-Type', 'text/plain')
  *
  *   // Append multiple headers using the append option (e.g. Vary)
  *   c.header('Vary', 'Accept-Encoding', { append: true })
  *   c.header('Vary', 'User-Agent', { append: true })
  *
  *   return c.body('Thank you for coming')
  * })
  * ```
  */
  header = /* @__PURE__ */ __name((name, value, options) => {
    if (this.finalized && !this.#res.bodyUsed) this.#res = createResponseInstance(this.#res.body, this.#res);
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) headers.delete(name);
    else if (options?.append) headers.append(name, value);
    else headers.set(name, value);
  }, "header");
  status = /* @__PURE__ */ __name((status) => {
    this.#status = status;
  }, "status");
  /**
  * `.set()` can set the value specified by the key.
  *
  * @see {@link https://hono.dev/docs/api/context#set-get}
  *
  * @example
  * ```ts
  * app.use('*', async (c, next) => {
  *   c.set('message', 'Hono is hot!!')
  *   await next()
  * })
  * ```
  */
  set = /* @__PURE__ */ __name((key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  }, "set");
  /**
  * `.get()` can use the value specified by the key.
  *
  * @see {@link https://hono.dev/docs/api/context#set-get}
  *
  * @example
  * ```ts
  * app.get('/', (c) => {
  *   const message = c.get('message')
  *   return c.text(`The message is "${message}"`)
  * })
  * ```
  */
  get = /* @__PURE__ */ __name((key) => {
    return this.#var ? this.#var.get(key) : void 0;
  }, "get");
  /**
  * `.var` can access the value of a variable.
  *
  * @see {@link https://hono.dev/docs/api/context#var}
  *
  * @example
  * ```ts
  * const result = c.var.client.oneMethod()
  * ```
  */
  get var() {
    if (!this.#var) return {};
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    let responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders;
    if (typeof arg === "object" && arg.headers) {
      responseHeaders ??= new Headers();
      for (const [key, value] of new Headers(arg.headers)) if (key === "set-cookie") responseHeaders.append(key, value);
      else responseHeaders.set(key, value);
    }
    if (headers) {
      if (!responseHeaders) {
        let count3 = 0;
        for (const k in headers) if (++count3 > 1 || typeof headers[k] !== "string") {
          responseHeaders = new Headers();
          break;
        }
      }
      if (responseHeaders) for (const k in headers) {
        const v = headers[k];
        if (typeof v === "string") responseHeaders.set(k, v);
        else {
          responseHeaders.delete(k);
          for (const v2 of v) responseHeaders.append(k, v2);
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return createResponseInstance(data, {
      status,
      headers: responseHeaders ?? headers
    });
  }
  newResponse = /* @__PURE__ */ __name((...args) => this.#newResponse(...args), "newResponse");
  /**
  * `.body()` can return the HTTP response.
  * You can set headers with `.header()` and set HTTP status code with `.status`.
  * This can also be set in `.text()`, `.json()` and so on.
  *
  * @see {@link https://hono.dev/docs/api/context#body}
  *
  * @example
  * ```ts
  * app.get('/welcome', (c) => {
  *   // Set headers
  *   c.header('X-Message', 'Hello!')
  *   c.header('Content-Type', 'text/plain')
  *   // Set HTTP status code
  *   c.status(201)
  *
  *   // Return the response body
  *   return c.body('Thank you for coming')
  * })
  * ```
  */
  body = /* @__PURE__ */ __name((data, arg, headers) => this.#newResponse(data, arg, headers), "body");
  /**
  * `.text()` can render text as `Content-Type:text/plain`.
  *
  * @see {@link https://hono.dev/docs/api/context#text}
  *
  * @example
  * ```ts
  * app.get('/say', (c) => {
  *   return c.text('Hello!')
  * })
  * ```
  */
  text = /* @__PURE__ */ __name((text2, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text2) : this.#newResponse(text2, arg, setDefaultContentType(TEXT_PLAIN, headers));
  }, "text");
  /**
  * `.json()` can render JSON as `Content-Type:application/json`.
  *
  * @see {@link https://hono.dev/docs/api/context#json}
  *
  * @example
  * ```ts
  * app.get('/api', (c) => {
  *   return c.json({ message: 'Hello!' })
  * })
  * ```
  */
  json = /* @__PURE__ */ __name((object, arg, headers) => {
    return this.#newResponse(JSON.stringify(object), arg, setDefaultContentType("application/json", headers));
  }, "json");
  html = /* @__PURE__ */ __name((html, arg, headers) => {
    const res = /* @__PURE__ */ __name((html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers)), "res");
    return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
  }, "html");
  /**
  * `.redirect()` can Redirect, default status code is 302.
  *
  * @see {@link https://hono.dev/docs/api/context#redirect}
  *
  * @example
  * ```ts
  * app.get('/redirect', (c) => {
  *   return c.redirect('/')
  * })
  * app.get('/redirect-permanently', (c) => {
  *   return c.redirect('/', 301)
  * })
  * ```
  */
  redirect = /* @__PURE__ */ __name((location, status) => {
    const locationString = String(location);
    this.header("Location", !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString));
    return this.newResponse(null, status ?? 302);
  }, "redirect");
  /**
  * `.notFound()` can return the Not Found Response.
  *
  * @see {@link https://hono.dev/docs/api/context#notfound}
  *
  * @example
  * ```ts
  * app.get('/notfound', (c) => {
  *   return c.notFound()
  * })
  * ```
  */
  notFound = /* @__PURE__ */ __name(() => {
    this.#notFoundHandler ??= () => createResponseInstance();
    return this.#notFoundHandler(this);
  }, "notFound");
};

// ../../node_modules/hono/dist/hono.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/hono/dist/hono-base.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/hono/dist/compose.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context2, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) throw new Error("next() called multiple times");
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context2.req.routeIndex = i;
      } else handler = i === middleware.length && next || void 0;
      if (handler) try {
        res = await handler(context2, () => dispatch(i + 1));
      } catch (err) {
        if (err instanceof Error && onError) {
          context2.error = err;
          res = await onError(err, context2);
          isError = true;
        } else throw err;
      }
      else if (context2.finalized === false && onNotFound) res = await onNotFound(context2);
      if (res && (context2.finalized === false || isError)) context2.res = res;
      return context2;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// ../../node_modules/hono/dist/helper/route/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var matchedRoutes = /* @__PURE__ */ __name((c) => c.req[GET_MATCH_RESULT][0].map(([[, route]]) => route), "matchedRoutes");
var routePath = /* @__PURE__ */ __name((c, index) => matchedRoutes(c).at(index ?? c.req.routeIndex)?.path ?? "", "routePath");

// ../../node_modules/hono/dist/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var METHODS = [
  "get",
  "post",
  "put",
  "delete",
  "options",
  "patch",
  "query"
];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
  static {
    __name(this, "UnsupportedPathError");
  }
};

// ../../node_modules/hono/dist/utils/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// ../../node_modules/hono/dist/utils/mount.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var countTrailingSlashes = /* @__PURE__ */ __name((path) => {
  let index = path.length;
  while (index > 0 && path.charCodeAt(index - 1) === 47) index--;
  return path.length - index;
}, "countTrailingSlashes");
var getPathPrefixLength = /* @__PURE__ */ __name((c, pathPrefix, routePath2) => {
  if (!/[:*]/.test(pathPrefix)) return pathPrefix.length;
  const path = c.req.path;
  const matchResult = c.req[GET_MATCH_RESULT];
  const paramNames = /* @__PURE__ */ new Set();
  let length = 0;
  for (const part of splitRoutingPath(pathPrefix)) {
    if (part[0] === ":" && part.endsWith("}?")) throw new Error(`mount(): Optional regular expression parameters are not supported in "${routePath2}".`);
    const pattern = getPattern(part);
    if (pattern && pattern !== "*") {
      const name = pattern[1];
      if (paramNames.has(name)) throw new Error(`mount(): Duplicate path parameter "${name}" in "${routePath2}".`);
      paramNames.add(name);
    }
    if (pattern && pattern !== "*" && pattern[2] !== true) {
      const value = matchResult.length === 2 ? matchResult[1][matchResult[0][c.req.routeIndex][1][pattern[1]]] : matchResult[0][c.req.routeIndex][1][pattern[1]];
      length += value.length + 1;
    } else if (pattern || part.endsWith("*")) {
      const end = path.indexOf("/", length + 1);
      length = end === -1 ? path.length : end;
    } else length += part.length + 1;
  }
  return length;
}, "getPathPrefixLength");
var createMountedRequest = /* @__PURE__ */ __name((c, pathPrefix, routePath2) => {
  if (/[^/]\*$/.test(routePath2)) throw new Error(`mount(): Wildcard must follow "/" in "${routePath2}".`);
  const prefixLength = getPathPrefixLength(c, pathPrefix, routePath2);
  const path = c.req.path.slice(prefixLength) || "/";
  if (prefixLength > c.req.path.length || path[0] !== "/" || /\/(?:\.|%2e){1,2}(?:\/|$)/i.test(path)) throw new HTTPException(400, { message: "Invalid mounted path" });
  const rawUrl = c.req.raw.url;
  if (/^[^/?#]*\/\/[^/?#\\]*[?#\\]/.test(rawUrl)) throw new HTTPException(400, { message: "Invalid mounted path" });
  const rawPathEnd = rawUrl.search(/[?#]/);
  const rawTrailingSlashes = countTrailingSlashes(rawPathEnd === -1 ? rawUrl : rawUrl.slice(0, rawPathEnd));
  if (rawTrailingSlashes > 1 && countTrailingSlashes(c.req.path) === rawTrailingSlashes - 1) throw new HTTPException(400, { message: "Invalid mounted path" });
  const url = new URL(rawUrl);
  url.pathname = path.replace(/[\\\t\n\r]/g, encodeURIComponent);
  if (path.includes("%")) {
    let decoded;
    try {
      decoded = decodeURI(path);
    } catch {
    }
    if (decoded === void 0) {
      if (tryDecode(url.pathname, (value) => decodeURI(value.replace(/%25/g, "%2525"))) !== path) throw new HTTPException(400, { message: "Invalid mounted path" });
    }
  }
  return new Request(url, c.req.raw);
}, "createMountedRequest");

// ../../node_modules/hono/dist/hono-base.js
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = class Hono2 {
  static {
    __name(this, "Hono");
  }
  get;
  post;
  put;
  delete;
  options;
  patch;
  query;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    [...METHODS, "all"].forEach((method) => {
      this[method] = (args1, ...args) => {
        const methodName = method.toUpperCase();
        if (typeof args1 === "string") this.#path = args1;
        else this.#addRoute(methodName, this.#path, args1);
        args.forEach((handler) => {
          this.#addRoute(methodName, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          const methodName = m.toUpperCase();
          for (const handler of handlers) this.#addRoute(methodName, this.#path, handler);
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") this.#path = arg1;
      else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute("ALL", this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono2({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  /**
  * `.route()` allows grouping other Hono instance in routes.
  *
  * @see {@link https://hono.dev/docs/api/routing#grouping}
  *
  * @param {string} path - base Path
  * @param {Hono} app - other Hono instance
  * @returns {Hono} routed Hono instance
  *
  * @example
  * ```ts
  * const app = new Hono()
  * const app2 = new Hono()
  *
  * app2.get("/user", (c) => c.text("user"))
  * app.route("/api", app2) // GET /api/user
  * ```
  */
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) handler = r.handler;
      else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler, r.basePath);
    });
    return this;
  }
  /**
  * `.basePath()` allows base paths to be specified.
  *
  * @see {@link https://hono.dev/docs/api/routing#base-path}
  *
  * @param {string} path - base Path
  * @returns {Hono} changed Hono instance
  *
  * @example
  * ```ts
  * const api = new Hono().basePath('/api')
  * ```
  */
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  /**
  * `.onError()` handles an error and returns a customized Response.
  *
  * @see {@link https://hono.dev/docs/api/hono#error-handling}
  *
  * @param {ErrorHandler} handler - request Handler for error
  * @returns {Hono} changed Hono instance
  *
  * @example
  * ```ts
  * app.onError((err, c) => {
  *   console.error(`${err}`)
  *   return c.text('Custom Error Message', 500)
  * })
  * ```
  */
  onError = /* @__PURE__ */ __name((handler) => {
    this.errorHandler = handler;
    return this;
  }, "onError");
  /**
  * `.notFound()` allows you to customize a Not Found Response.
  *
  * @see {@link https://hono.dev/docs/api/hono#not-found}
  *
  * @param {NotFoundHandler} handler - request handler for not-found
  * @returns {Hono} changed Hono instance
  *
  * @example
  * ```ts
  * app.notFound((c) => {
  *   return c.text('Custom 404 Message', 404)
  * })
  * ```
  */
  notFound = /* @__PURE__ */ __name((handler) => {
    this.#notFoundHandler = handler;
    return this;
  }, "notFound");
  /**
  * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
  *
  * @deprecated Use `mount()` from `hono/mount` instead. `.mount()` will be removed in v5.
  *
  * @see {@link https://hono.dev/docs/api/hono#mount}
  *
  * @param {string} path - base Path
  * @param {Function} applicationHandler - other Request Handler
  * @param {MountOptions} [options] - options of `.mount()`
  * @returns {Hono} mounted Hono instance
  * @throws {Error} If automatic request rewriting encounters duplicate path parameter names or an optional regular expression parameter.
  * @throws {HTTPException} With status 400 if automatic request rewriting cannot safely preserve the routed path.
  *
  * @example
  * ```ts
  * import { Router as IttyRouter } from 'itty-router'
  * import { Hono } from 'hono'
  * // Create itty-router application
  * const ittyRouter = IttyRouter()
  * // GET /itty-router/hello
  * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
  *
  * const app = new Hono()
  * app.mount('/itty-router', ittyRouter.handle)
  * ```
  *
  * @example
  * ```ts
  * const app = new Hono()
  * // Send the request to another application without modification.
  * app.mount('/app', anotherApp, {
  *   replaceRequest: (req) => req,
  * })
  * ```
  */
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") optionHandler = options;
      else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) replaceRequest = /* @__PURE__ */ __name((request) => request, "replaceRequest");
        else replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    const defaultReplaceRequest = /* @__PURE__ */ __name((c) => {
      const mountedRoutePath = routePath(c);
      return createMountedRequest(c, mountedRoutePath.replace(/\/?\*$/, ""), mountedRoutePath);
    }, "defaultReplaceRequest");
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest ? replaceRequest(c.req.raw) : defaultReplaceRequest(c), ...getOptions(c));
      if (res) return res;
      await next();
    }, "handler");
    this.#addRoute("ALL", mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler, baseRoutePath) {
    path = mergePath(this._basePath, path);
    const r = {
      basePath: baseRoutePath !== void 0 ? mergePath(this._basePath, baseRoutePath) : this._basePath,
      path,
      method,
      handler
    };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) return this.errorHandler(err, c);
    throw err;
  }
  #dispatch(request, executionCtx, env2, method) {
    if (method === "HEAD") return (async () => new Response(null, await this.#dispatch(request, executionCtx, env2, "GET")))();
    const path = this.getPath(request, { env: env2 });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env: env2,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then((resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context2 = await composed(c);
        if (!context2.finalized) throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
        return context2.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  /**
  * `.fetch()` will be entry point of your app.
  *
  * @see {@link https://hono.dev/docs/api/hono#fetch}
  *
  * @param {Request} request - request Object of request
  * @param {Env} env - env Object
  * @param {ExecutionContext} executionCtx - context of execution
  * @returns {Response | Promise<Response>} response of request
  *
  */
  fetch = /* @__PURE__ */ __name((request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  }, "fetch");
  /**
  * `.request()` is a useful method for testing.
  * You can pass a URL or pathname to send a GET request.
  * app will return a Response object.
  * ```ts
  * test('GET /hello is ok', async () => {
  *   const res = await app.request('/hello')
  *   expect(res.status).toBe(200)
  * })
  * ```
  * @see https://hono.dev/docs/api/hono#request
  */
  request = /* @__PURE__ */ __name((input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    input = input.toString();
    return this.fetch(new Request(/^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`, requestInit), Env, executionCtx);
  }, "request");
  /**
  * `.fire()` automatically adds a global fetch event listener.
  * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
  * @deprecated
  * Use `fire` from `hono/service-worker` instead.
  * ```ts
  * import { Hono } from 'hono'
  * import { fire } from 'hono/service-worker'
  *
  * const app = new Hono()
  * // ...
  * fire(app)
  * ```
  * @see https://hono.dev/docs/api/hono#fire
  * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
  * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
  */
  fire = /* @__PURE__ */ __name(() => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  }, "fire");
};

// ../../node_modules/hono/dist/router/reg-exp-router/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/hono/dist/router/utils.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var createNullObject = /* @__PURE__ */ __name(() => /* @__PURE__ */ Object.create(null), "createNullObject");

// ../../node_modules/hono/dist/router/reg-exp-router/matcher.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParam = [];
function match(method, path) {
  const matchers = this.buildAllMatchers();
  const match2 = /* @__PURE__ */ __name(((method2, path2) => {
    const matcher = matchers[method2] || matchers["ALL"];
    const staticMatch = matcher[2][path2];
    if (staticMatch) return staticMatch;
    const match3 = path2.match(matcher[0]);
    if (!match3) return [[], emptyParam];
    const index = match3.indexOf("", 1);
    return [matcher[1][index], match3];
  }), "match");
  this.match = match2;
  return match2(method, path);
}
__name(match, "match");

// ../../node_modules/hono/dist/router/reg-exp-router/node.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = "[^]*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/[^]*)";
var PATH_ERROR = /* @__PURE__ */ Symbol();
var regExpMetaChars = /* @__PURE__ */ new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) return b.length === 1 ? a < b ? -1 : 1 : -1;
  if (b.length === 1) return 1;
  if (a === "[^]*" || a === "(?:|/[^]*)") return b === "[^]*" ? -1 : 1;
  else if (b === "[^]*" || b === "(?:|/[^]*)") return -1;
  if (a === "[^/]+") return 1;
  else if (b === "[^/]+") return -1;
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = class Node2 {
  static {
    __name(this, "Node");
  }
  #index;
  #varIndex;
  #children = createNullObject();
  insert(tokens, index, paramMap, context2, keys) {
    let node = this;
    for (let i = 0, len = tokens.length; i < len; i++) {
      const token = tokens[i];
      const pattern = token.length === 1 ? token === "*" ? i === len - 1 ? [
        "",
        "",
        ONLY_WILDCARD_REG_EXP_STR
      ] : [
        "",
        "",
        LABEL_REG_EXP_STR
      ] : null : token === "/*" ? [
        "",
        "",
        TAIL_WILDCARD_REG_EXP_STR
      ] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
      let nextNode;
      if (pattern) {
        const name = pattern[1];
        let regexpStr = pattern[2] || "[^/]+";
        if (name && pattern[2]) {
          if (new RegExp(regexpStr).test("")) throw PATH_ERROR;
          regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
          if (/\((?!\?:)/.test(regexpStr)) throw PATH_ERROR;
          if (regexpStr.length === 1 && regExpMetaChars.has(regexpStr)) throw PATH_ERROR;
        }
        keys.push(regexpStr);
        nextNode = node.#children[regexpStr];
        if (!nextNode) {
          if (regexpStr !== "[^]*" && regexpStr !== "(?:|/[^]*)") {
            for (const k in node.#children) if ((regexpStr.length > 1 || k.length > 1) && k !== "[^]*" && k !== "(?:|/[^]*)") throw PATH_ERROR;
          }
          nextNode = node.#children[regexpStr] = new Node2();
        }
        if (name !== "") {
          nextNode.#varIndex ??= context2.varIndex++;
          paramMap.push([name, nextNode.#varIndex]);
        }
      } else {
        keys.push(token);
        nextNode = node.#children[token];
        if (!nextNode) {
          for (const k in node.#children) if (k.length > 1 && k !== "[^]*" && k !== "(?:|/[^]*)") throw PATH_ERROR;
          nextNode = node.#children[token] = new Node2();
        }
      }
      node = nextNode;
    }
    if (node.#index !== void 0) throw PATH_ERROR;
    node.#index = index;
  }
  buildRegExpStr() {
    const strList = Object.keys(this.#children).sort(compareKey).map((k) => {
      const c = this.#children[k];
      const childStr = c.buildRegExpStr();
      return childStr === "" ? "" : (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + childStr;
    }).filter(Boolean);
    if (typeof this.#index === "number" && this.#index !== -1) strList.unshift(`#${this.#index}`);
    if (strList.length === 0) return "";
    if (strList.length === 1) return strList[0];
    return "(?:" + strList.join("|") + ")";
  }
};

// ../../node_modules/hono/dist/router/reg-exp-router/trie.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Trie = class {
  static {
    __name(this, "Trie");
  }
  #context = { varIndex: 0 };
  #root = new Node();
  #index = 0;
  paths = createNullObject();
  insert(path, isStatic) {
    const keys = [];
    if (isStatic) {
      this.#root.insert(path.split(""), -1, [], this.#context, keys);
      this.paths[path] = [
        -1,
        [],
        keys
      ];
      return;
    }
    const paramAssoc = [];
    const groups = [];
    let markedPath = path;
    for (let i = 0; ; ) {
      let replaced = false;
      markedPath = markedPath.replace(/\{(?:\{[\d,]+\}|[^}])+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) break;
    }
    const tokens = markedPath.match(/(?::[^\/]+)|(?:\/\*$)|./gs) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) if (tokens[j].indexOf(mark) !== -1) {
        tokens[j] = tokens[j].replace(mark, groups[i][1]);
        break;
      }
    }
    this.#root.insert(tokens, this.#index, paramAssoc, this.#context, keys);
    this.paths[path] = [
      this.#index++,
      paramAssoc,
      keys
    ];
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") return [
      /^$/,
      [],
      []
    ];
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [
      new RegExp(`^${regexp}`),
      indexReplacementMap,
      paramReplacementMap
    ];
  }
};

// ../../node_modules/hono/dist/router/reg-exp-router/router.js
function endsWithWildcard(keys) {
  const tail = keys[keys.length - 1];
  return tail === "[^]*" || tail === "(?:|/[^]*)";
}
__name(endsWithWildcard, "endsWithWildcard");
function covers(wildcard, target) {
  const last = wildcard.length - 1;
  for (let i = 0; i < last; i++) if (wildcard[i] !== target[i]) return false;
  return wildcard[last] === "[^]*" || target.length === last || target[last] === "/";
}
__name(covers, "covers");
var RegExpRouter = class {
  static {
    __name(this, "RegExpRouter");
  }
  name = "RegExpRouter";
  #handlers;
  #tries;
  constructor() {
    this.#handlers = { ["ALL"]: [] };
    this.#tries = { ["ALL"]: new Trie() };
  }
  #insertPath(method, path) {
    try {
      this.#tries[method].insert(path, !/\*|\/:/.test(path));
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
  }
  add(method, path, handler) {
    const handlers = this.#handlers;
    if (!handlers) throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    const tries = this.#tries;
    if (!handlers[method]) {
      tries[method] = new Trie();
      handlers[method] = [...handlers["ALL"]];
      for (const p in tries["ALL"].paths) this.#insertPath(method, p);
    }
    if (path === "/*") path = "*";
    const methods = method === "ALL" ? Object.keys(handlers) : [method];
    const paths = checkOptionalParameter(path) || [path];
    for (const path2 of paths) for (const m of methods) {
      if (!tries[m].paths[path2]) this.#insertPath(m, path2);
      handlers[m].push([handler, path2]);
    }
  }
  match = match;
  buildAllMatchers() {
    const matchers = createNullObject();
    for (const method of Object.keys(this.#handlers)) matchers[method] = this.#buildMatcher(method);
    this.#handlers = this.#tries = void 0;
    return matchers;
  }
  #buildMatcher(method) {
    const handlers = this.#handlers[method];
    const trie = this.#tries[method];
    const staticMap = createNullObject();
    const handlerData = [];
    const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
    const own = createNullObject();
    const entries2 = handlers.map(([h, p], i) => {
      (own[p] ??= []).push(i);
      return [h, trie.paths[p][1].reduceRight((map, [key, varIndex]) => {
        map[key] = paramReplacementMap[varIndex];
        return map;
      }, createNullObject())];
    });
    const wildcards = Object.keys(own).filter((p) => endsWithWildcard(trie.paths[p][2]));
    for (const path in trie.paths) {
      const [index, , keys] = trie.paths[path];
      const indexes = [...own[path]];
      for (const p of wildcards) if (p !== path && covers(trie.paths[p][2], keys)) indexes.push(...own[p]);
      const data = indexes.sort((a, b) => a - b).map((i) => entries2[i]);
      if (index === -1) {
        const last = Math.max(-1, ...data.flatMap(([, map]) => Object.values(map)));
        staticMap[path] = [data, last === -1 ? emptyParam : path.match(regexp).slice(0, last + 1)];
      } else handlerData[index] = data;
    }
    return [
      regexp,
      indexReplacementMap.map((i) => handlerData[i]),
      staticMap
    ];
  }
};

// ../../node_modules/hono/dist/router/smart-router/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SmartRouter = class {
  static {
    __name(this, "SmartRouter");
  }
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    this.#routes.push([
      method,
      path,
      handler
    ]);
  }
  match(method, path) {
    if (!this.#routes) throw new Error("Fatal error");
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) router.add(...routes[i2]);
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) continue;
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) throw new Error("Fatal error");
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) throw new Error("No active router has been determined yet.");
    return this.#routers[0];
  }
};

// ../../node_modules/hono/dist/router/trie-router/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/hono/dist/router/trie-router/node.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParams = createNullObject();
var order = 0;
var Node3 = class Node4 {
  static {
    __name(this, "Node");
  }
  #methods = [];
  #children = createNullObject();
  #patterns = [];
  #pattern;
  #params = emptyParams;
  insert(method, path, handler) {
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = /* @__PURE__ */ new Set();
    let i = 0;
    for (const p of parts) {
      const nextP = parts[++i];
      const pattern = getPattern(p, nextP) || (nextP === void 0 && p && p.indexOf("*") === p.length - 1 ? p : null);
      const isParam = Array.isArray(pattern);
      const key = isParam ? pattern[0] : pattern || p;
      const child = curNode.#children[key] ||= new Node4();
      if (pattern && !child.#pattern) {
        child.#pattern = pattern;
        curNode.#patterns.push(child);
      }
      curNode = child;
      if (isParam) possibleKeys.add(pattern[1]);
    }
    curNode.#methods.push({ [method]: {
      handler,
      possibleKeys: [...possibleKeys],
      score: ++order
    } });
  }
  #pushHandlerSets(handlerSets, node, method, nodeParams, params) {
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m["ALL"];
      if (handlerSet) {
        handlerSet.params = createNullObject();
        handlerSets.push(handlerSet);
        for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
          const key = handlerSet.possibleKeys[i2];
          handlerSet.params[key] = params?.[key] && !i2 ? params[key] : nodeParams[key] ?? params?.[key];
        }
      }
    }
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    let curNodes = [this];
    const parts = splitPath(path);
    const curNodesQueue = [];
    const len = parts.length;
    let partOffsets = null;
    for (let i = 0; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) this.#pushHandlerSets(handlerSets, nextNode.#children["*"], method, node.#params);
            this.#pushHandlerSets(handlerSets, nextNode, method, node.#params);
          } else tempNodes.push(nextNode);
        }
        for (const child of node.#patterns) {
          const pattern = child.#pattern;
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (typeof pattern === "string") {
            if (pattern === "*" || part.startsWith(pattern.slice(0, -1))) {
              this.#pushHandlerSets(handlerSets, child, method, node.#params);
              if (pattern === "*") {
                child.#params = params;
                tempNodes.push(child);
              }
            }
            continue;
          }
          const [, name, matcher] = pattern;
          if (!part && matcher === true) continue;
          if (matcher !== true) {
            if (!partOffsets) {
              partOffsets = [];
              let offset = path[0] === "/" ? 1 : 0;
              for (let p = 0; p < len; p++) {
                partOffsets[p] = offset;
                offset += parts[p].length + 1;
              }
            }
            const restPathString = path.slice(partOffsets[i]);
            const m = matcher.exec(restPathString);
            if (m) {
              if (!Object.hasOwn(params, name)) params[name] = m[0];
              this.#pushHandlerSets(handlerSets, child, method, node.#params, params);
              if (m[0].length === restPathString.length && child.#children["*"]) this.#pushHandlerSets(handlerSets, child.#children["*"], method, node.#params, params);
              for (const _ in child.#children) {
                child.#params = params;
                const componentCount = m[0].match(/\//g)?.length ?? 0;
                (curNodesQueue[componentCount] ||= []).push(child);
                break;
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            if (!Object.hasOwn(params, name)) params[name] = part;
            if (isLast) {
              this.#pushHandlerSets(handlerSets, child, method, params, node.#params);
              if (child.#children["*"]) this.#pushHandlerSets(handlerSets, child.#children["*"], method, params, node.#params);
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      const shifted = curNodesQueue.shift();
      curNodes = shifted ? tempNodes.concat(shifted) : tempNodes;
    }
    if (handlerSets[1]) handlerSets.sort((a, b) => {
      return a.score - b.score;
    });
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// ../../node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  static {
    __name(this, "TrieRouter");
  }
  name = "TrieRouter";
  #node = new Node3();
  add(method, path, handler) {
    for (const result of checkOptionalParameter(path) || [path]) this.#node.insert(method, result, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// ../../node_modules/hono/dist/router/trie-router/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/hono/dist/hono.js
var Hono3 = class extends Hono {
  static {
    __name(this, "Hono");
  }
  /**
  * Creates an instance of the Hono class.
  *
  * @param options - Optional configuration options for the Hono instance.
  */
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({ routers: [new RegExpRouter(), new TrieRouter()] });
  }
};

// ../../node_modules/hono/dist/middleware/cors/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var cors = /* @__PURE__ */ __name((options) => {
  const opts = {
    origin: "*",
    allowMethods: [
      "GET",
      "HEAD",
      "PUT",
      "POST",
      "DELETE",
      "PATCH",
      "QUERY"
    ],
    allowHeaders: [],
    exposeHeaders: [],
    ...options
  };
  const exposeHeadersStr = opts.exposeHeaders?.length ? opts.exposeHeaders.join(",") : void 0;
  const allowHeadersStr = opts.allowHeaders?.length ? opts.allowHeaders.join(",") : void 0;
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") return () => optsOrigin;
      else return (origin) => optsOrigin === origin ? origin : null;
    } else if (typeof optsOrigin === "function") return optsOrigin;
    else return (origin) => optsOrigin.includes(origin) ? origin : null;
  })(opts.origin);
  const findAllowMethods = ((optsAllowMethods) => {
    if (typeof optsAllowMethods === "function") return async (origin, c) => (await optsAllowMethods(origin, c)).join(",");
    else if (Array.isArray(optsAllowMethods)) {
      const methodsStr = optsAllowMethods.join(",");
      return () => methodsStr;
    } else return () => "";
  })(opts.allowMethods);
  return /* @__PURE__ */ __name(async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    __name(set, "set");
    const allowOrigin = await findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) set("Access-Control-Allow-Origin", allowOrigin);
    if (opts.credentials) set("Access-Control-Allow-Credentials", "true");
    if (exposeHeadersStr) set("Access-Control-Expose-Headers", exposeHeadersStr);
    if (c.req.method === "OPTIONS") {
      if (opts.origin !== "*") c.res.headers.append("Vary", "Origin");
      if (opts.maxAge != null) set("Access-Control-Max-Age", opts.maxAge.toString());
      const allowMethods = await findAllowMethods(c.req.header("origin") || "", c);
      if (allowMethods) set("Access-Control-Allow-Methods", allowMethods);
      let headersStr = allowHeadersStr;
      if (!headersStr) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) headersStr = requestHeaders.split(",").map((h) => h.trim()).join(",");
      }
      if (headersStr) {
        set("Access-Control-Allow-Headers", headersStr);
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
    if (opts.origin !== "*") c.header("Vary", "Origin", { append: true });
  }, "cors");
}, "cors");

// src/routes/health.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/db.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/surrealdb/dist/surrealdb.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SqonError = class extends Error {
  static {
    __name(this, "SqonError");
  }
};
var InvalidDateError = class extends SqonError {
  static {
    __name(this, "InvalidDateError");
  }
  name = "InvalidDateError";
  constructor(dateOrMessage) {
    if (typeof dateOrMessage === "string") super(dateOrMessage);
    else super(`The provided date is invalid: ${dateOrMessage}`);
  }
};
var InvalidRecordIdError = class extends SqonError {
  static {
    __name(this, "InvalidRecordIdError");
  }
  name = "InvalidRecordIdError";
};
var InvalidDurationError = class extends SqonError {
  static {
    __name(this, "InvalidDurationError");
  }
  name = "InvalidDurationError";
};
var InvalidDecimalError = class extends SqonError {
  static {
    __name(this, "InvalidDecimalError");
  }
  name = "InvalidDecimalError";
};
var InvalidNumberError = class extends SqonError {
  static {
    __name(this, "InvalidNumberError");
  }
  name = "InvalidNumberError";
};
var InvalidTableError = class extends SqonError {
  static {
    __name(this, "InvalidTableError");
  }
  name = "InvalidTableError";
};
var TextParseError = class extends SqonError {
  static {
    __name(this, "TextParseError");
  }
  name = "TextParseError";
  /** The zero-based character offset at which parsing failed */
  offset;
  constructor(message, offset) {
    super(`${message} (at offset ${offset})`);
    this.offset = offset;
  }
};
var ShapedFrameError = class extends SqonError {
  static {
    __name(this, "ShapedFrameError");
  }
  name = "ShapedFrameError";
  constructor(message) {
    super(`Invalid shaped frame: ${message}`);
  }
};
var InvalidRegexError = class extends SqonError {
  static {
    __name(this, "InvalidRegexError");
  }
  name = "InvalidRegexError";
};
var UnsupportedValueError = class extends SqonError {
  static {
    __name(this, "UnsupportedValueError");
  }
  name = "UnsupportedValueError";
};
var VALUE_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.Value");
var RECORD_ID_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.RecordId");
var STRING_RECORD_ID_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.StringRecordId");
var RECORD_ID_RANGE_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.RecordIdRange");
var UUID_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.Uuid");
var DATETIME_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.DateTime");
var DURATION_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.Duration");
var DECIMAL_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.Decimal");
var TABLE_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.Table");
var RANGE_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.Range");
var FUTURE_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.Future");
var FILE_REF_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.FileRef");
var GEOMETRY_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.Geometry");
var GEOMETRY_POINT_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryPoint");
var BOUND_INCLUDED_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.BoundIncluded");
var BOUND_EXCLUDED_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.BoundExcluded");
var GEOMETRY_LINE_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryLine");
var GEOMETRY_POLYGON_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryPolygon");
var GEOMETRY_MULTI_POINT_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryMultiPoint");
var GEOMETRY_MULTI_LINE_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryMultiLine");
var GEOMETRY_MULTI_POLYGON_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryMultiPolygon");
var GEOMETRY_COLLECTION_SYMBOL$1 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryCollection");
var SIZED_NUMBER_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.SizedNumber");
var PLAIN_DATE_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.PlainDate");
var PLAIN_TIME_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.PlainTime");
var TIMESTAMP_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.Timestamp");
var INTERVAL_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.Interval");
var BIG_DECIMAL_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.BigDecimal");
var REGEX_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.Regex");
function markSymbol$1(obj, symbol) {
  if (obj && typeof obj === "object") obj[symbol] = true;
}
__name(markSymbol$1, "markSymbol$1");
function hasSymbol$1(obj, symbol) {
  return !!(obj && typeof obj === "object" && obj[symbol]);
}
__name(hasSymbol$1, "hasSymbol$1");
var Value = class Value$1 {
  static {
    __name(this, "Value$1");
  }
  static _useExperimentalToJson = false;
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, VALUE_SYMBOL$1);
  }
  constructor() {
    markSymbol$1(this, VALUE_SYMBOL$1);
  }
  /**
  * Enable the new experimental toJSON implementation.
  *
  * When enabled, the `toJSON` method will return values encoded by the `JsonCodec` resulting in a type-safe JSON representation.
  */
  static useExperimentalToJson(enabled) {
    Value$1._useExperimentalToJson = enabled ?? true;
  }
};
function equals(x, y) {
  if (typeof x === "bigint" && typeof y === "number") return x <= Number.MAX_SAFE_INTEGER ? Number(x) === y : x === BigInt(y);
  if (typeof x === "number" && typeof y === "bigint") return y <= Number.MAX_SAFE_INTEGER ? x === Number(y) : BigInt(x) === y;
  if (Object.is(x, y)) return true;
  if (x instanceof Date && y instanceof Date) return x.getTime() === y.getTime();
  if (x instanceof RegExp && y instanceof RegExp) return x.toString() === y.toString();
  if (x instanceof Value && y instanceof Value) return x.equals(y);
  if (typeof x !== "object" || x === null || typeof y !== "object" || y === null) return false;
  const keysX = Reflect.ownKeys(x);
  const keysY = Reflect.ownKeys(y);
  if (keysX.length !== keysY.length) return false;
  for (let i = 0; i < keysX.length; i++) {
    if (!Reflect.has(y, keysX[i])) return false;
    if (!equals(x[keysX[i]], y[keysX[i]])) return false;
  }
  return true;
}
__name(equals, "equals");
var BoundIncluded = class {
  static {
    __name(this, "BoundIncluded");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, BOUND_INCLUDED_SYMBOL$1);
  }
  constructor(value) {
    this.value = value;
    markSymbol$1(this, BOUND_INCLUDED_SYMBOL$1);
  }
};
var BoundExcluded = class {
  static {
    __name(this, "BoundExcluded");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, BOUND_EXCLUDED_SYMBOL$1);
  }
  constructor(value) {
    this.value = value;
    markSymbol$1(this, BOUND_EXCLUDED_SYMBOL$1);
  }
};
function toBase64Url(bytes) {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
__name(toBase64Url, "toBase64Url");
function fromBase64Url(str) {
  const padded = str.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}
__name(fromBase64Url, "fromBase64Url");
var SIZED_KINDS = [
  "i8",
  "u8",
  "i16",
  "u16",
  "i32",
  "u32",
  "u64",
  "f16",
  "f32"
];
var createNone = /* @__PURE__ */ __name(() => ({ $none: true }), "createNone");
var createDatetime = /* @__PURE__ */ __name((value) => ({ $datetime: value }), "createDatetime");
var createDecimal = /* @__PURE__ */ __name((value) => ({ $decimal: value }), "createDecimal");
var createDuration = /* @__PURE__ */ __name((value) => ({ $duration: value }), "createDuration");
var createUuid = /* @__PURE__ */ __name((value) => ({ $uuid: value }), "createUuid");
var createRecordId = /* @__PURE__ */ __name((tb, id$1) => ({ $recordId: {
  tb,
  id: id$1
} }), "createRecordId");
var createStringRecordId = /* @__PURE__ */ __name((value) => ({ $recordIdString: value }), "createStringRecordId");
var createTable = /* @__PURE__ */ __name((name) => ({ $table: name }), "createTable");
var createRange = /* @__PURE__ */ __name((begin, end) => ({ $range: {
  begin,
  end
} }), "createRange");
var createBoundIncluded = /* @__PURE__ */ __name((value) => ({ $boundIncluded: value }), "createBoundIncluded");
var createBoundExcluded = /* @__PURE__ */ __name((value) => ({ $boundExcluded: value }), "createBoundExcluded");
var createFile = /* @__PURE__ */ __name((bucket, key) => ({ $file: {
  bucket,
  key
} }), "createFile");
var createFuture = /* @__PURE__ */ __name((body) => ({ $future: body }), "createFuture");
var createBytes = /* @__PURE__ */ __name((value) => ({ $bytes: value }), "createBytes");
var createGeometry = /* @__PURE__ */ __name((value) => ({ $geometry: value }), "createGeometry");
var createSet = /* @__PURE__ */ __name((items) => ({ $set: items }), "createSet");
var createObject = /* @__PURE__ */ __name((value) => ({ $object: value }), "createObject");
var createDate = /* @__PURE__ */ __name((value) => ({ $date: value }), "createDate");
var createTime = /* @__PURE__ */ __name((value) => ({ $time: value }), "createTime");
var createTimestamp = /* @__PURE__ */ __name((value) => ({ $timestamp: value }), "createTimestamp");
var createInterval = /* @__PURE__ */ __name((months, days, micros) => ({ $interval: {
  months,
  days,
  micros
} }), "createInterval");
var createBigDecimal = /* @__PURE__ */ __name((value) => ({ $bigdecimal: value }), "createBigDecimal");
var createRegex = /* @__PURE__ */ __name((pattern) => ({ $regex: pattern }), "createRegex");
var createSized = /* @__PURE__ */ __name((kind, value) => ({ [`$${kind}`]: value }), "createSized");
var isNone = /* @__PURE__ */ __name((value) => {
  return "$none" in value && value.$none === true;
}, "isNone");
var isDatetime = /* @__PURE__ */ __name((value) => {
  return "$datetime" in value && typeof value.$datetime === "string";
}, "isDatetime");
var isDecimal = /* @__PURE__ */ __name((value) => {
  return "$decimal" in value && typeof value.$decimal === "string";
}, "isDecimal");
var isDuration = /* @__PURE__ */ __name((value) => {
  return "$duration" in value && typeof value.$duration === "string";
}, "isDuration");
var isUuid = /* @__PURE__ */ __name((value) => {
  return "$uuid" in value && typeof value.$uuid === "string";
}, "isUuid");
var isStringRecordId = /* @__PURE__ */ __name((value) => {
  return "$recordIdString" in value && typeof value.$recordIdString === "string";
}, "isStringRecordId");
var isRecordId = /* @__PURE__ */ __name((value) => {
  return "$recordId" in value && !!value.$recordId && typeof value.$recordId === "object" && "tb" in value.$recordId && typeof value.$recordId.tb === "string" && "id" in value.$recordId;
}, "isRecordId");
var isTable = /* @__PURE__ */ __name((value) => {
  return "$table" in value && typeof value.$table === "string";
}, "isTable");
var isGeometry = /* @__PURE__ */ __name((value) => {
  return "$geometry" in value && typeof value.$geometry === "object" && value.$geometry !== null;
}, "isGeometry");
var isSet = /* @__PURE__ */ __name((value) => {
  return "$set" in value && Array.isArray(value.$set);
}, "isSet");
var isFile = /* @__PURE__ */ __name((value) => {
  return "$file" in value && typeof value.$file === "object" && value.$file !== null;
}, "isFile");
var isRange = /* @__PURE__ */ __name((value) => {
  return "$range" in value && typeof value.$range === "object" && value.$range !== null;
}, "isRange");
var isBytes = /* @__PURE__ */ __name((value) => {
  return "$bytes" in value && typeof value.$bytes === "string";
}, "isBytes");
var isFuture = /* @__PURE__ */ __name((value) => {
  return "$future" in value && typeof value.$future === "string";
}, "isFuture");
var isBoundIncluded = /* @__PURE__ */ __name((value) => {
  return "$boundIncluded" in value;
}, "isBoundIncluded");
var isBoundExcluded = /* @__PURE__ */ __name((value) => {
  return "$boundExcluded" in value;
}, "isBoundExcluded");
var isObject = /* @__PURE__ */ __name((value) => {
  return "$object" in value && typeof value.$object === "object" && value.$object !== null;
}, "isObject");
var isDate = /* @__PURE__ */ __name((value) => {
  return "$date" in value && typeof value.$date === "string";
}, "isDate");
var isTime = /* @__PURE__ */ __name((value) => {
  return "$time" in value && typeof value.$time === "string";
}, "isTime");
var isTimestamp = /* @__PURE__ */ __name((value) => {
  return "$timestamp" in value && typeof value.$timestamp === "string";
}, "isTimestamp");
var isInterval = /* @__PURE__ */ __name((value) => {
  if (!("$interval" in value) || typeof value.$interval !== "object" || !value.$interval) return false;
  const parts = value.$interval;
  return typeof parts.months === "number" && typeof parts.days === "number" && typeof parts.micros === "string";
}, "isInterval");
var isBigDecimal = /* @__PURE__ */ __name((value) => {
  return "$bigdecimal" in value && typeof value.$bigdecimal === "string";
}, "isBigDecimal");
var isRegex = /* @__PURE__ */ __name((value) => {
  return "$regex" in value && typeof value.$regex === "string";
}, "isRegex");
var sizedKind = /* @__PURE__ */ __name((value) => {
  const keys = Object.keys(value);
  if (keys.length !== 1) return void 0;
  const kind = SIZED_KINDS.find((kind$1) => keys[0] === `$${kind$1}`);
  const arg = value[keys[0]];
  return kind && (typeof arg === "number" || typeof arg === "string") ? kind : void 0;
}, "sizedKind");
var sizedClass = /* @__PURE__ */ __name((kind) => ({
  i8: I8,
  u8: U8,
  i16: I16,
  u16: U16,
  i32: I32,
  u32: U32,
  u64: U64,
  f16: F16,
  f32: F32
})[kind], "sizedClass");
var JsonCodec = class JsonCodec$1 {
  static {
    __name(this, "JsonCodec$1");
  }
  /**
  * The default JsonCodec instance.
  */
  static DEFAULT = new JsonCodec$1({});
  #options;
  constructor(options) {
    this.#options = options;
  }
  /**
  * Encode a value tree to a SQON-J structure (JSON-safe plain object tree).
  */
  encode(data) {
    return this.#serialize(data);
  }
  /**
  * Decode a SQON-J structure back to value instances.
  */
  decode(data) {
    return this.#deserialize(data);
  }
  #serialize(input) {
    const value = this.#encodeValue(input);
    const wasEncoded = value !== input;
    if (this.#isEncodePrimitive(value)) return value;
    if (value === void 0) return createNone();
    if (value instanceof Date) return createDatetime(value.toISOString());
    if (value instanceof DateTime) return createDatetime(value.toISOString());
    if (value instanceof Decimal) return createDecimal(value.toString());
    if (value instanceof Duration) return createDuration(value.toString());
    if (value instanceof Uuid) return createUuid(value.toString());
    if (value instanceof _RecordId) return createRecordId(value.table.name, this.#serialize(value.id));
    if (value instanceof StringRecordId) return createStringRecordId(value.toString());
    if (value instanceof _RecordIdRange) return createRecordId(value.table.name, createRange(this.#encodeBound(value.begin), this.#encodeBound(value.end)));
    if (value instanceof _Table) return createTable(value.name);
    if (value instanceof Range) return createRange(this.#encodeBound(value.begin), this.#encodeBound(value.end));
    if (value instanceof FileRef) return createFile(value.bucket, value.key);
    if (value instanceof Future) return createFuture(value.body);
    if (value instanceof Uint8Array) return createBytes(toBase64Url(value));
    if (value instanceof Geometry) return createGeometry(value.toJSON());
    if (value instanceof PlainDate) return createDate(value.toString());
    if (value instanceof PlainTime) return createTime(value.toString());
    if (value instanceof Timestamp) return createTimestamp(value.toString());
    if (value instanceof Interval) return createInterval(value.months, value.days, value.micros.toString());
    if (value instanceof BigDecimal) return createBigDecimal(value.toString());
    if (value instanceof Regex) return createRegex(value.pattern);
    if (value instanceof SizedNumber) return createSized(value.kind, this.#encodeSized(value.value));
    if (value instanceof Set) return createSet([...value].map((v) => this.#serialize(v)));
    switch (Object.getPrototypeOf(value)) {
      case Array.prototype:
        return value.map((v) => this.#serialize(v));
      case Map.prototype:
        return Object.fromEntries(Array.from(value.entries()).map(([k, v]) => [k, this.#serialize(v)]).filter(([, encoded]) => encoded !== void 0));
      case Object.prototype: {
        const obj = value;
        const result = {};
        let escaped = false;
        for (const key in obj) {
          const encoded = this.#serialize(obj[key]);
          if (encoded !== void 0) {
            result[key] = encoded;
            if (!wasEncoded && key[0] === "$") escaped = true;
          }
        }
        return escaped ? createObject(result) : result;
      }
    }
    return value;
  }
  /** A number within ±2^53 as itself, and anything JSON cannot hold as a string */
  #encodeSized(value) {
    if (typeof value === "bigint") return value <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(value) : value.toString();
    if (Object.is(value, -0)) return "-0";
    return Number.isFinite(value) ? value : String(value);
  }
  #encodeBound(bound) {
    if (bound instanceof BoundIncluded) return createBoundIncluded(this.#serialize(bound.value));
    if (bound instanceof BoundExcluded) return createBoundExcluded(this.#serialize(bound.value));
    return null;
  }
  #isEncodePrimitive(value) {
    return value === null || typeof value === "boolean" || typeof value === "string" || typeof value === "number" || typeof value === "bigint";
  }
  #deserialize(input) {
    if (this.#isDecodePrimitive(input)) return this.#decodeValue(input);
    if (Array.isArray(input)) return this.#decodeValue(input.map((v) => this.#deserialize(v)));
    const obj = input;
    if (isObject(obj)) return Object.fromEntries(Object.entries(obj.$object).map(([k, v]) => [k, this.#deserialize(v)]).filter(([, decoded]) => decoded !== void 0));
    if (isNone(obj)) return this.#decodeValue(void 0);
    if (isDatetime(obj)) return this.#decodeValue(this.#resolveSpecDate(obj.$datetime));
    if (isDecimal(obj)) return this.#decodeValue(new Decimal(obj.$decimal));
    if (isDuration(obj)) return this.#decodeValue(new Duration(obj.$duration));
    if (isUuid(obj)) return this.#decodeValue(new Uuid(obj.$uuid));
    if (isRecordId(obj)) {
      const id$1 = this.#deserialize(obj.$recordId.id);
      if (id$1 instanceof Range) return this.#decodeValue(new _RecordIdRange(obj.$recordId.tb, id$1.begin, id$1.end));
      return this.#decodeValue(new _RecordId(obj.$recordId.tb, id$1));
    }
    if (isStringRecordId(obj)) return this.#decodeValue(new StringRecordId(obj.$recordIdString));
    if (isTable(obj)) return this.#decodeValue(new _Table(obj.$table));
    if (isGeometry(obj)) return this.#decodeValue(Geometry.fromJSON(obj.$geometry));
    if (isSet(obj)) return this.#decodeValue(new Set(obj.$set.map((v) => this.#deserialize(v))));
    if (isFile(obj)) return this.#decodeValue(new FileRef(obj.$file.bucket, obj.$file.key));
    if (isRange(obj)) return this.#decodeValue(new Range(this.#decodeBound(obj.$range.begin), this.#decodeBound(obj.$range.end)));
    if (isBytes(obj)) return this.#decodeValue(fromBase64Url(obj.$bytes));
    if (isFuture(obj)) return this.#decodeValue(new Future(obj.$future));
    if (isDate(obj)) return this.#decodeValue(new PlainDate(obj.$date));
    if (isTime(obj)) return this.#decodeValue(new PlainTime(obj.$time));
    if (isTimestamp(obj)) return this.#decodeValue(new Timestamp(obj.$timestamp));
    if (isInterval(obj)) {
      const { months, days, micros } = obj.$interval;
      return this.#decodeValue(new Interval([
        months,
        days,
        BigInt(micros)
      ]));
    }
    if (isBigDecimal(obj)) return this.#decodeValue(new BigDecimal(obj.$bigdecimal));
    if (isRegex(obj)) return this.#decodeValue(new Regex(obj.$regex));
    const kind = sizedKind(obj);
    if (kind) {
      const arg = obj[`$${kind}`];
      const value = kind === "u64" ? BigInt(arg) : arg === "-0" ? -0 : Number(arg);
      return this.#decodeValue(new (sizedClass(kind))(value));
    }
    return this.#decodeValue(Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, this.#deserialize(v)]).filter(([, decoded]) => decoded !== void 0)));
  }
  #decodeBound(input) {
    if (this.#isDecodePrimitive(input)) return void 0;
    const obj = input;
    if (isBoundIncluded(obj)) return new BoundIncluded(this.#deserialize(obj.$boundIncluded));
    if (isBoundExcluded(obj)) return new BoundExcluded(this.#deserialize(obj.$boundExcluded));
    return void 0;
  }
  #isDecodePrimitive(value) {
    return value === null || value === void 0 || typeof value !== "object";
  }
  #resolveSpecDate(v) {
    return this.#options.useNativeDates ? new Date(v) : new DateTime(v);
  }
  #encodeValue(v) {
    return this.#options.valueEncodeVisitor ? this.#options.valueEncodeVisitor(v) : v;
  }
  #decodeValue(v) {
    return this.#options.valueDecodeVisitor ? this.#options.valueDecodeVisitor(v) : v;
  }
};
var Decimal = class Decimal$1 extends Value {
  static {
    __name(this, "Decimal$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, DECIMAL_SYMBOL$1);
  }
  _int;
  _frac;
  _scale;
  constructor(input) {
    super();
    if (input instanceof Decimal$1) {
      this._int = input._int;
      this._frac = input._frac;
      this._scale = input._scale;
    } else if (typeof input === "bigint") {
      this._int = input;
      this._frac = 0n;
      this._scale = 0;
    } else if (Array.isArray(input)) {
      let [int$1, frac, scale] = input;
      const maxFrac = 10n ** BigInt(scale);
      if (frac >= maxFrac) {
        int$1 += frac / maxFrac;
        frac %= maxFrac;
      }
      this._int = int$1;
      this._frac = frac;
      this._scale = scale;
    } else if (typeof input === "string" && /e/i.test(input)) {
      const dec = Decimal$1.fromScientificNotation(input);
      this._int = dec._int;
      this._frac = dec._frac;
      this._scale = dec._scale;
    } else {
      const str = input.toString().trim();
      const isNegative = str.startsWith("-");
      const clean = isNegative ? str.slice(1) : str;
      const [intStrRaw, fracStrRaw = ""] = clean.split(".");
      const safeInt = /^\d+$/.test(intStrRaw) ? intStrRaw : "0";
      const safeFrac = /^\d+$/.test(fracStrRaw) ? fracStrRaw : "0";
      const intStr = safeInt || "0";
      const fracStr = safeFrac.padEnd(safeFrac.length || 1, "0");
      const absInt = BigInt(intStr);
      const absFrac = BigInt(fracStr);
      this._int = isNegative ? -absInt : absInt;
      this._frac = isNegative ? -absFrac : absFrac;
      this._scale = safeFrac.length;
    }
    markSymbol$1(this, DECIMAL_SYMBOL$1);
  }
  equals(other) {
    if (!(other instanceof Decimal$1)) return false;
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    const scale = Math.max(a.scale, b.scale);
    const aVal = a.value * 10n ** BigInt(scale - a.scale);
    const bVal = b.value * 10n ** BigInt(scale - b.scale);
    return aVal === bVal;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns The canonical string representation of the decimal with
  * trailing zeros in fractional part trimmed
  */
  toString() {
    const sign = this._int < 0n || this._frac < 0n ? "-" : "";
    const absInt = this._int < 0n ? -this._int : this._int;
    const absFrac = this._frac < 0n ? -this._frac : this._frac;
    if (this._scale === 0) return `${sign}${absInt}`;
    let fracStr = absFrac.toString().padStart(this._scale, "0");
    let end = fracStr.length;
    while (end > 0 && fracStr.charCodeAt(end - 1) === 48) end--;
    fracStr = fracStr.slice(0, end);
    return fracStr === "" ? `${sign}${absInt}` : `${sign}${absInt}.${fracStr}`;
  }
  /** Returns the integer part of the number */
  get int() {
    return this._int;
  }
  /** Returns the fractional part of the number */
  get frac() {
    return this._frac;
  }
  /** Returns the scale (number of decimal places) */
  get scale() {
    return this._scale;
  }
  /**
  * Adds another Decimal to this one
  *
  * @param other The Decimal to add
  * @returns A new Decimal representing the sum
  */
  add(other) {
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    const scale = Math.max(a.scale, b.scale);
    const scaleDiffA = BigInt(scale - a.scale);
    const scaleDiffB = BigInt(scale - b.scale);
    const valA = a.value * 10n ** scaleDiffA;
    const valB = b.value * 10n ** scaleDiffB;
    const sum = valA + valB;
    const intPart = sum / 10n ** BigInt(scale);
    const fracPart = sum % 10n ** BigInt(scale);
    return new Decimal$1([
      intPart,
      fracPart,
      scale
    ]);
  }
  /**
  * Subtracts another Decimal from this one
  *
  * @param other The Decimal to subtract
  * @returns A new Decimal representing the difference
  */
  sub(other) {
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    const scale = Math.max(a.scale, b.scale);
    const factorA = 10n ** BigInt(scale - a.scale);
    const factorB = 10n ** BigInt(scale - b.scale);
    const valA = a.value * factorA;
    const valB = b.value * factorB;
    const result = valA - valB;
    const intPart = result / 10n ** BigInt(scale);
    const fracPart = result % 10n ** BigInt(scale);
    return new Decimal$1([
      intPart,
      fracPart,
      scale
    ]);
  }
  /**
  * Multiplies this Decimal by another
  *
  * @param other The Decimal to multiply by
  * @returns A new Decimal representing the product
  */
  mul(other) {
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    const result = a.value * b.value;
    const scale = a.scale + b.scale;
    const intPart = result / 10n ** BigInt(scale);
    const fracPart = result % 10n ** BigInt(scale);
    return new Decimal$1([
      intPart,
      fracPart,
      scale
    ]);
  }
  /**
  * Divides this Decimal by another, with fixed precision
  *
  * @param other The Decimal to divide by
  * @returns A new Decimal representing the quotient
  */
  div(other) {
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    if (b.value === 0n) throw new InvalidDecimalError("Division by zero");
    const targetScale = 38;
    const scaleDiff = BigInt(targetScale + b.scale - a.scale);
    const scaledA = a.value * 10n ** scaleDiff;
    const result = scaledA / b.value;
    const intPart = result / 10n ** BigInt(targetScale);
    const fracPart = result % 10n ** BigInt(targetScale);
    return new Decimal$1([
      intPart,
      fracPart,
      targetScale
    ]);
  }
  /**
  * Computes the remainder of this Decimal divided by another
  *
  * @param other The divisor Decimal
  * @returns A new Decimal representing the remainder
  */
  mod(other) {
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    if (b.value === 0n) throw new InvalidDecimalError("Modulo by zero");
    const scale = Math.max(a.scale, b.scale);
    const scaleDiffA = BigInt(scale - a.scale);
    const scaleDiffB = BigInt(scale - b.scale);
    const valA = a.value * 10n ** scaleDiffA;
    const valB = b.value * 10n ** scaleDiffB;
    const result = valA % valB;
    const intPart = result / 10n ** BigInt(scale);
    const fracPart = result % 10n ** BigInt(scale);
    return new Decimal$1([
      intPart,
      fracPart,
      scale
    ]);
  }
  /**
  * Returns the absolute value of this Decimal
  * @returns A new Decimal with non-negative components
  */
  abs() {
    return this._int < 0n || this._frac < 0n ? new Decimal$1([
      this._int < 0n ? -this._int : this._int,
      this._frac < 0n ? -this._frac : this._frac,
      this._scale
    ]) : this;
  }
  /**
  * Returns the negated value of this Decimal
  * @returns A new Decimal with inverted sign
  */
  neg() {
    return new Decimal$1([
      -this._int,
      -this._frac,
      this._scale
    ]);
  }
  /**
  * Checks if the value is exactly zero
  * @returns True if both int and frac parts are zero
  */
  isZero() {
    return this._int === 0n && this._frac === 0n;
  }
  /**
  * Checks if the value is negative
  * @returns True if negative
  */
  isNegative() {
    return this._int < 0n || this._int === 0n && this._frac < 0n;
  }
  /**
  * Compares this Decimal with another
  *
  * @param other The Decimal to compare with
  * @returns -1 if less, 0 if equal, 1 if greater
  */
  compare(other) {
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    const scale = Math.max(a.scale, b.scale);
    const aVal = a.value * 10n ** BigInt(scale - a.scale);
    const bVal = b.value * 10n ** BigInt(scale - b.scale);
    if (aVal < bVal) return -1;
    if (aVal > bVal) return 1;
    return 0;
  }
  /**
  * Rounds the Decimal to a fixed number of decimal places
  *
  * @param precision Number of digits to keep after the decimal point
  * @returns The new decimal instance
  */
  round(precision) {
    if (precision < 0) throw new InvalidDecimalError("Precision must be >= 0");
    const full = this.toBigIntWithScale();
    if (this._scale <= precision) {
      const factor$1 = 10n ** BigInt(precision - this._scale);
      const newValue = full.value * factor$1;
      const intPart$1 = newValue / 10n ** BigInt(precision);
      const fracPart$1 = newValue % 10n ** BigInt(precision);
      return new Decimal$1([
        intPart$1,
        fracPart$1,
        precision
      ]);
    }
    const factor = 10n ** BigInt(this._scale - precision);
    const half = factor / 2n;
    const rounded = full.value >= 0n ? (full.value + half) / factor : (full.value - half) / factor;
    const intPart = rounded / 10n ** BigInt(precision);
    const fracPart = rounded % 10n ** BigInt(precision);
    return new Decimal$1([
      intPart,
      fracPart,
      precision
    ]);
  }
  /**
  * Converts the number to fixed-point notation string
  *
  * @param precision Number of digits after the decimal point
  */
  toFixed(precision) {
    const rounded = this.round(precision);
    const sign = rounded.int < 0n || rounded.frac < 0n ? "-" : "";
    const absInt = rounded.int < 0n ? -rounded.int : rounded.int;
    if (precision === 0) return `${sign}${absInt}`;
    const absFrac = rounded.frac < 0n ? -rounded.frac : rounded.frac;
    const fracStr = absFrac.toString().padStart(precision, "0");
    return `${sign}${absInt}.${fracStr}`;
  }
  /**
  * Converts the Decimal to a native JavaScript number
  * @returns A number approximation (may lose precision)
  */
  toFloat() {
    return Number(this.toString());
  }
  /**
  * Converts to bigint by truncating the fractional part
  * @returns An bigint approximation (may lose precision)
  */
  toBigInt() {
    if (this._int >= 0n) return this._int;
    if (this._frac !== 0n) return this._int - 1n;
    return this._int;
  }
  /**
  * Returns the raw parts of the Decimal
  * @returns An object with int, frac, and scale
  */
  toParts() {
    return {
      int: this._int,
      frac: this._frac,
      scale: this._scale
    };
  }
  /**
  * Converts to scientific notation string (e.g., "1.23e4")
  */
  toScientific() {
    if (this.isZero()) return "0e0";
    const negative = this.isNegative();
    const abs = negative ? this.neg() : this;
    const str = abs.toString();
    const [intPart, fracPart = ""] = str.split(".");
    const raw$1 = (intPart + fracPart).replace(/^0+/, "");
    const firstSig = raw$1.search(/[1-9]/);
    if (firstSig === -1) return "0e0";
    let exponent;
    if (intPart !== "0") exponent = intPart.length - 1;
    else {
      let leading = 0;
      while (leading < fracPart.length && fracPart.charCodeAt(leading) === 48) leading++;
      exponent = -leading - 1;
    }
    let end = raw$1.length;
    while (end > 0 && raw$1.charCodeAt(end - 1) === 48) end--;
    const digits = raw$1.slice(0, end);
    const mantissa = digits.length > 1 ? `${digits[0]}.${digits.slice(1)}` : digits[0];
    return `${negative ? "-" : ""}${mantissa}e${exponent}`;
  }
  /**
  * Parses a number in scientific notation into a Decimal
  *
  * @param input The scientific notation string
  */
  static fromScientificNotation(input) {
    const trimmed = input.trim();
    if (!/^[+-]?\d+(\.\d+)?[eE][+-]?\d+$/.test(trimmed)) throw new InvalidDecimalError(`Invalid scientific notation: ${input}`);
    const [baseStr, expStr] = trimmed.split(/[eE]/);
    const exp = Number.parseInt(expStr, 10);
    const negative = baseStr.startsWith("-");
    const [intPart, fracPart = ""] = baseStr.replace(/^[-+]/, "").split(".");
    const raw$1 = intPart + fracPart;
    let start = 0;
    while (start < raw$1.length && raw$1.charCodeAt(start) === 48) start++;
    const digits = raw$1.slice(start) || "0";
    const pointIndex = intPart.length;
    const newPointIndex = pointIndex + exp;
    let result;
    if (newPointIndex <= 0) result = `0.${"0".repeat(-newPointIndex)}${digits}`;
    else if (newPointIndex >= digits.length) result = digits + "0".repeat(newPointIndex - digits.length);
    else result = `${digits.slice(0, newPointIndex)}.${digits.slice(newPointIndex)}`;
    return new Decimal$1(negative ? `-${result}` : result);
  }
  toBigIntWithScale() {
    return {
      value: this._int * 10n ** BigInt(this._scale) + this._frac,
      scale: this._scale
    };
  }
};
var NUMBER = /^-?\d+(\.\d+)?([eE][+-]?\d+)?$/;
var BigDecimal = class BigDecimal$1 extends Value {
  static {
    __name(this, "BigDecimal$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, BIG_DECIMAL_SYMBOL);
  }
  #text;
  /**
  * A bigdecimal from its text, in positional or scientific notation, or from a
  * {@link Decimal}, a `bigint` or an integer `number`
  */
  constructor(input) {
    super();
    if (input instanceof BigDecimal$1) this.#text = input.#text;
    else if (input instanceof Decimal) this.#text = input.toString();
    else if (typeof input === "bigint") this.#text = input.toString();
    else if (typeof input === "number") {
      if (!Number.isSafeInteger(input)) throw new InvalidDecimalError(`A bigdecimal is made from an exact number: pass ${input} as text`);
      this.#text = input.toString();
    } else {
      const text$1 = input.trim();
      if (!NUMBER.test(text$1)) throw new InvalidDecimalError(`Invalid bigdecimal: ${JSON.stringify(input)}`);
      this.#text = /e/i.test(text$1) ? new Decimal(text$1).toString() : text$1;
    }
    markSymbol$1(this, BIG_DECIMAL_SYMBOL);
  }
  /**
  * Whether a SurrealDB `decimal` holds the value exactly: a coefficient below 2^96 with at
  * most 28 digits after the point, as the server's `rust_decimal` does. The server writes such
  * a bigdecimal as a decimal, and the SDK sends one the same way.
  */
  fitsDecimal() {
    const { int: int$1, frac, scale } = this.toDecimal().toParts();
    let places = scale;
    let coefficient = (int$1 < 0n ? -int$1 : int$1) * 10n ** BigInt(scale) + (frac < 0n ? -frac : frac);
    while (places > 0 && coefficient % 10n === 0n) {
      coefficient /= 10n;
      places--;
    }
    return places <= 28 && coefficient < 2n ** 96n;
  }
  /**
  * The value as a {@link Decimal}, which holds it exactly
  */
  toDecimal() {
    return new Decimal(this.#text);
  }
  /**
  * Equal to a bigdecimal or decimal of the same value, whatever its notation
  */
  equals(other) {
    if (other instanceof BigDecimal$1) other = other.toDecimal();
    return other instanceof Decimal && this.toDecimal().compare(other) === 0;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * The text of the value, as it was made or as the server wrote it
  */
  toString() {
    return this.#text;
  }
};
function escapeRegex(str) {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
__name(escapeRegex, "escapeRegex");
var NANOSECOND$1 = 1n;
var MICROSECOND$1 = 1000n * NANOSECOND$1;
var MILLISECOND$1 = 1000n * MICROSECOND$1;
var SECOND$1 = 1000n * MILLISECOND$1;
var MINUTE = 60n * SECOND$1;
var HOUR = 60n * MINUTE;
var DAY = 24n * HOUR;
var WEEK = 7n * DAY;
var YEAR = 365n * DAY;
var UNITS = /* @__PURE__ */ new Map([
  ["ns", NANOSECOND$1],
  ["\xB5s", MICROSECOND$1],
  ["\u03BCs", MICROSECOND$1],
  ["us", MICROSECOND$1],
  ["ms", MILLISECOND$1],
  ["s", SECOND$1],
  ["m", MINUTE],
  ["h", HOUR],
  ["d", DAY],
  ["w", WEEK],
  ["y", YEAR]
]);
var UNITS_REVERSED = Array.from(UNITS).reduce((map, [unit, size]) => {
  map.set(size, unit);
  return map;
}, /* @__PURE__ */ new Map());
var DURATION_PART_REGEX = /* @__PURE__ */ new RegExp(`^(\\d+)\\.?\\d*(${Array.from(UNITS.keys()).map(escapeRegex).join("|")})`);
var FLOAT_DURATION_REGEX = /* @__PURE__ */ new RegExp(`^(\\d+(?:\\.\\d+)?)(${Array.from(UNITS.keys()).map(escapeRegex).join("|")})$`);
var Duration = class Duration$1 extends Value {
  static {
    __name(this, "Duration$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, DURATION_SYMBOL$1);
  }
  _seconds;
  _nanoseconds;
  constructor(input) {
    super();
    if (input instanceof Duration$1) {
      this._seconds = input._seconds;
      this._nanoseconds = input._nanoseconds;
    } else if (typeof input === "string") {
      const [s$1, ns] = Duration$1.parseString(input);
      this._seconds = s$1;
      this._nanoseconds = ns;
    } else {
      const s$1 = typeof input[0] === "bigint" ? input[0] : BigInt(Math.floor(input[0] ?? 0));
      const ns = typeof input[1] === "bigint" ? input[1] : BigInt(Math.floor(input[1] ?? 0));
      const total = s$1 * SECOND$1 + ns;
      this._seconds = total / SECOND$1;
      this._nanoseconds = total % SECOND$1;
    }
    markSymbol$1(this, DURATION_SYMBOL$1);
  }
  equals(other) {
    if (!(other instanceof Duration$1)) return false;
    return this._seconds === other._seconds && this._nanoseconds === other._nanoseconds;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns Human readable duration string
  */
  toString() {
    let remainingSeconds = this._seconds;
    let result = "";
    for (const [size, unit] of Array.from(UNITS_REVERSED).reverse()) if (size >= SECOND$1) {
      const amount = remainingSeconds / (size / SECOND$1);
      if (amount > 0n) {
        remainingSeconds %= size / SECOND$1;
        result += `${amount}${unit}`;
      }
    }
    let remainingNanoseconds = remainingSeconds * SECOND$1 + this._nanoseconds;
    for (const [size, unit] of Array.from(UNITS_REVERSED).reverse()) if (size < SECOND$1) {
      const amount = remainingNanoseconds / size;
      if (amount > 0n) {
        remainingNanoseconds %= size;
        result += `${amount}${unit}`;
      }
    }
    return result || "0ns";
  }
  /**
  * Converts the duration to a tuple
  */
  toCompact() {
    return this._nanoseconds > 0n ? [this._seconds, this._nanoseconds] : this._seconds > 0n ? [this._seconds] : [];
  }
  /**
  * Parses a duration string like "1h30m"
  *
  * @param input Input string
  * @returns [seconds, nanoseconds]
  */
  static parseString(input) {
    let seconds = 0n;
    let nanoseconds = 0n;
    let left = input;
    while (left !== "") {
      const match2 = left.match(DURATION_PART_REGEX);
      if (match2) {
        const amount = BigInt(match2[1]);
        const unit = match2[2];
        const factor = UNITS.get(unit);
        if (!factor) throw new InvalidDurationError(`Invalid duration unit: ${unit}`);
        if (factor >= SECOND$1) seconds += amount * (factor / SECOND$1);
        else nanoseconds += amount * factor;
        left = left.slice(match2[0].length);
      } else throw new InvalidDurationError("Could not match a next duration part");
    }
    seconds += nanoseconds / SECOND$1;
    nanoseconds %= SECOND$1;
    return [seconds, nanoseconds];
  }
  /**
  * Compare this duration with another
  *
  * @param other The duration to compare with
  * @returns -1 if this is shorter, 0 if equal, 1 if this is longer
  */
  compare(other) {
    if (this._seconds < other._seconds) return -1;
    if (this._seconds > other._seconds) return 1;
    if (this._nanoseconds < other._nanoseconds) return -1;
    if (this._nanoseconds > other._nanoseconds) return 1;
    return 0;
  }
  /**
  * Adds two durations together
  *
  * @param other The duration to add
  * @returns The resulting duration
  */
  add(other) {
    let sec = this._seconds + other._seconds;
    let ns = this._nanoseconds + other._nanoseconds;
    if (ns >= SECOND$1) {
      sec += 1n;
      ns -= SECOND$1;
    }
    return new Duration$1([sec, ns]);
  }
  /**
  * Subtracts another duration from this one
  *
  * @param other The duration to subtract
  * @returns The resulting duration
  */
  sub(other) {
    let sec = this._seconds - other._seconds;
    let ns = this._nanoseconds - other._nanoseconds;
    if (ns < 0n) {
      sec -= 1n;
      ns += SECOND$1;
    }
    return new Duration$1([sec, ns]);
  }
  /**
  * Multiplies the duration by a scalar
  *
  * @param factor The factor to multiply by
  * @returns The resulting duration
  */
  mul(factor) {
    const factorBig = typeof factor === "bigint" ? factor : BigInt(Math.floor(factor));
    const totalNs = this._seconds * SECOND$1 + this._nanoseconds;
    const resultNs = totalNs * factorBig;
    return new Duration$1([resultNs / SECOND$1, resultNs % SECOND$1]);
  }
  div(divisor) {
    if (typeof divisor === "object" && divisor instanceof Duration$1) {
      const a = this._seconds * SECOND$1 + this._nanoseconds;
      const b = divisor._seconds * SECOND$1 + divisor._nanoseconds;
      if (b === 0n) throw new InvalidDurationError("Division by zero duration");
      return a / b;
    }
    const divisorBig = typeof divisor === "bigint" ? divisor : BigInt(Math.floor(divisor));
    if (divisorBig === 0n) throw new InvalidDurationError("Division by zero");
    const totalNs = this._seconds * SECOND$1 + this._nanoseconds;
    const resultNs = totalNs / divisorBig;
    return new Duration$1([resultNs / SECOND$1, resultNs % SECOND$1]);
  }
  /**
  * Computes the remainder after division
  *
  * @param mod The divisor
  * @returns The remainder duration
  */
  mod(mod) {
    const a = this._seconds * SECOND$1 + this._nanoseconds;
    const b = mod._seconds * SECOND$1 + mod._nanoseconds;
    if (b === 0n) throw new InvalidDurationError("Modulo by zero duration");
    const resultNs = a % b;
    return new Duration$1([resultNs / SECOND$1, resultNs % SECOND$1]);
  }
  /**
  * Total nanoseconds in this duration
  */
  get nanoseconds() {
    return this._seconds * SECOND$1 + this._nanoseconds;
  }
  /**
  * Total microseconds
  */
  get microseconds() {
    return this.nanoseconds / MICROSECOND$1;
  }
  /**
  * Total milliseconds
  */
  get milliseconds() {
    return this.nanoseconds / MILLISECOND$1;
  }
  /**
  * Whole seconds in the duration
  */
  get seconds() {
    return this._seconds;
  }
  /**
  * Total whole minutes in the duration
  */
  get minutes() {
    return this._seconds / (MINUTE / SECOND$1);
  }
  /**
  * Total whole hours in the duration
  */
  get hours() {
    return this._seconds / (HOUR / SECOND$1);
  }
  /**
  * Total whole days in the duration
  */
  get days() {
    return this._seconds / (DAY / SECOND$1);
  }
  /**
  * Total whole weeks in the duration
  */
  get weeks() {
    return this._seconds / (WEEK / SECOND$1);
  }
  /**
  * Total whole years in the duration
  */
  get years() {
    return this._seconds / (YEAR / SECOND$1);
  }
  /**
  * Creates a Duration from nanoseconds
  *
  * @param ns Nanoseconds value
  * @returns The resulting duration
  */
  static nanoseconds(ns) {
    const n = typeof ns === "bigint" ? ns : BigInt(Math.floor(ns));
    return new Duration$1([n / SECOND$1, n % SECOND$1]);
  }
  /**
  * Creates a Duration from microseconds
  *
  * @param µs Microseconds value
  * @returns The resulting duration
  */
  static microseconds(\u00B5s) {
    const n = typeof \u00B5s === "bigint" ? \u00B5s : BigInt(Math.floor(\u00B5s));
    return Duration$1.nanoseconds(n * MICROSECOND$1);
  }
  /**
  * Creates a Duration from milliseconds
  *
  * @param ms Milliseconds value
  * @returns The resulting duration
  */
  static milliseconds(ms) {
    const n = typeof ms === "bigint" ? ms : BigInt(Math.floor(ms));
    return Duration$1.nanoseconds(n * MILLISECOND$1);
  }
  /**
  * Creates a Duration from seconds
  *
  * @param s Seconds value
  * @returns The resulting duration
  */
  static seconds(s$1) {
    const n = typeof s$1 === "bigint" ? s$1 : BigInt(Math.floor(s$1));
    return new Duration$1([n, 0n]);
  }
  /**
  * Creates a Duration from minutes
  *
  * @param m Minutes value
  * @returns The resulting duration
  */
  static minutes(m) {
    const n = typeof m === "bigint" ? m : BigInt(Math.floor(m));
    return new Duration$1([n * (MINUTE / SECOND$1), 0n]);
  }
  /**
  * Creates a Duration from hours
  *
  * @param h Hours value
  * @returns The resulting duration
  */
  static hours(h) {
    const n = typeof h === "bigint" ? h : BigInt(Math.floor(h));
    return new Duration$1([n * (HOUR / SECOND$1), 0n]);
  }
  /**
  * Creates a Duration from days
  *
  * @param d Days value
  * @returns The resulting duration
  */
  static days(d$1) {
    const n = typeof d$1 === "bigint" ? d$1 : BigInt(Math.floor(d$1));
    return new Duration$1([n * (DAY / SECOND$1), 0n]);
  }
  /**
  * Creates a Duration from weeks
  *
  * @param w Weeks value
  * @returns The resulting duration
  */
  static weeks(w) {
    const n = typeof w === "bigint" ? w : BigInt(Math.floor(w));
    return new Duration$1([n * (WEEK / SECOND$1), 0n]);
  }
  /**
  * Creates a Duration from years
  *
  * @param y Years value
  * @returns The resulting duration
  */
  static years(y) {
    const n = typeof y === "bigint" ? y : BigInt(Math.floor(y));
    return new Duration$1([n * (YEAR / SECOND$1), 0n]);
  }
  /**
  * Parses a duration from a float string with a single time unit, e.g. "1.998487792s", "1.5m", "500.0ms"
  *
  * @param input Float duration string
  * @returns The resulting duration
  */
  static parseFloat(input) {
    const match2 = input.match(FLOAT_DURATION_REGEX);
    if (!match2) throw new InvalidDurationError(`Invalid float duration string: ${input}`);
    const numStr = match2[1];
    const unit = match2[2];
    const factor = UNITS.get(unit);
    if (!factor) throw new InvalidDurationError(`Invalid duration unit: ${unit}`);
    const [intPart, fracPart = ""] = numStr.split(".");
    const scale = 10n ** BigInt(fracPart.length);
    const scaledValue = BigInt(intPart) * scale + BigInt(fracPart || "0");
    const totalNs = scaledValue * factor / scale;
    return new Duration$1([totalNs / SECOND$1, totalNs % SECOND$1]);
  }
  /**
  * Measures the elapsed time since the function was called
  * If the Performance API is available, it uses it to measure the elapsed time in nanoseconds
  *
  * @returns A function that returns the elapsed time as a Duration
  */
  static measure() {
    if (typeof performance !== "undefined" && performance.now) {
      const start$1 = performance.now();
      return () => {
        const end = performance.now();
        return Duration$1.nanoseconds((end - start$1) * 1e6);
      };
    }
    const start = Date.now();
    return () => {
      const end = Date.now();
      return Duration$1.milliseconds(end - start);
    };
  }
};
var NANOSECOND = 1n;
var MICROSECOND = 1000n * NANOSECOND;
var MILLISECOND = 1000n * MICROSECOND;
var SECOND = 1000n * MILLISECOND;
var DateTime = class DateTime$1 extends Value {
  static {
    __name(this, "DateTime$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, DATETIME_SYMBOL$1);
  }
  _seconds;
  _nanoseconds;
  static loadHr = typeof process !== "undefined" && process.hrtime ? {
    ns: process.hrtime.bigint(),
    ms: BigInt(Date.now())
  } : void 0;
  constructor(input) {
    super();
    if (input === void 0) {
      const now = DateTime$1.now();
      this._seconds = now._seconds;
      this._nanoseconds = now._nanoseconds;
    } else if (input instanceof DateTime$1) {
      this._seconds = input._seconds;
      this._nanoseconds = input._nanoseconds;
    } else if (input instanceof Date) {
      const time3 = input.getTime();
      if (Number.isNaN(time3)) throw new InvalidDateError(input);
      const s$1 = BigInt(Math.floor(time3 / 1e3));
      const ns = BigInt(time3 % 1e3 * 1e6);
      this._seconds = s$1;
      this._nanoseconds = ns;
    } else if (typeof input === "string") {
      const [s$1, ns] = DateTime$1.parseString(input);
      this._seconds = s$1;
      this._nanoseconds = ns;
    } else if (typeof input === "number") {
      this._seconds = BigInt(Math.floor(input));
      this._nanoseconds = 0n;
    } else if (typeof input === "bigint") {
      this._seconds = input;
      this._nanoseconds = 0n;
    } else {
      const s$1 = typeof input[0] === "bigint" ? input[0] : BigInt(Math.floor(input[0] ?? 0));
      const ns = typeof input[1] === "bigint" ? input[1] : BigInt(Math.floor(input[1] ?? 0));
      const totalSeconds = s$1 + ns / SECOND;
      this._seconds = totalSeconds;
      this._nanoseconds = ns % SECOND;
    }
    markSymbol$1(this, DATETIME_SYMBOL$1);
  }
  equals(other) {
    if (!(other instanceof DateTime$1)) return false;
    return this._seconds === other._seconds && this._nanoseconds === other._nanoseconds;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toISOString();
  }
  /**
  * @returns The ISO 8601 string representation of the datetime
  */
  toString() {
    return this.toISOString();
  }
  /**
  * Converts the datetime to a tuple
  */
  toCompact() {
    return [this._seconds, this._nanoseconds];
  }
  /**
  * Formats the datetime as an ISO 8601 string
  */
  toISOString() {
    const totalMilliseconds = Number(this._seconds) * 1e3 + Number(this._nanoseconds) / 1e6;
    const date = new Date(totalMilliseconds);
    const isoString = date.toISOString();
    if (this._nanoseconds === 0n) return isoString;
    const nanoseconds = this._nanoseconds.toString().padStart(9, "0");
    const trimmed = nanoseconds.replace(/0+$/, "");
    return isoString.replace(/\.\d{3}Z$/, `.${trimmed}Z`);
  }
  /**
  * Converts to JavaScript Date object
  */
  toDate() {
    const milliseconds = Number(this._seconds) * 1e3 + Math.floor(Number(this._nanoseconds) / 1e6);
    return new Date(milliseconds);
  }
  /**
  * Parses a datetime string
  *
  * @param input Input string (ISO 8601 format)
  * @returns [seconds, nanoseconds] tuple
  */
  static parseString(input) {
    const isoRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,9}))?Z?$/;
    const match2 = input.match(isoRegex);
    if (match2) {
      const [, year, month, day, hour, minute, second, fraction] = match2;
      const baseIsoString = `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
      const baseDate = new Date(baseIsoString);
      const baseTimestamp = baseDate.getTime();
      if (Number.isNaN(baseTimestamp)) throw new InvalidDateError(baseDate);
      const seconds = BigInt(Math.floor(baseTimestamp / 1e3));
      let nanoseconds = 0n;
      if (fraction) {
        const fractionLength = fraction.length;
        if (fractionLength <= 3) nanoseconds = BigInt(fraction.padEnd(3, "0")) * 1000000n;
        else if (fractionLength <= 6) nanoseconds = BigInt(fraction.padEnd(6, "0")) * 1000n;
        else nanoseconds = BigInt(fraction.padEnd(9, "0"));
      }
      return [seconds, nanoseconds];
    }
    const timestamp = Date.parse(input);
    if (!Number.isNaN(timestamp)) {
      const seconds = BigInt(Math.floor(timestamp / 1e3));
      const nanoseconds = BigInt(timestamp % 1e3 * 1e6);
      return [seconds, nanoseconds];
    }
    throw new InvalidDateError(`Invalid datetime format: ${input}`);
  }
  /**
  * Adds a duration to this datetime
  *
  * @param duration The duration to add
  * @returns The new datetime instance
  */
  add(duration$1) {
    const [durSeconds, durNanoseconds] = duration$1.toCompact();
    let newSeconds = this._seconds + (durSeconds || 0n);
    let newNanoseconds = this._nanoseconds + (durNanoseconds || 0n);
    if (newNanoseconds >= SECOND) {
      newSeconds += 1n;
      newNanoseconds -= SECOND;
    }
    return new DateTime$1([newSeconds, newNanoseconds]);
  }
  /**
  * Subtracts a duration from this datetime
  *
  * @param duration The duration to subtract
  * @returns The new datetime instance
  */
  sub(duration$1) {
    const [durSeconds, durNanoseconds] = duration$1.toCompact();
    let newSeconds = this._seconds - (durSeconds || 0n);
    let newNanoseconds = this._nanoseconds - (durNanoseconds || 0n);
    if (newNanoseconds < 0n) {
      newSeconds -= 1n;
      newNanoseconds += SECOND;
    }
    return new DateTime$1([newSeconds, newNanoseconds]);
  }
  /**
  * Calculates the duration between two datetimes
  *
  * @param other The other datetime
  */
  diff(other) {
    const totalThis = this._seconds * SECOND + this._nanoseconds;
    const totalOther = other._seconds * SECOND + other._nanoseconds;
    const diff = totalThis > totalOther ? totalThis - totalOther : totalOther - totalThis;
    return Duration.nanoseconds(diff);
  }
  /**
  * Compares this DateTime with another
  *
  * @param other The DateTime to compare with
  * @returns -1 if other is after, 0 if equal, 1 if other is before
  */
  compare(other) {
    const a = this.nanoseconds;
    const b = other.nanoseconds;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
  /** Total nanoseconds since Unix epoch */
  get nanoseconds() {
    return this._seconds * SECOND + this._nanoseconds;
  }
  /** Total microseconds since Unix epoch */
  get microseconds() {
    return this.nanoseconds / MICROSECOND;
  }
  /** Total milliseconds since Unix epoch */
  get milliseconds() {
    return Number(this.nanoseconds / MILLISECOND);
  }
  /** Seconds since Unix epoch */
  get seconds() {
    return Number(this._seconds);
  }
  /**
  * Creates a DateTime from nanoseconds since Unix epoch
  *
  * @param ns Nanoseconds value
  */
  static fromEpochNanoseconds(ns) {
    const n = typeof ns === "bigint" ? ns : BigInt(Math.floor(ns));
    return new DateTime$1([n / SECOND, n % SECOND]);
  }
  /**
  * Creates a DateTime from microseconds since Unix epoch
  *
  * @param µs Microseconds value
  */
  static fromEpochMicroseconds(\u00B5s) {
    const n = typeof \u00B5s === "bigint" ? \u00B5s : BigInt(Math.floor(\u00B5s));
    return DateTime$1.fromEpochNanoseconds(n * MICROSECOND);
  }
  /**
  * Creates a DateTime from milliseconds since Unix epoch
  *
  * @param ms Milliseconds value
  */
  static fromEpochMilliseconds(ms) {
    const n = typeof ms === "bigint" ? ms : BigInt(Math.floor(ms));
    return DateTime$1.fromEpochNanoseconds(n * MILLISECOND);
  }
  /**
  * Creates a DateTime from seconds since Unix epoch
  *
  * @param s Seconds value
  */
  static fromEpochSeconds(s$1) {
    const n = typeof s$1 === "bigint" ? s$1 : BigInt(Math.floor(s$1));
    return new DateTime$1([n, 0n]);
  }
  /**
  * Returns a new DateTime representing the current time
  */
  static now() {
    if (DateTime$1.loadHr) {
      const diffNs = process.hrtime.bigint() - DateTime$1.loadHr.ns;
      const totalNanoseconds = DateTime$1.loadHr.ms * 1000000n + diffNs;
      const seconds$1 = totalNanoseconds / 1000000000n;
      const nanoseconds$1 = totalNanoseconds % 1000000000n;
      return new DateTime$1([seconds$1, nanoseconds$1]);
    }
    if (typeof performance !== "undefined" && performance.now && performance.timeOrigin) {
      const totalMilliseconds = performance.timeOrigin + performance.now();
      const seconds$1 = BigInt(Math.floor(totalMilliseconds / 1e3));
      const nanoseconds$1 = BigInt(Math.floor(totalMilliseconds % 1e3 * 1e6));
      return new DateTime$1([seconds$1, nanoseconds$1]);
    }
    const now = Date.now();
    const seconds = BigInt(Math.floor(now / 1e3));
    const nanoseconds = BigInt(now % 1e3 * 1e6);
    return new DateTime$1([seconds, nanoseconds]);
  }
  /**
  * Returns a new DateTime representing the Unix epoch (1970-01-01T00:00:00Z)
  */
  static epoch() {
    return new DateTime$1([0n, 0n]);
  }
};
var FileRef = class FileRef$1 extends Value {
  static {
    __name(this, "FileRef$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, FILE_REF_SYMBOL$1);
  }
  _bucket;
  _key;
  constructor(bucket, key) {
    super();
    this._bucket = bucket;
    this._key = key.startsWith("/") ? key : `/${key}`;
    markSymbol$1(this, FILE_REF_SYMBOL$1);
  }
  get bucket() {
    return this._bucket;
  }
  get key() {
    return this._key;
  }
  equals(other) {
    if (!(other instanceof FileRef$1)) return false;
    return this._bucket === other._bucket && this._key === other._key;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  toString() {
    return `${fmtInner(this._bucket, true)}:${fmtInner(this._key, false)}`;
  }
};
function fmtInner(str, escapeSlash) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const code = str.charCodeAt(i);
    if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95 || code === 45 || code === 46 || !escapeSlash && code === 47) result += char;
    else result += `\\${char}`;
  }
  return result;
}
__name(fmtInner, "fmtInner");
var Future = class Future$1 extends Value {
  static {
    __name(this, "Future$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, FUTURE_SYMBOL$1);
  }
  _body;
  constructor(body) {
    super();
    this._body = body;
    markSymbol$1(this, FUTURE_SYMBOL$1);
  }
  equals(other) {
    if (!(other instanceof Future$1)) return false;
    return this._body === other._body;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns The uncomputed future notation
  */
  toString() {
    return `<future> ${this._body}`;
  }
  /**
  * The body of the future
  */
  get body() {
    return this._body;
  }
};
var Geometry = class Geometry$1 extends Value {
  static {
    __name(this, "Geometry$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, GEOMETRY_SYMBOL$1);
  }
  constructor() {
    super();
    markSymbol$1(this, GEOMETRY_SYMBOL$1);
  }
  equals(other) {
    if (!(other instanceof Geometry$1)) return false;
    return this.is(other);
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
  /**
  * Create a Geometry instance from a GeoJSON object.
  */
  static fromJSON(json) {
    switch (json.type) {
      case "Point":
        return new GeometryPoint(json);
      case "LineString":
        return new GeometryLine(json);
      case "Polygon":
        return new GeometryPolygon(json);
      case "MultiPoint":
        return new GeometryMultiPoint(json);
      case "MultiLineString":
        return new GeometryMultiLine(json);
      case "MultiPolygon":
        return new GeometryMultiPolygon(json);
      case "GeometryCollection":
        return new GeometryCollection(json);
    }
  }
};
var GeometryPoint = class GeometryPoint$1 extends Geometry {
  static {
    __name(this, "GeometryPoint$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, GEOMETRY_POINT_SYMBOL$1);
  }
  point;
  constructor(input) {
    super();
    if (input instanceof GeometryPoint$1) this.point = [...input.point];
    else if (Array.isArray(input)) this.point = [f(input[0]), f(input[1])];
    else this.point = [...input.coordinates];
    markSymbol$1(this, GEOMETRY_POINT_SYMBOL$1);
  }
  toJSON() {
    return {
      type: "Point",
      coordinates: this.coordinates
    };
  }
  get coordinates() {
    return this.point;
  }
  is(geometry) {
    if (!(geometry instanceof GeometryPoint$1)) return false;
    return this.point[0] === geometry.point[0] && this.point[1] === geometry.point[1];
  }
  clone() {
    return new GeometryPoint$1([...this.point]);
  }
};
var GeometryLine = class GeometryLine$1 extends Geometry {
  static {
    __name(this, "GeometryLine$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, GEOMETRY_LINE_SYMBOL$1);
  }
  line;
  constructor(input) {
    super();
    if (input instanceof GeometryLine$1) this.line = [...input.line];
    else if (Array.isArray(input)) this.line = input;
    else this.line = input.coordinates.map((c) => new GeometryPoint(c));
    markSymbol$1(this, GEOMETRY_LINE_SYMBOL$1);
  }
  toJSON() {
    return {
      type: "LineString",
      coordinates: this.coordinates
    };
  }
  get coordinates() {
    return this.line.map((g) => g.coordinates);
  }
  close() {
    if (!this.line[0].is(this.line.at(-1))) this.line.push(this.line[0]);
  }
  is(geometry) {
    if (!(geometry instanceof GeometryLine$1)) return false;
    if (this.line.length !== geometry.line.length) return false;
    for (let i = 0; i < this.line.length; i++) if (!this.line[i].is(geometry.line[i])) return false;
    return true;
  }
  clone() {
    return new GeometryLine$1(this.line.map((p) => p.clone()));
  }
};
var GeometryPolygon = class GeometryPolygon$1 extends Geometry {
  static {
    __name(this, "GeometryPolygon$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, GEOMETRY_POLYGON_SYMBOL$1);
  }
  polygon;
  constructor(input) {
    super();
    if (input instanceof GeometryPolygon$1) this.polygon = [...input.polygon];
    else if (Array.isArray(input)) this.polygon = input.map((l) => {
      const line = l.clone();
      line.close();
      return line;
    });
    else this.polygon = input.coordinates.map((ring) => {
      const line = new GeometryLine(ring.map((c) => new GeometryPoint(c)));
      line.close();
      return line;
    });
    markSymbol$1(this, GEOMETRY_POLYGON_SYMBOL$1);
  }
  toJSON() {
    return {
      type: "Polygon",
      coordinates: this.coordinates
    };
  }
  get coordinates() {
    return this.polygon.map((g) => g.coordinates);
  }
  is(geometry) {
    if (!(geometry instanceof GeometryPolygon$1)) return false;
    if (this.polygon.length !== geometry.polygon.length) return false;
    for (let i = 0; i < this.polygon.length; i++) if (!this.polygon[i].is(geometry.polygon[i])) return false;
    return true;
  }
  clone() {
    return new GeometryPolygon$1(this.polygon.map((p) => p.clone()));
  }
};
var GeometryMultiPoint = class GeometryMultiPoint$1 extends Geometry {
  static {
    __name(this, "GeometryMultiPoint$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, GEOMETRY_MULTI_POINT_SYMBOL$1);
  }
  points;
  constructor(input) {
    super();
    if (input instanceof GeometryMultiPoint$1) this.points = [...input.points];
    else if (Array.isArray(input)) this.points = input;
    else this.points = input.coordinates.map((c) => new GeometryPoint(c));
    markSymbol$1(this, GEOMETRY_MULTI_POINT_SYMBOL$1);
  }
  toJSON() {
    return {
      type: "MultiPoint",
      coordinates: this.coordinates
    };
  }
  get coordinates() {
    return this.points.map((g) => g.coordinates);
  }
  is(geometry) {
    if (!(geometry instanceof GeometryMultiPoint$1)) return false;
    if (this.points.length !== geometry.points.length) return false;
    for (let i = 0; i < this.points.length; i++) if (!this.points[i].is(geometry.points[i])) return false;
    return true;
  }
  clone() {
    return new GeometryMultiPoint$1(this.points.map((p) => p.clone()));
  }
};
var GeometryMultiLine = class GeometryMultiLine$1 extends Geometry {
  static {
    __name(this, "GeometryMultiLine$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, GEOMETRY_MULTI_LINE_SYMBOL$1);
  }
  lines;
  constructor(input) {
    super();
    if (input instanceof GeometryMultiLine$1) this.lines = [...input.lines];
    else if (Array.isArray(input)) this.lines = input;
    else this.lines = input.coordinates.map((coords) => new GeometryLine(coords.map((c) => new GeometryPoint(c))));
    markSymbol$1(this, GEOMETRY_MULTI_LINE_SYMBOL$1);
  }
  toJSON() {
    return {
      type: "MultiLineString",
      coordinates: this.coordinates
    };
  }
  get coordinates() {
    return this.lines.map((g) => g.coordinates);
  }
  is(geometry) {
    if (!(geometry instanceof GeometryMultiLine$1)) return false;
    if (this.lines.length !== geometry.lines.length) return false;
    for (let i = 0; i < this.lines.length; i++) if (!this.lines[i].is(geometry.lines[i])) return false;
    return true;
  }
  clone() {
    return new GeometryMultiLine$1(this.lines.map((p) => p.clone()));
  }
};
var GeometryMultiPolygon = class GeometryMultiPolygon$1 extends Geometry {
  static {
    __name(this, "GeometryMultiPolygon$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, GEOMETRY_MULTI_POLYGON_SYMBOL$1);
  }
  polygons;
  constructor(input) {
    super();
    if (input instanceof GeometryMultiPolygon$1) this.polygons = [...input.polygons];
    else if (Array.isArray(input)) this.polygons = input;
    else this.polygons = input.coordinates.map((rings) => new GeometryPolygon(rings.map((ring) => new GeometryLine(ring.map((c) => new GeometryPoint(c))))));
    markSymbol$1(this, GEOMETRY_MULTI_POLYGON_SYMBOL$1);
  }
  toJSON() {
    return {
      type: "MultiPolygon",
      coordinates: this.coordinates
    };
  }
  get coordinates() {
    return this.polygons.map((g) => g.coordinates);
  }
  is(geometry) {
    if (!(geometry instanceof GeometryMultiPolygon$1)) return false;
    if (this.polygons.length !== geometry.polygons.length) return false;
    for (let i = 0; i < this.polygons.length; i++) if (!this.polygons[i].is(geometry.polygons[i])) return false;
    return true;
  }
  clone() {
    return new GeometryMultiPolygon$1(this.polygons.map((p) => p.clone()));
  }
};
var GeometryCollection = class GeometryCollection$1 extends Geometry {
  static {
    __name(this, "GeometryCollection$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, GEOMETRY_COLLECTION_SYMBOL$1);
  }
  collection;
  constructor(input) {
    super();
    if (input instanceof GeometryCollection$1) this.collection = [...input.collection];
    else if (Array.isArray(input)) this.collection = input;
    else this.collection = input.geometries.map((g) => Geometry.fromJSON(g));
    markSymbol$1(this, GEOMETRY_COLLECTION_SYMBOL$1);
  }
  toJSON() {
    return {
      type: "GeometryCollection",
      geometries: this.geometries
    };
  }
  get geometries() {
    return this.collection.map((g) => g.toJSON());
  }
  is(geometry) {
    if (!(geometry instanceof GeometryCollection$1)) return false;
    if (this.collection.length !== geometry.collection.length) return false;
    for (let i = 0; i < this.collection.length; i++) if (!this.collection[i].is(geometry.collection[i])) return false;
    return true;
  }
  clone() {
    return new GeometryCollection$1(this.collection.map((p) => p.clone()));
  }
};
function f(num) {
  if (num instanceof Decimal) return num.toFloat();
  return num;
}
__name(f, "f");
var I32_MIN = -(2 ** 31);
var I32_MAX = 2 ** 31 - 1;
var I64_MIN$3 = -(2n ** 63n);
var I64_MAX$3 = 2n ** 63n - 1n;
var MICROS_PER_DAY = 86400000000n;
var MICROS_PER_MONTH = 30n * MICROS_PER_DAY;
function checkI32(name, value) {
  if (!Number.isInteger(value) || value < I32_MIN || value > I32_MAX) throw new InvalidDurationError(`An interval's ${name} must be a 32-bit integer: ${value}`);
  return value;
}
__name(checkI32, "checkI32");
var Interval = class Interval$1 extends Value {
  static {
    __name(this, "Interval$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, INTERVAL_SYMBOL);
  }
  /** The months, a 32-bit integer */
  months;
  /** The days, a 32-bit integer */
  days;
  /** The microseconds, a 64-bit integer */
  micros;
  /**
  * An interval from its parts, or from a `[months, days, micros]` tuple
  */
  constructor(input) {
    super();
    const [months, days, micros] = Array.isArray(input) ? input : [
      input.months ?? 0,
      input.days ?? 0,
      input.micros ?? 0
    ];
    this.months = checkI32("months", Number(months));
    this.days = checkI32("days", Number(days));
    if (typeof micros === "number" && !Number.isSafeInteger(micros)) throw new InvalidDurationError(`An interval's micros must be an integer: ${micros}`);
    this.micros = BigInt(micros);
    if (this.micros < I64_MIN$3 || this.micros > I64_MAX$3) throw new InvalidDurationError(`An interval's micros must be a 64-bit integer: ${micros}`);
    markSymbol$1(this, INTERVAL_SYMBOL);
  }
  /**
  * The total in microseconds, in which a month is 30 days and a day is 24 hours
  */
  get normalisedMicros() {
    return BigInt(this.months) * MICROS_PER_MONTH + BigInt(this.days) * MICROS_PER_DAY + this.micros;
  }
  /**
  * The `[months, days, micros]` of the interval, as `cbor.2` carries one
  */
  toCompact() {
    return [
      this.months,
      this.days,
      this.micros
    ];
  }
  /**
  * Equal to an interval of the same total, in which a month is 30 days and a day 24 hours
  */
  equals(other) {
    return other instanceof Interval$1 && other.normalisedMicros === this.normalisedMicros;
  }
  /**
  * Whether both intervals have the same parts, which is stricter than {@link equals}
  */
  identical(other) {
    return other.months === this.months && other.days === this.days && other.micros === this.micros;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * The interval as the server displays it, in ISO 8601: `P1Y2M3DT4H5M6.5S`, or `PT0S`
  */
  toString() {
    let out = "P";
    const years = Math.trunc(this.months / 12);
    const mons = this.months % 12;
    if (years !== 0) out += `${years}Y`;
    if (mons !== 0) out += `${mons}M`;
    if (this.days !== 0) out += `${this.days}D`;
    if (this.micros !== 0n) {
      out += "T";
      const sign = this.micros < 0n ? "-" : "";
      const abs = this.micros < 0n ? -this.micros : this.micros;
      const hours = abs / 3600000000n;
      const mins = abs % 3600000000n / 60000000n;
      const secs = abs % 60000000n / 1000000n;
      const frac = abs % 1000000n;
      if (hours !== 0n) out += `${sign}${hours}H`;
      if (mins !== 0n) out += `${sign}${mins}M`;
      if (secs !== 0n || frac !== 0n) {
        out += `${sign}${secs}`;
        if (frac !== 0n) out += `.${frac.toString().padStart(6, "0").replace(/0+$/, "")}`;
        out += "S";
      }
    }
    return out === "P" ? "PT0S" : out;
  }
};
var NANOS_PER_SECOND = 1e9;
var SECONDS_PER_DAY = 86400;
var NANOS_PER_DAY = SECONDS_PER_DAY * NANOS_PER_SECOND;
function daysFromCivil(year, month, day) {
  const y = month <= 2 ? year - 1 : year;
  const era = Math.floor(y / 400);
  const yoe = y - era * 400;
  const doy = Math.floor((153 * (month + (month > 2 ? -3 : 9)) + 2) / 5) + day - 1;
  const doe = yoe * 365 + Math.floor(yoe / 4) - Math.floor(yoe / 100) + doy;
  return era * 146097 + doe - 719468;
}
__name(daysFromCivil, "daysFromCivil");
function civilFromDays(days) {
  const z = days + 719468;
  const era = Math.floor(z / 146097);
  const doe = z - era * 146097;
  const yoe = Math.floor((doe - Math.floor(doe / 1460) + Math.floor(doe / 36524) - Math.floor(doe / 146096)) / 365);
  const doy = doe - (365 * yoe + Math.floor(yoe / 4) - Math.floor(yoe / 100));
  const mp = Math.floor((5 * doy + 2) / 153);
  const day = doy - Math.floor((153 * mp + 2) / 5) + 1;
  const month = mp < 10 ? mp + 3 : mp - 9;
  return [
    yoe + era * 400 + (month <= 2 ? 1 : 0),
    month,
    day
  ];
}
__name(civilFromDays, "civilFromDays");
var MIN_DAYS = daysFromCivil(-262143, 1, 1);
var MAX_DAYS = daysFromCivil(262142, 12, 31);
function formatDate(days) {
  const [year, month, day] = civilFromDays(days);
  const yyyy = year >= 0 && year <= 9999 ? String(year).padStart(4, "0") : `${year < 0 ? "-" : "+"}${String(Math.abs(year)).padStart(4, "0")}`;
  return `${yyyy}-${pad2(month)}-${pad2(day)}`;
}
__name(formatDate, "formatDate");
function parseDate(text$1) {
  const match2 = /^([+-]?\d{4,})-(\d{2})-(\d{2})$/.exec(text$1.trim());
  if (!match2) throw new InvalidDateError(`Invalid date: ${JSON.stringify(text$1)}`);
  const year = Number(match2[1]);
  const month = Number(match2[2]);
  const day = Number(match2[3]);
  const days = daysFromCivil(year, month, day);
  const [y, m, d$1] = civilFromDays(days);
  if (y !== year || m !== month || d$1 !== day) throw new InvalidDateError(`Invalid date: ${JSON.stringify(text$1)}`);
  if (days < MIN_DAYS || days > MAX_DAYS) throw new InvalidDateError(`Date out of range: ${JSON.stringify(text$1)}`);
  return days;
}
__name(parseDate, "parseDate");
function formatTime(nanos) {
  const secs = Math.floor(nanos / NANOS_PER_SECOND);
  const hh = pad2(Math.floor(secs / 3600));
  const mm = pad2(Math.floor(secs / 60) % 60);
  const ss = pad2(secs % 60);
  return `${hh}:${mm}:${ss}${formatFraction(nanos % NANOS_PER_SECOND)}`;
}
__name(formatTime, "formatTime");
function parseTime(text$1) {
  const invalid = /* @__PURE__ */ __name(() => new InvalidDateError(`Invalid time: ${JSON.stringify(text$1)}`), "invalid");
  const match2 = /^(\d{1,2}):(\d{1,2})(?::(\d{1,2})(?:\.(\d{1,9}))?)?$/.exec(text$1.trim());
  if (!match2) throw invalid();
  const hours = Number(match2[1]);
  const mins = Number(match2[2]);
  const secs = Number(match2[3] ?? 0);
  const frac = match2[4] ? Number(match2[4].padEnd(9, "0")) : 0;
  if (hours > 24 || mins > 59 || secs > 59) throw invalid();
  const nanos = ((hours * 60 + mins) * 60 + secs) * NANOS_PER_SECOND + frac;
  if (nanos > NANOS_PER_DAY) throw invalid();
  return nanos;
}
__name(parseTime, "parseTime");
function formatFraction(nanos) {
  if (nanos === 0) return "";
  if (nanos % 1e6 === 0) return `.${String(nanos / 1e6).padStart(3, "0")}`;
  if (nanos % 1e3 === 0) return `.${String(nanos / 1e3).padStart(6, "0")}`;
  return `.${String(nanos).padStart(9, "0")}`;
}
__name(formatFraction, "formatFraction");
function pad2(value) {
  return String(value).padStart(2, "0");
}
__name(pad2, "pad2");
var PlainDate = class PlainDate$1 extends Value {
  static {
    __name(this, "PlainDate$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, PLAIN_DATE_SYMBOL);
  }
  /** `infinity`, the latest date */
  static INFINITY = new PlainDate$1(MAX_DAYS);
  /** `-infinity`, the earliest date */
  static NEG_INFINITY = new PlainDate$1(MIN_DAYS);
  /**
  * The number of days since 1970-01-01
  */
  days;
  /**
  * A date from its days since 1970-01-01, from `YYYY-MM-DD`, from `infinity`, `-infinity` or
  * `epoch`, or from the UTC date of a `Date`.
  */
  constructor(input) {
    super();
    if (input instanceof PlainDate$1) this.days = input.days;
    else if (input instanceof Date) {
      if (Number.isNaN(input.getTime())) throw new InvalidDateError(input);
      this.days = daysFromCivil(input.getUTCFullYear(), input.getUTCMonth() + 1, input.getUTCDate());
    } else if (typeof input === "string") {
      const text$1 = input.trim().toLowerCase();
      if (text$1 === "infinity" || text$1 === "+infinity") this.days = MAX_DAYS;
      else if (text$1 === "-infinity") this.days = MIN_DAYS;
      else if (text$1 === "epoch") this.days = 0;
      else this.days = parseDate(input);
    } else if (Number.isSafeInteger(input) && input >= MIN_DAYS && input <= MAX_DAYS) this.days = input;
    else throw new InvalidDateError(`A date cannot be ${input} days from 1970-01-01`);
    markSymbol$1(this, PLAIN_DATE_SYMBOL);
  }
  /** The year, which is 0 for 1 BCE */
  get year() {
    return civilFromDays(this.days)[0];
  }
  /** The month, from 1 to 12 */
  get month() {
    return civilFromDays(this.days)[1];
  }
  /** The day of the month, from 1 to 31 */
  get day() {
    return civilFromDays(this.days)[2];
  }
  /** Whether this is `infinity` or `-infinity` */
  get isInfinite() {
    return this.days === MAX_DAYS || this.days === MIN_DAYS;
  }
  /**
  * Midnight UTC of this date as a `Date`, or an invalid `Date` past its range
  */
  toDate() {
    return /* @__PURE__ */ new Date(this.days * 864e5);
  }
  equals(other) {
    return other instanceof PlainDate$1 && other.days === this.days;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * The date as the server displays it: `YYYY-MM-DD`, `infinity` or `-infinity`
  */
  toString() {
    if (this.days === MAX_DAYS) return "infinity";
    if (this.days === MIN_DAYS) return "-infinity";
    return formatDate(this.days);
  }
};
var PlainTime = class PlainTime$1 extends Value {
  static {
    __name(this, "PlainTime$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, PLAIN_TIME_SYMBOL);
  }
  /**
  * The number of nanoseconds since midnight
  */
  nanos;
  /**
  * A time from its nanoseconds since midnight, or from `H:MM[:SS[.fraction]]`.
  */
  constructor(input) {
    super();
    if (input instanceof PlainTime$1) this.nanos = input.nanos;
    else if (typeof input === "string") this.nanos = parseTime(input);
    else {
      const nanos = Number(input);
      if (!Number.isSafeInteger(nanos) || nanos < 0 || nanos > NANOS_PER_DAY) throw new InvalidDateError(`A time cannot be ${input} nanoseconds past midnight`);
      this.nanos = nanos;
    }
    markSymbol$1(this, PLAIN_TIME_SYMBOL);
  }
  /** The hour, from 0 to 24 */
  get hours() {
    return Math.floor(this.nanos / (3600 * NANOS_PER_SECOND));
  }
  /** The minute, from 0 to 59 */
  get minutes() {
    return Math.floor(this.nanos / (60 * NANOS_PER_SECOND)) % 60;
  }
  /** The second, from 0 to 59 */
  get seconds() {
    return Math.floor(this.nanos / NANOS_PER_SECOND) % 60;
  }
  /** The nanoseconds within the second */
  get nanoseconds() {
    return this.nanos % NANOS_PER_SECOND;
  }
  equals(other) {
    return other instanceof PlainTime$1 && other.nanos === this.nanos;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * The time as the server displays it: `HH:MM:SS`, with a fraction when it has one
  */
  toString() {
    return formatTime(this.nanos);
  }
};
function getRangeJoin(beg, end) {
  let output = "";
  if (beg instanceof BoundExcluded) output += ">";
  output += "..";
  if (end instanceof BoundIncluded) output += "=";
  return output;
}
__name(getRangeJoin, "getRangeJoin");
var Range = class Range$1 extends Value {
  static {
    __name(this, "Range$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, RANGE_SYMBOL$1);
  }
  _beg;
  _end;
  constructor(beg, end) {
    super();
    this._beg = beg;
    this._end = end;
    markSymbol$1(this, RANGE_SYMBOL$1);
  }
  equals(other) {
    if (!(other instanceof Range$1)) return false;
    if (this._beg?.constructor !== other._beg?.constructor) return false;
    if (this._end?.constructor !== other._end?.constructor) return false;
    return equals(this._beg?.value, other._beg?.value) && equals(this._end?.value, other._end?.value);
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns The escaped range string
  */
  toString() {
    const beg = escapeRangeBound(this._beg);
    const end = escapeRangeBound(this._end);
    return `${beg}${getRangeJoin(this._beg, this._end)}${end}`;
  }
  /**
  * The range bound beginning
  */
  get begin() {
    return this._beg;
  }
  /**
  * The range bound ending
  */
  get end() {
    return this._end;
  }
};
var Table = class Table$1 extends Value {
  static {
    __name(this, "Table$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, TABLE_SYMBOL$1);
  }
  /**
  * Declares the record type of a table, while inferring its name.
  *
  * @example
  * ```ts
  * const users = Table.of<User>()("users"); // Table<"users", User>
  * ```
  */
  static of() {
    return (tb) => new Table$1(tb);
  }
  _name;
  constructor(tb) {
    super();
    if (typeof tb !== "string") throw new InvalidTableError("Table must be a string");
    this._name = tb;
    markSymbol$1(this, TABLE_SYMBOL$1);
  }
  equals(other) {
    if (!(other instanceof Table$1)) return false;
    return this._name === other._name;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns The escaped table name
  */
  toString() {
    return escapeIdent(this._name);
  }
  /**
  * The unescaped table name
  */
  get name() {
    return this._name;
  }
};
var _Table = Table;
var RecordId = class RecordId$1 extends Value {
  static {
    __name(this, "RecordId$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, RECORD_ID_SYMBOL$1);
  }
  _table;
  _id;
  constructor(table3, id$1) {
    super();
    if (!isValidTable(table3)) throw new InvalidRecordIdError("Table part is not valid");
    if (!isValidIdPart(id$1)) throw new InvalidRecordIdError("ID part is not valid");
    this._table = typeof table3 === "string" ? new _Table(table3) : table3;
    this._id = id$1;
    markSymbol$1(this, RECORD_ID_SYMBOL$1);
  }
  equals(other) {
    if (!(other instanceof RecordId$1)) return false;
    return this._table.equals(other._table) && equals(this._id, other._id);
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns The escaped record ID string including the table name
  */
  toString() {
    const tb = escapeIdent(this._table.name);
    const id$1 = escapeIdPart(this._id);
    return `${tb}:${id$1}`;
  }
  /**
  * The table part value
  */
  get table() {
    return this._table;
  }
  /**
  * The ID part value
  */
  get id() {
    return this._id;
  }
};
var _RecordId = RecordId;
var RecordIdRange = class RecordIdRange$1 extends Value {
  static {
    __name(this, "RecordIdRange$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, RECORD_ID_RANGE_SYMBOL$1);
  }
  _table;
  _beg;
  _end;
  constructor(table3, beg, end) {
    super();
    if (!isValidTable(table3)) throw new InvalidRecordIdError("Table part is not valid");
    if (!isValidIdBound(beg)) throw new InvalidRecordIdError("Begin bound is not valid");
    if (!isValidIdBound(end)) throw new InvalidRecordIdError("End bound is not valid");
    this._table = typeof table3 === "string" ? new _Table(table3) : table3;
    this._beg = beg;
    this._end = end;
    markSymbol$1(this, RECORD_ID_RANGE_SYMBOL$1);
  }
  equals(other) {
    if (!(other instanceof RecordIdRange$1)) return false;
    if (this._beg?.constructor !== other._beg?.constructor) return false;
    if (this._end?.constructor !== other._end?.constructor) return false;
    return this._table.equals(other._table) && equals(this._beg?.value, other._beg?.value) && equals(this._end?.value, other._end?.value);
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns The escaped record ID range string
  */
  toString() {
    const tb = escapeIdent(this._table.name);
    const beg = escapeRangeBound(this._beg);
    const end = escapeRangeBound(this._end);
    return `${tb}:${beg}${getRangeJoin(this._beg, this._end)}${end}`;
  }
  /**
  * The table part value
  */
  get table() {
    return this._table;
  }
  /**
  * The range bound beginning
  */
  get begin() {
    return this._beg;
  }
  /**
  * The range bound ending
  */
  get end() {
    return this._end;
  }
};
var _RecordIdRange = RecordIdRange;
var Regex = class Regex$1 extends Value {
  static {
    __name(this, "Regex$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, REGEX_SYMBOL);
  }
  /** The pattern, without delimiters */
  pattern;
  constructor(pattern) {
    super();
    if (pattern instanceof Regex$1) this.pattern = pattern.pattern;
    else if (typeof pattern === "string") this.pattern = pattern;
    else throw new InvalidRegexError("A regex is made from the text of its pattern");
    markSymbol$1(this, REGEX_SYMBOL);
  }
  /**
  * The pattern compiled by JavaScript's engine. Its syntax is close to, but not the same as,
  * the Rust `regex` crate's which the server uses.
  */
  toRegExp(flags) {
    return new RegExp(this.pattern, flags);
  }
  equals(other) {
    return other instanceof Regex$1 && other.pattern === this.pattern;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * The regex as SurrealQL writes it: `/pattern/`, with each `/` escaped
  */
  toString() {
    return `/${this.pattern.replaceAll("/", "\\/")}/`;
  }
};
var INTEGER_RANGES = {
  i8: [-(2n ** 7n), 2n ** 7n - 1n],
  u8: [0n, 2n ** 8n - 1n],
  i16: [-(2n ** 15n), 2n ** 15n - 1n],
  u16: [0n, 2n ** 16n - 1n],
  i32: [-(2n ** 31n), 2n ** 31n - 1n],
  u32: [0n, 2n ** 32n - 1n],
  u64: [0n, 2n ** 64n - 1n]
};
function checkInteger(kind, value) {
  if (typeof value === "number" && !Number.isSafeInteger(value)) throw new InvalidNumberError(`${value} is not an integer which ${kind} can hold exactly`);
  const int$1 = BigInt(value);
  const [min, max] = INTEGER_RANGES[kind];
  if (int$1 < min || int$1 > max) throw new InvalidNumberError(`${int$1} is outside the range of ${kind} (${min} to ${max})`);
  return int$1;
}
__name(checkInteger, "checkInteger");
function floorLog2(a) {
  let e = Math.floor(Math.log2(a));
  if (2 ** e > a) e--;
  else if (2 ** (e + 1) <= a) e++;
  return e;
}
__name(floorLog2, "floorLog2");
function f16round(value) {
  if (!Number.isFinite(value) || value === 0) return value;
  const sign = Math.sign(value);
  const abs = Math.abs(value);
  if (abs >= 65520) return sign * Number.POSITIVE_INFINITY;
  const exponent = floorLog2(abs);
  const quantum = exponent < -14 ? 2 ** -24 : 2 ** (exponent - 10);
  const steps = abs / quantum;
  let rounded = Math.round(steps);
  if (rounded - steps === 0.5 && rounded % 2 !== 0) rounded--;
  return sign * rounded * quantum;
}
__name(f16round, "f16round");
function f16Bits$1(value) {
  if (Number.isNaN(value)) return 32256;
  const sign = value < 0 || Object.is(value, -0) ? 32768 : 0;
  const abs = Math.abs(value);
  if (abs === Number.POSITIVE_INFINITY) return sign | 31744;
  if (abs === 0) return sign;
  if (abs < 2 ** -14) return sign | abs / 2 ** -24;
  const exponent = floorLog2(abs);
  return sign | exponent + 15 << 10 | (abs / 2 ** exponent - 1) * 1024;
}
__name(f16Bits$1, "f16Bits$1");
var SizedNumber = class SizedNumber$1 extends Value {
  static {
    __name(this, "SizedNumber$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, SIZED_NUMBER_SYMBOL);
  }
  /**
  * The value, which the kind holds exactly
  */
  value;
  constructor(value) {
    super();
    this.value = value;
    markSymbol$1(this, SIZED_NUMBER_SYMBOL);
  }
  /**
  * Equal to a number of the same kind and value. NaN equals NaN, and -0 differs from 0.
  */
  equals(other) {
    return other instanceof SizedNumber$1 && other.kind === this.kind && Object.is(other.value, this.value);
  }
  valueOf() {
    return this.value;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return typeof this.value === "bigint" ? this.value.toString() : this.value;
  }
  toString() {
    return Object.is(this.value, -0) ? "-0" : String(this.value);
  }
};
function isKind(instance, kind) {
  return hasSymbol$1(instance, SIZED_NUMBER_SYMBOL) && instance.kind === kind;
}
__name(isKind, "isKind");
var I8 = class extends SizedNumber {
  static {
    __name(this, "I8");
  }
  static [Symbol.hasInstance](instance) {
    return isKind(instance, "i8");
  }
  constructor(value) {
    super(Number(checkInteger("i8", value)));
  }
  get kind() {
    return "i8";
  }
};
var U8 = class extends SizedNumber {
  static {
    __name(this, "U8");
  }
  static [Symbol.hasInstance](instance) {
    return isKind(instance, "u8");
  }
  constructor(value) {
    super(Number(checkInteger("u8", value)));
  }
  get kind() {
    return "u8";
  }
};
var I16 = class extends SizedNumber {
  static {
    __name(this, "I16");
  }
  static [Symbol.hasInstance](instance) {
    return isKind(instance, "i16");
  }
  constructor(value) {
    super(Number(checkInteger("i16", value)));
  }
  get kind() {
    return "i16";
  }
};
var U16 = class extends SizedNumber {
  static {
    __name(this, "U16");
  }
  static [Symbol.hasInstance](instance) {
    return isKind(instance, "u16");
  }
  constructor(value) {
    super(Number(checkInteger("u16", value)));
  }
  get kind() {
    return "u16";
  }
};
var I32 = class extends SizedNumber {
  static {
    __name(this, "I32");
  }
  static [Symbol.hasInstance](instance) {
    return isKind(instance, "i32");
  }
  constructor(value) {
    super(Number(checkInteger("i32", value)));
  }
  get kind() {
    return "i32";
  }
};
var U32 = class extends SizedNumber {
  static {
    __name(this, "U32");
  }
  static [Symbol.hasInstance](instance) {
    return isKind(instance, "u32");
  }
  constructor(value) {
    super(Number(checkInteger("u32", value)));
  }
  get kind() {
    return "u32";
  }
};
var U64 = class extends SizedNumber {
  static {
    __name(this, "U64");
  }
  static [Symbol.hasInstance](instance) {
    return isKind(instance, "u64");
  }
  constructor(value) {
    super(checkInteger("u64", value));
  }
  get kind() {
    return "u64";
  }
};
var F16 = class extends SizedNumber {
  static {
    __name(this, "F16");
  }
  static [Symbol.hasInstance](instance) {
    return isKind(instance, "f16");
  }
  constructor(value) {
    if (typeof value !== "number") throw new InvalidNumberError("An f16 is made from a number");
    super(f16round(value));
  }
  get kind() {
    return "f16";
  }
};
var F32 = class extends SizedNumber {
  static {
    __name(this, "F32");
  }
  static [Symbol.hasInstance](instance) {
    return isKind(instance, "f32");
  }
  constructor(value) {
    if (typeof value !== "number") throw new InvalidNumberError("An f32 is made from a number");
    super(Math.fround(value));
  }
  get kind() {
    return "f32";
  }
};
var StringRecordId = class StringRecordId$1 extends Value {
  static {
    __name(this, "StringRecordId$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, STRING_RECORD_ID_SYMBOL$1);
  }
  _rid;
  constructor(rid) {
    super();
    if (rid instanceof StringRecordId$1) this._rid = rid._rid;
    else if (rid instanceof _RecordId) this._rid = rid.toString();
    else if (typeof rid === "string") this._rid = rid;
    else throw new InvalidRecordIdError("String Record ID must be a string");
    markSymbol$1(this, STRING_RECORD_ID_SYMBOL$1);
  }
  equals(other) {
    if (!(other instanceof StringRecordId$1)) return false;
    return this._rid === other._rid;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this._rid;
  }
  /**
  * @returns The string representation of the record ID
  */
  toString() {
    return this._rid;
  }
};
var MIN_SECONDS = MIN_DAYS * SECONDS_PER_DAY;
var MAX_SECONDS = MAX_DAYS * SECONDS_PER_DAY + SECONDS_PER_DAY - 1;
var MAX_NANOS = NANOS_PER_SECOND - 1;
var Timestamp = class Timestamp$1 extends Value {
  static {
    __name(this, "Timestamp$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, TIMESTAMP_SYMBOL);
  }
  /** `infinity`, the latest timestamp */
  static INFINITY = new Timestamp$1([MAX_SECONDS, MAX_NANOS]);
  /** `-infinity`, the earliest timestamp */
  static NEG_INFINITY = new Timestamp$1([MIN_SECONDS, 0]);
  /** The whole seconds since 1970-01-01T00:00:00 */
  seconds;
  /** The nanoseconds within the second. A leap second holds one billion or more. */
  nanoseconds;
  /**
  * A timestamp from its `[seconds, nanoseconds]` since 1970-01-01T00:00:00, from
  * `YYYY-MM-DDTHH:MM[:SS[.fraction]]` (a space may stand for the `T`), from `infinity` or
  * `-infinity`, or from the UTC reading of a `Date`.
  */
  constructor(input) {
    super();
    let seconds;
    let nanos;
    if (input instanceof Timestamp$1) {
      seconds = input.seconds;
      nanos = input.nanoseconds;
    } else if (input instanceof Date) {
      const ms = input.getTime();
      if (Number.isNaN(ms)) throw new InvalidDateError(input);
      seconds = Math.floor(ms / 1e3);
      nanos = (ms - seconds * 1e3) * 1e6;
    } else if (typeof input === "string") [seconds, nanos] = Timestamp$1.#parse(input);
    else {
      seconds = Number(input[0]);
      nanos = Number(input[1]);
    }
    if (!Number.isSafeInteger(seconds) || !Number.isSafeInteger(nanos) || seconds < MIN_SECONDS || seconds > MAX_SECONDS || nanos < 0 || nanos >= 2 * NANOS_PER_SECOND) throw new InvalidDateError(`A timestamp cannot be [${seconds}, ${nanos}]`);
    this.seconds = seconds;
    this.nanoseconds = nanos;
    markSymbol$1(this, TIMESTAMP_SYMBOL);
  }
  static #parse(input) {
    const text$1 = input.trim();
    const lower = text$1.toLowerCase();
    if (lower === "infinity" || lower === "+infinity") return [MAX_SECONDS, MAX_NANOS];
    if (lower === "-infinity") return [MIN_SECONDS, 0];
    if (lower === "epoch") return [0, 0];
    const at = text$1.search(/[T ]/);
    if (at < 0) throw new InvalidDateError(`Invalid timestamp: ${JSON.stringify(input)}`);
    const days = parseDate(text$1.slice(0, at));
    const nanos = parseTime(text$1.slice(at + 1));
    if (nanos >= NANOS_PER_DAY) throw new InvalidDateError(`Invalid timestamp: ${JSON.stringify(input)}`);
    const seconds = days * SECONDS_PER_DAY + Math.floor(nanos / NANOS_PER_SECOND);
    return [seconds, nanos % NANOS_PER_SECOND];
  }
  /** Whether this is `infinity` or `-infinity` */
  get isInfinite() {
    return this.equals(Timestamp$1.INFINITY) || this.equals(Timestamp$1.NEG_INFINITY);
  }
  /**
  * The `[seconds, nanoseconds]` since 1970-01-01T00:00:00, as `cbor.2` carries a timestamp
  */
  toCompact() {
    return [this.seconds, this.nanoseconds];
  }
  /**
  * This reading taken as UTC, as a `Date`. The `Date` drops what is below a millisecond.
  */
  toDate() {
    return new Date(this.seconds * 1e3 + Math.floor(this.nanoseconds / 1e6));
  }
  equals(other) {
    return other instanceof Timestamp$1 && other.seconds === this.seconds && other.nanoseconds === this.nanoseconds;
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * The timestamp as the server displays it: `YYYY-MM-DDTHH:MM:SS`, with a fraction when it
  * has one, or `infinity` or `-infinity`
  */
  toString() {
    if (this.seconds === MAX_SECONDS && this.nanoseconds === MAX_NANOS) return "infinity";
    if (this.seconds === MIN_SECONDS && this.nanoseconds === 0) return "-infinity";
    const days = Math.floor(this.seconds / SECONDS_PER_DAY);
    const secs = this.seconds - days * SECONDS_PER_DAY;
    const nanos = secs * NANOS_PER_SECOND + this.nanoseconds;
    const time3 = this.nanoseconds >= NANOS_PER_SECOND ? formatTime(nanos - NANOS_PER_SECOND).replace(/:59(\.|$)/, ":60$1") : formatTime(nanos);
    return `${formatDate(days)}T${time3}`;
  }
};
var DIGITS = "0123456789abcdef";
var UUID = class UUID$1 {
  static {
    __name(this, "UUID$1");
  }
  /** @param bytes - The 16-byte byte array representation. */
  constructor(bytes) {
    this.bytes = bytes;
  }
  /**
  * Creates an object from the internal representation, a 16-byte byte array
  * containing the binary UUID representation in the big-endian byte order.
  *
  * This method does NOT shallow-copy the argument, and thus the created object
  * holds the reference to the underlying buffer.
  *
  * @throws TypeError if the length of the argument is not 16.
  */
  static ofInner(bytes) {
    if (bytes.length !== 16) throw new TypeError("not 128-bit length");
    else return new UUID$1(bytes);
  }
  /**
  * Builds a byte array from UUIDv7 field values.
  *
  * @param unixTsMs - A 48-bit `unix_ts_ms` field value.
  * @param randA - A 12-bit `rand_a` field value.
  * @param randBHi - The higher 30 bits of 62-bit `rand_b` field value.
  * @param randBLo - The lower 32 bits of 62-bit `rand_b` field value.
  * @throws RangeError if any field value is out of the specified range.
  */
  static fromFieldsV7(unixTsMs, randA, randBHi, randBLo) {
    if (!Number.isInteger(unixTsMs) || !Number.isInteger(randA) || !Number.isInteger(randBHi) || !Number.isInteger(randBLo) || unixTsMs < 0 || randA < 0 || randBHi < 0 || randBLo < 0 || unixTsMs > 281474976710655 || randA > 4095 || randBHi > 1073741823 || randBLo > 4294967295) throw new RangeError("invalid field value");
    const bytes = new Uint8Array(16);
    bytes[0] = unixTsMs / 2 ** 40;
    bytes[1] = unixTsMs / 2 ** 32;
    bytes[2] = unixTsMs / 2 ** 24;
    bytes[3] = unixTsMs / 2 ** 16;
    bytes[4] = unixTsMs / 2 ** 8;
    bytes[5] = unixTsMs;
    bytes[6] = 112 | randA >>> 8;
    bytes[7] = randA;
    bytes[8] = 128 | randBHi >>> 24;
    bytes[9] = randBHi >>> 16;
    bytes[10] = randBHi >>> 8;
    bytes[11] = randBHi;
    bytes[12] = randBLo >>> 24;
    bytes[13] = randBLo >>> 16;
    bytes[14] = randBLo >>> 8;
    bytes[15] = randBLo;
    return new UUID$1(bytes);
  }
  /**
  * Builds a byte array from a string representation.
  *
  * This method accepts the following formats:
  *
  * - 32-digit hexadecimal format without hyphens: `0189dcd553117d408db09496a2eef37b`
  * - 8-4-4-4-12 hyphenated format: `0189dcd5-5311-7d40-8db0-9496a2eef37b`
  * - Hyphenated format with surrounding braces: `{0189dcd5-5311-7d40-8db0-9496a2eef37b}`
  * - RFC 9562 URN format: `urn:uuid:0189dcd5-5311-7d40-8db0-9496a2eef37b`
  *
  * Leading and trailing whitespaces represents an error.
  *
  * @throws SyntaxError if the argument could not parse as a valid UUID string.
  */
  static parse(uuid) {
    var _a, _b, _c, _d;
    let hex = void 0;
    switch (uuid.length) {
      case 32:
        hex = (_a = /^[0-9a-f]{32}$/i.exec(uuid)) === null || _a === void 0 ? void 0 : _a[0];
        break;
      case 36:
        hex = (_b = /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(uuid)) === null || _b === void 0 ? void 0 : _b.slice(1, 6).join("");
        break;
      case 38:
        hex = (_c = /^\{([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})\}$/i.exec(uuid)) === null || _c === void 0 ? void 0 : _c.slice(1, 6).join("");
        break;
      case 45:
        hex = (_d = /^urn:uuid:([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(uuid)) === null || _d === void 0 ? void 0 : _d.slice(1, 6).join("");
        break;
      default:
        break;
    }
    if (hex) {
      const inner = new Uint8Array(16);
      for (let i = 0; i < 16; i += 4) {
        const n = parseInt(hex.substring(2 * i, 2 * i + 8), 16);
        inner[i + 0] = n >>> 24;
        inner[i + 1] = n >>> 16;
        inner[i + 2] = n >>> 8;
        inner[i + 3] = n;
      }
      return new UUID$1(inner);
    } else throw new SyntaxError("could not parse UUID string");
  }
  /**
  * @returns The 8-4-4-4-12 canonical hexadecimal string representation
  * (`0189dcd5-5311-7d40-8db0-9496a2eef37b`).
  */
  toString() {
    let text$1 = "";
    for (let i = 0; i < this.bytes.length; i++) {
      text$1 += DIGITS.charAt(this.bytes[i] >>> 4);
      text$1 += DIGITS.charAt(this.bytes[i] & 15);
      if (i === 3 || i === 5 || i === 7 || i === 9) text$1 += "-";
    }
    return text$1;
  }
  /**
  * @returns The 32-digit hexadecimal representation without hyphens
  * (`0189dcd553117d408db09496a2eef37b`).
  */
  toHex() {
    let text$1 = "";
    for (let i = 0; i < this.bytes.length; i++) {
      text$1 += DIGITS.charAt(this.bytes[i] >>> 4);
      text$1 += DIGITS.charAt(this.bytes[i] & 15);
    }
    return text$1;
  }
  /** @returns The 8-4-4-4-12 canonical hexadecimal string representation. */
  toJSON() {
    return this.toString();
  }
  /**
  * Reports the variant field value of the UUID or, if appropriate, "NIL" or
  * "MAX".
  *
  * For convenience, this method reports "NIL" or "MAX" if `this` represents
  * the Nil or Max UUID, although the Nil and Max UUIDs are technically
  * subsumed under the variants `0b0` and `0b111`, respectively.
  */
  getVariant() {
    const n = this.bytes[8] >>> 4;
    if (n < 0) throw new Error("unreachable");
    else if (n <= 7) return this.bytes.every((e) => e === 0) ? "NIL" : "VAR_0";
    else if (n <= 11) return "VAR_10";
    else if (n <= 13) return "VAR_110";
    else if (n <= 15) return this.bytes.every((e) => e === 255) ? "MAX" : "VAR_RESERVED";
    else throw new Error("unreachable");
  }
  /**
  * Returns the version field value of the UUID or `undefined` if the UUID does
  * not have the variant field value of `0b10`.
  */
  getVersion() {
    return this.getVariant() === "VAR_10" ? this.bytes[6] >>> 4 : void 0;
  }
  /** Creates an object from `this`. */
  clone() {
    return new UUID$1(this.bytes.slice(0));
  }
  /** Returns true if `this` is equivalent to `other`. */
  equals(other) {
    return this.compareTo(other) === 0;
  }
  /**
  * Returns a negative integer, zero, or positive integer if `this` is less
  * than, equal to, or greater than `other`, respectively.
  */
  compareTo(other) {
    for (let i = 0; i < 16; i++) {
      const diff = this.bytes[i] - other.bytes[i];
      if (diff !== 0) return Math.sign(diff);
    }
    return 0;
  }
};
var V7Generator = class {
  static {
    __name(this, "V7Generator");
  }
  /**
  * Creates a generator object with the default random number generator, or
  * with the specified one if passed as an argument. The specified random
  * number generator should be cryptographically strong and securely seeded.
  */
  constructor(randomNumberGenerator) {
    this.timestamp = 0;
    this.counter = 0;
    this.random = randomNumberGenerator !== null && randomNumberGenerator !== void 0 ? randomNumberGenerator : getDefaultRandom();
  }
  /**
  * Generates a new UUIDv7 object from the current timestamp, or resets the
  * generator upon significant timestamp rollback.
  *
  * This method returns a monotonically increasing UUID by reusing the previous
  * timestamp even if the up-to-date timestamp is smaller than the immediately
  * preceding UUID's. However, when such a clock rollback is considered
  * significant (i.e., by more than ten seconds), this method resets the
  * generator and returns a new UUID based on the given timestamp, breaking the
  * increasing order of UUIDs.
  *
  * See {@link generateOrAbort} for the other mode of generation and
  * {@link generateOrResetCore} for the low-level primitive.
  */
  generate() {
    return this.generateOrResetCore(Date.now(), 1e4);
  }
  /**
  * Generates a new UUIDv7 object from the current timestamp, or returns
  * `undefined` upon significant timestamp rollback.
  *
  * This method returns a monotonically increasing UUID by reusing the previous
  * timestamp even if the up-to-date timestamp is smaller than the immediately
  * preceding UUID's. However, when such a clock rollback is considered
  * significant (i.e., by more than ten seconds), this method aborts and
  * returns `undefined` immediately.
  *
  * See {@link generate} for the other mode of generation and
  * {@link generateOrAbortCore} for the low-level primitive.
  */
  generateOrAbort() {
    return this.generateOrAbortCore(Date.now(), 1e4);
  }
  /**
  * Generates a new UUIDv7 object from the `unixTsMs` passed, or resets the
  * generator upon significant timestamp rollback.
  *
  * This method is equivalent to {@link generate} except that it takes a custom
  * timestamp and clock rollback allowance.
  *
  * @param rollbackAllowance - The amount of `unixTsMs` rollback that is
  * considered significant. A suggested value is `10_000` (milliseconds).
  * @throws RangeError if `unixTsMs` is not a 48-bit positive integer.
  */
  generateOrResetCore(unixTsMs, rollbackAllowance) {
    let value = this.generateOrAbortCore(unixTsMs, rollbackAllowance);
    if (value === void 0) {
      this.timestamp = 0;
      value = this.generateOrAbortCore(unixTsMs, rollbackAllowance);
    }
    return value;
  }
  /**
  * Generates a new UUIDv7 object from the `unixTsMs` passed, or returns
  * `undefined` upon significant timestamp rollback.
  *
  * This method is equivalent to {@link generateOrAbort} except that it takes a
  * custom timestamp and clock rollback allowance.
  *
  * @param rollbackAllowance - The amount of `unixTsMs` rollback that is
  * considered significant. A suggested value is `10_000` (milliseconds).
  * @throws RangeError if `unixTsMs` is not a 48-bit positive integer.
  */
  generateOrAbortCore(unixTsMs, rollbackAllowance) {
    const MAX_COUNTER = 4398046511103;
    if (!Number.isInteger(unixTsMs) || unixTsMs < 1 || unixTsMs > 281474976710655) throw new RangeError("`unixTsMs` must be a 48-bit positive integer");
    else if (rollbackAllowance < 0 || rollbackAllowance > 281474976710655) throw new RangeError("`rollbackAllowance` out of reasonable range");
    if (unixTsMs > this.timestamp) {
      this.timestamp = unixTsMs;
      this.resetCounter();
    } else if (unixTsMs + rollbackAllowance >= this.timestamp) {
      this.counter++;
      if (this.counter > MAX_COUNTER) {
        this.timestamp++;
        this.resetCounter();
      }
    } else return void 0;
    return UUID.fromFieldsV7(this.timestamp, Math.trunc(this.counter / 2 ** 30), this.counter & 2 ** 30 - 1, this.random.nextUint32());
  }
  /** Initializes the counter at a 42-bit random integer. */
  resetCounter() {
    this.counter = this.random.nextUint32() * 1024 + (this.random.nextUint32() & 1023);
  }
  /**
  * Generates a new UUIDv4 object utilizing the random number generator inside.
  *
  * @internal
  */
  generateV4() {
    const bytes = new Uint8Array(Uint32Array.of(this.random.nextUint32(), this.random.nextUint32(), this.random.nextUint32(), this.random.nextUint32()).buffer);
    bytes[6] = 64 | bytes[6] >>> 4;
    bytes[8] = 128 | bytes[8] >>> 2;
    return UUID.ofInner(bytes);
  }
};
var getDefaultRandom = /* @__PURE__ */ __name(() => {
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues !== "undefined") return new BufferedCryptoRandom();
  else {
    if (typeof UUIDV7_DENY_WEAK_RNG !== "undefined" && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
    return { nextUint32: /* @__PURE__ */ __name(() => Math.trunc(Math.random() * 65536) * 65536 + Math.trunc(Math.random() * 65536), "nextUint32") };
  }
}, "getDefaultRandom");
var BufferedCryptoRandom = class {
  static {
    __name(this, "BufferedCryptoRandom");
  }
  constructor() {
    this.buffer = new Uint32Array(8);
    this.cursor = 65535;
  }
  nextUint32() {
    if (this.cursor >= this.buffer.length) {
      crypto.getRandomValues(this.buffer);
      this.cursor = 0;
    }
    return this.buffer[this.cursor++];
  }
};
var defaultGenerator;
var uuidv7obj = /* @__PURE__ */ __name(() => (defaultGenerator || (defaultGenerator = new V7Generator())).generate(), "uuidv7obj");
var uuidv4obj = /* @__PURE__ */ __name(() => (defaultGenerator || (defaultGenerator = new V7Generator())).generateV4(), "uuidv4obj");
function isSharedArrayBuffer(value) {
  return typeof SharedArrayBuffer !== "undefined" && value instanceof SharedArrayBuffer;
}
__name(isSharedArrayBuffer, "isSharedArrayBuffer");
var Uuid = class Uuid$1 extends Value {
  static {
    __name(this, "Uuid$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$1(instance, UUID_SYMBOL$1);
  }
  _inner;
  constructor(uuid) {
    super();
    if (uuid instanceof ArrayBuffer || isSharedArrayBuffer(uuid)) this._inner = UUID.ofInner(new Uint8Array(uuid));
    else if (uuid instanceof Uint8Array) this._inner = UUID.ofInner(uuid);
    else if (uuid instanceof Uuid$1) this._inner = uuid._inner;
    else if (uuid instanceof UUID) this._inner = uuid;
    else this._inner = UUID.parse(uuid);
    markSymbol$1(this, UUID_SYMBOL$1);
  }
  equals(other) {
    if (!(other instanceof Uuid$1)) return false;
    return this._inner.equals(other._inner);
  }
  toJSON() {
    if (Value._useExperimentalToJson) return JsonCodec.DEFAULT.encode(this);
    return this._inner.toString();
  }
  /**
  * @returns The string representation of the UUID
  */
  toString() {
    return this._inner.toString();
  }
  /**
  * Converts the UUID to a Uint8Array
  */
  toUint8Array() {
    return this._inner.bytes;
  }
  /**
  * Converts the UUID to a ArrayBuffer
  */
  toBuffer() {
    return this._inner.bytes.buffer;
  }
  /**
  * Generate a new UUID v4
  */
  static v4() {
    return new Uuid$1(uuidv4obj());
  }
  /**
  * Generate a new UUID v7
  */
  static v7() {
    return new Uuid$1(uuidv7obj());
  }
};
function isValidIdPart(v) {
  if (v instanceof Uuid) return true;
  switch (typeof v) {
    case "string":
    case "number":
    case "bigint":
      return true;
    case "object":
      if (v === null) return false;
      if (Array.isArray(v)) return true;
      return isPlainObject$1(v);
    default:
      return false;
  }
}
__name(isValidIdPart, "isValidIdPart");
function isPlainObject$1(v) {
  if (v === null || typeof v !== "object") return false;
  const proto = Object.getPrototypeOf(v);
  return proto === null || proto === Object.prototype;
}
__name(isPlainObject$1, "isPlainObject$1");
function isValidIdBound(bound) {
  return bound instanceof BoundIncluded || bound instanceof BoundExcluded ? isValidIdPart(bound.value) : true;
}
__name(isValidIdBound, "isValidIdBound");
function isValidTable(tb) {
  return tb instanceof _Table || typeof tb === "string";
}
__name(isValidTable, "isValidTable");
function toSurqlString(input) {
  if (typeof input === "string") return `s${JSON.stringify(input)}`;
  if (input === null) return "NULL";
  if (input === void 0) return "NONE";
  if (typeof input === "object") {
    if (input instanceof Uuid) return `u${JSON.stringify(input.toString())}`;
    if (input instanceof Date || input instanceof DateTime) return `d${JSON.stringify(input.toISOString())}`;
    if (input instanceof _RecordId || input instanceof StringRecordId) return `r${JSON.stringify(input.toString())}`;
    if (input instanceof FileRef) return `f${JSON.stringify(input.toString())}`;
    if (input instanceof Geometry) return toSurqlString(input.toJSON());
    if (input instanceof Decimal) return `${input.toJSON()}dec`;
    if (input instanceof BigDecimal) return `${input.toString()}bigdec`;
    if (input instanceof PlainDate) return `pd${JSON.stringify(input.toString())}`;
    if (input instanceof PlainTime) return `pt${JSON.stringify(input.toString())}`;
    if (input instanceof Timestamp) return `ts${JSON.stringify(input.toString())}`;
    if (input instanceof Interval) return `ivl${JSON.stringify(input.toString())}`;
    if (input instanceof Regex) return input.toString();
    if (input instanceof SizedNumber) {
      const value = input.value;
      if (typeof value === "number" && (!Number.isFinite(value) || Object.is(value, -0))) return `<${input.kind}>${Object.is(value, -0) ? "-0.0" : value}`;
      return `${value}${input.kind}`;
    }
    if (input instanceof Duration || input instanceof Future || input instanceof Range || input instanceof _Table) return input.toString();
    switch (Object.getPrototypeOf(input)) {
      case Object.prototype: {
        let output = "{ ";
        const entries$1 = Object.entries(input);
        for (const [i, [k, v]] of entries$1.entries()) {
          output += `${JSON.stringify(k)}: ${toSurqlString(v)}`;
          if (i < entries$1.length - 1) output += ", ";
        }
        output += " }";
        return output;
      }
      case Map.prototype: {
        let output = "{ ";
        const entries$1 = Array.from(input.entries());
        for (const [i, [k, v]] of entries$1.entries()) {
          output += `${JSON.stringify(k)}: ${toSurqlString(v)}`;
          if (i < entries$1.length - 1) output += ", ";
        }
        output += " }";
        return output;
      }
      case Array.prototype: {
        const array$1 = input.map(toSurqlString);
        return `[ ${array$1.join(", ")} ]`;
      }
      case Set.prototype: {
        const set = [...input].map(toSurqlString);
        return `[ ${set.join(", ")} ]`;
      }
    }
  }
  return `${input}`;
}
__name(toSurqlString, "toSurqlString");
var MAX_i64 = 9223372036854775807n;
var SURREAL_RESERVED_KEYWORDS = /* @__PURE__ */ new Set([
  "alter",
  "begin",
  "break",
  "cancel",
  "commit",
  "continue",
  "create",
  "define",
  "delete",
  "for",
  "if",
  "info",
  "insert",
  "kill",
  "live",
  "option",
  "rebuild",
  "return",
  "relate",
  "remove",
  "select",
  "let",
  "show",
  "sleep",
  "throw",
  "update",
  "upsert",
  "use",
  "diff",
  "rand",
  "none",
  "null",
  "after",
  "before",
  "value",
  "by",
  "all",
  "true",
  "false",
  "where",
  "table",
  "tb",
  "sequence",
  "function",
  "explain"
]);
function escapeIdent(str) {
  if (str === "") return "\u27E8\u27E9";
  const first = str.charCodeAt(0);
  if (first > 47 && first < 58) return delimitIdent(str);
  if (str === "NaN" || str === "Infinity") return `\u27E8${str}\u27E9`;
  if (SURREAL_RESERVED_KEYWORDS.has(str.toLowerCase())) return delimitIdent(str);
  let code;
  let i;
  let len;
  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123) && !(code === 95)) return delimitIdent(str);
  }
  return str;
}
__name(escapeIdent, "escapeIdent");
function delimitIdent(str) {
  if (!str.includes("\\") && !str.includes("\u27E9")) return `\u27E8${str}\u27E9`;
  return `\`${str.replaceAll("\\", "\\\\").replaceAll("`", "\\`")}\``;
}
__name(delimitIdent, "delimitIdent");
function escapeNumber(num) {
  return num <= MAX_i64 ? num.toString() : `\u27E8${num}\u27E9`;
}
__name(escapeNumber, "escapeNumber");
function escapeIdPart(id$1) {
  return id$1 instanceof Uuid ? `u"${id$1.toString()}"` : typeof id$1 === "string" ? escapeIdent(id$1) : typeof id$1 === "bigint" || typeof id$1 === "number" ? escapeNumber(id$1) : toSurqlString(id$1);
}
__name(escapeIdPart, "escapeIdPart");
function escapeRangeBound(bound) {
  if (bound === void 0) return "";
  const value = bound.value;
  if (isValidIdPart(value)) return escapeIdPart(value);
  if (value instanceof Range) return `(${toSurqlString(value)})`;
  return toSurqlString(value);
}
__name(escapeRangeBound, "escapeRangeBound");
function jsonify(input) {
  if (typeof input === "object") {
    if (input === null) return null;
    if (input instanceof Date || input instanceof Value) return input.toJSON();
    switch (Object.getPrototypeOf(input)) {
      case Object.prototype: {
        const entries$1 = Object.entries(input);
        const mapped = entries$1.map(([k, v]) => [k, jsonify(v)]).filter(([_, v]) => v !== void 0);
        return Object.fromEntries(mapped);
      }
      case Map.prototype: {
        const entries$1 = Array.from(input);
        const mapped = entries$1.map(([k, v]) => [k, jsonify(v)]).filter(([_, v]) => v !== void 0);
        return new Map(mapped);
      }
      case Array.prototype:
        return input.map(jsonify);
      case Set.prototype:
        return new Set([...input].map(jsonify));
    }
  }
  return input;
}
__name(jsonify, "jsonify");
var POW_2_53$1 = 9007199254740992;
var POW_2_64 = BigInt(18446744073709552e3);
var Encoded = class {
  static {
    __name(this, "Encoded");
  }
  constructor(encoded) {
    this.encoded = encoded;
  }
};
var CborError = class {
  static {
    __name(this, "CborError");
  }
  message;
  constructor(message) {
    this.message = message;
  }
};
var CborNumberError = class extends CborError {
  static {
    __name(this, "CborNumberError");
  }
  name = "CborNumberError";
};
var CborRangeError = class extends CborError {
  static {
    __name(this, "CborRangeError");
  }
  name = "CborRangeError";
};
var CborInvalidMajorError = class extends CborError {
  static {
    __name(this, "CborInvalidMajorError");
  }
  name = "CborInvalidMajorError";
};
var CborBreak = class extends CborError {
  static {
    __name(this, "CborBreak");
  }
  name = "CborBreak";
  constructor() {
    super("Came across a break which was not intercepted by the decoder");
  }
};
var CborPartialDisabled = class extends CborError {
  static {
    __name(this, "CborPartialDisabled");
  }
  name = "CborPartialDisabled";
  constructor() {
    super("Tried to insert a Gap into a CBOR value, while partial mode is not enabled");
  }
};
var CborFillMissing = class extends CborError {
  static {
    __name(this, "CborFillMissing");
  }
  name = "CborFillMissing";
  constructor() {
    super("Fill for a gap is missing, and gap has no default");
  }
};
var Gap = class {
  static {
    __name(this, "Gap");
  }
  args = [];
  constructor(...args) {
    this.args = args;
  }
  fill(value) {
    return [this, value];
  }
  hasDefault() {
    return this.args.length === 1;
  }
  get default() {
    return this.args[0];
  }
};
var Writer = class {
  static {
    __name(this, "Writer");
  }
  constructor(byteLength = 256) {
    this.byteLength = byteLength;
    this._buf = new ArrayBuffer(this.byteLength), this._view = new DataView(this._buf), this._byte = new Uint8Array(this._buf);
  }
  _chunks = [];
  _pos = 0;
  _buf;
  _view;
  _byte;
  chunk(gap) {
    this._chunks.push([this._byte.subarray(0, this._pos), gap]), this._buf = new ArrayBuffer(this.byteLength), this._view = new DataView(this._buf), this._byte = new Uint8Array(this._buf), this._pos = 0;
  }
  get chunks() {
    return this._chunks;
  }
  get buffer() {
    return this._byte.subarray(0, this._pos);
  }
  claim(length) {
    let pos = this._pos;
    if (this._pos += length, this._pos <= this._buf.byteLength) return pos;
    let newLen = this._buf.byteLength << 1;
    for (; newLen < this._pos; ) newLen <<= 1;
    let oldb = this._byte;
    return this._buf = new ArrayBuffer(newLen), this._view = new DataView(this._buf), this._byte = new Uint8Array(this._buf), this._byte.set(oldb), pos;
  }
  writeUint8(value) {
    let pos = this.claim(1);
    this._byte[pos] = value;
  }
  writeUint16(value) {
    let pos = this.claim(2);
    this._view.setUint16(pos, value, false);
  }
  writeUint32(value) {
    let pos = this.claim(4);
    this._view.setUint32(pos, value, false);
  }
  writeUint64(value) {
    let pos = this.claim(8);
    this._view.setBigUint64(pos, value, false);
  }
  writeFloat32(value) {
    let pos = this.claim(4);
    this._view.setFloat32(pos, value, false);
  }
  writeFloat64(value) {
    let pos = this.claim(8);
    this._view.setFloat64(pos, value, false);
  }
  writeUint8Array(data) {
    if (data.byteLength === 0) return;
    let pos = this.claim(data.byteLength);
    this._byte.set(data, pos);
  }
  writePartiallyEncoded(data) {
    for (let [buf, gap] of data.chunks) this.writeUint8Array(buf), this.chunk(gap);
    this.writeUint8Array(data.end);
  }
  writeMajor(type2, length) {
    let base = type2 << 5;
    typeof length == "number" ? length < 24 ? this.writeUint8(base + length) : length < 256 ? (this.writeUint8(base + 24), this.writeUint8(length)) : length < 65536 ? (this.writeUint8(base + 25), this.writeUint16(length)) : length < 4294967296 ? (this.writeUint8(base + 26), this.writeUint32(length)) : (this.writeUint8(base + 27), this.writeUint64(BigInt(length))) : length < 24n ? this.writeUint8(base + Number(length)) : length < 256n ? (this.writeUint8(base + 24), this.writeUint8(Number(length))) : length < 65536n ? (this.writeUint8(base + 25), this.writeUint16(Number(length))) : length < 4294967296n ? (this.writeUint8(base + 26), this.writeUint32(Number(length))) : (this.writeUint8(base + 27), this.writeUint64(length));
  }
  output(partial = false, replacer) {
    return partial ? new PartiallyEncoded(this._chunks, this.buffer, replacer) : this.buffer;
  }
};
var PartiallyEncoded = class {
  static {
    __name(this, "PartiallyEncoded");
  }
  constructor(chunks, end, replacer) {
    this.chunks = chunks;
    this.end = end;
    this.replacer = replacer;
  }
  build(fills, partial) {
    let writer = new Writer(), map = new Map(fills);
    for (let [buffer, gap] of this.chunks) {
      let hasValue = map.has(gap) || gap.hasDefault();
      if (!partial && !hasValue) throw new CborFillMissing();
      if (writer.writeUint8Array(buffer), hasValue) {
        let data = map.get(gap) ?? gap.default;
        encode(data, {
          writer,
          replacer: this.replacer
        });
      } else writer.chunk(gap);
    }
    return writer.writeUint8Array(this.end), partial ? writer.output(true, this.replacer) : writer.output(false, this.replacer);
  }
};
var Tagged = class {
  static {
    __name(this, "Tagged");
  }
  constructor(tag, value) {
    this.tag = tag;
    this.value = value;
  }
};
var textEncoder = new TextEncoder();
function encode(input, options = {}) {
  let w = options.writer ?? new Writer(), fillsMap = new Map(options.fills ?? []);
  function inner(input2) {
    if (input2 = options.replacer?.(input2) ?? input2, input2 === void 0) return w.writeUint8(247);
    if (input2 === null) return w.writeUint8(246);
    if (input2 === true) return w.writeUint8(245);
    if (input2 === false) return w.writeUint8(244);
    switch (typeof input2) {
      case "number":
        if (Number.isInteger(input2)) if (input2 >= 0 && input2 <= 9007199254740992) w.writeMajor(0, input2);
        else if (input2 < 0 && input2 >= -9007199254740992) w.writeMajor(1, -(input2 + 1));
        else throw new CborNumberError("Number too big to be encoded");
        else w.writeUint8(251), w.writeFloat64(input2);
        return;
      case "bigint":
        if (input2 >= 0 && input2 < POW_2_64) w.writeMajor(0, input2);
        else if (input2 <= 0 && input2 >= -POW_2_64) w.writeMajor(1, -(input2 + 1n));
        else throw new CborNumberError("BigInt too big to be encoded");
        return;
      case "string": {
        let encoded = textEncoder.encode(input2);
        w.writeMajor(3, encoded.byteLength), w.writeUint8Array(encoded);
        return;
      }
      default:
        if (Array.isArray(input2)) {
          w.writeMajor(4, input2.length);
          for (let v of input2) inner(v);
          return;
        }
        if (input2 instanceof Tagged) {
          w.writeMajor(6, input2.tag), inner(input2.value);
          return;
        }
        if (input2 instanceof Encoded) {
          w.writeUint8Array(input2.encoded);
          return;
        }
        if (input2 instanceof Gap) {
          if (fillsMap.has(input2)) inner(fillsMap.get(input2));
          else if (options.partial) w.chunk(input2);
          else throw new CborPartialDisabled();
          return;
        }
        if (input2 instanceof PartiallyEncoded) {
          let res = options.partial ? input2.build(options.fills ?? [], true) : input2.build(options.fills ?? [], false);
          res instanceof PartiallyEncoded ? w.writePartiallyEncoded(res) : w.writeUint8Array(res);
          return;
        }
        if (input2 instanceof Uint8Array || input2 instanceof Uint16Array || input2 instanceof Uint32Array || input2 instanceof Int8Array || input2 instanceof Int16Array || input2 instanceof Int32Array || input2 instanceof Float32Array || input2 instanceof Float64Array || input2 instanceof ArrayBuffer) {
          let v = input2 instanceof Uint8Array ? input2 : new Uint8Array(input2);
          w.writeMajor(2, v.byteLength), w.writeUint8Array(v);
          return;
        }
        if (input2 instanceof Map) {
          w.writeMajor(5, input2.size);
          for (let [k, v] of input2) inner(k), inner(v);
        } else {
          let entries$1 = Object.entries(input2);
          w.writeMajor(5, entries$1.length);
          for (let [k, v] of entries$1) inner(k), inner(v);
        }
    }
  }
  __name(inner, "inner");
  return inner(input), options.partial ? w.output(true, options.replacer) : w.output(false, options.replacer);
}
__name(encode, "encode");
var F16_SIGN_MASK = 32768;
var F16_EXP_MASK = 31744;
var F16_FRAC_MASK = 1023;
var F16_EXP_SHIFT = 10;
var F16_EXP_BIAS = 15;
var F16_EXP_INF_NAN = 31;
var F16_FRAC_SCALE = 1024;
var F16_SUBNORMAL_SCALE = 2 ** -14;
var FLOAT16_EXP_LUT = Array.from({ length: 31 }, (_, e) => 2 ** (e - F16_EXP_BIAS));
var Reader = class {
  static {
    __name(this, "Reader");
  }
  _view;
  _byte;
  _pos = 0;
  constructor(buffer) {
    this._byte = buffer, this._view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  }
  skip(amount = 1) {
    let pos = this._pos;
    if (this._byte.length - pos < amount) throw new CborRangeError("Tried to read 1 byte beyond buffer bounds");
    this._pos = pos + amount;
  }
  peekUint8() {
    let pos = this._pos;
    if (this._byte.length - pos < 1) throw new CborRangeError("Tried to read 1 byte beyond buffer bounds");
    return this._view.getUint8(pos);
  }
  readUint8() {
    let pos = this._pos;
    if (this._byte.length - pos < 1) throw new CborRangeError("Tried to read 1 byte beyond buffer bounds");
    let val = this._view.getUint8(pos);
    return this._pos = pos + 1, val;
  }
  readUint16() {
    let pos = this._pos;
    if (this._byte.length - pos < 2) throw new CborRangeError("Tried to read 2 bytes beyond buffer bounds");
    let val = this._view.getUint16(pos);
    return this._pos = pos + 2, val;
  }
  readUint32() {
    let pos = this._pos;
    if (this._byte.length - pos < 4) throw new CborRangeError("Tried to read 4 bytes beyond buffer bounds");
    let val = this._view.getUint32(pos);
    return this._pos = pos + 4, val;
  }
  readUint64() {
    let pos = this._pos;
    if (this._byte.length - pos < 8) throw new CborRangeError("Tried to read 8 bytes beyond buffer bounds");
    let val = this._view.getBigUint64(pos);
    return this._pos = pos + 8, val;
  }
  readFloat16() {
    let val = this.readUint16(), sign = val & F16_SIGN_MASK ? -1 : 1, exp = (val & F16_EXP_MASK) >> F16_EXP_SHIFT, frac = val & F16_FRAC_MASK;
    return exp === 0 ? sign * (frac / F16_FRAC_SCALE) * F16_SUBNORMAL_SCALE : exp === F16_EXP_INF_NAN ? frac ? NaN : sign * Number.POSITIVE_INFINITY : sign * (1 + frac / F16_FRAC_SCALE) * FLOAT16_EXP_LUT[exp];
  }
  readFloat32() {
    let pos = this._pos;
    if (this._byte.length - pos < 4) throw new CborRangeError("Tried to read 4 bytes for float32 beyond buffer bounds");
    let val = this._view.getFloat32(pos);
    return this._pos = pos + 4, val;
  }
  readFloat64() {
    let pos = this._pos;
    if (this._byte.length - pos < 8) throw new CborRangeError("Tried to read 8 bytes for float64 beyond buffer bounds");
    let val = this._view.getFloat64(pos);
    return this._pos = pos + 8, val;
  }
  readBytes(amount) {
    let pos = this._pos;
    if (this._byte.length - pos < amount) throw new CborRangeError(`Tried to read ${amount} bytes beyond buffer`);
    return this._pos = pos + amount, this._byte.subarray(pos, this._pos);
  }
  readMajor() {
    let byte = this.readUint8(), major = byte >> 5;
    if (major < 0 || major > 7) throw new CborInvalidMajorError("Received invalid major type");
    return [major, byte & 31];
  }
  readMajorLength(length) {
    if (length <= 23) return length;
    if (length === 24) return this.readUint8();
    if (length === 25) return this.readUint16();
    if (length === 26) return this.readUint32();
    if (length === 27) {
      let read2 = this.readUint64();
      return read2 > 9007199254740992 ? read2 : Number(read2);
    }
    throw new CborRangeError("Expected a final length");
  }
};
function infiniteBytes(r$1, forMajor) {
  let w = new Writer();
  for (; ; ) {
    let [major, len] = r$1.readMajor();
    if (major === 7 && len === 31) break;
    if (major !== forMajor) throw new CborInvalidMajorError(`Expected a resource of the same major (${forMajor}) while processing an infinite resource`);
    if (len === 31) throw new CborRangeError("Expected a finite resource while processing an infinite resource");
    w.writeUint8Array(r$1.readBytes(Number(r$1.readMajorLength(len))));
  }
  return w.buffer.buffer;
}
__name(infiniteBytes, "infiniteBytes");
var textDecoder = new TextDecoder();
function decode(input, options = {}) {
  let r$1 = input instanceof Reader ? input : new Reader(input);
  return decodeValue(r$1, options);
}
__name(decode, "decode");
function decodeValue(r$1, options) {
  let [major, len] = r$1.readMajor();
  switch (major) {
    case 0:
      return r$1.readMajorLength(len);
    case 1: {
      let l = r$1.readMajorLength(len);
      return typeof l == "bigint" ? -(l + 1n) : -(l + 1);
    }
    case 2:
      return len !== 31 ? new Uint8Array(r$1.readBytes(Number(r$1.readMajorLength(len)))).buffer : infiniteBytes(r$1, 2);
    case 3: {
      let encoded = len !== 31 ? r$1.readBytes(Number(r$1.readMajorLength(len))) : infiniteBytes(r$1, 3);
      return textDecoder.decode(encoded);
    }
    case 4: {
      if (len !== 31) {
        let l = r$1.readMajorLength(len), arr2 = Array(l);
        for (let i = 0; i < l; i++) arr2[i] = decodeValue(r$1, options);
        return arr2;
      }
      let arr = [];
      for (; ; ) {
        if (r$1.peekUint8() === 255) {
          r$1.skip();
          break;
        }
        arr.push(decodeValue(r$1, options));
      }
      return arr;
    }
    case 5: {
      if (options.map === "map") {
        let map = /* @__PURE__ */ new Map();
        if (len !== 31) {
          let l = r$1.readMajorLength(len);
          for (let i = 0; i < l; i++) map.set(decodeValue(r$1, options), decodeValue(r$1, options));
        } else for (; ; ) {
          if (r$1.peekUint8() === 255) {
            r$1.skip();
            break;
          }
          map.set(decodeValue(r$1, options), decodeValue(r$1, options));
        }
        return map;
      }
      let obj = {};
      if (len !== 31) {
        let l = r$1.readMajorLength(len);
        for (let i = 0; i < l; i++) obj[decodeValue(r$1, options)] = decodeValue(r$1, options);
      } else for (; ; ) {
        if (r$1.peekUint8() === 255) {
          r$1.skip();
          break;
        }
        obj[decodeValue(r$1, options)] = decodeValue(r$1, options);
      }
      return obj;
    }
    case 6: {
      let tag = Number(r$1.readMajorLength(len)), value = decodeValue(r$1, options), replacer = options.tagged?.[tag];
      return replacer ? replacer(value) : new Tagged(tag, value);
    }
    case 7:
      switch (len) {
        case 20:
          return false;
        case 21:
          return true;
        case 22:
          return null;
        case 23:
          return;
        case 25:
          return r$1.readFloat16();
        case 26:
          return r$1.readFloat32();
        case 27:
          return r$1.readFloat64();
        case 31:
          throw new CborBreak();
      }
  }
  throw new CborInvalidMajorError(`Unable to decode value with major tag ${major}`);
}
__name(decodeValue, "decodeValue");
var StrictReader = class extends Reader {
  static {
    __name(this, "StrictReader");
  }
  /** The major type of the item read last */
  major = 0;
  /** The additional information of the item read last: 25, 26 or 27 for a float */
  info = 0;
  readMajor() {
    const head = super.readMajor();
    [this.major, this.info] = head;
    return head;
  }
  /** Whether the item read last is an integer */
  get isInteger() {
    return this.major === 0 || this.major === 1;
  }
  /** Whether the item read last is a float */
  get isFloat() {
    return this.major === 7 && this.info >= 25 && this.info <= 27;
  }
};
function rangeToCbor([beg, end]) {
  function encodeBound(bound) {
    if (!bound) return null;
    if (hasSymbol$1(bound, BOUND_INCLUDED_SYMBOL$1)) return new Tagged(TAG_BOUND_INCLUDED, bound.value);
    if (hasSymbol$1(bound, BOUND_EXCLUDED_SYMBOL$1)) return new Tagged(TAG_BOUND_EXCLUDED, bound.value);
    return null;
  }
  __name(encodeBound, "encodeBound");
  return [encodeBound(beg), encodeBound(end)];
}
__name(rangeToCbor, "rangeToCbor");
function cborToRange(range) {
  function decodeBound(bound) {
    if (bound === null) return void 0;
    if (hasSymbol$1(bound, BOUND_INCLUDED_SYMBOL$1)) return bound;
    if (hasSymbol$1(bound, BOUND_EXCLUDED_SYMBOL$1)) return bound;
    throw new SqonError("Expected the bounds to be decoded already");
  }
  __name(decodeBound, "decodeBound");
  return [decodeBound(range[0]), decodeBound(range[1])];
}
__name(cborToRange, "cborToRange");
var TAG_SPEC_DATETIME = 0;
var TAG_SPEC_UUID = 37;
var TAG_NONE = 6;
var TAG_TABLE = 7;
var TAG_RECORDID = 8;
var TAG_STRING_UUID = 9;
var TAG_STRING_DECIMAL = 10;
var TAG_CUSTOM_DATETIME = 12;
var TAG_STRING_DURATION = 13;
var TAG_CUSTOM_DURATION = 14;
var TAG_FUTURE = 15;
var TAG_RANGE = 49;
var TAG_BOUND_INCLUDED = 50;
var TAG_BOUND_EXCLUDED = 51;
var TAG_FILE_POINTER = 55;
var TAG_SET = 56;
var TAG_SHAPED_BLOCK = 57;
var TAG_GEOMETRY_POINT = 88;
var TAG_GEOMETRY_LINE = 89;
var TAG_GEOMETRY_POLYGON = 90;
var TAG_GEOMETRY_MULTIPOINT = 91;
var TAG_GEOMETRY_MULTILINE = 92;
var TAG_GEOMETRY_MULTIPOLYGON = 93;
var TAG_GEOMETRY_COLLECTION = 94;
var TAG_DATE = 100;
var TAG_TIME = 189;
var TAG_TIMESTAMP = 190;
var TAG_INTERVAL = 191;
var TAG_BIGDECIMAL = 192;
var TAG_REGEX = 193;
var TAG_SIZED = {
  i8: 180,
  u8: 181,
  i16: 182,
  u16: 183,
  i32: 184,
  u32: 185,
  u64: 186,
  f16: 187,
  f32: 188
};
var SIZED_CLASSES = {
  i8: I8,
  u8: U8,
  i16: I16,
  u16: U16,
  i32: I32,
  u32: U32,
  u64: U64,
  f16: F16,
  f32: F32
};
var I64_MIN$2 = -(2n ** 63n);
var I64_MAX$2 = 2n ** 63n - 1n;
function uint64(value) {
  if (typeof value !== "bigint" || value <= I64_MAX$2) return value;
  const buf = new Uint8Array(9);
  buf[0] = 27;
  new DataView(buf.buffer).setBigUint64(1, value, false);
  return new Encoded(buf);
}
__name(uint64, "uint64");
function encodeFloat(value) {
  if (Number.isNaN(value) || Object.is(f16round(value), value)) {
    const bits = f16Bits$1(value);
    return new Encoded(new Uint8Array([
      249,
      bits >> 8,
      bits & 255
    ]));
  }
  const width = Math.fround(value) === value ? 4 : 8;
  const buf = new Uint8Array(width + 1);
  const view = new DataView(buf.buffer);
  if (width === 4) {
    buf[0] = 250;
    view.setFloat32(1, value, false);
  } else {
    buf[0] = 251;
    view.setFloat64(1, value, false);
  }
  return new Encoded(buf);
}
__name(encodeFloat, "encodeFloat");
var CborCodec = class CborCodec$1 {
  static {
    __name(this, "CborCodec$1");
  }
  /**
  * The default CborCodec instance.
  */
  static DEFAULT = new CborCodec$1({});
  #options;
  #reader;
  constructor(options) {
    this.#options = options;
  }
  /**
  * The CBOR dialect this codec speaks: 1 for `cbor`, 2 for `cbor.2`
  */
  get version() {
    return this.#options.version ?? 1;
  }
  encode(data) {
    return encode(data, {
      replacer: this.replacer,
      partial: false
    });
  }
  decode(data) {
    const reader = new StrictReader(data);
    const outer = this.#reader;
    this.#reader = reader;
    try {
      return decode(reader, { tagged: this.tagged });
    } finally {
      this.#reader = outer;
    }
  }
  replacer = /* @__PURE__ */ __name((input) => {
    const value = this.#encodeValue(input);
    if (typeof value === "bigint" && (value < I64_MIN$2 || value > I64_MAX$2)) throw new InvalidNumberError(`The integer ${value} is outside the signed 64-bit range of a SurrealDB int: send it as a Decimal, or as a U64 when it fits one`);
    if (value && hasSymbol$1(value, SIZED_NUMBER_SYMBOL)) return this.#encodeSized(value);
    if (Object.is(value, -0)) return encodeFloat(-0);
    if (typeof value === "number" && Number.isInteger(value) && (value > POW_2_53$1 || value < -POW_2_53$1)) {
      const buf = new Uint8Array(9);
      buf[0] = 251;
      new DataView(buf.buffer, buf.byteOffset, 9).setFloat64(1, value, false);
      return new Encoded(buf);
    }
    if (value && hasSymbol$1(value, PLAIN_DATE_SYMBOL)) return this.#encodeDate(value);
    if (value && hasSymbol$1(value, PLAIN_TIME_SYMBOL)) return this.#encodeTime(value);
    if (value && hasSymbol$1(value, TIMESTAMP_SYMBOL)) return this.#encodeTimestamp(value);
    if (value && hasSymbol$1(value, INTERVAL_SYMBOL)) return this.#encodeInterval(value);
    if (value && hasSymbol$1(value, BIG_DECIMAL_SYMBOL)) return this.#encodeBigDecimal(value);
    if (value && hasSymbol$1(value, REGEX_SYMBOL)) return this.#encodeRegex(value);
    if (value instanceof Date) return new Tagged(TAG_CUSTOM_DATETIME, new DateTime(value).toCompact());
    if (value && hasSymbol$1(value, DATETIME_SYMBOL$1)) return new Tagged(TAG_CUSTOM_DATETIME, value.toCompact());
    if (value === void 0) return new Tagged(TAG_NONE, null);
    if (value && hasSymbol$1(value, UUID_SYMBOL$1)) return new Tagged(TAG_SPEC_UUID, value.toBuffer());
    if (value && hasSymbol$1(value, DECIMAL_SYMBOL$1)) return new Tagged(TAG_STRING_DECIMAL, value.toString());
    if (value && hasSymbol$1(value, DURATION_SYMBOL$1)) return new Tagged(TAG_CUSTOM_DURATION, value.toCompact().map(uint64));
    if (value && hasSymbol$1(value, RECORD_ID_SYMBOL$1)) return new Tagged(TAG_RECORDID, [value.table.name, value.id]);
    if (value && hasSymbol$1(value, STRING_RECORD_ID_SYMBOL$1)) return new Tagged(TAG_RECORDID, value.toString());
    if (value && hasSymbol$1(value, RECORD_ID_RANGE_SYMBOL$1)) return new Tagged(TAG_RECORDID, [value.table.name, new Tagged(TAG_RANGE, rangeToCbor([value.begin, value.end]))]);
    if (value && hasSymbol$1(value, TABLE_SYMBOL$1)) return new Tagged(TAG_TABLE, value.name);
    if (value && hasSymbol$1(value, FUTURE_SYMBOL$1)) {
      if (this.version === 2) throw new UnsupportedValueError("SurrealDB 4.0 has no futures to send one to");
      return new Tagged(TAG_FUTURE, value.body);
    }
    if (value && hasSymbol$1(value, RANGE_SYMBOL$1)) return new Tagged(TAG_RANGE, rangeToCbor([value.begin, value.end]));
    if (value && hasSymbol$1(value, FILE_REF_SYMBOL$1)) return new Tagged(TAG_FILE_POINTER, [value.bucket, value.key]);
    if (value instanceof Set) return new Tagged(TAG_SET, [...value]);
    if (value && hasSymbol$1(value, GEOMETRY_POINT_SYMBOL$1)) return new Tagged(TAG_GEOMETRY_POINT, value.point);
    if (value && hasSymbol$1(value, GEOMETRY_LINE_SYMBOL$1)) return new Tagged(TAG_GEOMETRY_LINE, value.line);
    if (value && hasSymbol$1(value, GEOMETRY_POLYGON_SYMBOL$1)) return new Tagged(TAG_GEOMETRY_POLYGON, value.polygon);
    if (value && hasSymbol$1(value, GEOMETRY_MULTI_POINT_SYMBOL$1)) return new Tagged(TAG_GEOMETRY_MULTIPOINT, value.points);
    if (value && hasSymbol$1(value, GEOMETRY_MULTI_LINE_SYMBOL$1)) return new Tagged(TAG_GEOMETRY_MULTILINE, value.lines);
    if (value && hasSymbol$1(value, GEOMETRY_MULTI_POLYGON_SYMBOL$1)) return new Tagged(TAG_GEOMETRY_MULTIPOLYGON, value.polygons);
    if (value && hasSymbol$1(value, GEOMETRY_COLLECTION_SYMBOL$1)) return new Tagged(TAG_GEOMETRY_COLLECTION, value.collection);
    return value;
  }, "replacer");
  tagged = {
    [TAG_SPEC_DATETIME]: (v) => this.#decodeValue(this.#resolveSpecDate(v)),
    [TAG_CUSTOM_DATETIME]: (v) => this.#decodeValue(this.#resolveCustomDate(v)),
    [TAG_SPEC_UUID]: (v) => this.#decodeValue(new Uuid(v)),
    [TAG_STRING_UUID]: (v) => this.#decodeValue(new Uuid(v)),
    [TAG_NONE]: (_v) => this.#decodeValue(void 0),
    [TAG_STRING_DECIMAL]: (v) => this.#decodeValue(new Decimal(v)),
    [TAG_STRING_DURATION]: (v) => this.#decodeValue(new Duration(v)),
    [TAG_CUSTOM_DURATION]: (v) => this.#decodeValue(new Duration(v)),
    [TAG_TABLE]: (v) => this.#decodeValue(new _Table(v)),
    [TAG_FUTURE]: (v) => this.#decodeValue(new Future(v)),
    [TAG_RANGE]: (v) => this.#decodeValue(new Range(...cborToRange(v))),
    [TAG_BOUND_INCLUDED]: (v) => this.#decodeValue(new BoundIncluded(v)),
    [TAG_BOUND_EXCLUDED]: (v) => this.#decodeValue(new BoundExcluded(v)),
    [TAG_RECORDID]: (v) => {
      if (typeof v === "string") return this.#decodeValue(new StringRecordId(v));
      if (hasSymbol$1(v[1], RANGE_SYMBOL$1)) return this.#decodeValue(new _RecordIdRange(v[0], v[1].begin, v[1].end));
      return this.#decodeValue(new _RecordId(v[0], this.#recordIdKey(v[1])));
    },
    [TAG_FILE_POINTER]: (v) => this.#decodeValue(new FileRef(v[0], v[1])),
    [TAG_SET]: (v) => this.#decodeValue(new Set(v)),
    [TAG_SHAPED_BLOCK]: () => {
      throw new ShapedFrameError("a shaped block outside the shaped format");
    },
    [TAG_GEOMETRY_POINT]: (v) => this.#decodeValue(new GeometryPoint(v)),
    [TAG_GEOMETRY_LINE]: (v) => this.#decodeValue(new GeometryLine(v)),
    [TAG_GEOMETRY_POLYGON]: (v) => this.#decodeValue(new GeometryPolygon(v)),
    [TAG_GEOMETRY_MULTIPOINT]: (v) => this.#decodeValue(new GeometryMultiPoint(v)),
    [TAG_GEOMETRY_MULTILINE]: (v) => this.#decodeValue(new GeometryMultiLine(v)),
    [TAG_GEOMETRY_MULTIPOLYGON]: (v) => this.#decodeValue(new GeometryMultiPolygon(v)),
    [TAG_GEOMETRY_COLLECTION]: (v) => this.#decodeValue(new GeometryCollection(v)),
    [TAG_DATE]: (v) => this.#decodeValue(new PlainDate(Number(this.#v2Integer(TAG_DATE, v)))),
    [TAG_TIME]: (v) => this.#decodeValue(new PlainTime(this.#v2Integer(TAG_TIME, v))),
    [TAG_TIMESTAMP]: (v) => {
      const [seconds, nanos] = this.#v2Tuple(TAG_TIMESTAMP, v, 2);
      return this.#decodeValue(new Timestamp([seconds, nanos]));
    },
    [TAG_INTERVAL]: (v) => {
      const [months, days, micros] = this.#v2Tuple(TAG_INTERVAL, v, 3);
      return this.#decodeValue(new Interval([
        Number(months),
        Number(days),
        micros
      ]));
    },
    [TAG_BIGDECIMAL]: (v) => this.#decodeValue(new BigDecimal(this.#v2Text(TAG_BIGDECIMAL, v))),
    [TAG_REGEX]: (v) => this.#decodeValue(new Regex(this.#v2Text(TAG_REGEX, v))),
    ...Object.fromEntries(Object.entries(TAG_SIZED).map(([kind, tag]) => [tag, (v) => this.#decodeValue(this.#decodeSized(kind, v))]))
  };
  #encodeSized(value) {
    const float = value.kind === "f16" || value.kind === "f32";
    if (this.version === 2) {
      const tag = TAG_SIZED[value.kind];
      if (float) return new Tagged(tag, encodeFloat(value.value));
      return new Tagged(tag, uint64(value.value));
    }
    if (float) return encodeFloat(value.value);
    if (typeof value.value === "bigint") {
      if (value.value > I64_MAX$2) return new Tagged(TAG_STRING_DECIMAL, value.value.toString());
      return value.value <= POW_2_53$1 ? Number(value.value) : value.value;
    }
    return value.value;
  }
  #encodeDate(value) {
    if (this.version === 2) return new Tagged(TAG_DATE, value.days);
    return new Tagged(TAG_CUSTOM_DATETIME, [value.days * SECONDS_PER_DAY, 0]);
  }
  #encodeTime(value) {
    if (this.version === 2) return new Tagged(TAG_TIME, value.nanos);
    const secs = Math.floor(value.nanos / NANOS_PER_SECOND);
    const nanos = value.nanos % NANOS_PER_SECOND;
    return new Tagged(TAG_CUSTOM_DURATION, nanos ? [secs, nanos] : secs ? [secs] : []);
  }
  #encodeTimestamp(value) {
    return new Tagged(this.version === 2 ? TAG_TIMESTAMP : TAG_CUSTOM_DATETIME, value.toCompact());
  }
  #encodeInterval(value) {
    if (this.version === 2) return new Tagged(TAG_INTERVAL, value.toCompact());
    return value.toString();
  }
  #encodeBigDecimal(value) {
    if (this.version === 2) return new Tagged(TAG_BIGDECIMAL, value.toString());
    if (value.fitsDecimal()) return new Tagged(TAG_STRING_DECIMAL, value.toString());
    return value.toString();
  }
  #encodeRegex(value) {
    if (this.version === 2) return new Tagged(TAG_REGEX, value.pattern);
    throw new UnsupportedValueError("A regex can only be sent over cbor.2");
  }
  /** The content of a cbor.2-only tag, which must be an integer */
  #v2Integer(tag, value) {
    this.#requireV2(tag);
    if (!this.#reader?.isInteger || typeof value !== "number" && typeof value !== "bigint") throw new InvalidNumberError(`CBOR tag ${tag} must hold an integer`);
    return value;
  }
  /** The content of a cbor.2-only tag, which must be an array of `length` integers */
  #v2Tuple(tag, value, length) {
    this.#requireV2(tag);
    if (!Array.isArray(value) || value.length !== length || !value.every((v) => typeof v === "number" || typeof v === "bigint")) throw new InvalidNumberError(`CBOR tag ${tag} must hold an array of ${length} integers`);
    return value;
  }
  /** The content of a cbor.2-only tag, which must be text */
  #v2Text(tag, value) {
    this.#requireV2(tag);
    if (typeof value !== "string") throw new UnsupportedValueError(`CBOR tag ${tag} must hold text`);
    return value;
  }
  #requireV2(tag) {
    if (this.version !== 2) throw new UnsupportedValueError(`CBOR tag ${tag} is only valid in cbor.2`);
  }
  #decodeSized(kind, value) {
    if (this.version !== 2) throw new InvalidNumberError(`CBOR tag ${TAG_SIZED[kind]} (${kind}) is only valid in cbor.2`);
    const float = kind === "f16" || kind === "f32";
    const reader = this.#reader;
    const shaped = float ? reader?.isFloat : reader?.isInteger;
    if (!shaped || typeof value !== "number" && typeof value !== "bigint") throw new InvalidNumberError(`CBOR tag ${TAG_SIZED[kind]} (${kind}) must hold ${float ? "a float" : "an integer"}`);
    const sized$1 = new SIZED_CLASSES[kind](value);
    if (float && !Object.is(sized$1.value, value) && !Number.isNaN(value)) throw new InvalidNumberError(`The float ${value} cannot be held exactly by ${kind}`);
    return sized$1;
  }
  /**
  * A record id key holds an i64, so a sized integer key is read as a plain integer.
  */
  #recordIdKey(key) {
    if (!(key instanceof SizedNumber)) return key;
    if (key.kind === "f16" || key.kind === "f32") throw new InvalidNumberError(`A record id key cannot be a ${key.kind}`);
    if (typeof key.value === "bigint") {
      if (key.value > I64_MAX$2) throw new InvalidNumberError(`The record id key ${key.value} is outside the signed 64-bit range`);
      return key.value <= POW_2_53$1 ? Number(key.value) : key.value;
    }
    return key.value;
  }
  #resolveSpecDate(v) {
    return this.#options.useNativeDates ? new Date(v) : new DateTime(v);
  }
  #resolveCustomDate(v) {
    return this.#options.useNativeDates ? /* @__PURE__ */ new Date(Number(v[0]) * 1e3 + Number(v[1]) / 1e6) : new DateTime(v);
  }
  #encodeValue(v) {
    return this.#options.valueEncodeVisitor ? this.#options.valueEncodeVisitor(v) : v;
  }
  #decodeValue(v) {
    return this.#options.valueDecodeVisitor ? this.#options.valueDecodeVisitor(v) : v;
  }
};
var FlatBufferCodec = class FlatBufferCodec$1 {
  static {
    __name(this, "FlatBufferCodec$1");
  }
  /**
  * The default FlatBufferCodec instance.
  */
  static DEFAULT = new FlatBufferCodec$1({});
  #options;
  constructor(options) {
    this.#options = options;
  }
  encode(_data) {
    throw new SqonError("FlatBuffer encoding is not supported in this version");
  }
  decode(_data) {
    throw new SqonError("FlatBuffer decoding is not supported in this version");
  }
};
var SHAPED_TAG = 57;
var VERSION = 1;
var MESSAGE_SHAPE = 1;
var MESSAGE_BATCH = 2;
var NO_SLOT = 4294967295;
var MAY_BE_ABSENT = 1;
var MAY_BE_NULL = 2;
var STATE_ABSENT = 0;
var STATE_VALUE = 1;
var STATE_NULL = 2;
var STATE_NONE = 3;
var MAX_COLUMNS = 4096;
var MAX_DEPTH = 32;
var MAX_SHAPES = 65536;
var MAX_EMPTY_ROWS = 65536;
var MAX_FIXED = 1 << 20;
var ROOT_OBJECT = 0;
var ROOT_VALUE = 1;
function presenceWidth(flags) {
  const set = flags & (MAY_BE_ABSENT | MAY_BE_NULL);
  if (set === 0) return 0;
  return set === (MAY_BE_ABSENT | MAY_BE_NULL) ? 2 : 1;
}
__name(presenceWidth, "presenceWidth");
function presenceBytes(bits) {
  return Math.ceil(bits / 8);
}
__name(presenceBytes, "presenceBytes");
var TEXT = new TextDecoder("utf-8", { fatal: true });
function refuse(what) {
  throw new ShapedFrameError(what);
}
__name(refuse, "refuse");
var ByteReader = class {
  static {
    __name(this, "ByteReader");
  }
  #bytes;
  #view;
  #at = 0;
  constructor(bytes) {
    this.#bytes = bytes;
    this.#view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  }
  /** Whether every byte has been read */
  get done() {
    return this.#at >= this.#bytes.length;
  }
  /** The bytes which remain unread */
  get rest() {
    return this.#bytes.subarray(this.#at);
  }
  /** Moves the cursor to `at`, counted from the start */
  seek(at) {
    if (at < 0 || at > this.#bytes.length) refuse("a slot out of range");
    this.#at = at;
    return this;
  }
  /** Takes `n` bytes, as a view over the same buffer */
  bytes(n) {
    const at = this.#take(n);
    return this.#bytes.subarray(at, at + n);
  }
  /** Takes `n` bytes as UTF-8, or refuses them naming `what` they were */
  text(n, what) {
    return text(this.bytes(n), what);
  }
  u8() {
    return this.#view.getUint8(this.#take(1));
  }
  i8() {
    return this.#view.getInt8(this.#take(1));
  }
  u16() {
    return this.#view.getUint16(this.#take(2), true);
  }
  i16() {
    return this.#view.getInt16(this.#take(2), true);
  }
  u32() {
    return this.#view.getUint32(this.#take(4), true);
  }
  i32() {
    return this.#view.getInt32(this.#take(4), true);
  }
  u64() {
    return this.#view.getBigUint64(this.#take(8), true);
  }
  i64() {
    return this.#view.getBigInt64(this.#take(8), true);
  }
  /** The `int` in the next eight bytes, as {@link readInt} reads one */
  int() {
    const at = this.#take(8);
    return readInt(this.#view, at);
  }
  f32() {
    return this.#view.getFloat32(this.#take(4), true);
  }
  f64() {
    return this.#view.getFloat64(this.#take(8), true);
  }
  /** An IEEE 754 binary16, which `DataView` does not read everywhere this SDK runs */
  f16() {
    return f16Value(this.u16());
  }
  /** Bit `at` of the bytes, counted least significant first within each byte */
  bit(at) {
    const byte = this.#bytes[at >>> 3];
    if (byte === void 0) refuse("a bit out of range");
    return (byte & 1 << at % 8) !== 0;
  }
  #take(n) {
    const at = this.#at;
    if (n < 0 || at + n > this.#bytes.length) refuse("bytes which run past the end");
    this.#at = at + n;
    return at;
  }
};
var Slices = class {
  static {
    __name(this, "Slices");
  }
  #ends;
  #bytes;
  /** Reads a table of `count` ends where the reader stands, then takes the slices after it */
  constructor(r$1, count3) {
    if (count3 * 4 > r$1.rest.length) refuse("more slices than the bytes could hold");
    this.#ends = new Uint32Array(count3);
    let last = 0;
    for (let i = 0; i < count3; i++) {
      const end = r$1.u32();
      if (end < last) refuse("slice ends out of order");
      last = end;
      this.#ends[i] = end;
    }
    this.#bytes = r$1.bytes(last);
  }
  /** How many bytes the slices take in all */
  get length() {
    return this.#bytes.length;
  }
  /** How many slices there are */
  get count() {
    return this.#ends.length;
  }
  /** Slice `index` */
  at(index) {
    if (index >= this.#ends.length) refuse("a slot out of range");
    const end = this.#ends[index];
    const start = index === 0 ? 0 : this.#ends[index - 1];
    return this.#bytes.subarray(start, end);
  }
};
function text(bytes, what) {
  try {
    return TEXT.decode(bytes);
  } catch {
    return refuse(`${what} that is not UTF-8`);
  }
}
__name(text, "text");
var ByteWriter = class {
  static {
    __name(this, "ByteWriter");
  }
  #bytes;
  #view;
  #at = 0;
  /**
  * `capacity` is how many bytes to start with. A caller which knows the size it is about to
  * write passes it, which matters for a large one: growing from the default doubles its way
  * there, copying everything written so far each time.
  */
  constructor(capacity = 256) {
    this.#bytes = new Uint8Array(capacity);
    this.#view = new DataView(this.#bytes.buffer);
  }
  /** The bytes written so far */
  get bytes() {
    return this.#bytes.subarray(0, this.#at);
  }
  /** How many bytes have been written */
  get length() {
    return this.#at;
  }
  #room(n) {
    const at = this.#at;
    if (at + n > this.#bytes.length) {
      let size = this.#bytes.length * 2;
      while (size < at + n) size *= 2;
      const grown = new Uint8Array(size);
      grown.set(this.#bytes);
      this.#bytes = grown;
      this.#view = new DataView(grown.buffer);
    }
    this.#at = at + n;
    return at;
  }
  u8(v) {
    const at = this.#room(1);
    this.#view.setUint8(at, v);
    return this;
  }
  i8(v) {
    const at = this.#room(1);
    this.#view.setInt8(at, v);
    return this;
  }
  u16(v) {
    const at = this.#room(2);
    this.#view.setUint16(at, v, true);
    return this;
  }
  i16(v) {
    const at = this.#room(2);
    this.#view.setInt16(at, v, true);
    return this;
  }
  u32(v) {
    const at = this.#room(4);
    this.#view.setUint32(at, v, true);
    return this;
  }
  i32(v) {
    const at = this.#room(4);
    this.#view.setInt32(at, v, true);
    return this;
  }
  u64(v) {
    const at = this.#room(8);
    this.#view.setBigUint64(at, v, true);
    return this;
  }
  i64(v) {
    const at = this.#room(8);
    this.#view.setBigInt64(at, v, true);
    return this;
  }
  f32(v) {
    const at = this.#room(4);
    this.#view.setFloat32(at, v, true);
    return this;
  }
  f64(v) {
    const at = this.#room(8);
    this.#view.setFloat64(at, v, true);
    return this;
  }
  /** An IEEE 754 binary16, which `DataView` does not write everywhere this SDK runs */
  f16(v) {
    return this.u16(f16Bits(v));
  }
  raw(bytes) {
    const at = this.#room(bytes.length);
    this.#bytes.set(bytes, at);
    return this;
  }
  /** UTF-8 text behind its length as a `u16`, as a shape writes a name or a table */
  u16Text(value) {
    const bytes = UTF8$2.encode(value);
    return this.u16(bytes.length).raw(bytes);
  }
  /** Overwrites the `u32` at `at`, for a length which is only known once its body is written */
  patchU32(at, v) {
    this.#view.setUint32(at, v, true);
    return this;
  }
};
var UTF8$2 = new TextEncoder();
function byUtf8(a, b) {
  const x = UTF8$2.encode(a);
  const y = UTF8$2.encode(b);
  const shared = Math.min(x.length, y.length);
  for (let i = 0; i < shared; i++) {
    const diff = x[i] - y[i];
    if (diff !== 0) return diff;
  }
  return x.length - y.length;
}
__name(byUtf8, "byUtf8");
var POW_2_53 = 2n ** 53n;
function int(value) {
  return value <= POW_2_53 && value >= -POW_2_53 ? Number(value) : value;
}
__name(int, "int");
function readInt(view, at) {
  const high = view.getInt32(at + 4, true);
  if (high >= -2097152 && high <= 2097151) return high * 4294967296 + view.getUint32(at, true);
  return int(view.getBigInt64(at, true));
}
__name(readInt, "readInt");
function f16Value(bits) {
  const sign = bits & 32768 ? -1 : 1;
  const exponent = bits >> 10 & 31;
  const fraction = bits & 1023;
  if (exponent === 0) return sign * 2 ** -24 * fraction;
  if (exponent === 31) return fraction ? NaN : sign * Number.POSITIVE_INFINITY;
  return sign * 2 ** (exponent - 25) * (1024 + fraction);
}
__name(f16Value, "f16Value");
function f16Bits(value) {
  if (Number.isNaN(value)) return 32256;
  const sign = value < 0 || Object.is(value, -0) ? 32768 : 0;
  const v = Math.abs(value);
  if (v === Number.POSITIVE_INFINITY) return sign | 31744;
  if (v === 0) return sign;
  const exponent = Math.floor(Math.log2(v));
  if (exponent < -14) return sign | Math.round(v / 2 ** -24);
  if (exponent > 15) return sign | 31744;
  const fraction = Math.round(v / 2 ** exponent / 2 ** -10) - 1024;
  if (fraction >= 1024) return sign | exponent + 16 << 10;
  return sign | exponent + 15 << 10 | fraction;
}
__name(f16Bits, "f16Bits");
var Kind = /* @__PURE__ */ (function(Kind$1) {
  Kind$1[Kind$1["Bool"] = 1] = "Bool";
  Kind$1[Kind$1["Int"] = 2] = "Int";
  Kind$1[Kind$1["Float"] = 3] = "Float";
  Kind$1[Kind$1["Datetime"] = 4] = "Datetime";
  Kind$1[Kind$1["Duration"] = 5] = "Duration";
  Kind$1[Kind$1["Uuid"] = 6] = "Uuid";
  Kind$1[Kind$1["Bit"] = 7] = "Bit";
  Kind$1[Kind$1["I8"] = 8] = "I8";
  Kind$1[Kind$1["I16"] = 9] = "I16";
  Kind$1[Kind$1["I32"] = 10] = "I32";
  Kind$1[Kind$1["U8"] = 11] = "U8";
  Kind$1[Kind$1["U16"] = 12] = "U16";
  Kind$1[Kind$1["U32"] = 13] = "U32";
  Kind$1[Kind$1["U64"] = 14] = "U64";
  Kind$1[Kind$1["F32"] = 15] = "F32";
  Kind$1[Kind$1["String"] = 16] = "String";
  Kind$1[Kind$1["Bytes"] = 17] = "Bytes";
  Kind$1[Kind$1["Decimal"] = 18] = "Decimal";
  Kind$1[Kind$1["Record"] = 19] = "Record";
  Kind$1[Kind$1["Dynamic"] = 20] = "Dynamic";
  Kind$1[Kind$1["Array"] = 22] = "Array";
  Kind$1[Kind$1["F16"] = 23] = "F16";
  Kind$1[Kind$1["DatetimeNs"] = 24] = "DatetimeNs";
  Kind$1[Kind$1["DurationNs"] = 25] = "DurationNs";
  Kind$1[Kind$1["Object"] = 32] = "Object";
  return Kind$1;
})({});
var KINDS = new Set(Object.values(Kind).filter((k) => typeof k === "number"));
function kindOf$1(code) {
  if (!KINDS.has(code)) refuse("an unknown column kind");
  return code;
}
__name(kindOf$1, "kindOf$1");
function fixedWidth(kind) {
  switch (kind) {
    case Kind.Bool:
    case Kind.I8:
    case Kind.U8:
      return 1;
    case Kind.I16:
    case Kind.U16:
    case Kind.F16:
      return 2;
    case Kind.I32:
    case Kind.U32:
    case Kind.F32:
      return 4;
    case Kind.Int:
    case Kind.Float:
    case Kind.U64:
    case Kind.DatetimeNs:
    case Kind.DurationNs:
      return 8;
    case Kind.Datetime:
    case Kind.Duration:
      return 12;
    case Kind.Uuid:
      return 16;
    default:
      return void 0;
  }
}
__name(fixedWidth, "fixedWidth");
function isVar(kind) {
  return kind === Kind.String || kind === Kind.Bytes || kind === Kind.Decimal || kind === Kind.Record || kind === Kind.Dynamic || kind === Kind.Array;
}
__name(isVar, "isVar");
function isElement(kind) {
  switch (kind) {
    case Kind.String:
    case Kind.Bytes:
    case Kind.Decimal:
    case Kind.Int:
    case Kind.Float:
    case Kind.I8:
    case Kind.I16:
    case Kind.I32:
    case Kind.U8:
    case Kind.U16:
    case Kind.U32:
    case Kind.U64:
    case Kind.F16:
    case Kind.F32:
    case Kind.Bool:
    case Kind.Uuid:
    case Kind.Datetime:
    case Kind.Duration:
      return true;
    default:
      return false;
  }
}
__name(isElement, "isElement");
function hasOverflow(kind) {
  return kind === Kind.DatetimeNs || kind === Kind.DurationNs;
}
__name(hasOverflow, "hasOverflow");
function fixedValue(kind, view, at, ctx) {
  switch (kind) {
    case Kind.Bool:
      return bool(view.getUint8(at));
    case Kind.Int:
      return readInt(view, at);
    case Kind.Float:
      return view.getFloat64(at, true);
    case Kind.I8:
      return ctx.visit(new I8(view.getInt8(at)));
    case Kind.I16:
      return ctx.visit(new I16(view.getInt16(at, true)));
    case Kind.I32:
      return ctx.visit(new I32(view.getInt32(at, true)));
    case Kind.U8:
      return ctx.visit(new U8(view.getUint8(at)));
    case Kind.U16:
      return ctx.visit(new U16(view.getUint16(at, true)));
    case Kind.U32:
      return ctx.visit(new U32(view.getUint32(at, true)));
    case Kind.U64:
      return ctx.visit(new U64(view.getBigUint64(at, true)));
    case Kind.F16:
      return ctx.visit(new F16(f16Value(view.getUint16(at, true))));
    case Kind.F32:
      return ctx.visit(new F32(view.getFloat32(at, true)));
    case Kind.Uuid:
      return ctx.visit(new Uuid(new Uint8Array(view.buffer, view.byteOffset + at, 16).slice()));
    case Kind.Datetime:
      return datetime(view.getBigInt64(at, true), view.getUint32(at + 8, true), ctx);
    case Kind.Duration:
      return duration(view.getBigUint64(at, true), view.getUint32(at + 8, true), ctx);
    default:
      return refuse("a value of a kind which has no fixed slot");
  }
}
__name(fixedValue, "fixedValue");
function varValue(kind, slice, ctx, table3 = "", element) {
  switch (kind) {
    case Kind.String:
      return text(slice, "a string");
    case Kind.Bytes:
      return copy(slice);
    case Kind.Decimal:
      return ctx.visit(new Decimal(text(slice, "a decimal")));
    case Kind.Dynamic:
      return dynamic(slice, ctx);
    case Kind.Record:
      return record(slice, table3, ctx);
    case Kind.Array:
      return array(slice, element, ctx);
    default:
      return refuse("a value of a kind which has no var slot");
  }
}
__name(varValue, "varValue");
function dynamic(slice, ctx) {
  if (slice.length === 0) refuse("an empty dynamic slice");
  return ctx.dynamic(slice);
}
__name(dynamic, "dynamic");
function datetimeNs(view, at, overflow, ctx) {
  const ns = view.getBigInt64(at, true);
  if (ns === MIN_I64 || ns === MAX_I64) {
    const [secs$1, nanos$1] = wide(overflow(), "a datetime");
    return datetime(secs$1, nanos$1, ctx);
  }
  const billion = 1000000000n;
  let secs = ns / billion;
  let nanos = ns % billion;
  if (nanos < 0n) {
    secs -= 1n;
    nanos += billion;
  }
  return datetime(secs, Number(nanos), ctx);
}
__name(datetimeNs, "datetimeNs");
function durationNs(view, at, overflow, ctx) {
  const ns = view.getBigUint64(at, true);
  if (ns === MAX_U64) {
    const [secs, nanos] = wide(overflow(), "a duration");
    return duration(BigInt.asUintN(64, secs), nanos, ctx);
  }
  return duration(ns / 1000000000n, Number(ns % 1000000000n), ctx);
}
__name(durationNs, "durationNs");
var MIN_I64 = -(2n ** 63n);
var MAX_I64 = 2n ** 63n - 1n;
var MAX_U64 = 2n ** 64n - 1n;
function wide(slice, what) {
  if (slice.length !== 12) refuse(`${what} overflow that is not 12 bytes`);
  const view = new DataView(slice.buffer, slice.byteOffset, 12);
  return [view.getBigInt64(0, true), view.getUint32(8, true)];
}
__name(wide, "wide");
function bool(byte) {
  if (byte > 1) refuse("a bool that is neither 0 nor 1");
  return byte === 1;
}
__name(bool, "bool");
function copy(slice) {
  return slice.slice().buffer;
}
__name(copy, "copy");
function datetime(secs, nanos, ctx) {
  if (nanos >= 2e9) refuse("a datetime's nanoseconds out of range");
  if (ctx.nativeDates) return ctx.visit(/* @__PURE__ */ new Date(Number(secs) * 1e3 + nanos / 1e6));
  return ctx.visit(new DateTime([secs, BigInt(nanos)]));
}
__name(datetime, "datetime");
function duration(secs, nanos, ctx) {
  if (nanos >= 1e9) refuse("a duration's nanoseconds out of range");
  return ctx.visit(new Duration([secs, BigInt(nanos)]));
}
__name(duration, "duration");
function record(slice, columnTable, ctx) {
  const r$1 = new ByteReader(slice);
  const code = r$1.u8();
  if (code === 3) {
    const value = dynamic(r$1.rest, ctx);
    if (!(value instanceof _RecordId)) refuse("a record held as CBOR that is not a record id");
    if (columnTable !== "" && value.table.name !== columnTable) refuse("a record held as CBOR that names another table than its column");
    return value;
  }
  const table3 = ctx.table(columnTable === "" ? r$1.text(r$1.u16(), "a table") : columnTable);
  switch (code) {
    case 0: {
      const id$1 = r$1.int();
      if (!r$1.done) refuse("bytes past a record's number id");
      return ctx.visit(new _RecordId(table3, id$1));
    }
    case 1:
      return ctx.visit(new _RecordId(table3, text(r$1.rest, "a record id")));
    case 2: {
      const id$1 = r$1.bytes(16).slice();
      if (!r$1.done) refuse("bytes past a record's uuid id");
      return ctx.visit(new _RecordId(table3, new Uuid(id$1)));
    }
    default:
      return refuse("an unknown record key kind");
  }
}
__name(record, "record");
function array(slice, element, ctx) {
  const r$1 = new ByteReader(slice);
  const count3 = r$1.u32();
  if (isVar(element)) {
    const slices = new Slices(r$1, count3);
    if (!r$1.done) refuse("bytes past an array's elements");
    const out$1 = [];
    for (let i = 0; i < count3; i++) out$1.push(varValue(element, slices.at(i), ctx));
    return out$1;
  }
  const width = fixedWidth(element);
  if (width === void 0) refuse("an invalid array element kind");
  const elements = r$1.rest;
  if (elements.length !== count3 * width) refuse("an array of the wrong length");
  const view = new DataView(elements.buffer, elements.byteOffset, elements.byteLength);
  const out = new Array(count3);
  for (let i = 0; i < count3; i++) out[i] = fixedValue(element, view, i * width, ctx);
  return out;
}
__name(array, "array");
var Row = class {
  static {
    __name(this, "Row");
  }
  #shape;
  #ctx;
  #bytes;
  #view;
  /** The ends of this row's var slices, reused from row to row */
  #ends;
  /** Where this row's regions begin, counted from the start of the batch */
  #presenceAt = 0;
  #fixedAt = 0;
  #varAt = 0;
  constructor(shape, bytes, ctx) {
    this.#shape = shape;
    this.#ctx = ctx;
    this.#bytes = bytes;
    this.#view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    this.#ends = new Uint32Array(shape.varCount);
  }
  /**
  * Points the cursor at the row which begins at `at`, and returns how many bytes it takes.
  *
  * Everything a value reads afterwards lies inside those bytes: the shape has already been
  * checked, so every slot it names is inside the region it belongs to, and this bounds the
  * regions themselves against the batch.
  */
  seek(at) {
    const shape = this.#shape;
    const header = shape.headerLength;
    if (at + header > this.#bytes.length) refuse("a truncated row");
    this.#presenceAt = at;
    this.#fixedAt = at + shape.presenceLength;
    const endsAt = this.#fixedAt + shape.fixedSize;
    this.#varAt = at + header;
    const mask = shape.paddingMask;
    if (mask !== 0) {
      const last$1 = this.#view.getUint8(this.#fixedAt - 1);
      if ((last$1 & mask) !== 0) refuse("presence padding bits set");
    }
    let last = 0;
    for (let i = 0; i < shape.varCount; i++) {
      const end = this.#view.getUint32(endsAt + 4 * i, true);
      if (end < last) refuse("var ends out of order");
      last = end;
      this.#ends[i] = end;
    }
    const total = header + last;
    if (at + total > this.#bytes.length) refuse("a truncated row");
    return total;
  }
  /** The row the cursor points at */
  read() {
    return this.#shape.root === ROOT_VALUE ? dynamic(this.slice(this.#shape.rootRest), this.#ctx) : this.node(void 0);
  }
  /** The object a node builds: the entries of its remainder, then its columns */
  node(node) {
    const open3 = this.#shape.rest(node) !== NO_SLOT;
    const object = open3 ? this.#remainder(node) : {};
    const columns = this.#shape.columns;
    const children = this.#shape.children(node);
    for (let i = 0; i < children.length; i++) {
      const at = children[i];
      const column = columns[at];
      const state = this.#state(column);
      if (state === STATE_ABSENT && (column.flags & MAY_BE_ABSENT) !== 0) continue;
      if (open3 && Object.hasOwn(object, column.name)) refuse("a remainder key that has a column");
      object[column.name] = this.#stated(at, column, state);
    }
    return object;
  }
  /** What a column holds, given the state its presence bits put it in */
  #stated(at, column, state) {
    switch (state) {
      case STATE_VALUE:
        return this.#value(at, column);
      case STATE_NULL:
        if ((column.flags & MAY_BE_NULL) !== 0) return null;
        break;
      case STATE_NONE:
        if ((column.flags & MAY_BE_ABSENT) !== 0) return void 0;
        break;
    }
    return refuse("a presence state the column does not allow");
  }
  /** The value of a column whose presence says it holds one */
  #value(at, column) {
    const slot = column.slot;
    switch (column.kind) {
      case Kind.Object:
        return this.node(at);
      case Kind.Bit:
        return this.#bit(this.#fixedAt, slot);
      case Kind.DatetimeNs:
        return datetimeNs(this.#view, this.#fixedAt + slot, () => this.slice(column.rest), this.#ctx);
      case Kind.DurationNs:
        return durationNs(this.#view, this.#fixedAt + slot, () => this.slice(column.rest), this.#ctx);
      default:
        return isVar(column.kind) ? varValue(column.kind, this.slice(slot), this.#ctx, column.table, column.element) : fixedValue(column.kind, this.#view, this.#fixedAt + slot, this.#ctx);
    }
  }
  /** The bytes of var slot `slot` of this row */
  slice(slot) {
    if (slot >= this.#ends.length) refuse("a var slot out of range");
    const end = this.#ends[slot];
    const start = slot === 0 ? 0 : this.#ends[slot - 1];
    return this.#bytes.subarray(this.#varAt + start, this.#varAt + end);
  }
  /** The entries of `node`'s remainder: the keys it holds which have no column */
  #remainder(node) {
    const rest = this.#shape.rest(node);
    if (rest === NO_SLOT) return {};
    const slice = this.slice(rest);
    if (slice.length === 0) return {};
    const entries$1 = dynamic(slice, this.#ctx);
    const proto = typeof entries$1 === "object" && entries$1 !== null ? Object.getPrototypeOf(entries$1) : false;
    if (proto !== Object.prototype && proto !== null) refuse("a remainder that is not an object");
    return entries$1;
  }
  /** `column`'s presence state, read from the bits its flags give it */
  #state(column) {
    const at = column.presence;
    switch (presenceWidth(column.flags)) {
      case 0:
        return STATE_VALUE;
      case 1:
        if (this.#bit(this.#presenceAt, at)) return STATE_VALUE;
        return (column.flags & MAY_BE_ABSENT) !== 0 ? STATE_ABSENT : STATE_NULL;
      default:
        return (this.#bit(this.#presenceAt, at) ? 1 : 0) | (this.#bit(this.#presenceAt, at + 1) ? 1 : 0) << 1;
    }
  }
  /** Bit `at` of the region which begins at `base`, least significant first within a byte */
  #bit(base, at) {
    return (this.#view.getUint8(base + (at >>> 3)) & 1 << at % 8) !== 0;
  }
};
var EMPTY$1 = [];
var Shape = class Shape$1 {
  static {
    __name(this, "Shape$1");
  }
  /** What each row is: `ROOT_OBJECT` or `ROOT_VALUE` */
  root;
  /** The bits of a row's presence region */
  presenceBits;
  /** The bytes of a row's fixed region */
  fixedSize;
  /** The number of var slots in a row */
  varCount;
  /** The root's remainder slot, `NO_SLOT` when closed; or a value root's value slot */
  rootRest;
  /** The columns, depth-first */
  columns;
  /** For column `i`, the index past its subtree */
  #ends;
  /** The bytes of a row before its var region */
  #header;
  /** The deepest nesting of object columns */
  #depth;
  /** The bits of a row's last presence byte which must be zero */
  #paddingMask;
  /** The root's direct children, and each object column's, worked out once */
  #rootChildren;
  #childrenOf;
  constructor(root, presenceBits, fixedSize, varCount, rootRest, columns) {
    if (columns.length > MAX_COLUMNS) refuse("too many columns");
    if (fixedSize > MAX_FIXED) refuse("a fixed region too large");
    if (presenceBits > 2 * MAX_COLUMNS) refuse("too many presence states");
    if (varCount > 2 * MAX_COLUMNS + 1) refuse("too many var slots");
    if (root === ROOT_VALUE) {
      if (columns.length > 0 || rootRest >= varCount) refuse("a value root with columns or no value slot");
    } else if (rootRest !== NO_SLOT && rootRest >= varCount) refuse("a remainder slot out of range");
    this.root = root;
    this.presenceBits = presenceBits;
    this.fixedSize = fixedSize;
    this.varCount = varCount;
    this.rootRest = rootRest;
    this.columns = columns;
    this.#ends = new Uint32Array(columns.length);
    this.#depth = this.#checkNode(0, columns.length, 0);
    this.#header = presenceBytes(presenceBits) + fixedSize + 4 * varCount;
    const spare = presenceBits % 8;
    this.#paddingMask = spare === 0 ? 0 : 255 << spare & 255;
    this.#rootChildren = this.#childrenBetween(0, columns.length);
    this.#childrenOf = new Array(columns.length);
    for (let at = 0; at < columns.length; at++) if (columns[at].kind === Kind.Object) this.#childrenOf[at] = this.#childrenBetween(at + 1, this.#ends[at]);
  }
  /** The columns which are direct children of the node spanning `start` to `end` */
  #childrenBetween(start, end) {
    const out = [];
    for (let i = start; i < end; i = this.#ends[i]) out.push(i);
    return out;
  }
  /**
  * Checks the columns of one node, which run from `start` to `end`, filling in where each
  * column's subtree stops. Returns how deeply objects nest below it.
  */
  #checkNode(start, end, depth) {
    if (depth >= MAX_DEPTH) refuse("objects nested too deep");
    let deepest = 0;
    let at = start;
    let previous;
    while (at < end) {
      const column = this.columns[at];
      this.#checkName(column, previous);
      this.#checkFlags(column);
      this.#checkKind(column);
      this.#checkSlot(column);
      previous = column.name;
      const stop = at + 1 + column.children;
      if (stop > end) refuse("children past their parent");
      if (column.kind === Kind.Object) {
        if (column.rest !== NO_SLOT && column.rest >= this.varCount) refuse("a remainder slot out of range");
        deepest = Math.max(deepest, 1 + this.#checkNode(at + 1, stop, depth + 1));
      }
      this.#ends[at] = stop;
      at = stop;
    }
    return deepest;
  }
  /** A name is non-empty, and siblings are in the byte order of their UTF-8, so all distinct */
  #checkName(column, previous) {
    if (column.name === "") refuse("an empty column name");
    if (previous !== void 0 && byUtf8(previous, column.name) >= 0) refuse("column names out of order");
  }
  /** The flags are the two the format has, and the presence bits they imply are in range */
  #checkFlags(column) {
    if ((column.flags & ~(MAY_BE_ABSENT | MAY_BE_NULL)) !== 0) refuse("unknown column flags");
    const width = presenceWidth(column.flags);
    const inRange = width === 0 ? column.presence === NO_SLOT : column.presence + width <= this.presenceBits;
    if (!inRange) refuse("a presence index out of range");
  }
  /** What a column carries beyond its kind belongs to that kind: a table, an element, children */
  #checkKind(column) {
    if (column.kind !== Kind.Record && column.table !== "") refuse("a table on a column that is not a record");
    if (column.kind === Kind.Array) {
      if (column.element === void 0 || !isElement(column.element)) refuse("an array of no element kind");
    } else if (column.element !== void 0) refuse("an element kind on a column that is not an array");
    if (column.kind !== Kind.Object && column.children !== 0) refuse("children on a column that is not an object");
    if (hasOverflow(column.kind)) {
      if (column.rest >= this.varCount) refuse("an overflow slot out of range");
    } else if (column.kind !== Kind.Object && column.rest !== NO_SLOT) refuse("a remainder on a column that is not an object");
  }
  /**
  * The column's slot lies inside the region its kind is held in, so reading a row only has
  * to bound its own bytes rather than re-check the layout for every row.
  */
  #checkSlot(column) {
    const fixed = fixedWidth(column.kind);
    if (column.kind === Kind.Bit) {
      if (column.slot >= this.fixedSize * 8) refuse("a bit slot out of range");
    } else if (fixed !== void 0) {
      if (column.slot + fixed > this.fixedSize) refuse("a fixed slot out of range");
    } else if (isVar(column.kind)) {
      if (column.slot >= this.varCount) refuse("a var slot out of range");
    } else if (column.slot !== NO_SLOT) refuse("a slot on an object column");
  }
  /** The bytes of a row before its var region */
  get headerLength() {
    return this.#header;
  }
  /** The bytes of a row's presence region */
  get presenceLength() {
    return presenceBytes(this.presenceBits);
  }
  /** Where a row's ends table starts */
  get endsAt() {
    return this.presenceLength + this.fixedSize;
  }
  /** The deepest nesting of object columns */
  get depth() {
    return this.#depth;
  }
  /** The bits of a row's last presence byte which must be zero, or `0` when it is full */
  get paddingMask() {
    return this.#paddingMask;
  }
  /**
  * The indices of the child columns of `node`, or of the root when it is `undefined`.
  *
  * Worked out once per shape rather than once per node per row: a shape is announced before
  * the rows which name it, so everything about its layout is settled before any row is read.
  */
  children(node) {
    return (node === void 0 ? this.#rootChildren : this.#childrenOf[node]) ?? EMPTY$1;
  }
  /** The remainder slot of `node`, or of the root when it is `undefined` */
  rest(node) {
    return node === void 0 ? this.rootRest : this.columns[node].rest;
  }
  /**
  * A shape built from its parts, checked by the same rules a shape read off the wire is.
  * A shape derived from values to send goes through here, so a shape this SDK writes can
  * never be one it would refuse to read.
  */
  static of(def) {
    return new Shape$1(def.root ?? ROOT_OBJECT, def.presenceBits ?? 0, def.fixedSize ?? 0, def.varCount ?? 0, def.rootRest ?? NO_SLOT, def.columns ?? []);
  }
  /** The SHAPE payload of this shape, past its shape id */
  encode() {
    const out = new ByteWriter().u8(this.root).u32(this.presenceBits).u32(this.fixedSize).u32(this.varCount).u32(this.rootRest).u32(this.columns.length);
    for (const column of this.columns) out.u16Text(column.name).u8(column.kind).u8(column.element ?? 0).u8(column.flags).u32(column.presence).u32(column.slot).u16Text(column.table).u32(column.children).u32(column.rest);
    return out.bytes;
  }
  /** Reads a shape from a SHAPE payload past its shape id, which it must fill exactly */
  static decode(bytes) {
    const r$1 = new ByteReader(bytes);
    const root = r$1.u8();
    if (root !== ROOT_OBJECT && root !== ROOT_VALUE) refuse("an unknown shape root");
    const presenceBits = r$1.u32();
    const fixedSize = r$1.u32();
    const varCount = r$1.u32();
    const rootRest = r$1.u32();
    const count3 = r$1.u32();
    if (count3 > MAX_COLUMNS) refuse("too many columns");
    const columns = [];
    for (let i = 0; i < count3; i++) {
      const name = r$1.text(r$1.u16(), "a column name");
      const kind = kindOf$1(r$1.u8());
      const elementCode = r$1.u8();
      const element = elementCode === 0 ? void 0 : kindOf$1(elementCode);
      const flags = r$1.u8();
      const presence = r$1.u32();
      const slot = r$1.u32();
      const table3 = r$1.text(r$1.u16(), "a table name");
      const children = r$1.u32();
      const rest = r$1.u32();
      columns.push({
        name,
        kind,
        element,
        flags,
        presence,
        slot,
        table: table3,
        children,
        rest
      });
    }
    if (!r$1.done) refuse("bytes past a shape's columns");
    return new Shape$1(root, presenceBits, fixedSize, varCount, rootRest, columns);
  }
};
var identity = /* @__PURE__ */ __name((value) => value, "identity");
var ShapedBlock = class {
  static {
    __name(this, "ShapedBlock");
  }
  /** The block's contents: its version byte and messages, past the CBOR byte string head */
  contents;
  constructor(contents) {
    this.contents = contents;
  }
};
var BlockReader = class {
  static {
    __name(this, "BlockReader");
  }
  #shapes = /* @__PURE__ */ new Map();
  /** Forgets every shape, ending the scope */
  reset() {
    this.#shapes.clear();
  }
  /** The rows of `block`, read against the shapes this scope has announced so far */
  read(block, dynamic$1, options = {}) {
    const r$1 = new ByteReader(block.contents);
    if (r$1.u8() !== VERSION) refuse("an unknown block version");
    const rows = [];
    const tables = /* @__PURE__ */ new Map();
    const ctx = {
      dynamic: dynamic$1,
      nativeDates: options.nativeDates === true,
      visit: options.visit ?? identity,
      table(name) {
        let table3 = tables.get(name);
        if (!table3) {
          table3 = new _Table(name);
          tables.set(name, table3);
        }
        return table3;
      }
    };
    while (!r$1.done) {
      const type2 = r$1.u8();
      const payload = new ByteReader(r$1.bytes(r$1.u32()));
      switch (type2) {
        case MESSAGE_SHAPE:
          this.#announce(payload);
          break;
        case MESSAGE_BATCH:
          this.#batch(payload, rows, ctx);
          break;
        default:
          break;
      }
    }
    return rows;
  }
  /** SHAPE: the shape is checked once here, so the rows which name it need not be */
  #announce(payload) {
    const id$1 = payload.u32();
    const shape = Shape.decode(payload.rest);
    if (!this.#shapes.has(id$1) && this.#shapes.size >= MAX_SHAPES) refuse("too many shapes in one scope");
    this.#shapes.set(id$1, shape);
  }
  /** BATCH: rows of one announced shape, back to back, each one as long as its own bytes say */
  #batch(payload, rows, ctx) {
    const id$1 = payload.u32();
    const count3 = payload.u32();
    const shape = this.#shapes.get(id$1);
    if (!shape) refuse("a batch of an unannounced shape");
    if (shape.headerLength === 0 && count3 > MAX_EMPTY_ROWS) refuse("a batch of too many empty rows");
    const bytes = payload.rest;
    const row = new Row(shape, bytes, ctx);
    let at = 0;
    for (let i = 0; i < count3; i++) {
      const used = row.seek(at);
      rows.push(row.read());
      at += used;
    }
    if (at !== bytes.length) refuse("bytes past a batch's rows");
  }
};
var MIXED = -1;
var I64_MIN$1 = -(2n ** 63n);
var I64_MAX$1 = 2n ** 63n - 1n;
var SIZED = /* @__PURE__ */ new Map([
  [I8, Kind.I8],
  [I16, Kind.I16],
  [I32, Kind.I32],
  [U8, Kind.U8],
  [U16, Kind.U16],
  [U32, Kind.U32],
  [U64, Kind.U64],
  [F16, Kind.F16],
  [F32, Kind.F32]
]);
function kindOf(value) {
  switch (typeof value) {
    case "boolean":
      return Kind.Bool;
    case "string":
      return Kind.String;
    case "bigint":
      return value >= I64_MIN$1 && value <= I64_MAX$1 ? Kind.Int : Kind.Dynamic;
    case "number":
      if (!Number.isInteger(value) || Object.is(value, -0)) return Kind.Float;
      return value >= -(2 ** 63) && value < 2 ** 63 ? Kind.Int : Kind.Float;
  }
  if (value instanceof SizedNumber) return SIZED.get(value.constructor) ?? Kind.Dynamic;
  if (value instanceof DateTime) return Kind.Datetime;
  if (value instanceof Duration) return Kind.Duration;
  if (value instanceof Uuid) return Kind.Uuid;
  if (value instanceof Decimal) return Kind.Decimal;
  if (value instanceof _RecordId) return Kind.Record;
  if (value instanceof Uint8Array || value instanceof ArrayBuffer) return Kind.Bytes;
  if (Array.isArray(value)) return Kind.Array;
  if (isPlainObject(value)) return Kind.Object;
  return Kind.Dynamic;
}
__name(kindOf, "kindOf");
function elementOf(value) {
  if (value.length === 0) return "empty";
  let element;
  for (const item of value) {
    if (item === null || item === void 0) return "mixed";
    const kind = kindOf(item);
    if (!isElement(kind)) return "mixed";
    if (element === void 0) element = kind;
    else if (element !== kind) return "mixed";
  }
  return element;
}
__name(elementOf, "elementOf");
function isPlainObject(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
__name(isPlainObject, "isPlainObject");
function writeBlock(shape, rows, dynamic$1) {
  const out = new ByteWriter().u8(VERSION);
  const payload = shape.encode();
  out.u8(MESSAGE_SHAPE).u32(payload.length + 4).u32(1).raw(payload);
  out.u8(MESSAGE_BATCH);
  const lengthAt = out.length;
  out.u32(0).u32(1).u32(rows.length);
  const body = out.length;
  for (const row of rows) writeRow(out, shape, row, dynamic$1);
  out.patchU32(lengthAt, out.length - body + 8);
  return out.bytes;
}
__name(writeBlock, "writeBlock");
function writeRow(out, shape, row, dynamic$1) {
  const object = row;
  const presence = new Uint8Array(presenceBytes(shape.presenceBits));
  const fixed = new Uint8Array(shape.fixedSize);
  const fixedView = new DataView(fixed.buffer);
  const slices = new Array(shape.varCount).fill(EMPTY);
  writeNode(shape, void 0, object, presence, fixed, fixedView, slices, dynamic$1);
  out.raw(presence).raw(fixed);
  let end = 0;
  for (const slice of slices) {
    end += slice.length;
    out.u32(end);
  }
  for (const slice of slices) out.raw(slice);
}
__name(writeRow, "writeRow");
var EMPTY = new Uint8Array(0);
function writeNode(shape, node, object, presence, fixed, fixedView, slices, dynamic$1) {
  for (const at of shape.children(node)) {
    const column = shape.columns[at];
    const held = Object.hasOwn(object, column.name);
    const value = object[column.name];
    const state = !held || value === void 0 ? held ? STATE_NONE : STATE_ABSENT : value === null ? STATE_NULL : STATE_VALUE;
    setState(presence, column, state);
    if (state !== STATE_VALUE) continue;
    if (column.kind === Kind.Object) writeNode(shape, at, value, presence, fixed, fixedView, slices, dynamic$1);
    else if (isVar(column.kind)) slices[column.slot] = varBytes(column, value, dynamic$1);
    else writeFixed(fixedView, fixed, column.slot, column.kind, value);
  }
}
__name(writeNode, "writeNode");
function setState(presence, column, state) {
  const width = presenceWidth(column.flags);
  if (width === 0) {
    if (state !== STATE_VALUE) refuse("a required column which holds no value");
    return;
  }
  if (width === 1) {
    const clear3 = (column.flags & MAY_BE_ABSENT) !== 0 ? STATE_ABSENT : STATE_NULL;
    if (state !== STATE_VALUE && state !== clear3) refuse("a column in a state its flags do not allow");
    if (state === STATE_VALUE) setBit(presence, column.presence);
    return;
  }
  if (state & 1) setBit(presence, column.presence);
  if (state & 2) setBit(presence, column.presence + 1);
}
__name(setState, "setState");
function setBit(bytes, at) {
  bytes[at >>> 3] = bytes[at >>> 3] | 1 << at % 8;
}
__name(setBit, "setBit");
function writeFixed(view, bytes, at, kind, value) {
  switch (kind) {
    case Kind.Bool:
      view.setUint8(at, value === true ? 1 : 0);
      return;
    case Kind.Int:
      view.setBigInt64(at, BigInt(value), true);
      return;
    case Kind.Float:
      view.setFloat64(at, value, true);
      return;
    case Kind.I8:
      view.setInt8(at, sized(value));
      return;
    case Kind.I16:
      view.setInt16(at, sized(value), true);
      return;
    case Kind.I32:
      view.setInt32(at, sized(value), true);
      return;
    case Kind.U8:
      view.setUint8(at, sized(value));
      return;
    case Kind.U16:
      view.setUint16(at, sized(value), true);
      return;
    case Kind.U32:
      view.setUint32(at, sized(value), true);
      return;
    case Kind.U64:
      view.setBigUint64(at, BigInt(value.value), true);
      return;
    case Kind.F16:
      view.setUint16(at, f16Bits(sized(value)), true);
      return;
    case Kind.F32:
      view.setFloat32(at, sized(value), true);
      return;
    case Kind.Uuid:
      bytes.set(new Uuid(value).toUint8Array(), at);
      return;
    case Kind.Datetime: {
      const [secs, nanos] = value.toCompact();
      view.setBigInt64(at, secs, true);
      view.setUint32(at + 8, Number(nanos), true);
      return;
    }
    case Kind.Duration: {
      const [secs = 0n, nanos = 0n] = value.toCompact();
      view.setBigUint64(at, BigInt(secs), true);
      view.setUint32(at + 8, Number(nanos), true);
      return;
    }
    default:
      refuse("a value of a kind which has no fixed slot");
  }
}
__name(writeFixed, "writeFixed");
function sized(value) {
  return Number(value.value);
}
__name(sized, "sized");
function varBytes(column, value, dynamic$1) {
  switch (column.kind) {
    case Kind.String:
      return UTF8$1.encode(value);
    case Kind.Bytes:
      return value instanceof Uint8Array ? new Uint8Array(value) : new Uint8Array(value);
    case Kind.Decimal:
      return UTF8$1.encode(value.toString());
    case Kind.Dynamic:
      return dynamic$1(value);
    case Kind.Record:
      return recordBytes(value, column.table, dynamic$1);
    case Kind.Array:
      return arrayBytes(value, column.element, dynamic$1);
    default:
      return refuse("a value of a kind which has no var slot");
  }
}
__name(varBytes, "varBytes");
function recordBytes(id$1, columnTable, dynamic$1) {
  const key = id$1.id;
  const out = new ByteWriter();
  if (typeof key === "object" && !(key instanceof Uuid) || beyondSlot(key)) return out.u8(3).raw(dynamic$1(id$1)).bytes;
  const kind = typeof key === "string" ? 1 : key instanceof Uuid ? 2 : 0;
  out.u8(kind);
  if (columnTable === "") out.u16Text(id$1.table.name);
  switch (kind) {
    case 0:
      return out.i64(BigInt(key)).bytes;
    case 1:
      return out.raw(UTF8$1.encode(key)).bytes;
    default:
      return out.raw(key.toUint8Array()).bytes;
  }
}
__name(recordBytes, "recordBytes");
function arrayBytes(value, element, dynamic$1) {
  const out = new ByteWriter().u32(value.length);
  if (isVar(element)) {
    const slices = value.map((item) => varBytes({
      kind: element,
      table: "",
      element: void 0
    }, item, dynamic$1));
    let end = 0;
    for (const slice of slices) {
      end += slice.length;
      out.u32(end);
    }
    for (const slice of slices) out.raw(slice);
    return out.bytes;
  }
  const width = fixedWidth(element);
  if (width === void 0) refuse("an invalid array element kind");
  const bytes = new Uint8Array(width * value.length);
  const view = new DataView(bytes.buffer);
  for (let i = 0; i < value.length; i++) writeFixed(view, bytes, i * width, element, value[i]);
  return out.raw(bytes).bytes;
}
__name(arrayBytes, "arrayBytes");
var UTF8$1 = new TextEncoder();
var I64_MIN = -(2n ** 63n);
var I64_MAX = 2n ** 63n - 1n;
function beyondSlot(key) {
  if (typeof key === "bigint") return key < I64_MIN || key > I64_MAX;
  if (typeof key === "number") return !Number.isInteger(key) || Math.abs(key) > 2 ** 53;
  return false;
}
__name(beyondSlot, "beyondSlot");
var Columns = class Columns$1 {
  static {
    __name(this, "Columns$1");
  }
  shape;
  #columns;
  #rows;
  constructor(shape, columns, rows) {
    this.shape = shape;
    this.#columns = columns;
    this.#rows = rows;
  }
  /**
  * Reads `rows` into columns and settles their shape, or gives up when they are not rows a
  * block can carry: an empty array, entries which are not plain objects, or no keys at all.
  */
  static collect(rows) {
    if (rows.length === 0) return void 0;
    const n = rows.length;
    const root = {
      children: [],
      byName: /* @__PURE__ */ Object.create(null)
    };
    const budget = { left: MAX_COLUMNS };
    for (let at = 0; at < n; at++) {
      const row = rows[at];
      if (!isPlainObject(row)) return void 0;
      if (!observeNode(root, row, at, n, 0, budget)) return void 0;
    }
    if (root.children.length === 0) return void 0;
    const order2 = [];
    const columns = [];
    const layout = {
      fixedSize: 0,
      varCount: 0,
      presenceBits: 0
    };
    if (!flatten(root, order2, columns, layout)) return void 0;
    try {
      const shape = Shape.of({
        presenceBits: layout.presenceBits,
        fixedSize: layout.fixedSize,
        varCount: layout.varCount,
        columns
      });
      return new Columns$1(shape, order2, n);
    } catch {
      return void 0;
    }
  }
  /** The block these rows make: a SHAPE message announcing their shape, then one BATCH */
  write(dynamic$1) {
    const shape = this.shape;
    const n = this.#rows;
    const presenceLen = presenceBytes(shape.presenceBits);
    const endsAt = presenceLen + shape.fixedSize;
    const stride = shape.headerLength;
    const headers = new Uint8Array(n * stride);
    const view = new DataView(headers.buffer);
    const slices = new Array(shape.varCount);
    const columns = shape.columns;
    for (let c = 0; c < columns.length; c++) {
      const column = columns[c];
      const accumulated = this.#columns[c];
      writePresence(headers, stride, column, accumulated.states, n);
      if (column.kind === Kind.Object) continue;
      if (fixedWidth(column.kind) === void 0) slices[column.slot] = writeVar(column, accumulated, n, dynamic$1);
      else writeColumn(view, headers, stride, presenceLen, column, accumulated, n);
    }
    let total = 0;
    for (let i = 0; i < n; i++) {
      let end = 0;
      for (let v = 0; v < shape.varCount; v++) {
        const slice = slices[v][i];
        if (slice !== void 0) end += slice.length;
        view.setUint32(i * stride + endsAt + 4 * v, end, true);
      }
      total += stride + end;
    }
    return frame(shape, headers, slices, stride, n, total);
  }
};
function observeNode(node, object, at, rows, depth, budget) {
  if (depth >= MAX_DEPTH) return false;
  for (const name of Object.keys(object)) {
    let column = node.byName[name];
    if (column === void 0) {
      if (budget.left === 0) return false;
      budget.left -= 1;
      column = {
        name,
        kind: MIXED,
        seenAny: false,
        element: void 0,
        table: void 0,
        absent: at > 0,
        null: false,
        none: false,
        states: new Uint8Array(rows),
        values: new Array(rows),
        children: [],
        byName: /* @__PURE__ */ Object.create(null)
      };
      node.byName[name] = column;
      node.children.push(column);
    }
    const value = object[name];
    observe(column, at, value);
    if (column.states[at] === STATE_VALUE && column.kind === Kind.Object) {
      if (!observeNode(column, value, at, rows, depth + 1, budget)) return false;
    }
  }
  for (let i = 0; i < node.children.length; i++) {
    const column = node.children[i];
    if (column.states[at] === STATE_ABSENT && !Object.hasOwn(object, column.name)) column.absent = true;
  }
  return true;
}
__name(observeNode, "observeNode");
function observe(column, at, value) {
  if (value === null) {
    column.states[at] = STATE_NULL;
    column.null = true;
    return;
  }
  if (value === void 0) {
    column.states[at] = STATE_NONE;
    column.none = true;
    return;
  }
  column.states[at] = STATE_VALUE;
  column.values[at] = value;
  const kind = kindOf(value);
  if (!column.seenAny) {
    column.kind = kind;
    column.seenAny = true;
  } else if (column.kind !== kind) column.kind = MIXED;
  if (kind === Kind.Array) {
    const element = elementOf(value);
    if (element === "mixed") column.element = MIXED;
    else if (element !== "empty" && column.element !== MIXED) column.element = column.element === void 0 || column.element === element ? element : MIXED;
  }
  if (kind === Kind.Record) {
    const table3 = value.table.name;
    column.table = column.table === void 0 ? table3 : column.table === table3 ? table3 : null;
  }
}
__name(observe, "observe");
function flatten(node, order2, columns, layout) {
  node.children.sort(byName_);
  for (const accumulated of node.children) {
    const kind = kindFor(accumulated);
    const flags = (accumulated.absent || accumulated.none ? MAY_BE_ABSENT : 0) | (accumulated.null || accumulated.none ? MAY_BE_NULL : 0);
    const width = presenceWidth(flags);
    const presence = width === 0 ? NO_SLOT : layout.presenceBits;
    layout.presenceBits += width;
    let slot;
    const fixed = fixedWidth(kind);
    if (kind === Kind.Object) slot = NO_SLOT;
    else if (fixed !== void 0) {
      slot = layout.fixedSize;
      layout.fixedSize += fixed;
    } else {
      slot = layout.varCount;
      layout.varCount += 1;
    }
    const column = {
      name: accumulated.name,
      kind,
      element: kind === Kind.Array ? accumulated.element === MIXED ? void 0 : accumulated.element : void 0,
      flags,
      presence,
      slot,
      table: kind === Kind.Record && typeof accumulated.table === "string" ? accumulated.table : "",
      children: 0,
      rest: NO_SLOT
    };
    const at = columns.length;
    columns.push(column);
    order2.push(accumulated);
    if (kind === Kind.Object) {
      if (!flatten(accumulated, order2, columns, layout)) return false;
      column.children = columns.length - at - 1;
    }
  }
  return true;
}
__name(flatten, "flatten");
function byName_(a, b) {
  return byUtf8(a.name, b.name);
}
__name(byName_, "byName_");
function kindFor(accumulated) {
  if (accumulated.kind === MIXED) return Kind.Dynamic;
  const kind = accumulated.kind;
  if (kind === Kind.Array && (accumulated.element === MIXED || accumulated.element === void 0)) return Kind.Dynamic;
  return kind;
}
__name(kindFor, "kindFor");
function writePresence(headers, stride, column, states, n) {
  const width = presenceWidth(column.flags);
  if (width === 0) return;
  const low = column.presence;
  const lowByte = low >>> 3;
  const lowMask = 1 << low % 8;
  if (width === 1) {
    for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) {
      const at = i * stride + lowByte;
      headers[at] = headers[at] | lowMask;
    }
    return;
  }
  const high = low + 1;
  const highByte = high >>> 3;
  const highMask = 1 << high % 8;
  for (let i = 0; i < n; i++) {
    const state = states[i];
    if (state & 1) {
      const at = i * stride + lowByte;
      headers[at] = headers[at] | lowMask;
    }
    if (state & 2) {
      const at = i * stride + highByte;
      headers[at] = headers[at] | highMask;
    }
  }
}
__name(writePresence, "writePresence");
function writeColumn(view, headers, stride, presenceLen, column, accumulated, n) {
  const states = accumulated.states;
  const values = accumulated.values;
  const base = presenceLen + column.slot;
  switch (column.kind) {
    case Kind.Bool:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) headers[i * stride + base] = values[i] ? 1 : 0;
      return;
    case Kind.Int:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) view.setBigInt64(i * stride + base, BigInt(values[i]), true);
      return;
    case Kind.Float:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) view.setFloat64(i * stride + base, values[i], true);
      return;
    case Kind.Datetime:
      for (let i = 0; i < n; i++) {
        if (states[i] !== STATE_VALUE) continue;
        const [secs, nanos] = values[i].toCompact();
        view.setBigInt64(i * stride + base, secs, true);
        view.setUint32(i * stride + base + 8, Number(nanos), true);
      }
      return;
    case Kind.Duration:
      for (let i = 0; i < n; i++) {
        if (states[i] !== STATE_VALUE) continue;
        const [secs = 0n, nanos = 0n] = values[i].toCompact();
        view.setBigUint64(i * stride + base, BigInt(secs), true);
        view.setUint32(i * stride + base + 8, Number(nanos), true);
      }
      return;
    case Kind.Uuid:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) headers.set(new Uuid(values[i]).toUint8Array(), i * stride + base);
      return;
    case Kind.U8:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) headers[i * stride + base] = Number(values[i].value);
      return;
    case Kind.I8:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) view.setInt8(i * stride + base, Number(values[i].value));
      return;
    case Kind.U16:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) view.setUint16(i * stride + base, Number(values[i].value), true);
      return;
    case Kind.I16:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) view.setInt16(i * stride + base, Number(values[i].value), true);
      return;
    case Kind.U32:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) view.setUint32(i * stride + base, Number(values[i].value), true);
      return;
    case Kind.I32:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) view.setInt32(i * stride + base, Number(values[i].value), true);
      return;
    case Kind.U64:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) view.setBigUint64(i * stride + base, BigInt(values[i].value), true);
      return;
    case Kind.F32:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) view.setFloat32(i * stride + base, Number(values[i].value), true);
      return;
    default:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) writeFixed(view, headers, i * stride + base, column.kind, values[i]);
      return;
  }
}
__name(writeColumn, "writeColumn");
function writeVar(column, accumulated, n, dynamic$1) {
  const states = accumulated.states;
  const values = accumulated.values;
  const out = new Array(n);
  switch (column.kind) {
    case Kind.String:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) out[i] = UTF8.encode(values[i]);
      return out;
    case Kind.Dynamic:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) out[i] = dynamic$1(values[i]);
      return out;
    case Kind.Record:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) out[i] = recordBytes(values[i], column.table, dynamic$1);
      return out;
    default:
      for (let i = 0; i < n; i++) if (states[i] === STATE_VALUE) out[i] = varBytes(column, values[i], dynamic$1);
      return out;
  }
}
__name(writeVar, "writeVar");
function frame(shape, headers, slices, stride, n, total) {
  const payload = new Uint8Array(total);
  const varCount = shape.varCount;
  let at = 0;
  for (let i = 0; i < n; i++) {
    payload.set(headers.subarray(i * stride, i * stride + stride), at);
    at += stride;
    for (let v = 0; v < varCount; v++) {
      const slice = slices[v][i];
      if (slice !== void 0 && slice.length !== 0) {
        payload.set(slice, at);
        at += slice.length;
      }
    }
  }
  if (at !== total) refuse("a batch which did not fill its own bytes");
  const announced = shape.encode();
  const out = new ByteWriter(10 + announced.length + 13 + payload.length).u8(VERSION);
  out.u8(MESSAGE_SHAPE).u32(announced.length + 4).u32(1).raw(announced);
  out.u8(MESSAGE_BATCH).u32(payload.length + 8).u32(1).u32(n).raw(payload);
  return out.bytes;
}
__name(frame, "frame");
var UTF8 = new TextEncoder();
var BLOCK_THRESHOLD = 32;
var SAMPLE = 64;
var TAG_HEAD = 7;
var ShapedCodec = class extends CborCodec {
  static {
    __name(this, "ShapedCodec");
  }
  #threshold;
  #nativeDates;
  #visitor;
  #visits;
  constructor(options = {}) {
    super({
      ...options,
      version: 2
    });
    this.#threshold = options.blockThreshold ?? BLOCK_THRESHOLD;
    this.#nativeDates = options.useNativeDates === true;
    this.#visitor = options.valueDecodeVisitor;
    this.#visits = options.valueEncodeVisitor !== void 0;
    this.tagged = {
      ...this.tagged,
      [SHAPED_TAG]: (v) => {
        if (v instanceof ArrayBuffer) return new ShapedBlock(new Uint8Array(v));
        if (v instanceof Uint8Array) return new ShapedBlock(v);
        throw new ShapedFrameError("a block that is not a byte string");
      }
    };
  }
  /** A decoder for the one CBOR item a dynamic slice holds */
  get dynamic() {
    return (bytes) => this.decode(bytes);
  }
  /** The rows of `block`, read in `scope` */
  rows(block, scope) {
    return scope.read(block, this.dynamic, {
      nativeDates: this.#nativeDates,
      visit: this.#visitor
    });
  }
  encode(data) {
    return super.encode(this.#shapeRows(data));
  }
  /**
  * `value` with every array of rows long enough to be worth it replaced by the block which
  * carries it. A block cannot nest — a dynamic slice is read as strict CBOR, which refuses
  * tag 57 — so an array which becomes a block is not descended into.
  */
  #shapeRows(value) {
    if (Array.isArray(value)) {
      const block = this.block(value);
      if (block) return new Encoded(block);
      return value.map((item) => this.#shapeRows(item));
    }
    if (typeof value === "object" && value !== null && Object.getPrototypeOf(value) === Object.prototype) {
      const out = {};
      for (const [key, item] of Object.entries(value)) out[key] = this.#shapeRows(item);
      return out;
    }
    return value;
  }
  /**
  * `rows` as the bytes of a tag 57 block, or `undefined` when they are not worth sending as
  * one: too few, not an array of objects, or a block which would be no smaller than the
  * CBOR array it replaces.
  *
  * That last case is real rather than theoretical. A shape gives every column a fixed width,
  * so a column of small integers takes eight bytes a row where CBOR takes one or two, and a
  * block of them is larger than the array. The server does not meet this because its shapes
  * come from a table's field definitions over rows already stored in that layout; a client
  * deriving a shape from the values in hand does. So the block is written and measured, and
  * kept only if it actually won.
  */
  block(rows) {
    if (rows.length < this.#threshold || this.#visits) return void 0;
    const columns = Columns.collect(rows);
    if (!columns) return void 0;
    const shape = columns.shape;
    if (shape.columns.every((column) => column.kind === Kind.Dynamic)) return void 0;
    if (!this.#worthIt(shape, rows)) return void 0;
    return tagged(columns.write((item) => super.encode(item)));
  }
  /**
  * Whether writing `rows` in `shape` comes out smaller than the CBOR array would.
  *
  * Deciding it by encoding the whole array both ways is exact but costs a full CBOR encode
  * on top of the write, which made sending a block slower than not sending one. Rows which
  * share a shape are alike by construction, so the question is settled on a sample spread
  * across the array instead, and only short arrays are measured whole.
  */
  #worthIt(shape, rows) {
    if (rows.length <= SAMPLE) {
      const asBlock$1 = writeBlock(shape, rows, (item) => super.encode(item)).length;
      return asBlock$1 + TAG_HEAD < super.encode(rows).length;
    }
    const sample = [];
    const n = rows.length;
    for (let i = 0; i < SAMPLE; i++) sample.push(rows[(i * 2654435761 >>> 0) % n]);
    const asBlock = writeBlock(shape, sample, (item) => super.encode(item)).length;
    const asArray = super.encode(sample).length;
    const shapeBytes = shape.encode().length;
    const perBlockRow = (asBlock - shapeBytes) / sample.length;
    const perArrayRow = asArray / sample.length;
    return shapeBytes + TAG_HEAD + perBlockRow * rows.length < perArrayRow * rows.length;
  }
};
function tagged(contents) {
  return new ByteWriter(7 + contents.length).u8(216).u8(57).u8(90).u8(contents.length >>> 24).u8(contents.length >>> 16 & 255).u8(contents.length >>> 8 & 255).u8(contents.length & 255).raw(contents).bytes;
}
__name(tagged, "tagged");
var DURATION_UNIT_STARTS = /* @__PURE__ */ new Set([
  "n",
  "u",
  "m",
  "s",
  "h",
  "d",
  "w",
  "y",
  "\xB5",
  "\u03BC"
]);
var VALUE_TERMINATORS = /* @__PURE__ */ new Set([
  "]",
  "}",
  ")",
  ","
]);
var ANGLE_OPEN = "\u27E8";
var ANGLE_CLOSE = "\u27E9";
var TextParser = class TextParser$1 {
  static {
    __name(this, "TextParser$1");
  }
  #src;
  #opts;
  #pos = 0;
  constructor(src, opts = {}) {
    this.#src = src;
    this.#opts = opts;
  }
  /**
  * Parse a single SQON value and ensure the entire input was consumed.
  */
  parse() {
    this.#skipWs();
    const value = this.#parseValue();
    this.#skipWs();
    if (!this.#eof()) this.#error(`Unexpected trailing input '${this.#peek()}'`);
    return value;
  }
  #eof() {
    return this.#pos >= this.#src.length;
  }
  #peek(offset = 0) {
    return this.#src[this.#pos + offset];
  }
  #next() {
    const char = this.#src[this.#pos];
    if (char === void 0) this.#error("Unexpected end of input");
    this.#pos += 1;
    return char;
  }
  #skipWs() {
    while (this.#pos < this.#src.length) {
      const code = this.#src.charCodeAt(this.#pos);
      if (code === 32 || code === 9 || code === 10 || code === 13 || code === 12 || code === 11) this.#pos += 1;
      else break;
    }
  }
  #error(message) {
    throw new TextParseError(message, this.#pos);
  }
  #parseValue() {
    this.#skipWs();
    if (this.#peek() === "." && this.#peek(1) === ".") {
      this.#pos += 2;
      const end = this.#parseRangeEnd(this.#parsePrimeBound.bind(this));
      return new Range(void 0, end);
    }
    const left = this.#parsePrime();
    if (left instanceof _RecordId || left instanceof _RecordIdRange) return left;
    const mark = this.#pos;
    this.#skipWs();
    let exclusive = false;
    if (this.#peek() === ">" && this.#peek(1) === "." && this.#peek(2) === ".") {
      this.#pos += 1;
      exclusive = true;
    }
    if (this.#peek() === "." && this.#peek(1) === ".") {
      this.#pos += 2;
      const begin = exclusive ? new BoundExcluded(left) : new BoundIncluded(left);
      const end = this.#parseRangeEnd(this.#parsePrimeBound.bind(this));
      return new Range(begin, end);
    }
    this.#pos = mark;
    return left;
  }
  #parsePrimeBound() {
    return this.#parsePrime();
  }
  #parseRangeEnd(parseInner) {
    let inclusive = false;
    if (this.#peek() === "=") {
      this.#pos += 1;
      inclusive = true;
    }
    this.#skipWs();
    if (this.#canStartValue()) {
      const value = parseInner();
      return inclusive ? new BoundIncluded(value) : new BoundExcluded(value);
    }
    if (inclusive) this.#error("Expected a value after inclusive range operator '..='");
    return void 0;
  }
  #canStartValue() {
    const char = this.#peek();
    if (char === void 0) return false;
    if (VALUE_TERMINATORS.has(char)) return false;
    if (char === "." && this.#peek(1) === ".") return false;
    return true;
  }
  #parsePrime() {
    this.#skipWs();
    const char = this.#peek();
    if (char === void 0) this.#error("Unexpected end of input, expected a value");
    switch (char) {
      case '"':
      case "'":
        return this.#readQuoted(char);
      case "[":
        return this.#parseArray();
      case "{":
        return this.#parseObjectOrSet();
      case "(":
        return this.#parseGeometryOrGroup();
      case "`":
      case ANGLE_OPEN:
        return this.#parseIdentValue();
    }
    const code = char.charCodeAt(0);
    if (code >= 48 && code <= 57 || char === "+" || char === "-") return this.#parseNumberLike();
    if (this.#isIdentStart(code)) {
      const next = this.#peek(1);
      if ((next === '"' || next === "'") && "sdubfr".includes(char)) return this.#parsePrefixedLiteral(char, next);
      return this.#parseIdentValue();
    }
    this.#error(`Unexpected character '${char}', expected a value`);
  }
  #isIdentStart(code) {
    return code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95;
  }
  #isIdentContinue(code) {
    return code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95;
  }
  #parseIdentValue() {
    const { name, quoted } = this.#parseIdentRaw();
    if (!quoted) {
      switch (name.toLowerCase()) {
        case "none":
          return void 0;
        case "null":
          return null;
        case "true":
          return true;
        case "false":
          return false;
      }
      if (name === "Infinity") return Number.POSITIVE_INFINITY;
      if (name === "NaN") return NaN;
    }
    if (this.#peek() === ":") return this.#parseRecordIdOrRange(name);
    return new _Table(name);
  }
  #parseIdentRaw() {
    const char = this.#peek();
    if (char === "`") {
      this.#pos += 1;
      return {
        name: this.#readDelimitedIdent("`"),
        quoted: true
      };
    }
    if (char === ANGLE_OPEN) {
      this.#pos += 1;
      return {
        name: this.#readDelimitedIdent(ANGLE_CLOSE),
        quoted: true
      };
    }
    const start = this.#pos;
    const startCode = char === void 0 ? -1 : char.charCodeAt(0);
    if (!this.#isIdentStart(startCode)) this.#error("Expected an identifier");
    this.#pos += 1;
    while (!this.#eof() && this.#isIdentContinue(this.#src.charCodeAt(this.#pos))) this.#pos += 1;
    return {
      name: this.#src.slice(start, this.#pos),
      quoted: false
    };
  }
  #readDelimitedIdent(close2) {
    let result = "";
    while (true) {
      const char = this.#peek();
      if (char === void 0) this.#error(`Unterminated identifier, expected '${close2}'`);
      this.#pos += 1;
      if (char === close2) break;
      if (char === "\\") result += this.#readEscape();
      else result += char;
    }
    return result;
  }
  #parseRecordIdOrRange(table3) {
    this.#pos += 1;
    if (this.#peek() === "." && this.#peek(1) === ".") {
      this.#pos += 2;
      const end = this.#parseRangeEnd(this.#parseRecordIdKey.bind(this));
      return new _RecordIdRange(table3, void 0, end);
    }
    const begin = this.#parseRecordIdKey();
    let exclusive = false;
    if (this.#peek() === ">" && this.#peek(1) === "." && this.#peek(2) === ".") {
      this.#pos += 1;
      exclusive = true;
    }
    if (this.#peek() === "." && this.#peek(1) === ".") {
      this.#pos += 2;
      const beginBound = exclusive ? new BoundExcluded(begin) : new BoundIncluded(begin);
      const end = this.#parseRangeEnd(this.#parseRecordIdKey.bind(this));
      return new _RecordIdRange(table3, beginBound, end);
    }
    if (exclusive) this.#error("Expected the range operator '..' after '>'");
    return new _RecordId(table3, begin);
  }
  #parseRecordIdKey() {
    this.#skipWs();
    const char = this.#peek();
    if (char === void 0) this.#error("Expected a record id key");
    if (char === '"' || char === "'") return this.#readQuoted(char);
    if (char === "u" && (this.#peek(1) === '"' || this.#peek(1) === "'")) return this.#parsePrefixedLiteral("u", this.#peek(1));
    if (char === "{") return this.#parseObjectOrSet();
    if (char === "[") return this.#parseArray();
    const code = char.charCodeAt(0);
    if (char === "+" || char === "-" || code >= 48 && code <= 57) return this.#parseIntegerKey();
    return this.#parseIdentRaw().name;
  }
  #parseIntegerKey() {
    const start = this.#pos;
    if (this.#peek() === "+" || this.#peek() === "-") this.#pos += 1;
    const digitsStart = this.#pos;
    while (!this.#eof() && this.#isDigit(this.#src.charCodeAt(this.#pos))) this.#pos += 1;
    if (this.#pos === digitsStart) this.#error("Expected an integer record id key");
    return this.#finishInteger(this.#src.slice(start, this.#pos));
  }
  #isDigit(code) {
    return code >= 48 && code <= 57;
  }
  #parseNumberLike() {
    const start = this.#pos;
    if (this.#peek() === "+" || this.#peek() === "-") this.#pos += 1;
    this.#eatDigits();
    if (this.#pos === start || this.#pos === start + 1 && !this.#isDigit(this.#src.charCodeAt(start))) {
      this.#pos = start;
      this.#error("Expected a number");
    }
    const letters = this.#peekLetterRun();
    if (letters !== "dec" && letters !== "f" && DURATION_UNIT_STARTS.has(this.#peek() ?? "")) return this.#finishDuration(start);
    let isFloat = false;
    if (this.#peek() === "." && this.#isDigit(this.#src.charCodeAt(this.#pos + 1))) {
      this.#pos += 1;
      this.#eatDigits();
      isFloat = true;
    }
    if (this.#peek() === "e" || this.#peek() === "E") {
      const afterE = this.#peek(1);
      const afterSign = afterE === "+" || afterE === "-" ? this.#peek(2) : afterE;
      if (afterSign !== void 0 && this.#isDigit(afterSign.charCodeAt(0))) {
        this.#pos += 1;
        if (this.#peek() === "+" || this.#peek() === "-") this.#pos += 1;
        this.#eatDigits();
        isFloat = true;
      }
    }
    const numeric = this.#src.slice(start, this.#pos).replace(/_/g, "");
    const suffix = this.#peekLetterRun();
    if (suffix === "dec") {
      this.#pos += 3;
      return new Decimal(numeric);
    }
    if (suffix === "f") {
      this.#pos += 1;
      return Number.parseFloat(numeric);
    }
    if (isFloat) return Number.parseFloat(numeric);
    return this.#finishInteger(numeric);
  }
  #finishInteger(numeric) {
    let value;
    try {
      value = BigInt(numeric);
    } catch {
      this.#error(`Invalid integer '${numeric}'`);
    }
    if (value >= BigInt(Number.MIN_SAFE_INTEGER) && value <= BigInt(Number.MAX_SAFE_INTEGER)) return Number(value);
    return value;
  }
  #finishDuration(start) {
    while (!this.#eof()) {
      const char = this.#src[this.#pos];
      const code = char.charCodeAt(0);
      if (this.#isDigit(code) || DURATION_UNIT_STARTS.has(char)) this.#pos += 1;
      else break;
    }
    return new Duration(this.#src.slice(start, this.#pos));
  }
  #eatDigits() {
    while (!this.#eof()) {
      const code = this.#src.charCodeAt(this.#pos);
      if (this.#isDigit(code) || code === 95) this.#pos += 1;
      else break;
    }
  }
  #peekLetterRun() {
    let index = this.#pos;
    while (index < this.#src.length) {
      const char = this.#src[index];
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90 || code >= 97 && code <= 122 || char === "\xB5" || char === "\u03BC") index += 1;
      else break;
    }
    return this.#src.slice(this.#pos, index);
  }
  #readQuoted(quote) {
    this.#pos += 1;
    let result = "";
    while (true) {
      const char = this.#peek();
      if (char === void 0) this.#error("Unterminated string literal");
      this.#pos += 1;
      if (char === quote) break;
      if (char === "\\") result += this.#readEscape();
      else result += char;
    }
    return result;
  }
  #readEscape() {
    const char = this.#next();
    switch (char) {
      case "n":
        return "\n";
      case "t":
        return "	";
      case "r":
        return "\r";
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "0":
        return "\0";
      case "\\":
        return "\\";
      case "/":
        return "/";
      case '"':
        return '"';
      case "'":
        return "'";
      case "`":
        return "`";
      case "u":
        return this.#readUnicodeEscape();
      default:
        return char;
    }
  }
  #readUnicodeEscape() {
    if (this.#peek() === "{") {
      this.#pos += 1;
      const start = this.#pos;
      while (!this.#eof() && this.#peek() !== "}") this.#pos += 1;
      const hex$1 = this.#src.slice(start, this.#pos);
      if (this.#peek() !== "}") this.#error("Unterminated unicode escape");
      this.#pos += 1;
      const code = Number.parseInt(hex$1, 16);
      if (Number.isNaN(code)) this.#error(`Invalid unicode escape '\\u{${hex$1}}'`);
      return String.fromCodePoint(code);
    }
    const hex = this.#src.slice(this.#pos, this.#pos + 4);
    if (hex.length !== 4 || Number.isNaN(Number.parseInt(hex, 16))) this.#error(`Invalid unicode escape '\\u${hex}'`);
    this.#pos += 4;
    return String.fromCharCode(Number.parseInt(hex, 16));
  }
  #parsePrefixedLiteral(prefix, quote) {
    this.#pos += 1;
    const inner = this.#readQuoted(quote);
    switch (prefix) {
      case "s":
        return inner;
      case "d":
        return this.#opts.useNativeDates ? new Date(inner) : new DateTime(inner);
      case "u":
        return new Uuid(inner);
      case "b":
        return this.#decodeBytes(inner);
      case "f":
        return this.#parseFileRef(inner);
      case "r":
        return this.#parseInnerRecordId(inner);
      default:
        this.#error(`Unknown literal prefix '${prefix}'`);
    }
  }
  #decodeBytes(inner) {
    const clean = inner.replace(/\s+/g, "");
    if (clean.length % 2 !== 0 || /[^0-9a-fA-F]/.test(clean)) try {
      return fromBase64Url(inner);
    } catch {
      this.#error("Invalid bytes literal, expected a hex string");
    }
    const bytes = new Uint8Array(clean.length / 2);
    for (let i = 0; i < bytes.length; i++) bytes[i] = Number.parseInt(clean.slice(i * 2, i * 2 + 2), 16);
    return bytes;
  }
  #parseFileRef(inner) {
    const separator = inner.indexOf(":");
    if (separator === -1) this.#error("Invalid file reference, expected 'bucket:/key'");
    return new FileRef(inner.slice(0, separator), inner.slice(separator + 1));
  }
  #parseInnerRecordId(inner) {
    const parser = new TextParser$1(inner, this.#opts);
    parser.#skipWs();
    const { name } = parser.#parseIdentRaw();
    if (parser.#peek() !== ":") parser.#error("Expected a record id");
    const record$1 = parser.#parseRecordIdOrRange(name);
    parser.#skipWs();
    if (!parser.#eof()) parser.#error("Unexpected trailing input in record id literal");
    return record$1;
  }
  #parseArray() {
    this.#pos += 1;
    const result = [];
    this.#skipWs();
    if (this.#peek() === "]") {
      this.#pos += 1;
      return result;
    }
    while (true) {
      result.push(this.#parseValue());
      this.#skipWs();
      const char = this.#peek();
      if (char === ",") {
        this.#pos += 1;
        this.#skipWs();
        if (this.#peek() === "]") {
          this.#pos += 1;
          break;
        }
        continue;
      }
      if (char === "]") {
        this.#pos += 1;
        break;
      }
      this.#error("Expected ',' or ']' in array");
    }
    return result;
  }
  #parseObjectOrSet() {
    this.#pos += 1;
    this.#skipWs();
    if (this.#peek() === "}") {
      this.#pos += 1;
      return {};
    }
    const mark = this.#pos;
    const key = this.#tryParseObjectKey();
    if (key !== null) {
      this.#skipWs();
      if (this.#peek() === ":") {
        this.#pos += 1;
        return this.#parseObjectRest(key);
      }
    }
    this.#pos = mark;
    return this.#parseSet();
  }
  #tryParseObjectKey() {
    const char = this.#peek();
    if (char === void 0) return null;
    if (char === '"' || char === "'") return this.#readQuoted(char);
    const code = char.charCodeAt(0);
    if (this.#isIdentStart(code)) return this.#parseIdentRaw().name;
    if (char === "`" || char === ANGLE_OPEN) return this.#parseIdentRaw().name;
    if (this.#isDigit(code)) {
      const start = this.#pos;
      while (!this.#eof() && this.#isDigit(this.#src.charCodeAt(this.#pos))) this.#pos += 1;
      return this.#src.slice(start, this.#pos);
    }
    return null;
  }
  #parseObjectRest(firstKey) {
    const result = {};
    result[firstKey] = this.#parseValue();
    while (true) {
      this.#skipWs();
      const char = this.#peek();
      if (char === "}") {
        this.#pos += 1;
        break;
      }
      if (char !== ",") this.#error("Expected ',' or '}' in object");
      this.#pos += 1;
      this.#skipWs();
      if (this.#peek() === "}") {
        this.#pos += 1;
        break;
      }
      const key = this.#tryParseObjectKey();
      if (key === null) this.#error("Expected an object key");
      this.#skipWs();
      if (this.#peek() !== ":") this.#error("Expected ':' after object key");
      this.#pos += 1;
      result[key] = this.#parseValue();
    }
    return result;
  }
  #parseSet() {
    const result = /* @__PURE__ */ new Set();
    while (true) {
      result.add(this.#parseValue());
      this.#skipWs();
      const char = this.#peek();
      if (char === ",") {
        this.#pos += 1;
        this.#skipWs();
        if (this.#peek() === "}") {
          this.#pos += 1;
          break;
        }
        continue;
      }
      if (char === "}") {
        this.#pos += 1;
        break;
      }
      this.#error("Expected ',' or '}' in set");
    }
    return result;
  }
  #parseGeometryOrGroup() {
    this.#pos += 1;
    this.#skipWs();
    const mark = this.#pos;
    const point = this.#tryParsePoint();
    if (point !== null) return point;
    this.#pos = mark;
    const value = this.#parseValue();
    this.#skipWs();
    if (this.#peek() !== ")") this.#error("Expected ')'");
    this.#pos += 1;
    return value;
  }
  #tryParsePoint() {
    const char = this.#peek();
    if (char === void 0) return null;
    const code = char.charCodeAt(0);
    if (!(this.#isDigit(code) || char === "+" || char === "-")) return null;
    try {
      const x = this.#parseNumberLike();
      if (!this.#isNumeric(x)) return null;
      this.#skipWs();
      if (this.#peek() !== ",") return null;
      this.#pos += 1;
      this.#skipWs();
      const y = this.#parseNumberLike();
      if (!this.#isNumeric(y)) return null;
      this.#skipWs();
      if (this.#peek() !== ")") return null;
      this.#pos += 1;
      return new GeometryPoint([this.#toCoordinate(x), this.#toCoordinate(y)]);
    } catch {
      return null;
    }
  }
  #isNumeric(value) {
    return typeof value === "number" || typeof value === "bigint" || value instanceof Decimal;
  }
  #toCoordinate(value) {
    if (typeof value === "bigint") return Number(value);
    return value;
  }
};
var TextCodec = class TextCodec$1 {
  static {
    __name(this, "TextCodec$1");
  }
  /**
  * The default TextCodec instance.
  */
  static DEFAULT = new TextCodec$1({});
  #options;
  constructor(options = {}) {
    this.#options = options;
  }
  /**
  * Encode a value into its SurrealQL text representation.
  */
  encode(data) {
    return toSurqlString(data);
  }
  /**
  * Decode a SurrealQL value string into value instances.
  */
  decode(data) {
    return new TextParser(data, this.#options).parse();
  }
  static #expect(input, options, expected, check) {
    const value = new TextParser(input, options).parse();
    if (!check(value)) throw new TextParseError(`Expected a ${expected} value`, 0);
    return value;
  }
  /** Parse any single SQON value. */
  static parseValue(input, options) {
    return new TextParser(input, options).parse();
  }
  /** Parse a string value. */
  static parseString(input, options) {
    return TextCodec$1.#expect(input, options, "string", (v) => typeof v === "string");
  }
  /** Parse a numeric value (`int` as `number`/`bigint`, `float` as `number`). */
  static parseNumber(input, options) {
    return TextCodec$1.#expect(input, options, "number", (v) => typeof v === "number" || typeof v === "bigint");
  }
  /** Parse a boolean value. */
  static parseBool(input, options) {
    return TextCodec$1.#expect(input, options, "boolean", (v) => typeof v === "boolean");
  }
  /** Parse a decimal value. */
  static parseDecimal(input, options) {
    return TextCodec$1.#expect(input, options, "decimal", (v) => v instanceof Decimal);
  }
  /** Parse a duration value. */
  static parseDuration(input, options) {
    return TextCodec$1.#expect(input, options, "duration", (v) => v instanceof Duration);
  }
  /** Parse a datetime value (a `Date` when `useNativeDates` is set). */
  static parseDatetime(input, options) {
    return TextCodec$1.#expect(input, options, "datetime", (v) => v instanceof DateTime || v instanceof Date);
  }
  /** Parse a UUID value. */
  static parseUuid(input, options) {
    return TextCodec$1.#expect(input, options, "uuid", (v) => v instanceof Uuid);
  }
  /** Parse a bytes value. */
  static parseBytes(input, options) {
    return TextCodec$1.#expect(input, options, "bytes", (v) => v instanceof Uint8Array);
  }
  /** Parse a file reference value. */
  static parseFile(input, options) {
    return TextCodec$1.#expect(input, options, "file", (v) => v instanceof FileRef);
  }
  /** Parse a table value. */
  static parseTable(input, options) {
    return TextCodec$1.#expect(input, options, "table", (v) => v instanceof _Table);
  }
  /** Parse a record id value. */
  static parseRecordId(input, options) {
    return TextCodec$1.#expect(input, options, "record id", (v) => v instanceof _RecordId);
  }
  /** Parse a record id range value. */
  static parseRecordIdRange(input, options) {
    return TextCodec$1.#expect(input, options, "record id range", (v) => v instanceof _RecordIdRange);
  }
  /** Parse a range value. */
  static parseRange(input, options) {
    return TextCodec$1.#expect(input, options, "range", (v) => v instanceof Range);
  }
  /** Parse a geometry point value. */
  static parseGeometryPoint(input, options) {
    return TextCodec$1.#expect(input, options, "geometry point", (v) => v instanceof GeometryPoint);
  }
  /** Parse an array value. */
  static parseArray(input, options) {
    return TextCodec$1.#expect(input, options, "array", (v) => Array.isArray(v));
  }
  /** Parse a set value. */
  static parseSet(input, options) {
    return TextCodec$1.#expect(input, options, "set", (v) => v instanceof Set);
  }
  /** Parse a plain object value. */
  static parseObject(input, options) {
    return TextCodec$1.#expect(input, options, "object", (v) => typeof v === "object" && v !== null && !Array.isArray(v) && Object.getPrototypeOf(v) === Object.prototype);
  }
};
function normalizePath(prefix, path) {
  return `/${[...prefix.split("/"), ...path.split("/")].filter(Boolean).join("/")}`;
}
__name(normalizePath, "normalizePath");
var BOUND_QUERY_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.BoundQuery");
var FRAME_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.Frame");
var VALUE_FRAME_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.ValueFrame");
var ERROR_FRAME_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.ErrorFrame");
var DONE_FRAME_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.DoneFrame");
var SURREAL_ERROR_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.SurrealError");
var SERVER_ERROR_SYMBOL = /* @__PURE__ */ Symbol.for("surrealdb.ServerError");
function markSymbol(obj, symbol) {
  if (obj && typeof obj === "object") obj[symbol] = true;
}
__name(markSymbol, "markSymbol");
function hasSymbol(obj, symbol) {
  return !!(obj && typeof obj === "object" && obj[symbol]);
}
__name(hasSymbol, "hasSymbol");
var SurrealError = class extends Error {
  static {
    __name(this, "SurrealError");
  }
  constructor(message, options) {
    super(message, options);
    markSymbol(this, SURREAL_ERROR_SYMBOL);
  }
};
var SurrealSqonError = class extends SurrealError {
  static {
    __name(this, "SurrealSqonError");
  }
  name = "SurrealSqonError";
  inner;
  constructor(inner) {
    super(inner.message, { cause: inner });
    this.inner = inner;
  }
};
var CallTerminatedError = class extends SurrealError {
  static {
    __name(this, "CallTerminatedError");
  }
  name = "CallTerminatedError";
  message = "The call has been terminated because the connection was closed";
};
var ReconnectExhaustionError = class extends SurrealError {
  static {
    __name(this, "ReconnectExhaustionError");
  }
  name = "ReconnectExhaustionError";
  message = "The reconnect attempts have been exhausted";
};
var ReconnectIterationError = class extends SurrealError {
  static {
    __name(this, "ReconnectIterationError");
  }
  name = "ReconnectIterationError";
  message = "The reconnect iterator failed to iterate";
};
var UnexpectedServerResponseError = class extends SurrealError {
  static {
    __name(this, "UnexpectedServerResponseError");
  }
  name = "UnexpectedServerResponseError";
  response;
  constructor(response) {
    super(`The server returned an unexpected response: ${JSON.stringify(response)}`);
    this.response = response;
  }
};
var StreamProtocolError = class extends SurrealError {
  static {
    __name(this, "StreamProtocolError");
  }
  name = "StreamProtocolError";
};
var UnexpectedConnectionError = class extends SurrealError {
  static {
    __name(this, "UnexpectedConnectionError");
  }
  name = "UnexpectedConnectionError";
  message = "An unexpected connection error occurred";
  constructor(cause) {
    super();
    this.cause = cause;
  }
};
var UnsupportedEngineError = class extends SurrealError {
  static {
    __name(this, "UnsupportedEngineError");
  }
  name = "UnsupportedEngineError";
  engine;
  constructor(engine) {
    super(`The engine "${engine}" is not supported or configured`);
    this.engine = engine;
  }
};
var ConnectionUnavailableError = class extends SurrealError {
  static {
    __name(this, "ConnectionUnavailableError");
  }
  name = "ConnectionUnavailableError";
  message = "You must be connected to a SurrealDB instance before performing this operation";
};
var MissingNamespaceDatabaseError = class extends SurrealError {
  static {
    __name(this, "MissingNamespaceDatabaseError");
  }
  name = "MissingNamespaceDatabaseError";
  message = "There is no namespace and/or database selected";
};
var HttpConnectionError = class extends SurrealError {
  static {
    __name(this, "HttpConnectionError");
  }
  name = "HttpConnectionError";
  status;
  statusText;
  buffer;
  constructor(message, status, statusText, buffer) {
    super(`HTTP connection failed: ${message}`);
    this.status = status;
    this.statusText = statusText;
    this.buffer = buffer;
  }
};
var ServerError = class extends SurrealError {
  static {
    __name(this, "ServerError");
  }
  get name() {
    return `ServerError [${this.kind}]`;
  }
  /** The structured error kind (e.g. "NotAllowed", "NotFound", "Internal") */
  kind;
  /** Legacy JSON-RPC error code. 0 when not available (e.g. query result errors). */
  code;
  /**
  * Kind-specific structured details using the `{ kind, details? }` wire format.
  * `undefined` when not provided by the server. Subclasses narrow this type
  * to their specific detail union (e.g. `NotAllowedErrorDetail`).
  */
  details;
  constructor(options) {
    const innerCause = options.cause ?? void 0;
    super(options.message, innerCause ? { cause: innerCause } : void 0);
    this.kind = options.kind;
    this.code = options.code ?? 0;
    this.details = options.details ?? void 0;
    markSymbol(this, SERVER_ERROR_SYMBOL);
  }
};
var ValidationError = class extends ServerError {
  static {
    __name(this, "ValidationError");
  }
  kind = "Validation";
  get name() {
    return "ValidationError";
  }
  /** True if this is a SurrealQL parse error. */
  get isParseError() {
    return this.details?.kind === "Parse";
  }
  /** The name of the invalid parameter, if applicable. */
  get parameterName() {
    if (this.details?.kind !== "InvalidParameter") return void 0;
    return this.details.details?.name;
  }
};
var ConfigurationError = class extends ServerError {
  static {
    __name(this, "ConfigurationError");
  }
  kind = "Configuration";
  get name() {
    return "ConfigurationError";
  }
  /** True if live queries are not supported by the server configuration. */
  get isLiveQueryNotSupported() {
    return this.details?.kind === "LiveQueryNotSupported";
  }
};
var ThrownError = class extends ServerError {
  static {
    __name(this, "ThrownError");
  }
  kind = "Thrown";
  get name() {
    return "ThrownError";
  }
};
var QueryError = class extends ServerError {
  static {
    __name(this, "QueryError");
  }
  kind = "Query";
  get name() {
    return "QueryError";
  }
  /** True if the query was not executed (e.g. due to a prior error in the batch). */
  get isNotExecuted() {
    return this.details?.kind === "NotExecuted";
  }
  /** True if the query timed out. */
  get isTimedOut() {
    return this.details?.kind === "TimedOut";
  }
  /** True if the query was cancelled. */
  get isCancelled() {
    return this.details?.kind === "Cancelled";
  }
  /**
  * True if the query failed due to a transaction conflict (a concurrent
  * transaction wrote to the same data). Such errors are safe to retry.
  */
  get isTransactionConflict() {
    return this.details?.kind === "TransactionConflict";
  }
  /**
  * The timeout which was exceeded, if this is a timeout error, or `undefined` otherwise.
  *
  * This is always a `Duration`, whichever engine or protocol received the error, so it can
  * be used as is, e.g. passed to `.timeout()` of a query builder.
  */
  get timeout() {
    if (this.details?.kind !== "TimedOut") return void 0;
    const duration$1 = this.details.details?.duration;
    if (!duration$1) return void 0;
    if (duration$1 instanceof Duration) return duration$1;
    return new Duration([duration$1.secs, duration$1.nanos]);
  }
};
var SerializationError = class extends ServerError {
  static {
    __name(this, "SerializationError");
  }
  kind = "Serialization";
  get name() {
    return "SerializationError";
  }
  /** True if this is a deserialization error (as opposed to serialization). */
  get isDeserialization() {
    return this.details?.kind === "Deserialization";
  }
};
var NotAllowedError = class extends ServerError {
  static {
    __name(this, "NotAllowedError");
  }
  kind = "NotAllowed";
  get name() {
    return "NotAllowedError";
  }
  /** True if the auth token has expired. */
  get isTokenExpired() {
    return this.details?.kind === "Auth" && this.details.details?.kind === "TokenExpired";
  }
  /** True if authentication credentials are invalid. */
  get isInvalidAuth() {
    return this.details?.kind === "Auth" && this.details.details?.kind === "InvalidAuth";
  }
  /** True if scripting is blocked. */
  get isScriptingBlocked() {
    return this.details?.kind === "Scripting";
  }
  /** The method name that is not allowed, if applicable. */
  get methodName() {
    if (this.details?.kind !== "Method") return void 0;
    return this.details.details?.name;
  }
  /** The function name that is not allowed, if applicable. */
  get functionName() {
    if (this.details?.kind !== "Function") return void 0;
    return this.details.details?.name;
  }
};
var NotFoundError = class extends ServerError {
  static {
    __name(this, "NotFoundError");
  }
  kind = "NotFound";
  get name() {
    return "NotFoundError";
  }
  /** The table name that was not found, if applicable. */
  get tableName() {
    if (this.details?.kind !== "Table") return void 0;
    return this.details.details?.name;
  }
  /** The record ID that was not found, if applicable. */
  get recordId() {
    if (this.details?.kind !== "Record") return void 0;
    return this.details.details?.id;
  }
  /** The RPC method name that was not found, if applicable. */
  get methodName() {
    if (this.details?.kind !== "Method") return void 0;
    return this.details.details?.name;
  }
  /** The namespace name that was not found, if applicable. */
  get namespaceName() {
    if (this.details?.kind !== "Namespace") return void 0;
    return this.details.details?.name;
  }
  /** The database name that was not found, if applicable. */
  get databaseName() {
    if (this.details?.kind !== "Database") return void 0;
    return this.details.details?.name;
  }
};
var AlreadyExistsError = class extends ServerError {
  static {
    __name(this, "AlreadyExistsError");
  }
  kind = "AlreadyExists";
  get name() {
    return "AlreadyExistsError";
  }
  /** The record ID that already exists, if applicable. */
  get recordId() {
    if (this.details?.kind !== "Record") return void 0;
    return this.details.details?.id;
  }
  /** The table name that already exists, if applicable. */
  get tableName() {
    if (this.details?.kind !== "Table") return void 0;
    return this.details.details?.name;
  }
};
var InternalError = class extends ServerError {
  static {
    __name(this, "InternalError");
  }
  kind = "Internal";
  get name() {
    return "InternalError";
  }
};
var AuthenticationError = class extends SurrealError {
  static {
    __name(this, "AuthenticationError");
  }
  name = "AuthenticationError";
  message = "Authentication did not succeed";
  constructor(cause) {
    super();
    this.cause = cause;
  }
};
var AuthResolverError = class extends AuthenticationError {
  static {
    __name(this, "AuthResolverError");
  }
  name = "AuthResolverError";
  message = "The authentication resolver did not provide usable credentials";
};
var LiveSubscriptionError = class extends SurrealError {
  static {
    __name(this, "LiveSubscriptionError");
  }
  name = "LiveSubscriptionError";
  constructor(messageOrCause) {
    if (typeof messageOrCause === "string") super(messageOrCause);
    else {
      super("Live subscription failed to listen");
      this.cause = messageOrCause;
    }
  }
};
var UnsupportedVersionError = class extends SurrealError {
  static {
    __name(this, "UnsupportedVersionError");
  }
  name = "UnsupportedVersionError";
  version;
  minimum;
  maximum;
  constructor(version3, minimum, maximum) {
    super(`The version "${version3}" reported by the engine is not supported by this library, expected a version that satisfies >= ${minimum} < ${maximum}`);
    this.version = version3;
    this.minimum = minimum;
    this.maximum = maximum;
  }
};
var ExpressionError = class extends SurrealError {
  static {
    __name(this, "ExpressionError");
  }
  name = "ExpressionError";
  constructor(messageOrCause) {
    if (typeof messageOrCause === "string") super(messageOrCause);
    else {
      super("Failed to parse invalid expression");
      this.cause = messageOrCause;
    }
  }
};
var PublishError = class PublishError2 extends SurrealError {
  static {
    __name(this, "PublishError");
  }
  name = "PublishError";
  message = "One or more subscribers threw an error:";
  /**
  * The errors thrown by the subscribers, as published. A subscriber that
  * publishes to its own subscribers can contribute a nested `PublishError`.
  */
  causes;
  /**
  * The errors thrown by the subscribers, with nested `PublishError`s
  * replaced by their own leaf causes.
  */
  leafCauses;
  constructor(causes) {
    super();
    this.causes = causes;
    this.leafCauses = causes.flatMap((cause) => cause instanceof PublishError2 ? cause.leafCauses : [cause]);
    for (const cause of this.leafCauses) this.message += `
  - ${cause instanceof Error ? cause.message : cause}`;
  }
};
var UnsupportedFeatureError = class extends SurrealError {
  static {
    __name(this, "UnsupportedFeatureError");
  }
  name = "UnsupportedFeatureError";
  feature;
  constructor(feature) {
    super(`The configured engine does not support the feature: ${feature.name}`);
    this.feature = feature;
  }
};
var UnavailableFeatureError = class extends SurrealError {
  static {
    __name(this, "UnavailableFeatureError");
  }
  name = "UnavailableFeatureError";
  feature;
  version;
  constructor(feature, version3) {
    super(`The version of SurrealDB (${version3}) does not support the feature: ${feature.name} (>= ${feature.sinceVersion} < ${feature.untilVersion})`);
    this.feature = feature;
    this.version = version3;
  }
};
var InvalidSessionError = class extends SurrealError {
  static {
    __name(this, "InvalidSessionError");
  }
  name = "InvalidSessionError";
  message = "The provided session is invalid";
  session;
  constructor(session) {
    super(`Invalid session: ${session}`);
    this.session = session;
  }
};
var SchemaValidationError = class extends SurrealError {
  static {
    __name(this, "SchemaValidationError");
  }
  name = "SchemaValidationError";
  /** What was being validated, such as `arguments for fn::add`. */
  subject;
  /** Every issue the schema reported, with the path of the failing value. */
  issues;
  constructor(subject, issues) {
    const lines = issues.map((issue) => {
      const path = issue.path?.map((segment) => String(typeof segment === "object" ? segment.key : segment)).join(".");
      return `  - ${path ? `${path}: ` : ""}${issue.message}`;
    });
    super(`Invalid ${subject}: ${issues.length} validation error${issues.length === 1 ? "" : "s"}
${lines.join("\n")}`);
    this.subject = subject;
    this.issues = issues;
  }
};
var UnsuccessfulApiError = class extends SurrealError {
  static {
    __name(this, "UnsuccessfulApiError");
  }
  name = "UnsuccessfulApiError";
  path;
  method;
  response;
  constructor(path, method, response) {
    super(`The ${method.toUpperCase()} ${path} request failed with status ${response.status}`);
    this.path = path;
    this.method = method;
    this.response = response;
  }
};
var ImportError = class extends SurrealError {
  static {
    __name(this, "ImportError");
  }
  name = "ImportError";
  /** The statements which failed, as server errors, up to the first hundred */
  failures;
  /** How many statements failed */
  failed;
  constructor(failures, failed) {
    const count3 = `${failed} ${failed === 1 ? "statement" : "statements"}`;
    const first = failures[0]?.message;
    super(first === void 0 ? `${count3} of the import failed` : `${count3} of the import failed. The first failed with: ${first}`, failures[0] ? { cause: failures[0] } : void 0);
    this.failures = failures;
    this.failed = failed;
  }
};
var noop = /* @__PURE__ */ __name(() => {
}, "noop");
var MAX_TIMER_DELAY = 2 ** 31 - 1;
function createNamedError(message, name) {
  if (typeof DOMException === "function") return new DOMException(message, name);
  const error3 = new Error(message);
  error3.name = name;
  return error3;
}
__name(createNamedError, "createNamedError");
function abortReason(signal) {
  return signal.reason !== void 0 ? signal.reason : createNamedError("This operation was aborted", "AbortError");
}
__name(abortReason, "abortReason");
function throwIfAborted(signal) {
  if (signal?.aborted) throw abortReason(signal);
}
__name(throwIfAborted, "throwIfAborted");
function addSignal(signals2, signal) {
  return signal ? [...signals2 ?? [], signal] : signals2;
}
__name(addSignal, "addSignal");
function assertTimeout(value, name) {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) throw new SurrealError(`${name} must be a finite number of milliseconds, 0 or greater`);
}
__name(assertTimeout, "assertTimeout");
function abortScope(sources, timeout) {
  const signals2 = sources.filter((source) => source !== void 0);
  const cleanups = [];
  const dispose = /* @__PURE__ */ __name(() => {
    for (const cleanup of cleanups.splice(0)) cleanup();
  }, "dispose");
  if (timeout !== void 0 && timeout > 0) if (typeof AbortSignal.timeout === "function") signals2.push(AbortSignal.timeout(timeout));
  else {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      controller.abort(createNamedError("The operation timed out.", "TimeoutError"));
    }, Math.min(timeout, MAX_TIMER_DELAY));
    timer.unref?.();
    cleanups.push(() => clearTimeout(timer));
    signals2.push(controller.signal);
  }
  if (signals2.length === 0) return {
    signal: void 0,
    dispose
  };
  if (signals2.length === 1) return {
    signal: signals2[0],
    dispose
  };
  if (typeof AbortSignal.any === "function") return {
    signal: AbortSignal.any(signals2),
    dispose
  };
  const combined = new AbortController();
  const aborted = signals2.find((signal) => signal.aborted);
  if (aborted) {
    combined.abort(abortReason(aborted));
    return {
      signal: combined.signal,
      dispose
    };
  }
  for (const signal of signals2) {
    const onAbort = /* @__PURE__ */ __name(() => {
      combined.abort(abortReason(signal));
      dispose();
    }, "onAbort");
    signal.addEventListener("abort", onAbort, { once: true });
    cleanups.push(() => signal.removeEventListener("abort", onAbort));
  }
  return {
    signal: combined.signal,
    dispose
  };
}
__name(abortScope, "abortScope");
function raceAbort(promise, signal, discard) {
  if (!signal) return promise;
  if (signal.aborted) {
    promise.then(discard, noop);
    return Promise.reject(abortReason(signal));
  }
  return new Promise((resolve, reject) => {
    let settled = false;
    const onAbort = /* @__PURE__ */ __name(() => {
      settled = true;
      reject(abortReason(signal));
    }, "onAbort");
    signal.addEventListener("abort", onAbort, { once: true });
    promise.then((value) => {
      signal.removeEventListener("abort", onAbort);
      if (settled) discard?.(value);
      else {
        settled = true;
        resolve(value);
      }
    }, (error3) => {
      signal.removeEventListener("abort", onAbort);
      if (!settled) {
        settled = true;
        reject(error3);
      }
    });
  });
}
__name(raceAbort, "raceAbort");
function abortableSleep(milliseconds, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(abortReason(signal));
      return;
    }
    const onAbort = /* @__PURE__ */ __name(() => {
      clearTimeout(timer);
      reject(abortReason(signal));
    }, "onAbort");
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, milliseconds);
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}
__name(abortableSleep, "abortableSleep");
function release2(iterator) {
  try {
    Promise.resolve(iterator.return?.()).catch(noop);
  } catch {
  }
}
__name(release2, "release");
function abortableIterable(source, signal, onEnd) {
  if (!signal) return source;
  return { [Symbol.asyncIterator]() {
    const iterator = source[Symbol.asyncIterator]();
    let state = "open";
    let failPending;
    const end = /* @__PURE__ */ __name(() => {
      signal.removeEventListener("abort", onAbort);
      onEnd?.();
    }, "end");
    const onAbort = /* @__PURE__ */ __name(() => {
      if (state !== "open") return;
      end();
      release2(iterator);
      if (failPending) {
        state = "closed";
        failPending(abortReason(signal));
      } else state = "aborted";
    }, "onAbort");
    if (signal.aborted) {
      state = "aborted";
      end();
      release2(iterator);
    } else signal.addEventListener("abort", onAbort, { once: true });
    return {
      next() {
        if (state === "aborted") {
          state = "closed";
          return Promise.reject(abortReason(signal));
        }
        if (state === "closed") return Promise.resolve({
          done: true,
          value: void 0
        });
        return new Promise((resolve, reject) => {
          failPending = reject;
          iterator.next().then((result) => {
            failPending = void 0;
            if (state === "open" && result.done) {
              state = "closed";
              end();
            }
            resolve(result);
          }, (error3) => {
            failPending = void 0;
            if (state === "open") {
              state = "closed";
              end();
            }
            reject(error3);
          });
        });
      },
      return(value) {
        if (state === "open") end();
        state = "closed";
        return iterator.return ? iterator.return(value) : Promise.resolve({
          done: true,
          value
        });
      },
      throw(error3) {
        if (state === "open") end();
        state = "closed";
        return iterator.throw ? iterator.throw(error3) : Promise.reject(error3);
      }
    };
  } };
}
__name(abortableIterable, "abortableIterable");
var id = 0;
function getIncrementalID() {
  id = (id + 1) % Number.MAX_SAFE_INTEGER;
  return id.toString();
}
__name(getIncrementalID, "getIncrementalID");
function isExpression(value) {
  return !!value && typeof value === "object" && "toSQL" in value;
}
__name(isExpression, "isExpression");
function mergeBindings(target, source) {
  for (const key of Object.keys(source)) if (key in target) throw new ExpressionError(`Parameter conflict: '${key}' already exists in this BoundQuery`);
  Object.assign(target, source);
}
__name(mergeBindings, "mergeBindings");
var BoundQuery = class BoundQuery2 {
  static {
    __name(this, "BoundQuery");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol(instance, BOUND_QUERY_SYMBOL);
  }
  #query;
  #bindings;
  constructor(query, bindings) {
    if (query instanceof BoundQuery2) {
      const bq = query;
      this.#query = bq.query;
      this.#bindings = { ...bq.bindings };
    } else if (query) {
      this.#query = query;
      this.#bindings = { ...bindings };
    } else {
      this.#query = "";
      this.#bindings = {};
    }
    markSymbol(this, BOUND_QUERY_SYMBOL);
  }
  /**
  * Retrieves the query string.
  */
  get query() {
    return this.#query;
  }
  /**
  * Retrieves a copy of the configured bindings.
  */
  get bindings() {
    return { ...this.#bindings };
  }
  append(other, ...values) {
    const _other = this.#extractQuery(other, values);
    if (_other.#bindings) mergeBindings(this.#bindings, _other.#bindings);
    this.#query += _other.query;
    return this;
  }
  #extractQuery(other, values) {
    if (other instanceof BoundQuery2) return other;
    if (typeof other === "string") return new BoundQuery2(other, values[0]);
    if (Array.isArray(other)) return surql(other, ...values);
    throw new ExpressionError("Invalid query component");
  }
};
function expr(expr$1) {
  const params = {};
  const ctx = { def(value) {
    const bindingName = `bind__${getIncrementalID()}`;
    params[bindingName] = value;
    return `$${bindingName}`;
  } };
  try {
    return new BoundQuery(expr$1 ? expr$1.toSQL(ctx) : "", params);
  } catch (error3) {
    throw new ExpressionError(error3);
  }
}
__name(expr, "expr");
var raw2 = /* @__PURE__ */ __name((s$1) => ({ toSQL: /* @__PURE__ */ __name(() => s$1, "toSQL") }), "raw");
function surql(strings, ...values) {
  const bindings = {};
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      const value = values[i];
      if (value instanceof BoundQuery) {
        result += value.query;
        mergeBindings(bindings, value.bindings);
      } else if (isExpression(value)) {
        const built = expr(value);
        result += built.query;
        mergeBindings(bindings, built.bindings);
      } else {
        const bindingName = `bind__${getIncrementalID()}`;
        result += `$${bindingName}`;
        bindings[bindingName] = value;
      }
    }
  }
  return new BoundQuery(result, bindings);
}
__name(surql, "surql");
function apiInvocation(path, { body, method, headers, query }) {
  return surql`api::invoke(${path}, ${{
    body,
    method,
    headers,
    query
  }})`;
}
__name(apiInvocation, "apiInvocation");
function fastParseJwt(token) {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    return JSON.parse(atob(parts[1]));
  } catch {
    return null;
  }
}
__name(fastParseJwt, "fastParseJwt");
function tokenExpiry(token) {
  const exp = fastParseJwt(token)?.exp;
  return typeof exp === "number" && Number.isFinite(exp) ? exp : void 0;
}
__name(tokenExpiry, "tokenExpiry");
function renewalDelay(remaining, margin) {
  return Math.min(remaining, Math.max(remaining - margin, margin));
}
__name(renewalDelay, "renewalDelay");
function assertAuthCache(cache) {
  if (cache === "until-expiry" || cache === "none") return;
  if (typeof cache === "object" && cache !== null && typeof cache.ttl === "number" && Number.isFinite(cache.ttl) && cache.ttl > 0) return;
  throw new SurrealError('The authentication cache must be "until-expiry", "none", or { ttl } with a positive number of seconds');
}
__name(assertAuthCache, "assertAuthCache");
var RequestCredentials = class {
  static {
    __name(this, "RequestCredentials");
  }
  #cache;
  #margin;
  #now;
  #entries = /* @__PURE__ */ new Map();
  #inflight = /* @__PURE__ */ new Map();
  #queues = /* @__PURE__ */ new Map();
  #serialize;
  #epoch = 0;
  constructor(options) {
    assertAuthCache(options.cache);
    this.#cache = options.cache;
    this.#serialize = options.serialize ?? false;
    this.#margin = options.margin;
    this.#now = options.now ?? (() => Date.now());
  }
  /**
  * Retrieve the credential for a session, invoking `load` when there is no reusable one.
  *
  * @param session The session the credential is for
  * @param load Resolves a new credential
  * @param rejected A token the server refused. It is not returned from the cache, but a
  * different token resolved in the meantime is.
  * @param signal The signal of the request which is waiting. The wait ends with its reason when
  * it aborts, and the resolution goes on without it, for the requests which share it and for
  * those which follow. A resolution which is queued and has not begun by then does not begin.
  */
  async get(session, load, rejected, signal) {
    const key = keyOf(session);
    throwIfAborted(signal);
    if (this.#cache === "none") return this.#serialize ? raceAbort(this.#enqueue(key, load, signal), signal) : raceAbort(load(), signal);
    const entry = this.#entries.get(key);
    if (entry && entry.until > this.#now() && (rejected === void 0 || entry.token !== rejected)) return entry.token;
    const pending = this.#inflight.get(key);
    if (pending) return raceAbort(pending, signal);
    const epoch = this.#epoch;
    const resolution = this.#resolve(key, load, epoch).finally(() => {
      if (this.#inflight.get(key) === resolution) this.#inflight.delete(key);
    });
    this.#inflight.set(key, resolution);
    return raceAbort(resolution, signal);
  }
  /**
  * Run `load` after the resolutions which were asked for before it, for the same session
  */
  #enqueue(key, load, signal) {
    const previous = this.#queues.get(key);
    const turn = /* @__PURE__ */ __name(() => {
      throwIfAborted(signal);
      return load();
    }, "turn");
    const run = previous ? previous.then(turn) : turn();
    const tail = run.then(() => void 0, () => void 0).finally(() => {
      if (this.#queues.get(key) === tail) this.#queues.delete(key);
    });
    this.#queues.set(key, tail);
    return run;
  }
  async #resolve(key, load, epoch) {
    const token = await load();
    const until = this.#reuseUntil(token);
    if (epoch === this.#epoch && until > this.#now()) this.#entries.set(key, {
      token,
      until
    });
    else this.#entries.delete(key);
    return token;
  }
  /**
  * Discard what is remembered for a session. A resolution which is still in flight for
  * it is not remembered once it completes.
  */
  forget(session) {
    const key = keyOf(session);
    this.#epoch++;
    this.#entries.delete(key);
    this.#inflight.delete(key);
  }
  /**
  * Discard what is remembered for every session.
  */
  clear() {
    this.#epoch++;
    this.#entries.clear();
    this.#inflight.clear();
  }
  #reuseUntil(token) {
    const now = this.#now();
    const expiry = token === void 0 ? void 0 : tokenExpiry(token);
    let until = 0;
    if (expiry !== void 0) {
      const remaining = expiry - now / 1e3;
      if (remaining > 0) until = now + renewalDelay(remaining, this.#margin()) * 1e3;
    }
    if (typeof this.#cache === "object") {
      const bound = now + this.#cache.ttl * 1e3;
      until = expiry !== void 0 ? Math.min(until, bound) : bound;
    }
    return until;
  }
};
function keyOf(session) {
  return session ? session.toString() : "";
}
__name(keyOf, "keyOf");
function parseAuthentication(authentication) {
  if (typeof authentication === "object" && authentication !== null && "resolve" in authentication) {
    if (typeof authentication.resolve !== "function") throw new SurrealError("The authentication resolver must be a function");
    if (authentication.when === "request") {
      const cache = authentication.cache ?? "none";
      assertAuthCache(cache);
      return {
        provider: void 0,
        request: {
          resolve: authentication.resolve,
          cache
        }
      };
    }
    if (authentication.when !== void 0 && authentication.when !== "connect") throw new SurrealError('The authentication resolver must be evaluated on "connect" or on "request"');
    return {
      provider: authentication.resolve,
      request: void 0
    };
  }
  return {
    provider: authentication,
    request: void 0
  };
}
__name(parseAuthentication, "parseAuthentication");
async function invokeProvider(provider, session) {
  let provided;
  try {
    provided = typeof provider === "function" ? await provider(session) : provider;
  } catch (error3) {
    throw new AuthResolverError(error3);
  }
  if (provided === null || typeof provided === "string" && provided.length > 0 || typeof provided === "object" && !Array.isArray(provided)) return provided;
  throw new AuthResolverError(/* @__PURE__ */ new TypeError(`Expected a token, authentication details or null, but received ${describeValue(provided)}`));
}
__name(invokeProvider, "invokeProvider");
function assertCredential(credential) {
  if (typeof credential === "string" && credential.length > 0 || typeof credential === "object" && credential !== null && !Array.isArray(credential)) return;
  throw new AuthenticationError(/* @__PURE__ */ new TypeError(`Expected a token or authentication details, but received ${describeValue(credential)}`));
}
__name(assertCredential, "assertCredential");
function describeValue(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "an array";
  if (typeof value === "string") return "an empty string";
  return `a value of type ${typeof value}`;
}
__name(describeValue, "describeValue");
var NOOP = /* @__PURE__ */ __name(() => {
}, "NOOP");
var DispatchedPromise = class extends Promise {
  static {
    __name(this, "DispatchedPromise");
  }
  /**
  * The promise which actually carries this one's state.
  *
  * `then` / `catch` / `finally` all delegate here rather than to `super`, and the
  * inherited promise state (settled by the `NOOP` executor above, i.e. never) is
  * deliberately unused. That indirection is what makes this class portable:
  *
  * React Native replaces the global `Promise` with a JavaScript polyfill (the `promise`
  * package) whose `then` sends any subclass down a `safeThen` path that does
  * `new self.constructor(executor)`. This constructor takes no arguments and cannot
  * honour that executor - and neither can subclasses such as `Query`, whose
  * constructors have their own signatures - so the promise returned to the caller would
  * never settle, hanging every lazily dispatched API on React Native. `Symbol.species`
  * does not help, because the polyfill reads `self.constructor` rather than species.
  *
  * Delegating to a plain `Promise` sidesteps the whole problem: its `constructor` *is*
  * `Promise`, so the fast path is always taken, on every runtime.
  */
  #inner;
  #resolve;
  #reject;
  #dispatched = false;
  constructor() {
    super(NOOP);
    this.#inner = new Promise((resolve, reject) => {
      this.#resolve = resolve;
      this.#reject = reject;
    });
  }
  #ensureDispatched() {
    if (!this.#dispatched) {
      this.#dispatched = true;
      this.dispatch().then(this.#resolve, this.#reject);
    }
    return this.#inner;
  }
  then(onfulfilled, onrejected) {
    return this.#ensureDispatched().then(onfulfilled, onrejected);
  }
  catch(onrejected) {
    return this.#ensureDispatched().catch(onrejected);
  }
  finally(onfinally) {
    return this.#ensureDispatched().finally(onfinally);
  }
  static get [Symbol.species]() {
    return Promise;
  }
  get [Symbol.toStringTag]() {
    return "DispatchedPromise";
  }
};
function maybeJsonify(value, apply) {
  return apply ? jsonify(value) : value;
}
__name(maybeJsonify, "maybeJsonify");
async function validateWith(schema, value, subject) {
  const result = await schema["~standard"].validate(value);
  if (result.issues) throw new SchemaValidationError(subject, result.issues);
  return result.value;
}
__name(validateWith, "validateWith");
var credentialed = /* @__PURE__ */ new WeakSet();
function markCredentialed(query) {
  credentialed.add(query);
  return query;
}
__name(markCredentialed, "markCredentialed");
function isCredentialed(query) {
  return credentialed.has(query);
}
__name(isCredentialed, "isCredentialed");
function rand(min, max) {
  return Math.random() * (max - min) + min;
}
__name(rand, "rand");
var DEFAULT_RETRY_OPTIONS = {
  enabled: false,
  attempts: 5,
  retryDelay: 100,
  retryDelayMax: 2e3,
  retryDelayMultiplier: 2,
  retryDelayJitter: 0.1
};
function isRetryableConflict(error3) {
  return error3 instanceof QueryError && error3.isTransactionConflict;
}
__name(isRetryableConflict, "isRetryableConflict");
var RetryContext = class {
  static {
    __name(this, "RetryContext");
  }
  #attempts = 0;
  #signal;
  options;
  constructor(options, signal) {
    this.options = options;
    this.#signal = signal;
  }
  get attempts() {
    return this.#attempts;
  }
  get enabled() {
    return this.options.enabled;
  }
  /** The predicate used to determine whether an error is a retryable conflict */
  get retryable() {
    return this.options.retryable ?? isRetryableConflict;
  }
  /** Whether another retry attempt is allowed */
  get allowed() {
    if (!this.options.enabled) return false;
    if (this.options.attempts !== -1 && this.#attempts >= this.options.attempts) return false;
    return true;
  }
  /**
  * Wait for the computed backoff delay before the next attempt.
  *
  * Rejects with the reason of the signal, if it aborts before or during the wait.
  */
  async iterate() {
    this.#attempts++;
    const multiplier = this.options.retryDelayMultiplier ** this.#attempts;
    const adjustedDelay = this.options.retryDelay * multiplier;
    const jitterModifier = rand(-this.options.retryDelayJitter, this.options.retryDelayJitter);
    const nextDelay = Math.min(adjustedDelay * (1 + jitterModifier), this.options.retryDelayMax);
    await abortableSleep(nextDelay, this.#signal);
  }
  /**
  * Execute `fn`, retrying it on retryable conflict errors.
  *
  * When retry is disabled the function is executed exactly once. On a retryable error, the
  * context backs off and retries until its attempts are exhausted, at which point the last
  * error is rethrown. Non-retryable errors are rethrown immediately.
  *
  * If the signal aborts while waiting to retry, the wait ends and its reason is thrown in place
  * of the error being retried. An error which is not retried is thrown as it is.
  *
  * @param fn The work to execute. Receives the zero-based attempt number.
  */
  async run(fn) {
    const retryable = this.retryable;
    for (; ; ) try {
      return await fn(this.#attempts);
    } catch (error3) {
      if (!this.enabled || !retryable(error3) || !this.allowed) throw error3;
      await this.iterate();
    }
  }
  static mergeOptions(input, base = DEFAULT_RETRY_OPTIONS) {
    if (input === void 0) return base;
    if (typeof input === "boolean") return {
      ...base,
      enabled: input
    };
    return {
      ...base,
      ...input,
      enabled: input.enabled ?? true
    };
  }
};
var LEGACY_SECONDARY = /^The query was not executed due to a (failed|cancelled) transaction/;
function isSecondaryError(error3) {
  if (error3 instanceof QueryError && (error3.isNotExecuted || error3.isCancelled)) return true;
  return !error3.details && LEGACY_SECONDARY.test(error3.message);
}
__name(isSecondaryError, "isSecondaryError");
function findRootCause(errors) {
  let first;
  for (const error3 of errors) {
    if (!isSecondaryError(error3)) return error3;
    first ??= error3;
  }
  return first;
}
__name(findRootCause, "findRootCause");
var TRACE_KINDS = [
  "relations",
  "references",
  "links",
  "variables",
  "subscriptions"
];
function normalizeTraceKinds(kinds) {
  for (const kind of kinds) if (!TRACE_KINDS.includes(kind)) throw new TypeError(`Unknown trace kind "${kind}", expected one of: ${TRACE_KINDS.join(", ")}`);
  const asked = kinds.length > 0 ? kinds : TRACE_KINDS;
  return TRACE_KINDS.filter((kind) => asked.includes(kind));
}
__name(normalizeTraceKinds, "normalizeTraceKinds");
function parseTrace(raw$1) {
  if (typeof raw$1 !== "object" || raw$1 === null || Array.isArray(raw$1)) return void 0;
  const wire = raw$1;
  const trace3 = {};
  const relations = entries(wire.relations).flatMap((entry) => {
    const [from, edge, out] = entry;
    return edge === void 0 || edge === null ? [] : [{
      in: optional(from),
      edge,
      out: optional(out)
    }];
  });
  if (relations.length > 0) trace3.relations = relations;
  const references = entries(wire.references).flatMap((entry) => {
    const [referrer, referenced] = entry;
    return referrer === void 0 || referenced === void 0 ? [] : [{
      referrer,
      referenced
    }];
  });
  if (references.length > 0) trace3.references = references;
  const links = entries(wire.links).flatMap((entry) => {
    const [record$1, field, target] = entry;
    return record$1 === void 0 || typeof field !== "string" || target === void 0 ? [] : [{
      record: record$1,
      field,
      target
    }];
  });
  if (links.length > 0) trace3.links = links;
  if (typeof wire.variables === "object" && wire.variables !== null && Object.keys(wire.variables).length > 0) trace3.variables = { ...wire.variables };
  if (Array.isArray(wire.subscriptions) && wire.subscriptions.length > 0) trace3.subscriptions = [...wire.subscriptions];
  if (wire.partial === true) trace3.partial = true;
  if (Array.isArray(wire.truncated)) {
    const truncated = wire.truncated.filter((kind) => TRACE_KINDS.includes(kind));
    if (truncated.length > 0) trace3.truncated = truncated;
  }
  return Object.keys(trace3).length > 0 ? trace3 : void 0;
}
__name(parseTrace, "parseTrace");
function traced(trace3) {
  return trace3 ? { trace: trace3 } : {};
}
__name(traced, "traced");
function entries(part) {
  return Array.isArray(part) ? part.filter(Array.isArray) : [];
}
__name(entries, "entries");
function optional(id$1) {
  return id$1 === void 0 || id$1 === null ? void 0 : id$1;
}
__name(optional, "optional");
function mergeTraces(trace3, more) {
  if (!more) return trace3;
  if (!trace3) return more;
  const merged = {};
  const relations = [...trace3.relations ?? [], ...more.relations ?? []];
  if (relations.length > 0) merged.relations = relations;
  const references = [...trace3.references ?? [], ...more.references ?? []];
  if (references.length > 0) merged.references = references;
  const links = [...trace3.links ?? [], ...more.links ?? []];
  if (links.length > 0) merged.links = links;
  const variables = {
    ...trace3.variables,
    ...more.variables
  };
  if (Object.keys(variables).length > 0) merged.variables = variables;
  const subscriptions = [...trace3.subscriptions ?? [], ...more.subscriptions ?? []];
  if (subscriptions.length > 0) merged.subscriptions = subscriptions;
  if (trace3.partial || more.partial) merged.partial = true;
  const truncated = TRACE_KINDS.filter((kind) => trace3.truncated?.includes(kind) || more.truncated?.includes(kind));
  if (truncated.length > 0) merged.truncated = truncated;
  return merged;
}
__name(mergeTraces, "mergeTraces");
function queryParams(query, method, options) {
  const trace3 = method === "query" ? options?.trace : void 0;
  return trace3 && trace3.length > 0 ? [
    query.query,
    query.bindings,
    { trace: [...trace3] }
  ] : [query.query, query.bindings];
}
__name(queryParams, "queryParams");
var ChannelIterator = class {
  static {
    __name(this, "ChannelIterator");
  }
  #cancelled = false;
  #queue = [];
  #waiters = [];
  #cleanup;
  constructor(cleanup) {
    this.#cleanup = cleanup;
  }
  next() {
    if (this.#cancelled) return Promise.resolve({
      value: void 0,
      done: true
    });
    if (this.#queue.length > 0) return Promise.resolve({
      value: this.#queue.shift(),
      done: false
    });
    return new Promise((resolve) => {
      this.#waiters.push(resolve);
    });
  }
  return() {
    this.#end();
    return Promise.resolve({
      value: void 0,
      done: true
    });
  }
  throw(error3) {
    this.#end();
    return Promise.reject(error3);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  submit(value) {
    if (this.#cancelled) return;
    const waiter = this.#waiters.shift();
    if (waiter) {
      waiter({
        value,
        done: false
      });
      return;
    }
    this.#queue.push(value);
  }
  cancel() {
    this.#end();
  }
  /**
  * Ends the channel, settling every reader still waiting on it.
  */
  #end() {
    const waiters = this.#waiters;
    this.#cancelled = true;
    this.#waiters = [];
    this.#cleanup?.();
    for (const waiter of waiters) waiter({
      value: void 0,
      done: true
    });
  }
};
var MINIMUM_VERSION = "2.1.0";
var MAXIMUM_VERSION = "5.0.0";
function isVersionSupported(version3, min = MINIMUM_VERSION, until = MAXIMUM_VERSION) {
  const trimmed = version3.replace(/^surrealdb-/, "").trim();
  return min.localeCompare(trimmed, void 0, { numeric: true }) <= 0 && until.localeCompare(trimmed, void 0, { numeric: true }) === 1;
}
__name(isVersionSupported, "isVersionSupported");
var Feature = class {
  static {
    __name(this, "Feature");
  }
  #name;
  #since;
  #until;
  constructor(name, since, until) {
    this.#name = name;
    this.#since = since;
    this.#until = until;
  }
  get name() {
    return this.#name;
  }
  get sinceVersion() {
    return this.#since;
  }
  get untilVersion() {
    return this.#until;
  }
  supports(version3) {
    return isVersionSupported(version3, this.#since ?? MINIMUM_VERSION, this.#until ?? MAXIMUM_VERSION);
  }
};
var Features = Object.freeze({
  LiveQueries: new Feature("live-queries"),
  Sessions: new Feature("sessions", "3.0.0"),
  Api: new Feature("api", "3.0.0"),
  RefreshTokens: new Feature("refresh-tokens", "3.0.0"),
  Transactions: new Feature("transactions", "3.0.0"),
  ExportImportRaw: new Feature("export-import-raw"),
  SurrealML: new Feature("surreal-ml", void 0, "4.0.0"),
  PerRequestAuth: new Feature("per-request-auth"),
  QueryStreaming: new Feature("query-streaming", "3.3.0"),
  SqlDialects: new Feature("sql-dialects", "4.0.0"),
  QueryTrace: new Feature("query-trace", "4.0.0")
});
var Frame = class {
  static {
    __name(this, "Frame");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol(instance, FRAME_SYMBOL);
  }
  query;
  constructor(query) {
    this.query = query;
    markSymbol(this, FRAME_SYMBOL);
  }
  /**
  * Returns true if the frame is associated with the given query index
  */
  isOf(query) {
    return this.query === query;
  }
  /**
  * Returns true if the frame is a value frame
  */
  isValue() {
    return this instanceof ValueFrame;
  }
  /**
  * Returns true if the frame is an error frame
  */
  isError() {
    return this instanceof ErrorFrame;
  }
  /**
  * Returns true if the frame is a done frame
  */
  isDone() {
    return this instanceof DoneFrame;
  }
  /**
  * Returns true if the frame is a value frame and associated with the given query index
  */
  isValueOf(query) {
    return this.isOf(query) && this.isValue();
  }
  /**
  * Returns true if the frame is an error frame and associated with the given query index
  */
  isErrorOf(query) {
    return this.isOf(query) && this.isError();
  }
  /**
  * Returns true if the frame is a done frame and associated with the given query index
  */
  isDoneOf(query) {
    return this.isOf(query) && this.isDone();
  }
};
var ValueFrame = class extends Frame {
  static {
    __name(this, "ValueFrame");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol(instance, VALUE_FRAME_SYMBOL);
  }
  value;
  isSingle;
  /**
  * What the server sent about the graph the statement walked on the frame this value arrived
  * in, for a query which asked for a trace. A frame holding several rows yields the trace with
  * the first of them. It belongs to the statement and not to this row, and is retracted with
  * the rows if the statement fails.
  */
  trace;
  constructor(query, value, isSingle, trace3) {
    super(query);
    this.value = value;
    this.isSingle = isSingle;
    this.trace = trace3;
    markSymbol(this, VALUE_FRAME_SYMBOL);
  }
  isOf(query) {
    return super.isOf(query);
  }
};
var ErrorFrame = class extends Frame {
  static {
    __name(this, "ErrorFrame");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol(instance, ERROR_FRAME_SYMBOL);
  }
  stats;
  error;
  constructor(query, stats, error3) {
    super(query);
    this.stats = stats;
    this.error = error3;
    markSymbol(this, ERROR_FRAME_SYMBOL);
  }
  isOf(query) {
    return super.isOf(query);
  }
  /**
  * Throw the server error corresponding to this error frame
  */
  throw() {
    throw this.error;
  }
};
var DoneFrame = class extends Frame {
  static {
    __name(this, "DoneFrame");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol(instance, DONE_FRAME_SYMBOL);
  }
  stats;
  type;
  /**
  * What the server sent about the graph the statement walked on its closing frame, for a query
  * which asked for a trace: the part which belongs to the statement as a whole, such as the
  * variables it bound, and any entries no earlier frame took.
  */
  trace;
  constructor(query, stats, type2, trace3) {
    super(query);
    this.stats = stats;
    this.type = type2;
    this.trace = trace3;
    markSymbol(this, DONE_FRAME_SYMBOL);
  }
  isOf(query) {
    return super.isOf(query);
  }
};
var AuthPromise = class AuthPromise2 extends DispatchedPromise {
  static {
    __name(this, "AuthPromise");
  }
  #connection;
  #options;
  constructor(connection, options) {
    super();
    this.#connection = connection;
    this.#options = options;
  }
  /**
  * Configure the query to return the result as a
  * JSON-compatible structure.
  *
  * This is useful when query results need to be serialized. Keep in mind
  * that your responses will lose SurrealDB type information.
  */
  json() {
    return new AuthPromise2(this.#connection, {
      ...this.#options,
      json: true
    });
  }
  /**
  * Run this call as a different identity than the one of the session, for this call only.
  * The session is neither used nor changed. Supported by engines which present credentials
  * with every request, such as HTTP, and rejected with an `UnsupportedFeatureError` by
  * the others.
  *
  * @see {@link Query.as} for details.
  *
  * @param credential An access token or authentication details to run this call as
  * @returns A new `AuthPromise` which runs as the provided identity.
  */
  as(credential) {
    assertCredential(credential);
    return new AuthPromise2(this.#connection, {
      ...this.#options,
      credential
    });
  }
  /**
  * Configure the query to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, the query is not sent and fails straight away. If it aborts
  * later, the query stops waiting for the server and fails with the `reason` of the signal, as it
  * is: an `AbortError`, or the `TimeoutError` of `AbortSignal.timeout()`. This holds for awaiting
  * the query as well as for `.stream()`, which ends its iteration with the reason.
  *
  * Aborting means "stop waiting", and nothing more. The server may keep executing the query, and
  * **a write which was sent before the signal aborted may or may not have been applied**.
  *
  * Can be called more than once, and in addition to a signal inherited from `withSignal()`: the
  * query is abandoned when any of them aborts. See {@link Query.signal}.
  *
  * @example
  * ```ts
  * const result = await db.auth().signal(request.signal);
  * ```
  *
  * @param signal The signal which abandons the query. Without one, nothing changes.
  */
  signal(signal) {
    return new AuthPromise2(this.#connection, {
      ...this.#options,
      signals: addSignal(this.#options.signals, signal)
    });
  }
  /**
  * Configure how long to wait for the server to answer the query, in milliseconds, before giving
  * up on it with a `TimeoutError`. Overrides the `requestTimeout` of the connection for this
  * query, so it can also allow a query longer than that default, or `0` to wait without limit.
  *
  * This is a limit on the client, and not the `TIMEOUT` clause which the server enforces and
  * which is set with `.timeout()`. The server is not told the client has given up, so **a write
  * which timed out may or may not have been applied**. See {@link Query.requestTimeout}.
  *
  * @param milliseconds The time to wait for an answer, or `0` for no limit.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new AuthPromise2(this.#connection, {
      ...this.#options,
      requestTimeout: milliseconds
    });
  }
  /**
  * Compile this qurery into a BoundQuery
  */
  compile() {
    return this.#build().inner;
  }
  /**
  * Stream the results of the query as they are received.
  *
  * @returns An async iterable of query frames.
  */
  async *stream() {
    const query = this.#build().stream();
    for await (const frame$1 of query) yield frame$1;
  }
  async dispatch() {
    const [result] = await this.#build().collect();
    return result;
  }
  #build() {
    const { transaction, session, json } = this.#options;
    return new Query(this.#connection, {
      credential: this.#options.credential,
      query: new BoundQuery("SELECT * FROM ONLY $auth"),
      transaction,
      session,
      json,
      signals: this.#options.signals,
      requestTimeout: this.#options.requestTimeout
    });
  }
};
var OUTPUTS = /* @__PURE__ */ new Map([
  ["null", "null"],
  ["none", "NONE"],
  ["diff", "DIFF"],
  ["before", "BEFORE"],
  ["after", "AFTER"]
]);
var _only = /* @__PURE__ */ __name((value) => ({ toSQL: /* @__PURE__ */ __name((ctx) => value instanceof _RecordId || value instanceof StringRecordId ? `ONLY ${ctx.def(value)}` : ctx.def(value), "toSQL") }), "_only");
var _output = /* @__PURE__ */ __name((value) => ({ toSQL: /* @__PURE__ */ __name(() => {
  const output = OUTPUTS.get(value);
  if (!output) throw new ExpressionError(`Invalid output value: ${value}`);
  return output;
}, "toSQL") }), "_output");
var _timeout = /* @__PURE__ */ __name((timeout) => ({ toSQL: /* @__PURE__ */ __name(() => {
  if (!(timeout instanceof Duration)) throw new ExpressionError(`Invalid timeout value: ${timeout}`);
  return timeout.toString();
}, "toSQL") }), "_timeout");
var CreatePromise = class CreatePromise2 extends DispatchedPromise {
  static {
    __name(this, "CreatePromise");
  }
  #connection;
  #options;
  constructor(connection, options) {
    super();
    this.#connection = connection;
    this.#options = options;
  }
  /**
  * Configure the query to return the result as a
  * JSON-compatible structure.
  *
  * This is useful when query results need to be serialized. Keep in mind
  * that your responses will lose SurrealDB type information.
  */
  json() {
    return new CreatePromise2(this.#connection, {
      ...this.#options,
      json: true
    });
  }
  /**
  * Run this call as a different identity than the one of the session, for this call only.
  * The session is neither used nor changed. Supported by engines which present credentials
  * with every request, such as HTTP, and rejected with an `UnsupportedFeatureError` by
  * the others.
  *
  * @see {@link Query.as} for details.
  *
  * @param credential An access token or authentication details to run this call as
  * @returns A new `CreatePromise` which runs as the provided identity.
  */
  as(credential) {
    assertCredential(credential);
    return new CreatePromise2(this.#connection, {
      ...this.#options,
      credential
    });
  }
  /**
  * Configure the query to automatically retry when it fails due to a transaction conflict.
  *
  * Under concurrent load a query may fail because another transaction wrote to the same data.
  * When retry is enabled, the entire query is re-sent with exponential backoff until it
  * succeeds or the configured attempts are exhausted.
  *
  * **NOTE:** Retrying re-sends the full query. Only use this for queries that are safe to replay.
  * Re-sending a non-atomic, multi-statement query may apply some statements more than once.
  *
  * @example
  * ```ts
  * const user = await db.create(new RecordId('users', 'john'))
  *     .content({ name: 'John Doe' })
  *     .retry();
  * ```
  *
  * @param options Retry behavior. Defaults to enabling retry using the connection defaults.
  * @returns A new `CreatePromise` configured to retry on conflict.
  */
  retry(options = true) {
    return new CreatePromise2(this.#connection, {
      ...this.#options,
      retry: options
    });
  }
  /**
  * Configure the query to set the record data
  */
  content(data) {
    return new CreatePromise2(this.#connection, {
      ...this.#options,
      mutation: "content",
      data
    });
  }
  /**
  * Configure the query to patch the record data
  */
  patch(data) {
    return new CreatePromise2(this.#connection, {
      ...this.#options,
      mutation: "patch",
      data
    });
  }
  /**
  * Configure the output of the query
  */
  output(output) {
    return new CreatePromise2(this.#connection, {
      ...this.#options,
      output
    });
  }
  /**
  * Configure the timeout of the query
  */
  timeout(timeout) {
    return new CreatePromise2(this.#connection, {
      ...this.#options,
      timeout
    });
  }
  /**
  * Configure a custom version of the data being created. This is used
  * alongside version enabled storage engines such as SurrealKV.
  */
  version(version3) {
    return new CreatePromise2(this.#connection, {
      ...this.#options,
      version: version3
    });
  }
  /**
  * Configure the query to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, the query is not sent and fails straight away. If it aborts
  * later, the query stops waiting for the server and fails with the `reason` of the signal, as it
  * is: an `AbortError`, or the `TimeoutError` of `AbortSignal.timeout()`. This holds for awaiting
  * the query as well as for `.stream()`, which ends its iteration with the reason.
  *
  * Aborting means "stop waiting", and nothing more. The server may keep executing the query, and
  * **a write which was sent before the signal aborted may or may not have been applied**.
  *
  * Can be called more than once, and in addition to a signal inherited from `withSignal()`: the
  * query is abandoned when any of them aborts. See {@link Query.signal}.
  *
  * @example
  * ```ts
  * const result = await db.create(table).content(data).signal(request.signal);
  * ```
  *
  * @param signal The signal which abandons the query. Without one, nothing changes.
  */
  signal(signal) {
    return new CreatePromise2(this.#connection, {
      ...this.#options,
      signals: addSignal(this.#options.signals, signal)
    });
  }
  /**
  * Configure how long to wait for the server to answer the query, in milliseconds, before giving
  * up on it with a `TimeoutError`. Overrides the `requestTimeout` of the connection for this
  * query, so it can also allow a query longer than that default, or `0` to wait without limit.
  *
  * This is a limit on the client, and not the `TIMEOUT` clause which the server enforces and
  * which is set with `.timeout()`. The server is not told the client has given up, so **a write
  * which timed out may or may not have been applied**. See {@link Query.requestTimeout}.
  *
  * @param milliseconds The time to wait for an answer, or `0` for no limit.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new CreatePromise2(this.#connection, {
      ...this.#options,
      requestTimeout: milliseconds
    });
  }
  /**
  * Compile this qurery into a BoundQuery
  */
  compile() {
    return this.#build().inner;
  }
  /**
  * Stream the records of the query as they arrive.
  *
  * The first are available while the rest are still being produced, and nothing is held but
  * what has arrived and not yet been read. Each is yielded as it is, or as `parse` returns it
  * when one is given. See `Query.rows()` for the details, which apply here: a record is
  * provisional until iteration completes without throwing, and leaving the loop stops the query.
  *
  * @param parse Applied to each record as it arrives. Without one, records are yielded as they are.
  * @returns A single-use async iterable of records, which can also be disposed.
  */
  rows(parse) {
    return this.#build().rows(parse);
  }
  /**
  * Stream the results of the query as they are received.
  *
  * @returns An async iterable of query frames.
  */
  async *stream() {
    const query = this.#build().stream();
    for await (const frame$1 of query) yield frame$1;
  }
  async dispatch() {
    const [result] = await this.#build().collect();
    return result;
  }
  #build() {
    const { what, data, transaction, session, json, output, timeout, version: version3, mutation, retry } = this.#options;
    const query = surql`CREATE ${_only(what)}`;
    if (mutation && data) query.append(surql` ${raw2(mutation.toUpperCase())} ${data}`);
    if (output) query.append(surql` RETURN ${_output(output)}`);
    if (version3) query.append(surql` VERSION ${version3}`);
    if (timeout) query.append(surql` TIMEOUT ${_timeout(timeout)}`);
    return new Query(this.#connection, {
      credential: this.#options.credential,
      retry,
      query,
      transaction,
      json,
      session,
      signals: this.#options.signals,
      requestTimeout: this.#options.requestTimeout
    });
  }
};
var DeletePromise = class DeletePromise2 extends DispatchedPromise {
  static {
    __name(this, "DeletePromise");
  }
  #connection;
  #options;
  constructor(connection, options) {
    super();
    this.#connection = connection;
    this.#options = options;
  }
  /**
  * Configure the query to return the result as a
  * JSON-compatible structure.
  *
  * This is useful when query results need to be serialized. Keep in mind
  * that your responses will lose SurrealDB type information.
  */
  json() {
    return new DeletePromise2(this.#connection, {
      ...this.#options,
      json: true
    });
  }
  /**
  * Run this call as a different identity than the one of the session, for this call only.
  * The session is neither used nor changed. Supported by engines which present credentials
  * with every request, such as HTTP, and rejected with an `UnsupportedFeatureError` by
  * the others.
  *
  * @see {@link Query.as} for details.
  *
  * @param credential An access token or authentication details to run this call as
  * @returns A new `DeletePromise` which runs as the provided identity.
  */
  as(credential) {
    assertCredential(credential);
    return new DeletePromise2(this.#connection, {
      ...this.#options,
      credential
    });
  }
  /**
  * Configure the query to automatically retry when it fails due to a transaction conflict.
  *
  * Under concurrent load a query may fail because another transaction wrote to the same data.
  * When retry is enabled, the entire query is re-sent with exponential backoff until it
  * succeeds or the configured attempts are exhausted.
  *
  * **NOTE:** Retrying re-sends the full query. Only use this for queries that are safe to replay.
  * Re-sending a non-atomic, multi-statement query may apply some statements more than once.
  *
  * @example
  * ```ts
  * await db.delete(new RecordId('users', 'john')).retry();
  * ```
  *
  * @param options Retry behavior. Defaults to enabling retry using the connection defaults.
  * @returns A new `DeletePromise` configured to retry on conflict.
  */
  retry(options = true) {
    return new DeletePromise2(this.#connection, {
      ...this.#options,
      retry: options
    });
  }
  /**
  * Configure the output of the query
  */
  output(output) {
    return new DeletePromise2(this.#connection, {
      ...this.#options,
      output
    });
  }
  /**
  * Configure the timeout of the query
  */
  timeout(timeout) {
    return new DeletePromise2(this.#connection, {
      ...this.#options,
      timeout
    });
  }
  /**
  * Configure a custom version of the data being deleted.
  *
  * @deprecated SurrealDB has no `VERSION` clause for `DELETE` statements, so
  * a query using this method fails with an `ExpressionError` when it is
  * compiled or executed, before anything is sent to the server.
  */
  version(version3) {
    return new DeletePromise2(this.#connection, {
      ...this.#options,
      version: version3
    });
  }
  /**
  * Configure the query to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, the query is not sent and fails straight away. If it aborts
  * later, the query stops waiting for the server and fails with the `reason` of the signal, as it
  * is: an `AbortError`, or the `TimeoutError` of `AbortSignal.timeout()`. This holds for awaiting
  * the query as well as for `.stream()`, which ends its iteration with the reason.
  *
  * Aborting means "stop waiting", and nothing more. The server may keep executing the query, and
  * **a write which was sent before the signal aborted may or may not have been applied**.
  *
  * Can be called more than once, and in addition to a signal inherited from `withSignal()`: the
  * query is abandoned when any of them aborts. See {@link Query.signal}.
  *
  * @example
  * ```ts
  * const result = await db.delete(id).signal(request.signal);
  * ```
  *
  * @param signal The signal which abandons the query. Without one, nothing changes.
  */
  signal(signal) {
    return new DeletePromise2(this.#connection, {
      ...this.#options,
      signals: addSignal(this.#options.signals, signal)
    });
  }
  /**
  * Configure how long to wait for the server to answer the query, in milliseconds, before giving
  * up on it with a `TimeoutError`. Overrides the `requestTimeout` of the connection for this
  * query, so it can also allow a query longer than that default, or `0` to wait without limit.
  *
  * This is a limit on the client, and not the `TIMEOUT` clause which the server enforces and
  * which is set with `.timeout()`. The server is not told the client has given up, so **a write
  * which timed out may or may not have been applied**. See {@link Query.requestTimeout}.
  *
  * @param milliseconds The time to wait for an answer, or `0` for no limit.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new DeletePromise2(this.#connection, {
      ...this.#options,
      requestTimeout: milliseconds
    });
  }
  /**
  * Compile this qurery into a BoundQuery
  */
  compile() {
    return this.#build().inner;
  }
  /**
  * Stream the records of the query as they arrive.
  *
  * The first are available while the rest are still being produced, and nothing is held but
  * what has arrived and not yet been read. Each is yielded as it is, or as `parse` returns it
  * when one is given. See `Query.rows()` for the details, which apply here: a record is
  * provisional until iteration completes without throwing, and leaving the loop stops the query.
  *
  * @param parse Applied to each record as it arrives. Without one, records are yielded as they are.
  * @returns A single-use async iterable of records, which can also be disposed.
  */
  rows(parse) {
    return this.#build().rows(parse);
  }
  /**
  * Stream the results of the query as they are received.
  *
  * @returns An async iterable of query frames.
  */
  async *stream() {
    const query = this.#build().stream();
    for await (const frame$1 of query) yield frame$1;
  }
  async dispatch() {
    const [result] = await this.#build().collect();
    return result;
  }
  #build() {
    const { what, transaction, session, json, output, timeout, version: version3, retry } = this.#options;
    if (version3) throw new ExpressionError("The VERSION clause is not supported by DELETE statements");
    const query = surql`DELETE ${_only(what)}`;
    if (output) query.append(surql` RETURN ${_output(output)}`);
    if (timeout) query.append(surql` TIMEOUT ${_timeout(timeout)}`);
    return new Query(this.#connection, {
      credential: this.#options.credential,
      retry,
      query,
      transaction,
      json,
      session,
      signals: this.#options.signals,
      requestTimeout: this.#options.requestTimeout
    });
  }
};
var InsertPromise = class InsertPromise2 extends DispatchedPromise {
  static {
    __name(this, "InsertPromise");
  }
  #connection;
  #options;
  constructor(connection, options) {
    super();
    this.#connection = connection;
    this.#options = options;
  }
  /**
  * Configure the query to return the result as a
  * JSON-compatible structure.
  *
  * This is useful when query results need to be serialized. Keep in mind
  * that your responses will lose SurrealDB type information.
  */
  json() {
    return new InsertPromise2(this.#connection, {
      ...this.#options,
      json: true
    });
  }
  /**
  * Run this call as a different identity than the one of the session, for this call only.
  * The session is neither used nor changed. Supported by engines which present credentials
  * with every request, such as HTTP, and rejected with an `UnsupportedFeatureError` by
  * the others.
  *
  * @see {@link Query.as} for details.
  *
  * @param credential An access token or authentication details to run this call as
  * @returns A new `InsertPromise` which runs as the provided identity.
  */
  as(credential) {
    assertCredential(credential);
    return new InsertPromise2(this.#connection, {
      ...this.#options,
      credential
    });
  }
  /**
  * Configure the query to automatically retry when it fails due to a transaction conflict.
  *
  * Under concurrent load a query may fail because another transaction wrote to the same data.
  * When retry is enabled, the entire query is re-sent with exponential backoff until it
  * succeeds or the configured attempts are exhausted.
  *
  * **NOTE:** Retrying re-sends the full query. Only use this for queries that are safe to replay.
  * Re-sending a non-atomic, multi-statement query may apply some statements more than once.
  *
  * @example
  * ```ts
  * await db.insert({ name: 'John Doe' }).retry();
  * ```
  *
  * @param options Retry behavior. Defaults to enabling retry using the connection defaults.
  * @returns A new `InsertPromise` configured to retry on conflict.
  */
  retry(options = true) {
    return new InsertPromise2(this.#connection, {
      ...this.#options,
      retry: options
    });
  }
  /**
  * Configure the query to insert a relation instead of a regular record
  */
  relation() {
    return new InsertPromise2(this.#connection, {
      ...this.#options,
      relation: true
    });
  }
  /**
  * Configure the query to ignore records if they already exist
  */
  ignore() {
    return new InsertPromise2(this.#connection, {
      ...this.#options,
      ignore: true
    });
  }
  /**
  * Configure the output of the query
  */
  output(output) {
    return new InsertPromise2(this.#connection, {
      ...this.#options,
      output
    });
  }
  /**
  * Configure the timeout of the query
  */
  timeout(timeout) {
    return new InsertPromise2(this.#connection, {
      ...this.#options,
      timeout
    });
  }
  /**
  * Configure a custom version of the data being created. This is used
  * alongside version enabled storage engines such as SurrealKV.
  */
  version(version3) {
    return new InsertPromise2(this.#connection, {
      ...this.#options,
      version: version3
    });
  }
  /**
  * Configure the query to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, the query is not sent and fails straight away. If it aborts
  * later, the query stops waiting for the server and fails with the `reason` of the signal, as it
  * is: an `AbortError`, or the `TimeoutError` of `AbortSignal.timeout()`. This holds for awaiting
  * the query as well as for `.stream()`, which ends its iteration with the reason.
  *
  * Aborting means "stop waiting", and nothing more. The server may keep executing the query, and
  * **a write which was sent before the signal aborted may or may not have been applied**.
  *
  * Can be called more than once, and in addition to a signal inherited from `withSignal()`: the
  * query is abandoned when any of them aborts. See {@link Query.signal}.
  *
  * @example
  * ```ts
  * const result = await db.insert(table, data).signal(request.signal);
  * ```
  *
  * @param signal The signal which abandons the query. Without one, nothing changes.
  */
  signal(signal) {
    return new InsertPromise2(this.#connection, {
      ...this.#options,
      signals: addSignal(this.#options.signals, signal)
    });
  }
  /**
  * Configure how long to wait for the server to answer the query, in milliseconds, before giving
  * up on it with a `TimeoutError`. Overrides the `requestTimeout` of the connection for this
  * query, so it can also allow a query longer than that default, or `0` to wait without limit.
  *
  * This is a limit on the client, and not the `TIMEOUT` clause which the server enforces and
  * which is set with `.timeout()`. The server is not told the client has given up, so **a write
  * which timed out may or may not have been applied**. See {@link Query.requestTimeout}.
  *
  * @param milliseconds The time to wait for an answer, or `0` for no limit.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new InsertPromise2(this.#connection, {
      ...this.#options,
      requestTimeout: milliseconds
    });
  }
  /**
  * Compile this qurery into a BoundQuery
  */
  compile() {
    return this.#build().inner;
  }
  /**
  * Stream the records of the query as they arrive.
  *
  * The first are available while the rest are still being produced, and nothing is held but
  * what has arrived and not yet been read. Each is yielded as it is, or as `parse` returns it
  * when one is given. See `Query.rows()` for the details, which apply here: a record is
  * provisional until iteration completes without throwing, and leaving the loop stops the query.
  *
  * @param parse Applied to each record as it arrives. Without one, records are yielded as they are.
  * @returns A single-use async iterable of records, which can also be disposed.
  */
  rows(parse) {
    return this.#build().rows(parse);
  }
  /**
  * Stream the results of the query as they are received.
  *
  * @returns An async iterable of query frames.
  */
  async *stream() {
    const query = this.#build().stream();
    for await (const frame$1 of query) yield frame$1;
  }
  async dispatch() {
    const [result] = await this.#build().collect();
    return result;
  }
  #build() {
    const { table: table3, what, transaction, session, json, output, timeout, version: version3, relation, ignore, retry } = this.#options;
    const query = surql`INSERT`;
    if (relation) query.append(surql` RELATION`);
    if (ignore) query.append(surql` IGNORE`);
    if (table3) query.append(surql` INTO ${table3}`);
    query.append(surql` ${what}`);
    if (output) query.append(surql` RETURN ${_output(output)}`);
    if (version3) query.append(surql` VERSION ${version3}`);
    if (timeout) query.append(surql` TIMEOUT ${_timeout(timeout)}`);
    return new Query(this.#connection, {
      credential: this.#options.credential,
      retry,
      query,
      transaction,
      json,
      session,
      signals: this.#options.signals,
      requestTimeout: this.#options.requestTimeout
    });
  }
};
var ManagedLivePromise = class ManagedLivePromise2 extends DispatchedPromise {
  static {
    __name(this, "ManagedLivePromise");
  }
  #connection;
  #options;
  constructor(connection, options) {
    super();
    this.#connection = connection;
    this.#options = options;
  }
  /**
  * Configure the live subscription to return only patches (diffs)
  * instead of the full resource on each update.
  */
  diff() {
    return new ManagedLivePromise2(this.#connection, {
      ...this.#options,
      fields: [],
      selection: "diff"
    });
  }
  /**
  * Configure the query to only select the specified field(s)
  */
  fields(...fields) {
    return new ManagedLivePromise2(this.#connection, {
      ...this.#options,
      fields,
      selection: "fields"
    });
  }
  /**
  * Configure the query to retrieve the value of the specified field
  */
  value(field) {
    return new ManagedLivePromise2(this.#connection, {
      ...this.#options,
      fields: [field],
      selection: "value"
    });
  }
  /**
  * Configure the query to fetch the record only if the condition is met.
  *
  * Expressions can be imported from the `surrealdb` package and combined
  * to compose the desired condition.
  *
  * @see {@link https://github.com/surrealdb/surrealdb.js/blob/main/packages/sdk/src/utils/expr.ts}
  */
  where(expr$1) {
    return new ManagedLivePromise2(this.#connection, {
      ...this.#options,
      cond: expr$1 ? expr$1 : void 0
    });
  }
  /**
  * Configure the query to fetch record link contents for the specified field(s)
  */
  fetch(...fields) {
    return new ManagedLivePromise2(this.#connection, {
      ...this.#options,
      fetch: fields
    });
  }
  /**
  * Compile this qurery into a BoundQuery
  */
  compile() {
    return this.#build().inner;
  }
  async dispatch() {
    const abort2 = abortScope(this.#options.signals ?? []);
    let subscription;
    try {
      throwIfAborted(abort2.signal);
      await raceAbort(this.#connection.ready(), abort2.signal);
      this.#connection.assertFeature(Features.LiveQueries);
      throwIfAborted(abort2.signal);
      subscription = new ManagedLiveSubscription(this.#connection, this.#options.what, this.#options.session, this.#build(abort2.signal), abort2.signal ? abort2 : void 0);
      await raceAbort(subscription.ready(), abort2.signal);
      return subscription;
    } catch (error3) {
      if (subscription && abort2.signal) await subscription.kill().catch(() => {
      });
      else abort2.dispose();
      throw error3;
    }
  }
  /**
  * @param beforeSend A signal which abandons the registration while it waits to be sent, which
  *                   is while the credential for it is settled, but not once it is on its way: what
  *                   the server registers is then to be killed, and only the answer says what it is.
  */
  #build(beforeSend) {
    const { what, selection, fields, cond, fetch, session } = this.#options;
    const query = surql`LIVE SELECT`;
    if (selection === "fields") query.append(surql` type::fields(${fields})`);
    else if (selection === "value") query.append(surql` VALUE type::field(${fields?.[0]})`);
    else if (selection === "diff") query.append(surql` DIFF`);
    else query.append(surql` *`);
    query.append(surql` FROM ${what}`);
    if (cond) query.append(surql` WHERE ${cond}`);
    if (fetch) query.append(surql` FETCH type::fields(${fetch})`);
    return new Query(this.#connection, {
      query,
      transaction: void 0,
      json: false,
      session,
      beforeSend,
      retry: true
    });
  }
};
var UnmanagedLivePromise = class extends DispatchedPromise {
  static {
    __name(this, "UnmanagedLivePromise");
  }
  #connection;
  #options;
  constructor(connection, options) {
    super();
    this.#connection = connection;
    this.#options = options;
  }
  async dispatch() {
    const abort2 = abortScope(this.#options.signals ?? []);
    try {
      throwIfAborted(abort2.signal);
      await raceAbort(this.#connection.ready(), abort2.signal);
      this.#connection.assertFeature(Features.LiveQueries);
      throwIfAborted(abort2.signal);
      return new UnmanagedLiveSubscription(this.#connection, this.#options.session, this.#options.id, abort2.signal ? abort2 : void 0);
    } catch (error3) {
      abort2.dispose();
      throw error3;
    }
  }
};
var RelatePromise = class RelatePromise2 extends DispatchedPromise {
  static {
    __name(this, "RelatePromise");
  }
  #connection;
  #options;
  constructor(connection, options) {
    super();
    this.#connection = connection;
    this.#options = options;
  }
  /**
  * Configure the query to return the result as a
  * JSON-compatible structure.
  *
  * This is useful when query results need to be serialized. Keep in mind
  * that your responses will lose SurrealDB type information.
  */
  json() {
    return new RelatePromise2(this.#connection, {
      ...this.#options,
      json: true
    });
  }
  /**
  * Run this call as a different identity than the one of the session, for this call only.
  * The session is neither used nor changed. Supported by engines which present credentials
  * with every request, such as HTTP, and rejected with an `UnsupportedFeatureError` by
  * the others.
  *
  * @see {@link Query.as} for details.
  *
  * @param credential An access token or authentication details to run this call as
  * @returns A new `RelatePromise` which runs as the provided identity.
  */
  as(credential) {
    assertCredential(credential);
    return new RelatePromise2(this.#connection, {
      ...this.#options,
      credential
    });
  }
  /**
  * Configure the query to automatically retry when it fails due to a transaction conflict.
  *
  * Under concurrent load a query may fail because another transaction wrote to the same data.
  * When retry is enabled, the entire query is re-sent with exponential backoff until it
  * succeeds or the configured attempts are exhausted.
  *
  * **NOTE:** Retrying re-sends the full query. Only use this for queries that are safe to replay.
  * Re-sending a non-atomic, multi-statement query may apply some statements more than once.
  *
  * @example
  * ```ts
  * await db.relate(from, 'likes', to).retry();
  * ```
  *
  * @param options Retry behavior. Defaults to enabling retry using the connection defaults.
  * @returns A new `RelatePromise` configured to retry on conflict.
  */
  retry(options = true) {
    return new RelatePromise2(this.#connection, {
      ...this.#options,
      retry: options
    });
  }
  /**
  * Configure the query to enforce a unique relationship
  */
  unique() {
    return new RelatePromise2(this.#connection, {
      ...this.#options,
      unique: true
    });
  }
  /**
  * Configure the output of the query
  */
  output(output) {
    return new RelatePromise2(this.#connection, {
      ...this.#options,
      output
    });
  }
  /**
  * Configure the timeout of the query
  */
  timeout(timeout) {
    return new RelatePromise2(this.#connection, {
      ...this.#options,
      timeout
    });
  }
  /**
  * Configure a custom version of the data being created.
  *
  * @deprecated SurrealDB has no `VERSION` clause for `RELATE` statements, so
  * a query using this method fails with an `ExpressionError` when it is
  * compiled or executed, before anything is sent to the server.
  */
  version(version3) {
    return new RelatePromise2(this.#connection, {
      ...this.#options,
      version: version3
    });
  }
  /**
  * Configure the query to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, the query is not sent and fails straight away. If it aborts
  * later, the query stops waiting for the server and fails with the `reason` of the signal, as it
  * is: an `AbortError`, or the `TimeoutError` of `AbortSignal.timeout()`. This holds for awaiting
  * the query as well as for `.stream()`, which ends its iteration with the reason.
  *
  * Aborting means "stop waiting", and nothing more. The server may keep executing the query, and
  * **a write which was sent before the signal aborted may or may not have been applied**.
  *
  * Can be called more than once, and in addition to a signal inherited from `withSignal()`: the
  * query is abandoned when any of them aborts. See {@link Query.signal}.
  *
  * @example
  * ```ts
  * const result = await db.relate(from, edge, to).signal(request.signal);
  * ```
  *
  * @param signal The signal which abandons the query. Without one, nothing changes.
  */
  signal(signal) {
    return new RelatePromise2(this.#connection, {
      ...this.#options,
      signals: addSignal(this.#options.signals, signal)
    });
  }
  /**
  * Configure how long to wait for the server to answer the query, in milliseconds, before giving
  * up on it with a `TimeoutError`. Overrides the `requestTimeout` of the connection for this
  * query, so it can also allow a query longer than that default, or `0` to wait without limit.
  *
  * This is a limit on the client, and not the `TIMEOUT` clause which the server enforces and
  * which is set with `.timeout()`. The server is not told the client has given up, so **a write
  * which timed out may or may not have been applied**. See {@link Query.requestTimeout}.
  *
  * @param milliseconds The time to wait for an answer, or `0` for no limit.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new RelatePromise2(this.#connection, {
      ...this.#options,
      requestTimeout: milliseconds
    });
  }
  /**
  * Compile this qurery into a BoundQuery
  */
  compile() {
    return this.#build().inner;
  }
  /**
  * Stream the records of the query as they arrive.
  *
  * The first are available while the rest are still being produced, and nothing is held but
  * what has arrived and not yet been read. Each is yielded as it is, or as `parse` returns it
  * when one is given. See `Query.rows()` for the details, which apply here: a record is
  * provisional until iteration completes without throwing, and leaving the loop stops the query.
  *
  * @param parse Applied to each record as it arrives. Without one, records are yielded as they are.
  * @returns A single-use async iterable of records, which can also be disposed.
  */
  rows(parse) {
    return this.#build().rows(parse);
  }
  /**
  * Stream the results of the query as they are received.
  *
  * @returns An async iterable of query frames.
  */
  async *stream() {
    const query = this.#build().stream();
    for await (const frame$1 of query) yield frame$1;
  }
  async dispatch() {
    const [result] = await this.#build().collect();
    return result;
  }
  #build() {
    const { from, what, to, data, transaction, session, json, output, timeout, version: version3, retry } = this.#options;
    if (version3) throw new ExpressionError("The VERSION clause is not supported by RELATE statements");
    const isMultiple = Array.isArray(from) || Array.isArray(to);
    if (isMultiple && what instanceof _RecordId) throw new SurrealError("Edge must be a table when creating multiple edges");
    const query = surql`RELATE `;
    if (!isMultiple) query.append(surql` ONLY`);
    query.append(surql` ${from}->${what}->${to}`);
    if (data) query.append(surql` CONTENT ${data}`);
    if (output) query.append(surql` RETURN ${_output(output)}`);
    if (timeout) query.append(surql` TIMEOUT ${_timeout(timeout)}`);
    return new Query(this.#connection, {
      credential: this.#options.credential,
      retry,
      query,
      transaction,
      json,
      session,
      signals: this.#options.signals,
      requestTimeout: this.#options.requestTimeout
    });
  }
};
var NAME_REGEX = /^[a-zA-Z0-9_:]+$/;
var VERSION_REGEX = /^[0-9.]+$/;
var RunPromise = class RunPromise2 extends DispatchedPromise {
  static {
    __name(this, "RunPromise");
  }
  #connection;
  #options;
  constructor(connection, options) {
    super();
    this.#connection = connection;
    this.#options = options;
  }
  /**
  * Configure the query to return the result as a
  * JSON-compatible structure.
  *
  * This is useful when query results need to be serialized. Keep in mind
  * that your responses will lose SurrealDB type information.
  */
  json() {
    return new RunPromise2(this.#connection, {
      ...this.#options,
      json: true
    });
  }
  /**
  * Run this call as a different identity than the one of the session, for this call only.
  * The session is neither used nor changed. Supported by engines which present credentials
  * with every request, such as HTTP, and rejected with an `UnsupportedFeatureError` by
  * the others.
  *
  * @see {@link Query.as} for details.
  *
  * @param credential An access token or authentication details to run this call as
  * @returns A new `RunPromise` which runs as the provided identity.
  */
  as(credential) {
    assertCredential(credential);
    return new RunPromise2(this.#connection, {
      ...this.#options,
      credential
    });
  }
  /**
  * Configure the query to automatically retry when it fails due to a transaction conflict.
  *
  * Under concurrent load a query may fail because another transaction wrote to the same data.
  * When retry is enabled, the entire query is re-sent with exponential backoff until it
  * succeeds or the configured attempts are exhausted.
  *
  * **NOTE:** Retrying re-sends the full query. Only use this for queries that are safe to replay.
  * Re-sending a non-atomic, multi-statement query may apply some statements more than once.
  *
  * @example
  * ```ts
  * const result = await db.run('my::function', [arg]).retry();
  * ```
  *
  * @param options Retry behavior. Defaults to enabling retry using the connection defaults.
  * @returns A new `RunPromise` configured to retry on conflict.
  */
  retry(options = true) {
    return new RunPromise2(this.#connection, {
      ...this.#options,
      retry: options
    });
  }
  /**
  * Configure the query to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, the query is not sent and fails straight away. If it aborts
  * later, the query stops waiting for the server and fails with the `reason` of the signal, as it
  * is: an `AbortError`, or the `TimeoutError` of `AbortSignal.timeout()`. This holds for awaiting
  * the query as well as for `.stream()`, which ends its iteration with the reason.
  *
  * Aborting means "stop waiting", and nothing more. The server may keep executing the query, and
  * **a write which was sent before the signal aborted may or may not have been applied**.
  *
  * Can be called more than once, and in addition to a signal inherited from `withSignal()`: the
  * query is abandoned when any of them aborts. See {@link Query.signal}.
  *
  * @example
  * ```ts
  * const result = await db.run("fn::report").signal(request.signal);
  * ```
  *
  * @param signal The signal which abandons the query. Without one, nothing changes.
  */
  signal(signal) {
    return new RunPromise2(this.#connection, {
      ...this.#options,
      signals: addSignal(this.#options.signals, signal)
    });
  }
  /**
  * Configure how long to wait for the server to answer the query, in milliseconds, before giving
  * up on it with a `TimeoutError`. Overrides the `requestTimeout` of the connection for this
  * query, so it can also allow a query longer than that default, or `0` to wait without limit.
  *
  * This is a limit on the client, and not the `TIMEOUT` clause which the server enforces and
  * which is set with `.timeout()`. The server is not told the client has given up, so **a write
  * which timed out may or may not have been applied**. See {@link Query.requestTimeout}.
  *
  * @param milliseconds The time to wait for an answer, or `0` for no limit.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new RunPromise2(this.#connection, {
      ...this.#options,
      requestTimeout: milliseconds
    });
  }
  /**
  * Check the arguments against a [Standard Schema](https://standardschema.dev) (Zod, Valibot,
  * ArkType and others) before the call is sent. The schema validates the array of arguments, so
  * use a tuple schema. When it fails, the call is not sent and rejects with a
  * `SchemaValidationError` listing every issue. What the schema produces is what is sent, so
  * a schema which transforms or coerces changes the arguments.
  *
  * Applies when the promise is awaited, and not to `.compile()` or `.stream()`.
  *
  * @example
  * ```ts
  * const sum = await db.run<number>("fn::add", [1, 2]).args(z.tuple([z.number(), z.number()]));
  * ```
  *
  * @param schema The schema the array of arguments must satisfy.
  */
  args(schema) {
    return new RunPromise2(this.#connection, {
      ...this.#options,
      argsSchema: schema
    });
  }
  /**
  * Check the result against a [Standard Schema](https://standardschema.dev) and type the
  * promise as what the schema produces. When the result does not match, the promise rejects
  * with a `SchemaValidationError`. With `.json()` the schema sees the JSON-compatible result.
  *
  * @example
  * ```ts
  * const sum = await db.run("fn::add", [1, 2]).returns(z.number()); // number
  * ```
  *
  * @param schema The schema the result must satisfy.
  */
  returns(schema) {
    return new RunPromise2(this.#connection, {
      ...this.#options,
      resultSchema: schema
    });
  }
  /**
  * Compile this qurery into a BoundQuery
  */
  compile() {
    return this.#build().inner;
  }
  /**
  * Stream the results of the query as they are received.
  *
  * @returns An async iterable of query frames.
  */
  async *stream() {
    const query = this.#build().stream();
    for await (const frame$1 of query) yield frame$1;
  }
  async dispatch() {
    const { name, argsSchema, resultSchema } = this.#options;
    let options = this.#options;
    if (argsSchema) {
      const args = await validateWith(argsSchema, options.args, `arguments for ${name}`);
      options = {
        ...options,
        args
      };
    }
    const [result] = await this.#build(options).collect();
    return resultSchema ? await validateWith(resultSchema, result, `result of ${name}`) : result;
  }
  #build(options = this.#options) {
    const { name, version: version3, args, transaction, session, json, retry } = options;
    if (!NAME_REGEX.test(name)) throw new ExpressionError("Invalid function name");
    const query = new BoundQuery(name);
    if (version3) {
      if (!VERSION_REGEX.test(version3)) throw new ExpressionError("Invalid function version");
      query.append(`<${version3}>`);
    }
    query.append("(");
    for (const arg of args) query.append(surql`${arg}, `);
    query.append(")");
    return new Query(this.#connection, {
      credential: this.#options.credential,
      retry,
      query,
      transaction,
      json,
      session,
      signals: this.#options.signals,
      requestTimeout: this.#options.requestTimeout
    });
  }
};
var SelectPromise = class SelectPromise2 extends DispatchedPromise {
  static {
    __name(this, "SelectPromise");
  }
  #connection;
  #options;
  constructor(connection, options) {
    super();
    this.#connection = connection;
    this.#options = options;
  }
  /**
  * Configure the query to return the result as a
  * JSON-compatible structure.
  *
  * This is useful when query results need to be serialized. Keep in mind
  * that your responses will lose SurrealDB type information.
  */
  json() {
    return new SelectPromise2(this.#connection, {
      ...this.#options,
      json: true
    });
  }
  /**
  * Run this call as a different identity than the one of the session, for this call only.
  * The session is neither used nor changed. Supported by engines which present credentials
  * with every request, such as HTTP, and rejected with an `UnsupportedFeatureError` by
  * the others.
  *
  * @see {@link Query.as} for details.
  *
  * @param credential An access token or authentication details to run this call as
  * @returns A new `SelectPromise` which runs as the provided identity.
  */
  as(credential) {
    assertCredential(credential);
    return new SelectPromise2(this.#connection, {
      ...this.#options,
      credential
    });
  }
  /**
  * Configure the query to only select the specified field(s)
  */
  fields(...fields) {
    return new SelectPromise2(this.#connection, {
      ...this.#options,
      fields,
      selection: "fields"
    });
  }
  /**
  * Configure the query to retrieve the value of the specified field
  */
  value(field) {
    return new SelectPromise2(this.#connection, {
      ...this.#options,
      fields: [field],
      selection: "value"
    });
  }
  /**
  * Configure the query to start at the specified index
  */
  start(start) {
    return new SelectPromise2(this.#connection, {
      ...this.#options,
      start
    });
  }
  /**
  * Configure the query to limit the number of results
  */
  limit(limit) {
    return new SelectPromise2(this.#connection, {
      ...this.#options,
      limit
    });
  }
  /**
  * Configure the query to fetch only records that match the condition.
  *
  * Expressions can be imported from the `surrealdb` package and combined
  * to compose the desired condition.
  *
  * @see {@link https://github.com/surrealdb/surrealdb.js/blob/main/packages/sdk/src/utils/expr.ts}
  */
  where(expr$1) {
    return new SelectPromise2(this.#connection, {
      ...this.#options,
      cond: expr$1 ? expr$1 : void 0
    });
  }
  /**
  * Configure the query to fetch record link contents for the specified field(s)
  */
  fetch(...fields) {
    return new SelectPromise2(this.#connection, {
      ...this.#options,
      fetch: fields
    });
  }
  /**
  * Configure the timeout of the query
  */
  timeout(timeout) {
    return new SelectPromise2(this.#connection, {
      ...this.#options,
      timeout
    });
  }
  /**
  * Configure a custom version of the data being created. This is used
  * alongside version enabled storage engines such as SurrealKV.
  */
  version(version3) {
    return new SelectPromise2(this.#connection, {
      ...this.#options,
      version: version3
    });
  }
  /**
  * Configure the query to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, the query is not sent and fails straight away. If it aborts
  * later, the query stops waiting for the server and fails with the `reason` of the signal, as it
  * is: an `AbortError`, or the `TimeoutError` of `AbortSignal.timeout()`. This holds for awaiting
  * the query as well as for `.stream()`, which ends its iteration with the reason.
  *
  * Aborting means "stop waiting", and nothing more. The server may keep executing the query, and
  * **a write which was sent before the signal aborted may or may not have been applied**.
  *
  * Can be called more than once, and in addition to a signal inherited from `withSignal()`: the
  * query is abandoned when any of them aborts. See {@link Query.signal}.
  *
  * @example
  * ```ts
  * const result = await db.select(table).signal(request.signal);
  * ```
  *
  * @param signal The signal which abandons the query. Without one, nothing changes.
  */
  signal(signal) {
    return new SelectPromise2(this.#connection, {
      ...this.#options,
      signals: addSignal(this.#options.signals, signal)
    });
  }
  /**
  * Configure how long to wait for the server to answer the query, in milliseconds, before giving
  * up on it with a `TimeoutError`. Overrides the `requestTimeout` of the connection for this
  * query, so it can also allow a query longer than that default, or `0` to wait without limit.
  *
  * This is a limit on the client, and not the `TIMEOUT` clause which the server enforces and
  * which is set with `.timeout()`. The server is not told the client has given up, so **a write
  * which timed out may or may not have been applied**. See {@link Query.requestTimeout}.
  *
  * @param milliseconds The time to wait for an answer, or `0` for no limit.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new SelectPromise2(this.#connection, {
      ...this.#options,
      requestTimeout: milliseconds
    });
  }
  /**
  * Compile this qurery into a BoundQuery
  */
  compile() {
    return this.#build().inner;
  }
  /**
  * Stream the records of the query as they arrive.
  *
  * The first are available while the rest are still being produced, and nothing is held but
  * what has arrived and not yet been read. Each is yielded as it is, or as `parse` returns it
  * when one is given. See `Query.rows()` for the details, which apply here: a record is
  * provisional until iteration completes without throwing, and leaving the loop stops the query.
  *
  * @param parse Applied to each record as it arrives. Without one, records are yielded as they are.
  * @returns A single-use async iterable of records, which can also be disposed.
  */
  rows(parse) {
    return this.#build().rows(parse);
  }
  /**
  * Stream the results of the query as they are received.
  *
  * @returns An async iterable of query frames.
  */
  async *stream() {
    const query = this.#build().stream();
    for await (const frame$1 of query) yield frame$1;
  }
  async dispatch() {
    const [result] = await this.#build().collect();
    return result;
  }
  #build() {
    const { what, transaction, session, json, selection, fields, start, limit, cond, timeout, version: version3, fetch } = this.#options;
    const query = surql`SELECT`;
    if (selection === "fields") query.append(surql` type::fields(${fields})`);
    else if (selection === "value") query.append(surql` VALUE type::field(${fields?.[0]})`);
    else query.append(surql` *`);
    query.append(surql` FROM ${_only(what)}`);
    if (cond) query.append(surql` WHERE ${cond}`);
    if (start) query.append(surql` START ${start}`);
    if (limit) query.append(surql` LIMIT ${limit}`);
    if (fetch) query.append(surql` FETCH type::fields(${fetch})`);
    if (version3) query.append(surql` VERSION ${version3}`);
    if (timeout) query.append(surql` TIMEOUT ${_timeout(timeout)}`);
    return new Query(this.#connection, {
      credential: this.#options.credential,
      query,
      transaction,
      json,
      session,
      signals: this.#options.signals,
      requestTimeout: this.#options.requestTimeout
    });
  }
};
var UpdatePromise = class UpdatePromise2 extends DispatchedPromise {
  static {
    __name(this, "UpdatePromise");
  }
  #connection;
  #options;
  constructor(connection, options) {
    super();
    this.#connection = connection;
    this.#options = options;
  }
  /**
  * Configure the query to return the result as a
  * JSON-compatible structure.
  *
  * This is useful when query results need to be serialized. Keep in mind
  * that your responses will lose SurrealDB type information.
  */
  json() {
    return new UpdatePromise2(this.#connection, {
      ...this.#options,
      json: true
    });
  }
  /**
  * Run this call as a different identity than the one of the session, for this call only.
  * The session is neither used nor changed. Supported by engines which present credentials
  * with every request, such as HTTP, and rejected with an `UnsupportedFeatureError` by
  * the others.
  *
  * @see {@link Query.as} for details.
  *
  * @param credential An access token or authentication details to run this call as
  * @returns A new `UpdatePromise` which runs as the provided identity.
  */
  as(credential) {
    assertCredential(credential);
    return new UpdatePromise2(this.#connection, {
      ...this.#options,
      credential
    });
  }
  /**
  * Configure the query to automatically retry when it fails due to a transaction conflict.
  *
  * Under concurrent load a query may fail because another transaction wrote to the same data.
  * When retry is enabled, the entire query is re-sent with exponential backoff until it
  * succeeds or the configured attempts are exhausted.
  *
  * **NOTE:** Retrying re-sends the full query. Only use this for queries that are safe to replay.
  * Re-sending a non-atomic, multi-statement query may apply some statements more than once.
  *
  * @example
  * ```ts
  * const user = await db.update(new RecordId('users', 'john'))
  *     .content({ name: 'John Doe' })
  *     .retry();
  * ```
  *
  * @param options Retry behavior. Defaults to enabling retry using the connection defaults.
  * @returns A new `UpdatePromise` configured to retry on conflict.
  */
  retry(options = true) {
    return new UpdatePromise2(this.#connection, {
      ...this.#options,
      retry: options
    });
  }
  /**
  * Configure the query to set the record data
  */
  content(data) {
    return new UpdatePromise2(this.#connection, {
      ...this.#options,
      mutation: "content",
      data
    });
  }
  /**
  * Configure the query to merge the record data
  */
  merge(data) {
    return new UpdatePromise2(this.#connection, {
      ...this.#options,
      mutation: "merge",
      data
    });
  }
  /**
  * Configure the query to replace the record data
  */
  replace(data) {
    return new UpdatePromise2(this.#connection, {
      ...this.#options,
      mutation: "replace",
      data
    });
  }
  /**
  * Configure the query to patch the record data
  */
  patch(data) {
    return new UpdatePromise2(this.#connection, {
      ...this.#options,
      mutation: "patch",
      data
    });
  }
  /**
  * Configure the query to update the record only if the condition is met.
  *
  * Expressions can be imported from the `surrealdb` package and combined
  * to compose the desired condition.
  *
  * @see {@link https://github.com/surrealdb/surrealdb.js/blob/main/packages/sdk/src/utils/expr.ts}
  */
  where(expr$1) {
    return new UpdatePromise2(this.#connection, {
      ...this.#options,
      cond: expr$1 ? expr$1 : void 0
    });
  }
  /**
  * Configure the output of the query
  */
  output(output) {
    return new UpdatePromise2(this.#connection, {
      ...this.#options,
      output
    });
  }
  /**
  * Configure the timeout of the query
  */
  timeout(timeout) {
    return new UpdatePromise2(this.#connection, {
      ...this.#options,
      timeout
    });
  }
  /**
  * Configure the query to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, the query is not sent and fails straight away. If it aborts
  * later, the query stops waiting for the server and fails with the `reason` of the signal, as it
  * is: an `AbortError`, or the `TimeoutError` of `AbortSignal.timeout()`. This holds for awaiting
  * the query as well as for `.stream()`, which ends its iteration with the reason.
  *
  * Aborting means "stop waiting", and nothing more. The server may keep executing the query, and
  * **a write which was sent before the signal aborted may or may not have been applied**.
  *
  * Can be called more than once, and in addition to a signal inherited from `withSignal()`: the
  * query is abandoned when any of them aborts. See {@link Query.signal}.
  *
  * @example
  * ```ts
  * const result = await db.update(id).merge(data).signal(request.signal);
  * ```
  *
  * @param signal The signal which abandons the query. Without one, nothing changes.
  */
  signal(signal) {
    return new UpdatePromise2(this.#connection, {
      ...this.#options,
      signals: addSignal(this.#options.signals, signal)
    });
  }
  /**
  * Configure how long to wait for the server to answer the query, in milliseconds, before giving
  * up on it with a `TimeoutError`. Overrides the `requestTimeout` of the connection for this
  * query, so it can also allow a query longer than that default, or `0` to wait without limit.
  *
  * This is a limit on the client, and not the `TIMEOUT` clause which the server enforces and
  * which is set with `.timeout()`. The server is not told the client has given up, so **a write
  * which timed out may or may not have been applied**. See {@link Query.requestTimeout}.
  *
  * @param milliseconds The time to wait for an answer, or `0` for no limit.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new UpdatePromise2(this.#connection, {
      ...this.#options,
      requestTimeout: milliseconds
    });
  }
  /**
  * Compile this qurery into a BoundQuery
  */
  compile() {
    return this.#build().inner;
  }
  /**
  * Stream the records of the query as they arrive.
  *
  * The first are available while the rest are still being produced, and nothing is held but
  * what has arrived and not yet been read. Each is yielded as it is, or as `parse` returns it
  * when one is given. See `Query.rows()` for the details, which apply here: a record is
  * provisional until iteration completes without throwing, and leaving the loop stops the query.
  *
  * @param parse Applied to each record as it arrives. Without one, records are yielded as they are.
  * @returns A single-use async iterable of records, which can also be disposed.
  */
  rows(parse) {
    return this.#build().rows(parse);
  }
  /**
  * Stream the results of the query as they are received.
  *
  * @returns An async iterable of query frames.
  */
  async *stream() {
    const query = this.#build().stream();
    for await (const frame$1 of query) yield frame$1;
  }
  async dispatch() {
    const [result] = await this.#build().collect();
    return result;
  }
  #build() {
    const { what, data, transaction, session, json, cond, output, timeout, mutation, retry } = this.#options;
    const query = surql`UPDATE ${_only(what)}`;
    if (mutation && data) query.append(surql` ${raw2(mutation.toUpperCase())} ${data}`);
    if (cond) query.append(surql` WHERE ${cond}`);
    if (output) query.append(surql` RETURN ${_output(output)}`);
    if (timeout) query.append(surql` TIMEOUT ${_timeout(timeout)}`);
    return new Query(this.#connection, {
      credential: this.#options.credential,
      retry,
      query,
      transaction,
      json,
      session,
      signals: this.#options.signals,
      requestTimeout: this.#options.requestTimeout
    });
  }
};
var UpsertPromise = class UpsertPromise2 extends DispatchedPromise {
  static {
    __name(this, "UpsertPromise");
  }
  #connection;
  #options;
  constructor(connection, options) {
    super();
    this.#connection = connection;
    this.#options = options;
  }
  /**
  * Configure the query to return the result as a
  * JSON-compatible structure.
  *
  * This is useful when query results need to be serialized. Keep in mind
  * that your responses will lose SurrealDB type information.
  */
  json() {
    return new UpsertPromise2(this.#connection, {
      ...this.#options,
      json: true
    });
  }
  /**
  * Run this call as a different identity than the one of the session, for this call only.
  * The session is neither used nor changed. Supported by engines which present credentials
  * with every request, such as HTTP, and rejected with an `UnsupportedFeatureError` by
  * the others.
  *
  * @see {@link Query.as} for details.
  *
  * @param credential An access token or authentication details to run this call as
  * @returns A new `UpsertPromise` which runs as the provided identity.
  */
  as(credential) {
    assertCredential(credential);
    return new UpsertPromise2(this.#connection, {
      ...this.#options,
      credential
    });
  }
  /**
  * Configure the query to automatically retry when it fails due to a transaction conflict.
  *
  * Under concurrent load a query may fail because another transaction wrote to the same data.
  * When retry is enabled, the entire query is re-sent with exponential backoff until it
  * succeeds or the configured attempts are exhausted.
  *
  * **NOTE:** Retrying re-sends the full query. Only use this for queries that are safe to replay.
  * Re-sending a non-atomic, multi-statement query may apply some statements more than once.
  *
  * @example
  * ```ts
  * const user = await db.upsert(new RecordId('users', 'john'))
  *     .content({ name: 'John Doe' })
  *     .retry();
  * ```
  *
  * @param options Retry behavior. Defaults to enabling retry using the connection defaults.
  * @returns A new `UpsertPromise` configured to retry on conflict.
  */
  retry(options = true) {
    return new UpsertPromise2(this.#connection, {
      ...this.#options,
      retry: options
    });
  }
  /**
  * Configure the query to set the record data
  */
  content(data) {
    return new UpsertPromise2(this.#connection, {
      ...this.#options,
      mutation: "content",
      data
    });
  }
  /**
  * Configure the query to merge the record data
  */
  merge(data) {
    return new UpsertPromise2(this.#connection, {
      ...this.#options,
      mutation: "merge",
      data
    });
  }
  /**
  * Configure the query to replace the record data
  */
  replace(data) {
    return new UpsertPromise2(this.#connection, {
      ...this.#options,
      mutation: "replace",
      data
    });
  }
  /**
  * Configure the query to patch the record data
  */
  patch(data) {
    return new UpsertPromise2(this.#connection, {
      ...this.#options,
      mutation: "patch",
      data
    });
  }
  /**
  * Configure the query to upsert the record only if the condition is met.
  *
  * Expressions can be imported from the `surrealdb` package and combined
  * to compose the desired condition.
  *
  * @see {@link https://github.com/surrealdb/surrealdb.js/blob/main/packages/sdk/src/utils/expr.ts}
  */
  where(expr$1) {
    return new UpsertPromise2(this.#connection, {
      ...this.#options,
      cond: expr$1 ? expr$1 : void 0
    });
  }
  /**
  * Configure the output of the query
  */
  output(output) {
    return new UpsertPromise2(this.#connection, {
      ...this.#options,
      output
    });
  }
  /**
  * Configure the timeout of the query
  */
  timeout(timeout) {
    return new UpsertPromise2(this.#connection, {
      ...this.#options,
      timeout
    });
  }
  /**
  * Configure the query to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, the query is not sent and fails straight away. If it aborts
  * later, the query stops waiting for the server and fails with the `reason` of the signal, as it
  * is: an `AbortError`, or the `TimeoutError` of `AbortSignal.timeout()`. This holds for awaiting
  * the query as well as for `.stream()`, which ends its iteration with the reason.
  *
  * Aborting means "stop waiting", and nothing more. The server may keep executing the query, and
  * **a write which was sent before the signal aborted may or may not have been applied**.
  *
  * Can be called more than once, and in addition to a signal inherited from `withSignal()`: the
  * query is abandoned when any of them aborts. See {@link Query.signal}.
  *
  * @example
  * ```ts
  * const result = await db.upsert(id).content(data).signal(request.signal);
  * ```
  *
  * @param signal The signal which abandons the query. Without one, nothing changes.
  */
  signal(signal) {
    return new UpsertPromise2(this.#connection, {
      ...this.#options,
      signals: addSignal(this.#options.signals, signal)
    });
  }
  /**
  * Configure how long to wait for the server to answer the query, in milliseconds, before giving
  * up on it with a `TimeoutError`. Overrides the `requestTimeout` of the connection for this
  * query, so it can also allow a query longer than that default, or `0` to wait without limit.
  *
  * This is a limit on the client, and not the `TIMEOUT` clause which the server enforces and
  * which is set with `.timeout()`. The server is not told the client has given up, so **a write
  * which timed out may or may not have been applied**. See {@link Query.requestTimeout}.
  *
  * @param milliseconds The time to wait for an answer, or `0` for no limit.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new UpsertPromise2(this.#connection, {
      ...this.#options,
      requestTimeout: milliseconds
    });
  }
  /**
  * Compile this qurery into a BoundQuery
  */
  compile() {
    return this.#build().inner;
  }
  /**
  * Stream the records of the query as they arrive.
  *
  * The first are available while the rest are still being produced, and nothing is held but
  * what has arrived and not yet been read. Each is yielded as it is, or as `parse` returns it
  * when one is given. See `Query.rows()` for the details, which apply here: a record is
  * provisional until iteration completes without throwing, and leaving the loop stops the query.
  *
  * @param parse Applied to each record as it arrives. Without one, records are yielded as they are.
  * @returns A single-use async iterable of records, which can also be disposed.
  */
  rows(parse) {
    return this.#build().rows(parse);
  }
  /**
  * Stream the results of the query as they are received.
  *
  * @returns An async iterable of query frames.
  */
  async *stream() {
    const query = this.#build().stream();
    for await (const frame$1 of query) yield frame$1;
  }
  async dispatch() {
    const [result] = await this.#build().collect();
    return result;
  }
  #build() {
    const { what, data, transaction, session, json, cond, output, timeout, mutation, retry } = this.#options;
    const query = surql`UPSERT ${_only(what)}`;
    if (mutation && data) query.append(surql` ${raw2(mutation.toUpperCase())} ${data}`);
    if (cond) query.append(surql` WHERE ${cond}`);
    if (output) query.append(surql` RETURN ${_output(output)}`);
    if (timeout) query.append(surql` TIMEOUT ${_timeout(timeout)}`);
    return new Query(this.#connection, {
      credential: this.#options.credential,
      retry,
      query,
      transaction,
      json,
      session,
      signals: this.#options.signals,
      requestTimeout: this.#options.requestTimeout
    });
  }
};
function newKill(id$1) {
  return new BoundQuery(`KILL u"${id$1.toString()}"`);
}
__name(newKill, "newKill");
function killLive(controller, session, id$1) {
  return new Query(controller, {
    query: newKill(id$1),
    transaction: void 0,
    session,
    json: false,
    retry: true
  });
}
__name(killLive, "killLive");
function isConnectionGone(error3) {
  return error3 instanceof ConnectionUnavailableError || error3 instanceof CallTerminatedError;
}
__name(isConnectionGone, "isConnectionGone");
function watchAbort(abort2, onAbort) {
  const signal = abort2?.signal;
  if (!abort2 || !signal) return void 0;
  signal.addEventListener("abort", onAbort, { once: true });
  return { unwatch: /* @__PURE__ */ __name(() => {
    signal.removeEventListener("abort", onAbort);
    abort2.dispose();
  }, "unwatch") };
}
__name(watchAbort, "watchAbort");
var LiveSubscription = class {
  static {
    __name(this, "LiveSubscription");
  }
  /**
  * Subscribe to the live subscription and return an unsubscribe function
  */
  subscribe(handler) {
    let killed = false;
    (async () => {
      for await (const message of this) {
        if (killed) return;
        handler(message);
      }
    })();
    return () => {
      killed = true;
    };
  }
};
var ManagedLiveSubscription = class extends LiveSubscription {
  static {
    __name(this, "ManagedLiveSubscription");
  }
  #currentId;
  #controller;
  #resource;
  #session;
  #query;
  #killed = false;
  #serverKilled = false;
  #channels = /* @__PURE__ */ new Set();
  #unsubscribe;
  #unwatch = /* @__PURE__ */ __name(() => {
  }, "#unwatch");
  #killing;
  #stream;
  #ready = Promise.resolve();
  /**
  * @param abort When given, the subscription is killed once its signal aborts, and the scope is
  *              let go of when the subscription ends.
  */
  constructor(controller, resource, session, query, abort2) {
    super();
    this.#controller = controller;
    this.#resource = resource;
    this.#session = session;
    this.#query = query;
    this.#unwatch = watchAbort(abort2, () => void this.#abandon())?.unwatch ?? this.#unwatch;
    this.#unsubscribe = this.#controller.subscribe("connected", () => {
      this.#listen().catch(() => {
      });
    });
    if (this.#controller.status === "connected") {
      this.#ready = this.#listen();
      this.#ready.catch(() => {
      });
    }
  }
  /**
  * Resolves once the live query has been registered on the server and this
  * client is subscribed to its notification stream. Callers can await this
  * before issuing writes to guarantee no notification is missed.
  */
  ready() {
    return this.#ready;
  }
  get id() {
    return this.#currentId;
  }
  get isManaged() {
    return true;
  }
  get resource() {
    return this.#resource;
  }
  get isAlive() {
    return !this.#killed && !this.#serverKilled && this.#controller.hasSession(this.#session);
  }
  /**
  * Kill the live subscription. Killing it again, or after its signal aborted, is a no-op which
  * waits for the first kill, so that a `finally` block can kill it whatever came first.
  */
  kill() {
    this.#killing ??= this.#kill();
    return this.#killing;
  }
  async #kill() {
    this.#killed = true;
    this.#unwatch();
    for (const channel2 of this.#channels) channel2.cancel();
    this.#unsubscribe();
    this.#release(this.#stream);
    if (this.id) await killLive(this.#controller, this.#session, this.id);
  }
  [Symbol.asyncIterator]() {
    if (this.#killed) throw new LiveSubscriptionError("Subscription has been killed");
    const channel2 = new ChannelIterator(() => {
      this.#channels.delete(channel2);
    });
    this.#channels.add(channel2);
    return channel2;
  }
  /**
  * The signal of the subscription aborted: end it like a kill does, and tell the server.
  *
  * Aborting is the normal end of a live stream, so iteration ends cleanly rather than throwing,
  * and `isAlive` turns false at once. A failure to kill is reported on the error channel, unless it
  * is only that the connection is gone, which takes the live query with it.
  */
  async #abandon() {
    try {
      await this.kill();
    } catch (err) {
      if (!isConnectionGone(err)) this.#controller.propagateError(new LiveSubscriptionError(err));
    }
  }
  async #killRegistered(id$1) {
    try {
      await killLive(this.#controller, this.#session, id$1);
    } catch (err) {
      if (!isConnectionGone(err)) this.#controller.propagateError(new LiveSubscriptionError(err));
    }
  }
  async #listen() {
    let messageStream;
    try {
      const [id$1] = await this.#query.collect();
      this.#currentId = id$1;
      if (this.#killed) {
        await this.#killRegistered(id$1);
        return;
      }
      messageStream = this.#controller.liveQuery(id$1);
      this.#stream = messageStream[Symbol.asyncIterator]();
    } catch (err) {
      const error3 = new LiveSubscriptionError(err);
      if (!this.#killed) this.#controller.propagateError(error3);
      throw error3;
    }
    this.#consume(this.#stream);
  }
  /**
  * Stop reading the notifications of a live query which has ended, which releases the engine's
  * hold on them. A server which does not announce the end of a killed live query would otherwise
  * leave it held for as long as the connection lasts.
  */
  #release(stream) {
    stream?.return?.()?.catch(() => {
    });
  }
  async #consume(stream) {
    try {
      for await (const message of { [Symbol.asyncIterator]: () => stream }) {
        for (const channel2 of this.#channels) channel2.submit(message);
        if (message.action === "KILLED") {
          this.#serverKilled = true;
          this.#unwatch();
          this.#unsubscribe();
          for (const channel2 of this.#channels) channel2.cancel();
          return;
        }
      }
    } catch (err) {
      this.#controller.propagateError(new LiveSubscriptionError(err));
    }
  }
};
var UnmanagedLiveSubscription = class extends LiveSubscription {
  static {
    __name(this, "UnmanagedLiveSubscription");
  }
  #id;
  #controller;
  #session;
  #killed = false;
  #serverKilled = false;
  #unwatch = /* @__PURE__ */ __name(() => {
  }, "#unwatch");
  #killing;
  #stream;
  #channels = /* @__PURE__ */ new Set();
  /**
  * @param abort When given, the subscription is killed once its signal aborts, and the scope is
  *              let go of when the subscription ends.
  */
  constructor(controller, session, id$1, abort2) {
    super();
    this.#controller = controller;
    this.#session = session;
    this.#id = id$1;
    if (this.#controller.status !== "connected") throw new ConnectionUnavailableError();
    this.#unwatch = watchAbort(abort2, () => void this.#abandon())?.unwatch ?? this.#unwatch;
    (async () => {
      const messageStream = controller.liveQuery(id$1);
      const stream = messageStream[Symbol.asyncIterator]();
      this.#stream = stream;
      for await (const message of { [Symbol.asyncIterator]: () => stream }) {
        for (const channel2 of this.#channels) channel2.submit(message);
        if (message.action === "KILLED") {
          this.#serverKilled = true;
          break;
        }
      }
      this.#unwatch();
      for (const channel2 of this.#channels) channel2.cancel();
    })();
  }
  /** The signal of the subscription aborted: end it like a kill does, and tell the server */
  async #abandon() {
    try {
      await this.kill();
    } catch (err) {
      if (!isConnectionGone(err)) this.#controller.propagateError(new LiveSubscriptionError(err));
    }
  }
  get id() {
    return this.#id;
  }
  get isManaged() {
    return false;
  }
  get resource() {
    return void 0;
  }
  get isAlive() {
    return !this.#killed && !this.#serverKilled && this.#controller.hasSession(this.#session);
  }
  /**
  * Kill the live subscription. Killing it again, or after its signal aborted, is a no-op which
  * waits for the first kill, so that a `finally` block can kill it whatever came first.
  */
  kill() {
    this.#killing ??= this.#kill();
    return this.#killing;
  }
  async #kill() {
    this.#killed = true;
    this.#unwatch();
    for (const channel2 of this.#channels) channel2.cancel();
    this.#stream?.return?.()?.catch(() => {
    });
    if (this.id) await killLive(this.#controller, this.#session, this.id);
  }
  [Symbol.asyncIterator]() {
    if (this.#killed) throw new LiveSubscriptionError("Subscription has been killed");
    const channel2 = new ChannelIterator(() => {
      this.#channels.delete(channel2);
    });
    this.#channels.add(channel2);
    return channel2;
  }
};
var LiveDispatcher = class {
  static {
    __name(this, "LiveDispatcher");
  }
  #subscribers = /* @__PURE__ */ new Map();
  #pending = /* @__PURE__ */ new Map();
  #limit;
  /**
  * @param limit Maximum notifications buffered per id before the oldest are
  * dropped. Guards against a live query that is registered and receiving but
  * never subscribed to (e.g. a caller that abandons the round-trip).
  */
  constructor(limit = 1024) {
    this.#limit = limit;
  }
  /**
  * Deliver a notification to the id's subscribers, or buffer it until one
  * attaches.
  */
  dispatch(id$1, message) {
    const subscribers = this.#subscribers.get(id$1);
    if (subscribers && subscribers.size > 0) {
      for (const notify of subscribers) notify(message);
      return;
    }
    const buffer = this.#pending.get(id$1);
    if (buffer) {
      buffer.push(message);
      if (buffer.length > this.#limit) buffer.shift();
    } else this.#pending.set(id$1, [message]);
  }
  /**
  * Subscribe to notifications for an id, replaying any that were buffered
  * before this subscriber attached. Returns an unsubscribe function.
  */
  subscribe(id$1, notify) {
    let subscribers = this.#subscribers.get(id$1);
    if (!subscribers) {
      subscribers = /* @__PURE__ */ new Set();
      this.#subscribers.set(id$1, subscribers);
    }
    subscribers.add(notify);
    const buffered = this.#pending.get(id$1);
    if (buffered) {
      this.#pending.delete(id$1);
      for (const message of buffered) notify(message);
    }
    return () => {
      const current = this.#subscribers.get(id$1);
      if (current?.delete(notify) && current.size === 0) this.#subscribers.delete(id$1);
    };
  }
  /**
  * Drop all buffered notifications. Called when the connection drops, since
  * any pending ids are for live queries that will be re-registered under a
  * fresh id once the connection is re-established.
  */
  clear() {
    this.#pending.clear();
  }
};
var Publisher = class {
  static {
    __name(this, "Publisher");
  }
  #subscriptions = {};
  subscribe(event, listener) {
    this.#subscriptions[event] ??= /* @__PURE__ */ new Set();
    this.#subscriptions[event]?.add(listener);
    return () => {
      const subscriptions = this.#subscriptions[event];
      if (subscriptions?.delete(listener) && subscriptions.size === 0) delete this.#subscriptions[event];
    };
  }
  subscribeFirst(...events) {
    const subscriptions = [];
    return new Promise((resolve) => {
      for (const event of events) {
        const unsubscribe = this.subscribe(event, (...payload) => {
          for (const subscription of subscriptions) subscription();
          resolve(payload);
        });
        subscriptions.push(unsubscribe);
      }
    });
  }
  publish(event, ...payload) {
    const subscriptions = this.#subscriptions[event];
    if (!subscriptions) return;
    const failures = [];
    for (const subscription of subscriptions) try {
      subscription(...payload);
    } catch (cause) {
      failures.push(cause);
    }
    if (failures.length > 0) throw new PublishError(failures);
  }
};
var StreamView = class {
  static {
    __name(this, "StreamView");
  }
  #open;
  #queue = [];
  #head = 0;
  #tail = Promise.resolve();
  #starting;
  #iterator;
  #source;
  #failure;
  #closed = false;
  constructor(open3) {
    this.#open = open3;
  }
  /**
  * Called once when the query has run out of chunks, for a view which held some back.
  */
  finish(_emit) {
  }
  next() {
    const read2 = this.#tail.then(() => this.#read());
    this.#tail = read2.then(() => void 0, () => void 0);
    return read2;
  }
  async #read() {
    for (; ; ) {
      if (this.#head < this.#queue.length) {
        const value = this.#queue[this.#head++];
        if (this.#head === this.#queue.length) {
          this.#queue = [];
          this.#head = 0;
        }
        return {
          value,
          done: false
        };
      }
      if (this.#failure) {
        const { error: error3 } = this.#failure;
        this.#failure = void 0;
        throw error3;
      }
      if (this.#closed) return {
        value: void 0,
        done: true
      };
      let iterator;
      try {
        iterator = await this.#start();
      } catch (error3) {
        await this.#close();
        throw error3;
      }
      if (!iterator || this.#closed) return {
        value: void 0,
        done: true
      };
      let result;
      try {
        result = await iterator.next();
      } catch (error3) {
        if (this.#closed) return {
          value: void 0,
          done: true
        };
        await this.#close();
        throw error3;
      }
      if (this.#closed) return {
        value: void 0,
        done: true
      };
      try {
        if (result.done) this.finish((item) => {
          this.#queue.push(item);
        });
        else this.accept(result.value, (item) => {
          this.#queue.push(item);
        });
      } catch (error3) {
        this.#failure = { error: error3 };
      }
      if (result.done || this.#failure) await this.#close();
    }
  }
  async return() {
    this.#queue = [];
    this.#head = 0;
    this.#failure = void 0;
    await this.#close();
    return {
      value: void 0,
      done: true
    };
  }
  async throw(error3) {
    await this.return();
    throw error3;
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  [Symbol.asyncDispose]() {
    return this.return().then(() => void 0);
  }
  #start() {
    this.#starting ??= (async () => {
      const source = await this.#open();
      let iterator;
      try {
        iterator = source.chunks[Symbol.asyncIterator]();
      } catch (error3) {
        source.dispose();
        throw error3;
      }
      this.#source = source;
      this.#iterator = iterator;
      if (this.#closed) {
        await this.#release();
        return void 0;
      }
      return iterator;
    })();
    return this.#starting;
  }
  async #close() {
    if (this.#closed) return;
    this.#closed = true;
    if (this.#iterator) await this.#release();
  }
  /** Abandons the request, stops the query, then lets go of what the request holds. Once. */
  async #release() {
    const iterator = this.#iterator;
    const source = this.#source;
    this.#iterator = void 0;
    this.#source = void 0;
    try {
      source?.abort();
      const returned = iterator?.return?.();
      returned?.catch(() => {
      });
      await Promise.race([returned, new Promise((resolve) => setTimeout(resolve, 0))]);
    } finally {
      source?.dispose();
    }
  }
};
var RowStream = class extends StreamView {
  static {
    __name(this, "RowStream");
  }
  #json;
  #parse;
  #front = 0;
  #finished = /* @__PURE__ */ new Set();
  #held = /* @__PURE__ */ new Map();
  constructor(open3, json, parse) {
    super(open3);
    this.#json = json;
    this.#parse = parse;
  }
  accept(chunk, emit2) {
    if (chunk.error) throw chunk.error;
    const index = chunk.query;
    const value = chunk.result?.[0];
    const rows = chunk.kind === "single" ? value === void 0 ? [] : [value] : chunk.result;
    if (index === this.#front) for (const row of rows ?? []) emit2(this.#row(row));
    else if (rows?.length) {
      let held = this.#held.get(index);
      if (!held) {
        held = [];
        this.#held.set(index, held);
      }
      for (const row of rows) held.push(row);
    }
    if (chunk.kind === "batched") return;
    this.#finished.add(index);
    while (this.#finished.has(this.#front)) {
      this.#front++;
      this.#flush(this.#front, emit2);
    }
  }
  finish(emit2) {
    for (const index of [...this.#held.keys()].sort((a, b) => a - b)) this.#flush(index, emit2);
  }
  #flush(index, emit2) {
    const held = this.#held.get(index);
    if (!held) return;
    this.#held.delete(index);
    for (const row of held) emit2(this.#row(row));
  }
  #row(value) {
    const row = maybeJsonify(value, this.#json);
    return this.#parse ? this.#parse(row) : row;
  }
};
var StatementStream = class extends StreamView {
  static {
    __name(this, "StatementStream");
  }
  #json;
  #rows = /* @__PURE__ */ new Map();
  #traces = /* @__PURE__ */ new Map();
  constructor(open3, json) {
    super(open3);
    this.#json = json;
  }
  accept(chunk, emit2) {
    if (chunk.error) throw chunk.error;
    const { query: index } = chunk;
    const trace3 = mergeTraces(this.#traces.get(index), chunk.trace);
    if (chunk.kind === "single") {
      this.#traces.delete(index);
      emit2(this.#statement(chunk, maybeJsonify(chunk.result?.[0], this.#json), true, trace3));
      return;
    }
    if (trace3) this.#traces.set(index, trace3);
    let rows = this.#rows.get(index);
    if (!rows) {
      rows = [];
      this.#rows.set(index, rows);
    }
    for (const row of chunk.result ?? []) rows.push(maybeJsonify(row, this.#json));
    if (chunk.kind === "batched-final") {
      this.#rows.delete(index);
      this.#traces.delete(index);
      emit2(this.#statement(chunk, rows, false, trace3));
    }
  }
  #statement(chunk, value, single, trace3) {
    const result = {
      index: chunk.query,
      value,
      stats: chunk.stats,
      type: chunk.type ?? "other",
      single,
      ...trace3 && { trace: trace3 }
    };
    return result;
  }
};
var Query = class Query2 extends DispatchedPromise {
  static {
    __name(this, "Query");
  }
  #connection;
  #options;
  constructor(connection, options) {
    super();
    this.#connection = connection;
    this.#options = options.credential !== void 0 && !isCredentialed(options.query) ? {
      ...options,
      query: markCredentialed(new BoundQuery(options.query))
    } : options;
  }
  /**
  * Retrieve the inner query that will be sent to the database.
  */
  get inner() {
    return this.#options.query;
  }
  /**
  * Configure the query to return the result of each response as a
  * JSON-compatible structure.
  *
  * This is useful when query results need to be serialized. Keep in mind
  * that your responses will lose SurrealDB type information.
  */
  json() {
    return new Query2(this.#connection, {
      ...this.#options,
      json: true
    });
  }
  /**
  * Ask the server to report the graph the statements of this query walked, alongside what it
  * answers. Requires SurrealDB 4.0.0 or later: against an older server the call is refused
  * with a `UnavailableFeatureError`, and with a SurrealQL query only.
  *
  * With no arguments every kind is asked for. Otherwise name the kinds wanted:
  *
  * - `relations`: the edges a lookup in a returned position walked, as `{ in, edge, out }`
  * - `references`: the references a `<~` lookup in a returned position walked
  * - `links`: the record links the result reads through, such as `author` in `author.name`
  * - `variables`: what each top-level `LET` bound
  * - `subscriptions`: the live queries a `LIVE SELECT` started
  *
  * Awaiting the query and `collect()` answer as they always do. The trace is read from the
  * views which carry what belongs to a statement:
  *
  * - `stream()` hands over the trace of each server frame as it was sent. It is on the first
  *   value frame of a batch of rows, on the value frame of a single value, or on the done
  *   frame. A trace belongs to its statement and not to the rows it arrived with, it is
  *   provisional until the statement is done, and an error frame retracts it with the rows.
  *   Entries repeat across frames, and are told apart by their ids or by `dedupeTrace()`.
  * - `responses()` and `statements()` collect it for the statement, as it was sent.
  *
  * @example
  * ```ts
  * const [post] = await db
  *     .query("SELECT title, author.name, ->tagged->tag AS tags FROM post")
  *     .trace("relations", "links")
  *     .responses();
  *
  * if (post.success) {
  *     post.trace?.relations; // [{ in: post:1, edge: tagged:a, out: tag:rust }]
  *     post.trace?.links; // [{ record: post:1, field: "author", target: person:tobie }]
  * }
  * ```
  *
  * @param kinds The kinds of trace to ask for, or none for every kind
  * @returns A new `Query` which asks for the trace.
  */
  trace(...kinds) {
    return new Query2(this.#connection, {
      ...this.#options,
      trace: normalizeTraceKinds(kinds)
    });
  }
  /**
  * Run this call as a different identity than the one of the session, for this call only.
  *
  * The credential is presented with this request alone. The session, which other calls
  * share, is not authenticated, changed, or looked at, and the selected namespace and
  * database stay as they are. This is how a single connection can serve calls on behalf
  * of different users, where they are held apart by what each of them is permitted to do.
  *
  * Pass an access token, or the authentication details accepted by `signin()`, which are
  * exchanged for a token first and cost an additional request. A token is not checked
  * until the server sees it: a token which is invalid or expired fails the call.
  *
  * Only engines which present credentials with every request support this, which is the
  * HTTP engine. Other engines, such as WebSocket, reject the call with an
  * `UnsupportedFeatureError` instead of running it as the session, which would be the
  * wrong identity. With a WebSocket connection use `forkSession()` and then `authenticate()`
  * on the new session, which stays authenticated for as long as you keep it.
  *
  * @example
  * ```ts
  * const [mine] = await db.query("SELECT * FROM document").as(userToken).collect();
  * const visible = await db.select(new Table("document")).as(userToken);
  * ```
  *
  * @param credential An access token or authentication details to run this call as
  * @returns A new `Query` which runs as the provided identity.
  */
  as(credential) {
    assertCredential(credential);
    return new Query2(this.#connection, {
      ...this.#options,
      credential
    });
  }
  /**
  * Configure the query to automatically retry when it fails due to a transaction conflict.
  *
  * Under concurrent load a query may fail because another transaction wrote to the same data.
  * When retry is enabled, the entire query is re-sent with exponential backoff until it
  * succeeds or the configured attempts are exhausted.
  *
  * Retry only applies to `.collect()` (and awaiting the query directly), as the whole query is
  * re-sent on conflict. It does not apply to `.responses()` (which exposes partial results) or
  * to `.stream()`, `.rows()` and `.statements()` (which yield results incrementally and cannot
  * be safely replayed mid-stream).
  *
  * A transaction written into the query is retried as well. When one fails, the server reports
  * an error for each of its statements, and the conflict may be on its `COMMIT`: the error
  * which is checked for a conflict is the one which made the transaction fail, as it is for
  * `.collect()`, not one of the "not executed" errors reported for the other statements.
  *
  * **NOTE:** Retrying re-sends the full query. Only use this for queries that are safe to replay,
  * such as a single statement or a query wrapped in an explicit `BEGIN`/`COMMIT` block.
  * Re-sending a non-atomic, multi-statement query may apply some statements more than once.
  *
  * @example
  * ```ts
  * const [person] = await this.query("BEGIN; UPDATE counter SET n += 1; COMMIT").retry();
  * ```
  *
  * @param options Retry behavior. Defaults to enabling retry using the connection defaults.
  * @returns A new `Query` configured to retry on conflict.
  */
  retry(options = true) {
    return new Query2(this.#connection, {
      ...this.#options,
      retry: options
    });
  }
  /**
  * Configure the query to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, the query is not sent and fails straight away. If it aborts
  * later, the query stops waiting for the server and fails with the `reason` of the signal, so an
  * `AbortError` or a `TimeoutError` from `AbortSignal.timeout()` reaches the caller as it is. This
  * holds for `collect()`, for `responses()` and, by ending the iteration with the reason, for
  * `stream()`, which also lets go of what the stream holds. A query waiting to be retried is not
  * retried again.
  *
  * Aborting does not undo anything: it means "stop waiting", and nothing more. Over WebSocket the
  * server has no way of being told, so it may keep executing the query and discard the answer.
  * **A write which was sent before the signal aborted may or may not have been applied**, and a
  * caller which needs to know has to check. Over HTTP the request is cancelled, but a server may
  * well complete work it has begun.
  *
  * Calling this more than once, or in addition to a signal inherited from `withSignal()`,
  * combines the signals: the query is abandoned when any of them aborts.
  *
  * @example
  * ```ts
  * const people = await db
  *     .query("SELECT * FROM person")
  *     .signal(request.signal)
  *     .collect<[Person[]]>();
  *
  * // Give up after two seconds
  * await db.query("SELECT * FROM report").signal(AbortSignal.timeout(2000));
  * ```
  *
  * @param signal The signal which abandons the query. Without one, nothing changes.
  * @returns A new `Query` configured to be abandoned by the signal.
  */
  signal(signal) {
    return new Query2(this.#connection, {
      ...this.#options,
      signals: addSignal(this.#options.signals, signal)
    });
  }
  /**
  * Configure how long to wait for the server to answer the query, in milliseconds, before giving up
  * on it with a `TimeoutError`. This overrides the `requestTimeout` of the connection for this query,
  * and is the way to allow a query longer than that default, or `0` to wait without limit.
  *
  * This is a limit on the client. It is not the `TIMEOUT` clause, which the server enforces and
  * the query builders expose as `.timeout()`. The server is not told that the client has given up,
  * and may well carry on: a write which timed out may or may not have been applied. Retries each
  * get the full time, as it applies to every request.
  *
  * To combine it with other reasons for abandoning a query, use `.signal()`: a timeout is no
  * different from `.signal(AbortSignal.timeout(milliseconds))`, apart from replacing the default.
  *
  * @example
  * ```ts
  * // Give the slow report a minute, whatever the connection default is
  * await db.query("SELECT * FROM report").requestTimeout(60_000);
  * ```
  *
  * @param milliseconds The time to wait for an answer, or `0` for no limit.
  * @returns A new `Query` configured with the request timeout.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new Query2(this.#connection, {
      ...this.#options,
      requestTimeout: milliseconds
    });
  }
  /**
  * Collect and return the results of all queries at once. If any of the queries fail, the promise
  * will reject with the error of the first one which failed.
  *
  * When the query holds a transaction, that is the error which made the transaction fail, wherever
  * it comes. The server also reports the transaction's other statements as errors ("not executed",
  * "cancelled"), and those are only thrown when there is nothing else to throw. `.responses()` and
  * `.stream()` do not choose: they report the error of every statement as the server sent it.
  *
  * You can optionally pass a list of query indexes to collect only the results of specific queries.
  *
  * This is the same as awaiting the query directly, but allows specifying which queries to collect.
  *
  * @example
  * ```ts
  * const [people] = await this.query("SELECT * FROM person").collect<[Person[]]>();
  * ```
  *
  * @param queries The queries to collect. If no queries are provided, all queries will be collected.
  * @returns A promise that resolves to the results of all queries at once.
  */
  async collect(...queries) {
    return this.#abortable((signal) => this.#collect(signal, queries));
  }
  async #collect(signal, queries) {
    throwIfAborted(signal);
    await raceAbort(this.#connection.ready(), signal);
    const options = RetryContext.mergeOptions(this.#options.retry, this.#connection.retry);
    const context2 = new RetryContext(options, signal);
    return context2.run(async () => {
      const { json } = this.#options;
      const chunks = this.#open(signal);
      const responses = [];
      const failures = [];
      const queryIndexes = queries.length > 0 ? new Map(queries.map((idx, i) => [idx, i])) : void 0;
      for await (const chunk of chunks) {
        if (chunk.error) {
          failures.push(chunk.error);
          if (isSecondaryError(chunk.error)) continue;
          break;
        }
        if (queryIndexes?.has(chunk.query) === false) continue;
        const index = queryIndexes?.get(chunk.query) ?? chunk.query;
        if (chunk.kind === "single") {
          responses[index] = maybeJsonify(chunk.result?.[0], json);
          continue;
        }
        const additions = maybeJsonify(chunk.result ?? [], json);
        let records = responses[index];
        if (!records) {
          records = [...additions];
          responses[index] = records;
        } else for (const addition of additions) records.push(addition);
      }
      if (failures.length > 0) throw findRootCause(failures);
      return responses;
    });
  }
  /**
  * Stream the rows of the query as they arrive.
  *
  * The first rows are available while the rest of the query is still running, and nothing is
  * held but what has arrived and not yet been read:
  *
  * ```ts
  * for await (const person of db.query<[Person[]]>("SELECT * FROM person").rows()) {
  *     console.log(person.name);
  * }
  * ```
  *
  * The row type is derived from the type of the query. For a query of several statements these
  * are the rows of each in turn, in the order the server produces them; a statement which is
  * one bare value, such as `SELECT ... FROM ONLY` or `RETURN 1 + 2`, is one row, and one whose
  * value is `NONE`, such as `LET`, is none. Use `statements()` to tell the statements apart.
  *
  * A `parse` function is applied to each row as it arrives, which is where a row can be
  * validated or turned into a class without the query being held whole first:
  *
  * ```ts
  * for await (const person of db.query("SELECT * FROM person").rows(Person.parse)) {
  *     person; // Person
  * }
  * ```
  *
  * **A row is provisional until iteration completes without throwing.** Rows arrive before the
  * statement which produced them has finished, so one which fails afterwards voids what it
  * yielded: iteration throws its error, and what was yielded for it should be discarded. To
  * receive each statement only once it is final, use `statements()`. To see one statement fail
  * while the others carry on, use the frames of `stream()`.
  *
  * Leaving the loop - `break`, `return()`, or `await using` - stops the query on the server and
  * releases a read which is waiting on it at once. What has arrived and not yet been read is
  * held in memory, and the WebSocket API offers no way to pause the server, so a reader which
  * is slower than the server holds the difference until it catches up. Leaving is how that is
  * stopped.
  *
  * Like `stream()`, this asks for a stream: it streams inside a transaction, where the caution
  * about committing before the end applies, and in spite of `streaming: false`.
  *
  * @param parse Applied to each row as it arrives. Without one, rows are yielded as they are.
  * @returns A single-use async iterable of rows, which can also be disposed.
  */
  rows(parse) {
    return new RowStream(() => this.#openView(), this.#options.json, parse);
  }
  /**
  * Stream the statements of the query, each once it is final.
  *
  * Where `rows()` delivers rows as they arrive, this delivers a statement when the server has
  * said it is complete, with all of its rows. What is yielded is never retracted, so each
  * statement can be acted on as it arrives while the statements after it are still running:
  *
  * ```ts
  * const sql = "SELECT * FROM person; SELECT * FROM company";
  *
  * for await (const statement of db.query<[Person[], Company[]]>(sql).statements()) {
  *     console.log(statement.index, statement.value.length);
  * }
  * ```
  *
  * A statement's rows are held until it finishes, so the rows of a statement are no sooner than
  * with `collect()`; what is gained is each statement as it completes, and what is spared is the
  * decoding of one very large answer. A statement which fails throws its error and ends the
  * iteration. To see a failure and the statements after it, use `responses()` or the frames of
  * `stream()`.
  *
  * Asks for a stream, and is left the same way as `rows()`.
  *
  * @returns A single-use async iterable of statements, which can also be disposed.
  */
  statements() {
    return new StatementStream(() => this.#openView(), this.#options.json);
  }
  /**
  * Open the query as a stream for a view to read, once, when it is first read from.
  *
  * Everything which `stream()` does to read through the signals of the query is done here too,
  * so a view is abandoned by a signal, or by the request timeout, the same way.
  */
  async #openView() {
    const leaving = new AbortController();
    const scope = abortScope([...this.#options.signals ?? [], leaving.signal]);
    try {
      throwIfAborted(scope.signal);
      await raceAbort(this.#connection.ready(), scope.signal);
      return {
        chunks: this.#open(scope.signal, true),
        abort: /* @__PURE__ */ __name(() => leaving.abort(), "abort"),
        dispose: scope.dispose
      };
    } catch (error3) {
      scope.dispose();
      throw error3;
    }
  }
  /**
  * Stream the response frames of the query as they are received as an AsyncIterable.
  *
  * This is the low level view, and almost always the wrong one to start with: use `rows()` for
  * the rows of a query as they arrive, or `statements()` for each statement once it is final.
  * Frames are for what neither can show, which is one statement failing while the statements
  * after it carry on, and the completion and statistics of each statement as it happens.
  *
  * Each iteration yields a **value**, **error**, or **done** frame. The provided
  * `isValue`, `isError`, and `isDone` methods can be used to check the type of frame, and
  * `isValueOf`, `isErrorOf`, and `isDoneOf` to check the type and that the frame belongs to
  * a specific statement, by its index.
  *
  * Values are provisional until the **done** frame for their statement arrives: an **error**
  * frame for a statement retracts every value already yielded for it, and the stream itself
  * throws when the query as a whole could not be completed. Statements are therefore counted
  * by their **done** frames.
  *
  * Abandoning the stream, such as by breaking out of the loop, stops the query on servers
  * which support it, so results which are no longer wanted are no longer produced. Frames which
  * have arrived and not yet been read are held in memory, and the WebSocket API offers no way to
  * pause the server, so a reader which is slower than the server holds the difference until it
  * catches up.
  *
  * Asking for a stream is asking for one. Unlike a query which is simply awaited, which is
  * streamed only where doing so is invisible, this streams inside a transaction, and in spite
  * of `streaming: false` on the driver; and where the connection is at the limit of streams
  * the server allows it, it fails rather than being quietly buffered. A server which does not
  * stream at all still answers, buffered, as it always has, and so do the HTTP and embedded
  * engines.
  *
  * **Inside a transaction, wait for the stream to end before committing.** Requests on a
  * connection are served concurrently, so a `commit` which arrives while the query is still
  * executing succeeds, and what it commits is the part of the query which had run, not the
  * whole of it - the query then fails, but the transaction is already finished.
  *
  * @example
  * ```ts
  * const stream = this.query("SELECT * FROM person").stream();
  *
  * for await (const frame of stream) {
  *     if (frame.isValue<Person>(0)) {
  *         // use frame.value
  *     }
  * }
  * ```
  *
  * @returns An async iterable of query frames.
  */
  async *stream() {
    const scope = abortScope(this.#options.signals ?? []);
    try {
      yield* this.#frames(scope.signal);
    } finally {
      scope.dispose();
    }
  }
  async *#frames(signal) {
    throwIfAborted(signal);
    await raceAbort(this.#connection.ready(), signal);
    const { json } = this.#options;
    const chunks = this.#open(signal, true);
    for await (const chunk of chunks) {
      if (chunk.error) {
        yield new ErrorFrame(chunk.query, chunk.stats, chunk.error);
        continue;
      }
      let trace3 = chunk.trace;
      if (chunk.kind === "single") {
        yield new ValueFrame(chunk.query, maybeJsonify(chunk.result?.[0], json), true, trace3);
        yield new DoneFrame(chunk.query, chunk.stats, chunk.type ?? "other");
        continue;
      }
      const values = chunk.result;
      for (const value of values) {
        yield new ValueFrame(chunk.query, maybeJsonify(value, json), false, trace3);
        trace3 = void 0;
      }
      if (chunk.kind === "batched-final") yield new DoneFrame(chunk.query, chunk.stats, chunk.type ?? "other", trace3);
    }
  }
  /**
  * Collect and return the responses of all queries at once. Failed queries will be returned
  * with `success: false` and the associated error, while successful queries will have
  * `success: true` and their result.
  *
  * You can optionally pass a list of query indexes to collect only the results of specific responses.
  *
  * @example
  * ```ts
  * const [people] = await this.query("SELECT * FROM person").responses<[Person[]]>();
  *
  * people.success; // true
  * people.result; // Person[]
  * ```
  *
  * @param queries The queries to collect. If no queries are provided, all queries will be collected.
  * @returns A promise that resolves to the responses of all queries at once.
  */
  async responses(...queries) {
    return this.#abortable((signal) => this.#responses(signal, queries));
  }
  async #responses(signal, queries) {
    throwIfAborted(signal);
    await raceAbort(this.#connection.ready(), signal);
    const { json } = this.#options;
    const chunks = this.#open(signal);
    const collections = [];
    const traces = [];
    const responses = [];
    const queryIndexes = queries.length > 0 ? new Map(queries.map((idx, i) => [idx, i])) : void 0;
    for await (const chunk of chunks) {
      if (queryIndexes?.has(chunk.query) === false) {
        if (chunk.error) throw chunk.error;
        continue;
      }
      const index = queryIndexes?.get(chunk.query) ?? chunk.query;
      if (chunk.error) {
        responses[index] = {
          success: false,
          error: chunk.error,
          stats: chunk.stats
        };
        continue;
      }
      traces[index] = mergeTraces(traces[index], chunk.trace);
      if (chunk.kind === "single") {
        responses[index] = {
          success: true,
          result: maybeJsonify(chunk.result?.[0], json),
          stats: chunk.stats,
          type: chunk.type ?? "other",
          ...traces[index] && { trace: traces[index] }
        };
        continue;
      }
      const additions = maybeJsonify(chunk.result ?? [], json);
      let records = collections[index];
      if (!records) {
        records = [...additions];
        collections[index] = records;
      } else for (const addition of additions) records.push(addition);
      if (chunk.kind === "batched-final") responses[index] = {
        success: true,
        result: records,
        stats: chunk.stats,
        type: chunk.type ?? "other",
        ...traces[index] && { trace: traces[index] }
      };
    }
    return responses;
  }
  async dispatch() {
    return this.collect();
  }
  /**
  * Run work which is bound to the signals of this query, letting go of them once it is done.
  */
  async #abortable(run) {
    const scope = abortScope(this.#options.signals ?? []);
    try {
      return await run(scope.signal);
    } finally {
      scope.dispose();
    }
  }
  /**
  * Send the query as one request, and return the chunks of its answer.
  *
  * This is the one place where the chunks of the engine are read through a signal. The request
  * is bound to the signal of the caller and to the request timeout, if there is one, which is
  * handed to the engine so it can stop the request itself. The chunks are read through
  * `abortableIterable`, which does not rely on the engine having done so: when the signal aborts
  * a read in progress fails with its reason at once, and the engine's iterator is returned, which
  * is what an engine which can stop a stream on the server acts on.
  *
  * The request timeout is measured from here, once per request, so a retry starts it afresh.
  */
  #open(signal, stream = false) {
    const { query, transaction, session, credential, beforeSend, dialect, trace: trace3 } = this.#options;
    if (trace3?.length && dialect === "gql") throw new TypeError("A trace can only be asked for with a SurrealQL query");
    const timeout = this.#options.requestTimeout ?? this.#connection.requestTimeout;
    const request = abortScope(signal ? [signal] : [], timeout);
    try {
      throwIfAborted(request.signal);
      const options = request.signal || stream || trace3?.length ? {
        ...request.signal && { signal: request.signal },
        ...stream && { stream },
        ...trace3?.length && { trace: trace3 }
      } : void 0;
      const chunks = credential === void 0 ? dialect === "gql" ? this.#connection.gql(query, session, transaction, options) : this.#connection.query(query, session, transaction, beforeSend ? {
        ...options,
        beforeSend
      } : options) : this.#connection.queryAs(query, session, transaction, {
        ...options,
        credential,
        dialect
      });
      return abortableIterable(chunks, request.signal, request.dispose);
    } catch (error3) {
      request.dispose();
      throw error3;
    }
  }
};
var ApiPromise = class ApiPromise2 extends DispatchedPromise {
  static {
    __name(this, "ApiPromise");
  }
  #connection;
  #options;
  constructor(connection, options) {
    super();
    this.#connection = connection;
    this.#options = options;
  }
  /**
  * Configure the query to return the result as a
  * JSON-compatible structure.
  *
  * This is useful when query results need to be serialized. Keep in mind
  * that your responses will lose SurrealDB type information.
  */
  json() {
    return new ApiPromise2(this.#connection, {
      ...this.#options,
      json: true
    });
  }
  /**
  * Run this call as a different identity than the one of the session, for this call only.
  * The session is neither used nor changed. Supported by engines which present credentials
  * with every request, such as HTTP, and rejected with an `UnsupportedFeatureError` by
  * the others.
  *
  * @see {@link Query.as} for details.
  *
  * @param credential An access token or authentication details to run this call as
  * @returns A new `ApiPromise` which runs as the provided identity.
  */
  as(credential) {
    assertCredential(credential);
    return new ApiPromise2(this.#connection, {
      ...this.#options,
      credential
    });
  }
  /**
  * Append a header to the api request.
  *
  * @param name The name of the header to append.
  * @param value The value of the header to append.
  */
  header(name, value) {
    return new ApiPromise2(this.#connection, {
      ...this.#options,
      headers: {
        ...this.#options.headers,
        [name]: value
      }
    });
  }
  /**
  * Append a query parameter to the api request.
  *
  * @param name The name of the query parameter to append.
  * @param value The value of the query parameter to append.
  * @returns A new ApiPromise instance.
  */
  query(name, value) {
    return new ApiPromise2(this.#connection, {
      ...this.#options,
      query: {
        ...this.#options.query,
        [name]: value
      }
    });
  }
  /**
  * Configure the query to return the response body value
  * as the result. If the response status is not 200, the promise will reject.
  */
  value() {
    return new ApiPromise2(this.#connection, {
      ...this.#options,
      value: true
    });
  }
  /**
  * Configure the query to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, the query is not sent and fails straight away. If it aborts
  * later, the query stops waiting for the server and fails with the `reason` of the signal, as it
  * is: an `AbortError`, or the `TimeoutError` of `AbortSignal.timeout()`. This holds for awaiting
  * the query as well as for `.stream()`, which ends its iteration with the reason.
  *
  * Aborting means "stop waiting", and nothing more. The server may keep executing the query, and
  * **a write which was sent before the signal aborted may or may not have been applied**.
  *
  * Can be called more than once, and in addition to a signal inherited from `withSignal()`: the
  * query is abandoned when any of them aborts. See {@link Query.signal}.
  *
  * @example
  * ```ts
  * const result = await db.api().get("/report").signal(request.signal);
  * ```
  *
  * @param signal The signal which abandons the query. Without one, nothing changes.
  */
  signal(signal) {
    return new ApiPromise2(this.#connection, {
      ...this.#options,
      signals: addSignal(this.#options.signals, signal)
    });
  }
  /**
  * Configure how long to wait for the server to answer the query, in milliseconds, before giving
  * up on it with a `TimeoutError`. Overrides the `requestTimeout` of the connection for this
  * query, so it can also allow a query longer than that default, or `0` to wait without limit.
  *
  * This is a limit on the client, and not the `TIMEOUT` clause which the server enforces and
  * which is set with `.timeout()`. The server is not told the client has given up, so **a write
  * which timed out may or may not have been applied**. See {@link Query.requestTimeout}.
  *
  * @param milliseconds The time to wait for an answer, or `0` for no limit.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new ApiPromise2(this.#connection, {
      ...this.#options,
      requestTimeout: milliseconds
    });
  }
  /**
  * Check the request body against a [Standard Schema](https://standardschema.dev) (Zod,
  * Valibot, ArkType and others) before the request is sent. When it fails, the request is not
  * sent and the promise rejects with a `SchemaValidationError` listing every issue. What the
  * schema produces is what is sent, so a schema which transforms or coerces changes the body.
  *
  * Applies when the promise is awaited, and not to `.compile()` or `.stream()`.
  *
  * @example
  * ```ts
  * await db.api().post("/users", body).request(z.object({ name: z.string() }));
  * ```
  *
  * @param schema The schema the request body must satisfy.
  */
  request(schema) {
    return new ApiPromise2(this.#connection, {
      ...this.#options,
      requestSchema: schema
    });
  }
  /**
  * Check the response body against a [Standard Schema](https://standardschema.dev) and type the
  * promise as what the schema produces. Only the body of a successful response (status 200 to
  * 299) is checked, because an error response carries a different body. When the body does not
  * match, the promise rejects with a `SchemaValidationError`.
  *
  * @example
  * ```ts
  * const users = await db.api().get("/users").response(z.array(User)).value();
  * ```
  *
  * @param schema The schema the response body must satisfy.
  */
  response(schema) {
    return new ApiPromise2(this.#connection, {
      ...this.#options,
      responseSchema: schema
    });
  }
  /**
  * Compile an explicit `api::invoke` SQL query. Executing this compiled query requires
  * query access, including on remote connections whose API calls normally use HTTP.
  */
  compile() {
    return this.#build().inner;
  }
  /**
  * Stream the results of the query as they are received.
  *
  * @returns An async iterable of query frames.
  */
  async *stream() {
    const query = this.#build().stream();
    for await (const frame$1 of query) yield frame$1;
  }
  async dispatch() {
    const { path, method, requestSchema, responseSchema } = this.#options;
    const label = `${method.toUpperCase()} ${path}`;
    let options = this.#options;
    if (requestSchema) {
      const body = await validateWith(requestSchema, options.body, `request body for ${label}`);
      options = {
        ...options,
        body
      };
    }
    const result = maybeJsonify(await this.#invoke(options), options.json);
    if (!("body" in result) || typeof result.status !== "number") throw new SurrealError("Body or status was missing from the API response");
    if (responseSchema && isSuccessful(result.status)) result.body = await validateWith(responseSchema, result.body, `response body of ${label}`);
    if (this.#options.value) {
      if ("status" in result && !isSuccessful(result.status)) throw new UnsuccessfulApiError(this.#options.path, this.#options.method, result);
      return result.body;
    }
    return result;
  }
  async #invoke(options) {
    const { path, transaction, session, credential } = options;
    const scope = abortScope(options.signals ?? []);
    let request;
    try {
      throwIfAborted(scope.signal);
      await raceAbort(this.#connection.ready(), scope.signal);
      request = abortScope([scope.signal], options.requestTimeout ?? this.#connection.requestTimeout);
      const { signal } = request;
      throwIfAborted(signal);
      return await raceAbort(credential === void 0 ? this.#connection.api(path, options, session, transaction, { signal }) : this.#connection.apiAs(path, options, session, transaction, {
        signal,
        credential
      }), signal);
    } finally {
      request?.dispose();
      scope.dispose();
    }
  }
  #build(options = this.#options) {
    const { path, body, method, headers, query, transaction, session, json } = options;
    return new Query(this.#connection, {
      credential: this.#options.credential,
      transaction,
      json,
      session,
      query: apiInvocation(path, {
        body,
        method,
        headers,
        query
      }),
      signals: this.#options.signals,
      requestTimeout: this.#options.requestTimeout
    });
  }
};
function isSuccessful(status) {
  return status >= 200 && status < 300;
}
__name(isSuccessful, "isSuccessful");
var SurrealApi = class {
  static {
    __name(this, "SurrealApi");
  }
  #connection;
  #transaction;
  #prefix;
  #session;
  #headers;
  #signals;
  constructor(connection, session, transaction, prefix, signals2) {
    this.#connection = connection;
    this.#session = session;
    this.#transaction = transaction;
    this.#prefix = prefix ?? "";
    this.#headers = {};
    this.#signals = signals2;
  }
  /**
  * Configure a header for all requests sent by this API instance.
  *
  * This is useful for setting a common header for all requests sent by this API instance.
  *
  * @param name The name of the header to configure.
  * @param value The value of the header to configure, or null to remove the header.
  */
  header(name, value) {
    if (value === null) delete this.#headers[name];
    else this.#headers[name] = value;
  }
  /**
  * Invoke a user defined API initialized with a request object.
  *
  * Prefer the method specific functions for a more type-safe experience.
  *
  * @param path The path of the API to invoke.
  * @param request The request to send to the API.
  * @returns The response from the API.
  */
  invoke(path, request) {
    this.#connection.assertFeature(Features.Api);
    return new ApiPromise(this.#connection, {
      path: normalizePath(this.#prefix, path),
      transaction: this.#transaction,
      session: this.#session,
      value: false,
      json: false,
      signals: this.#signals,
      headers: {
        ...this.#headers,
        ...request?.headers
      },
      query: request?.query ?? {},
      method: request?.method ?? "get",
      body: request?.body
    });
  }
  /**
  * Invoke a user defined GET API.
  *
  * @param path The path of the API to invoke.
  * @returns The response from the API.
  */
  get(path) {
    return this.invoke(path, { method: "get" });
  }
  /**
  * Invoke a user defined POST API.
  *
  * @param path The path of the API to invoke.
  * @param body The request body to send to the API.
  * @returns The response from the API.
  */
  post(path, body) {
    return this.invoke(path, {
      method: "post",
      body
    });
  }
  /**
  * Invoke a user defined PUT API.
  *
  * @param path The path of the API to invoke.
  * @param body The request body to send to the API.
  * @returns The response from the API.
  */
  put(path, body) {
    return this.invoke(path, {
      method: "put",
      body
    });
  }
  /**
  * Invoke a user defined DELETE API.
  *
  * @param path The path of the API to invoke.
  * @param body The request body to send to the API.
  * @returns The response from the API.
  */
  delete(path, body) {
    return this.invoke(path, {
      method: "delete",
      body
    });
  }
  /**
  * Invoke a user defined PATCH API.
  *
  * @param path The path of the API to invoke.
  * @param body The request body to send to the API.
  * @returns The response from the API.
  */
  patch(path, body) {
    return this.invoke(path, {
      method: "patch",
      body
    });
  }
  /**
  * Invoke a user defined TRACE API.
  *
  * @param path The path of the API to invoke.
  * @param body The request body to send to the API.
  * @returns The response from the API.
  */
  trace(path, body) {
    return this.invoke(path, {
      method: "trace",
      body
    });
  }
};
function reportProgress(callback) {
  return (progress) => {
    try {
      callback(progress);
    } catch (error3) {
      queueMicrotask(() => {
        throw error3;
      });
    }
  };
}
__name(reportProgress, "reportProgress");
function countBytes(source, onProgress, total) {
  let loaded = 0;
  return source.pipeThrough(new TransformStream({ transform(chunk, controller) {
    loaded += chunk.byteLength;
    controller.enqueue(chunk);
    onProgress({
      loaded,
      total
    });
  } }));
}
__name(countBytes, "countBytes");
function countResponse(response, callback) {
  if (!callback || !response.body) return response;
  const length = response.headers.get("Content-Length");
  const total = length === null ? void 0 : Number(length);
  return new Response(countBytes(response.body, reportProgress(callback), Number.isFinite(total) ? total : void 0), {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
}
__name(countResponse, "countResponse");
function wrapSqonError(fn) {
  try {
    return fn();
  } catch (error3) {
    if (error3 instanceof SqonError) throw new SurrealSqonError(error3);
    throw error3;
  }
}
__name(wrapSqonError, "wrapSqonError");
function readBody(response, signal) {
  return raceAbort(response.arrayBuffer(), signal);
}
__name(readBody, "readBody");
async function readChunks(response, signal, onChunk) {
  throwIfAborted(signal);
  if (!response.body) {
    onChunk(new Uint8Array(await raceAbort(response.arrayBuffer(), signal)));
    return;
  }
  const reader = response.body.getReader();
  const cancel = /* @__PURE__ */ __name(() => {
    reader.cancel(abortReason(signal)).catch(() => {
    });
  }, "cancel");
  signal.addEventListener("abort", cancel, { once: true });
  try {
    for (; ; ) {
      const { done, value } = await reader.read();
      throwIfAborted(signal);
      if (done) return;
      onChunk(value);
    }
  } finally {
    signal.removeEventListener("abort", cancel);
    reader.releaseLock();
  }
}
__name(readChunks, "readChunks");
async function readText(response, signal) {
  if (!signal) return response.text();
  const decoder = new TextDecoder();
  let text$1 = "";
  await readChunks(response, signal, (chunk) => {
    text$1 += decoder.decode(chunk, { stream: true });
  });
  return text$1 + decoder.decode();
}
__name(readText, "readText");
async function readBytes(response, signal) {
  if (!signal) return new Uint8Array(await response.arrayBuffer());
  const parts = [];
  let length = 0;
  await readChunks(response, signal, (chunk) => {
    parts.push(chunk);
    length += chunk.byteLength;
  });
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const part of parts) {
    bytes.set(part, offset);
    offset += part.byteLength;
  }
  return bytes;
}
__name(readBytes, "readBytes");
function releaseResponse(response) {
  response.body?.cancel().catch(() => {
  });
}
__name(releaseResponse, "releaseResponse");
async function fetchSurreal(context2, state, session, options) {
  const endpoint = new URL(options.url ?? state.url);
  const fetchImpl = context2.options.fetchImpl ?? globalThis.fetch;
  const headerMap = {
    "Content-Type": "application/cbor",
    Accept: "application/cbor"
  };
  for (const [name, value] of Object.entries(options.headers ?? {})) setHeader(headerMap, name, value);
  if (session.namespace) setHeader(headerMap, "Surreal-NS", session.namespace);
  if (session.database) setHeader(headerMap, "Surreal-DB", session.database);
  endpoint.protocol = endpoint.protocol.replace("ws", "http");
  throwIfAborted(options.signal);
  const source = options.token === void 0 && options.resolve !== false ? state.credentials : void 0;
  const scoped = options.token !== void 0 || source !== void 0;
  if (scoped && endpoint.origin !== originOf(state.url)) throw new SurrealError("Request credentials are only sent to the origin of the connection");
  const encodedBody = encodeBody(options.codec ?? context2.codecs.cbor, options.body, options.signal);
  let token = options.token ?? session.accessToken;
  if (source) try {
    token = await resolveToken(source, session.id, void 0, options.signal);
  } catch (error3) {
    discardBody(encodedBody, error3);
    throw error3;
  }
  const progress = options.uploadProgress;
  const xhrBody = progress && encodedBody instanceof Blob && !scoped && !context2.options.fetchImpl && typeof XMLHttpRequest === "function" ? encodedBody : void 0;
  const bodyFor = /* @__PURE__ */ __name(() => {
    if (!progress) return encodedBody;
    if (encodedBody instanceof ReadableStream) return countBytes(encodedBody, progress);
    if (encodedBody instanceof Blob && typeof XMLHttpRequest !== "function") {
      const stream = encodedBody.stream();
      return countBytes(options.signal ? abortableStream(stream, options.signal) : stream, progress, encodedBody.size);
    }
    return encodedBody;
  }, "bodyFor");
  const attempt = /* @__PURE__ */ __name((bearer) => {
    const headers = { ...headerMap };
    if (bearer) setHeader(headers, "Authorization", `Bearer ${bearer}`);
    const method = options.method ?? "POST";
    if (xhrBody && progress) return uploadWithXhr(endpoint, {
      method,
      headers,
      body: xhrBody,
      credentials: context2.options.fetchOptions?.credentials,
      signal: options.signal,
      progress
    });
    return raceAbort(fetchImpl(endpoint, {
      ...context2.options.fetchOptions,
      method,
      headers,
      body: bodyFor(),
      ...scoped || options.manualRedirect ? { redirect: "manual" } : {},
      signal: options.signal,
      duplex: "half"
    }), options.signal, releaseResponse);
  }, "attempt");
  let response = await attempt(token);
  if (response.status === 401 && !options.answers?.(401) && source && token && !(encodedBody instanceof ReadableStream)) {
    const renewed = await resolveToken(source, session.id, token, options.signal);
    if (renewed && renewed !== token) {
      releaseResponse(response);
      response = await attempt(renewed);
    }
  }
  if (response.status === 200 || options.answers?.(response.status)) return response;
  const buffer = await readBody(response, options.signal);
  throw new HttpConnectionError(new TextDecoder("utf-8").decode(buffer), response.status, response.statusText, buffer);
}
__name(fetchSurreal, "fetchSurreal");
var NULL_BODY_STATUSES = /* @__PURE__ */ new Set([
  101,
  204,
  205,
  304
]);
function uploadWithXhr(url, request) {
  const { signal, progress } = request;
  const xhr = new XMLHttpRequest();
  const onAbort = /* @__PURE__ */ __name(() => xhr.abort(), "onAbort");
  let downloaded;
  const download = new Promise((resolve, reject) => {
    downloaded = {
      resolve,
      reject
    };
  });
  download.catch(() => {
  });
  return new Promise((resolve, reject) => {
    let answered = false;
    const fail = /* @__PURE__ */ __name((reason) => answered ? downloaded.reject(reason) : reject(reason), "fail");
    xhr.open(request.method, url.href);
    xhr.responseType = "blob";
    xhr.withCredentials = request.credentials === "include";
    for (const [name, value] of Object.entries(request.headers)) xhr.setRequestHeader(name, value);
    xhr.upload.onprogress = (event) => {
      progress({
        loaded: event.loaded,
        total: event.lengthComputable ? event.total : request.body.size
      });
    };
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 2) return;
      answered = true;
      resolve(new Response(NULL_BODY_STATUSES.has(xhr.status) ? null : blobBody(download, xhr), {
        status: xhr.status,
        statusText: xhr.statusText
      }));
    };
    xhr.onload = () => downloaded.resolve(xhr.response);
    xhr.onerror = () => fail(/* @__PURE__ */ new TypeError("Failed to fetch"));
    xhr.onabort = () => fail(signal ? abortReason(signal) : /* @__PURE__ */ new TypeError("The request was aborted"));
    xhr.onloadend = () => signal?.removeEventListener("abort", onAbort);
    signal?.addEventListener("abort", onAbort, { once: true });
    xhr.send(request.body);
  });
}
__name(uploadWithXhr, "uploadWithXhr");
function blobBody(download, xhr) {
  let reader;
  return new ReadableStream({
    async pull(controller) {
      reader ??= (await download).stream().getReader();
      const { done, value } = await reader.read();
      if (done) controller.close();
      else controller.enqueue(value);
    },
    cancel(reason) {
      xhr.abort();
      return reader?.cancel(reason);
    }
  }, { highWaterMark: 0 });
}
__name(blobBody, "blobBody");
async function resolveToken(source, session, rejected, signal) {
  try {
    return await raceAbort(source.token(session, rejected, signal), signal);
  } catch (error3) {
    throwIfAborted(signal);
    throw error3;
  }
}
__name(resolveToken, "resolveToken");
function discardBody(body, reason) {
  if (body instanceof ReadableStream) body.cancel(reason).catch(() => {
  });
}
__name(discardBody, "discardBody");
function originOf(url) {
  const normalized = new URL(url);
  normalized.protocol = normalized.protocol.replace("ws", "http");
  return normalized.origin;
}
__name(originOf, "originOf");
var REMOTE_PROTOCOLS = /* @__PURE__ */ new Set([
  "http",
  "https",
  "ws",
  "wss"
]);
function parseEndpoint(value) {
  const url = typeof value === "string" ? new URL(value) : new URL(value.href);
  const protocol = url.protocol.slice(0, -1);
  if (REMOTE_PROTOCOLS.has(protocol) && !url.pathname.endsWith("/rpc")) {
    if (!url.pathname.endsWith("/")) url.pathname += "/";
    url.pathname += "rpc";
  }
  return url;
}
__name(parseEndpoint, "parseEndpoint");
function abortableStream(source, signal) {
  const reader = source.getReader();
  let onAbort;
  const unwatch = /* @__PURE__ */ __name(() => {
    if (onAbort) signal.removeEventListener("abort", onAbort);
    onAbort = void 0;
  }, "unwatch");
  return new ReadableStream({
    start(controller) {
      onAbort = /* @__PURE__ */ __name(() => {
        const reason = abortReason(signal);
        onAbort = void 0;
        reader.cancel(reason).catch(() => {
        });
        controller.error(reason);
      }, "onAbort");
      signal.addEventListener("abort", onAbort, { once: true });
    },
    async pull(controller) {
      try {
        const { done, value } = await reader.read();
        if (signal.aborted) return;
        if (done) {
          unwatch();
          controller.close();
          return;
        }
        controller.enqueue(value);
      } catch (error3) {
        unwatch();
        controller.error(error3);
      }
    },
    cancel(reason) {
      unwatch();
      return reader.cancel(signal.aborted ? abortReason(signal) : reason);
    }
  });
}
__name(abortableStream, "abortableStream");
function encodeBody(codec, body, signal) {
  if (body instanceof ReadableStream) return signal ? abortableStream(body, signal) : body;
  if (body instanceof Blob) return body;
  return body === void 0 ? void 0 : new Uint8Array(wrapSqonError(() => codec.encode(body)));
}
__name(encodeBody, "encodeBody");
function setHeader(headers, name, value) {
  const lower = name.toLowerCase();
  const existing = Object.keys(headers).find((key) => key.toLowerCase() === lower);
  headers[existing ?? name] = value;
}
__name(setHeader, "setHeader");
var ExportPromise = class ExportPromise2 extends DispatchedPromise {
  static {
    __name(this, "ExportPromise");
  }
  #connection;
  #options;
  #raw;
  #abort;
  constructor(connection, options, raw$1, abort2 = {}) {
    super();
    this.#connection = connection;
    this.#options = options;
    this.#raw = raw$1;
    this.#abort = abort2;
  }
  /**
  * Configure the export to return the raw `Response` instead of
  * a SurrealQL string. This is useful when you may receive a
  * large amount of data and need to handle the response stream
  * directly.
  *
  * The signal of the export, and its request timeout, keep governing the response after it has
  * been returned: when either fires, reading its body fails with the reason.
  */
  raw() {
    return new ExportPromise2(this.#connection, this.#options, true, this.#abort);
  }
  /**
  * Configure the export to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, nothing is requested. If it aborts later, the export
  * stops and fails with the `reason` of the signal, as it is, and the response stream is
  * cancelled so that nothing keeps downloading. Whether the server stops generating the export
  * is up to the server. Can be called more than once: the export is abandoned when any of the
  * signals aborts. See `Query.signal()`.
  *
  * @param signal The signal which abandons the export. Without one, nothing changes.
  */
  signal(signal) {
    return new ExportPromise2(this.#connection, this.#options, this.#raw, {
      ...this.#abort,
      signals: addSignal(this.#abort.signals, signal)
    });
  }
  /**
  * Configure how long to allow the whole of the export, including the download, in
  * milliseconds, before giving up on it with a `TimeoutError`.
  *
  * Unlike for queries there is no default from the connection: an export is long running and
  * streamed, so a limit meant for queries would cut it short. Only a limit given here applies.
  * See `Query.requestTimeout()`.
  *
  * @param milliseconds The time to allow, or `0` for no limit.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new ExportPromise2(this.#connection, this.#options, this.#raw, {
      ...this.#abort,
      requestTimeout: milliseconds
    });
  }
  /**
  * Run this export as a different identity than the one of the connection, for this export
  * only: it is what the server lets that identity export. The connection is neither
  * authenticated, changed, or looked at, and the credential of the connection is not resolved.
  * See `Query.as()`.
  *
  * Pass an access token, or the authentication details accepted by `signin()`, which are
  * exchanged for a token first. Only engines which present credentials with every request
  * support this, which is the HTTP engine: other engines reject the export with an
  * `UnsupportedFeatureError` rather than run it as the connection.
  *
  * @param credential An access token or authentication details to run this export as
  */
  as(credential) {
    assertCredential(credential);
    return new ExportPromise2(this.#connection, this.#options, this.#raw, {
      ...this.#abort,
      credential
    });
  }
  /**
  * Configure a callback to be told how much of the export has been received, each time more of
  * it has been.
  *
  * The server streams an export as it generates it, without saying how large it will be, so the
  * total is not known. Of a raw export, what is reported is what has been read of its body. An
  * embedded engine generates the whole export before handing it over, all at once. Replaces a
  * callback configured before.
  *
  * @param callback Called with the bytes received so far
  */
  progress(callback) {
    return new ExportPromise2(this.#connection, this.#options, this.#raw, {
      ...this.#abort,
      progress: callback
    });
  }
  async dispatch() {
    const scope = abortScope(this.#abort.signals ?? [], this.#abort.requestTimeout);
    try {
      throwIfAborted(scope.signal);
      await raceAbort(this.#connection.ready(), scope.signal);
      if (this.#raw) this.#connection.assertFeature(Features.ExportImportRaw);
      const { credential } = this.#abort;
      const request = scope.signal && { signal: scope.signal };
      const result = await raceAbort(credential === void 0 ? this.#connection.exportSql(this.#options, request) : this.#connection.exportSqlAs(this.#options, {
        ...request,
        credential
      }), scope.signal, (late) => {
        if (typeof late !== "string") releaseResponse(late);
      });
      if (typeof result === "string") return result;
      const response = countResponse(result, this.#abort.progress);
      if (this.#raw) return response;
      return await readText(response, scope.signal);
    } finally {
      if (!this.#raw) scope.dispose();
    }
  }
};
var ExportModelPromise = class ExportModelPromise2 extends DispatchedPromise {
  static {
    __name(this, "ExportModelPromise");
  }
  #connection;
  #options;
  #raw;
  #abort;
  constructor(connection, options, raw$1, abort2 = {}) {
    super();
    this.#connection = connection;
    this.#options = options;
    this.#raw = raw$1;
    this.#abort = abort2;
  }
  /**
  * Configure the export to return the raw `Response` instead of
  * a `Uint8Array`. This is useful when you may receive a large
  * amount of data and need to handle the response stream directly.
  *
  * The signal of the export, and its request timeout, keep governing the response after it has
  * been returned: when either fires, reading its body fails with the reason.
  */
  raw() {
    return new ExportModelPromise2(this.#connection, this.#options, true, this.#abort);
  }
  /**
  * Configure the export to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, nothing is requested. If it aborts later, the export
  * stops and fails with the `reason` of the signal, as it is, and the response stream is
  * cancelled so that nothing keeps downloading. Can be called more than once: the export is
  * abandoned when any of the signals aborts. See `Query.signal()`.
  *
  * @param signal The signal which abandons the export. Without one, nothing changes.
  */
  signal(signal) {
    return new ExportModelPromise2(this.#connection, this.#options, this.#raw, {
      ...this.#abort,
      signals: addSignal(this.#abort.signals, signal)
    });
  }
  /**
  * Configure how long to allow the whole of the export, including the download, in
  * milliseconds, before giving up on it with a `TimeoutError`.
  *
  * Unlike for queries there is no default from the connection, so only a limit given here
  * applies. See `Query.requestTimeout()`.
  *
  * @param milliseconds The time to allow, or `0` for no limit.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new ExportModelPromise2(this.#connection, this.#options, this.#raw, {
      ...this.#abort,
      requestTimeout: milliseconds
    });
  }
  /**
  * Run this export as a different identity than the one of the connection, for this export
  * only. See `ExportPromise.as()`.
  *
  * @param credential An access token or authentication details to run this export as
  */
  as(credential) {
    assertCredential(credential);
    return new ExportModelPromise2(this.#connection, this.#options, this.#raw, {
      ...this.#abort,
      credential
    });
  }
  /**
  * Configure a callback to be told how much of the model has been received, each time more of it
  * has been. See `ExportPromise.progress()`.
  *
  * @param callback Called with the bytes received so far, and the total when it is known
  */
  progress(callback) {
    return new ExportModelPromise2(this.#connection, this.#options, this.#raw, {
      ...this.#abort,
      progress: callback
    });
  }
  async dispatch() {
    const scope = abortScope(this.#abort.signals ?? [], this.#abort.requestTimeout);
    try {
      throwIfAborted(scope.signal);
      await raceAbort(this.#connection.ready(), scope.signal);
      this.#connection.assertFeature(Features.SurrealML);
      if (this.#raw) this.#connection.assertFeature(Features.ExportImportRaw);
      const { credential } = this.#abort;
      const request = scope.signal && { signal: scope.signal };
      const result = await raceAbort(credential === void 0 ? this.#connection.exportMlModel(this.#options, request) : this.#connection.exportMlModelAs(this.#options, {
        ...request,
        credential
      }), scope.signal, (late) => {
        if (!(late instanceof Uint8Array)) releaseResponse(late);
      });
      if (result instanceof Uint8Array) return result;
      const response = countResponse(result, this.#abort.progress);
      if (this.#raw) return response;
      return await readBytes(response, scope.signal);
    } finally {
      if (!this.#raw) scope.dispose();
    }
  }
};
var ImportPromise = class ImportPromise2 extends DispatchedPromise {
  static {
    __name(this, "ImportPromise");
  }
  #connection;
  #input;
  #abort;
  constructor(connection, input, abort2 = {}) {
    super();
    this.#connection = connection;
    this.#input = input;
    this.#abort = abort2;
  }
  /**
  * Configure the import to be abandoned when a signal aborts.
  *
  * If the signal has already aborted, nothing is sent. If it aborts later, the import stops
  * waiting and fails with the `reason` of the signal, as it is. A stream being uploaded is
  * cancelled with the same reason, so that nothing keeps reading from it.
  *
  * Aborting stops the upload and the waiting, and nothing more: if the server had received the
  * whole import and begun executing it, it may carry on, and **the import may or may not have been
  * applied**. Can be called more than once: the import is abandoned when any of the signals
  * aborts. See `Query.signal()`.
  *
  * @param signal The signal which abandons the import. Without one, nothing changes.
  */
  signal(signal) {
    return new ImportPromise2(this.#connection, this.#input, {
      ...this.#abort,
      signals: addSignal(this.#abort.signals, signal)
    });
  }
  /**
  * Configure how long to allow the whole of the import, including the upload, in
  * milliseconds, before giving up on it with a `TimeoutError`.
  *
  * Unlike for queries there is no default from the connection: an import is long running and
  * may be streamed, so a limit meant for queries would cut it short. Only a limit given here
  * applies. As for a signal, the import may or may not have been applied when it expires. See
  * `Query.requestTimeout()`.
  *
  * @param milliseconds The time to allow, or `0` for no limit.
  */
  requestTimeout(milliseconds) {
    assertTimeout(milliseconds, "requestTimeout");
    return new ImportPromise2(this.#connection, this.#input, {
      ...this.#abort,
      requestTimeout: milliseconds
    });
  }
  /**
  * Run this import as a different identity than the one of the connection, for this import
  * only. The connection is neither authenticated, changed, or looked at, and the credential
  * of the connection is not resolved. See `Query.as()`.
  *
  * Pass an access token, or the authentication details accepted by `signin()`, which are
  * exchanged for a token first. Only engines which present credentials with every request
  * support this, which is the HTTP engine: other engines reject the import with an
  * `UnsupportedFeatureError` rather than run it as the connection. A stream is uploaded once
  * and never sent again, so a token which the server refuses fails the import.
  *
  * @param credential An access token or authentication details to run this import as
  */
  as(credential) {
    assertCredential(credential);
    return new ImportPromise2(this.#connection, this.#input, {
      ...this.#abort,
      credential
    });
  }
  /**
  * Configure a callback to be told how much of the import has been uploaded, each time more of
  * it has been.
  *
  * The server executes an import as it reads it, so what has been uploaded is close behind what
  * has been applied. Once all of it has been, the import waits for the server to finish the last
  * of it. The total is known for a string or a `Blob`, and not for a stream.
  *
  * Progress is reported by the HTTP and WebSocket engines, which upload an import. In a browser,
  * which cannot follow the upload of a string or a `Blob` with `fetch`, it is followed with
  * `XMLHttpRequest`, except on a connection given a `fetchImpl` or one which resolves a
  * credential for each request, which report nothing for them. Embedded engines apply an import
  * in one call and report nothing. Replaces a callback configured before.
  *
  * @param callback Called with the bytes uploaded so far, and the total when it is known
  */
  progress(callback) {
    return new ImportPromise2(this.#connection, this.#input, {
      ...this.#abort,
      progress: callback
    });
  }
  async dispatch() {
    const scope = abortScope(this.#abort.signals ?? [], this.#abort.requestTimeout);
    try {
      throwIfAborted(scope.signal);
      await raceAbort(this.#connection.ready(), scope.signal);
      const { credential, progress } = this.#abort;
      const request = {
        signal: scope.signal,
        uploadProgress: progress && reportProgress(progress)
      };
      await raceAbort(credential === void 0 ? this.#connection.importSql(this.#input, request) : this.#connection.importSqlAs(this.#input, {
        ...request,
        credential
      }), scope.signal);
    } finally {
      scope.dispose();
    }
  }
};
var WHITESPACE = /\s/;
var WORD_START = /[A-Za-z_]/;
var WORD_PART = /[A-Za-z0-9_]/;
var LINE_BREAKS = /* @__PURE__ */ new Set([
  10,
  13,
  8232,
  8233
]);
function skipQuoted(source, start, close2) {
  let i = start + 1;
  while (i < source.length) {
    const char = source[i];
    if (char === "\\") i += 2;
    else if (char === close2) return i + 1;
    else i++;
  }
  return source.length;
}
__name(skipQuoted, "skipQuoted");
function skipLine(source, start) {
  let i = start;
  while (i < source.length && !LINE_BREAKS.has(source.charCodeAt(i))) i++;
  return i;
}
__name(skipLine, "skipLine");
function scanStatements(source) {
  const statements = [];
  let current;
  let depth = 0;
  let i = 0;
  const begin = /* @__PURE__ */ __name((keyword) => {
    current ??= keyword;
  }, "begin");
  while (i < source.length) {
    const char = source[i];
    if (WHITESPACE.test(char)) i++;
    else if (char === "#" || char === "-" && source[i + 1] === "-" || char === "/" && source[i + 1] === "/") i = skipLine(source, i);
    else if (char === "/" && source[i + 1] === "*") {
      const end = source.indexOf("*/", i + 2);
      i = end === -1 ? source.length : end + 2;
    } else if (char === "'" || char === '"' || char === "`") {
      begin("");
      i = skipQuoted(source, i, char);
    } else if (char === "\u27E8") {
      begin("");
      i = skipQuoted(source, i, "\u27E9");
    } else if (char === ";" && depth === 0) {
      if (current !== void 0) statements.push(current);
      current = void 0;
      i++;
    } else if (char === "{" || char === "(" || char === "[") {
      begin("");
      depth++;
      i++;
    } else if (char === "}" || char === ")" || char === "]") {
      depth = Math.max(0, depth - 1);
      i++;
    } else if (current === void 0 && WORD_START.test(char)) {
      const start = i;
      while (i < source.length && WORD_PART.test(source[i])) i++;
      begin(source.slice(start, i).toUpperCase());
    } else {
      begin("");
      i++;
    }
  }
  if (current !== void 0) statements.push(current);
  return statements;
}
__name(scanStatements, "scanStatements");
var SEPARATOR = "\n;\n";
function describe(input) {
  if (input === null) return "null";
  if (typeof input === "object") return input.constructor?.name ?? "an object";
  return typeof input;
}
__name(describe, "describe");
function isCompilable(input) {
  return typeof input === "object" && input !== null && typeof input.compile === "function";
}
__name(isCompilable, "isCompilable");
function hasInner(input) {
  return typeof input === "object" && input !== null && "inner" in input && input.inner instanceof BoundQuery;
}
__name(hasInner, "hasInner");
function toBoundQuery(input, index, name) {
  let query;
  if (typeof input === "string") query = new BoundQuery(input);
  else if (input instanceof BoundQuery) query = input;
  else if (hasInner(input)) query = input.inner;
  else if (input instanceof ManagedLivePromise) throw new ExpressionError(`${name}[${index}] is a live query, which cannot be combined with other queries. Use live() instead`);
  else if (isCompilable(input)) {
    query = input.compile();
    if (!(query instanceof BoundQuery)) throw new ExpressionError(`${name}[${index}].compile() did not return a BoundQuery`);
  } else throw new ExpressionError(`${name}[${index}] is not a query: expected a string, a BoundQuery, a query builder or a Query, but received ${describe(input)}`);
  if (isCredentialed(query)) throw new ExpressionError(`${name}[${index}] runs as another identity with .as(), which cannot be combined with other queries. Call .as() on the combined query instead`);
  if (query.query.trim() === "") throw new ExpressionError(`${name}[${index}] is empty`);
  return query;
}
__name(toBoundQuery, "toBoundQuery");
function resolveQueries(inputs, name = "queries") {
  if (!Array.isArray(inputs)) throw new ExpressionError(`${name} must be an array of queries`);
  return inputs.map((input, index) => toBoundQuery(input, index, name));
}
__name(resolveQueries, "resolveQueries");
function joinQueries(queries, name = "queries") {
  const bindings = {};
  const owners = /* @__PURE__ */ new Map();
  const parts = [];
  for (const [index, query] of queries.entries()) {
    for (const [key, value] of Object.entries(query.bindings)) {
      const owner = owners.get(key);
      if (owner !== void 0) throw new ExpressionError(`Parameter conflict: '$${key}' is bound by both ${name}[${owner}] and ${name}[${index}]. Each query needs its own parameter names, which the surql template tag generates for you`);
      owners.set(key, index);
      bindings[key] = value;
    }
    parts.push(query.query);
  }
  return new BoundQuery(parts.join(SEPARATOR), bindings);
}
__name(joinQueries, "joinQueries");
function composeQueries(inputs) {
  return joinQueries(resolveQueries(inputs));
}
__name(composeQueries, "composeQueries");
var TRANSACTION_CONTROL = /* @__PURE__ */ new Set([
  "BEGIN",
  "COMMIT",
  "CANCEL"
]);
function assertTransactionSafe(queries, name = "queries", { returnReplacesResults = false } = {}) {
  let returned;
  for (const [index, query] of queries.entries()) for (const keyword of scanStatements(query.query)) {
    if (TRANSACTION_CONTROL.has(keyword)) throw new ExpressionError(`${name}[${index}] contains a ${keyword} statement. transaction() wraps the queries in BEGIN and COMMIT itself, so they must not contain any`);
    if (keyword === "RETURN" && returnReplacesResults) throw new ExpressionError(`${name}[${index}] contains a RETURN statement. On SurrealDB before 3.0 a RETURN in a transaction replaces the results of the statements before it, so the results could no longer be matched to the queries. Use SELECT or a bare expression instead`);
    if (returned !== void 0) throw new ExpressionError(`${name}[${returned}] contains a RETURN statement which is followed by another statement (in ${name}[${index}]). Inside a transaction RETURN ends it early: the statements after it would be skipped but the transaction would still commit. Use SELECT or a bare expression instead, or move the RETURN to the end`);
    if (keyword === "RETURN") returned = index;
  }
}
__name(assertTransactionSafe, "assertTransactionSafe");
var SurrealQueryable = class {
  static {
    __name(this, "SurrealQueryable");
  }
  #connection;
  #transaction;
  #session;
  #signals;
  constructor(connection, session, transaction, signals2) {
    this.#connection = connection;
    this.#session = session;
    this.#transaction = transaction;
    this.#signals = signals2;
  }
  /**
  * Access user defined APIs defined on the database.
  *
  * Path types can be passed to this method in order to
  * provide type safety when invoking APIs.
  *
  * An optional prefix can be provided to prepend to API paths.
  *
  * @example
  * ```ts
  * type MyPaths = {
  *     "/users": { get: [void, User[]] };
  *     [K: `/users/${number}`]: { get: [void, User] };
  * };
  *
  * // Type-safe path and response
  * const api = db.api<MyPaths>();
  * api.get("/users"); // User[]
  *
  * // Prefix to invoke GET /users/:id
  * const usersApi = db.api<MyPaths>("/users");
  * api.get(userId); // User
  * ```
  *
  * @param prefix An optional path prefix to prepend to API paths.
  * @returns A new `SurrealApi` instance.
  */
  api(prefix) {
    return new SurrealApi(this.#connection, this.#session, this.#transaction, prefix, this.#signals);
  }
  query(query, bindings) {
    let bound;
    if (Array.isArray(query)) bound = composeQueries(query);
    else if (query instanceof BoundQuery) bound = query;
    else bound = new BoundQuery(query, bindings);
    return new Query(this.#connection, {
      query: bound,
      transaction: this.#transaction,
      session: this.#session,
      json: false,
      signals: this.#signals
    });
  }
  /**
  * Runs an ISO GQL (ISO/IEC 39075) query against the database.
  *
  * GQL is the standardized graph query language. Unlike {@link query}, the
  * provided string is executed by the server's GQL engine rather than the
  * SurrealQL engine. The resulting `Query` instance behaves identically to a
  * SurrealQL query: await it (or use `.collect()`, `.stream()`, `.responses()`)
  * to process the results.
  *
  * A namespace and database must be selected before running a GQL query.
  *
  * @example
  * ```ts
  * const [people] = await db.gql("MATCH (p:person) RETURN p.name AS name");
  * ```
  *
  * @param query The GQL query string
  * @param bindings Assigns variables which can be referenced in the query
  * @returns A `Query` instance which can be used to execute or configure the query
  */
  gql(query, bindings) {
    return new Query(this.#connection, {
      query: new BoundQuery(query, bindings),
      transaction: this.#transaction,
      session: this.#session,
      json: false,
      dialect: "gql"
    });
  }
  /**
  * Returns the record representing the currently authenticated record user by
  * selecting the [$auth parameter](https://surrealdb.com/docs/surrealql/parameters#auth).
  *
  * Make sure the user actually has the permission to select their own record, otherwise you'll get back an empty result
  *
  * @return The record linked to the record ID used for authentication
  */
  auth() {
    return new AuthPromise(this.#connection, {
      transaction: this.#transaction,
      session: this.#session,
      json: false,
      signals: this.#signals
    });
  }
  /**
  * Create a new managed live query subscription to a table, record ID, or record ID range.
  *
  * Unlike `liveOf()`, which attaches to an already existing live query UUID, `live()` automatically
  * registers the `LIVE SELECT` statement on SurrealDB, tracks the live query UUID, and transparently
  * handles re-establishing the subscription across connection drops.
  *
  * When called on a view made with `withSignal()`, the subscription is killed when the signal
  * aborts: iteration ends, `isAlive` turns false, and the live query is killed on the server.
  * See `SurrealRequestScope`.
  *
  * @see {@link liveOf} for attaching an unmanaged subscriber to an existing live query ID.
  * @param what The table, record ID, or record ID range to subscribe to
  * @returns A new managed live subscription object
  */
  live(what) {
    return new ManagedLivePromise(this.#connection, {
      what,
      session: this.#session,
      signals: this.#signals
    });
  }
  /**
  * Manually subscribe to an existing live query using its UUID.
  *
  * **NOTE:** This function is for use with live queries that are not managed by the driver,
  * such as those created directly via raw SurrealQL (`db.query("LIVE SELECT ...")`) or an
  * external service. Unlike `live()`, this does not create the live query on the database or
  * re-establish it on reconnection.
  *
  * When called on a view made with `withSignal()`, the live query is killed on the server when the
  * signal aborts, as `kill()` would, and a signal which has aborted already subscribes to nothing.
  *
  * @see {@link live} for automatic, driver-managed live queries with reconnect support.
  * @param id The UUID of the existing live query to subscribe to
  * @returns A new unmanaged live subscription object
  */
  liveOf(id$1) {
    return new UnmanagedLivePromise(this.#connection, {
      id: id$1,
      session: this.#session,
      signals: this.#signals
    });
  }
  select(what) {
    return new SelectPromise(this.#connection, {
      what,
      transaction: this.#transaction,
      session: this.#session,
      json: false,
      signals: this.#signals
    });
  }
  create(what) {
    return new CreatePromise(this.#connection, {
      what,
      transaction: this.#transaction,
      session: this.#session,
      json: false,
      signals: this.#signals
    });
  }
  relate(from, what, to, data) {
    return new RelatePromise(this.#connection, {
      from,
      what,
      to,
      data,
      transaction: this.#transaction,
      session: this.#session,
      json: false,
      signals: this.#signals
    });
  }
  insert(arg1, arg2) {
    if (arg1 instanceof _Table) return new InsertPromise(this.#connection, {
      table: arg1,
      what: arg2 ?? [],
      transaction: this.#transaction,
      session: this.#session,
      json: false,
      signals: this.#signals
    });
    return new InsertPromise(this.#connection, {
      table: void 0,
      what: arg1,
      transaction: this.#transaction,
      session: this.#session,
      json: false,
      signals: this.#signals
    });
  }
  update(what) {
    return new UpdatePromise(this.#connection, {
      what,
      transaction: this.#transaction,
      session: this.#session,
      json: false,
      signals: this.#signals
    });
  }
  upsert(what) {
    return new UpsertPromise(this.#connection, {
      what,
      transaction: this.#transaction,
      session: this.#session,
      json: false,
      signals: this.#signals
    });
  }
  delete(what) {
    return new DeletePromise(this.#connection, {
      what,
      output: "before",
      transaction: this.#transaction,
      session: this.#session,
      json: false,
      signals: this.#signals
    });
  }
  run(name, arg2, arg3) {
    if (typeof arg2 === "string") return new RunPromise(this.#connection, {
      name,
      version: arg2,
      args: arg3 ?? [],
      transaction: this.#transaction,
      session: this.#session,
      json: false,
      signals: this.#signals
    });
    return new RunPromise(this.#connection, {
      name,
      version: void 0,
      args: arg2 ?? [],
      transaction: this.#transaction,
      session: this.#session,
      json: false,
      signals: this.#signals
    });
  }
};
var MODERN_TRANSACTIONS_SINCE = "3.0.0";
function isModernTransaction(version3) {
  return version3 === void 0 || isVersionSupported(version3, MODERN_TRANSACTIONS_SINCE);
}
__name(isModernTransaction, "isModernTransaction");
function unwrapResults(responses, version3) {
  const control = isModernTransaction(version3) ? 1 : 0;
  if (responses.length < control * 2) throw new UnexpectedServerResponseError(`Expected the transaction to report BEGIN and COMMIT, but it reported ${responses.length} results`);
  const results = [];
  for (let index = control; index < responses.length - control; index++) {
    const response = responses[index];
    if (!response?.success) throw new UnexpectedServerResponseError(`Statement ${index - control} of the transaction did not report a result`);
    results.push(response.result);
  }
  return results;
}
__name(unwrapResults, "unwrapResults");
function wrapInTransaction(body) {
  return new BoundQuery(`BEGIN;
${body.query}
;
COMMIT;`, body.bindings);
}
__name(wrapInTransaction, "wrapInTransaction");
async function executeTransaction(connection, session, queries, options = {}, signals2) {
  if (options.requestTimeout !== void 0) assertTimeout(options.requestTimeout, "requestTimeout");
  if (options.as !== void 0) assertCredential(options.as);
  const all = addSignal(signals2, options.signal);
  const scope = abortScope(all ?? []);
  try {
    throwIfAborted(scope.signal);
    const resolved = resolveQueries(queries);
    if (resolved.length === 0) return [];
    await raceAbort(connection.ready(), scope.signal);
    assertTransactionSafe(resolved, "queries", { returnReplacesResults: !isModernTransaction(connection.serverVersion) });
    const query = new Query(connection, {
      query: wrapInTransaction(joinQueries(resolved)),
      transaction: void 0,
      session,
      json: false,
      signals: all,
      requestTimeout: options.requestTimeout,
      credential: options.as
    });
    const context2 = new RetryContext(RetryContext.mergeOptions(options.retry, connection.retry), scope.signal);
    return await context2.run(async () => {
      const responses = await query.responses();
      const cause = findRootCause(responses.flatMap((r$1) => r$1 && !r$1.success ? [r$1.error] : []));
      if (cause) throw cause;
      return unwrapResults(responses, connection.serverVersion);
    });
  } finally {
    scope.dispose();
  }
}
__name(executeTransaction, "executeTransaction");
var SurrealTransaction = class SurrealTransaction2 extends SurrealQueryable {
  static {
    __name(this, "SurrealTransaction");
  }
  #connection;
  #session;
  #transaction;
  #signals;
  constructor(connection, session, transaction, signals2) {
    super(connection, session, transaction, signals2);
    this.#connection = connection;
    this.#session = session;
    this.#transaction = transaction;
    this.#signals = signals2;
  }
  /**
  * Create a handle on this same transaction in which every query is also bound to a signal.
  *
  * The handle commits and cancels the transaction just as this one does. Only queries are bound
  * to the signal: `commit()` and `cancel()` are not, so a request which is being abandoned cannot
  * leave the outcome of a commit in doubt. See `SurrealRequestScope`.
  *
  * @param signal The signal to add. Without one, the handle is bound to the same signals as this.
  */
  withSignal(signal) {
    return new SurrealTransaction2(this.#connection, this.#session, this.#transaction, addSignal(this.#signals, signal));
  }
  /**
  * Commit this transaction to the datastore.
  */
  commit() {
    if (!this.#connection) throw new ConnectionUnavailableError();
    return this.#connection.commit(this.#transaction, this.#session);
  }
  /**
  * Cancel and discard the changes made in this transaction.
  */
  cancel() {
    if (!this.#connection) throw new ConnectionUnavailableError();
    return this.#connection.cancel(this.#transaction, this.#session);
  }
};
var SurrealRequestScope = class SurrealRequestScope2 extends SurrealQueryable {
  static {
    __name(this, "SurrealRequestScope");
  }
  #connection;
  #session;
  #signals;
  constructor(connection, session, signals2) {
    super(connection, session, void 0, signals2);
    this.#connection = connection;
    this.#session = session;
    this.#signals = signals2;
  }
  /**
  * Create a view of the same session in which everything is bound to a further signal as well.
  * The view is abandoned when this scope's signals abort, or the one given.
  *
  * @param signal The signal to add. Without one, the view is bound to the same signals as this.
  */
  withSignal(signal) {
    return new SurrealRequestScope2(this.#connection, this.#session, addSignal(this.#signals, signal) ?? []);
  }
  /**
  * Import an existing export into the database, abandoned when the signals of this scope abort.
  * See `Surreal.import()`.
  *
  * Like on `Surreal`, this acts on the connection and its default session: it does not use the
  * namespace, database or authentication of a session this scope was made from.
  *
  * @param input The data to import
  */
  import(input) {
    return new ImportPromise(this.#connection, input, { signals: this.#signals });
  }
  /**
  * Export the database as SurrealQL, abandoned when the signals of this scope abort. See
  * `Surreal.export()`, and the note on `import()` about sessions.
  *
  * @param options Optional export options
  */
  export(options) {
    return new ExportPromise(this.#connection, options ?? {}, false, { signals: this.#signals });
  }
  /**
  * Export a SurrealML model, abandoned when the signals of this scope abort. See
  * `Surreal.exportModel()`, and the note on `import()` about sessions.
  *
  * @param name The name of the ML model to export
  * @param version The version of the ML model to export
  */
  exportModel(name, version3) {
    return new ExportModelPromise(this.#connection, {
      name,
      version: version3
    }, false, { signals: this.#signals });
  }
  async transaction(queries, options) {
    if (!Array.isArray(queries)) throw new ExpressionError("transaction() expects an array of queries");
    return executeTransaction(this.#connection, this.#session, queries, options, this.#signals);
  }
  /**
  * Start a transaction on the session, bound to the signals of this scope. Every query made in
  * the transaction is abandoned when they abort, and a transaction which is abandoned
  * before it is committed is not applied.
  *
  * Starting it is itself abandoned if the signal aborts first, in which case the transaction
  * which may already have begun on the server is cancelled. Committing is not: once a request
  * has decided to commit, a signal does not leave the outcome in doubt.
  *
  * @returns A new transaction instance
  */
  async beginTransaction() {
    const scope = abortScope(this.#signals);
    try {
      throwIfAborted(scope.signal);
      const id$1 = await raceAbort(this.#connection.begin(this.#session), scope.signal, (late) => {
        this.#connection.cancel(late, this.#session).catch(() => {
        });
      });
      return new SurrealTransaction(this.#connection, this.#session, id$1, this.#signals);
    } finally {
      scope.dispose();
    }
  }
};
var SurrealSession = class SurrealSession2 extends SurrealQueryable {
  static {
    __name(this, "SurrealSession");
  }
  #publisher = new Publisher();
  #connection;
  #session;
  #unsubAuth;
  #unsubUsing;
  subscribe(event, listener) {
    return this.#publisher.subscribe(event, listener);
  }
  constructor(connection, session) {
    super(connection, session);
    this.#connection = connection;
    this.#session = session;
    this.#unsubAuth = connection.subscribe("auth", (auth, session$1) => {
      if (session$1 === this.#session) this.#publisher.publish("auth", auth);
    });
    this.#unsubUsing = connection.subscribe("using", (using, session$1) => {
      if (session$1 === this.#session) this.#publisher.publish("using", using);
    });
  }
  /**
  * Returns the selected namespace
  */
  get namespace() {
    return this.#connection.getSession(this.#session).namespace;
  }
  /**
  * Returns the selected database
  */
  get database() {
    return this.#connection.getSession(this.#session).database;
  }
  /**
  * Returns the current authentication access token
  */
  get accessToken() {
    return this.#connection.getSession(this.#session).accessToken;
  }
  /**
  * Returns the parameters currently defined on the session
  */
  get parameters() {
    return this.#connection.getSession(this.#session).variables ?? {};
  }
  /**
  * Returns the ID of the current session. For the default session, undefined is returned.
  */
  get session() {
    return this.#session;
  }
  /**
  * Returns whether the session is valid and can be used. This is always true for the default session,
  * however for other sessions it will be false after the session has been disposed.
  */
  get isValid() {
    return this.#connection.hasSession(this.#session);
  }
  /**
  * Create a new session by cloning the current session and return a new `SurrealSession` instance scoped to it.
  *
  * This session will contain its own copy of global variables, namespace, database, and authentication state.
  * Connection related functions and event subscriptions will be shared with the original session. When the
  * connection reconnects, the session will be automatically restored.
  *
  * You can invoke `reset()` on the created session to destroy it, after which it cannot be used again.
  *
  * The following properties are inherited by the new session:
  * - namespace
  * - database
  * - variables
  * - authentication state
  *
  * @returns The new session
  */
  async forkSession() {
    const created = await this.#connection.createSession(this.#session);
    return SurrealSession2.of(this, created);
  }
  /**
  * Closes the current session and disposes of it. After this method is called, the session cannot be used again,
  * and `isValid` will return `false`.
  */
  async closeSession() {
    await this.#connection.destroySession(this.#session);
    this.#unsubAuth();
    this.#unsubUsing();
  }
  [Symbol.asyncDispose]() {
    return this.closeSession();
  }
  /**
  * Create a view of this session in which every query is bound to an `AbortSignal`, which is how
  * the work of a request handler is tied to the signal of the request without passing it to every
  * call. A query made through the view is abandoned when the signal aborts, as if `.signal()` had
  * been called on it, and a signal given to `.signal()` in addition is combined with this one.
  *
  * The view offers the same query methods as the session and `beginTransaction()`, whose
  * transactions are bound to the signal too. It shares this session and does not change it, so one
  * can be made per request on a connection which is shared between requests.
  *
  * Aborting stops waiting and does not undo anything: the server may carry on, and a write which
  * was sent before the signal aborted may or may not have been applied.
  *
  * @example
  * ```ts
  * // Cloudflare Workers, Next.js route handlers, Hono: the request has a signal
  * const scoped = db.withSignal(request.signal);
  * const people = await scoped.select(new Table("person"));
  * ```
  *
  * @param signal The signal which abandons the work. Without one, the view is not bound to any.
  * @returns A view of this session bound to the signal
  */
  withSignal(signal) {
    return new SurrealRequestScope(this.#connection, this.#session, signal ? [signal] : []);
  }
  /**
  * Create a new transaction scoped to the current session. Transactions allow you to execute
  * multiple queries atomically. When the desired queries have been executed, call `commit()` to apply the changes to the database.
  * If the transaction is no longer needed, call `cancel()` to discard the changes.
  *
  * @returns A new transaction instance
  */
  async beginTransaction() {
    const transactionId = await this.#connection.begin(this.#session);
    return new SurrealTransaction(this.#connection, this.#session, transactionId);
  }
  async transaction(queries, options) {
    if (!Array.isArray(queries)) throw new ExpressionError("transaction() expects an array of queries");
    return executeTransaction(this.#connection, this.#session, queries, options);
  }
  /**
  * Switch to the specified {@link https://surrealdb.com/docs/surrealdb/introduction/concepts/namespace|namespace}
  * and {@link https://surrealdb.com/docs/surrealdb/introduction/concepts/database|database}
  *
  * Leaving the namespace or database undefined will leave the current namespace or database unchanged,
  * while passing null will unset the selected namespace or database.
  *
  * @param database Switches to a specific namespace
  * @param db Switches to a specific database
  * @returns The newly selected namespace and database
  */
  async use(what) {
    return await this.#connection.use(what ?? {}, this.#session);
  }
  /**
  * Sign up to the SurrealDB instance as a new
  * {@link https://surrealdb.com/docs/surrealdb/security/authentication#record-users|record user}.
  *
  * When this method is called, the `authentication` property passed to `connect()`
  * will be ignored. You will be reponsible for handling session invalidation
  * by listening to the `auth` event.
  *
  * @param auth The authentication details to use.
  * @return The authentication tokens.
  */
  signup(auth) {
    return this.#connection.signup(auth, this.#session);
  }
  /**
  * Authenticate with the SurrealDB using the provided authentication details.
  *
  * When this method is called, the `authentication` property passed to `connect()`
  * will be ignored. You will be reponsible for handling session invalidation
  * by listening to the `auth` event.
  *
  * @param auth The authentication details to use.
  * @return The authentication tokens.
  */
  signin(auth) {
    return this.#connection.signin(auth, this.#session);
  }
  /**
  * Authenticates the current connection using an existing access token or
  * an access and refresh token combination.
  *
  * When authenticating with a refresh token, a new refresh token will be issued
  * and returned.
  *
  * When this method is called, the `authentication` property passed to `connect()`
  * will be ignored. You will be reponsible for handling session invalidation
  * by listening to the `auth` event.
  *
  * @param token The access token or access and refresh token combination.
  */
  async authenticate(token) {
    if (typeof token === "object" && token.refresh) return this.#connection.refresh(token, this.#session);
    const access3 = typeof token === "string" ? token : token.access;
    await this.#connection.authenticate(access3, this.#session);
    return { access: access3 };
  }
  /**
  * Revoke a refresh token, so that it can never again be exchanged for new tokens.
  *
  * Without arguments, the refresh token of this session is revoked. No session renews its
  * authentication with a revoked refresh token, including those forked from this one.
  * Revoking leaves the access token in place, and the session is then treated as one without a
  * refresh token: when the access token is about to expire, it is renewed with the
  * `authentication` option of `connect()` if that applies, and otherwise the session is
  * invalidated. Call `invalidate()` to sign out at once.
  *
  * Requires SurrealDB 3.0 or later.
  *
  * @param tokens The access and refresh token combination whose refresh token is revoked.
  * Defaults to the tokens of this session.
  */
  revoke(tokens) {
    return this.#connection.revoke(tokens, this.#session);
  }
  /**
  * Run PostgreSQL text on this session, with the namespace, database, variables and
  * authentication it has, as SurrealDB 4.0's `pgsql` method does. A positional parameter
  * (`$1`, `$2`) binds to the variable `_1`, `_2`, and so on.
  *
  * The answer holds one entry per SQL statement. A statement which fails is an `ERR` entry
  * carrying its SQLSTATE, and the call itself still succeeds. Over WebSocket a `BEGIN` entry
  * opens a transaction which later calls on this session run inside, until a `COMMIT` or
  * `ROLLBACK` entry; over HTTP use the `atomic` option instead.
  *
  * Requires SurrealDB 4.0 or later, on an instance which does not deny the method.
  *
  * @example
  * ```ts
  * const { statements } = await db.pgsql("SELECT name FROM person WHERE age > $1", { _1: 18 });
  * ```
  *
  * @param statements The text, or a batch of texts and `{ text, vars }` entries
  * @param vars Variables for every statement, over those of the session
  * @param options How to run the statements and shape the rows
  */
  pgsql(statements, vars, options) {
    return this.#connection.sql("pgsql", statements, vars, options, this.#session);
  }
  /**
  * Run MySQL text on this session, as SurrealDB 4.0's `mysql` method does. The n-th `?`
  * binds to the variable `_n`. `USE name` switches the database on the server, but not the
  * namespace and database this session tracks, so call `use()` to switch instead. See
  * `pgsql()` for the rest, which is the same.
  *
  * Requires SurrealDB 4.0 or later, on an instance which does not deny the method.
  *
  * @param statements The text, or a batch of texts and `{ text, vars }` entries
  * @param vars Variables for every statement, over those of the session
  * @param options How to run the statements and shape the rows
  */
  mysql(statements, vars, options) {
    return this.#connection.sql("mysql", statements, vars, options, this.#session);
  }
  /**
  * Define a global variable for the current socket connection
  *
  * @param key Specifies the name of the variable
  * @param val Assigns the value to the variable name
  */
  set(variable, value) {
    return this.#connection.set(variable, value, this.#session);
  }
  /**
  * Remove a variable from the current socket connection
  *
  * @param key Specifies the name of the variable.
  */
  unset(variable) {
    return this.#connection.unset(variable, this.#session);
  }
  /**
  * Invalidates the authentication for the current connection.
  */
  invalidate() {
    return this.#connection.invalidate(this.#session);
  }
  /**
  * Resets the current session to its initial state, clearing
  * authentication state, variables, and selected namespace/database.
  */
  async reset() {
    await this.#connection.reset(this.#session);
  }
  /**
  * Compose a new `SurrealSession` instance with the provided parent connection
  * and session ID.
  *
  * You likely won't need to use this method directly, but it can be useful when
  * you need to compose a new `SurrealSession` instance from an id.
  *
  * @param session The parent connection or session to reference
  * @param id The ID of the session
  * @returns A new `SurrealSession` representing the provided ID
  */
  static of(parent, id$1) {
    return new SurrealSession2(parent.#connection, id$1);
  }
};
function relayIterable(open3, tap = {}) {
  return { [Symbol.asyncIterator]() {
    let iterator;
    let starting;
    let closed = false;
    const start = /* @__PURE__ */ __name(() => {
      starting ??= (async () => {
        const source = await open3();
        const opened = source[Symbol.asyncIterator]();
        iterator = opened;
        return opened;
      })();
      return starting;
    }, "start");
    return {
      async next() {
        if (closed) return {
          done: true,
          value: void 0
        };
        try {
          const source = await start();
          if (closed) return {
            done: true,
            value: void 0
          };
          const result = await source.next();
          if (closed) return {
            done: true,
            value: void 0
          };
          if (result.done) {
            closed = true;
            tap.end?.();
          } else tap.value?.(result.value);
          return result;
        } catch (error3) {
          if (!closed) {
            closed = true;
            tap.end?.(error3);
          }
          throw error3;
        }
      },
      async return(value) {
        if (!closed) {
          closed = true;
          const source = iterator ?? await starting?.catch(() => void 0);
          await source?.return?.();
        }
        return {
          done: true,
          value
        };
      }
    };
  } };
}
__name(relayIterable, "relayIterable");
function buildRpcAuth(session, auth) {
  if ("key" in auth) {
    if (auth.database && !auth.namespace) throw new MissingNamespaceDatabaseError();
    const result$1 = {
      ac: auth.access,
      key: auth.key
    };
    if (auth.namespace) result$1.ns = auth.namespace;
    if (auth.database) result$1.db = auth.database;
    return result$1;
  }
  if ("variables" in auth) {
    const namespace$1 = auth.namespace ?? session.namespace;
    const database$1 = auth.database ?? session.database;
    if (!database$1 || !namespace$1) throw new MissingNamespaceDatabaseError();
    return {
      ...auth.variables,
      ac: auth.access,
      ns: namespace$1,
      db: database$1
    };
  }
  const access3 = "access" in auth ? auth.access : void 0;
  const namespace = "namespace" in auth ? auth.namespace : void 0;
  const database = "database" in auth ? auth.database : void 0;
  const result = {
    user: auth.username,
    pass: auth.password
  };
  if (database && !namespace) throw new MissingNamespaceDatabaseError();
  if (access3) result.ac = access3;
  if (namespace) result.ns = namespace;
  if (database) result.db = database;
  return result;
}
__name(buildRpcAuth, "buildRpcAuth");
var CBOR_PROTOCOL = "cbor";
var CBOR2_PROTOCOL = "cbor.2";
var SHAPED_PROTOCOL = "shaped";
var CBOR_MEDIA_TYPE = "application/cbor";
var CBOR2_MEDIA_TYPE = "application/cbor; v=2";
var SHAPED_MEDIA_TYPE = "application/vnd.surrealdb.shaped";
function cborProtocols(codecs) {
  return codecs.cbor2 ? [CBOR2_PROTOCOL, CBOR_PROTOCOL] : [CBOR_PROTOCOL];
}
__name(cborProtocols, "cborProtocols");
function isShapedMediaType(contentType) {
  return !!contentType && /^application\/vnd\.surrealdb\.shaped\s*(;|$)/i.test(contentType.trimStart());
}
__name(isShapedMediaType, "isShapedMediaType");
function isCbor2MediaType(contentType) {
  return !!contentType && /^application\/cbor\s*;(.*;)?\s*v\s*=\s*2\s*(;|$)/i.test(contentType);
}
__name(isCbor2MediaType, "isCbor2MediaType");
function cborCodec(codecs, cbor2) {
  if (!cbor2) return codecs.cbor;
  return codecs.cbor2 ?? codecs.shaped ?? codecs.cbor;
}
__name(cborCodec, "cborCodec");
function wireCodec(codecs, format) {
  if (codecs.shaped && (format === SHAPED_PROTOCOL || isShapedMediaType(format))) return codecs.shaped;
  return cborCodec(codecs, format === CBOR2_PROTOCOL || isCbor2MediaType(format));
}
__name(wireCodec, "wireCodec");
function getSessionFromState(state, session) {
  const sessionState = session ? state.sessions.get(session) : state.rootSession;
  if (!sessionState) throw new InvalidSessionError(session);
  return sessionState;
}
__name(getSessionFromState, "getSessionFromState");
var CODE_TO_KIND = {
  [-32700]: "Validation",
  [-32600]: "Validation",
  [-32601]: "NotFound",
  [-32602]: "NotAllowed",
  [-32603]: "Validation",
  [-32604]: "Configuration",
  [-32605]: "Configuration",
  [-32606]: "Configuration",
  [-32e3]: "Internal",
  [-32001]: "Connection",
  [-32002]: "NotAllowed",
  [-32003]: "Query",
  [-32004]: "Query",
  [-32005]: "Query",
  [-32009]: "Query",
  [-32006]: "Thrown",
  [-32007]: "Serialization",
  [-32008]: "Serialization"
};
function resolveKind(kind, code) {
  if (kind) return kind;
  if (code !== void 0) return CODE_TO_KIND[code] ?? "Internal";
  return "Internal";
}
__name(resolveKind, "resolveKind");
function parseCause(raw$1) {
  if (!raw$1) return void 0;
  const kind = resolveKind(raw$1.kind, void 0);
  return createServerError({
    kind,
    message: raw$1.message,
    details: raw$1.details,
    cause: parseCause(raw$1.cause) ?? null
  });
}
__name(parseCause, "parseCause");
function createServerError(options) {
  switch (options.kind) {
    case "Validation":
      return new ValidationError(options);
    case "Configuration":
      return new ConfigurationError(options);
    case "Thrown":
      return new ThrownError(options);
    case "Query":
      return new QueryError(options);
    case "Serialization":
      return new SerializationError(options);
    case "NotAllowed":
      return new NotAllowedError(options);
    case "NotFound":
      return new NotFoundError(options);
    case "AlreadyExists":
      return new AlreadyExistsError(options);
    case "Internal":
      return new InternalError(options);
    default:
      return new ServerError(options);
  }
}
__name(createServerError, "createServerError");
function parseRpcError(raw$1) {
  return createServerError({
    kind: resolveKind(raw$1.kind, raw$1.code),
    code: raw$1.code,
    message: raw$1.message,
    details: raw$1.details,
    cause: parseCause(raw$1.cause) ?? null
  });
}
__name(parseRpcError, "parseRpcError");
function parseQueryError(raw$1) {
  const kind = resolveKind(raw$1.kind, void 0);
  let details = raw$1.details;
  if (details && typeof details === "object" && details.kind === kind && "details" in details && typeof details.details === "object") details = details.details;
  return createServerError({
    kind,
    code: 0,
    message: raw$1.result,
    details,
    cause: parseCause(raw$1.cause) ?? null
  });
}
__name(parseQueryError, "parseQueryError");
var ShapeScopes = class {
  static {
    __name(this, "ShapeScopes");
  }
  #scopes = /* @__PURE__ */ new Map();
  /** The scope `key` names, started if this is the first block of it */
  get(key) {
    let scope = this.#scopes.get(key);
    if (!scope) {
      scope = new BlockReader();
      this.#scopes.set(key, scope);
    }
    return scope;
  }
  /** Ends the scope `key` names: its stream finished, or its live query was killed */
  end(key) {
    this.#scopes.delete(key);
  }
  /** Ends every scope, as a closed socket does */
  clear() {
    this.#scopes.clear();
  }
};
function resolveBlocks(value, codec, scope) {
  if (value instanceof ShapedBlock) return codec.rows(value, scope);
  if (Array.isArray(value)) {
    let changed = false;
    const out = value.map((item) => {
      const resolved = resolveBlocks(item, codec, scope);
      if (resolved !== item) changed = true;
      return resolved;
    });
    return changed ? out : value;
  }
  if (typeof value === "object" && value !== null && Object.getPrototypeOf(value) === Object.prototype) {
    let changed = false;
    const out = {};
    for (const [key, item] of Object.entries(value)) {
      const resolved = resolveBlocks(item, codec, scope);
      if (resolved !== item) changed = true;
      out[key] = resolved;
    }
    return changed ? out : value;
  }
  return value;
}
__name(resolveBlocks, "resolveBlocks");
function statsFromTime(time3) {
  return {
    bytesReceived: -1,
    bytesScanned: -1,
    recordsReceived: -1,
    recordsScanned: -1,
    duration: Duration.parseFloat(time3)
  };
}
__name(statsFromTime, "statsFromTime");
var IMPORT_REPORTS_FAILURES = "3.1.0";
var IMPORT_FAILED = 422;
var KEPT_FAILURES = 100;
var isApiStatus = /* @__PURE__ */ __name((status) => status >= 200 && status < 600, "isApiStatus");
var utf8 = new TextDecoder();
var RpcEngine = class {
  static {
    __name(this, "RpcEngine");
  }
  _context;
  _state;
  /** The version of the server, as `ready()` is told it */
  _version;
  constructor(context2) {
    this._context = context2;
  }
  /**
  * Invoke a custom API by running `api::invoke` as a query, which works wherever queries do,
  * inside a transaction as well. Engines which reach the server over HTTP override it with
  * `apiOverHttp()`, which needs no query access.
  */
  async api(path, request, session, txn, options) {
    const invocation = apiInvocation(path, request);
    for await (const chunk of this.query(invocation, session, txn, options)) {
      if (chunk.error) throw chunk.error;
      return chunk.result?.[0];
    }
    throw new UnexpectedServerResponseError(void 0);
  }
  /**
  * Invoke a custom API through the `/api/:namespace/:database` endpoint of the server, as the
  * session, or as the identity of the token when there is one. Unlike `api::invoke`, this is
  * allowed for those who may not run queries.
  */
  async apiOverHttp(path, request, session, options, token) {
    const state = this._state;
    if (!state) throw new ConnectionUnavailableError();
    const selected = getSessionFromState(state, session);
    if (!selected.namespace || !selected.database) throw new MissingNamespaceDatabaseError();
    if (isDotSegment(selected.namespace) || isDotSegment(selected.database)) throw new SurrealError("HTTP API namespace and database cannot be dot segments");
    const method = (request.method ?? "get").toUpperCase();
    if ((method === "GET" || method === "HEAD") && request.body !== void 0) throw new SurrealError("HTTP API requests with GET or HEAD cannot have a body");
    const endpoint = new URL(state.url);
    const basepath = endpoint.pathname.slice(0, -4);
    const segments = path.split("/").filter(Boolean);
    if (segments.some(isDotSegment)) throw new SurrealError("HTTP API paths cannot contain dot segments");
    endpoint.pathname = `${basepath}/api/${encodeURIComponent(selected.namespace)}/${encodeURIComponent(selected.database)}/${segments.map(encodeURIComponent).join("/")}`;
    endpoint.search = "";
    endpoint.hash = "";
    for (const [name, value] of Object.entries(request.query ?? {})) endpoint.searchParams.set(name, value);
    const headers = new Headers(request.headers);
    const requestType = mediaType(headers.get("content-type")) ?? "application/cbor";
    let payload = request.body;
    if (payload !== void 0 && !(payload instanceof Blob) && requestType !== "application/cbor") if (isJson(requestType)) payload = new Blob([JSON.stringify(jsonify(payload))]);
    else if (typeof payload === "string" || payload instanceof Uint8Array) payload = new Blob([payload]);
    else throw new SurrealError("HTTP API bodies with this Content-Type must be a string, Uint8Array, or Blob");
    const response = await fetchSurreal(this._context, state, selected, {
      url: endpoint,
      method,
      body: payload,
      headers: headerRecord(headers),
      token,
      signal: options?.signal,
      answers: isApiStatus,
      manualRedirect: true
    });
    const bytes = await readBytes(response, options?.signal);
    const responseType = mediaType(response.headers.get("content-type"));
    let body;
    if (bytes.length === 0) body = void 0;
    else if (responseType === "application/cbor") body = wrapSqonError(() => this._context.codecs.cbor.decode(bytes));
    else if (responseType && isJson(responseType)) try {
      body = JSON.parse(utf8.decode(bytes));
    } catch (cause) {
      throw new SurrealError("The API response is not valid JSON", { cause });
    }
    else if (responseType?.startsWith("text/")) body = utf8.decode(bytes);
    else body = bytes;
    return {
      body,
      status: response.status,
      headers: headerRecord(response.headers)
    };
  }
  /**
  * There is no `health` RPC method, so an engine which knows no better asks with `ping`, which
  * any engine can send. Engines which reach the server over HTTP ask its `/health` endpoint.
  */
  async health() {
    await this.send({ method: "ping" });
  }
  /**
  * Ask the `/health` endpoint of the server, which answers with an error when the datastore
  * cannot be reached. No credential is presented.
  */
  async requestHealthEndpoint() {
    if (!this._state) throw new ConnectionUnavailableError();
    const endpoint = new URL(this._state.url);
    const basepath = endpoint.pathname.slice(0, -4);
    endpoint.pathname = `${basepath}/health`;
    const response = await fetchSurreal(this._context, this._state, this._state.rootSession, {
      url: endpoint,
      method: "GET",
      token: ""
    });
    releaseResponse(response);
  }
  async version() {
    const version3 = await this.send({ method: "version" });
    return { version: version3 };
  }
  async sessions() {
    return await this.send({ method: "sessions" });
  }
  async attach(session) {
    await this.send({
      method: "attach",
      session
    });
  }
  async detach(session) {
    return await this.send({
      method: "detach",
      session
    });
  }
  async use(what, session) {
    const res = await this.send({
      method: "use",
      params: [what.namespace, what.database],
      session
    });
    return res ?? {};
  }
  async signup(auth, session) {
    if (!this._state) throw new ConnectionUnavailableError();
    const sessionState = getSessionFromState(this._state, session);
    const response = await this.send({
      method: "signup",
      params: [buildRpcAuth(sessionState, auth)],
      session
    });
    return this.parseTokens(response);
  }
  async signin(auth, session) {
    if (!this._state) throw new ConnectionUnavailableError();
    const sessionState = getSessionFromState(this._state, session);
    const response = await this.send({
      method: "signin",
      params: [buildRpcAuth(sessionState, auth)],
      session
    });
    return this.parseTokens(response);
  }
  async authenticate(token, session) {
    await this.send({
      method: "authenticate",
      params: [token],
      session
    });
  }
  async set(name, value, session) {
    await this.send({
      method: "let",
      params: [name, value],
      session
    });
  }
  async unset(name, session) {
    await this.send({
      method: "unset",
      params: [name],
      session
    });
  }
  async refresh(tokens, session) {
    return this.parseTokens(await this.send({
      method: "refresh",
      params: [tokens],
      session
    }));
  }
  async sql(dialect, statements, vars, options, session) {
    const params = [statements];
    if (vars !== void 0 || options !== void 0) params.push(vars ?? null);
    if (options !== void 0) params.push(options);
    return this.send({
      method: dialect,
      params,
      session
    });
  }
  async revoke(tokens, session) {
    await this.send({
      method: "revoke",
      params: [tokens],
      session
    });
  }
  async invalidate(session) {
    await this.send({
      method: "invalidate",
      session
    });
  }
  async reset(session) {
    await this.send({
      method: "reset",
      session
    });
  }
  async begin(session) {
    const result = await this.send({
      method: "begin",
      session
    });
    return result;
  }
  async commit(txn, session) {
    await this.send({
      method: "commit",
      params: [txn],
      session
    });
  }
  async cancel(txn, session) {
    await this.send({
      method: "cancel",
      params: [txn],
      session
    });
  }
  async importSql(data, request) {
    await this.importWith(data, request);
  }
  async exportSql(options, request) {
    return this.exportWith(options, request);
  }
  async exportMlModel(options, request) {
    return this.exportMlModelWith(options, request);
  }
  /**
  * Import, presenting a token for this import alone when there is one, and otherwise the
  * credential of the connection, as it is for every request.
  */
  async importWith(data, request, token) {
    if (!this._state) throw new ConnectionUnavailableError();
    const endpoint = new URL(this._state.url);
    const basepath = endpoint.pathname.slice(0, -4);
    endpoint.pathname = `${basepath}/import`;
    const reports = this._version !== void 0 && isVersionSupported(this._version, IMPORT_REPORTS_FAILURES);
    const response = await fetchSurreal(this._context, this._state, this._state.rootSession, {
      body: typeof data === "string" ? new Blob([data]) : data,
      url: endpoint,
      headers: { Accept: "application/json" },
      token,
      signal: request?.signal,
      uploadProgress: request?.uploadProgress,
      answers: reports ? (status) => status === IMPORT_FAILED : void 0
    });
    if (!reports) {
      releaseResponse(response);
      return;
    }
    let results;
    try {
      results = await raceAbort(response.json(), request?.signal);
    } catch {
      throwIfAborted(request?.signal);
    }
    const failures = Array.isArray(results) ? results.filter((result) => result?.status === "ERR") : [];
    if (failures.length > 0) throw new ImportError(failures.slice(0, KEPT_FAILURES).map(parseQueryError), failures.length);
    if (response.status !== 200) throw new HttpConnectionError("The import failed", response.status, response.statusText, /* @__PURE__ */ new ArrayBuffer(0));
  }
  /**
  * Export, presenting a token for this export alone when there is one. See `importWith()`.
  */
  async exportWith(options, request, token) {
    if (!this._state) throw new ConnectionUnavailableError();
    const endpoint = new URL(this._state.url);
    const basepath = endpoint.pathname.slice(0, -4);
    endpoint.pathname = `${basepath}/export`;
    return fetchSurreal(this._context, this._state, this._state.rootSession, {
      body: options ?? {},
      url: endpoint,
      headers: { Accept: "plain/text" },
      token,
      signal: request?.signal
    });
  }
  /**
  * Export a model, presenting a token for this export alone when there is one. See
  * `importWith()`.
  */
  async exportMlModelWith(options, request, token) {
    if (!this._state) throw new ConnectionUnavailableError();
    const endpoint = new URL(this._state.url);
    const basepath = endpoint.pathname.slice(0, -4);
    endpoint.pathname = `${basepath}/ml/export/${options.name}/${options.version}`;
    return fetchSurreal(this._context, this._state, this._state.rootSession, {
      url: endpoint,
      method: "GET",
      token,
      signal: request?.signal
    });
  }
  query(query, session, txn, options) {
    return this.#dispatchQuery("query", query, session, txn, options);
  }
  gql(query, session, txn, options) {
    return this.#dispatchQuery("gql", query, session, txn, options);
  }
  async *#dispatchQuery(method, query, session, txn, options) {
    const responses = await this.send({
      method,
      params: queryParams(query, method, options),
      session,
      txn
    }, options);
    yield* this.toChunks(responses);
  }
  /**
  * Translate the statement results of a `query` request into chunks
  */
  *toChunks(responses) {
    let index = 0;
    for (const response of responses) {
      const chunk = {
        query: index++,
        batch: 0,
        kind: "single",
        stats: statsFromTime(response.time)
      };
      if (response.status === "OK") {
        chunk.type = response.type;
        Object.assign(chunk, traced(parseTrace(response.trace)));
        if (Array.isArray(response.result)) {
          chunk.kind = "batched-final";
          chunk.result = response.result;
        } else chunk.result = [response.result];
      } else chunk.error = parseQueryError(response);
      yield chunk;
    }
  }
  parseTokens(response) {
    if (typeof response === "string") return {
      access: response,
      refresh: void 0
    };
    if (typeof response === "object") return response;
    throw new UnexpectedServerResponseError(response);
  }
};
function isDotSegment(segment) {
  return segment === "." || segment === "..";
}
__name(isDotSegment, "isDotSegment");
function mediaType(contentType) {
  return contentType?.split(";", 1)[0].trim().toLowerCase();
}
__name(mediaType, "mediaType");
function isJson(type2) {
  return type2 === "application/json" || type2.endsWith("+json");
}
__name(isJson, "isJson");
function headerRecord(headers) {
  const record$1 = {};
  headers.forEach((value, name) => {
    record$1[name] = value;
  });
  return record$1;
}
__name(headerRecord, "headerRecord");
var ALWAYS_ALLOW = /* @__PURE__ */ new Set([
  "use",
  "signin",
  "signup",
  "authenticate",
  "version",
  "query",
  "info"
]);
var NEVER_RESOLVE = /* @__PURE__ */ new Set([
  "signin",
  "signup",
  "authenticate",
  "refresh",
  "revoke",
  "version"
]);
var HttpEngine = class extends RpcEngine {
  static {
    __name(this, "HttpEngine");
  }
  #publisher = new Publisher();
  /**
  * Whether the server has answered in `cbor.2`. Until it has, requests are written in plain
  * `cbor`, which every server reads, and ask for `cbor.2` back: a server before 4.0 answers in
  * `cbor`, and one which speaks `cbor.2` turns this on.
  */
  #cbor2 = false;
  /**
  * Whether an answer has shown that the server does not write `shaped`, after which it is no
  * longer asked for on this connection.
  */
  #shapedUnavailable = false;
  /**
  * Whether an answer has come back written in `shaped`, which is the only thing which shows
  * the server was built with the format and so reads a block in a request body.
  */
  #shapedConfirmed = false;
  features = /* @__PURE__ */ new Set([
    Features.RefreshTokens,
    Features.Api,
    Features.ExportImportRaw,
    Features.SurrealML,
    Features.SqlDialects,
    Features.QueryTrace,
    Features.PerRequestAuth
  ]);
  subscribe(event, listener) {
    return this.#publisher.subscribe(event, listener);
  }
  open(state) {
    this._state = state;
    this.#cbor2 = false;
    this.#shapedUnavailable = false;
    this.#shapedConfirmed = false;
    setTimeout(() => {
      this.#publisher.publish("connected");
    });
  }
  async close() {
    this._state = void 0;
    this.#publisher.publish("disconnected");
  }
  health() {
    return this.requestHealthEndpoint();
  }
  ready(version3) {
    this._version = version3;
  }
  api(path, request, session, _txn, options) {
    return this.apiOverHttp(path, request, session, options);
  }
  /**
  * Invoke a custom API as someone else. As for a query, the credential is presented with this
  * request alone, and the session is neither used for authentication nor changed.
  */
  async apiAs(path, request, session, _txn, options) {
    const state = this._state;
    if (!state) throw new ConnectionUnavailableError();
    const token = await this.#present(options.credential, session, state, options.signal);
    return this.apiOverHttp(path, request, session, options, token);
  }
  /**
  * Run a query as someone else. The credential is presented with this request alone, and
  * the session is neither used for authentication nor changed.
  */
  async *queryAs(query, session, txn, options) {
    const responses = await this.send({
      method: options.dialect === "gql" ? "gql" : "query",
      params: queryParams(query, options.dialect === "gql" ? "gql" : "query", options),
      session,
      txn
    }, {
      signal: options.signal,
      credential: options.credential
    });
    yield* this.toChunks(responses);
  }
  /**
  * Import as someone else. As for a query, the credential is presented with this request alone,
  * and the connection is neither used for authentication nor changed.
  */
  async importSqlAs(data, request) {
    await this.importWith(data, request, await this.#tokenFor(request));
  }
  /**
  * Export as someone else. See `importSqlAs()`.
  */
  async exportSqlAs(options, request) {
    return this.exportWith(options, request, await this.#tokenFor(request));
  }
  /**
  * Export a model as someone else. See `importSqlAs()`.
  */
  async exportMlModelAs(options, request) {
    return this.exportMlModelWith(options, request, await this.#tokenFor(request));
  }
  /**
  * The token which presents the credential of an import or export, for as long as it is wanted.
  */
  async #tokenFor(request) {
    const state = this._state;
    if (!state) throw new ConnectionUnavailableError();
    throwIfAborted(request.signal);
    return this.#present(request.credential, void 0, state, request.signal);
  }
  /**
  * The token which presents a credential: a token as it is, and authentication details
  * exchanged for one.
  */
  async #present(credential, session, state, signal) {
    return typeof credential === "string" ? credential : this.#exchange(credential, session, state, signal);
  }
  /**
  * Exchange authentication details for a token, with nothing but the details to go on.
  */
  async #exchange(auth, session, state, signal) {
    const response = await this.send({
      method: "signin",
      params: [buildRpcAuth(getSessionFromState(state, session), auth)],
      session
    }, {
      anonymous: true,
      signal
    });
    return this.parseTokens(response).access;
  }
  async send(request, options) {
    throwIfAborted(options?.signal);
    const state = this._state;
    if (!state) throw new ConnectionUnavailableError();
    switch (request.method) {
      case "use":
      case "let":
      case "unset":
      case "reset":
      case "invalidate":
        if (request.method === "use" && isEmptyUseParams(request.params)) break;
        return void 0;
    }
    const session = getSessionFromState(state, request.session);
    if ((!session.namespace || !session.database) && !ALWAYS_ALLOW.has(request.method)) throw new MissingNamespaceDatabaseError();
    switch (request.method) {
      case "query":
      case "gql": {
        const options$1 = request.params?.[2];
        request.params = [
          request.params?.[0],
          {
            ...session.variables,
            ...request.params?.[1] ?? {}
          },
          ...options$1 === void 0 ? [] : [options$1]
        ];
        break;
      }
      case "pgsql":
      case "mysql": {
        if (Object.keys(session.variables).length === 0) break;
        const [statements, vars, options$1] = request.params ?? [];
        request.params = [
          statements,
          {
            ...session.variables,
            ...vars ?? {}
          },
          ...options$1 === void 0 ? [] : [options$1]
        ];
        break;
      }
    }
    let token;
    if (options?.anonymous) token = "";
    else if (options?.credential !== void 0) token = await this.#present(options.credential, request.session, state, options.signal);
    const id$1 = this._context.uniqueId();
    const codecs = this._context.codecs;
    const res = await fetchSurreal(this._context, state, session, {
      body: {
        id: id$1,
        ...request
      },
      codec: this.#shapedConfirmed && codecs.shaped ? codecs.shaped : cborCodec(codecs, this.#cbor2),
      headers: codecs.cbor2 || codecs.shaped ? {
        "Content-Type": this.#cbor2 ? CBOR2_MEDIA_TYPE : CBOR_MEDIA_TYPE,
        Accept: codecs.shaped && this.#cbor2 && !this.#shapedUnavailable ? SHAPED_MEDIA_TYPE : CBOR2_MEDIA_TYPE
      } : void 0,
      token,
      resolve: !NEVER_RESOLVE.has(request.method),
      signal: options?.signal
    });
    const contentType = res.headers.get("Content-Type");
    const shaped = !!codecs.shaped && isShapedMediaType(contentType);
    const cbor2 = isCbor2MediaType(contentType);
    if ((cbor2 || shaped) && codecs.cbor2 && state === this._state) this.#cbor2 = true;
    if (shaped && state === this._state) this.#shapedConfirmed = true;
    if (!shaped && !cbor2 && codecs.shaped && this.#cbor2 && state === this._state) this.#shapedUnavailable = true;
    const buffer = await readBody(res, options?.signal);
    let response;
    try {
      response = wrapSqonError(() => {
        const bytes = new Uint8Array(buffer);
        if (!shaped) return cborCodec(codecs, cbor2).decode(bytes);
        const codec = codecs.shaped;
        const decoded = codec.decode(bytes);
        return resolveBlocks(decoded, codec, new BlockReader());
      });
    } catch (error3) {
      if (error3 instanceof SurrealSqonError) throw error3;
      throw new UnexpectedServerResponseError(error3);
    }
    if (response.error) throw parseRpcError(response.error);
    return response.result;
  }
  liveQuery() {
    throw new UnsupportedFeatureError(Features.LiveQueries);
  }
};
function isEmptyUseParams(params) {
  return Array.isArray(params) && typeof params[0] === "undefined" && typeof params[1] === "undefined";
}
__name(isEmptyUseParams, "isEmptyUseParams");
var QUERY_STREAM_VERSION = 1;
var STREAM_FRAME_KEY = "stream";
function frameError(error3) {
  if (!error3.kind) return parseRpcError(error3);
  return parseRpcError({
    ...error3,
    code: 0
  });
}
__name(frameError, "frameError");
function isQueryStreamFrame(value) {
  if (typeof value !== "object" || value === null) return false;
  return typeof value[STREAM_FRAME_KEY] === "string";
}
__name(isQueryStreamFrame, "isQueryStreamFrame");
async function* queryStreamChunks(frames, abandonment = {}) {
  const batches = /* @__PURE__ */ new Map();
  const singles = /* @__PURE__ */ new Map();
  const valueTraces = /* @__PURE__ */ new Map();
  const unfinished = /* @__PURE__ */ new Set();
  const finished = /* @__PURE__ */ new Set();
  let ended = false;
  for await (const frame$1 of frames) {
    if ((frame$1.stream === "rows" || frame$1.stream === "value" || frame$1.stream === "finished") && finished.has(frameIndex(frame$1.index))) continue;
    switch (frame$1.stream) {
      case "begin": {
        const { version: version3 } = frame$1;
        if (typeof version3 === "number" && Number.isInteger(version3) && version3 > QUERY_STREAM_VERSION) throw new StreamProtocolError(`The server speaks revision ${version3} of the streaming query protocol, and this SDK implements revision ${QUERY_STREAM_VERSION}. A higher revision is not backwards compatible: upgrade the SDK, or set \`streaming: false\` to receive buffered responses instead.`);
        break;
      }
      case "rows": {
        const index = frameIndex(frame$1.index);
        unfinished.add(index);
        yield {
          query: index,
          batch: nextBatch(batches, index),
          kind: "batched",
          result: Array.isArray(frame$1.values) ? frame$1.values : [],
          ...traced(parseTrace(frame$1.trace))
        };
        break;
      }
      case "value": {
        const index = frameIndex(frame$1.index);
        unfinished.add(index);
        singles.set(index, frame$1.value);
        const trace3 = parseTrace(frame$1.trace);
        if (trace3) valueTraces.set(index, trace3);
        break;
      }
      case "finished": {
        const index = frameIndex(frame$1.index);
        const stats = frameStats(frame$1.time);
        const sentValue = singles.has(index);
        const single = sentValue ? [singles.get(index)] : void 0;
        const valueTrace = valueTraces.get(index);
        unfinished.delete(index);
        singles.delete(index);
        valueTraces.delete(index);
        finished.add(index);
        if (frame$1.error) {
          yield {
            query: index,
            batch: nextBatch(batches, index),
            kind: "batched-final",
            stats,
            error: frameError(frame$1.error)
          };
          break;
        }
        if (frame$1.single && !sentValue) throw new StreamProtocolError(`Statement ${index} finished as a single value, but no value was sent for it.`);
        if (!frame$1.single && sentValue) throw new StreamProtocolError(`Statement ${index} sent a single value, but finished as a list of rows.`);
        yield {
          query: index,
          batch: nextBatch(batches, index),
          kind: frame$1.single ? "single" : "batched-final",
          stats,
          type: frame$1.type,
          result: single ?? [],
          ...traced(mergeTraces(valueTrace, parseTrace(frame$1.trace)))
        };
        break;
      }
      case "end":
        ended = true;
        if (frame$1.error) {
          const error3 = frameError(frame$1.error);
          const stats = frameStats(frame$1.time);
          const retracted = [...unfinished].sort((a, b) => a - b);
          unfinished.clear();
          for (const index of retracted) yield {
            query: index,
            batch: nextBatch(batches, index),
            kind: "batched-final",
            stats,
            error: error3
          };
          throw error3;
        }
        if (typeof frame$1.results === "number" && frame$1.results !== finished.size) throw new StreamProtocolError(`The stream ended reporting ${frame$1.results} statements, but ${finished.size} were delivered. The answer is incomplete.`);
        return;
      default:
        break;
    }
  }
  if (!ended && !abandonment.requested) throw new CallTerminatedError();
}
__name(queryStreamChunks, "queryStreamChunks");
function nextBatch(batches, index) {
  const batch = batches.get(index) ?? 0;
  batches.set(index, batch + 1);
  return batch;
}
__name(nextBatch, "nextBatch");
function frameIndex(index) {
  const value = Number(index);
  if (!Number.isSafeInteger(value) || value < 0) throw new UnexpectedServerResponseError(index);
  return value;
}
__name(frameIndex, "frameIndex");
function frameStats(time3) {
  if (typeof time3 !== "string") return void 0;
  try {
    return {
      bytesReceived: -1,
      bytesScanned: -1,
      recordsReceived: -1,
      recordsScanned: -1,
      duration: Duration.parseFloat(time3)
    };
  } catch {
    return void 0;
  }
}
__name(frameStats, "frameStats");
var LIVE_ACTIONS = [
  "CREATE",
  "UPDATE",
  "DELETE",
  "KILLED"
];
var DEFAULT_PING_INTERVAL = 3e4;
var DEFAULT_PONG_TIMEOUT = 1e4;
var WebSocketEngine = class extends RpcEngine {
  static {
    __name(this, "WebSocketEngine");
  }
  #publisher = new Publisher();
  #socket;
  #calls = /* @__PURE__ */ new Map();
  #streams = /* @__PURE__ */ new Map();
  #live = new LiveDispatcher();
  #pinger;
  #pongTimeout;
  #active = false;
  #terminated = false;
  #streaming = true;
  /** Whether to offer plain cbor alone, as the WebSocket implementation would not open a socket offering more */
  #cborOnly = false;
  /** Set once a handshake offering `shaped` failed, so reconnects do not try it again */
  #shapedUnavailable = false;
  /** The shape scopes of this socket: one per stream, and one per live query */
  #scopes = new ShapeScopes();
  features = /* @__PURE__ */ new Set([
    Features.LiveQueries,
    Features.RefreshTokens,
    Features.Sessions,
    Features.Transactions,
    Features.Api,
    Features.ExportImportRaw,
    Features.SurrealML,
    Features.SqlDialects,
    Features.QueryTrace,
    Features.QueryStreaming
  ]);
  subscribe(event, listener) {
    return this.#publisher.subscribe(event, listener);
  }
  open(state) {
    this.#terminated = false;
    this._state = state;
    const { reconnect } = state;
    (async () => {
      while (!this.#terminated) {
        let opened = false;
        const onConnected = /* @__PURE__ */ __name(() => {
          opened = true;
          this.#active = true;
          this.#streaming = true;
          reconnect.reset();
          this.#publisher.publish("connected");
        }, "onConnected");
        const wantsShaped = !!this._context.codecs.shaped && !this.#shapedUnavailable;
        let error3 = wantsShaped ? await this.createSocket(onConnected, [SHAPED_PROTOCOL]) : null;
        if (wantsShaped && !opened && !this.#terminated) this.#shapedUnavailable = true;
        const protocols = this.#cborOnly ? [CBOR_PROTOCOL] : cborProtocols(this._context.codecs);
        if (!opened && !this.#terminated) {
          error3 = await this.createSocket(onConnected, protocols);
          if (!opened && !this.#terminated && protocols.length > 1) {
            error3 = await this.createSocket(onConnected, [CBOR_PROTOCOL]);
            if (opened) this.#cborOnly = true;
          }
        }
        this.#socket = void 0;
        this.#live.clear();
        this.#scopes.clear();
        this.failStreams(new CallTerminatedError());
        if (this.#terminated || !reconnect.enabled || !reconnect.allowed) {
          if (reconnect.enabled && !reconnect.allowed) this.#publisher.publish("error", new ReconnectExhaustionError());
          else if (error3) this.#publisher.publish("error", error3);
          this.terminatePending(new CallTerminatedError());
          this._state = void 0;
          this.#active = false;
          this.#publisher.publish("disconnected");
          break;
        }
        if (error3) this.#publisher.publish("error", error3);
        if (error3) reconnect.propagate(error3);
        this.#publisher.publish("reconnecting");
        await reconnect.iterate();
      }
    })();
  }
  async close() {
    if (this.#terminated) return;
    const WebSocketImpl = this._context.options.websocketImpl ?? globalThis.WebSocket;
    const socketState = this.#socket?.readyState;
    this._state = void 0;
    this.#terminated = true;
    this.#active = false;
    clearInterval(this.#pinger);
    this.#pinger = void 0;
    if (this.#pongTimeout !== void 0) {
      clearTimeout(this.#pongTimeout);
      this.#pongTimeout = void 0;
    }
    this.#socket?.close();
    this.terminatePending(new CallTerminatedError());
    if (socketState === WebSocketImpl.OPEN || socketState === WebSocketImpl.CLOSING) await this.#publisher.subscribeFirst("disconnected");
    else this.#publisher.publish("disconnected");
  }
  health() {
    return this.requestHealthEndpoint();
  }
  ready(version3) {
    this._version = version3;
    if (version3 !== void 0 && predatesStreaming(version3)) this.#streaming = false;
    for (const { request } of this.#calls.values()) this.#socket?.send(new Uint8Array(wrapSqonError(() => this.#codec().encode(request))));
  }
  send(request, options) {
    return new Promise((resolve, reject) => {
      const signal = options?.signal;
      if (signal?.aborted) {
        reject(abortReason(signal));
        return;
      }
      if (!this.#active) {
        reject(new ConnectionUnavailableError());
        return;
      }
      const id$1 = this._context.uniqueId();
      let unwatch = /* @__PURE__ */ __name(() => {
      }, "unwatch");
      const call = {
        request: {
          id: id$1,
          ...request
        },
        resolve: /* @__PURE__ */ __name((value) => {
          unwatch();
          resolve(value);
        }, "resolve"),
        reject: /* @__PURE__ */ __name((error3) => {
          unwatch();
          reject(error3);
        }, "reject")
      };
      if (signal) {
        const onAbort = /* @__PURE__ */ __name(() => {
          if (this.#calls.get(id$1) !== call) return;
          this.#calls.delete(id$1);
          try {
            this.abandon(id$1, call.request);
          } catch {
          }
          reject(abortReason(signal));
        }, "onAbort");
        signal.addEventListener("abort", onAbort, { once: true });
        unwatch = /* @__PURE__ */ __name(() => signal.removeEventListener("abort", onAbort), "unwatch");
      }
      this.#calls.set(id$1, call);
      try {
        this.#socket?.send(new Uint8Array(wrapSqonError(() => this.#codec().encode(call.request))));
      } catch (error3) {
        this.#calls.delete(id$1);
        unwatch();
        throw error3;
      }
    });
  }
  /**
  * Called when a pending call is given up on because its signal aborted, once it has been
  * forgotten by the engine and before the caller is told.
  *
  * By then the request has been sent, and this protocol has no way of taking it back: the server
  * carries on, and its response is ignored when it arrives. An engine whose server can be told
  * to stop what it is doing sends that here, with the id the request was sent under.
  *
  * @param _id The id the request was sent with
  * @param _request The request as it was sent
  */
  abandon(_id, _request) {
  }
  query(query, session, txn, options) {
    const requested = options?.stream === true;
    if (txn !== void 0 && !requested || this._context.options.streaming === false && !requested || !this.#streaming || !this.#socket) return super.query(query, session, txn, options);
    const frames = {};
    const abandonment = {};
    const chunks = this.streamChunks(query, session, txn, options, requested, frames, abandonment);
    return { [Symbol.asyncIterator]: () => ({
      next: /* @__PURE__ */ __name(() => chunks.next(), "next"),
      throw: /* @__PURE__ */ __name((error3) => chunks.throw(error3), "throw"),
      return: /* @__PURE__ */ __name((value) => {
        abandonment.requested = true;
        frames.current?.return?.(void 0);
        return chunks.return(value);
      }, "return"),
      [Symbol.asyncIterator]() {
        return this;
      }
    }) };
  }
  /**
  * Streams a query, falling back to the buffered method if the server refuses it.
  */
  async *streamChunks(query, session, txn, options, requested, frames, abandonment) {
    const probe = { framed: false };
    frames.current = this.streamFrames(query, session, txn, probe, options);
    try {
      for await (const chunk of queryStreamChunks(frames.current, abandonment)) yield chunk;
    } catch (error3) {
      if (probe.framed || !isRetriableAsBuffered(error3)) throw error3;
      const cannotStream = error3.code === METHOD_NOT_FOUND || error3.code === METHOD_NOT_ALLOWED && error3 instanceof NotAllowedError && error3.methodName === STREAM_METHOD;
      if (cannotStream) this.#streaming = false;
      if (requested && !cannotStream) throw error3;
      for await (const chunk of super.query(query, session, txn, options)) yield chunk;
    }
  }
  /**
  * Invoke a custom API through the HTTP endpoint of the server, as the HTTP engine does, so
  * that it needs no query access. The socket has no method for it. A call inside a transaction
  * is invoked in it instead, with `api::invoke`, because a request over HTTP cannot join it.
  */
  api(path, request, session, txn, options) {
    if (txn) return super.api(path, request, session, txn, options);
    return this.apiOverHttp(path, request, session, options);
  }
  liveQuery(id$1) {
    const channel2 = new ChannelIterator(() => {
      unsub1();
      unsub2();
    });
    const unsub1 = this.#live.subscribe(id$1.toString(), (msg) => {
      channel2.submit(msg);
    });
    const unsub2 = this.#publisher.subscribe("disconnected", () => {
      channel2.cancel();
    });
    return channel2;
  }
  /**
  * Sends a streaming query and returns the frames it is answered with, in order.
  *
  * The iterator acts on abandonment the moment it is asked to, rather than
  * when the frames next wake it: a stream can sit for a long time between
  * frames - or produce none at all - and a consumer which has left must not
  * wait on a frame to be let go, nor have an error delivered to it.
  */
  streamFrames(query, session, txn, probe, options) {
    if (!this.#active || !this.#socket) throw new ConnectionUnavailableError();
    const id$1 = this._context.uniqueId();
    const stream = {
      channel: new ChannelIterator(),
      settled: false,
      abandoned: false
    };
    this.#socket.send(new Uint8Array(wrapSqonError(() => this.#codec().encode({
      id: id$1,
      method: STREAM_METHOD,
      params: queryParams(query, "query", options),
      session,
      ...txn === void 0 ? {} : { txn }
    }))));
    this.#streams.set(id$1, stream);
    const frames = this.readFrames(id$1, stream, probe);
    return {
      next: /* @__PURE__ */ __name(() => frames.next(), "next"),
      throw: /* @__PURE__ */ __name((error3) => frames.throw(error3), "throw"),
      return: /* @__PURE__ */ __name((value) => {
        this.abandonStream(id$1, stream);
        return frames.return(value);
      }, "return"),
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  }
  /**
  * Yields the frames of a registered stream until it ends.
  */
  async *readFrames(id$1, stream, probe) {
    try {
      for await (const event of stream.channel) {
        if (event.kind === "error") throw event.error;
        probe.framed = true;
        yield event.frame;
      }
    } finally {
      if (stream.settled) {
        this.#streams.delete(id$1);
        this.#scopes.end(id$1);
      } else this.abandonStream(id$1, stream);
    }
  }
  /**
  * Gives up on a stream whose consumer has left.
  *
  * Cancelling stops the server executing a query nothing will collect, and
  * closing the channel releases a read parked on a frame which may never
  * come. The registration stays until the terminal frame settles it, so the
  * frames still in flight are discarded rather than misrouted.
  */
  abandonStream(id$1, stream) {
    if (stream.settled || stream.abandoned) {
      stream.channel.cancel();
      return;
    }
    stream.abandoned = true;
    stream.channel.cancel();
    this.cancelStream(id$1);
  }
  /**
  * Asks the server to stop a streaming query it is still executing.
  */
  cancelStream(id$1) {
    if (!this.#active) {
      this.#streams.delete(id$1);
      this.#scopes.end(id$1);
      return;
    }
    this.send({
      method: "query_cancel",
      params: [id$1]
    }).catch(() => {
    });
  }
  /**
  * Fails everything in flight, for a connection which is not coming back.
  *
  * The calls and the streams are settled together: a query which reported a
  * closed connection differently for having been streamed would make the
  * two transports observably different, and one which reported nothing at
  * all would leave its caller waiting on it for the life of the process.
  */
  terminatePending(error3) {
    for (const { reject } of this.#calls.values()) reject(error3);
    this.#calls.clear();
    this.failStreams(error3);
  }
  /**
  * Fails the streaming queries in flight, as a stream cannot outlive its socket.
  */
  failStreams(error3) {
    for (const [id$1, stream] of this.#streams) {
      stream.settled = true;
      this.#streams.delete(id$1);
      this.#scopes.end(id$1);
      if (!stream.abandoned) stream.channel.submit({
        kind: "error",
        error: error3
      });
    }
  }
  /**
  * Routes one response of a streaming query to the consumer waiting on it.
  */
  handleStreamResponse(id$1, stream, response) {
    const frame$1 = response.error ? void 0 : response.result;
    if (response.error || !isQueryStreamFrame(frame$1)) {
      stream.settled = true;
      this.#streams.delete(id$1);
      this.#scopes.end(id$1);
      if (!stream.abandoned) stream.channel.submit({
        kind: "error",
        error: response.error ? parseRpcError(response.error) : new UnexpectedServerResponseError(frame$1)
      });
      return;
    }
    if (frame$1.stream === "end") {
      stream.settled = true;
      this.#streams.delete(id$1);
      this.#scopes.end(id$1);
    }
    if (!stream.abandoned) stream.channel.submit({
      kind: "frame",
      frame: frame$1
    });
  }
  /**
  * The codec to write and read messages in, named by the subprotocol the server picked for
  * the socket: `shaped`, `cbor.2`, or plain `cbor`.
  */
  #codec(socket = this.#socket) {
    return wireCodec(this._context.codecs, socket?.protocol ?? null);
  }
  /**
  * The shaped codec once the socket settled on `shaped`, and `undefined` otherwise. Only a
  * socket on that format carries blocks, so only one needs its scopes read.
  */
  #shaped(socket = this.#socket) {
    const { shaped } = this._context.codecs;
    return shaped && socket?.protocol === SHAPED_PROTOCOL ? shaped : void 0;
  }
  async createSocket(onConnected, protocols) {
    return new Promise((resolve, reject) => {
      if (!this._state) {
        reject(new ConnectionUnavailableError());
        return;
      }
      const WebSocketImpl = this._context.options.websocketImpl ?? globalThis.WebSocket;
      const socket = new WebSocketImpl(this._state.url.toString(), protocols);
      if (socket.binaryType !== "arraybuffer") socket.binaryType = "arraybuffer";
      this.#socket = socket;
      let caughtError = null;
      const onServerPing = /* @__PURE__ */ __name(() => {
        if (this.#pongTimeout !== void 0) {
          clearTimeout(this.#pongTimeout);
          this.#pongTimeout = void 0;
        }
      }, "onServerPing");
      const pingSocket = socket;
      if ("addEventListener" in socket && typeof pingSocket.addEventListener === "function") try {
        pingSocket.addEventListener("ping", onServerPing);
      } catch {
      }
      else if ("on" in socket && typeof pingSocket.on === "function") try {
        pingSocket.on("ping", onServerPing);
      } catch {
      }
      const clearPongTimeout = /* @__PURE__ */ __name(() => {
        if (this.#pongTimeout !== void 0) {
          clearTimeout(this.#pongTimeout);
          this.#pongTimeout = void 0;
        }
      }, "clearPongTimeout");
      socket.addEventListener("open", () => {
        try {
          onConnected();
          const pingInterval = this._state?.pingInterval ?? this._context.options.pingInterval ?? DEFAULT_PING_INTERVAL;
          const pongTimeout = this._state?.pongTimeout ?? this._context.options.pongTimeout ?? DEFAULT_PONG_TIMEOUT;
          const sendPing = /* @__PURE__ */ __name(() => {
            const WebSocketImpl$1 = this._context.options.websocketImpl ?? globalThis.WebSocket;
            if (socket.readyState !== WebSocketImpl$1.OPEN) return;
            if (this.#pongTimeout !== void 0) return;
            this.#pongTimeout = setTimeout(() => {
              this.#pongTimeout = void 0;
              try {
                socket.close();
              } catch {
              }
            }, pongTimeout);
            this.send({ method: "ping" }).then(() => {
              clearPongTimeout();
            }).catch(() => {
              clearPongTimeout();
              const WebSocketImpl$2 = this._context.options.websocketImpl ?? globalThis.WebSocket;
              if (socket.readyState === WebSocketImpl$2.OPEN) try {
                socket.close();
              } catch {
              }
            });
          }, "sendPing");
          if (pingInterval > 0) this.#pinger = setInterval(sendPing, pingInterval);
        } catch (err) {
          caughtError = err;
          socket.close();
        }
      });
      socket.addEventListener("error", (e) => {
        const error3 = new UnexpectedConnectionError("detail" in e && e.detail ? e.detail : "message" in e && e.message ? e.message : "error" in e && e.error ? e.error : "An unexpected error occurred");
        caughtError = error3;
      });
      socket.addEventListener("close", () => {
        clearInterval(this.#pinger);
        this.#pinger = void 0;
        clearPongTimeout();
        if ("removeEventListener" in socket && typeof pingSocket.removeEventListener === "function") try {
          pingSocket.removeEventListener("ping", onServerPing);
        } catch {
        }
        else if ("off" in socket && typeof pingSocket.off === "function") try {
          pingSocket.off("ping", onServerPing);
        } catch {
        }
        resolve(caughtError);
      });
      socket.addEventListener("message", ({ data }) => {
        try {
          const buffer = this.parseBuffer(data);
          const decoded = wrapSqonError(() => this.#codec(socket).decode(buffer));
          if (typeof decoded === "object" && decoded != null && Object.getPrototypeOf(decoded) === Object.prototype) this.handleRpcResponse(decoded);
          else throw new UnexpectedServerResponseError(decoded);
        } catch (cause) {
          try {
            this.#publisher.publish("error", new UnexpectedConnectionError(cause));
          } catch {
          }
        }
      });
    });
  }
  parseBuffer(data) {
    if (data instanceof Uint8Array) return data;
    if (data instanceof ArrayBuffer) return new Uint8Array(data);
    throw new UnexpectedServerResponseError(data);
  }
  handleRpcResponse({ id: id$1, ...res }) {
    if (typeof id$1 === "string") {
      const stream = this.#streams.get(id$1);
      if (stream) {
        this.handleStreamResponse(id$1, stream, this.#readBlocks(res, id$1));
        return;
      }
      try {
        const response = this.#readBlocks(res, void 0);
        const { resolve, reject } = this.#calls.get(id$1) ?? {};
        if (response.error) reject?.(parseRpcError(response.error));
        else resolve?.(response.result);
      } finally {
        this.#calls.delete(id$1);
      }
      return;
    }
    if (isLiveMessage(res.result)) {
      const frame$1 = res.result;
      const live = frame$1.id.toString();
      if (frame$1.action === "KILLED") {
        this.#scopes.end(live);
        this.#live.dispatch(live, {
          queryId: frame$1.id,
          action: "KILLED"
        });
        return;
      }
      const result = this.#shaped() ? unwrapRow(this.#readBlocks({ result: frame$1.result }, live).result, frame$1.result) : frame$1.result;
      this.#live.dispatch(live, {
        queryId: frame$1.id,
        action: frame$1.action,
        recordId: frame$1.record,
        value: result
      });
      return;
    }
    this.#publisher.publish("error", new UnexpectedServerResponseError(res));
  }
  /**
  * `value` with its blocks read as rows, in the scope `key` names — a stream or a live query
  * — or in a scope of its own when `key` is `undefined`. A socket which did not settle on
  * `shaped` carries no blocks, and the value is handed back untouched.
  */
  #readBlocks(value, key) {
    const codec = this.#shaped();
    if (!codec) return value;
    return resolveBlocks(value, codec, key === void 0 ? new BlockReader() : this.#scopes.get(key));
  }
};
function unwrapRow(read2, original) {
  if (read2 === original || !Array.isArray(read2)) return read2;
  return read2.length === 1 ? read2[0] : read2;
}
__name(unwrapRow, "unwrapRow");
function isRetriableAsBuffered(error3) {
  return error3 instanceof ServerError;
}
__name(isRetriableAsBuffered, "isRetriableAsBuffered");
function predatesStreaming(version3) {
  const since = Features.QueryStreaming.sinceVersion;
  const have = releaseOf(version3);
  const first = since === void 0 ? void 0 : releaseOf(since);
  if (!have || !first) return false;
  for (let index = 0; index < 3; index++) if (have[index] !== first[index]) return have[index] < first[index];
  return false;
}
__name(predatesStreaming, "predatesStreaming");
function releaseOf(version3) {
  const match2 = /^(?:surrealdb-)?v?(\d+)\.(\d+)(?:\.(\d+))?/.exec(version3.trim());
  return match2 ? [
    Number(match2[1]),
    Number(match2[2]),
    Number(match2[3] ?? 0)
  ] : void 0;
}
__name(releaseOf, "releaseOf");
var STREAM_METHOD = "query_stream";
var METHOD_NOT_FOUND = -32601;
var METHOD_NOT_ALLOWED = -32602;
function isLiveMessage(v) {
  if (typeof v !== "object") return false;
  if (v === null) return false;
  if (!("id" in v && "action" in v)) return false;
  if (!(v.id instanceof Uuid)) return false;
  if (!LIVE_ACTIONS.includes(v.action)) return false;
  if (v.action === "KILLED") return true;
  if (!("result" in v && "record" in v)) return false;
  if (typeof v.result !== "object") return false;
  if (v.result === null) return false;
  if (!(v.record instanceof _RecordId)) return false;
  return true;
}
__name(isLiveMessage, "isLiveMessage");
var createRemoteEngines = /* @__PURE__ */ __name(() => ({
  ws: /* @__PURE__ */ __name((ctx) => new WebSocketEngine(ctx), "ws"),
  wss: /* @__PURE__ */ __name((ctx) => new WebSocketEngine(ctx), "wss"),
  http: /* @__PURE__ */ __name((ctx) => new HttpEngine(ctx), "http"),
  https: /* @__PURE__ */ __name((ctx) => new HttpEngine(ctx), "https")
}), "createRemoteEngines");
function backoffDelay(options, attempt) {
  const multiplier = options.retryDelayMultiplier ** attempt;
  const jitterModifier = rand(-options.retryDelayJitter, options.retryDelayJitter);
  return Math.min(options.retryDelay * multiplier * (1 + jitterModifier), options.retryDelayMax);
}
__name(backoffDelay, "backoffDelay");
var DEFAULT_RECONNECT_OPTIONS = {
  enabled: true,
  attempts: -1,
  retryDelay: 1e3,
  retryDelayMax: 2e4,
  retryDelayMultiplier: 2,
  retryDelayJitter: 0.1
};
var ReconnectContext = class {
  static {
    __name(this, "ReconnectContext");
  }
  #attempts = 0;
  options;
  constructor(input) {
    const override = typeof input === "boolean" ? { enabled: input } : input;
    this.options = {
      ...DEFAULT_RECONNECT_OPTIONS,
      ...override
    };
  }
  get attempts() {
    return this.#attempts;
  }
  get enabled() {
    return this.options.enabled;
  }
  get allowed() {
    if (!this.options.enabled) return false;
    if (this.options.attempts !== -1 && this.#attempts >= this.options.attempts) return false;
    return true;
  }
  reset() {
    this.#attempts = 0;
  }
  propagate(error3) {
    this.options.catch?.(error3);
  }
  async iterate() {
    if (!this.allowed) throw new ReconnectIterationError();
    this.#attempts++;
    const multiplier = this.options.retryDelayMultiplier ** this.attempts;
    const adjustedDelay = this.options.retryDelay * multiplier;
    const jitterModifier = rand(-this.options.retryDelayJitter, this.options.retryDelayJitter);
    const nextDelay = Math.min(adjustedDelay * (1 + jitterModifier), this.options.retryDelayMax);
    await new Promise((r$1) => setTimeout(r$1, nextDelay));
  }
};
var ONE_DAY_MS = 1440 * 60 * 1e3;
var ConnectionController = class {
  static {
    __name(this, "ConnectionController");
  }
  #eventPublisher = new Publisher();
  #context;
  #state;
  #engine;
  #nextEngine;
  #status = "disconnected";
  #authProvider;
  #requestResolver;
  #requestAuth;
  #renewals = /* @__PURE__ */ new WeakMap();
  #cachedVersion;
  #expiryMargin = 60;
  #skipRenewal = false;
  #checkVersion = false;
  #lastConnectionError = void 0;
  subscribe(event, listener) {
    return this.#eventPublisher.subscribe(event, listener);
  }
  constructor(context2) {
    this.#context = context2;
  }
  get state() {
    return this.#state;
  }
  get status() {
    return this.#status;
  }
  propagateError(error3) {
    this.#eventPublisher.publish("error", error3);
  }
  async connect(url, options) {
    if (options.requestTimeout !== void 0) assertTimeout(options.requestTimeout, "requestTimeout");
    const authentication = parseAuthentication(options.authentication);
    const engine = this.#instanceEngine(url);
    this.#nextEngine = engine;
    this.#status = "connecting";
    this.#lastConnectionError = void 0;
    await this.disconnect();
    if (this.#nextEngine !== engine) return true;
    this.#engine = engine;
    this.#nextEngine = void 0;
    this.#skipRenewal = options.invalidateOnExpiry ?? false;
    this.#checkVersion = options.versionCheck ?? true;
    this.#expiryMargin = options.expiryMargin ?? 60;
    this.#authProvider = authentication.provider;
    this.#requestResolver = authentication.request?.resolve;
    this.#requestAuth = authentication.request ? new RequestCredentials({
      cache: authentication.request.cache,
      margin: /* @__PURE__ */ __name(() => this.#expiryMargin, "margin"),
      serialize: !engine.features.has(Features.PerRequestAuth)
    }) : void 0;
    this.#state = {
      url,
      sessions: /* @__PURE__ */ new Map(),
      reconnect: new ReconnectContext(options.reconnect),
      retry: RetryContext.mergeOptions(options.retry),
      requestTimeout: options.requestTimeout,
      pingInterval: options.pingInterval,
      pongTimeout: options.pongTimeout,
      rootSession: {
        ...this.#createSessionState(void 0),
        namespace: options.namespace,
        database: options.database
      }
    };
    if (this.#requestAuth && engine.features.has(Features.PerRequestAuth)) this.#state.credentials = { token: /* @__PURE__ */ __name((session, rejected, signal) => this.#requestToken(session, rejected, signal), "token") };
    this.#engine.subscribe("connected", () => this.#onConnected());
    this.#engine.subscribe("disconnected", () => this.#onDisconnected());
    this.#engine.subscribe("reconnecting", () => this.#onReconnecting());
    this.#engine.subscribe("error", (error3) => this.#onEngineError(error3));
    this.#status = "connecting";
    this.#eventPublisher.publish("connecting");
    this.#engine.open(this.#state);
    await this.ready();
    return true;
  }
  async disconnect() {
    if (this.#engine) await this.#engine.close();
    return true;
  }
  async ready() {
    if (this.#status === "disconnected") throw this.#lastConnectionError ?? new ConnectionUnavailableError();
    if (this.#status === "connected") return;
    await this.#eventPublisher.subscribeFirst("connected", "disconnected");
    if (this.#status === "disconnected") throw this.#lastConnectionError ?? new ConnectionUnavailableError();
  }
  assertFeature(feature) {
    if (!this.#engine || !this.#cachedVersion) throw new ConnectionUnavailableError();
    if (!this.#engine.features.has(feature)) throw new UnsupportedFeatureError(feature);
    if (!feature.supports(this.#cachedVersion)) throw new UnavailableFeatureError(feature, this.#cachedVersion);
  }
  get retry() {
    if (!this.#state) throw new ConnectionUnavailableError();
    return this.#state.retry;
  }
  /** The default client side limit in milliseconds for each query request, if any */
  get requestTimeout() {
    return this.#state?.requestTimeout;
  }
  /**
  * The version reported by the server on the most recent (re)connect, or
  * `undefined` before the first connection has been established.
  */
  get serverVersion() {
    return this.#cachedVersion;
  }
  #instanceEngine(url) {
    const engineMap = this.#context.options.engines ?? createRemoteEngines();
    const protocol = url.protocol.slice(0, -1);
    const factory = engineMap[protocol];
    if (!factory) throw new UnsupportedEngineError(protocol);
    return factory(this.#context);
  }
  health() {
    if (!this.#engine) throw new ConnectionUnavailableError();
    return this.#engine?.health();
  }
  version() {
    if (!this.#engine) throw new ConnectionUnavailableError();
    return this.#engine.version();
  }
  async sessions() {
    if (!this.#engine) throw new ConnectionUnavailableError();
    this.assertFeature(Features.Sessions);
    return this.#engine.sessions();
  }
  async attach(session) {
    if (!this.#engine) throw new ConnectionUnavailableError();
    this.assertFeature(Features.Sessions);
    await this.#engine.attach(session);
  }
  async detach(session) {
    if (!this.#engine) throw new ConnectionUnavailableError();
    this.assertFeature(Features.Sessions);
    return this.#engine.detach(session);
  }
  async signup(auth, session, skipOverride = false) {
    if (!this.#engine || !this.#state) throw new ConnectionUnavailableError();
    const response = await this.#engine.signup(auth, session);
    const sessionState = this.getSession(session);
    sessionState.accessToken = response.access;
    sessionState.refreshToken = response.refresh;
    sessionState.authOverriden = sessionState.authOverriden || !skipOverride;
    this.#handleAuthChanged(session);
    return response;
  }
  async signin(auth, session, skipOverride = false) {
    if (!this.#engine || !this.#state) throw new ConnectionUnavailableError();
    const response = await this.#engine.signin(auth, session);
    const sessionState = this.getSession(session);
    sessionState.accessToken = response.access;
    sessionState.refreshToken = response.refresh;
    sessionState.authOverriden = sessionState.authOverriden || !skipOverride;
    this.#handleAuthChanged(session);
    return response;
  }
  async authenticate(token, session, skipOverride = false) {
    if (!this.#engine || !this.#state) throw new ConnectionUnavailableError();
    await this.#engine.authenticate(token, session);
    const sessionState = this.getSession(session);
    sessionState.accessToken = token;
    sessionState.authOverriden = sessionState.authOverriden || !skipOverride;
    this.#handleAuthChanged(session);
  }
  async refresh(tokens, session, skipOverride = false) {
    if (!this.#engine || !this.#state) throw new ConnectionUnavailableError();
    this.assertFeature(Features.RefreshTokens);
    const response = await this.#engine.refresh(tokens, session);
    const sessionState = this.getSession(session);
    sessionState.accessToken = response.access;
    sessionState.refreshToken = response.refresh;
    sessionState.authOverriden = sessionState.authOverriden || !skipOverride;
    this.#handleAuthChanged(session);
    return response;
  }
  async sql(dialect, statements, vars, options, session) {
    const engine = this.#engine;
    if (!engine) throw new ConnectionUnavailableError();
    this.assertFeature(Features.SqlDialects);
    if (!engine.sql) throw new UnsupportedFeatureError(Features.SqlDialects);
    return engine.sql(dialect, statements, vars, options, session);
  }
  async revoke(tokens, session) {
    if (!this.#engine || !this.#state) throw new ConnectionUnavailableError();
    this.assertFeature(Features.RefreshTokens);
    const revoked = tokens ?? this.#getTokens(session);
    if (!revoked?.refresh) throw new SurrealError("There is no refresh token to revoke");
    await this.#engine.revoke(revoked, session);
    const affected = this.#allSessions().filter((sessionState) => sessionState.refreshToken === revoked.refresh);
    for (const sessionState of affected) sessionState.refreshToken = void 0;
    const failures = [];
    for (const sessionState of affected) try {
      this.#eventPublisher.publish("auth", this.#getTokens(sessionState.id) ?? null, sessionState.id);
    } catch (error3) {
      failures.push(...listenerFailures(error3));
    }
    if (failures.length > 0) throw new PublishError(failures);
  }
  async use(what, session) {
    if (!this.#engine || !this.#state) throw new ConnectionUnavailableError();
    if (what.namespace === null && what.database !== null) throw new MissingNamespaceDatabaseError();
    const res = await this.#engine.use(what, session);
    const namespace = res.namespace ?? what.namespace;
    const database = res.database ?? what.database;
    const sessionState = this.getSession(session);
    if (namespace === null) sessionState.namespace = void 0;
    if (database === null) sessionState.database = void 0;
    if (namespace) sessionState.namespace = namespace;
    if (database) sessionState.database = database;
    const selected = {
      namespace: sessionState.namespace,
      database: sessionState.database
    };
    this.#eventPublisher.publish("using", selected, session);
    return selected;
  }
  async set(name, value, session) {
    if (!this.#engine || !this.#state) throw new ConnectionUnavailableError();
    await this.#engine.set(name, value, session);
    const sessionState = this.getSession(session);
    sessionState.variables[name] = value;
  }
  async unset(name, session) {
    if (!this.#engine || !this.#state) throw new ConnectionUnavailableError();
    await this.#engine.unset(name, session);
    const sessionState = this.getSession(session);
    delete sessionState.variables[name];
  }
  async invalidate(session) {
    if (!this.#engine) throw new ConnectionUnavailableError();
    await this.#engine.invalidate(session);
    this.#handleAuthInvalidate(session);
  }
  async reset(session) {
    if (!this.#engine || !this.#state) throw new ConnectionUnavailableError();
    await this.#engine.reset(session);
    const sessionState = this.getSession(session);
    sessionState.namespace = void 0;
    sessionState.database = void 0;
    sessionState.variables = {};
    this.#handleAuthInvalidate(session);
    const payload = {
      namespace: void 0,
      database: void 0
    };
    this.#eventPublisher.publish("using", payload, session);
  }
  begin(session) {
    const engine = this.#engine;
    if (!engine) throw new ConnectionUnavailableError();
    this.assertFeature(Features.Transactions);
    return this.#whenAuthenticated(session, () => engine.begin(session));
  }
  commit(txn, session) {
    if (!this.#engine) throw new ConnectionUnavailableError();
    this.assertFeature(Features.Transactions);
    return this.#engine.commit(txn, session);
  }
  cancel(txn, session) {
    if (!this.#engine) throw new ConnectionUnavailableError();
    this.assertFeature(Features.Transactions);
    return this.#engine.cancel(txn, session);
  }
  importSql(data, request) {
    const engine = this.#engine;
    if (!engine) throw new ConnectionUnavailableError();
    if (data instanceof ReadableStream || data instanceof Blob) this.assertFeature(Features.ExportImportRaw);
    return this.#whenAuthenticated(void 0, () => engine.importSql(data, request), request?.signal);
  }
  exportSql(options, request) {
    const engine = this.#engine;
    if (!engine) throw new ConnectionUnavailableError();
    return this.#whenAuthenticated(void 0, () => engine.exportSql(options, request), request?.signal);
  }
  exportMlModel(options, request) {
    const engine = this.#engine;
    if (!engine) throw new ConnectionUnavailableError();
    return this.#whenAuthenticated(void 0, () => engine.exportMlModel(options, request), request?.signal);
  }
  api(path, request, session, txn, options) {
    const engine = this.#engine;
    if (!engine) throw new ConnectionUnavailableError();
    this.assertFeature(Features.Api);
    return this.#whenAuthenticated(session, () => engine.api(path, request, session, txn, options), options?.signal);
  }
  query(query, session, txn, options) {
    const engine = this.#engine;
    if (!engine) throw new ConnectionUnavailableError();
    if (options?.trace?.length) this.assertFeature(Features.QueryTrace);
    const { beforeSend, ...rest } = options ?? {};
    const request = options && (beforeSend ? rest : options);
    if (!this.#needsPreparation()) return engine.query(query, session, txn, request);
    const prepare = /* @__PURE__ */ __name(async () => {
      const waiting = abortScope([request?.signal, beforeSend]);
      try {
        await this.#prepare(session, waiting.signal);
      } finally {
        waiting.dispose();
      }
    }, "prepare");
    return relayIterable(async () => {
      await prepare();
      return engine.query(query, session, txn, request);
    });
  }
  /**
  * Run a query as a different identity than the one of the session, for this query only.
  *
  * A call made as someone else must never silently run as the session. It is refused unless
  * the engine declares that it presents credentials with every request, and implements the
  * method which does so, which an engine, or something wrapping one, may not. The options
  * are those of `query()`, so that the query is abandoned by a signal the same way, and the
  * credential which is resolved for requests of the session is not asked for.
  */
  queryAs(query, session, txn, options) {
    const engine = this.#engine;
    if (!engine) throw new ConnectionUnavailableError();
    this.assertFeature(Features.PerRequestAuth);
    assertCredential(options.credential);
    if (typeof engine.queryAs !== "function") throw new UnsupportedFeatureError(Features.PerRequestAuth);
    if (options.trace?.length) this.assertFeature(Features.QueryTrace);
    return engine.queryAs(query, session, txn, options);
  }
  /**
  * Import as a different identity than the one of the connection, for this import only. As for
  * `queryAs()`, it is refused rather than run as the connection when the engine cannot present
  * the credential.
  */
  importSqlAs(data, request) {
    const engine = this.#credentialedEngine(request.credential);
    if (typeof engine.importSqlAs !== "function") throw new UnsupportedFeatureError(Features.PerRequestAuth);
    if (data instanceof ReadableStream || data instanceof Blob) this.assertFeature(Features.ExportImportRaw);
    return engine.importSqlAs(data, request);
  }
  /**
  * Export as a different identity than the one of the connection, for this export only. See
  * `importSqlAs()`.
  */
  exportSqlAs(options, request) {
    const engine = this.#credentialedEngine(request.credential);
    if (typeof engine.exportSqlAs !== "function") throw new UnsupportedFeatureError(Features.PerRequestAuth);
    return engine.exportSqlAs(options, request);
  }
  /**
  * Export a model as a different identity than the one of the connection, for this export
  * only. See `importSqlAs()`.
  */
  exportMlModelAs(options, request) {
    const engine = this.#credentialedEngine(request.credential);
    if (typeof engine.exportMlModelAs !== "function") throw new UnsupportedFeatureError(Features.PerRequestAuth);
    return engine.exportMlModelAs(options, request);
  }
  /**
  * Invoke a custom API as a different identity than the one of the session, for this call
  * only. See `importSqlAs()`.
  */
  apiAs(path, request, session, txn, options) {
    const engine = this.#credentialedEngine(options.credential);
    this.assertFeature(Features.Api);
    if (typeof engine.apiAs !== "function") throw new UnsupportedFeatureError(Features.PerRequestAuth);
    return engine.apiAs(path, request, session, txn, options);
  }
  /**
  * The engine for a call which is made as someone else, which must never be made as the
  * connection instead: it is refused unless the engine declares that it presents credentials
  * with every request.
  */
  #credentialedEngine(credential) {
    const engine = this.#engine;
    if (!engine) throw new ConnectionUnavailableError();
    this.assertFeature(Features.PerRequestAuth);
    assertCredential(credential);
    return engine;
  }
  gql(query, session, txn, options) {
    if (!this.#engine) throw new ConnectionUnavailableError();
    return this.#engine.gql(query, session, txn, options);
  }
  liveQuery(id$1) {
    if (!this.#engine) throw new ConnectionUnavailableError();
    return this.#engine.liveQuery(id$1);
  }
  async #onConnected() {
    try {
      const { version: version3 } = await this.version();
      this.#cachedVersion = version3;
      if (this.#checkVersion && !isVersionSupported(version3)) throw new UnsupportedVersionError(version3, MINIMUM_VERSION, MAXIMUM_VERSION);
      for (const session of this.#allSessions()) {
        if (session.id) await this.attach(session.id);
        await this.#restoreSession(session);
      }
      this.#engine?.ready(version3);
      this.#lastConnectionError = void 0;
      this.#status = "connected";
      this.#eventPublisher.publish("connected", version3);
    } catch (err) {
      this.#lastConnectionError = err;
      this.#eventPublisher.publish("error", err);
      this.#engine?.close();
      return;
    }
  }
  #onDisconnected() {
    for (const session of this.#allSessions()) this.#cancelAuthRenewal(session.id);
    this.#requestAuth?.clear();
    this.#requestAuth = void 0;
    this.#state = void 0;
    this.#engine = void 0;
    this.#status = "disconnected";
    this.#eventPublisher.publish("disconnected");
  }
  #onReconnecting() {
    this.#status = "reconnecting";
    this.#eventPublisher.publish("reconnecting");
  }
  #onEngineError(error3) {
    this.#lastConnectionError = error3;
    this.#eventPublisher.publish("error", error3);
  }
  #getTokens(session) {
    const sessionState = this.getSession(session);
    if (!sessionState.accessToken) return void 0;
    return {
      access: sessionState.accessToken,
      refresh: sessionState.refreshToken
    };
  }
  async #applyAuthProvider(session) {
    const provider = this.#authProvider;
    if (!provider) return false;
    const computed = await invokeProvider(provider, session);
    if (computed === null) return false;
    if (typeof computed === "string") await this.authenticate(computed, session, true);
    else await this.signin(computed, session, true);
    return true;
  }
  /**
  * Whether requests wait for credentials to be applied to their session. This is for
  * engines which hold credentials in a server side session: when the credentials change,
  * the session is authenticated again before the request is sent.
  */
  #needsPreparation() {
    return !!this.#requestAuth && !this.#engine?.features.has(Features.PerRequestAuth);
  }
  /**
  * Run a request once the session holds a current credential, for as long as it is wanted:
  * when the signal of the request aborts while the credential is being settled, the request is
  * not made, and fails with the reason of the signal.
  */
  #whenAuthenticated(session, run, signal) {
    if (!this.#needsPreparation()) return run();
    return this.#prepare(session, signal).then(run);
  }
  /**
  * Make sure the session holds a current credential before a request is sent on it.
  *
  * The request is only waiting for it. When its signal aborts, the wait ends with the reason of
  * the signal, which wins over a resolver which fails at the same moment, and nothing which has
  * begun is undone: a credential which is being applied to the session is applied in full,
  * for the next request, and one which has not begun to be resolved is not resolved for a
  * request which is no longer there.
  */
  async #prepare(session, signal) {
    const requestAuth = this.#requestAuth;
    const resolver = this.#requestResolver;
    throwIfAborted(signal);
    if (!requestAuth || !resolver) return;
    if (this.getSession(session).authOverriden) return;
    try {
      await this.#applyResolved(requestAuth, resolver, session, signal);
    } catch (error3) {
      throwIfAborted(signal);
      throw error3;
    }
  }
  async #applyResolved(requestAuth, resolver, session, signal) {
    await requestAuth.get(session, async () => {
      const provided = await invokeProvider(resolver, session);
      const sessionState = this.getSession(session);
      if (provided === null) {
        if (sessionState.accessToken) await this.invalidate(session);
        return void 0;
      }
      if (typeof provided === "string") {
        if (provided !== sessionState.accessToken) await this.authenticate(provided, session, true);
        return provided;
      }
      return (await this.signin(provided, session, true)).access;
    }, void 0, signal);
  }
  /**
  * Resolve the token a request on a session presents, for engines which present
  * credentials with every request. Nothing is applied to the session and no timers are
  * started, so a request which is the only thing alive does not keep the process running.
  *
  * The request which asks may be abandoned meanwhile, which is for it to handle, in
  * `fetchSurreal`: it stops waiting, and what is resolved is kept for the requests which follow.
  */
  async #requestToken(session, rejected, signal) {
    const requestAuth = this.#requestAuth;
    const resolver = this.#requestResolver;
    const engine = this.#engine;
    if (!requestAuth || !resolver || !engine) throw new ConnectionUnavailableError();
    const sessionState = this.getSession(session);
    if (sessionState.authOverriden) return sessionState.accessToken;
    return requestAuth.get(session, async () => {
      const provided = await invokeProvider(resolver, session);
      if (provided === null) return void 0;
      if (typeof provided === "string") return provided;
      return (await engine.signin(provided, session)).access;
    }, rejected, signal);
  }
  #cancelAuthRenewal(session) {
    if (!this.#state) return;
    const sessionState = this.getSession(session);
    this.#renewals.delete(sessionState);
    if (!sessionState.authRenewal) return;
    clearTimeout(sessionState.authRenewal);
    sessionState.authRenewal = void 0;
  }
  #handleAuthChanged(session) {
    if (!this.#state) return;
    const sessionState = this.getSession(session);
    const tokens = this.#getTokens(session);
    if (!tokens) return;
    this.#cancelAuthRenewal(session);
    this.#eventPublisher.publish("auth", tokens, session);
    if (this.#requestAuth && !sessionState.authOverriden) return;
    const payload = fastParseJwt(tokens.access);
    if (!payload || !payload.exp) return;
    const now = Math.floor(Date.now() / 1e3);
    const remaining = Math.max(payload.exp - now, 0);
    const delay = renewalDelay(remaining, this.#expiryMargin);
    const cycle = {
      retries: 0,
      failure: void 0
    };
    this.#renewals.set(sessionState, cycle);
    this.#scheduleRenewalTimer(session, cycle, delay * 1e3, () => this.#renew(session, cycle));
  }
  #scheduleRenewalTimer(session, cycle, delayMs, action) {
    const sessionState = this.getSession(session);
    const targetTime = Date.now() + Math.max(delayMs, 0);
    const tick = /* @__PURE__ */ __name(() => {
      if (!this.#isCurrentRenewal(session, cycle)) return;
      const remaining = targetTime - Date.now();
      if (remaining > 0) {
        const nextDelay = Math.min(remaining, ONE_DAY_MS);
        sessionState.authRenewal = setTimeout(tick, nextDelay);
      } else {
        sessionState.authRenewal = void 0;
        action();
      }
    }, "tick");
    const firstDelay = Math.min(Math.max(delayMs, 0), ONE_DAY_MS);
    sessionState.authRenewal = setTimeout(tick, firstDelay);
  }
  #isCurrentRenewal(session, cycle) {
    return this.#state !== void 0 && this.hasSession(session) && this.#renewals.get(this.getSession(session)) === cycle;
  }
  #renew(session, cycle) {
    if (!this.#isCurrentRenewal(session, cycle)) return;
    this.getSession(session).authRenewal = void 0;
    this.#applyAuthentication(session).catch((error3) => this.#renewalFailed(session, cycle, error3));
  }
  /**
  * A renewal failed. Left alone, the session would hold a token which is about to expire with
  * nothing scheduled to ever replace it, so the renewal is tried again, backing off like a
  * reconnect does, for as long as the token is valid. A renewal which succeeds, a new sign in,
  * an invalidated or closed session, and a lost connection all replace or cancel the cycle,
  * which makes a failure which arrives late a thing of the past. Once the token has expired
  * the session is invalidated, rather than lingering in an unknown state.
  *
  * The failure is reported once for the cycle, and not for every attempt, followed by the
  * last one when the session is invalidated.
  */
  #renewalFailed(session, cycle, error3) {
    if (!this.#state || !this.#isCurrentRenewal(session, cycle)) return;
    const failure = error3 instanceof AuthenticationError ? error3 : new AuthenticationError(error3);
    cycle.failure = failure;
    if (cycle.retries === 0) this.#eventPublisher.publish("error", failure);
    const sessionState = this.getSession(session);
    const expiry = sessionState.accessToken ? tokenExpiry(sessionState.accessToken) : void 0;
    const remaining = expiry === void 0 ? 0 : expiry * 1e3 - Date.now();
    if (remaining <= 0) {
      this.#giveUpRenewal(session, cycle);
      return;
    }
    const options = this.#state.reconnect.options;
    const delay = options.enabled ? backoffDelay(options, cycle.retries + 1) : Number.POSITIVE_INFINITY;
    if (delay >= remaining) {
      this.#scheduleRenewalTimer(session, cycle, remaining, () => this.#giveUpRenewal(session, cycle));
      return;
    }
    cycle.retries++;
    this.#scheduleRenewalTimer(session, cycle, delay, () => this.#renew(session, cycle));
  }
  #giveUpRenewal(session, cycle) {
    if (!this.#isCurrentRenewal(session, cycle)) return;
    const failure = cycle.failure;
    this.#abortAuthentication(session).then(() => {
      if (failure) this.#eventPublisher.publish("error", failure);
    }, (error3) => {
      if (this.#state && this.hasSession(session)) this.#handleAuthInvalidate(session);
      this.#eventPublisher.publish("error", error3 instanceof AuthenticationError ? error3 : new AuthenticationError(error3));
    });
  }
  async #abortAuthentication(session) {
    if (!this.#state) return;
    const sessionState = this.getSession(session);
    if (sessionState.accessToken) await this.invalidate(session);
  }
  async #applyAuthentication(session) {
    const sessionState = this.getSession(session);
    if (this.#requestAuth && !sessionState.authOverriden) {
      this.#requestAuth.forget(session);
      if (sessionState.accessToken) this.#handleAuthInvalidate(session);
      return;
    }
    if (this.#skipRenewal) {
      await this.#abortAuthentication(session);
      return;
    }
    if (sessionState.accessToken) {
      const payload = fastParseJwt(sessionState.accessToken);
      if (payload?.exp) {
        const now = Math.floor(Date.now() / 1e3);
        const remaining = Math.max(payload.exp - now, 0);
        if (remaining > renewalDelay(remaining, this.#expiryMargin)) try {
          await this.authenticate(sessionState.accessToken, session, true);
          return;
        } catch (err) {
          if (!(err instanceof ServerError)) throw err;
        }
      }
    }
    if (sessionState.refreshToken) {
      const tokens = this.#getTokens(session);
      if (tokens) try {
        await this.refresh(tokens, session, true);
        return;
      } catch (err) {
        if (!(err instanceof ServerError)) throw err;
      }
    }
    if (!sessionState.authOverriden) {
      const applied = await this.#applyAuthProvider(session);
      if (applied) return;
    }
    await this.#abortAuthentication(session);
  }
  #handleAuthInvalidate(session) {
    if (!this.#state) return;
    const sessionState = this.getSession(session);
    sessionState.accessToken = void 0;
    sessionState.refreshToken = void 0;
    this.#requestAuth?.forget(session);
    this.#cancelAuthRenewal(session);
    this.#eventPublisher.publish("auth", null, session);
  }
  hasSession(session) {
    if (!this.#state) return false;
    if (session === void 0) return true;
    return this.#state.sessions.has(session);
  }
  getSession(session) {
    if (!this.#state) throw new ConnectionUnavailableError();
    return getSessionFromState(this.#state, session);
  }
  async createSession(clone) {
    if (!this.#state) throw new ConnectionUnavailableError();
    this.assertFeature(Features.Sessions);
    const sessionId = Uuid.v4();
    await this.attach(sessionId);
    if (clone === null) this.#state.sessions.set(sessionId, this.#createSessionState(sessionId));
    else {
      const state = this.#cloneSessionState(sessionId, clone);
      this.#state.sessions.set(sessionId, state);
      await this.#restoreSession(state);
    }
    return sessionId;
  }
  async destroySession(session) {
    if (!this.#state) throw new ConnectionUnavailableError();
    if (!session || !this.#state.sessions.has(session)) throw new InvalidSessionError(session);
    await this.detach(session);
    this.#cancelAuthRenewal(session);
    this.#requestAuth?.forget(session);
    this.#state.sessions.delete(session);
  }
  #allSessions() {
    if (!this.#state) return [];
    return [this.#state.rootSession, ...Array.from(this.#state.sessions.values())];
  }
  #createSessionState(id$1) {
    return {
      id: id$1,
      variables: {},
      namespace: void 0,
      database: void 0,
      accessToken: void 0,
      refreshToken: void 0,
      authRenewal: void 0,
      authOverriden: false
    };
  }
  #cloneSessionState(newId, existingId) {
    const state = this.getSession(existingId);
    return {
      id: newId,
      variables: { ...state.variables },
      namespace: state.namespace,
      database: state.database,
      accessToken: state.accessToken,
      refreshToken: state.refreshToken,
      authRenewal: void 0,
      authOverriden: false
    };
  }
  async #restoreSession(session) {
    if (session.namespace || session.database) {
      const what = {
        namespace: session.namespace,
        database: session.database
      };
      await this.use(what, session.id);
    }
    for (const [name, value] of Object.entries(session.variables)) await this.set(name, value, session.id);
    await this.#applyAuthentication(session.id);
  }
};
function listenerFailures(error3) {
  return error3 instanceof PublishError ? error3.causes.flatMap(listenerFailures) : [error3];
}
__name(listenerFailures, "listenerFailures");
var Surreal = class Surreal2 extends SurrealSession {
  static {
    __name(this, "Surreal");
  }
  #publisher = new Publisher();
  #connection;
  subscribe(event, listener) {
    return this.#publisher.subscribe(event, listener);
  }
  /**
  * Construct a new Surreal instance with the provided options
  *
  * @param options Driver wide configuration options
  */
  constructor(options) {
    const driverOptions = options ?? {};
    const connection = new ConnectionController({
      options: driverOptions,
      uniqueId: getIncrementalID,
      codecs: Surreal2.#compileCodecs(driverOptions)
    });
    super(connection, void 0);
    connection.subscribe("connecting", () => {
      this.#publisher.publish("connecting");
    });
    connection.subscribe("connected", (version3) => {
      this.#publisher.publish("connected", version3);
    });
    connection.subscribe("disconnected", () => {
      this.#publisher.publish("disconnected");
    });
    connection.subscribe("reconnecting", () => {
      this.#publisher.publish("reconnecting");
    });
    connection.subscribe("error", (error3) => {
      this.#publisher.publish("error", error3);
    });
    super.subscribe("auth", (token) => {
      this.#publisher.publish("auth", token);
    });
    super.subscribe("using", (using) => {
      this.#publisher.publish("using", using);
    });
    this.#connection = connection;
  }
  static #compileCodecs(options) {
    const userCodecs = options.codecs ?? {};
    const codecOptions = options.codecOptions ?? {};
    const cbor2 = userCodecs.cbor2 ? userCodecs.cbor2(codecOptions) : userCodecs.cbor ? void 0 : new CborCodec({
      ...codecOptions,
      version: 2
    });
    const shaped = userCodecs.shaped ? userCodecs.shaped(codecOptions) : options.shaped && !userCodecs.cbor ? new ShapedCodec(codecOptions) : void 0;
    return {
      cbor: userCodecs.cbor?.(codecOptions) ?? new CborCodec(codecOptions),
      cbor2,
      shaped,
      flatbuffer: userCodecs.flatbuffer?.(codecOptions) ?? new FlatBufferCodec(codecOptions),
      json: userCodecs.json?.(codecOptions) ?? new JsonCodec(codecOptions)
    };
  }
  /**
  * Returns the status of the connection
  */
  get status() {
    return this.#connection.status;
  }
  /**
  * Returns whether the connection is considered connected
  *
  * Equivalent to `this.status === "connected"`
  */
  get isConnected() {
    return this.#connection.status === "connected";
  }
  /**
  * A promise which resolves when the connection is ready, or rejects
  * if a connection error occurs.
  */
  get ready() {
    return this.#connection.ready();
  }
  /**
  * Connect to a local or remote SurrealDB instance using the provided URL.
  *
  * Calling `connect()` will reset and dispose any existing sessions created with `newSession()`.
  *
  * @param url The endpoint to connect to
  * @param opts Options to configure the connection
  */
  async connect(url, opts = {}) {
    return this.#connection.connect(parseEndpoint(url), opts);
  }
  /**
  * Disconnect from the active SurrealDB instance
  */
  async close() {
    return this.#connection.disconnect();
  }
  /**
  * Check the health of the connected SurrealDB instance
  *
  * A remote instance is asked through its `/health` endpoint, and an embedded one with `ping`.
  * Resolves when the instance is healthy, and rejects when it is not, or cannot be reached.
  */
  health() {
    return this.#connection.health();
  }
  /**
  * Retrieves the version of the connected SurrealDB instance
  *
  * @example { version: "surrealdb-2.1.0" }
  */
  version() {
    return this.#connection.version();
  }
  /**
  * Checks whether a feature is available in the current connection
  *
  * @param feature The feature to check
  */
  isFeatureSupported(feature) {
    try {
      this.#connection.assertFeature(feature);
      return true;
    } catch (error3) {
      if (error3 instanceof UnavailableFeatureError || error3 instanceof UnsupportedFeatureError) return false;
      throw error3;
    }
  }
  /**
  * Lists all sessions created on the current connection.
  *
  * @returns A list of active session IDs
  */
  sessions() {
    return this.#connection.sessions();
  }
  /**
  * Create a fresh new session on this connection and return a dedicated `Surreal` instance scoped to it.
  *
  * This session will contain its own copy of global variables, namespace, database, and authentication state.
  * Connection related functions and event subscriptions will be shared with the original session. When the
  * connection reconnects, the session will be automatically restored.
  *
  * You can invoke `reset()` on the created session to destroy it, after which it cannot be used again.
  *
  * @returns The new session
  */
  async newSession() {
    const created = await this.#connection.createSession(null);
    return SurrealSession.of(this, created);
  }
  /**
  * Stop the primary session. This is equivalent to calling `close()` on the connection.
  */
  async closeSession() {
    await this.close();
  }
  /**
  * Import an existing export into the database.
  *
  * Like the other query methods, the import is only started once the returned `Promise` is
  * awaited. Chain `.signal()` to abandon it, `.requestTimeout()` to limit it, or `.progress()`
  * to follow it.
  *
  * An import is not transactional: a statement which fails does not stop the others. Over HTTP
  * and WebSocket, SurrealDB 3.1 and later say which statements failed, and the import rejects
  * with an `ImportError` listing them.
  *
  * @param input The data to import
  */
  import(input) {
    return new ImportPromise(this.#connection, input);
  }
  /**
  * Export the database as SurrealQL.
  *
  * By default, the result is returned as a string. Chain `.response()`
  * to receive the raw `Response` instead.
  *
  * @param options Optional export options
  */
  export(options) {
    return new ExportPromise(this.#connection, options ?? {}, false);
  }
  /**
  * Export a SurrealML model.
  *
  * By default, the result is returned as a `Uint8Array`. Chain `.response()`
  * to receive the raw `Response` instead.
  *
  * @param name The name of the ML model to export
  * @param version The version of the ML model to export
  */
  exportModel(name, version3) {
    return new ExportModelPromise(this.#connection, {
      name,
      version: version3
    }, false);
  }
};

// src/db.ts
async function connectDb(env2) {
  const db = new Surreal();
  await db.connect(env2.SURREAL_URL, {
    namespace: env2.SURREAL_NAMESPACE || "surrealmind",
    database: env2.SURREAL_DATABASE || "surrealmind",
    authentication: {
      username: env2.SURREAL_USER,
      password: env2.SURREAL_PASS
    }
  });
  return db;
}
__name(connectDb, "connectDb");

// src/routes/health.ts
var healthRouter = new Hono3();
healthRouter.get("/", async (c) => {
  const start = Date.now();
  let db = null;
  try {
    db = await connectDb(c.env);
    const [result] = await db.query("RETURN time::now();");
    const latencyMs = Date.now() - start;
    return c.json({
      status: "healthy",
      service: "surrealmind-edge-api",
      surrealdb: "connected",
      dbTimestamp: result,
      latencyMs
    }, 200);
  } catch (err) {
    return c.json({
      status: "unhealthy",
      service: "surrealmind-edge-api",
      surrealdb: "disconnected",
      error: err?.message || String(err),
      latencyMs: Date.now() - start
    }, 503);
  } finally {
    if (db) {
      await db.close().catch(() => {
      });
    }
  }
});

// src/routes/promotions.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/utils/config.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_dotenv = __toESM(require_dist(), 1);
import_dotenv.default.config();

// ../../packages/core/src/utils/surrealdb.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/node_modules/surrealdb/dist/surrealdb.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SqonError2 = class extends Error {
  static {
    __name(this, "SqonError");
  }
};
var InvalidDateError2 = class extends SqonError2 {
  static {
    __name(this, "InvalidDateError");
  }
  name = "InvalidDateError";
  constructor(dateOrMessage) {
    if (typeof dateOrMessage === "string") super(dateOrMessage);
    else super(`The provided date is invalid: ${dateOrMessage}`);
  }
};
var InvalidRecordIdError2 = class extends SqonError2 {
  static {
    __name(this, "InvalidRecordIdError");
  }
  name = "InvalidRecordIdError";
};
var InvalidDurationError2 = class extends SqonError2 {
  static {
    __name(this, "InvalidDurationError");
  }
  name = "InvalidDurationError";
};
var InvalidDecimalError2 = class extends SqonError2 {
  static {
    __name(this, "InvalidDecimalError");
  }
  name = "InvalidDecimalError";
};
var InvalidNumberError2 = class extends SqonError2 {
  static {
    __name(this, "InvalidNumberError");
  }
  name = "InvalidNumberError";
};
var InvalidTableError2 = class extends SqonError2 {
  static {
    __name(this, "InvalidTableError");
  }
  name = "InvalidTableError";
};
var TextParseError2 = class extends SqonError2 {
  static {
    __name(this, "TextParseError");
  }
  name = "TextParseError";
  /** The zero-based character offset at which parsing failed */
  offset;
  constructor(message, offset) {
    super(`${message} (at offset ${offset})`);
    this.offset = offset;
  }
};
var ShapedFrameError2 = class extends SqonError2 {
  static {
    __name(this, "ShapedFrameError");
  }
  name = "ShapedFrameError";
  constructor(message) {
    super(`Invalid shaped frame: ${message}`);
  }
};
var InvalidRegexError2 = class extends SqonError2 {
  static {
    __name(this, "InvalidRegexError");
  }
  name = "InvalidRegexError";
};
var UnsupportedValueError2 = class extends SqonError2 {
  static {
    __name(this, "UnsupportedValueError");
  }
  name = "UnsupportedValueError";
};
var VALUE_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.Value");
var RECORD_ID_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.RecordId");
var STRING_RECORD_ID_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.StringRecordId");
var RECORD_ID_RANGE_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.RecordIdRange");
var UUID_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.Uuid");
var DATETIME_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.DateTime");
var DURATION_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.Duration");
var DECIMAL_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.Decimal");
var TABLE_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.Table");
var RANGE_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.Range");
var FUTURE_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.Future");
var FILE_REF_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.FileRef");
var GEOMETRY_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.Geometry");
var GEOMETRY_POINT_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryPoint");
var BOUND_INCLUDED_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.BoundIncluded");
var BOUND_EXCLUDED_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.BoundExcluded");
var GEOMETRY_LINE_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryLine");
var GEOMETRY_POLYGON_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryPolygon");
var GEOMETRY_MULTI_POINT_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryMultiPoint");
var GEOMETRY_MULTI_LINE_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryMultiLine");
var GEOMETRY_MULTI_POLYGON_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryMultiPolygon");
var GEOMETRY_COLLECTION_SYMBOL$12 = /* @__PURE__ */ Symbol.for("surrealdb.GeometryCollection");
var SIZED_NUMBER_SYMBOL2 = /* @__PURE__ */ Symbol.for("surrealdb.SizedNumber");
var PLAIN_DATE_SYMBOL2 = /* @__PURE__ */ Symbol.for("surrealdb.PlainDate");
var PLAIN_TIME_SYMBOL2 = /* @__PURE__ */ Symbol.for("surrealdb.PlainTime");
var TIMESTAMP_SYMBOL2 = /* @__PURE__ */ Symbol.for("surrealdb.Timestamp");
var INTERVAL_SYMBOL2 = /* @__PURE__ */ Symbol.for("surrealdb.Interval");
var BIG_DECIMAL_SYMBOL2 = /* @__PURE__ */ Symbol.for("surrealdb.BigDecimal");
var REGEX_SYMBOL2 = /* @__PURE__ */ Symbol.for("surrealdb.Regex");
function markSymbol$12(obj, symbol) {
  if (obj && typeof obj === "object") obj[symbol] = true;
}
__name(markSymbol$12, "markSymbol$1");
function hasSymbol$12(obj, symbol) {
  return !!(obj && typeof obj === "object" && obj[symbol]);
}
__name(hasSymbol$12, "hasSymbol$1");
var Value2 = class Value$12 {
  static {
    __name(this, "Value$1");
  }
  static _useExperimentalToJson = false;
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, VALUE_SYMBOL$12);
  }
  constructor() {
    markSymbol$12(this, VALUE_SYMBOL$12);
  }
  /**
  * Enable the new experimental toJSON implementation.
  *
  * When enabled, the `toJSON` method will return values encoded by the `JsonCodec` resulting in a type-safe JSON representation.
  */
  static useExperimentalToJson(enabled) {
    Value$12._useExperimentalToJson = enabled ?? true;
  }
};
function equals2(x, y) {
  if (typeof x === "bigint" && typeof y === "number") return x <= Number.MAX_SAFE_INTEGER ? Number(x) === y : x === BigInt(y);
  if (typeof x === "number" && typeof y === "bigint") return y <= Number.MAX_SAFE_INTEGER ? x === Number(y) : BigInt(x) === y;
  if (Object.is(x, y)) return true;
  if (x instanceof Date && y instanceof Date) return x.getTime() === y.getTime();
  if (x instanceof RegExp && y instanceof RegExp) return x.toString() === y.toString();
  if (x instanceof Value2 && y instanceof Value2) return x.equals(y);
  if (typeof x !== "object" || x === null || typeof y !== "object" || y === null) return false;
  const keysX = Reflect.ownKeys(x);
  const keysY = Reflect.ownKeys(y);
  if (keysX.length !== keysY.length) return false;
  for (let i = 0; i < keysX.length; i++) {
    if (!Reflect.has(y, keysX[i])) return false;
    if (!equals2(x[keysX[i]], y[keysX[i]])) return false;
  }
  return true;
}
__name(equals2, "equals");
var BoundIncluded2 = class {
  static {
    __name(this, "BoundIncluded");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, BOUND_INCLUDED_SYMBOL$12);
  }
  constructor(value) {
    this.value = value;
    markSymbol$12(this, BOUND_INCLUDED_SYMBOL$12);
  }
};
var BoundExcluded2 = class {
  static {
    __name(this, "BoundExcluded");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, BOUND_EXCLUDED_SYMBOL$12);
  }
  constructor(value) {
    this.value = value;
    markSymbol$12(this, BOUND_EXCLUDED_SYMBOL$12);
  }
};
function toBase64Url2(bytes) {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
__name(toBase64Url2, "toBase64Url");
function fromBase64Url2(str) {
  const padded = str.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}
__name(fromBase64Url2, "fromBase64Url");
var SIZED_KINDS2 = [
  "i8",
  "u8",
  "i16",
  "u16",
  "i32",
  "u32",
  "u64",
  "f16",
  "f32"
];
var createNone2 = /* @__PURE__ */ __name(() => ({ $none: true }), "createNone");
var createDatetime2 = /* @__PURE__ */ __name((value) => ({ $datetime: value }), "createDatetime");
var createDecimal2 = /* @__PURE__ */ __name((value) => ({ $decimal: value }), "createDecimal");
var createDuration2 = /* @__PURE__ */ __name((value) => ({ $duration: value }), "createDuration");
var createUuid2 = /* @__PURE__ */ __name((value) => ({ $uuid: value }), "createUuid");
var createRecordId2 = /* @__PURE__ */ __name((tb, id$1) => ({ $recordId: {
  tb,
  id: id$1
} }), "createRecordId");
var createStringRecordId2 = /* @__PURE__ */ __name((value) => ({ $recordIdString: value }), "createStringRecordId");
var createTable2 = /* @__PURE__ */ __name((name) => ({ $table: name }), "createTable");
var createRange2 = /* @__PURE__ */ __name((begin, end) => ({ $range: {
  begin,
  end
} }), "createRange");
var createBoundIncluded2 = /* @__PURE__ */ __name((value) => ({ $boundIncluded: value }), "createBoundIncluded");
var createBoundExcluded2 = /* @__PURE__ */ __name((value) => ({ $boundExcluded: value }), "createBoundExcluded");
var createFile2 = /* @__PURE__ */ __name((bucket, key) => ({ $file: {
  bucket,
  key
} }), "createFile");
var createFuture2 = /* @__PURE__ */ __name((body) => ({ $future: body }), "createFuture");
var createBytes2 = /* @__PURE__ */ __name((value) => ({ $bytes: value }), "createBytes");
var createGeometry2 = /* @__PURE__ */ __name((value) => ({ $geometry: value }), "createGeometry");
var createSet2 = /* @__PURE__ */ __name((items) => ({ $set: items }), "createSet");
var createObject2 = /* @__PURE__ */ __name((value) => ({ $object: value }), "createObject");
var createDate2 = /* @__PURE__ */ __name((value) => ({ $date: value }), "createDate");
var createTime2 = /* @__PURE__ */ __name((value) => ({ $time: value }), "createTime");
var createTimestamp2 = /* @__PURE__ */ __name((value) => ({ $timestamp: value }), "createTimestamp");
var createInterval2 = /* @__PURE__ */ __name((months, days, micros) => ({ $interval: {
  months,
  days,
  micros
} }), "createInterval");
var createBigDecimal2 = /* @__PURE__ */ __name((value) => ({ $bigdecimal: value }), "createBigDecimal");
var createRegex2 = /* @__PURE__ */ __name((pattern) => ({ $regex: pattern }), "createRegex");
var createSized2 = /* @__PURE__ */ __name((kind, value) => ({ [`$${kind}`]: value }), "createSized");
var isNone2 = /* @__PURE__ */ __name((value) => {
  return "$none" in value && value.$none === true;
}, "isNone");
var isDatetime2 = /* @__PURE__ */ __name((value) => {
  return "$datetime" in value && typeof value.$datetime === "string";
}, "isDatetime");
var isDecimal2 = /* @__PURE__ */ __name((value) => {
  return "$decimal" in value && typeof value.$decimal === "string";
}, "isDecimal");
var isDuration2 = /* @__PURE__ */ __name((value) => {
  return "$duration" in value && typeof value.$duration === "string";
}, "isDuration");
var isUuid2 = /* @__PURE__ */ __name((value) => {
  return "$uuid" in value && typeof value.$uuid === "string";
}, "isUuid");
var isStringRecordId2 = /* @__PURE__ */ __name((value) => {
  return "$recordIdString" in value && typeof value.$recordIdString === "string";
}, "isStringRecordId");
var isRecordId2 = /* @__PURE__ */ __name((value) => {
  return "$recordId" in value && !!value.$recordId && typeof value.$recordId === "object" && "tb" in value.$recordId && typeof value.$recordId.tb === "string" && "id" in value.$recordId;
}, "isRecordId");
var isTable2 = /* @__PURE__ */ __name((value) => {
  return "$table" in value && typeof value.$table === "string";
}, "isTable");
var isGeometry2 = /* @__PURE__ */ __name((value) => {
  return "$geometry" in value && typeof value.$geometry === "object" && value.$geometry !== null;
}, "isGeometry");
var isSet2 = /* @__PURE__ */ __name((value) => {
  return "$set" in value && Array.isArray(value.$set);
}, "isSet");
var isFile2 = /* @__PURE__ */ __name((value) => {
  return "$file" in value && typeof value.$file === "object" && value.$file !== null;
}, "isFile");
var isRange2 = /* @__PURE__ */ __name((value) => {
  return "$range" in value && typeof value.$range === "object" && value.$range !== null;
}, "isRange");
var isBytes2 = /* @__PURE__ */ __name((value) => {
  return "$bytes" in value && typeof value.$bytes === "string";
}, "isBytes");
var isFuture2 = /* @__PURE__ */ __name((value) => {
  return "$future" in value && typeof value.$future === "string";
}, "isFuture");
var isBoundIncluded2 = /* @__PURE__ */ __name((value) => {
  return "$boundIncluded" in value;
}, "isBoundIncluded");
var isBoundExcluded2 = /* @__PURE__ */ __name((value) => {
  return "$boundExcluded" in value;
}, "isBoundExcluded");
var isObject2 = /* @__PURE__ */ __name((value) => {
  return "$object" in value && typeof value.$object === "object" && value.$object !== null;
}, "isObject");
var isDate2 = /* @__PURE__ */ __name((value) => {
  return "$date" in value && typeof value.$date === "string";
}, "isDate");
var isTime2 = /* @__PURE__ */ __name((value) => {
  return "$time" in value && typeof value.$time === "string";
}, "isTime");
var isTimestamp2 = /* @__PURE__ */ __name((value) => {
  return "$timestamp" in value && typeof value.$timestamp === "string";
}, "isTimestamp");
var isInterval2 = /* @__PURE__ */ __name((value) => {
  if (!("$interval" in value) || typeof value.$interval !== "object" || !value.$interval) return false;
  const parts = value.$interval;
  return typeof parts.months === "number" && typeof parts.days === "number" && typeof parts.micros === "string";
}, "isInterval");
var isBigDecimal2 = /* @__PURE__ */ __name((value) => {
  return "$bigdecimal" in value && typeof value.$bigdecimal === "string";
}, "isBigDecimal");
var isRegex2 = /* @__PURE__ */ __name((value) => {
  return "$regex" in value && typeof value.$regex === "string";
}, "isRegex");
var sizedKind2 = /* @__PURE__ */ __name((value) => {
  const keys = Object.keys(value);
  if (keys.length !== 1) return void 0;
  const kind = SIZED_KINDS2.find((kind$1) => keys[0] === `$${kind$1}`);
  const arg = value[keys[0]];
  return kind && (typeof arg === "number" || typeof arg === "string") ? kind : void 0;
}, "sizedKind");
var sizedClass2 = /* @__PURE__ */ __name((kind) => ({
  i8: I82,
  u8: U82,
  i16: I162,
  u16: U162,
  i32: I322,
  u32: U322,
  u64: U642,
  f16: F162,
  f32: F322
})[kind], "sizedClass");
var JsonCodec2 = class JsonCodec$12 {
  static {
    __name(this, "JsonCodec$1");
  }
  /**
  * The default JsonCodec instance.
  */
  static DEFAULT = new JsonCodec$12({});
  #options;
  constructor(options) {
    this.#options = options;
  }
  /**
  * Encode a value tree to a SQON-J structure (JSON-safe plain object tree).
  */
  encode(data) {
    return this.#serialize(data);
  }
  /**
  * Decode a SQON-J structure back to value instances.
  */
  decode(data) {
    return this.#deserialize(data);
  }
  #serialize(input) {
    const value = this.#encodeValue(input);
    const wasEncoded = value !== input;
    if (this.#isEncodePrimitive(value)) return value;
    if (value === void 0) return createNone2();
    if (value instanceof Date) return createDatetime2(value.toISOString());
    if (value instanceof DateTime2) return createDatetime2(value.toISOString());
    if (value instanceof Decimal2) return createDecimal2(value.toString());
    if (value instanceof Duration2) return createDuration2(value.toString());
    if (value instanceof Uuid2) return createUuid2(value.toString());
    if (value instanceof _RecordId2) return createRecordId2(value.table.name, this.#serialize(value.id));
    if (value instanceof StringRecordId2) return createStringRecordId2(value.toString());
    if (value instanceof _RecordIdRange2) return createRecordId2(value.table.name, createRange2(this.#encodeBound(value.begin), this.#encodeBound(value.end)));
    if (value instanceof _Table2) return createTable2(value.name);
    if (value instanceof Range2) return createRange2(this.#encodeBound(value.begin), this.#encodeBound(value.end));
    if (value instanceof FileRef2) return createFile2(value.bucket, value.key);
    if (value instanceof Future2) return createFuture2(value.body);
    if (value instanceof Uint8Array) return createBytes2(toBase64Url2(value));
    if (value instanceof Geometry2) return createGeometry2(value.toJSON());
    if (value instanceof PlainDate2) return createDate2(value.toString());
    if (value instanceof PlainTime2) return createTime2(value.toString());
    if (value instanceof Timestamp2) return createTimestamp2(value.toString());
    if (value instanceof Interval2) return createInterval2(value.months, value.days, value.micros.toString());
    if (value instanceof BigDecimal2) return createBigDecimal2(value.toString());
    if (value instanceof Regex2) return createRegex2(value.pattern);
    if (value instanceof SizedNumber2) return createSized2(value.kind, this.#encodeSized(value.value));
    if (value instanceof Set) return createSet2([...value].map((v) => this.#serialize(v)));
    switch (Object.getPrototypeOf(value)) {
      case Array.prototype:
        return value.map((v) => this.#serialize(v));
      case Map.prototype:
        return Object.fromEntries(Array.from(value.entries()).map(([k, v]) => [k, this.#serialize(v)]).filter(([, encoded]) => encoded !== void 0));
      case Object.prototype: {
        const obj = value;
        const result = {};
        let escaped = false;
        for (const key in obj) {
          const encoded = this.#serialize(obj[key]);
          if (encoded !== void 0) {
            result[key] = encoded;
            if (!wasEncoded && key[0] === "$") escaped = true;
          }
        }
        return escaped ? createObject2(result) : result;
      }
    }
    return value;
  }
  /** A number within ±2^53 as itself, and anything JSON cannot hold as a string */
  #encodeSized(value) {
    if (typeof value === "bigint") return value <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(value) : value.toString();
    if (Object.is(value, -0)) return "-0";
    return Number.isFinite(value) ? value : String(value);
  }
  #encodeBound(bound) {
    if (bound instanceof BoundIncluded2) return createBoundIncluded2(this.#serialize(bound.value));
    if (bound instanceof BoundExcluded2) return createBoundExcluded2(this.#serialize(bound.value));
    return null;
  }
  #isEncodePrimitive(value) {
    return value === null || typeof value === "boolean" || typeof value === "string" || typeof value === "number" || typeof value === "bigint";
  }
  #deserialize(input) {
    if (this.#isDecodePrimitive(input)) return this.#decodeValue(input);
    if (Array.isArray(input)) return this.#decodeValue(input.map((v) => this.#deserialize(v)));
    const obj = input;
    if (isObject2(obj)) return Object.fromEntries(Object.entries(obj.$object).map(([k, v]) => [k, this.#deserialize(v)]).filter(([, decoded]) => decoded !== void 0));
    if (isNone2(obj)) return this.#decodeValue(void 0);
    if (isDatetime2(obj)) return this.#decodeValue(this.#resolveSpecDate(obj.$datetime));
    if (isDecimal2(obj)) return this.#decodeValue(new Decimal2(obj.$decimal));
    if (isDuration2(obj)) return this.#decodeValue(new Duration2(obj.$duration));
    if (isUuid2(obj)) return this.#decodeValue(new Uuid2(obj.$uuid));
    if (isRecordId2(obj)) {
      const id$1 = this.#deserialize(obj.$recordId.id);
      if (id$1 instanceof Range2) return this.#decodeValue(new _RecordIdRange2(obj.$recordId.tb, id$1.begin, id$1.end));
      return this.#decodeValue(new _RecordId2(obj.$recordId.tb, id$1));
    }
    if (isStringRecordId2(obj)) return this.#decodeValue(new StringRecordId2(obj.$recordIdString));
    if (isTable2(obj)) return this.#decodeValue(new _Table2(obj.$table));
    if (isGeometry2(obj)) return this.#decodeValue(Geometry2.fromJSON(obj.$geometry));
    if (isSet2(obj)) return this.#decodeValue(new Set(obj.$set.map((v) => this.#deserialize(v))));
    if (isFile2(obj)) return this.#decodeValue(new FileRef2(obj.$file.bucket, obj.$file.key));
    if (isRange2(obj)) return this.#decodeValue(new Range2(this.#decodeBound(obj.$range.begin), this.#decodeBound(obj.$range.end)));
    if (isBytes2(obj)) return this.#decodeValue(fromBase64Url2(obj.$bytes));
    if (isFuture2(obj)) return this.#decodeValue(new Future2(obj.$future));
    if (isDate2(obj)) return this.#decodeValue(new PlainDate2(obj.$date));
    if (isTime2(obj)) return this.#decodeValue(new PlainTime2(obj.$time));
    if (isTimestamp2(obj)) return this.#decodeValue(new Timestamp2(obj.$timestamp));
    if (isInterval2(obj)) {
      const { months, days, micros } = obj.$interval;
      return this.#decodeValue(new Interval2([
        months,
        days,
        BigInt(micros)
      ]));
    }
    if (isBigDecimal2(obj)) return this.#decodeValue(new BigDecimal2(obj.$bigdecimal));
    if (isRegex2(obj)) return this.#decodeValue(new Regex2(obj.$regex));
    const kind = sizedKind2(obj);
    if (kind) {
      const arg = obj[`$${kind}`];
      const value = kind === "u64" ? BigInt(arg) : arg === "-0" ? -0 : Number(arg);
      return this.#decodeValue(new (sizedClass2(kind))(value));
    }
    return this.#decodeValue(Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, this.#deserialize(v)]).filter(([, decoded]) => decoded !== void 0)));
  }
  #decodeBound(input) {
    if (this.#isDecodePrimitive(input)) return void 0;
    const obj = input;
    if (isBoundIncluded2(obj)) return new BoundIncluded2(this.#deserialize(obj.$boundIncluded));
    if (isBoundExcluded2(obj)) return new BoundExcluded2(this.#deserialize(obj.$boundExcluded));
    return void 0;
  }
  #isDecodePrimitive(value) {
    return value === null || value === void 0 || typeof value !== "object";
  }
  #resolveSpecDate(v) {
    return this.#options.useNativeDates ? new Date(v) : new DateTime2(v);
  }
  #encodeValue(v) {
    return this.#options.valueEncodeVisitor ? this.#options.valueEncodeVisitor(v) : v;
  }
  #decodeValue(v) {
    return this.#options.valueDecodeVisitor ? this.#options.valueDecodeVisitor(v) : v;
  }
};
var Decimal2 = class Decimal$12 extends Value2 {
  static {
    __name(this, "Decimal$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, DECIMAL_SYMBOL$12);
  }
  _int;
  _frac;
  _scale;
  constructor(input) {
    super();
    if (input instanceof Decimal$12) {
      this._int = input._int;
      this._frac = input._frac;
      this._scale = input._scale;
    } else if (typeof input === "bigint") {
      this._int = input;
      this._frac = 0n;
      this._scale = 0;
    } else if (Array.isArray(input)) {
      let [int$1, frac, scale] = input;
      const maxFrac = 10n ** BigInt(scale);
      if (frac >= maxFrac) {
        int$1 += frac / maxFrac;
        frac %= maxFrac;
      }
      this._int = int$1;
      this._frac = frac;
      this._scale = scale;
    } else if (typeof input === "string" && /e/i.test(input)) {
      const dec = Decimal$12.fromScientificNotation(input);
      this._int = dec._int;
      this._frac = dec._frac;
      this._scale = dec._scale;
    } else {
      const str = input.toString().trim();
      const isNegative = str.startsWith("-");
      const clean = isNegative ? str.slice(1) : str;
      const [intStrRaw, fracStrRaw = ""] = clean.split(".");
      const safeInt = /^\d+$/.test(intStrRaw) ? intStrRaw : "0";
      const safeFrac = /^\d+$/.test(fracStrRaw) ? fracStrRaw : "0";
      const intStr = safeInt || "0";
      const fracStr = safeFrac.padEnd(safeFrac.length || 1, "0");
      const absInt = BigInt(intStr);
      const absFrac = BigInt(fracStr);
      this._int = isNegative ? -absInt : absInt;
      this._frac = isNegative ? -absFrac : absFrac;
      this._scale = safeFrac.length;
    }
    markSymbol$12(this, DECIMAL_SYMBOL$12);
  }
  equals(other) {
    if (!(other instanceof Decimal$12)) return false;
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    const scale = Math.max(a.scale, b.scale);
    const aVal = a.value * 10n ** BigInt(scale - a.scale);
    const bVal = b.value * 10n ** BigInt(scale - b.scale);
    return aVal === bVal;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns The canonical string representation of the decimal with
  * trailing zeros in fractional part trimmed
  */
  toString() {
    const sign = this._int < 0n || this._frac < 0n ? "-" : "";
    const absInt = this._int < 0n ? -this._int : this._int;
    const absFrac = this._frac < 0n ? -this._frac : this._frac;
    if (this._scale === 0) return `${sign}${absInt}`;
    let fracStr = absFrac.toString().padStart(this._scale, "0");
    let end = fracStr.length;
    while (end > 0 && fracStr.charCodeAt(end - 1) === 48) end--;
    fracStr = fracStr.slice(0, end);
    return fracStr === "" ? `${sign}${absInt}` : `${sign}${absInt}.${fracStr}`;
  }
  /** Returns the integer part of the number */
  get int() {
    return this._int;
  }
  /** Returns the fractional part of the number */
  get frac() {
    return this._frac;
  }
  /** Returns the scale (number of decimal places) */
  get scale() {
    return this._scale;
  }
  /**
  * Adds another Decimal to this one
  *
  * @param other The Decimal to add
  * @returns A new Decimal representing the sum
  */
  add(other) {
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    const scale = Math.max(a.scale, b.scale);
    const scaleDiffA = BigInt(scale - a.scale);
    const scaleDiffB = BigInt(scale - b.scale);
    const valA = a.value * 10n ** scaleDiffA;
    const valB = b.value * 10n ** scaleDiffB;
    const sum = valA + valB;
    const intPart = sum / 10n ** BigInt(scale);
    const fracPart = sum % 10n ** BigInt(scale);
    return new Decimal$12([
      intPart,
      fracPart,
      scale
    ]);
  }
  /**
  * Subtracts another Decimal from this one
  *
  * @param other The Decimal to subtract
  * @returns A new Decimal representing the difference
  */
  sub(other) {
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    const scale = Math.max(a.scale, b.scale);
    const factorA = 10n ** BigInt(scale - a.scale);
    const factorB = 10n ** BigInt(scale - b.scale);
    const valA = a.value * factorA;
    const valB = b.value * factorB;
    const result = valA - valB;
    const intPart = result / 10n ** BigInt(scale);
    const fracPart = result % 10n ** BigInt(scale);
    return new Decimal$12([
      intPart,
      fracPart,
      scale
    ]);
  }
  /**
  * Multiplies this Decimal by another
  *
  * @param other The Decimal to multiply by
  * @returns A new Decimal representing the product
  */
  mul(other) {
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    const result = a.value * b.value;
    const scale = a.scale + b.scale;
    const intPart = result / 10n ** BigInt(scale);
    const fracPart = result % 10n ** BigInt(scale);
    return new Decimal$12([
      intPart,
      fracPart,
      scale
    ]);
  }
  /**
  * Divides this Decimal by another, with fixed precision
  *
  * @param other The Decimal to divide by
  * @returns A new Decimal representing the quotient
  */
  div(other) {
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    if (b.value === 0n) throw new InvalidDecimalError2("Division by zero");
    const targetScale = 38;
    const scaleDiff = BigInt(targetScale + b.scale - a.scale);
    const scaledA = a.value * 10n ** scaleDiff;
    const result = scaledA / b.value;
    const intPart = result / 10n ** BigInt(targetScale);
    const fracPart = result % 10n ** BigInt(targetScale);
    return new Decimal$12([
      intPart,
      fracPart,
      targetScale
    ]);
  }
  /**
  * Computes the remainder of this Decimal divided by another
  *
  * @param other The divisor Decimal
  * @returns A new Decimal representing the remainder
  */
  mod(other) {
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    if (b.value === 0n) throw new InvalidDecimalError2("Modulo by zero");
    const scale = Math.max(a.scale, b.scale);
    const scaleDiffA = BigInt(scale - a.scale);
    const scaleDiffB = BigInt(scale - b.scale);
    const valA = a.value * 10n ** scaleDiffA;
    const valB = b.value * 10n ** scaleDiffB;
    const result = valA % valB;
    const intPart = result / 10n ** BigInt(scale);
    const fracPart = result % 10n ** BigInt(scale);
    return new Decimal$12([
      intPart,
      fracPart,
      scale
    ]);
  }
  /**
  * Returns the absolute value of this Decimal
  * @returns A new Decimal with non-negative components
  */
  abs() {
    return this._int < 0n || this._frac < 0n ? new Decimal$12([
      this._int < 0n ? -this._int : this._int,
      this._frac < 0n ? -this._frac : this._frac,
      this._scale
    ]) : this;
  }
  /**
  * Returns the negated value of this Decimal
  * @returns A new Decimal with inverted sign
  */
  neg() {
    return new Decimal$12([
      -this._int,
      -this._frac,
      this._scale
    ]);
  }
  /**
  * Checks if the value is exactly zero
  * @returns True if both int and frac parts are zero
  */
  isZero() {
    return this._int === 0n && this._frac === 0n;
  }
  /**
  * Checks if the value is negative
  * @returns True if negative
  */
  isNegative() {
    return this._int < 0n || this._int === 0n && this._frac < 0n;
  }
  /**
  * Compares this Decimal with another
  *
  * @param other The Decimal to compare with
  * @returns -1 if less, 0 if equal, 1 if greater
  */
  compare(other) {
    const a = this.toBigIntWithScale();
    const b = other.toBigIntWithScale();
    const scale = Math.max(a.scale, b.scale);
    const aVal = a.value * 10n ** BigInt(scale - a.scale);
    const bVal = b.value * 10n ** BigInt(scale - b.scale);
    if (aVal < bVal) return -1;
    if (aVal > bVal) return 1;
    return 0;
  }
  /**
  * Rounds the Decimal to a fixed number of decimal places
  *
  * @param precision Number of digits to keep after the decimal point
  * @returns The new decimal instance
  */
  round(precision) {
    if (precision < 0) throw new InvalidDecimalError2("Precision must be >= 0");
    const full = this.toBigIntWithScale();
    if (this._scale <= precision) {
      const factor$1 = 10n ** BigInt(precision - this._scale);
      const newValue = full.value * factor$1;
      const intPart$1 = newValue / 10n ** BigInt(precision);
      const fracPart$1 = newValue % 10n ** BigInt(precision);
      return new Decimal$12([
        intPart$1,
        fracPart$1,
        precision
      ]);
    }
    const factor = 10n ** BigInt(this._scale - precision);
    const half = factor / 2n;
    const rounded = full.value >= 0n ? (full.value + half) / factor : (full.value - half) / factor;
    const intPart = rounded / 10n ** BigInt(precision);
    const fracPart = rounded % 10n ** BigInt(precision);
    return new Decimal$12([
      intPart,
      fracPart,
      precision
    ]);
  }
  /**
  * Converts the number to fixed-point notation string
  *
  * @param precision Number of digits after the decimal point
  */
  toFixed(precision) {
    const rounded = this.round(precision);
    const sign = rounded.int < 0n || rounded.frac < 0n ? "-" : "";
    const absInt = rounded.int < 0n ? -rounded.int : rounded.int;
    if (precision === 0) return `${sign}${absInt}`;
    const absFrac = rounded.frac < 0n ? -rounded.frac : rounded.frac;
    const fracStr = absFrac.toString().padStart(precision, "0");
    return `${sign}${absInt}.${fracStr}`;
  }
  /**
  * Converts the Decimal to a native JavaScript number
  * @returns A number approximation (may lose precision)
  */
  toFloat() {
    return Number(this.toString());
  }
  /**
  * Converts to bigint by truncating the fractional part
  * @returns An bigint approximation (may lose precision)
  */
  toBigInt() {
    if (this._int >= 0n) return this._int;
    if (this._frac !== 0n) return this._int - 1n;
    return this._int;
  }
  /**
  * Returns the raw parts of the Decimal
  * @returns An object with int, frac, and scale
  */
  toParts() {
    return {
      int: this._int,
      frac: this._frac,
      scale: this._scale
    };
  }
  /**
  * Converts to scientific notation string (e.g., "1.23e4")
  */
  toScientific() {
    if (this.isZero()) return "0e0";
    const negative = this.isNegative();
    const abs = negative ? this.neg() : this;
    const str = abs.toString();
    const [intPart, fracPart = ""] = str.split(".");
    const raw$1 = (intPart + fracPart).replace(/^0+/, "");
    const firstSig = raw$1.search(/[1-9]/);
    if (firstSig === -1) return "0e0";
    let exponent;
    if (intPart !== "0") exponent = intPart.length - 1;
    else {
      let leading = 0;
      while (leading < fracPart.length && fracPart.charCodeAt(leading) === 48) leading++;
      exponent = -leading - 1;
    }
    let end = raw$1.length;
    while (end > 0 && raw$1.charCodeAt(end - 1) === 48) end--;
    const digits = raw$1.slice(0, end);
    const mantissa = digits.length > 1 ? `${digits[0]}.${digits.slice(1)}` : digits[0];
    return `${negative ? "-" : ""}${mantissa}e${exponent}`;
  }
  /**
  * Parses a number in scientific notation into a Decimal
  *
  * @param input The scientific notation string
  */
  static fromScientificNotation(input) {
    const trimmed = input.trim();
    if (!/^[+-]?\d+(\.\d+)?[eE][+-]?\d+$/.test(trimmed)) throw new InvalidDecimalError2(`Invalid scientific notation: ${input}`);
    const [baseStr, expStr] = trimmed.split(/[eE]/);
    const exp = Number.parseInt(expStr, 10);
    const negative = baseStr.startsWith("-");
    const [intPart, fracPart = ""] = baseStr.replace(/^[-+]/, "").split(".");
    const raw$1 = intPart + fracPart;
    let start = 0;
    while (start < raw$1.length && raw$1.charCodeAt(start) === 48) start++;
    const digits = raw$1.slice(start) || "0";
    const pointIndex = intPart.length;
    const newPointIndex = pointIndex + exp;
    let result;
    if (newPointIndex <= 0) result = `0.${"0".repeat(-newPointIndex)}${digits}`;
    else if (newPointIndex >= digits.length) result = digits + "0".repeat(newPointIndex - digits.length);
    else result = `${digits.slice(0, newPointIndex)}.${digits.slice(newPointIndex)}`;
    return new Decimal$12(negative ? `-${result}` : result);
  }
  toBigIntWithScale() {
    return {
      value: this._int * 10n ** BigInt(this._scale) + this._frac,
      scale: this._scale
    };
  }
};
var NUMBER2 = /^-?\d+(\.\d+)?([eE][+-]?\d+)?$/;
var BigDecimal2 = class BigDecimal$12 extends Value2 {
  static {
    __name(this, "BigDecimal$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, BIG_DECIMAL_SYMBOL2);
  }
  #text;
  /**
  * A bigdecimal from its text, in positional or scientific notation, or from a
  * {@link Decimal}, a `bigint` or an integer `number`
  */
  constructor(input) {
    super();
    if (input instanceof BigDecimal$12) this.#text = input.#text;
    else if (input instanceof Decimal2) this.#text = input.toString();
    else if (typeof input === "bigint") this.#text = input.toString();
    else if (typeof input === "number") {
      if (!Number.isSafeInteger(input)) throw new InvalidDecimalError2(`A bigdecimal is made from an exact number: pass ${input} as text`);
      this.#text = input.toString();
    } else {
      const text$1 = input.trim();
      if (!NUMBER2.test(text$1)) throw new InvalidDecimalError2(`Invalid bigdecimal: ${JSON.stringify(input)}`);
      this.#text = /e/i.test(text$1) ? new Decimal2(text$1).toString() : text$1;
    }
    markSymbol$12(this, BIG_DECIMAL_SYMBOL2);
  }
  /**
  * Whether a SurrealDB `decimal` holds the value exactly: a coefficient below 2^96 with at
  * most 28 digits after the point, as the server's `rust_decimal` does. The server writes such
  * a bigdecimal as a decimal, and the SDK sends one the same way.
  */
  fitsDecimal() {
    const { int: int$1, frac, scale } = this.toDecimal().toParts();
    let places = scale;
    let coefficient = (int$1 < 0n ? -int$1 : int$1) * 10n ** BigInt(scale) + (frac < 0n ? -frac : frac);
    while (places > 0 && coefficient % 10n === 0n) {
      coefficient /= 10n;
      places--;
    }
    return places <= 28 && coefficient < 2n ** 96n;
  }
  /**
  * The value as a {@link Decimal}, which holds it exactly
  */
  toDecimal() {
    return new Decimal2(this.#text);
  }
  /**
  * Equal to a bigdecimal or decimal of the same value, whatever its notation
  */
  equals(other) {
    if (other instanceof BigDecimal$12) other = other.toDecimal();
    return other instanceof Decimal2 && this.toDecimal().compare(other) === 0;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * The text of the value, as it was made or as the server wrote it
  */
  toString() {
    return this.#text;
  }
};
function escapeRegex2(str) {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
__name(escapeRegex2, "escapeRegex");
var NANOSECOND$12 = 1n;
var MICROSECOND$12 = 1000n * NANOSECOND$12;
var MILLISECOND$12 = 1000n * MICROSECOND$12;
var SECOND$12 = 1000n * MILLISECOND$12;
var MINUTE2 = 60n * SECOND$12;
var HOUR2 = 60n * MINUTE2;
var DAY2 = 24n * HOUR2;
var WEEK2 = 7n * DAY2;
var YEAR2 = 365n * DAY2;
var UNITS2 = /* @__PURE__ */ new Map([
  ["ns", NANOSECOND$12],
  ["\xB5s", MICROSECOND$12],
  ["\u03BCs", MICROSECOND$12],
  ["us", MICROSECOND$12],
  ["ms", MILLISECOND$12],
  ["s", SECOND$12],
  ["m", MINUTE2],
  ["h", HOUR2],
  ["d", DAY2],
  ["w", WEEK2],
  ["y", YEAR2]
]);
var UNITS_REVERSED2 = Array.from(UNITS2).reduce((map, [unit, size]) => {
  map.set(size, unit);
  return map;
}, /* @__PURE__ */ new Map());
var DURATION_PART_REGEX2 = /* @__PURE__ */ new RegExp(`^(\\d+)\\.?\\d*(${Array.from(UNITS2.keys()).map(escapeRegex2).join("|")})`);
var FLOAT_DURATION_REGEX2 = /* @__PURE__ */ new RegExp(`^(\\d+(?:\\.\\d+)?)(${Array.from(UNITS2.keys()).map(escapeRegex2).join("|")})$`);
var Duration2 = class Duration$12 extends Value2 {
  static {
    __name(this, "Duration$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, DURATION_SYMBOL$12);
  }
  _seconds;
  _nanoseconds;
  constructor(input) {
    super();
    if (input instanceof Duration$12) {
      this._seconds = input._seconds;
      this._nanoseconds = input._nanoseconds;
    } else if (typeof input === "string") {
      const [s$1, ns] = Duration$12.parseString(input);
      this._seconds = s$1;
      this._nanoseconds = ns;
    } else {
      const s$1 = typeof input[0] === "bigint" ? input[0] : BigInt(Math.floor(input[0] ?? 0));
      const ns = typeof input[1] === "bigint" ? input[1] : BigInt(Math.floor(input[1] ?? 0));
      const total = s$1 * SECOND$12 + ns;
      this._seconds = total / SECOND$12;
      this._nanoseconds = total % SECOND$12;
    }
    markSymbol$12(this, DURATION_SYMBOL$12);
  }
  equals(other) {
    if (!(other instanceof Duration$12)) return false;
    return this._seconds === other._seconds && this._nanoseconds === other._nanoseconds;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns Human readable duration string
  */
  toString() {
    let remainingSeconds = this._seconds;
    let result = "";
    for (const [size, unit] of Array.from(UNITS_REVERSED2).reverse()) if (size >= SECOND$12) {
      const amount = remainingSeconds / (size / SECOND$12);
      if (amount > 0n) {
        remainingSeconds %= size / SECOND$12;
        result += `${amount}${unit}`;
      }
    }
    let remainingNanoseconds = remainingSeconds * SECOND$12 + this._nanoseconds;
    for (const [size, unit] of Array.from(UNITS_REVERSED2).reverse()) if (size < SECOND$12) {
      const amount = remainingNanoseconds / size;
      if (amount > 0n) {
        remainingNanoseconds %= size;
        result += `${amount}${unit}`;
      }
    }
    return result || "0ns";
  }
  /**
  * Converts the duration to a tuple
  */
  toCompact() {
    return this._nanoseconds > 0n ? [this._seconds, this._nanoseconds] : this._seconds > 0n ? [this._seconds] : [];
  }
  /**
  * Parses a duration string like "1h30m"
  *
  * @param input Input string
  * @returns [seconds, nanoseconds]
  */
  static parseString(input) {
    let seconds = 0n;
    let nanoseconds = 0n;
    let left = input;
    while (left !== "") {
      const match2 = left.match(DURATION_PART_REGEX2);
      if (match2) {
        const amount = BigInt(match2[1]);
        const unit = match2[2];
        const factor = UNITS2.get(unit);
        if (!factor) throw new InvalidDurationError2(`Invalid duration unit: ${unit}`);
        if (factor >= SECOND$12) seconds += amount * (factor / SECOND$12);
        else nanoseconds += amount * factor;
        left = left.slice(match2[0].length);
      } else throw new InvalidDurationError2("Could not match a next duration part");
    }
    seconds += nanoseconds / SECOND$12;
    nanoseconds %= SECOND$12;
    return [seconds, nanoseconds];
  }
  /**
  * Compare this duration with another
  *
  * @param other The duration to compare with
  * @returns -1 if this is shorter, 0 if equal, 1 if this is longer
  */
  compare(other) {
    if (this._seconds < other._seconds) return -1;
    if (this._seconds > other._seconds) return 1;
    if (this._nanoseconds < other._nanoseconds) return -1;
    if (this._nanoseconds > other._nanoseconds) return 1;
    return 0;
  }
  /**
  * Adds two durations together
  *
  * @param other The duration to add
  * @returns The resulting duration
  */
  add(other) {
    let sec = this._seconds + other._seconds;
    let ns = this._nanoseconds + other._nanoseconds;
    if (ns >= SECOND$12) {
      sec += 1n;
      ns -= SECOND$12;
    }
    return new Duration$12([sec, ns]);
  }
  /**
  * Subtracts another duration from this one
  *
  * @param other The duration to subtract
  * @returns The resulting duration
  */
  sub(other) {
    let sec = this._seconds - other._seconds;
    let ns = this._nanoseconds - other._nanoseconds;
    if (ns < 0n) {
      sec -= 1n;
      ns += SECOND$12;
    }
    return new Duration$12([sec, ns]);
  }
  /**
  * Multiplies the duration by a scalar
  *
  * @param factor The factor to multiply by
  * @returns The resulting duration
  */
  mul(factor) {
    const factorBig = typeof factor === "bigint" ? factor : BigInt(Math.floor(factor));
    const totalNs = this._seconds * SECOND$12 + this._nanoseconds;
    const resultNs = totalNs * factorBig;
    return new Duration$12([resultNs / SECOND$12, resultNs % SECOND$12]);
  }
  div(divisor) {
    if (typeof divisor === "object" && divisor instanceof Duration$12) {
      const a = this._seconds * SECOND$12 + this._nanoseconds;
      const b = divisor._seconds * SECOND$12 + divisor._nanoseconds;
      if (b === 0n) throw new InvalidDurationError2("Division by zero duration");
      return a / b;
    }
    const divisorBig = typeof divisor === "bigint" ? divisor : BigInt(Math.floor(divisor));
    if (divisorBig === 0n) throw new InvalidDurationError2("Division by zero");
    const totalNs = this._seconds * SECOND$12 + this._nanoseconds;
    const resultNs = totalNs / divisorBig;
    return new Duration$12([resultNs / SECOND$12, resultNs % SECOND$12]);
  }
  /**
  * Computes the remainder after division
  *
  * @param mod The divisor
  * @returns The remainder duration
  */
  mod(mod) {
    const a = this._seconds * SECOND$12 + this._nanoseconds;
    const b = mod._seconds * SECOND$12 + mod._nanoseconds;
    if (b === 0n) throw new InvalidDurationError2("Modulo by zero duration");
    const resultNs = a % b;
    return new Duration$12([resultNs / SECOND$12, resultNs % SECOND$12]);
  }
  /**
  * Total nanoseconds in this duration
  */
  get nanoseconds() {
    return this._seconds * SECOND$12 + this._nanoseconds;
  }
  /**
  * Total microseconds
  */
  get microseconds() {
    return this.nanoseconds / MICROSECOND$12;
  }
  /**
  * Total milliseconds
  */
  get milliseconds() {
    return this.nanoseconds / MILLISECOND$12;
  }
  /**
  * Whole seconds in the duration
  */
  get seconds() {
    return this._seconds;
  }
  /**
  * Total whole minutes in the duration
  */
  get minutes() {
    return this._seconds / (MINUTE2 / SECOND$12);
  }
  /**
  * Total whole hours in the duration
  */
  get hours() {
    return this._seconds / (HOUR2 / SECOND$12);
  }
  /**
  * Total whole days in the duration
  */
  get days() {
    return this._seconds / (DAY2 / SECOND$12);
  }
  /**
  * Total whole weeks in the duration
  */
  get weeks() {
    return this._seconds / (WEEK2 / SECOND$12);
  }
  /**
  * Total whole years in the duration
  */
  get years() {
    return this._seconds / (YEAR2 / SECOND$12);
  }
  /**
  * Creates a Duration from nanoseconds
  *
  * @param ns Nanoseconds value
  * @returns The resulting duration
  */
  static nanoseconds(ns) {
    const n = typeof ns === "bigint" ? ns : BigInt(Math.floor(ns));
    return new Duration$12([n / SECOND$12, n % SECOND$12]);
  }
  /**
  * Creates a Duration from microseconds
  *
  * @param µs Microseconds value
  * @returns The resulting duration
  */
  static microseconds(\u00B5s) {
    const n = typeof \u00B5s === "bigint" ? \u00B5s : BigInt(Math.floor(\u00B5s));
    return Duration$12.nanoseconds(n * MICROSECOND$12);
  }
  /**
  * Creates a Duration from milliseconds
  *
  * @param ms Milliseconds value
  * @returns The resulting duration
  */
  static milliseconds(ms) {
    const n = typeof ms === "bigint" ? ms : BigInt(Math.floor(ms));
    return Duration$12.nanoseconds(n * MILLISECOND$12);
  }
  /**
  * Creates a Duration from seconds
  *
  * @param s Seconds value
  * @returns The resulting duration
  */
  static seconds(s$1) {
    const n = typeof s$1 === "bigint" ? s$1 : BigInt(Math.floor(s$1));
    return new Duration$12([n, 0n]);
  }
  /**
  * Creates a Duration from minutes
  *
  * @param m Minutes value
  * @returns The resulting duration
  */
  static minutes(m) {
    const n = typeof m === "bigint" ? m : BigInt(Math.floor(m));
    return new Duration$12([n * (MINUTE2 / SECOND$12), 0n]);
  }
  /**
  * Creates a Duration from hours
  *
  * @param h Hours value
  * @returns The resulting duration
  */
  static hours(h) {
    const n = typeof h === "bigint" ? h : BigInt(Math.floor(h));
    return new Duration$12([n * (HOUR2 / SECOND$12), 0n]);
  }
  /**
  * Creates a Duration from days
  *
  * @param d Days value
  * @returns The resulting duration
  */
  static days(d$1) {
    const n = typeof d$1 === "bigint" ? d$1 : BigInt(Math.floor(d$1));
    return new Duration$12([n * (DAY2 / SECOND$12), 0n]);
  }
  /**
  * Creates a Duration from weeks
  *
  * @param w Weeks value
  * @returns The resulting duration
  */
  static weeks(w) {
    const n = typeof w === "bigint" ? w : BigInt(Math.floor(w));
    return new Duration$12([n * (WEEK2 / SECOND$12), 0n]);
  }
  /**
  * Creates a Duration from years
  *
  * @param y Years value
  * @returns The resulting duration
  */
  static years(y) {
    const n = typeof y === "bigint" ? y : BigInt(Math.floor(y));
    return new Duration$12([n * (YEAR2 / SECOND$12), 0n]);
  }
  /**
  * Parses a duration from a float string with a single time unit, e.g. "1.998487792s", "1.5m", "500.0ms"
  *
  * @param input Float duration string
  * @returns The resulting duration
  */
  static parseFloat(input) {
    const match2 = input.match(FLOAT_DURATION_REGEX2);
    if (!match2) throw new InvalidDurationError2(`Invalid float duration string: ${input}`);
    const numStr = match2[1];
    const unit = match2[2];
    const factor = UNITS2.get(unit);
    if (!factor) throw new InvalidDurationError2(`Invalid duration unit: ${unit}`);
    const [intPart, fracPart = ""] = numStr.split(".");
    const scale = 10n ** BigInt(fracPart.length);
    const scaledValue = BigInt(intPart) * scale + BigInt(fracPart || "0");
    const totalNs = scaledValue * factor / scale;
    return new Duration$12([totalNs / SECOND$12, totalNs % SECOND$12]);
  }
  /**
  * Measures the elapsed time since the function was called
  * If the Performance API is available, it uses it to measure the elapsed time in nanoseconds
  *
  * @returns A function that returns the elapsed time as a Duration
  */
  static measure() {
    if (typeof performance !== "undefined" && performance.now) {
      const start$1 = performance.now();
      return () => {
        const end = performance.now();
        return Duration$12.nanoseconds((end - start$1) * 1e6);
      };
    }
    const start = Date.now();
    return () => {
      const end = Date.now();
      return Duration$12.milliseconds(end - start);
    };
  }
};
var NANOSECOND2 = 1n;
var MICROSECOND2 = 1000n * NANOSECOND2;
var MILLISECOND2 = 1000n * MICROSECOND2;
var SECOND2 = 1000n * MILLISECOND2;
var DateTime2 = class DateTime$12 extends Value2 {
  static {
    __name(this, "DateTime$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, DATETIME_SYMBOL$12);
  }
  _seconds;
  _nanoseconds;
  static loadHr = typeof process !== "undefined" && process.hrtime ? {
    ns: process.hrtime.bigint(),
    ms: BigInt(Date.now())
  } : void 0;
  constructor(input) {
    super();
    if (input === void 0) {
      const now = DateTime$12.now();
      this._seconds = now._seconds;
      this._nanoseconds = now._nanoseconds;
    } else if (input instanceof DateTime$12) {
      this._seconds = input._seconds;
      this._nanoseconds = input._nanoseconds;
    } else if (input instanceof Date) {
      const time3 = input.getTime();
      if (Number.isNaN(time3)) throw new InvalidDateError2(input);
      const s$1 = BigInt(Math.floor(time3 / 1e3));
      const ns = BigInt(time3 % 1e3 * 1e6);
      this._seconds = s$1;
      this._nanoseconds = ns;
    } else if (typeof input === "string") {
      const [s$1, ns] = DateTime$12.parseString(input);
      this._seconds = s$1;
      this._nanoseconds = ns;
    } else if (typeof input === "number") {
      this._seconds = BigInt(Math.floor(input));
      this._nanoseconds = 0n;
    } else if (typeof input === "bigint") {
      this._seconds = input;
      this._nanoseconds = 0n;
    } else {
      const s$1 = typeof input[0] === "bigint" ? input[0] : BigInt(Math.floor(input[0] ?? 0));
      const ns = typeof input[1] === "bigint" ? input[1] : BigInt(Math.floor(input[1] ?? 0));
      const totalSeconds = s$1 + ns / SECOND2;
      this._seconds = totalSeconds;
      this._nanoseconds = ns % SECOND2;
    }
    markSymbol$12(this, DATETIME_SYMBOL$12);
  }
  equals(other) {
    if (!(other instanceof DateTime$12)) return false;
    return this._seconds === other._seconds && this._nanoseconds === other._nanoseconds;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toISOString();
  }
  /**
  * @returns The ISO 8601 string representation of the datetime
  */
  toString() {
    return this.toISOString();
  }
  /**
  * Converts the datetime to a tuple
  */
  toCompact() {
    return [this._seconds, this._nanoseconds];
  }
  /**
  * Formats the datetime as an ISO 8601 string
  */
  toISOString() {
    const totalMilliseconds = Number(this._seconds) * 1e3 + Number(this._nanoseconds) / 1e6;
    const date = new Date(totalMilliseconds);
    const isoString = date.toISOString();
    if (this._nanoseconds === 0n) return isoString;
    const nanoseconds = this._nanoseconds.toString().padStart(9, "0");
    const trimmed = nanoseconds.replace(/0+$/, "");
    return isoString.replace(/\.\d{3}Z$/, `.${trimmed}Z`);
  }
  /**
  * Converts to JavaScript Date object
  */
  toDate() {
    const milliseconds = Number(this._seconds) * 1e3 + Math.floor(Number(this._nanoseconds) / 1e6);
    return new Date(milliseconds);
  }
  /**
  * Parses a datetime string
  *
  * @param input Input string (ISO 8601 format)
  * @returns [seconds, nanoseconds] tuple
  */
  static parseString(input) {
    const isoRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,9}))?Z?$/;
    const match2 = input.match(isoRegex);
    if (match2) {
      const [, year, month, day, hour, minute, second, fraction] = match2;
      const baseIsoString = `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
      const baseDate = new Date(baseIsoString);
      const baseTimestamp = baseDate.getTime();
      if (Number.isNaN(baseTimestamp)) throw new InvalidDateError2(baseDate);
      const seconds = BigInt(Math.floor(baseTimestamp / 1e3));
      let nanoseconds = 0n;
      if (fraction) {
        const fractionLength = fraction.length;
        if (fractionLength <= 3) nanoseconds = BigInt(fraction.padEnd(3, "0")) * 1000000n;
        else if (fractionLength <= 6) nanoseconds = BigInt(fraction.padEnd(6, "0")) * 1000n;
        else nanoseconds = BigInt(fraction.padEnd(9, "0"));
      }
      return [seconds, nanoseconds];
    }
    const timestamp = Date.parse(input);
    if (!Number.isNaN(timestamp)) {
      const seconds = BigInt(Math.floor(timestamp / 1e3));
      const nanoseconds = BigInt(timestamp % 1e3 * 1e6);
      return [seconds, nanoseconds];
    }
    throw new InvalidDateError2(`Invalid datetime format: ${input}`);
  }
  /**
  * Adds a duration to this datetime
  *
  * @param duration The duration to add
  * @returns The new datetime instance
  */
  add(duration$1) {
    const [durSeconds, durNanoseconds] = duration$1.toCompact();
    let newSeconds = this._seconds + (durSeconds || 0n);
    let newNanoseconds = this._nanoseconds + (durNanoseconds || 0n);
    if (newNanoseconds >= SECOND2) {
      newSeconds += 1n;
      newNanoseconds -= SECOND2;
    }
    return new DateTime$12([newSeconds, newNanoseconds]);
  }
  /**
  * Subtracts a duration from this datetime
  *
  * @param duration The duration to subtract
  * @returns The new datetime instance
  */
  sub(duration$1) {
    const [durSeconds, durNanoseconds] = duration$1.toCompact();
    let newSeconds = this._seconds - (durSeconds || 0n);
    let newNanoseconds = this._nanoseconds - (durNanoseconds || 0n);
    if (newNanoseconds < 0n) {
      newSeconds -= 1n;
      newNanoseconds += SECOND2;
    }
    return new DateTime$12([newSeconds, newNanoseconds]);
  }
  /**
  * Calculates the duration between two datetimes
  *
  * @param other The other datetime
  */
  diff(other) {
    const totalThis = this._seconds * SECOND2 + this._nanoseconds;
    const totalOther = other._seconds * SECOND2 + other._nanoseconds;
    const diff = totalThis > totalOther ? totalThis - totalOther : totalOther - totalThis;
    return Duration2.nanoseconds(diff);
  }
  /**
  * Compares this DateTime with another
  *
  * @param other The DateTime to compare with
  * @returns -1 if other is after, 0 if equal, 1 if other is before
  */
  compare(other) {
    const a = this.nanoseconds;
    const b = other.nanoseconds;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
  /** Total nanoseconds since Unix epoch */
  get nanoseconds() {
    return this._seconds * SECOND2 + this._nanoseconds;
  }
  /** Total microseconds since Unix epoch */
  get microseconds() {
    return this.nanoseconds / MICROSECOND2;
  }
  /** Total milliseconds since Unix epoch */
  get milliseconds() {
    return Number(this.nanoseconds / MILLISECOND2);
  }
  /** Seconds since Unix epoch */
  get seconds() {
    return Number(this._seconds);
  }
  /**
  * Creates a DateTime from nanoseconds since Unix epoch
  *
  * @param ns Nanoseconds value
  */
  static fromEpochNanoseconds(ns) {
    const n = typeof ns === "bigint" ? ns : BigInt(Math.floor(ns));
    return new DateTime$12([n / SECOND2, n % SECOND2]);
  }
  /**
  * Creates a DateTime from microseconds since Unix epoch
  *
  * @param µs Microseconds value
  */
  static fromEpochMicroseconds(\u00B5s) {
    const n = typeof \u00B5s === "bigint" ? \u00B5s : BigInt(Math.floor(\u00B5s));
    return DateTime$12.fromEpochNanoseconds(n * MICROSECOND2);
  }
  /**
  * Creates a DateTime from milliseconds since Unix epoch
  *
  * @param ms Milliseconds value
  */
  static fromEpochMilliseconds(ms) {
    const n = typeof ms === "bigint" ? ms : BigInt(Math.floor(ms));
    return DateTime$12.fromEpochNanoseconds(n * MILLISECOND2);
  }
  /**
  * Creates a DateTime from seconds since Unix epoch
  *
  * @param s Seconds value
  */
  static fromEpochSeconds(s$1) {
    const n = typeof s$1 === "bigint" ? s$1 : BigInt(Math.floor(s$1));
    return new DateTime$12([n, 0n]);
  }
  /**
  * Returns a new DateTime representing the current time
  */
  static now() {
    if (DateTime$12.loadHr) {
      const diffNs = process.hrtime.bigint() - DateTime$12.loadHr.ns;
      const totalNanoseconds = DateTime$12.loadHr.ms * 1000000n + diffNs;
      const seconds$1 = totalNanoseconds / 1000000000n;
      const nanoseconds$1 = totalNanoseconds % 1000000000n;
      return new DateTime$12([seconds$1, nanoseconds$1]);
    }
    if (typeof performance !== "undefined" && performance.now && performance.timeOrigin) {
      const totalMilliseconds = performance.timeOrigin + performance.now();
      const seconds$1 = BigInt(Math.floor(totalMilliseconds / 1e3));
      const nanoseconds$1 = BigInt(Math.floor(totalMilliseconds % 1e3 * 1e6));
      return new DateTime$12([seconds$1, nanoseconds$1]);
    }
    const now = Date.now();
    const seconds = BigInt(Math.floor(now / 1e3));
    const nanoseconds = BigInt(now % 1e3 * 1e6);
    return new DateTime$12([seconds, nanoseconds]);
  }
  /**
  * Returns a new DateTime representing the Unix epoch (1970-01-01T00:00:00Z)
  */
  static epoch() {
    return new DateTime$12([0n, 0n]);
  }
};
var FileRef2 = class FileRef$12 extends Value2 {
  static {
    __name(this, "FileRef$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, FILE_REF_SYMBOL$12);
  }
  _bucket;
  _key;
  constructor(bucket, key) {
    super();
    this._bucket = bucket;
    this._key = key.startsWith("/") ? key : `/${key}`;
    markSymbol$12(this, FILE_REF_SYMBOL$12);
  }
  get bucket() {
    return this._bucket;
  }
  get key() {
    return this._key;
  }
  equals(other) {
    if (!(other instanceof FileRef$12)) return false;
    return this._bucket === other._bucket && this._key === other._key;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  toString() {
    return `${fmtInner2(this._bucket, true)}:${fmtInner2(this._key, false)}`;
  }
};
function fmtInner2(str, escapeSlash) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const code = str.charCodeAt(i);
    if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95 || code === 45 || code === 46 || !escapeSlash && code === 47) result += char;
    else result += `\\${char}`;
  }
  return result;
}
__name(fmtInner2, "fmtInner");
var Future2 = class Future$12 extends Value2 {
  static {
    __name(this, "Future$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, FUTURE_SYMBOL$12);
  }
  _body;
  constructor(body) {
    super();
    this._body = body;
    markSymbol$12(this, FUTURE_SYMBOL$12);
  }
  equals(other) {
    if (!(other instanceof Future$12)) return false;
    return this._body === other._body;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns The uncomputed future notation
  */
  toString() {
    return `<future> ${this._body}`;
  }
  /**
  * The body of the future
  */
  get body() {
    return this._body;
  }
};
var Geometry2 = class Geometry$12 extends Value2 {
  static {
    __name(this, "Geometry$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, GEOMETRY_SYMBOL$12);
  }
  constructor() {
    super();
    markSymbol$12(this, GEOMETRY_SYMBOL$12);
  }
  equals(other) {
    if (!(other instanceof Geometry$12)) return false;
    return this.is(other);
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
  /**
  * Create a Geometry instance from a GeoJSON object.
  */
  static fromJSON(json) {
    switch (json.type) {
      case "Point":
        return new GeometryPoint2(json);
      case "LineString":
        return new GeometryLine2(json);
      case "Polygon":
        return new GeometryPolygon2(json);
      case "MultiPoint":
        return new GeometryMultiPoint2(json);
      case "MultiLineString":
        return new GeometryMultiLine2(json);
      case "MultiPolygon":
        return new GeometryMultiPolygon2(json);
      case "GeometryCollection":
        return new GeometryCollection2(json);
    }
  }
};
var GeometryPoint2 = class GeometryPoint$12 extends Geometry2 {
  static {
    __name(this, "GeometryPoint$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, GEOMETRY_POINT_SYMBOL$12);
  }
  point;
  constructor(input) {
    super();
    if (input instanceof GeometryPoint$12) this.point = [...input.point];
    else if (Array.isArray(input)) this.point = [f2(input[0]), f2(input[1])];
    else this.point = [...input.coordinates];
    markSymbol$12(this, GEOMETRY_POINT_SYMBOL$12);
  }
  toJSON() {
    return {
      type: "Point",
      coordinates: this.coordinates
    };
  }
  get coordinates() {
    return this.point;
  }
  is(geometry) {
    if (!(geometry instanceof GeometryPoint$12)) return false;
    return this.point[0] === geometry.point[0] && this.point[1] === geometry.point[1];
  }
  clone() {
    return new GeometryPoint$12([...this.point]);
  }
};
var GeometryLine2 = class GeometryLine$12 extends Geometry2 {
  static {
    __name(this, "GeometryLine$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, GEOMETRY_LINE_SYMBOL$12);
  }
  line;
  constructor(input) {
    super();
    if (input instanceof GeometryLine$12) this.line = [...input.line];
    else if (Array.isArray(input)) this.line = input;
    else this.line = input.coordinates.map((c) => new GeometryPoint2(c));
    markSymbol$12(this, GEOMETRY_LINE_SYMBOL$12);
  }
  toJSON() {
    return {
      type: "LineString",
      coordinates: this.coordinates
    };
  }
  get coordinates() {
    return this.line.map((g) => g.coordinates);
  }
  close() {
    if (!this.line[0].is(this.line.at(-1))) this.line.push(this.line[0]);
  }
  is(geometry) {
    if (!(geometry instanceof GeometryLine$12)) return false;
    if (this.line.length !== geometry.line.length) return false;
    for (let i = 0; i < this.line.length; i++) if (!this.line[i].is(geometry.line[i])) return false;
    return true;
  }
  clone() {
    return new GeometryLine$12(this.line.map((p) => p.clone()));
  }
};
var GeometryPolygon2 = class GeometryPolygon$12 extends Geometry2 {
  static {
    __name(this, "GeometryPolygon$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, GEOMETRY_POLYGON_SYMBOL$12);
  }
  polygon;
  constructor(input) {
    super();
    if (input instanceof GeometryPolygon$12) this.polygon = [...input.polygon];
    else if (Array.isArray(input)) this.polygon = input.map((l) => {
      const line = l.clone();
      line.close();
      return line;
    });
    else this.polygon = input.coordinates.map((ring) => {
      const line = new GeometryLine2(ring.map((c) => new GeometryPoint2(c)));
      line.close();
      return line;
    });
    markSymbol$12(this, GEOMETRY_POLYGON_SYMBOL$12);
  }
  toJSON() {
    return {
      type: "Polygon",
      coordinates: this.coordinates
    };
  }
  get coordinates() {
    return this.polygon.map((g) => g.coordinates);
  }
  is(geometry) {
    if (!(geometry instanceof GeometryPolygon$12)) return false;
    if (this.polygon.length !== geometry.polygon.length) return false;
    for (let i = 0; i < this.polygon.length; i++) if (!this.polygon[i].is(geometry.polygon[i])) return false;
    return true;
  }
  clone() {
    return new GeometryPolygon$12(this.polygon.map((p) => p.clone()));
  }
};
var GeometryMultiPoint2 = class GeometryMultiPoint$12 extends Geometry2 {
  static {
    __name(this, "GeometryMultiPoint$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, GEOMETRY_MULTI_POINT_SYMBOL$12);
  }
  points;
  constructor(input) {
    super();
    if (input instanceof GeometryMultiPoint$12) this.points = [...input.points];
    else if (Array.isArray(input)) this.points = input;
    else this.points = input.coordinates.map((c) => new GeometryPoint2(c));
    markSymbol$12(this, GEOMETRY_MULTI_POINT_SYMBOL$12);
  }
  toJSON() {
    return {
      type: "MultiPoint",
      coordinates: this.coordinates
    };
  }
  get coordinates() {
    return this.points.map((g) => g.coordinates);
  }
  is(geometry) {
    if (!(geometry instanceof GeometryMultiPoint$12)) return false;
    if (this.points.length !== geometry.points.length) return false;
    for (let i = 0; i < this.points.length; i++) if (!this.points[i].is(geometry.points[i])) return false;
    return true;
  }
  clone() {
    return new GeometryMultiPoint$12(this.points.map((p) => p.clone()));
  }
};
var GeometryMultiLine2 = class GeometryMultiLine$12 extends Geometry2 {
  static {
    __name(this, "GeometryMultiLine$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, GEOMETRY_MULTI_LINE_SYMBOL$12);
  }
  lines;
  constructor(input) {
    super();
    if (input instanceof GeometryMultiLine$12) this.lines = [...input.lines];
    else if (Array.isArray(input)) this.lines = input;
    else this.lines = input.coordinates.map((coords) => new GeometryLine2(coords.map((c) => new GeometryPoint2(c))));
    markSymbol$12(this, GEOMETRY_MULTI_LINE_SYMBOL$12);
  }
  toJSON() {
    return {
      type: "MultiLineString",
      coordinates: this.coordinates
    };
  }
  get coordinates() {
    return this.lines.map((g) => g.coordinates);
  }
  is(geometry) {
    if (!(geometry instanceof GeometryMultiLine$12)) return false;
    if (this.lines.length !== geometry.lines.length) return false;
    for (let i = 0; i < this.lines.length; i++) if (!this.lines[i].is(geometry.lines[i])) return false;
    return true;
  }
  clone() {
    return new GeometryMultiLine$12(this.lines.map((p) => p.clone()));
  }
};
var GeometryMultiPolygon2 = class GeometryMultiPolygon$12 extends Geometry2 {
  static {
    __name(this, "GeometryMultiPolygon$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, GEOMETRY_MULTI_POLYGON_SYMBOL$12);
  }
  polygons;
  constructor(input) {
    super();
    if (input instanceof GeometryMultiPolygon$12) this.polygons = [...input.polygons];
    else if (Array.isArray(input)) this.polygons = input;
    else this.polygons = input.coordinates.map((rings) => new GeometryPolygon2(rings.map((ring) => new GeometryLine2(ring.map((c) => new GeometryPoint2(c))))));
    markSymbol$12(this, GEOMETRY_MULTI_POLYGON_SYMBOL$12);
  }
  toJSON() {
    return {
      type: "MultiPolygon",
      coordinates: this.coordinates
    };
  }
  get coordinates() {
    return this.polygons.map((g) => g.coordinates);
  }
  is(geometry) {
    if (!(geometry instanceof GeometryMultiPolygon$12)) return false;
    if (this.polygons.length !== geometry.polygons.length) return false;
    for (let i = 0; i < this.polygons.length; i++) if (!this.polygons[i].is(geometry.polygons[i])) return false;
    return true;
  }
  clone() {
    return new GeometryMultiPolygon$12(this.polygons.map((p) => p.clone()));
  }
};
var GeometryCollection2 = class GeometryCollection$12 extends Geometry2 {
  static {
    __name(this, "GeometryCollection$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, GEOMETRY_COLLECTION_SYMBOL$12);
  }
  collection;
  constructor(input) {
    super();
    if (input instanceof GeometryCollection$12) this.collection = [...input.collection];
    else if (Array.isArray(input)) this.collection = input;
    else this.collection = input.geometries.map((g) => Geometry2.fromJSON(g));
    markSymbol$12(this, GEOMETRY_COLLECTION_SYMBOL$12);
  }
  toJSON() {
    return {
      type: "GeometryCollection",
      geometries: this.geometries
    };
  }
  get geometries() {
    return this.collection.map((g) => g.toJSON());
  }
  is(geometry) {
    if (!(geometry instanceof GeometryCollection$12)) return false;
    if (this.collection.length !== geometry.collection.length) return false;
    for (let i = 0; i < this.collection.length; i++) if (!this.collection[i].is(geometry.collection[i])) return false;
    return true;
  }
  clone() {
    return new GeometryCollection$12(this.collection.map((p) => p.clone()));
  }
};
function f2(num) {
  if (num instanceof Decimal2) return num.toFloat();
  return num;
}
__name(f2, "f");
var I32_MIN2 = -(2 ** 31);
var I32_MAX2 = 2 ** 31 - 1;
var I64_MIN$32 = -(2n ** 63n);
var I64_MAX$32 = 2n ** 63n - 1n;
var MICROS_PER_DAY2 = 86400000000n;
var MICROS_PER_MONTH2 = 30n * MICROS_PER_DAY2;
function checkI322(name, value) {
  if (!Number.isInteger(value) || value < I32_MIN2 || value > I32_MAX2) throw new InvalidDurationError2(`An interval's ${name} must be a 32-bit integer: ${value}`);
  return value;
}
__name(checkI322, "checkI32");
var Interval2 = class Interval$12 extends Value2 {
  static {
    __name(this, "Interval$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, INTERVAL_SYMBOL2);
  }
  /** The months, a 32-bit integer */
  months;
  /** The days, a 32-bit integer */
  days;
  /** The microseconds, a 64-bit integer */
  micros;
  /**
  * An interval from its parts, or from a `[months, days, micros]` tuple
  */
  constructor(input) {
    super();
    const [months, days, micros] = Array.isArray(input) ? input : [
      input.months ?? 0,
      input.days ?? 0,
      input.micros ?? 0
    ];
    this.months = checkI322("months", Number(months));
    this.days = checkI322("days", Number(days));
    if (typeof micros === "number" && !Number.isSafeInteger(micros)) throw new InvalidDurationError2(`An interval's micros must be an integer: ${micros}`);
    this.micros = BigInt(micros);
    if (this.micros < I64_MIN$32 || this.micros > I64_MAX$32) throw new InvalidDurationError2(`An interval's micros must be a 64-bit integer: ${micros}`);
    markSymbol$12(this, INTERVAL_SYMBOL2);
  }
  /**
  * The total in microseconds, in which a month is 30 days and a day is 24 hours
  */
  get normalisedMicros() {
    return BigInt(this.months) * MICROS_PER_MONTH2 + BigInt(this.days) * MICROS_PER_DAY2 + this.micros;
  }
  /**
  * The `[months, days, micros]` of the interval, as `cbor.2` carries one
  */
  toCompact() {
    return [
      this.months,
      this.days,
      this.micros
    ];
  }
  /**
  * Equal to an interval of the same total, in which a month is 30 days and a day 24 hours
  */
  equals(other) {
    return other instanceof Interval$12 && other.normalisedMicros === this.normalisedMicros;
  }
  /**
  * Whether both intervals have the same parts, which is stricter than {@link equals}
  */
  identical(other) {
    return other.months === this.months && other.days === this.days && other.micros === this.micros;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * The interval as the server displays it, in ISO 8601: `P1Y2M3DT4H5M6.5S`, or `PT0S`
  */
  toString() {
    let out = "P";
    const years = Math.trunc(this.months / 12);
    const mons = this.months % 12;
    if (years !== 0) out += `${years}Y`;
    if (mons !== 0) out += `${mons}M`;
    if (this.days !== 0) out += `${this.days}D`;
    if (this.micros !== 0n) {
      out += "T";
      const sign = this.micros < 0n ? "-" : "";
      const abs = this.micros < 0n ? -this.micros : this.micros;
      const hours = abs / 3600000000n;
      const mins = abs % 3600000000n / 60000000n;
      const secs = abs % 60000000n / 1000000n;
      const frac = abs % 1000000n;
      if (hours !== 0n) out += `${sign}${hours}H`;
      if (mins !== 0n) out += `${sign}${mins}M`;
      if (secs !== 0n || frac !== 0n) {
        out += `${sign}${secs}`;
        if (frac !== 0n) out += `.${frac.toString().padStart(6, "0").replace(/0+$/, "")}`;
        out += "S";
      }
    }
    return out === "P" ? "PT0S" : out;
  }
};
var NANOS_PER_SECOND2 = 1e9;
var SECONDS_PER_DAY2 = 86400;
var NANOS_PER_DAY2 = SECONDS_PER_DAY2 * NANOS_PER_SECOND2;
function daysFromCivil2(year, month, day) {
  const y = month <= 2 ? year - 1 : year;
  const era = Math.floor(y / 400);
  const yoe = y - era * 400;
  const doy = Math.floor((153 * (month + (month > 2 ? -3 : 9)) + 2) / 5) + day - 1;
  const doe = yoe * 365 + Math.floor(yoe / 4) - Math.floor(yoe / 100) + doy;
  return era * 146097 + doe - 719468;
}
__name(daysFromCivil2, "daysFromCivil");
function civilFromDays2(days) {
  const z = days + 719468;
  const era = Math.floor(z / 146097);
  const doe = z - era * 146097;
  const yoe = Math.floor((doe - Math.floor(doe / 1460) + Math.floor(doe / 36524) - Math.floor(doe / 146096)) / 365);
  const doy = doe - (365 * yoe + Math.floor(yoe / 4) - Math.floor(yoe / 100));
  const mp = Math.floor((5 * doy + 2) / 153);
  const day = doy - Math.floor((153 * mp + 2) / 5) + 1;
  const month = mp < 10 ? mp + 3 : mp - 9;
  return [
    yoe + era * 400 + (month <= 2 ? 1 : 0),
    month,
    day
  ];
}
__name(civilFromDays2, "civilFromDays");
var MIN_DAYS2 = daysFromCivil2(-262143, 1, 1);
var MAX_DAYS2 = daysFromCivil2(262142, 12, 31);
function formatDate2(days) {
  const [year, month, day] = civilFromDays2(days);
  const yyyy = year >= 0 && year <= 9999 ? String(year).padStart(4, "0") : `${year < 0 ? "-" : "+"}${String(Math.abs(year)).padStart(4, "0")}`;
  return `${yyyy}-${pad22(month)}-${pad22(day)}`;
}
__name(formatDate2, "formatDate");
function parseDate2(text$1) {
  const match2 = /^([+-]?\d{4,})-(\d{2})-(\d{2})$/.exec(text$1.trim());
  if (!match2) throw new InvalidDateError2(`Invalid date: ${JSON.stringify(text$1)}`);
  const year = Number(match2[1]);
  const month = Number(match2[2]);
  const day = Number(match2[3]);
  const days = daysFromCivil2(year, month, day);
  const [y, m, d$1] = civilFromDays2(days);
  if (y !== year || m !== month || d$1 !== day) throw new InvalidDateError2(`Invalid date: ${JSON.stringify(text$1)}`);
  if (days < MIN_DAYS2 || days > MAX_DAYS2) throw new InvalidDateError2(`Date out of range: ${JSON.stringify(text$1)}`);
  return days;
}
__name(parseDate2, "parseDate");
function formatTime2(nanos) {
  const secs = Math.floor(nanos / NANOS_PER_SECOND2);
  const hh = pad22(Math.floor(secs / 3600));
  const mm = pad22(Math.floor(secs / 60) % 60);
  const ss = pad22(secs % 60);
  return `${hh}:${mm}:${ss}${formatFraction2(nanos % NANOS_PER_SECOND2)}`;
}
__name(formatTime2, "formatTime");
function parseTime2(text$1) {
  const invalid = /* @__PURE__ */ __name(() => new InvalidDateError2(`Invalid time: ${JSON.stringify(text$1)}`), "invalid");
  const match2 = /^(\d{1,2}):(\d{1,2})(?::(\d{1,2})(?:\.(\d{1,9}))?)?$/.exec(text$1.trim());
  if (!match2) throw invalid();
  const hours = Number(match2[1]);
  const mins = Number(match2[2]);
  const secs = Number(match2[3] ?? 0);
  const frac = match2[4] ? Number(match2[4].padEnd(9, "0")) : 0;
  if (hours > 24 || mins > 59 || secs > 59) throw invalid();
  const nanos = ((hours * 60 + mins) * 60 + secs) * NANOS_PER_SECOND2 + frac;
  if (nanos > NANOS_PER_DAY2) throw invalid();
  return nanos;
}
__name(parseTime2, "parseTime");
function formatFraction2(nanos) {
  if (nanos === 0) return "";
  if (nanos % 1e6 === 0) return `.${String(nanos / 1e6).padStart(3, "0")}`;
  if (nanos % 1e3 === 0) return `.${String(nanos / 1e3).padStart(6, "0")}`;
  return `.${String(nanos).padStart(9, "0")}`;
}
__name(formatFraction2, "formatFraction");
function pad22(value) {
  return String(value).padStart(2, "0");
}
__name(pad22, "pad2");
var PlainDate2 = class PlainDate$12 extends Value2 {
  static {
    __name(this, "PlainDate$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, PLAIN_DATE_SYMBOL2);
  }
  /** `infinity`, the latest date */
  static INFINITY = new PlainDate$12(MAX_DAYS2);
  /** `-infinity`, the earliest date */
  static NEG_INFINITY = new PlainDate$12(MIN_DAYS2);
  /**
  * The number of days since 1970-01-01
  */
  days;
  /**
  * A date from its days since 1970-01-01, from `YYYY-MM-DD`, from `infinity`, `-infinity` or
  * `epoch`, or from the UTC date of a `Date`.
  */
  constructor(input) {
    super();
    if (input instanceof PlainDate$12) this.days = input.days;
    else if (input instanceof Date) {
      if (Number.isNaN(input.getTime())) throw new InvalidDateError2(input);
      this.days = daysFromCivil2(input.getUTCFullYear(), input.getUTCMonth() + 1, input.getUTCDate());
    } else if (typeof input === "string") {
      const text$1 = input.trim().toLowerCase();
      if (text$1 === "infinity" || text$1 === "+infinity") this.days = MAX_DAYS2;
      else if (text$1 === "-infinity") this.days = MIN_DAYS2;
      else if (text$1 === "epoch") this.days = 0;
      else this.days = parseDate2(input);
    } else if (Number.isSafeInteger(input) && input >= MIN_DAYS2 && input <= MAX_DAYS2) this.days = input;
    else throw new InvalidDateError2(`A date cannot be ${input} days from 1970-01-01`);
    markSymbol$12(this, PLAIN_DATE_SYMBOL2);
  }
  /** The year, which is 0 for 1 BCE */
  get year() {
    return civilFromDays2(this.days)[0];
  }
  /** The month, from 1 to 12 */
  get month() {
    return civilFromDays2(this.days)[1];
  }
  /** The day of the month, from 1 to 31 */
  get day() {
    return civilFromDays2(this.days)[2];
  }
  /** Whether this is `infinity` or `-infinity` */
  get isInfinite() {
    return this.days === MAX_DAYS2 || this.days === MIN_DAYS2;
  }
  /**
  * Midnight UTC of this date as a `Date`, or an invalid `Date` past its range
  */
  toDate() {
    return /* @__PURE__ */ new Date(this.days * 864e5);
  }
  equals(other) {
    return other instanceof PlainDate$12 && other.days === this.days;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * The date as the server displays it: `YYYY-MM-DD`, `infinity` or `-infinity`
  */
  toString() {
    if (this.days === MAX_DAYS2) return "infinity";
    if (this.days === MIN_DAYS2) return "-infinity";
    return formatDate2(this.days);
  }
};
var PlainTime2 = class PlainTime$12 extends Value2 {
  static {
    __name(this, "PlainTime$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, PLAIN_TIME_SYMBOL2);
  }
  /**
  * The number of nanoseconds since midnight
  */
  nanos;
  /**
  * A time from its nanoseconds since midnight, or from `H:MM[:SS[.fraction]]`.
  */
  constructor(input) {
    super();
    if (input instanceof PlainTime$12) this.nanos = input.nanos;
    else if (typeof input === "string") this.nanos = parseTime2(input);
    else {
      const nanos = Number(input);
      if (!Number.isSafeInteger(nanos) || nanos < 0 || nanos > NANOS_PER_DAY2) throw new InvalidDateError2(`A time cannot be ${input} nanoseconds past midnight`);
      this.nanos = nanos;
    }
    markSymbol$12(this, PLAIN_TIME_SYMBOL2);
  }
  /** The hour, from 0 to 24 */
  get hours() {
    return Math.floor(this.nanos / (3600 * NANOS_PER_SECOND2));
  }
  /** The minute, from 0 to 59 */
  get minutes() {
    return Math.floor(this.nanos / (60 * NANOS_PER_SECOND2)) % 60;
  }
  /** The second, from 0 to 59 */
  get seconds() {
    return Math.floor(this.nanos / NANOS_PER_SECOND2) % 60;
  }
  /** The nanoseconds within the second */
  get nanoseconds() {
    return this.nanos % NANOS_PER_SECOND2;
  }
  equals(other) {
    return other instanceof PlainTime$12 && other.nanos === this.nanos;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * The time as the server displays it: `HH:MM:SS`, with a fraction when it has one
  */
  toString() {
    return formatTime2(this.nanos);
  }
};
function getRangeJoin2(beg, end) {
  let output = "";
  if (beg instanceof BoundExcluded2) output += ">";
  output += "..";
  if (end instanceof BoundIncluded2) output += "=";
  return output;
}
__name(getRangeJoin2, "getRangeJoin");
var Range2 = class Range$12 extends Value2 {
  static {
    __name(this, "Range$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, RANGE_SYMBOL$12);
  }
  _beg;
  _end;
  constructor(beg, end) {
    super();
    this._beg = beg;
    this._end = end;
    markSymbol$12(this, RANGE_SYMBOL$12);
  }
  equals(other) {
    if (!(other instanceof Range$12)) return false;
    if (this._beg?.constructor !== other._beg?.constructor) return false;
    if (this._end?.constructor !== other._end?.constructor) return false;
    return equals2(this._beg?.value, other._beg?.value) && equals2(this._end?.value, other._end?.value);
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns The escaped range string
  */
  toString() {
    const beg = escapeRangeBound2(this._beg);
    const end = escapeRangeBound2(this._end);
    return `${beg}${getRangeJoin2(this._beg, this._end)}${end}`;
  }
  /**
  * The range bound beginning
  */
  get begin() {
    return this._beg;
  }
  /**
  * The range bound ending
  */
  get end() {
    return this._end;
  }
};
var Table2 = class Table$12 extends Value2 {
  static {
    __name(this, "Table$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, TABLE_SYMBOL$12);
  }
  /**
  * Declares the record type of a table, while inferring its name.
  *
  * @example
  * ```ts
  * const users = Table.of<User>()("users"); // Table<"users", User>
  * ```
  */
  static of() {
    return (tb) => new Table$12(tb);
  }
  _name;
  constructor(tb) {
    super();
    if (typeof tb !== "string") throw new InvalidTableError2("Table must be a string");
    this._name = tb;
    markSymbol$12(this, TABLE_SYMBOL$12);
  }
  equals(other) {
    if (!(other instanceof Table$12)) return false;
    return this._name === other._name;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns The escaped table name
  */
  toString() {
    return escapeIdent2(this._name);
  }
  /**
  * The unescaped table name
  */
  get name() {
    return this._name;
  }
};
var _Table2 = Table2;
var RecordId2 = class RecordId$12 extends Value2 {
  static {
    __name(this, "RecordId$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, RECORD_ID_SYMBOL$12);
  }
  _table;
  _id;
  constructor(table3, id$1) {
    super();
    if (!isValidTable2(table3)) throw new InvalidRecordIdError2("Table part is not valid");
    if (!isValidIdPart2(id$1)) throw new InvalidRecordIdError2("ID part is not valid");
    this._table = typeof table3 === "string" ? new _Table2(table3) : table3;
    this._id = id$1;
    markSymbol$12(this, RECORD_ID_SYMBOL$12);
  }
  equals(other) {
    if (!(other instanceof RecordId$12)) return false;
    return this._table.equals(other._table) && equals2(this._id, other._id);
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns The escaped record ID string including the table name
  */
  toString() {
    const tb = escapeIdent2(this._table.name);
    const id$1 = escapeIdPart2(this._id);
    return `${tb}:${id$1}`;
  }
  /**
  * The table part value
  */
  get table() {
    return this._table;
  }
  /**
  * The ID part value
  */
  get id() {
    return this._id;
  }
};
var _RecordId2 = RecordId2;
var RecordIdRange2 = class RecordIdRange$12 extends Value2 {
  static {
    __name(this, "RecordIdRange$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, RECORD_ID_RANGE_SYMBOL$12);
  }
  _table;
  _beg;
  _end;
  constructor(table3, beg, end) {
    super();
    if (!isValidTable2(table3)) throw new InvalidRecordIdError2("Table part is not valid");
    if (!isValidIdBound2(beg)) throw new InvalidRecordIdError2("Begin bound is not valid");
    if (!isValidIdBound2(end)) throw new InvalidRecordIdError2("End bound is not valid");
    this._table = typeof table3 === "string" ? new _Table2(table3) : table3;
    this._beg = beg;
    this._end = end;
    markSymbol$12(this, RECORD_ID_RANGE_SYMBOL$12);
  }
  equals(other) {
    if (!(other instanceof RecordIdRange$12)) return false;
    if (this._beg?.constructor !== other._beg?.constructor) return false;
    if (this._end?.constructor !== other._end?.constructor) return false;
    return this._table.equals(other._table) && equals2(this._beg?.value, other._beg?.value) && equals2(this._end?.value, other._end?.value);
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * @returns The escaped record ID range string
  */
  toString() {
    const tb = escapeIdent2(this._table.name);
    const beg = escapeRangeBound2(this._beg);
    const end = escapeRangeBound2(this._end);
    return `${tb}:${beg}${getRangeJoin2(this._beg, this._end)}${end}`;
  }
  /**
  * The table part value
  */
  get table() {
    return this._table;
  }
  /**
  * The range bound beginning
  */
  get begin() {
    return this._beg;
  }
  /**
  * The range bound ending
  */
  get end() {
    return this._end;
  }
};
var _RecordIdRange2 = RecordIdRange2;
var Regex2 = class Regex$12 extends Value2 {
  static {
    __name(this, "Regex$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, REGEX_SYMBOL2);
  }
  /** The pattern, without delimiters */
  pattern;
  constructor(pattern) {
    super();
    if (pattern instanceof Regex$12) this.pattern = pattern.pattern;
    else if (typeof pattern === "string") this.pattern = pattern;
    else throw new InvalidRegexError2("A regex is made from the text of its pattern");
    markSymbol$12(this, REGEX_SYMBOL2);
  }
  /**
  * The pattern compiled by JavaScript's engine. Its syntax is close to, but not the same as,
  * the Rust `regex` crate's which the server uses.
  */
  toRegExp(flags) {
    return new RegExp(this.pattern, flags);
  }
  equals(other) {
    return other instanceof Regex$12 && other.pattern === this.pattern;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * The regex as SurrealQL writes it: `/pattern/`, with each `/` escaped
  */
  toString() {
    return `/${this.pattern.replaceAll("/", "\\/")}/`;
  }
};
var INTEGER_RANGES2 = {
  i8: [-(2n ** 7n), 2n ** 7n - 1n],
  u8: [0n, 2n ** 8n - 1n],
  i16: [-(2n ** 15n), 2n ** 15n - 1n],
  u16: [0n, 2n ** 16n - 1n],
  i32: [-(2n ** 31n), 2n ** 31n - 1n],
  u32: [0n, 2n ** 32n - 1n],
  u64: [0n, 2n ** 64n - 1n]
};
function checkInteger2(kind, value) {
  if (typeof value === "number" && !Number.isSafeInteger(value)) throw new InvalidNumberError2(`${value} is not an integer which ${kind} can hold exactly`);
  const int$1 = BigInt(value);
  const [min, max] = INTEGER_RANGES2[kind];
  if (int$1 < min || int$1 > max) throw new InvalidNumberError2(`${int$1} is outside the range of ${kind} (${min} to ${max})`);
  return int$1;
}
__name(checkInteger2, "checkInteger");
function floorLog22(a) {
  let e = Math.floor(Math.log2(a));
  if (2 ** e > a) e--;
  else if (2 ** (e + 1) <= a) e++;
  return e;
}
__name(floorLog22, "floorLog2");
function f16round2(value) {
  if (!Number.isFinite(value) || value === 0) return value;
  const sign = Math.sign(value);
  const abs = Math.abs(value);
  if (abs >= 65520) return sign * Number.POSITIVE_INFINITY;
  const exponent = floorLog22(abs);
  const quantum = exponent < -14 ? 2 ** -24 : 2 ** (exponent - 10);
  const steps = abs / quantum;
  let rounded = Math.round(steps);
  if (rounded - steps === 0.5 && rounded % 2 !== 0) rounded--;
  return sign * rounded * quantum;
}
__name(f16round2, "f16round");
function f16Bits$12(value) {
  if (Number.isNaN(value)) return 32256;
  const sign = value < 0 || Object.is(value, -0) ? 32768 : 0;
  const abs = Math.abs(value);
  if (abs === Number.POSITIVE_INFINITY) return sign | 31744;
  if (abs === 0) return sign;
  if (abs < 2 ** -14) return sign | abs / 2 ** -24;
  const exponent = floorLog22(abs);
  return sign | exponent + 15 << 10 | (abs / 2 ** exponent - 1) * 1024;
}
__name(f16Bits$12, "f16Bits$1");
var SizedNumber2 = class SizedNumber$12 extends Value2 {
  static {
    __name(this, "SizedNumber$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, SIZED_NUMBER_SYMBOL2);
  }
  /**
  * The value, which the kind holds exactly
  */
  value;
  constructor(value) {
    super();
    this.value = value;
    markSymbol$12(this, SIZED_NUMBER_SYMBOL2);
  }
  /**
  * Equal to a number of the same kind and value. NaN equals NaN, and -0 differs from 0.
  */
  equals(other) {
    return other instanceof SizedNumber$12 && other.kind === this.kind && Object.is(other.value, this.value);
  }
  valueOf() {
    return this.value;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return typeof this.value === "bigint" ? this.value.toString() : this.value;
  }
  toString() {
    return Object.is(this.value, -0) ? "-0" : String(this.value);
  }
};
function isKind2(instance, kind) {
  return hasSymbol$12(instance, SIZED_NUMBER_SYMBOL2) && instance.kind === kind;
}
__name(isKind2, "isKind");
var I82 = class extends SizedNumber2 {
  static {
    __name(this, "I8");
  }
  static [Symbol.hasInstance](instance) {
    return isKind2(instance, "i8");
  }
  constructor(value) {
    super(Number(checkInteger2("i8", value)));
  }
  get kind() {
    return "i8";
  }
};
var U82 = class extends SizedNumber2 {
  static {
    __name(this, "U8");
  }
  static [Symbol.hasInstance](instance) {
    return isKind2(instance, "u8");
  }
  constructor(value) {
    super(Number(checkInteger2("u8", value)));
  }
  get kind() {
    return "u8";
  }
};
var I162 = class extends SizedNumber2 {
  static {
    __name(this, "I16");
  }
  static [Symbol.hasInstance](instance) {
    return isKind2(instance, "i16");
  }
  constructor(value) {
    super(Number(checkInteger2("i16", value)));
  }
  get kind() {
    return "i16";
  }
};
var U162 = class extends SizedNumber2 {
  static {
    __name(this, "U16");
  }
  static [Symbol.hasInstance](instance) {
    return isKind2(instance, "u16");
  }
  constructor(value) {
    super(Number(checkInteger2("u16", value)));
  }
  get kind() {
    return "u16";
  }
};
var I322 = class extends SizedNumber2 {
  static {
    __name(this, "I32");
  }
  static [Symbol.hasInstance](instance) {
    return isKind2(instance, "i32");
  }
  constructor(value) {
    super(Number(checkInteger2("i32", value)));
  }
  get kind() {
    return "i32";
  }
};
var U322 = class extends SizedNumber2 {
  static {
    __name(this, "U32");
  }
  static [Symbol.hasInstance](instance) {
    return isKind2(instance, "u32");
  }
  constructor(value) {
    super(Number(checkInteger2("u32", value)));
  }
  get kind() {
    return "u32";
  }
};
var U642 = class extends SizedNumber2 {
  static {
    __name(this, "U64");
  }
  static [Symbol.hasInstance](instance) {
    return isKind2(instance, "u64");
  }
  constructor(value) {
    super(checkInteger2("u64", value));
  }
  get kind() {
    return "u64";
  }
};
var F162 = class extends SizedNumber2 {
  static {
    __name(this, "F16");
  }
  static [Symbol.hasInstance](instance) {
    return isKind2(instance, "f16");
  }
  constructor(value) {
    if (typeof value !== "number") throw new InvalidNumberError2("An f16 is made from a number");
    super(f16round2(value));
  }
  get kind() {
    return "f16";
  }
};
var F322 = class extends SizedNumber2 {
  static {
    __name(this, "F32");
  }
  static [Symbol.hasInstance](instance) {
    return isKind2(instance, "f32");
  }
  constructor(value) {
    if (typeof value !== "number") throw new InvalidNumberError2("An f32 is made from a number");
    super(Math.fround(value));
  }
  get kind() {
    return "f32";
  }
};
var StringRecordId2 = class StringRecordId$12 extends Value2 {
  static {
    __name(this, "StringRecordId$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, STRING_RECORD_ID_SYMBOL$12);
  }
  _rid;
  constructor(rid) {
    super();
    if (rid instanceof StringRecordId$12) this._rid = rid._rid;
    else if (rid instanceof _RecordId2) this._rid = rid.toString();
    else if (typeof rid === "string") this._rid = rid;
    else throw new InvalidRecordIdError2("String Record ID must be a string");
    markSymbol$12(this, STRING_RECORD_ID_SYMBOL$12);
  }
  equals(other) {
    if (!(other instanceof StringRecordId$12)) return false;
    return this._rid === other._rid;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this._rid;
  }
  /**
  * @returns The string representation of the record ID
  */
  toString() {
    return this._rid;
  }
};
var MIN_SECONDS2 = MIN_DAYS2 * SECONDS_PER_DAY2;
var MAX_SECONDS2 = MAX_DAYS2 * SECONDS_PER_DAY2 + SECONDS_PER_DAY2 - 1;
var MAX_NANOS2 = NANOS_PER_SECOND2 - 1;
var Timestamp2 = class Timestamp$12 extends Value2 {
  static {
    __name(this, "Timestamp$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, TIMESTAMP_SYMBOL2);
  }
  /** `infinity`, the latest timestamp */
  static INFINITY = new Timestamp$12([MAX_SECONDS2, MAX_NANOS2]);
  /** `-infinity`, the earliest timestamp */
  static NEG_INFINITY = new Timestamp$12([MIN_SECONDS2, 0]);
  /** The whole seconds since 1970-01-01T00:00:00 */
  seconds;
  /** The nanoseconds within the second. A leap second holds one billion or more. */
  nanoseconds;
  /**
  * A timestamp from its `[seconds, nanoseconds]` since 1970-01-01T00:00:00, from
  * `YYYY-MM-DDTHH:MM[:SS[.fraction]]` (a space may stand for the `T`), from `infinity` or
  * `-infinity`, or from the UTC reading of a `Date`.
  */
  constructor(input) {
    super();
    let seconds;
    let nanos;
    if (input instanceof Timestamp$12) {
      seconds = input.seconds;
      nanos = input.nanoseconds;
    } else if (input instanceof Date) {
      const ms = input.getTime();
      if (Number.isNaN(ms)) throw new InvalidDateError2(input);
      seconds = Math.floor(ms / 1e3);
      nanos = (ms - seconds * 1e3) * 1e6;
    } else if (typeof input === "string") [seconds, nanos] = Timestamp$12.#parse(input);
    else {
      seconds = Number(input[0]);
      nanos = Number(input[1]);
    }
    if (!Number.isSafeInteger(seconds) || !Number.isSafeInteger(nanos) || seconds < MIN_SECONDS2 || seconds > MAX_SECONDS2 || nanos < 0 || nanos >= 2 * NANOS_PER_SECOND2) throw new InvalidDateError2(`A timestamp cannot be [${seconds}, ${nanos}]`);
    this.seconds = seconds;
    this.nanoseconds = nanos;
    markSymbol$12(this, TIMESTAMP_SYMBOL2);
  }
  static #parse(input) {
    const text$1 = input.trim();
    const lower = text$1.toLowerCase();
    if (lower === "infinity" || lower === "+infinity") return [MAX_SECONDS2, MAX_NANOS2];
    if (lower === "-infinity") return [MIN_SECONDS2, 0];
    if (lower === "epoch") return [0, 0];
    const at = text$1.search(/[T ]/);
    if (at < 0) throw new InvalidDateError2(`Invalid timestamp: ${JSON.stringify(input)}`);
    const days = parseDate2(text$1.slice(0, at));
    const nanos = parseTime2(text$1.slice(at + 1));
    if (nanos >= NANOS_PER_DAY2) throw new InvalidDateError2(`Invalid timestamp: ${JSON.stringify(input)}`);
    const seconds = days * SECONDS_PER_DAY2 + Math.floor(nanos / NANOS_PER_SECOND2);
    return [seconds, nanos % NANOS_PER_SECOND2];
  }
  /** Whether this is `infinity` or `-infinity` */
  get isInfinite() {
    return this.equals(Timestamp$12.INFINITY) || this.equals(Timestamp$12.NEG_INFINITY);
  }
  /**
  * The `[seconds, nanoseconds]` since 1970-01-01T00:00:00, as `cbor.2` carries a timestamp
  */
  toCompact() {
    return [this.seconds, this.nanoseconds];
  }
  /**
  * This reading taken as UTC, as a `Date`. The `Date` drops what is below a millisecond.
  */
  toDate() {
    return new Date(this.seconds * 1e3 + Math.floor(this.nanoseconds / 1e6));
  }
  equals(other) {
    return other instanceof Timestamp$12 && other.seconds === this.seconds && other.nanoseconds === this.nanoseconds;
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this.toString();
  }
  /**
  * The timestamp as the server displays it: `YYYY-MM-DDTHH:MM:SS`, with a fraction when it
  * has one, or `infinity` or `-infinity`
  */
  toString() {
    if (this.seconds === MAX_SECONDS2 && this.nanoseconds === MAX_NANOS2) return "infinity";
    if (this.seconds === MIN_SECONDS2 && this.nanoseconds === 0) return "-infinity";
    const days = Math.floor(this.seconds / SECONDS_PER_DAY2);
    const secs = this.seconds - days * SECONDS_PER_DAY2;
    const nanos = secs * NANOS_PER_SECOND2 + this.nanoseconds;
    const time3 = this.nanoseconds >= NANOS_PER_SECOND2 ? formatTime2(nanos - NANOS_PER_SECOND2).replace(/:59(\.|$)/, ":60$1") : formatTime2(nanos);
    return `${formatDate2(days)}T${time3}`;
  }
};
var DIGITS2 = "0123456789abcdef";
var UUID2 = class UUID$12 {
  static {
    __name(this, "UUID$1");
  }
  /** @param bytes - The 16-byte byte array representation. */
  constructor(bytes) {
    this.bytes = bytes;
  }
  /**
  * Creates an object from the internal representation, a 16-byte byte array
  * containing the binary UUID representation in the big-endian byte order.
  *
  * This method does NOT shallow-copy the argument, and thus the created object
  * holds the reference to the underlying buffer.
  *
  * @throws TypeError if the length of the argument is not 16.
  */
  static ofInner(bytes) {
    if (bytes.length !== 16) throw new TypeError("not 128-bit length");
    else return new UUID$12(bytes);
  }
  /**
  * Builds a byte array from UUIDv7 field values.
  *
  * @param unixTsMs - A 48-bit `unix_ts_ms` field value.
  * @param randA - A 12-bit `rand_a` field value.
  * @param randBHi - The higher 30 bits of 62-bit `rand_b` field value.
  * @param randBLo - The lower 32 bits of 62-bit `rand_b` field value.
  * @throws RangeError if any field value is out of the specified range.
  */
  static fromFieldsV7(unixTsMs, randA, randBHi, randBLo) {
    if (!Number.isInteger(unixTsMs) || !Number.isInteger(randA) || !Number.isInteger(randBHi) || !Number.isInteger(randBLo) || unixTsMs < 0 || randA < 0 || randBHi < 0 || randBLo < 0 || unixTsMs > 281474976710655 || randA > 4095 || randBHi > 1073741823 || randBLo > 4294967295) throw new RangeError("invalid field value");
    const bytes = new Uint8Array(16);
    bytes[0] = unixTsMs / 2 ** 40;
    bytes[1] = unixTsMs / 2 ** 32;
    bytes[2] = unixTsMs / 2 ** 24;
    bytes[3] = unixTsMs / 2 ** 16;
    bytes[4] = unixTsMs / 2 ** 8;
    bytes[5] = unixTsMs;
    bytes[6] = 112 | randA >>> 8;
    bytes[7] = randA;
    bytes[8] = 128 | randBHi >>> 24;
    bytes[9] = randBHi >>> 16;
    bytes[10] = randBHi >>> 8;
    bytes[11] = randBHi;
    bytes[12] = randBLo >>> 24;
    bytes[13] = randBLo >>> 16;
    bytes[14] = randBLo >>> 8;
    bytes[15] = randBLo;
    return new UUID$12(bytes);
  }
  /**
  * Builds a byte array from a string representation.
  *
  * This method accepts the following formats:
  *
  * - 32-digit hexadecimal format without hyphens: `0189dcd553117d408db09496a2eef37b`
  * - 8-4-4-4-12 hyphenated format: `0189dcd5-5311-7d40-8db0-9496a2eef37b`
  * - Hyphenated format with surrounding braces: `{0189dcd5-5311-7d40-8db0-9496a2eef37b}`
  * - RFC 9562 URN format: `urn:uuid:0189dcd5-5311-7d40-8db0-9496a2eef37b`
  *
  * Leading and trailing whitespaces represents an error.
  *
  * @throws SyntaxError if the argument could not parse as a valid UUID string.
  */
  static parse(uuid) {
    var _a, _b, _c, _d;
    let hex = void 0;
    switch (uuid.length) {
      case 32:
        hex = (_a = /^[0-9a-f]{32}$/i.exec(uuid)) === null || _a === void 0 ? void 0 : _a[0];
        break;
      case 36:
        hex = (_b = /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(uuid)) === null || _b === void 0 ? void 0 : _b.slice(1, 6).join("");
        break;
      case 38:
        hex = (_c = /^\{([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})\}$/i.exec(uuid)) === null || _c === void 0 ? void 0 : _c.slice(1, 6).join("");
        break;
      case 45:
        hex = (_d = /^urn:uuid:([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(uuid)) === null || _d === void 0 ? void 0 : _d.slice(1, 6).join("");
        break;
      default:
        break;
    }
    if (hex) {
      const inner = new Uint8Array(16);
      for (let i = 0; i < 16; i += 4) {
        const n = parseInt(hex.substring(2 * i, 2 * i + 8), 16);
        inner[i + 0] = n >>> 24;
        inner[i + 1] = n >>> 16;
        inner[i + 2] = n >>> 8;
        inner[i + 3] = n;
      }
      return new UUID$12(inner);
    } else throw new SyntaxError("could not parse UUID string");
  }
  /**
  * @returns The 8-4-4-4-12 canonical hexadecimal string representation
  * (`0189dcd5-5311-7d40-8db0-9496a2eef37b`).
  */
  toString() {
    let text$1 = "";
    for (let i = 0; i < this.bytes.length; i++) {
      text$1 += DIGITS2.charAt(this.bytes[i] >>> 4);
      text$1 += DIGITS2.charAt(this.bytes[i] & 15);
      if (i === 3 || i === 5 || i === 7 || i === 9) text$1 += "-";
    }
    return text$1;
  }
  /**
  * @returns The 32-digit hexadecimal representation without hyphens
  * (`0189dcd553117d408db09496a2eef37b`).
  */
  toHex() {
    let text$1 = "";
    for (let i = 0; i < this.bytes.length; i++) {
      text$1 += DIGITS2.charAt(this.bytes[i] >>> 4);
      text$1 += DIGITS2.charAt(this.bytes[i] & 15);
    }
    return text$1;
  }
  /** @returns The 8-4-4-4-12 canonical hexadecimal string representation. */
  toJSON() {
    return this.toString();
  }
  /**
  * Reports the variant field value of the UUID or, if appropriate, "NIL" or
  * "MAX".
  *
  * For convenience, this method reports "NIL" or "MAX" if `this` represents
  * the Nil or Max UUID, although the Nil and Max UUIDs are technically
  * subsumed under the variants `0b0` and `0b111`, respectively.
  */
  getVariant() {
    const n = this.bytes[8] >>> 4;
    if (n < 0) throw new Error("unreachable");
    else if (n <= 7) return this.bytes.every((e) => e === 0) ? "NIL" : "VAR_0";
    else if (n <= 11) return "VAR_10";
    else if (n <= 13) return "VAR_110";
    else if (n <= 15) return this.bytes.every((e) => e === 255) ? "MAX" : "VAR_RESERVED";
    else throw new Error("unreachable");
  }
  /**
  * Returns the version field value of the UUID or `undefined` if the UUID does
  * not have the variant field value of `0b10`.
  */
  getVersion() {
    return this.getVariant() === "VAR_10" ? this.bytes[6] >>> 4 : void 0;
  }
  /** Creates an object from `this`. */
  clone() {
    return new UUID$12(this.bytes.slice(0));
  }
  /** Returns true if `this` is equivalent to `other`. */
  equals(other) {
    return this.compareTo(other) === 0;
  }
  /**
  * Returns a negative integer, zero, or positive integer if `this` is less
  * than, equal to, or greater than `other`, respectively.
  */
  compareTo(other) {
    for (let i = 0; i < 16; i++) {
      const diff = this.bytes[i] - other.bytes[i];
      if (diff !== 0) return Math.sign(diff);
    }
    return 0;
  }
};
var V7Generator2 = class {
  static {
    __name(this, "V7Generator");
  }
  /**
  * Creates a generator object with the default random number generator, or
  * with the specified one if passed as an argument. The specified random
  * number generator should be cryptographically strong and securely seeded.
  */
  constructor(randomNumberGenerator) {
    this.timestamp = 0;
    this.counter = 0;
    this.random = randomNumberGenerator !== null && randomNumberGenerator !== void 0 ? randomNumberGenerator : getDefaultRandom2();
  }
  /**
  * Generates a new UUIDv7 object from the current timestamp, or resets the
  * generator upon significant timestamp rollback.
  *
  * This method returns a monotonically increasing UUID by reusing the previous
  * timestamp even if the up-to-date timestamp is smaller than the immediately
  * preceding UUID's. However, when such a clock rollback is considered
  * significant (i.e., by more than ten seconds), this method resets the
  * generator and returns a new UUID based on the given timestamp, breaking the
  * increasing order of UUIDs.
  *
  * See {@link generateOrAbort} for the other mode of generation and
  * {@link generateOrResetCore} for the low-level primitive.
  */
  generate() {
    return this.generateOrResetCore(Date.now(), 1e4);
  }
  /**
  * Generates a new UUIDv7 object from the current timestamp, or returns
  * `undefined` upon significant timestamp rollback.
  *
  * This method returns a monotonically increasing UUID by reusing the previous
  * timestamp even if the up-to-date timestamp is smaller than the immediately
  * preceding UUID's. However, when such a clock rollback is considered
  * significant (i.e., by more than ten seconds), this method aborts and
  * returns `undefined` immediately.
  *
  * See {@link generate} for the other mode of generation and
  * {@link generateOrAbortCore} for the low-level primitive.
  */
  generateOrAbort() {
    return this.generateOrAbortCore(Date.now(), 1e4);
  }
  /**
  * Generates a new UUIDv7 object from the `unixTsMs` passed, or resets the
  * generator upon significant timestamp rollback.
  *
  * This method is equivalent to {@link generate} except that it takes a custom
  * timestamp and clock rollback allowance.
  *
  * @param rollbackAllowance - The amount of `unixTsMs` rollback that is
  * considered significant. A suggested value is `10_000` (milliseconds).
  * @throws RangeError if `unixTsMs` is not a 48-bit positive integer.
  */
  generateOrResetCore(unixTsMs, rollbackAllowance) {
    let value = this.generateOrAbortCore(unixTsMs, rollbackAllowance);
    if (value === void 0) {
      this.timestamp = 0;
      value = this.generateOrAbortCore(unixTsMs, rollbackAllowance);
    }
    return value;
  }
  /**
  * Generates a new UUIDv7 object from the `unixTsMs` passed, or returns
  * `undefined` upon significant timestamp rollback.
  *
  * This method is equivalent to {@link generateOrAbort} except that it takes a
  * custom timestamp and clock rollback allowance.
  *
  * @param rollbackAllowance - The amount of `unixTsMs` rollback that is
  * considered significant. A suggested value is `10_000` (milliseconds).
  * @throws RangeError if `unixTsMs` is not a 48-bit positive integer.
  */
  generateOrAbortCore(unixTsMs, rollbackAllowance) {
    const MAX_COUNTER = 4398046511103;
    if (!Number.isInteger(unixTsMs) || unixTsMs < 1 || unixTsMs > 281474976710655) throw new RangeError("`unixTsMs` must be a 48-bit positive integer");
    else if (rollbackAllowance < 0 || rollbackAllowance > 281474976710655) throw new RangeError("`rollbackAllowance` out of reasonable range");
    if (unixTsMs > this.timestamp) {
      this.timestamp = unixTsMs;
      this.resetCounter();
    } else if (unixTsMs + rollbackAllowance >= this.timestamp) {
      this.counter++;
      if (this.counter > MAX_COUNTER) {
        this.timestamp++;
        this.resetCounter();
      }
    } else return void 0;
    return UUID2.fromFieldsV7(this.timestamp, Math.trunc(this.counter / 2 ** 30), this.counter & 2 ** 30 - 1, this.random.nextUint32());
  }
  /** Initializes the counter at a 42-bit random integer. */
  resetCounter() {
    this.counter = this.random.nextUint32() * 1024 + (this.random.nextUint32() & 1023);
  }
  /**
  * Generates a new UUIDv4 object utilizing the random number generator inside.
  *
  * @internal
  */
  generateV4() {
    const bytes = new Uint8Array(Uint32Array.of(this.random.nextUint32(), this.random.nextUint32(), this.random.nextUint32(), this.random.nextUint32()).buffer);
    bytes[6] = 64 | bytes[6] >>> 4;
    bytes[8] = 128 | bytes[8] >>> 2;
    return UUID2.ofInner(bytes);
  }
};
var getDefaultRandom2 = /* @__PURE__ */ __name(() => {
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues !== "undefined") return new BufferedCryptoRandom2();
  else {
    if (typeof UUIDV7_DENY_WEAK_RNG !== "undefined" && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
    return { nextUint32: /* @__PURE__ */ __name(() => Math.trunc(Math.random() * 65536) * 65536 + Math.trunc(Math.random() * 65536), "nextUint32") };
  }
}, "getDefaultRandom");
var BufferedCryptoRandom2 = class {
  static {
    __name(this, "BufferedCryptoRandom");
  }
  constructor() {
    this.buffer = new Uint32Array(8);
    this.cursor = 65535;
  }
  nextUint32() {
    if (this.cursor >= this.buffer.length) {
      crypto.getRandomValues(this.buffer);
      this.cursor = 0;
    }
    return this.buffer[this.cursor++];
  }
};
var defaultGenerator2;
var uuidv7obj2 = /* @__PURE__ */ __name(() => (defaultGenerator2 || (defaultGenerator2 = new V7Generator2())).generate(), "uuidv7obj");
var uuidv4obj2 = /* @__PURE__ */ __name(() => (defaultGenerator2 || (defaultGenerator2 = new V7Generator2())).generateV4(), "uuidv4obj");
function isSharedArrayBuffer2(value) {
  return typeof SharedArrayBuffer !== "undefined" && value instanceof SharedArrayBuffer;
}
__name(isSharedArrayBuffer2, "isSharedArrayBuffer");
var Uuid2 = class Uuid$12 extends Value2 {
  static {
    __name(this, "Uuid$1");
  }
  static [Symbol.hasInstance](instance) {
    return hasSymbol$12(instance, UUID_SYMBOL$12);
  }
  _inner;
  constructor(uuid) {
    super();
    if (uuid instanceof ArrayBuffer || isSharedArrayBuffer2(uuid)) this._inner = UUID2.ofInner(new Uint8Array(uuid));
    else if (uuid instanceof Uint8Array) this._inner = UUID2.ofInner(uuid);
    else if (uuid instanceof Uuid$12) this._inner = uuid._inner;
    else if (uuid instanceof UUID2) this._inner = uuid;
    else this._inner = UUID2.parse(uuid);
    markSymbol$12(this, UUID_SYMBOL$12);
  }
  equals(other) {
    if (!(other instanceof Uuid$12)) return false;
    return this._inner.equals(other._inner);
  }
  toJSON() {
    if (Value2._useExperimentalToJson) return JsonCodec2.DEFAULT.encode(this);
    return this._inner.toString();
  }
  /**
  * @returns The string representation of the UUID
  */
  toString() {
    return this._inner.toString();
  }
  /**
  * Converts the UUID to a Uint8Array
  */
  toUint8Array() {
    return this._inner.bytes;
  }
  /**
  * Converts the UUID to a ArrayBuffer
  */
  toBuffer() {
    return this._inner.bytes.buffer;
  }
  /**
  * Generate a new UUID v4
  */
  static v4() {
    return new Uuid$12(uuidv4obj2());
  }
  /**
  * Generate a new UUID v7
  */
  static v7() {
    return new Uuid$12(uuidv7obj2());
  }
};
function isValidIdPart2(v) {
  if (v instanceof Uuid2) return true;
  switch (typeof v) {
    case "string":
    case "number":
    case "bigint":
      return true;
    case "object":
      if (v === null) return false;
      if (Array.isArray(v)) return true;
      return isPlainObject$12(v);
    default:
      return false;
  }
}
__name(isValidIdPart2, "isValidIdPart");
function isPlainObject$12(v) {
  if (v === null || typeof v !== "object") return false;
  const proto = Object.getPrototypeOf(v);
  return proto === null || proto === Object.prototype;
}
__name(isPlainObject$12, "isPlainObject$1");
function isValidIdBound2(bound) {
  return bound instanceof BoundIncluded2 || bound instanceof BoundExcluded2 ? isValidIdPart2(bound.value) : true;
}
__name(isValidIdBound2, "isValidIdBound");
function isValidTable2(tb) {
  return tb instanceof _Table2 || typeof tb === "string";
}
__name(isValidTable2, "isValidTable");
function toSurqlString2(input) {
  if (typeof input === "string") return `s${JSON.stringify(input)}`;
  if (input === null) return "NULL";
  if (input === void 0) return "NONE";
  if (typeof input === "object") {
    if (input instanceof Uuid2) return `u${JSON.stringify(input.toString())}`;
    if (input instanceof Date || input instanceof DateTime2) return `d${JSON.stringify(input.toISOString())}`;
    if (input instanceof _RecordId2 || input instanceof StringRecordId2) return `r${JSON.stringify(input.toString())}`;
    if (input instanceof FileRef2) return `f${JSON.stringify(input.toString())}`;
    if (input instanceof Geometry2) return toSurqlString2(input.toJSON());
    if (input instanceof Decimal2) return `${input.toJSON()}dec`;
    if (input instanceof BigDecimal2) return `${input.toString()}bigdec`;
    if (input instanceof PlainDate2) return `pd${JSON.stringify(input.toString())}`;
    if (input instanceof PlainTime2) return `pt${JSON.stringify(input.toString())}`;
    if (input instanceof Timestamp2) return `ts${JSON.stringify(input.toString())}`;
    if (input instanceof Interval2) return `ivl${JSON.stringify(input.toString())}`;
    if (input instanceof Regex2) return input.toString();
    if (input instanceof SizedNumber2) {
      const value = input.value;
      if (typeof value === "number" && (!Number.isFinite(value) || Object.is(value, -0))) return `<${input.kind}>${Object.is(value, -0) ? "-0.0" : value}`;
      return `${value}${input.kind}`;
    }
    if (input instanceof Duration2 || input instanceof Future2 || input instanceof Range2 || input instanceof _Table2) return input.toString();
    switch (Object.getPrototypeOf(input)) {
      case Object.prototype: {
        let output = "{ ";
        const entries$1 = Object.entries(input);
        for (const [i, [k, v]] of entries$1.entries()) {
          output += `${JSON.stringify(k)}: ${toSurqlString2(v)}`;
          if (i < entries$1.length - 1) output += ", ";
        }
        output += " }";
        return output;
      }
      case Map.prototype: {
        let output = "{ ";
        const entries$1 = Array.from(input.entries());
        for (const [i, [k, v]] of entries$1.entries()) {
          output += `${JSON.stringify(k)}: ${toSurqlString2(v)}`;
          if (i < entries$1.length - 1) output += ", ";
        }
        output += " }";
        return output;
      }
      case Array.prototype: {
        const array$1 = input.map(toSurqlString2);
        return `[ ${array$1.join(", ")} ]`;
      }
      case Set.prototype: {
        const set = [...input].map(toSurqlString2);
        return `[ ${set.join(", ")} ]`;
      }
    }
  }
  return `${input}`;
}
__name(toSurqlString2, "toSurqlString");
var MAX_i642 = 9223372036854775807n;
var SURREAL_RESERVED_KEYWORDS2 = /* @__PURE__ */ new Set([
  "alter",
  "begin",
  "break",
  "cancel",
  "commit",
  "continue",
  "create",
  "define",
  "delete",
  "for",
  "if",
  "info",
  "insert",
  "kill",
  "live",
  "option",
  "rebuild",
  "return",
  "relate",
  "remove",
  "select",
  "let",
  "show",
  "sleep",
  "throw",
  "update",
  "upsert",
  "use",
  "diff",
  "rand",
  "none",
  "null",
  "after",
  "before",
  "value",
  "by",
  "all",
  "true",
  "false",
  "where",
  "table",
  "tb",
  "sequence",
  "function",
  "explain"
]);
function escapeIdent2(str) {
  if (str === "") return "\u27E8\u27E9";
  const first = str.charCodeAt(0);
  if (first > 47 && first < 58) return delimitIdent2(str);
  if (str === "NaN" || str === "Infinity") return `\u27E8${str}\u27E9`;
  if (SURREAL_RESERVED_KEYWORDS2.has(str.toLowerCase())) return delimitIdent2(str);
  let code;
  let i;
  let len;
  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123) && !(code === 95)) return delimitIdent2(str);
  }
  return str;
}
__name(escapeIdent2, "escapeIdent");
function delimitIdent2(str) {
  if (!str.includes("\\") && !str.includes("\u27E9")) return `\u27E8${str}\u27E9`;
  return `\`${str.replaceAll("\\", "\\\\").replaceAll("`", "\\`")}\``;
}
__name(delimitIdent2, "delimitIdent");
function escapeNumber2(num) {
  return num <= MAX_i642 ? num.toString() : `\u27E8${num}\u27E9`;
}
__name(escapeNumber2, "escapeNumber");
function escapeIdPart2(id$1) {
  return id$1 instanceof Uuid2 ? `u"${id$1.toString()}"` : typeof id$1 === "string" ? escapeIdent2(id$1) : typeof id$1 === "bigint" || typeof id$1 === "number" ? escapeNumber2(id$1) : toSurqlString2(id$1);
}
__name(escapeIdPart2, "escapeIdPart");
function escapeRangeBound2(bound) {
  if (bound === void 0) return "";
  const value = bound.value;
  if (isValidIdPart2(value)) return escapeIdPart2(value);
  if (value instanceof Range2) return `(${toSurqlString2(value)})`;
  return toSurqlString2(value);
}
__name(escapeRangeBound2, "escapeRangeBound");
var POW_2_53$12 = 9007199254740992;
var POW_2_642 = BigInt(18446744073709552e3);
var Encoded2 = class {
  static {
    __name(this, "Encoded");
  }
  constructor(encoded) {
    this.encoded = encoded;
  }
};
var CborError2 = class {
  static {
    __name(this, "CborError");
  }
  message;
  constructor(message) {
    this.message = message;
  }
};
var CborNumberError2 = class extends CborError2 {
  static {
    __name(this, "CborNumberError");
  }
  name = "CborNumberError";
};
var CborRangeError2 = class extends CborError2 {
  static {
    __name(this, "CborRangeError");
  }
  name = "CborRangeError";
};
var CborInvalidMajorError2 = class extends CborError2 {
  static {
    __name(this, "CborInvalidMajorError");
  }
  name = "CborInvalidMajorError";
};
var CborBreak2 = class extends CborError2 {
  static {
    __name(this, "CborBreak");
  }
  name = "CborBreak";
  constructor() {
    super("Came across a break which was not intercepted by the decoder");
  }
};
var CborPartialDisabled2 = class extends CborError2 {
  static {
    __name(this, "CborPartialDisabled");
  }
  name = "CborPartialDisabled";
  constructor() {
    super("Tried to insert a Gap into a CBOR value, while partial mode is not enabled");
  }
};
var CborFillMissing2 = class extends CborError2 {
  static {
    __name(this, "CborFillMissing");
  }
  name = "CborFillMissing";
  constructor() {
    super("Fill for a gap is missing, and gap has no default");
  }
};
var Gap2 = class {
  static {
    __name(this, "Gap");
  }
  args = [];
  constructor(...args) {
    this.args = args;
  }
  fill(value) {
    return [this, value];
  }
  hasDefault() {
    return this.args.length === 1;
  }
  get default() {
    return this.args[0];
  }
};
var Writer2 = class {
  static {
    __name(this, "Writer");
  }
  constructor(byteLength = 256) {
    this.byteLength = byteLength;
    this._buf = new ArrayBuffer(this.byteLength), this._view = new DataView(this._buf), this._byte = new Uint8Array(this._buf);
  }
  _chunks = [];
  _pos = 0;
  _buf;
  _view;
  _byte;
  chunk(gap) {
    this._chunks.push([this._byte.subarray(0, this._pos), gap]), this._buf = new ArrayBuffer(this.byteLength), this._view = new DataView(this._buf), this._byte = new Uint8Array(this._buf), this._pos = 0;
  }
  get chunks() {
    return this._chunks;
  }
  get buffer() {
    return this._byte.subarray(0, this._pos);
  }
  claim(length) {
    let pos = this._pos;
    if (this._pos += length, this._pos <= this._buf.byteLength) return pos;
    let newLen = this._buf.byteLength << 1;
    for (; newLen < this._pos; ) newLen <<= 1;
    let oldb = this._byte;
    return this._buf = new ArrayBuffer(newLen), this._view = new DataView(this._buf), this._byte = new Uint8Array(this._buf), this._byte.set(oldb), pos;
  }
  writeUint8(value) {
    let pos = this.claim(1);
    this._byte[pos] = value;
  }
  writeUint16(value) {
    let pos = this.claim(2);
    this._view.setUint16(pos, value, false);
  }
  writeUint32(value) {
    let pos = this.claim(4);
    this._view.setUint32(pos, value, false);
  }
  writeUint64(value) {
    let pos = this.claim(8);
    this._view.setBigUint64(pos, value, false);
  }
  writeFloat32(value) {
    let pos = this.claim(4);
    this._view.setFloat32(pos, value, false);
  }
  writeFloat64(value) {
    let pos = this.claim(8);
    this._view.setFloat64(pos, value, false);
  }
  writeUint8Array(data) {
    if (data.byteLength === 0) return;
    let pos = this.claim(data.byteLength);
    this._byte.set(data, pos);
  }
  writePartiallyEncoded(data) {
    for (let [buf, gap] of data.chunks) this.writeUint8Array(buf), this.chunk(gap);
    this.writeUint8Array(data.end);
  }
  writeMajor(type2, length) {
    let base = type2 << 5;
    typeof length == "number" ? length < 24 ? this.writeUint8(base + length) : length < 256 ? (this.writeUint8(base + 24), this.writeUint8(length)) : length < 65536 ? (this.writeUint8(base + 25), this.writeUint16(length)) : length < 4294967296 ? (this.writeUint8(base + 26), this.writeUint32(length)) : (this.writeUint8(base + 27), this.writeUint64(BigInt(length))) : length < 24n ? this.writeUint8(base + Number(length)) : length < 256n ? (this.writeUint8(base + 24), this.writeUint8(Number(length))) : length < 65536n ? (this.writeUint8(base + 25), this.writeUint16(Number(length))) : length < 4294967296n ? (this.writeUint8(base + 26), this.writeUint32(Number(length))) : (this.writeUint8(base + 27), this.writeUint64(length));
  }
  output(partial = false, replacer) {
    return partial ? new PartiallyEncoded2(this._chunks, this.buffer, replacer) : this.buffer;
  }
};
var PartiallyEncoded2 = class {
  static {
    __name(this, "PartiallyEncoded");
  }
  constructor(chunks, end, replacer) {
    this.chunks = chunks;
    this.end = end;
    this.replacer = replacer;
  }
  build(fills, partial) {
    let writer = new Writer2(), map = new Map(fills);
    for (let [buffer, gap] of this.chunks) {
      let hasValue = map.has(gap) || gap.hasDefault();
      if (!partial && !hasValue) throw new CborFillMissing2();
      if (writer.writeUint8Array(buffer), hasValue) {
        let data = map.get(gap) ?? gap.default;
        encode2(data, {
          writer,
          replacer: this.replacer
        });
      } else writer.chunk(gap);
    }
    return writer.writeUint8Array(this.end), partial ? writer.output(true, this.replacer) : writer.output(false, this.replacer);
  }
};
var Tagged2 = class {
  static {
    __name(this, "Tagged");
  }
  constructor(tag, value) {
    this.tag = tag;
    this.value = value;
  }
};
var textEncoder2 = new TextEncoder();
function encode2(input, options = {}) {
  let w = options.writer ?? new Writer2(), fillsMap = new Map(options.fills ?? []);
  function inner(input2) {
    if (input2 = options.replacer?.(input2) ?? input2, input2 === void 0) return w.writeUint8(247);
    if (input2 === null) return w.writeUint8(246);
    if (input2 === true) return w.writeUint8(245);
    if (input2 === false) return w.writeUint8(244);
    switch (typeof input2) {
      case "number":
        if (Number.isInteger(input2)) if (input2 >= 0 && input2 <= 9007199254740992) w.writeMajor(0, input2);
        else if (input2 < 0 && input2 >= -9007199254740992) w.writeMajor(1, -(input2 + 1));
        else throw new CborNumberError2("Number too big to be encoded");
        else w.writeUint8(251), w.writeFloat64(input2);
        return;
      case "bigint":
        if (input2 >= 0 && input2 < POW_2_642) w.writeMajor(0, input2);
        else if (input2 <= 0 && input2 >= -POW_2_642) w.writeMajor(1, -(input2 + 1n));
        else throw new CborNumberError2("BigInt too big to be encoded");
        return;
      case "string": {
        let encoded = textEncoder2.encode(input2);
        w.writeMajor(3, encoded.byteLength), w.writeUint8Array(encoded);
        return;
      }
      default:
        if (Array.isArray(input2)) {
          w.writeMajor(4, input2.length);
          for (let v of input2) inner(v);
          return;
        }
        if (input2 instanceof Tagged2) {
          w.writeMajor(6, input2.tag), inner(input2.value);
          return;
        }
        if (input2 instanceof Encoded2) {
          w.writeUint8Array(input2.encoded);
          return;
        }
        if (input2 instanceof Gap2) {
          if (fillsMap.has(input2)) inner(fillsMap.get(input2));
          else if (options.partial) w.chunk(input2);
          else throw new CborPartialDisabled2();
          return;
        }
        if (input2 instanceof PartiallyEncoded2) {
          let res = options.partial ? input2.build(options.fills ?? [], true) : input2.build(options.fills ?? [], false);
          res instanceof PartiallyEncoded2 ? w.writePartiallyEncoded(res) : w.writeUint8Array(res);
          return;
        }
        if (input2 instanceof Uint8Array || input2 instanceof Uint16Array || input2 instanceof Uint32Array || input2 instanceof Int8Array || input2 instanceof Int16Array || input2 instanceof Int32Array || input2 instanceof Float32Array || input2 instanceof Float64Array || input2 instanceof ArrayBuffer) {
          let v = input2 instanceof Uint8Array ? input2 : new Uint8Array(input2);
          w.writeMajor(2, v.byteLength), w.writeUint8Array(v);
          return;
        }
        if (input2 instanceof Map) {
          w.writeMajor(5, input2.size);
          for (let [k, v] of input2) inner(k), inner(v);
        } else {
          let entries$1 = Object.entries(input2);
          w.writeMajor(5, entries$1.length);
          for (let [k, v] of entries$1) inner(k), inner(v);
        }
    }
  }
  __name(inner, "inner");
  return inner(input), options.partial ? w.output(true, options.replacer) : w.output(false, options.replacer);
}
__name(encode2, "encode");
var F16_SIGN_MASK2 = 32768;
var F16_EXP_MASK2 = 31744;
var F16_FRAC_MASK2 = 1023;
var F16_EXP_SHIFT2 = 10;
var F16_EXP_BIAS2 = 15;
var F16_EXP_INF_NAN2 = 31;
var F16_FRAC_SCALE2 = 1024;
var F16_SUBNORMAL_SCALE2 = 2 ** -14;
var FLOAT16_EXP_LUT2 = Array.from({ length: 31 }, (_, e) => 2 ** (e - F16_EXP_BIAS2));
var Reader2 = class {
  static {
    __name(this, "Reader");
  }
  _view;
  _byte;
  _pos = 0;
  constructor(buffer) {
    this._byte = buffer, this._view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  }
  skip(amount = 1) {
    let pos = this._pos;
    if (this._byte.length - pos < amount) throw new CborRangeError2("Tried to read 1 byte beyond buffer bounds");
    this._pos = pos + amount;
  }
  peekUint8() {
    let pos = this._pos;
    if (this._byte.length - pos < 1) throw new CborRangeError2("Tried to read 1 byte beyond buffer bounds");
    return this._view.getUint8(pos);
  }
  readUint8() {
    let pos = this._pos;
    if (this._byte.length - pos < 1) throw new CborRangeError2("Tried to read 1 byte beyond buffer bounds");
    let val = this._view.getUint8(pos);
    return this._pos = pos + 1, val;
  }
  readUint16() {
    let pos = this._pos;
    if (this._byte.length - pos < 2) throw new CborRangeError2("Tried to read 2 bytes beyond buffer bounds");
    let val = this._view.getUint16(pos);
    return this._pos = pos + 2, val;
  }
  readUint32() {
    let pos = this._pos;
    if (this._byte.length - pos < 4) throw new CborRangeError2("Tried to read 4 bytes beyond buffer bounds");
    let val = this._view.getUint32(pos);
    return this._pos = pos + 4, val;
  }
  readUint64() {
    let pos = this._pos;
    if (this._byte.length - pos < 8) throw new CborRangeError2("Tried to read 8 bytes beyond buffer bounds");
    let val = this._view.getBigUint64(pos);
    return this._pos = pos + 8, val;
  }
  readFloat16() {
    let val = this.readUint16(), sign = val & F16_SIGN_MASK2 ? -1 : 1, exp = (val & F16_EXP_MASK2) >> F16_EXP_SHIFT2, frac = val & F16_FRAC_MASK2;
    return exp === 0 ? sign * (frac / F16_FRAC_SCALE2) * F16_SUBNORMAL_SCALE2 : exp === F16_EXP_INF_NAN2 ? frac ? NaN : sign * Number.POSITIVE_INFINITY : sign * (1 + frac / F16_FRAC_SCALE2) * FLOAT16_EXP_LUT2[exp];
  }
  readFloat32() {
    let pos = this._pos;
    if (this._byte.length - pos < 4) throw new CborRangeError2("Tried to read 4 bytes for float32 beyond buffer bounds");
    let val = this._view.getFloat32(pos);
    return this._pos = pos + 4, val;
  }
  readFloat64() {
    let pos = this._pos;
    if (this._byte.length - pos < 8) throw new CborRangeError2("Tried to read 8 bytes for float64 beyond buffer bounds");
    let val = this._view.getFloat64(pos);
    return this._pos = pos + 8, val;
  }
  readBytes(amount) {
    let pos = this._pos;
    if (this._byte.length - pos < amount) throw new CborRangeError2(`Tried to read ${amount} bytes beyond buffer`);
    return this._pos = pos + amount, this._byte.subarray(pos, this._pos);
  }
  readMajor() {
    let byte = this.readUint8(), major = byte >> 5;
    if (major < 0 || major > 7) throw new CborInvalidMajorError2("Received invalid major type");
    return [major, byte & 31];
  }
  readMajorLength(length) {
    if (length <= 23) return length;
    if (length === 24) return this.readUint8();
    if (length === 25) return this.readUint16();
    if (length === 26) return this.readUint32();
    if (length === 27) {
      let read2 = this.readUint64();
      return read2 > 9007199254740992 ? read2 : Number(read2);
    }
    throw new CborRangeError2("Expected a final length");
  }
};
function infiniteBytes2(r$1, forMajor) {
  let w = new Writer2();
  for (; ; ) {
    let [major, len] = r$1.readMajor();
    if (major === 7 && len === 31) break;
    if (major !== forMajor) throw new CborInvalidMajorError2(`Expected a resource of the same major (${forMajor}) while processing an infinite resource`);
    if (len === 31) throw new CborRangeError2("Expected a finite resource while processing an infinite resource");
    w.writeUint8Array(r$1.readBytes(Number(r$1.readMajorLength(len))));
  }
  return w.buffer.buffer;
}
__name(infiniteBytes2, "infiniteBytes");
var textDecoder2 = new TextDecoder();
function decode2(input, options = {}) {
  let r$1 = input instanceof Reader2 ? input : new Reader2(input);
  return decodeValue2(r$1, options);
}
__name(decode2, "decode");
function decodeValue2(r$1, options) {
  let [major, len] = r$1.readMajor();
  switch (major) {
    case 0:
      return r$1.readMajorLength(len);
    case 1: {
      let l = r$1.readMajorLength(len);
      return typeof l == "bigint" ? -(l + 1n) : -(l + 1);
    }
    case 2:
      return len !== 31 ? new Uint8Array(r$1.readBytes(Number(r$1.readMajorLength(len)))).buffer : infiniteBytes2(r$1, 2);
    case 3: {
      let encoded = len !== 31 ? r$1.readBytes(Number(r$1.readMajorLength(len))) : infiniteBytes2(r$1, 3);
      return textDecoder2.decode(encoded);
    }
    case 4: {
      if (len !== 31) {
        let l = r$1.readMajorLength(len), arr2 = Array(l);
        for (let i = 0; i < l; i++) arr2[i] = decodeValue2(r$1, options);
        return arr2;
      }
      let arr = [];
      for (; ; ) {
        if (r$1.peekUint8() === 255) {
          r$1.skip();
          break;
        }
        arr.push(decodeValue2(r$1, options));
      }
      return arr;
    }
    case 5: {
      if (options.map === "map") {
        let map = /* @__PURE__ */ new Map();
        if (len !== 31) {
          let l = r$1.readMajorLength(len);
          for (let i = 0; i < l; i++) map.set(decodeValue2(r$1, options), decodeValue2(r$1, options));
        } else for (; ; ) {
          if (r$1.peekUint8() === 255) {
            r$1.skip();
            break;
          }
          map.set(decodeValue2(r$1, options), decodeValue2(r$1, options));
        }
        return map;
      }
      let obj = {};
      if (len !== 31) {
        let l = r$1.readMajorLength(len);
        for (let i = 0; i < l; i++) obj[decodeValue2(r$1, options)] = decodeValue2(r$1, options);
      } else for (; ; ) {
        if (r$1.peekUint8() === 255) {
          r$1.skip();
          break;
        }
        obj[decodeValue2(r$1, options)] = decodeValue2(r$1, options);
      }
      return obj;
    }
    case 6: {
      let tag = Number(r$1.readMajorLength(len)), value = decodeValue2(r$1, options), replacer = options.tagged?.[tag];
      return replacer ? replacer(value) : new Tagged2(tag, value);
    }
    case 7:
      switch (len) {
        case 20:
          return false;
        case 21:
          return true;
        case 22:
          return null;
        case 23:
          return;
        case 25:
          return r$1.readFloat16();
        case 26:
          return r$1.readFloat32();
        case 27:
          return r$1.readFloat64();
        case 31:
          throw new CborBreak2();
      }
  }
  throw new CborInvalidMajorError2(`Unable to decode value with major tag ${major}`);
}
__name(decodeValue2, "decodeValue");
var StrictReader2 = class extends Reader2 {
  static {
    __name(this, "StrictReader");
  }
  /** The major type of the item read last */
  major = 0;
  /** The additional information of the item read last: 25, 26 or 27 for a float */
  info = 0;
  readMajor() {
    const head = super.readMajor();
    [this.major, this.info] = head;
    return head;
  }
  /** Whether the item read last is an integer */
  get isInteger() {
    return this.major === 0 || this.major === 1;
  }
  /** Whether the item read last is a float */
  get isFloat() {
    return this.major === 7 && this.info >= 25 && this.info <= 27;
  }
};
function rangeToCbor2([beg, end]) {
  function encodeBound(bound) {
    if (!bound) return null;
    if (hasSymbol$12(bound, BOUND_INCLUDED_SYMBOL$12)) return new Tagged2(TAG_BOUND_INCLUDED2, bound.value);
    if (hasSymbol$12(bound, BOUND_EXCLUDED_SYMBOL$12)) return new Tagged2(TAG_BOUND_EXCLUDED2, bound.value);
    return null;
  }
  __name(encodeBound, "encodeBound");
  return [encodeBound(beg), encodeBound(end)];
}
__name(rangeToCbor2, "rangeToCbor");
function cborToRange2(range) {
  function decodeBound(bound) {
    if (bound === null) return void 0;
    if (hasSymbol$12(bound, BOUND_INCLUDED_SYMBOL$12)) return bound;
    if (hasSymbol$12(bound, BOUND_EXCLUDED_SYMBOL$12)) return bound;
    throw new SqonError2("Expected the bounds to be decoded already");
  }
  __name(decodeBound, "decodeBound");
  return [decodeBound(range[0]), decodeBound(range[1])];
}
__name(cborToRange2, "cborToRange");
var TAG_SPEC_DATETIME2 = 0;
var TAG_SPEC_UUID2 = 37;
var TAG_NONE2 = 6;
var TAG_TABLE2 = 7;
var TAG_RECORDID2 = 8;
var TAG_STRING_UUID2 = 9;
var TAG_STRING_DECIMAL2 = 10;
var TAG_CUSTOM_DATETIME2 = 12;
var TAG_STRING_DURATION2 = 13;
var TAG_CUSTOM_DURATION2 = 14;
var TAG_FUTURE2 = 15;
var TAG_RANGE2 = 49;
var TAG_BOUND_INCLUDED2 = 50;
var TAG_BOUND_EXCLUDED2 = 51;
var TAG_FILE_POINTER2 = 55;
var TAG_SET2 = 56;
var TAG_SHAPED_BLOCK2 = 57;
var TAG_GEOMETRY_POINT2 = 88;
var TAG_GEOMETRY_LINE2 = 89;
var TAG_GEOMETRY_POLYGON2 = 90;
var TAG_GEOMETRY_MULTIPOINT2 = 91;
var TAG_GEOMETRY_MULTILINE2 = 92;
var TAG_GEOMETRY_MULTIPOLYGON2 = 93;
var TAG_GEOMETRY_COLLECTION2 = 94;
var TAG_DATE2 = 100;
var TAG_TIME2 = 189;
var TAG_TIMESTAMP2 = 190;
var TAG_INTERVAL2 = 191;
var TAG_BIGDECIMAL2 = 192;
var TAG_REGEX2 = 193;
var TAG_SIZED2 = {
  i8: 180,
  u8: 181,
  i16: 182,
  u16: 183,
  i32: 184,
  u32: 185,
  u64: 186,
  f16: 187,
  f32: 188
};
var SIZED_CLASSES2 = {
  i8: I82,
  u8: U82,
  i16: I162,
  u16: U162,
  i32: I322,
  u32: U322,
  u64: U642,
  f16: F162,
  f32: F322
};
var I64_MIN$22 = -(2n ** 63n);
var I64_MAX$22 = 2n ** 63n - 1n;
function uint642(value) {
  if (typeof value !== "bigint" || value <= I64_MAX$22) return value;
  const buf = new Uint8Array(9);
  buf[0] = 27;
  new DataView(buf.buffer).setBigUint64(1, value, false);
  return new Encoded2(buf);
}
__name(uint642, "uint64");
function encodeFloat2(value) {
  if (Number.isNaN(value) || Object.is(f16round2(value), value)) {
    const bits = f16Bits$12(value);
    return new Encoded2(new Uint8Array([
      249,
      bits >> 8,
      bits & 255
    ]));
  }
  const width = Math.fround(value) === value ? 4 : 8;
  const buf = new Uint8Array(width + 1);
  const view = new DataView(buf.buffer);
  if (width === 4) {
    buf[0] = 250;
    view.setFloat32(1, value, false);
  } else {
    buf[0] = 251;
    view.setFloat64(1, value, false);
  }
  return new Encoded2(buf);
}
__name(encodeFloat2, "encodeFloat");
var CborCodec2 = class CborCodec$12 {
  static {
    __name(this, "CborCodec$1");
  }
  /**
  * The default CborCodec instance.
  */
  static DEFAULT = new CborCodec$12({});
  #options;
  #reader;
  constructor(options) {
    this.#options = options;
  }
  /**
  * The CBOR dialect this codec speaks: 1 for `cbor`, 2 for `cbor.2`
  */
  get version() {
    return this.#options.version ?? 1;
  }
  encode(data) {
    return encode2(data, {
      replacer: this.replacer,
      partial: false
    });
  }
  decode(data) {
    const reader = new StrictReader2(data);
    const outer = this.#reader;
    this.#reader = reader;
    try {
      return decode2(reader, { tagged: this.tagged });
    } finally {
      this.#reader = outer;
    }
  }
  replacer = /* @__PURE__ */ __name((input) => {
    const value = this.#encodeValue(input);
    if (typeof value === "bigint" && (value < I64_MIN$22 || value > I64_MAX$22)) throw new InvalidNumberError2(`The integer ${value} is outside the signed 64-bit range of a SurrealDB int: send it as a Decimal, or as a U64 when it fits one`);
    if (value && hasSymbol$12(value, SIZED_NUMBER_SYMBOL2)) return this.#encodeSized(value);
    if (Object.is(value, -0)) return encodeFloat2(-0);
    if (typeof value === "number" && Number.isInteger(value) && (value > POW_2_53$12 || value < -POW_2_53$12)) {
      const buf = new Uint8Array(9);
      buf[0] = 251;
      new DataView(buf.buffer, buf.byteOffset, 9).setFloat64(1, value, false);
      return new Encoded2(buf);
    }
    if (value && hasSymbol$12(value, PLAIN_DATE_SYMBOL2)) return this.#encodeDate(value);
    if (value && hasSymbol$12(value, PLAIN_TIME_SYMBOL2)) return this.#encodeTime(value);
    if (value && hasSymbol$12(value, TIMESTAMP_SYMBOL2)) return this.#encodeTimestamp(value);
    if (value && hasSymbol$12(value, INTERVAL_SYMBOL2)) return this.#encodeInterval(value);
    if (value && hasSymbol$12(value, BIG_DECIMAL_SYMBOL2)) return this.#encodeBigDecimal(value);
    if (value && hasSymbol$12(value, REGEX_SYMBOL2)) return this.#encodeRegex(value);
    if (value instanceof Date) return new Tagged2(TAG_CUSTOM_DATETIME2, new DateTime2(value).toCompact());
    if (value && hasSymbol$12(value, DATETIME_SYMBOL$12)) return new Tagged2(TAG_CUSTOM_DATETIME2, value.toCompact());
    if (value === void 0) return new Tagged2(TAG_NONE2, null);
    if (value && hasSymbol$12(value, UUID_SYMBOL$12)) return new Tagged2(TAG_SPEC_UUID2, value.toBuffer());
    if (value && hasSymbol$12(value, DECIMAL_SYMBOL$12)) return new Tagged2(TAG_STRING_DECIMAL2, value.toString());
    if (value && hasSymbol$12(value, DURATION_SYMBOL$12)) return new Tagged2(TAG_CUSTOM_DURATION2, value.toCompact().map(uint642));
    if (value && hasSymbol$12(value, RECORD_ID_SYMBOL$12)) return new Tagged2(TAG_RECORDID2, [value.table.name, value.id]);
    if (value && hasSymbol$12(value, STRING_RECORD_ID_SYMBOL$12)) return new Tagged2(TAG_RECORDID2, value.toString());
    if (value && hasSymbol$12(value, RECORD_ID_RANGE_SYMBOL$12)) return new Tagged2(TAG_RECORDID2, [value.table.name, new Tagged2(TAG_RANGE2, rangeToCbor2([value.begin, value.end]))]);
    if (value && hasSymbol$12(value, TABLE_SYMBOL$12)) return new Tagged2(TAG_TABLE2, value.name);
    if (value && hasSymbol$12(value, FUTURE_SYMBOL$12)) {
      if (this.version === 2) throw new UnsupportedValueError2("SurrealDB 4.0 has no futures to send one to");
      return new Tagged2(TAG_FUTURE2, value.body);
    }
    if (value && hasSymbol$12(value, RANGE_SYMBOL$12)) return new Tagged2(TAG_RANGE2, rangeToCbor2([value.begin, value.end]));
    if (value && hasSymbol$12(value, FILE_REF_SYMBOL$12)) return new Tagged2(TAG_FILE_POINTER2, [value.bucket, value.key]);
    if (value instanceof Set) return new Tagged2(TAG_SET2, [...value]);
    if (value && hasSymbol$12(value, GEOMETRY_POINT_SYMBOL$12)) return new Tagged2(TAG_GEOMETRY_POINT2, value.point);
    if (value && hasSymbol$12(value, GEOMETRY_LINE_SYMBOL$12)) return new Tagged2(TAG_GEOMETRY_LINE2, value.line);
    if (value && hasSymbol$12(value, GEOMETRY_POLYGON_SYMBOL$12)) return new Tagged2(TAG_GEOMETRY_POLYGON2, value.polygon);
    if (value && hasSymbol$12(value, GEOMETRY_MULTI_POINT_SYMBOL$12)) return new Tagged2(TAG_GEOMETRY_MULTIPOINT2, value.points);
    if (value && hasSymbol$12(value, GEOMETRY_MULTI_LINE_SYMBOL$12)) return new Tagged2(TAG_GEOMETRY_MULTILINE2, value.lines);
    if (value && hasSymbol$12(value, GEOMETRY_MULTI_POLYGON_SYMBOL$12)) return new Tagged2(TAG_GEOMETRY_MULTIPOLYGON2, value.polygons);
    if (value && hasSymbol$12(value, GEOMETRY_COLLECTION_SYMBOL$12)) return new Tagged2(TAG_GEOMETRY_COLLECTION2, value.collection);
    return value;
  }, "replacer");
  tagged = {
    [TAG_SPEC_DATETIME2]: (v) => this.#decodeValue(this.#resolveSpecDate(v)),
    [TAG_CUSTOM_DATETIME2]: (v) => this.#decodeValue(this.#resolveCustomDate(v)),
    [TAG_SPEC_UUID2]: (v) => this.#decodeValue(new Uuid2(v)),
    [TAG_STRING_UUID2]: (v) => this.#decodeValue(new Uuid2(v)),
    [TAG_NONE2]: (_v) => this.#decodeValue(void 0),
    [TAG_STRING_DECIMAL2]: (v) => this.#decodeValue(new Decimal2(v)),
    [TAG_STRING_DURATION2]: (v) => this.#decodeValue(new Duration2(v)),
    [TAG_CUSTOM_DURATION2]: (v) => this.#decodeValue(new Duration2(v)),
    [TAG_TABLE2]: (v) => this.#decodeValue(new _Table2(v)),
    [TAG_FUTURE2]: (v) => this.#decodeValue(new Future2(v)),
    [TAG_RANGE2]: (v) => this.#decodeValue(new Range2(...cborToRange2(v))),
    [TAG_BOUND_INCLUDED2]: (v) => this.#decodeValue(new BoundIncluded2(v)),
    [TAG_BOUND_EXCLUDED2]: (v) => this.#decodeValue(new BoundExcluded2(v)),
    [TAG_RECORDID2]: (v) => {
      if (typeof v === "string") return this.#decodeValue(new StringRecordId2(v));
      if (hasSymbol$12(v[1], RANGE_SYMBOL$12)) return this.#decodeValue(new _RecordIdRange2(v[0], v[1].begin, v[1].end));
      return this.#decodeValue(new _RecordId2(v[0], this.#recordIdKey(v[1])));
    },
    [TAG_FILE_POINTER2]: (v) => this.#decodeValue(new FileRef2(v[0], v[1])),
    [TAG_SET2]: (v) => this.#decodeValue(new Set(v)),
    [TAG_SHAPED_BLOCK2]: () => {
      throw new ShapedFrameError2("a shaped block outside the shaped format");
    },
    [TAG_GEOMETRY_POINT2]: (v) => this.#decodeValue(new GeometryPoint2(v)),
    [TAG_GEOMETRY_LINE2]: (v) => this.#decodeValue(new GeometryLine2(v)),
    [TAG_GEOMETRY_POLYGON2]: (v) => this.#decodeValue(new GeometryPolygon2(v)),
    [TAG_GEOMETRY_MULTIPOINT2]: (v) => this.#decodeValue(new GeometryMultiPoint2(v)),
    [TAG_GEOMETRY_MULTILINE2]: (v) => this.#decodeValue(new GeometryMultiLine2(v)),
    [TAG_GEOMETRY_MULTIPOLYGON2]: (v) => this.#decodeValue(new GeometryMultiPolygon2(v)),
    [TAG_GEOMETRY_COLLECTION2]: (v) => this.#decodeValue(new GeometryCollection2(v)),
    [TAG_DATE2]: (v) => this.#decodeValue(new PlainDate2(Number(this.#v2Integer(TAG_DATE2, v)))),
    [TAG_TIME2]: (v) => this.#decodeValue(new PlainTime2(this.#v2Integer(TAG_TIME2, v))),
    [TAG_TIMESTAMP2]: (v) => {
      const [seconds, nanos] = this.#v2Tuple(TAG_TIMESTAMP2, v, 2);
      return this.#decodeValue(new Timestamp2([seconds, nanos]));
    },
    [TAG_INTERVAL2]: (v) => {
      const [months, days, micros] = this.#v2Tuple(TAG_INTERVAL2, v, 3);
      return this.#decodeValue(new Interval2([
        Number(months),
        Number(days),
        micros
      ]));
    },
    [TAG_BIGDECIMAL2]: (v) => this.#decodeValue(new BigDecimal2(this.#v2Text(TAG_BIGDECIMAL2, v))),
    [TAG_REGEX2]: (v) => this.#decodeValue(new Regex2(this.#v2Text(TAG_REGEX2, v))),
    ...Object.fromEntries(Object.entries(TAG_SIZED2).map(([kind, tag]) => [tag, (v) => this.#decodeValue(this.#decodeSized(kind, v))]))
  };
  #encodeSized(value) {
    const float = value.kind === "f16" || value.kind === "f32";
    if (this.version === 2) {
      const tag = TAG_SIZED2[value.kind];
      if (float) return new Tagged2(tag, encodeFloat2(value.value));
      return new Tagged2(tag, uint642(value.value));
    }
    if (float) return encodeFloat2(value.value);
    if (typeof value.value === "bigint") {
      if (value.value > I64_MAX$22) return new Tagged2(TAG_STRING_DECIMAL2, value.value.toString());
      return value.value <= POW_2_53$12 ? Number(value.value) : value.value;
    }
    return value.value;
  }
  #encodeDate(value) {
    if (this.version === 2) return new Tagged2(TAG_DATE2, value.days);
    return new Tagged2(TAG_CUSTOM_DATETIME2, [value.days * SECONDS_PER_DAY2, 0]);
  }
  #encodeTime(value) {
    if (this.version === 2) return new Tagged2(TAG_TIME2, value.nanos);
    const secs = Math.floor(value.nanos / NANOS_PER_SECOND2);
    const nanos = value.nanos % NANOS_PER_SECOND2;
    return new Tagged2(TAG_CUSTOM_DURATION2, nanos ? [secs, nanos] : secs ? [secs] : []);
  }
  #encodeTimestamp(value) {
    return new Tagged2(this.version === 2 ? TAG_TIMESTAMP2 : TAG_CUSTOM_DATETIME2, value.toCompact());
  }
  #encodeInterval(value) {
    if (this.version === 2) return new Tagged2(TAG_INTERVAL2, value.toCompact());
    return value.toString();
  }
  #encodeBigDecimal(value) {
    if (this.version === 2) return new Tagged2(TAG_BIGDECIMAL2, value.toString());
    if (value.fitsDecimal()) return new Tagged2(TAG_STRING_DECIMAL2, value.toString());
    return value.toString();
  }
  #encodeRegex(value) {
    if (this.version === 2) return new Tagged2(TAG_REGEX2, value.pattern);
    throw new UnsupportedValueError2("A regex can only be sent over cbor.2");
  }
  /** The content of a cbor.2-only tag, which must be an integer */
  #v2Integer(tag, value) {
    this.#requireV2(tag);
    if (!this.#reader?.isInteger || typeof value !== "number" && typeof value !== "bigint") throw new InvalidNumberError2(`CBOR tag ${tag} must hold an integer`);
    return value;
  }
  /** The content of a cbor.2-only tag, which must be an array of `length` integers */
  #v2Tuple(tag, value, length) {
    this.#requireV2(tag);
    if (!Array.isArray(value) || value.length !== length || !value.every((v) => typeof v === "number" || typeof v === "bigint")) throw new InvalidNumberError2(`CBOR tag ${tag} must hold an array of ${length} integers`);
    return value;
  }
  /** The content of a cbor.2-only tag, which must be text */
  #v2Text(tag, value) {
    this.#requireV2(tag);
    if (typeof value !== "string") throw new UnsupportedValueError2(`CBOR tag ${tag} must hold text`);
    return value;
  }
  #requireV2(tag) {
    if (this.version !== 2) throw new UnsupportedValueError2(`CBOR tag ${tag} is only valid in cbor.2`);
  }
  #decodeSized(kind, value) {
    if (this.version !== 2) throw new InvalidNumberError2(`CBOR tag ${TAG_SIZED2[kind]} (${kind}) is only valid in cbor.2`);
    const float = kind === "f16" || kind === "f32";
    const reader = this.#reader;
    const shaped = float ? reader?.isFloat : reader?.isInteger;
    if (!shaped || typeof value !== "number" && typeof value !== "bigint") throw new InvalidNumberError2(`CBOR tag ${TAG_SIZED2[kind]} (${kind}) must hold ${float ? "a float" : "an integer"}`);
    const sized$1 = new SIZED_CLASSES2[kind](value);
    if (float && !Object.is(sized$1.value, value) && !Number.isNaN(value)) throw new InvalidNumberError2(`The float ${value} cannot be held exactly by ${kind}`);
    return sized$1;
  }
  /**
  * A record id key holds an i64, so a sized integer key is read as a plain integer.
  */
  #recordIdKey(key) {
    if (!(key instanceof SizedNumber2)) return key;
    if (key.kind === "f16" || key.kind === "f32") throw new InvalidNumberError2(`A record id key cannot be a ${key.kind}`);
    if (typeof key.value === "bigint") {
      if (key.value > I64_MAX$22) throw new InvalidNumberError2(`The record id key ${key.value} is outside the signed 64-bit range`);
      return key.value <= POW_2_53$12 ? Number(key.value) : key.value;
    }
    return key.value;
  }
  #resolveSpecDate(v) {
    return this.#options.useNativeDates ? new Date(v) : new DateTime2(v);
  }
  #resolveCustomDate(v) {
    return this.#options.useNativeDates ? /* @__PURE__ */ new Date(Number(v[0]) * 1e3 + Number(v[1]) / 1e6) : new DateTime2(v);
  }
  #encodeValue(v) {
    return this.#options.valueEncodeVisitor ? this.#options.valueEncodeVisitor(v) : v;
  }
  #decodeValue(v) {
    return this.#options.valueDecodeVisitor ? this.#options.valueDecodeVisitor(v) : v;
  }
};
var FlatBufferCodec2 = class FlatBufferCodec$12 {
  static {
    __name(this, "FlatBufferCodec$1");
  }
  /**
  * The default FlatBufferCodec instance.
  */
  static DEFAULT = new FlatBufferCodec$12({});
  #options;
  constructor(options) {
    this.#options = options;
  }
  encode(_data) {
    throw new SqonError2("FlatBuffer encoding is not supported in this version");
  }
  decode(_data) {
    throw new SqonError2("FlatBuffer decoding is not supported in this version");
  }
};
var MAX_FIXED2 = 1 << 20;
var TEXT2 = new TextDecoder("utf-8", { fatal: true });
var UTF8$22 = new TextEncoder();
var POW_2_532 = 2n ** 53n;
var Kind2 = /* @__PURE__ */ (function(Kind$1) {
  Kind$1[Kind$1["Bool"] = 1] = "Bool";
  Kind$1[Kind$1["Int"] = 2] = "Int";
  Kind$1[Kind$1["Float"] = 3] = "Float";
  Kind$1[Kind$1["Datetime"] = 4] = "Datetime";
  Kind$1[Kind$1["Duration"] = 5] = "Duration";
  Kind$1[Kind$1["Uuid"] = 6] = "Uuid";
  Kind$1[Kind$1["Bit"] = 7] = "Bit";
  Kind$1[Kind$1["I8"] = 8] = "I8";
  Kind$1[Kind$1["I16"] = 9] = "I16";
  Kind$1[Kind$1["I32"] = 10] = "I32";
  Kind$1[Kind$1["U8"] = 11] = "U8";
  Kind$1[Kind$1["U16"] = 12] = "U16";
  Kind$1[Kind$1["U32"] = 13] = "U32";
  Kind$1[Kind$1["U64"] = 14] = "U64";
  Kind$1[Kind$1["F32"] = 15] = "F32";
  Kind$1[Kind$1["String"] = 16] = "String";
  Kind$1[Kind$1["Bytes"] = 17] = "Bytes";
  Kind$1[Kind$1["Decimal"] = 18] = "Decimal";
  Kind$1[Kind$1["Record"] = 19] = "Record";
  Kind$1[Kind$1["Dynamic"] = 20] = "Dynamic";
  Kind$1[Kind$1["Array"] = 22] = "Array";
  Kind$1[Kind$1["F16"] = 23] = "F16";
  Kind$1[Kind$1["DatetimeNs"] = 24] = "DatetimeNs";
  Kind$1[Kind$1["DurationNs"] = 25] = "DurationNs";
  Kind$1[Kind$1["Object"] = 32] = "Object";
  return Kind$1;
})({});
var KINDS2 = new Set(Object.values(Kind2).filter((k) => typeof k === "number"));
var MIN_I642 = -(2n ** 63n);
var MAX_I642 = 2n ** 63n - 1n;
var MAX_U642 = 2n ** 64n - 1n;
var I64_MIN$12 = -(2n ** 63n);
var I64_MAX$12 = 2n ** 63n - 1n;
var SIZED2 = /* @__PURE__ */ new Map([
  [I82, Kind2.I8],
  [I162, Kind2.I16],
  [I322, Kind2.I32],
  [U82, Kind2.U8],
  [U162, Kind2.U16],
  [U322, Kind2.U32],
  [U642, Kind2.U64],
  [F162, Kind2.F16],
  [F322, Kind2.F32]
]);
var EMPTY2 = new Uint8Array(0);
var UTF8$12 = new TextEncoder();
var I64_MIN2 = -(2n ** 63n);
var I64_MAX2 = 2n ** 63n - 1n;
var UTF82 = new TextEncoder();
var DURATION_UNIT_STARTS2 = /* @__PURE__ */ new Set([
  "n",
  "u",
  "m",
  "s",
  "h",
  "d",
  "w",
  "y",
  "\xB5",
  "\u03BC"
]);
var VALUE_TERMINATORS2 = /* @__PURE__ */ new Set([
  "]",
  "}",
  ")",
  ","
]);
var ANGLE_OPEN2 = "\u27E8";
var ANGLE_CLOSE2 = "\u27E9";
var TextParser2 = class TextParser$12 {
  static {
    __name(this, "TextParser$1");
  }
  #src;
  #opts;
  #pos = 0;
  constructor(src, opts = {}) {
    this.#src = src;
    this.#opts = opts;
  }
  /**
  * Parse a single SQON value and ensure the entire input was consumed.
  */
  parse() {
    this.#skipWs();
    const value = this.#parseValue();
    this.#skipWs();
    if (!this.#eof()) this.#error(`Unexpected trailing input '${this.#peek()}'`);
    return value;
  }
  #eof() {
    return this.#pos >= this.#src.length;
  }
  #peek(offset = 0) {
    return this.#src[this.#pos + offset];
  }
  #next() {
    const char = this.#src[this.#pos];
    if (char === void 0) this.#error("Unexpected end of input");
    this.#pos += 1;
    return char;
  }
  #skipWs() {
    while (this.#pos < this.#src.length) {
      const code = this.#src.charCodeAt(this.#pos);
      if (code === 32 || code === 9 || code === 10 || code === 13 || code === 12 || code === 11) this.#pos += 1;
      else break;
    }
  }
  #error(message) {
    throw new TextParseError2(message, this.#pos);
  }
  #parseValue() {
    this.#skipWs();
    if (this.#peek() === "." && this.#peek(1) === ".") {
      this.#pos += 2;
      const end = this.#parseRangeEnd(this.#parsePrimeBound.bind(this));
      return new Range2(void 0, end);
    }
    const left = this.#parsePrime();
    if (left instanceof _RecordId2 || left instanceof _RecordIdRange2) return left;
    const mark = this.#pos;
    this.#skipWs();
    let exclusive = false;
    if (this.#peek() === ">" && this.#peek(1) === "." && this.#peek(2) === ".") {
      this.#pos += 1;
      exclusive = true;
    }
    if (this.#peek() === "." && this.#peek(1) === ".") {
      this.#pos += 2;
      const begin = exclusive ? new BoundExcluded2(left) : new BoundIncluded2(left);
      const end = this.#parseRangeEnd(this.#parsePrimeBound.bind(this));
      return new Range2(begin, end);
    }
    this.#pos = mark;
    return left;
  }
  #parsePrimeBound() {
    return this.#parsePrime();
  }
  #parseRangeEnd(parseInner) {
    let inclusive = false;
    if (this.#peek() === "=") {
      this.#pos += 1;
      inclusive = true;
    }
    this.#skipWs();
    if (this.#canStartValue()) {
      const value = parseInner();
      return inclusive ? new BoundIncluded2(value) : new BoundExcluded2(value);
    }
    if (inclusive) this.#error("Expected a value after inclusive range operator '..='");
    return void 0;
  }
  #canStartValue() {
    const char = this.#peek();
    if (char === void 0) return false;
    if (VALUE_TERMINATORS2.has(char)) return false;
    if (char === "." && this.#peek(1) === ".") return false;
    return true;
  }
  #parsePrime() {
    this.#skipWs();
    const char = this.#peek();
    if (char === void 0) this.#error("Unexpected end of input, expected a value");
    switch (char) {
      case '"':
      case "'":
        return this.#readQuoted(char);
      case "[":
        return this.#parseArray();
      case "{":
        return this.#parseObjectOrSet();
      case "(":
        return this.#parseGeometryOrGroup();
      case "`":
      case ANGLE_OPEN2:
        return this.#parseIdentValue();
    }
    const code = char.charCodeAt(0);
    if (code >= 48 && code <= 57 || char === "+" || char === "-") return this.#parseNumberLike();
    if (this.#isIdentStart(code)) {
      const next = this.#peek(1);
      if ((next === '"' || next === "'") && "sdubfr".includes(char)) return this.#parsePrefixedLiteral(char, next);
      return this.#parseIdentValue();
    }
    this.#error(`Unexpected character '${char}', expected a value`);
  }
  #isIdentStart(code) {
    return code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95;
  }
  #isIdentContinue(code) {
    return code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95;
  }
  #parseIdentValue() {
    const { name, quoted } = this.#parseIdentRaw();
    if (!quoted) {
      switch (name.toLowerCase()) {
        case "none":
          return void 0;
        case "null":
          return null;
        case "true":
          return true;
        case "false":
          return false;
      }
      if (name === "Infinity") return Number.POSITIVE_INFINITY;
      if (name === "NaN") return NaN;
    }
    if (this.#peek() === ":") return this.#parseRecordIdOrRange(name);
    return new _Table2(name);
  }
  #parseIdentRaw() {
    const char = this.#peek();
    if (char === "`") {
      this.#pos += 1;
      return {
        name: this.#readDelimitedIdent("`"),
        quoted: true
      };
    }
    if (char === ANGLE_OPEN2) {
      this.#pos += 1;
      return {
        name: this.#readDelimitedIdent(ANGLE_CLOSE2),
        quoted: true
      };
    }
    const start = this.#pos;
    const startCode = char === void 0 ? -1 : char.charCodeAt(0);
    if (!this.#isIdentStart(startCode)) this.#error("Expected an identifier");
    this.#pos += 1;
    while (!this.#eof() && this.#isIdentContinue(this.#src.charCodeAt(this.#pos))) this.#pos += 1;
    return {
      name: this.#src.slice(start, this.#pos),
      quoted: false
    };
  }
  #readDelimitedIdent(close2) {
    let result = "";
    while (true) {
      const char = this.#peek();
      if (char === void 0) this.#error(`Unterminated identifier, expected '${close2}'`);
      this.#pos += 1;
      if (char === close2) break;
      if (char === "\\") result += this.#readEscape();
      else result += char;
    }
    return result;
  }
  #parseRecordIdOrRange(table3) {
    this.#pos += 1;
    if (this.#peek() === "." && this.#peek(1) === ".") {
      this.#pos += 2;
      const end = this.#parseRangeEnd(this.#parseRecordIdKey.bind(this));
      return new _RecordIdRange2(table3, void 0, end);
    }
    const begin = this.#parseRecordIdKey();
    let exclusive = false;
    if (this.#peek() === ">" && this.#peek(1) === "." && this.#peek(2) === ".") {
      this.#pos += 1;
      exclusive = true;
    }
    if (this.#peek() === "." && this.#peek(1) === ".") {
      this.#pos += 2;
      const beginBound = exclusive ? new BoundExcluded2(begin) : new BoundIncluded2(begin);
      const end = this.#parseRangeEnd(this.#parseRecordIdKey.bind(this));
      return new _RecordIdRange2(table3, beginBound, end);
    }
    if (exclusive) this.#error("Expected the range operator '..' after '>'");
    return new _RecordId2(table3, begin);
  }
  #parseRecordIdKey() {
    this.#skipWs();
    const char = this.#peek();
    if (char === void 0) this.#error("Expected a record id key");
    if (char === '"' || char === "'") return this.#readQuoted(char);
    if (char === "u" && (this.#peek(1) === '"' || this.#peek(1) === "'")) return this.#parsePrefixedLiteral("u", this.#peek(1));
    if (char === "{") return this.#parseObjectOrSet();
    if (char === "[") return this.#parseArray();
    const code = char.charCodeAt(0);
    if (char === "+" || char === "-" || code >= 48 && code <= 57) return this.#parseIntegerKey();
    return this.#parseIdentRaw().name;
  }
  #parseIntegerKey() {
    const start = this.#pos;
    if (this.#peek() === "+" || this.#peek() === "-") this.#pos += 1;
    const digitsStart = this.#pos;
    while (!this.#eof() && this.#isDigit(this.#src.charCodeAt(this.#pos))) this.#pos += 1;
    if (this.#pos === digitsStart) this.#error("Expected an integer record id key");
    return this.#finishInteger(this.#src.slice(start, this.#pos));
  }
  #isDigit(code) {
    return code >= 48 && code <= 57;
  }
  #parseNumberLike() {
    const start = this.#pos;
    if (this.#peek() === "+" || this.#peek() === "-") this.#pos += 1;
    this.#eatDigits();
    if (this.#pos === start || this.#pos === start + 1 && !this.#isDigit(this.#src.charCodeAt(start))) {
      this.#pos = start;
      this.#error("Expected a number");
    }
    const letters = this.#peekLetterRun();
    if (letters !== "dec" && letters !== "f" && DURATION_UNIT_STARTS2.has(this.#peek() ?? "")) return this.#finishDuration(start);
    let isFloat = false;
    if (this.#peek() === "." && this.#isDigit(this.#src.charCodeAt(this.#pos + 1))) {
      this.#pos += 1;
      this.#eatDigits();
      isFloat = true;
    }
    if (this.#peek() === "e" || this.#peek() === "E") {
      const afterE = this.#peek(1);
      const afterSign = afterE === "+" || afterE === "-" ? this.#peek(2) : afterE;
      if (afterSign !== void 0 && this.#isDigit(afterSign.charCodeAt(0))) {
        this.#pos += 1;
        if (this.#peek() === "+" || this.#peek() === "-") this.#pos += 1;
        this.#eatDigits();
        isFloat = true;
      }
    }
    const numeric = this.#src.slice(start, this.#pos).replace(/_/g, "");
    const suffix = this.#peekLetterRun();
    if (suffix === "dec") {
      this.#pos += 3;
      return new Decimal2(numeric);
    }
    if (suffix === "f") {
      this.#pos += 1;
      return Number.parseFloat(numeric);
    }
    if (isFloat) return Number.parseFloat(numeric);
    return this.#finishInteger(numeric);
  }
  #finishInteger(numeric) {
    let value;
    try {
      value = BigInt(numeric);
    } catch {
      this.#error(`Invalid integer '${numeric}'`);
    }
    if (value >= BigInt(Number.MIN_SAFE_INTEGER) && value <= BigInt(Number.MAX_SAFE_INTEGER)) return Number(value);
    return value;
  }
  #finishDuration(start) {
    while (!this.#eof()) {
      const char = this.#src[this.#pos];
      const code = char.charCodeAt(0);
      if (this.#isDigit(code) || DURATION_UNIT_STARTS2.has(char)) this.#pos += 1;
      else break;
    }
    return new Duration2(this.#src.slice(start, this.#pos));
  }
  #eatDigits() {
    while (!this.#eof()) {
      const code = this.#src.charCodeAt(this.#pos);
      if (this.#isDigit(code) || code === 95) this.#pos += 1;
      else break;
    }
  }
  #peekLetterRun() {
    let index = this.#pos;
    while (index < this.#src.length) {
      const char = this.#src[index];
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90 || code >= 97 && code <= 122 || char === "\xB5" || char === "\u03BC") index += 1;
      else break;
    }
    return this.#src.slice(this.#pos, index);
  }
  #readQuoted(quote) {
    this.#pos += 1;
    let result = "";
    while (true) {
      const char = this.#peek();
      if (char === void 0) this.#error("Unterminated string literal");
      this.#pos += 1;
      if (char === quote) break;
      if (char === "\\") result += this.#readEscape();
      else result += char;
    }
    return result;
  }
  #readEscape() {
    const char = this.#next();
    switch (char) {
      case "n":
        return "\n";
      case "t":
        return "	";
      case "r":
        return "\r";
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "0":
        return "\0";
      case "\\":
        return "\\";
      case "/":
        return "/";
      case '"':
        return '"';
      case "'":
        return "'";
      case "`":
        return "`";
      case "u":
        return this.#readUnicodeEscape();
      default:
        return char;
    }
  }
  #readUnicodeEscape() {
    if (this.#peek() === "{") {
      this.#pos += 1;
      const start = this.#pos;
      while (!this.#eof() && this.#peek() !== "}") this.#pos += 1;
      const hex$1 = this.#src.slice(start, this.#pos);
      if (this.#peek() !== "}") this.#error("Unterminated unicode escape");
      this.#pos += 1;
      const code = Number.parseInt(hex$1, 16);
      if (Number.isNaN(code)) this.#error(`Invalid unicode escape '\\u{${hex$1}}'`);
      return String.fromCodePoint(code);
    }
    const hex = this.#src.slice(this.#pos, this.#pos + 4);
    if (hex.length !== 4 || Number.isNaN(Number.parseInt(hex, 16))) this.#error(`Invalid unicode escape '\\u${hex}'`);
    this.#pos += 4;
    return String.fromCharCode(Number.parseInt(hex, 16));
  }
  #parsePrefixedLiteral(prefix, quote) {
    this.#pos += 1;
    const inner = this.#readQuoted(quote);
    switch (prefix) {
      case "s":
        return inner;
      case "d":
        return this.#opts.useNativeDates ? new Date(inner) : new DateTime2(inner);
      case "u":
        return new Uuid2(inner);
      case "b":
        return this.#decodeBytes(inner);
      case "f":
        return this.#parseFileRef(inner);
      case "r":
        return this.#parseInnerRecordId(inner);
      default:
        this.#error(`Unknown literal prefix '${prefix}'`);
    }
  }
  #decodeBytes(inner) {
    const clean = inner.replace(/\s+/g, "");
    if (clean.length % 2 !== 0 || /[^0-9a-fA-F]/.test(clean)) try {
      return fromBase64Url2(inner);
    } catch {
      this.#error("Invalid bytes literal, expected a hex string");
    }
    const bytes = new Uint8Array(clean.length / 2);
    for (let i = 0; i < bytes.length; i++) bytes[i] = Number.parseInt(clean.slice(i * 2, i * 2 + 2), 16);
    return bytes;
  }
  #parseFileRef(inner) {
    const separator = inner.indexOf(":");
    if (separator === -1) this.#error("Invalid file reference, expected 'bucket:/key'");
    return new FileRef2(inner.slice(0, separator), inner.slice(separator + 1));
  }
  #parseInnerRecordId(inner) {
    const parser = new TextParser$12(inner, this.#opts);
    parser.#skipWs();
    const { name } = parser.#parseIdentRaw();
    if (parser.#peek() !== ":") parser.#error("Expected a record id");
    const record$1 = parser.#parseRecordIdOrRange(name);
    parser.#skipWs();
    if (!parser.#eof()) parser.#error("Unexpected trailing input in record id literal");
    return record$1;
  }
  #parseArray() {
    this.#pos += 1;
    const result = [];
    this.#skipWs();
    if (this.#peek() === "]") {
      this.#pos += 1;
      return result;
    }
    while (true) {
      result.push(this.#parseValue());
      this.#skipWs();
      const char = this.#peek();
      if (char === ",") {
        this.#pos += 1;
        this.#skipWs();
        if (this.#peek() === "]") {
          this.#pos += 1;
          break;
        }
        continue;
      }
      if (char === "]") {
        this.#pos += 1;
        break;
      }
      this.#error("Expected ',' or ']' in array");
    }
    return result;
  }
  #parseObjectOrSet() {
    this.#pos += 1;
    this.#skipWs();
    if (this.#peek() === "}") {
      this.#pos += 1;
      return {};
    }
    const mark = this.#pos;
    const key = this.#tryParseObjectKey();
    if (key !== null) {
      this.#skipWs();
      if (this.#peek() === ":") {
        this.#pos += 1;
        return this.#parseObjectRest(key);
      }
    }
    this.#pos = mark;
    return this.#parseSet();
  }
  #tryParseObjectKey() {
    const char = this.#peek();
    if (char === void 0) return null;
    if (char === '"' || char === "'") return this.#readQuoted(char);
    const code = char.charCodeAt(0);
    if (this.#isIdentStart(code)) return this.#parseIdentRaw().name;
    if (char === "`" || char === ANGLE_OPEN2) return this.#parseIdentRaw().name;
    if (this.#isDigit(code)) {
      const start = this.#pos;
      while (!this.#eof() && this.#isDigit(this.#src.charCodeAt(this.#pos))) this.#pos += 1;
      return this.#src.slice(start, this.#pos);
    }
    return null;
  }
  #parseObjectRest(firstKey) {
    const result = {};
    result[firstKey] = this.#parseValue();
    while (true) {
      this.#skipWs();
      const char = this.#peek();
      if (char === "}") {
        this.#pos += 1;
        break;
      }
      if (char !== ",") this.#error("Expected ',' or '}' in object");
      this.#pos += 1;
      this.#skipWs();
      if (this.#peek() === "}") {
        this.#pos += 1;
        break;
      }
      const key = this.#tryParseObjectKey();
      if (key === null) this.#error("Expected an object key");
      this.#skipWs();
      if (this.#peek() !== ":") this.#error("Expected ':' after object key");
      this.#pos += 1;
      result[key] = this.#parseValue();
    }
    return result;
  }
  #parseSet() {
    const result = /* @__PURE__ */ new Set();
    while (true) {
      result.add(this.#parseValue());
      this.#skipWs();
      const char = this.#peek();
      if (char === ",") {
        this.#pos += 1;
        this.#skipWs();
        if (this.#peek() === "}") {
          this.#pos += 1;
          break;
        }
        continue;
      }
      if (char === "}") {
        this.#pos += 1;
        break;
      }
      this.#error("Expected ',' or '}' in set");
    }
    return result;
  }
  #parseGeometryOrGroup() {
    this.#pos += 1;
    this.#skipWs();
    const mark = this.#pos;
    const point = this.#tryParsePoint();
    if (point !== null) return point;
    this.#pos = mark;
    const value = this.#parseValue();
    this.#skipWs();
    if (this.#peek() !== ")") this.#error("Expected ')'");
    this.#pos += 1;
    return value;
  }
  #tryParsePoint() {
    const char = this.#peek();
    if (char === void 0) return null;
    const code = char.charCodeAt(0);
    if (!(this.#isDigit(code) || char === "+" || char === "-")) return null;
    try {
      const x = this.#parseNumberLike();
      if (!this.#isNumeric(x)) return null;
      this.#skipWs();
      if (this.#peek() !== ",") return null;
      this.#pos += 1;
      this.#skipWs();
      const y = this.#parseNumberLike();
      if (!this.#isNumeric(y)) return null;
      this.#skipWs();
      if (this.#peek() !== ")") return null;
      this.#pos += 1;
      return new GeometryPoint2([this.#toCoordinate(x), this.#toCoordinate(y)]);
    } catch {
      return null;
    }
  }
  #isNumeric(value) {
    return typeof value === "number" || typeof value === "bigint" || value instanceof Decimal2;
  }
  #toCoordinate(value) {
    if (typeof value === "bigint") return Number(value);
    return value;
  }
};
var TextCodec2 = class TextCodec$12 {
  static {
    __name(this, "TextCodec$1");
  }
  /**
  * The default TextCodec instance.
  */
  static DEFAULT = new TextCodec$12({});
  #options;
  constructor(options = {}) {
    this.#options = options;
  }
  /**
  * Encode a value into its SurrealQL text representation.
  */
  encode(data) {
    return toSurqlString2(data);
  }
  /**
  * Decode a SurrealQL value string into value instances.
  */
  decode(data) {
    return new TextParser2(data, this.#options).parse();
  }
  static #expect(input, options, expected, check) {
    const value = new TextParser2(input, options).parse();
    if (!check(value)) throw new TextParseError2(`Expected a ${expected} value`, 0);
    return value;
  }
  /** Parse any single SQON value. */
  static parseValue(input, options) {
    return new TextParser2(input, options).parse();
  }
  /** Parse a string value. */
  static parseString(input, options) {
    return TextCodec$12.#expect(input, options, "string", (v) => typeof v === "string");
  }
  /** Parse a numeric value (`int` as `number`/`bigint`, `float` as `number`). */
  static parseNumber(input, options) {
    return TextCodec$12.#expect(input, options, "number", (v) => typeof v === "number" || typeof v === "bigint");
  }
  /** Parse a boolean value. */
  static parseBool(input, options) {
    return TextCodec$12.#expect(input, options, "boolean", (v) => typeof v === "boolean");
  }
  /** Parse a decimal value. */
  static parseDecimal(input, options) {
    return TextCodec$12.#expect(input, options, "decimal", (v) => v instanceof Decimal2);
  }
  /** Parse a duration value. */
  static parseDuration(input, options) {
    return TextCodec$12.#expect(input, options, "duration", (v) => v instanceof Duration2);
  }
  /** Parse a datetime value (a `Date` when `useNativeDates` is set). */
  static parseDatetime(input, options) {
    return TextCodec$12.#expect(input, options, "datetime", (v) => v instanceof DateTime2 || v instanceof Date);
  }
  /** Parse a UUID value. */
  static parseUuid(input, options) {
    return TextCodec$12.#expect(input, options, "uuid", (v) => v instanceof Uuid2);
  }
  /** Parse a bytes value. */
  static parseBytes(input, options) {
    return TextCodec$12.#expect(input, options, "bytes", (v) => v instanceof Uint8Array);
  }
  /** Parse a file reference value. */
  static parseFile(input, options) {
    return TextCodec$12.#expect(input, options, "file", (v) => v instanceof FileRef2);
  }
  /** Parse a table value. */
  static parseTable(input, options) {
    return TextCodec$12.#expect(input, options, "table", (v) => v instanceof _Table2);
  }
  /** Parse a record id value. */
  static parseRecordId(input, options) {
    return TextCodec$12.#expect(input, options, "record id", (v) => v instanceof _RecordId2);
  }
  /** Parse a record id range value. */
  static parseRecordIdRange(input, options) {
    return TextCodec$12.#expect(input, options, "record id range", (v) => v instanceof _RecordIdRange2);
  }
  /** Parse a range value. */
  static parseRange(input, options) {
    return TextCodec$12.#expect(input, options, "range", (v) => v instanceof Range2);
  }
  /** Parse a geometry point value. */
  static parseGeometryPoint(input, options) {
    return TextCodec$12.#expect(input, options, "geometry point", (v) => v instanceof GeometryPoint2);
  }
  /** Parse an array value. */
  static parseArray(input, options) {
    return TextCodec$12.#expect(input, options, "array", (v) => Array.isArray(v));
  }
  /** Parse a set value. */
  static parseSet(input, options) {
    return TextCodec$12.#expect(input, options, "set", (v) => v instanceof Set);
  }
  /** Parse a plain object value. */
  static parseObject(input, options) {
    return TextCodec$12.#expect(input, options, "object", (v) => typeof v === "object" && v !== null && !Array.isArray(v) && Object.getPrototypeOf(v) === Object.prototype);
  }
};
var MAX_TIMER_DELAY2 = 2 ** 31 - 1;
var MINIMUM_VERSION2 = "2.1.0";
var MAXIMUM_VERSION2 = "5.0.0";
function isVersionSupported2(version3, min = MINIMUM_VERSION2, until = MAXIMUM_VERSION2) {
  const trimmed = version3.replace(/^surrealdb-/, "").trim();
  return min.localeCompare(trimmed, void 0, { numeric: true }) <= 0 && until.localeCompare(trimmed, void 0, { numeric: true }) === 1;
}
__name(isVersionSupported2, "isVersionSupported");
var Feature2 = class {
  static {
    __name(this, "Feature");
  }
  #name;
  #since;
  #until;
  constructor(name, since, until) {
    this.#name = name;
    this.#since = since;
    this.#until = until;
  }
  get name() {
    return this.#name;
  }
  get sinceVersion() {
    return this.#since;
  }
  get untilVersion() {
    return this.#until;
  }
  supports(version3) {
    return isVersionSupported2(version3, this.#since ?? MINIMUM_VERSION2, this.#until ?? MAXIMUM_VERSION2);
  }
};
var Features2 = Object.freeze({
  LiveQueries: new Feature2("live-queries"),
  Sessions: new Feature2("sessions", "3.0.0"),
  Api: new Feature2("api", "3.0.0"),
  RefreshTokens: new Feature2("refresh-tokens", "3.0.0"),
  Transactions: new Feature2("transactions", "3.0.0"),
  ExportImportRaw: new Feature2("export-import-raw"),
  SurrealML: new Feature2("surreal-ml", void 0, "4.0.0"),
  PerRequestAuth: new Feature2("per-request-auth"),
  QueryStreaming: new Feature2("query-streaming", "3.3.0"),
  SqlDialects: new Feature2("sql-dialects", "4.0.0"),
  QueryTrace: new Feature2("query-trace", "4.0.0")
});
var utf82 = new TextDecoder();
var ONE_DAY_MS2 = 1440 * 60 * 1e3;

// ../../packages/core/src/services/promote.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../node_modules/@surrealdb/memory/dist/memory.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/models/promotionRequest.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/models/scope.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/models/agent.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/models/workspace.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/models/user.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/dto/promotionRequest.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/dto/scope.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/dto/workspace.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/dto/user.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/dto/agent.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/repos/promotionRequest.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../packages/core/src/repos/_tables.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var T = {
  promotionRequest: new _Table2("promotionRequest"),
  scope: new _Table2("scope"),
  agent: new _Table2("agent"),
  workspace: new _Table2("workspace"),
  user: new _Table2("user"),
  memberOf: new _Table2("memberOf"),
  parentOf: new _Table2("parentOf"),
  derivedFrom: new _Table2("derivedFrom")
};

// src/routes/promotions.ts
var promotionsRouter = new Hono3();
promotionsRouter.get("/pending", async (c) => {
  const workspaceId = c.req.query("workspace") || "acme";
  let db = null;
  try {
    db = await connectDb(c.env);
    const query = `
      SELECT * FROM promotionRequest 
      WHERE workspace = $ws AND status = 'pending'
      FETCH fromScope, toScope, author, workspace
    `;
    const [requests] = await db.query(query, {
      ws: new _RecordId(T.workspace, workspaceId)
    });
    return c.json({
      workspace: workspaceId,
      count: requests?.length || 0,
      requests: requests || []
    });
  } catch (err) {
    return c.json({ error: err?.message || String(err) }, 500);
  } finally {
    if (db) {
      await db.close().catch(() => {
      });
    }
  }
});
promotionsRouter.post("/", async (c) => {
  const idempotencyKey = c.req.header("x-idempotency-key") || (await c.req.json().catch(() => ({}))).idempotencyKey;
  const body = await c.req.json().catch(() => null);
  if (!body || !body.fromScope || !body.toScope || !body.originalDraft || !body.reviewedFact) {
    return c.json({ error: "Missing required fields (fromScope, toScope, originalDraft, reviewedFact)" }, 400);
  }
  let db = null;
  try {
    db = await connectDb(c.env);
    if (idempotencyKey) {
      const [existing] = await db.query(
        `SELECT * FROM promotionRequest WHERE idempotencyKey = $key FETCH fromScope, toScope, author, workspace`,
        { key: idempotencyKey }
      );
      if (existing && existing.length > 0) {
        return c.json({
          status: "already_processed",
          message: "Idempotent request: returning existing promotion record",
          promotion: existing[0]
        }, 200);
      }
    }
    const isAgent = body.authorType === "agent" || body.authorId?.startsWith("agent:");
    const cleanAuthorId = (body.authorId || "system").replace(/^(agent|user):/, "");
    const authorRecord = isAgent ? new _RecordId(T.agent, cleanAuthorId) : new _RecordId(T.user, cleanAuthorId);
    const query = `
      CREATE ONLY type::table($table) CONTENT {
        fromScope: $fromScope,
        toScope: $toScope,
        originalDraft: $originalDraft,
        reviewedFact: $reviewedFact,
        author: $author,
        workspace: $workspace,
        idempotencyKey: $idempotencyKey
      } RETURN AFTER
    `;
    const [created] = await db.query(query, {
      table: T.promotionRequest,
      fromScope: new _RecordId(T.scope, body.fromScope.replace("scope:", "")),
      toScope: new _RecordId(T.scope, body.toScope.replace("scope:", "")),
      originalDraft: body.originalDraft,
      reviewedFact: body.reviewedFact,
      author: authorRecord,
      workspace: new _RecordId(T.workspace, (body.workspace || "acme").replace("workspace:", "")),
      idempotencyKey: idempotencyKey || null
    });
    return c.json({
      status: "created",
      promotion: created
    }, 201);
  } catch (err) {
    return c.json({ error: err?.message || String(err) }, 500);
  } finally {
    if (db) {
      await db.close().catch(() => {
      });
    }
  }
});

// src/index.ts
var app = new Hono3();
app.use("*", cors());
app.route("/health", healthRouter);
app.route("/promotions", promotionsRouter);
var src_default = app;

// ../../node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error3 = reduceError(e);
    const body = JSON.stringify(error3);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-xhTeSL/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// ../../node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-xhTeSL/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type2, init) {
        if (type2 === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type2, init) => {
      if (type2 === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

surrealdb/dist/surrealdb.mjs:
surrealdb/dist/surrealdb.mjs:
  (**
  * uuidv7: A JavaScript implementation of UUID version 7
  *
  * @license Apache-2.0
  * @copyright 2021-2024 LiosK
  * @packageDocumentation
  *)
*/
//# sourceMappingURL=index.js.map
