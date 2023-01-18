import React, { useContext } from "react";
import "./Tracks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

import Player from "./Player";

function Tracks() {
  const music = Player();
  console.log("music: ", music);
  return (
    <div className="tracks-container">
      {music.trackList.map((track, index) => (
        <div className="Tracks-main">
          <button className="play" onClick={() => music.playTrack(index)}>
            {music.isPlaying && music.currentTrackIndex === index ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <div className="song-title">{track.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Tracks;
