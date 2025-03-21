import { useParams, useNavigate } from "react-router";
import JavaScriptDrumKit from "../challenges/01 - JavaScript Drum Kit/Note";
import JSAndCSSClock from "../challenges/02 - JS and CSS Clock/Note";
import CSSVariables from "../challenges/03 - CSS Variables/Note";
import ArrayCardioDay1 from "../challenges/04 - Array Cardio Day 1/Note";
import FlexPanelGallery from "../challenges/05 - Flex Panel Gallery/Note";
import TypeAhead from "../challenges/06 - Type Ahead/Note";
import ArrayCardioDay2 from "../challenges/07 - Array Cardio Day 2/Note";
import FunWithHTML5Canvas from "../challenges/08 - Fun with HTML5 Canvas/Note";

const notes: Record<string, React.FC> = {
  "1": JavaScriptDrumKit,
  "2": JSAndCSSClock,
  "3": CSSVariables,
  "4": ArrayCardioDay1,
  "5": FlexPanelGallery,
  "6": TypeAhead,
  "7": ArrayCardioDay2,
  "8": FunWithHTML5Canvas,
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
