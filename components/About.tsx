export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-black relative section-banner">
      <div className="w-full md:w-[80%] mx-auto relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 glass-dark rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-center mb-8 text-white tracking-tight">
          Your Creative & Digital Growth Partner
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto text-center leading-relaxed font-light">
          Sanru Creative Studio is more than just a social media agency—we are your full-service digital partner. We design websites, craft creative content, and execute social media strategies that don't just look good, they deliver measurable results. Whether you're a startup or an established brand, we'll help you grow and stand out in the digital world.
        </p>
      </div>
    </section>
  );
}

