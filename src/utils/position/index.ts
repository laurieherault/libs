import { generateNKeysBetween } from "fractional-indexing";

/**
 * Interface représentant un item positionnable.
 * Contient un identifiant unique et une clé de position.
 */
export interface PositionedItem {
	id: string;
	position: string;
}

/**
 * Génère un tableau de clés de position initiales.
 *
 * Utilise `generateNKeysBetween` sans bornes (les deux bornes sont `null`), ce qui permet de créer
 * une séquence initiale de clés fractionnaires, par exemple pour initialiser l'ordre d'une liste.
 *
 * @param {number} n - Le nombre de clés à générer.
 * @returns {string[]} Un tableau de clés de position.
 */
export const generatePositionsFirst = (n: number): string[] => {
	return generateNKeysBetween(null, null, n);
};

/**
 * Génère un tableau de clés de position situées après une clé donnée.
 *
 * Ici, la borne inférieure est définie par la clé `after` et la borne supérieure reste indéfinie (`null`).
 * Cela permet de générer des clés qui se placeront après la clé spécifiée.
 *
 * @param {string} after - La clé après laquelle insérer les nouvelles clés.
 * @param {number} n - Le nombre de clés à générer.
 * @returns {string[]} Un tableau de clés de position se situant après la clé fournie.
 */
export const generatePositionAfter = (after: string, n: number): string[] => {
	return generateNKeysBetween(after, null, n);
};

/**
 * Génère un tableau de clés de position situées avant une clé donnée.
 *
 * Ici, la borne supérieure est définie par la clé `before` et la borne inférieure est indéfinie (`null`).
 * Cela permet de générer des clés qui se placeront avant la clé spécifiée.
 *
 * @param {string} before - La clé avant laquelle insérer les nouvelles clés.
 * @param {number} n - Le nombre de clés à générer.
 * @returns {string[]} Un tableau de clés de position se situant avant la clé fournie.
 */
export const generatePositionBefore = (before: string, n: number): string[] => {
	return generateNKeysBetween(null, before, n);
};

/**
 * Génère un tableau de clés de position situées entre deux clés existantes.
 *
 * Les bornes sont définies par `a` (borne inférieure) et `b` (borne supérieure).
 * Cela permet d'insérer de nouvelles clés dans l'intervalle défini par ces deux clés.
 *
 * @param {string} a - La clé représentant la borne inférieure.
 * @param {string} b - La clé représentant la borne supérieure.
 * @param {number} n - Le nombre de clés à générer entre `a` et `b`.
 * @returns {string[]} Un tableau de clés de position situées entre `a` et `b`.
 */
export const generatePositionBetween = (
	a: string,
	b: string,
	n: number,
): string[] => {
	return generateNKeysBetween(a, b, n);
};

/**
 * Trie un tableau d'éléments en fonction d'une propriété spécifiée, ici associée à la position.
 *
 * @param items - Le tableau d'éléments à trier.
 * @returns Le tableau trié.
 */
export function sortItemsByPosition<T extends PositionedItem>(items: T[]): T[] {
	return items.sort((a, b) => {
		if (a.position < b.position) return -1;
		if (a.position > b.position) return 1;
		return 0;
	});
}

/**
 * Retourne le premier élément du tableau.
 *
 * @param items - Le tableau d'éléments positionnés.
 * @returns Le premier élément ou `undefined` si le tableau est vide.
 */
export function getFirst<T extends PositionedItem>(items: T[]): T | undefined {
	return items[0];
}

/**
 * Retourne le dernier élément du tableau.
 *
 * @param items - Le tableau d'éléments positionnés.
 * @returns Le dernier élément ou `undefined` si le tableau est vide.
 */
export function getLast<T extends PositionedItem>(items: T[]): T | undefined {
	return items.length > 0 ? items[items.length - 1] : undefined;
}

/**
 * Retourne l'élément situé immédiatement après l'élément fourni.
 *
 * @param items - Le tableau d'éléments positionnés déjà triés.
 * @param current - L'élément de référence.
 * @returns L'élément suivant ou `undefined` si aucun élément ne suit.
 */
export function getNext<T extends PositionedItem>(
	items: T[],
	current: T,
): T | undefined {
	const index = items.findIndex((item) => item.id === current.id);
	return index >= 0 && index < items.length - 1 ? items[index + 1] : undefined;
}

/**
 * Retourne l'élément situé immédiatement avant l'élément fourni.
 *
 * @param items - Le tableau d'éléments positionnés déjà triés.
 * @param current - L'élément de référence.
 * @returns L'élément précédent ou `undefined` si aucun élément ne précède.
 */
export function getPrevious<T extends PositionedItem>(
	items: T[],
	current: T,
): T | undefined {
	const index = items.findIndex((item) => item.id === current.id);
	return index > 0 ? items[index - 1] : undefined;
}

/**
 * Retourne la liste des éléments compris entre deux éléments donnés (inclus).
 *
 * @param items - Le tableau d'éléments positionnés déjà triés.
 * @param start - L'élément de début de la plage.
 * @param end - L'élément de fin de la plage.
 * @returns Le tableau des éléments compris entre `start` et `end` (inclus),
 *          ou un tableau vide si l'un des éléments n'est pas trouvé.
 */
export function getRange<T extends PositionedItem>(
	items: T[],
	start: T,
	end: T,
): T[] {
	const startIndex = items.findIndex((item) => item.id === start.id);
	const endIndex = items.findIndex((item) => item.id === end.id);
	if (startIndex === -1 || endIndex === -1) return [];
	const [from, to] =
		startIndex <= endIndex ? [startIndex, endIndex] : [endIndex, startIndex];
	return items.slice(from, to + 1);
}

/**
 * Recherche et retourne l'élément dont l'id correspond à celui fourni.
 *
 * @param items - Le tableau d'éléments positionnés.
 * @param id - L'identifiant recherché.
 * @returns L'élément correspondant ou `undefined` si non trouvé.
 */
export function getItemById<T extends PositionedItem>(
	items: T[],
	id: string,
): T | undefined {
	return items.find((item) => item.id === id);
}

/**
 * Retourne l'indice d'un élément dans le tableau,
 * en se basant sur l'égalité des identifiants.
 *
 * @param items - Le tableau d'éléments positionnés déjà triés.
 * @param current - L'élément dont on souhaite connaître l'indice.
 * @returns L'indice de l'élément dans le tableau, ou -1 s'il n'est pas trouvé.
 */
export function getIndexByItem<T extends PositionedItem>(
	items: T[],
	current: T,
): number {
	return items.findIndex((item) => item.id === current.id);
}
