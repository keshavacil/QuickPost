import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';

const Navigation = ({ navigationItems }) => (
  <div className={styles.navigation}>
    {navigationItems.map((item, index) => (
      <div key={index} className={styles.button}>
        <button>{item.label}</button>
        {item.hasSubmenu && (
          <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
        )}
      </div>
    ))}
  </div>
);

export default Navigation;
