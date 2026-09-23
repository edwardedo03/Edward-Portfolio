import { useState } from "react";

function PortfolioList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioCategory = [
    "All",
    "Web Development",
    "UI/UX Design",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
  ];

  const dummyProjects = [
    {
      id: 1,
      title: "Awesome Web App",
      category: "Web Development",
      description:
        "A responsive full-stack web application built using modern tech stack.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
      tags: ["React", "Tailwind", "Node.js"],
      link: "#",
    },
    {
      id: 2,
      title: "Mobile Banking UI",
      category: "UI/UX Design",
      description:
        "Clean and modern user interface design for fintech mobile application.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
      tags: ["Figma", "UI/UX", "Mobile"],
      link: "#",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "High-performance e-commerce platform with seamless payment integration.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&auto=format&fit=crop&q=60",
      tags: ["Next.js", "Stripe", "Tailwind"],
      link: "#",
    },
    {
      id: 4,
      title: "AI Content Generator",
      category: "Artificial Intelligence",
      description:
        "AI-powered content generation tool using large language models.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=60",
      tags: ["Python", "TensorFlow", "FastAPI"],
      link: "#",
    },
  ];

  const filteredProjects = dummyProjects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1,
    );
  };

  const getVisibleProjects = () => {
    if (filteredProjects.length === 0) return [];
    const total = filteredProjects.length;
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;
    return [
      { project: filteredProjects[prev], position: "prev" },
      { project: filteredProjects[currentIndex], position: "current" },
      { project: filteredProjects[next], position: "next" },
    ];
  };

  return (
    <section className="py-12 px-4 overflow-hidden dark:bg-[var(--dark-primary)] bg-[var(--light-primary)]">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--light-secondary)] dark:text-[var(--dark-secondary)]">
          PORTFOLIO
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <label
          htmlFor="portfolioCategory"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Select Portfolio Category:
        </label>
        <select
          name="portfolioCategory"
          id="portfolioCategory"
          value={activeCategory}
          onChange={(e) => {
            setActiveCategory(e.target.value);
            setCurrentIndex(0);
          }}
          className="text-xs md:text-sm py-2 px-3 font-semibold rounded-lg border border-gray-300 dark:border-gray-700 bg-dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {portfolioCategory.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {filteredProjects.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada proyek.</p>
      ) : (
        <div className="relative flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="z-10 p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:bg-gray-50 transition"
          >
            &larr;
          </button>

          <div className="flex items-center justify-center gap-6 w-full max-w-5xl">
            {getVisibleProjects().map(({ project, position }) => (
              <div
                key={`${project.id}-${position}`}
                className={`flex-1 transition-all duration-500 ease-in-out ${
                  position === "current"
                    ? "scale-100 opacity-100 z-20"
                    : "scale-90 opacity-40 hover:opacity-60 z-10 hidden md:block"
                }`}
              >
                <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl">
                  <div className="relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute top-3 left-3 rounded-md bg-white/90 dark:bg-gray-900/90 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="rounded bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        className="inline-flex items-center justify-center w-full py-2.5 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition"
                      >
                        Lihat Selebihnya &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="z-10 p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:bg-gray-50 transition"
          >
            &rarr;
          </button>
        </div>
      )}
    </section>
  );
}

export default PortfolioList;
