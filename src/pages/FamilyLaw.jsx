import Navbar from '../components/Navbar'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

const areas = [
  {
    title: 'Divorce & Separation',
    desc: 'Guiding you through the legal process of ending a marriage or common-law relationship with clarity and minimal conflict.',
  },
  {
    title: 'Child Custody',
    desc: "Advocating for parenting arrangements that prioritize your children's best interests and your role in their lives.",
  },
  {
    title: 'Parenting Plans',
    desc: 'Drafting comprehensive, workable parenting agreements that protect your relationship with your children.',
  },
  {
    title: 'Child Support',
    desc: 'Calculating and negotiating fair child support in compliance with the Federal Child Support Guidelines.',
  },
  {
    title: 'Spousal Support',
    desc: 'Advising on entitlement, quantum, and duration of spousal support based on your specific circumstances.',
  },
  {
    title: 'Property Division',
    desc: 'Equalization of net family property and complex asset valuation for married and unmarried spouses.',
  },
  {
    title: 'Domestic Contracts',
    desc: 'Drafting and reviewing cohabitation agreements, marriage contracts, and separation agreements.',
  },
  {
    title: 'Restraining Orders',
    desc: 'Urgent relief to protect you and your children from harassment or violence.',
  },
  {
    title: 'Adoption',
    desc: 'Supporting families through domestic and stepparent adoption processes in Ontario.',
  },
  {
    title: 'Relocation',
    desc: 'Assisting parents with applications to move within or outside Canada with children after separation.',
  },
]

const process = [
  ['1. Consultation', 'We listen to your situation and explain your rights and options clearly.'],
  ['2. Strategy', 'We develop a plan tailored to your goals — negotiation, mediation, or litigation.'],
  ['3. Resolution', 'We advocate relentlessly until a fair outcome is achieved for you and your family.'],
]

export default function FamilyLaw() {
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
            Family Law
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Compassionate, strategic representation for families navigating life's most challenging
            transitions across Durham Region and the GTA.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto text-center mb-16">
            Family law matters are deeply personal. At Metelsky Law, we combine legal expertise with
            genuine empathy — helping you navigate divorce, custody, support, and property matters
            with clarity and confidence.
          </p>
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

      {/* Process */}
      <section className="py-16 px-6" style={{ background: '#f5f5f0' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif font-bold text-navy text-3xl mb-10">Our Family Law Process</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {process.map(([step, desc]) => (
              <div key={step} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#c9a84c' }}>
                  {step}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Speak With a Family Lawyer Today"
        sub="Get clear answers and compassionate guidance — free initial consultation."
      />
      <Footer />
    </>
  )
}
