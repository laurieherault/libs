import { createId, isCuid } from "@paralleldrive/cuid2";

/**
 * Crée et retourne un identifiant unique.
 *
 * Utilise la fonction `createId` de la librairie cuid2 qui génère un identifiant de type CUID.
 *
 * @returns {string} Un identifiant unique.
 */
export const createUniqueId = (): string => {
	return createId();
};

/**
 * Vérifie si un identifiant est valide selon le format CUID.
 *
 * Utilise la fonction `isCuid` pour s'assurer que l'identifiant fourni correspond au format attendu.
 *
 * @param {string} id - L'identifiant à valider.
 * @returns {boolean} `true` si l'identifiant est valide, sinon `false`.
 */

export const isValidId = (id: string): boolean => {
	return isCuid(id);
};
