import React from "react";
import DashoardHeader from "../Dashboard-Header";
import DashoardFooter from "../Dashboard-Footer";
import DashoardProfile from "../Dashboard-Profile";
import styles from "./style.module.css";
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <DashoardHeader />
      </div>
      <div className={styles.profile}>
        <DashoardProfile />
      </div>
      <div className={styles.footer}>
        <DashoardFooter />
      </div>
    </div>
  );
};

export default Dashboard;
