import { useEffect, useState } from "react";
import OnReveal from "./OnReveal";

function PortfolioList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [portfolio, setPortfolio] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await fetch("http://localhost:5000/portfolios");
        const data = await response.json();

        setPortfolio(data);
        setIsLoading(false);
      } catch (err) {
        console.error("Gagal mengambil data portfolio dari server", err);
        setIsLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  useEffect(() => {
    const fetcTechStacks = async () => {
      try {
        const response = await fetch("http://localhost:5000/techstacks");
        const data = await response.json();

        setTechStack(data);
        setIsLoading(false);
      } catch (err) {
        console.error("Gagal mengambil data portfolio dari server", err);
        setIsLoading(false);
      }
    };

    fetcTechStacks();
  }, []);

  const categories = [
    "All",
    "Web Development",
    "UI/UX Design",
    "Mobile",
    "Artificial Intelligence",
  ];

  // Filtered Category
  const filteredPortfolio =
    currentCategory === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === currentCategory);

  // Base Index Variabel
  const totalPortfolio = filteredPortfolio.length;

  const safeIndex = totalPortfolio > 0 ? currentIndex % totalPortfolio : 0;
  const prevIndex =
    totalPortfolio > 0 ? (safeIndex - 1 + totalPortfolio) % totalPortfolio : 0;
  const nextIndex = totalPortfolio > 0 ? (safeIndex + 1) % totalPortfolio : 0;

  // Slider Automatic
  useEffect(() => {
    if (totalPortfolio <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPortfolio);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, totalPortfolio]);

  if (isLoading) {
    return (
      <section className="h-[100vh] bg-[var(--dark-primary)]/80 flex justify-center items-center text-[var(--dark-secondary)]">
        Loading Data....
      </section>
    );
  }

  // Handle category change
  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentIndex(0);
  };

  // Card Position
  const cardPosition = [
    {
      position: "center",
      index: safeIndex,
    },
    {
      position: "left",
      index: prevIndex,
    },
    {
      position: "right",
      index: nextIndex,
    },
  ];

  // 3 Portfolio yang ditampilin
  const visibleProjects =
    totalPortfolio === 0
      ? []
      : cardPosition.slice(0, totalPortfolio).map((item) => ({
          item: filteredPortfolio[item.index],
          position: item.position,
          index: item.index,
        }));

  const handleClick = (position, index) => {
    if (position !== "center") {
      setCurrentIndex(index);
    }
  };

  return (
    <section
      id="portfolio"
      className="h-[100vh] bg-[var(--dark-primary)] py-10"
    >
      <div className="h-full flex flex-row items-center justify-around px-10">
        {/* {Tech Stack} */}
        <div className="w-1/3 h-full flex flex-col items-center justify-start p-14">
          <h2 className="text-5xl font-bold mb-10 text-center">Tech Stack</h2>
          <div className="w-full h-full px-5 text-xl font-bold flex flex-col items-start justify-start gap-2">
            <div className="flex flex-col gap-4 py-2">
              <h3>Front-End</h3>
              <div className="flex flex-row gap-4">
                {techStack.map((tech) => (
                  <div className="w-14 h-14 object-contain">
                    <img
                      src={`/assets/${tech.logo_filepath}`}
                      alt={tech.name}
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* {Portfolio} */}
        <div className="w-2/3 flex flex-col justify-evenly items-center p-10 h-full">
          {/* {Portfolio Text Pengantar} */}
          <OnReveal
            className="w-full flex flex-col items-center"
            direction="right"
            duration={2000}
          >
            <div className="p-4 flex flex-col items-center w-full">
              <h2 className="text-5xl font-bold mb-10">My Portfolio</h2>
              <div className="flex flex-row items-center justify-center gap-4 w-full mb-5">
                <p className="text-lg font-semibold">Select Category:</p>
                <label className="">
                  <select
                    name=""
                    id=""
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="text-[var(--dark-primary)] bg-[var(--dark-secondary)] text-center text-xs rounded-xl py-1 cursor-pointer w-full"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          </OnReveal>

          <OnReveal
            className="w-full flex-1 flex"
            direction="left"
            duration={2000}
          >
            {/* {Portfolio List} */}
            <div className="relative flex flex-row gap-4 w-full flex-1 items-center justify-center">
              {visibleProjects.map((portfolio) => {
                const { item, position, index } = portfolio;
                const isCenter = position === "center";

                return (
                  <div
                    key={item.id}
                    onClick={() => handleClick(position, index)}
                    className={`flex flex-col justify-start absolute transition-all duration-1000 ease-in-out w-[300px] h-[400px]
                    ${
                      isCenter
                        ? "z-20 opacity-100 scale-100 translate-x-0 shadow-2xl"
                        : position === "left"
                          ? "z-10 opacity-40 scale-80 -translate-x-64 cursor-pointer hover:opacity-70"
                          : "z-10 opacity-40 scale-80 translate-x-64 cursor-pointer hover:opacity-70"
                    }
                  `}
                  >
                    <div className="bg-[var(--dark-secondary)] text-[var(--dark-primary)] rounded-2xl flex flex-col justify-start pb-4 h-[450px]">
                      {/* {Portfolio Image} */}
                      <div className="w-full h-48 shrink-0 rounded-t-2xl overflow-hidden">
                        <img
                          src={item.image_url}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* {Bawah Img Portfolio */}
                      <div className="flex flex-col justify-between items-center gap-4 py-3 px-7">
                        {/* {Portfolio Desc */}
                        <div className="flex flex-col justify-start items-center gap-2 text-center min-h-[60%]">
                          <p className="text-lg font-bold">{item.title}</p>
                          <p className="text-justify text-xs line-clamp-3">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 select-none w-full justify-center">
                          {item.tags.map((tag) => (
                            <p
                              key={tag}
                              className="text-xs bg-[var(--dark-primary)] text-[var(--dark-secondary)] rounded-full py-1 px-3 max-w-[80px] truncate"
                            >
                              {tag}
                            </p>
                          ))}
                        </div>
                        {/* {Portfolio Button */}
                        <button
                          className={`bg-[var(--dark-primary)] text-[var(--dark-secondary)] font-semibold text-sm rounded-xl px-4 py-1 hover:text-[var(--dark-primary)] hover:bg-[var(--dark-secondary)] transition-all duration-300 ease-in-out w-full ${
                            isCenter
                              ? "opacity-100 cursor-pointer"
                              : "opacity-0 pointer-events-none"
                          }`}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </OnReveal>
        </div>
      </div>
    </section>
  );
}

export default PortfolioList;
