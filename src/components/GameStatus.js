import { MdReplay } from 'react-icons/md';
import './css/GameStatus.scss'

function GameStatus({ currentVerb, playAgain, loading }) {
  const buttonContent = () => {
    if (loading) {
      return(<span className='spinner'></span>)
    } else {
      return (
        <>
          <MdReplay />
          <span style={{ marginLeft: ".5rem" }}>Play Again</span>
        </>
      )
    }
  }

  if (!currentVerb) return (
    <div className="status-container">
      <h1 className='game-over-heading'>Game Over!</h1>
      <button className="play-again-button primary-button" onClick={playAgain}>
        {buttonContent()}
      </button>
    </div>
  )
}

export default GameStatus