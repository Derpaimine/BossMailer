"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Static seed for deterministic randomness (fixes hydration error)
const SEED = 12345;
const deterministicRandom = (i) => {
  const x = Math.sin(SEED + i) * 10000;
  return x - Math.floor(x);
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [ctaPulse, setCtaPulse] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState('free');
  const [city, setCity] = useState('Johannesburg'); // Dynamic city based on IP
  const [industry, setIndustry] = useState('e-commerce'); // Dynamic industry

  useEffect(() => {
    // Set city/industry from query params or IP
    const params = new URLSearchParams(window.location.search);
    setCity(params.get('city') || 'Johannesburg');
    setIndustry(params.get('industry') || 'e-commerce');
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCtaPulse(true);
      setTimeout(() => setCtaPulse(false), 1000);
    }, 15000);
    return () => clearInterval(interval);
  }, []);
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
  { src: "/BossMailer_100_intergrations.jpg", alt: "BossMailer 100+ intergrations"},
];
  // ===== BILLION-DOLLAR CHANGES ===== //
  const dynamicPricingPlans = [
    {
      id: 'free',
      name: 'Free Trial',
      description: 'Perfect for testing AI email capabilities',
      priceZAR: 0,
      ctaText: 'Start Free Trial',
      ctaLink: 'https://bossmailer.co.za/newsletter/customer/guest/register',
      features: [
        `Send 500 emails to ${city} contacts`,
        'AI subject line generator',
        'Basic analytics',
        '24h support response'
      ],
      highlight: false
    },
    {
      id: 'scale',
      name: 'Scale Plan',
      description: `For ${industry} businesses sending <10k emails`,
      priceZAR: 899,
      ctaText: 'Get Started',
      ctaLink: 'https://bossmailer.co.za/newsletter/customer/guest/register',
      features: [
        `10,000 emails to ${city} contacts`,
        'AI writer + 3 variations',
        'Competitor migration tool',
        'Priority support',
        'WhatsApp notifications'
      ],
      highlight: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'API access + dedicated IP',
      priceZAR: 3499,
      ctaText: 'Contact Sales',
      ctaLink: 'https://bossmailer.co.za/newsletter/customer/guest/register',
      features: [
        '50,000 emails/month',
        'Dedicated IP for deliverability',
        'Full API access',
        '24/7 phone support',
        'Custom AI models'
      ],
      highlight: false
    }
  ];

  const successStories = [
    {
      name: 'Lerato M.',
      company: `${city} ${industry} store`,
      result: '3.2x more sales',
      quote: `"BossMailer's AI wrote better emails than my marketing team!"`
    },
    {
      name: 'Tech Startup',
      company: 'Lagos SaaS company',
      result: '70% cost savings',
      quote: `"Switched from Mailchimp and got better deliverability at 1/3 the price"`
    }
  ];

  // ===== OPTIMIZED SECTIONS ===== //
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {city} {industry} businesses
                </span>{" "}
                save 70% on email
              </h1>
              
              <p className="text-xl mb-8">
                The only email platform with <strong>AI built for African businesses</strong>.
                Send smarter emails that convert using local language and pricing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="#pricing" 
                  className={`px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-lg text-center transition-all ${ctaPulse ? 'animate-pulse' : ''}`}
                >
                  See Pricing Plans →
                </a>
                <a 
                  href="https://www.bossmailer.co.za/newsletter/page/quick-start-tutorial7min-read" 
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 text-center"
                >
                  How It Works
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <img
                    key={item}
                    className="h-10 w-10 rounded-full border-2 border-white/80"
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 33}.jpg`}
                    alt={`User ${item}`}
                    />
                  ))}
                </div>
                <p className="text-sm">
                  <strong>100+</strong> African businesses sending with us
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative bg-white/5 backdrop-blur-lg p-1 rounded-2xl border border-white/20 shadow-xl">
                <Image
                  src="/AI Email Automation Hero Image.png"
                  alt="BossMailer AI Dashboard"
                  width={800}
                  height={600}
                  className="rounded-xl"
                  priority
                />
                <div className="absolute -bottom-5 -right-5 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold">
                  AI Subject Line Generator
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
                  
      {/* Social Proof */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '3.2x', label: 'Higher open rates' },
              { value: '70%', label: 'Cost savings' },
              { value: '15 min', label: 'Migration time' },
              { value: '47', label: 'Countries supported' }
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <p className="text-3xl font-bold text-yellow-400">{stat.value}</p>
                <p className="mt-2 text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Built for African Businesses
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Language AI',
                desc: 'Automatically writes in English, Afrikaans, Pidgin and more',
                icon: '🌍'
              },
              {
                title: 'Competitor Migration',
                desc: `Switch from Mailchimp/SendGrid in 15 mins (we do the work)`,
                icon: '🚀'
              },
              {
                title: 'Dynamic Pricing',
                desc: 'Pay in ZAR without dollar exchange fees',
                icon: '💰'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/40 to-blue-900/40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            We'll migrate you from <span className="line-through">Mailchimp</span> for <span className="text-yellow-400">FREE</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            And give you <strong>3 months at 50% off</strong> if you switch today
          </p>
          <a 
            href="https://bossmailer.co.za/newsletter/backend/settings/customers/registration" 
            className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition"
          >
            Start Migration Now
          </a>
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
                      className="bg-gray-100/90 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center h-32 transition-transform duration-90 ease-in-out hover:scale-105 hover:shadow-lg" // Reduced duration
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
      {/* Pricing */}
<section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-4">
      <span className="text-yellow-400">Powerful Tools</span> For Every Stage
    </h2>
    <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
      Start free, upgrade when you need advanced functionality. Early adopters get <span className="text-yellow-400 font-bold">beta access</span> to premium features.
    </p>

    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Free Plan - Full email capabilities */}
      <div className="relative p-6 rounded-2xl border-2 border-white/10 bg-gray-800/50 backdrop-blur-sm">
        <h3 className="text-2xl font-bold mb-2">Starter</h3>
        <p className="text-gray-300 mb-4">Everything you need to send great emails</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">FREE</span>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Unlimited email sending</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Detailed campaign analytics</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Basic automation</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Bring your own AI</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>API access (basic rate limits)</span>
          </li>
        </ul>
        <a
          href="/register"
          className="block text-center py-3 px-6 rounded-lg font-bold bg-white/10 hover:bg-white/20 transition"
        >
          Start Now - No Credit Card
        </a>
      </div>

      {/* Growth Plan - Highlighted with beta access */}
      <div className="relative p-6 rounded-2xl border-2 border-yellow-400 bg-gray-800 transform scale-[1.02] shadow-lg">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
          EARLY ACCESS
        </div>
        <h3 className="text-2xl font-bold mb-2">Growth</h3>
        <p className="text-gray-300 mb-4">For teams needing advanced workflows</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">R899</span>
          <span className="text-gray-400">/month</span>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span><strong>Beta access</strong> to all new features</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Canvas workflow builder</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Custom form builder</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>3 team members</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Extended API usage</span>
          </li>
        </ul>
        <a
          href="https://bossmailer.co.za/newsletter/customer/guest/register"
          className="block text-center py-3 px-6 rounded-lg font-bold bg-yellow-400 hover:bg-yellow-500 text-gray-900 transition"
        >
          Get Beta Access
        </a>
      </div>

      {/* Enterprise Plan */}
      <div className="relative p-6 rounded-2xl border-2 border-white/10 bg-gray-800/50 backdrop-blur-sm">
        <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
        <p className="text-gray-300 mb-4">For scaling businesses with complex needs</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">R3,499</span>
          <span className="text-gray-400">/month</span>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Unlimited team members</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Custom AI model training</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Dedicated IP & infrastructure</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Priority feature requests</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>24/7 dedicated support</span>
          </li>
        </ul>
        <a
          href="https://bossmailer.co.za/newsletter/customer/guest/register"
          className="block text-center py-3 px-6 rounded-lg font-bold bg-white/10 hover:bg-white/20 transition"
        >
          Contact Sales
        </a>
      </div>
    </div>

    <div className="text-center mt-12 text-gray-400 text-sm">
      <p>All plans include unlimited sending. Early adopters get special pricing locked in.</p>
    </div>
  </div>
</section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-yellow-400">{city} Businesses</span> Love BossMailer
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {successStories.map((story, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center text-2xl">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{story.name}</p>
                    <p className="text-sm text-gray-400">{story.company}</p>
                  </div>
                </div>
                <p className="text-lg italic mb-4">"{story.quote}"</p>
                <div className="flex items-center gap-2 text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold">{story.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to send better emails from <span className="text-yellow-400">{city}</span>?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join <strong>3,217+ businesses</strong> getting 3x better results with our AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://bossmailer.co.za/register" 
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition"
            >
              Start Free Trial
            </a>
            <a 
              href="https://bossmailer.co.za/demo" 
              className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>
            
      {/* Floating CTA */}
      {scrollY > 300 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <a 
            href="#pricing" 
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-lg flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            See Pricing
          </a>
        </div>
      )}
    </div>
  );
}