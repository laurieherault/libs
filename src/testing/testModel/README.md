# testModel

## Description
`testModel` is a helper function for testing data models validated with TypeBox. It facilitates creating tests to verify that validations work correctly for both valid and invalid values.

## Usage
```typescript
import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { testModel } from 'path/to/testing';

// Define a TypeBox schema
const UserSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  age: Type.Number({ minimum: 18 }),
  email: Type.Optional(Type.String({ format: 'email' }))
});

// Compile the schema
const userCheck = TypeCompiler.Compile(UserSchema);

// Define test cases
testModel([
  {
    testName: "User",
    goodValues: [
      { id: "1", name: "John", age: 25 },
      { id: "2", name: "Jane", age: 30, email: "jane@example.com" }
    ],
    badValues: [
      { name: "John", age: 25 },              // Missing id
      { id: "1", name: "John", age: 16 },     // Age too low
      { id: "1", name: "John", age: "25" },   // Age is not a number
      { id: "1", name: "John", age: 25, email: "invalid-email" } // Invalid email
    ],
    check: userCheck
  }
]);
```

## Interface

```typescript
interface ModelTestCase {
  testName: string;            // Test name
  goodValues: unknown[];       // Values that should pass validation
  badValues: unknown[];        // Values that should fail validation
  check: TypeCheck<TSchema>;   // TypeBox compiler for the schema
}
```

## Operation

For each test case, `testModel` automatically generates multiple unit tests that verify:

### For good values:
1. The `check.Check()` method returns `true`
2. The `parseOrFail()` function doesn't generate an error and correctly returns the value

### For bad values:
1. The `check.Check()` method returns `false`
2. The `parseOrFail()` function generates an error

## Advanced Example

```typescript
import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { testModel } from 'path/to/testing';

// Define multiple related schemas
const AddressSchema = Type.Object({
  street: Type.String(),
  city: Type.String(),
  zipCode: Type.String({ pattern: '^[0-9]{5}$' })
});

const UserSchema = Type.Object({
  name: Type.String(),
  email: Type.String({ format: 'email' }),
  address: AddressSchema
});

// Compile the schemas
const addressCheck = TypeCompiler.Compile(AddressSchema);
const userCheck = TypeCompiler.Compile(UserSchema);

// Test both models
testModel([
  {
    testName: "Address",
    goodValues: [
      { street: "123 Main St", city: "New York", zipCode: "10001" }
    ],
    badValues: [
      { street: "123 Main St", city: "New York" },         // Missing zipCode
      { street: "123 Main St", city: "New York", zipCode: "ABC12" } // Invalid zipCode format
    ],
    check: addressCheck
  },
  {
    testName: "User",
    goodValues: [
      {
        name: "John Doe",
        email: "john@example.com",
        address: { street: "123 Main St", city: "New York", zipCode: "10001" }
      }
    ],
    badValues: [
      { name: "John Doe", email: "invalid-email" },        // Invalid email
      { name: "John Doe", email: "john@example.com" }      // Missing address
    ],
    check: userCheck
  }
]);
```
