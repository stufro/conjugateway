import { useState } from 'react';
import './App.scss';
import './theme.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './pages/Game';
import Settings from './pages/Settings';

function App() {
  const [gameInProgress, setGameInProgress] = useState(false)
  const [tenses, setTenses] = useState({ "present": true, "preterite": true, "imperfect": true, "conditional": true, "future": true, "present perfect": true })
  const [subjects, setSubjects] = useState({ "yo": true, "tù": true, "él/ella": true, "nosotros": true, "ellos/ellas": true, "vosotros": true })
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);

  const chosenOptions = (items) => {
    const chosen = Object.entries(items).filter((item) => item[1] === true)
    return chosen.map((keyValue) => keyValue[0])
  }

  return (
    <div className="app-container">
      <Header />

      <div className='game-container'>
        <Settings gameInProgress={gameInProgress} tenses={tenses} setTenses={setTenses} subjects={subjects} setSubjects={setSubjects} numberOfQuestions={numberOfQuestions} setNumberOfQuestions={setNumberOfQuestions} />
        <Game gameInProgress={gameInProgress} setGameInProgress={setGameInProgress} subjects={chosenOptions(subjects)} tenses={chosenOptions(tenses)} numberOfQuestions={numberOfQuestions} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
