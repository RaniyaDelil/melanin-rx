import React from 'react';
import Image from "next/image";
import Link from "next/link";
import '../app/globals.css';
import { useState } from 'react';

function Chatbot() {
  // use state for messages and input
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // send message
  const sendMessage = async () => {
    setMessages([...messages, { text: input, sender: 'user' }]);
    console.log(input);
    console.log(messages);

    // send message to chatbot API
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    });

    // updates usestate with message input
    if (response.ok) {
      const { answer } = await response.json();
      setMessages([...messages, { text: answer, sender: 'bot' }]);
    } else {
      console.error('Error:', response.statusText);
    }

    setInput(''); // Clear input field
  };

  // input change handler
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center">
                {/* <Image
                  src="../logo.svg"
                  alt="MelaninRx Logo"
                  width={40}
                  height={40}
                /> */}
                <span className="ml-2 text-lg font-bold">MelaninRx</span>
              </a>
            </div>
            {/* Navbar links */}
            <div className="hidden md:block">
              <div className="flex space-x-4 items-center">
                <a href="/chatbot" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  Chatbot
                </a>
                <a href="/about" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  About the Issue
                </a>
                <a href="/resources" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  Resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Header */}
          <h1 className="text-4xl font-bold">ChatBot</h1>

          {/* Chat Window */}
          <div className="chat-window">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {`${message.sender}: ${message.text}`}
              </div>
            ))}
          </div>
          
          {/* Input box */}
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
            style={{ color: 'black' }}
          />
          <button onClick={sendMessage}>Send</button>
          
          {/* Display the question */}
          {input && <div className="question">{input}</div>}
        </div>
      </main>
    </div>
  );
}

export default Chatbot;