import jobs from "../jobs.json"
import JobListing from "./JobListing"

const JobListings = () => {
  const recentJobs = jobs.slice(0, 3);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-6">Browse Jobs</h2>
        {/* wrapper for listings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          { recentJobs.map((job) => (
          <JobListing key={ job.id } job={ job }/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobListings
