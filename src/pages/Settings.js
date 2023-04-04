function Settings({ setOpenGame }) {
  return (
    <>
      <h2>Game Settings</h2>
      <h2><button className="primary-button" onClick={setOpenGame}>Start!</button></h2>
    </>
  )
}

export default Settings;