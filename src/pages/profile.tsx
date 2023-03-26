import Contact from "@/components/Contact";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import Footer from "@/components/Footer";
import MainItem from "@/components/MainItem";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile — OH.STUDIO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/white.ico" />
      </Head>
      <FadeInOnScroll>
        <div className="relative">
          <div className="absolute z-10">
            <Navbar currentPage="profile" />
          </div>
          <main className="text-center max-w-[87.5rem] mx-auto px-4">
            <div>
              <header className="flex items-center justify-center mt-[7rem] mb-[2.5rem] h-[50vh] lg:h-[70vh] fadeIn">
                <h1 className="text-[2.25rem] leading-[2.6875rem] md:text-[3rem] md:leading-[3.65rem] lg:text-[4.5rem] lg:leading-[5.375rem]">
                  Hey 👋🏼 I&apos;m Oli
                </h1>
              </header>
              <div className="animate-[fadeIn_1s]">
                <div className="flex gap-5 px-[0.25rem] lg:px-[1.5rem] h-[31rem] mb-10 mx-auto">
                  <div>
                    <MainItem
                      src="https://framerusercontent.com/images/wJINOk3BFAbQRx6ZySXfbltPxU.jpg?scale-down-to=1024"
                      notLink
                    />
                  </div>
                  <div className="max-sm:hidden">
                    <MainItem
                      src="https://framerusercontent.com/images/O3Foxt0XkzTsjGc74Ap0Hrxtz4c.jpg?scale-down-to=1024"
                      notLink
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="max-w-[37.5rem] lg:max-w-[43.75rem] mt-[3rem] mb-[6rem] md:mt-[8.75rem] md:mb-[13.65rem]">
                    <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex mb-[1.25rem] fadeIn">
                      About
                    </div>
                    <div className="text-[1.5rem] leading-[2.125rem] md:text-[2.375rem] md:leading-[2.875rem] fadeIn">
                      A freelance designer based in the UK. I combine my
                      experience in product and brand to solve problems, tell
                      stories, and create compelling experiences.
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex fadeIn">
                      Experience
                    </div>
                    <div className="text-[1.875rem] leading-[2.25rem] md:text-[2.375rem] md:leading-[2.875rem] mt-[0.64rem] mb-[7.4rem] fadeIn">
                      Where I&apos;ve worked
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-[5rem] gap-x-2 mx-auto mb-[9.5rem] fadeIn">
                    <div>
                      <div className="space-y-[0.57rem]">
                        <div className="text-[#828282] text-sm">
                          2017 — Present
                        </div>
                        <div className="text-[1.125rem] lg:text-[1.375rem]">
                          OH.STUDIO
                        </div>
                        <div className="text-[#828282] text-sm">
                          Freelance Designer
                        </div>
                        <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex translate-y-3.5">
                          Director
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-[0.57rem]">
                        <div className="text-[#828282] text-sm">
                          2021 — Present
                        </div>
                        <div className="text-[1.125rem] lg:text-[1.375rem]">
                          Friendly Studio
                        </div>
                        <div className="text-[#828282] text-sm">
                          Lead Product Designer
                        </div>
                        <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex translate-y-3.5">
                          Freelance
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-[0.57rem]">
                        <div className="text-[#828282] text-sm">2022</div>
                        <div className="text-[1.125rem] lg:text-[1.375rem]">
                          R/GA
                        </div>
                        <div className="text-[#828282] text-sm">
                          Senior Visual Designer
                        </div>
                        <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex translate-y-3.5">
                          Freelance
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-[0.57rem]">
                        <div className="text-[#828282] text-sm">2021</div>
                        <div className="text-[1.125rem] lg:text-[1.375rem]">
                          R/GA
                        </div>
                        <div className="text-[#828282] text-sm">
                          Senior Visual Designer
                        </div>
                        <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex translate-y-3.5">
                          Freelance
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-[0.57rem]">
                        <div className="text-[#828282] text-sm">2021</div>
                        <div className="text-[1.125rem] lg:text-[1.375rem]">
                          AKQA
                        </div>
                        <div className="text-[#828282] text-sm">
                          Senior Designer
                        </div>
                        <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex translate-y-3.5">
                          Freelance
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-[0.57rem]">
                        <div className="text-[#828282] text-sm">2020</div>
                        <div className="text-[1.125rem] lg:text-[1.375rem]">
                          AKQA
                        </div>
                        <div className="text-[#828282] text-sm">
                          Senior Designer
                        </div>
                        <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex translate-y-3.5">
                          Freelance
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-[0.57rem]">
                        <div className="text-[#828282] text-sm">2019</div>
                        <div className="text-[1.125rem] lg:text-[1.375rem]">
                          UI Centric
                        </div>
                        <div className="text-[#828282] text-sm">
                          Senior Product Designer
                        </div>
                        <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex translate-y-3.5">
                          Freelance
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-[0.57rem]">
                        <div className="text-[#828282] text-sm">2017</div>
                        <div className="text-[1.125rem] lg:text-[1.375rem]">
                          Agency TK
                        </div>
                        <div className="text-[#828282] text-sm">
                          Senior Digital Designer
                        </div>
                        <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex translate-y-3.5">
                          Permanent
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-[0.57rem]">
                        <div className="text-[#828282] text-sm">2012</div>
                        <div className="text-[1.125rem] lg:text-[1.375rem]">
                          Agency TK
                        </div>
                        <div className="text-[#828282] text-sm">
                          Digital Designer
                        </div>
                        <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex translate-y-3.5">
                          Permanent
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-[0.57rem]">
                        <div className="text-[#828282] text-sm">2009</div>
                        <div className="text-[1.125rem] lg:text-[1.375rem]">
                          Next Level
                        </div>
                        <div className="text-[#828282] text-sm">
                          Digital Designer
                        </div>
                        <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex translate-y-3.5">
                          Permanent
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-[0.57rem]">
                        <div className="text-[#828282] text-sm">2008</div>
                        <div className="text-[1.125rem] lg:text-[1.375rem]">
                          Next Level
                        </div>
                        <div className="text-[#828282] text-sm">
                          Junior Digital Designer
                        </div>
                        <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex translate-y-3.5">
                          Permanent
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <header>
                    <div className="text-sm py-2 px-3 leading-[1.2em] bg-[#F3F2F1] rounded-full inline-flex fadeIn">
                      Clients
                    </div>
                    <div className="text-[1.875rem] leading-[2.25rem] md:text-[2.375rem] md:leading-[2.875rem] mt-[0.65rem] mb-[7rem] fadeIn">
                      Who I&apos;ve worked with
                    </div>
                  </header>
                  <div>
                    <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-y-[5.2rem] px-[1.25rem] fadeIn">
                      <img
                        src="https://framerusercontent.com/images/nXLdc1LsU15dk6AODEpMgByLDw.png?scale-down-to=512"
                        alt=""
                        className="brightness-0 w-[12rem] h-auto object-cover"
                      />
                      <img
                        src="https://framerusercontent.com/images/roAzNhDBr8shtI8EFOALn1BTMO0.png?scale-down-to=512"
                        alt=""
                        className="brightness-0 w-[12rem] h-auto object-cover"
                      />
                      <img
                        src="https://framerusercontent.com/images/vzRTkTnoLuK5zvS2serU2qCb4.png?scale-down-to=512"
                        alt=""
                        className="brightness-0 w-[12rem] h-auto object-cover"
                      />
                      <img
                        src="https://framerusercontent.com/images/DFu6Bri5cuYIVyEC6OTxtuZC6w.png?scale-down-to=512"
                        alt=""
                        className="brightness-0 w-[12rem] h-auto object-cover"
                      />
                      <img
                        src="https://framerusercontent.com/images/IDRNrtKWyB6T6o3dY4mUDqueC0.png?scale-down-to=512"
                        alt=""
                        className="brightness-0 w-[12rem] h-auto object-cover"
                      />
                      <img
                        src="https://framerusercontent.com/images/X5Lg2eapOCFOhSpAFsZNTW9BlY.png?scale-down-to=512"
                        alt=""
                        className="brightness-0 w-[12rem] h-auto object-cover"
                      />
                      <img
                        src="https://framerusercontent.com/images/PCQIe7uLIcRFBG5bKFWCX3niBek.png?scale-down-to=512"
                        alt=""
                        className="brightness-0 w-[12rem] h-auto object-cover"
                      />
                      <img
                        src="https://framerusercontent.com/images/8w3YBn3xA3P0u5w43PGhPo1jpYA.png?scale-down-to=512"
                        alt=""
                        className="brightness-0 w-[12rem] h-auto object-cover"
                      />
                      <img
                        src="https://framerusercontent.com/images/LZKUjkgnsVfFzQQN8ia8Vsx05Gc.png?scale-down-to=512"
                        alt=""
                        className="brightness-0 w-[12rem] h-auto object-cover"
                      />
                      <img
                        src="https://framerusercontent.com/images/0SV0avmvDSqmXrnokG46LzlhDY.png?scale-down-to=512"
                        alt=""
                        className="brightness-0 w-[12rem] h-auto object-cover"
                      />
                      <img
                        src="https://framerusercontent.com/images/OcncVh5JYd0fPDgeMql6apXe7eU.png?scale-down-to=512"
                        alt=""
                        className="brightness-0 w-[12rem] h-auto object-cover"
                      />
                      <img
                        src="https://framerusercontent.com/images/370YdQkcdjKWJ5KnsDqECHExB3c.png?scale-down-to=512"
                        alt=""
                        className="brightness-0 w-[12rem] h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Contact />
          <Footer />
        </div>
      </FadeInOnScroll>
    </>
  );
}
