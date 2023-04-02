import './css/Verb.scss'
import { FaClock, FaTimesCircle } from 'react-icons/fa';
import { BsFillPersonFill, BsFillCheckCircleFill } from 'react-icons/bs'

function Verb({ verb }) {
  const overlayClass = () => {
    if (verb.correctAnswerGiven === true) return "overlay correct";
    if (verb.correctAnswerGiven === false) return "overlay incorrect";
  }

  const overlayIcon = () => {
    if (verb.correctAnswerGiven === true) return <BsFillCheckCircleFill />;
    if (verb.correctAnswerGiven === false) return <FaTimesCircle />;

  }

  if (verb === undefined) {
    return null;
  }

  return (
    <div className="overlay-container">
      <div className={overlayClass()}>
        {overlayIcon()}
      </div>

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
    </div>
  )
}

export default Verb;