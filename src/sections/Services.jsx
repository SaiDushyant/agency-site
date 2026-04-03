import { useInView } from '../hooks/useInView'

const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'Lightning-fast, scalable web applications built with modern frameworks. From MVPs to enterprise platforms—engineered for performance.',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Interfaces that delight and convert. We craft pixel-perfect designs grounded in user research and behavioral psychology.',
    tags: ['Figma', 'Prototyping', 'Research'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'SEO Optimization',
    desc: 'Data-driven SEO strategies that move your rankings and keep them there. Technical audits, content strategy, and link architecture.',
    tags: ['Technical SEO', 'Content', 'Analytics'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Digital Marketing',
    desc: 'Full-funnel growth strategies. Paid acquisition, email automation, conversion optimization—all tracked and optimized relentlessly.',
    tags: ['PPC', 'Email', 'CRO'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Performance Optimization',
    desc: 'Every 100ms matters. We audit, profile, and optimize your web applications for Core Web Vitals and peak user experience.',
    tags: ['Core Web Vitals', 'CDN', 'Caching'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Branding & Identity',
    desc: 'Strategic brand systems that communicate your values at a glance. Logo, typography, color, voice—built to scale.',
    tags: ['Logo', 'Brand System', 'Guidelines'],
  },
]

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="services" className="section-pad bg-white dark:bg-gray-900 relative">
      {/* Subtle separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      <div className="container-xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="tag mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
            What We Do
          </div>
          <h2 className="heading-lg text-gray-800 dark:text-gray-50 mb-5">
            Services built for
            <br />
            <span className="text-gray-400 dark:text-gray-500">modern digital growth</span>
          </h2>
          <p className="body-md text-gray-500 dark:text-gray-400 max-w-lg">
            End-to-end digital solutions crafted with precision. We combine strategy, design, and engineering to build products people love.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children ${inView ? 'in-view' : ''}`}
        >
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.title} {...svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, desc, tags }) {
  return (
    <div className="group card-base card-shimmer hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-gray-900/60 hover:-translate-y-1 cursor-default">
      {/* Icon */}
      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 mb-6 group-hover:bg-gray-800 group-hover:text-gray-50 dark:group-hover:bg-gray-100 dark:group-hover:text-gray-800 transition-all duration-300">
        {icon}
      </div>

      <h3 className="heading-sm text-gray-800 dark:text-gray-100 mb-3">{title}</h3>
      <p className="body-md text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">{desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map(t => (
          <span key={t} className="tag text-xs">{t}</span>
        ))}
      </div>

      {/* Hover arrow */}
      <div className="mt-6 flex items-center gap-1.5 text-gray-300 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
        <span className="text-xs font-body font-medium">Learn more</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-200">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  )
}
