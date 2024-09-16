import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";

/**
 * An interactive Search Bar component with a customizable placeholder text.
 * Logs inputs if minimum character prop is satisfied with an optional delay.
 * Width of Search Bar determined by container width.
 */

export function SearchBar({ placeholderText, onInput, searchDelay, minChar }) {
  const [input, setInput] = useState("");
  useEffect(() => {
    if (input.length >= minChar) {
      const timer = setTimeout(() => {
        onInput(input);
      }, searchDelay);

      return () => clearTimeout(timer);
    }
  }, [input, onInput, searchDelay, minChar]);

  return (
    <>
      <div className={styles.container}>
        <label htmlFor="search-bar" className={styles.searchLabel} hidden>
          Search
        </label>
        <input
          type="text"
          id="search-bar"
          placeholder={placeholderText}
          className={styles.searchBar}
          onChange={(key) => setInput(key.target.value)}
        ></input>
      </div>
    </>
  );
}

SearchBar.propTypes = {
  // placeholder text
  placeholderText: PropTypes.string,

  // function that fires when user types and minChar/searchDelay is satisfied
  onInput: PropTypes.func,

  // number of ms before onInput is called
  searchDelay: PropTypes.number,

  // minimum characters needed to fire onInput
  minChar: PropTypes.number,
};

SearchBar.defaultProps = {
  // default delay of 0
  searchDelay: 0,

  // default minChar of 0
  minChar: 0,
};
