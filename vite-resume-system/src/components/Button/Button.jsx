import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

// Custom Button
export function Button({ label, img, onClick, className }) {
  return (
    <button onClick={onClick} className={`${className} ${styles.button}`}>
      <div className={styles.buttonContents}>
        {img && <span> {img}</span>}
        <span> {label}</span>
      </div>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
