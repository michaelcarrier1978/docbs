"use client";

import Image from "next/image";
import Header from "./components/Header";
import { Racing_Sans_One } from "next/font/google";
import Engine from "@/public/engine.png";
import AC from "@/public/car-ac.png";
import CheckUp from "@/public/check-up.png";
import CarBattery from "@/public/car-battery.png";
import Brake from "@/public/brake.png";
import Oil from "@/public/car-oil.png";
import ASE from "@/public/ase.svg";
import Tel from "@/public/telephone.png"
import Badge from "@/public/badge.png";
import Fuel from "@/public/fuel-pump.png";
import Car from "@/public/sports-car.png";
import Fleet from "@/public/fast-delivery.png"
import Classic from "@/public/vintage.png";
import HowItWorks from "./components/HowItWorks";
import Quote from "./components/Quote";
import GoogleMap from "./components/Map";

const racingSansOne = Racing_Sans_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div>
      <div className="relative min-h-auto w-full">
        <Image
          src="/servicing-car-engine-2025-03-14-11-38-12-utc (1).jpg"
          alt="Hero Image"
          fill
          priority
          className="object-cover object-center absolute inset-0 -z-10"
        />
        {/* Gray overlay */}
        <div className="absolute inset-0 bg-gray-900/60 -z-5 pointer-events-none" />
        <main className="relative z-10 max-h-none  overflow-hidden">
          <Header />
          <section className={`${racingSansOne.className} container mx-auto px-4 py-8`}>
            <h1 className="text-5xl text-white uppercase">Doing things right the first time</h1>
            <p className="text-red-500 text-4xl mt-4 shadow-2xl uppercase">
              Specializing in mobile fleet maintenance and repair
            </p>
            <p className="text-white text-2xl mt-4">
              Our business is to keep your business moving forward
            </p>
            <p className="text-white text-xl mt-4">
              Appointments are filling up fast!
            </p>
            <p className="text-white text-xl mt-4">
              Contact Us Now To Schedule Your Visit
            </p>
            <a
              href="tel:1234567890"
              className="flex justify-center md:w-1/4  items-center px-6 py-3 mt-8 bg-red-600 text-white text-xl font-semibold shadow-lg hover:bg-red-700 transition-colors"
            >
              <Image src="/phone-receiver-silhouette.png" alt="Phone Icon" width={24} height={24} className="mr-2" />
              801-555-1234
            </a>
          </section>
          
        </main>
      </div>
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl uppercase font-extrabold">Servicing the Davis and Weber Country area and beyond</h2>
        <GoogleMap />
      </section>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-red-700 uppercase font-extrabold">Services we offer</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <div className="flex flex-col items-center text-center">
            <Image src={AC} alt="Car AC Service" className="max-w-1/2 h-auto md:max-w-[150px]" />
            <h2 className="text-xl font-bold mt-2">AC Service</h2>
            </div>
            <div className="flex flex-col items-center text-center">
            <Image src={CheckUp} alt="Vehicle Maintence" className="max-w-1/2 h-auto md:max-w-[150px]" />
            <h2 className="text-xl font-bold mt-2">Vehicle Maintence</h2>
            </div>
            <div className="flex flex-col items-center text-center">
            <Image src={Engine} alt="Check Engine" className="max-w-1/2 h-auto md:max-w-[150px]" />
            <h2 className="text-xl font-bold mt-2">Check Engine</h2>
            </div>
            <div className="flex flex-col items-center text-center">
            <Image src={CarBattery} alt="Car Battery" className="max-w-1/2 h-auto md:max-w-[150px]" />
            <h2 className="text-xl font-bold mt-2">Battery Service</h2>
            </div>
            <div className="flex flex-col items-center text-center">
            <Image src={Brake} alt="Brakes" className="max-w-1/2 h-auto md:max-w-[150px]" />
            <h2 className="text-xl font-bold mt-2">Brake Service</h2>
            </div>
            <div className="flex flex-col items-center text-center">
            <Image src={Oil} alt="Coolant" className="max-w-1/2 min-w-1/2 md:min-w-[150px] h-auto md:max-w-[150px]" />
            <h2 className="text-xl font-bold mt-2">Coolant Service</h2>
            </div>
        </div>
      </section>
      <section className="bg-gray-200">
        <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl uppercase font-extrabold">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Image src={ASE} alt="ASE Certified" className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Automotive Master Technician Certified</h3>
            <p className="text-gray-700">Peace of mind that the job will be done right</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Image src={ASE} alt="ASE Certified" className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Automotive Advanced Level Engine Diagnostic Certified</h3>
            <p className="text-gray-700">Comfort that your problem will be diagnosed by an expert</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Image src={Fuel} alt="Gas and Diesel" className="w16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Fuel Type</h3>
            <p className="text-gray-700">We service both gas and diesel vehicles </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Image src={Car} alt="Cars we service" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">All Makes and Models</h3>
            <p className="text-gray-700">We service European, Asian and Domestic automobiles </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Image src={Fleet} alt="Fleet service" className="w-18 h-18 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Fleet Maintenence</h3>
            <p className="text-gray-700">Up to 26,000 GVW</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Image src={Classic} alt="Fleet service" className="w-18 h-18 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Classic and Antique</h3>
            <p className="text-gray-700">We service all classic and antique vehicles</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Image src={Tel} alt="Quick Response Time" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Quick Response Time</h3>
            <p className="text-gray-700">Contact us by text, phone or email and we will respond as soon as possible</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Image src={Badge} alt="20+ years experience" className="w-24 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">20+ Years Experience</h3>
            <p className="text-gray-700">With over 20 + years of experience you know we can be trusted</p>
          </div>
          </div>
        </div>
      </section>
      <HowItWorks />
      <Quote />
    </div>
  );
}
