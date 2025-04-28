import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

// Custom Button
export function Button({ label, onClick, className }) {
  return (
    <button onClick={onClick} className={`${className} ${styles.button}`}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
