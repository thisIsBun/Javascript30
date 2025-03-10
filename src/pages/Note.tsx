import { useParams, useNavigate } from "react-router";
import JavaScriptDrumKit from "../challenges/01 - JavaScript Drum Kit/Note";
import JSAndCSSClock from "../challenges/02 - JS and CSS Clock/Note";

const notes: Record<string, React.FC> = {
  "1": JavaScriptDrumKit,
  "2": JSAndCSSClock,
};

const Note = () => {
  const { challengeId } = useParams();
  const navigate = useNavigate();

  if (!challengeId || !notes[challengeId]) {
    navigate("/404", { replace: true });
    return null;
  }

  const Component = notes[challengeId];
  return <Component />;
};

export default Note;
