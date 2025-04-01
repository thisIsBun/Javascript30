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

type Particles = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
};

const Demo = () => {
  const { challengeId } = useParams();
  const [counter, setCounter] = useState<number>(0);
  const keyHistory = useRef<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const drawFireworks = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const particles: Particles[] = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: width / 2,
        y: height / 2,
        dx: Math.random() * 4 - 2,
        dy: Math.random() * 4 - 2,
        radius: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      });
    }

    const animateFireworks = () => {
      ctx?.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx?.beginPath();
        ctx?.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx?.fill();
        p.x += p.dx;
        p.y += p.dy;
        p.radius *= 0.98;

        if (p.radius < 0.2) {
          particles.splice(i, 1);
          i--;
        }
      }

      if (particles.length > 0) {
        requestAnimationFrame(animateFireworks);
      }
    };

    animateFireworks();
  };

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      keyHistory.current.push(
        keyTable[event.key as keyof typeof keyTable] || event.key,
      );

      if (keyHistory.current.length > secretCode.length) {
        keyHistory.current.splice(
          0,
          keyHistory.current.length - secretCode.length,
        );
      }

      if (keyHistory.current.join("") === secretCode) {
        setCounter((prev) => prev + 1);
        drawFireworks();
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
        <canvas
          ref={canvasRef}
          className="absolute"
          width={400}
          height={400}
          style={{
            top: Math.random() * (window.innerHeight - 400),
            left: Math.random() * (window.innerWidth - 400),
          }}
        ></canvas>
      </div>
      <DemoNoteButtons challengeId={challengeId || "12"} buttonName="Note" />
    </>
  );
};

export default Demo;
