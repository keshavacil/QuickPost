import styles from './style.module.css';

const ProgressBar = ({ currentStep }) => {
  const progressPercentage = (currentStep - 1) * (100 / 2);
  
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBarWrapper}>
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`${styles.progressStep} ${
              currentStep >= step ? styles.active : ''
            }`}
            style={{ width: `${100 / 3}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
