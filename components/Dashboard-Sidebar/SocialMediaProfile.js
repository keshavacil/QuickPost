import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';
import { platformIcons } from './platformIcons';

const SocialMediaProfile = ({ platform, user, openModal }) => {
  const platformInfo = platformIcons[platform];

  if (!platformInfo) return null;

  return (
    <div className={styles.Social} onClick={() => openModal(platform)}>
      <FontAwesomeIcon
        icon={platformInfo.icon}
        size="2x"
        style={{ margin: '0 10px', color: platformInfo.color }}
      />
      <div className={styles.SocialIdInfo}>
        <h4>{user.name}</h4>
        <h5 className={styles.email}>{user.email}</h5>
      </div>
      <FontAwesomeIcon icon={faAngleRight} className={styles.icon1} />
    </div>
  );
};

export default SocialMediaProfile;
