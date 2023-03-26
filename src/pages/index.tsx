import Contact from "@/components/Contact";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import Footer from "@/components/Footer";
import MainItem from "@/components/MainItem";
import Navbar from "@/components/Navbar";
import Head from "next/head";
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
      <FadeInOnScroll>
        <div className="relative">
          <div className="absolute z-10">
            <Navbar currentPage="home" />
            <div className="fixed left-1/2 right-1/2 flex items-center justify-center bottom-[1.25rem] md:bottom-[1.88rem] text-white text-sm fadeIn">
              <a
                href="http://oh.supply/"
                className="pl-[1.65rem] pr-[1.75rem] py-2.5 bg-black rounded-full flex items-center justify-center gap-[0.45rem]"
              >
                <img
                  src="/image.webp"
                  alt=""
                  className="select-none w-[1.1rem] h-[1.1rem]"
                />
                <span>Shop</span>
              </a>
            </div>
          </div>
          <main>
            <section>
              <div className="flex items-center justify-center">
                <header className="flex flex-col items-center justify-center max-w-[700px] text-center h-[50vh] lg:h-[70vh] mt-28 mb-10 px-4">
                  <h1 className="text-[2.25rem] leading-[2.6875rem] md:text-[3rem] md:leading-[3.625rem] lg:text-[4.575rem] lg:leading-[5.375rem] tracking-[-0.012em] fadeIn">
                    A brand and product designer working with clients globally
                  </h1>
                  <div className="flex flex-wrap justify-center gap-[0.575rem] mt-[2.5rem] leading-[1.2rem] text-sm max-md:hidden fadeInSlow">
                    <p className="py-2">Expertise</p>
                    <p className="py-2 px-3 bg-[#F3F2F1] rounded-full">
                      Branding
                    </p>
                    <p className="py-2 px-3 bg-[#F3F2F1] rounded-full">
                      Product
                    </p>
                    <p className="py-2 px-3 bg-[#F3F2F1] rounded-full">
                      Design Systems
                    </p>
                  </div>
                </header>
              </div>
              <div className="fadeInSlow">
                <div className="flex max-md:flex-col gap-5 px-[1.25rem] lg:px-[2.5rem] md:max-h-[31rem] max-md:h-[140vw] mb-5 md:mb-10 max-w-[1400px] mx-auto">
                  <MainItem
                    src="https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=1024"
                    text="Aire"
                  />
                  <MainItem
                    src="https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=1024"
                    text="Correlated"
                  />
                </div>
                <div className="flex max-md:flex-col gap-5 px-[1.25rem] lg:px-[2.5rem] md:max-h-[31rem] max-md:h-[140vw] mb-5 md:mb-10 max-w-[1400px] mx-auto">
                  <MainItem
                    src="https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024"
                    text="Channel 5"
                  />
                  <MainItem
                    src="https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024"
                    text="Ronald Abram"
                  />
                </div>
                <div className="flex max-md:flex-col gap-5 px-[1.25rem] lg:px-[2.5rem] md:max-h-[31rem] max-md:h-[140vw] mb-5 md:mb-10 max-w-[1400px] mx-auto">
                  <MainItem
                    src="https://framerusercontent.com/modules/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M~Jq48dGctHPeHtnn90xE_Aem-3HQJB_aNVwfu2fao5Ok.mp4"
                    text="Propeller"
                    video
                  />
                  <MainItem
                    src="https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg?scale-down-to=1024"
                    text="Schuh"
                  />
                </div>
                <div className="flex max-md:flex-col gap-5 px-[1.25rem] lg:px-[2.5rem] md:max-h-[31rem] max-md:h-[140vw] mb-5 md:mb-10 max-w-[1400px] mx-auto">
                  <MainItem
                    src="https://framerusercontent.com/images/e3moUZXfgtjYQY4ILakIMaz4n7s.jpg?scale-down-to=2048"
                    text="Paperstreet"
                  />
                  <MainItem
                    src="https://framerusercontent.com/modules/assets/SGjFvgcbK7s4yKh0xwuNjriMNII~5SCIlrVv6SNR5PFMjsMv3qAIi3sYsG2gjdlB0qM-tng.mp4"
                    text="OH.SUPPLY"
                    video
                  />
                </div>
                <div className="flex max-md:flex-col gap-5 px-[1.25rem] lg:px-[2.5rem] md:max-h-[31rem] max-md:h-[140vw] mb-5 md:mb-10 max-w-[1400px] mx-auto">
                  <MainItem
                    src="https://framerusercontent.com/images/aH1eUgCIIIrbJF7TUlaKAehoI.jpg?scale-down-to=1024"
                    text="Monokel Eyewear"
                  />
                  <MainItem
                    src="https://framerusercontent.com/images/UbS7rWmAwWxjtwM7oaWwRuGo.jpg?scale-down-to=1024"
                    text="Lawtrades"
                    notLink
                    blocked
                  />
                </div>
                <div className="flex max-md:flex-col gap-5 px-[1.25rem] lg:px-[2.5rem] md:max-h-[31rem] max-md:h-[140vw] mb-5 md:mb-10 max-w-[1400px] mx-auto">
                  <MainItem
                    src="https://framerusercontent.com/images/hQVBeiDNGU2TfeDJALuhawlcto.jpg?scale-down-to=1024"
                    text="Baselworld"
                    notLink
                    blocked
                  />
                  <MainItem
                    src="https://framerusercontent.com/modules/assets/NieGBlxBdgpz9QCHV5Aj89rWjVg~DPEeC0jYyBwx9c865cOkUi-KzBM-3ukyhpgtPhvYo_U.mp4"
                    text="NYCB"
                    video
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
        <Contact />
        <Footer />
      </FadeInOnScroll>
    </>
  );
}
