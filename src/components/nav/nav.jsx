import React, { useState } from "react";
import dashboard from "../../assets/sidebar/dashbord.png";
import perks from "../../assets/sidebar/perks.png";
import addons from "../../assets/sidebar/addon.png";
import faq from "../../assets/sidebar/faq.png";
import support from "../../assets/sidebar/support.png";
import styles from "./nav.module.css";

const Nav = () => {
  const [selectedNav, setSelectedNav] = useState(null);

  const handleNavClick = (index) => {
    setSelectedNav(index);
  };

  return (
    <div className={styles.nav_container}>
      <div
        className={`${styles.nav_btn} ${selectedNav === 0 ? styles.selected : ""}`}
        onClick={() => handleNavClick(0)}
      >
        <img src={dashboard} alt="dashboard" />
        <span>Dashboard</span>
      </div>
      <div
        className={`${styles.nav_btn} ${selectedNav === 1 ? styles.selected : ""}`}
        onClick={() => handleNavClick(1)}
      >
        <img src={perks} alt="dashboard" />
        <span>Perks</span>
      </div>
      <div
        className={`${styles.nav_btn} ${selectedNav === 2 ? styles.selected : ""}`}
        onClick={() => handleNavClick(2)}
      >
        <img src={addons} alt="dashboard" />
        <span>Addons</span>
      </div>
      <div
        className={`${styles.nav_btn} ${selectedNav === 3 ? styles.selected : ""}`}
        onClick={() => handleNavClick(3)}
      >
        <img src={faq} alt="dashboard" />
        <span>FAQ</span>
      </div>
      <div
        className={`${styles.nav_btn} ${selectedNav === 4 ? styles.selected : ""}`}
        onClick={() => handleNavClick(4)}
      >
        <img src={support} alt="dashboard" />
        <span>Support</span>
      </div>
    </div>
  );
};

export default Nav;
