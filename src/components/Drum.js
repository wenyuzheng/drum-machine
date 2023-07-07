import { useState } from "react";
import audios from "../constants/audios";
import DrumPad from "./DrumPad";

const Drum = () => {
  const [audioName, setAudioName] = useState(null);

  return (
    <div id="drum-machine">
      {audios.map((e) => (
        <DrumPad key={e.name} audio={e} setAudioName={setAudioName} />
      ))}
      <div id="display">{audioName}</div>
    </div>
  );
};

export default Drum;
