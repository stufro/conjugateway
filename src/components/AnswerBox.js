function AnswerBox({ answer, handleInputChange, handleKeyDown }) {
  return (
    <div>
      <input type="text" placeholder="answer" id="answer" value={answer} onChange={handleInputChange} onKeyDown={handleKeyDown} />
    </div>
  )
}

export default AnswerBox;