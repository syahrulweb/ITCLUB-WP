import { useState } from "react";
import Chatbot from "../pages/Chatbot";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  const styles = {
    container: {
      position: "fixed",
      bottom: "25px",
      right: "25px",
      zIndex: 1000,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "12px",
    },
    panel: {
      width: "360px",
      height: open ? "520px" : "0px", // animasi height
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: "0 12px 28px rgba(0,0,0,0.25)",
      transition: "height 0.3s ease",
    },
    toggleBtn: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "#071780ff",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      transition: "transform 0.2s ease",
    },
    toggleImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.panel}>
        {open && <Chatbot />} {/* render cuma pas open */}
      </div>
      <button
        style={styles.toggleBtn}
        onClick={() => setOpen(!open)}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          src={import.meta.env.BASE_URL + "images/bot.png"}
          alt="chatbot toggle"
          style={styles.toggleImg}
        />
      </button>
    </div>
  );
}
