
import HeroSection from "./components/hero/HeroSection"
import About from "./components/about/About"
import Project from "./components/projects/Project"
import MainNav from "./components/MainNav"

const LandingPage = () => {

  return (
    <div>
      <HeroSection />
      {/* <MainNav /> */}
      <About />
      <Project />
    </div>
  )
}

export default LandingPage
