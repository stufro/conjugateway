import { useRef } from "react";
import SpecialCharacter from "./SpecialCharacter";
import "./css/AnswerBox.scss"

const specialCharacters = ["á", "é", "í", "ó", "ñ"]

function AnswerBox({ input, setInput, handleInputChange, handleGuess, setAnswerSubmitted }) {
  const inputRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && input !== "") {
      handleGuess()
      setAnswerSubmitted(true)
    }
  }

  return (
    <>
      <div className="input-container">
        <input
          type="text" ref={inputRef} autoComplete="off" autoCorrect="off" autoCapitalize="off"
          className="answer-box" placeholder="Press Enter to Answer" id="answer"
          value={input} onChange={handleInputChange} onKeyDown={handleKeyDown}
        />
      </div>

      <div className="special-character-toolbar">
        {specialCharacters.map((char) => <SpecialCharacter key={char} character={char} input={input} inputRef={inputRef} setInput={setInput}/>)}
      </div>
    </>
  )
}

export default AnswerBox;