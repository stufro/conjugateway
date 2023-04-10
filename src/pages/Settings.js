function Settings({ setOpenGame, tenses, setTenses, actors, setActors }) {
  const renderOptions = () => {
    return Object.entries(tenses).map((tense) => {
      return (
        <div key={tense} style={{display: "flex"}}>
          <input id={tense[0]} key={`input-${tense[0]}`} type="checkbox" checked={tense[1]} onChange={updateTenses}></input>
          <label key={`label-${tense[0]}`} htmlFor={tense[0]}>{tense[0]}</label>
        </div>
      )
    })
  }

  const updateTenses = (event) => {
    const newTenses = { ...tenses }
    newTenses[event.target.id] = !newTenses[event.target.id]

    setTenses(newTenses)
  }

  return (
    <>
      <h2>Game Settings</h2>
      <h2><button className="primary-button" onClick={setOpenGame}>Start!</button></h2>


      <div>
        <div>{renderOptions()} </div>
      </div>
    </>
  )
}

export default Settings;