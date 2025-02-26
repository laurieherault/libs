import { isDate } from "./date";
import { isTime } from "./time";

const DATE_TIME_SEPARATOR = /t|\s/i;

/**
 * `[ajv-formats]` ISO8601 DateTime
 * @example `2020-12-12T20:20:40+00:00`
 */
export function isDateTime(value: string, strictTimeZone?: boolean): boolean {
	const dateTime: string[] = value.split(DATE_TIME_SEPARATOR);
	return (
		dateTime.length === 2 &&
		isDate(dateTime[0]) &&
		isTime(dateTime[1], strictTimeZone)
	);
}
