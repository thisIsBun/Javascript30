import challenges from "../data/challenges";
import { NavLink } from "react-router";
import Logo from "../components/Logo";
import { useEffect } from "react";

const challengingBackground = {
  challenging: "#ed4f55",
  medium: "#ed7d4f",
  simple: "#268969",
  TBC: "#000000",
};

const Home = () => {
  useEffect(() => {
    document.title = "Javascript30";
  }, []);

  return (
    <>
      <Logo />
      <main className="flex flex-col items-center gap-3 px-4 py-12 text-gray-50">
        <p>
          Inspired by{" "}
          <a
            href="https://javascript30.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:border-b hover:border-yellow-500"
          >
            JavaScript30
          </a>{" "}
          by Wes Bos, this project is a great opportunity to explore new
          concepts.
        </p>
        <p>
          I reimplement each challenge with{" "}
          <span className="text-yellow-500">
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
    <ul className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 px-4 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {challenges.map((challenge) => (
        <li
          key={challenge.day}
          className="flex flex-col items-center rounded-md border border-transparent hover:border-gray-600"
        >
          <NavLink to={`/challenges/${challenge.day}`} className="w-full">
            <div className="group relative w-full max-w-full overflow-hidden">
              <span className="absolute bottom-0 z-10 bg-black px-2 py-1 text-xs font-bold text-white shadow-md transition-opacity duration-300 group-hover:opacity-100">
                Day {challenge.day}
              </span>
              <span
                className={`absolute right-0 bottom-0 z-10 px-2 py-1 text-xs font-bold text-white shadow-md transition-opacity duration-300 group-hover:opacity-100`}
                style={{
                  background: challengingBackground[challenge.challengeLevel],
                }}
              >
                {challenge.challengeLevel}
              </span>
              <img
                src={challenge.img}
                alt={challenge.title}
                className="h-48 w-full rounded-t-md object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="my-3 text-center">
              <div className="flex items-center justify-center">
                <span className="mx-2 text-sm font-semibold text-yellow-500">
                  {challenge.title}
                </span>
              </div>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Home;
