import { MdReplay } from 'react-icons/md';
import './css/GameStatus.scss'

function GameStatus({ currentVerb, playAgain }) {
  if (!currentVerb) return (
    <div className="status-container">
      <h1 className='game-over-heading'>Game Over!</h1>
      <button onClick={playAgain}>
        <MdReplay />
        <span style={{ marginLeft: ".5rem" }}>Play Again</span>
      </button>
    </div>
  )
}

export default GameStatus