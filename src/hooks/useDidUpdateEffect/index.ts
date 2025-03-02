import { type DependencyList, useEffect, useRef } from "react";

/**
 * Hook qui s'exécute à chaque mise à jour (en excluant le montage initial)
 * en fonction d'un tableau de dépendances.
 * @param callback - Fonction à exécuter lors de la mise à jour.
 * @param dependencies - Tableau de dépendances à surveiller.
 */
export const useDidUpdateEffect = (
	callback: () => void,
	dependencies: DependencyList,
): void => {
	const isInitialMount = useRef<boolean>(true);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			callback();
		}
	}, dependencies);
};
