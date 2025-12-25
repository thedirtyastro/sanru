export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 cta-bg relative overflow-hidden">
      {/* Shimmer Effect */}
      <div className="cta-shimmer"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-white/3 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="w-full md:w-[80%] mx-auto text-center relative z-10">
        <div className="mb-6 inline-block">
          <svg className="w-16 h-16 text-white/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-white tracking-tight">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-xl mb-10 text-gray-300 font-light">
          Whether you need a powerful website, a stronger social media presence, or both—Sanru Creative Studio has the tools and expertise to make it happen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="glass px-8 py-4 rounded-full font-medium text-base text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-sm flex items-center gap-2 group"
          >
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Book a Free Consultation
          </a>
          <a
            href="#services"
            className="glass-dark px-8 py-4 rounded-full font-medium text-base text-white hover:bg-black/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Boost My Website
          </a>
          <a
            href="#services"
            className="glass-dark px-8 py-4 rounded-full font-medium text-base text-white hover:bg-black/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Grow My Social Media
          </a>
        </div>
      </div>
    </section>
  );
}

