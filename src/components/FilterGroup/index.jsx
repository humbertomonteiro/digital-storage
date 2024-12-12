const FilterGroup = ({ title, inputType, options }) => {
  return (
    <aside>
      <h3>{title}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input type={inputType} value={option.value} />
              {option.text}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FilterGroup;
