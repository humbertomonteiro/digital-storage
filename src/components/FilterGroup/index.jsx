import "./filtergroup.css";
const FilterGroup = ({ title, inputType, options }) => {
  return (
    <aside className="container-filter-group">
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
