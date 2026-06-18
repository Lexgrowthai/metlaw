import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import FAQAccordion from '../components/FAQAccordion'
import CTABanner from '../components/CTABanner'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: '⚖️',
    title: 'Family Law',
    desc: 'Divorce, separation, child custody, spousal support, property division, and domestic contracts handled with care and clarity.',
    to: '/family-law',
  },
  {
    icon: '🛡️',
    title: 'Criminal Defence',
    desc: 'Aggressive, strategic defence for assault, drug offences, bail hearings, youth criminal justice, and more.',
    to: '/criminal-defence',
  },
  {
    icon: '🏠',
    title: 'Domestic Matters',
    desc: 'Restraining orders, adoption, relocation applications, and parenting plan disputes resolved with priority.',
    to: '/family-law',
  },
]

const whyUs = [
  {
    title: 'Client-Centred Approach',
    desc: 'We listen first and build strategy around your specific goals and circumstances.',
  },
  {
    title: '3 Convenient Locations',
    desc: 'Offices in Ajax, Bowmanville, and Toronto — close to the courts that matter to your case.',
  },
  {
    title: 'Decades of Experience',
    desc: 'Rhonda Metelsky brings over 25 years of Ontario courtroom and negotiation experience.',
  },
  {
    title: 'Free Consultation',
    desc: 'Speak with our team at no cost. Understand your rights before committing to anything.',
  },
]

const stats = [
  ['25+', 'Years of Practice'],
  ['3', 'Office Locations'],
  ['Durham Region', 'Primarily Serving'],
  ['Family & Criminal', 'Core Practice Areas'],
]

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3 text-center">
            Practice Areas
          </p>
          <h2 className="font-serif font-bold text-navy text-4xl mb-12 text-center">
            How We Can Help
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6" style={{ background: '#f5f5f0' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3 text-center">
            Why Metelsky Law
          </p>
          <h2 className="font-serif font-bold text-navy text-4xl mb-12 text-center">
            Our Commitment to You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="p-7 rounded-lg" style={{ background: '#0a1628' }}>
                <div className="w-10 h-0.5 mb-4" style={{ background: '#c9a84c' }} />
                <h3 className="font-serif font-bold text-white text-lg mb-3">{w.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3">
              About Rhonda A. Metelsky
            </p>
            <h2 className="font-serif font-bold text-navy text-4xl mb-6">
              Principal Lawyer &amp; CEO
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Rhonda A. Metelsky is the founding principal of Metelsky Law, bringing more than 25
              years of dedicated legal practice to clients across the Durham Region and Greater
              Toronto Area.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Her practice focuses on achieving meaningful outcomes for families navigating difficult
              transitions and individuals facing the serious consequences of criminal charges.
            </p>
            <Link
              to="/about"
              className="inline-block px-7 py-3 border-2 border-gold text-gold font-semibold text-sm rounded hover:bg-gold hover:text-navy transition-colors no-underline"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(([stat, label]) => (
              <div key={label} className="p-6 border border-gray-100 rounded-lg text-center">
                <p className="font-serif font-bold text-3xl mb-1" style={{ color: '#c9a84c' }}>
                  {stat}
                </p>
                <p className="text-gray-500 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <FAQAccordion />
      <ContactForm />
      <Footer />
    </>
  )
}
