import React from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry, faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <FontAwesomeIcon icon={faHeart} size="2x" color="white" />
        <h1>Coveify</h1>
      </div>
      <div className={styles.button}>
        <Link href="./login">
        <button>Join Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
