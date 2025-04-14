import { useCallback, useState } from "react";

/**
 * Interface pour les callbacks de useDisclosure
 */
interface UseDisclosureCallbacks {
	/** Callback appelé lorsque l'état passe à ouvert */
	onOpen?: () => void;
	/** Callback appelé lorsque l'état passe à fermé */
	onClose?: () => void;
}

/**
 * Interface pour les handlers retournés par useDisclosure
 */
interface UseDisclosureHandlers {
	/** Ouvre le composant (met l'état à true) */
	open: () => void;
	/** Ferme le composant (met l'état à false) */
	close: () => void;
	/** Inverse l'état actuel */
	toggle: () => void;
}

/**
 * Hook qui gère un état booléen pour contrôler l'ouverture/fermeture de composants
 * comme des modals, popovers, drawers, etc.
 *
 * @param initialState - L'état initial (ouvert ou fermé)
 * @param callbacks - Callbacks optionnels appelés lors des changements d'état
 * @returns Tuple contenant l'état actuel et les handlers pour le modifier
 */
export function useDisclosure(
	initialState = false,
	callbacks?: UseDisclosureCallbacks,
): [boolean, UseDisclosureHandlers] {
	const [opened, setOpened] = useState(initialState);

	const open = useCallback(() => {
		setOpened((prevOpened) => {
			if (!prevOpened) {
				callbacks?.onOpen?.();
				return true;
			}
			return prevOpened;
		});
	}, [callbacks]);

	const close = useCallback(() => {
		setOpened((prevOpened) => {
			if (prevOpened) {
				callbacks?.onClose?.();
				return false;
			}
			return prevOpened;
		});
	}, [callbacks]);

	const toggle = useCallback(() => {
		setOpened((prevOpened) => {
			if (prevOpened) {
				callbacks?.onClose?.();
				return false;
			} else {
				callbacks?.onOpen?.();
				return true;
			}
		});
	}, [callbacks]);

	const handlers: UseDisclosureHandlers = { open, close, toggle };

	return [opened, handlers];
}
