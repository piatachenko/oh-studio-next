import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MainItem from "@/components/MainItem";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const bigLinkItems = document.querySelectorAll(".bigLinkItems");
      const linkArrows = document.querySelectorAll(".linkArrows");
      const linkTexts = document.querySelectorAll(".linkTexts");
      const linkBlurs = document.querySelectorAll(".linkBlurs");
      const linkImages = document.querySelectorAll(".linkImages");
      bigLinkItems.forEach((element, index) => {
        function handleMouseOver() {
          linkTexts[index].classList.remove("opacity-0");
          linkImages[index].classList.add("blur-md");
          linkBlurs[index].classList.add("bg-black/25");
          linkArrows[index].classList.remove("opacity-0");
          linkArrows[index].classList.add("translate-x-5", "-translate-y-5");
        }
        function handleMouseOut() {
          linkTexts[index].classList.add("opacity-0");
          linkArrows[index].classList.add("opacity-0");
          linkImages[index].classList.remove("blur-md");
          linkBlurs[index].classList.remove("bg-black/25");
          linkArrows[index].classList.remove("translate-x-5", "-translate-y-5");
        }
        bigLinkItems[index].addEventListener("mouseover", handleMouseOver);
        bigLinkItems[index].addEventListener("mouseout", handleMouseOut);
        return () => {
          bigLinkItems[index].removeEventListener("mouseover", handleMouseOver);
          bigLinkItems[index].removeEventListener("mouseout", handleMouseOut);
        };
      });
    }
  });

  return (
    <>
      <Head>
        <title>OH.STUDIO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/white.ico" />
      </Head>
      <div className="relative">
        <div className="absolute z-10">
          <Navbar currentPage="home" />
          <div className="fixed left-1/2 right-1/2 flex items-center justify-center bottom-[1.88rem] text-white text-sm animate-[load_1s]">
            <a
              href="http://oh.supply/"
              className="pl-[1.65rem] pr-[1.75rem] py-2.5 bg-black rounded-full flex items-center justify-center gap-[0.45rem]"
            >
              <img
                src="/image.webp"
                alt=""
                className="select-none w-[1.1rem] h-[1.1rem]"
              />
              <p>Shop</p>
            </a>
          </div>
        </div>
        <main>
          <section className="flex items-center justify-center animate-[load_1s]">
            <header className="flex flex-col items-center justify-center max-w-[700px] text-center mt-[15rem]">
              <h1 className="text-[4.575rem] leading-[86px] tracking-[-0.012em]">
                A brand and product designer working with clients globally
              </h1>
              <div className="flex gap-[0.575rem] mt-[2.5rem] mb-[10.5rem]">
                <p className="text-sm py-2 leading-[1.2em]">Expertise</p>
                <p className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full">
                  Branding
                </p>
                <p className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full">
                  Product
                </p>
                <p className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full">
                  Design Systems
                </p>
              </div>
            </header>
          </section>
          <section className="animate-[load_1s]">
            <div className="flex gap-5 px-[2.5rem] h-[31rem] mb-10 max-w-[1400px] mx-auto">
              <MainItem
                src="https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=1024"
                text="Aire"
              />
              <MainItem
                src="https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=1024"
                text="Correlated"
              />
            </div>
            <div className="flex gap-5 px-[2.5rem] h-[31rem] mb-10 max-w-[1400px] mx-auto">
              <MainItem
                src="https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024"
                text="Channel 5"
              />
              <MainItem
                src="https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024"
                text="Ronald Abram"
              />
            </div>
            <div className="flex gap-5 px-[2.5rem] h-[31rem] mb-10 max-w-[1400px] mx-auto">
              <MainItem
                src="https://framerusercontent.com/modules/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M~Jq48dGctHPeHtnn90xE_Aem-3HQJB_aNVwfu2fao5Ok.mp4"
                text="Propeller"
                customClass="scale-[1.26] translate-y-8"
                video
              />
              <MainItem
                src="	https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg?scale-down-to=1024"
                text="Schuh"
              />
            </div>
            <div className="flex gap-5 px-[2.5rem] h-[31rem] mb-10 max-w-[1400px] mx-auto">
              <MainItem
                src="https://framerusercontent.com/images/e3moUZXfgtjYQY4ILakIMaz4n7s.jpg?scale-down-to=2048"
                text="Paperstreet"
                customClass="scale-[1.315] translate-y-[2.5rem]"
              />
              <MainItem
                src="https://framerusercontent.com/modules/assets/SGjFvgcbK7s4yKh0xwuNjriMNII~5SCIlrVv6SNR5PFMjsMv3qAIi3sYsG2gjdlB0qM-tng.mp4"
                text="OH.SUPPLY"
                customClass="translate-y-8 scale-[1.25]"
                video
              />
            </div>
            <div className="flex gap-5 px-[2.5rem] h-[31rem] mb-10 max-w-[1400px] mx-auto">
              <MainItem
                src="https://framerusercontent.com/images/aH1eUgCIIIrbJF7TUlaKAehoI.jpg?scale-down-to=1024"
                text="Monokel Eyewear"
              />
              <MainItem
                src="https://framerusercontent.com/images/UbS7rWmAwWxjtwM7oaWwRuGo.jpg?scale-down-to=1024"
                text="Lawtrades"
                blocked
              />
            </div>
            <div className="flex gap-5 px-[2.5rem] h-[31rem] mb-10 max-w-[1400px] mx-auto">
              <MainItem
                src="https://framerusercontent.com/images/hQVBeiDNGU2TfeDJALuhawlcto.jpg?scale-down-to=1024"
                text="Baselworld"
                blocked
              />
              <MainItem
                src="https://framerusercontent.com/modules/assets/NieGBlxBdgpz9QCHV5Aj89rWjVg~DPEeC0jYyBwx9c865cOkUi-KzBM-3ukyhpgtPhvYo_U.mp4"
                text="NYCB"
                customClass="scale-[1.4] translate-y-[3.6rem]"
                video
              />
            </div>
          </section>
        </main>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
