import styles from './style.module.css';

const StepperControls = ({ currentStep, nextStep, prevStep }) => (
  <div className={styles.stepperControls}>
    <button
      onClick={prevStep}
      disabled={currentStep === 1}
      className={styles.stepperButton}
    >
      Previous
    </button>
    <button
      onClick={nextStep}
      disabled={currentStep === 3}
      className={styles.stepperButton}
    >
      Next
    </button>
  </div>
);

export default StepperControls;
