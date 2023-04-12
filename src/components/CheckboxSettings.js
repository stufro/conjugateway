// import './css/CheckboxPanel.scss'

function CheckboxSettings({ setState, items }) {
  const updateOptions = (event, items) => {
    const newOptions = { ...items }
    newOptions[event.target.id] = !newOptions[event.target.id]

    setState(newOptions)
  }

  return (
    Object.entries(items).map((item) => {
      return (
        <div className='settings-option' key={item} style={{display: "flex"}}>
          <input id={item[0]} key={`input-${item[0]}`} type="checkbox" checked={item[1]} onChange={(event) => { updateOptions(event, items) }}></input>
          <label key={`label-${item[0]}`} htmlFor={item[0]}>{item[0]}</label>
        </div>
      )
    })
  )
}

export default CheckboxSettings