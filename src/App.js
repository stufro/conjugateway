import { useEffect, useState } from 'react';
import './App.scss';
import './theme.scss';
import Verb from './components/Verb'
import AnswerBox from './components/AnswerBox';
import PostGameReport from './components/PostGameReport';
import Header from './components/Header';
import ProgressBar from "@ramonak/react-progress-bar";

function App() {
  let data = [
    { id: 1, infinitive: "hablar", tense: "present", person: "yo", answer: "hablo", correctAnswerGiven: null },
    { id: 2, infinitive: "comer", tense: "preterite", person: "ellos", answer: "comeron", correctAnswerGiven: null }
  ];

  const [verbs, setVerbs] = useState(data)
  const [currentVerb, setCurrentVerb] = useState(data[0])
  const [input, setInput] = useState("")
  const [answers, setAnswers] = useState([])
  const [answerSubmitted, setAnswerSubmitted] = useState(false)

  const handleGuess = () => {
    setAnswerSubmitted(true)
    setAnswers([...answers, { ...currentVerb, givenAnswer: input, correct: input === currentVerb.answer }])
    setCurrentVerb({ ...currentVerb, correctAnswerGiven: input === currentVerb.answer })

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
  }

  const playAgain = () => {
    setVerbs(data);
    setAnswers([])
  }

  return (
    <div className="app-container">
      <Header />

      <h1>{gameStatus()}</h1>
      <div style={{ width: "50%", marginBottom: "2em" }}>
        <ProgressBar completed={answers.length} maxCompleted={data.length} customLabel={`${answers.length}/${data.length}`} />
      </div>

      <Verb verb={currentVerb} />

      {currentVerb ?
        <AnswerBox answer={input} handleInputChange={handleInputChange} handleKeyDown={handleKeyDown} /> :
        <PostGameReport playAgain={playAgain} answers={answers} />
      }
    </div>
  );
}

export default App;
