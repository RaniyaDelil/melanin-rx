import React from 'react';
import Image from "next/image";
import Link from "next/link";
import '../app/globals.css';
import { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  // use state for messages and input
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // send message
  const sendMessage = async (e) => {
    e.preventDefault();

    setMessages((currentMessages) => [...currentMessages, { text: input, sender: 'user' }]);
    console.log(input);
    console.log(messages);

    // send message to chatbot API
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: input}),
    });

    // updates usestate with message input
    if (response.ok) {
      const { reply } = await response.json();
      setMessages((currentMessages) => [...currentMessages, { text: reply, sender: 'bot' }]);    
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
      <main className="flex-grow p-8">
        <div className="text-center mb-4">
          {/* Header */}
          <h1 className="text-4xl font-bold">ChatBot</h1>

          {/* Chat Window */}
          <div className="chat-window flex flex-col space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <span className="text-gray-400">{message.sender}</span>: {message.text}
              </div>
            ))}
          </div>
          
          {/* Input box */}
        <form onSubmit={sendMessage} className="flex justify-center mt-4">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded-md mr-2 focus:outline-none"
            placeholder="Type a message..."
            style={{ color: 'black' }}
          />
          <button type="submit" className="bg-brown text-white px-4 py-2 rounded-md hover:bg-brown-dark focus:outline-none">
            Send
          </button>
        </form>
          
        </div>
      </main>
    </div>
  );
}

export default Chatbot;