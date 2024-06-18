import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../Box";
import Title from "../Title";
import Wrapper from "../Wrapper";
import btc from "../../../assets/btc.png";
import eth from "../../../assets/eth.png";
import usdt from "../../../assets/usdt.png";
import InputField from "../../Global/InputField";
import styles from "../Styles/deposit.module.css";
import "../Styles/dashboard.css";

const Deposit = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [amount, setAmount] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("../payments/" + selectedMethod, {
      state: { method: selectedMethod, amount: amount },
    });
  };

  return (
    <>
      <Wrapper>
        <Title title="Fund Account" />
        <Box subtitle="Select Payment Method">
          <form onSubmit={handleSubmit}>
            <div className="grid-container">
              <div className={styles.wrapper}>
                <input
                  type="radio"
                  value="Bitcoin"
                  id="btc"
                  checked={selectedMethod === "Bitcoin"}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
                <label htmlFor="btc">
                  <img src={btc} height={40} />
                  <span>Bitcoin</span>
                </label>
              </div>
              <div className={styles.wrapper}>
                <input
                  type="radio"
                  value="USDT"
                  id="usdt"
                  checked={selectedMethod === "USDT"}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
                <label htmlFor="usdt">
                  <img src={usdt} height={40} />
                  <span>USDT</span>
                </label>
              </div>
              <div className={styles.wrapper}>
                <input
                  type="radio"
                  value="Ethereum"
                  id="eth"
                  checked={selectedMethod === "Ethereum"}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
                <label htmlFor="eth">
                  <img src={eth} height={40} />
                  <span>Ethereum</span>
                </label>
              </div>
            </div>
            {selectedMethod && (
              <p className={styles.select}>
                <i className="fa-solid fa-circle-check"></i> {selectedMethod}{" "}
              </p>
            )}

            <div>
              <InputField
                label="Amount"
                type="number"
                name="amount"
                id="amount"
                placeholder="Enter amount you wish to deposit"
                required="true"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <button className={styles.btn} type="submit">Proceed Payment</button>
          </form>
        </Box>
      </Wrapper>
    </>
  );
};

export default Deposit;
