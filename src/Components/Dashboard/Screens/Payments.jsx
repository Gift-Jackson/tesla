import { useLocation } from "react-router-dom";
import Title from "../Title";
import Wrapper from "../Wrapper";
import Box from "../Box";
import CopyInput from "../CopyInput";
import InputField from "../../Global/InputField";
import styles from "../Styles/payments.module.css";

const btcAddress = "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa";
const usdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const ethAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

const Payments = () => {
  const f = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "medium",
  });
  const location = useLocation();
  const { method, amount } = location.state || { method: "Bitcoin", amount: 0 };
  const getAddress = () => {
    switch (method) {
      case "Bitcoin":
        return btcAddress;
      case "USDT":
        return usdtAddress;
      case "Ethereum":
        return ethAddress;
      default:
        return "";
    }
  };

  return (
    <>
      <Wrapper>
        <Title title="Make Payment" />
        <div className="grid-container">
          <Box subtitle="Payment Info">
            <table style={{ width: "100%" }}>
              <tr>
                <td>Date/ Time:</td>
                <td style={{ textAlign: "right", color: "#fefefe81" }}>
                  {f.format(new Date().getTime())}
                </td>
              </tr>
              <tr>
                <td>Method:</td>
                <td style={{ textAlign: "right", color: "#fefefe81" }}>
                  {method}
                </td>
              </tr>
              <tr>
                <td>Amount:</td>
                <td style={{ textAlign: "right", color: "#fefefe81" }}>
                  ${amount}
                </td>
              </tr>
            </table>
          </Box>
          <Box subtitle={`Copy ${method} Address`}>
            <CopyInput text={getAddress()} />
          </Box>

          <Box subtitle="Upload Proof">
            <form className={styles.form}>
              <InputField
                label="PDF or a screenshot"
                required="true"
                type="file"
                name="proof"
                id="proof"
              />
              <button type="submit">I have made payment</button>
            </form>
          </Box>
        </div>
      </Wrapper>
    </>
  );
};

export default Payments;
