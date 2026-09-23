import heroImg from "../assets/hero.png";

function Profile() {
  const profileData = {
    name: "Edward A. H. Hutauruk",
    age: "20 Tahun",
    university: "Universitas Katolik Indonesia Atma Jaya",
    motto:
      "Terus belajar, berinovasi, dan memberikan dampak positif melalui teknologi.",
    avatar: heroImg,
  };

  return (
    <section className="py-12 px-4 bg-[var(--light-primary)]/90 dark:bg-[var(--dark-primary)]/90">
      <div className="w-full max-w-5xl mx-auto rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-300 bg-[var(--light-primary)] text-[var(--light-secondary)] dark:bg-[var(--dark-primary)] dark:text-white border border-black/5 dark:border-white/10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative flex-shrink-0">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-black/10 dark:bg-white/10 p-2 shadow-inner flex items-center justify-center">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
          </div>

          {/* Profile Details */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-black/10 dark:bg-[var(--dark-secondary)]/20 dark:text-[var(--dark-secondary)] mb-2">
                Student Profile
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                {profileData.name}
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm md:text-base font-medium opacity-90">
              <div className="flex items-center gap-1.5">
                <span>{profileData.age}</span>
              </div>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center gap-1.5">
                <span>{profileData.university}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-black/10 dark:border-white/10">
              <p className="text-sm md:text-base italic leading-relaxed opacity-95">
                "{profileData.motto}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
