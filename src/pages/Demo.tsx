import { useParams, useNavigate } from "react-router";
import JavaScriptDrumKit from "../challenges/01 - JavaScript Drum Kit/Demo";

const components: Record<string, React.FC> = {
  "1": JavaScriptDrumKit,
};

const Demo = () => {
  const { challengeId } = useParams();
  const navigate = useNavigate();

  if (!challengeId || !components[challengeId]) {
    navigate("/404", { replace: true });
    return null;
  }

  const DemoComponent = components[challengeId];

  return <DemoComponent />;
};

export default Demo;
