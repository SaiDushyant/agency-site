import { useInView } from '../hooks/useInView'

export default function CTA() {
  const { ref, inView } = useInView()

  return (
    <section className="section-pad bg-gray-800 dark:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gray-700/20 blur-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gray-600/10 blur-3xl" />

      <div className="container-xl relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center ${inView ? 'animate-fade-up' : 'opacity-0'}`}
          style={inView ? { animation: 'fadeUp 0.7s ease both' } : {}}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-700/60 border border-gray-600 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="label-sm text-gray-400">Taking on new clients Q2 2025</span>
          </div>

          <h2 className="heading-lg text-gray-50 mb-6 text-balance">
            Ready to build something
            <br />
            <span className="text-gray-500">extraordinary?</span>
          </h2>

          <p className="body-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Let's talk about your project. No commitments, no sales pitch—just an honest conversation about what's possible and how we can help.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <button
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gray-50 text-gray-800 font-body font-semibold text-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Free Discovery Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-gray-600 text-gray-300 font-body font-semibold text-sm rounded-full hover:border-gray-400 hover:text-gray-100 transition-all duration-200 hover:scale-[1.02]"
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Our Work First
            </button>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600">
            {[
              'No lock-in contracts',
              'Response within 24h',
              'Free initial consultation',
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-500">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-xs font-body">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
