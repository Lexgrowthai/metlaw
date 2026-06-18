import { useState } from 'react'

const faqs = [
  {
    q: 'What areas of law does Metelsky Law handle?',
    a: 'We specialize in Family Law (divorce, custody, support, property division) and Criminal Defence (assault, drug offences, bail hearings, and more) across Ajax, Bowmanville, and Toronto.',
  },
  {
    q: 'Do you offer free consultations?',
    a: 'Yes. We offer complimentary initial consultations so you can discuss your situation with our team and understand your options before committing.',
  },
  {
    q: 'How quickly can I get an appointment?',
    a: 'We strive to schedule consultations within 48 hours. For urgent criminal matters — especially bail hearings — we offer same-day availability.',
  },
  {
    q: 'Which courts do you appear in?',
    a: 'We regularly appear in Durham Region courts (Ajax, Oshawa, Whitby), Bowmanville, and Toronto Superior Court / Ontario Court of Justice.',
  },
  {
    q: 'How do I start the process?',
    a: 'Simply call, email, or fill out our contact form. Our intake team will gather some basic information and book your consultation with Rhonda or one of our associates.',
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
      <div
        style={{
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p className="pb-5 text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQAccordion() {
  return (
    <section className="py-20 px-6" style={{ background: '#f5f5f0' }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3 text-center">
          FAQ
        </p>
        <h2 className="font-serif font-bold text-navy text-4xl mb-12 text-center">Common Questions</h2>
        {faqs.map((f, i) => (
          <FAQItem key={i} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  )
}
