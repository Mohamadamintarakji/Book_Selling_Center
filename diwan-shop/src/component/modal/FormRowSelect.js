const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  let result = (itemValue) => {
    if (name === "categories") return itemValue.categoryName;
  };
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        onClick={handleChange}
        className="form-select"
      >
        <option>select</option>
        {list.map((itemValue, index) => {
          return (
            itemValue.elementState === true && (
              <option key={index} value={result(itemValue)}>
                {result(itemValue)}
              </option>
            )
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
