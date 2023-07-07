import { useState } from "react";
import audios from "../constants/audios";
import DrumPad from "./DrumPad";
import "./css/Drum.css";

const Drum = () => {
  const [audioName, setAudioName] = useState(null);

  return (
    <div id="drum-machine">
      <div id="drum-pad-box">
        {audios.map((e) => (
          <DrumPad key={e.name} audio={e} setAudioName={setAudioName} />
        ))}
      </div>
      <div id="display">{audioName}</div>
    </div>
  );
};

export default Drum;
