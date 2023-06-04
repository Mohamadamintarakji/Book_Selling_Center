const FormRow = ({ type, name, value, handleChange, selected }) => {
  // if (value === []) return value === false;
  // console.log(state);
  return (
    <div
      className={type === "checkbox" ? "form-check form-switch" : "form-row"}
    >
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        className={type === "checkbox" ? "form-check-input" : "form-control"}
        multiple={type === "file" ? true : false}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        checked={type === "checkbox" ? value : null}
        // checked={list.filter((i) => i === value) ? true : false}
      />
    </div>
  );
};

export default FormRow;
