import { Slider } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import "./css/VolumeSlider.css";

const VolumeSlider = ({ volume, setVolume }) => {
  const handleChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div id="slider">
      <VolumeMuteIcon style={{ marginRight: "10px" }} />
      <Slider
        aria-label="Volume"
        onChange={handleChange}
        valueLabelDisplay="auto"
        value={volume}
      />
      <VolumeUpIcon style={{ marginLeft: "10px" }} />
    </div>
  );
};

export default VolumeSlider;
