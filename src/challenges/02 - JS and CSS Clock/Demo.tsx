import "./style.css";
import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const getCurrentTime = () => {
  const time = new Date();
  return {
    seconds: time.getSeconds(),
    minutes: time.getMinutes(),
    hours: time.getHours(),
  };
};

const Demo = () => {
  const { challengeId } = useParams<{ challengeId: string }>();
  const [clock, setClock] = useState<{
    seconds: number;
    minutes: number;
    hours: number;
  }>(getCurrentTime);

  const secondsDegree = (clock.seconds / 60) * 360 + 90;
  const minutesDegree = ((clock.minutes + clock.seconds / 60) / 60) * 360 + 90;
  const hoursDegree = ((clock.hours + clock.minutes / 60) / 12) * 360 + 90;

  useEffect(() => {
    const timeId = setInterval(() => setClock(getCurrentTime), 1000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <div className="flex h-screen items-center">
      <div className="clock">
        <div className="clock-face">
          <div
            className="hand"
            style={{ transform: `rotate(${secondsDegree}deg)` }}
          ></div>
          <div
            className="hand"
            style={{ transform: `rotate(${minutesDegree}deg)` }}
          ></div>
          <div
            className="hand"
            style={{ transform: `rotate(${hoursDegree}deg)` }}
          ></div>
        </div>
      </div>
      <DemoNoteButtons challengeId={challengeId || "2"} buttonName="Note" />
    </div>
  );
};

export default Demo;
