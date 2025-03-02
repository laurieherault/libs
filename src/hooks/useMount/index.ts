import { useEffect } from "react";

/**
 * Hook qui s'exécute une seule fois lors du montage du composant.
 * @param callback - Fonction à exécuter lors du montage.
 */
export const useMount = (callback: () => void): void => {
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		callback();
	}, []);
};
