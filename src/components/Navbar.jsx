import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "pt-7 py-5 backdrop-blur-xs" // scroll
          : "py-5"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ease-in-out ${
          isScrolled ? "max-w-xl" : "max-w-6xl"
        } px-6`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
            isScrolled
              ? "bg-[var(--light-secondary)] dark:bg-[var(--dark-secondary)] py-4 px-7 rounded-full"
              : ""
          }`}
        >
          <a
            href="#"
            className={`font-bold transition-all duration-500 ${
              isScrolled
                ? "text-[var(--light-primary)] dark:text-[var(--dark-primary)]"
                : "text-[var(--light-secondary)] dark:text-[var(--dark-secondary)]"
            }`}
          >
            Edward Hutauruk.
          </a>

          <ul
            className={`flex items-center gap-4 font-bold ${
              isScrolled
                ? "text-[var(--light-primary)] dark:text-[var(--dark-primary)]"
                : "text-[var(--light-secondary)] dark:text-[var(--dark-secondary)]"
            }`}
          >
            <li>
              <a href="#home" className="text-sm transition">
                Home
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-sm transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#sertifikat" className="text-sm transition">
                Sertifikat
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm transition">
                Contact
              </a>
            </li>
            <button
              onClick={toggleTheme}
              className="px-3 py-2 rounded-full font-medium transition-colors bg-gray-200 text-secondary hover:bg-gray-300 dark:bg-secondary dark:text-primary dark:hover:bg-opacity-80"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
