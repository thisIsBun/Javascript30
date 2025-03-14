import "./style.css";
import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";
import { useRef } from "react";

const Demo = () => {
  const { challengeId } = useParams();
  const panelRef = useRef<Record<string, HTMLDivElement | null>>({});

  const handleOpen = (key: string) => {
    panelRef.current[key]?.classList.toggle("open");
  };

  const handleTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>,
    key: string,
  ) => {
    if (event.propertyName.includes("flex")) {
      panelRef.current[key]?.classList.toggle("open-active");
    }
  };

  return (
    <>
      <div className="panels">
        <div
          className="panel"
          ref={(element) => {
            panelRef.current.panel1 = element;
          }}
          onClick={() => handleOpen("panel1")}
          onTransitionEnd={(event) => handleTransitionEnd(event, "panel1")}
        >
          <p>Hey</p>
          <p>Let's</p>
          <p>Dance</p>
        </div>
        <div
          className="panel"
          ref={(element) => {
            panelRef.current.panel2 = element;
          }}
          onClick={() => handleOpen("panel2")}
          onTransitionEnd={(event) => handleTransitionEnd(event, "panel2")}
        >
          <p>Give</p>
          <p>Take</p>
          <p>Receive</p>
        </div>
        <div
          className="panel"
          ref={(element) => {
            panelRef.current.panel3 = element;
          }}
          onClick={() => handleOpen("panel3")}
          onTransitionEnd={(event) => handleTransitionEnd(event, "panel3")}
        >
          <p>Experience</p>
          <p>It</p>
          <p>Today</p>
        </div>
        <div
          className="panel"
          ref={(element) => {
            panelRef.current.panel4 = element;
          }}
          onClick={() => handleOpen("panel4")}
          onTransitionEnd={(event) => handleTransitionEnd(event, "panel4")}
        >
          <p>Give</p>
          <p>All</p>
          <p>You can</p>
        </div>
        <div
          className="panel"
          ref={(element) => {
            panelRef.current.panel5 = element;
          }}
          onClick={() => handleOpen("panel5")}
          onTransitionEnd={(event) => handleTransitionEnd(event, "panel5")}
        >
          <p>Life</p>
          <p>In</p>
          <p>Motion</p>
        </div>
      </div>
      <DemoNoteButtons challengeId={challengeId || "5"} buttonName="Note" />
    </>
  );
};

export default Demo;
