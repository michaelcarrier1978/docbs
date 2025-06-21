"use client";
import Image from "next/image";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import React from "react";
import Tire1 from "@/public/tire1.png";
import Tire2 from "@/public/tire2.png";
import Tire3 from "@/public/tire3.png";


export default function HowItWorks() {
    
    return (
        <section className="relative">
            <Image src="/traffic-lights-at-night-on-road-2024-10-11-21-47-25-utc.jpg" className="object-cover object-top absolute inset-0 -z-10" fill
            priority alt="Traffic light background" />
          <div className="container mx-auto px-4 py-8 relative z-10">
                <h2 className="text-4xl text-white font-bold mb-6 text-center uppercase">How It Works</h2>
          </div>
          {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60 -z-10" />
            <ParallaxProvider>
  {/* First Tire + Text Block */}
  <div className="flex flex-col items-center">
   <Parallax
      translateX={["-50vw", "0vw"]}
      rotate={[0, 720]} // Reduced rotation so it stops earlier
      easing="easeInOut"
      shouldAlwaysCompleteAnimation={true}
      rootMargin={{ top: 0, right: 0, bottom: -200, left: 0 }} // Stop animation before it goes too far
    >
      <Image src={Tire1} alt="Tire" className="w-52 h-auto" />
    </Parallax>
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <h3 className="text-2xl text-white font-semibold mb-4 uppercase">Schedule</h3>
      <p className="text-lg text-white text-center max-w-md mb-6">
        Just give us a call or text and let us know where to meet you.
      </p>
    </div>
  </div>

  {/* Second Tire + Text Block */}
  <div className="py-14 flex flex-col items-center">
    <Parallax
      translateX={["-50vw", "0vw"]}
      rotate={[0, 1440]}
      easing="easeInOut"
      shouldAlwaysCompleteAnimation={true}
      speed={0.5} // Slower speed for delayed effect
      rootMargin={{ top: -100, right: 0, bottom: -100, left: 0 }} // Delays trigger but ensures animation completes
    >
      <Image src={Tire2} alt="Tire" className="w-52 h-auto" />
    </Parallax>
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <h3 className="text-2xl text-white font-semibold mb-4 uppercase">WE COME TO YOU</h3>
      <p className="text-lg text-white text-center max-w-md mb-6">
        We come to your location to repair your vehicle on the spot.
      </p>
    </div>
  </div>
  {/* Third Tire + Text Block */}
  <div className="flex flex-col items-center">
    <Parallax
      translateX={["-50vw", "0vw"]}
      rotate={[0, 1440]}
      easing="easeInOut"
      shouldAlwaysCompleteAnimation={true}
      speed={0.5} // Slower speed for delayed effect
      rootMargin={{ top: -100, right: 0, bottom: -100, left: 0 }} // Delays trigger but ensures animation completes
    >
      <Image src={Tire3} alt="Tire" className="w-52 h-auto" />
    </Parallax>
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <h3 className="text-2xl text-white font-semibold mb-4 uppercase">DO WHAT YOU LOVE</h3>
      <p className="text-lg text-white text-center max-w-md mb-6">
        Now you can spend time doing what you love.
      </p>
    </div>
  </div>
</ParallaxProvider>

            
        </section>
    );
}