import React from "react";
import logo from "../../assets/sidebar/ss.png";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <header className={styles.logo_container}>
      <img src={logo} alt="logo" className={styles.logo_image} />
    </header>
  );
};

export default Logo;
