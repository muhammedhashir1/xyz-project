import React from "react";
import notif from "../../assets/right/bell.png";
import save from "../../assets/right/save.png";
import styles from "./notification.module.css";

const Notification = () => {
  return (
    <div className={styles.notification_container}>
      <div className={styles.notf_div}>
        <img src={notif} alt="notif" />
      </div>
      <div className={styles.save_div}>
        <img src={save} alt="save" />
      </div>
    </div>
  );
};

export default Notification;
