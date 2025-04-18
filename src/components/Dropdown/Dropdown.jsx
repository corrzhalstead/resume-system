import React from "react";
import styles from "./Dropdown.module.css";

export function Dropdown({ label, name, value, options, onChange }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.select}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
