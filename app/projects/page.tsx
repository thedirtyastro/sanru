import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 1,
    name: "Elegant E-Commerce Platform",
    description: "A modern, responsive e-commerce website with seamless checkout experience and beautiful product showcases.",
    tags: ["Website", "E-Commerce", "UI/UX Design"],
    image: "/project-1.jpg",
  },
  {
    id: 2,
    name: "Brand Photography Campaign",
    description: "Professional brand photography that captures the essence and personality of the business.",
    tags: ["Photography", "Branding", "Content"],
    image: "/project-2.jpg",
  },
  {
    id: 3,
    name: "Social Media Strategy",
    description: "Comprehensive social media strategy that increased engagement by 300% and grew followers organically.",
    tags: ["Social Media", "Strategy", "Marketing"],
    image: "/project-3.jpg",
  },
  {
    id: 4,
    name: "Corporate Website Redesign",
    description: "Complete website redesign with modern aesthetics, improved user experience, and faster load times.",
    tags: ["Website", "Redesign", "Development"],
    image: "/project-4.jpg",
  },
  {
    id: 5,
    name: "Product Photography Series",
    description: "High-quality product photography that showcases products in their best light, increasing conversion rates.",
    tags: ["Photography", "Product", "E-Commerce"],
    image: "/project-5.jpg",
  },
  {
    id: 6,
    name: "Creative Agency Website",
    description: "A stunning portfolio website for a creative agency featuring smooth animations and interactive elements.",
    tags: ["Website", "Portfolio", "Creative"],
    image: "/project-6.jpg",
  },
  {
    id: 7,
    name: "Lifestyle Brand Campaign",
    description: "End-to-end brand campaign including photography, social media content, and website integration.",
    tags: ["Photography", "Branding", "Social Media", "Website"],
    image: "/project-7.jpg",
  },
  {
    id: 8,
    name: "Restaurant Website & Menu",
    description: "Beautiful restaurant website with online menu, reservation system, and mouth-watering food photography.",
    tags: ["Website", "Photography", "Food"],
    image: "/project-8.jpg",
  },
  {
    id: 9,
    name: "Tech Startup Landing Page",
    description: "Conversion-optimized landing page for a tech startup with compelling copy and modern design.",
    tags: ["Website", "Landing Page", "Conversion"],
    image: "/project-9.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="py-20 px-4 pt-32 relative section-banner">
        <div className="w-full md:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-tight">
              Our Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Explore our portfolio of creative work, from stunning websites to powerful brand campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="glass rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group cursor-pointer"
              >
                <div className="h-64 bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 glass-dark rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="glass-dark px-3 py-1 rounded-full text-xs font-medium text-white/80 group-hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

