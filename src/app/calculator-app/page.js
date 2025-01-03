"use client";
import { League_Spartan } from "next/font/google";
import { useState } from "react";

const leagueSpartan = League_Spartan({ weight: "700", subsets: ["latin"] });

export default function CalculatorApp() {
  const [resultString, setResultString] = useState("");
  const [displayString, setDisplayString] = useState("0");
  const [theme, setTheme] = useState("");

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  function formatNumberWithThousandSeparators(str) {
    if (str === "INVALID") {
      return str;
    }
    const [integerPart, decimalPart] = str.split(".");

    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ",",
    );

    if (!decimalPart) {
      return formattedIntegerPart;
    }

    return `${formattedIntegerPart}.${decimalPart}`;
  }

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
      setDisplayString(`${result.toFixed(2)}`);
      setResultString(`${result.toFixed(2)}`);
    } else {
      setDisplayString(`${result}`);
      setResultString(`${result}`);
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
      className={`${leagueSpartan.className} bg-calculator-main-background ${theme} flex min-h-screen items-center justify-center text-calculator-result-and-toggle-text`}
    >
      <div className="flex max-w-[450px] flex-1 flex-col gap-4 sm:p-4">
        <div className="mt-4 flex items-center justify-between">
          <p className="text-4xl">calc</p>
          <div className="flex items-center gap-4">
            <p className="text-xs">THEME</p>
            <div className="w-18 flex h-6 items-center justify-center gap-2 rounded-full bg-calculator-toggle-and-keypad-background p-1">
              <label className="flex cursor-pointer" htmlFor="theme-one">
                <input
                  id="theme-one"
                  name="theme-switcher"
                  type="radio"
                  value=""
                  className="peer appearance-none"
                  onChange={handleThemeChange}
                  defaultChecked
                />
                <div className="relative h-4 w-4 rounded-full hover:bg-calculator-toggle-and-equals-key-background-hover peer-checked:bg-calculator-toggle-and-equals-key-background peer-checked:hover:bg-calculator-toggle-and-equals-key-background">
                  <span className="absolute -top-6 left-1 text-xs">1</span>
                </div>
              </label>
              <label className="flex cursor-pointer" htmlFor="theme-two">
                <input
                  id="theme-two"
                  name="theme-switcher"
                  type="radio"
                  value="theme-two"
                  onChange={handleThemeChange}
                  className="peer appearance-none"
                />
                <div className="relative h-4 w-4 rounded-full hover:bg-calculator-toggle-and-equals-key-background-hover peer-checked:bg-calculator-toggle-and-equals-key-background peer-checked:hover:bg-calculator-toggle-and-equals-key-background">
                  <span className="absolute -top-6 left-1 text-xs">2</span>
                </div>
              </label>
              <label className="flex cursor-pointer" htmlFor="theme-three">
                <input
                  id="theme-three"
                  name="theme-switcher"
                  type="radio"
                  value="theme-three"
                  onChange={handleThemeChange}
                  className="peer appearance-none"
                />
                <div className="relative h-4 w-4 rounded-full hover:bg-calculator-toggle-and-equals-key-background-hover peer-checked:bg-calculator-toggle-and-equals-key-background peer-checked:hover:bg-calculator-toggle-and-equals-key-background">
                  <span className="absolute -top-6 left-1 text-xs">3</span>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="rounded-md bg-calculator-result-background p-5">
          <p className="text-end text-4xl">
            {formatNumberWithThousandSeparators(displayString)}
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-md bg-calculator-toggle-and-keypad-background p-6 text-4xl">
          <div className="flex gap-4">
            <button
              onClick={() => handleNumber(7)}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              7
            </button>
            <button
              onClick={() => handleNumber(8)}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              8
            </button>
            <button
              onClick={() => handleNumber(9)}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              9
            </button>
            <button
              onClick={() => handleDelete()}
              className="flex-1 rounded-lg bg-calculator-function-key-background pb-1 pt-2 text-2xl text-calculator-function-key-text shadow shadow-calculator-function-key-shadow hover:bg-calculator-function-key-background-hover sm:px-4 sm:text-3xl"
            >
              DEL
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleNumber(4)}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              4
            </button>
            <button
              onClick={() => handleNumber(5)}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              5
            </button>
            <button
              onClick={() => handleNumber(6)}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              6
            </button>
            <button
              onClick={handlePlus}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              +
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleNumber(1)}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              1
            </button>
            <button
              onClick={() => handleNumber(2)}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              2
            </button>
            <button
              onClick={() => handleNumber(3)}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              3
            </button>
            <button
              onClick={handleMinus}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              -
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleDecimal}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              .
            </button>
            <button
              onClick={() => handleNumber(0)}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              0
            </button>
            <button
              onClick={handleDivide}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              /
            </button>
            <button
              onClick={handleMultiply}
              className="flex-1 rounded-lg bg-calculator-regular-key-background pb-1 pt-2 text-calculator-regular-key-text shadow shadow-calculator-regular-key-shadow hover:bg-calculator-regular-key-background-hover sm:px-4"
            >
              x
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleReset}
              className="flex-1 rounded-lg bg-calculator-function-key-background pb-1 pt-2 text-3xl text-calculator-function-key-text shadow shadow-calculator-function-key-shadow hover:bg-calculator-function-key-background-hover sm:px-4"
            >
              RESET
            </button>
            <button
              onClick={handleEquals}
              className="flex-1 rounded-lg bg-calculator-toggle-and-equals-key-background pb-1 pt-2 text-calculator-equals-key-text shadow shadow-calculator-equals-key-shadow hover:bg-calculator-toggle-and-equals-key-background-hover sm:px-4"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
