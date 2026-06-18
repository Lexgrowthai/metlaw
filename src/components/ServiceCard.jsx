import { Link } from 'react-router-dom'

export default function ServiceCard({ icon, title, desc, to }) {
  return (
    <Link
      to={to}
      className="block bg-white rounded-lg p-7 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group no-underline"
      style={{ borderTop: '3px solid #c9a84c' }}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-serif font-bold text-navy text-xl mb-2 group-hover:text-gold transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </Link>
  )
}
