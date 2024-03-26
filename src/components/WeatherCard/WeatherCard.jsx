import { useEffect, useState } from "react";
import "./WeatherCard.css";

const WeatherCard = ({ lat, lon }) => {
  const [weatherData, setWeatherData] = useState(null);
  const api_key = "2cf27d9a8473b2f09a7f5944b007e471";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
        );
        const data = await response.json();

        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (lat !== null && lon !== null) fetchWeatherData();
  }, [lat, lon]);

  const getWeatherEmoji = (id) => {
    switch (true) {
      case id >= 200 && id < 300:
        return "⛈️";
      case id >= 300 && id < 400:
        return "🌧️";
      case id >= 500 && id < 600:
        return "🌧️";
      case id >= 600 && id < 700:
        return "❄️";
      case id >= 700 && id < 800:
        return "🌫️";
      case id === 800:
        return "☀️";
      case id >= 801 && id < 810:
        return "☁️";
      default:
        return "❓";
    }
  };

  return (
    <div className="weather__card">
      <h2 className="weather__title">{weatherData?.name ?? "Loading..."}</h2>
      <p className="weather__temp">
        {(weatherData?.main?.temp - 273.15).toFixed()}°C
      </p>
      <p className="weather__humidity">
        Humidity: {weatherData?.main?.humidity ?? "Loading..."}
      </p>
      <p className="weather__description">
        {weatherData?.weather?.[0]?.description ?? "Loading..."}
      </p>
      <p className="weather__emoji">
        {getWeatherEmoji(weatherData?.weather?.[0]?.id)}
      </p>
    </div>
  );
};

export default WeatherCard;
