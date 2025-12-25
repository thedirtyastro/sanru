export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-black relative section-banner">
      <div className="w-full md:w-[80%] mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-6 text-white tracking-tight">
          Websites & Campaigns That Speak for Themselves
        </h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto font-light">
          From sleek websites to viral social campaigns, we've helped brands transform their online presence. Explore our designs and case studies to see the results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <a
              key={item}
              href="/projects"
              className="glass rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group cursor-pointer block"
            >
              <div className="h-64 bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 glass-dark rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 text-white group-hover:text-white transition-colors">
                  Project {item}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                  A showcase of our creative work and results.
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="glass px-8 py-4 rounded-full font-medium text-base text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-sm inline-flex items-center gap-2 group"
          >
            View All Projects
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

