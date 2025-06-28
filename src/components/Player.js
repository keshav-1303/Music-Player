
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ currentSong, onNext, onPrev }) => {
  return (
    <div className="player">
      <div className="song-details">
        <img src={currentSong.album.cover_medium} alt={currentSong.album.title} />
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist.name}</p>
      </div>
      <AudioPlayer
        autoPlay
        src={currentSong.preview}
        onEnded={onNext}
        showSkipControls={true}
        onClickNext={onNext}
        onClickPrevious={onPrev}
      />
    </div>
  );
};

export default Player;
