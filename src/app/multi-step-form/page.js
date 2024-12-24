"use client";
import { Ubuntu } from "next/font/google";
import { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
});

const validationSchemas = [
  Yup.object({
    name: Yup.string().required("Name is required"),
    emailAddress: Yup.string()
      .required("Email is required")
      .email("Invalid Email"),
    phoneNumber: Yup.number().required("Phone number is required"),
  }),
  Yup.object({
    plan: Yup.string()
      .oneOf(["arcade", "advanced", "pro"], "Please select a plan")
      .required("Plan is required"),
    isMonthlyBilling: Yup.boolean().required("Billing cycle is required"),
  }),
];

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);

  const methods = useForm({
    resolver: yupResolver(validationSchemas[activeStep]),
    defaultValues: {
      name: null,
      emailAddress: null,
      phoneNumber: null,
      plan: "arcade",
      isMonthlyBilling: true,
    },
    mode: "all",
  });

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors, isValid },
  } = methods;

  const handleBack = () => {
    if (activeStep === 0) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    reset({ ...getValues() });
  };

  const handleNext = () => {
    if (activeStep === 3) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    reset({ ...getValues() });
  };

  const isMonthlyBilling = watch("isMonthlyBilling");

  console.log("errors", errors);
  console.log("getValues", getValues());

  return (
    <div
      className={`${ubuntu.className} sm:bg-multi-step-form-magnolia flex min-h-screen flex-col items-center sm:justify-center sm:p-2`}
    >
      <div className="bg-multi-step-form-magnolia relative flex w-full max-w-[1000px] flex-col rounded-lg sm:flex-row sm:bg-white sm:p-4">
        <div className="relative h-32 w-full bg-[url('/multi-step-form/bg-sidebar-mobile.svg')] sm:h-[568px] sm:w-[274px] sm:rounded-xl sm:bg-[url('/multi-step-form/bg-sidebar-desktop.svg')]">
          <div className="absolute left-1/2 top-6 flex -translate-x-1/2 gap-2 sm:left-0 sm:top-10 sm:translate-x-8 sm:flex-col sm:gap-7">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-white bg-transparent text-sm font-bold text-white ${activeStep === 0 ? "bg-multi-step-form-light-blue text-multi-step-form-marine-blue border-multi-step-form-light-blue" : ""}`}
              >
                1
              </div>
              <div className="hidden sm:block">
                <p className="text-multi-step-form-cool-gray text-xs">STEP 1</p>
                <p className="text-sm font-bold text-white">YOUR INFO</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-white bg-transparent text-sm font-bold text-white ${activeStep === 1 ? "bg-multi-step-form-light-blue text-multi-step-form-marine-blue border-multi-step-form-light-blue" : ""}`}
              >
                2
              </div>
              <div className="hidden sm:block">
                <p className="text-multi-step-form-cool-gray text-xs">STEP 2</p>
                <p className="text-sm font-bold text-white">SELECT PLAN</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-white bg-transparent text-sm font-bold text-white ${activeStep === 2 ? "bg-multi-step-form-light-blue text-multi-step-form-marine-blue border-multi-step-form-light-blue" : ""}`}
              >
                3
              </div>
              <div className="hidden sm:block">
                <p className="text-multi-step-form-cool-gray text-xs">STEP 3</p>
                <p className="text-sm font-bold text-white">ADD-ONS</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-white bg-transparent text-sm font-bold text-white ${activeStep === 3 ? "bg-multi-step-form-light-blue text-multi-step-form-marine-blue border-multi-step-form-light-blue" : ""}`}
              >
                4
              </div>
              <div className="hidden sm:block">
                <p className="text-multi-step-form-cool-gray text-xs">STEP 4</p>
                <p className="text-sm font-bold text-white">SUMMARY</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative -top-14 mx-4 flex flex-1 flex-col justify-between rounded-lg bg-white p-6 sm:top-0 sm:mx-12 sm:pb-0">
          {activeStep === 0 && (
            <div>
              <h1 className="text-multi-step-form-marine-blue mb-1 text-2xl font-bold sm:text-3xl">
                Personal info
              </h1>
              <h2 className="text-multi-step-form-cool-gray mb-4 sm:mb-6">
                Please provide your name, email address and phone number.
              </h2>
              <div className="text-multi-step-form-marine-blue flex flex-col gap-3 sm:gap-6">
                <label
                  htmlFor="name"
                  className="flex flex-col gap-1 text-sm font-medium"
                >
                  Name
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g. Stephen King"
                    className="border-multi-step-form-light-gray h-10 rounded border px-3 py-1 font-bold placeholder:font-medium"
                    {...register("name")}
                  />
                  {errors?.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors?.name?.message}
                    </p>
                  )}
                </label>

                <label
                  htmlFor="name"
                  className="flex flex-col gap-1 text-sm font-medium"
                >
                  Email Address
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g. stephenking@lorem.com"
                    className="border-multi-step-form-light-gray h-10 rounded border px-3 py-1 font-bold placeholder:font-medium"
                    {...register("emailAddress")}
                  />
                  {errors?.emailAddress && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors?.emailAddress?.message}
                    </p>
                  )}
                </label>

                <label
                  htmlFor="name"
                  className="flex flex-col gap-1 text-sm font-medium"
                >
                  Phone Number
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g. +1 234 567 890"
                    className="border-multi-step-form-light-gray h-10 rounded border px-3 py-1 font-bold placeholder:font-medium"
                    {...register("phoneNumber")}
                  />
                  {errors?.phoneNumber && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors?.phoneNumber?.message}
                    </p>
                  )}
                </label>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div>
              <h1 className="text-multi-step-form-marine-blue mb-1 text-2xl font-bold sm:text-3xl">
                Select your plan
              </h1>
              <h2 className="text-multi-step-form-cool-gray mb-4 sm:mb-6">
                You have the option of monthly or yearly billing.
              </h2>
              <div className="flex flex-col gap-2">
                <label className="flex" htmlFor="arcade">
                  <input
                    id="arcade"
                    name="plan"
                    type="radio"
                    className="peer appearance-none"
                    value="arcade"
                    {...register("plan")}
                  />
                  <div className="peer-checked:bg-multi-step-form-alabaster hover:border-multi-step-form-purplish-blue border-multi-step-form-light-gray peer-checked:border-multi-step-form-purplish-blue flex-1 cursor-pointer rounded border p-3">
                    <div className="flex items-start gap-2">
                      {/* prettier-ignore */}
                      <svg id="icon-arcade" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>
                      <div className="flex flex-col gap-1">
                        <p className="text-multi-step-form-marine-blue font-bold leading-none">
                          Arcade
                        </p>
                        <p className="text-multi-step-form-cool-gray text-sm font-medium leading-none">
                          {isMonthlyBilling ? "$9/mo" : "$90/yr"}
                        </p>
                        {isMonthlyBilling && (
                          <p className="text-multi-step-form-marine-blue mt-1 text-xs leading-none">
                            2 months free
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </label>
                <label className="flex" htmlFor="advanced">
                  <input
                    id="advanced"
                    name="plan"
                    type="radio"
                    className="peer appearance-none"
                    value="advanced"
                    {...register("plan")}
                  />
                  <div className="peer-checked:bg-multi-step-form-alabaster hover:border-multi-step-form-purplish-blue border-multi-step-form-light-gray peer-checked:border-multi-step-form-purplish-blue flex-1 cursor-pointer rounded border p-3">
                    <div className="flex items-start gap-2">
                      {/* prettier-ignore */}
                      <svg id="advanced" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
                      <div className="flex flex-col gap-1">
                        <p className="text-multi-step-form-marine-blue font-bold leading-none">
                          Advanced
                        </p>
                        <p className="text-multi-step-form-cool-gray text-sm font-medium leading-none">
                          {isMonthlyBilling ? "$12/mo" : "$120/yr"}
                        </p>
                        {isMonthlyBilling && (
                          <p className="text-multi-step-form-marine-blue mt-1 text-xs leading-none">
                            2 months free
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </label>
                <label className="flex" htmlFor="pro">
                  <input
                    id="pro"
                    name="plan"
                    type="radio"
                    className="peer appearance-none"
                    value="pro"
                    {...register("plan")}
                  />
                  <div className="peer-checked:bg-multi-step-form-alabaster hover:border-multi-step-form-purplish-blue border-multi-step-form-light-gray peer-checked:border-multi-step-form-purplish-blue flex-1 cursor-pointer rounded border p-3">
                    <div className="flex items-start gap-2">
                      {/* prettier-ignore */}
                      <svg id="pro" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>
                      <div className="flex flex-col gap-1">
                        <p className="text-multi-step-form-marine-blue font-bold leading-none">
                          Pro
                        </p>
                        <p className="text-multi-step-form-cool-gray text-sm font-medium leading-none">
                          {isMonthlyBilling ? "$15/mo" : "$150/yr"}
                        </p>
                        {isMonthlyBilling && (
                          <p className="text-multi-step-form-marine-blue mt-1 text-xs leading-none">
                            2 months free
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className="bg-multi-step-form-alabaster mt-4 flex items-center justify-center gap-4 rounded p-3">
                <p
                  className={`font-medium ${isMonthlyBilling ? "text-multi-step-form-marine-blue" : "text-multi-step-form-cool-gray"}`}
                >
                  Monthly
                </p>
                <label for="toggle" className="flex cursor-pointer">
                  <input
                    type="checkbox"
                    id="toggle"
                    class="peer appearance-none"
                    {...register("isMonthlyBilling")}
                  />
                  <div class="relative block h-5 w-10 rounded-full bg-blue-900 p-1 before:absolute before:left-6 before:h-3 before:w-3 before:rounded-full before:bg-white peer-checked:before:left-1"></div>
                </label>
                <p
                  className={`font-medium ${isMonthlyBilling ? "text-multi-step-form-cool-gray" : "text-multi-step-form-marine-blue"}`}
                >
                  Yearly
                </p>
              </div>
            </div>
          )}

          <div className="hidden self-stretch sm:flex">
            <button
              onClick={handleBack}
              className="text-multi-step-form-cool-gray hover:text-multi-step-form-marine-blue m-2 mr-auto rounded bg-transparent px-3 py-2 text-sm font-medium disabled:hidden"
              disabled={activeStep === 0}
            >
              Go Back
            </button>
            <button
              onClick={handleNext}
              className="bg-multi-step-form-marine-blue m-2 ml-auto rounded px-3 py-2 text-sm text-white hover:bg-opacity-80 disabled:cursor-not-allowed disabled:bg-opacity-15"
              disabled={!isValid || activeStep === 3}
            >
              Next step
            </button>
          </div>
        </div>
      </div>
      <div className="mb-8 flex self-stretch sm:hidden">
        <button
          onClick={handleBack}
          className="text-multi-step-form-cool-gray hover:text-multi-step-form-marine-blue m-2 mr-auto rounded bg-transparent px-3 py-2 text-sm font-medium disabled:hidden"
          disabled={activeStep === 0}
        >
          Go Back
        </button>
        <button
          onClick={handleNext}
          className="bg-multi-step-form-marine-blue m-2 ml-auto rounded px-3 py-2 text-sm text-white hover:bg-opacity-80 disabled:cursor-not-allowed disabled:bg-opacity-15"
          disabled={!isValid || activeStep === 3}
        >
          Next step
        </button>
      </div>
    </div>
  );
}
