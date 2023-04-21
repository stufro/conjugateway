function SpecialCharacter({ character, input, inputRef, setInput }) {
  const handleSpecialCharacter = (character) => {
    setInput(input + character)
    inputRef.current.focus()
  }

  return (
    <div key={character} className="special-character" onClick={() => handleSpecialCharacter(character)}>
      {character}
    </div>
  )
}

export default SpecialCharacter