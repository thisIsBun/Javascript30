import { useEffect, useRef, useState } from "react";
import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const secretCode = "↑↑↓↓←→←→ba";

const keyTable = {
  ArrowUp: "↑",
  ArrowDown: "↓",
  ArrowLeft: "←",
  ArrowRight: "→",
  B: "b",
  A: "a",
};

const Demo = () => {
  const { challengeId } = useParams();
  const [counter, setCounter] = useState<number>(0);
  const pressed = useRef<string[]>([]);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      pressed.current.push(
        keyTable[event.key as keyof typeof keyTable] || event.key,
      );

      if (pressed.current.length > secretCode.length) {
        pressed.current.splice(0, pressed.current.length - secretCode.length);
      }

      if (pressed.current.join("") === secretCode) {
        setCounter((prev) => prev + 1);
      }
    };
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <h2 className="text-5xl">Konami code counter</h2>
        <p>Try typing: ↑ ↑ ↓ ↓ ← → ← → B A</p>
        <p>You have correctly typed {counter} time(s)!</p>
      </div>
      <DemoNoteButtons challengeId={challengeId || "12"} buttonName="Note" />
    </>
  );
};

export default Demo;
