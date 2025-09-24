import { useState } from "react";
import Chatbot from "../pages/Chatbot"; // ✅ konsisten

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      {open && (
        <div style={{
          width: "300px",
          height: "400px",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}>
          <Chatbot />
        </div>
      )}
      <button 
        onClick={() => setOpen(!open)} 
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          borderRadius: "50%",
          background: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
      >
        💬
      </button>
    </div>
  );
}
