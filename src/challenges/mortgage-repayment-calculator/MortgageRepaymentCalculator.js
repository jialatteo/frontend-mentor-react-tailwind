import { useState } from "react";
import EmptyResultsSvg from "./EmptyResultsSvg";
import CalculatorSvg from "./CalculatorSvg";

export default function MortgageRepaymentCalculator() {
  const [mortgageType, setMortgageType] = useState("repayment");
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const handleMortgageAmount = (e) => {
    const value = e.target.valu.replace(/,/g, "");
  };

  return (
    <div className="bg-mortgage-repayment-calculator-slate-100 font-plusJakartaSans flex min-h-screen items-center justify-center">
      <form
        noValidate
        className="grid max-w-[900px] grid-cols-2 overflow-hidden rounded-xl bg-white"
      >
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
            <div className="border-mortgage-repayment-calculator-slate-500 hover:border-mortgage-repayment-calculator-slate-900 group-focus-within:border-mortgage-repayment-calculator-lime flex h-12 w-full rounded border">
              <div className="group-focus-within:bg-mortgage-repayment-calculator-lime bg-mortgage-repayment-calculator-slate-100 text-mortgage-repayment-calculator-slate-700 flex items-center justify-center rounded-l p-3 px-4 font-bold">
                £
              </div>
              <input
                className="w-full rounded-r pl-2 font-bold focus:outline-none"
                type="text"
                required
              />
            </div>
          </div>
          <div className="mb-6 flex gap-6">
            <div className="group">
              <p className="text-mortgage-repayment-calculator-slate-700 mb-2 font-medium">
                Mortgage Term
              </p>
              <div className="border-mortgage-repayment-calculator-slate-500 group-focus-within:border-mortgage-repayment-calculator-lime flex h-12 w-full rounded border">
                <input
                  className="w-full rounded-l pl-2 font-bold focus:outline-none"
                  type="text"
                />
                <div className="bg-mortgage-repayment-calculator-slate-100 group-focus-within:bg-mortgage-repayment-calculator-lime text-mortgage-repayment-calculator-slate-700 flex items-center justify-center rounded-r p-3 font-bold">
                  years
                </div>
              </div>
            </div>
            <div className="group">
              <p className="text-mortgage-repayment-calculator-slate-700 mb-2 font-medium">
                Interest Rate
              </p>
              <div className="border-mortgage-repayment-calculator-slate-500 group-focus-within:border-mortgage-repayment-calculator-lime flex h-12 w-full rounded border">
                <input
                  className="w-full rounded-l pl-2 font-bold focus:outline-none"
                  type="text"
                />
                <div className="bg-mortgage-repayment-calculator-slate-100 text-mortgage-repayment-calculator-slate-700 group-focus-within:bg-mortgage-repayment-calculator-lime flex items-center justify-center rounded-r p-3 font-bold">
                  %
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-mortgage-repayment-calculator-slate-700 mb-2 font-medium">
              Mortgage Type
            </p>
            <label
              htmlFor="repayment"
              className="hover:border-mortgage-repayment-calculator-lime has-[:checked]:bg-mortgage-repayment-calculator-lime border-mortgage-repayment-calculator-slate-500 has-[:checked]:border-mortgage-repayment-calculator-lime mt-2 flex h-12 w-full cursor-pointer items-center rounded border px-3 has-[:checked]:bg-opacity-25"
              onClick={() => setMortgageType("repayment")}
            >
              <div className="flex items-center justify-center">
                <input
                  name="mortgageType"
                  type="radio"
                  id="repayment"
                  defaultChecked
                  className="border-mortgage-repayment-calculator-slate-900 checked:border-mortgage-repayment-calculator-lime peer h-4 w-4 appearance-none rounded-full border-[1.5px]"
                />
                <div className="peer-checked:bg-mortgage-repayment-calculator-lime absolute h-2 w-2 rounded-full" />
              </div>
              <p className="text-mortgage-repayment-calculator-slate-900 ml-3 font-bold">
                Repayment
              </p>
            </label>
            <label
              htmlFor="interestOnly"
              className="hover:border-mortgage-repayment-calculator-lime has-[:checked]:bg-mortgage-repayment-calculator-lime border-mortgage-repayment-calculator-slate-500 has-[:checked]:border-mortgage-repayment-calculator-lime mt-2 flex h-12 w-full cursor-pointer items-center rounded border px-3 has-[:checked]:bg-opacity-25"
              onClick={() => setMortgageType("interestOnly")}
            >
              <div className="flex items-center justify-center">
                <input
                  name="mortgageType"
                  type="radio"
                  id="interestOnly"
                  className="border-mortgage-repayment-calculator-slate-900 checked:border-mortgage-repayment-calculator-lime peer h-4 w-4 appearance-none rounded-full border-[1.5px]"
                />
                <div className="peer-checked:bg-mortgage-repayment-calculator-lime absolute h-2 w-2 rounded-full" />
              </div>
              <p className="text-mortgage-repayment-calculator-slate-900 ml-3 font-bold">
                Interest Only
              </p>
            </label>

            <button
              type="submit"
              className="bg-mortgage-repayment-calculator-lime hover:bg-mortgage-repayment-calculator-lime mt-6 flex items-center justify-center rounded-3xl px-8 py-3 hover:bg-opacity-30"
            >
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
      </form>
    </div>
  );
}
