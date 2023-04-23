import "./css/ProgressBar.scss"
import ReactProgressBar from "@ramonak/react-progress-bar"

function ProgressBar({ verbs, questionsCount, currentVerb }) {
  if (!currentVerb) return null

  const answersGiven = verbs.filter((answer) => answer.completed === true).length

  return (
    <div style={{ width: "90%", marginBottom: "2rem", marginTop: "2rem" }}>
      <ReactProgressBar completed={answersGiven} maxCompleted={parseInt(questionsCount)} customLabel={`${answersGiven}/${questionsCount}`} />
    </div>
  )
}

export default ProgressBar