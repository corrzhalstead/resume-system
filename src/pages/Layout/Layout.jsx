import React from "react";
import NavBar from "../../components/NavBar";
import styles from "./Layout.module.css";

export function Layout({ children }) {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
