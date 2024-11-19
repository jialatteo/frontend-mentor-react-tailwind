"use client";

import { useState } from "react";
import EmptyResultsSvg from "./EmptyResultsSvg";
import CalculatorSvg from "./CalculatorSvg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["500", "700"],
});

const validationSchema = yup.object().shape({
  mortgageType: yup
    .string()
    .oneOf(["repayment", "interestOnly"], "Invalid mortgage type")
    .required("Mortgage type is required"),
  mortgageAmount: yup
    .number()
    .typeError("Mortgage amount must be a number")
    .positive("Mortgage amount must be positive")
    .required("Mortgage amount is required"),
  mortgageTerm: yup
    .number()
    .typeError("Mortgage term must be a number")
    .integer("Mortgage term must be a whole number")
    .min(1, "Mortgage term must be at least 1 year")
    .max(50, "Mortgage term cannot exceed 50 years")
    .required("Mortgage term is required"),
  interestRate: yup
    .number()
    .typeError("Interest rate must be a number")
    .positive("Interest rate must be positive")
    .min(0, "Interest rate cannot be negative")
    .max(100, "Interest rate cannot exceed 100%")
    .required("Interest rate is required"),
});

export default function MortgageRepaymentCalculator() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      mortgageType: "repayment",
      mortgageAmount: null,
      mortgageTerm: null,
      interestRate: null,
    },
  });

  const [monthlyRepayment, setMonthlyRepayment] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);

  const onSubmit = (data) => {
    const numberOfMonths = parseInt(data.mortgageTerm) * 12;
    const monthlyInterestRate = parseFloat(data.interestRate) / 100 / 12;
    const amount = parseInt(data.mortgageAmount);

    if (data.mortgageType === "repayment") {
      const monthlyRepayment =
        (amount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
        (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

      setMonthlyRepayment(monthlyRepayment.toFixed(2));
      setTotalRepayment((monthlyRepayment * numberOfMonths).toFixed(2));
    }

    if (data.mortgageType == "interestOnly") {
      const monthlyRepayment = monthlyInterestRate * amount;
      setMonthlyRepayment(monthlyRepayment.toFixed(2));
      setTotalRepayment((monthlyRepayment * numberOfMonths).toFixed(2));
    }
  };

  const addCommasThousandSeparator = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div
      className={`flex min-h-screen items-center justify-center bg-mortgage-repayment-calculator-slate-100 ${plusJakartaSans.className}`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid h-screen max-w-[900px] overflow-hidden overflow-y-auto bg-white sm:mb-0 sm:h-auto sm:grid-cols-2 sm:rounded-xl"
      >
        <div className="relative p-6">
          <div className="mb-8 justify-between sm:flex">
            <p className="text-2xl font-bold text-mortgage-repayment-calculator-slate-900">
              Mortgage Calculator
            </p>
            <button
              type="button"
              onClick={() => {
                reset();
                setMonthlyRepayment(null);
                setTotalRepayment(null);
              }}
            >
              <p className="mt-2 text-mortgage-repayment-calculator-slate-700 underline hover:text-mortgage-repayment-calculator-slate-900 sm:mt-0">
                Clear All
              </p>
            </button>
          </div>
          <div className="group mb-6">
            <p className="mb-2 font-medium text-mortgage-repayment-calculator-slate-700">
              Mortgage Amount
            </p>
            <div
              className={`${errors?.mortgageAmount ? "border-mortgage-repayment-calculator-red" : "border-mortgage-repayment-calculator-slate-500 hover:border-mortgage-repayment-calculator-slate-900 group-focus-within:border-mortgage-repayment-calculator-lime"} flex h-12 w-full overflow-hidden rounded border`}
            >
              <div
                className={`${errors?.mortgageAmount ? "border-mortgage-repayment-calculator-slate-500 bg-mortgage-repayment-calculator-red text-white" : "bg-mortgage-repayment-calculator-slate-100 text-mortgage-repayment-calculator-slate-700 group-focus-within:bg-mortgage-repayment-calculator-lime"} flex items-center justify-center p-3 px-4 font-bold`}
              >
                £
              </div>
              <input
                className="w-full rounded-r pl-2 font-bold text-mortgage-repayment-calculator-slate-700 focus:outline-none"
                type="text"
                {...register("mortgageAmount")}
              />
            </div>
            {errors?.mortgageAmount && (
              <p className="mt-1 text-sm text-mortgage-repayment-calculator-red">
                {errors?.mortgageAmount?.message}
              </p>
            )}
          </div>
          <div className="mb-6 gap-6 sm:flex">
            <div className="group">
              <p className="mb-2 font-medium text-mortgage-repayment-calculator-slate-700">
                Mortgage Term
              </p>
              <div
                className={`${errors?.mortgageTerm ? "border-mortgage-repayment-calculator-red" : "border-mortgage-repayment-calculator-slate-500 hover:border-mortgage-repayment-calculator-slate-900 group-focus-within:border-mortgage-repayment-calculator-lime"} flex h-12 w-full overflow-hidden rounded border`}
              >
                <input
                  className="w-full rounded-l pl-2 font-bold focus:outline-none"
                  type="text"
                  {...register("mortgageTerm")}
                />
                <div
                  className={`${errors?.mortgageTerm ? "bg-mortgage-repayment-calculator-red text-white" : "bg-mortgage-repayment-calculator-slate-100 text-mortgage-repayment-calculator-slate-700 group-focus-within:bg-mortgage-repayment-calculator-lime"} flex items-center justify-center p-3 px-4 font-bold`}
                >
                  years
                </div>
              </div>
              {errors?.mortgageTerm && (
                <p className="mt-1 text-sm text-mortgage-repayment-calculator-red">
                  {errors?.mortgageTerm?.message}
                </p>
              )}
            </div>
            <div className="group mt-6 sm:mt-0">
              <p className="mb-2 font-medium text-mortgage-repayment-calculator-slate-700">
                Interest Rate
              </p>
              <div
                className={`${errors?.interestRate ? "border-mortgage-repayment-calculator-red" : "border-mortgage-repayment-calculator-slate-500 hover:border-mortgage-repayment-calculator-slate-900 group-focus-within:border-mortgage-repayment-calculator-lime"} flex h-12 w-full overflow-hidden rounded border`}
              >
                <input
                  className="w-full rounded-l pl-2 font-bold focus:outline-none"
                  type="text"
                  {...register("interestRate")}
                />
                <div
                  className={`${errors?.interestRate ? "bg-mortgage-repayment-calculator-red text-white" : "bg-mortgage-repayment-calculator-slate-100 text-mortgage-repayment-calculator-slate-700 group-focus-within:bg-mortgage-repayment-calculator-lime"} flex items-center justify-center p-3 px-4 font-bold`}
                >
                  %
                </div>
              </div>
              {errors?.interestRate && (
                <p className="mt-1 text-sm text-mortgage-repayment-calculator-red">
                  {errors?.interestRate?.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <p className="mb-2 font-medium text-mortgage-repayment-calculator-slate-700">
              Mortgage Type
            </p>
            <label
              htmlFor="repayment"
              className="mt-2 flex h-12 w-full cursor-pointer items-center rounded border border-mortgage-repayment-calculator-slate-500 px-3 hover:border-mortgage-repayment-calculator-lime has-[:checked]:border-mortgage-repayment-calculator-lime has-[:checked]:bg-mortgage-repayment-calculator-lime has-[:checked]:bg-opacity-25"
            >
              <div className="flex items-center justify-center">
                <input
                  name="mortgageType"
                  type="radio"
                  value="repayment"
                  id="repayment"
                  className="peer h-4 w-4 appearance-none rounded-full border-[1.5px] border-mortgage-repayment-calculator-slate-900 checked:border-mortgage-repayment-calculator-lime"
                  {...register("mortgageType")}
                />
                <div className="absolute h-2 w-2 rounded-full peer-checked:bg-mortgage-repayment-calculator-lime" />
              </div>
              <p className="ml-3 font-bold text-mortgage-repayment-calculator-slate-900">
                Repayment
              </p>
            </label>
            <label
              htmlFor="interestOnly"
              className="mt-2 flex h-12 w-full cursor-pointer items-center rounded border border-mortgage-repayment-calculator-slate-500 px-3 hover:border-mortgage-repayment-calculator-lime has-[:checked]:border-mortgage-repayment-calculator-lime has-[:checked]:bg-mortgage-repayment-calculator-lime has-[:checked]:bg-opacity-25"
            >
              <div className="flex items-center justify-center">
                <input
                  name="mortgageType"
                  type="radio"
                  value="interestOnly"
                  id="interestOnly"
                  className="peer h-4 w-4 appearance-none rounded-full border-[1.5px] border-mortgage-repayment-calculator-slate-900 checked:border-mortgage-repayment-calculator-lime"
                  {...register("mortgageType")}
                />
                <div className="absolute h-2 w-2 rounded-full peer-checked:bg-mortgage-repayment-calculator-lime" />
              </div>
              <p className="ml-3 font-bold text-mortgage-repayment-calculator-slate-900">
                Interest Only
              </p>
            </label>

            <button
              type="submit"
              className="mt-6 flex items-center justify-center rounded-3xl bg-mortgage-repayment-calculator-lime px-8 py-3 hover:bg-mortgage-repayment-calculator-lime hover:bg-opacity-30"
            >
              <CalculatorSvg />
              <p className="ml-3 text-lg font-bold text-mortgage-repayment-calculator-slate-900">
                Calculate Repayments
              </p>
            </button>
          </div>
        </div>
        {monthlyRepayment ? (
          <div className="flex flex-col bg-mortgage-repayment-calculator-slate-900 p-8 sm:rounded-bl-[48px]">
            <p className="mb-2 text-xl font-semibold text-white">
              Your Results
            </p>
            <p className="text-sm text-mortgage-repayment-calculator-slate-300">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              "calculate repayments again".
            </p>
            <div className="mt-10 divide-y divide-gray-700 rounded-t-md border-t-[3px] border-mortgage-repayment-calculator-lime bg-[#0E2431] p-6">
              <div>
                <p className="mb-3 text-sm text-mortgage-repayment-calculator-slate-300">
                  Your monthly repayments
                </p>
                <p className="mb-6 text-5xl font-bold text-mortgage-repayment-calculator-lime">
                  £{addCommasThousandSeparator(monthlyRepayment)}
                </p>
              </div>
              <div>
                <p className="mt-6 text-sm text-mortgage-repayment-calculator-slate-300">
                  Total you'll repay over the term
                </p>
                <p className="mt-2 text-xl font-bold text-white">
                  £{addCommasThousandSeparator(totalRepayment)}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center bg-mortgage-repayment-calculator-slate-900 p-8 sm:rounded-bl-[48px]">
            <EmptyResultsSvg />
            <p className="mb-2 text-xl font-semibold text-white">
              Results shown here
            </p>
            <p className="text-center text-sm text-mortgage-repayment-calculator-slate-300">
              Complete the form and click "calculate repayments" to see what
              your monthly repayments would be.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
