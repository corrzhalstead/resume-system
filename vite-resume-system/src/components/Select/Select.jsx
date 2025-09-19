import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Select.module.css";

export function SimpleSelect({ options, onChange, placeholder, disabled }) {
  const [dropdownDisplay, setDropdownDisplay] = useState(false);
  const [selectedValue, setSelectedValue] = useState(placeholder);

  // Function to handle selection and close the dropdown
  const handleSelect = (option) => {
    setSelectedValue(option);
    onChange(option);
    setDropdownDisplay(false);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.selectButton}
        onClick={() => setDropdownDisplay(!dropdownDisplay)}
        disabled={disabled}
      >
        <span>{selectedValue}</span>
        <FaChevronDown className={styles.chevronIcon} />
      </button>

      {/* Dropdown Options */}
      {dropdownDisplay && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <button
              key={option}
              className={styles.dropdownOption}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

SimpleSelect.propTypes = {
  options: PropTypes.array.isRequired, // Options passed as array
  onChange: PropTypes.func.isRequired, // Function to handle selection
  placeholder: PropTypes.string.isRequired, // Default placeholder
  disabled: PropTypes.bool, // Disable dropdown
};

SimpleSelect.defaultProps = {
  disabled: false,
};
