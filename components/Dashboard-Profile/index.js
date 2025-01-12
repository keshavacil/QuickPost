import React, { useState, useEffect } from "react";
import DashoardSidebar from "../Dashboard-Sidebar";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import { getUserData } from "../Service/GetUser";
import { DotLoader } from "react-spinners";
import { updateUserData } from "../Service/UpdateUserData";

const DashoardProfile = () => {
  const router = useRouter();
  const socialPlatforms = ["facebook", "instagram", "twitter"];

  const [profileData, setProfileData] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const result = await getUserData();
      if (result.success) {
        setProfileData(result.user);
      } else {
        setError(result.message || "Error fetching user data.");
      }
    } catch (error) {
      setError("Error fetching user data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleEditMode = async () => {
    if (isEditable) {
      setIsSaving(true);
      setError(null);

      try {
        const result = await updateUserData(profileData);

        if (result.success) {
          setProfileData(result.user);
          alert("Profile updated successfully!");

          await fetchUserData();
        } else {
          setError(
            result.message || "An error occurred while saving your profile."
          );
        }
      } catch (error) {
        setError("Error updating your profile.");
      } finally {
        setIsSaving(false);
      }
    }
    setIsEditable(!isEditable);
  };

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <DotLoader color="#36D7B7" loading={loading} size={50} />
      </div>
    );
  }

  if (!profileData) {
    return <div>No Profile Data Available</div>;
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
            <button
              className={styles.editButton}
              onClick={toggleEditMode}
              disabled={isSaving}
            >
              {isEditable ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
          <div className={styles.form}>
            {/* {error && <div className={styles.errorMessage}>{error}</div>} */}
            <div className={styles.inputContainer}>
              <label className={styles.label}>First Name</label>
              <input
                type="text"
                name="first_name"
                value={profileData.first_name || ""}
                placeholder="Enter First Name"
                className={styles.input}
                disabled={!isEditable}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Middle Name</label>
              <input
                type="text"
                name="middle_name"
                value={profileData.middle_name || ""}
                placeholder="Enter Middle Name"
                className={styles.input}
                disabled={!isEditable}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Last Name</label>
              <input
                type="text"
                name="last_name"
                value={profileData.last_name || ""}
                placeholder="Enter Last Name"
                className={styles.input}
                disabled={!isEditable}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={profileData.dob || ""}
                className={styles.input}
                disabled={!isEditable}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Gender</label>
              <input
                type="text"
                name="gender"
                value={profileData.gender || ""}
                placeholder="Enter Gender"
                className={styles.input}
                disabled={!isEditable}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email || ""}
                placeholder="Enter Email"
                className={styles.input}
                disabled={!isEditable}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Username</label>
              <input
                type="text"
                name="username"
                value={profileData.username || ""}
                placeholder="Enter Username"
                className={styles.input}
                disabled={!isEditable}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Phone Number</label>
              <input
                type="text"
                name="phone_no"
                value={profileData.phone_no || ""}
                placeholder="Enter Phone Number"
                className={styles.input}
                disabled={!isEditable}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Address</label>
              <input
                type="text"
                name="address"
                value={profileData.address || ""}
                placeholder="Enter Address"
                className={styles.input}
                disabled={!isEditable}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>City</label>
              <input
                type="text"
                name="city"
                value={profileData.city || ""}
                placeholder="Enter City"
                className={styles.input}
                disabled={!isEditable}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>State</label>
              <input
                type="text"
                name="state"
                value={profileData.state || ""}
                placeholder="Enter State"
                className={styles.input}
                disabled={!isEditable}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Postal Code</label>
              <input
                type="text"
                name="postal_code"
                value={profileData.postal_code || ""}
                placeholder="Enter Postal Code"
                className={styles.input}
                disabled={!isEditable}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Country</label>
              <input
                type="text"
                name="country"
                value={profileData.country || ""}
                placeholder="Enter Country"
                className={styles.input}
                disabled={!isEditable}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashoardProfile;
