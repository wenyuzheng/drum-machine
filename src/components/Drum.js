import { useState } from "react";
import audios from "../constants/audios";
import DrumPad from "./DrumPad";
import "./css/Drum.css";
import VolumeSlider from "./VolumeSlider";

const Drum = () => {
  const [audioName, setAudioName] = useState(null);
  const [volume, setVolume] = useState(50);

  return (
    <div id="drum-machine">
      <div id="drum-pad-box">
        {audios.map((e) => (
          <DrumPad
            key={e.name}
            audio={e}
            setAudioName={setAudioName}
            volume={volume}
          />
        ))}
      </div>
      <div id="controller-box">
        <div id="display">{audioName}</div>
        <VolumeSlider volume={volume} setVolume={setVolume} />
      </div>
    </div>
  );
};

export default Drum;
