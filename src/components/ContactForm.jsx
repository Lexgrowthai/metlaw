import { useState } from 'react'

const offices = [
  {
    city: 'Ajax (Main)',
    addr: '230 Westney Rd S, Suite 501, Ajax, ON L1S 7J5',
    phone: '(905) 686-1243',
    tel: '+19056861243',
  },
  {
    city: 'Bowmanville',
    addr: 'The Wellington Lofts, 182 Wellington St, Bowmanville, ON L1C 1W3',
    phone: '(365) 401-3035',
    tel: '+13654013035',
  },
  {
    city: 'Toronto',
    addr: '45 Sheppard Avenue, Suite 900, Toronto, ON M2N 5W9',
    phone: '(647) 925-4745',
    tel: '+16479254745',
  },
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', matter: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass =
    'w-full border border-gray-200 rounded px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold transition-colors'

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-gold font-sans text-xs tracking-widest uppercase font-medium mb-3 text-center">
          GET IN TOUCH
        </p>
        <h2 className="font-serif font-bold text-navy text-4xl mb-12 text-center">
          Contact Metelsky Law
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {sent ? (
              <div className="p-8 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-700 font-semibold text-lg">
                  Thank you! We'll be in touch within 24 hours.
                </p>
                <p className="text-green-600 text-sm mt-2">
                  All inquiries are confidential.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <input
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Full Name *"
                  className={inputClass}
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="Email Address *"
                  className={inputClass}
                />
                <input
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="Phone Number"
                  className={inputClass}
                />
                <select
                  value={form.matter}
                  onChange={update('matter')}
                  className={`${inputClass} text-gray-500`}
                >
                  <option value="">Select Practice Area</option>
                  <option>Family Law</option>
                  <option>Criminal Defence</option>
                  <option>Other</option>
                </select>
                <textarea
                  required
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Briefly describe your matter *"
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gold text-navy font-semibold font-sans rounded hover:bg-gold-light transition-colors"
                >
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">All inquiries are confidential.</p>
              </form>
            )}
          </div>

          {/* Office cards */}
          <div className="space-y-5">
            {offices.map((o) => (
              <div
                key={o.city}
                className="p-6 border border-gray-100 rounded-lg hover:border-gold transition-colors"
              >
                <h3 className="font-serif font-bold text-navy text-lg mb-1">{o.city}</h3>
                <p className="text-gray-500 text-sm mb-3">{o.addr}</p>
                <a href={`tel:${o.tel}`} className="text-gold font-semibold text-sm hover:text-gold-light no-underline">
                  {o.phone}
                </a>
              </div>
            ))}
            <div className="p-6 border border-gray-100 rounded-lg hover:border-gold transition-colors">
              <h3 className="font-serif font-bold text-navy text-lg mb-1">Email</h3>
              <a
                href="mailto:reception@metelskylaw.com"
                className="text-gold font-semibold text-sm hover:text-gold-light no-underline"
              >
                reception@metelskylaw.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
