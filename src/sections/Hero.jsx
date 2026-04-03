import { useEffect, useRef } from 'react'

const CLIENTS = ['Stripe', 'Linear', 'Vercel', 'Figma', 'Notion', 'Framer', 'Loom', 'Raycast', 'Arc', 'Cron']

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    setTimeout(() => el.classList.add('hero-loaded'), 50)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gray-50 dark:bg-gray-900"
      id="hero"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 dark:opacity-50" />

      {/* Radial gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-gray-200/60 to-transparent dark:from-gray-700/30 dark:to-transparent blur-3xl pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gray-200/40 dark:bg-gray-700/20 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-32 left-[5%] w-48 h-48 rounded-full bg-gray-300/30 dark:bg-gray-600/20 blur-2xl animate-float-slow pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200/50 dark:via-gray-700/40 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200/50 dark:via-gray-700/40 to-transparent pointer-events-none" />

      <div className="container-xl relative z-10 pt-28 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm"
            style={{ animation: 'fadeUp 0.5s 0.1s ease both' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            <span className="label-sm text-gray-500 dark:text-gray-400">Available for new projects</span>
          </div>

          {/* Main headline */}
          <h1
            className="heading-xl text-gray-800 dark:text-gray-50 mb-6 text-balance"
            style={{ animation: 'fadeUp 0.6s 0.2s ease both' }}
          >
            We Build
            <br />
            <span className="relative inline-block">
              <span className="text-gray-400 dark:text-gray-500 italic font-light">Digital</span>
              {' '}
              <span>Experiences</span>
            </span>
            <br />
            That <span className="text-gray-400 dark:text-gray-500">Convert.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="body-lg text-gray-500 dark:text-gray-400 max-w-xl mb-10 leading-relaxed"
            style={{ animation: 'fadeUp 0.6s 0.35s ease both' }}
          >
            Axiom Studio is a premium digital agency crafting high-performance websites, brand identities, and growth-driven marketing systems for ambitious companies.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center gap-3 mb-16"
            style={{ animation: 'fadeUp 0.6s 0.5s ease both' }}
          >
            <button
              className="btn-primary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button
              className="btn-secondary"
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
          </div>

          {/* Trust stats */}
          <div
            className="flex flex-wrap gap-8 sm:gap-12 mb-16"
            style={{ animation: 'fadeUp 0.6s 0.6s ease both' }}
          >
            {[
              { num: '150+', label: 'Projects Delivered' },
              { num: '98%', label: 'Client Satisfaction' },
              { num: '12yr', label: 'Industry Experience' },
              { num: '40+', label: 'Awards Won' },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-display font-bold text-3xl text-gray-800 dark:text-gray-100 tracking-tight">{num}</span>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-body">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee logos */}
        <div
          className="relative overflow-hidden"
          style={{ animation: 'fadeUp 0.6s 0.8s ease both' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            <span className="label-sm text-gray-400 dark:text-gray-600 whitespace-nowrap">trusted by innovative teams</span>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="overflow-hidden">
            <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
              {[...CLIENTS, ...CLIENTS].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="font-display font-semibold text-sm text-gray-300 dark:text-gray-600 tracking-wide select-none"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="label-sm text-gray-300 dark:text-gray-600">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 dark:from-gray-600 to-transparent" />
      </div>
    </section>
  )
}
