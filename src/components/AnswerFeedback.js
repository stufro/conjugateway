import './css/AnswerFeedback.scss'

function AnswerFeedback({ verb, answerSubmitted }) {
  return (
    <div className="answer-feedback">
      { (answerSubmitted === true && verb.correct === false) ? <span>Correct Answer: <span className='correct-answer'>{verb.answer}</span></span> : null }
    </div>
  )
}

export default AnswerFeedback