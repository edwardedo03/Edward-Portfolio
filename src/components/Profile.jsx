import myPhoto from "../assets/edo.png";
import OnReveal from "./OnReveal";

function Profile() {
  const profileData = {
    name: "Edward Antonio Herlambang Hutauruk",
    age: "20 Tahun",
    university: "Universitas Katolik Indonesia Atma Jaya",
    motto:
      "Building a Strong Foundation in Artificial Intelligence and Deep Learning as an Information Systems Student at Atma Jaya Catholic University of Indonesia, with a Passion for Creating Intelligent Technology Solutions",
    avatar: myPhoto,
  };

  return (
    <section
      id="profile"
      className="flex flex-col items-center justify-center px-10 bg-[var(--dark-primary)] h-[100vh]"
    >
      <div className="flex flex-row items-center justify-evenly max-w-7xl w-full h-full">
        <OnReveal className="h-full" direction="down" duration={1500}>
          <div className="w-[430px] h-full flex-shrink-0 border-black relative flex items-end justify-center">
            <img
              src={profileData.avatar}
              alt={profileData.name}
              draggable={false}
              className="w-full h-auto object-contain object-bottom drop-shadow-lg z-10 select-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
            />
          </div>
        </OnReveal>

        <div className="flex flex-col items-center md:items-start gap-4 md:text-left text-[var(--dark-secondary)]">
          <OnReveal className="w-full" direction="left" duration={1500}>
            <div>
              <h1 className="text-3xl md:text-3xl font-bold">Hi, I'm</h1>
              <h2 className="text-4xl md:text-5xl max-w-xl font-extrabold">
                {profileData.name}
              </h2>
            </div>
          </OnReveal>

          <OnReveal className="w-full" direction="right" duration={1500}>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm md:text-base font-medium opacity-90">
              <div className="flex items-center gap-1.5">
                <span>{profileData.age}</span>
              </div>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center gap-1.5">
                <span>{profileData.university}</span>
              </div>
            </div>
          </OnReveal>

          <OnReveal className="w-full" direction="left" duration={1500}>
            <div className="">
              <p className="text-sm md:text-base italic leading-relaxed opacity-95 max-w-xl text-justify">
                "{profileData.motto}"
              </p>
            </div>
          </OnReveal>
        </div>
      </div>
    </section>
  );
}

export default Profile;
