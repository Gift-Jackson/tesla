import PropTypes from 'prop-types';
import "./input.css";

const SelectField = ({
  label,
  name,
  id,
  onChange,
  value,
  options,
  required,
}) => {
  return (
    <div className="input">
      <label htmlFor={id}>
        {label}
        {required && <span className="red">*</span>}
      </label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="select"
        required={required}
      >
        <option value="" disabled>{`Select ${label}`}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  required: PropTypes.bool,
};

export default SelectField;
