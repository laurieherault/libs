# useStorage

## Description
`useStorage` is a React hook that provides a convenient way to save and load data from the browser's localStorage. It also listens for storage events to keep the value synchronized across different tabs or windows.

## Usage
```tsx
import { useStorage } from '@laurieherault/libs';

const MyComponent = () => {
  const [value, setValue, removeValue] = useStorage('my-storage-key', 'default value');

  return (
    <div>
      <p>Current value: {value}</p>
      <button onClick={() => setValue('new value')}>Update Value</button>
      <button onClick={() => removeValue()}>Clear Value</button>
    </div>
  );
};
```

## Parameters
- `key`: String used as the storage key in localStorage.
- `initialValue`: Default value to use if no value exists in localStorage.

## Return Values
Returns an array with three elements:
1. `value`: The current value from localStorage (or the initialValue if none exists).
2. `setValue`: Function to update the value in both state and localStorage.
3. `removeValue`: Function to remove the value from localStorage and reset to initialValue.

## Examples

### Storing User Preferences
```tsx
const UserPreferences = () => {
  const [preferences, setPreferences, resetPreferences] = useStorage('user-preferences', {
    theme: 'light',
    fontSize: 'medium',
    notifications: true
  });

  return (
    <div>
      <h2>User Preferences</h2>

      <label>
        Theme:
        <select
          value={preferences.theme}
          onChange={(e) => setPreferences({...preferences, theme: e.target.value})}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>

      <label>
        Font Size:
        <select
          value={preferences.fontSize}
          onChange={(e) => setPreferences({...preferences, fontSize: e.target.value})}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>

      <label>
        <input
          type="checkbox"
          checked={preferences.notifications}
          onChange={(e) => setPreferences({...preferences, notifications: e.target.checked})}
        />
        Enable Notifications
      </label>

      <button onClick={resetPreferences}>Reset to Defaults</button>
    </div>
  );
};
```

### Using Function Update Pattern
```tsx
const TaskCounter = () => {
  const [counter, setCounter] = useStorage('task-counter', { count: 0 });

  const increment = () => {
    // Using the function update pattern to ensure we always have the latest value
    setCounter((prev) => ({ count: prev.count + 1 }));
  };

  return (
    <div>
      <p>Task count: {counter.count}</p>
      <button onClick={increment}>Complete Task</button>
    </div>
  );
};
```
