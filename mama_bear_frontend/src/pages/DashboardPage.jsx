import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import '../styles/DashboardPage.css';

function DashboardPage() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get('weather/');
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        fetchWeather();
    }, []);

    return (
        <div className="dashboard-page">
          <h1>Dashboard</h1>
          {weatherData ? (
            <div className="weather-info">
              <p>Weather in {weatherData.name}: {weatherData.weather[0].description}</p>
              <p>Temperature: {weatherData.main.temp}°F</p>
            </div>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
      );
    }
    
    export default DashboardPage;

