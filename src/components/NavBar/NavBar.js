import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../../public/img/logo.svg";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Image
        className={styles.logo}
        src={logo}
        alt="XM Logo"
        width={140}
        height={50}
        priority
      />
      <div className={styles.navLinks}>
        <a>XM Homepage</a> <a>Support</a>
      </div>
    </div>
  );
};
export default NavBar;
