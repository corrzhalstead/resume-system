// components/MonthYearPicker.jsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./MonthYearPicker.module.css";

export default function MonthYearPicker({
  label,
  value,
  onChange,
  name,
  placeholder,
  className = "",
}) {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <DatePicker
        selected={value}
        onChange={(date) => onChange(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        placeholderText={placeholder}
        name={name}
        className={`${styles.input} ${className}`}
      />
    </div>
  );
}
