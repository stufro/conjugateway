function Verb({verb}) {
  return (
    <div>
      <div>
        <b>verb: </b>
        <span>{verb.infinitive}</span>
      </div>

      <div>
        <b>tense: </b>
        <span>{verb.tense}</span>
      </div>

      <div>
        <b>person: </b>
        <span>{verb.person}</span>
      </div>
    </div>
  )
}

export default Verb;