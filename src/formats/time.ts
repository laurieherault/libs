const TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;

/**
 * `[ajv-formats]` ISO8601 Time component
 * @example `20:20:39+00:00`
 */
export function isTime(value: string, strictTimeZone?: boolean): boolean {
	const matches: string[] | null = TIME.exec(value);
	if (!matches) return false;
	const hr: number = +matches[1];
	const min: number = +matches[2];
	const sec: number = +matches[3];
	const tz: string | undefined = matches[4];
	const tzSign: number = matches[5] === "-" ? -1 : 1;
	const tzH: number = +(matches[6] || 0);
	const tzM: number = +(matches[7] || 0);
	if (tzH > 23 || tzM > 59 || (strictTimeZone && !tz)) return false;
	if (hr <= 23 && min <= 59 && sec < 60) return true;
	const utcMin = min - tzM * tzSign;
	const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
	return (
		(utcHr === 23 || utcHr === -1) &&
		(utcMin === 59 || utcMin === -1) &&
		sec < 61
	);
}
