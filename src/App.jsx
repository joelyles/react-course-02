import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Maincards from "./components/Maincards";
import JobListings from "./components/JobListings";
import ViewAll from "./components/ViewAll";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Maincards />
      <JobListings />
      <ViewAll />
    </>
  )
}

export default App
