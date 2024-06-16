import PropTypes from "prop-types"


const AuthTitle = ({ title = "Title", subtitle = "Subtitle" }) => {
  return (
    <>
      <div className="auth-title">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </>
  );
};

AuthTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default AuthTitle;
