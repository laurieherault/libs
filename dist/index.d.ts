// Generated by dts-bundle-generator v9.5.1

export { DateTime } from './src/luxon';
import { Static, TSchema } from '@sinclair/typebox';
import { TypeCheck } from '@sinclair/typebox/compiler';
import { DateTime } from 'luxon';
import { DependencyList } from 'react';

/**
 * Hook qui s'exécute à chaque mise à jour (en excluant le montage initial)
 * en fonction d'un tableau de dépendances.
 * @param callback - Fonction à exécuter lors de la mise à jour.
 * @param dependencies - Tableau de dépendances à surveiller.
 */
export declare const useDidUpdateEffect: (callback: () => void, dependencies: DependencyList) => void;
export declare function useEvent<K extends keyof WindowEventMap>(eventName: K, handler: (event: WindowEventMap[K]) => void, element?: HTMLElement | Window): void;
/**
 * Hook qui s'exécute une seule fois lors du montage du composant.
 * @param callback - Fonction à exécuter lors du montage.
 */
export declare const useMount: (callback: () => void) => void;
/**
 * Hook qui s'exécute lors du démontage du composant.
 * @param callback - Fonction à exécuter lors du démontage.
 */
export declare const useUnmount: (callback: () => void) => void;
/**
 * Crée et retourne un identifiant unique.
 *
 * Utilise la fonction `createId` de la librairie cuid2 qui génère un identifiant de type CUID.
 *
 * @returns {string} Un identifiant unique.
 */
export declare const createUniqueId: () => string;
/**
 * Vérifie si un identifiant est valide selon le format CUID.
 *
 * Utilise la fonction `isCuid` pour s'assurer que l'identifiant fourni correspond au format attendu.
 *
 * @param {string} id - L'identifiant à valider.
 * @returns {boolean} `true` si l'identifiant est valide, sinon `false`.
 */
export declare const isValidId: (id: string) => boolean;
export declare function sleep(ms: number): Promise<void>;
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
export declare const generatePositionsFirst: (n: number) => string[];
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
export declare const generatePositionAfter: (after: string, n: number) => string[];
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
export declare const generatePositionBefore: (before: string, n: number) => string[];
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
export declare const generatePositionBetween: (a: string, b: string, n: number) => string[];
/**
 * Trie un tableau d'éléments en fonction d'une propriété spécifiée, ici associée à la position.
 *
 * @param items - Le tableau d'éléments à trier.
 * @returns Le tableau trié.
 */
export declare function sortItemsByPosition<T extends PositionedItem>(items: T[]): T[];
/**
 * Retourne le premier élément du tableau.
 *
 * @param items - Le tableau d'éléments positionnés.
 * @returns Le premier élément ou `undefined` si le tableau est vide.
 */
export declare function getFirst<T extends PositionedItem>(items: T[]): T | undefined;
/**
 * Retourne le dernier élément du tableau.
 *
 * @param items - Le tableau d'éléments positionnés.
 * @returns Le dernier élément ou `undefined` si le tableau est vide.
 */
export declare function getLast<T extends PositionedItem>(items: T[]): T | undefined;
/**
 * Retourne l'élément situé immédiatement après l'élément fourni.
 *
 * @param items - Le tableau d'éléments positionnés déjà triés.
 * @param current - L'élément de référence.
 * @returns L'élément suivant ou `undefined` si aucun élément ne suit.
 */
export declare function getNext<T extends PositionedItem>(items: T[], current: T): T | undefined;
/**
 * Retourne l'élément situé immédiatement avant l'élément fourni.
 *
 * @param items - Le tableau d'éléments positionnés déjà triés.
 * @param current - L'élément de référence.
 * @returns L'élément précédent ou `undefined` si aucun élément ne précède.
 */
