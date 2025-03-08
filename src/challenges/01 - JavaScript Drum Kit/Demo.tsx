import backgroundImage from "./background.jpg";
import { useParams } from "react-router";
import "./style.css";
import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import boom from "./sounds/boom.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tom from "./sounds/tom.wav";
import tink from "./sounds/tink.wav";
import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useRef, useEffect } from "react";

type KeysType = {
  keyCap: string;
  name: string;
  file: string;
};

const keys: readonly KeysType[] = [
  { keyCap: "a", name: "clap", file: clap },
  { keyCap: "s", name: "hihat", file: hihat },
  { keyCap: "d", name: "kick", file: kick },
  { keyCap: "f", name: "openhat", file: openhat },
  { keyCap: "g", name: "boom", file: boom },
  { keyCap: "h", name: "ride", file: ride },
  { keyCap: "j", name: "snare", file: snare },
  { keyCap: "k", name: "tom", file: tom },
  { keyCap: "l", name: "tink", file: tink },
] as const;

const Demo = () => {
  const { challengeId } = useParams<{ challengeId: string }>();
  const keyRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const pressKey = keyRefs.current[event.key.toLowerCase()];
      if (!pressKey) return;
      pressKey.classList.add("playing");
      const audioElement = audioRefs.current[event.key.toLowerCase()];
      if (!audioElement) return;
      audioElement.currentTime = 0;
      audioElement.play();
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const releaseKey = keyRefs.current[event.key.toLowerCase()];
      if (!releaseKey) return;
      releaseKey.classList.remove("playing");
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-bottom"
    >
      <div className="flex min-h-screen flex-1 items-center justify-center">
        {keys.map(({ keyCap, name }) => {
          return (
            <div
              key={keyCap}
              className="m-2.5 w-40 rounded-lg border-4 border-black bg-[rgba(0,0,0,0.4)] px-[5px] py-2.5 text-center text-2xl text-gray-50 transition duration-75"
              ref={(element) => {
                keyRefs.current[keyCap] = element;
              }}
            >
              <kbd className="block text-6xl uppercase">{keyCap}</kbd>
              <span className="text-xl tracking-widest text-yellow-500 uppercase">
                {name}
              </span>
            </div>
          );
        })}
      </div>
      {keys.map(({ keyCap, file }) => (
        <audio
          src={file}
          key={keyCap}
          ref={(element) => {
            audioRefs.current[keyCap] = element;
          }}
        ></audio>
      ))}
      <DemoNoteButtons challengeId={challengeId || "1"} buttonName="Note" />
    </div>
  );
};

export default Demo;
