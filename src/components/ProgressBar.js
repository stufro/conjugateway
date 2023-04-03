import "./css/ProgressBar.scss"
import ReactProgressBar from "@ramonak/react-progress-bar"

function ProgressBar({ answers, data, currentVerb }) {
  if (!currentVerb) return null

  return (
    <div style={{ width: "50%", marginBottom: "2em", marginTop: "2em" }}>
      <ReactProgressBar completed={answers.length} maxCompleted={data.length} customLabel={`${answers.length}/${data.length}`} />
    </div>
  )

}

export default ProgressBar