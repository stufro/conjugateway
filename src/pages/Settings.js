import '../App.scss'
import CheckboxSettings from '../components/CheckboxSettings'

function Settings({ gameInProgress, tenses, setTenses, subjects, setSubjects }) {
  if(gameInProgress) return null

  const toggleAll = (items) => {
    const isChecked = !Object.values(items)[0]
    return Object.fromEntries(Object.keys(items).map(key => [key, isChecked]))
  }

  return (
    <>
      <br />

      <div className='settings'>
        <div className='settings-section'>
          <h3>Tenses</h3>
          <button onClick={() => { setTenses(toggleAll(tenses)) }}>Toggle All</button>
          <CheckboxSettings items={tenses} setState={setTenses} />
        </div>

        <div className='settings-section'>
          <h3>Subjects</h3>
          <button onClick={() => { setSubjects(toggleAll(subjects)) }}>Toggle All</button>
          <CheckboxSettings items={subjects} setState={setSubjects} />
        </div>
      </div>
    </>
  )
}

export default Settings;