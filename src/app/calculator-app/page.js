"use client";
import { League_Spartan } from "next/font/google";
import { useState } from "react";

const leagueSpartan = League_Spartan({ weight: "700" });

export default function CalculatorApp() {
  const [result, setResult] = useState(0);
  const [displayString, setDisplayString] = useState("0");
  const [nextOperation, setNextOperation] = useState("append");

  const handleReset = () => {
    setDisplayString("0");
    setResult(0);
    setNextOperation("overwrite");
  };

  const handleDelete = () => {
    if (displayString.length <= 1) {
      setDisplayString("0");
    } else {
      setDisplayString(displayString.substring(0, displayString.length - 1));
    }
    setNextOperation("append");
  };

  const handleNumber = (n) => {
    if (nextOperation === "overwrite") {
      setDisplayString(`${n}`);
      setNextOperation("append");
    }

    if (nextOperation === "append") {
      if (displayString === "0") {
        setDisplayString(`${n}`);
      } else {
        setDisplayString(displayString + `${n}`);
      }
    }

    if (nextOperation === "+") {
      setDisplayString(`${n}`);
      setNextOperation("append");
    }

    if (nextOperation === "-") {
      setDisplayString(`${Number(displayString) - n}`);
      setNextOperation("overwrite");
    }

    if (nextOperation === "*") {
      if (displayString === "0" || displayString === "") {
        setDisplayString("0");
      } else {
        setDisplayString(`${Number(displayString) * n}`);
      }
      setNextOperation("overwrite");
    }

    if (nextOperation === "/") {
      if (displayString === "0" || displayString === "") {
        setDisplayString("0");
      } else {
        setDisplayString(`${Number(displayString) / n}`);
      }
      setNextOperation("overwrite");
    }
  };

  return (
    <div
      className={`${leagueSpartan.className} bg-calculator-main-background flex min-h-screen items-center justify-center text-white`}
    >
      <div className="flex max-w-[450px] flex-1 flex-col gap-4 p-4">
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
                  defaultChecked
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
          <p className="text-end text-4xl">{displayString}</p>
        </div>
        <div className="bg-calculator-toggle-and-keypad-background flex flex-col gap-4 rounded-md p-6 text-4xl">
          <div className="flex gap-4">
            <button
              onClick={() => handleNumber(7)}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              7
            </button>
            <button
              onClick={() => handleNumber(8)}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              8
            </button>
            <button
              onClick={() => handleNumber(9)}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              9
            </button>
            <button
              onClick={() => handleDelete()}
              className="bg-calculator-function-key-background shadow-calculator-function-key-shadow hover:bg-calculator-function-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 text-3xl text-white shadow"
            >
              DEL
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleNumber(4)}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              4
            </button>
            <button
              onClick={() => handleNumber(5)}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              5
            </button>
            <button
              onClick={() => handleNumber(6)}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              6
            </button>
            <button
              onClick={() => setNextOperation("+")}
              className="bg-calculator-function-key-background shadow-calculator-function-key-shadow hover:bg-calculator-function-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 text-3xl text-white shadow"
            >
              +
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleNumber(1)}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              1
            </button>
            <button
              onClick={() => handleNumber(2)}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              2
            </button>
            <button
              onClick={() => handleNumber(3)}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              3
            </button>
            <button
              onClick={() => setNextOperation("-")}
              className="bg-calculator-function-key-background shadow-calculator-function-key-shadow hover:bg-calculator-function-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 text-3xl text-white shadow"
            >
              -
            </button>
          </div>
          <div className="flex gap-4">
            <button className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow">
              .
            </button>
            <button
              onClick={() => handleNumber(3)}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              0
            </button>
            <button
              onClick={() => setNextOperation("/")}
              className="bg-calculator-function-key-background shadow-calculator-function-key-shadow hover:bg-calculator-function-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 text-3xl text-white shadow"
            >
              /
            </button>
            <button
              onClick={() => setNextOperation("*")}
              className="bg-calculator-function-key-background shadow-calculator-function-key-shadow hover:bg-calculator-function-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 text-3xl text-white shadow"
            >
              x
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleReset()}
              className="bg-calculator-function-key-background shadow-calculator-function-key-shadow hover:bg-calculator-function-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 text-3xl text-white shadow"
            >
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
