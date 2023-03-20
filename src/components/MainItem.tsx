import Link from "next/link";

interface MainItemProps {
  src?: string;
  link?: string;
  text?: string;
  video?: boolean;
  blocked?: boolean;
  customClass?: string;
}

export default function MainItem({
  src,
  link,
  text,
  video,
  blocked,
  customClass,
}: MainItemProps) {
  return (
    <Link
      href="/"
      className="bigLinkItems relative flex-1 overflow-clip rounded-xl"
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        className={
          video
            ? `linkImages rounded-xl scale-[1.189] translate-y-[1.115rem] transition-all duration-300 ${customClass}`
            : "hidden"
        }
      />
      <img
        src={src}
        alt=""
        className={
          video
            ? "hidden"
            : `linkImages rounded-xl scale-[1.189] translate-y-[1.115rem] transition-all duration-300 ${customClass}`
        }
      />
      <div className="linkBlurs absolute inset-0 transition-all duration-300">
        <div className="relative">
          <p className="linkTexts absolute opacity-0 top-5 left-5 text-white transition-all duration-300 text-lg">
            {text}
          </p>
          <div className="linkArrows absolute top-10 right-10 p-[0.9rem] w-12 h-12 rounded-full opacity-0 transition-all duration-500 bg-white">
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
          </div>
        </div>
      </div>
    </Link>
  );
}
