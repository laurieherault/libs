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

// src/testing/fake/index.ts
import { unique } from "@dpaskhin/unique";
import { faker } from "@faker-js/faker";
var fake = {
  name: () => faker.person.fullName(),
  words: (min, max) => faker.lorem.words({ min, max }),
  id: () => unique(faker.string.alpha({ length: { min: 24, max: 24 }, casing: "lower" })),
  boolean: () => faker.datatype.boolean(),
  integer: (min, max) => faker.number.int({ min, max }),
  float: (min, max) => faker.number.float({ min, max }),
  string: (min, max) => faker.string.alpha({ length: { min, max } }),
  email: () => unique(faker.internet.email),
  ip: () => faker.internet.ip(),
  url: () => faker.internet.url(),
  randomInArray: (array) => faker.helpers.arrayElement(array),
  randomsInArray: (array, count) => faker.helpers.arrayElements(array, count),
  date: {
    anytime: () => faker.date.anytime(),
    past: (days, refDate) => faker.date.recent({ days, refDate }),
    future: (days, refDate) => faker.date.soon({ days, refDate }),
    between: (start, end) => faker.date.between({ from: start, to: end }),
    timezone: () => faker.location.timeZone()
  }
};

// src/testing/testModel/index.ts
var {expect, test } = globalThis.Bun.jest(import.meta.path);

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

// src/testing/testModel/index.ts
var testModel = (tests) => {
  for (const { testName, goodValues, badValues, check } of tests) {
    for (const goodValue of goodValues) {
      test(`${testName} - Check returns true for good value: ${JSON.stringify(goodValue)}`, () => {
        expect(check.Check(goodValue)).toBe(true);
      });
      test(`${testName} - validateOrThrow does not throw for good value: ${JSON.stringify(goodValue)}`, () => {
        const [error, value] = parseOrFail(check, goodValue);
        expect(error).toBeUndefined();
        expect(value).toEqual(goodValue);
      });
    }
    for (const badValue of badValues) {
      test(`${testName} - Check returns false for bad value: ${JSON.stringify(badValue)}`, () => {
        expect(check.Check(badValue)).toBe(false);
      });
      test(`${testName} - validateOrThrow throws for bad value: ${JSON.stringify(badValue)}`, () => {
        const [error, value] = parseOrFail(check, badValue);
        expect(value).toBeUndefined();
        expect(error).toBeInstanceOf(Error);
      });
    }
  }
};
export {
  testModel,
  fake
};
