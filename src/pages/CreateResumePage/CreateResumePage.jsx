import React, { useState } from "react";
import styles from "./CreateResumePage.module.css";
import PersonalInfo from "../../components/PersonalInfo";

export function CreateResumePage() {
  const [formData, setFormData] = useState({
    personal: {
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      birthdate: "",
      age: "",
    },
  });

  return (
    <div className={styles.container}>
      {/* <div className={styles.headerContainer}> */}
      <div className={styles.headerContainer}>
        <h2 className={styles.title}>CREATE RESUME</h2>
      </div>
      {/* </div> */}
      <div className={styles.bodyContainer}>
        <div>
          <PersonalInfo personalInfo={formData.personal} />
        </div>
      </div>
    </div>
  );
}
