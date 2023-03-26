import FadeInOnScroll from "./FadeInOnScroll";

interface ContactProps {
  xl?: boolean;
}

export default function Contact({ xl }: ContactProps) {
  return (
    <div
      className={`flex items-center justify-center text-center px-4 ${
        xl ? "h-screen" : "h-[50vh]"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center mt-[12.8rem] mb-[12.25rem] ${
          xl
            ? "text-[2.25rem] leading-[2.6875rem] md:text-[3rem] md:leading-[3.65rem] lg:text-[4.5rem] lg:leading-[5.375rem] -translate-y-1"
            : "text-[1.875rem] leading-[2.25rem] md:text-[2.375rem] md:leading-[2.875rem]"
        }`}
      >
        <FadeInOnScroll>
          <div className="fadeIn">Let&apos;s work together.</div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="text-[#7F7F7F] hover:text-[#BFBFBF] fadeInSlow">
            <a href="mailto:oli@oh.studio">Get in touch.</a>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
}
