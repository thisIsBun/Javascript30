import { useParams, useNavigate } from "react-router";
import JavaScriptDrumKit from "../challenges/01 - JavaScript Drum Kit/Demo";
import JSAndCSSClock from "../challenges/02 - JS and CSS Clock/Demo";
import CSSVariables from "../challenges/03 - CSS Variables/Demo";
import ArrayCardioDay1 from "../challenges/04 - Array Cardio Day 1/Demo";
import FlexPanelGallery from "../challenges/05 - Flex Panel Gallery/Demo";
import TypeAhead from "../challenges/06 - Type Ahead/Demo";

const demos: Record<string, React.FC> = {
  "1": JavaScriptDrumKit,
  "2": JSAndCSSClock,
  "3": CSSVariables,
  "4": ArrayCardioDay1,
  "5": FlexPanelGallery,
  "6": TypeAhead,
};

const Demo = () => {
  const { challengeId } = useParams();
  const navigate = useNavigate();

  if (!challengeId || !demos[challengeId]) {
    navigate("/404", { replace: true });
    return null;
  }

  const DemoComponent = demos[challengeId];

  return <DemoComponent />;
};

export default Demo;
