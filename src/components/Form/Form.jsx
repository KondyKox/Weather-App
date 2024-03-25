import "./Form.css";
import Button from "../Button/Button";
import { useState } from "react";

const Form = () => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="Enter city..."
        onChange={(e) => setCity(e.target.value)}
      />
      <Button />
    </form>
  );
};

export default Form;
