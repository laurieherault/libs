import { expect, test } from "bun:test";
import {
	generatePositionAfter,
	generatePositionBefore,
	generatePositionBetween,
	generatePositionsFirst,
	getFirst,
	getIndexByItem,
	getItemById,
	getLast,
	getNext,
	getPrevious,
	getRange,
	sortItemsByPosition,
	type PositionedItem,
} from "./index";

// Création d'un tableau d'items déjà triés par leur propriété `position` en générant les positions
const positions = generatePositionsFirst(5);
const items: PositionedItem[] = positions.map((pos, index) => ({
	id: (index + 1).toString(),
	position: pos,
}));

test("generatePositionsFirst returns the correct number of keys", () => {
	const keys = generatePositionsFirst(5);
	expect(keys.length).toBe(5);
	for (const key of keys) {
		expect(typeof key).toBe("string");
	}
});

test("generatePositionAfter returns keys greater than the provided key", () => {
	// Génère une position de référence à l'aide de generatePositionsFirst
	const after = generatePositionsFirst(1)[0];
	const keys = generatePositionAfter(after, 3);
	for (const key of keys) {
		expect(key > after).toBe(true);
	}
});

test("generatePositionBefore returns keys less than the provided key", () => {
	// Génère une position de référence à l'aide de generatePositionsFirst
	const before = generatePositionsFirst(1)[0];
	const keys = generatePositionBefore(before, 3);
	for (const key of keys) {
		expect(key < before).toBe(true);
	}
});

test("generatePositionBetween returns keys between given keys", () => {
	// Génère deux positions consécutives à partir de generatePositionsFirst
	const twoPositions = generatePositionsFirst(2);
	const a = twoPositions[0];
	// On génère une position juste après 'a' pour servir de borne supérieure
	const b = generatePositionAfter(a, 1)[0];
	const keys = generatePositionBetween(a, b, 5);
	for (const key of keys) {
		expect(key > a && key < b).toBe(true);
	}
});

test("sortItemsByPosition sorts items correctly", () => {
	const positions = generatePositionsFirst(3);
	const unsorted: PositionedItem[] = [
		{ id: "3", position: positions[2] },
		{ id: "1", position: positions[0] },
		{ id: "2", position: positions[1] },
	];
	const sorted = sortItemsByPosition(unsorted);
	expect(sorted[0].id).toBe("1");
	expect(sorted[1].id).toBe("2");
	expect(sorted[2].id).toBe("3");
});

test("getFirst returns the first element", () => {
	expect(getFirst(items)?.id).toBe("1");
	expect(getFirst([])).toBeUndefined();
});

test("getLast returns the last element", () => {
	expect(getLast(items)?.id).toBe("5");
	expect(getLast([])).toBeUndefined();
});

test("getNext returns the next element", () => {
	const current = items[2]; // Item avec id "3"
	const next = getNext(items, current);
	expect(next?.id).toBe("4");
	// Le dernier élément doit retourner undefined
	expect(getNext(items, items[items.length - 1])).toBeUndefined();
});

test("getPrevious returns the previous element", () => {
	const current = items[2]; // Item avec id "3"
	const prev = getPrevious(items, current);
	expect(prev?.id).toBe("2");
	// Le premier élément doit retourner undefined
	expect(getPrevious(items, items[0])).toBeUndefined();
});

test("getRange returns the correct range when start is before end", () => {
	const start = items[1]; // id "2"
	const end = items[3]; // id "4"
	const range = getRange(items, start, end);
	expect(range.length).toBe(3);
	expect(range[0].id).toBe("2");
	expect(range[2].id).toBe("4");
});

test("getRange returns the correct range when start is after end", () => {
	const start = items[3]; // id "4"
	const end = items[1]; // id "2"
	const range = getRange(items, start, end);
	expect(range.length).toBe(3);
	expect(range[0].id).toBe("2");
	expect(range[2].id).toBe("4");
});

test("getItemById returns the correct item", () => {
	const item = getItemById(items, "3");
	expect(item).toBeDefined();
	expect(item?.id).toBe("3");
	expect(getItemById(items, "non-existent")).toBeUndefined();
});

test("getIndexByItem returns the correct index", () => {
	const item = items[2]; // id "3"
	expect(getIndexByItem(items, item)).toBe(2);
	// Pour un item non existant, l'index devrait être -1
	const fakeItem: PositionedItem = {
		id: "999",
		position: generatePositionsFirst(1)[0],
	};
	expect(getIndexByItem(items, fakeItem)).toBe(-1);
});