export declare function getPrevious<T extends PositionedItem>(items: T[], current: T): T | undefined;
/**
 * Retourne la liste des éléments compris entre deux éléments donnés (inclus).
 *
 * @param items - Le tableau d'éléments positionnés déjà triés.
 * @param start - L'élément de début de la plage.
 * @param end - L'élément de fin de la plage.
 * @returns Le tableau des éléments compris entre `start` et `end` (inclus),
 *          ou un tableau vide si l'un des éléments n'est pas trouvé.
 */
export declare function getRange<T extends PositionedItem>(items: T[], start: T, end: T): T[];
/**
 * Recherche et retourne l'élément dont l'id correspond à celui fourni.
 *
 * @param items - Le tableau d'éléments positionnés.
 * @param id - L'identifiant recherché.
 * @returns L'élément correspondant ou `undefined` si non trouvé.
 */
export declare function getItemById<T extends PositionedItem>(items: T[], id: string): T | undefined;
/**
 * Retourne l'indice d'un élément dans le tableau,
 * en se basant sur l'égalité des identifiants.
 *
 * @param items - Le tableau d'éléments positionnés déjà triés.
 * @param current - L'élément dont on souhaite connaître l'indice.
 * @returns L'indice de l'élément dans le tableau, ou -1 s'il n'est pas trouvé.
 */
export declare function getIndexByItem<T extends PositionedItem>(items: T[], current: T): number;
/**
 * Type générique Either qui représente soit un succès, soit un échec.
 *
 * Soit [undefined, T] pour un succès (aucune erreur, valeur de type T),
 * soit [E, undefined] pour un échec (erreur de type E, aucune valeur).
 */
export type Either<T, E = unknown> = [
	undefined,
	T
] | [
	E,
	undefined
];
/**
 * Exécute la fonction fournie dans un contexte "sécurisé".
 *
 * En cas de succès, retourne [undefined, résultat].
 * En cas d'erreur, retourne [erreur, undefined].
 *
 * @param cb - La fonction à exécuter.
 * @returns Un tuple de type Either<T, E>.
 */
export declare const tryOrFailSync: <T, E = unknown>(cb: () => T) => Either<T, E>;
/**
 * Exécute la fonction asynchrone fournie dans un contexte "sécurisé".
 *
 * En cas de succès, retourne [undefined, résultat] dans une Promise.
 * En cas d'erreur, retourne [erreur, undefined] dans une Promise.
 *
 * @param cb - La fonction asynchrone à exécuter.
 * @returns Une Promise qui résout un tuple de type Either<T, E>.
 */
export declare const tryOrFail: <T, E = unknown>(cb: () => Promise<T>) => Promise<Either<T, E>>;
export declare const cuid2Regex: RegExp;
export declare const iniValidationsAdvanced: () => void;
/**
 * Valide une donnée à l'aide d'un validateur compilé et retourne un Either.
 * En cas d'échec de validation, retourne une erreur détaillée.
 *
 * @param validator - Le validateur compilé (issu de TypeCompiler.Compile)
 * @param value - La valeur à valider
 *
 * @returns Either<Static<T>, Error> - [undefined, valeurValidée] en cas de succès,
 *                                    [erreur, undefined] en cas d'échec de validation
 */
export declare function parseOrFail<T extends TSchema>(validator: TypeCheck<T>, value: unknown): Either<Static<T>, Error>;
/**
 * Valide une donnée à l'aide d'un validateur compilé.
 * Lance une erreur en cas d'échec de validation.
 *
 * @param validator - Le validateur compilé (issu de TypeCompiler.Compile)
 * @param value - La valeur à valider
 *
 * @returns Static<T> - La valeur validée
 * @throws Error - En cas d'échec de validation
 */
export declare function parseOrThrow<T extends TSchema>(validator: TypeCheck<T>, value: unknown): Static<T>;
export * from "@sinclair/typebox";
export * from "@sinclair/typebox/compiler";

export {
	DateTime,
	Static,
	TSchema,
	TypeCheck,
};

export {};
