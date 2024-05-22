import { useState } from "react";

const JobListing = ({ job }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  let description = job.description;
  if (!showFullDesc) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className="bg-white shadow-md rounded-xl relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{ job.location }</div>
          <h3 className="font-bold">{ job.title }</h3>
        </div>
        <div>
          <div>{ description }</div>
          <button onClick={ () => setShowFullDesc((prevState) => !prevState) } className="text-indigo-500 mb-5 hover:text-ingigo-600">{ showFullDesc ? 'Less' : 'More' }</button>
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
