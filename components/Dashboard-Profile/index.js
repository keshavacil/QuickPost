import React, { useState, useEffect } from "react";
import DashoardSidebar from "../Dashboard-Sidebar";
import styles from "./style.module.css";
import fetchData from "../Service/GetUser";

const DashoardProfile = () => {
  const user = {
    name: "sadasd",
    email: "Jhondoe@gmail.com",
  };

  const socialPlatforms = ["facebook", "instagram", "twitter"];

  const navigationItems = [
    { label: "Dashboard", hasSubmenu: true },
    { label: "Users", hasSubmenu: true },
    { label: "Learn", hasSubmenu: true },
    { label: "Help Center", hasSubmenu: true },
    { label: "Support", hasSubmenu: true },
    { label: "Privacy Policy", hasSubmenu: false },
  ];

  const defaultData = {
    firstName: "John",
    middleName: "",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    phone: "156151651",
    gender: "Male",
    dob: "1990-01-01",
    address: "Los Angeles, CA",
    city: "Los Angeles",
    state: "California",
    postalCode: "90001",
    country: "United States",
  };

  const [profileData, setProfileData] = useState(defaultData);

  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const data = await fetchData();
      const profile = data || defaultData;
      setProfileData(profile);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };
      return updatedData;
    });
  };

  const toggleEditMode = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className={styles.profile}>
      <div className={styles.sidebar}>
        <DashoardSidebar
          user={user}
          navigationItems={navigationItems}
          socialPlatforms={socialPlatforms}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.contentBottom}>
          <div className={styles.header}>
            <h4>Profile Information</h4>
            {/* <button className={styles.editButton} onClick={toggleEditMode}>
              {isEditable ? "Save Changes" : "Edit Profile"}
            </button> */}
          </div>
          <div className={styles.form}>
            {Object.keys(profileData || {}).map((key) => {
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
                      disabled={true}
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
