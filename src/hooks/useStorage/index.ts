import { useCallback, useEffect, useState } from "react";

/**
 * Hook qui permet de sauvegarder et charger des données dans le localStorage
 * tout en écoutant les changements effectués dans d'autres onglets.
 *
 * @param key - La clé sous laquelle la valeur est stockée dans localStorage
 * @param initialValue - La valeur par défaut à utiliser si aucune valeur n'est trouvée dans localStorage
 * @returns Un tuple contenant la valeur actuelle, une fonction pour mettre à jour la valeur, et une fonction pour supprimer la valeur
 */
export function useStorage<T>(
	key: string,
	initialValue: T,
): [T, (value: T | ((val: T) => T)) => void, () => void] {
	// Fonction pour obtenir la valeur initiale du localStorage ou utiliser initialValue
	const readValue = useCallback((): T => {
		if (typeof window === "undefined") {
			return initialValue;
		}

		try {
			const item = window.localStorage.getItem(key);
			return item ? (JSON.parse(item) as T) : initialValue;
		} catch (error) {
			console.warn(
				`Erreur lors de la lecture de localStorage pour la clé "${key}":`,
				error,
			);
			return initialValue;
		}
	}, [initialValue, key]);

	// État pour stocker la valeur actuelle
	const [storedValue, setStoredValue] = useState<T>(readValue);

	// Fonction pour mettre à jour la valeur dans l'état et localStorage
	const setValue = useCallback(
		(value: T | ((val: T) => T)) => {
			if (typeof window === "undefined") {
				console.warn(
					`Tentative de mise à jour du localStorage en dehors du navigateur pour la clé "${key}".`,
				);
				return;
			}

			try {
				// Permet de passer une fonction pour mettre à jour la valeur
				const valueToStore =
					value instanceof Function ? value(storedValue) : value;

				// Sauvegarde dans l'état React
				setStoredValue(valueToStore);

				// Sauvegarde dans localStorage
				window.localStorage.setItem(key, JSON.stringify(valueToStore));

				// Déclenche un événement personnalisé pour informer les autres composants
				window.dispatchEvent(
					new StorageEvent("storage", {
						key: key,
						newValue: JSON.stringify(valueToStore),
						storageArea: localStorage,
					}),
				);
			} catch (error) {
				console.warn(
					`Erreur lors de la sauvegarde dans localStorage pour la clé "${key}":`,
					error,
				);
			}
		},
		[key, storedValue],
	);

	// Fonction pour supprimer la valeur du localStorage
	const removeValue = useCallback(() => {
		if (typeof window === "undefined") {
			return;
		}

		try {
			window.localStorage.removeItem(key);
			setStoredValue(initialValue);

			// Déclenche un événement pour informer les autres composants
			window.dispatchEvent(
				new StorageEvent("storage", {
					key: key,
					newValue: null,
					storageArea: localStorage,
				}),
			);
		} catch (error) {
			console.warn(
				`Erreur lors de la suppression de localStorage pour la clé "${key}":`,
				error,
			);
		}
	}, [key, initialValue]);

	// Écoute des changements du localStorage provenant d'autres onglets/fenêtres
	useEffect(() => {
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === key && event.storageArea === localStorage) {
				try {
					const newValue = event.newValue
						? (JSON.parse(event.newValue) as T)
						: initialValue;
					setStoredValue(newValue);
				} catch (error) {
					console.warn(
						`Erreur lors de la mise à jour depuis l'événement storage pour la clé "${key}":`,
						error,
					);
				}
			}
		};

		// Abonnement à l'événement storage
		window.addEventListener("storage", handleStorageChange);

		// Nettoyage lors du démontage du composant
		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, [key, initialValue]);

	return [storedValue, setValue, removeValue];
}
