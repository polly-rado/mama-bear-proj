import React, { useState } from 'react';
import { getGeminiResponse } from '../apis/gemini';

const GeminiPage = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await getGeminiResponse(prompt);
      setResponse(result.data);
    } catch (error) {
      console.error("Error fetching Gemini API response:", error);
    }
  };

  return (
    <div id="HomePage">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default GeminiPage;