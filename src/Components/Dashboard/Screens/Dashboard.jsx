import Title from "../Title";
import Wrapper from "../Wrapper";
import "../Styles/dashboard.css";
import OverviewCard from "../OverviewCard";
import TradingViewWidget from "../TradingViewWidget";
import ActiveInvestment from "../ActiveInvestment";
import Transactions from "../Transactions";
import Box from "../Box";
import {
  Timeline,
  TechnicalAnalysis,
  SymbolOverview,
} from "react-ts-tradingview-widgets";
import CopyInput from "../CopyInput";
const Dashboard = () => {
  document.title = "Tesla Stocks | Dashboard";
  const referralLink = "https://teslastocks.netlify.app/ref/username";
  const account_balance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(350200);
  const raise = 14.55;
  return (
    <>
      <Wrapper>
        <Title title="Overview" />
        <div className="box">
          <div className="balance-card">
            <p>
              <small>ACCOUNT BALANCE</small>
            </p>
            <h2>{account_balance}</h2>
            <p>
              <small>
                <span className="green">
                  <i className="fa-solid fa-arrow-up"></i> Up by ${raise}
                </span>{" "}
                since you began investing
              </small>
            </p>
          </div>

          <div className="grid-container main">
            <OverviewCard
              amount={"625,300"}
              label="TOTAL DEPOSIT"
              icon="account_balance_wallet"
            />
            <OverviewCard
              amount={"5,600"}
              label="TOTAL PROFIT"
              icon="trending_up"
            />
            <OverviewCard
              amount={"12,772"}
              label="TOTAL BONUS"
              icon="request_quote"
            />
            <OverviewCard
              amount={"275,100"}
              label="WITHDRAWALS"
              icon="credit_score"
            />
          </div>

          
        </div>
        <Box title="Real Time Chart">
          <TradingViewWidget />
        </Box>

        <ActiveInvestment />
        <Transactions />
        <div className="grid-container">
          <Box>
            <SymbolOverview
              colorTheme="dark"
              symbols="TSLA"
              width="100%"
              chartType="candlesticks"
              downColor="#800080"
              borderDownColor="#800080"
              wickDownColor="#800080"
              isTransparent="true"
            />
          </Box>
          <Box>
            <Timeline
              colorTheme="dark"
              feedMode="all_symbol"
              isTransparent="true"
              market="crypto"
              height={400}
              width="100%"
            />
          </Box>
        </div>
        <Box>
          <TechnicalAnalysis
            symbol="TSLA"
            isTransparent="true"
            colorTheme="dark"
            width="100%"
          />
        </Box>
        <Box title="Refer Us & Earn" subtitle="Use the link below to invite your friends.">
            <CopyInput referralLink={referralLink}/>
        </Box>
      </Wrapper>
    </>
  );
};

export default Dashboard;
