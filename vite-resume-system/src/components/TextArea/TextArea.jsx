import PropTypes from "prop-types";
import React from "react";
import styles from "./TextArea.module.css";

/*
 * Interactive textarea component with a customizable label and placeholder
 * onChange function is intended to change value for the input box
 */

export function TextArea({
  label,
  value,
  name,
  onChange,
  placeholder,
  onBlur,
}) {
  return (
    <div className={styles.container}>
      <label htmlFor="textarea" className={styles.label}>
        {label}
      </label>
      <textarea
        type="text"
        id="textarea"
        className={styles.textArea}
        value={value}
        // onChange={(key) => onChange(key.target.value)}
        onChange={onChange}
        placeholder={placeholder}
        // onBlur={onBlur}
        onBlur={() => onBlur(name, value)}
      />
    </div>
  );
}

TextArea.propTypes = {
  // string for textarea label
  label: PropTypes.string,

  // string for value
  value: PropTypes.string,

  // onChange function to change value for input box
  onChange: PropTypes.func,

  // string for placeholder text
  placeholder: PropTypes.string,
};
