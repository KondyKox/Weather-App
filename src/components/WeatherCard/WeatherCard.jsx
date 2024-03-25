import { useEffect, useState } from "react";
import "./WeatherCard.css";

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.VITE_API_KEY}`
        );
        const data = await response.json();

        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div className="weather__card">
      <div></div>
    </div>
  );
};

export default WeatherCard;
