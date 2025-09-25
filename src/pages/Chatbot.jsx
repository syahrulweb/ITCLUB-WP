import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hai, aku Ayuy AI. Mau nanya apa?",
      image: import.meta.env.BASE_URL + "images/bot.png",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://chatbot-backend-nine-omega.vercel.app/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply || "⚠️ Error dari bot",
          image: import.meta.env.BASE_URL + "images/bot.png",
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Gagal connect ke backend",
          image: import.meta.env.BASE_URL + "images/bot.png",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      borderRadius: "1rem",
      overflow: "hidden",
      fontFamily: "'Segoe UI', sans-serif",
      background: "#f9fafb",
      boxShadow: "0 12px 28px rgba(0,0,0,0.2)",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      background: "linear-gradient(135deg, #1e3a8a, #0f172a)",
      color: "#fff",
      padding: "14px",
      fontWeight: 500,
      fontSize: "1.25rem",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    },
    chatBox: {
      flex: 1,
      overflowY: "auto",
      padding: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      background: "#f5f7fa",
    },
    message: {
      padding: "10px 14px",
      borderRadius: "20px",
      maxWidth: "75%",
      wordWrap: "break-word",
      fontSize: "0.95rem",
      lineHeight: 1.4,
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "6px",
    },
    user: {
      alignSelf: "flex-end",
      background: "#1e3a8a",
      color: "#fff",
      boxShadow: "0 2px 6px rgba(30,58,138,0.25)",
      justifyContent: "flex-end",
    },
    bot: {
      alignSelf: "flex-start",
      background: "#e5e5ea",
      color: "#0f172a",
      justifyContent: "flex-start",
    },
    botImage: {
      width: "28px",
      height: "28px",
      borderRadius: "50%",
    },
    inputBox: {
      display: "flex",
      gap: "8px",
      padding: "12px",
      borderTop: "1px solid #ddd",
      background: "#fff",
    },
    input: {
      flex: 1,
      padding: "10px 14px",
      borderRadius: "25px",
      border: "1px solid #ccc",
      outline: "none",
      fontSize: "0.95rem",
    },
    button: {
      padding: "10px 16px",
      border: "none",
      borderRadius: "25px",
      background: "linear-gradient(135deg, #1e3a8a, #0f172a)",
      color: "#fff",
      cursor: "pointer",
      fontWeight: 600,
      transition: "all 0.3s ease",
      boxShadow: "0 4px 12px rgba(30,58,138,0.25)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>YuyAI</div>

      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              ...(msg.sender === "user" ? styles.user : styles.bot),
            }}
          >
            {msg.sender === "bot" && msg.image && (
              <img src={msg.image} alt="bot" style={styles.botImage} />
            )}
            <div style={{ whiteSpace: "pre-wrap" }}>{msg.text}</div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div style={styles.inputBox}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis pesan..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button style={styles.button} onClick={sendMessage} disabled={loading}>
          {loading ? "..." : "Kirim"}
        </button>
      </div>
    </div>
  );
}
