import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./RadioButtonList.module.css";
/**
 *  Takes an array of options and displays them with radio buttons
 */
export function RadioButtonList({ options, onClick, defaultValue, groupName }) {
  const [currentChoice, setCurrentChoice] = useState(defaultValue || "");

  useEffect(() => {
    setCurrentChoice(defaultValue);
  }, [defaultValue]);

  const handleChoice = (event) => {
    setCurrentChoice(event.target.value);
    onClick(event.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.label}>Gender</div>

      {options.map((option) => (
        <div key={option} className={styles.radioButtonContainer}>
          <span className={styles.relativePosition}>
            <input
              type="radio"
              id={option}
              name={groupName}
              value={option}
              className={styles.radioButton}
              checked={currentChoice === option}
              onChange={(event) => handleChoice(event)}
            />
            {currentChoice === option && (
              <span className={styles.radioCheckmark}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </span>
            )}
          </span>
          <label className={styles.radioButtonLabel} htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}

RadioButtonList.propTypes = {
  /**
   * Array of options to display
   */
  options: PropTypes.arrayOf(PropTypes.string),
  /**
   * Function called when the option changes
   */
  onClick: PropTypes.func,
};
