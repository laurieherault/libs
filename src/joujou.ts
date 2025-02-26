// import { Type, type Static, type TSchema } from "@sinclair/typebox";
// import { TypeCompiler, type TypeCheck } from "@sinclair/typebox/compiler";
// import type { Static } from "@sinclair/typebox/parser";

// // Classe générique qui prend en paramètre un schéma TypeBox
// class SchemaWrapper<T extends TSchema> {
// 	// Le schéma TypeBox
// 	public schema: T;
// 	// Le validateur compilé
// 	public validator: TypeCheck<T>;

// 	constructor(schema: T) {
// 		this.schema = schema;
// 		this.validator = TypeCompiler.Compile(this.schema);
// 	}

// 	// Méthode de validation qui utilise le validateur compilé
// 	validate(data: unknown): data is Static<T> {
// 		return this.validator.Check(data);
// 	}
// }

// // Exemple avec un schéma utilisateur
// const UserSchema = Type.Object({
// 	name: Type.String(),
// 	age: Type.Number(),
// });

// // Extraction du type TypeScript pour l'utilisateur
// type User = Static<typeof UserSchema>;

// // Création d'une instance de SchemaWrapper pour le schéma UserSchema
// const userSchemaWrapper = new SchemaWrapper(UserSchema);

// // Exemple d'utilisation de la méthode de validation
// const data = { name: "Alice", age: 30 };

// if (userSchemaWrapper.validate(data)) {
// 	// Ici, TypeScript connaît le type "User"
// 	console.log("Utilisateur valide :", data.name);
// } else {
// 	console.error("Données invalides");
// }
