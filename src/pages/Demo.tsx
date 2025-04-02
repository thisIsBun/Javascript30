import { useParams, useNavigate } from "react-router";
import JavaScriptDrumKit from "../challenges/01 - JavaScript Drum Kit/Demo";
import JSAndCSSClock from "../challenges/02 - JS and CSS Clock/Demo";
import CSSVariables from "../challenges/03 - CSS Variables/Demo";
import ArrayCardioDay1 from "../challenges/04 - Array Cardio Day 1/Demo";
import FlexPanelGallery from "../challenges/05 - Flex Panel Gallery/Demo";
import TypeAhead from "../challenges/06 - Type Ahead/Demo";
import ArrayCardioDay2 from "../challenges/07 - Array Cardio Day 2/Demo";
import FunWithHTML5Canvas from "../challenges/08 - Fun with HTML5 Canvas/Demo";
import DevToolsDomination from "../challenges/09 - Dev Tools Domination/Demo";
import HoldShiftAndCheckCheckboxes from "../challenges/10 - Hold Shift and Check Checkboxes/Demo";
import CustomVideoPlayer from "../challenges/11 - Custom Video Player/Demo";
import KeySequenceDetection from "../challenges/12 - Key Sequence Detection/Demo";
import SlideInOnScroll from "../challenges/13 - Slide in on Scroll/Demo";

const demos: Record<string, React.FC> = {
  "1": JavaScriptDrumKit,
  "2": JSAndCSSClock,
  "3": CSSVariables,
  "4": ArrayCardioDay1,
  "5": FlexPanelGallery,
  "6": TypeAhead,
  "7": ArrayCardioDay2,
  "8": FunWithHTML5Canvas,
  "9": DevToolsDomination,
  "10": HoldShiftAndCheckCheckboxes,
  "11": CustomVideoPlayer,
  "12": KeySequenceDetection,
  "13": SlideInOnScroll,
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
