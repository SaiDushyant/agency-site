import { useInView } from '../hooks/useInView'

const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We dive deep into your business, audience, and goals. Stakeholder interviews, competitor analysis, and market research form the foundation.',
    duration: '1–2 weeks',
    deliverables: ['Brand Brief', 'Research Report', 'Goal Framework'],
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Data shapes every decision. We map user journeys, define the information architecture, and create a detailed project roadmap.',
    duration: '1 week',
    deliverables: ['Project Roadmap', 'User Flows', 'Tech Spec'],
  },
  {
    num: '03',
    title: 'Design',
    desc: 'From wireframes to high-fidelity mockups. We iterate quickly, test assumptions, and refine until every pixel earns its place.',
    duration: '2–3 weeks',
    deliverables: ['Wireframes', 'Design System', 'Prototype'],
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Clean, well-documented code built for scale. Daily standups, weekly demos, and continuous deployment keep you informed.',
    duration: '4–8 weeks',
    deliverables: ['Source Code', 'CMS Setup', 'QA Testing'],
  },
  {
    num: '05',
    title: 'Launch & Grow',
    desc: 'Launch day is just the beginning. We monitor performance, run A/B tests, and iterate based on real user data to drive continuous growth.',
    duration: 'Ongoing',
    deliverables: ['Analytics Setup', 'SEO Audit', 'Growth Plan'],
  },
]

export default function Process() {
  const { ref, inView } = useInView()

  return (
    <section id="process" className="section-pad bg-gray-800 dark:bg-gray-900 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gray-700/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gray-700/30 blur-3xl" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 bg-gray-700/60 rounded-full border border-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            <span className="label-sm text-gray-400">Our Process</span>
          </div>
          <h2 className="heading-lg text-gray-50 mb-5">
            How we turn ideas
            <br />
            <span className="text-gray-500">into shipped products</span>
          </h2>
          <p className="body-md text-gray-400 max-w-md">
            A proven 5-stage framework refined across 150+ projects. Transparent, collaborative, and always on schedule.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={ref}
          className={`relative stagger-children ${inView ? 'in-view' : ''}`}
        >
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-[180px] top-8 bottom-8 w-px bg-gradient-to-b from-gray-600 via-gray-600 to-transparent" />

          <div className="flex flex-col gap-4">
            {STEPS.map((step, i) => (
              <ProcessStep key={step.num} {...step} isLast={i === STEPS.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ num, title, desc, duration, deliverables, isLast }) {
  return (
    <div className="group flex flex-col lg:flex-row gap-6 lg:gap-12 p-6 lg:p-8 rounded-2xl bg-gray-700/30 border border-gray-700/60 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 cursor-default">
      {/* Step number + dot */}
      <div className="flex lg:flex-col items-center lg:items-center gap-4 lg:gap-0 lg:w-28 lg:min-w-[112px]">
        <div className="relative flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-gray-700 border border-gray-600 group-hover:border-gray-400 flex items-center justify-center transition-all duration-200">
            <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">{num}</span>
          </div>
        </div>
        <span className="label-sm text-gray-500 lg:mt-3 lg:text-center">{duration}</span>
      </div>

      {/* Content */}
      <div className="flex-1 grid sm:grid-cols-3 gap-6">
        <div className="sm:col-span-2">
          <h3 className="font-display font-semibold text-xl text-gray-100 mb-3 group-hover:text-white transition-colors">{title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
        </div>

        {/* Deliverables */}
        <div>
          <p className="label-sm text-gray-500 mb-3">Deliverables</p>
          <div className="flex flex-col gap-1.5">
            {deliverables.map(d => (
              <div key={d} className="flex items-center gap-2 text-xs text-gray-400">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-500">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
