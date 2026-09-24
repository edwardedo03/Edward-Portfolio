import myPhoto from "../assets/edo.png";

function Profile() {
  const profileData = {
    name: "Edward Antonio Herlambang Hutauruk",
    age: "20 Tahun",
    university: "Universitas Katolik Indonesia Atma Jaya",
    motto:
      "Building a Strong Foundation in Artificial Intelligence and Deep Learning as an Information Systems Student at Atma Jaya Catholic University of Indonesia, with a Passion for Creating Intelligent Technology Solutions",
    avatar: myPhoto,
  };

  const techStack = [
    {
      tech: "HTML",
      color: "#e64d25",
    },
    {
      tech: "CSS",
      color: "#0070ba",
    },
    {
      tech: "Tailwind CSS",
      color: "#18b7b9",
    },
    {
      tech: "Python",
      color: "#376f9e",
    },
    {
      tech: "JavaScript",
      color: "#f1c40f",
    },
    {
      tech: "React",
      color: "#087ea4",
    },
    {
      tech: "Express.js",
      color: "#f1c40f",
    },
    {
      tech: "MongoDB",
      color: "#00694a",
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
            <p className="text-sm md:text-base italic leading-relaxed opacity-95 max-w-xl">
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
