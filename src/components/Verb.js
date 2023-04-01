function Verb({verb}) {
  if(verb === undefined) {
    return null
  }

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