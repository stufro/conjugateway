import { useEffect, useState } from 'react';
import './App.css';
import Verb from './components/Verb'
import AnswerBox from './components/AnswerBox';
import PostGameReport from './components/PostGameReport';

function App() {
  let data = [
    { id: 1, infinitive: "hablar", tense: "present", person: "yo", answer: "hablo" },
    { id: 2, infinitive: "comer", tense: "preterite", person: "ellos", answer: "comeron" }
  ];

  const [verbs, setVerbs] = useState(data)
  const [currentVerb, setCurrentVerb] = useState(data[0])
  const [input, setInput] = useState("")
  const [answers, setAnswers] = useState([])
  const [answerSubmitted, setAnswerSubmitted] = useState(false)

  const handleGuess = () => {
    setAnswerSubmitted(true)
    setAnswers([...answers, { ...currentVerb, givenAnswer: input, correct: input === currentVerb.answer }])

    setVerbs(verbs.filter((verb) => {
      return verb.id !== currentVerb.id
    }))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setInput("")
      setAnswerSubmitted(false)

      const nextVerb = verbs[0]
      setCurrentVerb(nextVerb)
    }, 1000)

    return () => clearTimeout(timer);
  }, [verbs])

  const handleKeyDown = (event) => { if (event.key === 'Enter') handleGuess() }
  const handleInputChange = (event) => { setInput(event.target.value); }

  const gameStatus = () => {
    if (!currentVerb) return "Game Over!"
    if (answerSubmitted && (input === currentVerb.answer)) return "Correct!"
    if (answerSubmitted && (input !== currentVerb.answer)) return "Incorrect!"
    return `${verbs.length} verbs remaining`
  }

  const playAgain = () => {
    setVerbs(data);
    setAnswers([])
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>{gameStatus()}</h1>

        <Verb verb={currentVerb} />

        {currentVerb ?
          <AnswerBox answer={input} handleInputChange={handleInputChange} handleKeyDown={handleKeyDown} /> :
          <PostGameReport playAgain={playAgain} answers={answers} />
        }
      </header>
    </div>
  );
}

export default App;
