# useDidUpdateEffect

## Description
`useDidUpdateEffect` is a React hook that works like `useEffect`, but ignores the first render (mount). It executes the callback function only during component updates when dependencies change.

## Usage
```tsx
import { useDidUpdateEffect } from '@laurieherault/libs';

const MyComponent = ({ data }) => {
  useDidUpdateEffect(() => {
    console.log('Data has been updated');
    // Actions to perform only during updates (not on initial mount)
  }, [data]);

  return <div>Data: {data}</div>;
};
```

## Parameters
- `callback`: Function to execute during updates.
- `dependencies`: Array of dependencies to watch for triggering the callback function.

## Examples

### React to Props Changes
```tsx
const DataDisplayComponent = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  // Initial loading
  useEffect(() => {
    fetchUserData(userId).then(data => setUserData(data));
  }, [userId]);

  // Notification only on changes (not on initial load)
  useDidUpdateEffect(() => {
    notifyUserDataChanged(userId);
  }, [userId]);

  return <div>{userData ? JSON.stringify(userData) : 'Loading...'}</div>;
};
```

### Update-Specific Reactions
```tsx
const FilterComponent = ({ filters }) => {
  // Update results on initialization and changes
  useEffect(() => {
    updateResults(filters);
  }, [filters]);

  // Animation only on changes (not on initialization)
  useDidUpdateEffect(() => {
    animateFilterChange();
  }, [filters]);

  return <div>Filters applied</div>;
};
```
