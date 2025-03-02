# useUnmount

## Description
`useUnmount` is a React hook that allows executing a function when a component is unmounted.

## Usage
```tsx
import { useUnmount } from '@laurieherault/libs';

const MyComponent = () => {
  useUnmount(() => {
    console.log('The component has been unmounted');
    // Cleanup resources
  });

  return <div>My component</div>;
};
```

## Parameters
- `callback`: Function to execute when the component unmounts.

## Examples

### Resource Cleanup
```tsx
const SubscriptionComponent = () => {
  const subscription = useRef(null);

  useEffect(() => {
    subscription.current = subscribeToService();
  }, []);

  useUnmount(() => {
    if (subscription.current) {
      subscription.current.unsubscribe();
    }
  });

  return <div>Active subscription</div>;
};
```

### Logging
```tsx
const AnalyticsComponent = () => {
  useUnmount(() => {
    logComponentUnmount('AnalyticsComponent');
    analytics.sendEvent('component_closed');
  });

  return <div>Component with analytics</div>;
};
```
