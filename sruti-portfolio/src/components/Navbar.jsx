import { Link } from 'react-scroll'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  // { label: 'Research', to: 'research' },
  { label: 'Projects', to: 'projects' },
  { label: 'Publications', to: 'publications' },
  { label: 'Contact', to: 'contact' },
]

function Navbar({ isDark, setIsDark }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur shadow-sm">
      <span className="text-xl font-bold text-[var(--color-primary)]">SM</span>
      <div className="flex gap-6">
        {navLinks.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] cursor-pointer transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
      <button
        onClick={() => setIsDark(!isDark)}
        className="text-sm px-3 py-1 rounded border border-[var(--color-muted)] text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
      >
        {isDark ? 'Light' : 'Dark'}
      </button>
    </nav>
  )
}

export default Navbar
