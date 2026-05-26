'use client'
import * as React from "react"
import SocialLinks from "./components/SocialLinks"

import Link from "next/link"
import MHDCarousel from "./components/mhd-carousel"
import ClickToCallWidget from "./components/ClickToCall"



export default function HomePage() {


  return (
    <>
    <div>
    <main className="min-h-screen bg-white text-gray-800 ">

     

      {/* Carousel Section */}
      <div className="shadow-sm">
        <section className="mt-6 overflow-hidden">
       <MHDCarousel />
         </section>
      </div>




      {/* About Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-5">
              10+ Years of Trusted Experience
            </h3>

            <p className="text-gray-600 leading-8 text-lg">
              We provide high-quality false ceiling installation services across
              Kathmandu for homes, offices, restaurants, and commercial spaces.
              Our team focuses on elegant design, durable materials, and clean
              finishing.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 grid grid-cols-2 gap-6 text-center">
            <div>
              <h4 className="text-4xl font-bold">10+</h4>
              <p className="text-gray-500 mt-2">Years Experience</p>
            </div>

            <div>
              <h4 className="text-4xl font-bold">500+</h4>
              <p className="text-gray-500 mt-2">Projects Completed</p>
            </div>

            <div>
              <h4 className="text-4xl font-bold">100%</h4>
              <p className="text-gray-500 mt-2">Client Satisfaction</p>
            </div>

            <div>
              <h4 className="text-4xl font-bold">24/7</h4>
              <p className="text-gray-500 mt-2">Support</p>
            </div>
          </div>
        </div>
      </section>


   
      {/* Hero Section */}
      <div className="px-4">
      <section
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/images/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 text-center px-6 max-w-3xl text-white">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Premium False Ceiling Services in Kathmandu
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Transforming homes and offices with modern false ceiling designs
            for over 10 years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
       <nav className="flex gap-6">
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Link href="#services">
            <button className="
            bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
              
              View Services
            </button>
            </Link>
           <Link href="/contact-us">
            <button className="
            border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300
            cursor-pointer
            ">
              Contact Us
            </button>
            </Link>
          </div>
    </nav>
           
          </div>
        </div>
      </section>
      </div>

     
      {/* Services */}
      <section id="services" className="py-20 px-6 md:px-16">
       
        <div className="max-w-6xl mx-auto text-center">
          
          <h3 className="text-3xl font-bold mb-12"> Our Services</h3>
        
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Gypsum Ceiling',
              'POP Designs',
              'Office Ceiling Solutions',
            ].map((service) => (
              <div
                key={service}
                className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">🏠</div>
                <h4 className="text-2xl font-semibold mb-3">{service}</h4>
                <p className="text-gray-600">
                  Stylish and durable ceiling solutions designed for modern
                  interiors.
                </p>
               
              </div>
              
            ))}
          </div>
        </div>
          
      </section>

  

      {/* Footer */}
      <footer className="text-white py-10 text-center px-6 shadow-sm">
        <h4 className="text-2xl font-bold mb-2 text-black">Miteri Home Decor</h4>
        <p className="text-gray-400 mb-4">The name you trust</p>
        <p className="text-gray-500 text-sm">
          Serving Kathmandu with quality false ceiling solutions for over 10
          years.
        </p>
      </footer>
     {/* Social Links */}
   

       <div className="">
      <ClickToCallWidget/>
      </div>
         <div className="flex justify-start mt-1 mb-2 py-2 ml-4">
      <SocialLinks/>
      </div>
    </main>
  </div>
    </>
  );
}
