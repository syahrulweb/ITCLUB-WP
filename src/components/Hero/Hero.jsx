import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

function Hero({ title, subtitle }) {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <p className={styles.hero__genre}>Selamat Datang</p>
          <h2 className={styles.hero__title}>{title || "Website Modul Pembelajaran"}</h2>
          <p className={styles.hero__description}>
            {subtitle ||
              "Akses jadwal belajar dan modul pembelajaran dengan mudah, praktis, dan cepat. Website ini membantu siswa belajar di mana saja dan kapan saja."}
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
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={import.meta.env.BASE_URL + "images/gedung.webp"}
            alt="Gedung Sekolah"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
