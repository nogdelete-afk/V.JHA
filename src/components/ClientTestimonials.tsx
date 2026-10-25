import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Karan Malhotra",
    role: "MD, Stallion Buildtech",
    text: "Our social presence was non-existent. They built a powerful, bespoke narrative that instantly resonated with high-ticket clients."
  },
  {
    name: "Vikramjit Singh",
    role: "Growth Head, Advent Developer's",
    text: "Strategic planning at its finest. They handles our content cycle seamlessly, bringing in consistency and massive engagement."
  },
  {
    name: "Ananya Iyer",
    role: "Creative Director, Veda Epic Tales",
    text: "They captures our complex storytelling and transforms it into highly shareable, clean digital content. Pure genius."
  },
  {
    name: "Harish Khanna",
    role: "Founder, Khanna Capital",
    text: "Outstanding organic brand scaling on LinkedIn and Twitter. Clear communication, solid data, and stunning visual layouts."
  }
];

const DefaultAvatar = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-12 h-12 brutalist-border bg-white shrink-0"
  >
    {/* Head */}
    <circle cx="50" cy="36" r="15" fill="black" />
    {/* Torso/Shoulders */}
    <path 
      d="M20,78 A30,30 0 0,1 80,78 Z" 
      fill="black" 
    />
  </svg>
);

export default function ClientTestimonials() {
  return (
    <section id="testimonials" className="w-full py-24 border-t-2 border-b-2 border-white/10 bg-bg/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-left">
          Trusted By <br />
          <span className="text-accent">Industry Leaders</span>
        </h2>
        <p className="text-lg md:text-xl text-white/60 font-medium max-w-2xl mt-4">
          Real feedback from our partners on custom social media management, strategic content design, and system execution.
        </p>
      </div>

      <div className="relative w-full">
        {/* Unified Single Lane: Leftward Scrolling */}
        <div className="group flex overflow-hidden w-full select-none gap-6 [--gap:1.5rem]">
          <div className="flex shrink-0 justify-around gap-6 min-w-full animate-marquee-slow group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={`testimonial-${idx}`} 
                className="w-[380px] shrink-0 brutalist-border bg-[#111111] p-6 flex flex-col justify-between hover:border-accent transition-colors duration-300"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-white/80 font-medium text-sm leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <DefaultAvatar />
                  <div>
                    <h4 className="font-bold text-sm tracking-wide text-white">{t.name}</h4>
                    <p className="text-xs text-white/50 tracking-wider font-semibold uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
