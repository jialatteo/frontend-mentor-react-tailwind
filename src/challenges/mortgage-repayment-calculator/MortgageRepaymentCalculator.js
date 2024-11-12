import { useState } from "react";
import EmptyResultsSvg from "./EmptyResultsSvg";
import CalculatorSvg from "./CalculatorSvg";

export default function MortgageRepaymentCalculator() {
  const [mortgageType, setMortgageType] = useState("repayment");
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const getMonthlyRepayment = () => {
    const numberOfMonths = parseInt(mortgageTerm) * 12;
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const amount = parseInt(mortgageAmount);

    if (mortgageType === "repayment") {
      return (
        (amount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
        (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1)
      ).toFixed(2);
    }

    if (mortgageType == "interestOnly") {
      return (monthlyInterestRate * amount).toFixed(2);
    }
  };

  const getTotalRepayment = () => {
    const numberOfMonths = parseInt(mortgageTerm) * 12;
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const amount = parseInt(mortgageAmount);

    if (mortgageType === "repayment") {
      return (
        ((amount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
          (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1)) *
        numberOfMonths
      ).toFixed(2);
    }

    if (mortgageType == "interestOnly") {
      return (monthlyInterestRate * amount * numberOfMonths).toFixed(2);
    }
  };

  const formatToMoneyString = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                onChange={(e) => setMortgageAmount(e.target.value)}
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
                  onChange={(e) => setMortgageTerm(e.target.value)}
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
                  onChange={(e) => setInterestRate(e.target.value)}
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
        {isNaN(getMonthlyRepayment()) ? (
          <div className="bg-mortgage-repayment-calculator-slate-900 flex flex-col items-center justify-center rounded-bl-[48px] p-8">
            <EmptyResultsSvg />
            <p className="mb-2 text-xl font-semibold text-white">
              Results shown here
            </p>
            <p className="text-mortgage-repayment-calculator-slate-300 text-center text-sm">
              Complete the form and click "calculate repayments" to see what
              your monthly repayments would be.
            </p>
          </div>
        ) : (
          <div className="bg-mortgage-repayment-calculator-slate-900 flex flex-col rounded-bl-[48px] p-8">
            <p className="mb-2 text-xl font-semibold text-white">
              Your Results
            </p>
            <p className="text-mortgage-repayment-calculator-slate-300 text-sm">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              "calculate repayments again".
            </p>
            <div className="border-mortgage-repayment-calculator-lime mt-10 divide-y divide-gray-700 rounded-t-md border-t-[3px] bg-[#0E2431] p-6">
              <div>
                <p className="text-mortgage-repayment-calculator-slate-300 mb-3 text-sm">
                  Your monthly repayments
                </p>
                <p className="text-mortgage-repayment-calculator-lime mb-6 text-5xl font-bold">
                  £{formatToMoneyString(getMonthlyRepayment())}
                </p>
              </div>
              <div>
                <p className="text-mortgage-repayment-calculator-slate-300 mt-6 text-sm">
                  Total you'll repay over the term
                </p>
                <p className="mt-2 text-xl font-bold text-white">
                  £{formatToMoneyString(getTotalRepayment())}
                </p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
