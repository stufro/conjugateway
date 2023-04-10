import { useState } from 'react';
import Verb from './../components/Verb'
import AnswerBox from './../components/AnswerBox';
import PostGameReport from './../components/PostGameReport';
import GameStatus from './../components/GameStatus';
import ProgressBar from './../components/ProgressBar';

function Game() {
  let data = [
    { id: 1, infinitive: "hablar", translation: "to speak", tense: "present", person: "yo", answer: "hablo", correct: null },
    { id: 2, infinitive: "comer", translation: "to eat", tense: "preterite", person: "ellos", answer: "comeron", correct: null },
    { id: 3, infinitive: "jugar", translation: "to play", tense: "imperfect", person: "tu", answer: "jugabas", correct: null }
  ];

  const [verbs, setVerbs] = useState(data)
  const [currentVerb, setCurrentVerb] = useState({ ...data[0], animateClass: "animate-slide-in" })
  const [input, setInput] = useState("")
  const [answers, setAnswers] = useState([])

  const handleGuess = () => {
    setAnswers([...answers, { ...currentVerb, givenAnswer: input, correct: input === currentVerb.answer }])
    setCurrentVerb({ ...currentVerb, correct: input === currentVerb.answer })

    const newVerbs = verbs.filter(verb => verb.id !== currentVerb.id )
    setVerbs(newVerbs)

    const animate = setTimeout(() => {
      setCurrentVerb({ ...currentVerb, animateClass: "animate-slide-out" })
    }, 1000)

    nextVerb(newVerbs)

    return () => clearTimeout(animate)
  }

  const nextVerb = (verbs) => {
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
    setVerbs(data);
    setCurrentVerb(data[0]);
    setAnswers([]);
  }

  return (
    <>
      <GameStatus currentVerb={currentVerb} playAgain={playAgain} />

      <ProgressBar answers={answers} data={data} currentVerb={currentVerb} />

      <Verb verb={currentVerb} />

      {currentVerb ?
        <AnswerBox input={input} setInput={setInput} handleInputChange={handleInputChange} handleKeyDown={handleKeyDown} /> :
        <PostGameReport answers={answers} />
      }
    </>
  )
}

export default Game;