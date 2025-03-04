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
      <main className="flex flex-col items-center gap-3 py-8 text-gray-50">
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
      <section className="flex justify-center">
        <ChallengeCard />
      </section>
    </>
  );
};

const ChallengeCard = () => {
  return (
    <ul className="flex max-w-6xl flex-wrap justify-between px-12">
      {challenges.map((challenge) => {
        return (
          <li key={challenge.day} className="mb-8 w-1/5 p-8">
            <div className="h-36">
              <img src={challenge.img} alt={challenge.title} />
            </div>
            <h3>{challenge.title}</h3>
            <span>Day {challenge.day}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
