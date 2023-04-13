import './css/GameStatus.scss'

function GameStatus({ gameInProgress, startGame }) {
  if (!gameInProgress) return (
    <div className="status-container">
      <button className="play-again-button primary-button" onClick={startGame}>
        <span style={{ marginLeft: ".5rem" }}>Start Game</span>
      </button>
    </div>
  )
}

export default GameStatus