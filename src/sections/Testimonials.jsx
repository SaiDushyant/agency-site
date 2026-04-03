import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const TESTIMONIALS = [
  {
    quote: "Axiom didn't just build our website—they transformed our entire digital presence. Within 3 months of launch, our organic traffic tripled and our conversion rate doubled. The attention to detail is unmatched.",
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'Luminary Finance',
    rating: 5,
    avatar: 'SC',
    color: '#343a40',
  },
  {
    quote: "We'd worked with three agencies before Axiom. None came close to this level of craft and communication. They built our SaaS platform on time, under budget, and it's genuinely beautiful to use.",
    name: 'Marcus Reed',
    role: 'Co-Founder',
    company: 'Pulsar Analytics',
    rating: 5,
    avatar: 'MR',
    color: '#495057',
  },
  {
    quote: "The brand identity they created for us has won two design awards. Our customers consistently comment on how professional and trustworthy we look. It directly impacts our sales conversations.",
    name: 'Priya Nair',
    role: 'Marketing Director',
    company: 'Verdant Co.',
    rating: 5,
    avatar: 'PN',
    color: '#212529',
  },
  {
    quote: "Fast, communicative, and technically excellent. Axiom rebuilt our e-commerce platform with a 68% improvement in page speed. Our bounce rate dropped and revenue increased immediately.",
    name: 'James Holloway',
    role: 'Head of Digital',
    company: 'Cascara Coffee',
    rating: 5,
    avatar: 'JH',
    color: '#343a40',
  },
  {
    quote: "The team at Axiom genuinely understands product design. They pushed back on our initial brief in the best way—asking the right questions led to a solution that far exceeded our expectations.",
    name: 'Aiko Tanaka',
    role: 'Product Manager',
    company: 'Helix Health',
    rating: 5,
    avatar: 'AT',
    color: '#495057',
  },
]

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView()

  const prev = () => setActive(a => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setActive(a => (a + 1) % TESTIMONIALS.length)

  return (
    <section className="section-pad bg-gray-50 dark:bg-gray-800/40 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      <div className="container-xl" ref={ref}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="tag mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
              Client Stories
            </div>
            <h2 className="heading-lg text-gray-800 dark:text-gray-50">
              What our clients
              <br />
              <span className="text-gray-400 dark:text-gray-500">actually say</span>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end mb-1">
                <StarRating />
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-body">4.9 / 5 across 150+ reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonial grid + featured */}
        <div className={`grid lg:grid-cols-5 gap-5 stagger-children ${inView ? 'in-view' : ''}`}>
          {/* Featured large card */}
          <div className="lg:col-span-3 card-base flex flex-col justify-between min-h-[300px] hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-black/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-semibold text-sm"
                  style={{ backgroundColor: TESTIMONIALS[active].color }}
                >
                  {TESTIMONIALS[active].avatar}
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-gray-800 dark:text-gray-100">{TESTIMONIALS[active].name}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{TESTIMONIALS[active].role}, {TESTIMONIALS[active].company}</p>
                </div>
                <div className="ml-auto">
                  <StarRating count={TESTIMONIALS[active].rating} />
                </div>
              </div>

              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="text-gray-200 dark:text-gray-700 mb-4">
                <path d="M0 20V12.4C0 8.4 1.2 5.2 3.6 2.8 6 .4 9.2 0 13.2 0v3.6c-2.4 0-4.2.8-5.4 2.4C6.6 7.6 6 9.6 6 12v1.2h5.6V20H0zm14.4 0V12.4c0-4 1.2-7.2 3.6-9.6C20.4.4 23.6 0 27.6 0v3.6c-2.4 0-4.2.8-5.4 2.4-1.2 1.6-1.8 3.6-1.8 6v1.2H26V20H14.4z" fill="currentColor"/>
              </svg>

              <p className="body-md text-gray-600 dark:text-gray-300 leading-relaxed italic">
                {TESTIMONIALS[active].quote}
              </p>
            </div>

            {/* Nav controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-gray-800 dark:bg-gray-100' : 'w-2 bg-gray-200 dark:bg-gray-700'}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500 transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                </button>
                <button onClick={next} className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500 transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {TESTIMONIALS.filter((_, i) => i !== active).slice(0, 2).map((t) => (
              <div
                key={t.name}
                onClick={() => setActive(TESTIMONIALS.indexOf(t))}
                className="card-base flex-1 cursor-pointer hover:shadow-lg hover:shadow-gray-200/60 dark:hover:shadow-black/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-display font-semibold text-xs"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-xs text-gray-800 dark:text-gray-100">{t.name}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{t.company}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 italic">"{t.quote.substring(0, 120)}..."</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
