"use client";
import { Ubuntu } from "next/font/google";
import { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { get, useForm } from "react-hook-form";

// fix the error message supposed to not take up space and be right top hand corner of text input
// create thank you for last page. see if there is a isSubmitted in react hook form?
// change the go next for step 4 to submit. create submit function
// fix the stupid ecommerce 2 image carousel shit
// start of the stupid calculator

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
});

const validationSchemas = [
  Yup.object({
    name: Yup.string().required("Name is required"),
    emailAddress: Yup.string()
      .required("Email is required")
      .email("Invalid Email"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^[0-9]+$/,
        "Phone number must only contain digits. No whitespaces.",
      )
      .test(
        "is-valid-phone-number",
        "Singapore phone number must be 8 digits",
        (value) => {
          return value && value.length === 8;
        },
      ),
  }),
  Yup.object({
    plan: Yup.string()
      .oneOf(["arcade", "advanced", "pro"], "Please select a plan")
      .required("Plan is required"),
    isMonthlyBilling: Yup.boolean().required("Billing cycle is required"),
  }),
  Yup.object({
    addOns: Yup.array().of(
      Yup.string().oneOf(
        ["onlineService", "largerStorage", "customizableProfile"],
        "Invalid add-on",
      ),
    ),
  }),
  Yup.object({}),
];

