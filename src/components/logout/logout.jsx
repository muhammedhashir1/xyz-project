import React from "react";
import logout from "../../assets/sidebar/logout.png";
import styles from "./logout.module.css";

const Logout = () => {
  return (
    <div className={styles.logout_container}>
      <span className={styles.logout_text}>Logout</span>
      <img src={logout} alt="logout" className={styles.logout_image} />
    </div>
  );
};

export default Logout;
