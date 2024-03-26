import { useState } from "react";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import WeatherForm from "./components/WeatherForm/WeatherForm";

const App = () => {
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isWeatherCardVisible, setWeatherCardVisible] = useState(false);
  const api_key = "2cf27d9a8473b2f09a7f5944b007e471";

  const getCoordinates = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api_key}`
      );
      const data = await response.json();

      setLatitude(data[0].lat);
      setLongitude(data[0].lon);
    } catch (error) {
      console.error(error);
    }
  };

  const getCurrentLocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header>
        <h1>Check your weather</h1>
      </header>
      <main>
        <WeatherForm
          onSubmit={setWeatherCardVisible}
          onChange={setCity}
          getCoordinates={getCoordinates}
          getCurrentLocation={getCurrentLocation}
        />
        {isWeatherCardVisible ? (
          <WeatherCard lat={latitude} lon={longitude} />
        ) : null}
      </main>
    </>
  );
};

export default App;
