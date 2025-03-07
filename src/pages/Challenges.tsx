import { useParams, NavLink, useNavigate } from "react-router";
import challenges from "../data/challenges";
import { useEffect } from "react";
import Logo from "../components/Logo";

const Challenges = () => {
  const { challengeId } = useParams();
  const navigate = useNavigate();

  const challengeData = challenges.find(
    (item) => item.day === Number(challengeId),
  );

  useEffect(() => {
    if (!challengeData) {
      navigate("/404", { replace: true });
    }
  }, [challengeData, navigate]);

  return challengeData ? (
    <>
      <Logo />
      <article className="flex items-center justify-between p-12">
        <figure className="flex h-[70vh] w-3/5 items-center justify-center">
          <img
            src={challengeData.img}
            alt={challengeData.title}
            className="h-[600px] w-full object-cover"
          />
        </figure>

        <div className="flex w-2/5 flex-col items-center gap-2">
          <h4 className="text-xl font-medium text-yellow-500">
            Day {challengeData.day}
          </h4>
          <h3 className="text-2xl font-semibold text-gray-50">
            {challengeData.title}
          </h3>
          <p className="text-lg leading-relaxed text-gray-50">
            {challengeData.description}
          </p>
          <div className="mt-10 flex gap-4">
            <NavLink
              to={`/challenges/${challengeData.day}/demo`}
              className="nav-button"
            >
              Demo
            </NavLink>
            <NavLink
              to={`/challenges/${challengeData.day}/note`}
              className="nav-button"
            >
              Note
            </NavLink>
          </div>
        </div>
      </article>

      <NavLink to="/" className="button-bg fixed right-6 bottom-6">
        Go to Home
      </NavLink>
    </>
  ) : null;
};

export default Challenges;
