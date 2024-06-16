import PropTypes from "prop-types";
import { useState } from "react";
import "./input.css";

const InputField = ({
  label,
  type,
  placeholder,
  name,
  id,
  onChange,
  value,
  required,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="input">
      <label htmlFor={id}>
        {label}
        {required && <span className="red">*</span>}
      </label>
      <div className="field">
        <input
          type={isPasswordVisible ? "text" : type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete="off"
        />
        {type === "password" && (
          <span
            onClick={togglePasswordVisibility}
            className="material-symbols-rounded"
          >
            {isPasswordVisible ? "visibility" : "visibility_off"}
          </span>
        )}
      </div>
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default InputField;
