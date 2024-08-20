import { useOutletContext, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from '../apis/axios';

const HomePage = () => {
    const { user } = useOutletContext();

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get('/weather/');
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        fetchWeather();
    }, []);

  const navigate = useNavigate();

    return (
        <div id="HomePage">
            <h1>Welcome to Mama Bear</h1>
            <h4>What would you like to do today?</h4>

            {/* Weather Information */}
            <div style={{ position: 'absolute', top: '0px', right: '10px', textAlign: 'right' }}>
                {weatherData ? (
                    <div>
                        <p>Weather in {weatherData.name}: {weatherData.weather[0].description}</p>
                        <p>Temperature: {weatherData.main.temp}°F</p>
                    </div>
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
            {/* Action Buttons */}
            <div className="action-buttons">
                <button className="round-button" onClick={() => navigate('/child-profile')}>View Child Profile</button>
                <button className="round-button" onClick={() => navigate('/add-child-profile')}>Add a Child Profile</button>
            </div>
        </div>
    );
};
  

export default HomePage;
