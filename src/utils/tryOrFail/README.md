# tryOrFail

## Description
The `tryOrFail` module provides utilities for handling errors elegantly using the Either pattern. It allows handling both synchronous and asynchronous errors without directly using try/catch in business logic code.

## Usage
```typescript
import { tryOrFail, tryOrFailSync, type Either } from 'path/to/utils/tryOrFail';

// Synchronous version
const [error, result] = tryOrFailSync(() => {
  // Potentially risky code
  return JSON.parse('{"name": "John"}');
});

if (error) {
  console.error("An error occurred:", error);
} else {
  console.log("Result:", result);
}

// Asynchronous version
async function fetchData() {
  const [error, data] = await tryOrFail(async () => {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  });

  if (error) {
    console.error("Error while retrieving data:", error);
    return null;
  }

  return data;
}
```

## API

### Type
