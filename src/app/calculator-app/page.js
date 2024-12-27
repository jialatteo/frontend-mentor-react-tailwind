import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({ weight: "700" });

export default function CalculatorApp() {
  return (
    <div
      className={`${leagueSpartan.className} bg-calculator-main-background flex min-h-screen items-center justify-center text-white`}
    >
      <div className="max-w-[500px] flex-1">
        <div className="flex items-center justify-between">
          <p>calc</p>
          <div className="flex items-center gap-4">
            <p>THEME</p>
            <div className="bg-calculator-toggle-and-keypad-background relative flex h-4 w-12 items-center justify-center rounded-full">
              <div className="absolute -top-5 right-1 flex gap-2">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <div className="flex gap-2">
                <label className="flex cursor-pointer" htmlFor="theme-one">
                  <input
                    id="theme-one"
                    name="theme-switcher"
                    type="radio"
                    value={0}
                    className="peer appearance-none"
                  />
                  <div className="bg-calculator-toggle-and-equals-key-background invisible h-2 w-2 rounded-full peer-checked:visible"></div>
                </label>
                <label className="flex cursor-pointer" htmlFor="theme-two">
                  <input
                    id="theme-two"
                    name="theme-switcher"
                    type="radio"
                    value={1}
                    className="peer appearance-none"
                  />
                  <div className="bg-calculator-toggle-and-equals-key-background invisible h-2 w-2 rounded-full peer-checked:visible"></div>
                </label>
                <label className="flex cursor-pointer" htmlFor="theme-three">
                  <input
                    id="theme-three"
                    name="theme-switcher"
                    type="radio"
                    value={2}
                    className="peer appearance-none"
                  />
                  <div className="bg-calculator-toggle-and-equals-key-background invisible h-2 w-2 rounded-full peer-checked:visible"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <p>calculator</p>
      </div>
    </div>
  );
}
