import Verb from './Verb';
import './css/PostGameReport.scss'

function PostGameReport({ answers }) {
  const result = (answer) => {
    if (answer.correct) return null;

    return (
      <div className="answer-feedback">
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
            <div key={answer.id}>
              <Verb verb={answer} />

              {result(answer)}
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default PostGameReport;