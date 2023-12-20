import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineCloudUpload } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./section_first.module.css";

const Section_first = () => {
  return (
    <div className={styles.main_cards_section}>
      <div className={styles.main_cards}>
        <div className={styles.main_cards_name}>Basic</div>
        <small className={styles.main_cards_old_price}>$ 89.99/mo</small>
        <div className={styles.main_cards_new_price}>$ 9.99/mo</div>
        <div className={styles.main_cards_btns}>
          <div className={`${styles.main_get_btn} ${styles.main_get_btn_one}`}>
            Get Starts
            <span className={styles.main_cards_btns_icon}>
              <IoIosArrowRoundForward />
            </span>
          </div>
        </div>
        <hr />
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
        <div className={styles.main_cards_explore}>EXPLORE FEATURES</div>
      </div>
      <div className={styles.main_cards}>
        <div className={styles.main_cards_name}>Standard</div>
        <small className={styles.main_cards_old_price}>$ 189.99/mo</small>
        <div className={styles.main_cards_new_price}>$ 99.99/mo</div>
        <div className={styles.main_cards_btns}>
          <div className={`${styles.main_get_btn} ${styles.main_get_btn_two}`}>
            Get Starts
            <span className={styles.main_cards_btns_icon}>
              <IoIosArrowRoundForward />
            </span>
          </div>
        </div>
        <hr />
        <div className={styles.main_cards_what_section}>What you'll get : </div>
        <div className={styles.main_cards_what_icon}>
          <FaRegUser />
          <span className={styles.main_cards_what_text}>Upto 50 Users</span>
        </div>
        <div className={styles.main_cards_what_icon}>
          <MdOutlineCloudUpload />
          <span className={styles.main_cards_what_text}>Upto 60gb Storage</span>
        </div>
        <div className={styles.main_cards_what_icon}>
          <MdOutlineEmail />
          <span className={styles.main_cards_what_text}>Email+Chat Support</span>
        </div>
        <div className={styles.main_cards_explore}>EXPLORE FEATURES</div>
      </div>
      <div className={styles.main_cards}>
        <div className={styles.main_cards_name}>Premium</div>
        <small className={styles.main_cards_old_price}>$ 389.99/mo</small>
        <div className={styles.main_cards_new_price}>$ 199.99/mo</div>
        <div className={styles.main_cards_btns}>
          <div className={`${styles.main_get_btn} ${styles.main_get_btn_three}`}>
            Get Starts
            <span className={styles.main_cards_btns_icon}>
              <IoIosArrowRoundForward />
            </span>
          </div>
        </div>
        <hr />
        <div className={styles.main_cards_what_section}>What you'll get : </div>
        <div className={styles.main_cards_what_icon}>
          <FaRegUser />
          <span className={styles.main_cards_what_text}>Upto 75 Users</span>
        </div>
        <div className={styles.main_cards_what_icon}>
          <MdOutlineCloudUpload />
          <span className={styles.main_cards_what_text}>Upto 100gb Storage</span>
        </div>
        <div className={styles.main_cards_what_icon}>
          <MdOutlineEmail />
          <span className={styles.main_cards_what_text}>Email+Chat+Whatsapp Support</span>
        </div>
        <div className={styles.main_cards_explore}>
          <a href="">EXPLORE FEATURES</a>
        </div>
      </div>
    </div>
  );
};

export default Section_first;
