import "./WeatherForm.css";
import Button from "../Button/Button";

const WeatherForm = ({ onSubmit, onChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="Enter city..."
        onChange={(e) => onChange(e.target.value)}
      />
      <Button />
    </form>
  );
};

export default WeatherForm;
