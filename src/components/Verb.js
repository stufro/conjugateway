import './css/Verb.scss'
import { FaClock } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs'

function Verb({ verb }) {
  if (verb === undefined) {
    return null
  }

  return (
    <div className='verb-container'>
      <h2>{verb.infinitive}</h2>

      <div className='verb-descriptors'>
        <div className='badge'>
          <FaClock />
          <span>{verb.tense}</span>
        </div>

        <div className='badge'>
          <BsFillPersonFill />
          <span>{verb.person}</span>
        </div>
      </div>

      <div>
      </div>
    </div>
  )
}

export default Verb;