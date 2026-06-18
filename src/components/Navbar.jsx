import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  const solid = !isHome || scrolled
  const navBg = solid ? 'bg-navy shadow-lg' : 'bg-transparent'

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/family-law', label: 'Family Law' },
    { to: '/criminal-defence', label: 'Criminal Defence' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <div className="w-9 h-9 border-2 border-gold flex items-center justify-center flex-shrink-0">
            <span className="text-gold font-serif font-bold text-sm">ML</span>
          </div>
          <div>
            <div className="text-white font-serif font-bold text-lg leading-tight">Metelsky Law</div>
            <div className="text-gold uppercase tracking-widest" style={{ fontSize: '0.6rem' }}>
              Ajax · Bowmanville · Toronto
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-gold no-underline ${
                location.pathname === l.to ? 'text-gold' : 'text-white/80'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+19056861243"
            className="ml-4 px-5 py-2 bg-gold text-navy font-semibold text-sm rounded hover:bg-gold-light transition-colors no-underline"
          >
            (905) 686-1243
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 flex flex-col justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium no-underline ${
                location.pathname === l.to ? 'text-gold' : 'text-white/80'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:+19056861243" className="text-gold font-semibold text-sm no-underline">
            (905) 686-1243
          </a>
        </div>
      )}
    </nav>
  )
}
