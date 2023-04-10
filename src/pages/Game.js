import { useState } from 'react';
import Verb from './../components/Verb'
import AnswerBox from './../components/AnswerBox';
import PostGameReport from './../components/PostGameReport';
import GameStatus from './../components/GameStatus';
import ProgressBar from './../components/ProgressBar';
import data from './data/verbs'

const NUMBER_OF_QUESTIONS = 5;

function Game({ actors, tenses }) {
  const selectVerbs = () => {
    const sample = [];

    while (sample.length < NUMBER_OF_QUESTIONS) {
      const index = Math.floor(Math.random() * data().length);
      const verb = data()[index];
      if (!sample.includes(verb) && tenses.includes(verb.tense_english.toLowerCase())) {
        const actor = actors[Math.floor(Math.random() * actors.length)]
        const answer = verb[actor.replace("/", "-")]
        sample.push({ ...verb, actor: actor, answer: answer });
      }
    }
    return sample
  }

  const [verbs, setVerbs] = useState(() => { return selectVerbs() })
  const [currentVerb, setCurrentVerb] = useState({...verbs[0], animateClass: "animate-slide-in" })
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
      setCurrentVerb(nextVerb ? { ...nextVerb, animateClass: "animate-slide-in" } : undefined)
    }, 1500)

    return () => clearTimeout(next)
  }

  const handleKeyDown = (event) => { if (event.key === 'Enter' && input !== "") handleGuess() }
  const handleInputChange = (event) => { setInput(event.target.value); }

  const playAgain = () => {
    const newVerbs = selectVerbs()
    setVerbs(newVerbs);
    setCurrentVerb(newVerbs[0]);
    setAnswers([]);
  }

  return (
    <>
      <GameStatus currentVerb={currentVerb} playAgain={playAgain} />

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