import React from "react";
import NavBar from "../../components/NavBar";
import styles from "./Layout.module.css";

export function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
