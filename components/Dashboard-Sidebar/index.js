import { useState } from "react";
import styles from "./style.module.css";
import SocialMediaProfile from "./SocialMediaProfile";
import Modal from "./Modal";
import ProfileInfo from "./ProfileInfo";
import Navigation from "./Navigation";

const DashboardSidebar = ({ user, navigationItems, socialPlatforms }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isValidAspectRatio, setIsValidAspectRatio] = useState(true);

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

  return (
    <div className={styles.sidebar}>
      <ProfileInfo user={user} />
      <Navigation navigationItems={navigationItems} />
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
        />
      )}
    </div>
  );
};

export default DashboardSidebar;
