# useDisclosure

## Description
`useDisclosure` is a React hook that manages a boolean state with handlers for opening, closing and toggling. It's particularly useful for controlling UI components like modals, popovers, drawers, and collapsible sections.

## Usage
```tsx
import { useDisclosure } from '@laurieherault/libs';

const MyComponent = () => {
  const [isOpen, handlers] = useDisclosure(false);

  return (
    <div>
      <button onClick={handlers.open}>Open</button>
      <button onClick={handlers.close}>Close</button>
      <button onClick={handlers.toggle}>Toggle</button>

      {isOpen && <div>This content is visible when open</div>}
    </div>
  );
};
```

## Parameters
- `initialState`: Boolean value for the initial state (opened or closed). Defaults to `false` if not provided.
- `callbacks` (optional): An object containing callback functions:
  - `onOpen`: Called when the state changes from closed to open
  - `onClose`: Called when the state changes from open to closed

## Return Values
Returns an array with two elements:
1. `opened`: The current state (boolean)
2. `handlers`: An object with three methods:
   - `open`: Sets the state to `true`
   - `close`: Sets the state to `false`
   - `toggle`: Toggles the current state

## Examples

### With Callbacks
```tsx
const Modal = ({ title, content }) => {
  const [isOpen, handlers] = useDisclosure(false, {
    onOpen: () => console.log('Modal opened'),
    onClose: () => console.log('Modal closed'),
  });

  return (
    <>
      <button onClick={handlers.open}>Show Modal</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-header">
            <h2>{title}</h2>
            <button onClick={handlers.close}>×</button>
          </div>
          <div className="modal-content">
            {content}
          </div>
          <div className="modal-footer">
            <button onClick={handlers.close}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
```

### Controlling Multiple Disclosure States
```tsx
const Accordion = () => {
  const [section1Open, section1Handlers] = useDisclosure(false);
  const [section2Open, section2Handlers] = useDisclosure(false);
  const [section3Open, section3Handlers] = useDisclosure(false);

  // Function to close all sections
  const closeAll = () => {
    section1Handlers.close();
    section2Handlers.close();
    section3Handlers.close();
  };

  // Function to open a specific section and close others
  const openSection = (sectionHandlers) => {
    closeAll();
    sectionHandlers.open();
  };

  return (
    <div className="accordion">
      <div className="accordion-section">
        <button onClick={() => openSection(section1Handlers)}>
          Section 1 {section1Open ? '▲' : '▼'}
        </button>
        {section1Open && <div className="content">Section 1 content</div>}
      </div>

      <div className="accordion-section">
        <button onClick={() => openSection(section2Handlers)}>
          Section 2 {section2Open ? '▲' : '▼'}
        </button>
        {section2Open && <div className="content">Section 2 content</div>}
      </div>

      <div className="accordion-section">
        <button onClick={() => openSection(section3Handlers)}>
          Section 3 {section3Open ? '▲' : '▼'}
        </button>
        {section3Open && <div className="content">Section 3 content</div>}
      </div>
    </div>
  );
};
