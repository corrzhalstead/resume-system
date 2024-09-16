import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./InputItem.module.css";

/**
 * Custom input box with a label.
 */
export function InputItem({
  label,
  value,
  name,
  placeholder,
  onChange,
  className,
  onBlur,
  onFocus,
}) {
  return (
    <div className={styles.grid}>
      <span className={styles.label}>{label} </span>
      <input
        className={classNames(styles.input, className)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
}

InputItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
