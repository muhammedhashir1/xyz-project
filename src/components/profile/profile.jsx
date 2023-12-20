import React from "react";
import profile from "../../assets/sidebar/profile.png";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile_container}>
      <img src={profile} alt="profile" />

      <div className={styles.profilename_div}>
        <div className={styles.profile_name}>
          Ram Mohan
          <span>
            <IoIosArrowForward />
          </span>
        </div>

        <div className={styles.email_id}>rammohan2@gmail.com</div>
      </div>
    </div>
  );
};

export default Profile;
