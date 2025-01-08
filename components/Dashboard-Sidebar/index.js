import { useState } from "react";
import styles from "./style.module.css";
import SocialMediaProfile from "./SocialMediaProfile";
import Modal from "./Modal";

const DashboardSidebar = ({ user, navigationItems, socialPlatforms }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isValidAspectRatio, setIsValidAspectRatio] = useState(true);

  const hardcodedAccounts = [
    
  ];

  const userAccounts = user?.accounts || hardcodedAccounts;

  const openModal = (platform) => {
    setSelectedPlatform(platform);
    setIsModalOpen(true);
    setCurrentStep(1);
    setUploadedFile(null);
    setIsValidAspectRatio(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlatform(null);
    setCurrentStep(1);
    setUploadedFile(null);
    setIsValidAspectRatio(true);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getPlatformAccounts = (platform) => {
    return userAccounts.filter((account) => account.platform === platform);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.socialProfiles}>
        {socialPlatforms.map((platform, index) => (
          <SocialMediaProfile
            key={index}
            platform={platform}
            user={user}
            openModal={openModal}
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          uploadedFile={uploadedFile}
          setUploadedFile={setUploadedFile}
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
          selectedPlatform={selectedPlatform}
          accounts={hardcodedAccounts}
        />
      )}
    </div>
  );
};

export default DashboardSidebar;
