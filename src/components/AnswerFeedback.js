import './css/AnswerFeedback.scss'

function AnswerFeedback({ verb, answerSubmitted }) {
  if (verb === undefined) return null;

  return (
    <div className="answer-feedback">
      { (answerSubmitted === true && verb.correct === false) ? <span>Correct Answer: <span className='correct-answer'>{verb.answer}</span></span> : null }
    </div>
  )
}

export default AnswerFeedback