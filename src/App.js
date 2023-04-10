import { useState } from 'react';
import './App.scss';
import './theme.scss';
import Header from './components/Header';
import Game from './pages/Game';
import Settings from './pages/Settings';

function App() {
  const [openGame, setOpenGame] = useState(false)
  const [tenses, setTenses] = useState({ "present": true, "preterite": true, "imperfect": true, "conditional": true, "future": true })
  const [actors, setActors] = useState({ "yo": true, "tù": true, "él/ella": true, "nosotros": true, "ellos/ellas": true, "vosotros": true })

  return (
    <div className="app-container">
      <Header />

      {openGame ? <Game /> : <Settings setOpenGame={setOpenGame} tenses={tenses} setTenses={setTenses} actors={actors} setActors={setActors} />}
    </div>
  );
}

export default App;
