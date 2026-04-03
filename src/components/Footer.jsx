const FOOTER_LINKS = {
  Services: ['Web Development', 'UI/UX Design', 'SEO Optimization', 'Digital Marketing', 'Performance', 'Branding'],
  Company: ['About Us', 'Our Work', 'Process', 'Careers', 'Blog', 'Contact'],
  Resources: ['Case Studies', 'Pricing Guide', 'Tech Stack', 'Privacy Policy', 'Terms of Use', 'Sitemap'],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-400 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      <div className="container-xl py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          {/* Brand col */}
          <div className="col-span-2 lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="1" width="6" height="6" rx="1" fill="#343a40" />
                  <rect x="9" y="1" width="6" height="6" rx="1" fill="#343a40" opacity="0.6" />
                  <rect x="1" y="9" width="6" height="6" rx="1" fill="#343a40" opacity="0.3" />
                  <rect x="9" y="9" width="6" height="6" rx="1" fill="#343a40" opacity="0.8" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-semibold text-lg text-gray-100 tracking-tight">Axiom</span>
                <span className="font-display font-light text-lg text-gray-500 tracking-tight">Studio</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-500 mb-6 max-w-xs">
              Premium web development and digital marketing agency. Building high-performance digital products for ambitious companies.
            </p>

            {/* Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-700/50 rounded-full border border-gray-700 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="label-sm text-gray-500 text-xs">Available for projects</span>
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {['X', 'in', 'GH', '🎨'].map((icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-700/50 border border-gray-700 text-gray-500 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-600 text-xs font-mono transition-all duration-150"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className="col-span-1">
              <h4 className="font-display font-semibold text-xs text-gray-300 tracking-widest uppercase mb-5">{section}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs font-body text-gray-500 hover:text-gray-200 transition-colors duration-150 nav-link"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-body">
            © {year} Axiom Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-600 font-body">Crafted with</span>
            <span className="text-red-500 text-xs">♥</span>
            <span className="text-xs text-gray-600 font-body">in San Francisco</span>
          </div>
          <div className="flex gap-5">
            {['Privacy', 'Terms', 'Cookies'].map(item => (
              <a key={item} href="#" className="text-xs text-gray-600 hover:text-gray-400 font-body transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
