"use client"

import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39"
import HeroText from "./HeroText"
import HeroNav from "./HeroNav"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const heroTextRef = useRef<HTMLDivElement>(null)
  const crowdRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          pinSpacing: false,
        }
      })

      // Phase 1 → crowd moves up
      tl.to(crowdRef.current, {
        y: "-40vh",
        ease: "none"
      })

      // Phase 2 → crowd + text move
      tl.to(crowdRef.current, {
        y: "-80vh",
        ease: "none",
      })

      tl.to(heroTextRef.current, {
        y: "-40vh",
        ease: "none"
      }, "<")

      // Phase 3 → everything scrolls out
      tl.to(
        [crowdRef.current, heroTextRef.current, navRef.current],
        {
          y: "-120vh",
          ease: "none"
        }
      )

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative h-[170vh] overflow-hidden">

      <div ref={navRef} className="relative z-20">
        <HeroNav />
      </div>

      <div ref={heroTextRef} className="relative z-10">
        <HeroText />
      </div>

      <div
        ref={crowdRef}
        className="absolute top-0 left-0 right-0 z-30 h-screen pointer-events-none"
      >
        <CrowdCanvas
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png"
          rows={15}
          cols={7}
        />
      </div>

    </div>
  )
}

export default HeroSection