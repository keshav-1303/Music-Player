
import React from 'react';
import Song from './Song';

const Playlist = ({ songs, currentSongIndex, onSongSelect }) => {
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      {songs.map((song, index) => (
        <div key={index} onClick={() => onSongSelect(index)}>
          <Song
            song={song}
            isCurrent={index === currentSongIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default Playlist;
