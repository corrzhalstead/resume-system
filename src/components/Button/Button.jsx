import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

// Custom Button
export const Button = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};
