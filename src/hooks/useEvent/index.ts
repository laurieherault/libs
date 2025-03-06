import { useEffect, useRef } from "react";

export function useEvent<K extends keyof WindowEventMap>(
	eventName: K,
	handler: (event: WindowEventMap[K]) => void,
	element: HTMLElement | Window = window,
): void {
	// On stocke le handler courant dans une ref pour toujours utiliser la version la plus récente
	const savedHandler = useRef(handler);

	// Mise à jour de la ref quand le handler change
	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		// Vérifie que l'élément supporte addEventListener
		if (!element?.addEventListener)
			throw new Error("Element does not support addEventListener");

		// Crée l'écouteur d'événement qui appelle la version actuelle du handler
		const eventListener = (event: Event) => {
			savedHandler.current(event as WindowEventMap[K]);
		};

		// Ajoute l'écouteur
		element.addEventListener(eventName, eventListener);

		// Nettoyage : supprime l'écouteur lors du démontage ou si eventName/element change
		return () => {
			element.removeEventListener(eventName, eventListener);
		};
	}, [eventName, element]);
}
