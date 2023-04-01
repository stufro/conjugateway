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
  const [status, setStatus] = useState()
  const [answer, setAnswer] = useState("")
  const [answers, setAnswers] = useState([])

  const handleGuess = () => {
    if (answer === currentVerb.answer) {
      setStatus("Correct!")
    } else {
      setStatus("Incorrect")
    }
    setAnswers([...answer, { infinitive: currentVerb.infinitive, correctAnswer: currentVerb.answer, givenAnswer: answer, correct: answer === currentVerb.answer }])

    setVerbs(verbs.filter((verb) => {
      return verb.id !== currentVerb.id
    }))
  }

  useEffect(() => {
    setTimeout(() => {
      setStatus()
      setAnswer("")

      const nextVerb = verbs[0]
      setCurrentVerb(nextVerb)
      if(!nextVerb) {
        setStatus("Game Over!")
      }
    }, 1000)
  }, [verbs])

  const handleKeyDown = (event) => { if (event.key === 'Enter') handleGuess() }
  const handleInputChange = (event) => { setAnswer(event.target.value); }

  return (
    <div className="App">
      <header className="App-header">

        <h1>{status}</h1>

        <Verb verb={currentVerb} />

        <div>
          <input placeholder="answer" id="answer" value={answer} onChange={handleInputChange} onKeyDown={handleKeyDown} />
        </div>
      </header>
    </div>
  );
}

export default App;
