import { useState } from "react";
import "./css/DrumPad.css";

const DrumPad = ({ audio, setAudioName, volume }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const sound = document.getElementById(audio.key);

    sound.volume = volume / 100;
    setClicked(true);
    setAudioName(audio.name);
    sound.play();

    setTimeout(() => setClicked(false), 100);
  };

  return (
    <div
      id={audio.name}
      className="drum-pad"
      onClick={handleClick}
      style={{ backgroundColor: clicked ? "orange" : "rgb(168, 167, 167)" }}
    >
      {audio.key}
      <audio className="clip" id={audio.key} src={audio.src} />
    </div>
  );
};

export default DrumPad;
