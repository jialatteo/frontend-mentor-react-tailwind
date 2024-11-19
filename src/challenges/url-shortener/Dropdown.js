import { useEffect } from "react";

export default function Dropdown({ isDropdownOpen, setIsDropdownOpen }) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsDropdownOpen]);

  return (
    <div
      className="relative h-8 w-8 md:hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* prettier-ignore */}
      <svg id="dropdown" onClick={() => setIsDropdownOpen(true)} className="h-8 w-8 cursor-pointer fill-url-shortener-grayish-violet hover:fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > {" "} <rect x="0" fill="none" width="24" height="24" />{" "} <g> {" "} <path d="M4 19h16v-2H4v2zm16-6H4v2h16v-2zM4 9v2h16V9H4zm16-4H4v2h16V5z" />{" "} </g>{" "} </svg>
      {isDropdownOpen ? (
        <div className="absolute right-0 top-10 w-[calc(100vw-4rem)] rounded-md bg-url-shortener-dark-violet px-4 py-8">
          <div className="flex flex-col items-center gap-1">
            <button className="w-full rounded-3xl py-2 text-xl font-semibold text-white hover:bg-url-shortener-very-dark-violet hover:bg-opacity-50">
              Features
            </button>
            <button className="w-full rounded-3xl py-2 text-xl font-semibold text-white hover:bg-url-shortener-very-dark-violet hover:bg-opacity-50">
              Pricing
            </button>
            <button className="w-full rounded-3xl py-2 text-xl font-semibold text-white hover:bg-url-shortener-very-dark-violet hover:bg-opacity-50">
              Resources
            </button>
          </div>
          <div className="my-6 h-[1px] bg-url-shortener-gray opacity-20"></div>
          <div className="flex flex-col items-center gap-4">
            <button className="w-full rounded-3xl py-2 text-xl font-semibold text-white hover:bg-url-shortener-very-dark-violet hover:bg-opacity-50">
              Login
            </button>
            <button className="w-full rounded-3xl bg-url-shortener-cyan py-2 text-xl font-semibold text-white hover:bg-[#99E3E2]">
              Sign up
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
