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
    </>
  );
};

export default Home;
