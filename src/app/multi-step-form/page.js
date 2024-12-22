import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
});

export default function MultiStepForm() {
  return (
    <div className={`${ubuntu.className} flex flex-col items-center`}>
      <div className="relative h-32 w-full bg-[url('/multi-step-form/bg-sidebar-mobile.svg')]">
        <div className="absolute left-1/2 top-6 flex -translate-x-1/2 gap-2">
          <button className="h-8 w-8 rounded-full border border-white bg-transparent text-white">
            1
          </button>
          <button className="h-8 w-8 rounded-full border border-white bg-transparent text-white">
            2
          </button>
          <button className="h-8 w-8 rounded-full border border-white bg-transparent text-white">
            3
          </button>
          <button className="h-8 w-8 rounded-full border border-white bg-transparent text-white">
            4
          </button>
        </div>
      </div>
      <div>
        <div className="bg-multi-step-form-magnolia relative p-2">
          <div className="relative -top-14 rounded-lg bg-white px-4 py-6">
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
                  className="border-multi-step-form-light-gray rounded border px-3 py-1 placeholder:font-medium"
                />
              </label>

              <label htmlFor="name" className="flex flex-col text-sm">
                Email Address
                <input
                  type="text"
                  id="name"
                  placeholder="e.g. stephenking@lorem.com"
                  className="border-multi-step-form-light-gray rounded border px-3 py-1 placeholder:font-medium"
                />
              </label>

              <label htmlFor="name" className="flex flex-col text-sm">
                Phone Number
                <input
                  type="text"
                  id="name"
                  placeholder="e.g. +1 234 567 890"
                  className="border-multi-step-form-light-gray rounded border px-3 py-1 placeholder:font-medium"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-multi-step-form-marine-blue m-2 rounded px-3 py-2 text-sm text-white hover:bg-opacity-80">
            Next step
          </button>
        </div>
      </div>
    </div>
  );
}
