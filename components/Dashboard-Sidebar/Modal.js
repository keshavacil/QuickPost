import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import UploadFile from "./UploadFile";
import StepContent from "./StepContent";
import StepperControls from "./StepperControls";
import { useState, useEffect } from "react";
import AccountSelection from "../AccountSelection";
import SchedulePost from "../ScheduleComponent";

const Modal = ({
  closeModal,
  uploadedFile,
  setUploadedFile,
  currentStep,
  nextStep,
  prevStep,
  selectedPlatform,
  accounts,
}) => {
  const [accountSelected, setAccountSelected] = useState(null);
  const [scheduleData, setScheduleData] = useState({
    date: "",
    time: { hour: "", minute: "", ampm: "AM" },
  });

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      setAccountSelected(accounts[0]);
    }
  }, [accounts]);

  const handleAccountChange = (account) => {
    setAccountSelected(account);
  };

  const handleScheduleChange = (field, value) => {
    setScheduleData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
         <div className={styles.modalRight}>
           <AccountSelection
            accounts={accounts}
            selectedAccount={accountSelected}
            onAccountSelect={handleAccountChange}
            
          />
           <StepperControls
              currentStep={currentStep}
              nextStep={nextStep}
              prevStep={prevStep}
            />
         </div>
        );
      case 2:
        return (
          <div className={styles.previewUploadSection}>
            <div className={styles.modalLeft}>
              <UploadFile
                uploadedFile={uploadedFile}
                setUploadedFile={setUploadedFile}
              />
            </div>
            <div className={styles.modalRight}>
              <StepContent
                selectedPlatform={selectedPlatform}
                currentStep={currentStep}
              />
               <StepperControls
              currentStep={currentStep}
              nextStep={nextStep}
              prevStep={prevStep}
            />
            </div>
          </div>
        );
      case 3:
        return (
          <div className={styles.modalRight}>
            <SchedulePost
             onCloseModal={closeModal}
              scheduleData={scheduleData}
              onScheduleChange={handleScheduleChange}
            />
             <StepperControls
              currentStep={currentStep}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </div>
        );
      default:
        return null;
    }
  };

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
          <div>
            {renderStepContent()}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
