import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const PROJECTS = [
  {
    title: 'Luminary Finance',
    category: 'Web App · Branding',
    color: '#343a40',
    accent: '#6c757d',
    emoji: '📈',
    description: 'A next-gen fintech dashboard with real-time data visualization',
    year: '2024',
  },
  {
    title: 'Verdant Co.',
    category: 'E-Commerce · SEO',
    color: '#495057',
    accent: '#adb5bd',
    emoji: '🌿',
    description: 'Sustainable lifestyle brand with 340% revenue growth post-launch',
    year: '2024',
  },
  {
    title: 'Helix Health',
    category: 'SaaS · UI/UX',
    color: '#212529',
    accent: '#6c757d',
    emoji: '🧬',
    description: 'Patient management platform serving 50,000+ healthcare providers',
    year: '2023',
  },
  {
    title: 'Orbit Agency',
    category: 'Branding · Web',
    color: '#343a40',
    accent: '#ced4da',
    emoji: '🚀',
    description: 'Award-winning brand identity and website for creative studio',
    year: '2023',
  },
  {
    title: 'Cascara Coffee',
    category: 'E-Commerce · Marketing',
    color: '#495057',
    accent: '#dee2e6',
    emoji: '☕',
    description: 'Specialty coffee brand with 120% increase in online sales',
    year: '2023',
  },
  {
    title: 'Pulsar Analytics',
    category: 'SaaS · Development',
    color: '#212529',
    accent: '#adb5bd',
    emoji: '⚡',
    description: 'Real-time analytics platform processing 1B+ events daily',
    year: '2024',
  },
]

const FILTERS = ['All', 'Web App', 'E-Commerce', 'SaaS', 'Branding']

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All')
  const { ref, inView } = useInView()

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(activeFilter))

  return (
    <section id="work" className="section-pad bg-white dark:bg-gray-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      <div className="container-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="tag mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
              Selected Work
            </div>
            <h2 className="heading-lg text-gray-800 dark:text-gray-50">
              Projects that
              <br />
              <span className="text-gray-400 dark:text-gray-500">moved the needle</span>
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 text-xs font-body font-medium rounded-full border transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-800 border-gray-800 dark:border-gray-100'
                    : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children ${inView ? 'in-view' : ''}`}
        >
          {filtered.map((proj, i) => (
            <ProjectCard key={proj.title} {...proj} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <button className="btn-secondary">
            View All Case Studies
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, category, color, accent, emoji, description, year }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-black/30">
      {/* Visual area */}
      <div
        className="h-52 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        {/* Abstract bg pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 right-4 w-32 h-32 rounded-full border border-white/20" />
          <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full border border-white/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-px" style={{ backgroundColor: accent }} />
        </div>

        {/* Emoji/icon */}
        <div className="relative z-10 text-5xl group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>

        {/* Year badge */}
        <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/20 backdrop-blur-sm rounded-full">
          <span className="font-mono text-xs text-white/70">{year}</span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="px-5 py-2.5 bg-white text-gray-900 rounded-full text-sm font-body font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
            View Case Study
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display font-semibold text-base text-gray-800 dark:text-gray-100 mb-1">{title}</h3>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-body mb-3">{category}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-body leading-relaxed line-clamp-2">{description}</p>
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-600 group-hover:bg-gray-800 group-hover:text-gray-50 dark:group-hover:bg-gray-100 dark:group-hover:text-gray-800 group-hover:border-transparent transition-all duration-200 shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
