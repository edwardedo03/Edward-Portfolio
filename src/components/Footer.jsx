function Footer() {
  const currentYear = new Date().getFullYear();
  const email = "contact@portfolio.com";
  const githubUrl = "https://github.com/example";
  const linkedinUrl = "https://linkedin.com/in/example";

  return (
    <footer className="text-white dark:bg-[var(--dark-secondary)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--dark-primary)]">
              Portfolio
            </h3>
            <p className="text-sm opacity-80 max-w-xs">
              Personal portfolio showcasing my work, skills, and projects in web
              development and design.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white/90">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#profile"
                  className="text-sm opacity-80 hover:text-[var(--dark-primary)] transition"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-sm opacity-80 hover:text-[var(--dark-primary)] transition"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#sertifikat"
                  className="text-sm opacity-80 hover:text-[var(--dark-primary)] transition"
                >
                  Sertifikat
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm opacity-80 hover:text-[var(--dark-primary)] transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white/90">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">Email: {email}</li>
              <li className="text-sm opacity-80">Phone: +62 812 3456 7890</li>
              <li className="text-sm opacity-80">
                Location: Jakarta, Indonesia
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white/90">Connect</h4>
            <div className="flex gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.295 2.747-1.026 2.747-1.026.547 1.377.203 2.394.1 2.647.64.699 1.026 1.592 1.026 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-sm opacity-80">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-xs mt-2 opacity-60">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
