import { useState } from "react";
import EmptyResultsSvg from "./EmptyResultsSvg";
import CalculatorSvg from "./CalculatorSvg";

export default function MortgageRepaymentCalculator() {
  const [mortgageType, setMortgageType] = useState("repayment");

  return (
    <div className="bg-mortgage-repayment-calculator-slate-100 font-plusJakartaSans flex min-h-screen items-center justify-center">
      <div className="grid max-w-[900px] grid-cols-2 overflow-hidden rounded-xl bg-white">
        <div className="p-6">
          <div className="mb-8 flex justify-between">
            <p className="text-mortgage-repayment-calculator-slate-900 text-2xl font-bold">
              Mortgage Calculator
            </p>
            <button>
              <p className="text-mortgage-repayment-calculator-slate-700 hover:text-mortgage-repayment-calculator-slate-900 underline">
                Clear All
              </p>
            </button>
          </div>
          <div className="group mb-6">
            <p className="text-mortgage-repayment-calculator-slate-700 mb-2 font-medium">
              Mortgage Amount
            </p>
            <div className="border-mortgage-repayment-calculator-slate-500 hover:border-mortgage-repayment-calculator-lime group-focus-within:border-mortgage-repayment-calculator-lime flex h-12 w-full rounded border">
              <div className="group-focus-within:bg-mortgage-repayment-calculator-lime bg-mortgage-repayment-calculator-slate-100 text-mortgage-repayment-calculator-slate-900 flex items-center justify-center rounded-l p-3 px-4 font-bold">
                £
              </div>
              <input
                className="w-full rounded-r pl-2 font-bold focus:outline-none"
                type="text"
              />
            </div>
          </div>
          <div className="mb-6 flex gap-6">
            <div>
              <p className="text-mortgage-repayment-calculator-slate-700 mb-2 font-medium">
                Mortgage Term
              </p>
              <div className="border-mortgage-repayment-calculator-slate-500 flex h-12 w-full rounded border">
                <input
                  className="w-full rounded-l pl-2 font-bold focus:outline-none"
                  type="text"
                />
                <div className="bg-mortgage-repayment-calculator-slate-100 text-mortgage-repayment-calculator-slate-700 flex items-center justify-center rounded-r p-3 font-bold">
                  years
                </div>
              </div>
            </div>
            <div>
              <p className="text-mortgage-repayment-calculator-slate-700 mb-2 font-medium">
                Interest Rate
              </p>
              <div className="border-mortgage-repayment-calculator-slate-500 flex h-12 w-full rounded border">
                <input
                  className="w-full rounded-l pl-2 font-bold focus:outline-none"
                  type="text"
                />
                <div className="bg-mortgage-repayment-calculator-slate-100 text-mortgage-repayment-calculator-slate-700 flex items-center justify-center rounded-r p-3 font-bold">
                  %
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-mortgage-repayment-calculator-slate-700 mb-2 font-medium">
              Mortgage Type
            </p>
            <button
              className={`hover:border-mortgage-repayment-calculator-lime mb-2 flex h-12 w-full items-center rounded border px-3 ${mortgageType == "repayment" ? "bg-mortgage-repayment-calculator-lime border-mortgage-repayment-calculator-lime bg-opacity-25" : "border-mortgage-repayment-calculator-slate-500"}`}
              onClick={() => setMortgageType("repayment")}
            >
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full border-[1.5px] ${mortgageType == "repayment" ? "border-mortgage-repayment-calculator-lime" : "border-mortgage-repayment-calculator-slate-900"} `}
              >
                {mortgageType == "repayment" && (
                  <div
                    className={
                      "bg-mortgage-repayment-calculator-lime h-[9px] w-[9px] rounded-full border"
                    }
                  ></div>
                )}
              </div>
              <p className="text-mortgage-repayment-calculator-slate-900 ml-3 font-bold">
                Repayment
              </p>
            </button>
            <button
              className={`hover:border-mortgage-repayment-calculator-lime flex h-12 w-full items-center rounded border px-3 ${mortgageType == "interestOnly" ? "bg-mortgage-repayment-calculator-lime border-mortgage-repayment-calculator-lime bg-opacity-25" : "border-mortgage-repayment-calculator-slate-500"}`}
              onClick={() => setMortgageType("interestOnly")}
            >
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full border-[1.5px] ${mortgageType == "interestOnly" ? "border-mortgage-repayment-calculator-lime" : "border-mortgage-repayment-calculator-slate-900"} `}
              >
                {mortgageType == "interestOnly" && (
                  <div
                    className={
                      "bg-mortgage-repayment-calculator-lime h-[9px] w-[9px] rounded-full border"
                    }
                  ></div>
                )}
              </div>
              <p className="text-mortgage-repayment-calculator-slate-900 ml-3 font-bold">
                Interest Only
              </p>
            </button>

            <button className="bg-mortgage-repayment-calculator-lime hover:bg-mortgage-repayment-calculator-lime mt-6 flex items-center justify-center rounded-3xl px-8 py-3 hover:bg-opacity-30">
              <CalculatorSvg />
              <p className="text-mortgage-repayment-calculator-slate-900 ml-3 text-lg font-bold">
                Calculate Repayments
              </p>
            </button>
          </div>
        </div>
        <div className="bg-mortgage-repayment-calculator-slate-900 flex flex-col items-center justify-center rounded-bl-[48px] p-8">
          <EmptyResultsSvg />
          <p className="mb-2 text-xl font-semibold text-white">
            Results shown here
          </p>
          <p className="text-mortgage-repayment-calculator-slate-300 text-center text-sm">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      </div>
    </div>
  );
}
