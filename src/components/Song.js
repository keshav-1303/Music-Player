
import React from 'react';

const Song = ({ song, isCurrent }) => {
  return (
    <div className={`song ${isCurrent ? 'current' : ''}`}>
      <img src={song.album.cover_small} alt={song.album.title} />
      <div className="song-info">
        <p className="song-title">{song.title}</p>
        <p className="song-artist">{song.artist.name}</p>
      </div>
    </div>
  );
};

export default Song;
