import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39"
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <div>
      <Navbar />
      <CrowdCanvas src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png' rows={15} cols={7} />
    </div>
  )
}

export default HeroSection
