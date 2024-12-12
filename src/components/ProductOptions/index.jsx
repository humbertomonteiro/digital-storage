const ProductOptions = ({ options, shape, text, type }) => {
  return (
    <fieldset>
      <legend>{text}</legend>
      <div className="options">
        {options.map((option, index) => (
          <label key={index}>
            <input type="radio" name={type} value={option} />
            <span className={shape}>{type === "text" ? option : ""}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default ProductOptions;
