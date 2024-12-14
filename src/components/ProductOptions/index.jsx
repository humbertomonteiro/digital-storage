import { useEffect } from "react";
import "./ProductOption.css";
const ProductOptions = ({ options, shape, text, type }) => {
  return (
    <fieldset className="container-Product-options">
      <legend>{text}</legend>
      <div className="options">
        {options.map((option, index) => (
          <label key={index}>
            <input type="radio" name={type} value={option} />
            <span style={{ backgroundColor: option }} className={shape}>
              {type === "text" ? option : ""}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default ProductOptions;
