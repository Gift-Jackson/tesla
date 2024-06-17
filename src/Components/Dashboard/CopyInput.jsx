import { useState } from "react";
import styles from "./Styles/copyinput.module.css";
import PropTypes from "prop-types";

const CopyInput = ({ referralLink }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className={styles.container}>
      <input type="text" value={referralLink} readOnly />
      <button className={styles.btn} onClick={copyToClipboard}>
        {copied ? (
          <>
            <i className="fa-solid fa-check"></i> Copied
          </>
        ) : (
          <>
            <i className="fa-regular fa-clone"></i> Copy
          </>
        )}
      </button>
    </div>
  );
};

CopyInput.propTypes = {
  referralLink: PropTypes.string.isRequired,
};

export default CopyInput;
