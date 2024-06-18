import Title from "../Title";
import Wrapper from "../Wrapper";
import "../Styles/settings.css";
import Box from "../Box";
import InputField from "../../Global/InputField";
import MessageField from "../../Global/MessageField";
import { useState } from "react";

const Settings = () => {
  const [changeTab, setChangeTab] = useState(false);

  const profileTab = () => {
    setChangeTab(false);
  };
  const passwordTab = () => {
    setChangeTab(true);
  };
  return (
    <Wrapper>
      <Title title="Account Settings" />

      <div className="tab-buttons">
        <button onClick={profileTab}  className={`tab-button-1 ${!changeTab ? 'active' : ''}`} >
          <i className="fa-regular fa-user"></i> Profile
        </button>
        <button onClick={passwordTab} className={`tab-button-2 ${changeTab ? 'active' : ''}`}>
          <i className="fa-solid fa-key"></i> Password
        </button>
      </div>

      {changeTab ? (
        <>
          <Box title="Change Password">
            <form>
              <InputField
                label="Current Passsord"
                type="password"
                name="current-password"
                id="current-password"
                placeholder="Enter your current password"
                required="true"
              />
              <InputField
                label="New Password"
                type="password"
                name="new-password"
                id="new-password"
                placeholder="Enter your new password"
                required="true"
              />
              <InputField
                label="Confirm Password"
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm your new password"
                required="true"
              />
              <button type="submit" className="update-btn">
                Change Password
              </button>
            </form>
          </Box>
        </>
      ) : (
        <>
          <Box title="Profile Info" subtitle="Update profile information">
            <form>
              <InputField
                label="Full Name"
                type="text"
                required="true"
                name="fullname"
                id="fullname"
                value="Gift Jackson"
              />
              <InputField
                label="E-mail"
                type="email"
                name="email"
                value="giftjackson@gmail.com"
                id="email"
                required="true"
              />
              <InputField
                label="Phone Number"
                type="number"
                name="phonenumber"
                id="number"
                value="08137411338"
                required="true"
              />
              <InputField
                label="Date of Birth"
                type="date"
                name="dob"
                id="dob"
                required="true"
              />
              <InputField
                label="Country"
                type="text"
                name="country"
                id="country"
                value="United States of Abia"
              />
              <MessageField
                label="Residential Address (optional)"
                type="message"
                name="address"
                id="msg"
                placeholder="Enter your Business/ Residential address"
              />
              <button type="submit" className="update-btn">
                Update Profile
              </button>
            </form>
          </Box>
        </>
      )}
    </Wrapper>
  );
};

export default Settings;
