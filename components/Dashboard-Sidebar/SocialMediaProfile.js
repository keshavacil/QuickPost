import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import { platformIcons } from "./platformIcons";

const SocialMediaProfile = ({ platform, user, openModal }) => {
  const platformInfo = platformIcons[platform];

  if (!platformInfo) return null;
  const platformUser = user[platform] || "No user data available";

  return (
    <div
      className={styles.Social}
      onClick={() => openModal(platform)}
      role="button"
      aria-label={`Open ${platform} profile`}
    >
      <FontAwesomeIcon
        icon={platformInfo.icon}
        size="2x"
        style={{ margin: "0 10px", color: platformInfo.color }}
      />
      <div className={styles.SocialIdInfo}>
        <p className={styles.platformName}>{platformInfo.name}</p>
      </div>
      <FontAwesomeIcon icon={faAngleRight} className={styles.icon1} />
    </div>
  );
};

export default SocialMediaProfile;
