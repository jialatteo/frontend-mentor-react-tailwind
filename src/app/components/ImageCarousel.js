import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="relative flex items-center justify-center bg-black">
      <button
        onClick={() => {
          if (imageIndex - 1 >= 0) setImageIndex(imageIndex - 1);
        }}
        disabled={imageIndex === 0}
        className={`group absolute ${
          imageIndex === 0 ? "opacity-50" : "hover:border-cyan-500"
        } left-4 rounded-full border bg-white py-3 pl-3 pr-4`}
      >
        {/* prettier-ignore */}
        <svg id="icon-previous" className={`stroke-[#1D2026] ${ imageIndex <= 0 ? "stroke-gray-400" : "group-hover:stroke-cyan-500" }`}  width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
      </button>
      <button
        onClick={() => {
          if (imageIndex + 1 < images.length) setImageIndex(imageIndex + 1);
        }}
        className={`group absolute ${
          imageIndex >= images.length - 1
            ? "opacity-50"
            : "hover:border-cyan-500"
        } right-4 rounded-full border bg-white py-3 pl-4 pr-3`}
        disabled={imageIndex >= images.length - 1}
      >
        {/* prettier-ignore */}
        <svg id="icon-next" className={`stroke-[#1D2026] ${ imageIndex >= images.length - 1 ? "stroke-gray-400" : "group-hover:stroke-cyan-500" }`} width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8"  stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
      </button>
      <div className="h-[380px] w-[380px] overflow-auto">
        <div className="absolute left-0 right-0 bg-slate-800 bg-opacity-70 text-center font-bold text-white text-opacity-80">
          <span className="text-sm">{images[imageIndex].label}</span>
        </div>
        <img
          src={images[imageIndex].url}
          className="w-full"
          alt="product-image"
        />
      </div>
    </div>
  );
}
