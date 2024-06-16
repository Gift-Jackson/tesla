import PropTypes from "prop-types";
import "./input.css";

const MessageField = ({
  label,
  type,
  placeholder,
  name,
  id,
  onChange,
  value,
  required,
}) => {
  return (
    <div className="input">
      <label htmlFor={id}>
        {label}
        {required && <span className="red">*</span>}
      </label>
      <textarea
        rows="5"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
};

MessageField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default MessageField;
