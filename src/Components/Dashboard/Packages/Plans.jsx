import { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/favicon.png';
import styles from '../Styles/plans.module.css';

const Plans = ({ plan, min, max, time }) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const f = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const investmentAmount = parseFloat(amount);

    if (investmentAmount < min || investmentAmount > max) {
      setError(`Please enter an amount between ${f.format(min)} and ${f.format(max)}.`);
      return;
    }
    if (!investmentAmount) {
      setError("Please enter an amount first!")
      return;
    }

    setError('');
    // Alex Perform the investment logic here...I don taya 😑
    console.log('Investment successful:', investmentAmount);
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.image}>
          <img src={logo} height={40} alt="Tesla Logo" />
        </div>
        <p><b>TESLA, INC - {plan}</b></p>
      </div>

      <div className={styles.middle}>
        <div>
          <p><small>Minimum Amount:</small></p>
          <p><b>{f.format(min)}</b></p>
        </div>
        <div>
          <p><small>Maximum Amount:</small></p>
          <p><b>{f.format(max)}</b></p>
        </div>
        <div>
          <p><small>Duration:</small></p>
          <p><b>{time} Days</b></p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p><b>Amount to Invest ($)</b></p>
        {error && <p className={styles.error}>{error}</p>}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="number"
            value={amount}
            onChange={handleChange}
            placeholder="Enter Amount"
          />
          <button className={styles.btn} type="submit">Invest</button>
        </form>
        
      </div>
    </div>
  );
};

Plans.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  plan: PropTypes.string.isRequired,
};

export default Plans;
