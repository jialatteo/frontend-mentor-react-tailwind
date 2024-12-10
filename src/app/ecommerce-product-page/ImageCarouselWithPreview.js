import { useState } from "react";

const images = [
  {
    thumbnail: "ecommerce-product-page/image-product-1-thumbnail.jpg",
    full: "ecommerce-product-page/image-product-1.jpg",
  },
  {
    thumbnail: "ecommerce-product-page/image-product-2-thumbnail.jpg",
    full: "ecommerce-product-page/image-product-2.jpg",
  },
  {
    thumbnail: "ecommerce-product-page/image-product-3-thumbnail.jpg",
    full: "ecommerce-product-page/image-product-3.jpg",
  },
  {
    thumbnail: "ecommerce-product-page/image-product-4-thumbnail.jpg",
    full: "ecommerce-product-page/image-product-4.jpg",
  },
];

export default function ImageCarouselWithPreview() {
  const [imageIndex, setImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState(false);

  return (
    <div className="">
      <div className="relative">
        <img
          className="mb-4 sm:hidden sm:rounded-lg"
          src={images[imageIndex]?.full}
          alt=""
        />
        <button className="hidden sm:block" onClick={() => setViewMode(true)}>
          <img
            className="mb-4 sm:rounded-lg"
            src={images[imageIndex]?.full}
            alt=""
          />
        </button>
        <button
          onClick={() => {
            if (imageIndex - 1 >= 0) setImageIndex(imageIndex - 1);
          }}
          disabled={imageIndex === 0}
          className={`group absolute top-1/2 -translate-y-1/2 sm:hidden ${
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
          className={`group absolute top-1/2 -translate-y-1/2 sm:hidden ${
            imageIndex >= images.length - 1
              ? "opacity-50"
              : "hover:border-ecommerce-product-page-orange"
          } right-4 rounded-full border bg-white py-3 pl-4 pr-3`}
          disabled={imageIndex >= images.length - 1}
        >
          {/* prettier-ignore */}
          <svg id="icon-next" className={`stroke-[#1D2026] ${ imageIndex >= images.length - 1 ? "stroke-gray-400" : "group-hover:stroke-ecommerce-product-page-orange" }`} width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8"  stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </button>
      </div>

      <div className="hidden justify-between sm:flex">
        {images.map((image, index) => (
          <button
            onClick={() => setImageIndex(index)}
            className={`group w-1/5 overflow-hidden rounded-lg border-4 ${imageIndex === index ? "border-ecommerce-product-page-orange" : ""}`}
          >
            <img
              className={`group-hover:opacity-30 ${imageIndex === index ? "opacity-30" : ""}`}
              src={image.thumbnail}
              alt=""
            />
          </button>
        ))}
      </div>

      {viewMode && (
        <div>
          <div
            onClick={() => setViewMode(false)}
            className="fixed inset-0 z-10 bg-black opacity-80"
          />
          <div className="fixed left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="relative mb-4 h-[15px]">
              <button
                className="absolute right-0 top-0"
                onClick={() => setViewMode(false)}
              >
                {/* prettier-ignore */}
                <svg id="icon-close" className="fill-white" width="14" height="15" xmlns="http://www.w3.org/2000/svg"> <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/> </svg>
              </button>
            </div>
            <div className="relative">
              <button
                onClick={() => {
                  if (imageIndex - 1 >= 0) setImageIndex(imageIndex - 1);
                }}
                disabled={imageIndex === 0}
                className={`group absolute top-1/2 -translate-y-1/2 ${
                  imageIndex === 0
                    ? "opacity-50"
                    : "hover:border-ecommerce-product-page-orange"
                } -left-5 rounded-full border bg-white py-3 pl-3 pr-4`}
              >
                {/* prettier-ignore */}
                <svg id="icon-previous" className={`stroke-[#1D2026] ${ imageIndex <= 0 ? "stroke-gray-400" : "group-hover:stroke-ecommerce-product-page-orange" }`}  width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
              </button>
              <button
                onClick={() => {
                  if (imageIndex + 1 < images.length)
                    setImageIndex(imageIndex + 1);
                }}
                className={`group absolute top-1/2 z-30 -translate-y-1/2 ${
                  imageIndex >= images.length - 1
                    ? "opacity-50"
                    : "hover:border-ecommerce-product-page-orange"
                } -right-5 rounded-full border bg-white py-3 pl-4 pr-3`}
                disabled={imageIndex >= images.length - 1}
              >
                {/* prettier-ignore */}
                <svg id="icon-next" className={`stroke-[#1D2026] ${ imageIndex >= images.length - 1 ? "stroke-gray-400" : "group-hover:stroke-ecommerce-product-page-orange" }`} width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8"  stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
              </button>
              <img
                className="mb-4 rounded-lg"
                src={images[imageIndex]?.full}
                alt=""
              />
            </div>
            <div className="hidden justify-center gap-4 sm:flex">
              {images.map((image, index) => (
                <button
                  onClick={() => setImageIndex(index)}
                  className={`group w-1/6 overflow-hidden rounded-lg border-4 border-transparent ${imageIndex === index ? "border-ecommerce-product-page-orange" : ""}`}
                >
                  <img
                    className={`group-hover:brightness-110 ${imageIndex === index ? "brightness-110" : ""}`}
                    src={image.thumbnail}
                    alt=""
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
