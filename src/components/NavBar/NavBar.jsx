import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assests/HireFlow_logo.png";
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

  return (
    <nav className={styles.nav}>
      <div className={styles.leftContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Home
        </NavLink>
        {token && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Dashboard
          </NavLink>
        )}
      </div>

      <div className={styles.rightContainer}>
        {token ? (
          <div className={styles.userSection}>
            <span className={styles.userName}>👤 {user?.name || "User"}</span>
            <button onClick={handleLogout} className={styles.logOut}>
              Logout
            </button>
          </div>
        ) : (
          <NavLink
            to="/signIn"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
