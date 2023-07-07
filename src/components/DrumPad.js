import "./css/DrumPad.css";

const DrumPad = ({ audio, setAudioName }) => {
  const sound = new Audio(audio.src);

  const handleClick = () => {
    setAudioName(audio.name);
    sound.play();
  };

  return (
    <div className="drum-pad" onClick={handleClick}>
      {audio.key}
    </div>
  );
};

export default DrumPad;
