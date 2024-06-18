import { Link } from "react-router-dom"
import Box from "../Box"
import Title from "../Title"
import Wrapper from "../Wrapper"
import CopyInput from "../CopyInput"
import styles from "../Styles/referral.module.css"
import "../Styles/dashboard.css"
const Referrals = () => {
    const referralLink = "https://teslastocks.netlify.app/ref/username";
  return (
      <>
          <Wrapper>
              <Title title="Referrals" />
              <div className="grid-container">
                  <Box title="Referral Bonus">
                      <div className={styles.container}>
                          <h2>$2,000.00</h2>
                          <Link to="../withdraw">
                          <button className={styles.btn}>Withdraw</button>
                          </Link>
                      </div>
                  </Box>
                  <Box title="Refer & Earn" subtitle="Earn more commissions by inviting your friends to join.">
                      <CopyInput text={referralLink} />
                  </Box>
              </div>
          </Wrapper>
      </>
  )
}

export default Referrals