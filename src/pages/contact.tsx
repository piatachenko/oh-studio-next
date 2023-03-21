import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="absolute z-10">
        <Navbar currentPage="contact" />
      </div>
      <Contact xl />
      <Footer fixed />
    </div>
  );
}
