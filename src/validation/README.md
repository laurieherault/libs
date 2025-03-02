# Validation Module

This module provides type validation utilities based on TypeBox to ensure runtime type safety in your applications.

## Installation

```bash
npm install @sinclair/typebox
```

## Features

- Type-safe validation using TypeBox schemas
- Various format validators (email, date, time, IP addresses, URLs)
- Error handling with detailed validation messages

## Usage

### Basic Usage with `parseOrFail`

The `parseOrFail` function is the core utility of this module. It validates data against a TypeBox schema and returns either the validated data or an error.

```typescript
import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { parseOrFail } from "./path-to-validation";

// Define your schema
const UserSchema = Type.Object({
  name: Type.String(),
  age: Type.Number(),
  email: Type.String({ format: "email" }),
});

// Compile the schema
const validator = TypeCompiler.Compile(UserSchema);

// Validate data
const userData = {
  name: "John Doe",
  age: 30,
  email: "john@example.com"
};

const [error, result] = parseOrFail(validator, userData);

if (error) {
  console.error("Validation failed:", error.message);
} else {
  console.log("Valid data:", result);
  // result is typed as { name: string, age: number, email: string }
}
```

### Handling Validation Errors

The `parseOrFail` function returns an `Either` type which is a tuple of `[Error | undefined, T | undefined]`. This allows for concise error handling:

```typescript
const [error, result] = parseOrFail(validator, data);

if (error) {
  // Handle validation error
  return res.status(400).json({ error: error.message });
}

// Safe to use the validated data
processValidData(result);
```

### Available Format Validators

The module includes several format validators that are automatically registered with TypeBox:

- `email`: Validates email addresses
- `date-time`: Validates ISO 8601 date-time strings
- `date`: Validates ISO 8601 date strings
- `time`: Validates ISO 8601 time strings
- `ipv4`: Validates IPv4 addresses
- `ipv6`: Validates IPv6 addresses
- `url`: Validates URLs
- `cuid2`: Validates CUID2 identifiers

Example using formats:

```typescript
const EmailSchema = Type.String({ format: "email" });
const DateSchema = Type.String({ format: "date" });
const UrlSchema = Type.String({ format: "url" });
```

## API Reference

### `parseOrFail<T>(validator: TypeCheck<T>, value: unknown): Either<Static<T>, Error>`

Validates data using a compiled TypeBox validator and returns an Either type.

**Parameters:**
- `validator`: A compiled TypeBox validator (from `TypeCompiler.Compile`)
- `value`: The data to validate

**Returns:**
- On success: `[undefined, validatedData]`
- On error: `[error, undefined]` where `error` is an Error object with validation details

## Integration with TypeScript

The validation module is designed to work seamlessly with TypeScript, providing type inference for validated data.

```typescript
import { Type, Static } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { parseOrFail } from "./path-to-validation";

const UserSchema = Type.Object({
  id: Type.String({ format: "cuid2" }),
  name: Type.String(),
  age: Type.Number(),
});

// Static<typeof UserSchema> gives you the TypeScript type
type User = Static<typeof UserSchema>;

function processUser(user: User) {
  // Type-safe access to user properties
  console.log(user.name);
}

const validator = TypeCompiler.Compile(UserSchema);

// In your request handler
const [error, user] = parseOrFail(validator, requestBody);

if (!error) {
  // TypeScript knows user is of type User
  processUser(user);
}
```
