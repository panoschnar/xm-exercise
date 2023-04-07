import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.subTitle}>TRADE WITH</div>
      <p className={styles.title}>
        <b>Zero Swaps</b> on All <br />
        XM Ultra Low Accounts for more than 25 instruments!
      </p>
      <p className={styles.infoText}>
        Enjoy spreads <b>as low as 0.6 pips</b> and
        <b>leverage up to 1000:1</b> on instruments like
        <b>EURUSD, USDJPY, EURJPY, GBPUSD</b>, and <b>Gold</b>.
      </p>
      <button className={styles.primaryBtn}>open account</button>
      <p className={styles.demoText}>
        New to trading? Try a &nbsp; <a>Demo account.</a>
      </p>
      <p className={styles.termsText}>
        Terms and Conditions apply<span>*</span>. To read the full T&Cs,
        <a>click here.</a>
      </p>
    </div>
  );
};

export default Hero;
