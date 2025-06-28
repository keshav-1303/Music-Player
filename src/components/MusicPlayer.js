
import React, { useState, useEffect } from 'react';
import Playlist from './Playlist';
import Player from './Player';

const MusicPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          '/chart/0/tracks'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch songs');
        }
        const data = await response.json();
        setSongs(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePrevSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="music-player">
      <Playlist songs={songs} currentSongIndex={currentSongIndex} onSongSelect={handleSongSelect} />
      {songs.length > 0 && (
        <Player
          currentSong={songs[currentSongIndex]}
          onNext={handleNextSong}
          onPrev={handlePrevSong}
        />
      )}
    </div>
  );
};

export default MusicPlayer;
