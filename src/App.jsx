import { useState } from "react";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import WeatherForm from "./components/WeatherForm/WeatherForm";

const App = () => {
  const [city, setCity] = useState("");
  const [isWeatherCardVisible, setWeatherCardVisible] = useState(false);

  return (
    <>
      <header>
        <h1>Check your weather</h1>
      </header>
      <main>
        <WeatherForm onSubmit={setWeatherCardVisible} onChange={setCity} />
        {isWeatherCardVisible ? <WeatherCard city={city} /> : null}
      </main>
    </>
  );
};

export default App;
