import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your top-level component (e.g., App)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Render your top-level component to the root DOM element
);
