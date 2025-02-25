/**
 * Type générique Either qui représente soit un succès, soit un échec.
 *
 * Soit [undefined, T] pour un succès (aucune erreur, valeur de type T),
 * soit [E, undefined] pour un échec (erreur de type E, aucune valeur).
 */
export type Either<T, E = unknown> = [undefined, T] | [E, undefined];

/**
 * Exécute la fonction fournie dans un contexte "sécurisé".
 *
 * En cas de succès, retourne [undefined, résultat].
 * En cas d'erreur, retourne [erreur, undefined].
 *
 * @param cb - La fonction à exécuter.
 * @returns Un tuple de type Either<T, E>.
 */
export const tryOrFailSync = <T, E = unknown>(cb: () => T): Either<T, E> => {
	try {
		const result = cb();
		return [undefined, result] as Either<T, E>;
	} catch (error: unknown) {
		return [error as E, undefined] as Either<T, E>;
	}
};

/**
 * Exécute la fonction asynchrone fournie dans un contexte "sécurisé".
 *
 * En cas de succès, retourne [undefined, résultat] dans une Promise.
 * En cas d'erreur, retourne [erreur, undefined] dans une Promise.
 *
 * @param cb - La fonction asynchrone à exécuter.
 * @returns Une Promise qui résout un tuple de type Either<T, E>.
 */
export const tryOrFail = async <T, E = unknown>(
	cb: () => Promise<T>,
): Promise<Either<T, E>> => {
	try {
		const result = await cb();
		return [undefined, result] as Either<T, E>;
	} catch (error: unknown) {
		return [error as E, undefined] as Either<T, E>;
	}
};
