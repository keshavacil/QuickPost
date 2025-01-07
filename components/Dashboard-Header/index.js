import {
  faAngleLeft,
  faBell,
  faCircleQuestion,
  faCircleXmark,
  faGear,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRouter } from "next/router";
import styles from "./style.module.css";

const DashoardHeader = () => {
  const router = useRouter();

  const handleUpgrade = () => {
    router.push("/subscribe");
  };

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h2>Quick Post</h2>
      </div>
      <div className={styles.center}>
        <ul>
          <li>Dashboard</li>
          <li>News</li>
          <li>Support</li>
          <li>More</li>
        </ul>
      </div>
      <div className={styles.right}>
        <FontAwesomeIcon icon={faBell} size="1x" style={{ color: "grey" }} />
        <FontAwesomeIcon
          icon={faCircleQuestion}
          size="1x"
          style={{ color: "grey" }}
        />
        <FontAwesomeIcon icon={faGear} size="1x" style={{ color: "grey" }} />
        <button onClick={handleUpgrade}>Upgrade</button>
        <FontAwesomeIcon
          icon={faUserLarge}
          size="1x"
          style={{ color: "grey" }}
        />
      </div>
    </div>
  );
};

export default DashoardHeader;
