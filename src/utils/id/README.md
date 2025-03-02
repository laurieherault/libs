# id

## Description
The `id` module provides functions for generating and validating unique identifiers based on the CUID2 library. These identifiers are designed to be unique, sortable, and secure for use in distributed applications.

## Usage
```typescript
import { createUniqueId, isValidId } from '@laurieherault/libs';

// Generate a new unique identifier
const newId = createUniqueId();
console.log(newId); // Ex: "clh12cqbs0000356rlojpg8l1"

// Check if an ID is valid
const isValid = isValidId(newId);
console.log(isValid); // true

const isInvalid = isValidId("not-a-valid-id");
console.log(isInvalid); // false
```

## API

### createUniqueId
```typescript
function createUniqueId(): string
```

Generates and returns a unique identifier in CUID2 format. CUIDs are:
- Secure: no collision or predictability
- Sortable: can be used to sort by creation order
- Compact: designed to be short but unique
- URL-friendly: use only URL-compatible characters

### isValidId
```typescript
function isValidId(id: string): boolean
```

Verifies if the provided identifier is in a valid CUID2 format.

**Parameters**:
- `id`: The string to check

**Returns**: `true` if the id is a valid CUID2, otherwise `false`

## Examples

### Creating a New Document
```typescript
const createDocument = (title, content) => {
  return {
    id: createUniqueId(),
    title,
    content,
    createdAt: new Date()
  };
};

const doc = createDocument("My title", "My content");
console.log(doc.id); // Generated unique ID
```

### Validating a Received ID
```typescript
const fetchDocumentById = (id) => {
  // Check if the ID is in a valid format before making the request
  if (!isValidId(id)) {
    throw new Error("Invalid document ID");
  }

  // Continue with the request...
  return api.getDocument(id);
};
```
