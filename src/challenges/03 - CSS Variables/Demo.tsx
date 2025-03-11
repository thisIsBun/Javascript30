import { useState, useMemo } from "react";
import { useParams } from "react-router";
import DemoNoteButtons from "../../components/DemoNoteButtons";
import image from "./chiayi.jpg";

const Demo = () => {
  const { challengeId } = useParams<{ challengeId: string }>();
  const [spacing, setSpacing] = useState<number>(10);
  const [blur, setBlur] = useState<number>(10);
  const [base, setBase] = useState<string>("#809ea8");

  const imgStyle = useMemo(() => {
    return {
      padding: `${spacing}px`,
      filter: `blur(${blur}px)`,
      background: base,
    };
  }, [spacing, blur, base]);

  return (
    <>
      <h2 className="my-16 text-center text-7xl font-extrabold">
        Update CSS Variables with <span style={{ color: base }}>JS</span>
      </h2>
      <div className="flex h-[78vh] p-6">
        <div className="flex w-1/4 flex-col justify-around p-12">
          <label htmlFor="spacing" className="text-5xl">
            Spacing:
            <input
              id="spacing"
              type="range"
              min="10"
              max="200"
              value={spacing}
              className="m-3 w-24"
              onChange={(event) => setSpacing(Number(event.target.value))}
            />
          </label>

          <label htmlFor="blur" className="text-5xl">
            Blur:
            <input
              id="blur"
              type="range"
              min="0"
              max="25"
              value={blur}
              className="m-3 w-24"
              onChange={(event) => setBlur(Number(event.target.value))}
            />
          </label>

          <label htmlFor="base" className="text-5xl">
            Base Color
            <input
              id="base"
              type="color"
              value={base}
              className="m-3 w-24"
              onChange={(event) => setBase(event.target.value)}
            />
          </label>
        </div>
        <div className="flex w-3/4 items-center justify-center">
          <img
            src={image}
            style={imgStyle}
            alt="image for Looking towards Chiayi"
          />
        </div>
      </div>
      <DemoNoteButtons challengeId={challengeId || "3"} buttonName="Note" />
    </>
  );
};

export default Demo;
