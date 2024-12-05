export default function JobListing({ jobData }) {
  const filterTablets = [
    jobData.role,
    jobData.level,
    ...jobData.languages,
    ...jobData.tools,
  ];
  return (
    <div
      key={jobData.id}
      className={`border-job-listings-desaturated-dark-cyan flex items-center justify-between rounded ${jobData.featured ? "border-l-4" : ""} bg-white p-6 px-8 shadow-xl`}
    >
      <div className="flex gap-4">
        <img src={jobData.logo} alt={jobData.company} />
        <div className="flex flex-col justify-between">
          <div className="flex">
            <p className="text-job-listings-desaturated-dark-cyan mr-4 font-bold">
              {jobData.company}
            </p>
            {jobData.new && (
              <div className="bg-job-listings-desaturated-dark-cyan mr-2 flex items-center rounded-2xl px-2 text-xs text-white">
                NEW!
              </div>
            )}
            {jobData.featured && (
              <div className="bg-job-listings-very-dark-grayish-cyan flex items-center rounded-2xl px-2 text-xs text-white">
                FEATURED
              </div>
            )}
          </div>
          <p className="text-xl font-bold">{jobData.position}</p>
          <div className="text-job-listings-dark-grayish-cyan flex gap-4">
            <p>{jobData.postedAt} ago</p>
            <p> • </p>
            <p> {jobData.contract} </p>
            <p> • </p>
            <p> {jobData.location} </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        {filterTablets.map((filterTablet) => (
          <div
            key={filterTablet}
            className="bg-job-listings-light-grayish-cyan-background text-job-listings-desaturated-dark-cyan p-1 font-bold"
          >
            {filterTablet}
          </div>
        ))}
      </div>
    </div>
  );
}
