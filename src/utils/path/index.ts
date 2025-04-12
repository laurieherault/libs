/**
 * Raccourcit un chemin de fichier en préservant le premier dossier,
 * le dernier dossier et, par défaut, le nom du fichier.
 * Si le chemin ne dépasse pas maxLength, il est retourné inchangé.
 *
 * @param path Le chemin complet (au format Unix ou Windows).
 * @param maxLength La longueur minimale à partir de laquelle le chemin doit être raccourci.
 * @param withoutFileName Optionnel, si vrai, le nom du fichier n'est pas affiché.
 * @returns Le chemin raccourci.
 */
export function shortenPath(
	path: string,
	maxLength: number,
	withoutFileName?: boolean,
): string {
	// Si le chemin ne dépasse pas maxLength, retourne le chemin original.
	if (path.length <= maxLength) {
		return path;
	}

	// Détection du séparateur utilisé dans le chemin.
	// On considère que Windows utilise "\" et sinon "/".
	const delimiter = path.includes("\\") ? "\\" : "/";

	// Découpe du chemin en segments.
	const parts = path.split(delimiter);

	// Pour les chemins Unix commençant par "/" le premier élément sera vide.
	let prefix = "";
	if (parts[0] === "" && delimiter === "/") {
		prefix = delimiter;
		parts.shift();
	}

	// Construction du chemin raccourci en fonction du paramètre withoutFileName.
	if (withoutFileName) {
		// On attend au moins deux segments pour pouvoir afficher un premier dossier et un dernier.
		if (parts.length < 2) {
			return prefix + parts.join(delimiter);
		}
		// Pour Windows, on préserve le premier segment (C:) et le premier dossier (Users)
		if (delimiter === "\\") {
			const shortenedParts = [
				parts[0],
				parts[1],
				"...",
				parts[parts.length - 2],
			];
			return shortenedParts.join(delimiter);
		}
		// Pour Unix, on préserve le premier dossier (Users) et le dernier dossier
		const shortenedParts = [parts[0], "...", parts[parts.length - 2]];
		return prefix + shortenedParts.join(delimiter);
	}
	// On attend au moins trois segments pour afficher le premier dossier, le dernier dossier et le fichier.
	if (parts.length < 3) {
		return prefix + parts.join(delimiter);
	}
	// Pour Windows, on préserve le premier segment (C:) et le premier dossier (Users)
	if (delimiter === "\\") {
		const shortenedParts = [
			parts[0],
			parts[1],
			"...",
			parts[parts.length - 2],
			parts[parts.length - 1],
		];
		return shortenedParts.join(delimiter);
	}
	// Pour Unix, on préserve le premier dossier (Users), le dernier dossier et le fichier
	const shortenedParts = [
		parts[0],
		"...",
		parts[parts.length - 2],
		parts[parts.length - 1],
	];
	return prefix + shortenedParts.join(delimiter);
}

/**
 * Extrait le nom de fichier (avec son extension) depuis un chemin complet.
 *
 * @param path Le chemin complet.
 * @returns Le nom du fichier avec son extension.
 */
export function getFileName(path: string): string {
	// Détection du séparateur utilisé.
	const delimiter = path.includes("\\") ? "\\" : "/";
	const parts = path.split(delimiter);
	// Recherche du dernier segment non vide (pour le cas des chemins se terminant par un séparateur).
	for (let i = parts.length - 1; i >= 0; i--) {
		if (parts[i] !== "") {
			return parts[i];
		}
	}
	return "";
}
