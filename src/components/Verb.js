import './css/Verb.scss'

function Verb({ verb }) {
  if (verb === undefined) {
    return null
  }

  return (
    <div className='verb-container'>
      <h2>{verb.infinitive}</h2>

      <div className='verb-descriptors'>
        <div className='badge'>
          <i className="fa-solid fa-user"></i>
          <span>{verb.tense}</span>
        </div>

        <div className='badge'>
          <span>{verb.person}</span>
        </div>
      </div>

      <div>
      </div>
    </div>
  )
}

export default Verb;