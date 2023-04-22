import { useState } from 'react';
import Verb from './../components/Verb'
import AnswerBox from './../components/AnswerBox';
import PostGameReport from './../components/PostGameReport';
import GameStatus from './../components/GameStatus';
import ProgressBar from './../components/ProgressBar';
import selectVerbs from './data/verbs'


function Game({ gameInProgress, setGameInProgress, subjects, tenses, numberOfQuestions }) {
  const [verbs, setVerbs] = useState([])
  const [currentVerb, setCurrentVerb] = useState(undefined)
  const [input, setInput] = useState("")

  const handleGuess = () => {
    const verbWithAnswer = { ...currentVerb, givenAnswer: input, correct: input === currentVerb.answer, completed: true }
    const newVerbs = verbs.map((verb) => verb.answer === verbWithAnswer.answer ? verbWithAnswer : verb)
    setVerbs(newVerbs)
    setCurrentVerb(verbWithAnswer)

    const animate = setTimeout(() => {
      setCurrentVerb({ ...currentVerb, animateClass: "animate-slide-out" })
    }, 1000)

    setNextVerb(newVerbs)

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
    }, 1500)

    return () => clearTimeout(next)
  }

  const handleKeyDown = (event) => { if (event.key === 'Enter' && input !== "") handleGuess() }
  const handleInputChange = (event) => { setInput(event.target.value); }

  const startGame = () => {
    if(tenses.length > 0 && subjects.length > 0) {
      const newVerbs = selectVerbs(subjects, tenses, numberOfQuestions)
      setVerbs(newVerbs);
      setCurrentVerb({ ...newVerbs[0], animateClass: "animate-slide-in" });
      setGameInProgress(true);
    } else {
      alert("Foo")
    }
  }

  return (
    <>
      <GameStatus gameInProgress={gameInProgress} startGame={startGame} />

      <ProgressBar verbs={verbs} questionsCount={numberOfQuestions} currentVerb={currentVerb} />

      <Verb verb={currentVerb} />

      {currentVerb ?
        <AnswerBox input={input} setInput={setInput} handleInputChange={handleInputChange} handleKeyDown={handleKeyDown} /> :
        <PostGameReport answers={verbs} />
      }
    </>
  )
}

export default Game;