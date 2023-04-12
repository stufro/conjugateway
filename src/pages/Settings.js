import '../App.scss'

function Settings({ setOpenGame, tenses, setTenses, actors, setActors }) {
  const renderOptions = (items, type) => {
    return Object.entries(items).map((item) => {
      return (
        <div className='settings-option' key={item} style={{display: "flex"}}>
          <input id={item[0]} key={`input-${item[0]}`} type="checkbox" checked={item[1]} onChange={(event) => { updateOptions(event, type, items) }}></input>
          <label key={`label-${item[0]}`} htmlFor={item[0]}>{item[0]}</label>
        </div>
      )
    })
  }

  const updateOptions = (event, type, items) => {
    const newOptions = { ...items }
    newOptions[event.target.id] = !newOptions[event.target.id]

    type === "tenses" ? setTenses(newOptions) : setActors(newOptions)
  }

  const toggleAll = (items) => {
    const boolean = !Object.values(items)[0]
    return Object.fromEntries(Object.keys(items).map(key => [key, boolean]))
  }

  return (
    <>
      <br/>
      <h2><button className="primary-button" onClick={setOpenGame}>Start!</button></h2>

      <div className='settings'>
        <div className='settings-section'>
          <h3>Tenses</h3>
          <button onClick={() => { setTenses(toggleAll(tenses)) }}>Toggle All</button>
          {renderOptions(tenses, "tenses")}
        </div>

        <div className='settings-section'>
          <h3>Actors</h3>
          <button onClick={() => { setActors(toggleAll(actors)) }}>Toggle All</button>
          {renderOptions(actors, "actors")}
        </div>
      </div>
    </>
  )
}

export default Settings;