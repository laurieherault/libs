const DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;

function IsLeapYear(year: number): boolean {
	return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
/**
 * `[ajv-formats]` ISO8601 Date component
 * @example `2020-12-12`
 */
export function isDate(value: string): boolean {
	const matches: string[] | null = DATE.exec(value);
	if (!matches) return false;
	const year: number = +matches[1];
	const month: number = +matches[2];
	const day: number = +matches[3];
	return (
		month >= 1 &&
		month <= 12 &&
		day >= 1 &&
		day <= (month === 2 && IsLeapYear(year) ? 29 : DAYS[month])
	);
}
