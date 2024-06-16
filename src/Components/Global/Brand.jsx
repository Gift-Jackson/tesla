import logo from "../../assets/logo.png";
import PropTypes from "prop-types"
const Brand = ({size}) => {
  return (
    <>
      <a href="/">
        <div className="brand">
          <img src={logo} height={size} alt="Tesla Logo" />
        </div>
      </a>
    </>
  );
};

Brand.propTypes = {
  size: PropTypes.number.isRequired,
}

export default Brand;
