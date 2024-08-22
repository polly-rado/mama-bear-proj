import React, { useState, useEffect } from 'react';
import { getGeminiResponse, getDailySuggestions } from '../apis/gemini';
import '../styles/LogBox.css';  
import { marked } from 'marked'; 

function GeminiPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [dailySuggestions, setDailySuggestions] = useState({
    activities: '',
    meals: ''
  });

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
      <div className="log-box">
        <h3>Need recommendations to get your day started? Let's ask Nanny Genie!</h3>
        <div className="suggestions-container">
          <div className="suggestion-box">
            <h4>Daily Activity Ideas:</h4>
            <div dangerouslySetInnerHTML={{ __html: marked(dailySuggestions.activities) }} />
          </div>
          <div className="suggestion-box">
            <h4>Daily Meal Suggestions:</h4>
            <div dangerouslySetInnerHTML={{ __html: marked(dailySuggestions.meals) }} />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="log-box">
        <h4>Still have questions? Ask Nanny Genie below:</h4>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button className="custom-button" type="submit">Submit</button>
      </form>

      <div className="log-box">
        <h2>Response:</h2>
        <div className="suggestion-box" dangerouslySetInnerHTML={{ __html: marked(response) }} />
      </div>
    </div>
  );
}

export default GeminiPage;

