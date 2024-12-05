import { League_Spartan } from "next/font/google";
import JobListing from "./JobListing";
import data from "./data.json";

const leagueSpartan = League_Spartan({
  weight: ["500", "700"],
});

export default function JobListings() {
  console.log("data", data);
  return (
    <div
      className={`bg-job-listings-light-grayish-cyan-background min-h-screen ${leagueSpartan.className}`}
    >
      <div
        className="h-[156px] bg-[#5DA5A4]"
        style={{
          backgroundImage: "url('/job-listings/bg-header-desktop.svg')",
        }}
      />
      <div className="flex flex-col gap-6 px-28 py-16">
        {data.map((jobData) => (
          <JobListing jobData={jobData} />
        ))}
      </div>
    </div>
  );
}
