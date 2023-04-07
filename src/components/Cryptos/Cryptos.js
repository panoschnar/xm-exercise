import React, { Fragment, useState, useEffect } from "react";
import styles from "./Cryptos.module.css";
import {
  faCircleChevronUp,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
const Cryptos = () => {
  const [cryptoData, setCryptoData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.coinlore.net/api/tickers/");
      setCryptoData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.cryptosContainer}>
      {cryptoData ? (
        cryptoData.data.slice(0, 5).map((item, idx) => (
          <div key={idx} className={styles.cryptoBox}>
            <div className={styles.cryptoBoxHeader}>
              <svg
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_9_1072)">
                  <path
                    d="M29.0219 29.8739C35.6608 23.0397 35.6608 11.9593 29.0219 5.12515C22.383 -1.70902 11.6192 -1.70902 4.98028 5.12515C-1.65863 11.9593 -1.65863 23.0397 4.98028 29.8739C11.6192 36.708 22.383 36.708 29.0219 29.8739Z"
                    fill="#F7931A"
                  />
                  <path
                    d="M24.1411 13.1202C23.5155 12.1939 22.5068 11.5732 20.8137 11.0809L20.7876 11.0727L21.6807 7.77922L19.9603 7.28222L19.0672 10.5827C18.5515 10.4392 17.9826 10.2806 17.4216 10.1312L18.3283 6.80739L16.6067 6.30688L15.6899 9.63539C15.0756 9.48372 12.1765 8.59472 12.1765 8.59472L11.6189 10.5151L13.8267 11.2069L11.1837 20.9042L8.99526 20.2217L8.43652 22.1806C8.43652 22.1806 11.3209 23.1046 11.9703 23.3274L11.0489 26.6746L12.7693 27.1716L13.6703 23.8711C14.2369 24.0601 14.8138 24.2211 15.3091 24.3809L14.4013 27.6569L16.1217 28.1539L17.0079 24.9269C18.9176 25.4274 20.3626 25.4064 21.4279 24.8464C21.8825 24.5987 22.2823 24.2567 22.6022 23.8421C22.9221 23.4275 23.1551 22.9491 23.2866 22.4372C23.8431 20.4154 22.678 18.9174 21.5197 18.2372L21.5322 18.1987C23.0565 18.0704 24.2103 17.1616 24.5707 15.8491C24.8676 14.7711 24.6795 13.8401 24.1411 13.1202ZM18.8791 20.9614C18.5538 22.1432 17.374 22.7371 15.7624 22.2716L14.3854 21.8691L15.4643 17.9292C15.9317 17.9729 16.3935 18.066 16.8425 18.2069C18.377 18.6572 19.2746 19.5276 18.8791 20.9614ZM20.5541 15.2739C20.4726 15.5932 20.3117 15.8853 20.0874 16.1213C19.8631 16.3574 19.583 16.5293 19.2746 16.6202C18.7714 16.7894 18.1481 16.7906 17.4443 16.5852H17.4329L16.0627 16.1862L17.1451 12.2464C17.6114 12.2917 18.072 12.3859 18.5198 12.5276C18.5266 12.5276 18.5311 12.5276 18.5379 12.5276C19.227 12.7329 19.7846 13.0199 20.1541 13.4049C20.6029 13.8751 20.7717 14.4922 20.5541 15.2739Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_1072">
                    <rect width="34" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className={styles.symbolText}>{item.symbol}</p>
              <div>{item.name}</div>
            </div>
            <hr className={styles.line} />
            <p className={styles.cryptoPrice}>$ {item.price_usd}</p>
            <div
              className={`${styles.rateBox} ${
                item.percent_change_24h > 0 ? styles.rateUp : styles.rateDown
              }`}
            >
              {item.percent_change_24h > 0 ? (
                <FontAwesomeIcon
                  className={styles.chevron}
                  icon={faCircleChevronUp}
                />
              ) : (
                <FontAwesomeIcon
                  className={styles.chevron}
                  icon={faCircleChevronDown}
                />
              )}
              <p>{item.percent_change_24h}%</p>
            </div>
          </div>
        ))
      ) : (
        <div>No Data to display</div>
      )}
    </div>
  );
};
export default Cryptos;
