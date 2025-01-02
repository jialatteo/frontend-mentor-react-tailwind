export default function JobListing({ jobData, setJobFilters }) {
  const filterTablets = [
    jobData.role,
    jobData.level,
    ...jobData.languages,
    ...jobData.tools,
  ];
  return (
    <div
      key={jobData.id}
      className={`flex flex-col justify-between divide-y-2 rounded border-job-listings-desaturated-dark-cyan md:flex-row md:items-center md:divide-y-0 ${jobData.featured ? "border-l-4" : ""} bg-white p-6 px-8 shadow-xl`}
    >
      <div className="relative flex flex-col pb-4 md:flex-row md:gap-4 md:pb-0">
        <img
          className="absolute -top-12 h-16 w-16 md:relative md:top-0 md:h-28 md:w-28"
          src={jobData.logo}
          alt={jobData.company}
        />
        <div className="mt-6 flex flex-col justify-between gap-2 md:mt-0 md:gap-0">
          <div className="flex">
            <p className="mr-4 text-lg font-bold text-job-listings-desaturated-dark-cyan">
              {jobData.company}
            </p>
            {jobData.new && (
              <div className="mr-2 flex items-center rounded-2xl bg-job-listings-desaturated-dark-cyan px-2 pt-[2px] text-xs text-white">
                NEW!
              </div>
            )}
            {jobData.featured && (
              <div className="flex items-center rounded-2xl bg-job-listings-very-dark-grayish-cyan px-2 pt-[2px] text-xs text-white">
                FEATURED
              </div>
            )}
          </div>
          <p className="text-xl font-bold">{jobData.position}</p>
          <div className="flex gap-4 text-job-listings-dark-grayish-cyan">
            <p> {jobData.postedAt} </p>
            <p> • </p>
            <p> {jobData.contract} </p>
            <p> • </p>
            <p> {jobData.location} </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 pt-4 md:pt-0">
        {filterTablets.map((filterTablet) => (
          <div
            key={filterTablet}
            className="cursor-pointer rounded bg-job-listings-light-grayish-cyan-background p-1 font-bold text-job-listings-desaturated-dark-cyan hover:bg-job-listings-desaturated-dark-cyan hover:text-white"
            onClick={() =>
              setJobFilters((prevJobFilters) =>
                prevJobFilters.includes(filterTablet)
                  ? [...prevJobFilters]
                  : [...prevJobFilters, filterTablet],
              )
            }
          >
            {filterTablet}
          </div>
        ))}
      </div>
    </div>
  );
}
