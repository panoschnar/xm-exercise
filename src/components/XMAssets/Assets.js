import React from "react";
import styles from "./Assets.module.css";
import lighting from "../../../public/img/fast-execusion-icon.png";
import compPriceIcon from "../../../public/img/competitive-pricing-icon.png";
import techIcon from "../../../public/img/tech-icon.png";
import dollarIcon from "../../../public/img/dollar-icon.png";
import Image from "next/image";
const assetsArray = [
  {
    id: 1,
    title: "Superior Trade Execution",
    icon: lighting,
    text: "99% of trades are executed in less than a second, with no requotes or rejections.",
  },
  {
    id: 2,
    title: "Competitive Pricing",
    icon: compPriceIcon,
    text: "We offer some of the lowest spreads and we don't charge commissions.",
  },
  {
    id: 3,
    title: "Advanced Technology",
    icon: techIcon,
    text: "Trade on MT4 or MT5, with expert tools, across desktop, web and mobile.",
  },
  {
    id: 4,
    title: "Start with $5",
    icon: dollarIcon,
    text: "Start trading your preferred instruments with as little as a $5 minimum deposit.",
  },
];
const Assets = () => {
  return (
    <div className={styles.assetsContainer}>
      <p className={styles.title}>
        Why <b> Trade </b> with XM?
      </p>
      <div className={styles.lineDivider}></div>
      <p className={styles.infoText}>
        We have been providing traders around the world with the same
        <b>premium experience </b>for over a decade. As an
        <b>industry-leader</b>, we know what the modern trader needs to be
        <b>successful</b> in the markets.
      </p>
      <div className={styles.container}>
        <div className={`${styles.item} ${styles.item1}`}>
          <div className={styles.assetHeader}>
            <p>{assetsArray[0].title}</p>
            <Image
              className={`${styles.icon} ${styles.hideIcon}`}
              src={assetsArray[0].icon}
              alt={assetsArray[0].title}
              priority
            />
          </div>
          <div className={styles.lineDivider}></div>
          <p className={styles.assetText}>{assetsArray[0].text}</p>
          <Image
            className={styles.iconLarge}
            src={assetsArray[0].icon}
            alt={assetsArray[0].title}
            priority
          />
        </div>
        <div className={`${styles.item} ${styles.item2}`}>
          <div className={styles.assetHeader}>
            <p>{assetsArray[1].title}</p>
            <Image
              className={styles.icon}
              src={assetsArray[1].icon}
              alt={assetsArray[1].title}
              priority
            />
          </div>
          <div className={styles.lineDivider}></div>
          <p className={styles.assetText}>{assetsArray[1].text}</p>
        </div>
        <div className={`${styles.item} ${styles.item3}`}>
          <div className={styles.assetHeader}>
            <p>{assetsArray[2].title}</p>
            <Image
              className={styles.icon}
              src={assetsArray[2].icon}
              alt={assetsArray[2].title}
              priority
            />
          </div>
          <div className={styles.lineDivider}></div>
          <p className={styles.assetText}>{assetsArray[2].text}</p>
        </div>
        <div className={`${styles.item} ${styles.item4}`}>
          <div className={styles.assetHeader}>
            <p>{assetsArray[3].title}</p>
            <Image
              className={styles.icon}
              src={assetsArray[3].icon}
              alt={assetsArray[3].title}
              priority
            />
          </div>
          <div className={styles.lineDivider}></div>
          <p className={styles.assetText}>{assetsArray[3].text}</p>
        </div>
      </div>
    </div>
  );
};
export default Assets;
