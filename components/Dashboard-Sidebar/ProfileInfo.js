import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';

const ProfileInfo = ({ user }) => (
  <div className={styles.profileInfo}>
    <div className={styles.profilePic}>
      {user.profilePic ? (
        <img src={user.profilePic} alt={`${user.name}'s profile`} />
      ) : (
        <span className={styles.initials}>
          {user.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()}
        </span>
      )}
    </div>
    <div className={styles.SocialIdInfo} style={{ marginLeft: '10px' }}>
      <h4>{user.name}</h4>
      <h5 className={styles.email}>{user.email}</h5>
    </div>
    <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
  </div>
);

export default ProfileInfo;
