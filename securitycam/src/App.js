import React, { useState } from 'react';
import Calendar from './components/Calendar';
import VideoPanel from './components/VideoPanel';
import TimelineScrubber from './components/TimelineScrubber';
import './App.css';


import ReactPlayer from 'react-player';

function App() {
  const [videoSrc, setVideoSrc] = useState('');

  const fetchVideo = async () => {
    try {
      const response = await fetch('https://www.youtube.com/watch?v=_39Urs4_jHI&t=111s');
      const blob = await response.blob();
      setVideoSrc(URL.createObjectURL(blob));
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  return (
    <div>
      <h1>Video Player</h1>
      <button onClick={fetchVideo}>Fetch Video</button>
      {videoSrc && <ReactPlayer controls width="600" src={videoSrc} />}
    </div>
  );
}

export default App;