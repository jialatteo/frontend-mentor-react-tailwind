"use client";
import { Ubuntu } from "next/font/google";
import { useState } from "react";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
});

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  return (
    <div
      className={`${ubuntu.className} sm:bg-multi-step-form-magnolia flex min-h-screen flex-col items-center sm:justify-center sm:p-2`}
    >
      <div className="bg-multi-step-form-magnolia relative flex w-full max-w-[1000px] flex-col rounded-lg p-4 sm:flex-row sm:bg-white">
        <div className="relative h-32 w-full bg-[url('/multi-step-form/bg-sidebar-mobile.svg')] sm:h-[568px] sm:w-[274px] sm:rounded-xl sm:bg-[url('/multi-step-form/bg-sidebar-desktop.svg')]">
          <div className="absolute left-1/2 top-6 flex -translate-x-1/2 gap-2">
            <button
              className={`h-8 w-8 rounded-full border border-white bg-transparent text-sm font-bold text-white ${step === 1 ? "bg-multi-step-form-light-blue text-multi-step-form-purplish-blue border-multi-step-form-light-blue" : ""}`}
              onClick={() => setStep(1)}
            >
              1
            </button>
            <button
              className={`h-8 w-8 rounded-full border border-white bg-transparent text-sm font-bold text-white ${step === 2 ? "bg-multi-step-form-light-blue text-multi-step-form-purplish-blue border-multi-step-form-light-blue" : ""}`}
              onClick={() => setStep(2)}
            >
              2
            </button>
            <button
              className={`h-8 w-8 rounded-full border border-white bg-transparent text-sm font-bold text-white ${step === 3 ? "bg-multi-step-form-light-blue text-multi-step-form-purplish-blue border-multi-step-form-light-blue" : ""}`}
              onClick={() => setStep(3)}
            >
              3
            </button>
            <button
              className={`h-8 w-8 rounded-full border border-white bg-transparent text-sm font-bold text-white ${step === 4 ? "bg-multi-step-form-light-blue text-multi-step-form-purplish-blue border-multi-step-form-light-blue" : ""}`}
              onClick={() => setStep(4)}
            >
              4
            </button>
          </div>
        </div>

        <div className="relative -top-14 mx-4 h-full flex-1 rounded-lg bg-white p-6 sm:top-0 sm:mx-12">
          <h1 className="text-multi-step-form-marine-blue mb-1 text-2xl font-bold">
            Personal info
          </h1>
          <h2 className="text-multi-step-form-cool-gray mb-4">
            Please provide your name, email address and phone number
          </h2>
          <div className="text-multi-step-form-marine-blue flex flex-col gap-3">
            <label htmlFor="name" className="flex flex-col text-sm">
              Name
              <input
                type="text"
                id="name"
                placeholder="e.g. Stephen King"
                className="border-multi-step-form-light-gray h-10 rounded border px-3 py-1 font-bold placeholder:font-medium"
              />
            </label>

            <label htmlFor="name" className="flex flex-col text-sm">
              Email Address
              <input
                type="text"
                id="name"
                placeholder="e.g. stephenking@lorem.com"
                className="border-multi-step-form-light-gray h-10 rounded border px-3 py-1 font-bold placeholder:font-medium"
              />
            </label>

            <label htmlFor="name" className="flex flex-col text-sm">
              Phone Number
              <input
                type="text"
                id="name"
                placeholder="e.g. +1 234 567 890"
                className="border-multi-step-form-light-gray h-10 rounded border px-3 py-1 font-bold placeholder:font-medium"
              />
            </label>
          </div>
        </div>

        <div className="absolute bottom-4 right-20 hidden sm:block">
          <button className="bg-multi-step-form-marine-blue m-2 rounded px-3 py-2 text-sm text-white hover:bg-opacity-80">
            Next step
          </button>
        </div>
      </div>
      <div className="mb-8 flex self-end sm:hidden">
        <button className="bg-multi-step-form-marine-blue m-2 rounded px-3 py-2 text-sm text-white hover:bg-opacity-80">
          Next step
        </button>
      </div>
    </div>
  );
}
