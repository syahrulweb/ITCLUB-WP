// src/pages/Absen.jsx
import React, { useEffect, useState } from "react";

function Absen() {
  const GOOGLE_FORM_ABSEN_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSd7QUulVu2GRkVCsZvCnhdvFMTXxZEKML6gQX9aHqTPEWe6Bw/viewform";

  const GOOGLE_SHEET_KAS_URL =
    "https://docs.google.com/spreadsheets/d/1bs0vVV26OgOcnSj1vZY6eA1UnR-obGr0LEgg062dppM/edit?gid=0#gid=0";

  const GOOGLE_FORM_TUGAS_URL = "https://forms.gle/bW155iyaPMpJAJGY9";

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const handleAbsen = () => {
    window.open(GOOGLE_FORM_ABSEN_URL, "_blank");
  };

  const handleKas = () => {
    window.open(GOOGLE_SHEET_KAS_URL, "_blank");
  };

  const handleUploadTugas = () => {
    window.open(GOOGLE_FORM_TUGAS_URL, "_blank");
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(120deg, #1e3a8a, #0f172a, #2563eb)",
      backgroundSize: "400% 400%",
      animation: "gradientShift 10s ease infinite",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    card: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(12px)",
      borderRadius: "20px",
      padding: "60px 40px",
      textAlign: "center",
      color: "#fff",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      maxWidth: "480px",
      width: "100%",
      transform: fadeIn ? "translateY(0)" : "translateY(30px)",
      opacity: fadeIn ? 1 : 0,
      transition: "all 0.8s ease",
    },
    title: {
      fontSize: "2.3rem",
      fontWeight: 800,
      marginBottom: "1rem",
      letterSpacing: "-0.5px",
    },
    description: {
      fontSize: "1.1rem",
      color: "#e2e8f0",
      marginBottom: "2rem",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    button: {
      padding: "1rem",
      fontSize: "1.1rem",
      fontWeight: 600,
      color: "#fff",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    absenBtn: {
      background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
    },
    kasBtn: {
      background: "linear-gradient(135deg, #059669, #047857)",
    },
    tugasBtn: {
      background: "linear-gradient(135deg, #9333ea, #7e22ce)",
    },
  };

  return (
    <div style={styles.page}>
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          button:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 12px 24px rgba(255,255,255,0.15);
          }
        `}
      </style>

      <div style={styles.card}>
        <h1 style={styles.title}>✨ Absensi Peserta ✨</h1>
        <p style={styles.description}>
          Silakan klik tombol di bawah untuk melakukan absensi, melihat data kas,
          atau mengunggah tugasmu.
        </p>

        <div style={styles.buttonContainer}>
          <button
            style={{ ...styles.button, ...styles.absenBtn }}
            onClick={handleAbsen}
          >
            📋 Absen Sekarang
          </button>

          <button
            style={{ ...styles.button, ...styles.kasBtn }}
            onClick={handleKas}
          >
            💰 Lihat Pembayaran Kas
          </button>

          <button
            style={{ ...styles.button, ...styles.tugasBtn }}
            onClick={handleUploadTugas}
          >
            📂 Upload Tugas
          </button>
        </div>
      </div>
    </div>
  );
}

export default Absen;
