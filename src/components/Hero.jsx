import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="flex items-center pt-28 pb-20 px-6 min-h-screen"
      style={{ background: '#0a1628' }}
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-6 items-center">
        {/* Left content */}
        <div>
          <p
            className="text-gold font-sans font-medium mb-5 uppercase"
            style={{ fontSize: '0.72rem', letterSpacing: '3px' }}
          >
            Trusted Legal Representation in Ontario
          </p>

          <h1
            className="font-serif font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
          >
            Defining{' '}
            <em className="italic" style={{ color: '#c9a84c' }}>
              Success
            </em>{' '}
            Together
          </h1>

          <div className="w-16 h-0.5 mb-6" style={{ background: '#c9a84c' }} />

          <p className="font-sans text-lg mb-10 max-w-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Metelsky Law provides compassionate, results-driven legal counsel across Family Law and
            Criminal Defence. Serving Ajax, Bowmanville, Toronto and the Durham Region.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              to="/family-law"
              className="px-7 py-3.5 font-sans font-semibold text-navy rounded transition-colors no-underline"
              style={{ background: '#c9a84c' }}
            >
              Family Law
            </Link>
            <Link
              to="/criminal-defence"
              className="px-7 py-3.5 font-sans font-semibold text-white border border-white/30 rounded hover:border-gold hover:text-gold transition-colors no-underline"
            >
              Criminal Defence
            </Link>
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

        {/* Right — portrait card */}
        <div className="flex justify-center md:justify-end">
          <div className="relative" style={{ width: '420px', maxWidth: '100%' }}>
            {/* Portrait card */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: '260px 260px 180px 180px',
                border: '2px solid #c9a84c',
                height: '540px',
                background: '#1a2f45',
              }}
            >
              <img
                src="/images/rhonda.jpg"
                alt="Rhonda A. Metelsky – Principal Lawyer"
                className="w-full h-full object-cover object-top"
              />
              {/* Fallback overlay shown when image missing */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                style={{ zIndex: -1 }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-4"
                  style={{ border: '2px solid #c9a84c' }}
                >
                  <span className="text-gold font-serif text-3xl">RM</span>
                </div>
                <p className="text-white font-serif text-lg">Rhonda A. Metelsky</p>
                <p className="text-sm mt-1" style={{ color: '#c9a84c' }}>
                  Principal Lawyer &amp; CEO
                </p>
              </div>
            </div>

            {/* Gold corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold" />
            <div className="absolute -bottom-8 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold" />
            <div className="absolute -bottom-8 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold" />

            {/* Name badge */}
            <div
              className="absolute left-1/2 -translate-x-1/2 text-center px-6 py-2.5 rounded whitespace-nowrap"
              style={{ background: '#c9a84c', bottom: '-28px' }}
            >
              <p className="font-serif font-bold text-navy text-sm leading-tight">Rhonda A. Metelsky</p>
              <p className="font-sans text-navy text-xs">Principal Lawyer &amp; CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
