import Hero from "../components/Hero";
import JobListings from "../components/JobListings";
import Maincards from "../components/Maincards";
import FooterLink from "../components/FooterLink";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Maincards />
      <JobListings isHome={true}/>
      <FooterLink isHome={true}/>
    </>
  )
}

export default HomePage
