import React, { useState, useEffect } from "react";
import DashoardSidebar from "../Dashboard-Sidebar";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import { getUserData } from "../Service/GetUser";

const DashoardProfile = () => {
  const router = useRouter();
  const socialPlatforms = ["facebook", "instagram", "twitter"];

  const [profileData, setProfileData] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await getUserData();
      if (result.success) {
        setProfileData(result.user);
      } else {
        console.error(result.message);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleEditMode = () => {
    setIsEditable(!isEditable);
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.profile}>
      <div className={styles.sidebar}>
        <DashoardSidebar user={profileData} socialPlatforms={socialPlatforms} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentBottom}>
          <div className={styles.header}>
            <h4>Profile Information</h4>
            <button className={styles.editButton} onClick={toggleEditMode}>
              {isEditable ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
          <div className={styles.form}>
            {Object.keys(profileData).map((key) => {
              if (key === "dob" || key === "gender") {
                return (
                  <div className={styles.inputContainer} key={key}>
                    <label className={styles.label}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <input
                      type={key === "dob" ? "date" : "text"}
                      name={key}
                      value={profileData[key] || ""}
                      placeholder={`Enter ${
                        key.charAt(0).toUpperCase() + key.slice(1)
                      }`}
                      className={styles.input}
                      disabled={!isEditable}
                      onChange={handleInputChange}
                    />
                  </div>
                );
              }
              return (
                <div className={styles.inputContainer} key={key}>
                  <label className={styles.label}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={profileData[key] || ""}
                    placeholder={`Enter ${
                      key.charAt(0).toUpperCase() + key.slice(1)
                    }`}
                    className={styles.input}
                    disabled={!isEditable}
                    onChange={handleInputChange}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashoardProfile;
