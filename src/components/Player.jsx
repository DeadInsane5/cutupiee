import React, { useRef, useState } from "react";
import "./Player.css";
import Pattern from "./Pattern";

const tracks = [
  { name: "Nikat", src: "src/assets/tracks/nikat.mp3", cover: "src/assets/images/nikat.jpg" },
  { name: "Diet Mountain Dew", src: "src/assets/tracks/dmd.mp3", cover: "src/assets/images/DMD.jpg" },
  { name: "Apocalypse", src: "src/assets/tracks/apocalypse.mp3", cover: "src/assets/images/apocalypse.jpg" },
  { name: "Espresso", src: "src/assets/tracks/espresso.mp3", cover: "src/assets/images/espresso.jpg" },
];

const Player = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeTrack = (track) => {
    setCurrentTrack(track);
    if (audioRef.current) {
      audioRef.current.src = track.src;
      audioRef.current.load();
  
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true)) 
          .catch((error) => console.log("Autoplay blocked:", error)); 
      }
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={currentTrack.src} controls />
      <Pattern />
      <div className="player w-260 flex flex-row">
        <div className="playback w-100 m-2 flex flex-col justify-center items-center">
          <img className="w-86 m-2 border rounded-md" src={currentTrack.cover} alt="album-cover" />
          <button className="m-2" onClick={togglePlayback}>
            <img className="w-16" src="src/assets/icons/next-button-svgrepo-com.png" alt="Play/Pause" />
          </button>
        </div>
        <div className="playlist w-80 m-2">
          <ol>
            {tracks.map((track, index) => (
              <li key={index} className="flex flex-row items-center font cursor-pointer" onClick={() => changeTrack(track)}>
                <img className="w-32 m-4" src={track.cover} alt={track.name} />
                <p className="font-bold">{track.name}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Player;
