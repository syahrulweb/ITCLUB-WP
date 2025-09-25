import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Brand / Logo */}
        <div className={styles.brand}>
          <Link to="/">AR-RUM TECH LAB</Link>
        </div>

        {/* Burger Icon */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jadwal"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              onClick={() => setIsOpen(false)}
            >
              Jadwal & Kelompok
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/modul"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              onClick={() => setIsOpen(false)}
            >
              Modul
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/absen"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              onClick={() => setIsOpen(false)}
            >
              Absen
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
