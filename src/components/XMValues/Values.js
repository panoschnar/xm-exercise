import React from "react";
import styles from "./Values.module.css";
import { AuthIcon, HumansIcon, SupportIcon, TrophieIcon } from "./ValuesIcons";

const Values = () => {
  return (
    <div className={styles.valuesContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.firstCol}>
          <div className={styles.redLine}></div>
          <div className={styles.bigTitle}>
            <div>
              Big<span>.</span>
            </div>
            <div>
              Fair<span>.</span>
            </div>
          <div>
          Human<span>.</span>
          </div>
          </div>
          <p>
            Learn why <b>over 5 million clients choose XM </b>as their trusted
            online broker.
          </p>
        </div>
        <div className={styles.secondCol}>
          <div className={styles.col}>
            <div className={styles.authBox}>
              <div>{AuthIcon}</div>
              <h3 className={styles.boxTitle}>Authorised and Regulated</h3>
              <p className={styles.boxText}>
                At XM, we adhere to all regulatory standards and are fully
                authorised and regulated by FSC.
              </p>
            </div>
            <div className={styles.committedBox}>
              <div>{HumansIcon}</div>
              <h3 className={styles.boxTitle}>Committed and Fair</h3>
              <p className={styles.boxText}>
                We operate with complete transparency and adhere to the highest
                professional and ethical standards.
              </p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.awardBox}>
              <div>{TrophieIcon}</div>
              <h3 className={styles.boxTitle}>Multi-Award-Winning</h3>
              <p className={styles.boxText}>
                Over the years we have received over 40 awards for the quality
                of our products and services.
              </p>
            </div>
            <div className={styles.supportBox}>
              {" "}
              <div>{SupportIcon}</div>
              <h3 className={styles.boxTitle}>24/7 Support</h3>
              <p className={styles.boxText}>
                Our support agents are on hand 24/7 to answer your questions or
                assist you with any issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Values;
