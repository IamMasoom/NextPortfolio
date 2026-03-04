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
    const container = containerRef.current
    const nav = navRef.current
    const heroText = heroTextRef.current
    const crowd = crowdRef.current

    if (!container || !nav || !heroText || !crowd) return

    const ctx = gsap.context(() => {
      // Get element positions and heights
      const navHeight = nav.offsetHeight
      const heroTextRect = heroText.getBoundingClientRect()
      const heroTextBottom = heroTextRect.bottom
      const viewportHeight = window.innerHeight

      // Phase 1: Distance crowd needs to travel until its bottom aligns with heroText bottom
      const phase1Distance = viewportHeight - heroTextBottom

      // Phase 2: Distance until crowd bottom aligns with nav bottom
      const phase2Distance = heroTextBottom - navHeight

      // Phase 3: Everything scrolls out
      const phase3Distance = viewportHeight

      // Create a timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=100%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        }
      })

      // Phase 1: Crowd canvas moves up until its bottom aligns with heroText bottom
      tl.to(crowd, {
        y: -phase1Distance,
        ease: "none",
        duration: 0.3
      }, 0)

      // Phase 2: Crowd and HeroText move together until crowd bottom aligns with nav bottom
      tl.to(crowd, {
        y: -(phase1Distance + phase2Distance),
        ease: "none",
        duration: 0.3
      }, 0.3)
      
      tl.to(heroText, {
        y: -phase2Distance,
        ease: "none",
        duration: 0.3
      }, 0.3)

      // Phase 3: All elements scroll out together
      tl.to(crowd, {
        y: -(phase1Distance + phase2Distance + phase3Distance),
        ease: "none",
        duration: 0.4
      }, 0.6)
      
      tl.to(heroText, {
        y: -(phase2Distance + phase3Distance),
        ease: "none",
        duration: 0.4
      }, 0.6)

      tl.to(nav, {
        y: -phase3Distance,
        ease: "none",
        duration: 0.4
      }, 0.6)

      tl.to(containerRef.current,{
        y: -phase3Distance,
      })

    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="h-screen relative overflow-hidden">
      {/* Nav at top */}
      <div ref={navRef} className="relative z-20">
        <HeroNav />
      </div>
      {/* HeroText below nav */}
      <div ref={heroTextRef} className="relative z-10">
        <HeroText />
      </div>
      {/* Crowd canvas fills the viewport - highest z-index */}
      <div ref={crowdRef} className="absolute top-0 left-0 right-0 h-screen z-30 pointer-events-none">
        <CrowdCanvas src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png' rows={15} cols={7} />
      </div>
    </div>
  )
}

export default HeroSection
