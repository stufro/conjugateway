import { useState } from 'react';
import './App.scss';
import './theme.scss';
import Header from './components/Header';
import Game from './pages/Game';
import Settings from './pages/Settings';

function App() {
  const [openGame, setOpenGame] = useState(false)

  return (
    <div className="app-container">
      <Header />

      {openGame ? <Game /> : <Settings setOpenGame={setOpenGame} />}
    </div>
  );
}

export default App;
