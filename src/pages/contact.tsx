import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact — OH.STUDIO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/white.ico" />
      </Head>
      <div className="relative">
        <div className="absolute z-10">
          <Navbar currentPage="contact" isScrollBarInvisible />
        </div>
        <Contact xl />
        <Footer fixed />
      </div>
    </>
  );
}
