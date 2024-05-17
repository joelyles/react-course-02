import jobs from "../jobs.json"

const JobListings = () => {
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-6">Browse Jobs</h2>
        {/* wrapper for listings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { jobs.map((job) => (
          <div className="bg-white shadow-md rounded-xl relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{ job.location }</div>
                <h3>{ job.title }</h3>
              </div>

              <div></div>
            </div>
          </div>
          )) }
          
        </div>
      </div>
    </section>
  )
}

export default JobListings
