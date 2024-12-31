"use client";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center text-black">
      <div
        onClick={() => alert("clicked card")}
        className="group/card m-4 w-[600px] rounded-xl p-4 text-xl shadow"
      >
        <img
          className="h-40"
          src="/product-list-with-cart/active-states.jpg"
          alt="product-list-with-cart"
        />
        <div className="flex items-center justify-between">
          <button className="flex">
            <a
              className="group-hover/card:text-cyan-600"
              href="/product-list-with-cart"
            >
              Product List with Cart
            </a>
            {/* prettier-ignore */}
            <svg id="icon-diagonal-arrow" className="w-16 fill-slate-500   group-hover/card:-translate-y-1 group-hover/card:translate-x-1 group-hover/card:fill-cyan-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <g data-name="Layer 2"> <g data-name="diagonal-arrow-right-up"> <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/> <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/> </g> </g> </svg>
          </button>

          <button
            onClick={(e) => {
              alert("clicked github");
              e.stopPropagation();
            }}
            className="group/github relative flex"
          >
            {/* prettier-ignore */}
            <svg id="icon-github" className="w-10 group-hover/github:fill-cyan-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
          </button>
        </div>

        <div className="mr-1 inline-flex items-center gap-1 rounded-full bg-slate-200 bg-opacity-40 p-1 px-2">
          {/* prettier-ignore */}
          <svg id="icon-css" className="h-4 fill-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
          <p className="text-xs text-slate-500">CSS</p>
        </div>

        <div className="mr-1 inline-flex items-center gap-1 rounded-full bg-slate-200 bg-opacity-40 p-1 px-2">
          {/* prettier-ignore */}
          <svg id="icon-html" className="h-4 fill-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
          <p className="text-xs text-slate-500">HTML</p>
        </div>

        <div className="mr-1 inline-flex items-center gap-1 rounded-full bg-slate-200 bg-opacity-40 p-1 px-2">
          {/* prettier-ignore */}
          <svg id="icon-sqlite" className="fill-slate-500 h-4" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>SQLite icon</title><path d="M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z"/></svg>
          <p className="text-xs text-slate-500">SQLite</p>
        </div>

        <div className="mr-1 inline-flex items-center gap-1 rounded-full bg-slate-200 bg-opacity-40 p-1 px-2">
          {/* prettier-ignore */}
          <svg id="icon-tailwind" className="h-4 fill-slate-500" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_tailwind</title><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" /></svg>
          <p className="text-xs text-slate-500">Tailwind</p>
        </div>

        <div className="mr-1 inline-flex items-center gap-1 rounded-full bg-slate-200 bg-opacity-40 p-1 px-2">
          {/* prettier-ignore*/}
          <svg id="icon-react-hook-form" className="w-4 fill-slate-800 stroke-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203 202" fill-rule="evenodd" xmlnsV="https://vecta.io/nano"><path d="M157.995 8.5c10.08 0 19.206 4.087 25.812 10.692S194.5 34.924 194.5 45.003h0v111.994c0 10.08-4.086 19.206-10.692 25.812a36.39 36.39 0 0 1-25.813 10.691h0-112.99c-10.08 0-19.206-4.087-25.812-10.692S8.5 167.076 8.5 156.997h0V45.003c0-10.08 4.086-19.206 10.692-25.812A36.39 36.39 0 0 1 45.005 8.5h0z"  stroke-width="17" fill="none"/><path d="M133.385 51.604h-20.868c-1.53-4.766-5.981-8.001-11.009-8.001s-9.479 3.235-11.009 8.001H69.616c-8.222 0-14.887 6.632-14.887 14.813v77.177c0 8.181 6.665 14.813 14.887 14.813h63.769c8.222 0 14.887-6.632 14.887-14.813V66.417c0-8.181-6.665-14.813-14.887-14.813h0zM91.54 54.297a1.35 1.35 0 0 0 1.353-1.064c.886-4.046 4.486-6.932 8.648-6.932s7.762 2.885 8.648 6.932a1.35 1.35 0 0 0 1.353 1.064h7.281v8.821c0 2.231-1.818 4.04-4.06 4.04H88.305c-2.242 0-4.06-1.809-4.06-4.04v-8.821h7.294zm54.025 89.297c0 6.694-5.453 12.12-12.18 12.12H69.616c-6.727 0-12.18-5.426-12.18-12.12V66.417c0-6.694 5.453-12.12 12.18-12.12h11.923v8.821c0 3.719 3.03 6.733 6.767 6.733h26.39c3.737 0 6.767-3.015 6.767-6.733v-8.821h11.923c6.727 0 12.18 5.426 12.18 12.12v77.177zm-14.833-47.981h-23.819a1.35 1.35 0 0 0-1.353 1.347 1.35 1.35 0 0 0 1.353 1.347h23.819a1.35 1.35 0 0 0 1.353-1.347 1.35 1.35 0 0 0-1.353-1.347h0zm-35.186 0H71.727a1.35 1.35 0 0 0-1.353 1.347 1.35 1.35 0 0 0 1.353 1.347h23.819a1.35 1.35 0 0 0 1.353-1.347 1.35 1.35 0 0 0-1.353-1.347h0zm35.254 32.589h-23.886a1.35 1.35 0 0 0-1.353 1.347 1.35 1.35 0 0 0 1.353 1.347H130.8a1.35 1.35 0 0 0 1.353-1.347 1.35 1.35 0 0 0-1.353-1.347h0zm-35.187 0H71.727a1.35 1.35 0 0 0-1.353 1.347 1.35 1.35 0 0 0 1.353 1.347h23.886a1.35 1.35 0 0 0 1.353-1.347 1.35 1.35 0 0 0-1.353-1.347h0z"/></svg>
          <p className="text-xs text-slate-500">React Hook Form</p>
        </div>

        <div className="mr-1 inline-flex items-center gap-1 rounded-full bg-slate-200 bg-opacity-40 p-1 px-2">
          {/* prettier-ignore */}
          <svg id="icon-node" className="h-4 fill-slate-500" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,30a2.151,2.151,0,0,1-1.076-.288L11.5,27.685c-.511-.286-.262-.387-.093-.446a6.828,6.828,0,0,0,1.549-.7.263.263,0,0,1,.255.019l2.631,1.563a.34.34,0,0,0,.318,0l10.26-5.922a.323.323,0,0,0,.157-.278V10.075a.331.331,0,0,0-.159-.283L16.158,3.875a.323.323,0,0,0-.317,0L5.587,9.794a.33.33,0,0,0-.162.281V21.916a.315.315,0,0,0,.161.274L8.4,23.814c1.525.762,2.459-.136,2.459-1.038V11.085a.3.3,0,0,1,.3-.3h1.3a.3.3,0,0,1,.3.3V22.777c0,2.035-1.108,3.2-3.038,3.2a4.389,4.389,0,0,1-2.363-.642L4.661,23.788a2.166,2.166,0,0,1-1.076-1.872V10.075A2.162,2.162,0,0,1,4.661,8.2L14.922,2.276a2.246,2.246,0,0,1,2.156,0L27.338,8.2a2.165,2.165,0,0,1,1.077,1.87V21.916a2.171,2.171,0,0,1-1.077,1.872l-10.26,5.924A2.152,2.152,0,0,1,16,30Z"/><path d="M14.054,17.953a.3.3,0,0,1,.3-.3h1.327a.3.3,0,0,1,.295.251c.2,1.351.8,2.032,3.513,2.032,2.161,0,3.082-.489,3.082-1.636,0-.661-.261-1.152-3.62-1.481-2.808-.278-4.544-.9-4.544-3.144,0-2.07,1.745-3.305,4.67-3.305,3.287,0,4.914,1.141,5.12,3.589a.3.3,0,0,1-.295.323H22.566a.3.3,0,0,1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875-2.36,0-2.634.822-2.634,1.438,0,.746.324.964,3.51,1.385,3.153.417,4.651,1.007,4.651,3.223,0,2.236-1.864,3.516-5.115,3.516C14.995,21.743,14.054,19.682,14.054,17.953Z" /></svg>
          <p className="text-xs text-slate-500">Node</p>
        </div>

        <div className="mr-1 inline-flex items-center gap-1 rounded-full bg-slate-200 bg-opacity-40 p-1 px-2">
          {/* prettier-ignore */}
          <svg id="icon-javascript" className="h-4 fill-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
          <p className="text-xs text-slate-500">Javascript</p>
        </div>

        <div className="mr-1 inline-flex items-center gap-1 rounded-full bg-slate-200 bg-opacity-40 p-1 px-2">
          {/* prettier-ignore */}
          <svg id="icon-express" className="h-4 fill-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/></svg>
          <p className="text-xs text-slate-500">Express</p>
        </div>

        <div className="mr-1 inline-flex items-center gap-1 rounded-full bg-slate-200 bg-opacity-40 p-1 px-2">
          {/* prettier-ignore */}
          <svg id="icon-react" className="h-4 fill-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
          <p className="text-xs text-slate-500">React</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
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
