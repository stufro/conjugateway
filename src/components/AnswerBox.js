import "./css/AnswerBox.scss"

function AnswerBox({ answer, handleInputChange, handleKeyDown }) {
  return (
    <div className="input-container">
      <input type="text" autocomplete="off" className="answer-box" placeholder="Press Enter to Answer" id="answer" value={answer} onChange={handleInputChange} onKeyDown={handleKeyDown} />
    </div>
  )
}

export default AnswerBox;