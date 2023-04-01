function PostGameReport({ playAgain, answers }) {
  const result = (answer) => {
    if (answer.correct) {
      return (
        <div>✅</div>
      )
    } else {
      return (
        <div>
          <div>
            <b>Your Answer:</b>
            <span>{answer.givenAnswer}</span>
          </div>
          <div>
            <b>Correct Answer:</b>
            <span>{answer.answer}</span>
          </div>
          <div>❌</div>
        </div>
      )
    }
  }

  const answersReport = () => {
    return answers.map((answer) => {
      return (
        <div>
          <div>
            <b>verb: </b>
            <span>{answer.infinitive}</span>
          </div>

          <div>
            <b>tense: </b>
            <span>{answer.tense}</span>
          </div>

          <div>
            <b>person: </b>
            <span>{answer.person}</span>
          </div>

          {result(answer)}
        </div>
      )
    })
  }

  return (
    <div>
      <button onClick={playAgain}>Play Again</button>

      {answersReport()}
    </div>
  )
}

export default PostGameReport;