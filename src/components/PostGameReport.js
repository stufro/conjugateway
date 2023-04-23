import Verb from './Verb';
import './css/PostGameReport.scss'

function PostGameReport({ answers }) {
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

  return (
    <div>
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