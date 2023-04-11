import { useRef } from "react";
import "./css/AnswerBox.scss"

const specialCharacters = ["á", "é", "í", "ó", "ñ"]

function AnswerBox({ input, setInput, handleInputChange, handleKeyDown }) {
  const inputRef = useRef(null);

  const handleSpecialCharacter = (character) => {
    setInput(input + character)
    inputRef.current.focus()
  }

  const renderSpecialCharacters = () => {
    return specialCharacters.map((character) => {
      return (
        <div key={character} className="special-character" onClick={() => handleSpecialCharacter(character)}>
          {character}
        </div>
      )
    })
  }

  return (
    <>
      <div className="input-container">
        <input type="text" ref={inputRef} autoComplete="off" className="answer-box" placeholder="Press Enter to Answer" id="answer" value={input} onChange={handleInputChange} onKeyDown={handleKeyDown} />
      </div>

      <div className="special-character-toolbar">
        {renderSpecialCharacters()}
      </div>
    </>
  )
}

export default AnswerBox;