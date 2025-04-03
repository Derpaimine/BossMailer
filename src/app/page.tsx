"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Add this utility function at the top of the file
const deterministicRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [ctaPulse, setCtaPulse] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger CTA pulse animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setCtaPulse(true);
      setTimeout(() => setCtaPulse(false), 1000);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        {[...Array(10)].map((_, i) => {
          const seed = i * 1000; // Unique seed per dot
          return (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${deterministicRandom(seed) * 10 + 5}px`,
                height: `${deterministicRandom(seed + 1) * 10 + 5}px`,
                top: `${deterministicRandom(seed + 2) * 100}%`,
                left: `${deterministicRandom(seed + 3) * 100}%`,
                animation: `float ${deterministicRandom(seed + 4) * 10 + 10}s linear infinite`,
                animationDelay: `${deterministicRandom(seed + 5) * 5}s`
              }}
            />
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        {/* Header with social proof */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
              BM
            </div>
            <span className="text-2xl font-bold text-white">BossMailer</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white" />
                ))}
              </div>
              <span className="text-sm text-white">500+ businesses trust us</span>
            </div>
            
            <div className="flex space-x-3">
              <a 
                href="https://bossmailer.co.za/newsletter/customer/guest/login"
                className="px-5 py-2 rounded-md text-sm font-medium text-white border border-white/30 hover:bg-white/10 transition duration-300 hover:border-white/50"
              >
                Login
              </a>
              <a 
                href="https://bossmailer.co.za/newsletter/customer/guest/register"
                className={`px-5 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold transition duration-300 hover:shadow-lg ${ctaPulse ? 'animate-pulse-scale' : ''}`}
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </header>

        {/* Hero section */}
        <main className="flex flex-col lg:flex-row items-center justify-between gap-16 mt-12">
          <div className="lg:w-1/2">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Bulk Emails
              </span>{' '}
              That Drive <span className="underline decoration-orange-400">Real Sales</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              <span className="font-bold text-yellow-300">Convert 3x more leads</span> with our 
              AI-optimized email sequences. Set up in minutes,{' '}
              <span className="font-bold text-orange-300">results in hours</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="https://bossmailer.co.za/newsletter/customer/guest/register"
                className="cta-button px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Start Free Trial →
              </a>
              <a 
                href="https://www.bossmailer.co.za/newsletter/page/quick-start-tutorial7min-read"
                className="flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition duration-300 border border-white/20"
              >
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </span>
                Quick Start Guide
              </a>
            </div>
            
            {/* Social proof */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-white/80">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white" />
                  ))}
                </div>
                <span>Join 1,200+ businesses scaling with BossMailer</span>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1 text-white/70 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  <span>Facebook</span>
                </div>
                <div className="flex items-center space-x-1 text-white/70 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dashboard preview */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl transform rotate-3 blur-md"></div>
              <div className="relative bg-white/5 backdrop-blur-lg p-1 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden flex items-center justify-center">
                  {/* Replace with your actual dashboard image */}
                  <div className="text-center p-8">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
                      BossMailer Dashboard
                    </div>
                    <p className="text-gray-300 mb-6">
                      Powerful email marketing tools in one simple interface
                    </p>
                    <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-lg">
                      Try It Free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Floating CTA that appears on scroll */}
        {scrollY > 300 && (
          <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 animate-fade-in-up">
            <a 
              href="https://bossmailer.co.za/newsletter/customer/guest/register"
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-lg shadow-lg flex items-center transform transition hover:scale-105"
            >
              <span className="mr-2">🚀</span> Start Your Free Trial Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
}