import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';
import UploadFile from './UploadFile';
import StepContent from './StepContent';
import StepperControls from './StepperControls';
import ProgressBar from './ProgressBar';

const Modal = ({
  closeModal,
  uploadedFile,
  setUploadedFile,
  currentStep,
  nextStep,
  prevStep,
  selectedPlatform,
}) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalCloseIcon}>
          <FontAwesomeIcon
            icon={faClose}
            size="2x"
            onClick={closeModal}
            className={styles.closeButtonIcon}
          />
        </div>

        <div className={styles.modalContent}>
          <div className={styles.modalLeft}>
            <UploadFile uploadedFile={uploadedFile} setUploadedFile={setUploadedFile}/>
          </div>

          <div className={styles.modalRight}>
            <h2>{selectedPlatform}</h2>
            <ProgressBar currentStep={currentStep} />
            <StepContent selectedPlatform={selectedPlatform} currentStep={currentStep} />
            <StepperControls
              currentStep={currentStep}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
