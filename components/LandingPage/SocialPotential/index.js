const { faAngleRight } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
import styles from "./style.module.css";

const SocialPotential = () => {
  return (
    <div className={styles.SocialPotential}>
      <div className={styles.One}>
        <h2>Unlock Your Social Potential</h2>
        <p>Manage All Your Platforms in One Place</p>
      </div>
      <div className={styles.Two}>
        <div className={styles.InnerTwo} style={{background: "rgba(243, 105, 42, 1)"}}>
          <div className={styles.left}>
            <h4>Simplify Your Workflow</h4>
            <h2>Maximize Your Social Media Impact</h2>
            <p>Effortless Management for Busy Creators</p>
            <a>
              Start Your Free Trial{" "}
              <span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>{" "}
            </a>
          </div>
          <div className={styles.right}>
            <img src="Images/LandingPage/Image  --lummi.svg" />
          </div>
        </div>
        <div className={styles.InnerTwo}>
          <div className={styles.left}>
            <h4>Your Social Media, Simplified</h4>
            <h2>Automate, Schedule, Analyze</h2>
            <p>Take Control of Your Content Strategy</p>
            <a>
              Explore Our Features{" "}
              <span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </a>
          </div>
          <div className={styles.right}>
            <img src="Images/LandingPage/Image  --lummi (2).svg" />
          </div>
        </div>
      </div>
      <div className={styles.Three}>
        <div className={styles.left}>
          <h4>Analytics at Your Fingertips</h4>
          <h2>Track Performance and Optimize</h2>
          <p>Make Data-Driven Decisions with Ease</p>
          <a>
            See How It Works
            <span>
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </a>
        </div>
        <div className={styles.InnerThreeRight}>
          <img src="Images/LandingPage/Image  --lummi3.svg" />
        </div>
      </div>
    </div>
  );
};

export default SocialPotential;
