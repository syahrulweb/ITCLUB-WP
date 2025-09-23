import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© {year} Komputer Ar-rum | By Muhammad Syahrul</p>
    </footer>
  );
}
