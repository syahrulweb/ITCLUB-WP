import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Jadwal from "./pages/Jadwal";
import Modul from "./pages/Modul";
import Absen from "./pages/Absen";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Chatbot from "./pages/Chatbot";
import ChatbotWidget from "./components/ChatbotWidget";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/modul" element={<Modul />} />
          <Route path="/absen" element={<Absen />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </main>
      <ChatbotWidget />
      <Footer />
    </div>
  );
}

export default App;
