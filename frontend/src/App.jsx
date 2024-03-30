import React from 'react';
import HomePage from './pages/Home.jsx'; // Import your custom pages
import AboutPage from './pages/About.jsx';

function App() {
  return (
    <div>
      <h1>Welcome to My React App!</h1>
      <HomePage /> {/* Render your home page component */}
      <AboutPage /> {/* Render your about page component */}
    </div>
  );
}

export default App;