import { plans } from "../../../Constants/data";
import Box from "../Box";
import Plans from "../Packages/Plans";
import Title from "../Title";
import Wrapper from "../Wrapper";
import "../Styles/dashboard.css"

const Packages = () => {
  return (
    <>
      <Wrapper>
        <Title title="Investment Plans" />
        <Box
          title="Choose a plan"
          subtitle="Make your money work for you and earn profits by investing in our world-class auto-trading packages."
        >
          <div className="grid-container">
            {plans.map((plan, index) => (
              <Plans key={index} {...plan} />
            ))}
          </div>
        </Box>
      </Wrapper>
    </>
  );
};

export default Packages;
