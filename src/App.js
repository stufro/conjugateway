import { useState } from 'react';
import './App.css';
import Verb from './Verb'

function App() {
  let data = { id: 1, infinitive: "hablar", tense: "present", person: "yo", answer: "hablo", complete: "false" };

  const [currentVerb, setCurrentVerb] = useState(data)
  const [status, setStatus] = useState()
  // const [correctCount, setCorrectCount] = useState()

  const handleGuess = () => {
    const answer = document.getElementById("answer").value

    if (answer === data.answer) {
      setStatus("Correct!")
      setCurrentVerb({...currentVerb, complete: "true"})
    } else {
      setStatus("Try Again")
    }
  }

  const handleKeyDown = (event) => { if (event.key === 'Enter') handleGuess() }

  return (
    <div className="App">
      <header className="App-header">

        <h1>{status}</h1>

        <Verb verb={currentVerb} />

        <div>
          <input placeholder="answer" id="answer" onKeyDown={handleKeyDown} />
        </div>
      </header>
    </div>
  );
}

export default App;
