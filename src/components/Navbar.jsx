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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "pt-7 pb-2" : "py-7"
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
              ? "bg-[var(--dark-secondary)] py-4 px-7 rounded-full text-sm backdrop-blur-md shadow-xl"
              : "text-lg"
          }`}
        >
          <a
            href="#"
            className={`font-bold transition-all duration-300 ${
              isScrolled
                ? "dark:text-[var(--dark-primary)] hover:scale-105"
                : "dark:text-[var(--dark-secondary)] text-2xl"
            }`}
          >
            Edward Hutauruk
            <span className="text-[var(--dark-tertiary)] font-extrabold">
              .
            </span>
          </a>

          <ul
            className={`flex flex-row justify-center items-center gap-4 font-bold ${
              isScrolled
                ? "dark:text-[var(--dark-primary)]"
                : "dark:text-[var(--dark-secondary)]"
            }`}
          >
            <li>
              <a
                href="#profile"
                className="transition-all duration-400 ease-in-out hover:text-[var(--dark-tertiary)]"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="transition-all duration-400 ease-in-out hover:text-[var(--dark-tertiary)] "
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#certificate"
                className="transition-all duration-400 ease-in-out hover:text-[var(--dark-tertiary)] "
              >
                Certificate
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-all duration-400 ease-in-out hover:text-[var(--dark-tertiary)] "
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
