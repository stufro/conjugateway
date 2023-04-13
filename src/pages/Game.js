import { useState } from 'react';
import Verb from './../components/Verb'
import AnswerBox from './../components/AnswerBox';
import PostGameReport from './../components/PostGameReport';
import GameStatus from './../components/GameStatus';
import ProgressBar from './../components/ProgressBar';
import selectVerbs from './data/verbs'

const NUMBER_OF_QUESTIONS = 2;

function Game({ gameInProgress, setGameInProgress, subjects, tenses }) {
  const [verbs, setVerbs] = useState([])
  const [currentVerb, setCurrentVerb] = useState(undefined)
  const [input, setInput] = useState("")
  const [answers, setAnswers] = useState([])

  const handleGuess = () => {
    setAnswers([...answers, { ...currentVerb, givenAnswer: input, correct: input === currentVerb.answer }])
    setCurrentVerb({ ...currentVerb, correct: input === currentVerb.answer })

    const newVerbs = verbs.filter(verb => verb.infinitive !== currentVerb.infinitive)
    setVerbs(newVerbs)

    const animate = setTimeout(() => {
      setCurrentVerb({ ...currentVerb, animateClass: "animate-slide-out" })
    }, 1000)

    setNextVerb(newVerbs)

    return () => clearTimeout(animate)
  }

  const setNextVerb = (verbs) => {
    const next = setTimeout(() => {
      setInput("")

      const nextVerb = verbs[0]
      if(nextVerb) {
        setCurrentVerb({ ...nextVerb, animateClass: "animate-slide-in" })
      } else {
        setCurrentVerb(undefined)
        setGameInProgress(false)
      }
    }, 1500)

    return () => clearTimeout(next)
  }

  const handleKeyDown = (event) => { if (event.key === 'Enter' && input !== "") handleGuess() }
  const handleInputChange = (event) => { setInput(event.target.value); }

  const startGame = () => {
    const newVerbs = selectVerbs(subjects, tenses, NUMBER_OF_QUESTIONS)
    setVerbs(newVerbs);
    setCurrentVerb({ ...newVerbs[0], animateClass: "animate-slide-in" });
    setAnswers([]);
    setGameInProgress(true);
  }

  return (
    <>
      <GameStatus gameInProgress={gameInProgress} startGame={startGame} />

      <ProgressBar answers={answers} questions={NUMBER_OF_QUESTIONS} currentVerb={currentVerb} />

      <Verb verb={currentVerb} />

      {currentVerb ?
        <AnswerBox input={input} setInput={setInput} handleInputChange={handleInputChange} handleKeyDown={handleKeyDown} /> :
        <PostGameReport answers={answers} />
      }
    </>
  )
}

export default Game;