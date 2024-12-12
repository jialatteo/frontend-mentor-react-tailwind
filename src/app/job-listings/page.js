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
  return (
    <div
      className={`min-h-screen bg-job-listings-light-grayish-cyan-background ${leagueSpartan.className}`}
    >
      <div className="relative h-[156px] bg-[#5DA5A4] bg-[url('/job-listings/bg-header-desktop.svg')]">
        {jobFilters?.length > 0 && (
          <div className="absolute -bottom-7 left-4 right-4 flex h-auto items-center justify-between rounded bg-white px-6 py-4 xl:left-28 xl:right-28">
            <div className="flex flex-wrap gap-4">
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
                  <div className="text-bold bg-job-listings-light-grayish-cyan-filter-tablets px-2 text-job-listings-desaturated-dark-cyan">
                    {jobFilter}
                  </div>
                  <div className="bg-job-listings-desaturated-dark-cyan p-[5px] group-hover:bg-job-listings-very-dark-grayish-cyan">
                    {/* prettier-ignore */}
                    <svg id="icon-remove" className="fill-white" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="cursor-pointer text-job-listings-desaturated-dark-cyan hover:underline"
              onClick={() => setJobFilters([])}
            >
              Clear
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-12 px-4 py-16 md:gap-6 xl:px-28">
        {data
          .filter((jobData) => {
            return jobFilters.length > 0
              ? jobFilters.every((filter) =>
                  [
                    jobData.role,
                    jobData.level,
                    ...jobData.languages,
                    ...jobData.tools,
                  ].includes(filter),
                )
              : true;
          })
          .map((jobData) => (
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
