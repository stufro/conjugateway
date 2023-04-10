import "./css/ProgressBar.scss"
import ReactProgressBar from "@ramonak/react-progress-bar"

function ProgressBar({ answers, questions, currentVerb }) {
  if (!currentVerb) return null

  return (
    <div style={{ width: "50%", marginBottom: "2em", marginTop: "2em" }}>
      <ReactProgressBar completed={answers.length} maxCompleted={questions} customLabel={`${answers.length}/${questions}`} />
    </div>
  )

}

export default ProgressBar