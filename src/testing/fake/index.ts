import { unique } from "@dpaskhin/unique";
import { faker } from "@faker-js/faker";

export const fake = {
	name: () => faker.person.fullName(),
	words: (min: number, max: number) => faker.lorem.words({ min, max }),
	id: () =>
		faker.string.alpha({ length: { min: 24, max: 24 }, casing: "lower" }),
	boolean: () => faker.datatype.boolean(),
	integer: (min: number, max: number) => faker.number.int({ min, max }),
	float: (min: number, max: number) => faker.number.float({ min, max }),
	string: (min: number, max: number) =>
		faker.string.alpha({ length: { min, max } }),
	email: () => unique(faker.internet.email),
	ip: () => faker.internet.ip(),
	url: () => faker.internet.url(),
	randomInArray: <T>(array: T[]) => faker.helpers.arrayElement(array),
	randomsInArray: <T>(
		array: T[],
		count?:
			| number
			| {
					min: number;
					max: number;
			  },
	) => faker.helpers.arrayElements(array, count),
	date: {
		anytime: () => faker.date.anytime(),
		past: (days?: number, refDate?: string | Date | number) =>
			faker.date.recent({ days, refDate }),
		future: (days?: number, refDate?: string | Date | number) =>
			faker.date.soon({ days, refDate }),
		between: (start: Date, end: Date) =>
			faker.date.between({ from: start, to: end }),
		timezone: () => faker.location.timeZone(),
	},
};
