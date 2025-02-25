const IPv4 =
	/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;

/**
 * `[ajv-formats]` IPv4 address according to dotted-quad ABNF syntax as defined in [RFC 2673, section 3.2](http://tools.ietf.org/html/rfc2673#section-3.2)
 * @example `192.168.0.1`
 */
export function isIPv4(value: string): boolean {
	return IPv4.test(value);
}
