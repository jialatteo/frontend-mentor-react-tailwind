"use client";

import { League_Spartan } from "next/font/google";
import JobListing from "./JobListing";
import data from "./data.json";
import { useState } from "react";

const leagueSpartan = League_Spartan({
  weight: ["500", "700"],
});

export default function JobListings() {
  const [jobFilters, setJobFilters] = useState([]);
  console.log("jobFilters", jobFilters);
  console.log(jobFilters == true);
  return (
    <div
      className={`bg-job-listings-light-grayish-cyan-background min-h-screen ${leagueSpartan.className}`}
    >
      <div className="relative h-[156px] bg-[#5DA5A4] bg-[url('/job-listings/bg-header-desktop.svg')]">
        {jobFilters?.length > 0 && (
          <div className="absolute -bottom-7 left-28 right-28 flex h-14 items-center justify-between rounded bg-white px-6 py-2">
            <div className="flex gap-2">
              {jobFilters.map((jobFilter) => (
                <div
                  className="group flex cursor-pointer items-center"
                  onClick={() =>
                    setJobFilters(
                      jobFilters.filter(
                        (prevJobFilter) => prevJobFilter != jobFilter,
                      ),
                    )
                  }
                >
                  <div className="bg-job-listings-light-grayish-cyan-filter-tablets text-job-listings-desaturated-dark-cyan text-bold px-2">
                    {jobFilter}
                  </div>
                  <div className="bg-job-listings-desaturated-dark-cyan group-hover:bg-job-listings-very-dark-grayish-cyan p-[5px]">
                    {/* prettier-ignore */}
                    <svg id="icon-remove" className="fill-white" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="text-job-listings-desaturated-dark-cyan cursor-pointer hover:underline"
              onClick={() => setJobFilters([])}
            >
              Clear
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6 px-28 py-16">
        {data.map((jobData) => (
          <JobListing
            key={jobData.id}
            jobData={jobData}
            setJobFilters={setJobFilters}
          />
        ))}
      </div>
    </div>
  );
}
