import { Link } from 'react-router-dom'

const navLinks = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/family-law', 'Family Law'],
  ['/criminal-defence', 'Criminal Defence'],
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a1628' }} className="text-white/70 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 border-2 border-gold flex items-center justify-center flex-shrink-0">
              <span className="text-gold font-serif font-bold text-sm">ML</span>
            </div>
            <span className="text-white font-serif font-bold text-lg">Metelsky Law</span>
          </div>
          <p className="text-sm leading-relaxed">
            Compassionate, results-driven legal counsel for Family Law and Criminal Defence across
            Ontario.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 font-sans">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors no-underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 font-sans">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+19056861243" className="hover:text-gold transition-colors no-underline">
                (905) 686-1243 — Ajax
              </a>
            </li>
            <li>
              <a href="tel:+13654013035" className="hover:text-gold transition-colors no-underline">
                (365) 401-3035 — Bowmanville
              </a>
            </li>
            <li>
              <a href="tel:+16479254745" className="hover:text-gold transition-colors no-underline">
                (647) 925-4745 — Toronto
              </a>
            </li>
            <li>
              <a
                href="mailto:reception@metelskylaw.com"
                className="hover:text-gold transition-colors no-underline"
              >
                reception@metelskylaw.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} Metelsky Law Professional Corporation. All rights reserved.</p>
        <p>230 Westney Rd S, Suite 501, Ajax, ON L1S 7J5</p>
      </div>
    </footer>
  )
}
