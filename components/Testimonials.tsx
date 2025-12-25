const testimonials = [
  {
    quote:
      "Sanru Creative Studio built us a website that not only looks stunning but actually converts visitors into clients.",
    author: "Ananya R.",
    role: "Entrepreneur",
  },
  {
    quote:
      "Their social media growth strategies gave us a 4x boost in reach within months.",
    author: "Arjun P.",
    role: "Small Business Owner",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-black relative section-banner">
      <div className="w-full md:w-[80%] mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-12 text-white tracking-tight">
          Loved by Brands, Backed by Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400/60 group-hover:text-yellow-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-base text-gray-200 mb-6 italic leading-relaxed group-hover:text-white transition-colors">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white group-hover:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

