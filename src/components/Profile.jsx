import myPhoto from "../assets/edo.png";

function Profile() {
  const profileData = {
    name: "Edward Antonio Herlambang Hutauruk",
    age: "20 Tahun",
    university: "Universitas Katolik Indonesia Atma Jaya",
    motto:
      "Terus belajar, berinovasi, dan memberikan dampak positif melalui teknologi.",
    avatar: myPhoto,
  };

  const techStack = [
    {
      tech: "HTML",
      color: "#e34f26",
    },
    {
      tech: "CSS",
      color: "#264de4",
    },
    {
      tech: "JavaScript",
      color: "#f7df1e",
    },
    {
      tech: "Tailwind CSS",
      color: "#38bdf8",
    },
    {
      tech: "React",
      color: "#61dafb",
    },
    {
      tech: "Express.js",
      color: "#000000",
    },
    {
      tech: "MongoDB",
      color: "#47a248",
    },
  ];

  return (
    <section
      id="profile"
      className="flex flex-col items-center justify-center px-10 bg-[var(--light-primary)] dark:bg-[var(--dark-secondary)] h-[95vh]"
    >
      <div className="flex flex-row items-center justify-evenly max-w-7xl w-full h-full">
        <div className="w-[430px] h-full flex-shrink-0 border-black relative flex items-end justify-center">
          <img
            src={profileData.avatar}
            alt={profileData.name}
            draggable={false}
            className="w-full h-auto object-contain object-bottom drop-shadow-lg z-10 select-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
          />
        </div>

        <div className="flex flex-col items-center md:items-start gap-4 md:text-left text-[var(--light-secondary)] dark:text-[var(--dark-primary)]">
          <div>
            <h2 className="text-4xl md:text-5xl max-w-xl font-extrabold">
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

          <div className="">
            <p className="text-sm md:text-base italic leading-relaxed opacity-95">
              "{profileData.motto}"
            </p>
          </div>

          <div className="max-w-xl flex flex-wrap gap-3 select-none">
            {techStack.map((stack, index) => (
              <span
                key={index}
                className={`text-sm md:text-base bg-[${stack.color}] rounded-full px-4 py-1 text-[var(--light-secondary)] dark:text-[var(--dark-secondary)] font-semibold shadow-md`}
              >
                {stack.tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
