import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Letter from './components/Letter';
import Pattern from './components/Pattern';
import Player from './components/Player';
import Album from './components/Album';
import Code from './components/Code';
import './App.css';

const App = () => {
  const msg = "Your smile >>>>>";
  
  return (
    <Router>
      <Pattern />
      <div className="root-container">
        <Routes>
          <Route path="/" element={
            <Letter head={'Heyyy hot mess~'}
              para={'Here\'s something special I made for you cutupiee'}
              greet={<Link to="/player">{msg}</Link>}
              sender={'Bluiee'}
              initials={'SK'} />
          } />
          <Route path="/player" element={<Player />} />
          <Route path="/album" element={<Album />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;