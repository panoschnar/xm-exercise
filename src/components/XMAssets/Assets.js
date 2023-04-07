import React from "react";
import styles from "./Assets.module.css";
import lighting from "../../../public/img/fast-execusion-icon.png";
import compPriceIcon from "../../../public/img/competitive-pricing-icon.png"
import techIcon from "../../../public/img/tech-icon.png"
import dollarIcon from "../../../public/img/dollar-icon.png"
import Image from "next/image";

const assetsArray = [
  {
    title: "Superior Trade Execution",
    icon:  lighting,
    text: "99% of trades are executed in less than a second, with no requotes or rejections.",
  },
  {
    title: "Competitive Pricing",
    icon:  compPriceIcon,
    text: "We offer some of the lowest spreads and we don’t charge commissions.",
  },
  {
    title: "Advanced Technology",
    icon:  techIcon,
    text: "Trade on MT4 or MT5, with expert tools, across desktop, web and mobile.",
  },
  {
    title: "Start with $5",
    icon:  dollarIcon,
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
        We have been providing traders around the world with the same{" "}
        <b>premium experience </b>for over a decade. As an{" "}
        <b>industry-leader</b>, we know what the modern trader needs to be{" "}
        <b>successful</b> in the markets.
      </p>
      <div className={styles.assetsBoxesContainer}>
      {assetsArray && assetsArray.map(asset =>(
                <div className={styles.assetBox}>
                <div className={styles.assetHeader}>
                  <p>{asset.title}</p>
                  <Image
                    className={styles.icon}
                    src={asset.icon}
                    alt= {asset.title}
                    priority
                  />
                </div>
                <div className={styles.lineDivider}></div>
      
                <p className={styles.assetText}>
                  {asset.text}
                </p>
              </div>
                ))}
        
      </div>
    </div>
  );
};

export default Assets;
