import PropTypes from "prop-types";
import "./Styles/overviewcard.css"
const OverviewCard = ({ amount, label, icon }) => {
  return (
    <>
      <div className="overview-card">
        <div className="overview-content">
          <h2>${amount}</h2>
          <p>
            <small>{label}</small>
          </p>
        </div>
        <div className="overview-icon">
          <span className="material-symbols-rounded">{icon}</span>
        </div>
      </div>
    </>
  );
};

OverviewCard.propTypes = {
  amount: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default OverviewCard;
