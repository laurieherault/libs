import { describe, expect, test } from "bun:test";
import { getFileName, shortenPath } from "./index";

describe("Tests pour shortenPath et getFileName", () => {
	describe("Tests avec chemin macOS", () => {
		const macPath = "/Users/toto/Folder1/Folder2/Folder3/MyFile.PNG";
		// Avec file : pour un chemin dépassant maxLength, on attend :
		// Partie découpée : ["", "Users", "toto", "Folder1", "Folder2", "Folder3", "MyFile.PNG"]
		// Après gestion du prefix et découpage, le résultat doit être : "/Users/.../Folder3/MyFile.PNG"
		test("shortenPath (avec file)", () => {
			const shortened = shortenPath(macPath, 30);
			expect(shortened).toBe("/Users/.../Folder3/MyFile.PNG");
		});

		// Sans file : on ne doit pas afficher le nom du fichier.
		// Dans ce cas, le dernier dossier est l'avant-dernier segment ("Folder3").
		test("shortenPath (sans file)", () => {
			const shortened = shortenPath(macPath, 30, true);
			expect(shortened).toBe("/Users/.../Folder3");
		});

		// Test avec chemin court et withoutFileName=true
		// Le chemin étant plus court que maxLength, on doit quand même supprimer le fichier
		test("shortenPath (chemin court, sans file)", () => {
			const shortMacPath = "/Users/toto/file.txt";
			const shortened = shortenPath(shortMacPath, 100, true);
			expect(shortened).toBe("/Users/toto");
		});

		test("getFileName", () => {
			const fileName = getFileName(macPath);
			expect(fileName).toBe("MyFile.PNG");
		});
	});

	describe("Tests avec chemin Windows", () => {
		const windowsPath =
			"C:\\Users\\toto\\Folder1\\Folder2\\Folder3\\MyFile.PNG";
		// Pour Windows, on s'attend à conserver le séparateur "\\".
		// Avec file, le résultat doit être : "C:\Users\...\Folder3\MyFile.PNG"
		test("shortenPath (avec file)", () => {
			const shortened = shortenPath(windowsPath, 30);
			expect(shortened).toBe("C:\\Users\\...\\Folder3\\MyFile.PNG");
		});

		// Sans file, le résultat doit être : "C:\Users\...\Folder3"
		test("shortenPath (sans file)", () => {
			const shortened = shortenPath(windowsPath, 30, true);
			expect(shortened).toBe("C:\\Users\\...\\Folder3");
		});

		// Test avec chemin court et withoutFileName=true
		// Le chemin étant plus court que maxLength, on doit quand même supprimer le fichier
		test("shortenPath (chemin court, sans file)", () => {
			const shortWindowsPath = "C:\\Users\\toto\\file.txt";
			const shortened = shortenPath(shortWindowsPath, 100, true);
			expect(shortened).toBe("C:\\Users\\toto");
		});

		test("getFileName", () => {
			const fileName = getFileName(windowsPath);
			expect(fileName).toBe("MyFile.PNG");
		});
	});
});
