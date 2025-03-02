# position

## Description
The `position` module provides utilities for managing positioned elements in an ordered list using fractional keys. This system allows inserting elements between other elements without having to reindex the entire list.

## Usage
```typescript
import {
  generatePositionsFirst,
  generatePositionAfter,
  generatePositionBefore,
  generatePositionBetween,
  sortItemsByPosition,
  type PositionedItem
} from '@laurieherault/libs';

// Create initial positions
const positions = generatePositionsFirst(3);
// ['a0', 'a1', 'a2'] (example values)

// Create positioned items
const items: PositionedItem[] = [
  { id: '1', position: positions[0] },
  { id: '2', position: positions[1] },
  { id: '3', position: positions[2] }
];

// Add an item after the first one
const newPositions = generatePositionAfter(items[0].position, 1);
const newItem = { id: '4', position: newPositions[0] };

// Sort items by position
const allItems = sortItemsByPosition([...items, newItem]);
```

## Interface

### PositionedItem
```typescript
interface PositionedItem {
  id: string;       // Unique identifier of the item
  position: string; // Position key (string)
}
```

## API

### Position Generation

#### generatePositionsFirst
```typescript
function generatePositionsFirst(n: number): string[]
```
Generates an initial set of n position keys.

#### generatePositionAfter
```typescript
function generatePositionAfter(after: string, n: number): string[]
```
Generates n position keys that will be placed after the specified key.

#### generatePositionBefore
```typescript
function generatePositionBefore(before: string, n: number): string[]
```
Generates n position keys that will be placed before the specified key.

#### generatePositionBetween
```typescript
function generatePositionBetween(a: string, b: string, n: number): string[]
```
Generates n position keys that will be placed between keys a and b.

### Operations on Positioned Items

#### sortItemsByPosition
```typescript
function sortItemsByPosition<T extends PositionedItem>(items: T[]): T[]
```
Sorts an array of items by their position.

#### getFirst
```typescript
function getFirst<T extends PositionedItem>(items: T[]): T | undefined
```
Returns the first item in the array.

#### getLast
```typescript
function getLast<T extends PositionedItem>(items: T[]): T | undefined
```
Returns the last item in the array.

#### getNext
```typescript
function getNext<T extends PositionedItem>(items: T[], current: T): T | undefined
```
Returns the item following the specified one.

#### getPrevious
```typescript
function getPrevious<T extends PositionedItem>(items: T[], current: T): T | undefined
```
Returns the item preceding the specified one.

#### getRange
```typescript
function getRange<T extends PositionedItem>(items: T[], start: T, end: T): T[]
```
Returns all items between start and end (inclusive).

#### getItemById
```typescript
function getItemById<T extends PositionedItem>(items: T[], id: string): T | undefined
```
Searches for an item by its identifier.

#### getIndexByItem
```typescript
function getIndexByItem<T extends PositionedItem>(items: T[], current: T): number
```
Returns the index of an item in the array.

## Examples

### Reordering Items
```typescript
const reorderItems = (items, sourceId, targetId) => {
  // Sort items by position
  const sortedItems = sortItemsByPosition([...items]);

  // Find source and target items
  const sourceItem = getItemById(sortedItems, sourceId);
  const targetItem = getItemById(sortedItems, targetId);

  if (!sourceItem || !targetItem) {
    return items; // Items not found
  }

  // Generate a new position to place the source item after the target
  const nextItem = getNext(sortedItems, targetItem);

  let newPosition;
  if (nextItem) {
    // Place between the target and the next item
    newPosition = generatePositionBetween(
      targetItem.position,
      nextItem.position,
      1
    )[0];
  } else {
    // Place after the target (which is the last item)
    newPosition = generatePositionAfter(targetItem.position, 1)[0];
  }

  // Update the source item with the new position
  return items.map(item =>
    item.id === sourceId
      ? { ...item, position: newPosition }
      : item
  );
};
```
