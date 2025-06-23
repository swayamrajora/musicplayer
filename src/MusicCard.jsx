import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Slider,
  useTheme
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const songs = [
  { name: "Song 1", file: "song1.mp3" },
  { name: "Song 2", file: "song2.mp3" },
  { name: "Song 3", file: "song3.mp3" },
  { name: "Song 4", file: "song4.mp3" },
  { name: "Song 5", file: "song5.mp3" },
  { name: "Song 6", file: "song6.mp3" },
  { name: "Song 7", file: "song7.mp3" },
];

const MusicCard = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const audioRef = useRef(null);
  const theme = useTheme();

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const next = (currentSong + 1) % songs.length;
    setCurrentSong(next);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const prev = (currentSong - 1 + songs.length) % songs.length;
    setCurrentSong(prev);
    setIsPlaying(true);
  };

  const handleVolumeChange = (e, newValue) => {
    setVolume(newValue);
    if (audioRef.current) {
      audioRef.current.volume = newValue / 100;
    }
  };

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 4,
        backgroundColor:"#121212",
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 400,
          bgcolor: '#000',
          color: '#000',
          borderRadius: 3,
          boxShadow: 6,
        }}
      >
        <CardMedia
          component="img"
          height="240"
          image="/album.jpg"
          alt="Album Cover"
        />
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {songs[currentSong].name}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 1 }}>
            <IconButton onClick={handlePrev} sx={{ color: '#fff' }}>
              <SkipPreviousIcon />
            </IconButton>
            <IconButton onClick={handlePlayPause} sx={{ color: '#fff' }}>
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <IconButton onClick={handleNext} sx={{ color: '#fff' }}>
              <SkipNextIcon />
            </IconButton>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Volume
            </Typography>
            <Slider
              value={volume}
              onChange={handleVolumeChange}
              aria-labelledby="volume-slider"
              sx={{ color: '#fff' }}
            />
          </Box>

          <audio
            ref={audioRef}
            src={`/songs/${songs[currentSong].file}`}
            onEnded={handleNext}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default MusicCard;
