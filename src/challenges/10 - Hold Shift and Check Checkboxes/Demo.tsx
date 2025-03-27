import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";
import "./style.css";
import { useState, useRef } from "react";

const content = new Array(20).fill(0).map((_, index) => index);

const Demo = () => {
  const { challengeId } = useParams();
  const startRef = useRef<number | null>(null);
  const [checkStatus, setCheckStatus] = useState<boolean[]>(
    new Array(content.length).fill(false),
  );

  const updateCheckedStatus = (start: number, end: number) => {
    const newStatus = [...checkStatus];
    for (let i = start; i <= end; i++) {
      newStatus[i] = true;
    }
    setCheckStatus(newStatus);
  };

  const handleCheck = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const index = Number(target.dataset.index);

    if (startRef.current !== null && event.shiftKey) {
      const start = Math.min(startRef.current, index);
      const end = Math.max(startRef.current, index);
      updateCheckedStatus(start, end);
      return;
    }

    startRef.current = index;
    const newStatus = [...checkStatus];
    newStatus[index] = !newStatus[index];
    setCheckStatus(newStatus);
  };

  return (
    <>
      <div className="inbox text-ocean-900">
        {content.map((item, index) => {
          return (
            <div className="item" key={index}>
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleCheck}
                data-index={index}
                checked={checkStatus[index]}
                readOnly
              />
              <p className="content">{item}</p>
            </div>
          );
        })}
      </div>
      <DemoNoteButtons challengeId={challengeId || "10"} buttonName="Note" />
    </>
  );
};

export default Demo;
