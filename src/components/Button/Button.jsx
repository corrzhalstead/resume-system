import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

// Button component definition
export const Button = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

// PropTypes for the Button component
Button.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
};

// Default props for the Button component
Button.defaultProps = {
  primary: false,
  size: "medium",
  onClick: undefined,
};
