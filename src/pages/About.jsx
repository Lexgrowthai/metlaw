import Navbar from '../components/Navbar'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

const values = [
  {
    title: 'Integrity',
    desc: 'We tell clients the truth about their legal situation, even when it\'s difficult.',
  },
  {
    title: 'Compassion',
    desc: 'Legal matters are personal. We treat every client with dignity and empathy.',
  },
  {
    title: 'Excellence',
    desc: 'Rigorous preparation, strategic thinking, and relentless advocacy at every stage.',
  },
  {
    title: 'Accessibility',
    desc: 'Three locations, flexible scheduling, and responsive communication.',
  },
]

export default function About() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <div className="pt-28 pb-16 px-6" style={{ background: '#0a1628' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3">
            About Us
          </p>
          <h1 className="font-serif font-bold text-white mb-6" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>
            Metelsky Law
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            A law firm built on trust, experience, and a genuine commitment to the people we serve.
          </p>
        </div>
      </div>

      {/* Mission + bio */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif font-bold text-navy text-4xl mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Metelsky Law, we believe that every client deserves skilled, honest, and
              compassionate legal representation — regardless of the complexity of their matter.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded by Rhonda A. Metelsky, our firm has served clients across the Durham Region
              and Greater Toronto Area for over 25 years. We handle the legal challenges that matter
              most: protecting your family, your freedom, and your future.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are committed to transparent communication, strategic advocacy, and achieving the
              best possible outcome for every client we represent.
            </p>
          </div>
          <div className="rounded-lg p-8" style={{ background: '#f5f5f0' }}>
            <div
              className="w-full overflow-hidden mb-6"
              style={{ height: '280px', borderRadius: '30px', background: '#1a2f45' }}
            >
              <img
                src="/images/rhonda.jpg"
                alt="Rhonda A. Metelsky"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="font-serif font-bold text-navy text-2xl mb-1">Rhonda A. Metelsky</h3>
            <p className="font-sans text-sm mb-3" style={{ color: '#c9a84c' }}>
              Principal Lawyer &amp; CEO
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Called to the Ontario Bar, Rhonda brings over 25 years of litigation and negotiation
              experience to every matter — from complex family property disputes to serious criminal
              charges.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ background: '#f5f5f0' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3 text-center">
            What We Stand For
          </p>
          <h2 className="font-serif font-bold text-navy text-4xl mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-7 bg-white rounded-lg shadow-sm"
                style={{ borderTop: '3px solid #c9a84c' }}
              >
                <h3 className="font-serif font-bold text-navy text-xl mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Discuss Your Legal Matter"
        sub="Schedule a free, confidential consultation with our team today."
      />
      <Footer />
    </>
  )
}
