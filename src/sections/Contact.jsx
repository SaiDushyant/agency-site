import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const SERVICES_LIST = ['Web Development', 'UI/UX Design', 'SEO & Marketing', 'Branding', 'Other']
const BUDGETS = ['< $5K', '$5K–$20K', '$20K–$50K', '$50K+']

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-pad bg-white dark:bg-gray-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      <div className="container-xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left info */}
          <div ref={ref} className={`lg:col-span-2 ${inView ? '' : 'opacity-0'}`} style={inView ? { animation: 'fadeUp 0.6s ease both' } : {}}>
            <div className="tag mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
              Get in Touch
            </div>
            <h2 className="heading-md text-gray-800 dark:text-gray-50 mb-5">
              Let's build
              <br />
              <span className="text-gray-400 dark:text-gray-500">something great.</span>
            </h2>
            <p className="body-md text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
              Tell us about your project and we'll get back to you within one business day. The initial consultation is always free.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5 mb-10">
              {[
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  label: 'Email',
                  val: 'hello@axiomstudio.io',
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z"/></svg>,
                  label: 'Phone',
                  val: '+1 (415) 555-0180',
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  label: 'Office',
                  val: 'San Francisco, CA · Remote Friendly',
                },
              ].map(({ icon, label, val }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-0.5">{label}</p>
                    <p className="text-sm font-body text-gray-700 dark:text-gray-200">{val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="label-sm text-gray-400 dark:text-gray-500 mb-3">Follow our work</p>
              <div className="flex gap-2">
                {[
                  { label: 'Twitter', icon: 'X' },
                  { label: 'LinkedIn', icon: 'in' },
                  { label: 'Dribbble', icon: '⚽' },
                  { label: 'Github', icon: '{ }' },
                ].map(({ label, icon }) => (
                  <button
                    key={label}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-200 text-xs font-mono transition-all duration-150"
                    aria-label={label}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className={`lg:col-span-3 ${inView ? '' : 'opacity-0'}`} style={inView ? { animation: 'fadeUp 0.6s 0.2s ease both' } : {}}>
            {submitted ? (
              <div className="h-full flex items-center justify-center card-base text-center py-20">
                <div>
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-300">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="heading-sm text-gray-800 dark:text-gray-100 mb-3">Message received!</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                    Thanks for reaching out. We'll review your project details and respond within 24 hours.
                  </p>
                  <button
                    className="mt-6 btn-secondary text-sm py-2.5 px-5"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-base space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="Alex Johnson"
                    value={form.name}
                    onChange={handleChange}
                    required
                    focused={focused === 'name'}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                  />
                  <InputField
                    label="Work Email"
                    name="email"
                    type="email"
                    placeholder="alex@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    focused={focused === 'email'}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                  />
                </div>

                <InputField
                  label="Company"
                  name="company"
                  type="text"
                  placeholder="Your Company Name"
                  value={form.company}
                  onChange={handleChange}
                  focused={focused === 'company'}
                  onFocus={() => setFocused('company')}
                  onBlur={() => setFocused('')}
                />

                {/* Service selector */}
                <div>
                  <label className="label-sm text-gray-500 dark:text-gray-400 mb-2 block">Service Needed</label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_LIST.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, service: s }))}
                        className={`px-3.5 py-2 text-xs font-body rounded-lg border transition-all duration-150 ${
                          form.service === s
                            ? 'bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-800 border-gray-800 dark:border-gray-100'
                            : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="label-sm text-gray-500 dark:text-gray-400 mb-2 block">Project Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map(b => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, budget: b }))}
                        className={`px-3.5 py-2 text-xs font-body rounded-lg border transition-all duration-150 ${
                          form.budget === b
                            ? 'bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-800 border-gray-800 dark:border-gray-100'
                            : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="label-sm text-gray-500 dark:text-gray-400 mb-2 block">Project Brief</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    rows={4}
                    placeholder="Tell us about your project, goals, and any relevant context..."
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border rounded-xl text-sm font-body text-gray-700 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-600 outline-none transition-all duration-200 resize-none ${
                      focused === 'message'
                        ? 'border-gray-400 dark:border-gray-500'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                  />
                </div>

                <button type="submit" className="w-full btn-primary justify-center py-4">
                  Send Project Brief
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

                <p className="text-center text-xs text-gray-400 dark:text-gray-600 font-body">
                  By submitting, you agree to our Privacy Policy. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function InputField({ label, name, type, placeholder, value, onChange, required, focused, onFocus, onBlur }) {
  return (
    <div>
      <label className="label-sm text-gray-500 dark:text-gray-400 mb-2 block">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border rounded-xl text-sm font-body text-gray-700 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-600 outline-none transition-all duration-200 ${
          focused
            ? 'border-gray-400 dark:border-gray-500'
            : 'border-gray-200 dark:border-gray-700'
        }`}
      />
    </div>
  )
}
