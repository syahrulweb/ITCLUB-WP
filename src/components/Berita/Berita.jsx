import React from "react";
import styles from "./Berita.module.css";

const Berita = ({ beritaData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {beritaData.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.imageWrapper}>
              <img
                src={item.gambar}
                alt={item.judul}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Berita;
