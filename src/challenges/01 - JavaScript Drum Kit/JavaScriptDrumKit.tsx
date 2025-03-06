import backgroundImage from "./background.jpg";
import { NavLink } from "react-router";

type keysType = {
  dataKey: number;
  keyCap: string;
  name: string;
  file: string;
};

const keys: keysType[] = [
  {
    dataKey: 65,
    keyCap: "A",
    name: "clap",
    file: "sounds/clap.wav",
  },
  {
    dataKey: 83,
    keyCap: "S",
    name: "hihat",
    file: "sounds/hihat.wav",
  },
  {
    dataKey: 68,
    keyCap: "D",
    name: "kick",
    file: "sounds/kick.wav",
  },
  {
    dataKey: 70,
    keyCap: "F",
    name: "openhat",
    file: "sounds/openhat.wav",
  },
  {
    dataKey: 71,
    keyCap: "G",
    name: "boom",
    file: "sounds/boom.wav",
  },
  {
    dataKey: 72,
    keyCap: "H",
    name: "ride",
    file: "sounds/ride.wav",
  },
  {
    dataKey: 74,
    keyCap: "J",
    name: "snare",
    file: "sounds/snare.wav",
  },
  {
    dataKey: 75,
    keyCap: "K",
    name: "tom",
    file: "sounds/tom.wav",
  },
  {
    dataKey: 76,
    keyCap: "L",
    name: "tink",
    file: "sounds/tink.wav",
  },
];

const JavaScriptDrumKit = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-bottom"
    >
      <div className="flex min-h-screen flex-1 items-center justify-center">
        {keys.map(({ dataKey, keyCap, name }) => {
          return (
            <div
              data-key={dataKey}
              className="m-2.5 w-40 rounded-lg border-4 border-black bg-[rgba(0,0,0,0.4)] px-[5px] py-2.5 text-center text-2xl text-gray-50 transition duration-75"
            >
              <kbd className="block text-6xl">{keyCap}</kbd>
              <span className="text-xl tracking-widest text-yellow-500 uppercase">
                {name}
              </span>
            </div>
          );
        })}
      </div>
      {keys.map((key) => (
        <audio data-key={key.dataKey} src={key.file}></audio>
      ))}
      <NavLink to="/" className="home-button fixed right-6 bottom-6">
        Go to Home
      </NavLink>
    </div>
  );
};

export default JavaScriptDrumKit;
