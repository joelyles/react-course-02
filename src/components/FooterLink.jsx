import { Link } from "react-router-dom";

const ViewAll = ({ isHome = false }) => {
  return (
    <section className="m-auto max-w-lg my-10 px=6">
      { isHome ? <Link to="/jobspage" className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View All Jobs</Link> : 
      <Link to="/" className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">Go Home</Link>
      }
    </section>
  )
}

export default ViewAll
