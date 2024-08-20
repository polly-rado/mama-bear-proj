import { useOutletContext } from 'react-router-dom';
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

    return (
        <div id="HomePage">
            <h1>Welcome to Mama Bear</h1>
            <p>
                Enhancing the bond between parents and caregivers with seamless communication and magical coordination
            </p>

            {/* Weather Information */}
            <div style={{ position: 'absolute', top: '80px', right: '10px', textAlign: 'right' }}>
                {weatherData ? (
                    <div>
                        <p>Weather in {weatherData.name}: {weatherData.weather[0].description}</p>
                        <p>Temperature: {weatherData.main.temp}°F</p>
                    </div>
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;
