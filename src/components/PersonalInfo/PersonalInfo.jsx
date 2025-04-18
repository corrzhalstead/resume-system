import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./PersonalInfo.module.css";
import InputItem from "../InputItem";
import RadioButtonList from "../RadioButtonList";
import Dropdown from "../Dropdown";

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

    if (name === "birthdate") {
      let numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters

      if (numericValue.length > 2 && numericValue.length <= 4) {
        numericValue = numericValue.replace(/(\d{2})(\d{1,2})/, "$1/$2"); // Format MM/DD
      } else if (numericValue.length > 4) {
        numericValue = numericValue.replace(
          /(\d{2})(\d{2})(\d{1,4})/,
          "$1/$2/$3"
        ); // Format MM/DD/YYYY
      }

      setFormData((prev) => ({
        ...prev,
        [name]: numericValue.slice(0, 10), // Limit to 10 characters (MM/DD/YYYY)
      }));
    } else if (name === "age") {
      const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else if (name === "phone") {
      let numericValue = value.replace(/\D/g, ""); // Remove all non-numeric characters

      if (numericValue.length > 4 && numericValue.length <= 7) {
        numericValue = numericValue.replace(/(\d{4})(\d{1,3})/, "$1-$2"); // Format 0917-XXX
      } else if (numericValue.length > 7) {
        numericValue = numericValue.replace(
          /(\d{4})(\d{3})(\d{1,4})/,
          "$1-$2-$3"
        ); // Format 0917-215-5050
      }

      setFormData((prev) => ({
        ...prev,
        [name]: numericValue.slice(0, 13), // Limit to 13 characters (XXXX-XXX-XXXX)
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "birthdate" && value.length === 10) {
      const [month, day, year] = value.split("/");

      if (
        parseInt(month) < 1 ||
        parseInt(month) > 12 ||
        parseInt(day) < 1 ||
        parseInt(day) > 31 ||
        parseInt(year) < 1900 ||
        parseInt(year) > new Date().getFullYear()
      ) {
        alert("Invalid date. Please enter a valid MM/DD/YYYY format.");
        setFormData((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    }
  };

  const handleSelection = (selection) => {
    setFormData((prev) => ({
      ...prev,
      gender: selection,
    }));
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

        <div className={styles.birtDateContainer}>
          <InputItem
            label="Birthdate"
            name="birthdate"
            value={formData.birthdate}
            placeholder="MM/DD/YYYY"
            onChange={handleInputChange}
            onBlur={handleBlur}
          />

          <InputItem
            label="Age"
            name="age"
            value={formData.age}
            placeholder="Enter your age"
            onChange={handleInputChange}
          />

          <div className={styles.genderConta}>
            <RadioButtonList
              onClick={handleSelection}
              options={["Male", "Female"]}
            />
          </div>
        </div>
      </div>

      <h3>Contact Information</h3>

      <div className={styles.contactContainer}>
        <div className={styles.addressContainer}>
          <InputItem
            label="Street Address"
            name="address"
            value={formData.Address}
            placeholder="Enter your address"
            onChange={handleInputChange}
          />

          <InputItem
            label="City"
            name="city"
            value={formData.city}
            placeholder="Enter your city"
            onChange={handleInputChange}
          />

          <InputItem
            label="Province"
            name="province"
            value={formData.province}
            placeholder="Enter your province"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.contactInfoContainer}>
          <InputItem
            label="Email Address"
            name="email"
            value={formData.email}
            placeholder="Enter your email address"
            onChange={handleInputChange}
          />

          <InputItem
            label="Phone Number"
            name="phone"
            value={formData.phone}
            placeholder="Enter your phone number"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <h3>Education Background </h3>

      <div>
        <Dropdown
          label="Highest Level of Education"
          name="highestEducation"
          value={formData.highestEducation}
          onChange={handleInputChange}
          options={[
            "High School Diploma",
            "Associate's Degree",
            "Bachelor's Degree",
            "Master's Degree",
            "Doctorate (PhD)",
            "Other",
          ]}
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
