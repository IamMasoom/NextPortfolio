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
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                ABOUT ME
              </h2>

              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-4">
                Hi, I'm <span className="font-semibold text-neutral-800">Masoom Raza</span>, a passionate web developer who enjoys building modern and interactive web experiences.
              </p>

              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-4">
                I specialize in creating clean, responsive, and high-performance websites using technologies like
                <span className="font-medium text-neutral-800"> React, Next.js, and Tailwind CSS</span>.
              </p>

              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                My focus is on writing efficient code, designing smooth user interfaces, and crafting web experiences that feel both modern and intuitive.
              </p>


              {/* SKILLS */}
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">React</span>
                <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Next.js</span>
                <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Tailwind</span>
                <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">TypeScript</span>
                <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Framer Motion</span>
              </div>


              {/* STATS */}
              <div className="flex gap-12 mt-10">

                <div>
                  <h3 className="text-3xl font-bold text-neutral-900">15+</h3>
                  <p className="text-sm text-neutral-600">Projects</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-neutral-900">300+</h3>
                  <p className="text-sm text-neutral-600">Commits</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-neutral-900">2+</h3>
                  <p className="text-sm text-neutral-600">Years Learning</p>
                </div>

              </div>

              {/* CURRENTLY LEARNING */}

              <div className="mt-10 max-w-md">

                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  Currently Exploring
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed">
                  I'm currently exploring advanced animations with GSAP and improving my
                  backend knowledge with modern full-stack tools to build scalable
                  web applications.
                </p>

              </div>
            </div>


            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center md:justify-end">
              <div className="w-[320px] h-[380px] bg-neutral-200 rounded-2xl flex items-center justify-center text-neutral-500 text-sm">
                Your Image
              </div>
            </div>

          </div>
        </AboutCard>

        {/* ——— Card 2 ——— */}
        <AboutCard i={1} progress={scrollYProgress} color="bg-[#e8f0f5]">

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT SIDE */}
            <div>

              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-neutral-900">
                EDUCATION
              </h2>


              {/* EDUCATION ITEM */}
              <div className="mb-10">

                <h3 className="text-xl font-semibold text-neutral-900">
                  Bachelor’s Degree in Computer Science
                </h3>

                <p className="text-neutral-600 mt-1">
                  Your College Name
                </p>

                <p className="text-sm text-neutral-500 mt-1">
                  2023 — Present
                </p>

                <p className="text-neutral-600 mt-4 max-w-lg leading-relaxed">
                  Currently pursuing my bachelor's degree while focusing on modern web
                  development technologies and building practical projects to improve
                  my real-world development skills.
                </p>

              </div>


              {/* SECOND ITEM */}
              <div>

                <h3 className="text-xl font-semibold text-neutral-900">
                  Higher Secondary Education
                </h3>

                <p className="text-neutral-600 mt-1">
                  Your School Name
                </p>

                <p className="text-sm text-neutral-500 mt-1">
                  Completed in 2023
                </p>

                <p className="text-neutral-600 mt-4 max-w-lg leading-relaxed">
                  Developed strong interest in technology and programming which led me
                  to explore web development and start building my own projects.
                </p>

              </div>

            </div>



            {/* RIGHT SIDE */}
            <div className="flex justify-center md:justify-end">

              <div className="w-[320px] h-[380px] bg-neutral-200 rounded-2xl flex items-center justify-center text-neutral-500 text-sm">

                Education Illustration / Image

              </div>

            </div>


          </div>

        </AboutCard>

        {/* ——— Card 3 ——— */}
        <AboutCard i={2} progress={scrollYProgress} color="bg-[#f0e8f5]">

          <div className="w-full h-full flex flex-col justify-between">

            {/* HEADER */}

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
                SKILLS AND EXPERTIES
              </h2>

              <p className="text-lg text-neutral-600 max-w-3xl leading-relaxed">
                I specialize in building modern web applications with a strong focus
                on clean interfaces, performance, and smooth user experiences. My
                primary expertise lies in frontend development while also having
                experience working with backend systems.
              </p>
            </div>



            {/* SKILLS GRID */}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">

              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Frontend Development
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Developing responsive and high-performance user interfaces using
                  modern JavaScript frameworks and best practices.
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="chip">HTML</span>
                  <span className="chip">CSS</span>
                  <span className="chip">JavaScript</span>
                  <span className="chip">React</span>
                  <span className="chip">Next.js</span>
                </div>
              </div>


              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Interactive UI
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Creating dynamic and immersive interfaces using modern animation
                  libraries and smooth scrolling technologies.
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="chip">GSAP</span>
                  <span className="chip">Framer Motion</span>
                  <span className="chip">Lenis</span>
                  <span className="chip">Three.js</span>
                </div>
              </div>


              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Backend Development
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Implementing application logic and APIs to support scalable
                  and functional web applications.
                </p>
              </div>


              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  UI / UX Design
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Designing clean and intuitive user interfaces with a focus on
                  usability, layout structure, and visual clarity using Figma.
                </p>
              </div>

            </div>



            {/* WHAT I PROVIDE */}

            <div className="grid md:grid-cols-2 gap-10 mt-12">

              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  What I Can Deliver
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  • Modern responsive websites
                  • Interactive user interfaces
                  • Clean and scalable frontend architecture
                  • Smooth animations and transitions
                  • Optimized performance and accessibility
                </p>
              </div>


              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Tools & Technologies
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  React, Next.js, Tailwind CSS, TypeScript, GSAP, Framer Motion,
                  Three.js, Lenis, and Figma for design prototyping.
                </p>
              </div>

            </div>

          </div>

        </AboutCard>


        {/* ——— Card 4 ——— */}
        <AboutCard i={3} progress={scrollYProgress} color="bg-[#f5f0e8]">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
            MY GITHUB
          </h2>
          <div>
            <GithubCalender />
          </div>
        </AboutCard>

      </div>
    </section>
  )
}