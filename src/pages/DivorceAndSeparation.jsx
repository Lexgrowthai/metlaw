import Navbar from '../components/Navbar'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'

/* ── Mini FAQ ── */
const faqs = [
  {
    q: 'How long does a divorce take in Ontario?',
    a: 'An uncontested divorce where both spouses agree on all issues typically takes 4–6 months after filing. Contested divorces — where a court must decide on custody, support, or property — can take 1–3 years.',
  },
  {
    q: 'Do I have to go to court?',
    a: 'Not always. Many divorces are resolved through negotiation or mediation, with court appearances limited to a brief hearing. If you and your spouse cannot agree, a judge will decide the outstanding issues.',
  },
  {
    q: 'Can I get a divorce without a lawyer?',
    a: 'Yes, but it is strongly advised to have legal counsel. Mistakes in property division, support calculations, or parenting orders can have permanent consequences that are difficult and expensive to reverse.',
  },
  {
    q: 'What is the difference between separation and divorce?',
    a: 'Separation is when you and your spouse decide to live apart — no court order is required. Divorce is the legal dissolution of the marriage granted by a court. You can have a legally binding separation agreement without ever divorcing.',
  },
  {
    q: 'Can we still live together while separated?',
    a: 'Yes. Courts recognize that some couples cannot afford two households. A lawyer can advise on what factors — such as sleeping arrangements, finances, and social conduct — a court will consider when determining the separation date.',
  },
  {
    q: 'What happens to our children during a divorce?',
    a: 'The court\'s primary concern is the best interests of the child. Parents are encouraged to agree on decision-making responsibility and parenting time. If they cannot, a judge will determine the arrangement based on the child\'s needs.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left font-sans font-medium text-navy hover:text-gold transition-colors"
      >
        <span>{q}</span>
        <span
          className="text-gold text-xl flex-shrink-0 ml-4 transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <div style={{ maxHeight: open ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
        <p className="pb-5 text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

/* ── Stat Bar ── */
function StatBar({ label, value, pct, color = '#c9a84c' }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-sans text-gray-700">{label}</span>
        <span className="text-sm font-semibold font-sans" style={{ color }}>{value}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full"
          style={{ width: `${pct}%`, background: color, transition: 'width 1s ease' }}
        />
      </div>
    </div>
  )
}

/* ── Process Step ── */
function Step({ num, title, desc }) {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0 flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-navy text-sm"
          style={{ background: '#c9a84c' }}
        >
          {num}
        </div>
        {num < 6 && <div className="w-0.5 flex-1 mt-2" style={{ background: '#e5e7eb', minHeight: '40px' }} />}
      </div>
      <div className="pb-8">
        <h3 className="font-serif font-bold text-navy text-lg mb-1">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

/* ── Checklist Item ── */
function Check({ text, sub }) {
  return (
    <div className="flex gap-3 mb-4">
      <div
        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
        style={{ background: '#c9a84c' }}
      >
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
          <path d="M1 4L4.5 7.5L11 1" stroke="#0a1628" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="text-gray-800 font-sans text-sm leading-relaxed">{text}</p>
        {sub && <p className="text-gray-500 text-xs mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}

/* ── Ground Card ── */
function GroundCard({ icon, title, desc }) {
  return (
    <div
      className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
      style={{ borderLeft: '4px solid #c9a84c' }}
    >
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-serif font-bold text-navy text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function DivorceAndSeparation() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <div
        className="relative pt-28 pb-20 px-6 overflow-hidden"
        style={{ background: '#0a1628' }}
      >
        {/* subtle scales watermark */}
        <svg
          viewBox="0 0 300 360"
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none"
          style={{ width: '380px', height: 'auto' }}
          aria-hidden="true"
        >
          <rect x="145" y="60" width="10" height="230" fill="#c9a84c" rx="2" />
          <rect x="60" y="57" width="180" height="8" fill="#c9a84c" rx="2" />
          <polygon points="150,30 157,57 143,57" fill="#c9a84c" />
          <circle cx="150" cy="26" r="8" fill="#c9a84c" />
          <line x1="75" y1="65" x2="68" y2="160" stroke="#c9a84c" strokeWidth="2" />
          <path d="M30,160 Q68,190 106,160" stroke="#c9a84c" strokeWidth="2.5" fill="none" />
          <line x1="68" y1="160" x2="30" y2="160" stroke="#c9a84c" strokeWidth="1.5" />
          <line x1="68" y1="160" x2="106" y2="160" stroke="#c9a84c" strokeWidth="1.5" />
          <line x1="225" y1="65" x2="232" y2="160" stroke="#c9a84c" strokeWidth="2" />
          <path d="M194,160 Q232,190 270,160" stroke="#c9a84c" strokeWidth="2.5" fill="none" />
          <line x1="232" y1="160" x2="194" y2="160" stroke="#c9a84c" strokeWidth="1.5" />
          <line x1="232" y1="160" x2="270" y2="160" stroke="#c9a84c" strokeWidth="1.5" />
          <rect x="110" y="286" width="80" height="8" fill="#c9a84c" rx="2" />
          <rect x="95" y="294" width="110" height="6" fill="#c9a84c" rx="2" />
        </svg>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <Link to="/family-law" className="text-gold text-xs font-sans hover:underline no-underline">Family Law</Link>
            <span className="text-white/30 text-xs">›</span>
            <span className="text-white/50 text-xs font-sans">Divorce &amp; Separation</span>
          </div>
          <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3">
            Family Law · Ajax, Ontario
          </p>
          <h1 className="font-serif font-bold text-white mb-5" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', lineHeight: 1.15 }}>
            Divorce &amp; Separation<br />
            <span className="italic" style={{ color: '#c9a84c' }}>Lawyers in Ajax, Ontario</span>
          </h1>
          <p className="font-sans text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
            We understand that divorce is unpleasant. Metelsky Law is committed to providing
            compassionate representation while aiding in resolving all aspects of your divorce —
            managing every detail so you can focus on moving forward.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+19056861243"
              className="px-7 py-3.5 font-sans font-semibold text-navy rounded transition-colors no-underline"
              style={{ background: '#c9a84c' }}
            >
              Call Now — (905) 686-1243
            </a>
            <a
              href="#contact-cta"
              className="px-7 py-3.5 font-sans font-semibold text-white border border-white/30 rounded hover:border-gold hover:text-gold transition-colors no-underline"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* ── TRUST STRIP ── */}
      <div style={{ background: '#c9a84c' }} className="py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-navy font-sans text-sm font-semibold">
          <span>✓ Free Initial Consultation</span>
          <span>✓ 25+ Years Experience</span>
          <span>✓ Ajax · Bowmanville · Toronto</span>
          <span>✓ Compassionate &amp; Confidential</span>
        </div>
      </div>

      {/* ── INTRO + STATS ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3">Our Commitment</p>
            <h2 className="font-serif font-bold text-navy text-3xl mb-5">
              Guiding You Through One of Life's Most Difficult Transitions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Managing the details of your divorce can be difficult — especially while dealing with
              the accompanying emotional stress. At Metelsky Law, we manage those details and
              provide guidance in making decisions that can have life-long consequences.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whether your matter is straightforward or involves complex property, business
              interests, or parenting disputes, our experienced team will build a strategy tailored
              to your goals and advocate for your best outcome at every stage.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              It is always a good idea to get legal advice before you apply. A lawyer can tell you
              about your rights and responsibilities, explain how the law applies to your situation,
              and identify what documents the court requires.
            </p>
            <a
              href="tel:+19056861243"
              className="inline-block px-6 py-3 font-sans font-semibold text-navy rounded no-underline hover:bg-gold-light transition-colors"
              style={{ background: '#c9a84c' }}
            >
              Speak With a Lawyer Today
            </a>
          </div>

          {/* Stats panel */}
          <div className="rounded-xl p-8 shadow-sm" style={{ background: '#f5f5f0' }}>
            <h3 className="font-serif font-bold text-navy text-xl mb-2">Divorce in Canada</h3>
            <p className="text-gray-500 text-xs mb-6 font-sans">Key statistics that underscore why legal counsel matters</p>
            <StatBar label="Marriages ending in divorce" value="38%" pct={38} />
            <StatBar label="Divorces involving children" value="~45%" pct={45} color="#0a1628" />
            <StatBar label="Cases resolved without full trial" value="~70%" pct={70} />
            <StatBar label="Couples who benefit from mediation" value="~60%" pct={60} color="#0a1628" />
            <p className="text-xs text-gray-400 mt-4 font-sans">Sources: Statistics Canada; Department of Justice Canada</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ['1 Year', 'Separation required before divorce'],
                ['90 Days', 'Max reconciliation period allowed'],
                ['3 Years', 'Sponsorship undertaking duration'],
                ['4–6 Months', 'Typical uncontested timeline'],
              ].map(([stat, label]) => (
                <div key={label} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="font-serif font-bold text-gold text-xl mb-1">{stat}</p>
                  <p className="text-gray-500 text-xs leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ── */}
      <section className="py-20 px-6" style={{ background: '#f5f5f0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3">
              Eligibility Requirements
            </p>
            <h2 className="font-serif font-bold text-navy text-3xl mb-4">
              Can You Divorce in Canada?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              To apply for a divorce under Canada's Divorce Act, you must meet <strong>all three</strong> of
              the following criteria.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Legally Married',
                desc: 'You and your spouse are legally married under the laws of Canada, or under the laws of another country and that marriage is recognized in Canada.',
              },
              {
                num: '02',
                title: 'Marriage Has Broken Down',
                desc: 'Your marriage has broken down — evidenced by separation of one year or more, physical or mental cruelty, or adultery.',
              },
              {
                num: '03',
                title: 'Residency Requirement',
                desc: 'You or your spouse must have lived in the Canadian province or territory where you apply for a full year immediately before making your application.',
              },
            ].map((c) => (
              <div key={c.num} className="bg-white rounded-xl p-8 shadow-sm" style={{ borderTop: '4px solid #c9a84c' }}>
                <p className="font-serif font-bold text-5xl mb-4" style={{ color: 'rgba(201,168,76,0.2)' }}>{c.num}</p>
                <h3 className="font-serif font-bold text-navy text-xl mb-3">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROUNDS ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3">
              Grounds for Divorce
            </p>
            <h2 className="font-serif font-bold text-navy text-3xl mb-4">
              Canada's No-Fault Divorce System
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Canada has no-fault divorce. The only ground for divorce under the Divorce Act is
              marriage breakdown — demonstrated by <strong>any one</strong> of the following:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <GroundCard
              icon="📅"
              title="One-Year Separation"
              desc="You and your spouse have been living apart for one year or more. This is the most common ground. You may live together for up to 90 days (before or after filing) to attempt reconciliation without losing your separation period."
            />
            <GroundCard
              icon="🚫"
              title="Physical or Mental Cruelty"
              desc="Your spouse has been physically or mentally cruel to you, to a degree that makes continued cohabitation intolerable. Evidence and documentation are critical — a lawyer can help you build your case."
            />
            <GroundCard
              icon="⚖️"
              title="Adultery"
              desc="Your spouse has committed adultery. Note that you cannot use your own adultery as grounds. Proving adultery can be complex — your lawyer can advise on whether this ground is appropriate in your situation."
            />
          </div>
          <div className="rounded-xl p-6 border border-gold/30" style={{ background: 'rgba(201,168,76,0.06)' }}>
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              <strong className="text-navy">Separation in the same home:</strong> Some couples choose to separate but still
              live in the same house due to financial or family reasons. Courts recognize this — a lawyer can advise
              on what factors (sleeping arrangements, finances, social conduct) a court will consider when determining
              your separation date.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE ── */}
      <section className="py-20 px-6" style={{ background: '#0a1628' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3">
              The Process
            </p>
            <h2 className="font-serif font-bold text-white text-3xl mb-4">
              How a Divorce Proceeds in Ontario
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Every divorce is different, but understanding the typical stages helps you know what to expect.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-8 md:p-12">
            <Step num={1} title="Initial Consultation" desc="Meet with a Metelsky Law lawyer to review your situation, understand your rights, and determine the best strategy — contested vs. uncontested, negotiation vs. mediation vs. litigation." />
            <Step num={2} title="Attempt to Reach Agreement" desc="Where possible, we work to negotiate a separation agreement covering child support, parenting arrangements, spousal support, and property division before filing." />
            <Step num={3} title="File the Application" desc="Your lawyer prepares and files the divorce application with the Ontario Superior Court of Justice, along with required financial statements and supporting documents." />
            <Step num={4} title="Service &amp; Response" desc="Your spouse is served with the application and has 30 days (60 if outside Canada) to respond. If they do not respond, the matter may proceed on an uncontested basis." />
            <Step num={5} title="Resolution of Outstanding Issues" desc="Any unresolved matters — custody, support, property — are addressed through negotiation, case conferences, motions, or trial if necessary." />
            <Step num={6} title="Divorce Order Granted" desc="Once all issues are resolved and a judge is satisfied the divorce is warranted, a Divorce Order is granted. It takes effect 31 days later, after which you are free to remarry." />
          </div>
        </div>
      </section>

      {/* ── SPECIAL CIRCUMSTANCES ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3">
              Special Circumstances
            </p>
            <h2 className="font-serif font-bold text-navy text-3xl">
              Unique Situations We Handle
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Exception to residency */}
            <div className="rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(201,168,76,0.15)' }}>
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-serif font-bold text-navy text-xl mb-3">Exception to Residency Requirements</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                As a general rule, only Canadian residents can divorce in Canada. However, you may be
                able to end your marriage under the <em>Civil Marriage Act</em> if you meet <strong>both</strong>:
              </p>
              <Check text="You married in Canada" />
              <Check text="You cannot undo your marriage in the country where you or your spouse lives because that country does not recognize your Canadian marriage." />
              <p className="text-gray-500 text-sm leading-relaxed mt-3">
                You would apply to a Superior Court in the province or territory where you married.
                Note: this process only ends the marriage — support and other issues must be resolved
                under the laws of the country where you live.
              </p>
            </div>

            {/* Foreign divorce */}
            <div className="rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(201,168,76,0.15)' }}>
                <span className="text-2xl">🗂️</span>
              </div>
              <h3 className="font-serif font-bold text-navy text-xl mb-3">Having a Foreign Divorce Recognized in Canada</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Canada generally recognizes a divorce granted in another country if:
              </p>
              <Check text="The divorce was valid under the laws of that country" />
              <Check text="One or both spouses lived in that country for a full year immediately before applying for the divorce" />
              <p className="text-gray-500 text-sm leading-relaxed mt-3">
                Other factors may affect recognition. If you are unsure whether your foreign divorce
                is recognized in Canada, speak to a lawyer before making important life decisions
                such as remarrying.
              </p>
            </div>

            {/* Sponsored spouse */}
            <div className="rounded-xl p-8 border border-gray-100 shadow-sm md:col-span-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(201,168,76,0.15)' }}>
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-serif font-bold text-navy text-xl mb-3">Divorcing a Spouse You Sponsored to Come to Canada</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                If you sponsored someone to come to Canada as your spouse, your sponsorship undertaking
                remains in effect for <strong>three years</strong> after the person becomes a permanent
                resident — even if you separate or divorce during that period. You remain responsible for
                their basic needs for the full duration of the undertaking.
              </p>
              <div
                className="rounded-lg p-5 flex gap-4 items-start"
                style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)' }}
              >
                <span className="text-gold text-xl flex-shrink-0">⚠️</span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Immigration and family law intersect significantly in sponsored spouse divorces.
                  We strongly recommend consulting a lawyer who understands both areas before
                  proceeding — errors can have serious financial and immigration consequences.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <div id="contact-cta">
        <CTABanner
          title="Ready to Take the First Step?"
          sub="Speak with a Metelsky Law divorce lawyer today. Free, confidential consultation."
        />
      </div>

      {/* ── FAQ ── */}
      <section className="py-20 px-6" style={{ background: '#f5f5f0' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3 text-center">
            Frequently Asked Questions
          </p>
          <h2 className="font-serif font-bold text-navy text-3xl mb-12 text-center">
            Divorce &amp; Separation — Common Questions
          </h2>
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ── WHY METELSKY ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3">
              Why Choose Us
            </p>
            <h2 className="font-serif font-bold text-navy text-3xl">
              Why Ajax Families Choose Metelsky Law
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: 'Compassionate Approach', desc: 'We recognize divorce is emotionally draining. Our team listens first, advises second.' },
              { icon: '⚖️', title: 'Experienced Advocates', desc: '25+ years appearing in Durham Region and GTA family courts — we know how judges decide.' },
              { icon: '💬', title: 'Clear Communication', desc: 'No jargon. We explain your options and likely outcomes in plain language at every step.' },
              { icon: '📍', title: '3 Convenient Offices', desc: 'Ajax, Bowmanville, and Toronto — close to the courthouses where your matter will be heard.' },
            ].map((w) => (
              <div key={w.title} className="p-7 rounded-xl" style={{ background: '#0a1628' }}>
                <div className="text-3xl mb-4">{w.icon}</div>
                <div className="w-8 h-0.5 mb-4" style={{ background: '#c9a84c' }} />
                <h3 className="font-serif font-bold text-white text-lg mb-2">{w.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="py-16 px-6" style={{ background: '#f5f5f0' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif font-bold text-navy text-2xl mb-8 text-center">
            Related Family Law Services
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ['Child Custody & Parenting Plans', 'Arrangements that put your children\'s wellbeing first.', '/family-law'],
              ['Child & Spousal Support', 'Fair support calculated under the Federal Guidelines.', '/family-law'],
              ['Property Division', 'Equalization of net family property and complex assets.', '/family-law'],
            ].map(([title, desc, to]) => (
              <Link
                key={title}
                to={to}
                className="block bg-white p-6 rounded-lg border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-200 no-underline group"
                style={{ borderTop: '3px solid #c9a84c' }}
              >
                <h3 className="font-serif font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
