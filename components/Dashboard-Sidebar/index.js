import React, { useState } from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faCancel,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const platformIcons = {
  facebook: { icon: faFacebook, color: "#4267B2" },
  instagram: { icon: faInstagram, color: "#E4405F" },
  twitter: { icon: faTwitter, color: "#1DA1F2" },
};

const DashboardSidebar = ({ user, navigationItems, socialPlatforms }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);

  const openModal = (platform) => {
    setSelectedPlatform(platform);
    setIsModalOpen(true);
    setCurrentStep(1);
    setUploadedFile(null); // Reset file when opening the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlatform(null);
    setCurrentStep(1);
    setUploadedFile(null); // Reset file when closing the modal
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

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(URL.createObjectURL(file)); // Create a preview URL for the file
    }
  };

  const SocialMediaProfile = ({ platform, user }) => {
    const platformInfo = platformIcons[platform];

    if (!platformInfo) return null;

    return (
      <div className={styles.Social} onClick={() => openModal(platform)}>
        <FontAwesomeIcon
          icon={platformInfo.icon}
          size="2x"
          style={{ margin: "0 10px", color: platformInfo.color }}
        />
        <div className={styles.SocialIdInfo}>
          <h4>{user.name}</h4>
          <h5 className={styles.email}>{user.email}</h5>
        </div>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon1} />
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3>Step 1: Platform Overview</h3>
            <p>Details about {selectedPlatform}...</p>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Step 2: Platform Settings</h3>
            <p>Settings and configurations for {selectedPlatform}...</p>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Step 3: Final Review</h3>
            <p>Review your information for {selectedPlatform}...</p>
          </div>
        );
      default:
        return <div>Invalid step</div>;
    }
  };

  const progressPercentage = (currentStep - 1) * (100 / 2);

  return (
    <div className={styles.sidebar}>
      <div className={styles.profileInfo}>
        <div className={styles.profilePic}>
          {user.profilePic ? (
            <img src={user.profilePic} alt={`${user.name}'s profile`} />
          ) : (
            <span className={styles.initials}>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </span>
          )}
        </div>
        <div className={styles.SocialIdInfo} style={{ marginLeft: "10px" }}>
          <h4>{user.name}</h4>
          <h5 className={styles.email}>{user.email}</h5>
        </div>
        <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
      </div>

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

      <div className={styles.socialProfiles}>
        {socialPlatforms.map((platform, index) => (
          <SocialMediaProfile key={index} platform={platform} user={user} />
        ))}
      </div>

      {isModalOpen && (
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
                {/* File preview is displayed above the upload button */}
                {uploadedFile && (
                  <div className={styles.filePreviewContainer}>
                    <img
                      src={uploadedFile}
                      alt="Uploaded Preview"
                      style={{
                        width: "250px",
                        height: "500px",
                        objectFit: "cover",
                        marginBottom: "15px",
                      }}
                    />
                  </div>
                )}
                <div className={styles.uploadContainer}>
                  <input
                    type="file"
                    id="file-upload"
                    accept="image/*,video/*"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="file-upload" className={styles.uploadButton}>
                    {uploadedFile ? "Change File" : "Upload Photos/Videos"}
                  </label>
                </div>
              </div>

              <div className={styles.modalRight}>
                <h2>{selectedPlatform}</h2>
                <div className={styles.progressContainer}>
                  <div className={styles.progressBarWrapper}>
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`${styles.progressStep} ${
                          currentStep >= step ? styles.active : ""
                        }`}
                        style={{ width: `${100 / 3}%` }}
                      >
                        <div className={styles.stepNumber}>{step}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {renderStepContent()}

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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSidebar;
