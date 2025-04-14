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
		if (!opened) {
			setOpened(true);
			callbacks?.onOpen?.();
		}
	}, [opened, callbacks]);

	const close = useCallback(() => {
		if (opened) {
			setOpened(false);
			callbacks?.onClose?.();
		}
	}, [opened, callbacks]);

	const toggle = useCallback(() => {
		if (opened) {
			close();
		} else {
			open();
		}
	}, [opened, open, close]);

	const handlers: UseDisclosureHandlers = { open, close, toggle };

	return [opened, handlers];
}
