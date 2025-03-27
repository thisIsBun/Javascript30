import "./style.css";
import video from "./652333414.mp4";
import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";
import { useEffect, useRef, useState } from "react";

const Demo = () => {
  const { challengeId } = useParams();
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlay, setIsPlay] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [percent, setPercent] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

  const handleToggle = () => {
    if (videoRef.current) {
      videoRef.current[isPlay ? "pause" : "play"]();
      setIsPlay(!isPlay);
    }
  };

  const handleSlider = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "volume" | "playbackRate",
  ) => {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value);

    if (videoRef.current) {
      if (type === "volume") {
        videoRef.current.volume = value;
        setVolume(value);
      } else if (type === "playbackRate") {
        videoRef.current.playbackRate = value;
        setPlaybackRate(value);
      }
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setPercent(progress);
    }
  };

  const handleSkip = (skipTime: number) => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime + skipTime;
      videoRef.current.currentTime = time;
    }
  };

  const handleDragProgress = (event: React.MouseEvent) => {
    if (progressRef.current && videoRef.current) {
      const progress =
        (event.clientX - progressRef.current.getBoundingClientRect().left) /
        progressRef.current.offsetWidth;

      videoRef.current.currentTime = progress * videoRef.current.duration;
    }
  };

  useEffect(() => {
    if (percent === 100) {
      setIsPlay(false);
    }
  }, [percent]);

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="player">
          <video
            className="player__video"
            src={video}
            ref={videoRef}
            onTimeUpdate={handleProgress}
            onClick={handleToggle}
            title={isPlay ? "Play" : "Pause"}
          />

          <div className="player__controls">
            <div
              ref={progressRef}
              className="progress"
              onMouseDown={() => setIsDrag(true)}
              onMouseUp={() => setIsDrag(false)}
              onMouseMove={(event) => {
                if (isDrag) {
                  handleDragProgress(event);
                }
              }}
              onClick={handleDragProgress}
            >
              <div
                className="progress__filled"
                style={{ flexBasis: `${percent}%` }}
              ></div>
            </div>
            <button
              className="player__button"
              title="Toggle Play"
              onClick={handleToggle}
            >
              {isPlay ? "❚ ❚" : "►"}
            </button>
            <input
              type="range"
              name="volume"
              className="player__slider"
              min={0}
              max={1}
              step={0.05}
              value={volume}
              onChange={(event) => {
                handleSlider(event, "volume");
              }}
              title="Change Volume"
            />
            <input
              type="range"
              name="playbackRate"
              className="player__slider"
              min={0.5}
              max={2}
              step={0.1}
              value={playbackRate}
              onChange={(event) => {
                handleSlider(event, "playbackRate");
              }}
              title="Change Playback Rate"
            />
            <button
              data-skip="-10"
              className="player__button"
              onClick={() => handleSkip(-10)}
            >
              « 10s
            </button>
            <button
              data-skip="25"
              className="player__button"
              onClick={() => handleSkip(25)}
            >
              25s »
            </button>
          </div>
        </div>
      </div>
      <DemoNoteButtons challengeId={challengeId || "11"} buttonName="Note" />
    </>
  );
};

export default Demo;
