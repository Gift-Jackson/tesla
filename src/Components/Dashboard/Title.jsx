import "./Styles/title.css";
import PropTypes from "prop-types";
const Title = ({ title = "Title" }) => {
  return (
    <div className="layout-title">
      <h2>{title}</h2>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
