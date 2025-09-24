// pages/jadwal.jsx
import React from "react";

const jadwalData = [
  { kelompok: "Kelompok 1", hari: "Selasa", waktu: "12.40 – 13.25", sesi: 1 },
  { kelompok: "Kelompok 2", hari: "Selasa", waktu: "13.25 – 14.10", sesi: 2 },
  { kelompok: "Kelompok 3", hari: "Selasa", waktu: "14.10 – 14.55", sesi: 3 },
  { kelompok: "Kelompok 4", hari: "Kamis", waktu: "12.40 – 13.25", sesi: 1 },
  { kelompok: "Kelompok 5", hari: "Kamis", waktu: "13.25 – 14.10", sesi: 2 },
  { kelompok: "Kelompok 6", hari: "Kamis", waktu: "14.10 – 14.55", sesi: 3 },
];

const kelompokData = {
  "Kelompok 1": [
    { nama: "NADIA TASYA ADRIANI", kelas: 9 },
    { nama: "Dahlia Ramadhan", kelas: 9 },
    { nama: "Siti Zahra Maulidina", kelas: 9 },
    { nama: "Yunazila Farhatunnisa", kelas: 9 },
    { nama: "Erlina Maulida", kelas: 9 },
    { nama: "Sri Rahayu", kelas: 9 },
    { nama: "Siti Adelia", kelas: 9 },
    { nama: "Dhea Restiani", kelas: 9 },
    { nama: "Rasti Olivia", kelas: 9 },
    { nama: "Siti Maelani", kelas: 9 },
    { nama: "Pujiah", kelas: 9 },
  ],
  "Kelompok 2": [
    { nama: "Laela Fatimatul Zahra", kelas: 9 },
    { nama: "Muhammad Najril", kelas: 9 },
    { nama: "Yunika Sari", kelas: 9 },
    { nama: "Siti Salma Rahayu", kelas: 9 },
    { nama: "Siti Yasipa", kelas: 9 },
    { nama: "Nania Shira Afira", kelas: 9 },
    { nama: "Siti Syarifah Aulia", kelas: 9 },
    { nama: "Muhammad Ramdan", kelas: 9 },
    { nama: "Siti Muslimah", kelas: 9 },
    { nama: "Muhammad Ardiansyah", kelas: 9 },
    { nama: "Sari Yanti", kelas: 9 },
  ],
  "Kelompok 3": [
    { nama: "Ripal Syaputra", kelas: 10 },
    { nama: "Siti Nabila", kelas: 10 },
    { nama: "Siti Putri Rahmawati", kelas: 10 },
    { nama: "Salsabila", kelas: 10 },
    { nama: "Siti Novitasari", kelas: 10 },
    { nama: "Muhammad Habibi Syafru", kelas: 10 },
    { nama: "Sela Amelia", kelas: 10 },
    { nama: "Siti Andhini Maulida", kelas: 10 },
    { nama: "Siti Salma Aulia", kelas: 10 },
    { nama: "Sri Damayanti", kelas: 10 },
    { nama: "Aulia Putri Nurhaq", kelas: 10 },
    { nama: "Mutya", kelas: 10 },
  ],
  "Kelompok 4": [
    { nama: "Siti Rohila", kelas: 11 },
    { nama: "Devi Salma", kelas: 11 },
    { nama: "Siti Nuraeni", kelas: 11 },
    { nama: "Syfa Anggraeni Nurdiansyah", kelas: 11 },
    { nama: "Mhmd Akbar", kelas: 11 },
    { nama: "Melani Mahendra", kelas: 11 },
    { nama: "Eneng Hermawati", kelas: 11 },
    { nama: "Dewi NurAsiyah Jamil", kelas: 11 },
    { nama: "M. Zindan", kelas: 11 },
    { nama: "Siti Riska Wati", kelas: 11 },
    { nama: "Putri Elisa", kelas: 11 },
    { nama: "Naysila Indriyani", kelas: 11 },
    
  ],
  "Kelompok 5": [
    { nama: "Siti Aminah", kelas: 12 },
    { nama: "Hermawan Saputra", kelas: 12 },
    { nama: "Ripal Ramdani", kelas: 12 },
    { nama: "Maya Nurhasanah", kelas: 12 },
    { nama: "Siti Nadia Nurlaila", kelas: 12 },
    { nama: "Maya Lestari", kelas: 12 },
    { nama: "Siti Marlina", kelas: 12 },
    { nama: "M. Hasan Basri", kelas: 12 },
    { nama: "Siti Nur Anissa", kelas: 12 },
    { nama: "Siti Salwa Nabila Adawiyah", kelas: 12 },
    { nama: "Rahmawati", kelas: 12 },
  ],
  "Kelompok 6": [
    { nama: "Siti Silva", kelas: 12 },
    { nama: "Lila Septiani", kelas: 12 },
    { nama: "Satria Pancasona", kelas: 12 },
    { nama: "Moh Hanip Saputra", kelas: 12 },
    { nama: "Rahmawati Rahayu", kelas: 12 },
    { nama: "Ramdani", kelas: 12 },
    { nama: "Muhammad Juanda", kelas: 12 },
    { nama: "Sandi Safutra", kelas: 12 },
    { nama: "Fahri Padilah", kelas: 12 },
    { nama: "Reni Andyani", kelas: 12 },
  ],
};

