"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavigationMenu from '@/components/NavigationMenu'; // Corrected path using alias or relative
import Footer from "@/components/Footer"
import IndustriesSection from "@/components/Industriessection"
import Servicessection from "@/components/Servicessection"
import Careers from "@/components/Careers"



export default function HeroSection() {
  const slides = [
    {
      title: "Unleashing AI to Transform Business Potential",
      description: "Redefine industry benchmarks by developing AI solutions that deliver measureable results, drive market leadership, and unlock untapped business oppurtunities.",
      image: "/Banner2.jpg",
    },
    {
      title: "Digital Transformation That Redefines Success",
      description: "Command the digital landscape with transformative strategies that optimize operations, amplify customer value, and establish dominance in competitive markets.",
      image: "/Banner3.jpg",
    },
    {
      title: "Driving Vision 2030: Technology for Saudi Excellence",
      description: "Empower industries in the kingdom with groundbreaking solutions tailored to drive economic diversification, foster innovation, and establish global leadership in emerging technologies.",
      image: "/Banner4.jpg",
    },
    {
      title: "Quality Without Compromise Excellence Delivered",
      description: "Set the gold standard in quality assurance by integrating robust testing and validation methodologies that guarantee flawless performance and trust. ",
      image: "/Banner1.jpg",
    },
  ]

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    mode: "snap",
  })

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!slider) return
    slider.current?.on("slideChanged", (s) => {
      setCurrentSlide(s.track.details.rel)
    })
    const interval = setInterval(() => {
      slider.current?.next()
    }, 5000)
    return () => clearInterval(interval)
  }, [slider])

  // --- What's new section slides ---
  const whatsNew = [
    { img: "/carousel1.jpg", text: "Custom AI Algorithm for Multi Objective Optimization in Production Scheduling" },
    { img: "/carousel2.jpg", text: "Building an Enterprise Knowledge Graph for Cross-Departmental Data Insights" },
    { img: "/carousel3.jpg", text: "Advanced RPA for Automating Multi-System Reconciliation Processes" },
    { img: "/carousel4.jpg", text: "Federated Learning Framework for Enhancing Data Privacy in Healthcare Analytics" },
    { img: "/carousel5.jpg", text: "AI Augmented Incident Management for IT Operations in Retail Chains" },
    { img: "/carousel6.jpg", text: "Cloud Migration with Hybrid Muliti-Cloud Strategy for Redendancy and Scalability" },
    { img: "/carousel7.jpg", text: "Developing a Digital Twin for Monitoring and Simulating Supply Chain Networks" },
  ]

  const [whatsNewRef, whatsNewSlider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 3.2, spacing: 15 }, // show 3 full + 2 peeking
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2.2, spacing: 10 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1.2, spacing: 5 },
      },
    },
  })


  return (
    <>
      <section className="relative w-full h-[90vh] overflow-hidden">
        <NavigationMenu />
        <div ref={sliderRef} className="keen-slider w-full h-full">
          {slides.map((slide, idx) => (
            <div key={idx} className="keen-slider__slide relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-8 md:px-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">
                  {slide.title}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
                  {slide.description}
                </p>
                {/* <div className="flex gap-4 mt-6">
                <Link href="/contact-us">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Our Solutions
                  </Button>
                </Link>
              </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute top-1/2 left-6 -translate-y-1/2 text-white text-4xl"
        >
          ‹
        </button>
        <button
          onClick={() => slider.current?.next()}
          className="absolute top-1/2 right-6 -translate-y-1/2 text-white text-4xl"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === idx ? "bg-white" : "bg-gray-400/70"
                }`}
            ></button>
          ))}
        </div>
      </section>

      {/* What's New Section */}
      <section className="w-full px-6 py-12 relative">
        <h2 className="text-2xl font-bold text-teal-600 mb-6">What's new</h2>

        <div className="relative">
          {/* Slider */}
          <div ref={whatsNewRef} className="keen-slider">
            {whatsNew.map((item, idx) => (
              <div
                key={idx}
                className="keen-slider__slide rounded-lg overflow-hidden shadow-md mb-5"
              >
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-full h-56 object-cover transition ease-out duration-300 hover:scale-105"
                />
                <p className="mt-3 text-sm font-medium text-gray-800 px-2 mb-3">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => whatsNewSlider.current?.prev()}
            className="absolute top-1/2 left-3 -translate-y-1/2
                 w-12 h-12 flex items-center justify-center
                 rounded-full bg-gray-500/50 hover:bg-gray-600/70
                 text-white text-3xl font-bold shadow-lg"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => whatsNewSlider.current?.next()}
            className="absolute top-1/2 right-3 -translate-y-1/2
                 w-12 h-12 flex items-center justify-center
                 rounded-full bg-gray-500/50 hover:bg-gray-600/70
                 text-white text-3xl font-bold shadow-lg"
          >
            ›
          </button>
        </div>
      </section>
      <IndustriesSection />
      <Servicessection />
      <Careers />
      <Footer />
    </>
  )
}
