// src/pages/Absen.jsx
import React from "react";

function Absen() {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd7QUulVu2GRkVCsZvCnhdvFMTXxZEKML6gQX9aHqTPEWe6Bw/viewform";

  const handleAbsen = () => {
    window.open(GOOGLE_FORM_URL, "_blank"); // buka Google Form di tab baru
  };

  // CSS in JS
  const styles = {
    container: {
      textAlign: "center",
      marginTop: "120px",
      fontFamily: "'Segoe UI', sans-serif",
      padding: "0 20px",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: 800,
      color: "#1e3a8a", // navy
      marginBottom: "1rem",
      letterSpacing: "-0.5px",
    },
    description: {
      fontSize: "1.1rem",
      color: "#64748b", // slate
      marginBottom: "2rem",
    },
    button: {
      padding: "1rem 2.5rem",
      fontSize: "1.1rem",
      fontWeight: 600,
      color: "#fff",
      background: "linear-gradient(135deg, #1e3a8a, #0f172a)",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      boxShadow: "0 8px 24px rgba(30, 58, 138, 0.25)",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Absensi Peserta</h1>
      <p style={styles.description}>Klik tombol di bawah untuk melakukan absen</p>
      <button
        style={styles.button}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-3px) scale(1.05)";
          e.target.style.background = "linear-gradient(135deg, #0f172a, #1e3a8a)";
          e.target.style.boxShadow = "0 12px 32px rgba(30, 58, 138, 0.35)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0) scale(1)";
          e.target.style.background = "linear-gradient(135deg, #1e3a8a, #0f172a)";
          e.target.style.boxShadow = "0 8px 24px rgba(30, 58, 138, 0.25)";
        }}
        onClick={handleAbsen}
      >
        Absen Sekarang
      </button>
    </div>
  );
}

export default Absen;