function Jadwal() {
  const styles = {
    container: {
      padding: "2rem 1rem",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: "2rem",
      color: "#1e3a8a",
      fontSize: "2rem",
      fontWeight: 800,
    },
    tableWrapper: {
      overflowX: "auto",
      marginBottom: "2rem",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      textAlign: "center",
      minWidth: "400px",
    },
    th: {
      padding: "12px",
      border: "1px solid #ccc",
      backgroundColor: "#1e3a8a",
      color: "#fff",
    },
    td: {
      padding: "10px",
      border: "1px solid #ccc",
    },
    tbodyRow: (index) => ({
      backgroundColor: index % 2 === 0 ? "#F4F9F9" : "#fff",
    }),
    kelompokCard: {
      marginBottom: "2rem",
      padding: "1rem",
      borderRadius: "12px",
      background: "#FAFAFA",
      boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
    },
    kelompokTitle: {
      color: "#1e3a8a",
      marginBottom: "0.8rem",
      fontWeight: 700,
      fontSize: "1.2rem",
    },
    subTableHeader: {
      backgroundColor: "#1e3a8a",
      color: "#fff",
      padding: "8px",
      border: "1px solid #ccc",
    },
    subTableTd: {
      padding: "6px",
      border: "1px solid #ccc",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📅 Jadwal Kelompok</h2>

      {/* Tabel Jadwal */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Kelompok</th>
              <th style={styles.th}>Hari</th>
              <th style={styles.th}>Waktu</th>
              <th style={styles.th}>Sesi</th>
            </tr>
          </thead>
          <tbody>
            {jadwalData.map((item, index) => (
              <tr key={index} style={styles.tbodyRow(index)}>
                <td style={styles.td}>{item.kelompok}</td>
                <td style={styles.td}>{item.hari}</td>
                <td style={styles.td}>{item.waktu}</td>
                <td style={styles.td}>{item.sesi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Daftar Anggota */}
      {Object.keys(kelompokData).map((kelompok, idx) => (
        <div key={idx} style={styles.kelompokCard}>
          <h3 style={styles.kelompokTitle}>{kelompok}</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.subTableHeader}>No</th>
                  <th style={styles.subTableHeader}>Nama Lengkap</th>
                  <th style={styles.subTableHeader}>Kelas</th>
                </tr>
              </thead>
              <tbody>
                {kelompokData[kelompok].map((anggota, i) => (
                  <tr key={i} style={styles.tbodyRow(i)}>
                    <td style={styles.subTableTd}>{i + 1}</td>
                    <td style={styles.subTableTd}>{anggota.nama}</td>
                    <td style={styles.subTableTd}>{anggota.kelas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jadwal;
