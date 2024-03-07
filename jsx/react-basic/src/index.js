// Entrance to the project. Start from here.

// Two necessary core packages.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import project root component.
import App from './App';

// Rendering the App component to the DOM node with the ID "root".
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
