import { useState, useRef, useEffect } from 'react'
import Die from "./Die"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = useState(() => generateAllNewDice())
  const buttonRef = useRef(null)

  const gameWon = dice.every(die => die.isHeld) 
    && dice.every(die => die.value === dice[0].value)

  useEffect(() => {
    if(gameWon) {
      buttonRef.current.focus()
    }
  }, [gameWon])

  function generateAllNewDice() {
    return new Array(10)
        .fill(0)
        .map(() => ({
          id: nanoid(),
          value: Math.ceil(Math.random() * 6),
          isHeld: false
        }))
  }

  const diceEl = dice.map(dieObject => (
    <Die 
      key={dieObject.id} 
      value={dieObject.value} 
      isHeld={dieObject.isHeld}
      hold={() => hold(dieObject.id)}
      id={dieObject.id}
    />))

  function rollDice() {
    setDice(prevState => prevState.map(item => {
      return item.isHeld === false ? {...item, value: Math.ceil(Math.random() * 6)} : item
    }))
  }

  function initNewGame() {
    setDice(generateAllNewDice ())
  }

  function hold(id) {
    console.log(`holding die ${id}`)
    setDice(prevState => prevState.map(item => {
      return item.id === id ? {...item, isHeld: !item.isHeld} : item
    })) 
  }

  return (
    <main>
        {gameWon && <Confetti />}
        <div aria-live="polite" className='sr-only'>
          {gameWon && <p>Congratulation! You won the game. Press "New Game" to start again</p> }
        </div>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {diceEl}
        </div>

        <button 
          ref={buttonRef}
          className="rollDice" 
          onClick={gameWon? initNewGame : rollDice}
        >{gameWon ? "New Game":  "Roll"}</button>
    </main>
  )
}

export default App