const pricing = {
  plan: {
    arcade: { monthly: 9, yearly: 90 },
    advanced: { monthly: 12, yearly: 120 },
    pro: { monthly: 15, yearly: 150 },
  },
  onlineService: { monthly: 1, yearly: 10 },
  largerStorage: { monthly: 2, yearly: 20 },
  customizableProfile: { monthly: 2, yearly: 20 },
};

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
      addOns: [],
    },
    mode: "all",
  });

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors, isValid, isSubmitted },
  } = methods;

  const calculateYearlyTotal = () => {
    const plan = pricing.plan[getValues("plan")].yearly;
    const addOns = getValues("addOns").reduce(
      (total, currAddOn) => total + pricing[currAddOn].yearly,
      0,
    );
    return plan + addOns;
  };

  const calculateMonthlyTotal = () => {
    const plan = pricing.plan[getValues("plan")].monthly;
    const addOns = getValues("addOns").reduce(
      (total, currPlan) => total + pricing[currPlan].monthly,
      0,
    );
    return plan + addOns;
  };

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

  const onSubmit = (data) => {
    console.log("data", data);
  };

  console.log("isSubmitted", isSubmitted);

  const isMonthlyBilling = watch("isMonthlyBilling");

  return (
    <div
      className={`${ubuntu.className} flex min-h-screen flex-col items-center sm:justify-center sm:bg-multi-step-form-magnolia sm:p-2`}
    >
      <div className="relative flex w-full max-w-[900px] flex-col rounded-lg bg-multi-step-form-magnolia sm:flex-row sm:bg-white sm:p-4">
        <div className="relative h-32 w-full bg-[url('/multi-step-form/bg-sidebar-mobile.svg')] sm:h-[568px] sm:w-[274px] sm:rounded-xl sm:bg-[url('/multi-step-form/bg-sidebar-desktop.svg')]">
          <div className="absolute left-1/2 top-6 flex -translate-x-1/2 gap-2 sm:left-0 sm:top-10 sm:translate-x-8 sm:flex-col sm:gap-7">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold ${activeStep === 0 ? "border-multi-step-form-light-blue bg-multi-step-form-light-blue text-multi-step-form-marine-blue" : "border-white bg-multi-step-form-purplish-blue text-white"}`}
              >
                1
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-multi-step-form-cool-gray">STEP 1</p>
                <p className="text-sm font-bold text-white">YOUR INFO</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold ${activeStep === 1 ? "border-multi-step-form-light-blue bg-multi-step-form-light-blue text-multi-step-form-marine-blue" : "border-white bg-multi-step-form-purplish-blue text-white"}`}
              >
                2
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-multi-step-form-cool-gray">STEP 2</p>
                <p className="text-sm font-bold text-white">SELECT PLAN</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold ${activeStep === 2 ? "border-multi-step-form-light-blue bg-multi-step-form-light-blue text-multi-step-form-marine-blue" : "border-white bg-multi-step-form-purplish-blue text-white"}`}
              >
                3
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-multi-step-form-cool-gray">STEP 3</p>
                <p className="text-sm font-bold text-white">ADD-ONS</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold ${activeStep === 3 ? "border-multi-step-form-light-blue bg-multi-step-form-light-blue text-multi-step-form-marine-blue" : "border-white bg-multi-step-form-purplish-blue text-white"}`}
              >
                4
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-multi-step-form-cool-gray">STEP 4</p>
                <p className="text-sm font-bold text-white">SUMMARY</p>
              </div>
            </div>
          </div>
        </div>

        <div className="min[800px]:px-6 relative -top-14 mx-4 flex flex-1 flex-col justify-between rounded-lg bg-white p-6 sm:top-0 sm:px-0 sm:pb-0 min-[800px]:mx-12">
          {activeStep === 0 && (
            <div>
              <h1 className="mb-1 text-2xl font-bold text-multi-step-form-marine-blue sm:text-3xl">
                Personal info
              </h1>
              <h2 className="mb-4 text-multi-step-form-cool-gray sm:mb-6">
                Please provide your name, email address and phone number.
              </h2>
              <div className="flex flex-col gap-3 text-multi-step-form-marine-blue sm:gap-6">
                <label
                  htmlFor="name"
                  className="flex flex-col gap-1 text-sm font-medium"
                >
                  Name
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g. Stephen King"
                    className="h-10 rounded border border-multi-step-form-light-gray px-3 py-1 font-bold placeholder:font-medium"
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
                    className="h-10 rounded border border-multi-step-form-light-gray px-3 py-1 font-bold placeholder:font-medium"
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
                    placeholder="e.g. 92345678"
                    className="h-10 rounded border border-multi-step-form-light-gray px-3 py-1 font-bold placeholder:font-medium"
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
              <h1 className="mb-1 text-2xl font-bold text-multi-step-form-marine-blue sm:text-3xl">
                Select your plan
              </h1>
              <h2 className="mb-4 text-multi-step-form-cool-gray sm:mb-10">
                You have the option of monthly or yearly billing.
              </h2>
              <div className="flex flex-col gap-2 sm:flex-row">
                <label className="flex sm:flex-1" htmlFor="arcade">
                  <input
                    id="arcade"
                    name="plan"
                    type="radio"
                    className="peer appearance-none"
                    value="arcade"
                    {...register("plan")}
                  />
                  <div className="flex-1 cursor-pointer rounded border border-multi-step-form-light-gray p-3 hover:border-multi-step-form-purplish-blue peer-checked:border-multi-step-form-purplish-blue peer-checked:bg-multi-step-form-alabaster">
                    <div className="flex items-start gap-2 sm:flex-col">
                      {/* prettier-ignore */}
                      <svg id="icon-arcade" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>
                      <div className="flex flex-col gap-1 sm:mt-8">
                        <p className="font-bold leading-none text-multi-step-form-marine-blue">
                          Arcade
                        </p>
                        <p className="text-sm font-medium leading-none text-multi-step-form-cool-gray">
                          {isMonthlyBilling
                            ? `$${pricing.plan.arcade.monthly}/mo`
                            : `$${pricing.plan.arcade.yearly}/yr`}
                        </p>
                        {!isMonthlyBilling && (
                          <p className="mt-1 text-xs leading-none text-multi-step-form-marine-blue">
                            2 months free
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </label>
                <label className="flex sm:flex-1" htmlFor="advanced">
                  <input
                    id="advanced"
                    name="plan"
                    type="radio"
                    className="peer appearance-none"
                    value="advanced"
                    {...register("plan")}
                  />
                  <div className="flex-1 cursor-pointer rounded border border-multi-step-form-light-gray p-3 hover:border-multi-step-form-purplish-blue peer-checked:border-multi-step-form-purplish-blue peer-checked:bg-multi-step-form-alabaster">
                    <div className="flex items-start gap-2 sm:flex-col">
                      {/* prettier-ignore */}
                      <svg id="advanced" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
                      <div className="flex flex-col gap-1 sm:mt-8">
                        <p className="font-bold leading-none text-multi-step-form-marine-blue">
                          Advanced
                        </p>
                        <p className="text-sm font-medium leading-none text-multi-step-form-cool-gray">
                          {isMonthlyBilling
                            ? `$${pricing.plan.advanced.monthly}/mo`
                            : `$${pricing.plan.advanced.yearly}/yr`}
                        </p>
                        {!isMonthlyBilling && (
                          <p className="mt-1 text-xs leading-none text-multi-step-form-marine-blue">
                            2 months free
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </label>
                <label className="flex sm:flex-1" htmlFor="pro">
                  <input
                    id="pro"
                    name="plan"
                    type="radio"
                    className="peer appearance-none"
                    value="pro"
                    {...register("plan")}
                  />
                  <div className="flex-1 cursor-pointer rounded border border-multi-step-form-light-gray p-3 hover:border-multi-step-form-purplish-blue peer-checked:border-multi-step-form-purplish-blue peer-checked:bg-multi-step-form-alabaster">
                    <div className="flex items-start gap-2 sm:flex-col">
                      {/* prettier-ignore */}
                      <svg id="pro" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>
                      <div className="flex flex-col gap-1 sm:mt-8">
                        <p className="font-bold leading-none text-multi-step-form-marine-blue">
                          Pro
                        </p>
                        <p className="text-sm font-medium leading-none text-multi-step-form-cool-gray">
                          {isMonthlyBilling
                            ? `$${pricing.plan.pro.monthly}/mo`
                            : `$${pricing.plan.pro.yearly}/yr`}
                        </p>
                        {!isMonthlyBilling && (
                          <p className="mt-1 text-xs leading-none text-multi-step-form-marine-blue">
                            2 months free
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className="mt-4 flex items-center justify-center gap-4 rounded bg-multi-step-form-alabaster p-3 sm:mt-8">
                <p
                  className={`font-medium ${isMonthlyBilling ? "text-multi-step-form-marine-blue" : "text-multi-step-form-cool-gray"}`}
                >
                  Monthly
                </p>
                <label for="toggle" className="flex cursor-pointer">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="peer appearance-none"
                    {...register("isMonthlyBilling")}
                  />
                  <div className="relative block h-5 w-10 rounded-full bg-blue-900 p-1 before:absolute before:left-6 before:h-3 before:w-3 before:rounded-full before:bg-white peer-checked:before:left-1"></div>
                </label>
                <p
                  className={`font-medium ${isMonthlyBilling ? "text-multi-step-form-cool-gray" : "text-multi-step-form-marine-blue"}`}
                >
                  Yearly
                </p>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div>
              <h1 className="mb-1 text-2xl font-bold text-multi-step-form-marine-blue sm:text-3xl">
                Pick add-ons
              </h1>
              <h2 className="mb-4 text-multi-step-form-cool-gray sm:mb-6">
                Add-ons help enhance your gaming experience.
              </h2>
              <div className="flex flex-col gap-3">
                <label
                  className="group flex cursor-pointer"
                  htmlFor="onlineService"
                >
                  <input
                    id="onlineService"
                    type="checkbox"
                    className="appearance-none"
                    value="onlineService"
                    {...register("addOns")}
                  />
                  <div className="flex flex-1 items-center justify-between rounded-md border border-multi-step-form-light-gray p-4 group-hover:border-multi-step-form-purplish-blue group-has-[:checked]:border-multi-step-form-purplish-blue group-has-[:checked]:bg-multi-step-form-alabaster">
                    <div className="flex items-center gap-6">
                      <div className="rounded border border-multi-step-form-light-gray px-[4px] py-[6px] group-has-[:checked]:border-multi-step-form-purplish-blue group-has-[:checked]:bg-multi-step-form-purplish-blue">
                        {/* prettier-ignore */}
                        <svg className="group-has-[:checked]:visible invisible" id="icon-checkmark" xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
                      </div>
                      <div>
                        <p className="font-medium text-multi-step-form-marine-blue">
                          Online service
                        </p>
                        <p className="text-multi-step-form-cool-gray">
                          Access to multiplayer games
                        </p>
                        <p className="hidden text-multi-step-form-purplish-blue sm:block md:hidden">
                          {isMonthlyBilling
                            ? `+$${pricing.onlineService.monthly}/mo`
                            : `+$${pricing.onlineService.yearly}/yr`}
                        </p>
                      </div>
                    </div>
                    <p className="text-multi-step-form-purplish-blue sm:hidden md:block">
                      {isMonthlyBilling
                        ? `+$${pricing.onlineService.monthly}/mo`
                        : `+$${pricing.onlineService.yearly}/yr`}
                    </p>
                  </div>
                </label>
                <label
                  className="group flex cursor-pointer"
                  htmlFor="largerStorage"
                >
                  <input
                    id="largerStorage"
                    type="checkbox"
                    value="largerStorage"
                    className="appearance-none"
                    {...register("addOns")}
                  />
                  <div className="flex flex-1 items-center justify-between rounded-md border border-multi-step-form-light-gray p-4 group-hover:border-multi-step-form-purplish-blue group-has-[:checked]:border-multi-step-form-purplish-blue group-has-[:checked]:bg-multi-step-form-alabaster">
                    <div className="flex items-center gap-6">
                      <div className="rounded border border-multi-step-form-light-gray px-[4px] py-[6px] group-has-[:checked]:border-multi-step-form-purplish-blue group-has-[:checked]:bg-multi-step-form-purplish-blue">
                        {/* prettier-ignore */}
                        <svg className="group-has-[:checked]:visible invisible" id="icon-checkmark" xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
                      </div>
                      <div>
                        <p className="font-medium text-multi-step-form-marine-blue">
                          Larger storage
                        </p>
                        <p className="text-multi-step-form-cool-gray">
                          Extra 1TB of cloud save
                        </p>
                        <p className="hidden text-multi-step-form-purplish-blue sm:block md:hidden">
                          {isMonthlyBilling
                            ? `+$${pricing.largerStorage.monthly}/mo`
                            : `+$${pricing.largerStorage.yearly}/yr`}
                        </p>
                      </div>
                    </div>
                    <p className="text-multi-step-form-purplish-blue sm:hidden md:block">
                      {isMonthlyBilling
                        ? `+$${pricing.largerStorage.monthly}/mo`
                        : `+$${pricing.largerStorage.yearly}/yr`}
                    </p>
                  </div>
                </label>
                <label
                  className="group flex cursor-pointer"
                  htmlFor="customizableProfile"
                >
                  <input
                    id="customizableProfile"
                    type="checkbox"
                    className="appearance-none"
                    value="customizableProfile"
                    {...register("addOns")}
                  />
                  <div className="flex flex-1 items-center justify-between rounded-md border border-multi-step-form-light-gray p-4 group-hover:border-multi-step-form-purplish-blue group-has-[:checked]:border-multi-step-form-purplish-blue group-has-[:checked]:bg-multi-step-form-alabaster">
                    <div className="flex items-center gap-6">
                      <div className="rounded border border-multi-step-form-light-gray px-[4px] py-[6px] group-has-[:checked]:border-multi-step-form-purplish-blue group-has-[:checked]:bg-multi-step-form-purplish-blue">
                        {/* prettier-ignore */}
                        <svg className="group-has-[:checked]:visible invisible" id="icon-checkmark" xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
                      </div>
                      <div>
                        <p className="font-medium text-multi-step-form-marine-blue">
                          Customizable profile
                        </p>
                        <p className="text-multi-step-form-cool-gray">
                          Custom theme on your profile
                        </p>
                        <p className="hidden text-multi-step-form-purplish-blue sm:block md:hidden">
                          {isMonthlyBilling
                            ? `+$${pricing.customizableProfile.monthly}/mo`
                            : `+$${pricing.customizableProfile.yearly}/yr`}
                        </p>
                      </div>
                    </div>
                    <p className="text-multi-step-form-purplish-blue sm:hidden md:block">
                      {isMonthlyBilling
                        ? `+$${pricing.customizableProfile.monthly}/mo`
                        : `+$${pricing.customizableProfile.yearly}/yr`}
                    </p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div>
              <h1 className="mb-1 text-2xl font-bold text-multi-step-form-marine-blue sm:text-3xl">
                Finishing up
              </h1>
              <h2 className="mb-4 text-multi-step-form-cool-gray sm:mb-6">
                Double-check everything looks OK before confirming.
              </h2>
              <div className="divide-y-2 bg-multi-step-form-alabaster p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium capitalize text-multi-step-form-marine-blue">
                      {getValues("plan")}
                      <span className="ml-1">
                        {isMonthlyBilling ? "(Monthly)" : "(Yearly)"}
                      </span>
                    </p>
                    <button
                      onClick={() => setActiveStep(1)}
                      className="text-sm text-multi-step-form-cool-gray underline hover:text-multi-step-form-purplish-blue"
                    >
                      Change
                    </button>
                  </div>
                  <p className="font-bold text-multi-step-form-marine-blue">
                    {isMonthlyBilling
                      ? `$${pricing.plan[getValues("plan")].monthly}/mo`
                      : `$${pricing.plan[getValues("plan")].yearly}/yr`}
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-5 text-sm">
                  {getValues("addOns").includes("onlineService") && (
                    <div className="flex items-center justify-between">
                      <p className="text-multi-step-form-cool-gray">
                        Online service
                      </p>
                      <p className="text-multi-step-form-marine-blue">
                        {isMonthlyBilling
                          ? `+$${pricing.onlineService.monthly}/mo`
                          : `+$${pricing.onlineService.yearly}/yr`}
                      </p>
                    </div>
                  )}
                  {getValues("addOns").includes("largerStorage") && (
                    <div className="flex items-center justify-between">
                      <p className="text-multi-step-form-cool-gray">
                        Larger storage
                      </p>
                      <p className="text-multi-step-form-marine-blue">
                        {isMonthlyBilling
                          ? `+$${pricing.largerStorage.monthly}/mo`
                          : `+$${pricing.largerStorage.yearly}/yr`}
                      </p>
                    </div>
                  )}
                  {getValues("addOns").includes("customizableProfile") && (
                    <div className="flex items-center justify-between">
                      <p className="text-multi-step-form-cool-gray">
                        Customizable profile
                      </p>
                      <p className="text-multi-step-form-marine-blue">
                        {isMonthlyBilling
                          ? `+$${pricing.customizableProfile.monthly}/mo`
                          : `+$${pricing.customizableProfile.yearly}/yr`}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between p-5">
                <p className="text-sm text-multi-step-form-cool-gray">
                  {`Total (per ${isMonthlyBilling ? "month" : "year"})`}
                </p>
                <p className="text-xl font-bold text-multi-step-form-purplish-blue">
                  {isMonthlyBilling
                    ? `+$${calculateMonthlyTotal()}/mo`
                    : `+$${calculateYearlyTotal()}/yr`}
                </p>
              </div>
            </div>
          )}

          <div className="hidden self-stretch sm:flex">
            <button
              onClick={handleBack}
              className="m-2 mr-auto rounded bg-transparent px-3 py-2 text-sm font-medium text-multi-step-form-cool-gray hover:text-multi-step-form-marine-blue disabled:hidden"
              disabled={activeStep === 0}
            >
              Go Back
            </button>
            {activeStep === 3 ? (
              <button
                onClick={handleSubmit(onSubmit)}
                className="m-2 ml-auto rounded bg-multi-step-form-purplish-blue px-6 py-2 text-sm text-white hover:bg-opacity-80 disabled:cursor-not-allowed disabled:bg-opacity-15"
                disabled={!isValid}
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="m-2 ml-auto rounded bg-multi-step-form-marine-blue px-3 py-2 text-sm text-white hover:bg-opacity-80 disabled:cursor-not-allowed disabled:bg-opacity-15"
                disabled={!isValid || activeStep === 3}
              >
                Next step
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="mb-8 flex self-stretch sm:hidden">
        <button
          onClick={handleBack}
          className="m-2 mr-auto rounded bg-transparent px-3 py-2 text-sm font-medium text-multi-step-form-cool-gray hover:text-multi-step-form-marine-blue disabled:hidden"
          disabled={activeStep === 0}
        >
          Go Back
        </button>
        {activeStep === 3 ? (
          <button
            onClick={handleSubmit(onSubmit)}
            className="m-2 ml-auto rounded bg-multi-step-form-purplish-blue px-6 py-2 text-sm text-white hover:bg-opacity-80 disabled:cursor-not-allowed disabled:bg-opacity-15"
            disabled={!isValid}
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="m-2 ml-auto rounded bg-multi-step-form-marine-blue px-3 py-2 text-sm text-white hover:bg-opacity-80 disabled:cursor-not-allowed disabled:bg-opacity-15"
            disabled={!isValid || activeStep === 3}
          >
            Next step
          </button>
        )}
      </div>
    </div>
  );
}
