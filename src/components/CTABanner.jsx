export default function CTABanner({
  title = 'Ready to Take the Next Step?',
  sub = 'Contact us today for a free confidential consultation.',
}) {
  return (
    <section className="py-16 px-6" style={{ background: '#c9a84c' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif font-bold text-navy text-3xl md:text-4xl mb-4">{title}</h2>
        <p className="font-sans mb-8" style={{ color: 'rgba(10,22,40,0.7)' }}>
          {sub}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+19056861243"
            className="px-8 py-3.5 bg-navy text-white font-semibold rounded font-sans hover:bg-navy-mid transition-colors no-underline"
          >
            (905) 686-1243
          </a>
          <a
            href="mailto:reception@metelskylaw.com"
            className="px-8 py-3.5 border-2 border-navy text-navy font-semibold rounded font-sans hover:bg-navy hover:text-white transition-colors no-underline"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  )
}
