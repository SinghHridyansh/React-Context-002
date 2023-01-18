import React from "react";
import Player from "./Player";
import "./Controls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";

function Controls() {
  const music = Player();
  return (
    <div className="controls-main">
      <div className="current">
        <p>{music.currentTrackName}</p>
      </div>
      <div className="buttons-section">
        <div>
          <button className="buttons">
            <FontAwesomeIcon
              icon={faStepBackward}
              onClick={music.playPreviousTrack}
            />
          </button>
        </div>
        <div>
          <button className="buttons" onClick={music.togglePlay}>
            {music.isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
        </div>
        <div>
          <button className="buttons">
            <FontAwesomeIcon
              icon={faStepForward}
              onClick={music.playNextTrack}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Controls;
