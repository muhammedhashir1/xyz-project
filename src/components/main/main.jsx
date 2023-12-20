import React from "react";
import styles from "./main.module.css";
import Section from "./section_last/section";
import Section_first from "./section_first/section_first";

const Main = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_section}>
        <div className={styles.main_heading}>Choose a plan that's just right for you!</div>

        <div className={styles.monthly_annually}>
          <div className={styles.monthly_annually_sec}>
            <div className={styles.monthly}>Monthly</div>
            <div className={styles.annually}>Annually</div>
          </div>
        </div>
        <Section_first />
        <Section />
        <div className={styles.importent}>
          <p>*some uniquefeatures are provided ass add-ons with individual plans for each features</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
