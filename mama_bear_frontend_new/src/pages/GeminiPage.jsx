import React, { useState, useEffect } from 'react';
import { getGeminiResponse, getDailySuggestions } from '../apis/gemini';
import '../styles/LogBox.css';  // Import the CSS file

function GeminiPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [dailySuggestions, setDailySuggestions] = useState({
    activities: '',
    meals: ''
  });

  // Fetch daily suggestions when the page loads
  useEffect(() => {
    const fetchSuggestions = async () => {
      const suggestions = await getDailySuggestions();
      setDailySuggestions({
        activities: suggestions.data.activities,
        meals: suggestions.data.meals
      });
    };
    fetchSuggestions();
  }, []);

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
      <div className="log-box"> {/* Apply the box style here */}
        <h3>Need recommendations to get your day started? Let's ask Nanny Genie!</h3>
        <div>
          <h4>Here are some daily suggestions:</h4>
          <p><strong>Activities:</strong> {dailySuggestions.activities}</p>
          <p><strong>Meals:</strong> {dailySuggestions.meals}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="log-box"> {/* Apply the box style here */}
        <h4>Still have questions? Ask Nanny Genie below:</h4>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button className="custom-button" type="submit">Submit</button>
      </form>

      <div className="log-box"> {/* Apply the box style here */}
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default GeminiPage;

