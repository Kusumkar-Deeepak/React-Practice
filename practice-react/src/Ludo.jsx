import {useState} from 'react'
function Ludo(){
  const [moves,setMoves] = useState({blue : 0,red: 0,yellow: 0, black : 0})

  const incCount = () => {
    
  }
  return(
    <>
    <p>Game Begins</p>
    <div className="board">
      <p>Blue Moves {moves.blue}</p>
      <button style={{backgroundColor: "blue"}}>+1</button>
      <p>Red Moves {moves.red}</p>
      <button style={{backgroundColor: "red"}}>+1</button>
      <p>Yellow Moves {moves.yellow}</p>
      <button style={{backgroundColor: "yellow"}}>+1</button>
      <p>Black Moves {moves.black}</p>
      <button style={{backgroundColor: "black"}}>+1</button>
    </div>
    </>
  )
}

export default Ludo