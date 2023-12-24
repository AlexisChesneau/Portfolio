import Profil from "../components/Profil";
import Projet from "../components/Projet";
import Footer from "../components/Footer";
import Skillbar from "../components/Skillbar";
import ServiceWeb from "../components/ServiceWeb";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <section className="bg-primaryDark z-[-2] overflow-x-hidden">
      <Profil />
      <Skillbar />
      <ServiceWeb />
      <Projet />
      <Reviews />
      <Footer />
    </section>
  );
}
