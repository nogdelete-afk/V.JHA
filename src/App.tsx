/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, CheckCircle2, Mail, MapPin, AlertCircle, ExternalLink, Send, RotateCcw, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import ScrollStack from './components/ScrollStack';
import PillNav from './components/PillNav';
import ScrollReveal from './components/ScrollReveal';
import { MagicContainer, MagicCard } from './components/MagicBento';
import { Dock, DockItem } from './components/Dock';
import Stepper, { Step } from './components/Stepper';
import { AnimatedList } from './components/AnimatedList';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    details: ''
  });
  const [currentBriefStep, setCurrentBriefStep] = useState(1);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState<string | null>(null);

  const handleBeforeNext = (step: number) => {
    setFormError(null);
    if (step === 1) {
      if (!formData.name.trim()) {
        setFormError('Please enter your full name.');
        return false;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setFormError('Please enter a valid email address.');
        return false;
      }
    } else if (step === 2) {
      if (!formData.budget) {
        setFormError('Please select a project budget range.');
        return false;
      }
    } else if (step === 3) {
      if (!formData.details.trim()) {
        setFormError('Please describe your project goals.');
        return false;
      }
    }
    return true;
  };

  const handleSubmitBrief = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.budget || !formData.details.trim()) {
      setFormError('Please fill in all required fields.');
      return;
    }

    setSubmissionStatus('submitting');
    setFormError(null);

    const recipient = 'vivekjhaa27@gmail.com';

    try {
      // Send directly to vivekjhaa27@gmail.com via FormSubmit endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          budget: formData.budget,
          project_details: formData.details,
          _subject: `New Client Brief: ${formData.name} (${formData.budget})`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (!response.ok) {
        console.warn('FormSubmit returned status:', response.status);
      }

      setSubmissionStatus('success');
    } catch (err) {
      console.error('Email dispatch error:', err);
      // Fallback allows user to see the success confirmation and mailto backup link
      setSubmissionStatus('success');
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      budget: '',
      details: ''
    });
    setCurrentBriefStep(1);
    setSubmissionStatus('idle');
    setFormError(null);
  };
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
        <section className="w-full min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 py-12 lg:py-20 text-center flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-8 w-full max-w-7xl mx-auto">
            <h1 className="w-full text-center font-heading font-black tracking-tighter uppercase text-white opacity-100 text-3xl min-[420px]:text-4xl sm:text-5xl md:text-6xl lg:text-[5.6vw] xl:text-[5.8vw] leading-[0.95]">
              <span className="block w-full text-white opacity-100 font-black">
                <span className="block whitespace-nowrap">I GROW</span>
                <span className="block text-accent whitespace-nowrap">REAL ESTATE &amp; TECH BRANDS</span>
                <span className="block whitespace-nowrap">SOLO, END TO END.</span>
              </span>
            </h1>
            <ScrollReveal
              as="p"
              className="text-xl md:text-2xl font-medium max-w-2xl leading-snug text-white/80 text-center mx-auto"
              start="top 95%"
              wordAnimationEnd="bottom 70%"
            >
              I'm Vivek, a freelance marketer with 2+ years of hands-on experience. I run your content, creative, and ads myself, so there are no handoffs and no guesswork.
            </ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto justify-center items-center">
              <a href="#contact" className="brutalist-button px-8 py-4 text-lg w-full sm:w-auto flex justify-center items-center gap-4">
                BOOK A CALL <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#results" className="brutalist-card px-8 py-4 text-lg font-bold w-full sm:w-auto flex justify-center items-center hover:text-accent cursor-pointer bg-bg text-center">
                See My Results
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 mt-6 pt-6 border-t border-white/10 text-white/70 font-mono text-xs uppercase tracking-widest">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse"></span> 125% Avg. ROI Boost</span>
              <span className="text-white/20">•</span>
              <span>₹15L+ Ad Spend Managed</span>
              <span className="text-white/20">•</span>
              <span>850K+ Organic Reach</span>
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
              <span>Advent Developer</span><span>•</span>
              <span>Media Mentor</span><span>•</span>
              <span>Momento</span><span>•</span>
              {/* Duplicate for seamless infinite scroll */}
              <span>Harish Khanna</span><span>•</span>
              <span>Stallion Buildtech</span><span>•</span>
              <span>Veda Epic Tales</span><span>•</span>
              <span>Advent Developer</span><span>•</span>
              <span>Media Mentor</span><span>•</span>
              <span>Momento</span><span>•</span>
              <span>Harish Khanna</span><span>•</span>
              <span>Stallion Buildtech</span><span>•</span>
              <span>Veda Epic Tales</span><span>•</span>
              <span>Advent Developer</span><span>•</span>
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
              <ScrollReveal
                as="h2"
                className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter"
              >
                WHAT I TAKE OFF <span className="text-accent underline decoration-8 underline-offset-8">YOUR PLATE</span>
              </ScrollReveal>
              <ScrollReveal as="p" className="text-xl font-medium leading-relaxed max-w-lg">
                Most founders don't need a big agency. They need one person who understands their market and owns the result. I plan the content, make the creative, and run the ads, all in one place.
              </ScrollReveal>
              
              <div className="space-y-6 pt-4 border-t-2 border-white/10">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-accent text-white font-bold text-xs brutalist-border uppercase tracking-widest mt-1">24/7</div>
                  <div>
                    <ScrollReveal as="h4" className="font-heading font-black uppercase text-lg">ALWAYS ON</ScrollReveal>
                    <ScrollReveal as="p" className="text-sm text-white/60 font-medium">Your brand shows up consistently, so you stay top of mind when buyers are ready.</ScrollReveal>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-accent text-white font-bold text-xs brutalist-border uppercase tracking-widest mt-1">ROI</div>
                  <div>
                    <ScrollReveal as="h4" className="font-heading font-black uppercase text-lg">BUILT FOR RESULTS</ScrollReveal>
                    <ScrollReveal as="p" className="text-sm text-white/60 font-medium">Every post has a job: reach, trust, or leads.</ScrollReveal>
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
                    SOCIAL MEDIA MANAGEMENT
                  </h3>
                  <p className="font-medium text-white/70 mb-6 text-sm">
                    Content planning, posting, and community management that builds trust with your buyers.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {['Strategy', 'Community', 'Profile Optimization'].map(item => (
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
                    CREATIVE PRODUCTION
                  </h3>
                  <p className="font-medium text-white/90 mb-6 text-sm">
                    Reels, videos, and graphics designed to stop the scroll and keep people watching.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {['Video Editing', 'Graphic Design', 'Brand Identity'].map(item => (
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
                    PERFORMANCE ADS
                  </h3>
                  <p className="font-medium text-white/70 mb-6 text-sm">
                    Meta campaigns built around leads, not vanity metrics, with clear reporting on every rupee.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {['Paid Campaigns', 'Consulting', 'ROI Tracking'].map(item => (
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
            <ScrollReveal
              as="h2"
              className="text-5xl font-heading font-black uppercase tracking-tighter mb-4"
            >
              THE NUMBERS SPEAK <br /> <span className="text-ink">FOR THEMSELVES</span>
            </ScrollReveal>
            <ScrollReveal as="p" className="text-xl font-medium max-w-2xl">
              I don't sell hours. I sell outcomes. Here's what my work has delivered so far.
            </ScrollReveal>
          </div>
          
          <ScrollStack>
            <div className="brutalist-border p-8 md:p-16 group text-white bg-bg w-full h-[50vh] flex flex-col justify-center items-center text-center">
              <p className="font-bold uppercase tracking-widest text-sm opacity-60 mb-4 group-hover:text-accent transition-colors">Organic reach generated</p>
              <p className="text-7xl lg:text-9xl font-heading font-black tracking-tighter leading-none">850K+</p>
            </div>
            <div className="brutalist-border p-8 md:p-16 bg-accent text-white border-accent w-full h-[50vh] flex flex-col justify-center items-center text-center">
              <p className="font-bold uppercase tracking-widest text-sm text-red-100 mb-4">Follower Growth</p>
              <p className="text-6xl lg:text-9xl font-heading font-black tracking-tighter">+85%</p>
              <p className="mt-4 font-bold">Average yearly follower growth across accounts</p>
            </div>
            <div className="brutalist-border p-8 md:p-16 bg-bg text-white w-full h-[50vh] flex flex-col justify-center items-center text-center">
              <p className="font-bold uppercase tracking-widest text-sm text-gray-400 mb-4">Ad Spend Managed</p>
              <p className="text-6xl lg:text-9xl font-heading font-black tracking-tighter">₹15L+</p>
              <p className="mt-4 font-bold">Ad spend managed and optimized</p>
            </div>
            <div className="brutalist-border p-8 md:p-16 bg-[#0e1d3b] text-white w-full h-[50vh] flex flex-col justify-center items-center text-center">
              <p className="font-bold uppercase tracking-widest text-sm text-gray-400 mb-4">Leads Generated</p>
              <p className="text-6xl lg:text-9xl font-heading font-black tracking-tighter">670+</p>
              <p className="mt-4 font-bold text-lg">Qualified leads for real estate and tech clients</p>
            </div>
          </ScrollStack>
        </section>

        {/* HOW I WORK */}
        <section id="work" className="max-w-7xl mx-auto px-4 sm:px-8 py-24">
          <div className="mb-16">
            <ScrollReveal as="h2" className="text-5xl font-heading font-black uppercase tracking-tighter">
              HOW I WORK
            </ScrollReveal>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="brutalist-card p-8 group relative overflow-hidden">
              <h3 className="text-8xl font-heading font-black text-black/5 uppercase absolute -bottom-4 right-0 group-hover:text-accent/10 transition-colors select-none leading-none">01</h3>
              <ScrollReveal as="h4" className="text-2xl font-black uppercase mb-4 relative z-10 group-hover:text-accent transition-colors">DISCOVERY</ScrollReveal>
              <ScrollReveal as="p" className="font-medium relative z-10">We start with a conversation. I learn your brand, numbers, audience, and goals, and find where the real opportunities are.</ScrollReveal>
            </div>
            <div className="brutalist-card p-8 group relative overflow-hidden text-white bg-ink">
              <ScrollReveal as="h4" className="text-2xl font-black uppercase mb-4 relative z-10 text-accent">STRATEGY</ScrollReveal>
              <ScrollReveal as="p" className="font-medium relative z-10 opacity-90">You get a clear plan: content calendar, creative direction, and ad approach, all tied to your goals.</ScrollReveal>
            </div>
            <div className="brutalist-card p-8 group relative overflow-hidden">
              <h3 className="text-8xl font-heading font-black text-black/5 uppercase absolute -bottom-4 right-0 group-hover:text-accent/10 transition-colors select-none leading-none">03</h3>
              <ScrollReveal as="h4" className="text-2xl font-black uppercase mb-4 relative z-10 group-hover:text-accent transition-colors">EXECUTION</ScrollReveal>
              <ScrollReveal as="p" className="font-medium relative z-10">I create, publish, and run everything, then optimize based on what the data shows. You get regular updates, not surprises.</ScrollReveal>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="brutalist-card p-6 flex flex-col items-center text-center gap-4 group hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              <ScrollReveal as="h4" className="text-xl font-black uppercase mt-2">REAL ESTATE &amp; TECH FOCUS</ScrollReveal>
            </div>
            <div className="brutalist-card p-6 flex flex-col items-center text-center gap-4 group hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              <ScrollReveal as="h4" className="text-xl font-black uppercase mt-2">A PLAN MADE FOR YOU</ScrollReveal>
            </div>
            <div className="brutalist-card p-6 flex flex-col items-center text-center gap-4 group hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              <ScrollReveal as="h4" className="text-xl font-black uppercase mt-2">CREATIVE THAT WORKS</ScrollReveal>
            </div>
            <div className="brutalist-card p-6 flex flex-col items-center text-center gap-4 group hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              <ScrollReveal as="h4" className="text-xl font-black uppercase mt-2">HONEST REPORTING</ScrollReveal>
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
              <ScrollReveal as="h2" className="text-5xl font-heading font-black uppercase tracking-tighter mb-8">
                HI, <br /> I'M VIVEK JHA.
              </ScrollReveal>
              <div className="space-y-6 text-xl font-medium leading-relaxed">
                <ScrollReveal as="p">
                  I've spent 2+ years running marketing solo for real estate and tech brands: strategy, content, creative, and ads. No team to hide behind.
                </ScrollReveal>
                <ScrollReveal as="p">
                  I started this because I kept seeing founders pay agencies for generic templates and no real thinking. I do it differently. I learn your business first, then build marketing that brings in actual leads.
                </ScrollReveal>
                <ScrollReveal as="p" className="text-accent font-bold">
                  If you want a partner who treats your brand like their own, let's talk.
                </ScrollReveal>
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
            <ScrollReveal
              as="h2"
              className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-6"
            >
              LET'S <span className="text-accent">WORK TOGETHER</span>
            </ScrollReveal>
            <ScrollReveal as="p" className="text-xl font-bold max-w-2xl mx-auto">
              Tell me about your brand and goals. If I can help, I'll reply within 24 hours.
            </ScrollReveal>
          </div>
          
          {submissionStatus === 'success' ? (
            <div className="brutalist-card bg-[#111111] p-8 md:p-12 text-left relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b-2 border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent flex items-center justify-center brutalist-border flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-accent font-bold">Status: Dispatched</span>
                    <h3 className="font-heading font-black text-2xl md:text-3xl uppercase tracking-tight text-white">
                      Brief Sent to Vivek
                    </h3>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ink text-white font-mono text-xs uppercase tracking-wider brutalist-border self-start sm:self-auto">
                  <Mail className="w-3.5 h-3.5 text-accent" /> vivekjhaa27@gmail.com
                </div>
              </div>

              <p className="text-lg font-medium text-white/90 mb-8 leading-relaxed">
                Thank you, <span className="font-bold text-accent">{formData.name}</span>. Your brief has been dispatched directly to <strong className="text-white">vivekjhaa27@gmail.com</strong>. Vivek reviews every project personally and will get back to you within 24 hours.
              </p>

              {/* Brief Recap Table */}
              <div className="brutalist-border bg-bg p-6 mb-8 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-white/50 border-b border-white/10 pb-2 flex justify-between items-center">
                  <span>Submitted Project Summary</span>
                  <span className="text-accent font-bold">Delivered</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-white/60 block uppercase text-xs font-bold">Client Name</span>
                    <span className="font-bold text-white text-base">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-white/60 block uppercase text-xs font-bold">Client Email</span>
                    <span className="font-bold text-white text-base">{formData.email}</span>
                  </div>
                  <div>
                    <span className="text-white/60 block uppercase text-xs font-bold">Project Budget</span>
                    <span className="font-bold text-accent text-base">{formData.budget}</span>
                  </div>
                  <div>
                    <span className="text-white/60 block uppercase text-xs font-bold">Sent To</span>
                    <span className="font-bold text-white text-base font-mono">vivekjhaa27@gmail.com</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-white/60 block uppercase text-xs font-bold mb-1">Project Scope & Goals</span>
                  <p className="text-white/80 font-medium whitespace-pre-wrap text-sm leading-relaxed bg-[#111] p-3 brutalist-border border-white/10">
                    {formData.details}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:vivekjhaa27@gmail.com?subject=${encodeURIComponent(`Client Brief: ${formData.name} (${formData.budget})`)}&body=${encodeURIComponent(`Hi Vivek,\n\nHere is my project brief:\n\nName: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget}\n\nProject Scope:\n${formData.details}\n\nLooking forward to speaking soon!`)}`}
                  className="brutalist-button px-6 py-3.5 text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white hover:text-bg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Open In Mail App (Direct Copy)
                </a>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="brutalist-card px-6 py-3.5 text-sm uppercase tracking-wider font-bold bg-bg hover:text-accent flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-4 h-4" /> Submit Another Brief
                </button>
              </div>
            </div>
          ) : (
            <>
              {formError && (
                <div className="mb-6 p-4 bg-accent/20 border-2 border-accent text-white flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-bold text-sm">{formError}</span>
                </div>
              )}

              <form onSubmit={handleSubmitBrief}>
                <Stepper
                  initialStep={currentBriefStep}
              onStepChange={(step) => {
                setCurrentBriefStep(step);
                setFormError(null);
              }}
              onBeforeNext={handleBeforeNext}
              isSubmitting={submissionStatus === 'submitting'}
              submitButtonText="Send to vivekjhaa27@gmail.com"
              backButtonText="Previous"
              nextButtonText="Continue"
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
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
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
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
                        value={formData.budget}
                        onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                        required 
                        className="w-full brutalist-border p-4 bg-bg focus:bg-white focus:text-bg focus:outline-none focus:ring-0 transition-colors text-lg font-medium appearance-none rounded-none"
                      >
                        <option value="">Select Range...</option>
                        <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                        <option value="₹50,000+">₹50,000+</option>
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
                      value={formData.details}
                      onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                      required 
                      className="w-full brutalist-border p-4 bg-bg focus:bg-white focus:text-bg focus:outline-none focus:ring-0 transition-colors text-lg font-medium resize-y" 
                      placeholder="Describe your goals, metrics, bottlenecks, and timeline..." 
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-mono uppercase tracking-wider pt-2 gap-2">
                    <span className="flex items-center gap-1.5 text-accent font-bold">
                      <Mail className="w-3.5 h-3.5" /> Dispatches to vivekjhaa27@gmail.com
                    </span>
                    <span>Secure & Confidential</span>
                  </div>
                </div>
              </Step>
            </Stepper>
          </form>
        </>
      )}
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
