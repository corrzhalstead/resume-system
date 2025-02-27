import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./PersonalInfo.module.css";
import InputItem from "../InputItem";
import RadioButtonList from "../RadioButtonList";

export function PersonalInfo({ personalInfo }) {
  const [gender, setGender] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    birthdate: "",
    age: "",
  });

  useEffect(() => {
    if (personalInfo) {
      setFormData({
        firstName: personalInfo.firstName || "",
        middleName: personalInfo.middleName || "",
        lastName: personalInfo.lastName || "",
        gender: personalInfo.gender || "",
        birthdate: personalInfo.birthdate || "",
        age: personalInfo.age || "",
      });
    }
  }, [personalInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelection = (selection) => {
    setGender(!gender);
  };

  return (
    <div className={styles.container}>
      <h3>Personal Information</h3>

      <div className={styles.content}>
        <div className={styles.nameContainer}>
          <InputItem
            label="First Name"
            name="firstName"
            value={formData.firstName}
            placeholder="Enter first name"
            onChange={handleInputChange}
          />

          <InputItem
            label="Middle Name"
            name="middleName"
            value={formData.middleName}
            placeholder="Enter middle name"
            onChange={handleInputChange}
          />

          <InputItem
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            placeholder="Enter last name"
            onChange={handleInputChange}
          />
        </div>

        {/* <div className={styles.grid}>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div> */}

        <div className={styles.genderConta}>
          <RadioButtonList
            onClick={handleSelection}
            options={["Male", "Female"]}
          />
        </div>

        <InputItem
          label="Birthdate"
          name="birthdate"
          value={formData.birthdate}
          placeholder="MM/DD/YYYY"
          onChange={handleInputChange}
        />

        <InputItem
          label="Age"
          name="age"
          value={formData.age}
          placeholder="Enter your age"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

PersonalInfo.propTypes = {
  personalInfo: {
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,

    firstName: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    birthdate: PropTypes.string,
    age: PropTypes.string,
  },
};
