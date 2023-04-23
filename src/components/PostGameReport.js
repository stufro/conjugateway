import Verb from './Verb';
import './css/PostGameReport.scss'

function PostGameReport({ answers }) {
  if (answers.length === 0) return null;

  const results = (answer) => {
    if (answer.correct) {
      return (
        <div className="answer">
          <span></span>
          <div>
            <b>Answer: </b>
            <span className='correct-answer'>{answer.givenAnswer}</span>
          </div>
          <span></span>
        </div>
      )
    }

    return (
      <div className="answer">
        <div>
          <b>Your Answer: </b>
          <span className='incorrect-answer'>{answer.givenAnswer}</span>
        </div>
        <div>
          <b>Correct Answer: </b>
          <span className='correct-answer'>{answer.answer}</span>
        </div>
      </div>
    )
  }

  const correctAnswers = () => {
    return answers.reduce((acc, answer) => {
      return acc + (answer.correct ? 1 : 0);
    }, 0);
  }

  return (
    <div>
      <div className='correct-count'>
        You got {correctAnswers()} out of {answers.length} correct!
      </div>

      <div className='report-container'>
        {answers.map((answer) => {
          return (
            <div key={answer.answer}>
              <Verb verb={answer} />

              {results(answer)}
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default PostGameReport;