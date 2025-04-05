"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Utility function for deterministic randomness (keeps dots consistent on re-renders)
const deterministicRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export default function Home() {
  // --- STATE HOOKS (Must come first) ---
  const [scrollY, setScrollY] = useState(0);
  const [ctaPulse, setCtaPulse] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState('free'); // Default to free plan

  // --- EFFECT HOOKS (Must come after state, before regular variables/logic) ---
  // Handle scroll position for effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Trigger CTA pulse animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setCtaPulse(true);
      // Reset pulse state after animation duration (adjust timeout if animation changes)
      setTimeout(() => setCtaPulse(false), 1000);
    }, 15000); // Pulse every 15 seconds
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount


  // --- REGULAR VARIABLES/CONSTANTS (Can come after Hooks) ---

  // Pricing Section Data
  const pricingPlans = [
    {
      id: 'free',
      name: 'Free Trial',
      description: 'Explore core features, perfect for getting started.',
      priceZAR: 0,
      priceUSD: 0,
      frequency: '/ forever', // Or '/ month' if limited duration
      ctaText: 'Start Free Trial',
      ctaLink: 'https://bossmailer.co.za/newsletter/customer/guest/register', // Your registration link
      isExternalLink: false, // Indicate if CTA link goes off-site (for target="_blank")
      isPaypalForm: false,
      features: [
        'Send up to 500 emails',
        '100 contacts limit',
        'Basic automation',
        'Standard templates',
      ],
    },
    {
      id: 'busybee',
      name: 'Busy Bee',
      priceZAR: 650, // Approx $35.43 USD
      priceUSD: 35.43,
      frequency: '/ month',
      description: 'Ideal for growing businesses needing more capacity.',
      ctaText: 'Choose Busy Bee',
      ctaLink: 'https://www.paypal.com/ncp/payment/QVYL69QZHRFBJ', // Direct link to PayPal button page
      paypalHostedButtonId: 'QVYL69QZHRFBJ', // Store ID if needed for form
      paypalOptionLabel: 'Busy Bee', // This likely needs to be selected *on* PayPal's page
      isExternalLink: true,
      isPaypalForm: true, // We can use the direct link OR the form
      features: [
        'Up to 10,000 emails/month',
        '2,500 contacts',
        'Advanced segmentation',
        'A/B Testing',
        'Priority support',
      ],
    },
    {
      id: 'honeyhive',
      name: 'Honey Hive',
      priceZAR: 2600, // Approx $141.88 USD
      priceUSD: 141.88,
      frequency: '/ month',
      description: 'Full power for established teams scaling outreach.',
      ctaText: 'Choose Honey Hive',
      ctaLink: 'https://www.paypal.com/ncp/payment/QVYL69QZHRFBJ', // Direct link to PayPal button page
      paypalHostedButtonId: 'QVYL69QZHRFBJ',
      paypalOptionLabel: 'Bee Hive', // User selects this on PayPal's page
      isExternalLink: true,
      isPaypalForm: true,
      features: [
        'Up to 50,000 emails/month',
        '10,000 contacts',
        'Dedicated IP option',
        'Custom reporting',
        'Personalized onboarding',
      ],
    },
  ];

  // Find the currently selected plan object
  const selectedPlan = pricingPlans.find(p => p.id === selectedPlanId) || pricingPlans[0];

  // Currency Formatter for ZAR
  const zarFormatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0, // Show R650 instead of R650.00 if desired
    maximumFractionDigits: 0,
  });

  // Integrations Data
  const integrations = [
    { src: "/donorbox-logo-2023-768x480.jpg", alt: "Donorbox Logo" },
    { src: "/Easy_Forms_logo2.png", alt: "Easy Forms Logo" },
    { src: "/facebookleadads.png", alt: "Facebook Lead Ads Logo" },
    { src: "/Google_SheetsLogo_OIP.jpeg", alt: "Google Sheets Logo" },
    { src: "/googleanalytics.png", alt: "Google Analytics Logo" },
    { src: "/inboxroad.webp", alt: "Inboxroad Logo" },
    { src: "/ManyChat-Logo.jpg", alt: "ManyChat Logo" },
    { src: "/OptinMonster_Logo_BM_Intergration.png", alt: "OptinMonster Logo" },
    { src: "/pipedream-logo.svg", alt: "Pipedream Logo" },
    { src: "/shopify_OIP.jpeg", alt: "Shopify Logo" },
    { src: "/twilloOIP.jpeg", alt: "Twilio Logo" },
    { src: "/Vimeo-Logo_Blue.png", alt: "Vimeo Logo" },
    { src: "/wix_logo.svg", alt: "Wix Logo" },
    { src: "/Wordpress-logo-bw.png", alt: "WordPress Logo" },
    { src: "/zapier2402.jpg", alt: "Zapier Logo" },
    { src: "/Zendesk_Logo__BeeMailer_Intergration.png", alt: "Zendesk Logo" },
    { src: "/Zoho_crm_BM_Intergrate.svg", alt: "Zoho CRM Logo" },
  ];


  // --- RETURN JSX (Must come last) ---
  return (
    // Main container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-900 to-gray-900 text-white overflow-x-hidden">
      {/* Animated background elements (decorative) */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => {
          const seed = i * 1000; // Unique seed per dot
          const size = deterministicRandom(seed) * 10 + 5;
          return (
            <div
              key={i} // Using index as key is okay here as the list is static
              className="absolute rounded-full bg-white"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${deterministicRandom(seed + 2) * 100}%`,
                left: `${deterministicRandom(seed + 3) * 100}%`,
                animation: `float ${deterministicRandom(seed + 4) * 10 + 10}s linear infinite`,
                animationDelay: `${deterministicRandom(seed + 5) * 5}s`,
              }}
            />
          );
        })}
      </div>

      {/* Main content container, positioned above background */}
      {/* Added max-w-full initially then constrain inner content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">

        {/* Header section */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-4">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/bossmailer-logo.svg"
                alt="BossMailer Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="text-2xl font-bold">BossMailer</span>
          </div>

          {/* Navigation and Social Proof */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white/80"
                  />
                ))}
              </div>
              <span className="text-sm">500+ businesses trust us</span>
            </div>

            <div className="flex space-x-3">
              <a
                href="https://bossmailer.co.za/newsletter/customer/guest/login"
                className="px-5 py-2 rounded-md text-sm font-medium border border-white/30 hover:bg-white/10 transition duration-300 hover:border-white/50"
              >
                Login
              </a>
              <a
                href="https://bossmailer.co.za/newsletter/customer/guest/register"
                className={`px-5 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold transition duration-300 hover:shadow-lg ${
                  ctaPulse ? "animate-pulse-scale" : ""
                }`}
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </header>

        {/* Hero section */}
        <main className="flex flex-col lg:flex-row items-center justify-between gap-16 mt-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Bulk Emails
              </span>{" "}
              That Drive{" "}
              <span className="underline decoration-orange-400 decoration-2 underline-offset-4">
                Real Sales
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
              <span className="font-bold text-yellow-300">
                Convert 3x more leads
              </span>{" "}
              with our AI-optimized email sequences. Set up in minutes,{" "}
              <span className="font-bold text-orange-300">results in hours</span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a
                href="https://bossmailer.co.za/newsletter/customer/guest/register"
                className="cta-button px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Start Free Trial →
              </a>
              <a
                href="https://www.bossmailer.co.za/newsletter/page/quick-start-tutorial7min-read"
                className="flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition duration-300 border border-white/20"
              >
                <span className="mr-2" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
                Quick Start Guide
              </a>
            </div>

            <div className="flex flex-col space-y-4 items-center lg:items-start">
              <div className="flex items-center space-x-2 text-white/80">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white/80"
                    />
                  ))}
                </div>
                <span>
                  Join 1,200+ businesses scaling with BossMailer
                </span>
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <a
                  href="https://www.facebook.com/profile.php/?id=100068008215900" // BossMailer.co.za | Facebook link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-white/70 hover:text-white transition"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://github.com/ux-rsa/BossMailer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-white/70 hover:text-white transition"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Dashboard Preview Image Section */}
          <div className="lg:w-1/2 flex justify-center relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl transform -rotate-2 blur-xl opacity-70"></div>
              <div className="relative bg-white/5 backdrop-blur-lg p-1 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="aspect-video rounded-2xl overflow-hidden relative">
                  <Image
                    src="/emailtemplate.webp"
                    alt="BossMailer dashboard preview showing email template editor"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

                  {/* --- Social Proof Stack --- */}
<section className="py-16 sm:py-24 bg-gray-900/50">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {[
        { label: 'Open Rates', value: '3.2x' },
        { label: 'Customers', value: '3,217+' },
        { label: 'Avg Results', value: '2-5x' },
        { label: 'Countries', value: '47' }
      ].map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-3xl font-bold text-yellow-400 sm:text-4xl">{stat.value}</p>
          <p className="mt-2 text-sm font-medium text-gray-300">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

                  {/* --- Smart Conversion Section --- */}
<section 
  id="convert-now" 
  className="relative isolate overflow-hidden pt-24 py-20 bg-gradient-to-br from-purple-900/40 via-gray-900/60 to-blue-900/40"
  style={{
    backgroundImage: 'radial-gradient(at 80% 20%, rgba(99, 102, 241, 0.2) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(245, 158, 11, 0.1) 0px, transparent 50%)'
  }}
>
  {/* Subtle grid pattern */}
  <div 
    className="absolute inset-0 -z-10 opacity-20" 
    style={{
      backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }}
  />
  
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="text-center">
        {/* Dynamic Badge */}
        <div className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/10 hover:ring-white/20 mb-8 transition-all duration-300 hover:scale-105 hover:shadow-md">
          <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
          Limited availability
        </div>
        
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
          <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Ready to transform your email results?
          </span>
        </h2>
        
        <p className="mx-auto max-w-xl text-lg leading-8 text-gray-300 mb-10">
          Join <span className="font-semibold text-white">3,217+ businesses</span> seeing 2-5x more conversions from their existing email lists.
        </p>
      </div>
      
      {/* Flexible Button Group */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
        <a
          href="https://bossmailer.co.za/newsletter/customer/guest/register"
          className="rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 text-lg font-bold text-gray-900 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
        >
          Start Free Trial
          <span aria-hidden="true" className="ml-2">→</span>
        </a>
        
        <a
          href="#pricing"
          className="rounded-lg bg-white/10 px-6 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-white/20 ring-1 ring-inset ring-white/10 hover:ring-white/20 transition-all duration-300"
        >
          Compare Plans
        </a>
      </div>
      
      {/* Micro-Copy Social Proof */}
      <div className="mt-12 flex items-center justify-center gap-x-8">
        <div className="flex -space-x-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <img
              key={item}
              className="h-10 w-10 rounded-full border-2 border-white/80"
              src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
              alt="Happy customer"
            />
          ))}
        </div>
        <div className="text-left">
          <p className="text-sm text-white/80">
            Trusted by marketers worldwide
          </p>
          <div className="flex items-center gap-x-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-white/60">(4.9/5)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Integrations Section */}
        <section id="integrations" className="py-20 md:py-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Connect
              </span>{" "}
              Your Favorite Tools
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              BossMailer plays well with others. Integrate seamlessly with the
              platforms you already use to streamline your workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {integrations.map((integration) => (
              <div
                key={integration.src} // Use src for unique key
                className="bg-gray-100/90 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center h-32 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg" // Reduced duration
                title={integration.alt}
              >
                <div className="relative w-full h-full max-h-16">
                  <Image
                    src={integration.src}
                    alt={integration.alt}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, (max-width: 1024px) 20vw, 15vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

            {/* --- Guarantee Section --- */}
<section className="py-16 sm:py-24 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
  <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
    <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/10 mb-8">
      <svg className="mr-2 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      No-risk trial
    </div>
    <h2 className="text-2xl font-bold text-white sm:text-3xl">
      <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
        We take the risk - you get the results
      </span>
    </h2>
    <p className="mt-6 text-lg leading-8 text-gray-300">
      7-day free trial. Cancel anytime. If you don't see at least 2x more email engagement, we'll give you an extra month free.
    </p>
  </div>
</section>

        {/* --- Pricing Section --- */}
<section id="pricing" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">

{/* Dynamic Background Elements */}
<div className="absolute inset-0 z-0 opacity-20">
  {/* Floating Particles */}
  {[...Array(15)].map((_, i) => (
    <div 
      key={i}
      className="absolute rounded-full bg-yellow-400/20"
      style={{
        width: `${Math.random() * 15 + 5}px`,
        height: `${Math.random() * 15 + 5}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `float ${Math.random() * 10 + 5}s infinite ${Math.random() * 3}s`
      }}
    />
  ))}
  
  {/* Strategic Sticker Placement */}
  <div className="absolute top-[15%] left-[8%] z-0 sticker-effect">
    <Image
      src="/BossMailer_Email_Automation_Sticker (1).png"
      alt=""
      width={300}
      height={300}
      className="rotate-[-15deg]"
    />
  </div>
  
  <div className="absolute bottom-[20%] right-[12%] z-0 sticker-effect">
    <Image
      src="/BossMailer_Email_Automation_Sticker (2).png"
      alt=""
      width={250}
      height={250}
      className="rotate-[10deg]"
      style={{ animationDelay: '1.5s' }}
    />
  </div>
