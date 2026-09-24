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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "pt-7 pb-2 backdrop-blur-xs" : "py-7"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ease-in-out ${
          isScrolled ? "max-w-2xl" : "max-w-6xl"
        } px-6`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
            isScrolled
              ? "bg-[var(--light-secondary)] dark:bg-[var(--dark-primary)] py-4 px-7 rounded-full text-sm"
              : "text-lg"
          }`}
        >
          <a
            href="#"
            className={`font-bold transition-all duration-300 ${
              isScrolled
                ? "text-[var(--light-primary)] dark:text-[var(--dark-secondary)] hover:scale-105"
                : "text-[var(--light-secondary)] dark:text-[var(--dark-primary)] text-2xl"
            }`}
          >
            Edward Hutauruk.
          </a>

          <ul
            className={`flex flex-row justify-center items-center gap-4 font-bold ${
              isScrolled
                ? "text-[var(--light-primary)] dark:text-[var(--dark-secondary)]"
                : "text-[var(--light-secondary)] dark:text-[var(--dark-primary)]"
            }`}
          >
            <li>
              <a
                href="#profile"
                className="transition-all duration-400 ease-in-out dark:hover:text-[var(--dark-tertiary)] hover:text-[var(--light-secondary)]"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="transition-all duration-400 ease-in-out dark:hover:text-[var(--dark-tertiary)] hover:text-[var(--light-secondary)]"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#sertifikat"
                className="transition-all duration-400 ease-in-out dark:hover:text-[var(--dark-tertiary)] hover:text-[var(--light-secondary)]"
              >
                Sertifikat
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-all duration-400 ease-in-out dark:hover:text-[var(--dark-tertiary)] hover:text-[var(--light-secondary)]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
