import { useState } from "react";
import "./css/DrumPad.css";

const DrumPad = ({ audio, setAudioName }) => {
  const sound = new Audio(audio.src);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setAudioName(audio.name);
    sound.play();
    setTimeout(() => setClicked(false), 100);
  };

  return (
    <div
      className="drum-pad"
      onClick={handleClick}
      style={{ backgroundColor: clicked ? "orange" : "rgb(168, 167, 167)" }}
    >
      {audio.key}
    </div>
  );
};

export default DrumPad;
