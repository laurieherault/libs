export * from "@sinclair/typebox";
import { FormatRegistry, type Static, type TSchema } from "@sinclair/typebox";
import type { TypeCheck } from "@sinclair/typebox/compiler";
import { tryOrFailSync, type Either } from "./tryOrFail";

import {
	isDate,
	isDateTime,
	isEmail,
	isIPv4,
	isIPv6,
	isTime,
	isUrl,
} from "./formats";
import { isValidId } from "./id";

FormatRegistry.Set("email", (value) => isEmail(value));
FormatRegistry.Set("date-time", (value) => isDateTime(value));
FormatRegistry.Set("time", (value) => isTime(value));
FormatRegistry.Set("date", (value) => isDate(value));
FormatRegistry.Set("ipv4", (value) => isIPv4(value));
FormatRegistry.Set("ipv6", (value) => isIPv6(value));
FormatRegistry.Set("url", (value) => isUrl(value));
FormatRegistry.Set("cuid2", (value) => isValidId(value));

/**
 * Valide une donnée à l'aide d'un validateur compilé et retourne un Either.
 * En cas d'échec de validation, retourne une erreur détaillée.
 *
 * @param validator - Le validateur compilé (issu de TypeCompiler.Compile)
 * @param value - La valeur à valider
 *
 * @returns Either<Static<T>, Error> - [undefined, valeurValidée] en cas de succès,
 *                                    [erreur, undefined] en cas d'échec de validation
 */
export function parseOrFail<T extends TSchema>(
	validator: TypeCheck<T>,
	value: unknown,
): Either<Static<T>, Error> {
	return tryOrFailSync(() => {
		if (!validator.Check(value)) {
			const errors = [...validator.Errors(value)];
			throw new Error(`Validation failed: ${JSON.stringify(errors)}`);
		}
		return value as Static<T>;
	});
}
