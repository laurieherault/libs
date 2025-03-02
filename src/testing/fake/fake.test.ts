import { describe, expect, test } from "bun:test";
import { isIP } from "../../validation/formats";
import { fake } from "./index";

describe("fake", () => {
	describe("name", () => {
		test("should return a non-empty string", () => {
			const name = fake.name();
			expect(typeof name).toBe("string");
			expect(name.length).toBeGreaterThan(0);
		});
	});

	describe("words", () => {
		test("should return words within specified range", () => {
			const min = 3;
			const max = 6;
			const words = fake.words(min, max);
			const wordCount = words.split(" ").length;

			expect(typeof words).toBe("string");
			expect(wordCount).toBeGreaterThanOrEqual(min);
			expect(wordCount).toBeLessThanOrEqual(max);
		});
	});

	describe("id", () => {
		test("should return a unique ID", () => {
			const id1 = fake.id();
			const id2 = fake.id();

			expect(typeof id1).toBe("string");
			expect(id1.length).toBeGreaterThan(0);
			expect(id1).not.toBe(id2);
		});
	});

	describe("boolean", () => {
		test("should return a boolean value", () => {
			const value = fake.boolean();
			expect(typeof value).toBe("boolean");
		});
	});

	describe("integer", () => {
		test("should return integer within specified range", () => {
			const min = 10;
			const max = 20;
			const value = fake.integer(min, max);

			expect(Number.isInteger(value)).toBe(true);
			expect(value).toBeGreaterThanOrEqual(min);
			expect(value).toBeLessThanOrEqual(max);
		});
	});

	describe("float", () => {
		test("should return float within specified range", () => {
			const min = 10;
			const max = 20;
			const value = fake.float(min, max);

			expect(typeof value).toBe("number");
			expect(value).toBeGreaterThanOrEqual(min);
			expect(value).toBeLessThanOrEqual(max);
		});
	});

	describe("string", () => {
		test("should return string with length within specified range", () => {
			const min = 5;
			const max = 10;
			const value = fake.string(min, max);

			expect(typeof value).toBe("string");
			expect(value.length).toBeGreaterThanOrEqual(min);
			expect(value.length).toBeLessThanOrEqual(max);
		});
	});

	describe("email", () => {
		test("should return a valid email format", () => {
			const email = fake.email();

			expect(typeof email).toBe("string");
			expect(email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
		});
	});

	describe("ip", () => {
		test("should return a valid IP format", () => {
			const ip = fake.ip();

			expect(typeof ip).toBe("string");
			// Simple regex for IPv4

			expect(isIP(ip)).toBe(true);
		});
	});

	describe("url", () => {
		test("should return a valid URL format", () => {
			const url = fake.url();

			expect(typeof url).toBe("string");
			expect(url).toMatch(/^https?:\/\/.+/);
		});
	});

	describe("randomInArray", () => {
		test("should return an element from the array", () => {
			const array = [1, 2, 3, 4, 5];
			const value = fake.randomInArray(array);

			expect(array).toContain(value);
		});
	});

	describe("randomsInArray", () => {
		test("should return multiple elements with a fixed count", () => {
			const array = [1, 2, 3, 4, 5];
			const count = 3;
			const values = fake.randomsInArray(array, count);

			expect(Array.isArray(values)).toBe(true);
			expect(values.length).toBe(count);
			for (const value of values) {
				expect(array).toContain(value);
			}
		});

		test("should return multiple elements with a count range", () => {
			const array = [1, 2, 3, 4, 5];
			const min = 2;
			const max = 4;
			const values = fake.randomsInArray(array, { min, max });

			expect(Array.isArray(values)).toBe(true);
			expect(values.length).toBeGreaterThanOrEqual(min);
			expect(values.length).toBeLessThanOrEqual(max);
			for (const value of values) {
				expect(array).toContain(value);
			}
		});
	});

	describe("date", () => {
		describe("anytime", () => {
			test("should return a valid Date object", () => {
				const date = fake.date.anytime();
				expect(date instanceof Date).toBe(true);
				expect(date.getTime()).not.toBeNaN();
			});
		});

		describe("past", () => {
			test("should return a date in the past", () => {
				const days = 7;
				const now = new Date();
				const date = fake.date.past(days);

				expect(date instanceof Date).toBe(true);
				expect(date < now).toBe(true);
			});
		});

		describe("future", () => {
			test("should return a date in the future", () => {
				const days = 7;
				const now = new Date();
				const date = fake.date.future(days);

				expect(date instanceof Date).toBe(true);
				expect(date > now).toBe(true);
			});
		});

		describe("between", () => {
			test("should return a date between two dates", () => {
				const start = new Date(2020, 0, 1);
				const end = new Date(2023, 0, 1);
				const date = fake.date.between(start, end);

				expect(date instanceof Date).toBe(true);
				expect(date >= start).toBe(true);
				expect(date <= end).toBe(true);
			});
		});

		describe("timezone", () => {
			test("should return a non-empty string", () => {
				const timezone = fake.date.timezone();

				expect(typeof timezone).toBe("string");
				expect(timezone.length).toBeGreaterThan(0);
			});
		});
	});
});
