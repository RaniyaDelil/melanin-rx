// pages/api/chatbot.js
// communicates with the OpenAI API for generating responses

import OpenAI from 'openai';
const OPENAI_API_KEY = "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";

// Initialize OpenAI API client
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    console.log("User message:", message);

    try {
      // Send user message to OpenAI API
      const response = await openai.complete({
        engine: 'text-davinci-003',
        prompt: message,
        maxTokens: 150,
      });

      // Extract the generated response
      const answer = response.data.choices[0].text.trim();
      console.log("Chatbot response:", answer);

      // Send response back to client
      res.status(200).json({ answer });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
