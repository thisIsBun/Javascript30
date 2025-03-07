import { useParams, useNavigate } from "react-router";
import JavaScriptDrumKit from "../challenges/01 - JavaScript Drum Kit/Note";

const notes: Record<string, React.FC> = { "1": JavaScriptDrumKit };

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
