import { useEffect } from "react";

/**
 * Hook qui s'exécute lors du démontage du composant.
 * @param callback - Fonction à exécuter lors du démontage.
 */
export const useUnmount = (callback: () => void): void => {
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		return () => {
			callback();
		};
	}, []);
};
