import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";
import { useEffect, useMemo, useRef } from "react";

const walk = 300;

const throttle = (callback: (event: MouseEvent) => void, delay: number) => {
  let lastCall = 0;
  return (event: MouseEvent) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      callback(event);
      lastCall = now;
    }
  };
};

const Demo = () => {
  const { challengeId } = useParams();
  const divRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!divRef.current) return;
    const { offsetWidth: width, offsetHeight: height } = divRef.current;
    let { offsetX: x, offsetY: y } = e;

    // if cursor on h1 element, x and y will be 0px, so need to add top and left
    if (e.target !== divRef.current) {
      const { offsetTop: top, offsetLeft: left } = e.target as HTMLElement;
      x = x + left;
      y = y + top;
    }

    const xWalk = Math.round((x * walk) / width - walk / 2);
    const yWalk = Math.round((y * walk) / height - walk / 2);

    if (h1Ref.current) {
      h1Ref.current.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
      `;
    }
  };

  const mouseMoveThrottle = useMemo(() => {
    return throttle(handleMouseMove, 20);
  }, []);

  useEffect(() => {
    const div = divRef.current;
    if (div) {
      div.addEventListener("mousemove", mouseMoveThrottle);
    }

    return () => {
      div?.removeEventListener("mousemove", mouseMoveThrottle);
    };
  }, [mouseMoveThrottle]);

  return (
    <>
      <div
        className="flex min-h-screen items-center justify-center"
        ref={divRef}
      >
        <h1
          contentEditable
          suppressContentEditableWarning
          className="text-8xl"
          ref={h1Ref}
        >
          🔥WOAH!
        </h1>
      </div>
      <DemoNoteButtons challengeId={challengeId || "16"} buttonName="Note" />
    </>
  );
};

export default Demo;
