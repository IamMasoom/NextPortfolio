"use client"

import { ThemeToggleButton } from "@/components/ui/skiper-ui/skiper26"
import { Funnel_Display } from "next/font/google"

const funnel = Funnel_Display({
  subsets: ['latin']
})

const HeroNav = () => {
  return (
    <div className="py-5">
      <div className="grid grid-cols-10 gap-4 ">
        <div className={`col-span-2 text-center text-[#463f3a] font-extrabold text-4xl ${funnel.className}`}>johan</div>


        <div className="col-start-3 text-center">
          <ThemeToggleButton variant="circle" start="center" />
        </div>
        <div className="col-span-7 col-start-4">
            <ul className="flex gap-12 justify-center text-[1rem] items-center h-full">
              <li className="rounded-lg px-4 py-1">Home</li>
              <li className="rounded-lg px-4 py-1">About</li>
              <li className="rounded-lg px-4 py-1">Projects</li>
              <li className="rounded-lg px-4 py-1">Contact</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default HeroNav
