import React from "react";
import styles from "./Footer.module.css";
import {
  MetaQuoteslogo,
  InvestorsLogo,
  UnicefLogo,
  VerisignLogo,
  TradingPointLogo,
} from "../../../public/img/companyLogosIndex";
import {
  fbIcon,
  instaIcon,
  linkedInIcon,
  tweeterIcon,
  youtubeIcon,
} from "./SocialIcons";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.upperBox}>
        <div className={styles.logosBox}>
          {MetaQuoteslogo} {VerisignLogo} {UnicefLogo} {InvestorsLogo}
        </div>
        <div className={styles.socialBox}>
          <p>Follow us on</p> {fbIcon} {tweeterIcon} {youtubeIcon} {instaIcon}
          {linkedInIcon}
        </div>
      </div>
      <div className={styles.bottomBox}>
        <div>
          <a>Privacy Policy</a> | <a>Cookie Policy</a> |
          <a>Terms and Conditions</a>
        </div>
        {TradingPointLogo}
      </div>
    </div>
  );
};
export default Footer;
