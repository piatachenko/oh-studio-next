import Link from "next/link";

interface MainItemProps {
  src?: string;
  link?: string;
  text?: string;
  video?: boolean;
  blocked?: boolean;
  notLink?: boolean;
  customClass?: string;
}

export default function MainItem({
  src,
  link,
  text,
  video,
  blocked,
  notLink,
  customClass,
}: MainItemProps) {
  return (
    <>
      {!notLink ? (
        <Link
          href="/"
          className="bigLinkItems relative flex-1 overflow-clip rounded-xl"
        >
          {video ? (
            <video
              src={src}
              autoPlay
              muted
              loop
              className={`linkImages rounded-xl scale-[1.189] translate-y-[1.115rem] transition-all duration-300 ${customClass}`}
            />
          ) : (
            <img
              src={src}
              alt=""
              className={`linkImages rounded-xl scale-[1.189] translate-y-[1.115rem] transition-all duration-300 ${customClass}`}
            />
          )}
          <span className="linkBlurs absolute inset-0 transition-all duration-300 block">
            <span className="relative block">
              <span className="linkTexts absolute opacity-0 top-5 left-5 text-white transition-all duration-300 text-lg">
                {text}
              </span>
              <span className="linkArrows absolute top-10 right-10 p-[0.9rem] w-12 h-12 rounded-full opacity-0 transition-all duration-500 bg-white block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(0, 0, 0)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-full h-full"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </span>
          </span>
        </Link>
      ) : blocked ? (
        <div className="bigLinkItems relative flex-1 overflow-clip rounded-xl">
          {video ? (
            <video
              src={src}
              autoPlay
              muted
              loop
              className={`linkImages rounded-xl scale-[1.189] translate-y-[1.115rem] transition-all duration-300 ${customClass}`}
            />
          ) : (
            <img
              src={src}
              alt=""
              className={`linkImages rounded-xl scale-[1.189] translate-y-[1.115rem] transition-all duration-300 ${customClass}`}
            />
          )}
          <span className="linkBlurs absolute inset-0 transition-all duration-300 block">
            <span className="relative block">
              <span className="linkTexts absolute opacity-0 top-5 left-5 text-white transition-all duration-300 text-lg">
                {text} <br />
                <span className="text-[#838383] -translate-y-0.5 block">
                  Coming Soon
                </span>
              </span>
              <span className="linkArrows absolute top-10 right-10 p-[0.9rem] w-12 h-12 rounded-full opacity-0 transition-all duration-500 bg-black block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-full h-full"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>
            </span>
          </span>
        </div>
      ) : (
        <div className="relative flex-1 overflow-clip rounded-xl h-full">
          {video ? (
            <video
              src={src}
              autoPlay
              muted
              loop
              className={`min-h-full min-w-full object-cover ${customClass}`}
            />
          ) : (
            <img
              src={src}
              alt=""
              className={`min-h-full min-w-full object-cover ${customClass}`}
            />
          )}
        </div>
      )}
    </>
  );
}
