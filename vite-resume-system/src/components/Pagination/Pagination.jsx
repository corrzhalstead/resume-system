import styles from "./Pagination.module.css";
import PropTypes from "prop-types";

/**
 * This component sets up pagination controls for your page.
 */
export default function Pagination({
  page = 1,
  lastPage = 1,
  onPageChange = () => {},
  onLimitChange = () => {},
  disableNext = false,
  disabled = false,
}) {
  const totalPages = Math.max(1, Number(lastPage) || 1);
  const currentPage = Math.min(Math.max(Number(page) || 1, 1), totalPages);

  // Keep the signature backward compatible while limit controls are out of scope
  void onLimitChange;

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const prevDisabled = disabled || currentPage <= 1;
  const nextDisabled = disabled || disableNext || currentPage >= totalPages;

  const handlePageChange = (targetPage) => {
    if (
      disabled ||
      targetPage === currentPage ||
      targetPage < 1 ||
      targetPage > totalPages
    ) {
      return;
    }

    onPageChange(targetPage);
  };

  return (
    <nav className={styles.nav} aria-label="Pagination">
      <ul className={styles.pagination}>
        <li
          className={`${styles.pageItem} ${prevDisabled ? styles.disabled : ""}`}
        >
          <button
            type="button"
            className={styles.pageLink}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={prevDisabled}
            aria-label="Previous page"
          >
            Previous
          </button>
        </li>

        {pageNumbers.map((pageNumber) => {
          const isActive = pageNumber === currentPage;

          return (
            <li
              key={pageNumber}
              className={`${styles.pageItem} ${
                isActive ? styles.active : ""
              } ${disabled ? styles.disabled : ""}`}
            >
              <button
                type="button"
                className={styles.pageLink}
                onClick={() => handlePageChange(pageNumber)}
                aria-current={isActive ? "page" : undefined}
                disabled={disabled || isActive}
              >
                {pageNumber}
                {isActive && (
                  <span className={styles.srOnly}>(current)</span>
                )}
              </button>
            </li>
          );
        })}

        <li
          className={`${styles.pageItem} ${nextDisabled ? styles.disabled : ""}`}
        >
          <button
            type="button"
            className={styles.pageLink}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={nextDisabled}
            aria-label="Next page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  lastPage: PropTypes.number,
  onPageChange: PropTypes.func,
  onLimitChange: PropTypes.func,
  disableNext: PropTypes.bool,
  disabled: PropTypes.bool,
};
