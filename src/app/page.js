export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-3 gap-8">
        <div className="w-40 rounded-xl p-4 text-xl shadow">
          <img
            className="h-40 w-40"
            src="/product-list-with-cart/active-states.jpg"
            alt="product-list-with-cart"
          />
          <p>Product List with Cart</p>
          <div className="flex items-center gap-2 rounded-3xl bg-slate-600 p-1">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 bg-opacity-50">
              {/* prettier-ignore */}
              <svg id="icon-css" className="w-4"  xmlns="http://www.w3.org/2000/svg" aria-label="CSS3" role="img" viewBox="0 0 512 512"><path fill="#264de4" d="M72 460L30 0h451l-41 460-184 52"/><path fill="#2965f1" d="M256 37V472l149-41 35-394"/><path fill="#ebebeb" d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"/><path fill="#ffffff" d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"/></svg>
            </div>
            <p className="text-xs text-white">CSS</p>
          </div>
          {/* prettier-ignore */}
          <svg id="icon-html" className="w-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/> </svg>
          {/* prettier-ignore */}
          <svg id="icon-sqlite" className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.554 6.555" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="2.983" y1=".53" x2="2.983" y2="4.744" id="A" gradientUnits="userSpaceOnUse"><stop stop-color="#97d9f6" offset="0%"/><stop stop-color="#0f80cc" offset="92.024%"/><stop stop-color="#0f80cc" offset="100%"/></linearGradient></defs><path d="M4.96.29H.847c-.276 0-.5.226-.5.5v4.536c0 .276.226.5.5.5h2.71c-.03-1.348.43-3.964 1.404-5.54z" fill="#0f80cc"/><path d="M4.81.437H.847c-.196 0-.355.16-.355.355v4.205c.898-.345 2.245-.642 3.177-.628A28.93 28.93 0 0 1 4.811.437z" fill="url(#A)"/><path d="M5.92.142c-.282-.25-.623-.15-.96.148l-.15.146c-.576.61-1.1 1.742-1.276 2.607a2.38 2.38 0 0 1 .148.426l.022.1.022.102s-.005-.02-.026-.08l-.014-.04a.461.461 0 0 0-.009-.022c-.038-.087-.14-.272-.187-.352a8.789 8.789 0 0 0-.103.321c.132.242.212.656.212.656s-.007-.027-.04-.12c-.03-.083-.176-.34-.21-.4-.06.22-.083.368-.062.404.04.07.08.2.115.324a7.52 7.52 0 0 1 .132.666l.005.062a6.11 6.11 0 0 0 .015.75c.026.313.075.582.137.726l.042-.023c-.09-.284-.128-.655-.112-1.084.025-.655.175-1.445.454-2.268C4.548 1.938 5.2.94 5.798.464c-.545.492-1.282 2.084-1.502 2.673-.247.66-.422 1.28-.528 1.873.182-.556.77-.796.77-.796s.29-.356.626-.865l-.645.172-.208.092s.53-.323.987-.47c.627-.987 1.31-2.39.622-3.002" fill="#003b57"/></svg>
          {/* prettier-ignore */}
          <svg id="icon-tailwind" className="w-4 fill-[#44a8b3]" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_tailwind</title><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" /></svg>
          {/* prettier-ignore*/}
          <svg id="icon-react-hook-form" className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203 202" fill-rule="evenodd" xmlnsV="https://vecta.io/nano"><path d="M157.995 8.5c10.08 0 19.206 4.087 25.812 10.692S194.5 34.924 194.5 45.003h0v111.994c0 10.08-4.086 19.206-10.692 25.812a36.39 36.39 0 0 1-25.813 10.691h0-112.99c-10.08 0-19.206-4.087-25.812-10.692S8.5 167.076 8.5 156.997h0V45.003c0-10.08 4.086-19.206 10.692-25.812A36.39 36.39 0 0 1 45.005 8.5h0z" stroke="#fff" stroke-width="17" fill="#ec5990"/><path d="M133.385 51.604h-20.868c-1.53-4.766-5.981-8.001-11.009-8.001s-9.479 3.235-11.009 8.001H69.616c-8.222 0-14.887 6.632-14.887 14.813v77.177c0 8.181 6.665 14.813 14.887 14.813h63.769c8.222 0 14.887-6.632 14.887-14.813V66.417c0-8.181-6.665-14.813-14.887-14.813h0zM91.54 54.297a1.35 1.35 0 0 0 1.353-1.064c.886-4.046 4.486-6.932 8.648-6.932s7.762 2.885 8.648 6.932a1.35 1.35 0 0 0 1.353 1.064h7.281v8.821c0 2.231-1.818 4.04-4.06 4.04H88.305c-2.242 0-4.06-1.809-4.06-4.04v-8.821h7.294zm54.025 89.297c0 6.694-5.453 12.12-12.18 12.12H69.616c-6.727 0-12.18-5.426-12.18-12.12V66.417c0-6.694 5.453-12.12 12.18-12.12h11.923v8.821c0 3.719 3.03 6.733 6.767 6.733h26.39c3.737 0 6.767-3.015 6.767-6.733v-8.821h11.923c6.727 0 12.18 5.426 12.18 12.12v77.177zm-14.833-47.981h-23.819a1.35 1.35 0 0 0-1.353 1.347 1.35 1.35 0 0 0 1.353 1.347h23.819a1.35 1.35 0 0 0 1.353-1.347 1.35 1.35 0 0 0-1.353-1.347h0zm-35.186 0H71.727a1.35 1.35 0 0 0-1.353 1.347 1.35 1.35 0 0 0 1.353 1.347h23.819a1.35 1.35 0 0 0 1.353-1.347 1.35 1.35 0 0 0-1.353-1.347h0zm35.254 32.589h-23.886a1.35 1.35 0 0 0-1.353 1.347 1.35 1.35 0 0 0 1.353 1.347H130.8a1.35 1.35 0 0 0 1.353-1.347 1.35 1.35 0 0 0-1.353-1.347h0zm-35.187 0H71.727a1.35 1.35 0 0 0-1.353 1.347 1.35 1.35 0 0 0 1.353 1.347h23.886a1.35 1.35 0 0 0 1.353-1.347 1.35 1.35 0 0 0-1.353-1.347h0z" fill="#fff"/></svg>
          {/* prettier-ignore */}
          <svg id="icon-node" className="w-4 fill-[#83cd29]" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,30a2.151,2.151,0,0,1-1.076-.288L11.5,27.685c-.511-.286-.262-.387-.093-.446a6.828,6.828,0,0,0,1.549-.7.263.263,0,0,1,.255.019l2.631,1.563a.34.34,0,0,0,.318,0l10.26-5.922a.323.323,0,0,0,.157-.278V10.075a.331.331,0,0,0-.159-.283L16.158,3.875a.323.323,0,0,0-.317,0L5.587,9.794a.33.33,0,0,0-.162.281V21.916a.315.315,0,0,0,.161.274L8.4,23.814c1.525.762,2.459-.136,2.459-1.038V11.085a.3.3,0,0,1,.3-.3h1.3a.3.3,0,0,1,.3.3V22.777c0,2.035-1.108,3.2-3.038,3.2a4.389,4.389,0,0,1-2.363-.642L4.661,23.788a2.166,2.166,0,0,1-1.076-1.872V10.075A2.162,2.162,0,0,1,4.661,8.2L14.922,2.276a2.246,2.246,0,0,1,2.156,0L27.338,8.2a2.165,2.165,0,0,1,1.077,1.87V21.916a2.171,2.171,0,0,1-1.077,1.872l-10.26,5.924A2.152,2.152,0,0,1,16,30Z"/><path d="M14.054,17.953a.3.3,0,0,1,.3-.3h1.327a.3.3,0,0,1,.295.251c.2,1.351.8,2.032,3.513,2.032,2.161,0,3.082-.489,3.082-1.636,0-.661-.261-1.152-3.62-1.481-2.808-.278-4.544-.9-4.544-3.144,0-2.07,1.745-3.305,4.67-3.305,3.287,0,4.914,1.141,5.12,3.589a.3.3,0,0,1-.295.323H22.566a.3.3,0,0,1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875-2.36,0-2.634.822-2.634,1.438,0,.746.324.964,3.51,1.385,3.153.417,4.651,1.007,4.651,3.223,0,2.236-1.864,3.516-5.115,3.516C14.995,21.743,14.054,19.682,14.054,17.953Z" /></svg>
          {/* prettier-ignore */}
          <svg id="icon-javascript" className="w-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="2" width="28" height="28" fill="#FFCA28"/> <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E"/> <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E"/> </svg>
          {/* prettier-ignore */}
          <svg id="icon-diagonal-arrow" className="w-4 fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <g data-name="Layer 2"> <g data-name="diagonal-arrow-right-up"> <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/> <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/> </g> </g> </svg>
          {/* prettier-ignore */}
          <svg id="icon-react" className="w-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/> </svg>
          <button className="flex w-full gap-4 bg-black px-2">
            {/* prettier-ignore */}
            <svg id="icon-github" className="w-4 z-10 fill-white" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>
            <span className="text-xs text-white">View repostitory</span>
          </button>

          <a
            className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
            href="/product-list-with-cart"
          >
            View project
          </a>
        </div>

        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/mortgage-repayment-calculator"
        >
          <img
            className="h-40 w-40"
            src="/mortgage-repayment-calculator/active-states.jpg"
            alt="mortgage-repayment-calculator"
          />
          Mortgage Repayment Calculator
        </a>
        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/url-shortener"
        >
          <img
            className="h-40 w-40"
            src="/url-shortener/desktop-active-states.jpg"
            alt="url-shortener"
          />
          URL Shortener
        </a>
        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/job-listings"
        >
          <img
            className="h-40 w-40"
            src="/job-listings/active-states.jpg"
            alt="job-listings"
          />
          Job Listings
        </a>
        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/ecommerce-product-page"
        >
          <img
            className="h-40 w-40"
            src="/ecommerce-product-page/active-states-basket-filled.jpg"
            alt="ecommerce-product-page"
          />
          Ecommerce Product Page
        </a>
        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/interactive-comments-section"
        >
          <img
            className="h-40 w-40"
            src="/interactive-comments-section/active-states.jpg"
            alt="interactive-comments-section"
          />
          Interactive Comments Section
        </a>
        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/multi-step-form"
        >
          <img
            className="h-40 w-40"
            src="/multi-step-form/active-states-step-1.jpg"
            alt="multi-step-form"
          />
          Multi Step Form
        </a>
        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/calculator-app"
        >
          <img
            className="h-40 w-40"
            src="/calculator-app/active-states-theme-1.jpg"
            alt="calculator-app"
          />
          Calculator App
        </a>

        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/launch-countdown-timer"
        >
          <img
            className="h-40 w-40"
            src="/launch-countdown-timer/active-states.jpg"
            alt="launch-countdown-timer"
          />
          Launch Countdown Timer
        </a>
      </div>
    </div>
  );
}
