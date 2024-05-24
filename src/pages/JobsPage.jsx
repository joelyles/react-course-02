import JobListings from "../components/JobListings";
import FooterLink from "../components/FooterLink";

const JobsPage = () => {
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <JobListings />
      </section>
      <FooterLink />
    </>
  )
}

export default JobsPage
