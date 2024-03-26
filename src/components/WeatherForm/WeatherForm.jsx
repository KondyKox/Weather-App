import "./WeatherForm.css";

const WeatherForm = ({
  onSubmit,
  onChange,
  getCoordinates,
  getCurrentLocation,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(true);
  };

  const handleGetCoordinates = () => {
    getCoordinates();
  };

  const handleGetCurrentLocation = () => {
    getCurrentLocation();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="enter__city">
        <input
          className="form__input"
          type="text"
          placeholder="Enter city..."
          onChange={(e) => onChange(e.target.value)}
        />
        <button className="btn" onClick={handleGetCoordinates}>
          <img src="./search.svg" alt="Search" />
        </button>
      </div>
      <div className="current__location">
        <button className="btn" onClick={handleGetCurrentLocation}>
          Check for your location
        </button>
      </div>
    </form>
  );
};

export default WeatherForm;
