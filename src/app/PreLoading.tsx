"use client"


import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { useRef } from "react"

const PreLoading = () => {

    const preloadingStrips = useRef(null)

    useGSAP(() => {

        const tl = gsap.timeline()

        tl.to('.strip', {
            display: 'block',
            height: '100%',
            y: '100%',
            duration: 1,
            stagger: {
                amount: -0.4,
            }
        })
        tl.to(preloadingStrips.current, {
            display: 'none',
        })
    })

    return (
        <div>
            <div
                ref={preloadingStrips}
                className="h-screen w-full fixed z-99 top-0">
                <div className="h-full w-full flex">
                    <div className="strip h-full w-1/5 bg-black"></div>
                    <div className="strip h-full w-1/5 bg-black"></div>
                    <div className="strip h-full w-1/5 bg-black"></div>
                    <div className="strip h-full w-1/5 bg-black"></div>
                    <div className="strip h-full w-1/5 bg-black"></div>
                </div>
            </div>
        </div>
    )
}

export default PreLoading
