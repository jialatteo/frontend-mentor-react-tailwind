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
      className={`border-job-listings-desaturated-dark-cyan flex flex-col justify-between divide-y-2 rounded md:flex-row md:items-center md:divide-y-0 ${jobData.featured ? "border-l-4" : ""} bg-white p-6 px-8 shadow-xl`}
    >
      <div className="relative flex flex-col pb-4 md:flex-row md:gap-4 md:pb-0">
        <img
          className="absolute -top-12 h-16 w-16 md:relative md:top-0 md:h-28 md:w-28"
          src={jobData.logo}
          alt={jobData.company}
        />
        <div className="mt-6 flex flex-col justify-between gap-2 md:mt-0 md:gap-0">
          <div className="flex">
            <p className="text-job-listings-desaturated-dark-cyan mr-4 text-lg font-bold">
              {jobData.company}
            </p>
            {jobData.new && (
              <div className="bg-job-listings-desaturated-dark-cyan mr-2 flex items-center rounded-2xl px-2 pt-[2px] text-xs text-white">
                NEW!
              </div>
            )}
            {jobData.featured && (
              <div className="bg-job-listings-very-dark-grayish-cyan flex items-center rounded-2xl px-2 pt-[2px] text-xs text-white">
                FEATURED
              </div>
            )}
          </div>
          <p className="text-xl font-bold">{jobData.position}</p>
          <div className="text-job-listings-dark-grayish-cyan flex gap-4">
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
            className="bg-job-listings-light-grayish-cyan-background hover:bg-job-listings-desaturated-dark-cyan text-job-listings-desaturated-dark-cyan cursor-pointer rounded p-1 font-bold hover:text-white"
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
