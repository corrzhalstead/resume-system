import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import classNames from "classnames";

/**
 * Basic layout for modals used in the app
 */

export function Modal({ isOpen, children, className }) {
  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={classNames(styles.container, className)}>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

Modal.propTypes = {
  /**
   * Boolean to determine if modal is open
   */
  isOpen: PropTypes.bool,
  /**
   * Function called to close modal
   */
  onClose: PropTypes.func,
  /**
   * Children components to render in the modal
   */
  children: PropTypes.any,
  /**
   * Passed in to make changes to the modals style
   */
  className: PropTypes.string,
};
