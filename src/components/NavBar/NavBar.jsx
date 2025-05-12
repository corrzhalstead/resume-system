import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
// import logo from "../../assests/HireFlow_logo.png";
import logo from "../../assests/WhiteTealLogo.png";
// import logo from "../../assests/BigLogo.png";

import { jwtDecode } from "jwt-decode";

export function NavBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token", error);
        setUser(null);
        localStorage.removeItem("token");
      }
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} alt="AgosRecruit Logo" className={styles.logo} />
        </Link>

        <div className={styles.desktopMenu}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/applicants" className={styles.link}>
            Applicants
          </Link>
          <Link to="/dashboard" className={styles.link}>
            Dashboard
          </Link>
        </div>

        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link
            to="/"
            className={styles.mobileLink}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/applicants"
            className={styles.mobileLink}
            onClick={() => setIsOpen(false)}
          >
            Applicants
          </Link>
          <Link
            to="/dashboard"
            className={styles.mobileLink}
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
