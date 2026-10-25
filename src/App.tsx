/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, CheckCircle2, Mail, MapPin } from 'lucide-react';
import React from 'react';
import heroImage from './assets/images/regenerated_image_1779083679006.jpg';
import ScrollStack from './components/ScrollStack';
import PillNav from './components/PillNav';
import SplitText from './components/SplitText';
import ShinyText from './components/ShinyText';
import { MagicContainer, MagicCard } from './components/MagicBento';
import { Dock, DockItem } from './components/Dock';
import Stepper, { Step } from './components/Stepper';
import { AnimatedList } from './components/AnimatedList';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-accent selection:text-white pb-32">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-bg brutalist-header overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <div className="font-heading font-900 text-2xl tracking-tighter uppercase">
            V.Jha<span className="text-accent">.</span>
          </div>
          <PillNav />
          <a href="#contact" className="brutalist-button px-6 py-3 uppercase text-sm tracking-wider">
            Book a Call
          </a>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-16 lg:pt-32 lg:pb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start gap-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[0.9] tracking-tighter uppercase">
                <ShinyText speed={3}>
                  <SplitText text="I Scale" /> <br /> <span className="text-accent"><SplitText text="Real Estate &" /> <br /> <SplitText text="Tech Brands" /></span> <br /> <SplitText text="to 8-Figures." />
                </ShinyText>
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-lg leading-snug">
                <SplitText text="Zero fluff. Just aggressive social media management, killer creative, and advertising that dominates your market." />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                <a href="#contact" className="brutalist-button px-8 py-4 text-lg w-full sm:w-auto flex justify-between items-center gap-4">
                  Start Project <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#results" className="brutalist-card px-8 py-4 text-lg font-bold w-full sm:w-auto flex justify-center items-center hover:text-accent cursor-pointer bg-bg text-center">
                  See Proof
                </a>
              </div>
            </div>
            <div className="relative">
              {/* FACE FORWARD HERO */}
              <div className="brutalist-border p-2 bg-bg rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src={heroImage} 
                  alt="Vivek Jha looking directly at the camera" 
                  className="w-full h-auto grayscale contrast-125 object-cover aspect-[4/5] md:aspect-square border-[2px] border-ink"
                />
              </div>
              {/* Decor - Absolute positioning to break the grid slightly */}
              <div className="absolute -bottom-8 -left-8 brutalist-card bg-accent text-white p-6 z-10 hidden md:block">
                <p className="font-heading font-black text-4xl leading-none">125%</p>
                <p className="font-bold text-xs uppercase tracking-wider mt-1">Avg. ROI Boost</p>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTS TICKER */}
        <section className="my-16" aria-label="Trusted Clients">
          <div className="marquee-container">
            <div className="marquee-content">
              <span>Harish Khanna</span><span>•</span>
              <span>Stallion Buildtech</span><span>•</span>
              <span>Veda Epic Tales</span><span>•</span>
              <span>Advent Developer's</span><span>•</span>
              <span>Media Mentor</span><span>•</span>
              <span>Momento</span><span>•</span>
              {/* Duplicate for seamless infinite scroll */}
              <span>Harish Khanna</span><span>•</span>
              <span>Stallion Buildtech</span><span>•</span>
              <span>Veda Epic Tales</span><span>•</span>
              <span>Advent Developer's</span><span>•</span>
              <span>Media Mentor</span><span>•</span>
              <span>Momento</span><span>•</span>
              <span>Harish Khanna</span><span>•</span>
              <span>Stallion Buildtech</span><span>•</span>
              <span>Veda Epic Tales</span><span>•</span>
              <span>Advent Developer's</span><span>•</span>
              <span>Media Mentor</span><span>•</span>
              <span>Momento</span><span>•</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="max-w-7xl mx-auto px-4 sm:px-8 py-24">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter">
                <SplitText text="Own Your" /> <span className="text-accent underline decoration-8 underline-offset-8"><SplitText text="Niche" /></span>
              </h2>
              <p className="text-xl font-medium leading-relaxed max-w-lg">
                We replace outdated, slow-moving agencies with a high-velocity digital machine. This is how we execute across your entire strategy, creative cycle, and paid performance.
              </p>
              
              <div className="space-y-6 pt-4 border-t-2 border-white/10">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-accent text-white font-bold text-xs brutalist-border uppercase tracking-widest mt-1">24/7</div>
                  <div>
                    <h4 className="font-heading font-black uppercase text-lg">Continuous Pipeline</h4>
                    <p className="text-sm text-white/60 font-medium">Your brand is always active, fresh, and generating high-intent consumer traffic.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-accent text-white font-bold text-xs brutalist-border uppercase tracking-widest mt-1">ROI</div>
                  <div>
                    <h4 className="font-heading font-black uppercase text-lg">Data-Led Creative</h4>
                    <p className="text-sm text-white/60 font-medium">We design content focused completely on conversions, scroll retention, and actual ROI.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column with Animated List */}
            <div className="lg:col-span-7 relative">
              <AnimatedList>
                {/* Social Media Card */}
                <div key="service-1" className="w-full brutalist-border bg-bg p-6 flex flex-col justify-between hover:border-accent transition-colors duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-ink text-bg font-bold uppercase text-xs tracking-widest brutalist-border">01. Service Focus</span>
                    <span className="text-xs font-mono text-accent font-bold uppercase tracking-wider">● Active SMM</span>
                  </div>
                  <h3 className="text-2xl font-heading font-black uppercase mb-3 text-white">
                    Social Media
                  </h3>
                  <p className="font-medium text-white/70 mb-6 text-sm">
                    Strategic content planning and end-to-end profile management to build your brand authority.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {['Strategy & Planning', 'Community Management', 'Profile Optimization'].map(item => (
                      <span key={item} className="flex items-center gap-1.5 font-bold text-xs bg-[#111] px-2.5 py-1.5 brutalist-border border-white/10 text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Creative Production Card */}
                <div key="service-2" className="w-full brutalist-border bg-accent text-white p-6 flex flex-col justify-between transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-white text-bg font-bold uppercase text-xs tracking-widest brutalist-border">02. Design Focus</span>
                    <span className="text-xs font-mono text-white font-bold uppercase tracking-wider animate-pulse">● Rendering</span>
                  </div>
                  <h3 className="text-2xl font-heading font-black uppercase mb-3">
                    Creative Production
                  </h3>
                  <p className="font-medium text-white/90 mb-6 text-sm">
                    High-retention video editing and bold graphic design that commands total feed attention.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {['Video Editing', 'Graphic Designing', 'Brand Identity'].map(item => (
                      <span key={item} className="flex items-center gap-1.5 font-bold text-xs bg-bg/20 px-2.5 py-1.5 brutalist-border border-white/10 text-white">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" /> {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Advertising Card */}
                <div key="service-3" className="w-full brutalist-border bg-bg p-6 flex flex-col justify-between hover:border-accent transition-colors duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-ink text-bg font-bold uppercase text-xs tracking-widest brutalist-border">03. Traffic Focus</span>
                    <span className="text-xs font-mono text-emerald-500 font-bold uppercase tracking-wider">● Scaling Ads</span>
                  </div>
                  <h3 className="text-2xl font-heading font-black uppercase mb-3 text-white">
                    Advertising
                  </h3>
                  <p className="font-medium text-white/70 mb-6 text-sm">
                    Data-driven ad campaigns and consulting to maximize your return on ad spend (ROAS).
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {['Paid Ad Campaigns', 'Social Media Consulting', 'ROI Tracking'].map(item => (
                      <span key={item} className="flex items-center gap-1.5 font-bold text-xs bg-[#111] px-2.5 py-1.5 brutalist-border border-white/10 text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedList>
            </div>
          </div>
        </section>

        {/* RESULTS: BENTO GRID */}
        <section id="results" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 bg-[#111111] brutalist-border my-16">
          <div className="mb-16">
            <h2 className="text-5xl font-heading font-black uppercase tracking-tighter mb-4">
              <SplitText text="Metrics Win." /> <br /> <span className="text-ink"><SplitText text="Opinions Lose." /></span>
            </h2>
            <p className="text-xl font-medium max-w-2xl">
              <SplitText text="I don't sell hours. I sell outcomes. Here is what happens when I deploy." />
            </p>
          </div>
          
          <ScrollStack>
            <div className="brutalist-border p-8 md:p-16 group text-white bg-bg w-full h-[50vh] flex flex-col justify-center items-center text-center">
              <p className="font-bold uppercase tracking-widest text-sm opacity-60 mb-4 group-hover:text-accent transition-colors">Total Reach Generated</p>
              <p className="text-7xl lg:text-9xl font-heading font-black tracking-tighter leading-none">850K+</p>
            </div>
            <div className="brutalist-border p-8 md:p-16 bg-accent text-white border-accent w-full h-[50vh] flex flex-col justify-center items-center text-center">
              <p className="font-bold uppercase tracking-widest text-sm text-red-100 mb-4">Follower Growth</p>
              <p className="text-6xl lg:text-9xl font-heading font-black tracking-tighter">+85%</p>
              <p className="mt-4 font-bold">Average YoY across accounts</p>
            </div>
            <div className="brutalist-border p-8 md:p-16 bg-bg text-white w-full h-[50vh] flex flex-col justify-center items-center text-center">
              <p className="font-bold uppercase tracking-widest text-sm text-gray-400 mb-4">Ad Spend Managed</p>
              <p className="text-6xl lg:text-9xl font-heading font-black tracking-tighter">₹15L+</p>
              <p className="mt-4 font-bold">Optimized for maximum ROI.</p>
            </div>
            <div className="brutalist-border p-8 md:p-16 bg-[#0e1d3b] text-white w-full h-[50vh] flex flex-col justify-center items-center text-center">
              <p className="font-bold uppercase tracking-widest text-sm text-gray-400 mb-4">Leads Generated</p>
              <p className="text-6xl lg:text-9xl font-heading font-black tracking-tighter">670+</p>
              <p className="mt-4 font-bold text-lg">Qualified leads for real estate and tech partners.</p>
            </div>
          </ScrollStack>
        </section>

        {/* HOW I WORK */}
        <section id="work" className="max-w-7xl mx-auto px-4 sm:px-8 py-24">
          <div className="mb-16">
            <h2 className="text-5xl font-heading font-black uppercase tracking-tighter">
              <SplitText text="How I Work" />
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="brutalist-card p-8 group relative overflow-hidden">
              <h3 className="text-8xl font-heading font-black text-black/5 uppercase absolute -bottom-4 right-0 group-hover:text-accent/10 transition-colors select-none leading-none">01</h3>
              <h4 className="text-2xl font-black uppercase mb-4 relative z-10 group-hover:text-accent transition-colors">Discovery</h4>
              <p className="font-medium relative z-10">I deep-dive into your brand, current metrics, target audience, and business goals to uncover massive growth opportunities.</p>
            </div>
            <div className="brutalist-card p-8 group relative overflow-hidden text-white bg-ink">
              <h3 className="text-8xl font-heading font-black text-white/5 uppercase absolute -bottom-4 right-0 group-hover:text-accent/10 transition-colors select-none leading-none">02</h3>
              <h4 className="text-2xl font-black uppercase mb-4 relative z-10 text-accent">Strategy</h4>
              <p className="font-medium relative z-10 opacity-90">I build a custom execution plan, content calendar, and advertising strategy designed for aggressive market dominance.</p>
            </div>
            <div className="brutalist-card p-8 group relative overflow-hidden">
              <h3 className="text-8xl font-heading font-black text-black/5 uppercase absolute -bottom-4 right-0 group-hover:text-accent/10 transition-colors select-none leading-none">03</h3>
              <h4 className="text-2xl font-black uppercase mb-4 relative z-10 group-hover:text-accent transition-colors">Execution</h4>
              <p className="font-medium relative z-10">Flawless deployment of content, community management, and paid ads with continuous optimization and reporting.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="brutalist-card p-6 flex flex-col items-center text-center gap-4 group hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              <h4 className="text-xl font-black uppercase mt-2">Platform<br/>Specialists</h4>
            </div>
            <div className="brutalist-card p-6 flex flex-col items-center text-center gap-4 group hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              <h4 className="text-xl font-black uppercase mt-2">Custom<br/>Strategies</h4>
            </div>
            <div className="brutalist-card p-6 flex flex-col items-center text-center gap-4 group hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              <h4 className="text-xl font-black uppercase mt-2">Creative<br/>Excellence</h4>
            </div>
            <div className="brutalist-card p-6 flex flex-col items-center text-center gap-4 group hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              <h4 className="text-xl font-black uppercase mt-2">Transparent<br/>Process</h4>
            </div>
          </div>
        </section>

        {/* ABOUT ME */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 my-16">
          <div className="brutalist-card bg-ink text-white p-8 md:p-16 lg:p-24 relative overflow-hidden">
            {/* Background Typography Decoration */}
            <div className="absolute -right-32 -bottom-32 text-[300px] font-heading font-black text-bg/10 pointer-events-none leading-none select-none">
              VJ
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-5xl font-heading font-black uppercase tracking-tighter mb-8">
                <SplitText text="The Strategist" /> <br /> <SplitText text="Behind The Screens." />
              </h2>
              <div className="space-y-6 text-xl font-medium leading-relaxed">
                <p>
                  <SplitText text="I spent years watching agencies rip off founders with generic social templates and zero strategy. I got sick of it." />
                </p>
                <p>
                  <SplitText text="I build aggressive, conversion-focused social engines for real estate and tech brands. My campaigns are engineered for attention, optimized for extreme engagement, and designed to generate real leads." />
                </p>
                <p className="text-accent font-bold">
                  <SplitText text="If you want pretty posts that get zero reach, hire an agency. If you want a brand weapon, hire me." />
                </p>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row gap-8 font-bold">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent" /> Worli, Mumbai
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-accent" /> vivekjhaa27@gmail.com
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / LEAD CAPTURE */}
        <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-6">
              <SplitText text="Let's" /> <span className="text-accent"><SplitText text="Work Together" /></span>
            </h2>
            <p className="text-xl font-bold max-w-2xl mx-auto">
              <SplitText text="Ready to scale? Fill out the brief. If we're a fit, I'll reply within 24 hours." />
            </p>
          </div>
          
          <form onSubmit={(e) => { e.preventDefault(); alert("Brief Submitted!"); }}>
            <Stepper
              initialStep={1}
              backButtonText="Previous"
              nextButtonText="Next"
              stepCircleContainerClassName="brutalist-card"
            >
              <Step>
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-2xl uppercase tracking-widest mb-6 border-b-2 border-white/10 pb-4">
                    1. Personal Info
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="name" className="block font-bold uppercase text-xs tracking-widest text-white/60">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full brutalist-border p-4 bg-bg focus:bg-white focus:text-bg focus:outline-none focus:ring-0 transition-colors text-lg font-medium" 
                        placeholder="Rahul Sharma" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="block font-bold uppercase text-xs tracking-widest text-white/60">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        className="w-full brutalist-border p-4 bg-bg focus:bg-white focus:text-bg focus:outline-none focus:ring-0 transition-colors text-lg font-medium" 
                        placeholder="rahul@company.com" 
                      />
                    </div>
                  </div>
                </div>
              </Step>
              <Step>
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-2xl uppercase tracking-widest mb-6 border-b-2 border-white/10 pb-4">
                    2. Project Scope
                  </h3>
                  <div className="space-y-3">
                    <label htmlFor="budget" className="block font-bold uppercase text-xs tracking-widest text-white/60">
                      Project Budget (INR) <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        id="budget" 
                        required 
                        className="w-full brutalist-border p-4 bg-bg focus:bg-white focus:text-bg focus:outline-none focus:ring-0 transition-colors text-lg font-medium appearance-none rounded-none"
                      >
                        <option value="">Select Range...</option>
                        <option value="10k-25k">₹10,000 - ₹25,000</option>
                        <option value="25k-50k">₹25,000 - ₹50,000</option>
                        <option value="50k+">₹50,000+</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Step>
              <Step>
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-2xl uppercase tracking-widest mb-6 border-b-2 border-white/10 pb-4">
                    3. Project Brief
                  </h3>
                  <div className="space-y-3">
                    <label htmlFor="details" className="block font-bold uppercase text-xs tracking-widest text-white/60">
                      Project Details <span className="text-accent">*</span>
                    </label>
                    <textarea 
                      id="details" 
                      rows={4} 
                      required 
                      className="w-full brutalist-border p-4 bg-bg focus:bg-white focus:text-bg focus:outline-none focus:ring-0 transition-colors text-lg font-medium resize-y" 
                      placeholder="Describe your goals, metrics, and bottlenecks..." 
                    />
                  </div>
                  <p className="text-center font-bold text-sm text-white/40 uppercase tracking-widest pt-2">
                    Secure & Confidential
                  </p>
                </div>
              </Step>
            </Stepper>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t-[2px] border-ink mt-16 pt-16 pb-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 font-bold uppercase text-sm tracking-wider">
          <div>
            &copy; {new Date().getFullYear()} Vivek Jha. All Rights Reserved.
          </div>
          <div className="flex gap-8">
            <a href="https://www.youtube.com/@voice_with_vivek" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.linkedin.com/in/vivekjha027" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/vivekk027/" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
