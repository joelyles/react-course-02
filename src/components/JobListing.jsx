const JobListing = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-xl relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{ job.location }</div>
          <h3 className="font-bold">{ job.title }</h3>
        </div>
        <div>
          <div>{ job.description }</div>
          <div className="my-4 text-indigo-500">{ job.salary } / Year</div>
        </div>
        <hr />
        <div className="flex flex-col lg:flex-col justify-between mb-4">
          <div className="my-4 text-orange-700">{ job.city }</div>
          <button className="h-[36px] text-white bg-indigo-500 rounded-lg p-2 text-center text-sm">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default JobListing
