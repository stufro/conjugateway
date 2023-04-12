import './css/Verb.scss'
import './../../src/animations.scss'
import { FaClock, FaTimesCircle } from 'react-icons/fa';
import { BsFillPersonFill, BsFillCheckCircleFill } from 'react-icons/bs'

function Verb({ verb }) {
  const overlayClass = () => {
    if (verb.correct === true) return "overlay correct";
    if (verb.correct === false) return "overlay incorrect";
  }

  const overlayIcon = () => {
    if (verb.correct === true) return <BsFillCheckCircleFill />;
    if (verb.correct === false) return <FaTimesCircle />;
  }

  if (verb === undefined) {
    return null;
  }

  return (
    <div className={`overlay-container ${verb.animateClass}`}>
      <div className={overlayClass()}>
        <span className='icon'>{overlayIcon()}</span>
      </div>

      <div className={`verb-container`}>
        <div>
          <h2 style={{ marginBottom: "0" }}>{verb.infinitive}</h2>
          <span className='translation'>{verb.infinitive_english}</span>
        </div>

        <div className='verb-descriptors'>
          <div className='badge'>
            <FaClock />
            <span>{verb.tense_english}</span>
          </div>

          <div className='badge'>
            <BsFillPersonFill />
            <span>{verb.subject}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verb;