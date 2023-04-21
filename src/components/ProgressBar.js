import "./css/ProgressBar.scss"
import ReactProgressBar from "@ramonak/react-progress-bar"

function ProgressBar({ verbs, questionsCount, currentVerb }) {
  if (!currentVerb) return null

  const answersGiven = verbs.filter((answer) => answer.completed === true).length

  return (
    <div style={{ width: "50%", marginBottom: "2em", marginTop: "2em" }}>
      <ReactProgressBar completed={answersGiven} maxCompleted={questionsCount} customLabel={`${answersGiven}/${questionsCount}`} />
    </div>
  )
}

export default ProgressBar