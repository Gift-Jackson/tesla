import { Link } from "react-router-dom";
import Box from "../Box";
import styles from "../Styles/investment.module.css";
import btc from "../../../assets/btc.png";
import eth from "../../../assets/eth.png";
import usdt from "../../../assets/usdt.png";
import { useState } from "react";
const investments = [
  {
    image: btc,
    label: "Bitcoin",
    amount: 20000,
    percentage: 10,
  },
  {
    image: eth,
    label: "Ethereum",
    amount: 20000,
    percentage: 10,
  },
  {
    image: usdt,
    label: "USDT",
    amount: 20000,
    percentage: 10,
  },
];
const ActiveInvestment = () => {
  const [activeInvestment] = useState(false);

  return (
    <>
      <Box title="Active Investments">
        <div className={styles.container}>
          {activeInvestment ? (
            <div className={styles.not_active}>
              <p>You do not have an active investment at the moment.</p>
              <Link to="../packages">
                <button className={styles.btn}>
                  <span>Invest Now</span>
                  <span className="material-symbols-rounded">monitoring</span>
                </button>
              </Link>
            </div>
          ) : (
            <div className={styles.active}>
              <ul className={styles.lists}>
                {investments.map((item, index) => (
                  <li key={index} className={styles.list}>
                    <div className={styles.img}>
                      <img src={item.image} alt={item.label} />
                    </div>
                    <div className={styles.body}>
                      <p>{item.label}</p>
                      <h3>
                        {new Intl.NumberFormat("en-US").format(item.amount)}
                      </h3>
                    </div>

                    <p>
                      <small className="green">
                        <i className="fa-solid fa-arrow-up"></i>
                        {item.percentage}%
                      </small>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Box>
    </>
  );
};

export default ActiveInvestment;
