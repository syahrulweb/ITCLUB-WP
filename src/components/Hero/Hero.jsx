import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

function Hero({ title, subtitle }) {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        {/* Hero Image */}
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={import.meta.env.BASE_URL + "images/gedung.webp"}
            alt="Gedung Sekolah"
          />
        </div>

        {/* Hero Text */}
        <div className={styles.hero__left}>
          <p className={styles.hero__genre}>Selamat Datang di</p>
          <h2 className={styles.hero__title}>{title || "AR-RUM TECH LAB"}</h2>
          <p className={styles.hero__description}>
            {subtitle ||
              "Tempat belajar teknologi & komputer terbaik. Akses jadwal, modul, dan materi pembelajaran dengan mudah, cepat, dan praktis untuk mendukung kegiatan belajar di mana saja."}
          </p>
          <div className={styles.hero__buttons}>
            <Link to="/jadwal" className={styles.hero__button}>
              Lihat Jadwal
            </Link>
            <Link to="/modul" className={styles.hero__buttonOutline}>
              Lihat Modul
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
