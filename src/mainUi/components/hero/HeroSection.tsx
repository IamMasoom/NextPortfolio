"use client"

import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39"
import HeroText from "./HeroText"
import HeroNav from "./HeroNav"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  return (
    <div className="h-screen">
      <HeroNav />
      <HeroText />
      <CrowdCanvas src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png' rows={15} cols={7} />
    </div>
  )
}

export default HeroSection