</div>

{/* Pricing Content */}
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-3d">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
        Pay Only For What You Use
      </span>
    </h2>
    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
      <span className="font-bold text-yellow-300">87% of customers</span> save money with our flexible plans
    </p>
  </div>

  <div className="flex flex-col lg:flex-row gap-12 items-start">
    {/* Value Proposition Panel */}
    <div className="w-full lg:w-1/2 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-yellow-400/10 rounded-full p-2">
          <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Why Our Customers <span className="text-yellow-400">Win</span></h3>
      </div>
      
      <div className="feature-grid">
        {[
          { icon: '💰', text: 'No setup fees' },
          { icon: '🔄', text: 'Cancel anytime' },
          { icon: '🆓', text: '7-day free trial' },
          { icon: '⚡', text: 'Priority support' },
          { icon: '📈', text: '2-5x ROI guarantee' },
          { icon: '🧩', text: 'Pay-as-you-go' }
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-lg text-white/90">{item.text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Pricing Card */}
    <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-yellow-400/30 shadow-[0_20px_50px_rgba(245,158,11,0.1)] p-8 transform hover:scale-[1.01] transition-all duration-300">
      <h3 className="text-2xl font-bold text-center text-white mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
          Choose Your Plan
        </span>
      </h3>

      {/* Interactive Dropdown */}
      <div className="mb-8 relative dropdown-shimmer">
        <select
          id="plan-select"
          value={selectedPlanId}
          onChange={(e) => setSelectedPlanId(e.target.value)}
          className="w-full px-6 py-4 rounded-xl bg-gray-700 border-2 border-yellow-400/50 text-white font-bold focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 appearance-none transition-all duration-300 hover:bg-gray-600"
        >
          {pricingPlans.map(plan => (
            <option 
              key={plan.id} 
              value={plan.id}
              className="bg-gray-800 text-white py-2"
            >
              {plan.name} ({plan.priceZAR === 0 ? 'Free Forever' : `Pay As You Go: ${zarFormatter.format(plan.priceZAR)}`})
            </option>
          ))}
        </select>
      </div>

      {/* Plan Highlights */}
      <div className="mb-8 p-6 bg-gray-700/50 rounded-xl border border-white/10">
        <h4 className="text-xl font-bold text-white mb-2">{selectedPlan.name}</h4>
        <p className="text-3xl font-extrabold text-yellow-400 mb-1">
          {selectedPlan.priceZAR === 0 ? 'FREE' : zarFormatter.format(selectedPlan.priceZAR)}
          <span className="text-lg font-normal text-white/70 ml-2">{selectedPlan.frequency}</span>
        </p>
        <p className="text-white/80 mb-4">{selectedPlan.description}</p>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent my-4"></div>
        <ul className="space-y-3">
          {selectedPlan.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-white/90">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <a
        href={selectedPlan.ctaLink}
        className="block w-full py-4 px-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl text-center text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10 flex items-center justify-center">
          {selectedPlan.priceZAR === 0 ? (
            <>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Start Free Trial
            </>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Pay As You Go
            </>
          )}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </a>
    </div>
  </div>
</div>
</section>

               {/* --- Final CTA Gate --- */}
<section className="relative py-16 sm:py-24 bg-gray-900">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-full w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent"></div>
  </div>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
          Your next high-converting email is waiting
        </span>
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        You'll kick yourself if you miss this. The average customer sees <span className="font-semibold text-white">$3,850 in extra revenue</span> within 30 days.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#pricing"
          className="rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3.5 text-lg font-semibold text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Choose Your Plan
        </a>
      </div>
    </div>
  </div>
</section>

<footer className="bg-gray-900 border-t border-white/10">
  {/* Main Footer Content */}
  <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
    
    {/* Newsletter + CTA */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
            Get Smarter Email Tips
          </span>
        </h3>
        <p className="text-gray-300 mb-6">
          Join 12,743 marketers getting our exclusive email growth strategies
        </p>
        <form className="flex gap-3">
          <input 
            type="email" 
            placeholder="Your best email" 
            className="flex-1 min-w-0 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
          <button 
            type="submit" 
            className="rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 font-bold text-gray-900 hover:shadow-lg transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
      
      {/* Trust Badges */}
      <div className="flex flex-col items-center md:items-end justify-center">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Replace with actual trust badge images */}
          <div className="h-12 w-full bg-white/5 rounded-lg flex items-center justify-center text-xs text-center text-gray-400 p-2">PCI Compliant</div>
          <div className="h-12 w-full bg-white/5 rounded-lg flex items-center justify-center text-xs text-center text-gray-400 p-2">Money Back</div>
          <div className="h-12 w-full bg-white/5 rounded-lg flex items-center justify-center text-xs text-center text-gray-400 p-2">5★ Reviews</div>
        </div>
        <p className="text-gray-400 text-sm text-center md:text-right">
          Rated 4.9/5 by 3,217 customers worldwide
        </p>
      </div>
    </div>
    
    {/* Grid Links */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
      <div>
        <h4 className="text-sm font-bold text-white mb-4">Product</h4>
        <ul className="space-y-3">
          {['Features', 'Pricing', 'Integrations', 'Support'].map((item) => (
            <li key={item}>
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-bold text-white mb-4">Resources</h4>
        <ul className="space-y-3">
          {['Blog', 'Case Studies', 'Guides', 'Webinars'].map((item) => (
            <li key={item}>
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-bold text-white mb-4">Company</h4>
        <ul className="space-y-3">
          {['About Us', 'Careers', 'Contact', 'News'].map((item) => (
            <li key={item}>
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-bold text-white mb-4">Legal</h4>
        <ul className="space-y-3">
          {['Privacy', 'Terms', 'Security', 'Compliance'].map((item) => (
            <li key={item}>
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    {/* Bottom Bar */}
    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center gap-6 mb-6 md:mb-0">
        <a href="https://www.facebook.com/profile.php/?id=100068008215900" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/bossmailer.co.za/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
        <a href="mailto:info@bmza-mail.com" className="text-gray-400 hover:text-yellow-300 transition-colors">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
          </svg>
        </a>
      </div>
      
      <div className="text-center md:text-right">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} BossMailer. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-1">
          62 Roeland St, Gardens, Cape Town, 8001
        </p>
      </div>
    </div>
  </div>
</footer>

        {/* Floating CTA that appears on scroll */}
        {scrollY > 300 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
            <a
              href="https://bossmailer.co.za/newsletter/customer/guest/register"
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-lg shadow-lg flex items-center transform transition hover:scale-105"
            >
              <span className="mr-2" aria-hidden="true">
                🚀
              </span>{" "}
              Start Your Free Trial Now
            </a>
          </div>
        )}

      </div> {/* This closes the main content container */}
    </div> // This closes the root div
  ); // This closes the return statement
} // This closes the Home component function