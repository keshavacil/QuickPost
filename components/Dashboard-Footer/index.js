import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faComments, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";

const DashoardFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        <p>2078 All rights reserved.</p>
      </div>
      <div className={styles.social}>
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
          style={{ margin: "0 10px", color: "#4267B2" }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          style={{ margin: "0 10px", color: "#E1306C" }}
        />
        <FontAwesomeIcon
          icon={faTwitter}
          size="2x"
          style={{ margin: "0 10px", color: "#1DA1F2" }}
        />
      </div>
      {/* <div className={styles.language}>
                <select>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                </select>
            </div> */}
      <div className={styles.feedback}>
        <FontAwesomeIcon
          icon={faComments}
          size="2x"
          style={{ margin: "0 10px", color: "#4267B2" }}
        />
      </div>
    </div>
  );
};

export default DashoardFooter;
