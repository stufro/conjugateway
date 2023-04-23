import { useState } from 'react';
import Verb from './../components/Verb'
import AnswerBox from './../components/AnswerBox';
import AnswerFeedback from '../components/AnswerFeedback';
import PostGameReport from './../components/PostGameReport';
import GameStatus from './../components/GameStatus';
import ProgressBar from './../components/ProgressBar';
import selectVerbs from './data/verbs'


function Game({ gameInProgress, setGameInProgress, subjects, tenses, numberOfQuestions }) {
  const [verbs, setVerbs] = useState([])
  const [currentVerb, setCurrentVerb] = useState(undefined)
  const [input, setInput] = useState("")
  const [answerSubmitted, setAnswerSubmitted] = useState(false)

  const handleGuess = () => {
    const verbWithAnswer = { ...currentVerb, givenAnswer: input, correct: input.toLowerCase() === currentVerb.answer.toLowerCase(), completed: true }
    const newVerbs = verbs.map((verb) => verb.answer === verbWithAnswer.answer ? verbWithAnswer : verb)
    setVerbs(newVerbs)
    setCurrentVerb(verbWithAnswer)

    const timeoutLength = verbWithAnswer.correct ? 1000 : 2500
    const animate = setTimeout(() => {
      setCurrentVerb({ ...currentVerb, animateClass: "animate-slide-out" })
      setAnswerSubmitted(false)
      setNextVerb(newVerbs)
    }, timeoutLength)

    return () => clearTimeout(animate)
  }

  const setNextVerb = (verbs) => {
    const next = setTimeout(() => {
      setInput("")

      const nextVerb = verbs.find((verb) => verb.completed !== true )
      if(nextVerb) {
        setCurrentVerb({ ...nextVerb, animateClass: "animate-slide-in" })
      } else {
        setCurrentVerb(undefined)
        setGameInProgress(false)
      }
    }, 500)

    return () => clearTimeout(next)
  }

  const handleInputChange = (event) => { setInput(event.target.value); }

  const startGame = () => {
    if(tenses.length > 0 && subjects.length > 0) {
      const newVerbs = selectVerbs(subjects, tenses, numberOfQuestions)
      setVerbs(newVerbs);
      setCurrentVerb({ ...newVerbs[0], animateClass: "animate-slide-in" });
      setGameInProgress(true);
    } else {
      alert("Please select at least 1 tense & 1 subject")
    }
  }

  return (
    <>
      <GameStatus gameInProgress={gameInProgress} startGame={startGame} />

      <ProgressBar verbs={verbs} questionsCount={numberOfQuestions} currentVerb={currentVerb} />

      <Verb verb={currentVerb} />
      <AnswerFeedback verb={currentVerb} answerSubmitted={answerSubmitted} />

      {gameInProgress ?
        <AnswerBox input={input} setInput={setInput} handleInputChange={handleInputChange} handleGuess={handleGuess} setAnswerSubmitted={setAnswerSubmitted}/> :
        <PostGameReport answers={verbs} />
      }
    </>
  )
}

export default Game;