import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="relative flex items-stretch min-h-screen overflow-hidden"
      style={{ background: '#0a1628' }}
    >
      {/* Scales of Justice background decoration */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
        <svg
          viewBox="0 0 500 600"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            width: 'min(680px, 90vw)',
            height: 'auto',
            opacity: 0.045,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(0.5px)',
          }}
          aria-hidden="true"
        >
          {/* Pillar / base */}
          <rect x="242" y="100" width="16" height="380" fill="#c9a84c" rx="2" />
          {/* Base platform */}
          <rect x="170" y="472" width="160" height="14" fill="#c9a84c" rx="4" />
          <rect x="190" y="486" width="120" height="10" fill="#c9a84c" rx="3" />
          <rect x="150" y="496" width="200" height="16" fill="#c9a84c" rx="4" />
          {/* Top crossbar */}
          <rect x="80" y="96" width="340" height="12" fill="#c9a84c" rx="4" />
          {/* Top finial */}
          <polygon points="250,52 262,96 238,96" fill="#c9a84c" />
          <circle cx="250" cy="46" r="12" fill="#c9a84c" />
          {/* Left chain */}
          <line x1="110" y1="108" x2="100" y2="200" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" />
          <line x1="100" y1="200" x2="105" y2="280" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" />
          {/* Left pan */}
          <path d="M50,280 Q102,320 155,280" stroke="#c9a84c" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <line x1="50" y1="280" x2="50" y2="283" stroke="#c9a84c" strokeWidth="2.5" />
          <line x1="155" y1="280" x2="155" y2="283" stroke="#c9a84c" strokeWidth="2.5" />
          <line x1="105" y1="280" x2="50" y2="280" stroke="#c9a84c" strokeWidth="2" />
          <line x1="105" y1="280" x2="155" y2="280" stroke="#c9a84c" strokeWidth="2" />
          {/* Right chain */}
          <line x1="390" y1="108" x2="400" y2="200" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" />
          <line x1="400" y1="200" x2="395" y2="280" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" />
          {/* Right pan */}
          <path d="M345,280 Q397,320 450,280" stroke="#c9a84c" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <line x1="345" y1="280" x2="345" y2="283" stroke="#c9a84c" strokeWidth="2.5" />
          <line x1="450" y1="280" x2="450" y2="283" stroke="#c9a84c" strokeWidth="2.5" />
          <line x1="395" y1="280" x2="345" y2="280" stroke="#c9a84c" strokeWidth="2" />
          <line x1="395" y1="280" x2="450" y2="280" stroke="#c9a84c" strokeWidth="2" />
          {/* Decorative chain links */}
          {[130,160,190,220,250].map(y => (
            <ellipse key={y} cx="103" cy={y} rx="4" ry="6" fill="none" stroke="#c9a84c" strokeWidth="2" />
          ))}
          {[130,160,190,220,250].map(y => (
            <ellipse key={y} cx="397" cy={y} rx="4" ry="6" fill="none" stroke="#c9a84c" strokeWidth="2" />
          ))}
        </svg>
      </div>

      {/* Left content — vertically centred, padded */}
      <div className="relative z-10 flex items-center w-full md:w-1/2 px-8 md:px-16 pt-32 pb-16">
        <div className="max-w-xl">
          <p
            className="text-gold font-sans font-medium mb-4 uppercase"
            style={{ fontSize: '0.72rem', letterSpacing: '3px' }}
          >
            Law Firm · Ajax
          </p>

          <h1
            className="font-serif font-bold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)' }}
          >
            Family Law, Criminal Law,<br />
            Corporate Law, Wills &amp; Estates
          </h1>

          <div className="w-16 h-0.5 mb-6" style={{ background: '#c9a84c' }} />

          <p className="font-sans text-lg mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            The Lawyers at Metelsky Law operate seamlessly for our clients, in order to provide the
            best legal advice under competitive terms with original values.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="tel:+19056861243"
              className="px-7 py-3.5 font-sans font-semibold text-navy rounded transition-colors no-underline"
              style={{ background: '#c9a84c' }}
            >
              Call Now
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 font-sans font-semibold text-white border border-white/30 rounded hover:border-gold hover:text-gold transition-colors no-underline"
            >
              Consultation
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-sans" style={{ color: 'rgba(255,255,255,0.65)' }}>
            <div className="flex items-center gap-2">
              <span style={{ color: '#c9a84c' }}>✓</span> Free Consultations
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: '#c9a84c' }}>✓</span> 3 Office Locations
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: '#c9a84c' }}>✓</span> 25+ Years Experience
            </div>
          </div>
        </div>
      </div>

      {/* Right — full-height photo, no border, anchored to bottom */}
      <div className="hidden md:block relative w-1/2 self-stretch">
        {/* Gradient fade on the left edge blending into navy */}
        <div
          className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0a1628, transparent)' }}
        />
        {/* Gradient fade at the top */}
        <div
          className="absolute inset-x-0 top-0 h-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #0a1628, transparent)' }}
        />
        <img
          src="/images/rhonda.jpg"
          alt="Rhonda A. Metelsky – Principal Lawyer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Name card pinned to bottom-left of photo */}
        <div
          className="absolute bottom-8 left-10 z-20 px-5 py-3"
          style={{ background: 'rgba(10,22,40,0.85)', backdropFilter: 'blur(8px)', borderLeft: '3px solid #c9a84c' }}
        >
          <p className="font-serif font-bold text-white text-sm leading-tight">Rhonda A. Metelsky</p>
          <p className="font-sans text-xs" style={{ color: '#c9a84c' }}>Principal Lawyer &amp; CEO</p>
        </div>
      </div>
    </section>
  )
}
