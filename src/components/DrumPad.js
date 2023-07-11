import "./css/DrumPad.css";

const DrumPad = ({ audio, setAudioName, volume }) => {
  const handleClick = () => {
    const sound = document.getElementById(audio.key);
    sound.volume = volume / 100;
    setAudioName(audio.name);
    sound.play();

    const pad = document.getElementById(audio.name);
    pad.style.backgroundColor = "orange";
    setTimeout(() => (pad.style.backgroundColor = null), 100);
  };

  return (
    <div id={audio.name} className="drum-pad" onClick={handleClick}>
      {audio.key}
      <audio className="clip" id={audio.key} src={audio.src} />
    </div>
  );
};

export default DrumPad;
