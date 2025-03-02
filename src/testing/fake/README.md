# fake

## Description
`fake` is a utility library for generating fake data for testing. It builds on faker.js and offers a simplified API for common use cases.

## Usage
```typescript
import { fake } from 'path/to/testing';

// Generate a full name
const name = fake.name();

// Generate a unique identifier
const id = fake.id();

// Generate a random boolean value
const isActive = fake.boolean();
```

## API

### Basic Data
- `fake.name()` - Generates a random full name
- `fake.words(min, max)` - Generates text containing between min and max words
- `fake.id()` - Generates a unique identifier
- `fake.boolean()` - Generates a random boolean value
- `fake.integer(min, max)` - Generates an integer between min and max
- `fake.float(min, max)` - Generates a decimal number between min and max
- `fake.string(min, max)` - Generates a string with length between min and max

### Internet Formats
- `fake.email()` - Generates a valid email address
- `fake.ip()` - Generates a valid IP address
- `fake.url()` - Generates a valid URL

### Random Selection
- `fake.randomInArray(array)` - Selects a random element from the array
- `fake.randomsInArray(array, count)` - Selects count random elements from the array
- `fake.randomsInArray(array, { min, max })` - Selects between min and max random elements

### Dates
- `fake.date.anytime()` - Generates a random date
- `fake.date.past(days, refDate?)` - Generates a date in the past (up to n days)
- `fake.date.future(days, refDate?)` - Generates a date in the future (up to n days)
- `fake.date.between(start, end)` - Generates a date between two specified dates
- `fake.date.timezone()` - Generates a valid timezone name

## Examples

### Creating a Fake User
```typescript
const createFakeUser = () => ({
  id: fake.id(),
  name: fake.name(),
  email: fake.email(),
  isActive: fake.boolean(),
  registrationDate: fake.date.past(30),
  lastLogin: fake.date.past(7),
  accessLevel: fake.randomInArray(['admin', 'user', 'guest']),
});

const user = createFakeUser();
```

### Creating a List of Fake Products
```typescript
const createFakeProductList = (count) => {
  const categories = ['Electronics', 'Books', 'Clothing', 'Food', 'Toys'];

  return Array.from({ length: count }, () => ({
    id: fake.id(),
    name: `Product ${fake.string(5, 10)}`,
    price: fake.float(10, 1000),
    inStock: fake.integer(0, 100),
    category: fake.randomInArray(categories),
    tags: fake.randomsInArray(
      ['new', 'sale', 'popular', 'recommended', 'limited'],
      { min: 0, max: 3 }
    ),
    createdAt: fake.date.past(365)
  }));
};

const products = createFakeProductList(10);
```
