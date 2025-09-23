import Hero from "../components/Hero/Hero";
import Berita from "../components/Berita/Berita";
import beritaData from "../utils/constants/berita";

function Beranda() {
  return (
    <div>
      <Hero />
      <Berita beritaData={beritaData} />
    </div>
  );
}

export default Beranda;
