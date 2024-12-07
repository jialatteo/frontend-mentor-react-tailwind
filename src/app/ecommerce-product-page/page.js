"use client";

import { Kumbh_Sans } from "next/font/google";
import { useState } from "react";

const KumbhSans = Kumbh_Sans({
  weight: ["400", "700"],
});

export default function EcommerceProductPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  return (
    <div className={`${KumbhSans.className} relative`}>
      {isDropdownOpen && (
        <div
          onClick={() => {
            setIsDropdownOpen(false);
          }}
          className="fixed inset-0 flex bg-black bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-48 bg-white p-4"
          >
            <div
              onClick={(e) => {
                setIsDropdownOpen(false);
              }}
              className="group cursor-pointer py-2 pr-2"
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
        </div>
      )}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-end gap-4">
          <div
            onClick={() => setIsDropdownOpen(true)}
            className="group cursor-pointer"
          >
            {/* prettier-ignore */}
            <svg id="icon-menu" className={`${isDropdownOpen ? "" : "hover:opacity-50"}`} width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
          </div>
          {/* prettier-ignore */}
          <svg id="sneakers-logo" width="138" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z" fill="#1D2026" fill-rule="nonzero"/></svg>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* prettier-ignore */}
            <svg id="icon-cart" onClick={() => setIsCartModalOpen(true)} className="hover:opacity-50 cursor-pointer" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
            {isCartModalOpen && (
              <div className="absolute -right-[50px] top-11 z-10 flex h-52 w-[calc(100vw-1.5rem)] flex-col divide-y-2 rounded-md bg-white">
                <p className="ml-4 mt-3 pb-3 text-sm font-bold">Cart</p>
                <div className="flex flex-1 items-center justify-center">
                  <p className="text-ecommerce-product-page-dark-grayish-blue text-center text-sm font-bold">
                    Your cart is empty.
                  </p>
                </div>
              </div>
            )}
            {isCartModalOpen && (
              <div
                onClick={() => {
                  setIsCartModalOpen(false);
                }}
                className="fixed inset-0 z-0"
              ></div>
            )}
          </div>
          <img
            className="hover:border-ecommerce-product-page-orange h-6 w-6 cursor-pointer rounded-full border"
            src="ecommerce-product-page/image-avatar.png"
            alt="avatar"
          />
        </div>
      </div>
      <div className="bg-orange-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis odio
        repellendus asperiores illum accusantium est earum provident, obcaecati
        deleniti modi in iusto rerum blanditiis! Enim officia, odit cum
        inventore sint maxime corrupti? Nisi similique nemo explicabo placeat
        doloremque ab magni molestiae dolorem molestias. Eos blanditiis dolores
        libero neque nobis, totam eaque aliquid accusamus mollitia quod
        voluptatem consequatur sed ut, maxime adipisci error similique iure hic
        fuga soluta repudiandae dolore vero tenetur beatae? Est nesciunt
        molestiae maxime, similique ad vitae temporibus vero dolore laboriosam
        atque incidunt. Totam laboriosam quia voluptas sed consequuntur aut
        atque quas cum id sequi, quae molestiae optio.
      </div>
      <div className="p-4 pb-14">
        <p className="text-ecommerce-product-page-dark-grayish-blue mb-2 text-xs font-bold tracking-widest">
          SNEAKER COMPANY
        </p>
        <p className="mb-3 text-3xl font-bold">Fall Limited Edition Sneakers</p>
        <p className="text-ecommerce-product-page-dark-grayish-blue text-sm leading-relaxed">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="my-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold">$125.00</p>
            <div className="rounded-md bg-black px-2 py-[2px] text-sm font-bold text-white">
              50%
            </div>
          </div>
          <p className="text-ecommerce-product-page-dark-grayish-blue font-bold line-through">
            $250.00
          </p>
        </div>
        <div className="bg-ecommerce-product-page-light-grayish-blue w-full rounded-lg">
          <div className="flex items-center justify-between py-1">
            <div className="group cursor-pointer p-4">
              {/* prettier-ignore */}
              <svg id="icon-minus" className="fill-ecommerce-product-page-orange group-hover:opacity-40"  width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill-rule="nonzero" xlinkHref="#a"/></svg>
            </div>
            <p className="font-bold">0</p>
            <div className="group cursor-pointer p-4">
              {/* prettier-ignore */}
              <svg id="icon-plus" className="fill-ecommerce-product-page-orange group-hover:opacity-40" width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill-rule="nonzero" xlinkHref="#b"/></svg>
            </div>
          </div>
        </div>
        <button className="bg-ecommerce-product-page-orange shadow-ecommerce-product-page-orange/20 mt-4 flex w-full items-center justify-center gap-2 rounded-lg p-4 shadow-xl hover:bg-opacity-40">
          {/* prettier-ignore */}
          <svg id="icon-cart" height="14" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"  fill-rule="nonzero"/></svg>
          <p className="text-sm font-bold">Add to cart</p>
        </button>
      </div>
    </div>
  );
}