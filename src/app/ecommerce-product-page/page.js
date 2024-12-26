"use client";

import { Kumbh_Sans } from "next/font/google";
import { useState } from "react";
import ImageCarouselWithPreview from "./ImageCarouselWithPreview";

const KumbhSans = Kumbh_Sans({
  weight: ["400", "700"],
});

const SNEAKER_PRICE = 125;

export default function EcommerceProductPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [addCount, setAddCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  return (
    <div
      className={`${KumbhSans.className} mx-auto max-w-[1440px] sm:px-6 md:px-12`}
    >
      {isDropdownOpen && (
        <div>
          <div className="absolute left-0 z-20 h-full w-48 bg-white p-4">
            <div
              onClick={(e) => {
                setIsDropdownOpen(false);
              }}
              className="group w-6 cursor-pointer py-2 pr-2"
            >
              {/* prettier-ignore */}
              <svg id="icon-close" className="group-hover:opacity-50" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <p className="cursor-pointer font-bold hover:opacity-50">
                Collections
              </p>
              <p className="cursor-pointer font-bold hover:opacity-50">Men</p>
              <p className="cursor-pointer font-bold hover:opacity-50">Women</p>
              <p className="cursor-pointer font-bold hover:opacity-50">About</p>
              <p className="cursor-pointer font-bold hover:opacity-50">
                Contact
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              setIsDropdownOpen(false);
            }}
            className="fixed inset-0 z-10 flex bg-black bg-opacity-50"
          />
        </div>
      )}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-end gap-4 md:gap-8">
          <div
            onClick={() => setIsDropdownOpen(true)}
            className="group cursor-pointer sm:hidden"
          >
            {/* prettier-ignore */}
            <svg id="icon-menu" className={`${isDropdownOpen ? "" : "hover:opacity-50"}`} width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
          </div>
          {/* prettier-ignore */}
          <svg id="sneakers-logo" width="138" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z" fill="#1D2026" fill-rule="nonzero"/></svg>
          <div className="ml-4 hidden items-center gap-4 leading-none text-ecommerce-product-page-grayish-blue sm:flex md:gap-8">
            <button className="group relative">
              <p className="group-hover:text-ecommerce-product-page-very-dark-blue">
                Collections
              </p>
              <div className="absolute -bottom-[28px] h-[4px] w-full group-hover:bg-ecommerce-product-page-orange" />
            </button>
            <button className="group relative">
              <p className="group-hover:text-ecommerce-product-page-very-dark-blue">
                Men
              </p>
              <div className="absolute -bottom-[28px] h-[4px] w-full group-hover:bg-ecommerce-product-page-orange" />
            </button>
            <button className="group relative">
              <p className="group-hover:text-ecommerce-product-page-very-dark-blue">
                Women
              </p>
              <div className="absolute -bottom-[28px] h-[4px] w-full group-hover:bg-ecommerce-product-page-orange" />
            </button>
            <button className="group relative">
              <p className="group-hover:text-ecommerce-product-page-very-dark-blue">
                About
              </p>
              <div className="absolute -bottom-[28px] h-[4px] w-full group-hover:bg-ecommerce-product-page-orange" />
            </button>
            <button className="group relative">
              <p className="group-hover:text-ecommerce-product-page-very-dark-blue">
                Contact
              </p>
              <div className="absolute -bottom-[28px] h-[4px] w-full group-hover:bg-ecommerce-product-page-orange" />
            </button>
          </div>
        </div>
        <div className="flex items-center sm:relative">
          <button
            onClick={() => setIsCartModalOpen(true)}
            className="group relative"
          >
            {/* prettier-ignore */}
            <svg id="icon-cart"  className="group-hover:opacity-50 cursor-pointer" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
            {cartCount !== 0 && (
              <div className="absolute -right-2 -top-2 rounded-2xl bg-ecommerce-product-page-orange px-2 text-xs font-bold text-white group-hover:opacity-70">
                {cartCount}
              </div>
            )}
          </button>
          <img
            className="ml-4 h-6 w-6 cursor-pointer rounded-full border hover:border-ecommerce-product-page-orange sm:ml-8"
            src="ecommerce-product-page/image-avatar.png"
            alt="avatar"
          />
          {isCartModalOpen && (
            <div>
              <div className="absolute left-2 right-2 top-16 z-20 flex min-h-52 flex-col divide-y-2 rounded-md bg-white shadow-xl sm:-left-[300px] sm:-right-2 sm:top-12">
                <p className="ml-4 mt-3 pb-3 text-sm font-bold">Cart</p>
                {cartCount <= 0 ? (
                  <div className="flex flex-1 items-center justify-center">
                    <p className="text-center text-sm font-bold text-ecommerce-product-page-dark-grayish-blue">
                      Your cart is empty.
                    </p>
                  </div>
                ) : (
                  <div className="p-4 pt-4">
                    <div className="flex justify-between gap-3">
                      <div className="flex">
                        <img
                          className="mr-4 w-12 rounded"
                          src="ecommerce-product-page/image-product-1-thumbnail.jpg"
                          alt=""
                        />
                        <div className="text-ecommerce-product-page-dark-grayish-blue">
                          <p>Fall Limited Edition Sneakers</p>
                          <p>
                            ${SNEAKER_PRICE.toFixed(2)} x {cartCount}{" "}
                            <span className="font-bold text-ecommerce-product-page-very-dark-blue">
                              ${(cartCount * SNEAKER_PRICE).toFixed(2)}
                            </span>
                          </p>
                        </div>
                      </div>
                      <button onClick={() => setCartCount(0)}>
                        {/* prettier-ignore */}
                        <svg id="icon-delete" className="hover:fill-ecommerce-product-page-very-dark-blue fill-[#C3CAD9]" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use  fill-rule="nonzero" xlinkHref="#a"/></svg>
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        setCartCount(0);
                        setAddCount(0);
                        setIsCartModalOpen(false);
                      }}
                      className="mt-4 w-full rounded-lg bg-ecommerce-product-page-orange py-3 font-bold hover:bg-opacity-40"
                    >
                      Checkout
                    </button>
                  </div>
                )}
              </div>
              <div
                onClick={() => {
                  setIsCartModalOpen(false);
                }}
                className="fixed inset-0 z-10"
              />
            </div>
          )}
        </div>
      </div>
      <div className="my-2 mb-16 hidden h-[1px] w-full bg-ecommerce-product-page-light-grayish-blue sm:block" />
      <div className="sm:flex sm:gap-6 sm:pb-32 md:gap-14">
        <ImageCarouselWithPreview />
        <div className="p-4 pb-14">
          <p className="mb-2 text-xs font-bold tracking-widest text-ecommerce-product-page-dark-grayish-blue sm:mb-4">
            SNEAKER COMPANY
          </p>
          <p className="mb-3 text-3xl font-bold sm:mb-10">
            Fall Limited Edition Sneakers
          </p>
          <p className="text-sm leading-relaxed text-ecommerce-product-page-dark-grayish-blue">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="my-4 flex items-center justify-between sm:flex-col sm:items-start">
            <div className="flex items-center gap-3">
              <p className="text-2xl font-bold">${SNEAKER_PRICE.toFixed(2)}</p>
              <div className="rounded-md bg-black px-2 py-[2px] text-sm font-bold text-white">
                50%
              </div>
            </div>
            <p className="font-bold text-ecommerce-product-page-dark-grayish-blue line-through sm:mt-2">
              $250.00
            </p>
          </div>
          <div className="sm:flex sm:gap-4">
            <div className="w-full rounded-lg bg-ecommerce-product-page-light-grayish-blue sm:max-w-40">
              <div className="flex items-center justify-between py-1">
                <button
                  onClick={() => {
                    if (addCount >= 1) setAddCount(addCount - 1);
                  }}
                  className="group cursor-pointer p-4"
                >
                  {/* prettier-ignore */}
                  <svg id="icon-minus" className="fill-ecommerce-product-page-orange group-hover:opacity-40"  width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill-rule="nonzero" xlinkHref="#a"/></svg>
                </button>
                <p className="font-bold">{addCount}</p>
                <button
                  onClick={() => setAddCount(addCount + 1)}
                  className="group cursor-pointer p-4"
                >
                  {/* prettier-ignore */}
                  <svg id="icon-plus" className="fill-ecommerce-product-page-orange group-hover:opacity-40" width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill-rule="nonzero" xlinkHref="#b"/></svg>
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                setCartCount(cartCount + addCount);
                setAddCount(0);
              }}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-ecommerce-product-page-orange p-4 shadow-xl shadow-ecommerce-product-page-orange/20 hover:bg-opacity-40 sm:mt-0"
            >
              {/* prettier-ignore */}
              <svg id="icon-cart" height="14" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"  fill-rule="nonzero"/></svg>
              <p className="text-sm font-bold">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
