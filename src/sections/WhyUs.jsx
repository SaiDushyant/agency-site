import { useInView } from '../hooks/useInView'

const PILLARS = [
  {
    num: '01',
    title: 'Deep Technical Expertise',
    desc: 'Our team brings 12+ years of combined experience across modern web technologies. We build on solid foundations, not shortcuts.',
  },
  {
    num: '02',
    title: 'Radical Transparency',
    desc: 'Weekly progress reports, open Notion dashboards, and direct Slack access to your team. You always know exactly what\'s happening.',
  },
  {
    num: '03',
    title: 'Results-First Mindset',
    desc: 'We tie our work to your KPIs. Every design decision, every line of code, every campaign is tracked against real business outcomes.',
  },
  {
    num: '04',
    title: 'Modern Technology Stack',
    desc: 'No legacy bloat. We build with the fastest, most maintainable tools—so your product stays competitive for years, not months.',
  },
]

const STACK = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Postgres', 'Vercel', 'Figma', 'Framer', 'Webflow']

export default function WhyUs() {
  const { ref, inView } = useInView()

  return (
    <section id="why-us" className="section-pad bg-gray-50 dark:bg-gray-800/50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="tag mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
              Why Axiom
            </div>
            <h2 className="heading-lg text-gray-800 dark:text-gray-50 mb-6">
              Built different,
              <br />
              <span className="text-gray-400 dark:text-gray-500">by design.</span>
            </h2>
            <p className="body-md text-gray-500 dark:text-gray-400 mb-10 max-w-lg">
              Most agencies sell you a template and call it custom. We start every engagement with listening—then build something genuinely tailored to your business.
            </p>

            {/* Tech stack marquee */}
            <div>
              <p className="label-sm text-gray-400 dark:text-gray-500 mb-4">Our Technology Stack</p>
              <div className="flex flex-wrap gap-2">
                {STACK.map(item => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-mono text-gray-600 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-150 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Metric bar */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                { val: '4.2×', sub: 'avg. ROI for clients' },
                { val: '< 2s', sub: 'avg. page load time' },
              ].map(({ val, sub }) => (
                <div key={val} className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
                  <div className="font-display font-bold text-3xl text-gray-800 dark:text-gray-100 mb-1">{val}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 font-body">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: pillars */}
          <div
            ref={ref}
            className={`flex flex-col gap-0 stagger-children ${inView ? 'in-view' : ''}`}
          >
            {PILLARS.map((p, i) => (
              <div
                key={p.num}
                className={`flex gap-5 py-7 ${i < PILLARS.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''} group cursor-default`}
              >
                <span className="font-mono text-xs text-gray-300 dark:text-gray-600 pt-1 min-w-[24px] group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors">{p.num}</span>
                <div>
                  <h3 className="font-display font-semibold text-base text-gray-700 dark:text-gray-200 mb-2 group-hover:text-gray-900 dark:group-hover:text-gray-50 transition-colors">{p.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
