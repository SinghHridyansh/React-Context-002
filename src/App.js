import React, { createContext, useState } from "react";
import Tracks from "./components/Tracks";
import Controls from "./components/Controls";
import "./App.css";
import { MusicContext } from "./components/MusicContext";

import HanoitoParis from "./Assets/HanoitoParis.mp3";
import OnlyForYourLove from "./Assets/OnlyForYourLove.mp3";
import ShowUp from "./Assets/ShowUp.mp3";
import BadThang from "./Assets/BadThang.mp3";
import BasementDwellers from "./Assets/BasementDwellers.mp3";
import Crown from "./Assets/Crown.mp3";
import Eclipse from "./Assets/Eclipse.mp3";
import FollowYou from "./Assets/FollowYou.mp3";
import Init from "./Assets/Init.mp3";
import Nasty from "./Assets/Nasty.mp3";
import Summer from "./Assets/Summer.mp3";
import Tabasco from "./Assets/Tabasco.mp3";

function App() {
  const [data, setdata] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Florian Picasso - Hanoi To Paris",
        file: HanoitoParis,
      },
      {
        name: "Nicky Romero & Florian Picasso - Only For Your Love",
        file: OnlyForYourLove,
      },
      {
        name: "Virtual Riot - Show Up(feat. Virus Syndicate)",
        file: ShowUp,
      },
      {
        name: "Barely Alive - Bad Thang",
        file: BadThang,
      },
      {
        name: "Barely Alive & Virtual Riot - Basement Dwellers",
        file: BasementDwellers,
      },
      {
        name: "Skrillex & vic Mensa - Crown",
        file: Crown,
      },
      {
        name: "Last Heroes - Eclipse",
        file: Eclipse,
      },
      {
        name: "Au5 - Follow You(Virtual Riot remix)",
        file: FollowYou,
      },
      {
        name: "Virtual Riot - Init",
        file: Init,
      },
      {
        name: "Datsik & Virtual Riot - Nasty",
        file: Nasty,
      },
      {
        name: "Modestep - Summer",
        file: Summer,
      },
      {
        name: "Skrillex - Tabasco",
        file: Tabasco,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });

  return (
    <MusicContext.Provider value={[data, setdata]}>
      <div className="container">
        <div className="heading">
          <div className="playlist-cover">
            <img
              src="https://images.radio.com/aiu-media/Social1200x1200KNRK-081c6444-d686-4149-a530-13a93f9d0d1e.jpg"
              alt="."
            />
          </div>
          <div className="info">
            <h2>Playlist</h2>
            <h1>Perfect Playlist</h1>
          </div>
        </div>
        <Tracks />
        <Controls className="Controls" />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
