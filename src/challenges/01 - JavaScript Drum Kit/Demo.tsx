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

type keysType = {
  keyCap: string;
  name: string;
  file: string;
};

const keys: keysType[] = [
  { keyCap: "a", name: "clap", file: clap },
  { keyCap: "s", name: "hihat", file: hihat },
  { keyCap: "d", name: "kick", file: kick },
  { keyCap: "f", name: "openhat", file: openhat },
  { keyCap: "g", name: "boom", file: boom },
  { keyCap: "h", name: "ride", file: ride },
  { keyCap: "j", name: "snare", file: snare },
  { keyCap: "k", name: "tom", file: tom },
  { keyCap: "l", name: "tink", file: tink },
];

const Demo = () => {
  const { challengeId } = useParams<{ challengeId: string }>();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    event.preventDefault();
    const matchKey = keys.find((key) => key.keyCap === event.key);
    if (!matchKey) return;

    document
      .querySelector(`div[data-key="${matchKey.keyCap}"]`)
      ?.classList.add("playing");

    const audio = document.querySelector(
      `audio[data-key="${matchKey.keyCap}"]`,
    ) as HTMLAudioElement;

    audio.currentTime = 0;
    audio.play();
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    event.preventDefault();

    const matchKey = keys.find((key) => key.keyCap === event.key);
    if (!matchKey) return;

    document
      .querySelector(`div[data-key="${matchKey.keyCap}"]`)
      ?.classList.remove("playing");
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-bottom"
      onKeyDown={(event) => {
        handleKeyDown(event);
      }}
      onKeyUp={(event) => {
        handleKeyUp(event);
      }}
      tabIndex={0}
    >
      <div className="flex min-h-screen flex-1 items-center justify-center">
        {keys.map(({ keyCap, name }) => {
          return (
            <div
              data-key={keyCap}
              key={keyCap}
              className="m-2.5 w-40 rounded-lg border-4 border-black bg-[rgba(0,0,0,0.4)] px-[5px] py-2.5 text-center text-2xl text-gray-50 transition duration-75"
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
        <audio data-key={keyCap} src={file} key={keyCap}></audio>
      ))}
      <DemoNoteButtons challengeId={challengeId || "1"} buttonName="Note" />
    </div>
  );
};

export default Demo;
