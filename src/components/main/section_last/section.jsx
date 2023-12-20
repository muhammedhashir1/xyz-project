import React from "react";
import styles from "./section.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineCloudUpload, MdOutlineEmail } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";

const Section = () => {
  return (
    <div className={styles.section_main_container}>
      <div className={styles.section_main_div_left}>
        <div className={styles.section_main_left}>
          <div className={`${styles.section_free_left} ${styles.section_free_green}`}>Free Forever</div>
          <div className={styles.section_free_starter}>Free Starter</div>
          <p className={styles.section_free_starter_para}>
            The quickest and easiestway to try Protocols with basic functionalities
          </p>
          <div className={`${styles.main_get_btn_left} ${styles.main_get_btn_one}`}>
            Get Started
            <span>
              <IoIosArrowRoundForward />
            </span>
          </div>
        </div>
        <div className={styles.section_main_right}>
          <div className={styles.main_cards_what_section}>What you'll get : </div>
          <div className={styles.main_cards_what_icon}>
            <FaRegUser />
            <span className={styles.main_cards_what_text}>Upto 25 Users</span>
          </div>
          <div className={styles.main_cards_what_icon}>
            <MdOutlineCloudUpload />
            <span className={styles.main_cards_what_text}>Upto 25gb Storage</span>
          </div>
          <div className={styles.main_cards_what_icon}>
            <MdOutlineEmail />
            <span className={styles.main_cards_what_text}>Email Support</span>
          </div>
          <div className={styles.main_cards_what_icon}>
            <TiTick />
            <span className={styles.main_cards_what_text}>
              Basics of Documents,Task flow,voting,banking,notes,investor,director and team management included
            </span>
          </div>
        </div>
      </div>
      <div className={styles.section_main_div_right}>
        <div className={styles.section_main_right}>
          <div className={`${styles.section_free_left} ${styles.section_free_blue}`}>Lets Connect</div>
          <div className={styles.section_free_starter}>Enterprise Plan</div>
          <p className={styles.section_free_starter_para}>
            Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success
          </p>
          <div className={`${styles.main_get_btn_right} ${styles.main_get_btn_two}`}>
            Contact us
            <span>
              <IoIosArrowRoundForward />
            </span>
          </div>
        </div>
        <div className={styles.section_main_right}>
          <div className={styles.main_cards_what_section}>What you'll get : </div>
          <div className={styles.main_cards_what_icon}>
            <FaRegUser />
            <span className={styles.main_cards_what_text}>Upto 25 Users</span>
          </div>
          <div className={styles.main_cards_what_icon}>
            <MdOutlineCloudUpload />
            <span className={styles.main_cards_what_text}>Upto 25gb Storage</span>
          </div>
          <div className={styles.main_cards_what_icon}>
            <MdOutlineEmail />
            <span className={styles.main_cards_what_text}>Email Support</span>
          </div>
          <div className={styles.main_cards_what_icon}>
            <TiTick />
            <span className={styles.main_cards_what_text}>Customization of all other features</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
