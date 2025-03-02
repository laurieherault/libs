# useMount

## Description
`useMount` is a React hook that allows executing a function only once when a component is initially mounted.

## Usage
```tsx
import { useMount } from '@laurieherault/libs';

const MyComponent = () => {
  useMount(() => {
    console.log('The component has been mounted');
    // Execute actions on component initialization
  });

  return <div>My component</div>;
};
```

## Parameters
- `callback`: Function to execute when the component mounts.

## Examples

### Data Initialization
```tsx
const DataComponent = () => {
  const [data, setData] = useState(null);

  useMount(() => {
    fetchInitialData().then(result => {
      setData(result);
    });
  });

  return <div>{data ? 'Data loaded' : 'Loading...'}</div>;
};
```

### Event Registration
```tsx
const EventComponent = () => {
  useMount(() => {
    document.addEventListener('customEvent', handleCustomEvent);
  });

  return <div>Listening for events</div>;
};
```
