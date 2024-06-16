import Header from "./Header";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      <div className="wrapper">{children}</div>
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
