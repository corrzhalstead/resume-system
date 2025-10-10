// import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import Button from "../Button";
// import formatPhone from "../../utils/formatPhone";

/*
 * A simple component for encapsulating child components neatly in a framed area
 */
export default function Card({ applicants, onView, onEdit }) {
  return (
    <div className={styles.container}>
      <div className={styles.cardContents}>
        <div className={styles.name}>
          {applicants.lastName}, {applicants.firstName}
        </div>
        <div>{applicants.email}</div>
        {/* <div>{formatPhone(applicants.phone)}</div> */}
        <div>{applicants.phone}</div>

        <div>{applicants.jobTitle}</div>
        <div>
          {applicants.yearsOfExperience}
          {/* years */}
        </div>

        <div className={styles.button}>
          <Button
            label={"View"}
            img={"👁️"}
            onClick={onView}
            className={styles.editBtn}
          />

          <Button
            label={"Edit"}
            img={"✏️"}
            onClick={onEdit}
            className={styles.editBtn}
          />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
};
