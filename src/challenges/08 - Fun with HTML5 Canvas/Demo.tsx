import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";
import { useEffect, useRef, useState } from "react";

const Demo = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [hue, setHue] = useState(0);
  const { challengeId } = useParams();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx = useRef<CanvasRenderingContext2D>(null);
  const directionRef = useRef(true);

  useEffect(() => {
    if (!canvasRef.current) return;
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    ctx.current = canvasRef.current.getContext("2d");
    if (!ctx.current) return;
    ctx.current.lineJoin = "round";
    ctx.current.lineCap = "round";
    ctx.current.lineWidth = 100;
  }, []);

  useEffect(() => {
    if (!ctx.current) return;
    ctx.current.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  }, [hue]);

  const handleDraw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctx.current) return;
    ctx.current.beginPath();
    ctx.current.moveTo(lastPosition.x, lastPosition.y);
    ctx.current.lineTo(event.clientX, event.clientY);
    ctx.current.stroke();
    setLastPosition({ x: event.clientX, y: event.clientY });

    setHue((prev) => (prev >= 360 ? 0 : prev + 1));

    if (ctx.current.lineWidth >= 100 || ctx.current.lineWidth <= 1) {
      directionRef.current = !directionRef.current;
    }

    if (directionRef.current) {
      ctx.current.lineWidth++;
    } else {
      ctx.current.lineWidth--;
    }
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        width="800"
        height="800"
        onMouseMove={handleDraw}
        onMouseDown={(event) => {
          setIsDrawing(true);
          setLastPosition({ x: event.clientX, y: event.clientY });
        }}
        onMouseUp={() => setIsDrawing(false)}
        onMouseOut={() => setIsDrawing(false)}
      ></canvas>
      <DemoNoteButtons challengeId={challengeId || "8"} buttonName="Note" />
    </>
  );
};

export default Demo;
