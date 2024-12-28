"use client";
import { League_Spartan } from "next/font/google";
import { useState } from "react";

const leagueSpartan = League_Spartan({ weight: "700" });

export default function CalculatorApp() {
  const [resultString, setResultString] = useState("");
  const [displayString, setDisplayString] = useState("0");

  const handleReset = () => {
    setDisplayString("0");
    setResultString("");
  };

  const handleDelete = () => {
    if (displayString.length <= 1) {
      setDisplayString("0");
    } else {
      setDisplayString(displayString.substring(0, displayString.length - 1));
    }

    if (displayString === "INVALID") {
      setDisplayString("0");
    }

    if (resultString.length <= 1) {
      setResultString("");
    }
    if (!["+", "-", "*", "/"].includes(resultString[resultString.length - 1])) {
      setResultString(resultString.substring(0, resultString.length - 1));
    }
  };

  const handleEquals = () => {
    let result;

    try {
      result = eval(resultString);
    } catch (error) {
      console.error("Invalid expression", error);
      setDisplayString("INVALID");
      return;
    }

    if (resultString.includes(".")) {
      setDisplayString(result.toFixed(2));
      setResultString(result.toFixed(2));
    } else {
      setDisplayString(result);
      setResultString(result);
    }
  };

  const handlePlus = () => {
    if (["+", "-", "*", "/"].includes(resultString[resultString.length - 1])) {
      const newResultString = resultString.slice(0, -1) + "+";
    } else {
      setResultString(resultString + "+");
    }
  };

  const handleMinus = () => {
    if (["+", "-", "*", "/"].includes(resultString[resultString.length - 1])) {
      const newResultString = resultString.slice(0, -1) + "-";
      setResultString(newResultString);
    } else {
      setResultString(resultString + "-");
    }
  };

  const handleMultiply = () => {
    if (["+", "-", "*", "/"].includes(resultString[resultString.length - 1])) {
      const newResultString = resultString.slice(0, -1) + "*";
      setResultString(newResultString);
    } else if (resultString === "") {
      setResultString("0*");
    } else {
      setResultString(resultString + "*");
    }
  };

  const handleDivide = () => {
    if (["+", "-", "*", "/"].includes(resultString[resultString.length - 1])) {
      const newResultString = resultString.slice(0, -1) + "/";
      setResultString(newResultString);
    } else if (resultString === "") {
      setResultString("0/");
    } else {
      setResultString(resultString + "/");
    }
  };

  const handleDecimal = () => {
    setResultString(resultString + ".");
    setDisplayString(displayString + ".");
  };

  const handleNumber = (n) => {
    if (
      displayString === "0" ||
      displayString === "INVALID" ||
      ["+", "-", "/", "*"].includes(resultString[resultString.length - 1])
    ) {
      setDisplayString(`${n}`);
    } else {
      setDisplayString(displayString + `${n}`);
    }
    setResultString(resultString + `${n}`);
  };

  return (
    <div
      className={`${leagueSpartan.className} theme-two bg-calculator-main-background flex min-h-screen items-center justify-center text-white`}
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
              onClick={handlePlus}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
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
              onClick={handleMinus}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              -
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleDecimal}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              .
            </button>
            <button
              onClick={() => handleNumber(0)}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              0
            </button>
            <button
              onClick={handleDivide}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              /
            </button>
            <button
              onClick={handleMultiply}
              className="text-calculator-primary-text bg-calculator-regular-key-background shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 shadow"
            >
              x
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleReset}
              className="bg-calculator-function-key-background shadow-calculator-function-key-shadow hover:bg-calculator-function-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 text-3xl text-white shadow"
            >
              RESET
            </button>
            <button
              onClick={handleEquals}
              className="bg-calculator-toggle-and-equals-key-background shadow-calculator-equals-key-shadow hover:bg-calculator-toggle-and-equals-key-background-hover flex-1 rounded-lg px-4 pb-1 pt-2 text-white shadow"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
