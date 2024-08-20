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
      <h3>Need recommendations to get your day started? Let's ask Nanny Genie!</h3>
    <div>
      <h4>
        Nanny Genie can help you with ideas for kids' activities, quick and easy kids' meals and bedtime stories 
      </h4>
      <h4>Don't be afraid to ask. Nanny Genie is here to help</h4>
    </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button className="custom-button" type="submit">Submit</button>
      </form>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default GeminiPage;