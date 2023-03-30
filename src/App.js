import { useState } from 'react';
import './App.css';
import Verb from './Verb'

function App() {
  let data = { infinitive: "hablar", tense: "present", person: "yo", answer: "hablo" };

  const [verb, setVerb] = useState(data)
  const [status, setStatus] = useState()

  const handleGuess = () => {
    const answer = document.getElementById("answer").value

    answer === data.answer ? setStatus("Correct!") : setStatus("Try Again")
  }

  const handleKeyDown = (event) => { if (event.key === 'Enter') handleGuess() }

  return (
    <div className="App">
      <header className="App-header">

        <h1>{status}</h1>

        <Verb verb={verb}/>

        <div>
          <input placeholder="answer" id="answer" onKeyDown={handleKeyDown}/>
        </div>
      </header>
    </div>
  );
}

export default App;
