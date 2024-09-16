import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

/*
 * A simple component for encapsulating child components neatly in a framed area
 */
export default function Card({ children, className, ...props }) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}

Card.propTypes = {
  /*
   * The children argument can be any renderable "Anything that can be rendered:
   * numbers, strings, elements or an array (or fragment) containing these types"
   */
  children: PropTypes.node,

  className: PropTypes.string,
};
