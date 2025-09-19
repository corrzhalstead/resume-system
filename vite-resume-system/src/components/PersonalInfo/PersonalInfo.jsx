import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./PersonalInfo.module.css";
import InputItem from "../InputItem";
import RadioButtonList from "../RadioButtonList";
import Dropdown from "../Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import MonthYearPicker from "../MonthYearPicker/MonthYearPicker";

export function PersonalInfo({ personalInfo, onChange, onBlur, onSelect }) {
  const [certificates, setCertificates] = useState([
    { certificate: "", year: "" },
  ]);

  const [employments, setEmployments] = useState([
    { companyName: "", position: "", yearStarted: "", yearEnd: "" },
  ]);

  //Adding more certificates
  const handleAddCertificate = () => {
    setCertificates([...certificates, { certificate: "", year: "" }]);
  };

  const handleCertificateChange = (index, field, value) => {
    const updated = [...certificates];
    updated[index][field] = value;
    setCertificates(updated);
  };

  //Removing certificate/s
  const handleRemoveCertificate = (indexToRemove) => {
    setCertificates((prevCertificates) =>
      prevCertificates.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleAddEmployment = () => {
    setEmployments([
      ...employments,
      { companyName: "", position: "", jobStarted: "", jobEnd: "" },
    ]);
  };

  //Removing certificate/s
  const handleRemoveEmployment = (indexToRemove) => {
    setEmployments((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleEmploymentChange = (index, field, value) => {
    const updated = [...employments];
    updated[index][field] = value;
    setEmployments(updated);
  };

  const jobTitleOptions = {
    "Skilled Worker": [
      "Electrician",
      "Welder",
      "Plumber",
      "Carpenter",
      "Mechanic",
    ],
    Professional: [
      "Software Engineer",
      "Accountant",
      "Lawyer",
      "Cloud Engineer",
      "Network Engineer",
    ],
    Healthcare: ["Nurse", "Caregiver", "Physical Therapist"],
    Administrative: [
      "Office Clerk",
      "Receptionist",
      "Data Encoder",
      "HR Admin",
      "Operations Manager",
    ],
    Technical: [
      "IT Support",
      "Technician",
      "System Admin",
      "Graphic Designer",
      "Data Analyst",
      "Marketing Specialist",
    ],
    Other: ["Freelancer", "Tutor", "Uncategorized"],
  };

  const getJobTitlesByCategory = (category) => jobTitleOptions[category] || [];

  return (
    <div className={styles.container}>
      <h3>Personal Information</h3>

      {/* <div className={styles.content}> */}
      <div className={styles.nameContainer}>
        <InputItem
          label="First Name"
          name="firstName"
          value={personalInfo.firstName}
          placeholder="First name"
          onChange={onChange}
        />

        <InputItem
          label="Middle Name"
          name="middleName"
          value={personalInfo.middleName}
          placeholder="Middle name"
          onChange={onChange}
        />

        <InputItem
          label="Last Name"
          name="lastName"
          value={personalInfo.lastName}
          placeholder="Last name"
          onChange={onChange}
        />
      </div>

      <div className={styles.birthDateContainer}>
        {/* <div> */}
        <InputItem
          label="Birthdate"
          name="birthdate"
          value={personalInfo.birthdate}
          placeholder="MM/DD/YYYY"
          onChange={onChange}
          onBlur={onBlur}
        />

        <InputItem
          label="Age"
          name="age"
          value={personalInfo.age}
          placeholder="Age"
          onChange={onChange}
        />
        {/* </div> */}

        {/* <div className={styles.genderContainer}> */}
        <div className={styles.radioList}>
          <RadioButtonList onClick={onSelect} options={["Male", "Female"]} />
        </div>

        {/* <label>Marital Status</label> */}
        <Dropdown
          label="Status"
          name="status"
          value={personalInfo.status}
          onChange={onChange}
          options={[
            "Single",
            "Married",
            "Widowed",
            "Annulled",
            "Separated",
            "Other",
          ]}
        />
      </div>
      {/* </div> */}
      {/* </div> */}

      <h3>Contact Information</h3>

      <div className={styles.contactContainer}>
        <div className={styles.addressContainer}>
          <InputItem
            label="Street Address"
            name="address"
            value={personalInfo.address}
            placeholder="Street Address"
            onChange={onChange}
          />

          <InputItem
            label="City"
            name="city"
            value={personalInfo.city}
            placeholder="City"
            onChange={onChange}
          />

          <InputItem
            label="Province"
            name="province"
            value={personalInfo.province}
            placeholder="Province"
            onChange={onChange}
          />
        </div>
        <div className={styles.contactInfoContainer}>
          <InputItem
            label="Email Address"
            name="email"
            value={personalInfo.email}
            placeholder="Email address"
            onChange={onChange}
          />

          <InputItem
            label="Phone Number"
            name="phone"
            value={personalInfo.phone}
            placeholder="Phone number"
            onChange={onChange}
          />
        </div>
      </div>

      <h3>Education Background </h3>

      <div className={styles.dropdown}>
        <Dropdown
          label="Highest Level of Education"
          name="highestEducation"
          value={personalInfo.highestEducation}
          onChange={onChange}
          options={[
            "High School Diploma",
            "Associate's Degree",
            "Bachelor's Degree",
            "Master's Degree",
            "Other",
          ]}
          className={styles.dropdownEduc}
        />
      </div>
      <div className={styles.schoolContainer}>
        <InputItem
          label="School Name"
          name="schoolName"
          value={personalInfo.schoolName}
          placeholder="School name"
          onChange={onChange}
        />

        <InputItem
          label="Year Graduated"
          name="yearGraduated"
          value={personalInfo.yearGraduated}
          placeholder="Year graduated"
          onChange={onChange}
          className={styles.yearGraduated}
        />
      </div>

      <div className={styles.certificateContainer}>
        {certificates.map((item, index) => (
          <div key={index} className={styles.inputCertificateRow}>
            <InputItem
              label="Certificate(s) Received"
              name={`certificate${index}`}
              value={item.certificate}
              placeholder="Name of certificate"
              onChange={(e) =>
                handleCertificateChange(index, "certificate", e.target.value)
              }
              className={styles.certificateInput}
            />
            <InputItem
              label="Year Received"
              name={`year${index}`}
              value={item.year}
              placeholder="Year received"
              onChange={(e) =>
                handleCertificateChange(index, "year", e.target.value)
              }
            />

            {/* Always show remove (-) button if more than 1 certificate */}
            {index !== certificates.length - 1 && (
              <div className={styles.button}>
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveCertificate(index)}
                  // type="button"
                >
                  <FontAwesomeIcon icon={faSquareMinus} />
                </button>
              </div>
            )}

            {index === certificates.length - 1 && (
              <div className={styles.button}>
                <button
                  className={styles.addButton}
                  onClick={handleAddCertificate}
                >
                  <FontAwesomeIcon icon={faSquarePlus} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <h3>Position Category</h3>
      <div className={styles.jobCategoryContainer}>
        <Dropdown
          label="Job Category"
          name="jobCategory"
          value={personalInfo.jobCategory}
          onChange={onChange}
          options={[
            "Skilled Worker",
            "Professional",
            "Healthcare",
            "Administrative",
            "Technical",
            "Other",
          ]}
        />

        {personalInfo.jobCategory && (
          <Dropdown
            label="Job Title"
            name="jobTitle"
            value={personalInfo.jobTitle}
            onChange={onChange}
            options={getJobTitlesByCategory(personalInfo.jobCategory)}
          />
        )}
      </div>

      <h3>Employment Record </h3>

      {/* <div> */}
      <div className={styles.certificateContainer}>
        {employments.map((item, index) => (
          <div key={index} className={styles.companyRow}>
            {/* <div> */}
            <InputItem
              label="Company Name"
              name={`companyName${index}`}
              value={item.companyName}
              placeholder="Company name"
              onChange={(e) =>
                handleEmploymentChange(index, "companyName", e.target.value)
              }
            />
            {/* </div> */}

            {/* <div className={styles.addressContainer}> */}
            <InputItem
              label="Position"
              name={`position${index}`}
              value={item.position}
              placeholder="Position"
              onChange={(e) =>
                handleEmploymentChange(index, "position", e.target.value)
              }
            />
            {/* </div> */}

            {/* <InputItem
              label="Started"
              name={`jobStarted${index}`}
              value={item.jobStarted}
              placeholder=""
              onChange={(e) =>
                handleEmploymentChange(index, "jobStarted", e.target.value)
              }
            /> */}

            {/* <InputItem
              label="Ended"
              name={`jobEnd${index}`}
              value={item.jobEnd}
              placeholder=""
              onChange={(e) =>
                handleEmploymentChange(index, "jobEnd", e.target.value)
              }
            /> */}

            <MonthYearPicker
              label="Start Date"
              value={item.startDate}
              placeholder={"Select"}
              className={styles.monthYearPicker}
              onChange={(date) =>
                handleEmploymentChange(index, "startDate", date)
              }
            />

            <MonthYearPicker
              label="End Date"
              value={item.endDate}
              placeholder={"Select"}
              className={styles.monthYearPicker}
              onChange={(date) =>
                handleEmploymentChange(index, "endDate", date)
              }
            />

            {/* Always show remove (-) button if more than 1 certificate */}
            {index !== employments.length - 1 && (
              <div className={styles.button}>
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveEmployment(index)}
                  // type="button"
                >
                  <FontAwesomeIcon icon={faSquareMinus} />
                </button>
              </div>
            )}

            {index === employments.length - 1 && (
              <div className={styles.button}>
                <button
                  className={styles.addButton}
                  onClick={handleAddEmployment}
                >
                  <FontAwesomeIcon icon={faSquarePlus} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// PersonalInfo.propTypes = {
//   personalInfo: {
//     label: PropTypes.string,
//     value: PropTypes.string,
//     placeholder: PropTypes.string,
//     onChange: PropTypes.func,

//     firstName: PropTypes.string,
//     middleName: PropTypes.string,
//     lastName: PropTypes.string,
//     gender: PropTypes.string,
//     birthdate: PropTypes.string,
//     age: PropTypes.string,
//   },
// };
