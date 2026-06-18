import Navbar from '../components/Navbar'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

const areas = [
  {
    title: 'Violent Offences',
    desc: 'Defence for assault, aggravated assault, robbery, manslaughter and related charges.',
  },
  {
    title: 'Drug Offences',
    desc: 'Possession, trafficking, production, and importation charges under the CDSA.',
  },
  {
    title: 'Property Offences',
    desc: 'Theft, fraud, break and enter, mischief, and other property-related charges.',
  },
  {
    title: 'Weapons Offences',
    desc: 'Unauthorized possession, unsafe storage, pointing a firearm, and related charges.',
  },
  {
    title: 'Domestic Assault',
    desc: 'Strategic defence when police have laid charges following a domestic incident.',
  },
  {
    title: 'Sexual Assault',
    desc: 'Confidential, experienced representation in sexual assault proceedings.',
  },
  {
    title: 'Bail Hearings',
    desc: 'Urgent same-day representation to secure your release pending trial.',
  },
  {
    title: 'Young Offenders',
    desc: 'Specialized representation for youth under the Youth Criminal Justice Act (YCJA).',
  },
  {
    title: 'Provincial Offences',
    desc: 'Highway Traffic Act, liquor offences, municipal by-law and regulatory matters.',
  },
]

export default function CriminalDefence() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <div className="pt-28 pb-16 px-6" style={{ background: '#0a1628' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3">
            Practice Area
          </p>
          <h1 className="font-serif font-bold text-white mb-6" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>
            Criminal Defence
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Aggressive, strategic criminal defence when your freedom and future are on the line.
            Available across Durham Region, Bowmanville, and Toronto.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 leading-relaxed text-lg">
              A criminal charge is one of the most serious situations you can face. The right lawyer
              can mean the difference between conviction and acquittal. Metelsky Law provides
              experienced, tenacious defence from the moment charges are laid.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((a) => (
              <div
                key={a.title}
                className="p-7 border border-gray-100 rounded-lg hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                style={{ borderTop: '3px solid #c9a84c' }}
              >
                <h3 className="font-serif font-bold text-navy text-xl mb-3">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rights banner */}
      <section className="py-16 px-6" style={{ background: '#0a1628' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-white text-3xl mb-4">Your Rights Matter</h2>
          <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
            You are presumed innocent until proven guilty. Exercise your right to retain counsel
            immediately — do not speak to police without a lawyer present. Call us day or night.
          </p>
          <a
            href="tel:+19056861243"
            className="inline-block px-8 py-4 bg-gold text-navy font-bold font-sans rounded text-lg hover:bg-gold-light transition-colors no-underline"
          >
            Call Now: (905) 686-1243
          </a>
        </div>
      </section>

      <CTABanner
        title="Charged With a Criminal Offence?"
        sub="Don't wait. Get experienced defence counsel immediately — free consultation."
      />
      <Footer />
    </>
  )
}
