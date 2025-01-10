import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
import { faDollar, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  return (
    <div className={styles.Pricing}>
      <h2>Pricing Plans That Fit Your Needs</h2>
      <p>
        Choose the best plan for your social media management needs and start
        simplifying your workflow.
      </p>
      <h3>
        Starting from
        <span>
          <FontAwesomeIcon icon={faDollar} />
          0.00
        </span>
      </h3>
      <button>Sign Up Now</button>
    </div>
  );
};

export default Pricing;
