import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

/*
 * A simple component for encapsulating child components neatly in a framed area
 */
export default function Card({ applicants }) {
  return (
    <div className={styles.container}>
      <div className={styles.cardContents}>
        <div>
          {applicants.lastname}, {applicants.firstname}
        </div>
        <div>{applicants.email}</div>
        <div>{applicants.phone}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
};
