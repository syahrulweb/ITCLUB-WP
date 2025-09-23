import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Jadwal from "./pages/Jadwal";
import Modul from "./pages/Modul";
import Absen from "./pages/Absen"; // <- import Absen
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/Komputer-arrum" element={<Beranda />} />
            <Route path="/jadwal" element={<Jadwal />} />
            <Route path="/modul" element={<Modul />} />
            <Route path="/absen" element={<Absen />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
