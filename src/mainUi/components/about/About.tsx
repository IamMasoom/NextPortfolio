"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"

const CARD_COUNT = 3

function AboutCard({
  i,
  progress,
  color,
  children,
}: {
  i: number
  progress: any
  color: string
  children: ReactNode
}) {
  const start = i / CARD_COUNT
  const end = (i + 1) / CARD_COUNT
  const targetScale = 1 - (CARD_COUNT - 1 - i) * 0.04

  const y = useTransform(progress, [start, end], [600, 0])
  const scale = useTransform(progress, [start, 1], [1, targetScale])

  return (
    <div
      className="sticky top-0 flex h-screen items-center justify-center"
      style={{ zIndex: i }}
    >
      <motion.div
        style={{ y: i === 0 ? 0 : y, scale }}
        className={`relative w-full max-w-4xl h-125 rounded-3xl ${color} shadow-2xl p-12 md:p-16 origin-top`}
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
    <section className="bg-black text-white">
      <div
        ref={container}
        className="relative"
        style={{ height: `${CARD_COUNT * 100}vh` }}
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

      </div>
    </section>
  )
}