import { useState } from "react";

export default function ImageCarousel() {
  const images = [
    "ecommerce-product-page/image-product-1.jpg",
    "ecommerce-product-page/image-product-2.jpg",
    "ecommerce-product-page/image-product-3.jpg",
    "ecommerce-product-page/image-product-4.jpg",
  ];

  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="relative flex items-center justify-center bg-black sm:hidden">
      <button
        onClick={() => {
          if (imageIndex - 1 >= 0) setImageIndex(imageIndex - 1);
        }}
        disabled={imageIndex === 0}
        className={`group absolute ${
          imageIndex === 0
            ? "opacity-50"
            : "hover:border-ecommerce-product-page-orange"
        } left-4 rounded-full border bg-white py-3 pl-3 pr-4`}
      >
        {/* prettier-ignore */}
        <svg id="icon-previous" className={`stroke-[#1D2026] ${ imageIndex <= 0 ? "stroke-gray-400" : "group-hover:stroke-ecommerce-product-page-orange" }`}  width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
      </button>
      <button
        onClick={() => {
          if (imageIndex + 1 < images.length) setImageIndex(imageIndex + 1);
        }}
        className={`group absolute ${
          imageIndex >= images.length - 1
            ? "opacity-50"
            : "hover:border-ecommerce-product-page-orange"
        } right-4 rounded-full border bg-white py-3 pl-4 pr-3`}
        disabled={imageIndex >= images.length - 1}
      >
        {/* prettier-ignore */}
        <svg id="icon-next" className={`stroke-[#1D2026] ${ imageIndex >= images.length - 1 ? "stroke-gray-400" : "group-hover:stroke-ecommerce-product-page-orange" }`} width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8"  stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
      </button>
      <img src={images[imageIndex]} alt="product-image" />
    </div>
  );
}
