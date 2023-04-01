import { useEffect, useState } from 'react';
import './App.css';
import Verb from './components/Verb'

function App() {
  let data = [
    { id: 1, infinitive: "hablar", tense: "present", person: "yo", answer: "hablo", complete: false },
    { id: 2, infinitive: "comer", tense: "preterite", person: "ellos", answer: "comeron", complete: false }
  ];

  const [verbs, setVerbs] = useState(data)
  const [currentVerb, setCurrentVerb] = useState(data[0])
  const [answer, setAnswer] = useState("")
  const [answers, setAnswers] = useState([])
  const [answerSubmitted, setAnswerSubmitted] = useState(false)

  const handleGuess = () => {
    setAnswerSubmitted(true)
    setAnswers([...answer, { infinitive: currentVerb.infinitive, correctAnswer: currentVerb.answer, givenAnswer: answer, correct: answer === currentVerb.answer }])

    setVerbs(verbs.filter((verb) => {
      return verb.id !== currentVerb.id
    }))
  }

  useEffect(() => {
    setTimeout(() => {
      setAnswer("")
      setAnswerSubmitted(false)

      const nextVerb = verbs[0]
      setCurrentVerb(nextVerb)
    }, 1000)
  }, [verbs])

  const handleKeyDown = (event) => { if (event.key === 'Enter') handleGuess() }
  const handleInputChange = (event) => { setAnswer(event.target.value); }

  const gameStatus = () => {
    if(!currentVerb) return "Game Over!"
    if(answerSubmitted && (answer === currentVerb.answer)) return "Correct!"
    if(answerSubmitted && (answer !== currentVerb.answer)) return "Incorrect!"
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>{gameStatus()}</h1>

        <Verb verb={currentVerb} />

        <div>
          <input placeholder="answer" id="answer" value={answer} onChange={handleInputChange} onKeyDown={handleKeyDown} />
        </div>
      </header>
    </div>
  );
}

export default App;
