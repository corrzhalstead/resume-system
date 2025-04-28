import React from "react";
import styles from "./Dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function Dropdown({ label, name, value, options, onChange, className }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {/* <div className={`${styles.selectWrapper}, ${className || ""}`}> */}
      <div className={`${styles.selectWrapper}`}>
        <select
          className={styles.select}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option} className={styles.options}>
              {option}
            </option>
          ))}
        </select>

        <FontAwesomeIcon icon={faChevronDown} className={styles.chevronIcon} />
      </div>
    </div>
  );
}
