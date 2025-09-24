import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "💬 Hai, aku chatbot. Mau nanya apa?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // auto scroll ke bawah tiap ada pesan baru
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
      const res = await fetch("https://chatbot-backend-nine-omega.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || "⚠️ Error dari bot" },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Gagal connect ke backend" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>🤖 Chatbot</div>

      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              ...(msg.sender === "user" ? styles.user : styles.bot),
            }}
          >
            {msg.text}
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

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  header: {
    background: "#007bff",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  chatBox: {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    background: "#f9f9f9",
  },
  message: {
    padding: "8px 12px",
    borderRadius: "15px",
    marginBottom: "6px",
    maxWidth: "75%",
    wordWrap: "break-word",
    fontSize: "14px",
  },
  user: {
    alignSelf: "flex-end",
    background: "#007bff",
    color: "#fff",
  },
  bot: {
    alignSelf: "flex-start",
    background: "#e5e5ea",
    color: "#000",
  },
  inputBox: {
    display: "flex",
    gap: "5px",
    padding: "10px",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "20px",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
};
