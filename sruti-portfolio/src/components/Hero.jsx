import { Link } from 'react-scroll'

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-8 py-24">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 w-full">

        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Sruti Mallik
          </h1>
          <p className="text-xl text-[var(--color-primary)] font-semibold mb-3">
            Tech Lead & Data Science Manager at C3 AI
          </p>
          <p className="text-[var(--color-muted)] mb-8">
             Ph.D. in Electrical & Systems Engineering, Washington University in St. Louis
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:opacity-90 cursor-pointer transition-opacity"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg font-medium hover:bg-[var(--color-primary)] hover:text-white cursor-pointer transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src="/assets/img/semi professional.png"
            alt="Sruti Mallik"
            className="w-64 h-64 rounded-full object-cover object-top shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
