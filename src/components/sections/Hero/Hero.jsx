// src/components/sections/Hero/Hero.jsx
import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] pt-20">
      {/* Left Column - Content */}
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          <span className="text-gray-900">Demand Gen</span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Proposal Delivered.
          </span>
        </h1>

        <div className="space-y-4 text-gray-400 text-lg md:text-xl">
          <p>More SQLs, Less Guess work</p>
        </div>
        <div className="space-y-4 text-gray-600 text-lg md:text-xl">
          <p>A qualified candidate demonstrating the playbook you need</p>
        </div>

        <div className="flex flex-wrap gap-8 pt-4">
          <Link to="/strategy">
            <Button
              size="lg"
              className="bg-[#6363f1] hover:bg-[#5151d3] rounded-3xl shadow-[4px_4px_10px_0px_rgba(99,99,241,0.3)] transition-all duration-300 ease-out hover:shadow-[6px_6px_15px_0px_rgba(99,99,241,0.35)] hover:-translate-y-0.5 origin-bottom"
            >
              View Strategy
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="text-gray-600 rounded-3xl border-gray-300 transition-all duration-300 hover:shadow-[6px_6px_15px_0px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:bg-white hover:border-purple-600 hover:text-purple-600"
          >
            View Resume →
          </Button>
        </div>

        <div className="pt-8">
          <a
            href="#"
            className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors group"
          >
            <span>A results-driven marketer fueling 8-figure growth with bold strategies.</span>
          </a>
        </div>
      </div>

      {/* Right Column - Diamond Shape */}
      <div className="relative hidden lg:block">
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl rotate-45 transform hover:rotate-[60deg] transition-transform duration-700 -mt-[200px] blur-xl" />
          <div className="w-96 h-96 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-3xl rotate-45 transform hover:rotate-[60deg] transition-transform duration-700 -mt-[320px]" />
        </div>

        {/* Decorative dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full -mt-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-500 rounded-full" />
      </div>
    </div>
  )
}

export default Hero
