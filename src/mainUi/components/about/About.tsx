"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"
import GithubCalender from "./GithubCalender"

const CARD_COUNT = 4

function AboutCard({
  i,
  progress,
  color,
  children,
  cardClassName,
}: {
  i: number
  progress: any
  color: string
  children: ReactNode
  cardClassName?: string
}) {
  // Cards animate within first 75% of scroll, last 25% keeps card 3 pinned
  const cardEnd = CARD_COUNT / (CARD_COUNT + 1) // 0.75
  const start = (i / CARD_COUNT) * cardEnd
  const end = ((i + 1) / CARD_COUNT) * cardEnd
  const targetScale = 1 - (CARD_COUNT - 1 - i) * 0.04

  const y = useTransform(progress, [start, end], [600, 0])
  const scale = useTransform(progress, [start, cardEnd], [1, targetScale])

  // Fade out the card when the card 2 positions ahead arrives
  const fadeStart = ((i + 2) / CARD_COUNT) * cardEnd
  const fadeEnd = ((i + 3) / CARD_COUNT) * cardEnd
  const opacity = useTransform(
    progress,
    [fadeStart, fadeEnd],
    [1, 0]
  )
  // Last two cards stay visible (no card 2 ahead to trigger fade)
  const shouldFade = i < CARD_COUNT - 2

  return (
    <div
      className="sticky top-0 flex h-screen items-center justify-center"
      style={{ zIndex: i }}
    >
      <motion.div
        style={{ y: i === 0 ? 0 : y, scale, opacity: shouldFade ? opacity : 1 }}
        className={`relative rounded-2xl ${color} shdw origin-top ${cardClassName ?? 'w-[95%] h-[90%] p-12 md:p-16'}`}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function About() {
  const container = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <section className="">
      <div
        ref={container}
        className="relative"
        style={{ height: `${(CARD_COUNT + 1) * 100}vh` }}
      >

        {/* ——— Card 1 ——— */}
        <AboutCard i={0} progress={scrollYProgress} color="bg-[#f5f0e8]">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus fugit adipisci excepturi consequatur.
          </p>
        </AboutCard>

        {/* ——— Card 2 ——— */}
        <AboutCard i={1} progress={scrollYProgress} color="bg-[#e8f0f5]">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed">
            We focus on building high quality digital experiences with
            modern technologies.
          </p>
        </AboutCard>

        {/* ——— Card 3 ——— */}
        <AboutCard i={2} progress={scrollYProgress} color="bg-[#f0e8f5]">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed">
            We design and develop beautiful websites and applications.
          </p>
        </AboutCard>

        {/* ——— Card 4 ——— */}
        <AboutCard i={3} progress={scrollYProgress} color="bg-[#f5f0e8]">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
            Get In Touch
          </h2>
          <div>
          <GithubCalender />
          </div>
        </AboutCard>

      </div>
    </section>
  )
}