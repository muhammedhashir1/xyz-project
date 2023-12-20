// Header.js

import React from "react";
import xyz from "../../assets/header/xyz.png";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_company_div}>
        <div className={styles.header_company}>
          <img src={xyz} alt="xyz" />
          <span>XYZ Enterprises Pvt. Ltd</span>
        </div>
        <div className={styles.header_company_arrow}>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
