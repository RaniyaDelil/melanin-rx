// pages/index.js
import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <div>
        <h1>Welcome to the homepage!</h1>
        <Link href="/about">About</Link>
        <Link href="/chatbot">Chatbot</Link>
    </div>
  );
}

export default HomePage;
