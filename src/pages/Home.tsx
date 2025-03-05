import challenges from "../data/challenges";

const Home = () => {
  return (
    <>
      <header className="py-8 text-center">
        <img
          src="/header-logo.png"
          alt="header-logo"
          className="inline-block w-96"
        />
      </header>
      <main className="flex flex-col items-center gap-3 px-4 py-12 text-gray-50">
        <p>
          Inspired by{" "}
          <a
            href="https://javascript30.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-gold-500 text-gold-500 hover:border-b"
          >
            JavaScript30
          </a>{" "}
          by Wes Bos, this project is a great opportunity to explore new
          concepts.
        </p>
        <p>
          I reimplement each challenge with{" "}
          <span className="text-gold-500">
            React, TypeScript, and Tailwind CSS
          </span>{" "}
          to reinforce my frontend skills.
        </p>
      </main>
      <section>
        <ChallengeCard />
      </section>
    </>
  );
};

const ChallengeCard = () => {
  return (
    <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {challenges.map((challenge) => (
        <li key={challenge.day} className="flex flex-col items-center">
          <div className="group relative w-full max-w-[280px] overflow-hidden">
            <span className="absolute z-10 bg-black px-2 py-1 text-xs font-bold text-white shadow-md transition-opacity duration-300 group-hover:opacity-100">
              Day {challenge.day}
            </span>
            <img
              src={challenge.img}
              alt={challenge.title}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-108"
            />
          </div>
          <div className="mt-2 text-center">
            <div className="flex items-center justify-center">
              <span className="text-gold-500 mx-2 text-sm font-semibold">
                {challenge.title}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Home;
