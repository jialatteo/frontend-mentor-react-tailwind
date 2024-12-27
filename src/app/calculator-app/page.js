import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({ weight: "700" });

export default function CalculatorApp() {
  return (
    <div
      className={`${leagueSpartan.className} bg-calculator-main-background flex min-h-screen items-center justify-center text-white`}
    >
      <div className="flex max-w-[450px] flex-1 flex-col gap-4">
        <div className="mt-4 flex items-center justify-between">
          <p className="text-4xl">calc</p>
          <div className="flex items-center gap-4">
            <p className="text-xs">THEME</p>
            <div className="bg-calculator-toggle-and-keypad-background w-18 flex h-6 items-center justify-center gap-2 rounded-full p-1">
              <label className="flex cursor-pointer" htmlFor="theme-one">
                <input
                  id="theme-one"
                  name="theme-switcher"
                  type="radio"
                  value={0}
                  className="peer appearance-none"
                />
                <div className="peer-checked:bg-calculator-toggle-and-equals-key-background peer-checked:hover:bg-calculator-toggle-and-equals-key-background hover:bg-calculator-toggle-and-equals-key-background-hover relative h-4 w-4 rounded-full">
                  <span className="absolute -top-6 left-1 text-xs">1</span>
                </div>
              </label>
              <label className="flex cursor-pointer" htmlFor="theme-two">
                <input
                  id="theme-two"
                  name="theme-switcher"
                  type="radio"
                  value={1}
                  className="peer appearance-none"
                />
                <div className="peer-checked:bg-calculator-toggle-and-equals-key-background peer-checked:hover:bg-calculator-toggle-and-equals-key-background hover:bg-calculator-toggle-and-equals-key-background-hover relative h-4 w-4 rounded-full">
                  <span className="absolute -top-6 left-1 text-xs">2</span>
                </div>
              </label>
              <label className="flex cursor-pointer" htmlFor="theme-three">
                <input
                  id="theme-three"
                  name="theme-switcher"
                  type="radio"
                  value={2}
                  className="peer appearance-none"
                />
                <div className="peer-checked:bg-calculator-toggle-and-equals-key-background peer-checked:hover:bg-calculator-toggle-and-equals-key-background hover:bg-calculator-toggle-and-equals-key-background-hover relative h-4 w-4 rounded-full">
                  <span className="absolute -top-6 left-1 text-xs">3</span>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="bg-calculator-result-background rounded-md p-5">
          <p className="text-end text-4xl">399,981</p>
        </div>
        <div className="bg-calculator-toggle-and-keypad-background flex flex-col gap-4 rounded-md p-6 text-4xl">
          <div className="flex gap-4">
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              7
            </button>
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              8
            </button>
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              9
            </button>
            <button className="bg-calculator-function-key-background shadow-calculator-function-key-shadow hover:bg-calculator-function-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 text-3xl text-white shadow">
              DEL
            </button>
          </div>
          <div className="flex gap-4">
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              4
            </button>
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              5
            </button>
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              6
            </button>
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              +
            </button>
          </div>
          <div className="flex gap-4">
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              1
            </button>
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              2
            </button>
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              3
            </button>
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              -
            </button>
          </div>
          <div className="flex gap-4">
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              .
            </button>
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              0
            </button>
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              /
            </button>
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              x
            </button>
          </div>
          <div className="flex gap-4">
            <button className="bg-calculator-function-key-background shadow-calculator-function-key-shadow hover:bg-calculator-function-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 text-3xl text-white shadow">
              RESET
            </button>
            <button className="bg-calculator-toggle-and-equals-key-background shadow-calculator-equals-key-shadow hover:bg-calculator-toggle-and-equals-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 text-white shadow">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
