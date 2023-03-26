interface FooterProps {
  fixed?: boolean;
}

export default function Footer({ fixed }: FooterProps) {
  return (
    <footer>
      <div
        className={`max-w-[87.5rem] mx-auto text-center
          ${fixed ? "fixed bottom-0 inset-x-0 max-md:mb-10" : "max-md:mb-20"}
        `}
      >
        <div className="md:flex items-center justify-between text-sm mb-[2.15rem] mx-[1.75rem]">
          <div className="flex max-md:flex-col items-center max-md:justify-center max-md:gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 800"
                width="800"
                height="800"
                className="w-[1.83rem] h-[1.83rem] md:mr-3 animate-[spin_4s_ease_0s_infinite]"
                strokeWidth="20"
                stroke="#000"
              >
                <g clip-path="url(#__lottie_element_2)">
                  <g transform="matrix(0.7089225649833679,0.7052863240242004,-0.7052863240242004,0.7089225649833679,400,400)">
                    <path d=" M-243.26100158691406,-243.22900390625 C-243.26100158691406,-243.22900390625 243.26100158691406,243.22900390625 243.26100158691406,243.22900390625 M-243.22999572753906,243.25999450683594 C-243.22999572753906,243.25999450683594 243.22999572753906,-243.26100158691406 243.22999572753906,-243.26100158691406 M-344.0010070800781,0.02199999988079071 C-344.0010070800781,0.02199999988079071 344.0010070800781,-0.02199999988079071 344.0010070800781,-0.02199999988079071 M-0.02199999988079071,-344 C-0.02199999988079071,-344 0.02199999988079071,344 0.02199999988079071,344"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div>© Oli Harris 2023</div>
          </div>
          <div className="flex items-center gap-[0.9rem] max-md:justify-center max-md:mt-2">
            <div>
              <a
                href="https://twitter.com/olvhrs"
                className="hover:text-[#7F7F7F]"
              >
                Twitter
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/oliiharris/"
                className="hover:text-[#7F7F7F]"
              >
                Linkedin
              </a>
            </div>
            <div>
              <a href="mailto:oli@oh.studio" className="hover:text-[#7F7F7F]">
                Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
