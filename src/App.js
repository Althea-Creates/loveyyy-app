import React, { useState, useRef } from 'react';
import Welcome from './components/Welcome';
import Messages from './components/Messages';
import FinalQuestion from './components/FinalQuestion';
import FloatingHearts from './components/FloatingHearts';
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <FloatingHearts />

      {/* Music toggle icon */}
      <div
        className="music-icon"
        onClick={toggleMusic}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMusic();
          }
        }}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </div>

      <audio ref={audioRef} loop>
        <source src={`${process.env.PUBLIC_URL}/those-eyes.mp3`} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>

      {step === 0 && <Welcome onNext={() => setStep(1)} />}
      {step === 1 && <Messages onNext={() => setStep(2)} />}
      {step === 2 && <FinalQuestion />}
    </div>
  );
}

export default App;