import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faHeart} size="2x" color="white" />
          <h2>Coveify</h2>
        </div>
        <div>
          <p>Your Social Media Ally</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.links}>
          <ul className={styles.linksInner}>
            <li>Company</li>
            <li>About</li>
            <li>Careers</li>
            <li>Newsroom</li>
          </ul>
        </div>
        <div className={styles.links}>
          <ul className={styles.linksInner}>
            <li>Features</li>
            <li>Automation</li>
            <li>Scheduling</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className={styles.links}>
          <ul className={styles.linksInner}>
            <li>Social</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Threads</li>
          </ul>
        </div>
        <div className={styles.links}>
          <ul className={styles.linksInner}>
            <li>Legal</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
