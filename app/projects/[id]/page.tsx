import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const projects = [
  {
    id: 1,
    name: "Elegant E-Commerce Platform",
    description: "A modern, responsive e-commerce website with seamless checkout experience and beautiful product showcases.",
    tags: ["Website", "E-Commerce", "UI/UX Design"],
    image: "/project-1.jpg",
    sampleImages: [
      "/project-1.jpg",
      "/project-2.jpg",
      "/project-3.jpg",
    ],
    link: "https://example.com/ecommerce",
  },
  {
    id: 2,
    name: "Brand Photography Campaign",
    description: "Professional brand photography that captures the essence and personality of the business.",
    tags: ["Photography", "Branding", "Content"],
    image: "/project-2.jpg",
    sampleImages: [
      "/project-2.jpg",
      "/project-3.jpg",
      "/project-4.jpg",
    ],
    link: "https://example.com/photography",
  },
  {
    id: 3,
    name: "Social Media Strategy",
    description: "Comprehensive social media strategy that increased engagement by 300% and grew followers organically.",
    tags: ["Social Media", "Strategy", "Marketing"],
    image: "/project-3.jpg",
    sampleImages: [
      "/project-3.jpg",
      "/project-4.jpg",
      "/project-5.jpg",
    ],
    link: "https://example.com/social-media",
  },
  {
    id: 4,
    name: "Corporate Website Redesign",
    description: "Complete website redesign with modern aesthetics, improved user experience, and faster load times.",
    tags: ["Website", "Redesign", "Development"],
    image: "/project-4.jpg",
    sampleImages: [
      "/project-4.jpg",
      "/project-5.jpg",
      "/project-6.jpg",
    ],
    link: "https://example.com/redesign",
  },
  {
    id: 5,
    name: "Product Photography Series",
    description: "High-quality product photography that showcases products in their best light, increasing conversion rates.",
    tags: ["Photography", "Product", "E-Commerce"],
    image: "/project-5.jpg",
    sampleImages: [
      "/project-5.jpg",
      "/project-6.jpg",
      "/project-7.jpg",
    ],
    link: "https://example.com/product-photo",
  },
  {
    id: 6,
    name: "Creative Agency Website",
    description: "A stunning portfolio website for a creative agency featuring smooth animations and interactive elements.",
    tags: ["Website", "Portfolio", "Creative"],
    image: "/project-6.jpg",
    sampleImages: [
      "/project-6.jpg",
      "/project-7.jpg",
      "/project-8.jpg",
    ],
    link: "https://example.com/agency",
  },
  {
    id: 7,
    name: "Lifestyle Brand Campaign",
    description: "End-to-end brand campaign including photography, social media content, and website integration.",
    tags: ["Photography", "Branding", "Social Media", "Website"],
    image: "/project-7.jpg",
    sampleImages: [
      "/project-7.jpg",
      "/project-8.jpg",
      "/project-9.jpg",
    ],
    link: "https://example.com/lifestyle",
  },
  {
    id: 8,
    name: "Restaurant Website & Menu",
    description: "Beautiful restaurant website with online menu, reservation system, and mouth-watering food photography.",
    tags: ["Website", "Photography", "Food"],
    image: "/project-8.jpg",
    sampleImages: [
      "/project-8.jpg",
      "/project-9.jpg",
      "/project-1.jpg",
    ],
    link: "https://example.com/restaurant",
  },
  {
    id: 9,
    name: "Tech Startup Landing Page",
    description: "Conversion-optimized landing page for a tech startup with compelling copy and modern design.",
    tags: ["Website", "Landing Page", "Conversion"],
    image: "/project-9.jpg",
    sampleImages: [
      "/project-9.jpg",
      "/project-1.jpg",
      "/project-2.jpg",
    ],
    link: "https://example.com/startup",
  },
];

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen bg-black">
        <Navbar />
        <section className="py-20 px-4 pt-32 text-center">
          <h1 className="text-4xl font-light mb-4 text-white">Project Not Found</h1>
          <Link href="/projects" className="glass px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all inline-block">
            Back to Projects
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="py-20 px-4 pt-32 relative section-banner">
        <div className="w-full md:w-[80%] mx-auto relative z-10">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-tight">
            {project.name}
          </h1>

          {/* Chips/Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="glass-dark px-4 py-2 rounded-full text-sm font-medium text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-3xl mb-12 font-light leading-relaxed">
            {project.description}
          </p>

          {/* Sample Images Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {project.sampleImages.map((img, index) => (
              <div
                key={index}
                className="glass rounded-2xl overflow-hidden aspect-[4/3] relative group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="glass-dark p-4 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Routing Link & CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-8 py-4 rounded-full font-medium text-base text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-sm inline-flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Live Project
            </a>
            <Link
              href="/projects"
              className="glass-dark px-8 py-4 rounded-full font-medium text-base text-white hover:bg-black/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}

