import BgBoostMobileSvg from "./images/BgBoostMobileSvg";
import BgBoostDesktopSvg from "./images/BgBoostDesktopSvg";
import BgShortenDesktopSvg from "./images/BgShortenDesktopSvg";
import IconTwitterSvg from "./images/IconTwitterSvg";
import IllustrationWorkingSvg from "./images/IllustrationWorkingSvg";
import LogoSvg from "./images/LogoSvg";

export default function UrlShortener() {
  return (
    <div className="font-poppins">
      <div className="flex w-full justify-between px-16 py-10 text-lg">
        <div className="flex items-center gap-10">
          <LogoSvg />
          <button className="font-semibold text-url-shortener-gray hover:text-url-shortener-very-dark-violet">
            Features
          </button>
          <button className="font-semibold text-url-shortener-gray hover:text-url-shortener-very-dark-violet">
            Pricing
          </button>
          <button className="font-semibold text-url-shortener-gray hover:text-url-shortener-very-dark-violet">
            Resources
          </button>
        </div>
        <div className="flex gap-10">
          <button className="font-semibold text-url-shortener-gray hover:text-url-shortener-very-dark-violet">
            Login
          </button>
          <button className="rounded-3xl bg-url-shortener-cyan px-6 py-2 font-semibold text-white hover:bg-opacity-50 hover:text-opacity-95">
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex items-center pl-16">
        <div className="w-[540px]">
          <p className="text-7xl font-bold leading-[1.15]">
            More than just shorter links
          </p>
          <p className="mb-6 text-xl font-medium leading-relaxed text-url-shortener-grayish-violet">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="rounded-3xl bg-url-shortener-cyan px-8 py-3 text-xl font-semibold text-white hover:bg-opacity-50 hover:text-opacity-95">
            Get Started
          </button>
        </div>
        <IllustrationWorkingSvg />
      </div>
      <div
        className="h-64 w-full bg-right-bottom"
        style={{
          backgroundImage: "url('/url-shortener/bg-boost-desktop.svg')",
        }}
      ></div>
    </div>
  );
}
