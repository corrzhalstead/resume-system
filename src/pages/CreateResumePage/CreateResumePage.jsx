import React, { useState, useEffect } from "react";
import styles from "./CreateResumePage.module.css";
import PersonalInfo from "../../components/PersonalInfo";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function CreateResumePage({ isEdit = false }) {
  const navigate = useNavigate();

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    birthdate: "",
    age: "",
    status: "",
    address: "",
    city: "",
    province: "",
    email: "",
    phone: "",
    highestEducation: "",
    schoolName: "",
    yearGraduated: "",
  });

  useEffect(() => {
    if (personalInfo) {
      setPersonalInfo({
        firstName: personalInfo.firstName || "",
        middleName: personalInfo.middleName || "",
        lastName: personalInfo.lastName || "",
        gender: personalInfo.gender || "",
        birthdate: personalInfo.birthdate || "",
        age: personalInfo.age || "",
        status: personalInfo.status || "",
        address: personalInfo.address || "",
        city: personalInfo.city || "",
        province: personalInfo.province || "",
        email: personalInfo.email || "",
        phone: personalInfo.phone || "",
        highestEducation: personalInfo.highestEducation || "",
        schoolName: personalInfo.schoolName || "",
        yearGraduated: personalInfo.yearGraduated || "",
      });
    }
  }, []);

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

      setPersonalInfo((prev) => ({
        ...prev,
        [name]: numericValue.slice(0, 10), // Limit to 10 characters (MM/DD/YYYY)
      }));
    } else if (name === "age" || name === "yearGraduated") {
      const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
      setPersonalInfo((prev) => ({
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

      setPersonalInfo((prev) => ({
        ...prev,
        [name]: numericValue.slice(0, 13), // Limit to 13 characters (XXXX-XXX-XXXX)
      }));
    } else {
      setPersonalInfo((prev) => ({
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
        setPersonalInfo((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    }
  };

  console.log("Personal Info:", personalInfo);

  const handleSelection = (selection) => {
    setPersonalInfo((prev) => ({
      ...prev,
      gender: selection,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        {isEdit ? (
          <h2 className={styles.title}>EDIT RESUME</h2>
        ) : (
          <h2 className={styles.title}>CREATE RESUME</h2>
        )}
      </div>

      <div className={styles.bodyContainer}>
        {isEdit ? (
          <div>
            <PersonalInfo
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onSelect={handleSelection}
            />

            <div className={styles.button}>
              <Button
                className={styles.saveBtn}
                label={"Save"}
                onClick={() => {
                  alert("Saved");
                }}
              />

              <Button
                className={styles.cancelBtn}
                label={"Cancel"}
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
          </div>
        ) : (
          <div>
            <PersonalInfo
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onSelect={handleSelection}
            />

            <div className={styles.button}>
              <Button
                className={styles.saveBtn}
                label={"Save"}
                onClick={() => {
                  alert("Saved");
                }}
              />

              <Button
                className={styles.cancelBtn}
                label={"Cancel"}
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
