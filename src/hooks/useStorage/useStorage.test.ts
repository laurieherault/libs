import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { useStorage } from "./index";

describe("useStorage", () => {
	const testKey = "test-storage-key";
	const initialValue = { data: "initial" };

	// Nettoie localStorage avant chaque test
	beforeEach(() => {
		localStorage.clear();
	});

	// Nettoie localStorage après chaque test
	afterEach(() => {
		localStorage.clear();
	});

	test("initialise avec la valeur par défaut lorsque localStorage est vide", () => {
		const { result } = renderHook(() => useStorage(testKey, initialValue));

		// Vérifie que la valeur initiale est correctement définie
		expect(result.current[0]).toEqual(initialValue);

		// Vérifie que localStorage est toujours vide (aucune valeur n'a été stockée)
		expect(localStorage.getItem(testKey)).toBeNull();
	});

	test("utilise la valeur existante du localStorage", () => {
		// Préremplir localStorage
		const existingValue = { data: "existing" };
		localStorage.setItem(testKey, JSON.stringify(existingValue));

		const { result } = renderHook(() => useStorage(testKey, initialValue));

		// Vérifie que la valeur initiale est récupérée depuis localStorage
		expect(result.current[0]).toEqual(existingValue);
	});

	test("met à jour la valeur et le localStorage", () => {
		const { result } = renderHook(() => useStorage(testKey, initialValue));
		const newValue = { data: "updated" };

		// Met à jour la valeur
		act(() => {
			result.current[1](newValue);
		});

		// Vérifie que la valeur a été mise à jour
		expect(result.current[0]).toEqual(newValue);

		// Vérifie que localStorage a également été mis à jour
		const storedValue = JSON.parse(localStorage.getItem(testKey) || "null");
		expect(storedValue).toEqual(newValue);
	});

	test("met à jour la valeur en utilisant une fonction de mise à jour", () => {
		const { result } = renderHook(() => useStorage(testKey, initialValue));

		// Met à jour la valeur en utilisant une fonction
		act(() => {
			result.current[1]((prev) => ({
				...prev,
				data: "function update",
			}));
		});

		// Vérifie que la valeur a été mise à jour
		expect(result.current[0]).toEqual({ data: "function update" });

		// Vérifie que localStorage a également été mis à jour
		const storedValue = JSON.parse(localStorage.getItem(testKey) || "null");
		expect(storedValue).toEqual({ data: "function update" });
	});

	test("supprime la valeur du localStorage", () => {
		// Préremplir localStorage
		localStorage.setItem(testKey, JSON.stringify({ data: "to be removed" }));

		const { result } = renderHook(() => useStorage(testKey, initialValue));

		// Supprime la valeur
		act(() => {
			result.current[2]();
		});

		// Vérifie que la valeur est réinitialisée à initialValue
		expect(result.current[0]).toEqual(initialValue);

		// Vérifie que localStorage a bien supprimé la valeur
		expect(localStorage.getItem(testKey)).toBeNull();
	});

	test("réagit aux changements de storage externes", () => {
		const { result } = renderHook(() => useStorage(testKey, initialValue));
		const externalValue = { data: "external update" };

		// Simule un changement de localStorage provenant d'un autre onglet
		act(() => {
			window.dispatchEvent(
				new StorageEvent("storage", {
					key: testKey,
					newValue: JSON.stringify(externalValue),
					storageArea: localStorage,
				}),
			);
		});

		// Vérifie que notre hook a bien réagi au changement externe
		expect(result.current[0]).toEqual(externalValue);
	});

	test("réagit à la suppression externe de la valeur", () => {
		// Préremplir localStorage
		localStorage.setItem(
			testKey,
			JSON.stringify({ data: "to be removed externally" }),
		);

		const { result } = renderHook(() => useStorage(testKey, initialValue));

		// Simule une suppression depuis un autre onglet
		act(() => {
			window.dispatchEvent(
				new StorageEvent("storage", {
					key: testKey,
					newValue: null,
					storageArea: localStorage,
				}),
			);
		});

		// Vérifie que notre hook a bien réinitialisé à initialValue
		expect(result.current[0]).toEqual(initialValue);
	});
});
