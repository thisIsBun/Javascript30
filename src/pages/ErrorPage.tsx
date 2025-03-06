import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="mb-4 text-lg">Page not found</p>
      <NavLink to="/" className="home-button">
        Go to Home
      </NavLink>
    </main>
  );
};

export default ErrorPage;
