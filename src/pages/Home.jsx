import Navbar from "../components/Navbar";
import Profil from "../components/Profil";
import Projet from "../components/Projet";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <section className="bg-primaryDark z-[-2]">
      <Navbar />
      <Profil />
      <Projet />
      <Footer />
    </section>
  );
}