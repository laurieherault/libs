// @bun
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __reExport = (target, mod, secondTarget) => {
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(target, key) && key !== "default")
      __defProp(target, key, {
        get: () => mod[key],
        enumerable: true
      });
  if (secondTarget) {
    for (let key of __getOwnPropNames(mod))
      if (!__hasOwnProp.call(secondTarget, key) && key !== "default")
        __defProp(secondTarget, key, {
          get: () => mod[key],
          enumerable: true
        });
    return secondTarget;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// src/index.ts
var exports_src = {};
__export(exports_src, {
  useUnmount: () => useUnmount,
  useMount: () => useMount,
  useEvent: () => useEvent,
  useDidUpdateEffect: () => useDidUpdateEffect,
  tryOrFailSync: () => tryOrFailSync,
  tryOrFail: () => tryOrFail,
  sortItemsByPosition: () => sortItemsByPosition,
  sleep: () => sleep,
  parseOrThrow: () => parseOrThrow,
  parseOrFail: () => parseOrFail,
  isValidId: () => isValidId,
  iniValidationsAdvanced: () => iniValidationsAdvanced,
  getRange: () => getRange,
  getPrevious: () => getPrevious,
  getNext: () => getNext,
  getLast: () => getLast,
  getItemById: () => getItemById,
  getIndexByItem: () => getIndexByItem,
  getFirst: () => getFirst,
  generatePositionsFirst: () => generatePositionsFirst,
  generatePositionBetween: () => generatePositionBetween,
  generatePositionBefore: () => generatePositionBefore,
  generatePositionAfter: () => generatePositionAfter,
  cuid2Regex: () => cuid2Regex,
  createUniqueId: () => createUniqueId,
  DateTime: () => DateTime
});
import { DateTime } from "luxon";

// src/hooks/index.ts
var exports_hooks = {};
__export(exports_hooks, {
  useUnmount: () => useUnmount,
  useMount: () => useMount,
  useEvent: () => useEvent,
  useDidUpdateEffect: () => useDidUpdateEffect
});

// src/hooks/useDidUpdateEffect/index.ts
import { useEffect, useRef } from "react";
var useDidUpdateEffect = (callback, dependencies) => {
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      callback();
    }
  }, dependencies);
};
// src/hooks/useEvent/index.ts
import { useEffect as useEffect2, useRef as useRef2 } from "react";
function useEvent(eventName, handler, element = window) {
  const savedHandler = useRef2(handler);
  useEffect2(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect2(() => {
    if (!element?.addEventListener)
      throw new Error("Element does not support addEventListener");
    const eventListener = (event) => {
      savedHandler.current(event);
    };
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
// src/hooks/useMount/index.ts
import { useEffect as useEffect3 } from "react";
var useMount = (callback) => {
  useEffect3(() => {
    callback();
  }, []);
};
// src/hooks/useUnmount/index.ts
import { useEffect as useEffect4 } from "react";
var useUnmount = (callback) => {
  useEffect4(() => {
    return () => {
      callback();
    };
  }, []);
};
// src/utils/index.ts
var exports_utils = {};
__export(exports_utils, {
  tryOrFailSync: () => tryOrFailSync,
  tryOrFail: () => tryOrFail,
  sortItemsByPosition: () => sortItemsByPosition,
  sleep: () => sleep,
  isValidId: () => isValidId,
  getRange: () => getRange,
  getPrevious: () => getPrevious,
  getNext: () => getNext,
  getLast: () => getLast,
  getItemById: () => getItemById,
  getIndexByItem: () => getIndexByItem,
  getFirst: () => getFirst,
  generatePositionsFirst: () => generatePositionsFirst,
  generatePositionBetween: () => generatePositionBetween,
  generatePositionBefore: () => generatePositionBefore,
  generatePositionAfter: () => generatePositionAfter,
  createUniqueId: () => createUniqueId
});

// src/utils/id/index.ts
import { createId, isCuid } from "@paralleldrive/cuid2";
var createUniqueId = () => {
  return createId();
};
var isValidId = (id) => {
  return isCuid(id);
};
// src/utils/misc/sleep.ts
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// src/utils/position/index.ts
import { generateNKeysBetween } from "fractional-indexing";
var generatePositionsFirst = (n) => {
  return generateNKeysBetween(null, null, n);
};
var generatePositionAfter = (after, n) => {
  return generateNKeysBetween(after, null, n);
};
var generatePositionBefore = (before, n) => {
  return generateNKeysBetween(null, before, n);
};
var generatePositionBetween = (a, b, n) => {
  return generateNKeysBetween(a, b, n);
};
function sortItemsByPosition(items) {
  return items.sort((a, b) => {
    if (a.position < b.position)
      return -1;
    if (a.position > b.position)
      return 1;
    return 0;
  });
}
function getFirst(items) {
  return items[0];
}
function getLast(items) {
  return items.length > 0 ? items[items.length - 1] : undefined;
}
function getNext(items, current) {
  const index = items.findIndex((item) => item.id === current.id);
  return index >= 0 && index < items.length - 1 ? items[index + 1] : undefined;
}
function getPrevious(items, current) {
  const index = items.findIndex((item) => item.id === current.id);
  return index > 0 ? items[index - 1] : undefined;
}
function getRange(items, start, end) {
  const startIndex = items.findIndex((item) => item.id === start.id);
  const endIndex = items.findIndex((item) => item.id === end.id);
  if (startIndex === -1 || endIndex === -1)
    return [];
  const [from, to] = startIndex <= endIndex ? [startIndex, endIndex] : [endIndex, startIndex];
  return items.slice(from, to + 1);
}
function getItemById(items, id) {
  return items.find((item) => item.id === id);
}
function getIndexByItem(items, current) {
  return items.findIndex((item) => item.id === current.id);
}
// src/utils/tryOrFail/index.ts
var exports_tryOrFail = {};
__export(exports_tryOrFail, {
  tryOrFailSync: () => tryOrFailSync,
  tryOrFail: () => tryOrFail
});
var tryOrFailSync = (cb) => {
  try {
    const result = cb();
    return [undefined, result];
  } catch (error) {
    return [error, undefined];
  }
};
var tryOrFail = async (cb) => {
  try {
    const result = await cb();
    return [undefined, result];
  } catch (error) {
    return [error, undefined];
  }
};
// src/validation/index.ts
var exports_validation = {};
__export(exports_validation, {
  parseOrThrow: () => parseOrThrow,
  parseOrFail: () => parseOrFail,
  iniValidationsAdvanced: () => iniValidationsAdvanced,
  cuid2Regex: () => cuid2Regex
});
__reExport(exports_validation, typebox);
__reExport(exports_validation, compiler);
import"@sinclair/typebox";
import"@sinclair/typebox/compiler";
import { FormatRegistry } from "@sinclair/typebox";

// src/validation/formats/index.ts
var exports_formats = {};
__export(exports_formats, {
  isUrl: () => isUrl,
  isTime: () => isTime,
  isIPv6: () => isIPv6,
  isIPv4: () => isIPv4,
  isIP: () => isIP,
  isEmail: () => isEmail,
  isDateTime: () => isDateTime,
  isDate: () => isDate
});

// src/validation/formats/date.ts
var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
function IsLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function isDate(value) {
  const matches = DATE.exec(value);
  if (!matches)
    return false;
  const year = +matches[1];
  const month = +matches[2];
  const day = +matches[3];
  return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && IsLeapYear(year) ? 29 : DAYS[month]);
}
// src/validation/formats/time.ts
var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
function isTime(value, strictTimeZone) {
  const matches = TIME.exec(value);
  if (!matches)
    return false;
  const hr = +matches[1];
  const min = +matches[2];
  const sec = +matches[3];
  const tz = matches[4];
  const tzSign = matches[5] === "-" ? -1 : 1;
  const tzH = +(matches[6] || 0);
  const tzM = +(matches[7] || 0);
  if (tzH > 23 || tzM > 59 || strictTimeZone && !tz)
    return false;
  if (hr <= 23 && min <= 59 && sec < 60)
    return true;
  const utcMin = min - tzM * tzSign;
  const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
  return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
}

// src/validation/formats/date-time.ts
var DATE_TIME_SEPARATOR = /t|\s/i;
function isDateTime(value, strictTimeZone) {
  const dateTime = value.split(DATE_TIME_SEPARATOR);
  return dateTime.length === 2 && isDate(dateTime[0]) && isTime(dateTime[1], strictTimeZone);
}
// src/validation/formats/email.ts
var Email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
function isEmail(value) {
  return Email.test(value);
}
// src/validation/formats/ip.ts
var IPv4 = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;
var IPv6 = /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i;
function isIPv4(value) {
  return IPv4.test(value);
}
function isIPv6(value) {
  return IPv6.test(value);
}
function isIP(value) {
  return isIPv4(value) || isIPv6(value);
}
// src/validation/formats/url.ts
var Url = /^(?:https?|wss?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
function isUrl(value) {
  return Url.test(value);
}
// src/validation/index.ts
var cuid2Regex = /^[a-z0-9]{24}$/;
var iniValidationsAdvanced = () => {
  FormatRegistry.Set("email", (value) => isEmail(value));
  FormatRegistry.Set("date-time", (value) => isDateTime(value));
  FormatRegistry.Set("time", (value) => isTime(value));
  FormatRegistry.Set("date", (value) => isDate(value));
  FormatRegistry.Set("ipv4", (value) => isIPv4(value));
  FormatRegistry.Set("ipv6", (value) => isIPv6(value));
  FormatRegistry.Set("url", (value) => isUrl(value));
  FormatRegistry.Set("cuid2", (value) => cuid2Regex.test(value));
};
function parseOrFail(validator, value) {
  return tryOrFailSync(() => {
    if (!validator.Check(value)) {
      const errors = [...validator.Errors(value)];
      throw new Error(`Validation failed: ${JSON.stringify(errors)}`);
    }
    return value;
  });
}
function parseOrThrow(validator, value) {
  const [error, result] = parseOrFail(validator, value);
  if (error) {
    throw error;
  }
  return result;
}

// src/index.ts
__reExport(exports_src, exports_validation);
export {
  useUnmount,
  useMount,
  useEvent,
  useDidUpdateEffect,
  tryOrFailSync,
  tryOrFail,
  sortItemsByPosition,
  sleep,
  parseOrThrow,
  parseOrFail,
  isValidId,
  iniValidationsAdvanced,
  getRange,
  getPrevious,
  getNext,
  getLast,
  getItemById,
  getIndexByItem,
  getFirst,
  generatePositionsFirst,
  generatePositionBetween,
  generatePositionBefore,
  generatePositionAfter,
  cuid2Regex,
  createUniqueId,
  DateTime
};
